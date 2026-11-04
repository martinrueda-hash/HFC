"""Build one PDF summary per period (all companies) from dashboard/competitors-data.js.

Usage:  python3 tools/build_quarter_summaries.py
Writes reports/summaries/<period>_summary.pdf, linked from the dashboard's "Quarterly overview".
Needs Node.js with Playwright (Chromium) installed; rerun after changing competitors-data.js.
"""
import html
import json
import re
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_JS = ROOT / "dashboard" / "competitors-data.js"
OUT = ROOT / "reports" / "summaries"


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


def name(c):
    return e(c["name"]) + ("*" if c.get("fyNote") else "")


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
            f'<p class="m">{note} The outlined column is {lab(p)}.</p></div>')


def page(D, p):
    label = D.get("periodLabels", {}).get(p, p)
    cos = D["companies"]
    peer = ""
    for c in cos:
        r = D["results"].get(c["id"], {}).get(p)
        if not r or r.get("pending"):
            peer += f'<tr><td>{name(c)}</td><td class="m" colspan="7">{e(r["report"]) if r else "no report for this period"}</td></tr>'
            continue
        rc = r.get("revChg")
        if rc is None and r.get("rev") and r.get("revPy"):
            rc = (r["rev"] / r["revPy"] - 1) * 100
        peer += (f'<tr class="{"self" if c.get("self") else ""}"><td>{name(c)}</td><td>{e(r["report"])}</td><td>{num(r.get("rev")) + " " + c["ccy"] if r.get("rev") is not None else "–"}</td>'
                 f'<td>{pct(rc)}</td><td>{pct(r.get("org"))}</td><td>{"–" if r.get("mgn") is None else f"{r["mgn"]:.1f}%"}</td>'
                 f'<td>{bps(r)}</td><td class="m">{e(r.get("mgnLbl", ""))}</td></tr>')
    grids = grid(D, p, "org") + grid(D, p, "mgn")
    blocks = ""
    for c in cos:
        r = D["results"].get(c["id"], {}).get(p)
        if not r or r.get("pending"):
            continue
        rc = r.get("revChg") if r.get("revChg") is not None else ((r["rev"] / r["revPy"] - 1) * 100 if r.get("rev") and r.get("revPy") else None)
        kp = [f"Revenue <b>{num(r.get('rev'))}</b> {c['ccy']} m ({pct(rc)} reported)" if r.get("rev") is not None else "Revenue not reported in this update",
              f"{e(r.get('orgLbl', 'Organic growth'))} <b>{pct(r.get('org'))}</b>"]
        if r.get("mgn") is not None:
            kp.append(f"{e(r.get('mgnLbl', 'Margin'))} <b>{r['mgn']:.1f}%</b> {bps(r)}")
        for k in ("eps", "cash", "orders"):
            if r.get(k):
                kp.append(f"{e(r[k]['l'])} <b>{e(r[k]['v'])}</b>" + (f" ({e(r[k].get('c', ''))})" if r[k].get("c") else ""))
        segs = seg_rows(r)
        blocks += (f'<div class="co"><h3>{name(c)} · {e(r["report"])}</h3><p class="kp">{" · ".join(kp)}</p>'
                   + (f'<table class="seg"><tr><th>Segment / region</th><th>Revenue</th><th>Reported</th><th>Organic</th><th>Margin (prior year)</th><th>Comment</th></tr>{segs}</table>' if segs else "")
                   + (f'<p><b>Segment growth:</b> {e(r.get("segNote") or r.get("note"))}</p>' if (r.get("segNote") or r.get("note")) else "")
                   + (f'<p><b>Outlook:</b> {e(r["guide"])}</p>' if r.get("guide") else "")
                   + f'<p class="src">Source: {" · ".join(e(s[0]) for s in r.get("src", []))}</p></div>')
    CL = {"perf": "Performance", "ma": "M&A", "other": "Operations, innovation, partnerships, production"}
    others, empty = "", []
    for o in sorted(D.get("others", []), key=lambda x: (-x["rel"], x["name"])):
        its = [i for i in o["items"] if i["q"] == p]
        if not its:
            empty.append(f'{e(o["name"])} ({o["rel"]})')
            continue
        lis = "".join(f'<li><b>{CL[i["c"]]}:</b> {e(i["t"])} <span class="src">[{" · ".join(e(s[0]) for s in i["src"])}]</span></li>' for i in sorted(its, key=lambda i: list(CL).index(i["c"])))
        others += (f'<div class="co"><h3>{e(o["name"])}{"*" if o.get("fyNote") else ""} · relevance {o["rel"]}/5 ({ {5: "very high", 4: "high", 3: "moderate", 2: "low", 1: "very low"}[o["rel"]] })</h3>'
                   f'<p class="kp m">{e(o["own"])} · revenue {e(o["rev"])} · FTEs {e(o["fte"])}</p><ul style="margin:2pt 0 0 12pt;padding:0">{lis}</ul></div>')
    others += f'<p class="m">No dated public information found for this period: {", ".join(empty) or "–"}.</p>' if empty else ""
    fy = " ".join(f"* {e(c['fyNote'])}" for c in cos if c.get("fyNote"))
    fy += " " + " ".join(f"* {e(o['name'])}: {e(o['fyNote'])}" for o in D.get("others", []) if o.get("fyNote"))
    return f"""<!doctype html><html><head><meta charset="utf-8"><title>Competitor watch {e(label)}</title><style>
body{{font:9.5pt/1.4 Helvetica,Arial,sans-serif;color:#333;margin:0}} h1{{color:#ce0e2d;font-size:18pt;margin:0 0 2pt}} h2{{color:#ce0e2d;font-size:12pt;margin:14pt 0 4pt}}
h3{{font-size:10.5pt;margin:0 0 3pt;color:#191919}} table{{border-collapse:collapse;width:100%}} th{{text-align:left;color:#ce0e2d;border-bottom:1.2pt solid #ce0e2d;padding:3pt 4pt;font-size:8.5pt}}
td{{padding:2.5pt 4pt;border-bottom:.5pt solid #e4e4e4;vertical-align:top}} tr.self td{{background:#fcf1f1;font-weight:bold}} .m{{color:#8c8c8c}} .nt{{color:#666;font-size:8pt}}
tr.sec td{{color:#ce0e2d;font-weight:bold;font-size:8pt;text-transform:uppercase;border-bottom:none;padding-top:6pt}} tr.sub td:first-child{{padding-left:12pt;font-style:italic}}
.co{{break-inside:avoid;border-top:1.5pt solid #ce0e2d;padding-top:6pt;margin-top:10pt}} .kp{{margin:0 0 4pt}} .src{{color:#8c8c8c;font-size:8pt}} p{{margin:3pt 0}}
.foot{{color:#666;font-size:8pt;margin-top:10pt}}
table.grid td.g{{text-align:right;white-space:nowrap}} table.grid th{{text-align:right}} table.grid th:first-child,table.grid th:last-child{{text-align:left}}
td.up{{background:#e5f1e8}} td.dn{{background:#fbe3e3}} td.na{{color:#b0b0b0}} td small{{color:#666;font-size:7pt}}
table.grid .sel{{border-left:1.5pt solid #ce0e2d;border-right:1.5pt solid #ce0e2d}} table.grid th.sel{{border-top:1.5pt solid #ce0e2d}} table.grid td.sel.last{{border-bottom:1.5pt solid #ce0e2d}}
table.grid tr.self td{{background:#fcf1f1}} table.grid tr.self td.up{{background:#d9ecdf}} table.grid tr.self td.dn{{background:#f7d5d5}}
</style></head><body>
<h1>Competitor watch · {e(label)}</h1><p class="m">Aalberts and listed peers · figures in each company's reporting currency, millions unless stated · data as of {e(D["asOf"])}</p>
<h2>Peer comparison</h2><table><tr><th>Company</th><th>Report</th><th>Revenue</th><th>Reported</th><th>Organic</th><th>Margin</th><th>Change</th><th>Margin measure</th></tr>{peer}</table>
{grids}
<h2>Company detail</h2>{blocks}
<h2>Other key competitors (relevance to HFC 1–5)</h2>{others}
<p class="foot">{fy} For half-year reporters Q2 = H1; FY 2025 = full-year results. Organic growth as each company defines it (Belimo: local currencies; Emerson: underlying; Pentair: core).</p>
</body></html>"""


def main():
    D = load()
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


if __name__ == "__main__":
    main()
