# HFC Market Intelligence Dashboard

A self-contained dashboard for HFC's country portfolio, styled after the EU WT strategy deck (red/grey palette, "topic | subject" titles, red takeaway banners). Open `dashboard/index.html` in a browser; no build step, server or internet connection is needed (only the Montserrat font, a stand-in for Gotham, loads from Google Fonts, with a system-font fallback).

> The figures in `dashboard/data.js` are **illustrative sample data**. Replace them with your own before using the dashboard for decisions.

## What it shows

1. **Portfolio matrix: market attractiveness vs. ability to win**, one bubble per country (bubble size = market size). Two diagonal lines split it into three zones, following the country prioritization slide of the EU WT strategy deck:
   - **Leadership position**: attractive market and strong position. Accelerate and defend the lead.
   - **Priority growth**: good potential, position still to build. Invest to gain share.
   - **Selective investment**: lower attractiveness or weak position. Invest selectively, protect margin.
2. **Market vs. HFC positioning**: countries grouped by matrix zone (with a subtotal per zone, largest market first), each split by end market (Residential / Non-residential, which includes multi-residential):
   - **Market**: size (last year, e.g. 2025), CAGR over the last 5 years, growth this year, projected CAGR over the next 5 years. Market growth is construction work done (Oxford Economics); each figure shows the combined rate with the renovation (R) and new build (NB) rates underneath.
   - **HFC**: sales (last year, e.g. 2025), CAGR over the last 5 years, projected growth this year, business-plan CAGR over the next 5 years, each with the gap to the market in percentage points.
   - **HFC market share** this year and its change versus last year.

The end-market toggle (Total / Residential / Non-residential) drives the headline figures, the matrix and the table together. Clicking a bubble or a country chip highlights that country in the table.

## How the matrix is scored

Both axes run from 1 to 5. A country's zone is set by attractiveness + ability to win (2 to 10): 7 or more is leadership position, 5.5 or more is priority growth, below that is selective investment. The thresholds are in `HFC_CONFIG.zones`.

| Axis | Criterion | Source | Default weight |
|---|---|---|---|
| Attractiveness | Market size | data, log scale, relative to the portfolio | 30 |
| | Market growth, next 5 yrs | data, relative to the portfolio | 30 |
| | Profitability | 1–5 score | 20 |
| | Competitive intensity (5 = benign) | 1–5 score | 20 |
| Ability to win | HFC market share | data, relative to the portfolio | 45 |
| | Channel access | 1–5 score | 30 |
| | Product fit | 1–5 score | 25 |

Default weights are set in `HFC_CONFIG.weights` in `dashboard/data.js`. Weights and zone thresholds can also be adjusted on the page under "Scoring method and weights"; on-page changes are stored in that browser only.

Country totals weight market figures by market size and HFC figures by HFC sales (market size × share). Renovation and new build rates are weighted by their own market size (`reno_share`). The renovation / new build columns and `hfc_sales` are optional in a CSV import; without `hfc_sales`, HFC sales are taken as market size × last year's share.

## Updating the data

- **For everyone:** edit `dashboard/data.js`. One row per country and end market; the column meanings are documented at the top of the file. Set `currentYear` there; all column headers (e.g. "CAGR 2020–2025", "2026E", "2026–2031") follow from it.
- **Quick test in your own browser:** in the "Update the figures" section, paste a CSV or load a `.csv` file (comma, semicolon or tab separated; the header line must match the one shown). "Copy current data as CSV" gives you a template you can fill in Excel.
