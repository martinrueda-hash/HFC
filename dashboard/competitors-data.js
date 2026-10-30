// Competitor watch data. Strict JSON after "window.CW =", so tools/fetch_competitor_data.py can read it.
// Figures are in each company's reporting currency (millions unless stated). Calendar quarters: for Emerson
// (fiscal year ends 30 September) a calendar quarter maps to its fiscal quarter, e.g. Q3 2026 = fiscal Q4 2026.
// For half-year reporters, Q2 shows the H1 report and Q4 the full-year report; Q1 and Q3 show trading updates.
// "derived" lists figures calculated from reported growth rates and the current-year figure, not reported directly.
window.CW = {
  "asOf": "2026-10-30",
  "periods": ["Q1 2025", "Q2 2025", "Q3 2025", "Q4 2025", "Q1 2026", "Q2 2026", "Q3 2026"],
  "companies": [
    {"id": "aalberts", "name": "Aalberts", "self": true, "ccy": "EUR", "exch": "Euronext Amsterdam", "ticker": "AALB", "yahoo": ["AALB.AS"], "cadence": "Q1 and Q3 trading updates, H1 and FY results", "ir": "https://aalberts.com/investor", "color": "#ce0e2d"},
    {"id": "imi", "name": "IMI", "ccy": "GBP", "exch": "London", "ticker": "IMI", "yahoo": ["IMI.L"], "cadence": "Q1 and Q3 trading updates, H1 and FY results", "ir": "https://www.imiplc.com/en/investors/results-reports-presentations/", "color": "#2a78d6"},
    {"id": "belimo", "name": "Belimo", "ccy": "CHF", "exch": "SIX Swiss Exchange", "ticker": "BEAN", "yahoo": ["BEAN.SW"], "cadence": "H1 and FY results; FY sales published in January", "ir": "https://www.belimo.com/ch/en_GB/about/investor-relations", "color": "#eb6834"},
    {"id": "xylem", "name": "Xylem", "ccy": "USD", "exch": "NYSE", "ticker": "XYL", "yahoo": ["XYL"], "cadence": "Quarterly", "ir": "https://investors.xylem.com/", "color": "#1baf7a"},
    {"id": "ecolab", "name": "Ecolab", "ccy": "USD", "exch": "NYSE", "ticker": "ECL", "yahoo": ["ECL"], "cadence": "Quarterly", "ir": "https://investor.ecolab.com/", "color": "#eda100"},
    {"id": "watts", "name": "Watts", "ccy": "USD", "exch": "NYSE", "ticker": "WTS", "yahoo": ["WTS"], "cadence": "Quarterly", "ir": "https://investors.watts.com/", "color": "#e87ba4"},
    {"id": "emerson", "name": "Emerson", "ccy": "USD", "exch": "NYSE", "ticker": "EMR", "yahoo": ["EMR"], "cadence": "Quarterly, fiscal year ends 30 September", "ir": "https://ir.emerson.com/", "color": "#008300"},
    {"id": "gf", "name": "Georg Fischer", "ccy": "CHF", "exch": "SIX Swiss Exchange", "ticker": "GF", "yahoo": ["GF.SW", "FI-N.SW"], "cadence": "H1 and FY results", "ir": "https://www.georgfischer.com/en/investors/reports-and-presentations.html", "color": "#6250d6"}
  ],

  "calendar": [
    {"co": "aalberts", "date": "2026-02-26", "event": "FY 2025 results"},
    {"co": "aalberts", "date": "2026-05-01", "event": "Q1 2026 results"},
    {"co": "aalberts", "date": "2026-07-23", "event": "H1 2026 results"},
    {"co": "aalberts", "date": "2026-10-22", "event": "Q3 2026 results"},
    {"co": "aalberts", "date": "2027-02-23", "event": "FY 2026 results", "status": "confirmed"},
    {"co": "aalberts", "date": "2027-04-29", "event": "Q1 2027 results", "status": "confirmed"},
    {"co": "imi", "date": "2026-05-12", "event": "Q1 2026 trading update"},
    {"co": "imi", "date": "2026-07-31", "event": "H1 2026 results"},
    {"co": "imi", "date": "2026-10-29", "event": "Q3 2026 trading update"},
    {"co": "imi", "date": "2027-03-09", "event": "FY 2026 results", "status": "confirmed"},
    {"co": "belimo", "date": "2026-07-20", "event": "H1 2026 results"},
    {"co": "belimo", "date": "2027-01-18", "event": "FY 2026 sales", "status": "confirmed"},
    {"co": "belimo", "date": "2027-03-01", "event": "Annual report 2026", "status": "confirmed"},
    {"co": "xylem", "date": "2026-02-10", "event": "Q4 / FY 2025 results"},
    {"co": "xylem", "date": "2026-04-28", "event": "Q1 2026 results"},
    {"co": "xylem", "date": "2026-07-28", "event": "Q2 2026 results"},
    {"co": "xylem", "date": "2026-10-27", "event": "Q3 2026 results"},
    {"co": "xylem", "date": "2027-02-09", "event": "Q4 / FY 2026 results", "status": "estimated", "note": "Not announced yet; early February based on 2026 (10 Feb)"},
    {"co": "ecolab", "date": "2026-02-10", "event": "Q4 / FY 2025 results"},
    {"co": "ecolab", "date": "2026-04-28", "event": "Q1 2026 results"},
    {"co": "ecolab", "date": "2026-07-28", "event": "Q2 2026 results"},
    {"co": "ecolab", "date": "2026-10-27", "event": "Q3 2026 results"},
    {"co": "ecolab", "date": "2027-02-09", "event": "Q4 / FY 2026 results", "status": "estimated", "note": "Not announced yet; early February based on 2026 (10 Feb)"},
    {"co": "watts", "date": "2026-02-11", "event": "Q4 / FY 2025 results"},
    {"co": "watts", "date": "2026-05-06", "event": "Q1 2026 results"},
    {"co": "watts", "date": "2026-08-05", "event": "Q2 2026 results"},
    {"co": "watts", "date": "2026-11-04", "event": "Q3 2026 results", "status": "confirmed", "note": "After market close; call 5 Nov, 9:00 ET"},
    {"co": "emerson", "date": "2026-02-03", "event": "Fiscal Q1 2026 results"},
    {"co": "emerson", "date": "2026-05-05", "event": "Fiscal Q2 2026 results"},
    {"co": "emerson", "date": "2026-08-04", "event": "Fiscal Q3 2026 results"},
    {"co": "emerson", "date": "2026-11-04", "event": "Fiscal Q4 / FY 2026 results", "status": "confirmed", "note": "Before market open; call 8:30 ET"},
    {"co": "gf", "date": "2027-03-03", "event": "FY 2026 results and annual report", "status": "confirmed"},
    {"co": "gf", "date": "2027-07-16", "event": "H1 2027 results", "status": "confirmed"}
  ],

  "results": {
    "aalberts": {
      "Q1 2025": {"report": "Q1 2025 trading update", "rev": 778.3, "org": -3.3, "mgnLbl": "EBITA margin", "mgn": 13.6,
        "extra": [{"l": "EBITA", "v": "105.7"}],
        "src": [["Q1 2025 press release", "https://aalberts-website.s3.eu-west-1.amazonaws.com/media/App/Models/Download/000/000/536/attachment/original/1Q-2025-press%20release.pdf"]]},
      "Q2 2025": {"report": "H1 2025 results (6 months)", "date": "2025-07-24", "rev": 1557, "org": -3.2, "mgnLbl": "EBITA margin", "mgn": 13.5,
        "extra": [{"l": "EBITA", "v": "210"}],
        "guide": "Full-year EBITA margin outlook cut to 13–14%; no improvement in organic growth expected in H2.",
        "src": [["H1 2025 press release", "https://aalberts-website.s3.eu-west-1.amazonaws.com/media/App/Models/Download/000/000/555/attachment/original/1H2025.pdf"]]},
      "Q3 2025": {"report": "Q3 2025 trading update", "rev": 772.5, "org": -1.9, "mgnLbl": "EBITA margin", "mgn": 12.5,
        "extra": [{"l": "EBITA", "v": "96.3"}],
        "note": "Margin remained under pressure, especially in the building segment.",
        "src": [["Q3 2025 press release", "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/569/attachment/original/Q3%202025.pdf"]]},
      "Q4 2025": {"report": "FY 2025 results (12 months)", "date": "2026-02-26", "rev": 3091, "revChg": -1.8, "org": -2.5, "mgnLbl": "EBITA margin", "mgn": 13.2, "mgnChg": -180,
        "eps": {"l": "EPS before amortisation", "v": "EUR 2.61", "c": "EUR 3.12 in 2024"},
        "cash": {"l": "Free cash flow", "v": "361", "c": "334 in 2024"},
        "extra": [{"l": "EBITA", "v": "410", "c": "471 in 2024"}, {"l": "Dividend", "v": "EUR 1.15"}, {"l": "Inventory", "v": "−155", "c": "DIO 82 days"}],
        "guide": "Improvement in organic growth and EBITA margin expected in 2026. EUR 75m share buyback (27 Feb – 9 Oct 2026).",
        "src": [["FY 2025 press release", "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/574/attachment/original/FY2025%20(3).pdf"], ["FY 2025 presentation", "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/582/attachment/original/FY2025%20results%20-%20presentation.pdf"]]},
      "Q1 2026": {"report": "Q1 2026 trading update", "date": "2026-05-01", "rev": 772, "org": 2.8, "mgnLbl": "EBITA margin", "mgn": 14.2, "mgnChg": 60,
        "extra": [{"l": "EBITA", "v": "109.7", "c": "105.7 in Q1 2025"}, {"l": "Buyback in Q1", "v": "31.3", "c": "994,341 shares"}],
        "note": "Return to organic growth; positive organic growth and better EBITA margin in all three segments. Broen (Denmark) divested on 12 March 2026.",
        "guide": "Further improvement in organic growth and EBITA margin expected in 2026.",
        "src": [["Q1 2026 press release", "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/601/attachment/original/Q1%202026%20results.pdf"]]},
      "Q2 2026": {"report": "H1 2026 results (6 months)", "date": "2026-07-23", "rev": 1560, "revChg": 0.2, "org": 5.0, "mgnLbl": "EBITA margin", "mgn": 14.4, "mgnChg": 90,
        "extra": [{"l": "EBITA", "v": "225", "c": "210 in H1 2025"}, {"l": "Portfolio effect", "v": "+135 / −178", "c": "acquisitions / divestments; FX −21"}],
        "note": "All three segments improved. Positive end-market dynamics in data centres, aerospace, power generation, defence and semicon; stable automotive and residential building.",
        "guide": "Confident of a full year with improved organic growth and EBITA margin versus 2025.",
        "src": [["H1 2026 press release", "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/609/attachment/original/Aalberts%20press%20release%201H2026.pdf"], ["H1 2026 presentation", "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/610/attachment/original/Aalberts%20-%20first%20half-year%20results%202026%20presentation.pdf"]]},
      "Q3 2026": {"report": "Q3 2026 trading update", "date": "2026-10-22", "rev": 823.3, "revChg": 6.6, "org": 13.0, "mgnLbl": "EBITA margin", "mgn": 13.8, "mgnChg": 130,
        "extra": [{"l": "EBITA", "v": "113.8", "c": "+18% vs 96.3"}, {"l": "Buyback", "v": "75.0", "c": "2,068,007 shares, to be cancelled"}],
        "seg": [
          {"n": "Building", "org": null, "note": "Mixed performance; EBITA +11% to EUR 46.8m (press coverage)"},
          {"n": "Industry", "org": null, "note": "Organic growth and margin up; good margin from product mix"},
          {"n": "Semicon", "org": 34.1, "note": "Demand accelerating with AI-related investment"}
        ],
        "guide": "Full-year guidance kept: improved organic growth and EBITA margin versus 2025.",
        "derived": ["revChg"],
        "src": [["Q3 2026 press release", "https://www.globenewswire.com/news-release/2026/10/22/3386031/0/en/aalberts-n-v-aalberts-reports-third-quarter-2026-results.html"], ["Results page", "https://aalberts.com/progress/third-quarter-2026-results"]]}
    },

    "imi": {
      "Q2 2025": {"report": "H1 2025 results (6 months)", "rev": 1091, "org": 2, "mgnLbl": "Adj. operating margin", "mgn": 18.2,
        "cash": {"l": "Free cash flow", "v": "30"},
        "extra": [{"l": "Organic adj. operating profit", "v": "+5%"}],
        "note": "Statutory revenue slightly lower because of currency.",
        "derived": ["mgn"],
        "src": [["Interim results 2025", "https://www.imiplc.com/media/41bkpiqj/imi-plc-interim-results-2025-press-release.pdf"]]},
      "Q3 2025": {"report": "Q3 2025 trading update", "date": "2025-11-06", "org": 12,
        "extra": [{"l": "Organic growth, year to date", "v": "+5%"}],
        "note": "On track for a fourth consecutive year of mid-single-digit organic revenue growth.",
        "src": [["Results, reports and presentations", "https://www.imiplc.com/en/investors/results-reports-presentations/"]]},
      "Q4 2025": {"report": "FY 2025 results (12 months)", "rev": 2304, "revChg": 4, "org": 5, "mgnLbl": "Adj. operating margin", "mgn": 20.0, "mgnChg": 30,
        "eps": {"l": "Adj. basic EPS", "v": "132.3p", "c": "+8%"},
        "cash": {"l": "Cash conversion", "v": "96%"},
        "extra": [{"l": "Adj. operating profit", "v": "460", "c": "+6%; organic +8%"}, {"l": "Statutory operating margin", "v": "18.3%", "c": "+220 bps"}, {"l": "Dividend per share", "v": "+10%"}],
        "seg": [
          {"n": "Automation", "rev": 1504, "mgn": 20.9, "note": "Organic adj. operating profit +11%"},
          {"n": "Life Technology", "rev": 800, "mgn": 18.2, "note": "Organic adj. operating profit flat; margin −20 bps"}
        ],
        "guide": "2026 adj. basic EPS 136p–142p. GBP 500m share buyback announced.",
        "derived": ["seg.Life Technology.rev"],
        "src": [["FY 2025 press release", "https://www.imiplc.com/media/zoonx1ed/imi-plc-full-year-results-2025-press-release.pdf"], ["FY 2025 presentation", "https://www.imiplc.com/media/qvugs2u0/imi-plc-full-year-results-2025-presentation.pdf"]]},
      "Q1 2026": {"report": "Q1 2026 trading update", "date": "2026-05-12", "org": 5,
        "seg": [{"n": "Automation", "org": 6}, {"n": "Life Technology", "org": 4}],
        "guide": "Full-year guidance reconfirmed; on track for a sixth year of mid-single-digit organic growth.",
        "src": [["Q1 2026 trading update", "https://www.imiplc.com/media/32hieuvz/imi-plc-trading-update-q1-2026.pdf"]]},
      "Q2 2026": {"report": "H1 2026 results (6 months)", "date": "2026-07-31", "rev": 1159, "revChg": 6, "org": 5, "mgnLbl": "Adj. operating margin", "mgn": 18.7, "mgnChg": 50,
        "eps": {"l": "Adj. basic EPS", "v": "63.4p", "c": "+13%"},
        "cash": {"l": "Free cash flow", "v": "171", "c": "30 in H1 2025; cash conversion 96%"},
        "extra": [{"l": "Adj. operating profit", "v": "217", "c": "+10%"}, {"l": "Interim dividend", "v": "12.1p", "c": "+10%"}, {"l": "Returned to shareholders", "v": "> 300", "c": "GBP 250m of the 500m buyback done"}],
        "seg": [
          {"n": "Automation", "org": 5, "note": "Orders +12%; Process Automation order book +10%; ~GBP 48m nuclear order"},
          {"n": "Life Technology", "org": 5, "note": "Statutory +7%; data centre orders GBP 18m (6m)"},
          {"n": "· Transport", "org": 8, "note": "Heavy-duty truck market recovering"},
          {"n": "· Climate Control", "org": 4}
        ],
        "guide": "2026 adj. basic EPS 136p–142p reaffirmed.",
        "src": [["H1 2026 press release", "https://www.imiplc.com/media/uk3m0s4a/imi-plc-half-year-results-2026-press-release.pdf"], ["H1 2026 transcript", "https://www.imiplc.com/media/tqcfj3qx/imi-plc-half-year-results-2026-transcript.pdf"]]},
      "Q3 2026": {"report": "Q3 2026 trading update", "date": "2026-10-29", "org": 2,
        "extra": [{"l": "Organic growth, year to date", "v": "+4%"}, {"l": "Prior-year comparator", "v": "+12%", "c": "Q3 2025 organic growth"}],
        "seg": [
          {"n": "Automation", "org": -3, "note": "Year to date +2%; shipment timing in Process Automation"},
          {"n": "Life Technology", "org": 11, "note": "Year to date +7%"}
        ],
        "guide": "2026 adj. basic EPS raised to 137p–143p (136p–142p). Transport now high-single-digit organic growth (mid-single-digit).",
        "src": [["Q3 2026 trading update", "https://www.investegate.co.uk/announcement/rns/imi--imi/trading-update/9846878"]]}
    },

    "belimo": {
      "Q2 2025": {"report": "H1 2025 results (6 months)", "rev": 561.3, "mgnLbl": "EBIT margin", "mgn": 22.8,
        "cash": {"l": "Free cash flow (excl. term deposits)", "v": "52.8"},
        "extra": [{"l": "EBIT", "v": "128.0"}, {"l": "Operating cash flow", "v": "93.5"}],
        "derived": ["rev", "cash", "extra.EBIT", "extra.Operating cash flow"],
        "note": "Derived from the H1 2026 report's growth rates against H1 2025.",
        "src": [["Semiannual report 2025", "https://www.belimo.com/mam/corporate-communications/investor-relations/Reports%20and%20Presentations/2025_07_Semiannual_Report_2025_EN.pdf"]]},
      "Q4 2025": {"report": "FY 2025 results (12 months)", "rev": 1120.8, "revChg": 18.7, "org": 23.3, "orgLbl": "Growth in local currencies", "mgnLbl": "EBIT margin", "mgn": 20.8, "mgnChg": 159,
        "eps": {"l": "Net income", "v": "181.6", "c": "+23.8%"},
        "cash": {"l": "Free cash flow (excl. term deposits)", "v": "98.5", "c": "132.8 in 2024; capex 87 (63)"},
        "extra": [{"l": "EBIT", "v": "232.9"}, {"l": "Operating cash flow", "v": "184.9"}],
        "seg": [
          {"n": "Americas", "org": 32, "note": "~50% of sales"},
          {"n": "EMEA", "org": 12, "note": "~38% of sales"},
          {"n": "Asia Pacific", "org": 29, "note": "~13% of sales"}
        ],
        "note": "Data centres the main growth driver; capex elevated by capacity expansion in Switzerland and the US.",
        "src": [["FY 2025 press release", "https://www.eqs-news.com/news/ad-hoc/belimo-accelerated-growth-in-2025/295f5591-80dd-4287-b3ff-f149c4acf182_en"], ["FY 2025 presentation", "https://www.belimo.com/mam/corporate-communications/investor-relations/Reports%20and%20Presentations/2026_02_Presentation_of_Financial_Results__2025_.pdf"]]},
      "Q2 2026": {"report": "H1 2026 results (6 months)", "date": "2026-07-20", "rev": 676.4, "revChg": 20.5, "org": 29.6, "orgLbl": "Growth in local currencies", "mgnLbl": "EBIT margin", "mgn": 22.5, "mgnChg": -30,
        "eps": {"l": "Net income", "v": "124.9", "c": "+23.3%"},
        "cash": {"l": "Free cash flow (excl. term deposits)", "v": "38.7", "c": "−26.7%; capex 45.4"},
        "extra": [{"l": "EBIT", "v": "152.5", "c": "+19.1%"}, {"l": "Operating cash flow", "v": "83.8", "c": "−10.4%"}, {"l": "Control valves", "v": "389", "c": "+48% in local currencies"}],
        "seg": [
          {"n": "Americas", "rev": 341.3, "chg": 21.9, "org": 35.1},
          {"n": "EMEA", "rev": 240.3, "chg": 11.1, "org": 14.1},
          {"n": "Asia Pacific", "rev": 94.8, "chg": 45.4, "org": 58.0}
        ],
        "guide": "EBIT margin above 20% in 2026; H2 growth faces a higher base and annualised price increases.",
        "src": [["H1 2026 report", "https://report.belimo.com/HY26/en/management-report"], ["H1 2026 press release", "https://www.eqs-news.com/news/ad-hoc/belimo-accelerated-sales-growth-in-the-first-half-of-2026/01f2af93-fa3e-4872-b3f8-514ab22ba0e0_en"]]}
    },

    "xylem": {
      "Q1 2025": {"report": "Q1 2025 results", "rev": 2069, "revChg": 2, "org": 3, "mgnLbl": "Adj. EBITDA margin", "mgn": 20.4, "mgnChg": 120,
        "src": [["Q1 2025 earnings release", "https://www.sec.gov/Archives/edgar/data/1524472/000152447225000019/xyl04292025ex991.htm"]]},
      "Q2 2025": {"report": "Q2 2025 results", "rev": 2300, "revChg": 6, "org": 6, "mgnLbl": "Adj. EBITDA margin", "mgn": 21.8, "mgnChg": 100,
        "eps": {"l": "Adj. EPS", "v": "$1.26", "c": "+16%"},
        "note": "Revenue rounded to USD 2.3bn in the release summary.",
        "src": [["Q2 2025 earnings release", "https://www.sec.gov/Archives/edgar/data/1524472/000152447225000035/xyl07312025ex991.htm"]]},
      "Q3 2025": {"report": "Q3 2025 results", "rev": 2269, "revChg": 8, "org": 7, "mgnLbl": "Adj. EBITDA margin", "mgn": 23.2, "mgnChg": 200,
        "eps": {"l": "Adj. EPS", "v": "$1.37", "c": "+23%"},
        "derived": ["rev", "eps"],
        "src": [["Q3 2025 earnings release", "https://www.sec.gov/Archives/edgar/data/1524472/000152447225000043/xyl10282025ex991.htm"]]},
      "Q4 2025": {"report": "Q4 2025 results", "date": "2026-02-10", "rev": 2400, "revChg": 6, "org": 4, "mgnLbl": "Adj. EBITDA margin", "mgn": 23.2, "mgnChg": 220,
        "eps": {"l": "Adj. EPS", "v": "$1.42", "c": "+20%"},
        "extra": [{"l": "FY 2025 revenue", "v": "9,000", "c": "+6%; organic +5%"}, {"l": "FY 2025 adj. EPS", "v": "$5.08", "c": "+19%; GAAP $3.92"}],
        "note": "Record full-year revenue, adjusted EBITDA margin and adjusted EPS. Quarter revenue rounded to USD 2.4bn.",
        "src": [["Q4 2025 earnings release", "https://www.sec.gov/Archives/edgar/data/1524472/000152447226000008/xyl02102026ex991.htm"]]},
      "Q1 2026": {"report": "Q1 2026 results", "date": "2026-04-28", "rev": 2125, "revChg": 2.7, "org": -0.4, "mgnLbl": "Adj. EBITDA margin", "mgn": 20.6, "mgnChg": 20,
        "eps": {"l": "GAAP EPS", "v": "$0.79", "c": "+14%; adjusted +9%"},
        "src": [["Q1 2026 earnings release", "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000065/xyl04282026ex991.htm"], ["Q1 2026 slides", "https://xyleminc.gcs-web.com/static-files/b7ba322b-6ff8-450f-bfa7-2df9d270fcf1"]]},
      "Q2 2026": {"report": "Q2 2026 results", "date": "2026-07-28", "rev": 2300, "revChg": 2, "org": 1,
        "eps": {"l": "Adj. EPS", "v": "$1.46", "c": "+16%; GAAP $1.11"},
        "orders": {"l": "Orders", "v": "3,100", "c": "+42%; organic +41%"},
        "guide": "FY 2026: revenue ~USD 9.2bn, organic +2–3%, adj. EBITDA margin 23.1–23.5%, adj. EPS $5.55–5.70.",
        "src": [["Q2 2026 earnings release", "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000108/xyl07282026ex991.htm"]]},
      "Q3 2026": {"report": "Q3 2026 results", "date": "2026-10-27", "rev": 2201, "revChg": -3.0, "org": 0, "mgnLbl": "Adj. EBITDA margin", "mgn": 23.9, "mgnChg": 70,
        "eps": {"l": "Adj. EPS", "v": "$1.44", "c": "+5%; GAAP $1.25"},
        "orders": {"l": "Orders", "v": "2,331", "c": "+6.9%; organic +9.9%; backlog record USD 5.5bn"},
        "cash": {"l": "Free cash flow, year to date", "v": "444", "c": "slightly below 2025"},
        "extra": [{"l": "Net debt / adj. EBITDA", "v": "1.1x"}],
        "seg": [
          {"n": "Water Infrastructure", "rev": 645, "org": -1, "mgn": 26.2, "note": "Adj. EBITDA margin +180 bps"},
          {"n": "Applied Water", "org": 9, "note": "Data centre orders more than tripled"},
          {"n": "Measurement & Control Solutions", "rev": 436, "org": -5, "note": "Weak electric metering and analytics"},
          {"n": "Water Solutions & Services", "org": -2, "note": "Margin −140 bps; large projects ramping slower; orders up"}
        ],
        "guide": "FY 2026 cut: revenue ~USD 8.95bn (−1%), organic ~flat, adj. EPS $5.40–5.45 ($5.55–5.70), FCF margin ~10.2%.",
        "src": [["Q3 2026 earnings release", "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000146/xyl10272026ex991.htm"], ["Q3 2026 10-Q", "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000148/xyl-20260930.htm"]]}
    },

    "ecolab": {
      "Q1 2025": {"report": "Q1 2025 results", "org": 3, "mgnLbl": "Organic operating margin", "mgn": 16.0, "mgnChg": 190,
        "eps": {"l": "Adj. EPS", "v": "$1.50", "c": "+12%; GAAP $1.41"},
        "src": [["Q1 2025 earnings release", "https://www.sec.gov/Archives/edgar/data/31462/000155837025005743/ecl-20250429xex99d1.htm"]]},
      "Q2 2025": {"report": "Q2 2025 results", "org": 3, "mgnLbl": "Organic operating margin", "mgn": 18.3, "mgnChg": 170,
        "eps": {"l": "Adj. EPS", "v": "$1.89", "c": "+13%; GAAP $1.84"},
        "src": [["Q2 2025 earnings release", "https://www.sec.gov/Archives/edgar/data/31462/000155837025009695/ecl-20250729xex99d1.htm"]]},
      "Q3 2025": {"report": "Q3 2025 results", "rev": 4154, "revChg": 4, "org": 3, "mgnLbl": "Organic operating margin", "mgn": 18.7, "mgnChg": 110,
        "eps": {"l": "Adj. EPS", "v": "$2.07", "c": "+13%; GAAP $2.05"},
        "note": "Value pricing accelerated from 2% to 3%; volume +1%.",
        "derived": ["rev"],
        "src": [["Q3 2025 earnings release", "https://www.sec.gov/Archives/edgar/data/31462/000110465925102859/ecl-20251028xex99d1.htm"]]},
      "Q4 2025": {"report": "Q4 2025 results", "date": "2026-02-10", "revChg": 5, "org": 3,
        "eps": {"l": "Adj. EPS", "v": "$2.07", "c": "FY $7.53 less Q1–Q3"},
        "extra": [{"l": "Organic operating income", "v": "+12%"}, {"l": "FY 2025 sales", "v": "16,100", "c": "+2%; organic +3%"}, {"l": "FY 2025 adj. EPS", "v": "$7.53", "c": "+13%; GAAP $7.28"}, {"l": "FY 2025 operating cash flow", "v": "3,000", "c": "2,800 in 2024"}],
        "derived": ["eps"],
        "guide": "2026 adj. EPS growth of 12–15% (before the CoolIT deal).",
        "src": [["Q4 2025 earnings release", "https://www.sec.gov/Archives/edgar/data/31462/000110465926012358/ecl-20260210xex99d1.htm"], ["10-K 2025", "https://www.sec.gov/Archives/edgar/data/31462/000110465926018357/ecl-20251231x10k.htm"]]},
      "Q1 2026": {"report": "Q1 2026 results", "date": "2026-04-28", "org": 4, "mgnLbl": "Adj. operating margin", "mgn": 16.7,
        "eps": {"l": "Adj. EPS", "v": "$1.70", "c": "+13%"},
        "src": [["Q1 2026 earnings release", "https://www.sec.gov/Archives/edgar/data/0000031462/000110465926049822/ecl-20260428xex99d1.htm"]]},
      "Q2 2026": {"report": "Q2 2026 results", "date": "2026-07-28", "revChg": 10, "org": 5, "mgnLbl": "Organic operating margin", "mgn": 18.8,
        "eps": {"l": "Adj. EPS", "v": "$2.09", "c": "+11%; GAAP $1.90"},
        "extra": [{"l": "Reported operating margin", "v": "17.2%"}],
        "guide": "2026 adj. EPS raised to $8.05–8.25 (+7–10%).",
        "src": [["Q2 2026 earnings release", "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026049933/ecl_ex99x1.htm"]]},
      "Q3 2026": {"report": "Q3 2026 results", "date": "2026-10-27", "rev": 4694, "revChg": 13, "org": 7, "mgnLbl": "Organic operating margin", "mgn": 19.6, "mgnChg": 70,
        "eps": {"l": "Adj. EPS", "v": "$2.18", "c": "+5% (~10 pts CoolIT drag); GAAP $1.95"},
        "extra": [{"l": "Operating income", "v": "810.5", "c": "+7%; adjusted +14%"}, {"l": "Reported operating margin", "v": "17.3%"}, {"l": "Net interest expense", "v": "+70", "c": "deal financing"}],
        "seg": [
          {"n": "Global Water", "rev": 2480, "chg": 20, "note": "Fixed currency; 11 pts from Ovivo Electronics and CoolIT; High-Tech +63% organic"},
          {"n": "Global Institutional & Specialty", "rev": 1640, "org": 3, "note": "Fixed currency"},
          {"n": "Global Pest Elimination", "rev": 363.5, "chg": 9, "note": "Fixed currency"},
          {"n": "Global Life Sciences", "org": 17, "note": "Bioprocessing-led; approaching USD 1bn sales"},
          {"n": "Ecolab Digital", "rev": 129, "chg": 34}
        ],
        "guide": "2026 adj. EPS $8.10–8.20 (+8–9%); Q4 organic growth 6–7%; path to 20% organic operating margin in 2027.",
        "src": [["Q3 2026 earnings release", "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026067418/ecl_ex99x1.htm"], ["Q3 2026 10-Q", "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026068208/ecl-20260930.htm"]]}
    },

    "watts": {
      "Q1 2025": {"report": "Q1 2025 results", "rev": 559, "mgnLbl": "Adj. operating margin", "mgn": 19.0,
        "eps": {"l": "Adj. EPS", "v": "$2.37"},
        "cash": {"l": "Free cash flow", "v": "46"},
        "derived": ["rev", "mgn", "eps"],
        "note": "Derived from the Q1 2026 release's growth rates.",
        "src": [["Watts investor relations", "https://investors.watts.com/"]]},
      "Q2 2025": {"report": "Q2 2025 results", "rev": 641, "mgnLbl": "Adj. operating margin", "mgn": 21.6,
        "eps": {"l": "Adj. EPS", "v": "$3.10"},
        "cash": {"l": "Free cash flow, H1", "v": "105"},
        "seg": [{"n": "Americas", "rev": 499, "chg": 11, "org": 10, "note": "Price, volume and pull-forward demand"}],
        "derived": ["rev", "mgn", "eps"],
        "src": [["Q2 2025 earnings release", "https://www.sec.gov/Archives/edgar/data/795403/000155837025010556/wts-20250806xex99d1.htm"]]},
      "Q3 2025": {"report": "Q3 2025 results", "date": "2025-11-05", "rev": 611.7, "revChg": 12.5, "org": 9.4, "mgnLbl": "Adj. operating margin", "mgn": 18.5, "mgnChg": 140,
        "eps": {"l": "Adj. EPS", "v": "$2.50", "c": "+23%; GAAP $2.45"},
        "seg": [
          {"n": "Americas", "rev": 464, "org": 13},
          {"n": "Europe", "rev": 112, "chg": 4, "org": -2},
          {"n": "APMEA", "org": 0}
        ],
        "guide": "Full-year 2025 sales and margin outlook raised.",
        "src": [["Q3 2025 earnings release", "https://www.sec.gov/Archives/edgar/data/795403/000110465925107038/wts-20251105xex99d1.htm"]]},
      "Q4 2025": {"report": "Q4 2025 results", "date": "2026-02-11", "rev": 625, "revChg": 16, "org": 8, "mgnLbl": "Adj. operating margin", "mgn": 19.0, "mgnChg": 220,
        "eps": {"l": "Adj. EPS", "v": "$2.62", "c": "+28%; GAAP $2.50"},
        "cash": {"l": "FY 2025 free cash flow", "v": "356.3", "c": "+7%"},
        "extra": [{"l": "FY 2025 sales", "v": "2,440", "c": "+8%; organic +5%"}, {"l": "FY 2025 adj. operating margin", "v": "19.6%", "c": "+190 bps"}, {"l": "FY 2025 adj. EPS", "v": "$10.58", "c": "+19%"}],
        "note": "Acquisitions (~USD 29m in the quarter): Haws, Superior Boiler and Saudi Cast completed.",
        "guide": "2026: sales +8–12%, organic +2–6%.",
        "src": [["Q4 2025 earnings release", "https://www.sec.gov/Archives/edgar/data/795403/000110465926013437/wts-20260211xex99d1.htm"]]},
      "Q1 2026": {"report": "Q1 2026 results", "date": "2026-05-06", "rev": 677, "revChg": 21, "org": 12, "mgnLbl": "Adj. operating margin", "mgn": 20.1, "mgnChg": 110,
        "eps": {"l": "Adj. EPS", "v": "$3.04", "c": "+28%"},
        "cash": {"l": "Free cash flow", "v": "7", "c": "46 in Q1 2025"},
        "guide": "Full-year 2026 outlook maintained.",
        "src": [["Q1 2026 earnings release", "https://www.sec.gov/Archives/edgar/data/0000795403/000110465926056325/wts-20260506xex99d1.htm"], ["Q1 2026 slides", "https://s29.q4cdn.com/117128878/files/doc_financials/2026/q1/Watts-Water-Technologies-UPDATED-Q1-26-Earnings-Deck-050626-Earnings-Presentation-for-May-7.pdf"]]},
      "Q2 2026": {"report": "Q2 2026 results", "date": "2026-08-05", "rev": 763, "revChg": 19, "org": 12, "mgnLbl": "Adj. operating margin", "mgn": 21.0, "mgnChg": -60,
        "eps": {"l": "Adj. EPS", "v": "$3.66", "c": "+18%; GAAP $3.53"},
        "cash": {"l": "Free cash flow, H1", "v": "98", "c": "105 in H1 2025"},
        "extra": [{"l": "Adj. operating income", "v": "160", "c": "+15%"}, {"l": "Acquired revenue", "v": "34", "c": "5 pts of growth"}],
        "seg": [
          {"n": "Americas", "rev": 585, "chg": 17, "org": 12, "note": "Price and data-centre volume"},
          {"n": "Europe", "rev": 125, "chg": 12, "org": 9, "note": "Segment margin 13.3% (+160 bps)"}
        ],
        "guide": "2026 raised: organic +8–11%, reported +14–17%, adj. operating margin +20 to +80 bps.",
        "src": [["Q2 2026 earnings release", "https://www.sec.gov/Archives/edgar/data/0000795403/000110465926091165/wts-20260805xex99d1.htm"], ["Q2 2026 slides", "https://s29.q4cdn.com/117128878/files/doc_financials/2026/q2/Watts-Water-Technologies-Q2-26-Earnings-Deck_final-Presentation-for-August-6-2026.pdf"]]},
      "Q3 2026": {"report": "Q3 2026 results — due 4 Nov 2026", "pending": true,
        "note": "Consensus before the release: adj. EPS ~$3.14, revenue ~USD 693m (Q3 2025: $2.50, USD 612m).",
        "src": [["Watts investor relations", "https://investors.watts.com/"]]}
    },

    "emerson": {
      "Q1 2025": {"report": "Fiscal Q2 2025 (Jan–Mar 2025)", "date": "2025-05-07", "rev": 4432, "revChg": 1, "org": 2, "orgLbl": "Underlying growth", "mgnLbl": "Adj. segment EBITA margin", "mgn": 28.0,
        "eps": {"l": "Adj. EPS", "v": "$1.48", "c": "+9%"},
        "cash": {"l": "Free cash flow", "v": "738", "c": "+14%"},
        "src": [["Fiscal Q2 2025 release", "https://ir.emerson.com/_assets/_10ad2d822f6d4902fd020ca535f9805e/emerson/news/2025-05-07_Emerson_Reports_Second_Quarter_2025_Results_8.pdf"]]},
      "Q2 2025": {"report": "Fiscal Q3 2025 (Apr–Jun 2025)", "date": "2025-08-06", "rev": 4553, "revChg": 4, "org": 3, "orgLbl": "Underlying growth", "mgnLbl": "Adj. segment EBITA margin", "mgn": 27.1,
        "eps": {"l": "Adj. EPS", "v": "$1.52", "c": "+6%"},
        "cash": {"l": "Free cash flow", "v": "970", "c": "−1%; margin 21.3%"},
        "guide": "FY 2025 adj. EPS ~$6.00, free cash flow ~USD 3.2bn.",
        "src": [["Fiscal Q3 2025 release", "https://ir.emerson.com/_assets/_83c3777b7a2a1deaf1f9f1ccca620065/emerson/news/2025-08-06_Emerson_Reports_Third_Quarter_2025_Results_612.pdf"]]},
      "Q3 2025": {"report": "Fiscal Q4 2025 (Jul–Sep 2025)", "date": "2025-11-05", "rev": 4855, "revChg": 5, "org": 4, "orgLbl": "Underlying growth",
        "eps": {"l": "Adj. EPS", "v": "$1.62", "c": "top of guidance"},
        "cash": {"l": "Free cash flow", "v": "843", "c": "−7%"},
        "extra": [{"l": "FY 2025 net sales", "v": "18,016", "c": "+3%; underlying +3%"}, {"l": "FY 2025 adj. EPS", "v": "$6.00", "c": "+9%"}, {"l": "FY 2025 free cash flow", "v": "3,245", "c": "+12%"}],
        "guide": "FY 2026: adj. EPS $6.35–6.55, FCF USD 3.5–3.6bn, net sales ~+5.5%.",
        "src": [["Fiscal Q4 / FY 2025 release", "https://ir.emerson.com/_assets/_80fc1c2bd9b6b4b0e1f3c778904be7d7/emerson/news/2025-11-05_Emerson_Reports_Fourth_Quarter_and_Full_Year_2025__617.pdf"]]},
      "Q4 2025": {"report": "Fiscal Q1 2026 (Oct–Dec 2025)", "date": "2026-02-03", "rev": 4346, "revChg": 4, "org": 2, "orgLbl": "Underlying growth",
        "eps": {"l": "Adj. EPS", "v": "$1.46", "c": "+6%; GAAP $1.07"},
        "cash": {"l": "Free cash flow", "v": "602", "c": "−13%"},
        "orders": {"l": "Underlying orders", "v": "+9%"},
        "guide": "FY 2026 adj. EPS midpoint raised: $6.40–6.55.",
        "src": [["Fiscal Q1 2026 release", "https://ir.emerson.com/_assets/_0dfcd1db8f1e0a2d66af142d1b1193f5/emerson/news/2026-02-03_Emerson_Reports_First_Quarter_2026_Results_623.pdf"]]},
      "Q1 2026": {"report": "Fiscal Q2 2026 (Jan–Mar 2026)", "date": "2026-05-05", "org": 0.5, "orgLbl": "Underlying growth", "mgnLbl": "Adj. segment EBITA margin", "mgn": 27.6, "mgnChg": -40,
        "eps": {"l": "Adj. EPS", "v": "$1.54", "c": "+4%; GAAP $1.10"},
        "orders": {"l": "Underlying orders", "v": "+5%", "c": "fifth quarter in a row of mid-single digits or better"},
        "note": "Middle East conflict (−1 pt) and software contract renewal timing (−2 pts) held back sales.",
        "guide": "FY 2026: underlying +3%, reported +4.5%, adj. EPS $6.45–6.55, FCF USD 3.5–3.6bn.",
        "src": [["Fiscal Q2 2026 release", "https://ir.emerson.com/_assets/_f6e5597605579b03df2f9ddcfe39bf0a/emerson/news/2026-05-05_Emerson_Reports_Second_Quarter_2026_Results_629.pdf"]]},
      "Q2 2026": {"report": "Fiscal Q3 2026 (Apr–Jun 2026)", "date": "2026-08-04", "rev": 4873, "revChg": 7, "org": 6, "orgLbl": "Underlying growth", "mgnLbl": "Adj. segment EBITA margin", "mgn": 28.5, "mgnChg": 140,
        "eps": {"l": "Adj. EPS", "v": "$1.71", "c": "+13%, above guidance"},
        "cash": {"l": "Free cash flow", "v": "1,323", "c": "+36%; margin 27.1%"},
        "orders": {"l": "Underlying orders", "v": "+7%"},
        "extra": [{"l": "Adj. segment EBITA", "v": "1,387"}, {"l": "Share buybacks, year to date", "v": "898"}],
        "seg": [
          {"n": "Test & Measurement", "org": 23},
          {"n": "Ovation (power)", "org": 23},
          {"n": "Power end market", "chg": 37, "note": "Revenue growth"},
          {"n": "Semiconductor end market", "chg": 53, "note": "Revenue growth"}
        ],
        "guide": "FY 2026 raised: net sales ~+5%, underlying ~+3.5%, adj. EPS ~$6.55, FCF ~USD 3.6bn, adj. segment EBITA margin ~28%.",
        "src": [["Fiscal Q3 2026 release", "https://ir.emerson.com/_assets/_c0388696e3a69f59a3ee43598053c60c/emerson/news/2026-08-04_Emerson_Reports_Third_Quarter_2026_Results_Raises__642.pdf"], ["Fiscal Q3 2026 presentation", "https://ir.emerson.com/_assets/_39b9c4b55c1314921bb642cd27956a1b/emerson/db/938/10242/presentation/Emerson+2026+Q3+Earnings+Presentation.pdf"]]},
      "Q3 2026": {"report": "Fiscal Q4 2026 (Jul–Sep 2026) — due 4 Nov 2026", "pending": true,
        "note": "Guidance for the quarter: adj. segment EBITA margin ~28.5%.",
        "src": [["Emerson investor relations", "https://ir.emerson.com/"]]}
    },

    "gf": {
      "Q2 2025": {"report": "H1 2025 results (6 months)", "rev": 2255,
        "eps": {"l": "Net profit to shareholders", "v": "160", "c": "incl. book gain on Machining Solutions sale"},
        "note": "Group figures still include GF Casting Solutions; GF Machining Solutions divested effective 30 June 2025.",
        "src": [["Reports and presentations", "https://www.georgfischer.com/en/investors/reports-and-presentations.html"]]},
      "Q4 2025": {"report": "FY 2025 results (12 months)", "rev": 4110, "revChg": -13.9, "org": -1.7, "mgnLbl": "Comparable EBITDA margin", "mgn": 11.4, "mgnChg": -150,
        "cash": {"l": "Free cash flow before M&A", "v": "21", "c": "184 in 2024"},
        "extra": [{"l": "Comparable EBITDA", "v": "467"}, {"l": "Net debt", "v": "1,684"}, {"l": "Dividend", "v": "CHF 1.35", "c": "unchanged"}],
        "seg": [
          {"n": "Flow Solutions", "rev": 2999, "chg": -1.7, "org": 0.6, "mgn": 10.0, "note": "Comparable EBIT margin (11.4% in 2024)"},
          {"n": "· Industry & Infrastructure", "org": 1.9},
          {"n": "· Americas (region)", "org": 3.5, "note": "Europe down more than 2%"}
        ],
        "derived": ["revChg"],
        "src": [["Annual report 2025", "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/annual-report/annual-report-2025/en/annual-report-2025-full-version-en.pdf"], ["FY 2025 presentation", "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/annual-report/annual-report-2025/en/presentation-analyst-and-media-conference-2026-en.pdf"]]},
      "Q2 2026": {"report": "H1 2026 results (6 months)", "rev": 1696, "revChg": -24.8, "org": 5.7, "orgLbl": "Organic growth, Flow Solutions", "mgnLbl": "Comparable EBITDA margin, Flow Solutions", "mgn": 13.4,
        "eps": {"l": "Net result to shareholders", "v": "−77", "c": "deconsolidation loss on Casting exit; +160 in H1 2025"},
        "extra": [{"l": "Comparable EBIT margin, Flow Solutions", "v": "10.0%"}],
        "seg": [
          {"n": "GF Flow Solutions", "rev": 1584, "chg": 5.1, "org": 5.7, "mgn": 13.4, "note": "Comparable EBITDA margin"},
          {"n": "· Industry & Infrastructure", "rev": 1001, "chg": 8.7, "mgn": 14.4, "note": "Comparable EBITDA 144 (137)"},
          {"n": "· Building", "rev": 616, "chg": -2.2, "org": 3.3}
        ],
        "guide": "2026 raised to mid-single-digit organic growth (low single digit); comparable EBITDA margin 14–16% kept.",
        "derived": ["revChg", "seg.· Industry & Infrastructure.chg", "seg.· Industry & Infrastructure.mgn", "seg.· Building.chg"],
        "src": [["H1 2026 ad hoc announcement", "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/mid-year-reports/mid-year-report-2026/en/ad-hoc-announcement-en-mid-year-report-2026.pdf"], ["H1 2026 presentation", "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/mid-year-reports/mid-year-report-2026/en/mid-year-report-2026-presentation-en.pdf"]]}
    }
  },

  "noReport": {
    "belimo": "Belimo publishes half-year and full-year results only (no Q1 or Q3 figures).",
    "gf": "Georg Fischer publishes half-year and full-year results only (no Q1 or Q3 figures).",
    "imi": "Q1 2025 trading update: figures not captured yet; see IMI's results page."
  },

  "qual": {
    "aalberts": {"period": "Q3 2026", "title": "Q3 2026 trading update, 22 Oct 2026",
      "perf": [
        "Revenue EUR 823.3m with organic growth of 13.0%, the strongest quarter in two years after an organic decline of 2.5% in 2025.",
        "EBITA +18% to EUR 113.8m; margin 13.8% (+130 bps), above consensus (~EUR 110m).",
        "All three segments grew organically and improved margin. Semicon stood out (+34.1% organic) on AI-related investment; building was mixed.",
        "Walk through 2026: Q1 +2.8% organic (14.2% margin) › H1 +5.0% (14.4%) › Q3 +13.0% (13.8%). Full-year guidance of better growth and margin kept."
      ],
      "ma": [
        "Divestment programme under 'thrive 2030': Broen (Denmark) sold 12 March 2026; 85% stake in Flamco RUS sold June 2026; sale of Metalis agreed; control of the Polish KAN joint venture given up.",
        "H1 2026 portfolio effect: +EUR 135m revenue from acquisitions, −EUR 178m from divestments (FX −EUR 21m)."
      ],
      "other": [
        "EUR 75m share buyback completed 9 Oct 2026 (2,068,007 shares); the shares will be cancelled.",
        "Growth pockets named in H1: data centres, aerospace, power generation, defence and semicon; semicon order book high."
      ],
      "src": [["Q3 2026 press release", "https://www.globenewswire.com/news-release/2026/10/22/3386031/0/en/aalberts-n-v-aalberts-reports-third-quarter-2026-results.html"], ["Broen divestment", "https://www.globenewswire.com/news-release/2026/03/12/3254283/0/en/Aalberts-N-V-Aalberts-completes-divestment-Broen-in-Denmark.html"], ["Divestment programme", "https://aalberts.com/progress/Aalberts-reports-progress-on-divestment-programme"]]},
    "imi": {"period": "Q3 2026", "title": "Q3 2026 trading update, 29 Oct 2026",
      "perf": [
        "Organic revenue +2% in Q3 against a strong +12% comparator; +4% year to date.",
        "Life Technology +11% organic in Q3 (+7% YTD); Automation −3% (+2% YTD) on Process Automation shipment timing.",
        "Transport outlook lifted to high-single-digit organic growth for 2026.",
        "Full-year adj. EPS guidance raised to 137p–143p (136p–142p); sixth year of mid-single-digit organic growth still on track."
      ],
      "ma": [
        "Acquisition of iSMA CONTROLLI (building automation controls) for EUR 63m announced 7 Oct 2026.",
        "Disposal of Truflo Marine now expected to complete in Q4 2026 (previously Q3); its extra contribution is the main reason for the higher EPS guidance.",
        "Management flags further targeted bolt-on acquisitions."
      ],
      "other": [
        "GBP 500m share buyback in progress (GBP 250m done by H1).",
        "H1 data centre orders GBP 18m (GBP 6m a year earlier); ~GBP 48m multi-year nuclear order in Automation."
      ],
      "src": [["Q3 2026 trading update", "https://www.investegate.co.uk/announcement/rns/imi--imi/trading-update/9846878"], ["H1 2026 transcript", "https://www.imiplc.com/media/tqcfj3qx/imi-plc-half-year-results-2026-transcript.pdf"]]},
    "belimo": {"period": "Q2 2026", "title": "H1 2026 results, 20 Jul 2026 (no Q3 report)",
      "perf": [
        "Sales CHF 676.4m, +20.5% in CHF and +29.6% in local currencies; data centres delivered a bit more than half of the absolute growth.",
        "Data centres ~23–24% of sales (~18% in H2 2025), mostly liquid cooling. Control valves +48% in local currencies to CHF 389m (Energy Valve).",
        "EBIT CHF 152.5m (+19.1%); margin 22.5% (22.8%), held back by currency.",
        "Free cash flow CHF 38.7m (−26.7%) with capex of CHF 45.4m for capacity. Guidance: EBIT margin above 20% in 2026."
      ],
      "ma": [
        "No acquisitions or disposals found for 2026; growth is organic, backed by capacity investment."
      ],
      "other": [
        "Capacity: new production and logistics building in Hinwil (CH) opened Aug 2026; 170,000 sq ft warehouse in Stratford, CT; Sparks, NV site expanded to 85,000 sq ft. Capex elevated through 2028.",
        "Innovation: first data-centre-only product, a stainless-steel Energy Valve for liquid cooling; Data Center Experience Center opened in Singapore, US one planned in Danbury, CT for H2 2026."
      ],
      "src": [["H1 2026 report", "https://report.belimo.com/HY26/en/management-report"], ["H1 2026 press release", "https://www.eqs-news.com/news/ad-hoc/belimo-accelerated-sales-growth-in-the-first-half-of-2026/01f2af93-fa3e-4872-b3f8-514ab22ba0e0_en"]]},
    "xylem": {"period": "Q3 2026", "title": "Q3 2026 results, 27 Oct 2026",
      "perf": [
        "Revenue USD 2,201m, −3.0% reported (divestitures) and about flat organically; missed consensus by ~3.5%.",
        "Orders USD 2,331m, +9.9% organic; record backlog USD 5.5bn. Applied Water +9% organic with data centre orders more than tripled.",
        "Adj. EBITDA margin 23.9% (+70 bps); adj. EPS $1.44 (+5%), slightly below consensus. Water Infrastructure margin 26.2% (+180 bps); Measurement & Control −5% organic.",
        "Guidance cut: revenue ~USD 8.95bn, organic ~flat, adj. EPS $5.40–5.45 (from $5.55–5.70)."
      ],
      "ma": [
        "Plans to divest Applied Water International and Specialty Flow Control (beverage and marine): ~9% of revenue, <5% of EBITDA; cuts China exposure from ~2% to ~1% of revenue."
      ],
      "other": [
        "From 1 Jan 2027 three segments: Treatment & Services, Flow Solutions, Measurement & Analytics.",
        "CFO transition announced; restructuring ahead. More investment in data centres and microelectronics."
      ],
      "src": [["Q3 2026 earnings release", "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000146/xyl10272026ex991.htm"], ["Divestitures and new structure", "https://www.rttnews.com/3703532/xylem-announces-divestitures-new-3-segment-structure.aspx"]]},
    "ecolab": {"period": "Q3 2026", "title": "Q3 2026 results, 27 Oct 2026",
      "perf": [
        "Sales USD 4,694m, +13% reported; organic growth accelerated to 7% (5% in Q2, 4% in Q1).",
        "Organic operating margin 19.6% (+70 bps); adjusted operating income +14%.",
        "Adj. EPS $2.18 (+5%), with ~10 pts of drag from CoolIT amortisation and financing; GAAP EPS $1.95 (−5%).",
        "Global High-Tech +63% organic, Life Sciences +17%, Pest +8–9%. FY adj. EPS $8.10–8.20; Q4 organic 6–7%."
      ],
      "ma": [
        "CoolIT Systems (data-centre liquid cooling) closed 2 Jul 2026 for ~USD 4.75bn cash (USD 4.63bn net of cash); ~USD 550m sales expected in the first 12 months.",
        "Ovivo Electronics (ultrapure water for semiconductors) acquired Dec 2025 for ~USD 1.6–1.8bn.",
        "Both deals expected to add ~2 pts to annual organic growth."
      ],
      "other": [
        "Ecolab Digital sales +34% to USD 129m.",
        "Path to a 20% organic operating margin in 2027; financing cost of the deals raised net interest by ~USD 70m in the quarter."
      ],
      "src": [["Q3 2026 earnings release", "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026067418/ecl_ex99x1.htm"], ["Q3 2026 10-Q", "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026068208/ecl-20260930.htm"]]},
    "watts": {"period": "Q2 2026", "title": "Q2 2026 results, 5 Aug 2026 (Q3 due 4 Nov)",
      "perf": [
        "Record sales USD 763m, +19% reported and +12% organic; adj. EPS $3.66 (+18%), above consensus (~$3.33).",
        "Adj. operating margin 21.0% (−60 bps) on acquisition dilution and a one-off price/cost benefit last year; price added ~6%.",
        "Americas USD 585m (+12% organic) on price and data centres; Europe USD 125m (+9% organic), margin 13.3% (+160 bps).",
        "Outlook raised: organic +8–11%, reported +14–17%, adj. operating margin +20 to +80 bps."
      ],
      "ma": [
        "Acquisitions added USD 34m of revenue in Q2 (5 pts of growth); Haws, Superior Boiler and Saudi Cast completed in Q4 2025. USD 21–22m more acquired sales expected in APMEA for the rest of 2026."
      ],
      "other": [
        "Data centre sales more than tripled to ~8% of H1 sales, driven by the newly launched CoolVault thermal storage tanks.",
        "Cautious on residential and non-institutional construction; tariff refunds excluded from the outlook."
      ],
      "src": [["Q2 2026 earnings release", "https://www.sec.gov/Archives/edgar/data/0000795403/000110465926091165/wts-20260805xex99d1.htm"], ["Q2 2026 call", "https://www.investing.com/news/transcripts/earnings-call-transcript-watts-water-tops-q2-2026-forecasts-and-raises-outlook-93CH-4842900"]]},
    "emerson": {"period": "Q2 2026", "title": "Fiscal Q3 2026 results, 4 Aug 2026 (fiscal Q4 due 4 Nov)",
      "perf": [
        "Net sales USD 4,873m, +7% reported and +6% underlying; underlying orders +7%.",
        "Adj. segment EBITA margin 28.5% (+140 bps); adj. EPS $1.71 (+13%), above guidance.",
        "Free cash flow USD 1,323m (+36%), helped by tariff refunds and tax timing.",
        "Test & Measurement and Ovation each +23% underlying; power revenue +37%, semiconductor +53%. FY guidance raised to adj. EPS ~$6.55."
      ],
      "ma": [
        "No new acquisitions or disposals announced in the quarter; portfolio focus remains on automation after the 2025 buy-out of AspenTech minorities."
      ],
      "other": [
        "~USD 2.2bn shareholder returns planned for FY 2026, including USD 1bn of buybacks (USD 898m done by fiscal Q3).",
        "Earlier in the year the Middle East conflict and software renewal timing cut fiscal Q2 underlying growth to 0.5%."
      ],
      "src": [["Fiscal Q3 2026 release", "https://ir.emerson.com/_assets/_c0388696e3a69f59a3ee43598053c60c/emerson/news/2026-08-04_Emerson_Reports_Third_Quarter_2026_Results_Raises__642.pdf"], ["Q3 call highlights", "https://finance.yahoo.com/markets/stocks/articles/emerson-electric-co-emr-q3-050620952.html"]]},
    "gf": {"period": "Q2 2026", "title": "H1 2026 results (no Q3 report) and news to Oct 2026",
      "perf": [
        "Now a pure-play Flow Solutions group: Flow Solutions sales CHF 1,584m, +5.1% (+5.7% organic).",
        "Comparable EBITDA margin 13.4%, comparable EBIT margin 10.0%. Industry & Infrastructure CHF 1,001m (921m), EBITDA CHF 144m; Building CHF 616m (630m), +3.3% organic.",
        "Group net loss CHF 77m from the deconsolidation loss on the casting exit (H1 2025: profit CHF 160m incl. Machining gain).",
        "Outlook raised on strong orders: mid-single-digit organic growth in 2026 (low single digit); comparable EBITDA margin 14–16%."
      ],
      "ma": [
        "Majority of GF Casting Solutions sold in February 2026; Precicast (aerospace and gas-turbine casting, CH and RO) sold to Consolidated Precision Products for CHF 215m, closed 30 Sep 2026; proceeds to reduce net debt.",
        "GF Machining Solutions divested effective 30 June 2025; Uponor integration continues."
      ],
      "other": [
        "Net debt CHF 1,684m at end-2025 after the transformation; FY 2025 free cash flow before M&A only CHF 21m.",
        "New strategy outlines a CHF 4.2bn sales target (press coverage)."
      ],
      "src": [["H1 2026 ad hoc announcement", "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/mid-year-reports/mid-year-report-2026/en/ad-hoc-announcement-en-mid-year-report-2026.pdf"], ["Precicast sale", "https://www.cash.ch/news/top-news/georg-fischer-schliesst-verkauf-von-precicast-gruppe-ab-973242"]]}
  },

  "docs": [
    {"co": "aalberts", "p": "Q1 2025", "type": "Results release", "title": "Q1 2025 press release", "url": "https://aalberts-website.s3.eu-west-1.amazonaws.com/media/App/Models/Download/000/000/536/attachment/original/1Q-2025-press%20release.pdf"},
    {"co": "aalberts", "p": "Q2 2025", "type": "Results release", "title": "H1 2025 press release", "url": "https://aalberts-website.s3.eu-west-1.amazonaws.com/media/App/Models/Download/000/000/555/attachment/original/1H2025.pdf"},
    {"co": "aalberts", "p": "Q2 2025", "type": "Presentation", "title": "H1 2025 presentation", "url": "https://aalberts-website.s3.eu-west-1.amazonaws.com/media/App/Models/Download/000/000/556/attachment/original/Aalberts%20-%20first%20half-year%20presentation%202025.pdf"},
    {"co": "aalberts", "p": "Q3 2025", "type": "Results release", "title": "Q3 2025 press release", "url": "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/569/attachment/original/Q3%202025.pdf"},
    {"co": "aalberts", "p": "Q4 2025", "type": "Results release", "title": "FY 2025 press release", "url": "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/574/attachment/original/FY2025%20(3).pdf"},
    {"co": "aalberts", "p": "Q4 2025", "type": "Presentation", "title": "FY 2025 presentation", "url": "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/582/attachment/original/FY2025%20results%20-%20presentation.pdf"},
    {"co": "aalberts", "p": "Q4 2025", "type": "Annual report", "title": "Annual report 2025", "url": "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/575/attachment/original/Aalberts%20annual%20report%202025.pdf"},
    {"co": "aalberts", "p": "Q1 2026", "type": "Results release", "title": "Q1 2026 press release", "url": "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/601/attachment/original/Q1%202026%20results.pdf"},
    {"co": "aalberts", "p": "Q2 2026", "type": "Results release", "title": "H1 2026 press release", "url": "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/609/attachment/original/Aalberts%20press%20release%201H2026.pdf"},
    {"co": "aalberts", "p": "Q2 2026", "type": "Presentation", "title": "H1 2026 presentation", "url": "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/610/attachment/original/Aalberts%20-%20first%20half-year%20results%202026%20presentation.pdf"},
    {"co": "aalberts", "p": "Q3 2026", "type": "Results release", "title": "Q3 2026 press release (web)", "url": "https://www.globenewswire.com/news-release/2026/10/22/3386031/0/en/aalberts-n-v-aalberts-reports-third-quarter-2026-results.html"},

    {"co": "imi", "p": "Q2 2025", "type": "Results release", "title": "Interim results 2025", "url": "https://www.imiplc.com/media/41bkpiqj/imi-plc-interim-results-2025-press-release.pdf"},
    {"co": "imi", "p": "Q4 2025", "type": "Results release", "title": "FY 2025 results press release", "url": "https://www.imiplc.com/media/zoonx1ed/imi-plc-full-year-results-2025-press-release.pdf"},
    {"co": "imi", "p": "Q4 2025", "type": "Presentation", "title": "FY 2025 results presentation", "url": "https://www.imiplc.com/media/qvugs2u0/imi-plc-full-year-results-2025-presentation.pdf"},
    {"co": "imi", "p": "Q4 2025", "type": "Annual report", "title": "Annual report 2025", "url": "https://www.imiplc.com/media/1i2ddtki/imi_ar_2025.pdf"},
    {"co": "imi", "p": "Q1 2026", "type": "Trading update", "title": "Q1 2026 trading update", "url": "https://www.imiplc.com/media/32hieuvz/imi-plc-trading-update-q1-2026.pdf"},
    {"co": "imi", "p": "Q2 2026", "type": "Results release", "title": "H1 2026 results press release", "url": "https://www.imiplc.com/media/uk3m0s4a/imi-plc-half-year-results-2026-press-release.pdf"},
    {"co": "imi", "p": "Q2 2026", "type": "Transcript", "title": "H1 2026 results call transcript", "url": "https://www.imiplc.com/media/tqcfj3qx/imi-plc-half-year-results-2026-transcript.pdf"},
    {"co": "imi", "p": "Q3 2026", "type": "Trading update", "title": "Q3 2026 trading update (web)", "url": "https://www.investegate.co.uk/announcement/rns/imi--imi/trading-update/9846878"},

    {"co": "belimo", "p": "Q2 2025", "type": "Results release", "title": "Semiannual report 2025", "url": "https://www.belimo.com/mam/corporate-communications/investor-relations/Reports%20and%20Presentations/2025_07_Semiannual_Report_2025_EN.pdf"},
    {"co": "belimo", "p": "Q4 2025", "type": "Presentation", "title": "Financial results 2025 presentation", "url": "https://www.belimo.com/mam/corporate-communications/investor-relations/Reports%20and%20Presentations/2026_02_Presentation_of_Financial_Results__2025_.pdf"},
    {"co": "belimo", "p": "Q4 2025", "type": "Annual report", "title": "Annual report 2025 (online)", "url": "https://report.belimo.com/ar25/en/management-report"},
    {"co": "belimo", "p": "Q4 2025", "type": "Results release", "title": "FY 2025 press release (web)", "url": "https://www.eqs-news.com/news/ad-hoc/belimo-accelerated-growth-in-2025/295f5591-80dd-4287-b3ff-f149c4acf182_en"},
    {"co": "belimo", "p": "Q2 2026", "type": "Results release", "title": "H1 2026 press release (web)", "url": "https://www.eqs-news.com/news/ad-hoc/belimo-accelerated-sales-growth-in-the-first-half-of-2026/01f2af93-fa3e-4872-b3f8-514ab22ba0e0_en"},
    {"co": "belimo", "p": "Q2 2026", "type": "Half-year report", "title": "Half-year report 2026 (online)", "url": "https://report.belimo.com/HY26/en/management-report"},

    {"co": "xylem", "p": "Q1 2025", "type": "Results release", "title": "Q1 2025 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/1524472/000152447225000019/xyl04292025ex991.htm"},
    {"co": "xylem", "p": "Q2 2025", "type": "Results release", "title": "Q2 2025 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/1524472/000152447225000035/xyl07312025ex991.htm"},
    {"co": "xylem", "p": "Q3 2025", "type": "Results release", "title": "Q3 2025 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/1524472/000152447225000043/xyl10282025ex991.htm"},
    {"co": "xylem", "p": "Q4 2025", "type": "Results release", "title": "Q4 / FY 2025 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/1524472/000152447226000008/xyl02102026ex991.htm"},
    {"co": "xylem", "p": "Q1 2026", "type": "Results release", "title": "Q1 2026 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000065/xyl04282026ex991.htm"},
    {"co": "xylem", "p": "Q1 2026", "type": "Presentation", "title": "Q1 2026 results slides", "url": "https://xyleminc.gcs-web.com/static-files/b7ba322b-6ff8-450f-bfa7-2df9d270fcf1"},
    {"co": "xylem", "p": "Q2 2026", "type": "Results release", "title": "Q2 2026 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000108/xyl07282026ex991.htm"},
    {"co": "xylem", "p": "Q2 2026", "type": "Quarterly report", "title": "Q2 2026 10-Q", "url": "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000110/xyl-20260630.htm"},
    {"co": "xylem", "p": "Q3 2026", "type": "Results release", "title": "Q3 2026 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000146/xyl10272026ex991.htm"},
    {"co": "xylem", "p": "Q3 2026", "type": "Quarterly report", "title": "Q3 2026 10-Q", "url": "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000148/xyl-20260930.htm"},

    {"co": "ecolab", "p": "Q1 2025", "type": "Results release", "title": "Q1 2025 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/31462/000155837025005743/ecl-20250429xex99d1.htm"},
    {"co": "ecolab", "p": "Q2 2025", "type": "Results release", "title": "Q2 2025 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/31462/000155837025009695/ecl-20250729xex99d1.htm"},
    {"co": "ecolab", "p": "Q3 2025", "type": "Results release", "title": "Q3 2025 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/31462/000110465925102859/ecl-20251028xex99d1.htm"},
    {"co": "ecolab", "p": "Q4 2025", "type": "Results release", "title": "Q4 / FY 2025 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/31462/000110465926012358/ecl-20260210xex99d1.htm"},
    {"co": "ecolab", "p": "Q4 2025", "type": "Annual report", "title": "Annual report 2025", "url": "https://www.sec.gov/Archives/edgar/data/31462/000110465926032785/tm268255d1_ars.pdf"},
    {"co": "ecolab", "p": "Q4 2025", "type": "Annual report", "title": "10-K 2025", "url": "https://www.sec.gov/Archives/edgar/data/31462/000110465926018357/ecl-20251231x10k.htm"},
    {"co": "ecolab", "p": "Q1 2026", "type": "Results release", "title": "Q1 2026 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/0000031462/000110465926049822/ecl-20260428xex99d1.htm"},
    {"co": "ecolab", "p": "Q1 2026", "type": "Quarterly report", "title": "Q1 2026 10-Q", "url": "https://www.sec.gov/Archives/edgar/data/0000031462/000110465926056737/ecl-20260331x10q.htm"},
    {"co": "ecolab", "p": "Q2 2026", "type": "Results release", "title": "Q2 2026 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026049933/ecl_ex99x1.htm"},
    {"co": "ecolab", "p": "Q2 2026", "type": "Quarterly report", "title": "Q2 2026 10-Q", "url": "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026053886/ecl-20260630.htm"},
    {"co": "ecolab", "p": "Q3 2026", "type": "Results release", "title": "Q3 2026 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026067418/ecl_ex99x1.htm"},
    {"co": "ecolab", "p": "Q3 2026", "type": "Quarterly report", "title": "Q3 2026 10-Q", "url": "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026068208/ecl-20260930.htm"},

    {"co": "watts", "p": "Q2 2025", "type": "Results release", "title": "Q2 2025 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/795403/000155837025010556/wts-20250806xex99d1.htm"},
    {"co": "watts", "p": "Q3 2025", "type": "Results release", "title": "Q3 2025 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/795403/000110465925107038/wts-20251105xex99d1.htm"},
    {"co": "watts", "p": "Q3 2025", "type": "Quarterly report", "title": "Q3 2025 10-Q", "url": "https://www.sec.gov/Archives/edgar/data/795403/000110465925107489/wts-20250928x10q.htm"},
    {"co": "watts", "p": "Q4 2025", "type": "Results release", "title": "Q4 / FY 2025 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/795403/000110465926013437/wts-20260211xex99d1.htm"},
    {"co": "watts", "p": "Q1 2026", "type": "Results release", "title": "Q1 2026 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/0000795403/000110465926056325/wts-20260506xex99d1.htm"},
    {"co": "watts", "p": "Q1 2026", "type": "Presentation", "title": "Q1 2026 earnings deck", "url": "https://s29.q4cdn.com/117128878/files/doc_financials/2026/q1/Watts-Water-Technologies-UPDATED-Q1-26-Earnings-Deck-050626-Earnings-Presentation-for-May-7.pdf"},
    {"co": "watts", "p": "Q1 2026", "type": "Quarterly report", "title": "Q1 2026 10-Q", "url": "https://www.sec.gov/Archives/edgar/data/795403/000110465926056817/wts-20260329x10q.htm"},
    {"co": "watts", "p": "Q2 2026", "type": "Results release", "title": "Q2 2026 earnings release", "url": "https://www.sec.gov/Archives/edgar/data/0000795403/000110465926091165/wts-20260805xex99d1.htm"},
    {"co": "watts", "p": "Q2 2026", "type": "Presentation", "title": "Q2 2026 earnings deck", "url": "https://s29.q4cdn.com/117128878/files/doc_financials/2026/q2/Watts-Water-Technologies-Q2-26-Earnings-Deck_final-Presentation-for-August-6-2026.pdf"},
    {"co": "watts", "p": "Q2 2026", "type": "Quarterly report", "title": "Q2 2026 10-Q", "url": "https://www.sec.gov/Archives/edgar/data/795403/000110465926091726/wts-20260628x10q.htm"},

    {"co": "emerson", "p": "Q1 2025", "type": "Results release", "title": "Fiscal Q2 2025 results", "url": "https://ir.emerson.com/_assets/_10ad2d822f6d4902fd020ca535f9805e/emerson/news/2025-05-07_Emerson_Reports_Second_Quarter_2025_Results_8.pdf"},
    {"co": "emerson", "p": "Q1 2025", "type": "Presentation", "title": "Fiscal Q2 2025 presentation", "url": "https://ir.emerson.com/_assets/_83c3777b7a2a1deaf1f9f1ccca620065/emerson/db/938/9581/presentation/emerson-2025-q2-earnings-presentation-en-us-11737160.pdf"},
    {"co": "emerson", "p": "Q2 2025", "type": "Results release", "title": "Fiscal Q3 2025 results", "url": "https://ir.emerson.com/_assets/_83c3777b7a2a1deaf1f9f1ccca620065/emerson/news/2025-08-06_Emerson_Reports_Third_Quarter_2025_Results_612.pdf"},
    {"co": "emerson", "p": "Q2 2025", "type": "Presentation", "title": "Fiscal Q3 2025 presentation", "url": "https://ir.emerson.com/_assets/_21ac9392165fd390cbc5231cf185e4d4/emerson/db/938/10098/presentation/Emerson+2025+Q3+Earnings+Presentation.pdf"},
    {"co": "emerson", "p": "Q3 2025", "type": "Results release", "title": "Fiscal Q4 / FY 2025 results", "url": "https://ir.emerson.com/_assets/_80fc1c2bd9b6b4b0e1f3c778904be7d7/emerson/news/2025-11-05_Emerson_Reports_Fourth_Quarter_and_Full_Year_2025__617.pdf"},
    {"co": "emerson", "p": "Q3 2025", "type": "Presentation", "title": "Fiscal Q4 / FY 2025 presentation", "url": "https://ir.emerson.com/_assets/_b0268256875b876312545fa5fd0c95ef/emerson/db/938/10115/presentation/Emerson+2025+Q4+and+Full+Year+Earnings+Presentation.pdf"},
    {"co": "emerson", "p": "Q3 2025", "type": "Annual report", "title": "10-K fiscal 2025", "url": "https://ir.emerson.com/sec-filings/all-sec-filings/content/0000032604-25-000087/0000032604-25-000087.pdf"},
    {"co": "emerson", "p": "Q4 2025", "type": "Results release", "title": "Fiscal Q1 2026 results", "url": "https://ir.emerson.com/_assets/_0dfcd1db8f1e0a2d66af142d1b1193f5/emerson/news/2026-02-03_Emerson_Reports_First_Quarter_2026_Results_623.pdf"},
    {"co": "emerson", "p": "Q4 2025", "type": "Presentation", "title": "Fiscal Q1 2026 presentation", "url": "https://ir.emerson.com/_assets/_10ad2d822f6d4902fd020ca535f9805e/emerson/db/938/10134/presentation/Emerson+2026+Q1+Earnings+Presentation.pdf"},
    {"co": "emerson", "p": "Q1 2026", "type": "Results release", "title": "Fiscal Q2 2026 results", "url": "https://ir.emerson.com/_assets/_f6e5597605579b03df2f9ddcfe39bf0a/emerson/news/2026-05-05_Emerson_Reports_Second_Quarter_2026_Results_629.pdf"},
    {"co": "emerson", "p": "Q1 2026", "type": "Presentation", "title": "Fiscal Q2 2026 presentation", "url": "https://ir.emerson.com/_assets/_92938d7656e1748428814c75f21183f6/emerson/db/938/10208/presentation/Emerson+2026+Q2+Earnings+Presentation.pdf"},
    {"co": "emerson", "p": "Q2 2026", "type": "Results release", "title": "Fiscal Q3 2026 results", "url": "https://ir.emerson.com/_assets/_c0388696e3a69f59a3ee43598053c60c/emerson/news/2026-08-04_Emerson_Reports_Third_Quarter_2026_Results_Raises__642.pdf"},
    {"co": "emerson", "p": "Q2 2026", "type": "Presentation", "title": "Fiscal Q3 2026 presentation", "url": "https://ir.emerson.com/_assets/_39b9c4b55c1314921bb642cd27956a1b/emerson/db/938/10242/presentation/Emerson+2026+Q3+Earnings+Presentation.pdf"},

    {"co": "gf", "p": "Q4 2025", "type": "Annual report", "title": "Annual report 2025", "url": "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/annual-report/annual-report-2025/en/annual-report-2025-full-version-en.pdf"},
    {"co": "gf", "p": "Q4 2025", "type": "Presentation", "title": "FY 2025 analyst and media presentation", "url": "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/annual-report/annual-report-2025/en/presentation-analyst-and-media-conference-2026-en.pdf"},
    {"co": "gf", "p": "Q2 2026", "type": "Results release", "title": "H1 2026 ad hoc announcement", "url": "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/mid-year-reports/mid-year-report-2026/en/ad-hoc-announcement-en-mid-year-report-2026.pdf"},
    {"co": "gf", "p": "Q2 2026", "type": "Presentation", "title": "H1 2026 results presentation", "url": "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/mid-year-reports/mid-year-report-2026/en/mid-year-report-2026-presentation-en.pdf"},
    {"co": "gf", "p": "Q2 2026", "type": "Half-year report", "title": "Mid-year report 2026 (web)", "url": "https://www.georgfischer.com/en/investors/reports-and-presentations/mid-year-report.html"}
  ]
};
