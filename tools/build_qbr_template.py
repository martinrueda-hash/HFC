"""Build the QBR/SBR slide template used by the dashboard's quarterly market outlook.

Usage:  python3 tools/build_qbr_template.py [path/to/QBR_deck.pptx]
Default deck: templates/qbr/HFC_QBR3_Strategy_2.pptx

From the deck it keeps the two market slides ("market outlook | growth outlook" and
"Market environment EMEA | HFC performance in key countries") and replaces every figure with a
marker, so the dashboard can fill them for any quarter and export a .pptx that keeps the deck's
exact layout (world map, fonts, column widths, arrows, footers).

Outputs
  dashboard/qbr_template.js         template .pptx (base64) + overlay geometry for the page preview
  dashboard/assets/qbr_bg_growth.png  slide backgrounds with the figures removed (preview)
  dashboard/assets/qbr_bg_emea.png

Markers in the template XML
  {{v:id}}  a run whose text and style (colour, yellow highlight, underline) the dashboard sets
  {{t:id}}  plain text substituted inside a run (years, source lines)
  {{x:id}}  a whole shape inserted by the dashboard (variation chips, arrows)
"""
import base64
import io
import json
import re
import shutil
import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DECK = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "templates" / "qbr" / "HFC_QBR3_Strategy_2.pptx"
OUT_JS = ROOT / "dashboard" / "qbr_template.js"
ASSETS = ROOT / "dashboard" / "assets"
SKILL = Path("/root/.claude/skills/synced/5fcebf03-96cf-4809-b7a9-ff902b742290_01a62f13-fd01-408e-85d2-c58ad8da6102/pptx/scripts")
SLIDE_GROWTH, SLIDE_EMEA = 4, 6     # slide numbers in the deck
EMU_W, EMU_H = 12192000, 6858000

# ---------------------------------------------------------------- XML helpers
def find_shape(xml, name, tag="p:sp"):
    """(start, end) of the shape element <tag> whose cNvPr has this name."""
    i = xml.index(f'name="{name}"')
    a = xml.rfind(f"<{tag}>", 0, i)
    depth, pos = 0, a
    for m in re.finditer(rf"<{tag}>|</{tag}>", xml[a:]):
        depth += 1 if m.group(0) == f"<{tag}>" else -1
        if depth == 0:
            return a, a + m.end()
    raise ValueError(name)

def shapes(xml, tag="p:sp"):
    """Top-level-or-nested shapes of a tag, as (name, start, end)."""
    out = []
    for m in re.finditer(rf'<{tag}><p:nv\w+Pr><p:cNvPr id="\d+" name="([^"]*)"', xml):
        a, b = find_shape(xml[m.start():], m.group(1), tag)
        out.append((m.group(1), m.start() + a, m.start() + b))
    return out

def xfrm(x):
    m = re.search(r'<a:off x="(-?\d+)" y="(-?\d+)"/><a:ext cx="(\d+)" cy="(\d+)"/>', x)
    return tuple(int(v) for v in m.groups()) if m else None

def paragraphs(x):
    return re.findall(r"<a:p>.*?</a:p>", x, re.S)

def first_rpr(p):
    m = re.search(r"<a:r>(<a:rPr(?:[^>]*/>|[^>]*>.*?</a:rPr>))", p, re.S)
    if m:
        return m.group(1)
    m = re.search(r"<a:endParaRPr([^>]*?)(/>|>(.*?)</a:endParaRPr>)", p, re.S)
    if m:
        return "<a:rPr" + m.group(1) + ("/>" if m.group(2) == "/>" else ">" + m.group(3) + "</a:rPr>")
    return '<a:rPr lang="en-GB"/>'

def para_ppr(p):
    m = re.search(r"<a:pPr(?:[^>]*/>|[^>]*>.*?</a:pPr>)", p, re.S)
    return m.group(0) if m else ""

def para_text(p):
    return "".join(re.findall(r"<a:t>([^<]*)</a:t>", p))

def make_para(p, runs):
    """Rebuild paragraph p with runs [(text, rPr or None)] using p's pPr and first run style."""
    rpr = first_rpr(p)
    body = "".join(f"<a:r>{r or rpr}<a:t>{t}</a:t></a:r>" for t, r in runs)
    return f"<a:p>{para_ppr(p)}{body}</a:p>"

def set_paragraphs(shape_xml, new_paras):
    tb = re.search(r"(<p:txBody>.*?<a:lstStyle/>|<p:txBody>.*?</a:lstStyle>|<p:txBody>.*?<a:bodyPr[^>]*/>)(.*)(</p:txBody>)", shape_xml, re.S)
    head = tb.group(1)
    return shape_xml[:tb.start()] + head + "".join(new_paras) + tb.group(3) + shape_xml[tb.end():]

def para_spec(p, tokens_text=None):
    """Preview description of a paragraph: alignment and its runs (text, size, bold, colour)."""
    algn = (re.search(r'<a:pPr[^>]*algn="(\w+)"', p) or [None, "l"])[1]
    runs = []
    for r in re.findall(r"<a:r>(.*?)</a:r>", p, re.S):
        t = "".join(re.findall(r"<a:t>([^<]*)</a:t>", r))
        sz = re.search(r'sz="(\d+)"', r)
        col = re.search(r'<a:solidFill><a:srgbClr val="([0-9A-Fa-f]{6})"', r)
        runs.append({"t": t.replace("&amp;", "&"), "sz": int(sz.group(1)) / 100 if sz else None, "b": 'b="1"' in r.split("<a:t>")[0],
                     "c": col.group(1) if col else None, "base": 'baseline="30000"' in r})
    return {"algn": algn, "runs": runs}

# ---------------------------------------------------------------- deck → two-slide template
work = Path(tempfile.mkdtemp())
un = work / "un"
with zipfile.ZipFile(DECK) as z:
    z.extractall(un)
pres = (un / "ppt/presentation.xml").read_text()
rels = (un / "ppt/_rels/presentation.xml.rels").read_text()
rid_of = {re.search(r'Target="slides/slide(\d+)\.xml"', m).group(1): re.search(r'Id="(rId\d+)"', m).group(1)
          for m in re.findall(r"<Relationship [^>]*/>", rels) if "slides/slide" in m}
keep = {rid_of[str(SLIDE_GROWTH)], rid_of[str(SLIDE_EMEA)]}
pres = re.sub(r'<p:sldId [^>]*r:id="(rId\d+)"/>', lambda m: m.group(0) if m.group(1) in keep else "", pres)
pres = re.sub(r"<p:custShowLst>.*?</p:custShowLst>", "", pres, flags=re.S)
(un / "ppt/presentation.xml").write_text(pres)
subprocess.run([sys.executable, str(SKILL / "clean.py"), str(un)], check=True, capture_output=True)

def layout_ph_xfrm(slide_file, idx=None, typ=None):
    rel = (un / f"ppt/slides/_rels/{slide_file}.rels").read_text()
    lay = re.search(r'Target="\.\./slideLayouts/(slideLayout\d+\.xml)"', rel).group(1)
    for src in (un / "ppt/slideLayouts" / lay, ):
        x = src.read_text()
        for sp in re.findall(r"<p:sp>.*?</p:sp>", x, re.S):
            ph = re.search(r"<p:ph([^>]*)/>", sp)
            if not ph:
                continue
            if (idx is not None and f'idx="{idx}"' in ph.group(1)) or (typ and f'type="{typ}"' in ph.group(1)):
                f = xfrm(sp)
                if f:
                    return f
    return None

spec = {"slideW": EMU_W, "slideH": EMU_H, "slides": {}}

def box(rect, paras, anchor="t", ins=(91440, 45720, 91440, 45720)):
    x, y, w, h = rect
    return {"x": x / EMU_W, "y": y / EMU_H, "w": w / EMU_W, "h": h / EMU_H, "anchor": anchor,
            "ins": [ins[0] / EMU_W, ins[1] / EMU_H, ins[2] / EMU_W, ins[3] / EMU_H], "paras": paras}

def body_ins(sp):
    bp = re.search(r"<a:bodyPr([^>]*)", sp).group(1)
    g = lambda k, d: int(re.search(rf'{k}="(\d+)"', bp).group(1)) if re.search(rf'{k}="(\d+)"', bp) else d
    anchor = (re.search(r'anchor="(\w+)"', bp) or [None, "t"])[1]
    return anchor, (g("lIns", 91440), g("tIns", 45720), g("rIns", 91440), g("bIns", 45720))

# ---------------------------------------------------------------- slide: growth outlook
slides = sorted((un / "ppt/slides").glob("slide*.xml"), key=lambda p: int(re.search(r"\d+", p.stem).group()))
f_growth, f_emea = slides[0], slides[1]
s = f_growth.read_text()
boxes, xshapes = [], []

# the numbers group: children are in group coordinates
ga, gb = find_shape(s, "Group 779", "p:grpSp")
grp = s[ga:gb]
gx = re.search(r'<a:off x="(\d+)" y="(\d+)"/><a:ext cx="(\d+)" cy="(\d+)"/><a:chOff x="(\d+)" y="(\d+)"/><a:chExt cx="(\d+)" cy="(\d+)"/>', grp)
ox, oy, ex, ey, cx0, cy0, chx, chy = map(int, gx.groups())
to_slide = lambda r: (round(ox + (r[0] - cx0) * ex / chx), round(oy + (r[1] - cy0) * ey / chy), round(r[2] * ex / chx), round(r[3] * ey / chy))

headers = {}   # country column header boxes (child coords)
for name, a, b in shapes(grp):
    t = para_text(grp[a:b]).strip()
    for c in ("USA", "Germany", "France", "Netherlands", "Europe", "China"):
        if t.startswith(c):
            headers[c] = xfrm(grp[a:b])
COLS = {"USA": "us", "Germany": "de", "France": "fr", "Netherlands": "nl", "Europe": "eu", "China": "cn"}
ROWS_Y = {}
row_names = ["res", "res_new", "res_reno", "non", "non_new", "non_reno"]
num_shapes = []
for name, a, b in shapes(grp):
    sp = grp[a:b]
    t = para_text(sp).strip()
    if re.fullmatch(r"-?\d+(\.\d+)?", t):
        num_shapes.append((name, xfrm(sp)))
ys = sorted({r[1] for _, r in num_shapes})
# rows: group the y positions (one row may be offset by a few EMU)
row_y = []
for y in ys:
    if not row_y or y - row_y[-1][-1] > 60000:
        row_y.append([y])
    else:
        row_y[-1].append(y)
assert len(row_y) == 6, row_y
row_of = {y: row_names[i] for i, grp_y in enumerate(row_y) for y in grp_y}
slot_of = {}
for name, r in num_shapes:
    mid = r[0] + r[2] / 2
    col = next(c for c, h in headers.items() if h[0] <= mid <= h[0] + h[2])
    slot_of[name] = (COLS[col], row_of[r[1]], r)
# within a (column,row), order by x → 0 = ’Y-1 A, 1 = ’Y E, 2 = CAGR
by_cell = {}
for name, (col, row, r) in slot_of.items():
    by_cell.setdefault((col, row), []).append((r[0], name))
new_grp = grp
for (col, row), lst in by_cell.items():
    for k, (_, name) in enumerate(sorted(lst)):
        a, b = find_shape(new_grp, name)
        sp = new_grp[a:b]
        p = paragraphs(sp)[0]
        vid = f"go:{col}:{row}:{k if len(lst) == 3 else ['0', '1', '2'][k]}"
        anchor, ins = body_ins(sp)
        boxes.append({"id": vid, **box(to_slide(xfrm(sp)), [para_spec(p)], anchor, ins)})
        new_grp = new_grp[:a] + set_paragraphs(sp, [make_para(p, [("{{v:" + vid + "}}", None)])]) + new_grp[b:]
# column headers: country + year labels
for c, key in COLS.items():
    name = next(n for n, a, b in shapes(new_grp) if para_text(new_grp[a:b]).strip().startswith(c))
    a, b = find_shape(new_grp, name)
    sp = new_grp[a:b]
    ps = paragraphs(sp)
    yrs = [para_text(p) for p in ps]
    new_ps = []
    for p, t in zip(ps, yrs):
        t2 = t.replace("’25A", "{{t:yA}}").replace("’26E", "{{t:yE}}").replace("’25-’30", "{{t:yC}}")
        new_ps.append(make_para(p, [(t2, None)]) if t2 != t or "{{" in t2 else p)
    if len(ps) == 1:   # "Europe ’25A ’26E ’25-’30" sits in one paragraph
        t = yrs[0]
        new_ps = [make_para(ps[0], [(t.replace("’25A", "{{t:yA}}").replace("’26E", "{{t:yE}}").replace("’25-’30", "{{t:yC}}"), None)])]
    sp2 = set_paragraphs(sp, new_ps)
    anchor, ins = body_ins(sp)
    boxes.append({"id": "hdr:" + key, **box(to_slide(xfrm(sp)), [para_spec(p) for p in paragraphs(sp2)], anchor, ins)})
    new_grp = new_grp[:a] + sp2 + new_grp[b:]
s = s[:ga] + new_grp + s[gb:]

def replace_shape(s, name, fn, tag="p:sp"):
    a, b = find_shape(s, name, tag)
    return s[:a] + fn(s[a:b]) + s[b:]

def mark_text_shape(s, name, para_runs, bid, rect=None):
    """Replace a shape's paragraphs: para_runs = list of run lists per paragraph [(text, rPr|None)]."""
    a, b = find_shape(s, name)
    sp = s[a:b]
    ps = paragraphs(sp)
    new_ps = [make_para(ps[min(i, len(ps) - 1)], runs) for i, runs in enumerate(para_runs)]
    sp2 = set_paragraphs(sp, new_ps)
    anchor, ins = body_ins(sp)
    boxes.append({"id": bid, **box(rect or xfrm(sp), [para_spec(p) for p in paragraphs(sp2)], anchor, ins)})
    return s[:a] + sp2 + s[b:]

# revenue tags (red bars): yellow share + " of ’Y-1 revenue"
for name_i, (reg) in zip(("579", "580", "581"), ("Americas", "Europe", "APAC")):
    nm = re.search(rf'<p:cNvPr id="{name_i}" name="([^"]*)"', s).group(1)
    a = s.index(f'<p:cNvPr id="{name_i}"'); a = s.rfind("<p:sp>", 0, a); b = s.index("</p:sp>", a) + 7
    sp = s[a:b]
    p = paragraphs(sp)[0]
    sp2 = set_paragraphs(sp, [make_para(p, [("{{v:rev:" + reg + "}}", None), (" of {{t:yP}} revenue", None)])])
    anchor, ins = body_ins(sp)
    boxes.append({"id": "rev:" + reg, **box(xfrm(sp), [para_spec(p) for p in paragraphs(sp2)], anchor, ins)})
    s = s[:a] + sp2 + s[b:]
s = mark_text_shape(s, "Rectangle 626", [[("{{t:subtitle}}", None)]], "subtitle")
s = mark_text_shape(s, "TextBox 1071", [[("{{v:go:us:dodge_total:1}}", None)]], "dodge_total")
s = mark_text_shape(s, "TextBox 1072", [[("{{v:go:us:dodge_non:1}}", None)]], "dodge_non")
banner = re.search(r'name="(red bar takeaway)"[^>]*>(?:(?!</p:sp>).)*Global positive', s, re.S)
a = s.rfind("<p:sp>", 0, s.index("Global positive")); b = s.index("</p:sp>", a) + 7
sp = s[a:b]; p = paragraphs(sp)[0]
sp2 = set_paragraphs(sp, [make_para(p, [("{{v:banner:growth}}", None)])])
anchor, ins = body_ins(sp)
boxes.append({"id": "banner", **box(xfrm(sp), [para_spec(q) for q in paragraphs(sp2)], anchor, ins)})
s = s[:a] + sp2 + s[b:]
# source placeholder (position from the layout)
a, b = find_shape(s, "Text Placeholder 7")
sp = s[a:b]; ps = paragraphs(sp)
idx = re.search(r'<p:ph[^>]*idx="(\d+)"', sp).group(1)
rect = xfrm(sp) or layout_ph_xfrm(f_growth.name, idx=idx)
sp2 = set_paragraphs(sp, [make_para(ps[0], [("{{t:src}}", None)]), make_para(ps[1], [("{{t:notes}}", None)])])
anchor, ins = body_ins(sp)
boxes.append({"id": "src", **box(rect, [dict(para_spec(q), sz=8) for q in paragraphs(sp2)], anchor, ins), "srcSz": 8})
s = s[:a] + sp2 + s[b:]
# hand-drawn ovals around values: annotations of the original deck, removed
for i in (976, 977, 978, 979, 980, 981):
    a = s.index(f'<p:cNvPr id="{i}" '); a = s.rfind("<p:sp>", 0, a); b = s.index("</p:sp>", a) + 7
    s = s[:a] + s[b:]
# variation chips: legend groups give the five looks; each chip becomes an inserted shape
legend = {"sp": "Group 983", "p": "Group 985", "n": "Group 1008", "ng": "Group 990", "sn": "Group 1007"}
chip_xml = {}
for k, nm in legend.items():
    a, b = find_shape(s, nm, "p:grpSp")
    g = s[a:b]
    g = re.sub(r'<a:off x="\d+" y="\d+"/>', '<a:off x="{{X}}" y="{{Y}}"/>', g, count=1)
    ids = sorted(set(re.findall(r'<p:cNvPr id="(\d+)"', g)), key=int)
    for j, i in enumerate(ids):
        g = g.replace(f'<p:cNvPr id="{i}" ', f'<p:cNvPr id="{{{{ID{j}}}}}" ')
    g = re.sub(r'<a16:creationId [^>]*/>', "", g)
    chip_xml[k] = g
chip_cols = [("us", 0), ("de", 1), ("fr", 2), ("nl", 3), ("eu", 4), ("cn", 5)]
col_mid = {COLS[c]: to_slide(h)[0] + to_slide(h)[2] / 2 for c, h in headers.items()}
chip_slots = []
for nm in ("Group 19", "Group 22", "Group 25", "Group 28", "Group 37", "Group 40", "Group 43", "Group 46", "Group 49", "Group 52", "Group 1012", "Group 1058"):
    a, b = find_shape(s, nm, "p:grpSp")
    r = xfrm(s[a:b])
    chip_slots.append([r[0], r[1], r[2], r[3]])
    s = s[:a] + "{{x:chip:%d}}" % len(chip_slots[:-1]) + s[b:]
# assign each chip slot to (column, E or CAGR) by x
chips = []
for i, (x, y, w, h) in enumerate(chip_slots):
    col = min(col_mid, key=lambda c: abs(col_mid[c] - (x + w / 2)))
    chips.append({"i": i, "col": col, "x": x, "y": y, "w": w, "h": h})
for c in set(ch["col"] for ch in chips):
    lst = sorted([ch for ch in chips if ch["col"] == c], key=lambda ch: ch["x"])
    for k, ch in enumerate(lst):
        ch["k"] = 1 + k      # 1 = ’Y E, 2 = CAGR
f_growth.write_text(s)
spec["slides"]["growth"] = {"file": f"ppt/slides/{f_growth.name}", "boxes": boxes, "chips": chips, "chipXml": chip_xml}

# ---------------------------------------------------------------- slide: EMEA performance
s = f_emea.read_text()
boxes = []
EMEA = ["Germany", "France", "Netherlands", "United Kingdom", "Belgium", "Poland", "Nordics"]
a, b = find_shape(s, "Table 14", "p:graphicFrame")
tbl = s[a:b]
fx, fy, fw, fh = xfrm(tbl)
cols = [int(w) for w in re.findall(r'<a:gridCol w="(\d+)"', tbl)]
rows = list(re.finditer(r'<a:tr h="(\d+)">(.*?)</a:tr>', tbl, re.S))
heights = [int(r.group(1)) for r in rows]
keys = ["m1", "fy", "m2", "ytd", "ytdp", "share", "cm"]
new_rows = []
for ri, r in enumerate(rows):
    cells = list(re.finditer(r"<a:tc(?: [^>]*)?>.*?</a:tc>", r.group(2), re.S))
    body = r.group(2)
    out = body
    for ci, c in reversed(list(enumerate(cells))):
        cx = c.group(0)
        ps = paragraphs(cx)
        if ri == 0:
            if "% of total rev" in cx:
                t = para_text(ps[0])
                p2 = make_para(ps[0], [(re.sub(r"‘\d\d|'\d\d|’\d\d", "‘{{t:yS}}", t), None)])
                cx2 = cx.replace(ps[0], p2)
                rect = (fx + sum(cols[:ci]), fy, cols[ci], heights[0])
                anchor = (re.search(r'<a:tcPr[^>]*anchor="(\w+)"', cx) or [None, "t"])[1]
                boxes.append({"id": "hdr:yS", **box(rect, [para_spec(p2)], anchor, (91440, 45720, 91440, 45720))})
                out = out[:c.start()] + cx2 + out[c.end():]
            continue
        vid = f"em:{EMEA[ri - 1]}:{keys[ci]}"
        cx2 = cx
        for p in ps[1:]:
            cx2 = cx2.replace(p, "")
        cx2 = cx2.replace(ps[0], make_para(ps[0], [("{{v:" + vid + "}}", None)]))
        rect = (fx + sum(cols[:ci]), fy + sum(heights[:ri]), cols[ci], heights[ri])
        anchor = (re.search(r'<a:tcPr[^>]*anchor="(\w+)"', cx) or [None, "t"])[1]
        boxes.append({"id": vid, **box(rect, [para_spec(ps[0])], anchor, (91440, 45720, 91440, 45720))})
        out = out[:c.start()] + cx2 + out[c.end():]
    new_rows.append((r, out))
for r, out in reversed(new_rows):
    tbl = tbl[:r.start(2)] + out + tbl[r.end(2):]
s = s[:a] + tbl + s[b:]
spec_table = {"x": fx / EMU_W, "y": fy / EMU_H, "cols": [c / EMU_W for c in cols], "rows": [h / EMU_H for h in heights]}
# year headers "2025¹" "2026²"
for nm, tok in (("TextBox 12", "y1"), ("TextBox 79", "y2")):
    a, b = find_shape(s, nm)
    sp = s[a:b]
    p = paragraphs(sp)[0]
    runs = re.findall(r"<a:r>(.*?)</a:r>", p, re.S)
    new_runs = []
    for rr in runs:
        rpr = re.search(r"<a:rPr(?:[^>]*/>|[^>]*>.*?</a:rPr>)", rr, re.S).group(0)
        t = "".join(re.findall(r"<a:t>([^<]*)</a:t>", rr))
        if re.fullmatch(r"\d", t.strip()):
            continue    # footnote superscripts (¹ ²) are dropped
        new_runs.append((("{{t:" + tok + "}}") if re.fullmatch(r"\d{4}", t.strip()) else t, rpr))
    sp2 = set_paragraphs(sp, [make_para(p, new_runs)])
    anchor, ins = body_ins(sp)
    boxes.append({"id": "hdr:" + tok, **box(xfrm(sp), [para_spec(q) for q in paragraphs(sp2)], anchor, ins)})
    s = s[:a] + sp2 + s[b:]
# key takeaways: four bullets + priority
a, b = find_shape(s, "TextBox 120")
sp = s[a:b]
ps = paragraphs(sp)
new_ps, k = [], 0
for p in ps:
    t = para_text(p)
    if not t.strip():
        new_ps.append(p)
    elif t.startswith("Priority"):
        rpr = first_rpr(p)
        rpr_plain = re.sub(r' b="1"', ' b="0"', rpr)
        new_ps.append(make_para(p, [("Priority: ", rpr), ("{{v:kt:priority}}", rpr_plain)]))
    else:
        k += 1
        new_ps.append(make_para(p, [("{{v:kt:%d}}" % k, None)]))
sp2 = set_paragraphs(sp, new_ps)
anchor, ins = body_ins(sp)
boxes.append({"id": "kt", **box(xfrm(sp), [para_spec(q) for q in paragraphs(sp2)], anchor, ins)})
s = s[:a] + sp2 + s[b:]
# source + notes placeholder
a, b = find_shape(s, "Text Placeholder 29")
sp = s[a:b]; ps = paragraphs(sp)
sp2 = set_paragraphs(sp, [make_para(ps[0], [("{{t:src}}", None)]), make_para(ps[1], [("{{t:notes}}", None)])])
anchor, ins = body_ins(sp)
boxes.append({"id": "src", **box(xfrm(sp), [dict(para_spec(q), sz=8) for q in paragraphs(sp2)], anchor, ins), "srcSz": 8})
s = s[:a] + sp2 + s[b:]
# arrows: one shape per (row, column) inserted by the dashboard
arrow_slots = []
arrow_xml = None
row_tops = [fy + sum(heights[:i]) for i in range(len(heights) + 1)]
a_list = [m.group(1) for m in re.finditer(r'name="(Arrow: Down \d+)"', s)]
for nm in a_list:
    a, b = find_shape(s, nm)
    sp = s[a:b]
    x, y, w, h = xfrm(sp)
    ri = next(i for i in range(1, len(heights)) if row_tops[i] <= y + h / 2 < row_tops[i + 1])
    col = "m1" if x < 2300000 else "fy" if x < 3500000 else "m2"
    arrow_slots.append({"row": EMEA[ri - 1], "col": col, "x": x, "y": y, "w": w, "h": h})
    if arrow_xml is None:
        t = re.sub(r'<p:cNvPr id="\d+" name="[^"]*">', '<p:cNvPr id="{{ID0}}" name="Arrow {{ID0}}">', sp)
        t = re.sub(r"<a:xfrm(?: rot=\"-?\d+\")?>", "<a:xfrm{{ROT}}>", t)
        t = re.sub(r'<a:off x="\d+" y="\d+"/>', '<a:off x="{{X}}" y="{{Y}}"/>', t)
        t = re.sub(r"<a:solidFill><a:srgbClr val=\"[0-9A-F]{6}\"/></a:solidFill>", "", t)
        t = t.replace("<a:ln><a:noFill/></a:ln>", '<a:solidFill><a:srgbClr val="{{FILL}}"/></a:solidFill><a:ln><a:noFill/></a:ln>', 1)
        t = re.sub(r'<a16:creationId [^>]*/>', "", t)
        arrow_xml = t
    s = s[:a] + "{{x:arrow:%s:%s}}" % (EMEA[ri - 1], col) + s[b:]
f_emea.write_text(s)
spec["slides"]["emea"] = {"file": f"ppt/slides/{f_emea.name}", "boxes": boxes, "arrows": arrow_slots, "arrowXml": arrow_xml, "table": spec_table}

# ---------------------------------------------------------------- package the template
tmpl = io.BytesIO()
with zipfile.ZipFile(tmpl, "w", zipfile.ZIP_DEFLATED) as z:
    ct = un / "[Content_Types].xml"
    z.write(ct, "[Content_Types].xml")
    for p in sorted(un.rglob("*")):
        if p.is_file() and p != ct:
            z.write(p, p.relative_to(un).as_posix())
tmpl_bytes = tmpl.getvalue()

# ---------------------------------------------------------------- preview backgrounds (figures removed)
blank = work / "blank"
shutil.copytree(un, blank)
for f, key in ((f_growth, "growth"), (f_emea, "emea")):
    x = (blank / "ppt/slides" / f.name).read_text()
    # empty every text box the preview draws itself, and drop inserted shapes
    x = re.sub(r"\{\{x:[^}]+\}\}", "", x)
    x = re.sub(r"<a:t>[^<]*\{\{[vt]:[^}]+\}\}[^<]*</a:t>", "<a:t></a:t>", x)
    (blank / "ppt/slides" / f.name).write_text(x)
# static text inside boxes the preview redraws (country names, "Priority:", " of ... revenue") also goes
for f in (f_growth, f_emea):
    x = (blank / "ppt/slides" / f.name).read_text()
    for name in ("TextBox 574", "TextBox 684", "TextBox 703", "TextBox 722", "TextBox 741", "TextBox 760", "TextBox 120", "TextBox 12", "TextBox 79"):
        if f'name="{name}"' in x:
            a, b = find_shape(x, name)
            x = x[:a] + re.sub(r"<a:t>[^<]*</a:t>", "<a:t></a:t>", x[a:b]) + x[b:]
    x = re.sub(r"<a:t> of  revenue</a:t>", "<a:t></a:t>", x)
    (blank / "ppt/slides" / f.name).write_text(x)
blank_pptx = work / "blank.pptx"
with zipfile.ZipFile(blank_pptx, "w", zipfile.ZIP_DEFLATED) as z:
    z.write(blank / "[Content_Types].xml", "[Content_Types].xml")
    for p in sorted(blank.rglob("*")):
        if p.is_file() and p.name != "[Content_Types].xml":
            z.write(p, p.relative_to(blank).as_posix())
subprocess.run([sys.executable, str(SKILL / "office/soffice.py"), "--headless", "--convert-to", "pdf", "--outdir", str(work), str(blank_pptx)],
               check=True, capture_output=True, timeout=300)
subprocess.run(["pdftoppm", "-png", "-scale-to-x", "1600", "-scale-to-y", "-1", str(work / "blank.pdf"), str(work / "bg")], check=True)
bgs = sorted(work.glob("bg-*.png"))
ASSETS.mkdir(parents=True, exist_ok=True)
shutil.copy(bgs[0], ASSETS / "qbr_bg_growth.png")
shutil.copy(bgs[1], ASSETS / "qbr_bg_emea.png")
spec["slides"]["growth"]["bg"] = "assets/qbr_bg_growth.png"
spec["slides"]["emea"]["bg"] = "assets/qbr_bg_emea.png"

OUT_JS.write_text(
    "/* QBR/SBR slide template for the quarterly market outlook.\n"
    f" * Generated by tools/build_qbr_template.py from {DECK.name}: slides {SLIDE_GROWTH} and {SLIDE_EMEA} with figures replaced by markers. */\n"
    "window.HFC_QBR_TEMPLATE = " + json.dumps(dict(spec, pptx=base64.b64encode(tmpl_bytes).decode()), separators=(",", ":")) + ";\n")
print(f"{OUT_JS} ({OUT_JS.stat().st_size // 1024} KB; template {len(tmpl_bytes) // 1024} KB), backgrounds in {ASSETS}")
shutil.rmtree(work, ignore_errors=True)
