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

## Quarter market outlook (QBR/SBR)

Between the funnel and the country prioritization, under the "Update the data" uploads, one report per quarter (Q1 2025 onwards) rebuilds the two market slides of the QBR deck, **in the deck's own format**:

- **market outlook | growth outlook** (world map): Oxford Economics work done by sector (residential¹ and commercial², each with new build and renovation) for the USA, Germany, France, the Netherlands, Europe and China, as ’Y-1 actual, ’Y estimate and the 5-year CAGR; Dodge total construction, residential¹ and commercial² growth for the US; and the variation vs. the previous report.
  - ¹ Residential = single family only (Oxford Economics single-family series, or residential total − multifamily when a release lacks it; Dodge key 18).
  - ² Commercial = commercial buildings + multifamily (Oxford Economics commercial + multifamily; Dodge: all building verticals except manufacturing (5) and single family (18), so streets, bridges, dams, sewers, water supply, power utility and other non-building (24+) are out). Dodge total construction = all verticals.
- **Market environment EMEA | HFC performance in key countries**: Oxford Economics market growth (residential¹ + commercial²) for Germany, France, the Netherlands, the UK, Belgium, Poland and the Nordics, with arrows, next to HFC figures.

Oxford Economics exports can be level values or **% change y/y** (read from the Measurement column): with % change, ’Y-1 A and ’Y E are the yearly changes as given and the CAGR compounds them; to add countries and series (Europe, Nordics, residential = total − multi family) the changes are chained onto the level data of another loaded release, so the weights stay right. Dodge shows ’Y-1 A, ’Y E and the 5-year CAGR. If the selected Oxford Economics release lacks a year or country (e.g. an export without the year before), it is taken from the other loaded releases and the report says so. **Refresh reports** (in "Update the data") rebuilds the reports from all loaded releases.

A quarter's report is active only when an Oxford Economics release dated in or before that quarter is available; otherwise the page says which data is missing. Dodge is optional (US cells are underlined without it). HFC figures are yellow and editable on the page (saved in the browser; click an HFC FY arrow to change it); data not available yet (US and China in Oxford Economics) and comments are underlined.

**Export to PowerPoint** fills the deck's real slides (`dashboard/qbr_template.js`, built from `templates/qbr/HFC_QBR3_Strategy_2.pptx` by `python3 tools/build_qbr_template.py`) and saves a .pptx that keeps the layout, fonts, world map, flags, arrows and footers. **Excel data bridge** saves a workbook that rebuilds every figure of both slides with live formulas: *OE data* (each Oxford Economics series used, per country, with its release and the levels calculated from % change), *Growth outlook* and *EMEA market* (segment levels → growth, next to the text printed on the slide), *Dodge* (verticals with segment flags → sums → growth) and *Read me* (method). The on-page preview draws the same figures over a background image of each slide.

The built-in releases come from `data/oxford-economics/` and `data/dodge/` (`python3 tools/build_market_releases.py` writes `dashboard/releases.js`). On the page, **Upload last Oxford Economics data** and **Upload Dodge data** add releases in the browser; an Oxford Economics upload also refreshes the dashboard's market growth. Dodge figures leave out the subtotal rows of the export, so totals are not double counted.

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
4. Save, then click **Upload Excel** under "SAM and HFC data: Excel template" in the dashboard's "Update the data" section. The dashboard reads the calculated **Dashboard data** sheet and the Settings sheet. Uploaded data is kept in that browser only.

Matrix weights and zone lines are not in the workbook: set them in the dashboard under "Scoring method and weights".

To change the default data for everyone: recalculate the workbook, run `python3 tools/sync_data_js.py` to regenerate `dashboard/data.js`, and commit. `tools/build_excel_template.py` rebuilds the template from scratch (sample rows and the Oxford Economics export in `data/oxford-economics/`).

The 5-year history (e.g. 2020–2025) needs the Oxford Economics export to include the start year. The renovation / new build split comes from the New and Renovation series; without them, the matrix uses total market growth and the table hides the split.

A CSV option is still available under "CSV option" on the page.
