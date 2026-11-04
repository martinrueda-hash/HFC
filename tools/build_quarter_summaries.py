"""Build one PDF summary per period (all companies) from dashboard/competitors-data.js.

Usage:  python3 tools/build_quarter_summaries.py
Writes reports/summaries/<period>_summary.pdf, linked from the dashboard's "Quarterly overview".
Needs Node.js with Playwright (Chromium) installed; rerun after changing competitors-data.js.
"""
import base64
import html
import json
import re
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_JS = ROOT / "dashboard" / "competitors-data.js"
OUT = ROOT / "reports" / "summaries"
LOGO = ROOT / "dashboard" / "assets" / "aalberts-logo-red.png"


def load():
    t = DATA_JS.read_text(encoding="utf-8")
    return json.loads(t[re.search(r"^window\.CW =", t, re.M).end():].strip().rstrip(";"))


e = lambda s: html.escape(str(s if s is not None else ""))


def num(v):
    if v is None:
        return "–"
    return f"{v:,.0f}" if abs(v) >= 1000 else f"{v:,.1f}"


def pct(v):
    return "–" if v is None else f"{'+' if v > 0 else '−' if v < 0 else ''}{abs(v):.1f}%"


def bps(r):
    ch = r.get("mgnChg")
    if ch is None and r.get("mgn") is not None and r.get("mgnPy") is not None:
        ch = round((r["mgn"] - r["mgnPy"]) * 100)
    return "" if ch is None else f"{'+' if ch > 0 else '−' if ch < 0 else ''}{abs(ch)} bps"


SUP = "⁰¹²³⁴⁵⁶⁷⁸⁹"


def mark(c):
    """Numbered footnote mark for listed companies with a note (Emerson ¹, Danfoss ²)."""
    if not c.get("fyNote"):
        return ""
    return SUP[[x["id"] for x in DATA["companies"] if x.get("fyNote")].index(c["id"]) + 1]


def name(c):
    return e(c["name"]) + mark(c)


def seg_rows(r):
    rows = ""
    for kind, segs in (("Segments", r.get("seg") or []), ("Regions", r.get("geo") or [])):
        if not segs:
            continue
        rows += f'<tr class="sec"><td colspan="6">{kind}</td></tr>'
        for s in segs:
            chg = s.get("chg")
            if chg is None and s.get("rev") and s.get("revPy"):
                chg = (s["rev"] / s["revPy"] - 1) * 100
            mp = s.get("mgnPy")
            rows += (f'<tr class="{"sub" if s.get("sub") else ""}"><td>{e(s["n"].replace("· ", ""))}</td><td>{num(s.get("rev"))}</td><td>{pct(chg)}</td>'
                     f'<td>{pct(s.get("org"))}</td><td>{"" if s.get("mgn") is None else f"{s["mgn"]:.1f}%"}'
                     f'{"" if mp is None else f" <span class=m>({mp:.1f}%)</span>"}</td><td class="nt">{e(s.get("note", ""))}</td></tr>')
    return rows


def cell_val(r, kind):
    """(value text, change text, css class) for one company-period in the growth or margin grid."""
    if not r or r.get("pending"):
        return ("due" if r else "–"), "", "na"
    if kind == "org":
        v = r.get("org")
        return pct(v), "", ("" if v is None else "up" if v > 0 else "dn" if v < 0 else "")
    v = r.get("mgn")
    if v is None:
        return "–", "", "na"
    ch = bps(r)
    return f"{v:.1f}%", ch, ("dn" if ch.startswith("−") else "up" if ch.startswith("+") else "")


def grid(D, p, kind):
    """Organic growth or reported margin by period for all companies, with the selected period outlined."""
    ps = D["periods"]
    lab = lambda q: e(D.get("periodLabels", {}).get(q, q))
    head = "".join(f'<th class="{"sel" if q == p else ""}">{lab(q)}</th>' for q in ps)
    rows = ""
    cos = D["companies"]
    for n, c in enumerate(cos):
        last = " last" if n == len(cos) - 1 else ""
        tds = ""
        for q in ps:
            v, ch, k = cell_val(D["results"].get(c["id"], {}).get(q), kind)
            tds += f'<td class="g {k}{" sel" if q == p else ""}{last}">{v}{f"<br><small>{ch}</small>" if ch else ""}</td>'
        meas = ""
        if kind == "mgn":
            labels = [D["results"].get(c["id"], {}).get(q, {}).get("mgnLbl") for q in ps]
            meas = f'<td class="nt">{e(next((l for l in reversed(labels) if l), ""))}</td>'
        rows += f'<tr class="{"self" if c.get("self") else ""}"><td>{name(c)}</td>{tds}{meas}</tr>'
    title = "Organic growth by quarter" if kind == "org" else "Reported margin by quarter"
    note = ("Organic growth as each company defines it. Green / red = growth / decline." if kind == "org" else
            "Each company's own margin measure (last column), so levels are not like-for-like. Change versus the same period last year in bps; green / red = margin up / down.")
    return (f'<div style="break-inside:avoid"><h2>{title}</h2><table class="grid"><tr><th>Company</th>{head}{"<th>Margin measure</th>" if kind == "mgn" else ""}</tr>{rows}</table>'
            f'<p class="m"><b>Notes:</b> {note[0].lower() + note[1:]} The outlined column is {lab(p)}.</p></div>')


def first_sentence(t, limit=300):
    """Shorten a finding to its first sentence (or clause) so the page stays one page."""
    t = str(t).strip()
    for m in re.finditer(r"(?<=[.;])\s+(?=[A-Z(])", t):
        word = t[:m.start()].rsplit(" ", 1)[-1].lower()
        if m.start() >= 40 and word not in ("adj.", "approx.", "incl.", "excl.", "vs.", "no.", "e.g.", "i.e.", "inc.", "co.", "corp.", "ltd.", "st."):
            t = t[:m.start()].rstrip(";")
            break
    if len(t) > limit:
        t = t[:limit].rsplit(" ", 1)[0].rstrip(",;:") + " …"
    return t


def qual_for(D, cid, p):
    """The company's key messages if they belong to period p (or, for the latest period, to its latest report)."""
    q = D.get("qual", {}).get(cid)
    if not q:
        return None
    if q["period"] == p:
        return q
    res = D["results"].get(cid, {}).get(p)
    if p == D["periods"][-1] and (not res or res.get("pending")):
        return q
    return None


def perf_line(c, r):
    rc = r.get("revChg")
    if rc is None and r.get("rev") and r.get("revPy"):
        rc = (r["rev"] / r["revPy"] - 1) * 100
    bits = []
    if r.get("rev") is not None:
        bits.append(f"revenue <b>{num(r['rev'])}</b> {c['ccy']} m ({pct(rc)})")
    if r.get("org") is not None:
        bits.append(f"organic <b>{pct(r['org'])}</b>")
    if r.get("mgn") is not None:
        bits.append(f"{e(r.get('mgnLbl', 'margin'))} <b>{r['mgn']:.1f}%</b> {bps(r)}")
    return ", ".join(bits)


def page(D, p, scale=1.0):
    label = D.get("periodLabels", {}).get(p, p)
    cos = D["companies"]
    peer = ""
    for c in cos:
        r = D["results"].get(c["id"], {}).get(p)
        if not r or r.get("pending"):
            peer += f'<tr class="{"due" if r else "norep"}"><td>{name(c)}</td><td class="m" colspan="7">{e(r["report"]) if r else "no report for this period"}</td></tr>'
            continue
        rc = r.get("revChg")
        if rc is None and r.get("rev") and r.get("revPy"):
            rc = (r["rev"] / r["revPy"] - 1) * 100
        peer += (f'<tr class="{"self" if c.get("self") else ""}"><td>{name(c)}</td><td>{e(r["report"])}</td><td class="r">{num(r.get("rev")) + " " + c["ccy"] if r.get("rev") is not None else "–"}</td>'
                 f'<td class="r">{pct(rc)}</td><td class="r">{pct(r.get("org"))}</td><td class="r">{"–" if r.get("mgn") is None else f"{r["mgn"]:.1f}%"}</td>'
                 f'<td class="r">{bps(r)}</td><td class="m">{e(r.get("mgnLbl", ""))}</td></tr>')
    grids = grid(D, p, "org") + grid(D, p, "mgn")

    # page 2: executive summary of the listed peers, one line per company per cluster
    clusters = {"perf": [], "ma": [], "other": []}
    srcs = []
    for c in cos:
        r = D["results"].get(c["id"], {}).get(p)
        q = qual_for(D, c["id"], p)
        tag = "" if not q or q["period"] == p else f' <span class="m">({e(D.get("periodLabels", {}).get(q["period"], q["period"]))} report)</span>'
        lead = f'<b class="co">{name(c)}</b>{tag}: '
        if r and not r.get("pending"):
            extra = first_sentence(q["perf"][1], 240) if q and len(q.get("perf", [])) > 1 else first_sentence(r.get("segNote") or "", 240)
            clusters["perf"].append(lead + perf_line(c, r) + (f". {e(extra)}" if extra else ""))
        elif q:
            clusters["perf"].append(lead + e(first_sentence(q["perf"][0])))
        if q:
            for k in ("ma", "other"):
                if q.get(k):
                    clusters[k].append(lead + e(first_sentence(q[k][0])))
            srcs.append(name(c))
    CT = {"perf": "1. Overall performance", "ma": "2. M&A moves", "other": "3. Operations, innovation and production"}
    exec_sum = "".join(f'<h3>{CT[k]}</h3><ul class="es">' + "".join(f"<li>{x}</li>" for x in v) + "</ul>"
                       + ("" if v else '<p class="m">Nothing captured for this period.</p>') for k, v in clusters.items())
    if not srcs:
        exec_sum += '<p class="m">M&amp;A and operations messages are captured for each company\'s latest report; for this period the summary shows the reported figures only.</p>'

    # page 3: private competitors, one row per company with findings in this period
    CL = {"perf": "Performance", "ma": "M&A", "other": "Operations"}
    REL = {5: "very high", 4: "high", 3: "moderate", 2: "low", 1: "very low"}
    rows, empty = "", []
    for o in sorted(D.get("others", []), key=lambda x: (-x["rel"], x["name"])):
        its = [i for i in o["items"] if i["q"] == p]
        if not its:
            empty.append(e(o["name"]))
            continue
        cells = ""
        for k in CL:
            ks = [i for i in its if i["c"] == k]
            cells += "<td>" + "<br>".join(e(first_sentence(i["t"], 320)) for i in ks[:2]) + "</td>"
        rows += f'<tr><td><b>{e(o["name"])}</b>{"*" if o.get("fyNote") else ""}<br><span class="m">{REL[o["rel"]]} ({o["rel"]}/5)</span></td>{cells}</tr>'
    priv = (f'<table class="pv"><tr><th style="width:17%">Company (relevance)</th><th>{CL["perf"]}</th><th>{CL["ma"]}</th><th>{CL["other"]}</th></tr>{rows}</table>'
            if rows else '<p class="m">No dated public information found for this period.</p>')
    priv += f'<p class="m">No dated public information found for this period: {", ".join(empty)}.</p>' if empty and rows else ""
    fy = " ".join(f"* {e(o['name'])}: {e(o['fyNote'])}" for o in D.get("others", []) if o.get("fyNote"))
    f = lambda pt: f"{pt * scale:.2f}pt"
    logo = '<img class="logo" alt="Aalberts" src="data:image/png;base64,' + base64.b64encode(LOGO.read_bytes()).decode() + '">' 
    return f"""<!doctype html><html><head><meta charset="utf-8"><title>Competitor watch {e(label)}</title><style>
body{{font:{f(8.6)}/1.32 Helvetica,Arial,sans-serif;color:#333;margin:0}} h1{{color:#ce0e2d;font-size:16pt;margin:0 0 1pt}} h2{{color:#ce0e2d;font-size:{f(11)};margin:{f(8)} 0 {f(3)}}}
h3{{font-size:{f(9.6)};margin:{f(7)} 0 {f(2)};color:#ce0e2d}} table{{border-collapse:collapse;width:100%}} th{{text-align:left;color:#ce0e2d;border-bottom:1.2pt solid #ce0e2d;padding:{f(2)} 3pt;font-size:{f(7.8)}}}
td{{padding:{f(1.6)} 3pt;border-bottom:.5pt solid #e4e4e4;vertical-align:top}} td.r{{text-align:right;white-space:nowrap}} tr.norep td{{background:#f3f3f3;color:#8c8c8c}} tr.due td.m{{font-style:italic}} tr.self td{{background:#fcf1f1;font-weight:bold}} .m{{color:#8c8c8c}} .nt{{color:#666;font-size:{f(7.2)}}}
p{{margin:{f(2)} 0}} .pg{{break-after:page;position:relative}} .logo{{position:absolute;top:0;right:0;height:26pt}} h1{{padding-right:60pt}} .pg:last-child{{break-after:auto}}
table.grid td.g{{text-align:right;white-space:nowrap}} table.grid th{{text-align:right}} table.grid th:first-child,table.grid th:last-child{{text-align:left}}
td.up{{background:#e5f1e8}} td.dn{{background:#fbe3e3}} td.na{{color:#b0b0b0}} td small{{color:#666;font-size:{f(6.6)}}}
table.grid .sel{{border-left:1.5pt solid #ce0e2d;border-right:1.5pt solid #ce0e2d}} table.grid th.sel{{border-top:1.5pt solid #ce0e2d}} table.grid td.sel.last{{border-bottom:1.5pt solid #ce0e2d}}
table.grid tr.self td{{background:#fcf1f1}} table.grid tr.self td.up{{background:#d9ecdf}} table.grid tr.self td.dn{{background:#f7d5d5}}
ul.es{{margin:0;padding:0 0 0 11pt}} ul.es li{{margin:0 0 {f(2.2)}}} b.co{{color:#191919}}
table.pv td{{font-size:{f(7.6)}}} .foot{{color:#666;font-size:{f(7)};margin-top:{f(6)}}}
</style></head><body>
<div class="pg">{logo}<h1>Competitor watch · {e(label)}</h1><p class="m">Aalberts and listed peers · figures in each company's reporting currency, millions unless stated · data as of {e(D["asOf"])}</p>
<h2>Peer comparison: listed companies</h2><table><tr><th>Company</th><th>Report</th><th style="text-align:right">Revenue</th><th style="text-align:right">Reported</th><th style="text-align:right">Organic</th><th style="text-align:right">Margin</th><th style="text-align:right">Change</th><th>Margin measure</th></tr>{peer}</table>
{grids}<p class="foot"><b>Notes:</b> {" ".join(f"{mark(c)} {e(c['fyNote'])}" for c in cos if c.get("fyNote"))}</p></div>
<div class="pg">{logo}<h1>Key messages: listed companies · {e(label)}</h1><p class="m">Executive summary of the main messages per company, in three clusters.</p>{exec_sum}<p class="foot"><b>Sources:</b> each company's report for the period (see the dashboard's report library).</p></div>
<div class="pg">{logo}<h1>Other key competitors · {e(label)}</h1><p class="m">Private companies and divisions, by relevance to HFC; dated public information for this period (press releases, trade press, filings).</p>{priv}
{f'<p class="foot"><b>Notes:</b> {fy}</p>' if fy.strip() else ""}</div>
</body></html>"""


def pages(pdf):
    return len(re.findall(rb"/Type\s*/Page[^s]", Path(pdf).read_bytes()))


def main():
    global DATA
    D = DATA = load()
    OUT.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as tmp:
        jobs = []
        for p in D["periods"]:
            src = Path(tmp) / (p.replace(" ", "-") + ".html")
            src.write_text(page(D, p), encoding="utf-8")
            jobs.append([str(src), str(OUT / (p.replace(" ", "-") + "_summary.pdf"))])
        js = ("const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage();"
              "for(const [s,o] of JSON.parse(process.argv[1])){await p.goto('file://'+s);"
              "await p.pdf({path:o,format:'A4',printBackground:true,margin:{top:'14mm',bottom:'14mm',left:'12mm',right:'12mm'},"
              "displayHeaderFooter:true,headerTemplate:'<span></span>',footerTemplate:'<div style=\"font-size:7pt;color:#999;width:100%;text-align:center\"><span class=pageNumber></span> / <span class=totalPages></span></div>'});"
              "console.log(o);}await b.close();})();")
        subprocess.run(["node", "-e", js, json.dumps(jobs)], check=True)
        # keep each summary to three pages: shrink the type for periods that run over
        for p, (src, out) in zip(D["periods"], jobs):
            for scale in (0.93, 0.86, 0.8):
                if pages(out) <= 3:
                    break
                Path(src).write_text(page(D, p, scale), encoding="utf-8")
                subprocess.run(["node", "-e", js, json.dumps([[src, out]])], check=True, capture_output=True)
            print(p, pages(out), "pages")


if __name__ == "__main__":
    main()
