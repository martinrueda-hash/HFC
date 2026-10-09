# HFC Market Intelligence Dashboard

A self-contained dashboard for HFC's country portfolio. Open `dashboard/index.html` in a browser; no build step, server or internet connection is needed (only the fonts load from Google Fonts, with a system-font fallback).

> The figures in `dashboard/data.js` are **illustrative sample data**. Replace them with your own before using the dashboard for decisions.

## What it shows

1. **Portfolio matrix: market attractiveness vs. ability to win**, one bubble per country (bubble size = market size), split into four quadrants:
   - **Leadership position**: attractive market, strong HFC position. Defend and extend.
   - **Priority growth**: attractive market, weak position. Invest to build share.
   - **Selective investment**: less attractive market, strong position. Invest selectively, protect margin.
   - **Monitor**: less attractive market, weak position.
2. **Country dashboard**, per country and per end market (Residential / Non-residential, which includes multi-residential):
   - **Market**: size, CAGR over the last 5 years, growth this year, projected CAGR over the next 5 years.
   - **HFC**: CAGR over the last 5 years, projected growth this year, business-plan CAGR over the next 5 years, each with the gap to the market in percentage points.
   - **HFC market share** this year and its change versus last year.

The end-market toggle (Total / Residential / Non-residential) drives the headline figures, the matrix and the table together. Clicking a bubble or a country chip highlights that country in the table.

## How the matrix is scored

Both axes run from 1 to 5, and the quadrant split is at 3.

| Axis | Criterion | Source | Default weight |
|---|---|---|---|
| Attractiveness | Market size | data, log scale, relative to the portfolio | 30 |
| | Market growth, next 5 yrs | data, relative to the portfolio | 30 |
| | Profitability | 1–5 score | 20 |
| | Competitive intensity (5 = benign) | 1–5 score | 20 |
| Ability to win | HFC market share | data, relative to the portfolio | 35 |
| | Brand strength | 1–5 score | 20 |
| | Channel access | 1–5 score | 25 |
| | Product fit | 1–5 score | 20 |

Default weights are set in `HFC_CONFIG.weights` in `dashboard/data.js`. They can also be adjusted on the page under "Scoring method and weights"; on-page changes are stored in that browser only.

Country totals weight market figures by market size and HFC figures by HFC sales (market size × share).

## Updating the data

- **For everyone:** edit `dashboard/data.js`. One row per country and end market; the column meanings are documented at the top of the file. Set `currentYear` there; all column headers (e.g. "CAGR 2020–2025", "2026E", "2026–2031") follow from it.
- **Quick test in your own browser:** in the "Update the figures" section, paste a CSV or load a `.csv` file (comma, semicolon or tab separated; the header line must match the one shown). "Copy current data as CSV" gives you a template you can fill in Excel.
