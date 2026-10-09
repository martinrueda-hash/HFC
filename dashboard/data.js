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
 *   market_size            Market size, last year (base year, e.g. 2025), EUR m
 *   hfc_sales              HFC sales, last year (base year), EUR m. Optional: if empty, market_size x ms_py
 *   mkt_cagr_hist          Market CAGR, last 5 years
 *   mkt_growth_cy          Market growth, current year (estimate)
 *   mkt_cagr_fwd           Market CAGR projection, next 5 years
 *   hfc_cagr_hist          HFC sales CAGR, last 5 years
 *   hfc_growth_cy          HFC projected growth, current year
 *   hfc_cagr_bp            HFC business-plan CAGR, next 5 years
 *   ms_cy                  HFC market share, current year
 *   ms_py                  HFC market share, last year
 *
 * Market split by construction type (market growth = construction work done, Oxford Economics):
 *   reno_share             Renovation share of the market, % (the rest is new build)
 *   mkt_reno_cagr_hist     Renovation CAGR, last 5 years
 *   mkt_reno_growth_cy     Renovation growth, current year
 *   mkt_reno_cagr_fwd      Renovation CAGR projection, next 5 years
 *   mkt_nb_cagr_hist       New build CAGR, last 5 years
 *   mkt_nb_growth_cy       New build growth, current year
 *   mkt_nb_cagr_fwd        New build CAGR projection, next 5 years
 *
 * Qualitative scores for the attractiveness / ability-to-win matrix, 1 (weak) to 5 (strong):
 *   profitability          Price level and margin potential of the market
 *   competitive_intensity  5 = benign competition, 1 = very fierce
 *   channel_access         HFC access to distributors, installers, specifiers
 *   product_fit            Fit of the HFC range with local norms and demand
 */
window.HFC_CONFIG = {
  company: "HFC",
  currentYear: 2026,
  currency: "EUR m",
  // Weights used to build the two matrix axes (they are normalised, so any scale works).
  weights: {
    attractiveness: { market_size: 30, reno_growth: 15, nb_growth: 15, profitability: 20, competitive_intensity: 20 },
    ability: { market_share: 45, channel_access: 30, product_fit: 25 }
  },
  // Diagonal zone lines on the matrix: a country's zone is set by attractiveness + ability to win (each 1-5, so 2-10).
  zones: { leadership: 7, priority_growth: 5.5 }
};

window.HFC_DATA = [
  // country, code, segment, market size 2025, HFC sales 2025, mkt hist, mkt cy, mkt fwd, hfc hist, hfc cy, hfc bp, ms cy, ms py, prof, comp, channel, fit,
  //   reno share, reno hist, reno cy, reno fwd, new build hist, new build cy, new build fwd
  ["France",         "FR",  "Residential",      820, 147,  2.1, -1.5, 1.8,  4.5,  1.0,  3.5, 18.5, 17.9, 4, 3, 4, 4, 65, 2.0,  0.2, 1.8,  2.3,  -4.7,  1.8],
  ["France",         "FR",  "Non-residential",  610,  84,  1.4,  0.5, 2.2,  3.0,  2.5,  4.0, 14.2, 13.8, 3, 3, 4, 4, 52, 1.6,  1.1, 2.0,  1.2,  -0.2,  2.4],
  ["Germany",        "DE",  "Residential",     1150,  68,  1.2, -3.0, 1.5,  2.0, -2.0,  3.0,  6.1,  5.9, 3, 2, 3, 3, 65, 1.5, -0.6, 1.6,  0.6,  -7.5,  1.3],
  ["Germany",        "DE",  "Non-residential",  940,  38,  1.8,  0.8, 2.5,  5.5,  4.0,  6.0,  4.3,  4.0, 3, 2, 3, 4, 52, 1.8,  1.3, 2.1,  1.8,   0.3,  2.9],
  ["United Kingdom", "UK",  "Residential",      700,  23,  0.5, -0.8, 2.0, -1.0,  1.5,  2.5,  3.2,  3.3, 3, 2, 2, 3, 65, 1.1,  0.5, 1.9, -0.6,  -3.2,  2.2],
  ["United Kingdom", "UK",  "Non-residential",  560,  15,  1.0,  1.2, 2.8,  2.0,  3.0,  4.5,  2.8,  2.7, 3, 2, 3, 3, 52, 1.4,  1.5, 2.3,  0.6,   0.9,  3.3],
  ["Spain",          "ES",  "Residential",      430,  40,  3.8,  2.5, 3.2,  7.5,  6.0,  8.0,  9.8,  9.2, 3, 3, 3, 4, 65, 2.8,  2.1, 2.5,  5.7,   3.2,  4.5],
  ["Spain",          "ES",  "Non-residential",  310,  22,  3.0,  3.5, 3.6,  6.0,  7.0,  7.5,  7.5,  7.1, 3, 3, 2, 4, 52, 2.4,  2.6, 2.7,  3.7,   4.5,  4.6],
  ["Italy",          "IT",  "Residential",      520,  55,  2.5, -4.5, 0.8,  3.0, -3.0,  2.0, 11.0, 10.6, 3, 3, 4, 3, 65, 2.1, -1.4, 1.3,  3.2, -10.3, -0.1],
  ["Italy",          "IT",  "Non-residential",  380,  36,  1.5,  1.0, 1.6,  2.5,  1.5,  2.5,  9.5,  9.4, 3, 3, 3, 3, 52, 1.6,  1.4, 1.7,  1.4,   0.6,  1.5],
  ["Benelux",        "BNL", "Residential",      360,  57,  1.8,  1.0, 2.0,  3.5,  2.0,  3.0, 16.0, 15.8, 4, 3, 5, 4, 65, 1.8,  1.4, 1.9,  1.8,   0.3,  2.2],
  ["Benelux",        "BNL", "Non-residential",  290,  39,  2.0,  1.5, 2.3,  3.0,  2.5,  3.5, 13.5, 13.4, 4, 3, 4, 4, 52, 1.9,  1.6, 2.0,  2.1,   1.4,  2.6],
  ["Poland",         "PL",  "Residential",      340,  16,  5.5,  4.0, 4.8,  9.0,  8.5, 10.0,  5.0,  4.7, 3, 3, 2, 4, 65, 3.6,  2.9, 3.3,  9.0,   6.0,  7.6],
  ["Poland",         "PL",  "Non-residential",  260,   9,  4.5,  5.0, 5.2,  6.0,  7.5,  9.0,  3.8,  3.6, 3, 3, 2, 3, 52, 3.1,  3.4, 3.5,  6.0,   6.7,  7.0],
  ["Nordics",        "NOR", "Residential",      410,  29, -0.5, -2.0, 2.4,  1.0,  0.0,  3.5,  7.2,  7.1, 3, 2, 3, 3, 65, 0.7, -0.1, 2.1, -2.7,  -5.5,  3.0],
  ["Nordics",        "NOR", "Non-residential",  300,  16,  0.8,  0.5, 2.2,  2.0,  1.0,  3.0,  5.5,  5.5, 3, 2, 3, 3, 52, 1.3,  1.1, 2.0,  0.3,  -0.2,  2.4],
  ["Switzerland",    "CH",  "Residential",      210,  25,  1.5,  1.0, 1.4,  2.5,  1.5,  2.0, 12.0, 11.9, 5, 4, 4, 4, 65, 1.6,  1.4, 1.6,  1.3,   0.3,  1.0],
  ["Switzerland",    "CH",  "Non-residential",  170,  17,  1.2,  0.8, 1.3,  1.0,  0.5,  1.5, 10.0, 10.1, 5, 4, 4, 4, 52, 1.5,  1.3, 1.6,  0.9,   0.3,  1.0],
  ["Portugal",       "PT",  "Residential",      140,  11,  4.2,  3.0, 3.0,  6.5,  5.0,  5.0,  8.0,  7.6, 3, 3, 3, 4, 65, 3.0,  2.4, 2.4,  6.4,   4.1,  4.1],
  ["Portugal",       "PT",  "Non-residential",   95,   6,  3.0,  2.5, 2.8,  4.0,  3.0,  4.0,  6.0,  5.9, 3, 3, 3, 3, 52, 2.4,  2.1, 2.3,  3.7,   2.9,  3.3]
];
