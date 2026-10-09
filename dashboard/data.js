/*
 * HFC Market Intelligence — source data
 * ------------------------------------------------------------------
 * ILLUSTRATIVE SAMPLE FIGURES. Replace with your own numbers, either by
 * editing this file or with "Import CSV" on the dashboard page.
 *
 * One row = one country x one end market.
 *   segment: "Residential" or "Non-residential" (non-residential includes multi-residential)
 *
 * All growth figures and market shares are in % (3.2 means 3.2 %).
 *   market_size            Market size, current year, EUR m
 *   mkt_cagr_hist          Market CAGR, last 5 years
 *   mkt_growth_cy          Market growth, current year (estimate)
 *   mkt_cagr_fwd           Market CAGR projection, next 5 years
 *   hfc_cagr_hist          HFC sales CAGR, last 5 years
 *   hfc_growth_cy          HFC projected growth, current year
 *   hfc_cagr_bp            HFC business-plan CAGR, next 5 years
 *   ms_cy                  HFC market share, current year
 *   ms_py                  HFC market share, last year
 *
 * Qualitative scores for the attractiveness / ability-to-win matrix, 1 (weak) to 5 (strong):
 *   profitability          Price level and margin potential of the market
 *   competitive_intensity  5 = benign competition, 1 = very fierce
 *   brand_strength         HFC brand awareness and preference
 *   channel_access         HFC access to distributors, installers, specifiers
 *   product_fit            Fit of the HFC range with local norms and demand
 */
window.HFC_CONFIG = {
  company: "HFC",
  currentYear: 2026,
  currency: "EUR m",
  // Weights used to build the two matrix axes (they are normalised, so any scale works).
  weights: {
    attractiveness: { market_size: 30, market_growth: 30, profitability: 20, competitive_intensity: 20 },
    ability: { market_share: 35, brand_strength: 20, channel_access: 25, product_fit: 20 }
  }
};

window.HFC_DATA = [
  // country, code, segment, size, mkt hist, mkt cy, mkt fwd, hfc hist, hfc cy, hfc bp, ms cy, ms py, prof, comp, brand, channel, fit
  ["France",         "FR",  "Residential",     820, 2.1, -1.5, 1.8, 4.5,  1.0,  3.5, 18.5, 17.9, 4, 3, 5, 4, 4],
  ["France",         "FR",  "Non-residential", 610, 1.4,  0.5, 2.2, 3.0,  2.5,  4.0, 14.2, 13.8, 3, 3, 4, 4, 4],
  ["Germany",        "DE",  "Residential",    1150, 1.2, -3.0, 1.5, 2.0, -2.0,  3.0,  6.1,  5.9, 3, 2, 3, 3, 3],
  ["Germany",        "DE",  "Non-residential", 940, 1.8,  0.8, 2.5, 5.5,  4.0,  6.0,  4.3,  4.0, 3, 2, 3, 3, 4],
  ["United Kingdom", "UK",  "Residential",     700, 0.5, -0.8, 2.0, -1.0, 1.5,  2.5,  3.2,  3.3, 3, 2, 2, 2, 3],
  ["United Kingdom", "UK",  "Non-residential", 560, 1.0,  1.2, 2.8, 2.0,  3.0,  4.5,  2.8,  2.7, 3, 2, 2, 3, 3],
  ["Spain",          "ES",  "Residential",     430, 3.8,  2.5, 3.2, 7.5,  6.0,  8.0,  9.8,  9.2, 3, 3, 3, 3, 4],
  ["Spain",          "ES",  "Non-residential", 310, 3.0,  3.5, 3.6, 6.0,  7.0,  7.5,  7.5,  7.1, 3, 3, 3, 2, 4],
  ["Italy",          "IT",  "Residential",     520, 2.5, -4.5, 0.8, 3.0, -3.0,  2.0, 11.0, 10.6, 3, 3, 4, 4, 3],
  ["Italy",          "IT",  "Non-residential", 380, 1.5,  1.0, 1.6, 2.5,  1.5,  2.5,  9.5,  9.4, 3, 3, 4, 3, 3],
  ["Benelux",        "BNL", "Residential",     360, 1.8,  1.0, 2.0, 3.5,  2.0,  3.0, 16.0, 15.8, 4, 3, 4, 5, 4],
  ["Benelux",        "BNL", "Non-residential", 290, 2.0,  1.5, 2.3, 3.0,  2.5,  3.5, 13.5, 13.4, 4, 3, 4, 4, 4],
  ["Poland",         "PL",  "Residential",     340, 5.5,  4.0, 4.8, 9.0,  8.5, 10.0,  5.0,  4.7, 3, 3, 2, 2, 4],
  ["Poland",         "PL",  "Non-residential", 260, 4.5,  5.0, 5.2, 6.0,  7.5,  9.0,  3.8,  3.6, 3, 3, 2, 2, 3],
  ["Nordics",        "NOR", "Residential",     410, -0.5, -2.0, 2.4, 1.0, 0.0,  3.5,  7.2,  7.1, 3, 2, 3, 3, 3],
  ["Nordics",        "NOR", "Non-residential", 300, 0.8,  0.5, 2.2, 2.0,  1.0,  3.0,  5.5,  5.5, 3, 2, 3, 3, 3],
  ["Switzerland",    "CH",  "Residential",     210, 1.5,  1.0, 1.4, 2.5,  1.5,  2.0, 12.0, 11.9, 5, 4, 4, 4, 4],
  ["Switzerland",    "CH",  "Non-residential", 170, 1.2,  0.8, 1.3, 1.0,  0.5,  1.5, 10.0, 10.1, 5, 4, 4, 4, 4],
  ["Portugal",       "PT",  "Residential",     140, 4.2,  3.0, 3.0, 6.5,  5.0,  5.0,  8.0,  7.6, 3, 3, 3, 3, 4],
  ["Portugal",       "PT",  "Non-residential",  95, 3.0,  2.5, 2.8, 4.0,  3.0,  4.0,  6.0,  5.9, 3, 3, 3, 3, 3]
];
