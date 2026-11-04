"""Refresh the competitor dashboard's share prices and report library.

Usage:  python3 tools/fetch_competitor_data.py [--prices] [--reports]   (no flag = both)

--prices   daily closing prices since 1 Jan 2025 from Yahoo Finance, for every company in
           dashboard/competitors-data.js, written to dashboard/competitors-prices.js.
--reports  downloads every document listed under "docs" in dashboard/competitors-data.js into
           reports/<company>/ and writes the index the library uses (dashboard/competitors-reports.js).
           Files already on disk are kept; files above MAX_MB are skipped and stay link-only.
           Optional per document: "find" (regex) = "url" is a web page, download the first PDF link on it
           matching the regex; "pages" (e.g. "1-12,40-44") = keep only those pages (needs pypdf), for
           reports too big to store whole; "pages": "index" only prints each page's opening words to the log.

Runs from the GitHub Action .github/workflows/competitor-data.yml (scheduled and on demand), or locally.
Set SEC_USER_AGENT (e.g. "Your Name your@email") to identify yourself to sec.gov, as SEC asks.
"""
import datetime as dt
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_JS = ROOT / "dashboard" / "competitors-data.js"
PRICES_JS = ROOT / "dashboard" / "competitors-prices.js"
REPORTS_JS = ROOT / "dashboard" / "competitors-reports.js"
REPORTS_DIR = ROOT / "reports"
START = dt.date(2025, 1, 1)
MAX_MB = 40
BROWSER_UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"


def load_data():
    text = DATA_JS.read_text(encoding="utf-8")
    body = text[re.search(r"^window\.CW =", text, re.M).end():].strip().rstrip(";")
    return json.loads(body)


def get(url, ua=BROWSER_UA, tries=2):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": ua, "Accept": "*/*"})
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read(), r.headers.get("Content-Type", "")
        except Exception as e:  # network errors and HTTP errors alike: retry, then give up
            err = e
            time.sleep(2 ** (i + 1))
    raise err


def yahoo_closes(symbol):
    p1 = int(dt.datetime(START.year, START.month, START.day, tzinfo=dt.timezone.utc).timestamp())
    p2 = int(time.time())
    for host in ("query1", "query2"):
        url = f"https://{host}.finance.yahoo.com/v8/finance/chart/{urllib.parse.quote(symbol)}?period1={p1}&period2={p2}&interval=1d&events=split"
        try:
            raw, _ = get(url)
        except Exception as e:
            print(f"  {symbol} via {host}: {e}")
            continue
        res = json.loads(raw)["chart"]["result"][0]
        meta = res["meta"]
        ts = res.get("timestamp") or []
        closes = res["indicators"]["quote"][0]["close"]
        pts = []
        for t, c in zip(ts, closes):
            if c is None:
                continue
            d = dt.datetime.fromtimestamp(t + meta.get("gmtoffset", 0), dt.timezone.utc).date().isoformat()
            if pts and pts[-1][0] == d:
                pts[-1][1] = round(c, 4)
            else:
                pts.append([d, round(c, 4)])
        if pts:
            return {"symbol": symbol, "ccy": meta.get("currency"), "points": pts}
    return None


def yfinance_closes(symbol):
    try:
        import yfinance  # handles Yahoo's session cookie, which plain requests from CI often lack (HTTP 429)
    except ImportError:
        return None
    try:
        h = yfinance.Ticker(symbol).history(start=START.isoformat(), interval="1d", auto_adjust=False)
    except Exception as e:
        print(f"  {symbol} via yfinance: {e}")
        return None
    if h is None or h.empty:
        return None
    pts = [[i.date().isoformat(), round(float(c), 4)] for i, c in h["Close"].dropna().items()]
    try:
        ccy = yfinance.Ticker(symbol).fast_info.get("currency")
    except Exception:
        ccy = None
    return {"symbol": symbol, "ccy": ccy, "points": pts} if pts else None


def stooq_closes(symbol, ccy):
    url = f"https://stooq.com/q/d/l/?s={urllib.parse.quote(symbol)}&d1={START.strftime('%Y%m%d')}&i=d"
    try:
        raw, _ = get(url)
    except Exception as e:
        print(f"  {symbol} via stooq: {e}")
        return None
    rows = raw.decode("utf-8", "replace").strip().splitlines()
    if not rows or not rows[0].lower().startswith("date"):
        return None
    pts = [[r.split(",")[0], round(float(r.split(",")[4]), 4)] for r in rows[1:] if r.count(",") >= 4]
    return {"symbol": symbol, "ccy": ccy, "points": pts} if pts else None


def fetch_prices(data):
    out = {}
    for co in data["companies"]:
        got = None
        for sym in co.get("yahoo", []):  # unlisted companies have no ticker
            got = yfinance_closes(sym) or yahoo_closes(sym)
            if got:
                break
            time.sleep(1)
        for sym in co.get("stooq", []):
            if got:
                break
            got = stooq_closes(sym, co.get("quoteCcy"))
        if got:
            print(f"{co['name']}: {len(got['points'])} closes, last {got['points'][-1]}")
            out[co["id"]] = got
        else:
            print(f"{co['name']}: no price data")
    if not out:
        sys.exit("No price data fetched; leaving the existing file unchanged.")
    payload = {"updated": dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%d %H:%M UTC"), "source": "Yahoo Finance, daily close", "series": out}
    PRICES_JS.write_text("// Generated by tools/fetch_competitor_data.py --prices. Do not edit by hand.\nwindow.CW_PRICES = "
                         + json.dumps(payload, separators=(",", ":")) + ";\n", encoding="utf-8")


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def find_pdf(page_url, pattern, ua):
    """First link on a web page whose URL or link text matches the regex pattern."""
    raw, _ = get(page_url, ua=ua)
    html = raw.decode("utf-8", "replace")
    links = [(u, re.sub(r"<[^>]+>|\s+", " ", txt).strip())
             for u, txt in re.findall(r'<a\b[^>]*?href="([^"]+)"[^>]*>(.*?)</a>', html, re.S | re.I)]
    for u, txt in links:
        full = urllib.parse.urljoin(page_url, u.replace("&amp;", "&"))
        if re.search(pattern, full + " " + txt, re.I):
            return full
    for u, txt in links:  # help pick a better pattern next time
        if ".pdf" in u.lower() or "report" in (u + txt).lower():
            print(f"  candidate: {txt[:60]!r} -> {u}")
    raise RuntimeError(f"no link matching {pattern!r} on {page_url} ({len(links)} links)")


def keep_pages(raw, spec, label):
    """Return a PDF with only the pages in spec ("1-12,40"); spec "index" prints the page list instead."""
    import io
    from pypdf import PdfReader, PdfWriter
    rd = PdfReader(io.BytesIO(raw))
    if spec == "index":
        print(f"{label}: {len(rd.pages)} pages")
        for i, pg in enumerate(rd.pages, 1):
            txt = " ".join((pg.extract_text() or "").split())[:160]
            print(f"  p{i}: {txt}")
        return None
    wr = PdfWriter()
    for part in spec.split(","):
        a, _, b = part.partition("-")
        for i in range(int(a), int(b or a) + 1):
            if i <= len(rd.pages):
                wr.add_page(rd.pages[i - 1])
    out = io.BytesIO()
    wr.write(out)
    return out.getvalue()


TYPE_WORDS = (("annual", "Annual report"), ("10-k", "Annual report"), ("half", "Half-year report"), ("h1", "Half-year report"),
              ("semiannual", "Half-year report"), ("presentation", "Presentation"), ("deck", "Presentation"),
              ("trading", "Trading update"), ("10-q", "Quarterly report"), ("quarter", "Quarterly report"))


def uploaded_reports(data, index):
    """PDFs put straight into reports/<company>/ (e.g. with the library's upload button) that no docs entry lists.
    The file name gives the period and title: Q3-2026_q3-results.pdf -> Q3 2026, "Q3 results"; H1 = Q2, FY = Q4."""
    known = {d["file"] for d in data["docs"] if d.get("file")} | {v["path"] for v in index.values()}
    # copies already cited as sources of the results or key messages are not new uploads
    known |= {s[1] for res in data["results"].values() for r in res.values() for s in r.get("src", [])}
    known |= {s[1] for q in data.get("qual", {}).values() for s in q.get("src", [])}
    out = []
    for co in data["companies"]:
        folder = REPORTS_DIR / co["id"]
        for f in sorted(folder.glob("*.pdf")) if folder.exists() else []:
            rel = f.relative_to(ROOT).as_posix()
            if rel in known:
                continue
            m = re.match(r"(Q[1-4]|H1|H2|FY)[-_ ]?(20\d\d)[-_ ]*(.*)", f.stem, re.I)
            p, rest = "", f.stem
            if m:
                k = m.group(1).upper()
                p = f"{ {'H1': 'Q2', 'H2': 'Q4', 'FY': 'Q4'}.get(k, k)} {m.group(2)}"
                rest = m.group(3) or f.stem
            title = re.sub(r"[-_]+", " ", rest).strip().capitalize() or f.stem
            typ = next((t for w, t in TYPE_WORDS if w in f.stem.lower()), "Uploaded report")
            out.append({"co": co["id"], "p": p if p in data["periods"] else "", "type": typ, "title": title,
                        "url": "", "file": rel, "bytes": f.stat().st_size})
    return out


def fetch_reports(data):
    sec_ua = os.environ.get("SEC_USER_AGENT") or "HFC competitor dashboard hfc-dashboard@users.noreply.github.com"
    index = {}
    if REPORTS_JS.exists():
        t = REPORTS_JS.read_text(encoding="utf-8")
        index = json.loads(t[re.search(r"^window\.CW_REPORTS =", t, re.M).end():].strip().rstrip(";")).get("files", {})
    for d in data["docs"]:
        if d.get("file"):  # stored by hand (e.g. a PDF the user supplied); nothing to download
            continue
        url = d["url"]
        is_pdf = url.lower().split("?")[0].endswith(".pdf")
        base = f"{d['p'].replace(' ', '-')}_{slug(d['title'])}"
        folder = REPORTS_DIR / d["co"]
        existing = [p for p in folder.glob(base + ".*")] if folder.exists() else []
        if existing:
            index[url] = {"path": existing[0].relative_to(ROOT).as_posix(), "bytes": existing[0].stat().st_size}
            continue
        ua = sec_ua if "sec.gov" in url else BROWSER_UA
        try:
            src = find_pdf(url, d["find"], ua) if d.get("find") else url
            if src != url:
                print(f"{d['co']} {d['title']}: found {src}")
            raw, ctype = get(src, ua=ua)
            if d.get("pages"):
                print(f"{d['co']} {d['title']}: full file {len(raw) // 1048576} MB")
                raw = keep_pages(raw, d["pages"], f"{d['co']} {d['title']}")
                if raw is None:
                    continue
                ctype = "application/pdf"
        except Exception as e:
            print(f"skip {d['co']} {d['title']}: {e}")
            continue
        if len(raw) > MAX_MB * 1024 * 1024:
            print(f"skip {d['co']} {d['title']}: {len(raw) // 1048576} MB is above {MAX_MB} MB")
            continue
        pdf = is_pdf or "pdf" in ctype or raw[:5] == b"%PDF-"
        if not pdf:  # the library keeps PDFs only; web pages stay link-only
            print(f"skip {d['co']} {d['title']}: not a PDF ({ctype})")
            continue
        folder.mkdir(parents=True, exist_ok=True)
        path = folder / (base + (".pdf" if pdf else ".html"))
        path.write_bytes(raw)
        index[url] = {"path": path.relative_to(ROOT).as_posix(), "bytes": len(raw)}
        print(f"saved {path.relative_to(ROOT)} ({len(raw) // 1024} KB)")
        time.sleep(0.5)
    payload = {"updated": dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%d %H:%M UTC"), "files": index,
               "extra": uploaded_reports(data, index)}
    REPORTS_JS.write_text("// Generated by tools/fetch_competitor_data.py --reports. Do not edit by hand.\nwindow.CW_REPORTS = "
                          + json.dumps(payload, indent=1, sort_keys=True) + ";\n", encoding="utf-8")


if __name__ == "__main__":
    args = set(sys.argv[1:]) or {"--prices", "--reports"}
    data = load_data()
    if "--prices" in args:
        fetch_prices(data)
    if "--reports" in args:
        fetch_reports(data)
