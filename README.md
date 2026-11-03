# HFC Market Intelligence Dashboard

A self-contained dashboard for HFC's country portfolio, styled after the EU WT strategy deck (red/grey palette, "topic | subject" titles, red takeaway banners). Open `dashboard/index.html` in a browser; no build step, server or internet connection is needed (only the Montserrat font, a stand-in for Gotham, loads from Google Fonts, with a system-font fallback).

> SAM (including its split by application), HFC figures and scores in `dashboard/data.js` are **dummy data for testing**; growth rates and the total construction market come from Oxford Economics. Replace the dummy figures before using the dashboard for decisions.

## What it shows

1. **Portfolio matrix: market attractiveness vs. ability to win**, one bubble per country (bubble size = market size). Two diagonal lines split it into three zones, following the country prioritization slide of the EU WT strategy deck:
   - **Leadership position**: attractive market and strong position. Accelerate and defend the lead.
   - **Priority growth**: good potential, position still to build. Invest to gain share.
   - **Selective investment**: lower attractiveness or weak position. Invest selectively, protect margin.
2. **Headline figures**: a market funnel, total construction market (construction work done, Oxford Economics, US$) › TAM (spend on all HVAC and sanitary applications, EUR m) › SAM (the part of the TAM within HFC's current geographical and technology reach) › HFC sales, each with its share of the previous stage (HFC sales / SAM = market share) and 5-year CAGRs. Next to it, current performance and positioning: SAM growth, HFC growth and HFC market share this year. Matrix positions are shown only in the country prioritization section.
3. **Market vs. HFC positioning**: countries grouped by matrix zone (with a subtotal per zone, largest market first), one row per country in the Total view; the Residential and Commercial filters show each end market (Commercial = commercial + healthcare + multi-family):
   - **Market**: SAM (last year, e.g. 2025), CAGR over the last 5 years, growth this year, projected CAGR over the next 5 years. SAM growth is the growth of construction work done (Oxford Economics); each figure shows the combined rate with the renovation (R) and new build (NB) rates underneath.
   - **HFC**: sales (last year, e.g. 2025), CAGR over the last 5 years, projected growth this year, business-plan CAGR over the next 5 years, each with the gap to the market in percentage points.
   - **HFC market share** this year and its change versus last year, shown inside the HFC block.

Three filters, end market (Total / Residential / Commercial), application (All / Heating / Cooling / Sanitary) and geography (All / Europe / US), drive SAM, HFC figures, the matrix and the table. The total construction market always shows the full scope and does not follow the filters; TAM, SAM and HFC figures do. The United States rows are dummy data; the Oxford Economics export has no US series, so US market growth and total construction market are empty until US data is added. Clicking a bubble or a country chip highlights that country in the table.

## How the matrix is scored

Both axes run from 1 to 5. A country's zone is set by attractiveness + ability to win (2 to 10): 7 or more is leadership position, 5.5 or more is priority growth, below that is selective investment. The thresholds are in `HFC_CONFIG.zones`.

| Axis | Criterion | Source | Default weight |
|---|---|---|---|
| Attractiveness | Market size | data, log scale, relative to the portfolio | 30 |
| | Renovation market growth, next 5 yrs | data, relative to the portfolio | 15 |
| | New build market growth, next 5 yrs | data, relative to the portfolio | 15 |
| | Profitability | 1–5 score | 20 |
| | Competitive intensity (5 = benign) | 1–5 score | 20 |
| Ability to win | HFC market share | data, relative to the portfolio | 45 |
| | Channel access | 1–5 score | 30 |
| | Product fit | 1–5 score | 25 |

Default weights are set in `HFC_CONFIG.weights` in `dashboard/data.js`. Weights and zone thresholds can also be adjusted on the page under "Scoring method and weights"; on-page changes are stored in that browser only.

Country totals weight market figures by market size and HFC figures by HFC sales (market size × share). Renovation and new build rates are weighted by their own market size (`reno_share`). The renovation / new build columns and `hfc_sales` are optional in a CSV import; without `hfc_sales`, HFC sales are taken as market size × last year's share.

## Updating the data

Use the Excel template `templates/HFC_market_intelligence_template.xlsx`:

1. **Oxford Economics** sheet: paste the latest download (level values, header row in cell A6). Market growth for every country updates automatically. Residential = Residential total − Multi family; Commercial = Commercial + Healthcare + Multi family, each for New and Renovation. Commercial already includes offices, retail and hotels; the healthcare series are optional in Settings (the current export has none).
2. **Raw data** sheet: one row per country, end market and application (heating, cooling, sanitary). Fill in the SAM (EUR m), HFC sales and growth and the four qualitative scores (1–5). Market growth and the renovation / new build split are calculated.
3. **Settings**: company name, current year and the six Oxford Economics series names (New / Renovation for Residential total, Multi family and Commercial).
4. Save, then click **Upload Excel** in the dashboard's "Update the figures" section. The dashboard reads the calculated **Dashboard data** sheet and the Settings sheet. Uploaded data is kept in that browser only.

Matrix weights and zone lines are not in the workbook: set them in the dashboard under "Scoring method and weights".

To change the default data for everyone: recalculate the workbook, run `python3 tools/sync_data_js.py` to regenerate `dashboard/data.js`, and commit. `tools/build_excel_template.py` rebuilds the template from scratch (sample rows and the Oxford Economics export in `data/oxford-economics/`).

The 5-year history (e.g. 2020–2025) needs the Oxford Economics export to include the start year. The renovation / new build split comes from the New and Renovation series; without them, the matrix uses total market growth and the table hides the split.

A CSV option is still available under "CSV option" on the page.

## Competitor watch (`dashboard/competitors.html`)

A second dashboard that follows Aalberts' listed peers (IMI, Belimo, Xylem, Ecolab, Watts, Emerson, Pentair, Georg Fischer) for 2025–2026. Open `dashboard/competitors.html`, or use the *Competitor watch* button on the main dashboard.

1. **Market view**: share price of Aalberts and its peers, indexed to 100 (since Jan 2025, 2026 YTD, 12 months), with the next releases as banners on the right, a 2026–2027 reporting calendar and a performance table.
2. **Results by quarter**: pick a company and a calendar quarter (Q1 2025 – Q3 2026) to see revenue, organic growth, margin, EPS, cash flow, orders, segments and outlook, plus three key-message blocks from the latest report: overall performance and walk through the results, M&A moves, and operations / innovation / partnerships / production. A peer table and an organic-growth heat table compare all companies for that quarter.
3. **Report library**: every annual report, results release, presentation and filing used, with a link to the official source and to a copy stored in `reports/<company>/`.

Notes on the figures (in `dashboard/competitors-data.js`):
- Each company's own reporting currency and its own measures (Aalberts EBITA margin, Xylem adjusted EBITDA margin, Emerson adjusted segment EBITA margin and underlying growth, Belimo growth in local currencies, etc.).
- Half-year reporters (Aalberts, IMI, Belimo, Georg Fischer): Q2 shows the H1 report and Q4 the full-year report; Q1 and Q3 show trading updates where they exist. Emerson's quarters are shown as Emerson labels them (fiscal year ends 30 September, so Q1 = October–December).
- Figures marked ≈ are derived from reported growth rates, not reported as such. Figures were collected from releases and press coverage of them; check the linked source before quoting them.
- Watts (Q3) and Emerson (fiscal Q4) report on 4 Nov 2026; Xylem and Ecolab Q4 dates are estimates until announced.

Share prices and report copies come from the GitHub Action **Competitor data** (`.github/workflows/competitor-data.yml`), which runs `tools/fetch_competitor_data.py` on weekdays, when the data file changes, or on demand from the Actions tab. It fetches daily closes from Yahoo Finance into `dashboard/competitors-prices.js`, downloads any listed document not stored yet into `reports/`, and commits the result. You can also run it locally: `python3 tools/fetch_competitor_data.py`. To add a report, add a line to `docs` in `competitors-data.js`; to add a quarter, add an entry under `results` and the period to `periods`.
