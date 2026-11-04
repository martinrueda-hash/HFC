// Competitor watch data. Strict JSON after "window.CW =", so tools/fetch_competitor_data.py can read it.
// Figures are in each company's reporting currency (millions unless stated). Quarters are labelled as each company
// declares them; Emerson's fiscal year ends 30 September, so its Q1 is October–December.
// For half-year reporters, Q2 shows the H1 report and Q4 the full-year report; Q1 and Q3 show trading updates.
// "derived" lists figures calculated from reported growth rates and the current-year figure, not reported directly.
window.CW = {
 "asOf": "2026-11-04",
 "periods": [
  "Q1 2025",
  "Q2 2025",
  "Q3 2025",
  "Q4 2025",
  "Q1 2026",
  "Q2 2026",
  "Q3 2026"
 ],
 "companies": [
  {
   "id": "aalberts",
   "name": "Aalberts",
   "self": true,
   "ccy": "EUR",
   "exch": "Euronext Amsterdam",
   "ticker": "AALB",
   "yahoo": [
    "AALB.AS"
   ],
   "stooq": [
    "aalb.nl"
   ],
   "quoteCcy": "EUR",
   "cadence": "Q1 and Q3 trading updates, H1 and FY results",
   "ir": "https://aalberts.com/investor",
   "color": "#ce0e2d",
   "profLbl": "EBITA"
  },
  {
   "id": "imi",
   "name": "IMI",
   "ccy": "GBP",
   "exch": "London",
   "ticker": "IMI",
   "yahoo": [
    "IMI.L"
   ],
   "stooq": [
    "imi.uk"
   ],
   "quoteCcy": "GBp",
   "cadence": "Q1 and Q3 trading updates, H1 and FY results",
   "ir": "https://www.imiplc.com/en/investors/results-reports-presentations/",
   "color": "#2a78d6",
   "profLbl": "Adj. operating profit"
  },
  {
   "id": "belimo",
   "name": "Belimo",
   "ccy": "CHF",
   "exch": "SIX Swiss Exchange",
   "ticker": "BEAN",
   "yahoo": [
    "BEAN.SW"
   ],
   "stooq": [
    "bean.ch"
   ],
   "quoteCcy": "CHF",
   "cadence": "H1 and FY results; FY sales published in January",
   "ir": "https://www.belimo.com/ch/en_GB/about/investor-relations",
   "color": "#eb6834",
   "profLbl": "EBIT"
  },
  {
   "id": "xylem",
   "name": "Xylem",
   "ccy": "USD",
   "exch": "NYSE",
   "ticker": "XYL",
   "yahoo": [
    "XYL"
   ],
   "stooq": [
    "xyl.us"
   ],
   "quoteCcy": "USD",
   "cadence": "Quarterly",
   "ir": "https://investors.xylem.com/",
   "color": "#1baf7a",
   "profLbl": "Adj. EBITDA"
  },
  {
   "id": "ecolab",
   "name": "Ecolab",
   "ccy": "USD",
   "exch": "NYSE",
   "ticker": "ECL",
   "yahoo": [
    "ECL"
   ],
   "stooq": [
    "ecl.us"
   ],
   "quoteCcy": "USD",
   "cadence": "Quarterly",
   "ir": "https://investor.ecolab.com/",
   "color": "#eda100",
   "profLbl": "Reported operating income"
  },
  {
   "id": "watts",
   "name": "Watts",
   "ccy": "USD",
   "exch": "NYSE",
   "ticker": "WTS",
   "yahoo": [
    "WTS"
   ],
   "stooq": [
    "wts.us"
   ],
   "quoteCcy": "USD",
   "cadence": "Quarterly",
   "ir": "https://investors.watts.com/",
   "color": "#e87ba4",
   "profLbl": "Operating income (GAAP)"
  },
  {
   "id": "emerson",
   "name": "Emerson",
   "ccy": "USD",
   "exch": "NYSE",
   "ticker": "EMR",
   "yahoo": [
    "EMR"
   ],
   "stooq": [
    "emr.us"
   ],
   "quoteCcy": "USD",
   "cadence": "Quarterly; fiscal year ends 30 September. Quarters shown as Emerson labels them (Q1 = Oct–Dec).",
   "ir": "https://ir.emerson.com/",
   "color": "#008300",
   "profLbl": "Adj. segment EBITA",
   "fyNote": "Emerson's financial year ends on 30 September, so its quarters are offset from the calendar: Q1 = October–December, Q2 = January–March, Q3 = April–June, Q4 = July–September. Quarters are shown as Emerson labels them (e.g. Q1 2026 = October–December 2025)."
  },
  {
   "id": "pentair",
   "name": "Pentair",
   "ccy": "USD",
   "exch": "NYSE",
   "ticker": "PNR",
   "yahoo": [
    "PNR"
   ],
   "stooq": [
    "pnr.us"
   ],
   "quoteCcy": "USD",
   "cadence": "Quarterly",
   "ir": "https://investors.pentair.com/",
   "color": "#0e7c86",
   "profLbl": "Total segment income"
  },
  {
   "id": "gf",
   "name": "Georg Fischer",
   "ccy": "CHF",
   "exch": "SIX Swiss Exchange",
   "ticker": "GF",
   "yahoo": [
    "GF.SW",
    "FI-N.SW"
   ],
   "stooq": [
    "gf.ch",
    "fi-n.ch"
   ],
   "quoteCcy": "CHF",
   "cadence": "H1 and FY results",
   "ir": "https://www.georgfischer.com/en/investors/reports-and-presentations.html",
   "color": "#6250d6",
   "profLbl": "Comparable EBITDA"
  },
  {
   "id": "danfoss",
   "name": "Danfoss",
   "ccy": "EUR",
   "exch": "Not listed (privately owned)",
   "ticker": "–",
   "yahoo": [],
   "stooq": [],
   "quoteCcy": "EUR",
   "cadence": "H1 and FY results only (no Q1 or Q3 figures)",
   "ir": "https://www.danfoss.com/en/about-danfoss/company/financial-information/",
   "color": "#8a5a2b",
   "profLbl": "Operational EBITA",
   "fyNote": "Danfoss is not listed on a stock exchange (owned by the Danfoss family and the Bitten & Mads Clausen Foundation), so it has no share price; it is included because it publishes audited financial results, half-year and full-year only."
  }
 ],
 "calendar": [
  {
   "co": "aalberts",
   "date": "2026-02-26",
   "event": "FY 2025 results"
  },
  {
   "co": "aalberts",
   "date": "2026-05-01",
   "event": "Q1 2026 results"
  },
  {
   "co": "aalberts",
   "date": "2026-07-23",
   "event": "H1 2026 results"
  },
  {
   "co": "aalberts",
   "date": "2026-10-22",
   "event": "Q3 2026 results"
  },
  {
   "co": "aalberts",
   "date": "2027-02-23",
   "event": "FY 2026 results",
   "status": "confirmed"
  },
  {
   "co": "aalberts",
   "date": "2027-04-29",
   "event": "Q1 2027 results",
   "status": "confirmed"
  },
  {
   "co": "imi",
   "date": "2026-05-12",
   "event": "Q1 2026 trading update"
  },
  {
   "co": "imi",
   "date": "2026-07-31",
   "event": "H1 2026 results"
  },
  {
   "co": "imi",
   "date": "2026-10-29",
   "event": "Q3 2026 trading update"
  },
  {
   "co": "imi",
   "date": "2027-03-09",
   "event": "FY 2026 results",
   "status": "confirmed"
  },
  {
   "co": "belimo",
   "date": "2026-07-20",
   "event": "H1 2026 results"
  },
  {
   "co": "belimo",
   "date": "2027-01-18",
   "event": "FY 2026 sales",
   "status": "confirmed"
  },
  {
   "co": "belimo",
   "date": "2027-03-01",
   "event": "Annual report 2026",
   "status": "confirmed"
  },
  {
   "co": "xylem",
   "date": "2026-02-10",
   "event": "Q4 / FY 2025 results"
  },
  {
   "co": "xylem",
   "date": "2026-04-28",
   "event": "Q1 2026 results"
  },
  {
   "co": "xylem",
   "date": "2026-07-28",
   "event": "Q2 2026 results"
  },
  {
   "co": "xylem",
   "date": "2026-10-27",
   "event": "Q3 2026 results"
  },
  {
   "co": "xylem",
   "date": "2027-02-09",
   "event": "Q4 / FY 2026 results",
   "status": "estimated",
   "note": "Not announced yet; early February based on 2026 (10 Feb)"
  },
  {
   "co": "ecolab",
   "date": "2026-02-10",
   "event": "Q4 / FY 2025 results"
  },
  {
   "co": "ecolab",
   "date": "2026-04-28",
   "event": "Q1 2026 results"
  },
  {
   "co": "ecolab",
   "date": "2026-07-28",
   "event": "Q2 2026 results"
  },
  {
   "co": "ecolab",
   "date": "2026-10-27",
   "event": "Q3 2026 results"
  },
  {
   "co": "ecolab",
   "date": "2027-02-09",
   "event": "Q4 / FY 2026 results",
   "status": "estimated",
   "note": "Not announced yet; early February based on 2026 (10 Feb)"
  },
  {
   "co": "watts",
   "date": "2026-02-11",
   "event": "Q4 / FY 2025 results"
  },
  {
   "co": "watts",
   "date": "2026-05-06",
   "event": "Q1 2026 results"
  },
  {
   "co": "watts",
   "date": "2026-08-05",
   "event": "Q2 2026 results"
  },
  {
   "co": "watts",
   "date": "2026-11-04",
   "event": "Q3 2026 results",
   "status": "confirmed",
   "note": "After market close; call 5 Nov, 9:00 ET"
  },
  {
   "co": "emerson",
   "date": "2026-02-03",
   "event": "Q1 2026 results"
  },
  {
   "co": "emerson",
   "date": "2026-05-05",
   "event": "Q2 2026 results"
  },
  {
   "co": "emerson",
   "date": "2026-08-04",
   "event": "Q3 2026 results"
  },
  {
   "co": "emerson",
   "date": "2026-11-04",
   "event": "Q4 / FY 2026 results",
   "status": "confirmed",
   "note": "Before market open; call 8:30 ET"
  },
  {
   "co": "gf",
   "date": "2027-03-03",
   "event": "FY 2026 results and annual report",
   "status": "confirmed"
  },
  {
   "co": "gf",
   "date": "2027-07-16",
   "event": "H1 2027 results",
   "status": "confirmed"
  },
  {
   "co": "pentair",
   "date": "2026-07-28",
   "event": "Q2 2026 results"
  },
  {
   "co": "pentair",
   "date": "2026-10-27",
   "event": "Q3 2026 results"
  },
  {
   "co": "pentair",
   "date": "2027-02-02",
   "event": "Q4 / FY 2026 results",
   "status": "estimated",
   "note": "Not announced yet; Pentair usually reports Q4 in early February"
  },
  {
   "co": "imi",
   "date": "2026-03-06",
   "event": "FY 2025 results"
  },
  {
   "co": "imi",
   "date": "2025-05-08",
   "event": "Q1 2025 trading update"
  },
  {
   "co": "imi",
   "date": "2025-08-01",
   "event": "H1 2025 results"
  },
  {
   "co": "imi",
   "date": "2025-11-06",
   "event": "Q3 2025 trading update"
  },
  {
   "co": "belimo",
   "date": "2026-02-23",
   "event": "FY 2025 results and annual report"
  },
  {
   "co": "xylem",
   "date": "2025-04-29",
   "event": "Q1 2025 results"
  },
  {
   "co": "xylem",
   "date": "2025-07-31",
   "event": "Q2 2025 results"
  },
  {
   "co": "xylem",
   "date": "2025-10-28",
   "event": "Q3 2025 results"
  },
  {
   "co": "ecolab",
   "date": "2025-04-29",
   "event": "Q1 2025 results"
  },
  {
   "co": "ecolab",
   "date": "2025-07-29",
   "event": "Q2 2025 results"
  },
  {
   "co": "ecolab",
   "date": "2025-10-28",
   "event": "Q3 2025 results"
  },
  {
   "co": "danfoss",
   "date": "2027-03-02",
   "event": "FY 2026 results and annual report",
   "status": "estimated"
  },
  {
   "co": "danfoss",
   "date": "2027-08-19",
   "event": "H1 2027 results",
   "status": "estimated"
  }
 ],
 "results": {
  "aalberts": {
   "Q1 2025": {
    "report": "Q1 2025 trading update",
    "rev": 778.3,
    "org": -3.3,
    "mgnLbl": "EBITA margin",
    "mgn": 13.6,
    "src": [
     [
      "Q1 2025 press release (PDF)",
      "reports/aalberts/Q1-2025_q1-2025-press-release.pdf"
     ]
    ],
    "prof": 105.7,
    "revPy": 810.1,
    "revChg": -3.9,
    "orgPy": -5.1,
    "profPy": 115.0,
    "mgnPy": 14.2,
    "seg": [
     {
      "n": "Building",
      "rev": 408.5,
      "revPy": 412.7,
      "org": 1.7,
      "orgPy": -8.8,
      "prof": 54.0,
      "profPy": 49.9,
      "mgn": 13.2,
      "mgnPy": 12.1
     },
     {
      "n": "Industry",
      "rev": 262.6,
      "revPy": 276.1,
      "org": -6.9,
      "orgPy": -6.1,
      "prof": 42.8,
      "profPy": 50.4,
      "mgn": 16.3,
      "mgnPy": 18.2,
      "note": "Automotive and machine building weak; aerospace, maritime, power and defence growing"
     },
     {
      "n": "Semicon",
      "rev": 111.6,
      "revPy": 125.8,
      "org": -11.3,
      "orgPy": 12.6,
      "prof": 11.1,
      "profPy": 18.0,
      "mgn": 10.0,
      "mgnPy": 14.4,
      "note": "Customer inventory adjustments"
     }
    ],
    "segNote": "Building returned to growth (+1.7% organic) with margin +110 bps to 13.2%. Industry −6.9% (weak automotive, machine building, Germany and France) and semicon −11.3% (customer destocking) pulled margins down to 16.3% and 10.0%.",
    "segLbl": "By reporting segment; margin = EBITA margin (before exceptionals)"
   },
   "Q2 2025": {
    "report": "H1 2025 results (6 months)",
    "date": "2025-07-24",
    "rev": 1557,
    "org": -3.2,
    "mgnLbl": "EBITA margin",
    "mgn": 13.5,
    "guide": "Full-year EBITA margin outlook cut to 13–14%; no improvement in organic growth expected in H2.",
    "src": [
     [
      "H1 2025 press release (PDF)",
      "reports/aalberts/Q2-2025_h1-2025-press-release.pdf"
     ]
    ],
    "prof": 210,
    "revPy": 1619,
    "revChg": -3.8,
    "orgPy": -3.9,
    "profPy": 242,
    "mgnPy": 15.0,
    "seg": [
     {
      "n": "Building",
      "rev": 800.7,
      "revPy": 824.1,
      "org": 1.4,
      "orgPy": -5.9,
      "prof": 103.4,
      "profPy": 106.8,
      "mgn": 12.9,
      "mgnPy": 13.0
     },
     {
      "n": "Industry",
      "rev": 546.1,
      "revPy": 548.7,
      "org": -4.9,
      "orgPy": -6.4,
      "prof": 91.6,
      "profPy": 102.4,
      "mgn": 16.8,
      "mgnPy": 18.7
     },
     {
      "n": "Semicon",
      "rev": 219.8,
      "revPy": 254.0,
      "org": -13.4,
      "orgPy": 10.0,
      "prof": 25.2,
      "profPy": 36.6,
      "mgn": 11.5,
      "mgnPy": 14.4
     }
    ],
    "segNote": "Building +1.4% organic with a stable 12.9% margin. Industry −4.9% and semicon −13.4% on trade-policy uncertainty; semicon EBITA −31%. Added value margin held at 63.3%.",
    "segLbl": "By reporting segment; margin = EBITA margin (before exceptionals)",
    "eps": {
     "l": "EPS before amortisation",
     "v": "EUR 1.38",
     "c": "EUR 1.61 in H1 2024"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "56",
     "c": "48 in H1 2024"
    }
   },
   "Q3 2025": {
    "report": "Q3 2025 trading update",
    "rev": 772.5,
    "org": -1.9,
    "mgnLbl": "EBITA margin",
    "mgn": 12.5,
    "note": "Margin remained under pressure, especially in the building segment.",
    "src": [
     [
      "Q3 2025 press release (PDF)",
      "reports/aalberts/Q3-2025_q3-2025-press-release.pdf"
     ]
    ],
    "prof": 96.3,
    "seg": [
     {
      "n": "Building",
      "rev": 389.4,
      "revPy": 385.4,
      "org": 3.2,
      "orgPy": -1.6,
      "prof": 42.0,
      "profPy": 44.6,
      "mgn": 10.8,
      "mgnPy": 11.6,
      "note": "Margin under pressure"
     },
     {
      "n": "Industry",
      "rev": 280.3,
      "revPy": 260.5,
      "org": -1.1,
      "orgPy": -8.3,
      "prof": 49.6,
      "profPy": 46.2,
      "mgn": 17.7,
      "mgnPy": 17.7,
      "note": "Additional footprint optimisation; aerospace, maritime, power and defence growing"
     },
     {
      "n": "Semicon",
      "rev": 107.8,
      "revPy": 131.3,
      "org": -17.8,
      "orgPy": 10.8,
      "prof": 14.2,
      "profPy": 18.8,
      "mgn": 13.2,
      "mgnPy": 14.3,
      "note": "Lower demand; long-term AI-driven fundamentals intact"
     }
    ],
    "segNote": "Building +3.2% organic but margin down to 10.8%; industry stable margin at 17.7% with acquisitions lifting revenue; semicon −17.8% organic.",
    "revPy": 772.9,
    "revChg": -0.1,
    "orgPy": -2.1,
    "profPy": 106.2,
    "mgnPy": 13.7,
    "segLbl": "By reporting segment; margin = EBITA margin (before exceptionals)"
   },
   "Q4 2025": {
    "report": "FY 2025 results (12 months)",
    "date": "2026-02-26",
    "rev": 3091,
    "revChg": -1.8,
    "org": -2.5,
    "mgnLbl": "EBITA margin",
    "mgn": 13.2,
    "eps": {
     "l": "EPS before amortisation",
     "v": "EUR 2.61",
     "c": "EUR 3.12 in 2024"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "361",
     "c": "334 in 2024"
    },
    "guide": "Improvement in organic growth and EBITA margin expected in 2026. EUR 75m share buyback (27 Feb – 9 Oct 2026).",
    "src": [
     [
      "FY 2025 press release (PDF)",
      "reports/aalberts/Q4-2025_fy-2025-press-release.pdf"
     ]
    ],
    "prof": 410,
    "profPy": 471,
    "revPy": 3149,
    "orgPy": -3.4,
    "mgnPy": 15.0,
    "seg": [
     {
      "n": "Building",
      "rev": 1565.1,
      "revPy": 1602.5,
      "org": 1.3,
      "orgPy": -3.0,
      "prof": 183.5,
      "profPy": 206.5,
      "mgn": 11.7,
      "mgnPy": 12.9
     },
     {
      "n": "Industry",
      "rev": 1085.6,
      "revPy": 1060.9,
      "org": -2.8,
      "orgPy": -7.5,
      "prof": 186.3,
      "profPy": 197.2,
      "mgn": 17.2,
      "mgnPy": 18.6
     },
     {
      "n": "Semicon",
      "rev": 459.6,
      "revPy": 501.3,
      "org": -13.8,
      "orgPy": 4.7,
      "prof": 54.5,
      "profPy": 71.4,
      "mgn": 11.9,
      "mgnPy": 14.2
     }
    ],
    "segNote": "Building the only segment growing organically (+1.3%) but margin −120 bps to 11.7%. Industry −2.8% organic (revenue +2% with acquisitions), margin 17.2%. Semicon −13.8% organic, EBITA −24%, margin 11.9%.",
    "segLbl": "By reporting segment; margin = EBITA margin (before exceptionals)"
   },
   "Q1 2026": {
    "report": "Q1 2026 trading update",
    "date": "2026-05-01",
    "rev": 771.9,
    "org": 2.8,
    "mgnLbl": "EBITA margin",
    "mgn": 14.2,
    "note": "Return to organic growth; positive organic growth and better EBITA margin in all three segments. Broen (Denmark) divested on 12 March 2026.",
    "guide": "Further improvement in organic growth and EBITA margin expected in 2026.",
    "src": [
     [
      "Q1 2026 press release (PDF)",
      "reports/aalberts/Q1-2026_q1-2026-press-release.pdf"
     ]
    ],
    "prof": 109.7,
    "profPy": 105.7,
    "revPy": 778.3,
    "orgPy": -3.3,
    "revChg": -0.8,
    "mgnPy": 13.6,
    "seg": [
     {
      "n": "Building",
      "rev": 369.4,
      "revPy": 408.5,
      "org": 1.3,
      "orgPy": 1.7,
      "prof": 53.7,
      "profPy": 54.0,
      "mgn": 14.5,
      "mgnPy": 13.2,
      "note": "High organic growth in the USA; Europe weak (France, Germany); data-centre order book growing"
     },
     {
      "n": "Industry",
      "rev": 247.9,
      "revPy": 262.6,
      "org": 5.8,
      "orgPy": -6.9,
      "prof": 42.3,
      "profPy": 42.8,
      "mgn": 17.1,
      "mgnPy": 16.3,
      "note": "Business development and geographical expansion"
     },
     {
      "n": "Semicon",
      "rev": 159.0,
      "revPy": 111.6,
      "org": 2.2,
      "orgPy": -11.3,
      "prof": 21.1,
      "profPy": 11.1,
      "mgn": 13.3,
      "mgnPy": 10.0,
      "note": "Revenue +42% incl. acquisitions"
     }
    ],
    "segNote": "Growth returned in all three segments: industry +5.8% organic, semicon +2.2% (revenue +42% with acquisitions, EBITA almost doubled), building +1.3% with margin +130 bps to 14.5% despite divestments (revenue −10%).",
    "segLbl": "By reporting segment; margin = EBITA margin (before exceptionals)"
   },
   "Q2 2026": {
    "report": "H1 2026 results (6 months)",
    "date": "2026-07-23",
    "rev": 1560,
    "revChg": 0.2,
    "org": 5.0,
    "mgnLbl": "EBITA margin",
    "mgn": 14.4,
    "note": "All three segments improved. Positive end-market dynamics in data centres, aerospace, power generation, defence and semicon; stable automotive and residential building.",
    "guide": "Confident of a full year with improved organic growth and EBITA margin versus 2025.",
    "src": [
     [
      "H1 2026 press release (PDF)",
      "reports/aalberts/Q2-2026_h1-2026-press-release.pdf"
     ]
    ],
    "prof": 225,
    "profPy": 210,
    "revPy": 1557,
    "seg": [
     {
      "n": "Building",
      "rev": 743.0,
      "revPy": 800.7,
      "org": 2.9,
      "orgPy": 1.4,
      "prof": 100.4,
      "profPy": 103.4,
      "mgn": 13.5,
      "mgnPy": 12.9
     },
     {
      "n": "Industry",
      "rev": 489.1,
      "revPy": 546.1,
      "org": 6.4,
      "orgPy": -4.9,
      "prof": 90.9,
      "profPy": 91.6,
      "mgn": 18.6,
      "mgnPy": 16.8
     },
     {
      "n": "Semicon",
      "rev": 335.7,
      "revPy": 219.8,
      "org": 9.2,
      "orgPy": -13.4,
      "prof": 47.5,
      "profPy": 25.2,
      "mgn": 14.2,
      "mgnPy": 11.5
     }
    ],
    "segNote": "All segments grew organically and improved margins. Semicon +9.2% organic (revenue +53% with acquisitions, EBITA +88%, margin 14.2%); industry +6.4% with margin +180 bps to 18.6%; building +2.9%, margin 13.5%. Divestments cut building and industry revenue by 7–10%.",
    "orgPy": -3.2,
    "mgnPy": 13.5,
    "segLbl": "By reporting segment; margin = EBITA margin (before exceptionals)",
    "eps": {
     "l": "EPS before amortisation",
     "v": "EUR 1.47",
     "c": "EUR 1.38 in H1 2025"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "89",
     "c": "56 in H1 2025; capex 71 (100)"
    }
   },
   "Q3 2026": {
    "report": "Q3 2026 trading update",
    "date": "2026-10-22",
    "rev": 823.3,
    "revChg": 6.6,
    "org": 13.0,
    "mgnLbl": "EBITA margin",
    "mgn": 13.8,
    "mgnChg": 130,
    "extra": [
     {
      "l": "EBITA",
      "v": "113.8",
      "c": "+18% vs 96.3"
     },
     {
      "l": "Buyback",
      "v": "75.0",
      "c": "2,068,007 shares, to be cancelled"
     }
    ],
    "seg": [
     {
      "n": "Building",
      "rev": 387.2,
      "revPy": 389.4,
      "org": 9.3,
      "prof": 46.8,
      "profPy": 42.0,
      "mgn": 12.1,
      "mgnPy": 10.8,
      "orgPy": 3.2,
      "note": "Mixed by region and product line. North America strong, especially valves, with a growing data-centre order book; Europe mixed, residential low, connection systems still under margin pressure."
     },
     {
      "n": "Industry",
      "rev": 238.3,
      "revPy": 280.3,
      "org": 8.6,
      "prof": 45.5,
      "profPy": 49.6,
      "mgn": 19.1,
      "mgnPy": 17.7,
      "orgPy": -1.1,
      "note": "Growth supported by business development and geographical expansion; strong demand in aerospace, power generation and defence, stable automotive."
     },
     {
      "n": "Semicon",
      "rev": 201.2,
      "revPy": 107.8,
      "org": 34.1,
      "prof": 31.2,
      "profPy": 14.2,
      "mgn": 15.5,
      "mgnPy": 13.2,
      "orgPy": -17.8,
      "note": "Growth accelerated and was higher than expected; capacity ramped up in Europe and Southeast Asia."
     }
    ],
    "guide": "Entering Q4 with positive momentum and a healthy order book; confident of a full year with improved organic growth and EBITA margin versus 2025.",
    "src": [
     [
      "Q3 2026 press release (PDF, 22 Oct 2026)",
      "reports/aalberts/Q3-2026_q3-2026-press-release.pdf"
     ],
     [
      "Press release (web)",
      "https://www.globenewswire.com/news-release/2026/10/22/3386031/0/en/aalberts-n-v-aalberts-reports-third-quarter-2026-results.html"
     ]
    ],
    "prof": 113.8,
    "profPy": 96.3,
    "revPy": 772.5,
    "segNote": "All three segments improved organic growth and EBITA margin. Semicon +34.1% organic (revenue nearly doubled, EBITA 31.2 vs 14.2, margin 15.5%) on accelerating AI-related demand. Building +9.3% organic and margin 12.1% (+130 bps), but revenue −2.2m after divestments. Industry +8.6% organic, margin 19.1% (+140 bps); revenue −42.0m from divestments.",
    "orgPy": -1.9,
    "segLbl": "By reporting segment; margin = EBITA margin (before exceptionals)"
   }
  },
  "imi": {
   "Q2 2025": {
    "report": "H1 2025 results (6 months)",
    "date": "2025-08-01",
    "rev": 1091,
    "revPy": 1098,
    "revChg": -1,
    "org": 2,
    "mgnLbl": "Adj. operating margin",
    "mgn": 18.2,
    "mgnPy": 17.9,
    "prof": 198,
    "profPy": 196,
    "eps": {
     "l": "Adj. basic EPS",
     "v": "56.1p",
     "c": "+3% vs 54.7p"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "30",
     "c": "65 in H1 2024; cyber incident and pension loan"
    },
    "orders": {
     "l": "Process Automation orders",
     "v": "530",
     "c": "flat organic; aftermarket +10%; order book 904 (+5%)"
    },
    "seg": [
     {
      "n": "Automation",
      "rev": 691,
      "revPy": 684,
      "org": 3,
      "prof": 127,
      "profPy": 126,
      "mgn": 18.4,
      "mgnPy": 18.4
     },
     {
      "n": "· Process Automation",
      "org": 8,
      "sub": true,
      "rev": 446,
      "revPy": 422,
      "note": "Aftermarket orders 332 (+10% organic); new construction orders 198 (−13%)"
     },
     {
      "n": "· Industrial Automation",
      "org": -4,
      "sub": true,
      "rev": 245,
      "revPy": 262,
      "note": "Rebuilding after the cyber incident"
     },
     {
      "n": "Life Technology",
      "rev": 400,
      "revPy": 414,
      "org": -1,
      "prof": 71,
      "profPy": 70,
      "mgn": 17.8,
      "mgnPy": 17.0
     },
     {
      "n": "· Climate Control",
      "org": 5,
      "sub": true,
      "rev": 204,
      "revPy": 196,
      "note": "Strong demand for energy-saving solutions"
     },
     {
      "n": "· Life Science & Fluid Control",
      "org": -5,
      "sub": true,
      "rev": 112,
      "revPy": 123
     },
     {
      "n": "· Transport",
      "org": -9,
      "sub": true,
      "rev": 84,
      "revPy": 95
     }
    ],
    "segNote": "Process Automation +8% organic (aftermarket orders +10%) and Climate Control +5% offset Industrial Automation (−4%, cyber incident), Life Science & Fluid Control (−5%) and Transport (−9%). Life Technology margin +80 bps to 17.8% despite lower sales; Automation margin flat at 18.4%.",
    "guide": "FY 2025 adj. basic EPS 129p–136p reconfirmed; fourth year of mid-single-digit organic growth on track.",
    "src": [
     [
      "H1 2025 interim results (PDF)",
      "reports/imi/Q2-2025_h1-2025-interim-results.pdf"
     ]
    ]
   },
   "Q3 2025": {
    "report": "Q3 2025 trading update",
    "date": "2025-11-06",
    "revChg": 11,
    "org": 12,
    "mgnLbl": "Adj. operating margin",
    "seg": [
     {
      "n": "Automation",
      "org": 17,
      "note": "Year to date +8%"
     },
     {
      "n": "· Process Automation",
      "org": 26,
      "sub": true,
      "note": "YTD +14%; aftermarket orders +7% YTD; total orders flat YTD (+5% excl. a £33m Marine order last year)"
     },
     {
      "n": "· Industrial Automation",
      "org": 2,
      "sub": true,
      "note": "Catch-up shipments after the Q1 cyber incident"
     },
     {
      "n": "Life Technology",
      "org": 4,
      "note": "Year to date +1%"
     },
     {
      "n": "· Climate Control",
      "org": 5,
      "sub": true,
      "note": "Energy-saving building products and data-centre cooling"
     },
     {
      "n": "· Life Science & Fluid Control",
      "org": 13,
      "sub": true,
      "note": "Improved demand and catch-up shipments; YTD +1%"
     },
     {
      "n": "· Transport",
      "org": -9,
      "sub": true,
      "note": "In line with the heavy-duty truck market; strategic review progressing"
     }
    ],
    "segNote": "Process Automation (+26%) drove an excellent quarter on order-book phasing; Life Science & Fluid Control +13% on catch-up shipments; Transport −9% with the truck market. Group +12% organic, +5% year to date.",
    "guide": "FY 2025 adj. basic EPS 129p–136p reconfirmed; fourth consecutive year of mid-single-digit organic growth on track.",
    "src": [
     [
      "Q3 2025 trading update (PDF)",
      "reports/imi/Q3-2025_q3-2025-trading-update.pdf"
     ]
    ]
   },
   "Q4 2025": {
    "report": "FY 2025 results (12 months)",
    "rev": 2304,
    "revChg": 4,
    "org": 5,
    "mgnLbl": "Adj. operating margin",
    "mgn": 20.0,
    "mgnChg": 30,
    "eps": {
     "l": "Adj. basic EPS",
     "v": "132.3p",
     "c": "+8%"
    },
    "cash": {
     "l": "Cash conversion",
     "v": "96%"
    },
    "extra": [
     {
      "l": "Adj. operating profit",
      "v": "460",
      "c": "+6%; organic +8%"
     },
     {
      "l": "Statutory operating margin",
      "v": "18.3%",
      "c": "+220 bps"
     },
     {
      "l": "Dividend per share",
      "v": "+10%"
     }
    ],
    "seg": [
     {
      "n": "Automation",
      "rev": 1504,
      "prof": 314.3,
      "mgn": 20.9
     },
     {
      "n": "Life Technology",
      "rev": 800,
      "prof": 145.6,
      "mgn": 18.2,
      "mgnPy": 18.4
     }
    ],
    "guide": "2026 adj. basic EPS 136p–142p. GBP 500m share buyback announced.",
    "derived": [
     "seg.Automation.prof",
     "seg.Life Technology.rev",
     "seg.Life Technology.prof"
    ],
    "src": [
     [
      "FY 2025 press release",
      "https://www.imiplc.com/media/zoonx1ed/imi-plc-full-year-results-2025-press-release.pdf"
     ],
     [
      "FY 2025 presentation",
      "https://www.imiplc.com/media/qvugs2u0/imi-plc-full-year-results-2025-presentation.pdf"
     ]
    ],
    "prof": 460,
    "segNote": "Automation organic adj. operating profit +11% at a 20.9% margin; Life Technology flat organically, margin −20 bps to 18.2%."
   },
   "Q1 2026": {
    "report": "Q1 2026 trading update",
    "date": "2026-05-12",
    "revChg": 6,
    "org": 5,
    "mgnLbl": "Adj. operating margin",
    "seg": [
     {
      "n": "Automation",
      "org": 6
     },
     {
      "n": "· Process Automation",
      "org": 6,
      "sub": true,
      "note": "Orders −2% against a strong comparator; aftermarket orders −1%"
     },
     {
      "n": "· Industrial Automation",
      "org": 6,
      "sub": true,
      "note": "Easier comparator after the Q1 2025 cyber incident"
     },
     {
      "n": "Life Technology",
      "org": 4
     },
     {
      "n": "· Climate Control",
      "org": 4,
      "sub": true,
      "note": "Strength in data-centre direct liquid cooling"
     },
     {
      "n": "· Life Science & Fluid Control",
      "org": 1,
      "sub": true,
      "note": "Resilient healthcare; mixed Fluid Control"
     },
     {
      "n": "· Transport",
      "org": 9,
      "sub": true,
      "note": "In line with heavy-duty truck market; strategic review progressing"
     }
    ],
    "segNote": "Organic growth across all six business lines. Automation +6% (Process and Industrial both +6%); Life Technology +4% with Transport +9% and Climate Control +4%. Middle East = 6% of 2025 revenue; limited impact on orders and sales so far.",
    "guide": "FY 2026 adj. basic EPS 136p–142p reconfirmed; sixth year of mid-single-digit organic growth on track.",
    "src": [
     [
      "Q1 2026 trading update (PDF)",
      "reports/imi/Q1-2026_q1-2026-trading-update.pdf"
     ]
    ]
   },
   "Q2 2026": {
    "report": "H1 2026 results (6 months)",
    "date": "2026-07-31",
    "rev": 1159,
    "revPy": 1091,
    "revChg": 6,
    "org": 5,
    "mgnLbl": "Adj. operating margin",
    "mgn": 18.7,
    "mgnPy": 18.2,
    "prof": 217,
    "profPy": 198,
    "eps": {
     "l": "Adj. basic EPS",
     "v": "63.4p",
     "c": "+13% vs 56.1p"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "171",
     "c": "30 in H1 2025; adj. operating cash flow 208 (+32%)"
    },
    "orders": {
     "l": "Process Automation orders",
     "v": "596",
     "c": "+12% organic; order book 993 (+10%)"
    },
    "seg": [
     {
      "n": "Automation",
      "rev": 732,
      "revPy": 691,
      "org": 5,
      "prof": 142,
      "profPy": 127,
      "mgn": 19.4,
      "mgnPy": 18.4
     },
     {
      "n": "· Process Automation",
      "org": 5,
      "sub": true,
      "rev": 473,
      "revPy": 446,
      "note": "Aftermarket orders 355 (+7%), new construction 241 (+20% organic) incl. £48m nuclear order"
     },
     {
      "n": "· Industrial Automation",
      "org": 5,
      "sub": true,
      "rev": 259,
      "revPy": 245
     },
     {
      "n": "Life Technology",
      "rev": 427,
      "revPy": 400,
      "org": 5,
      "prof": 75,
      "profPy": 71,
      "mgn": 17.6,
      "mgnPy": 17.8
     },
     {
      "n": "· Climate Control",
      "org": 4,
      "sub": true,
      "rev": 218,
      "revPy": 204,
      "note": "Data-centre orders £18m (£6m)"
     },
     {
      "n": "· Life Science & Fluid Control",
      "org": 5,
      "sub": true,
      "rev": 115,
      "revPy": 112
     },
     {
      "n": "· Transport",
      "org": 8,
      "sub": true,
      "rev": 94,
      "revPy": 84,
      "note": "£3m moved in from Life Science & Fluid Control; organic like-for-like"
     }
    ],
    "segNote": "Automation margin +100 bps to 19.4% on operating leverage and Process Automation aftermarket mix; Process Automation orders +12% (nuclear, power, LNG). Life Technology +5% organic led by Transport (+8%) and Life Science & Fluid Control (+5%); margin −20 bps on cyber-security and data-centre investment. Statutory operating margin 17.3% (14.5%).",
    "guide": "FY 2026 adj. basic EPS 136p–142p reaffirmed; adj. operating margin flat to slightly up; net debt / EBITDA 1.2x.",
    "src": [
     [
      "H1 2026 results (PDF)",
      "reports/imi/Q2-2026_h1-2026-results-press-release.pdf"
     ]
    ]
   },
   "Q3 2026": {
    "report": "Q3 2026 trading update",
    "date": "2026-10-29",
    "revChg": 3,
    "org": 2,
    "orgPy": 12,
    "mgnLbl": "Adj. operating margin",
    "orders": {
     "l": "Process Automation orders",
     "v": "+19%",
     "c": "organic in Q3; +14% YTD (excl. Truflo Marine)"
    },
    "seg": [
     {
      "n": "Automation",
      "org": -3,
      "orgPy": 17,
      "note": "Year to date +2%"
     },
     {
      "n": "· Process Automation",
      "org": -6,
      "sub": true,
      "orgPy": 26,
      "note": "Shipment timing; YTD +1%. Orders +19% in Q3; YTD new construction +27%, aftermarket +7%"
     },
     {
      "n": "· Industrial Automation",
      "org": 2,
      "sub": true,
      "orgPy": 2,
      "note": "YTD +4%"
     },
     {
      "n": "Life Technology",
      "org": 11,
      "orgPy": 4,
      "note": "Year to date +7%"
     },
     {
      "n": "· Climate Control",
      "org": 13,
      "sub": true,
      "orgPy": 5,
      "note": "YTD +7%; data-centre orders £25m YTD (£9m)"
     },
     {
      "n": "· Life Science & Fluid Control",
      "org": 2,
      "sub": true,
      "orgPy": 13,
      "note": "YTD +4%"
     },
     {
      "n": "· Transport",
      "org": 19,
      "sub": true,
      "orgPy": -9,
      "note": "YTD +10%; FY now high-single-digit; strategic review ongoing"
     }
    ],
    "segNote": "Life Technology +11% organic, with Transport +19% (truck market recovery) and Climate Control +13% (data-centre shipments). Automation −3%: Process Automation −6% on shipment timing against +26% last year, while its orders rose 19%. Group +2% against a +12% comparator; +4% year to date.",
    "guide": "FY 2026 adj. basic EPS raised to 137p–143p (136p–142p), mainly Truflo Marine's extra contribution before its Q4 disposal and stronger Transport. 2027: net interest ~£23m, ~231m shares.",
    "src": [
     [
      "Q3 2026 trading update (PDF)",
      "reports/imi/Q3-2026_q3-2026-trading-update.pdf"
     ],
     [
      "Q3 2026 trading update (web)",
      "https://www.investegate.co.uk/announcement/rns/imi--imi/trading-update/9846878"
     ]
    ]
   },
   "Q1 2025": {
    "report": "Q1 2025 trading update",
    "date": "2025-05-08",
    "revChg": -5,
    "org": -3,
    "mgnLbl": "Adj. operating margin",
    "orders": {
     "l": "Process Automation orders",
     "v": "+7%",
     "c": "organic; aftermarket +19% incl. large nuclear orders; order book +13%"
    },
    "seg": [
     {
      "n": "Automation",
      "org": -4,
      "note": "Temporary disruption from the cyber incident"
     },
     {
      "n": "· Process Automation",
      "org": -1,
      "sub": true,
      "note": "Against +27% a year earlier; project phasing"
     },
     {
      "n": "· Industrial Automation",
      "org": -7,
      "sub": true,
      "note": "Cyber incident and subdued industrial demand in Europe and the Americas"
     },
     {
      "n": "Life Technology",
      "org": -2
     },
     {
      "n": "· Climate Control",
      "org": 4,
      "sub": true,
      "note": "Good demand for energy-efficient products"
     },
     {
      "n": "· Life Science & Fluid Control",
      "org": 0,
      "sub": true
     },
     {
      "n": "· Transport",
      "org": -16,
      "sub": true,
      "note": "Against +19% a year earlier"
     }
    ],
    "segNote": "Organic revenue −3% as expected (reported −5% with currency and the IMF disposal), but group margins improved. Process Automation orders +7% and aftermarket orders +19%; Climate Control +4%. Industrial Automation −7% from the cyber incident; Transport −16% against a strong comparator.",
    "guide": "FY 2025 guidance reconfirmed: mid-single-digit organic growth; ~2% currency headwind partly offset by fewer shares (~249m).",
    "src": [
     [
      "Q1 2025 trading update (PDF)",
      "reports/imi/Q1-2025_q1-2025-trading-update.pdf"
     ]
    ]
   }
  },
  "belimo": {
   "Q2 2025": {
    "report": "H1 2025 results (6 months)",
    "date": "2025-07-21",
    "rev": 561.5,
    "revPy": 473.5,
    "revChg": 18.6,
    "org": 20.6,
    "orgPy": 9.7,
    "orgLbl": "Growth in local currencies",
    "mgnLbl": "EBIT margin",
    "mgn": 22.8,
    "mgnPy": 19.6,
    "prof": 128.1,
    "profPy": 93.0,
    "eps": {
     "l": "Net income",
     "v": "101.3",
     "c": "77.2 in H1 2024; EPS CHF 8.23"
    },
    "cash": {
     "l": "Free cash flow (excl. term deposits)",
     "v": "52.8",
     "c": "69.8 in H1 2024; capex 35.9 (14.4)"
    },
    "segLbl": "By product line",
    "seg": [
     {
      "n": "Control valves",
      "rev": 284.1,
      "revPy": 234.1,
      "org": 23.3,
      "orgPy": 11.9
     },
     {
      "n": "Damper actuators",
      "rev": 251.8,
      "revPy": 216.9,
      "org": 18.1,
      "orgPy": 5.8
     },
     {
      "n": "Sensors and meters",
      "rev": 25.6,
      "revPy": 22.5,
      "org": 16.3,
      "orgPy": 28.6
     }
    ],
    "geo": [
     {
      "n": "Americas",
      "rev": 280.0,
      "revPy": 219.2,
      "org": 30.1,
      "orgPy": 17.6,
      "note": "Data centres, next-generation server cooling, strong OEM accounts; US and Canada"
     },
     {
      "n": "EMEA",
      "rev": 216.3,
      "revPy": 199.6,
      "org": 9.9,
      "orgPy": 2.0,
      "note": "OEM recovery and RetroFIT+ despite weak new non-residential construction"
     },
     {
      "n": "Asia Pacific",
      "rev": 65.3,
      "revPy": 54.7,
      "org": 21.3,
      "orgPy": 9.9,
      "note": "China and India: data centres, semiconductors, district energy"
     }
    ],
    "segNote": "Growth ahead of plan in all regions. Americas +30.1% in local currencies on data centres; Asia Pacific +21.3% (China, India); EMEA +9.9% on OEM and retrofit. Control valves +23.3%, damper actuators +18.1%, sensors and meters +16.3%. Data-centre sales up more than 50%. EBIT margin 22.8% (19.6%) on operating leverage and mix; EBITDA 147.1 (26.2%).",
    "guide": "FY 2025 confirmed: sales growth of 15–20% in local currencies; EBIT margin above 20%.",
    "src": [
     [
      "Semiannual report 2025 (PDF)",
      "reports/belimo/Q2-2025_semiannual-report-2025.pdf"
     ]
    ]
   },
   "Q4 2025": {
    "report": "FY 2025 results (12 months)",
    "rev": 1120.8,
    "revChg": 18.7,
    "org": 23.3,
    "orgLbl": "Growth in local currencies",
    "mgnLbl": "EBIT margin",
    "mgn": 20.8,
    "mgnChg": 159,
    "eps": {
     "l": "Net income",
     "v": "181.6",
     "c": "+23.8%"
    },
    "cash": {
     "l": "Free cash flow (excl. term deposits)",
     "v": "98.5",
     "c": "132.8 in 2024; capex 87 (63)"
    },
    "extra": [
     {
      "l": "EBIT",
      "v": "232.9"
     },
     {
      "l": "Operating cash flow",
      "v": "184.9"
     }
    ],
    "note": "Data centres the main growth driver; capex elevated by capacity expansion in Switzerland and the US.",
    "src": [
     [
      "Annual report 2025 (PDF)",
      "reports/belimo/Q4-2025_annual-report-2025.pdf"
     ]
    ],
    "prof": 232.9,
    "geo": [
     {
      "n": "Americas",
      "org": 32,
      "note": "~50% of sales"
     },
     {
      "n": "EMEA",
      "org": 12,
      "note": "~38% of sales"
     },
     {
      "n": "Asia Pacific",
      "org": 29,
      "note": "~13% of sales"
     }
    ],
    "segNote": "Americas (+32% in local currencies) and Asia Pacific (+29%) drove growth on data-centre demand; EMEA +12%."
   },
   "Q2 2026": {
    "report": "H1 2026 results (6 months)",
    "date": "2026-07-20",
    "rev": 676.4,
    "revChg": 20.5,
    "org": 29.6,
    "orgLbl": "Growth in local currencies",
    "mgnLbl": "EBIT margin",
    "mgn": 22.5,
    "mgnChg": -30,
    "eps": {
     "l": "Net income",
     "v": "124.9",
     "c": "+23.3%; EPS CHF 10.15"
    },
    "cash": {
     "l": "Free cash flow (excl. term deposits)",
     "v": "38.7",
     "c": "52.8 in H1 2025; capex 45.4 (40.9); net debt 27.7"
    },
    "extra": [
     {
      "l": "EBIT",
      "v": "152.5",
      "c": "+19.1%"
     },
     {
      "l": "Operating cash flow",
      "v": "83.8",
      "c": "−10.4%"
     },
     {
      "l": "Control valves",
      "v": "389",
      "c": "+48% in local currencies"
     }
    ],
    "seg": [
     {
      "n": "Control valves",
      "rev": 389.3,
      "revPy": 284.1,
      "org": 48.3,
      "orgPy": 23.3,
      "note": "Energy Valve, characterized control valves, shift to pressure-independent valves"
     },
     {
      "n": "Damper actuators",
      "rev": 253.8,
      "revPy": 251.8,
      "org": 7.6,
      "orgPy": 18.1,
      "note": "Fire & smoke applications"
     },
     {
      "n": "Sensors and meters",
      "rev": 33.3,
      "revPy": 25.6,
      "org": 39.2,
      "orgPy": 16.3,
      "note": "Customers consolidating field-device suppliers with Belimo"
     }
    ],
    "guide": "EBIT margin above 20% in 2026; H2 growth faces a higher base and annualised price increases.",
    "src": [
     [
      "Semiannual report 2026 (PDF)",
      "reports/belimo/Q2-2026_semiannual-report-2026.pdf"
     ],
     [
      "H1 2026 report (online)",
      "https://report.belimo.com/HY26/en/management-report"
     ]
    ],
    "revPy": 561.5,
    "prof": 152.5,
    "profPy": 128.1,
    "geo": [
     {
      "n": "Americas",
      "rev": 341.3,
      "org": 35.1,
      "revPy": 280.0,
      "orgPy": 30.1,
      "note": "AI data centres (air and direct-to-chip liquid cooling); also life sciences, healthcare, semiconductors"
     },
     {
      "n": "EMEA",
      "rev": 240.3,
      "org": 14.1,
      "revPy": 216.3,
      "orgPy": 9.9,
      "note": "Renovation via RetroFIT+; health, education and industrial buildings; fire & smoke"
     },
     {
      "n": "Asia Pacific",
      "rev": 94.8,
      "org": 58.0,
      "revPy": 65.3,
      "orgPy": 21.3,
      "note": "Strongest growth of all regions"
     }
    ],
    "segNote": "Data-centre cooling delivered slightly more than half of the absolute sales growth; all regions accelerated. Control valves +48.3% in local currencies (now 58% of sales); sensors and meters +39.2%; damper actuators +7.6%. Americas +35.1% and Asia Pacific +58.0% on data centres; EMEA +14.1% on renovation. EBIT margin 22.5% (22.8%): currency headwind partly offset by operating leverage, pricing and mix.",
    "segLbl": "By product line",
    "orgPy": 20.6
   }
  },
  "xylem": {
   "Q1 2025": {
    "report": "Q1 2025 results",
    "date": "2025-04-29",
    "rev": 2069,
    "revPy": 2033,
    "org": 3,
    "mgnLbl": "Adj. EBITDA margin",
    "mgn": 20.4,
    "mgnPy": 19.2,
    "prof": 423,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.03",
     "c": "+14% vs $0.90"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "−38",
     "c": "15 a year earlier"
    },
    "orders": {
     "l": "Orders",
     "v": "2,158",
     "c": "-2% organic; -4% reported"
    },
    "segLbl": "By reporting segment; margin = adj. segment EBITDA margin",
    "seg": [
     {
      "n": "Water Infrastructure",
      "rev": 581,
      "org": 5,
      "prof": 120,
      "mgn": 20.7,
      "mgnChg": 290,
      "note": "Orders 626 (+1% organic)"
     },
     {
      "n": "Applied Water",
      "rev": 435,
      "org": 1,
      "prof": 85,
      "mgn": 19.5,
      "mgnChg": 300,
      "note": "Orders 486 (+3% organic)"
     },
     {
      "n": "Measurement & Control Solutions",
      "rev": 490,
      "org": 6,
      "prof": 103,
      "mgn": 21.0,
      "mgnChg": -170,
      "note": "Orders 402 (-8% organic)"
     },
     {
      "n": "Water Solutions & Services",
      "rev": 563,
      "org": 1,
      "prof": 122,
      "mgn": 21.7,
      "mgnChg": -60,
      "note": "Orders 644 (-5% organic)"
     }
    ],
    "segNote": "Growth led by MCS (+6%) and Water Infrastructure (+5%); Applied Water and WSS +1%. Margins up sharply in WI and AW (+290/+300 bps) on productivity and price; MCS margin −170 bps. Record Q1 adj. EBITDA margin and EPS.",
    "src": [
     [
      "Q1 2025 earnings package (PDF)",
      "reports/xylem/Q1-2025_earnings-package.pdf"
     ],
     [
      "Q1 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/1524472/000152447225000019/xyl04292025ex991.htm"
     ]
    ],
    "guide": "FY 2025 adj. EPS raised to $4.50–4.70."
   },
   "Q2 2025": {
    "report": "Q2 2025 results",
    "date": "2025-07-31",
    "rev": 2301,
    "revPy": 2169,
    "org": 6,
    "mgnLbl": "Adj. EBITDA margin",
    "mgn": 21.8,
    "mgnPy": 20.8,
    "prof": 502,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.26",
     "c": "+16% vs $1.09"
    },
    "cash": {
     "l": "Free cash flow, year to date",
     "v": "169",
     "c": "230 a year earlier"
    },
    "orders": {
     "l": "Orders",
     "v": "2,174",
     "c": "+4% organic; +4% reported"
    },
    "segLbl": "By reporting segment; margin = adj. segment EBITDA margin",
    "seg": [
     {
      "n": "Water Infrastructure",
      "rev": 650,
      "org": 4,
      "prof": 142,
      "mgn": 21.8,
      "mgnChg": 200,
      "note": "Orders 672 (-2% organic)"
     },
     {
      "n": "Applied Water",
      "rev": 483,
      "org": 5,
      "prof": 105,
      "mgn": 21.7,
      "mgnChg": 420,
      "note": "Orders 488 (+4% organic)"
     },
     {
      "n": "Measurement & Control Solutions",
      "rev": 540,
      "org": 10,
      "prof": 125,
      "mgn": 23.1,
      "mgnChg": -30,
      "note": "Orders 437 (+12% organic)"
     },
     {
      "n": "Water Solutions & Services",
      "rev": 628,
      "org": 5,
      "prof": 153,
      "mgn": 24.4,
      "mgnChg": 60,
      "note": "Orders 577 (+5% organic)"
     }
    ],
    "segNote": "Growth in all segments, led by MCS (+10%); Applied Water margin +420 bps and WI +200 bps. Record quarterly adj. EBITDA margin; strength in North America.",
    "src": [
     [
      "Q2 2025 earnings package (PDF)",
      "reports/xylem/Q2-2025_earnings-package.pdf"
     ],
     [
      "Q2 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/1524472/000152447225000035/xyl07312025ex991.htm"
     ]
    ]
   },
   "Q3 2025": {
    "report": "Q3 2025 results",
    "date": "2025-10-28",
    "rev": 2268,
    "revPy": 2104,
    "org": 7,
    "mgnLbl": "Adj. EBITDA margin",
    "mgn": 23.2,
    "mgnPy": 21.2,
    "prof": 527,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.37",
     "c": "+23% vs $1.11"
    },
    "cash": {
     "l": "Free cash flow, year to date",
     "v": "450",
     "c": "467 a year earlier"
    },
    "orders": {
     "l": "Orders",
     "v": "2,181",
     "c": "-2% organic; -1% reported"
    },
    "segLbl": "By reporting segment; margin = adj. segment EBITDA margin",
    "seg": [
     {
      "n": "Water Infrastructure",
      "rev": 656,
      "org": 5,
      "prof": 160,
      "mgn": 24.4,
      "mgnChg": 400,
      "note": "Orders 683 (-2% organic)"
     },
     {
      "n": "Applied Water",
      "rev": 456,
      "org": 1,
      "prof": 99,
      "mgn": 21.7,
      "mgnChg": 310,
      "note": "Orders 445 (0% organic)"
     },
     {
      "n": "Measurement & Control Solutions",
      "rev": 522,
      "org": 11,
      "prof": 114,
      "mgn": 21.8,
      "mgnChg": 60,
      "note": "Orders 446 (+11% organic)"
     },
     {
      "n": "Water Solutions & Services",
      "rev": 634,
      "org": 10,
      "prof": 167,
      "mgn": 26.3,
      "mgnChg": 160,
      "note": "Orders 607 (-11% organic)"
     }
    ],
    "segNote": "MCS (+11%) and WSS (+10%) led growth; WI margin +400 bps to 24.4%, AW +310 bps. Orders −2% against tough comparisons, with MCS orders +11%.",
    "src": [
     [
      "Q3 2025 earnings package (PDF)",
      "reports/xylem/Q3-2025_earnings-package.pdf"
     ],
     [
      "Q3 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/1524472/000152447225000043/xyl10282025ex991.htm"
     ]
    ],
    "guide": "FY 2025 adj. EPS raised to $5.03–5.08."
   },
   "Q4 2025": {
    "report": "FY 2025 results (12 months)",
    "date": "2026-02-10",
    "rev": 9035,
    "revPy": 8562,
    "org": 5,
    "mgnLbl": "Adj. EBITDA margin",
    "mgn": 22.2,
    "mgnPy": 20.6,
    "prof": 2009,
    "profPy": 1763,
    "eps": {
     "l": "Adj. EPS",
     "v": "$5.08",
     "c": "+19%; GAAP $3.92"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "925",
     "c": "942 in 2024"
    },
    "segLbl": "By reporting segment; margin = adj. segment EBITDA margin",
    "seg": [
     {
      "n": "Water Infrastructure",
      "rev": 2636,
      "revPy": 2555,
      "org": 3,
      "prof": 641,
      "profPy": 529,
      "mgn": 24.3,
      "mgnPy": 20.7
     },
     {
      "n": "Applied Water",
      "rev": 1849,
      "revPy": 1793,
      "org": 2,
      "prof": 378,
      "profPy": 317,
      "mgn": 20.4,
      "mgnPy": 17.7
     },
     {
      "n": "Measurement & Control Solutions",
      "rev": 2086,
      "revPy": 1871,
      "org": 9,
      "prof": 450,
      "profPy": 395,
      "mgn": 21.6,
      "mgnPy": 21.1
     },
     {
      "n": "Water Solutions & Services",
      "rev": 2464,
      "revPy": 2343,
      "org": 5,
      "prof": 595,
      "profPy": 548,
      "mgn": 24.1,
      "mgnPy": 23.4
     }
    ],
    "segNote": "Record year: organic +5% with MCS +9% (metering) leading; WSS +5%, WI +3%, AW +2%. Adj. EBITDA margin +160 bps to 22.2%, with WI +360 bps to 24.3% and AW +270 bps to 20.4%.",
    "guide": "2026: revenue USD 9.1–9.2bn, organic +2–4%, adj. EBITDA margin 22.9–23.3%, adj. EPS $5.35–5.60 (initial guidance).",
    "src": [
     [
      "Q4 2025 earnings package (PDF)",
      "reports/xylem/Q4-2025_earnings-package.pdf"
     ]
    ]
   },
   "Q1 2026": {
    "report": "Q1 2026 results",
    "date": "2026-04-28",
    "rev": 2125,
    "revPy": 2069,
    "org": 0,
    "mgnLbl": "Adj. EBITDA margin",
    "mgn": 20.6,
    "mgnPy": 20.4,
    "prof": 437,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.12",
     "c": "+9% vs $1.03"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "18",
     "c": "−38 a year earlier"
    },
    "orders": {
     "l": "Orders",
     "v": "2,228",
     "c": "0% organic; +3% reported"
    },
    "segLbl": "By reporting segment; margin = adj. segment EBITDA margin",
    "seg": [
     {
      "n": "Water Infrastructure",
      "rev": 603,
      "org": -1,
      "prof": 132,
      "mgn": 21.9,
      "revPy": 581,
      "profPy": 120,
      "mgnPy": 20.7,
      "orgPy": 5,
      "note": "Orders 675 (+2% organic)"
     },
     {
      "n": "Applied Water",
      "rev": 448,
      "org": 0,
      "prof": 88,
      "mgn": 19.6,
      "revPy": 435,
      "profPy": 85,
      "mgnPy": 19.5,
      "orgPy": 1,
      "note": "Orders 512 (+2% organic)"
     },
     {
      "n": "Measurement & Control Solutions",
      "rev": 508,
      "org": 1,
      "prof": 106,
      "mgn": 20.9,
      "revPy": 490,
      "profPy": 103,
      "mgnPy": 21.0,
      "orgPy": 6,
      "note": "Orders 475 (+15% organic)"
     },
     {
      "n": "Water Solutions & Services",
      "rev": 566,
      "org": -2,
      "prof": 125,
      "mgn": 22.1,
      "revPy": 563,
      "profPy": 122,
      "mgnPy": 21.7,
      "orgPy": 1,
      "note": "Orders 566 (-15% organic)"
     }
    ],
    "segNote": "Revenue flat organically; strength in energy metering, dewatering, transport and building solutions offset declines. MCS orders +15%. Margins up in WI (+120 bps) and WSS (+40 bps).",
    "src": [
     [
      "Q1 2026 earnings package (PDF)",
      "reports/xylem/Q1-2026_earnings-package.pdf"
     ],
     [
      "Q1 2026 earnings release",
      "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000065/xyl04282026ex991.htm"
     ]
    ],
    "profPy": 423
   },
   "Q2 2026": {
    "report": "Q2 2026 results",
    "date": "2026-07-28",
    "rev": 2336,
    "revPy": 2301,
    "org": 1,
    "mgnLbl": "Adj. EBITDA margin",
    "mgn": 23.3,
    "mgnPy": 21.8,
    "prof": 544,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.46",
     "c": "+16% vs $1.26"
    },
    "cash": {
     "l": "Free cash flow, year to date",
     "v": "219",
     "c": "169 a year earlier"
    },
    "orders": {
     "l": "Orders",
     "v": "3,086",
     "c": "+41% organic; +42% reported"
    },
    "segLbl": "By reporting segment; margin = adj. segment EBITDA margin",
    "seg": [
     {
      "n": "Water Infrastructure",
      "rev": 683,
      "org": 3,
      "prof": 182,
      "mgn": 26.6,
      "revPy": 650,
      "profPy": 142,
      "mgnPy": 21.8,
      "orgPy": 4,
      "note": "Orders 669 (-4% organic); Strength in Transport"
     },
     {
      "n": "Applied Water",
      "rev": 501,
      "org": 3,
      "prof": 106,
      "mgn": 21.2,
      "revPy": 483,
      "profPy": 105,
      "mgnPy": 21.7,
      "orgPy": 5,
      "note": "Orders 538 (+9% organic); Data-centre orders; building solutions"
     },
     {
      "n": "Measurement & Control Solutions",
      "rev": 508,
      "org": -1,
      "prof": 107,
      "mgn": 21.1,
      "revPy": 540,
      "profPy": 125,
      "mgnPy": 23.1,
      "orgPy": 10,
      "note": "Orders 430 (+2% organic); Energy metering strength"
     },
     {
      "n": "Water Solutions & Services",
      "rev": 644,
      "org": 1,
      "prof": 163,
      "mgn": 25.3,
      "revPy": 628,
      "profPy": 153,
      "mgnPy": 24.4,
      "orgPy": 5,
      "note": "Orders 1,449 (+147% organic); Outsourced-water order surge (orders +147%)"
     }
    ],
    "segNote": "Orders +41% organic on a WSS outsourced-water surge (+147%) and AW data-centre wins. WI margin +480 bps to 26.6%, WSS +90 bps; MCS margin −200 bps. China declines offset by developed markets.",
    "src": [
     [
      "Q2 2026 earnings package (PDF)",
      "reports/xylem/Q2-2026_earnings-package.pdf"
     ],
     [
      "Q2 2026 earnings release",
      "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000108/xyl07282026ex991.htm"
     ]
    ],
    "profPy": 502,
    "guide": "FY 2026: revenue ~USD 9.2bn, organic +2–3%, adj. EBITDA margin 23.1–23.5%, adj. EPS $5.55–5.70."
   },
   "Q3 2026": {
    "report": "Q3 2026 results",
    "date": "2026-10-27",
    "rev": 2201,
    "revPy": 2268,
    "org": 0,
    "mgnLbl": "Adj. EBITDA margin",
    "mgn": 23.9,
    "mgnPy": 23.2,
    "prof": 527,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.42",
     "c": "+4% vs $1.37; excl. $0.11 tariff-refund benefit"
    },
    "cash": {
     "l": "Adj. free cash flow, year to date",
     "v": "444",
     "c": "462 a year earlier"
    },
    "orders": {
     "l": "Orders",
     "v": "2,331",
     "c": "+10% organic; +7% reported"
    },
    "segLbl": "By reporting segment; margin = adj. segment EBITDA margin",
    "seg": [
     {
      "n": "Water Infrastructure",
      "rev": 645,
      "org": -1,
      "prof": 169,
      "mgn": 26.2,
      "revPy": 656,
      "profPy": 160,
      "mgnPy": 24.4,
      "orgPy": 5,
      "note": "Orders 675 (-1% organic); Treatment softness offset by Transport"
     },
     {
      "n": "Applied Water",
      "rev": 489,
      "org": 9,
      "prof": 104,
      "mgn": 21.3,
      "revPy": 456,
      "profPy": 99,
      "mgnPy": 21.7,
      "orgPy": 1,
      "note": "Orders 502 (+15% organic); NA data centres and commercial; Americas revenue growth"
     },
     {
      "n": "Measurement & Control Solutions",
      "rev": 436,
      "org": -5,
      "prof": 107,
      "mgn": 24.5,
      "revPy": 522,
      "profPy": 114,
      "mgnPy": 21.8,
      "orgPy": 11,
      "note": "Orders 504 (+30% organic); Electric metering and analytics down; international metrology divested May 2026"
     },
     {
      "n": "Water Solutions & Services",
      "rev": 631,
      "org": -2,
      "prof": 157,
      "mgn": 24.9,
      "revPy": 634,
      "profPy": 167,
      "mgnPy": 26.3,
      "orgPy": 10,
      "note": "Orders 650 (+6% organic); Prior-year one-off services and capital work did not repeat"
     }
    ],
    "segNote": "Orders +10% organic (MCS +30% on water and gas meters, AW +15% on NA data centres) but revenue flat: MCS −5% (electric metering, affordability), WSS −2%, WI −1%; AW +9%. Margins up in MCS (+270 bps) and WI (+180 bps), down in AW (−40) and WSS (−140).",
    "src": [
     [
      "Q3 2026 earnings package (PDF)",
      "reports/xylem/Q3-2026_earnings-package.pdf"
     ],
     [
      "Q3 2026 earnings release",
      "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000146/xyl10272026ex991.htm"
     ]
    ],
    "profPy": 527,
    "orgPy": 7,
    "guide": "FY 2026 cut: revenue ~USD 8.95bn (−1%), organic flat, adj. EBITDA margin ~23.2% (+100 bps), adj. EPS $5.40–5.45 ($5.55–5.70), FCF margin ~10.2%. Q4: revenue ~USD 2.3bn, margin ~24.5%."
   }
  },
  "ecolab": {
   "Q1 2025": {
    "report": "Q1 2025 results",
    "date": "2025-04-29",
    "rev": 3695.0,
    "revPy": 3751.9,
    "org": 3,
    "mgnLbl": "Organic operating margin",
    "mgn": 16.0,
    "mgnChg": 190,
    "prof": 555.3,
    "profPy": 517.9,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.50",
     "c": "+12%; GAAP $1.41"
    },
    "segLbl": "By reporting segment, at fixed currency; margin = segment operating margin",
    "seg": [
     {
      "n": "Global Water",
      "rev": 1800.5,
      "revPy": 1755.0,
      "org": 2,
      "prof": 260.0,
      "profPy": 243.6,
      "mgn": 14.4,
      "mgnPy": 13.9
     },
     {
      "n": "· Food & Beverage",
      "org": 2,
      "sub": true
     },
     {
      "n": "· Paper",
      "org": 0,
      "sub": true
     },
     {
      "n": "Global Institutional & Specialty",
      "rev": 1406.5,
      "revPy": 1446.9,
      "org": 4,
      "prof": 298.6,
      "profPy": 257.4,
      "mgn": 21.2,
      "mgnPy": 17.8
     },
     {
      "n": "· Institutional",
      "org": 4,
      "sub": true,
      "note": "-5% at fixed currency incl. acquisitions"
     },
     {
      "n": "· Specialty",
      "org": 3,
      "sub": true
     },
     {
      "n": "Global Pest Elimination",
      "rev": 278.1,
      "revPy": 260.3,
      "org": 5,
      "prof": 46.1,
      "profPy": 46.5,
      "mgn": 16.6,
      "mgnPy": 17.9
     },
     {
      "n": "Global Life Sciences",
      "rev": 167.0,
      "revPy": 159.3,
      "org": 5,
      "prof": 25.2,
      "profPy": 19.3,
      "mgn": 15.1,
      "mgnPy": 12.1
     }
    ],
    "segNote": "Organic +3%: Pest +5% and Life Sciences +5% led; Water +2%, Institutional & Specialty +4% organic (−3% at fixed rates after the surgical-solutions sale). Life Sciences OI +31%, Institutional & Specialty OI +16%; Pest OI flat.",
    "guide": "FY 2025 adj. EPS growth of 12–15%; 20% organic OI margin by 2027.",
    "src": [
     [
      "Q1 2025 earnings presentation (PDF)",
      "reports/ecolab/Q1-2025_earnings-presentation.pdf"
     ]
    ]
   },
   "Q2 2025": {
    "report": "Q2 2025 results",
    "date": "2025-07-29",
    "rev": 4025.2,
    "revPy": 3985.8,
    "org": 3,
    "mgnLbl": "Organic operating margin",
    "mgn": 18.3,
    "mgnChg": 170,
    "prof": 710.1,
    "profPy": 656.9,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.89",
     "c": "+13%; GAAP $1.84"
    },
    "segLbl": "By reporting segment, at fixed currency; margin = segment operating margin",
    "seg": [
     {
      "n": "Global Water",
      "rev": 1908.5,
      "revPy": 1863.2,
      "org": 2,
      "prof": 306.3,
      "profPy": 288.6,
      "mgn": 16.0,
      "mgnPy": 15.5
     },
     {
      "n": "· Food & Beverage",
      "org": 3,
      "sub": true
     },
     {
      "n": "· Paper",
      "org": -3,
      "sub": true
     },
     {
      "n": "Global Institutional & Specialty",
      "rev": 1511.7,
      "revPy": 1548.1,
      "org": 4,
      "prof": 359.4,
      "profPy": 329.5,
      "mgn": 23.8,
      "mgnPy": 21.3
     },
     {
      "n": "· Institutional",
      "org": 3,
      "sub": true,
      "note": "-5% at fixed currency incl. acquisitions"
     },
     {
      "n": "· Specialty",
      "org": 4,
      "sub": true
     },
     {
      "n": "Global Pest Elimination",
      "rev": 311.3,
      "revPy": 290.2,
      "org": 6,
      "prof": 61.2,
      "profPy": 60.0,
      "mgn": 19.7,
      "mgnPy": 20.7
     },
     {
      "n": "Global Life Sciences",
      "rev": 176.7,
      "revPy": 169.8,
      "org": 4,
      "prof": 34.8,
      "profPy": 17.0,
      "mgn": 19.7,
      "mgnPy": 10.0
     }
    ],
    "segNote": "Pest +6% and Institutional & Specialty +4% organic; Water +2% with Paper −3%. Life Sciences OI doubled (34.8 vs 17.0). Organic OI margin +170 bps.",
    "guide": "FY 2025 adj. EPS growth of 12–15%; 20% organic OI margin by 2027.",
    "src": [
     [
      "Q2 2025 earnings presentation (PDF)",
      "reports/ecolab/Q2-2025_earnings-presentation.pdf"
     ]
    ]
   },
   "Q3 2025": {
    "report": "Q3 2025 results",
    "date": "2025-10-28",
    "rev": 4165.0,
    "revPy": 3998.5,
    "org": 3,
    "mgnLbl": "Organic operating margin",
    "mgn": 18.7,
    "mgnChg": 110,
    "prof": 760.2,
    "profPy": 1044.8,
    "eps": {
     "l": "Adj. EPS",
     "v": "$2.07",
     "c": "+13%; GAAP $2.05"
    },
    "segLbl": "By reporting segment, at fixed currency; margin = segment operating margin",
    "seg": [
     {
      "n": "Global Water",
      "rev": 1953.5,
      "revPy": 1897.6,
      "org": 2,
      "prof": 336.0,
      "profPy": 324.8,
      "mgn": 17.2,
      "mgnPy": 17.1
     },
     {
      "n": "· Food & Beverage",
      "org": 4,
      "sub": true
     },
     {
      "n": "· Paper",
      "org": -4,
      "sub": true
     },
     {
      "n": "Global Institutional & Specialty",
      "rev": 1544.8,
      "revPy": 1525.7,
      "org": 4,
      "prof": 365.0,
      "profPy": 327.6,
      "mgn": 23.6,
      "mgnPy": 21.5
     },
     {
      "n": "· Institutional",
      "org": 3,
      "sub": true,
      "note": "-1% at fixed currency incl. acquisitions"
     },
     {
      "n": "· Specialty",
      "org": 7,
      "sub": true
     },
     {
      "n": "Global Pest Elimination",
      "rev": 322.6,
      "revPy": 301.7,
      "org": 6,
      "prof": 67.4,
      "profPy": 60.5,
      "mgn": 20.9,
      "mgnPy": 20.1
     },
     {
      "n": "Global Life Sciences",
      "rev": 171.0,
      "revPy": 161.7,
      "org": 6,
      "prof": 28.1,
      "profPy": 23.9,
      "mgn": 16.4,
      "mgnPy": 14.8
     }
    ],
    "segNote": "Pest +6%, Life Sciences +6%, Institutional & Specialty +4% organic; Water +2% (Paper −4%). OI up in all segments, Institutional & Specialty +15% and Life Sciences +18%.",
    "guide": "Q4 2025 adj. EPS $2.02–2.12 (+12% to 17%).",
    "src": [
     [
      "Q3 2025 earnings presentation (PDF)",
      "reports/ecolab/Q3-2025_earnings-presentation.pdf"
     ]
    ]
   },
   "Q4 2025": {
    "report": "FY 2025 results (12 months)",
    "date": "2026-02-10",
    "rev": 16081.2,
    "revPy": 15741.4,
    "org": 3,
    "mgnLbl": "Organic operating margin",
    "mgn": 17.9,
    "mgnPy": 16.4,
    "prof": 2737.6,
    "profPy": 2802.4,
    "eps": {
     "l": "Adj. EPS",
     "v": "$7.53",
     "c": "+13%; GAAP $7.28"
    },
    "segLbl": "By reporting segment, at fixed currency (sum of the four quarters); margin = segment operating margin",
    "seg": [
     {
      "n": "Global Water",
      "rev": 7679.9,
      "revPy": 7483.4,
      "org": 2.0,
      "prof": 1263.9,
      "profPy": 1207.2,
      "mgn": 16.5,
      "mgnPy": 16.1
     },
     {
      "n": "Global Institutional & Specialty",
      "rev": 5962.0,
      "revPy": 5979.4,
      "org": 3.4,
      "prof": 1357.8,
      "profPy": 1202.2,
      "mgn": 22.8,
      "mgnPy": 20.1
     },
     {
      "n": "Global Pest Elimination",
      "rev": 1219.2,
      "revPy": 1140.1,
      "org": 6.1,
      "prof": 237.1,
      "profPy": 209.7,
      "mgn": 19.4,
      "mgnPy": 18.4
     },
     {
      "n": "Global Life Sciences",
      "rev": 706.1,
      "revPy": 670.5,
      "org": 5.3,
      "prof": 120.7,
      "profPy": 91.8,
      "mgn": 17.1,
      "mgnPy": 13.7
     }
    ],
    "segNote": "Organic +3% with pricing; Pest Elimination and Life Sciences grew fastest, Water held back by Paper. Organic operating margin +150 bps to 17.9%; Life Sciences operating income rose strongly from a low base.",
    "guide": "2026 adj. EPS $8.43–8.63 (+12% to 15%), incl. ~$0.13 Ovivo Electronics amortisation (initial guidance).",
    "derived": [
     "seg.Global Water.rev",
     "seg.Global Water.revPy",
     "seg.Global Water.prof",
     "seg.Global Water.profPy",
     "seg.Global Institutional & Specialty.rev",
     "seg.Global Institutional & Specialty.revPy",
     "seg.Global Institutional & Specialty.prof",
     "seg.Global Institutional & Specialty.profPy",
     "seg.Global Pest Elimination.rev",
     "seg.Global Pest Elimination.revPy",
     "seg.Global Pest Elimination.prof",
     "seg.Global Pest Elimination.profPy",
     "seg.Global Life Sciences.rev",
     "seg.Global Life Sciences.revPy",
     "seg.Global Life Sciences.prof",
     "seg.Global Life Sciences.profPy",
     "seg.Global Water.org",
     "seg.Global Institutional & Specialty.org",
     "seg.Global Pest Elimination.org",
     "seg.Global Life Sciences.org"
    ],
    "src": [
     [
      "Q4 2025 earnings presentation (PDF)",
      "reports/ecolab/Q4-2025_earnings-presentation.pdf"
     ]
    ]
   },
   "Q1 2026": {
    "report": "Q1 2026 results",
    "date": "2026-04-28",
    "rev": 4066.1,
    "revPy": 3695.0,
    "org": 4,
    "mgnLbl": "Adj. operating margin",
    "mgn": 16.7,
    "mgnChg": 70,
    "prof": 622.0,
    "profPy": 555.3,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.70",
     "c": "+13%; GAAP $1.52"
    },
    "segLbl": "By reporting segment, at fixed currency; margin = segment operating margin",
    "seg": [
     {
      "n": "Global Water",
      "rev": 2035.2,
      "revPy": 1899.5,
      "org": 2,
      "prof": 297.8,
      "profPy": 278.7,
      "mgn": 14.6,
      "mgnPy": 14.7
     },
     {
      "n": "· Food & Beverage",
      "org": 5,
      "sub": true
     },
     {
      "n": "· Heavy Water",
      "org": -2,
      "sub": true
     },
     {
      "n": "· High-Tech",
      "org": 25,
      "sub": true,
      "note": "+131% at fixed currency incl. acquisitions"
     },
     {
      "n": "· Light Water",
      "org": 2,
      "sub": true
     },
     {
      "n": "· Paper",
      "org": -2,
      "sub": true
     },
     {
      "n": "Global Institutional & Specialty",
      "rev": 1507.7,
      "revPy": 1454.8,
      "org": 4,
      "prof": 347.5,
      "profPy": 308.4,
      "mgn": 23.0,
      "mgnPy": 21.2
     },
     {
      "n": "· Institutional",
      "org": 2,
      "sub": true
     },
     {
      "n": "· Specialty",
      "org": 9,
      "sub": true
     },
     {
      "n": "Global Pest Elimination",
      "rev": 310.1,
      "revPy": 287.4,
      "org": 7,
      "prof": 51.7,
      "profPy": 47.7,
      "mgn": 16.7,
      "mgnPy": 16.6
     },
     {
      "n": "Global Life Sciences",
      "rev": 200.9,
      "revPy": 181.4,
      "org": 11,
      "prof": 37.5,
      "profPy": 31.0,
      "mgn": 18.7,
      "mgnPy": 17.1
     }
    ],
    "segNote": "Growth engines accelerated: High-Tech +25% organic (+131% with Ovivo), Life Sciences +11% (bioprocessing doubled), Pest +7%. Water +2% as Paper and Heavy Water stabilised. Institutional & Specialty OI +13%, margin +180 bps to 23.0%.",
    "guide": "2026 adj. EPS $8.43–8.63 (+12% to 15%) excl. CoolIT; organic growth 2H +6% to 7%; adj. OI margin ~19%; Q2 $2.02–2.12.",
    "src": [
     [
      "Q1 2026 earnings presentation (PDF)",
      "reports/ecolab/Q1-2026_earnings-presentation.pdf"
     ]
    ]
   },
   "Q2 2026": {
    "report": "Q2 2026 results",
    "date": "2026-07-28",
    "rev": 4415.4,
    "revPy": 4025.2,
    "org": 5,
    "mgnLbl": "Organic operating margin",
    "mgn": 18.8,
    "mgnChg": 40,
    "prof": 757.9,
    "profPy": 710.1,
    "eps": {
     "l": "Adj. EPS",
     "v": "$2.09",
     "c": "+11%; GAAP $1.90"
    },
    "segLbl": "By reporting segment, at fixed currency; margin = segment operating margin",
    "seg": [
     {
      "n": "Global Water",
      "rev": 2215.5,
      "revPy": 2014.9,
      "org": 4,
      "prof": 347.7,
      "profPy": 329.7,
      "mgn": 15.7,
      "mgnPy": 16.4
     },
     {
      "n": "· Food & Beverage",
      "org": 7,
      "sub": true
     },
     {
      "n": "· Heavy Water",
      "org": -1,
      "sub": true
     },
     {
      "n": "· High-Tech",
      "org": 29,
      "sub": true,
      "note": "+139% at fixed currency incl. acquisitions"
     },
     {
      "n": "· Light Water",
      "org": 3,
      "sub": true
     },
     {
      "n": "· Paper",
      "org": 0,
      "sub": true
     },
     {
      "n": "Global Institutional & Specialty",
      "rev": 1617.4,
      "revPy": 1562.5,
      "org": 4,
      "prof": 389.9,
      "profPy": 368.1,
      "mgn": 24.1,
      "mgnPy": 23.6
     },
     {
      "n": "· Institutional",
      "org": 3,
      "sub": true
     },
     {
      "n": "· Specialty",
      "org": 6,
      "sub": true
     },
     {
      "n": "Global Pest Elimination",
      "rev": 350.5,
      "revPy": 321.2,
      "org": 7,
      "prof": 70.5,
      "profPy": 62.5,
      "mgn": 20.1,
      "mgnPy": 19.5
     },
     {
      "n": "Global Life Sciences",
      "rev": 221.0,
      "revPy": 191.4,
      "org": 15,
      "prof": 58.5,
      "profPy": 40.2,
      "mgn": 26.5,
      "mgnPy": 21.0
     }
    ],
    "segNote": "Organic growth accelerated to 5%: High-Tech +29% organic, Life Sciences +15%, Pest +7%, Water +4%. Life Sciences OI +46% with margin 26.5%. CoolIT closed 2 July.",
    "guide": "2026 adj. EPS raised to $8.05–8.25 (+7% to 10%) incl. CoolIT costs; Q3 $2.13–2.23; organic OI margin 20% target.",
    "src": [
     [
      "Q2 2026 earnings presentation (PDF)",
      "reports/ecolab/Q2-2026_earnings-presentation.pdf"
     ]
    ]
   },
   "Q3 2026": {
    "report": "Q3 2026 results",
    "date": "2026-10-27",
    "rev": 4694.8,
    "revPy": 4165.0,
    "org": 7,
    "mgnLbl": "Organic operating margin",
    "mgn": 19.6,
    "mgnChg": 70,
    "prof": 810.5,
    "profPy": 760.2,
    "eps": {
     "l": "Adj. EPS",
     "v": "$2.18",
     "c": "+5%; GAAP $1.95; ~10 pts CoolIT drag"
    },
    "segLbl": "By reporting segment, at fixed currency; margin = segment operating margin",
    "seg": [
     {
      "n": "Global Water",
      "rev": 2479.6,
      "revPy": 2061.0,
      "org": 9,
      "prof": 445.2,
      "profPy": 357.9,
      "mgn": 18.0,
      "mgnPy": 17.4
     },
     {
      "n": "· Food & Beverage",
      "org": 8,
      "sub": true
     },
     {
      "n": "· Heavy Water",
      "org": 4,
      "sub": true
     },
     {
      "n": "· High-Tech",
      "org": 63,
      "sub": true,
      "note": "+293% at fixed currency incl. acquisitions"
     },
     {
      "n": "· Light Water",
      "org": 5,
      "sub": true
     },
     {
      "n": "· Paper",
      "org": 6,
      "sub": true
     },
     {
      "n": "Global Institutional & Specialty",
      "rev": 1638.3,
      "revPy": 1596.0,
      "org": 3,
      "prof": 404.9,
      "profPy": 376.3,
      "mgn": 24.7,
      "mgnPy": 23.6
     },
     {
      "n": "· Institutional",
      "org": 2,
      "sub": true
     },
     {
      "n": "· Specialty",
      "org": 5,
      "sub": true
     },
     {
      "n": "Global Pest Elimination",
      "rev": 363.5,
      "revPy": 332.7,
      "org": 8,
      "prof": 73.9,
      "profPy": 69.5,
      "mgn": 20.3,
      "mgnPy": 20.9
     },
     {
      "n": "Global Life Sciences",
      "rev": 215.8,
      "revPy": 185.2,
      "org": 17,
      "prof": 50.2,
      "profPy": 33.8,
      "mgn": 23.3,
      "mgnPy": 18.3
     }
    ],
    "segNote": "Organic growth accelerated to 7%: High-Tech +63% organic (+293% with Ovivo and CoolIT), Life Sciences +17%, Pest +8%, Water +9%; Institutional & Specialty +3%. Life Sciences OI +49% (margin 23.3%); Water OI +24% at fixed rates.",
    "guide": "2026 adj. EPS $8.10–8.20 (+8% to 9%); Q4 $2.13–2.23 with reported sales +12% to 14%; 20% adj. OI margin in 2027.",
    "src": [
     [
      "Q3 2026 earnings presentation (PDF)",
      "reports/ecolab/Q3-2026_earnings-presentation.pdf"
     ]
    ]
   }
  },
  "watts": {
   "Q1 2025": {
    "report": "Q1 2025 results",
    "rev": 558.0,
    "mgnLbl": "Adj. operating margin",
    "mgn": 19.0,
    "eps": {
     "l": "Adj. EPS",
     "v": "$2.37"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "46"
    },
    "derived": [
     "mgn",
     "eps"
    ],
    "src": [
     [
      "Q1 2025 Form 10-Q (PDF)",
      "reports/watts/Q1-2025_10-q.pdf"
     ]
    ],
    "revPy": 570.9,
    "revChg": -2.3,
    "org": -2.1,
    "prof": 87.7,
    "profPy": 96.7,
    "seg": [
     {
      "n": "Americas",
      "rev": 418.1,
      "revPy": 418.8,
      "org": -1.1,
      "prof": 97.8,
      "profPy": 92.7,
      "mgn": 23.4,
      "mgnPy": 22.1,
      "note": "Fewer shipping days (~3 pts); acquisitions +USD 5.0m; segment earnings +5.6% organic"
     },
     {
      "n": "Europe",
      "rev": 108.4,
      "revPy": 123.3,
      "org": -9.2,
      "prof": 15.1,
      "profPy": 19.4,
      "mgn": 13.9,
      "mgnPy": 15.7,
      "note": "Volume decline; weak heat-pump and boiler markets; segment earnings -20.1% organic"
     },
     {
      "n": "APMEA",
      "rev": 31.5,
      "revPy": 28.8,
      "org": 13.2,
      "prof": 5.5,
      "profPy": 5.2,
      "mgn": 17.5,
      "mgnPy": 18.1,
      "note": "Price and volume; segment earnings +9.6% organic"
     }
    ],
    "segLbl": "By reporting segment (regions); sales to external customers; margin = segment earnings / sales",
    "segNote": "Organic −2.1%, mostly from ~3 pts fewer shipping days: Americas −1.1%, Europe −9.2%; APMEA +13.2%. Americas segment earnings still +5.6% organic on price; Europe earnings −20%."
   },
   "Q2 2025": {
    "report": "Q2 2025 results",
    "rev": 643.7,
    "mgnLbl": "Adj. operating margin",
    "mgn": 21.6,
    "eps": {
     "l": "Adj. EPS",
     "v": "$3.10"
    },
    "cash": {
     "l": "Free cash flow, H1",
     "v": "105"
    },
    "seg": [
     {
      "n": "Americas",
      "rev": 498.5,
      "revPy": 448.1,
      "org": 9.8,
      "prof": 135.8,
      "profPy": 108.8,
      "mgn": 27.2,
      "mgnPy": 24.3,
      "note": "Price, volume and tariff-related pull-forward demand; acquisitions +USD 7.0m; segment earnings +23.3% organic"
     },
     {
      "n": "Europe",
      "rev": 111.0,
      "revPy": 114.1,
      "org": -7.6,
      "prof": 13.0,
      "profPy": 11.4,
      "mgn": 11.7,
      "mgnPy": 10.0,
      "note": "Lower volumes; segment earnings +7.9% organic"
     },
     {
      "n": "APMEA",
      "rev": 34.2,
      "revPy": 35.1,
      "org": -1.1,
      "prof": 6.5,
      "profPy": 6.6,
      "mgn": 19.0,
      "mgnPy": 18.8,
      "note": "segment earnings -1.5% organic"
     }
    ],
    "derived": [
     "mgn",
     "eps"
    ],
    "src": [
     [
      "Q2 2025 Form 10-Q (PDF)",
      "reports/watts/Q2-2025_10-q.pdf"
     ],
     [
      "Q2 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/795403/000155837025010556/wts-20250806xex99d1.htm"
     ]
    ],
    "revPy": 597.3,
    "revChg": 7.8,
    "org": 5.8,
    "prof": 135.3,
    "profPy": 111.5,
    "segLbl": "By reporting segment (regions); sales to external customers; margin = segment earnings / sales",
    "segNote": "Organic +5.8%: Americas +9.8% on price, volume and tariff pull-forward; Europe −7.6% and APMEA −1.1% on lower volume. Americas segment earnings +23% organic, margin 27.2%."
   },
   "Q3 2025": {
    "report": "Q3 2025 results",
    "date": "2025-11-05",
    "rev": 611.7,
    "revChg": 12.5,
    "org": 9.4,
    "mgnLbl": "Adj. operating margin",
    "mgn": 18.5,
    "mgnChg": 140,
    "eps": {
     "l": "Adj. EPS",
     "v": "$2.50",
     "c": "+23%; GAAP $2.45"
    },
    "seg": [
     {
      "n": "Americas",
      "rev": 464.1,
      "revPy": 400.0,
      "org": 13.3,
      "prof": 110.0,
      "profPy": 87.6,
      "mgn": 23.7,
      "mgnPy": 21.9,
      "note": "Price and volume incl. tariff pull-forward; acquisitions +USD 11.1m; segment earnings +23.6% organic"
     },
     {
      "n": "Europe",
      "rev": 111.6,
      "revPy": 107.3,
      "org": -2.3,
      "prof": 13.6,
      "profPy": 11.3,
      "mgn": 12.2,
      "mgnPy": 10.5,
      "note": "Lower volumes; segment earnings +13.3% organic"
     },
     {
      "n": "APMEA",
      "rev": 36.0,
      "revPy": 36.3,
      "org": 0.3,
      "prof": 7.0,
      "profPy": 6.7,
      "mgn": 19.4,
      "mgnPy": 18.5,
      "note": "segment earnings +4.5% organic"
     }
    ],
    "guide": "Full-year 2025 sales and margin outlook raised.",
    "src": [
     [
      "Q3 2025 Form 10-Q (PDF)",
      "reports/watts/Q3-2025_10-q.pdf"
     ],
     [
      "Q3 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/795403/000110465925107038/wts-20251105xex99d1.htm"
     ]
    ],
    "segNote": "Organic +9.4%: Americas +13.3% (price, volume, tariff pull-forward), APMEA +0.3%, Europe −2.3%. Americas segment earnings +24% organic, margin 23.7%; Europe earnings +13%.",
    "prof": 111.4,
    "derived": [],
    "revPy": 543.6,
    "profPy": 93.2,
    "segLbl": "By reporting segment (regions); sales to external customers; margin = segment earnings / sales"
   },
   "Q4 2025": {
    "report": "FY 2025 results (12 months)",
    "date": "2026-02-11",
    "rev": 2438.5,
    "revPy": 2252.2,
    "revChg": 8.3,
    "org": 5.3,
    "mgnLbl": "Adj. operating margin",
    "mgn": 19.6,
    "mgnChg": 190,
    "prof": 448.1,
    "profPy": 390.4,
    "eps": {
     "l": "Adj. EPS",
     "v": "$10.58",
     "c": "+19%; GAAP $10.17"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "356.3",
     "c": "+7%"
    },
    "segLbl": "By reporting segment (regions); sales to external customers; margin = segment earnings / sales",
    "seg": [
     {
      "n": "Americas",
      "rev": 1847.4,
      "revPy": 1664.9,
      "org": 8.0,
      "prof": 452.2,
      "profPy": 376.0,
      "mgn": 24.5,
      "mgnPy": 22.6
     },
     {
      "n": "Europe",
      "rev": 450.7,
      "revPy": 453.3,
      "org": -4.6,
      "prof": 59.8,
      "profPy": 53.2,
      "mgn": 13.3,
      "mgnPy": 11.7
     },
     {
      "n": "APMEA",
      "rev": 140.4,
      "revPy": 134.0,
      "org": 4.8,
      "prof": 25.7,
      "profPy": 24.5,
      "mgn": 18.3,
      "mgnPy": 18.3
     }
    ],
    "segNote": "Organic +5.3% on price in all segments and volume in the Americas and APMEA; acquisitions added 2.3 pts (Haws, Superior Boiler, Saudi Cast). Americas +8.0% organic with segment earnings +19%; Europe −4.6% on lower volume but earnings +8%; APMEA +4.8%. GAAP operating income +15%.",
    "guide": "2026: sales +8–12%, organic +2–6%.",
    "src": [
     [
      "2025 annual report incl. Form 10-K (PDF)",
      "reports/watts/Q4-2025_2025-annual-report-incl-form-10-k.pdf"
     ]
    ]
   },
   "Q1 2026": {
    "report": "Q1 2026 results",
    "date": "2026-05-06",
    "rev": 677.3,
    "revChg": 21.4,
    "org": 11.9,
    "mgnLbl": "Adj. operating margin",
    "mgn": 20.1,
    "mgnChg": 110,
    "eps": {
     "l": "Adj. EPS",
     "v": "$3.04",
     "c": "+28%"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "7",
     "c": "46 in Q1 2025"
    },
    "guide": "Full-year 2026 outlook maintained.",
    "src": [
     [
      "Q1 2026 Form 10-Q (PDF)",
      "reports/watts/Q1-2026_10-q.pdf"
     ],
     [
      "Q1 2026 earnings release",
      "https://www.sec.gov/Archives/edgar/data/0000795403/000110465926056325/wts-20260506xex99d1.htm"
     ]
    ],
    "prof": 133.0,
    "derived": [],
    "orgPy": null,
    "revPy": 558.0,
    "profPy": 87.7,
    "seg": [
     {
      "n": "Americas",
      "rev": 515.1,
      "revPy": 418.1,
      "org": 15.5,
      "prof": 124.5,
      "profPy": 97.8,
      "mgn": 24.2,
      "mgnPy": 23.4,
      "note": "Price and data-centre volume; acquisitions +USD 30.7m; segment earnings +26.9% organic"
     },
     {
      "n": "Europe",
      "rev": 121.4,
      "revPy": 108.4,
      "org": 0.5,
      "prof": 16.7,
      "profPy": 15.1,
      "mgn": 13.8,
      "mgnPy": 13.9,
      "note": "segment earnings -0.7% organic"
     },
     {
      "n": "APMEA",
      "rev": 40.8,
      "revPy": 31.5,
      "org": 3.4,
      "prof": 7.5,
      "profPy": 5.5,
      "mgn": 18.4,
      "mgnPy": 17.5,
      "note": "Acquisitions +USD 5.9m; segment earnings +56.4% organic"
     }
    ],
    "segLbl": "By reporting segment (regions); sales to external customers; margin = segment earnings / sales",
    "segNote": "Organic +11.9%: Americas +15.5% on price and data-centre volume; Europe +0.5%, APMEA +3.4%. Acquisitions added 6.6 pts. Americas segment earnings +27% organic; GAAP operating income +52%."
   },
   "Q2 2026": {
    "report": "Q2 2026 results",
    "date": "2026-08-05",
    "rev": 763.2,
    "revChg": 18.6,
    "org": 12.2,
    "mgnLbl": "Adj. operating margin",
    "mgn": 21.0,
    "mgnChg": -60,
    "eps": {
     "l": "Adj. EPS",
     "v": "$3.66",
     "c": "+18%; GAAP $3.53"
    },
    "cash": {
     "l": "Free cash flow, H1",
     "v": "98",
     "c": "105 in H1 2025"
    },
    "extra": [
     {
      "l": "Adj. operating income",
      "v": "160",
      "c": "+15%"
     },
     {
      "l": "Acquired revenue",
      "v": "34",
      "c": "5 pts of growth"
     }
    ],
    "seg": [
     {
      "n": "Americas",
      "rev": 585.0,
      "revPy": 498.5,
      "org": 11.6,
      "prof": 150.1,
      "profPy": 135.8,
      "mgn": 25.7,
      "mgnPy": 27.2,
      "note": "Price and data-centre volume; acquisitions +USD 28.4m; segment earnings +10.5% organic"
     },
     {
      "n": "Europe",
      "rev": 124.6,
      "revPy": 111.0,
      "org": 9.2,
      "prof": 16.6,
      "profPy": 13.0,
      "mgn": 13.3,
      "mgnPy": 11.7,
      "note": "segment earnings +23.8% organic"
     },
     {
      "n": "APMEA",
      "rev": 53.6,
      "revPy": 34.2,
      "org": 30.7,
      "prof": 10.6,
      "profPy": 6.5,
      "mgn": 19.8,
      "mgnPy": 19.0,
      "note": "Data centres in China; acquisitions +USD 5.9m; segment earnings +66.2% organic"
     }
    ],
    "guide": "2026 raised: organic +8–11%, reported +14–17%, adj. operating margin +20 to +80 bps.",
    "src": [
     [
      "Q2 2026 Form 10-Q (PDF)",
      "reports/watts/Q2-2026_10-q.pdf"
     ],
     [
      "Q2 2026 earnings release",
      "https://www.sec.gov/Archives/edgar/data/0000795403/000110465926091165/wts-20260805xex99d1.htm"
     ]
    ],
    "revPy": 643.7,
    "prof": 154.0,
    "profPy": 135.3,
    "derived": [],
    "segLbl": "By reporting segment (regions); sales to external customers; margin = segment earnings / sales",
    "segNote": "Organic +12.2%: APMEA +30.7% (data centres in China), Americas +11.6%, Europe +9.2%. Acquisitions added 5.3 pts. Americas margin fell to 25.7% (27.2%) on acquisition dilution, inflation and tariffs; Europe margin 13.3% (11.7%)."
   },
   "Q3 2026": {
    "report": "Q3 2026 results — due 4 Nov 2026",
    "pending": true,
    "note": "Consensus before the release: adj. EPS ~$3.14, revenue ~USD 693m (Q3 2025: $2.50, USD 612m).",
    "src": [
     [
      "Watts investor relations",
      "https://investors.watts.com/"
     ]
    ]
   }
  },
  "emerson": {
   "Q2 2025": {
    "report": "Q2 2025 results (quarter ended 31 Mar 2025)",
    "date": "2025-05-07",
    "rev": 4432,
    "revChg": 1.3,
    "org": 2,
    "orgLbl": "Underlying growth",
    "mgnLbl": "Adj. segment EBITA margin",
    "mgn": 28.0,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.48",
     "c": "+9% vs $1.36"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "738",
     "c": "+14%"
    },
    "src": [
     [
      "Q2 2025 Form 10-Q (PDF)",
      "reports/emerson/FQ2-2025_10-q.pdf"
     ]
    ],
    "revPy": 4376,
    "prof": 1240,
    "profPy": 1139,
    "mgnPy": 26.0,
    "seg": [
     {
      "n": "Intelligent Devices",
      "rev": 3029,
      "revPy": 3061,
      "org": 0,
      "prof": 781,
      "profPy": 783,
      "mgn": 25.8,
      "mgnPy": 25.6
     },
     {
      "n": "· Final Control",
      "rev": 1073,
      "revPy": 1051,
      "org": 3,
      "sub": true,
      "note": "Power end markets, esp. Middle East & Africa"
     },
     {
      "n": "· Measurement & Analytical",
      "rev": 1002,
      "revPy": 1013,
      "org": 0,
      "sub": true
     },
     {
      "n": "· Discrete Automation",
      "rev": 615,
      "revPy": 632,
      "org": -1,
      "sub": true
     },
     {
      "n": "· Safety & Productivity",
      "rev": 339,
      "revPy": 365,
      "org": -6,
      "sub": true,
      "note": "Softness in all regions"
     },
     {
      "n": "Software and Control",
      "rev": 1421,
      "revPy": 1332,
      "org": 7,
      "prof": 459,
      "profPy": 356,
      "mgn": 32.3,
      "mgnPy": 26.7
     },
     {
      "n": "· Control Systems & Software",
      "rev": 1062,
      "revPy": 965,
      "org": 11,
      "sub": true,
      "note": "Robust growth at AspenTech"
     },
     {
      "n": "· Test & Measurement",
      "rev": 359,
      "revPy": 367,
      "org": -1,
      "sub": true
     }
    ],
    "geo": [
     {
      "n": "Americas",
      "rev": 2252,
      "revPy": 2192,
      "org": 3
     },
     {
      "n": "Asia, Middle East & Africa",
      "rev": 1331,
      "revPy": 1306,
      "org": 3,
      "note": "China −8%"
     },
     {
      "n": "Europe",
      "rev": 867,
      "revPy": 895,
      "org": -1
     }
    ],
    "segNote": "Software and Control +7% underlying (Control Systems & Software +11%, AspenTech) with adj. EBITA margin 32.3% (+560 bps); Intelligent Devices flat with Safety & Productivity −6%. Americas and AMEA +3%, Europe −1%. AspenTech buy-out completed 12 Mar 2025 (~USD 7.2bn). Old segment structure (before the fiscal 2026 change).",
    "segLbl": "By business group and segment; margin = adj. EBITA margin; growth = underlying"
   },
   "Q3 2025": {
    "report": "Q3 2025 results (quarter ended 30 Jun 2025)",
    "date": "2025-08-06",
    "rev": 4553,
    "revChg": 3.9,
    "org": 3,
    "orgLbl": "Underlying growth",
    "mgnLbl": "Adj. segment EBITA margin",
    "mgn": 27.1,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.52",
     "c": "+6% vs $1.43"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "970",
     "c": "−1%; margin 21.3%"
    },
    "guide": "FY 2025 adj. EPS ~$6.00, free cash flow ~USD 3.2bn.",
    "src": [
     [
      "Q3 2025 Form 10-Q (PDF)",
      "reports/emerson/FQ3-2025_10-q.pdf"
     ]
    ],
    "prof": 1232,
    "revPy": 4380,
    "profPy": 1189,
    "mgnPy": 27.1,
    "seg": [
     {
      "n": "Intelligent Devices",
      "rev": 3125,
      "revPy": 2997,
      "org": 3,
      "prof": 763,
      "profPy": 765,
      "mgn": 24.4,
      "mgnPy": 25.5
     },
     {
      "n": "· Final Control",
      "rev": 1116,
      "revPy": 1046,
      "org": 5,
      "sub": true,
      "note": "Power, esp. Americas"
     },
     {
      "n": "· Measurement & Analytical",
      "rev": 1014,
      "revPy": 982,
      "org": 2,
      "sub": true
     },
     {
      "n": "· Discrete Automation",
      "rev": 649,
      "revPy": 618,
      "org": 3,
      "sub": true
     },
     {
      "n": "· Safety & Productivity",
      "rev": 346,
      "revPy": 351,
      "org": -2,
      "sub": true
     },
     {
      "n": "Software and Control",
      "rev": 1444,
      "revPy": 1398,
      "org": 2,
      "prof": 469,
      "profPy": 424,
      "mgn": 32.6,
      "mgnPy": 30.3
     },
     {
      "n": "· Control Systems & Software",
      "rev": 1083,
      "revPy": 1043,
      "org": 3,
      "sub": true,
      "note": "Power globally, process in the Americas"
     },
     {
      "n": "· Test & Measurement",
      "rev": 361,
      "revPy": 355,
      "org": -1,
      "sub": true,
      "note": "Early recovery in discrete markets"
     }
    ],
    "geo": [
     {
      "n": "Americas",
      "rev": 2357,
      "revPy": 2206,
      "org": 7,
      "note": "US +10%"
     },
     {
      "n": "Asia, Middle East & Africa",
      "rev": 1356,
      "revPy": 1312,
      "org": 2,
      "note": "China flat"
     },
     {
      "n": "Europe",
      "rev": 856,
      "revPy": 877,
      "org": -7
     }
    ],
    "segNote": "Intelligent Devices +3% underlying led by Final Control (+5%, power); margin −110 bps on FX and tariffs. Software and Control +2% with adj. EBITA margin 32.6% (+230 bps). Americas +7% (US +10%), Europe −7%. Old segment structure.",
    "segLbl": "By business group and segment; margin = adj. EBITA margin; growth = underlying"
   },
   "Q4 2025": {
    "report": "FY 2025 results (year ended 30 Sep 2025)",
    "date": "2025-11-05",
    "rev": 18016,
    "revPy": 17492,
    "revChg": 3,
    "org": 3,
    "orgLbl": "Underlying growth",
    "mgnLbl": "Adj. segment EBITA margin",
    "mgn": 27.6,
    "mgnPy": 26.0,
    "prof": 4975,
    "profPy": 4552,
    "eps": {
     "l": "Adj. EPS",
     "v": "$6.00",
     "c": "+9%"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "3,245",
     "c": "+12%"
    },
    "segLbl": "By business group and segment; margin = adj. EBITA margin; growth = underlying",
    "seg": [
     {
      "n": "Intelligent Devices",
      "rev": 12400,
      "revPy": 12161,
      "org": 2,
      "prof": 3212,
      "profPy": 3094,
      "mgn": 25.9,
      "mgnPy": 25.4
     },
     {
      "n": "· Final Control",
      "rev": 4380,
      "revPy": 4204,
      "org": 4,
      "sub": true,
      "note": "Power end markets"
     },
     {
      "n": "· Measurement & Analytical",
      "rev": 4143,
      "revPy": 4061,
      "org": 2,
      "sub": true
     },
     {
      "n": "· Discrete Automation",
      "rev": 2521,
      "revPy": 2506,
      "org": 1,
      "sub": true
     },
     {
      "n": "· Safety & Productivity",
      "rev": 1356,
      "revPy": 1390,
      "org": -3,
      "sub": true
     },
     {
      "n": "Software and Control",
      "rev": 5691,
      "revPy": 5399,
      "org": 5,
      "prof": 1763,
      "profPy": 1458,
      "mgn": 31.0,
      "mgnPy": 27.0
     },
     {
      "n": "· Control Systems & Software",
      "rev": 4205,
      "revPy": 3935,
      "org": 7,
      "sub": true,
      "note": "Incl. AspenTech (fully owned since March 2025)"
     },
     {
      "n": "· Test & Measurement",
      "rev": 1486,
      "revPy": 1464,
      "org": 1,
      "sub": true
     }
    ],
    "segNote": "Underlying +3%: Software and Control +5% (Control Systems & Software +7%) with adj. EBITA margin +400 bps to 31.0%; Intelligent Devices +2% (Final Control +4%), margin 25.9%; Safety & Productivity −3%. Old segment structure (before the fiscal 2026 change).",
    "guide": "FY 2026: adj. EPS $6.35–6.55, FCF USD 3.5–3.6bn, net sales ~+5.5% (initial guidance).",
    "src": [
     [
      "FY 2025 Form 10-K (PDF)",
      "reports/emerson/Q3-2025_fiscal-2025-form-10-k.pdf"
     ]
    ]
   },
   "Q1 2026": {
    "report": "Q1 2026 results (quarter ended 31 Dec 2025)",
    "date": "2026-02-03",
    "rev": 4346,
    "revChg": 4.1,
    "org": 2,
    "orgLbl": "Underlying growth",
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.46",
     "c": "+6% vs $1.38; GAAP $1.07"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "602",
     "c": "−13%"
    },
    "orders": {
     "l": "Underlying orders",
     "v": "+9%"
    },
    "guide": "FY 2026 adj. EPS midpoint raised: $6.40–6.55.",
    "src": [
     [
      "Q1 2026 Form 10-Q (PDF)",
      "reports/emerson/FQ1-2026_10-q.pdf"
     ]
    ],
    "revPy": 4175,
    "prof": 1203,
    "profPy": 1169,
    "mgnLbl": "Adj. segment EBITA margin",
    "mgn": 27.7,
    "mgnPy": 28.0,
    "seg": [
     {
      "n": "Software & Systems",
      "rev": 1453,
      "revPy": 1382,
      "org": 3,
      "prof": 455,
      "profPy": 428,
      "mgn": 31.3,
      "mgnPy": 31.1
     },
     {
      "n": "· Control Systems & Software",
      "rev": 1044,
      "revPy": 1023,
      "org": 0,
      "sub": true,
      "note": "Power and life sciences offset by software-renewal timing"
     },
     {
      "n": "· Test & Measurement",
      "rev": 409,
      "revPy": 359,
      "org": 11,
      "sub": true,
      "note": "Aerospace & defence, semiconductor"
     },
     {
      "n": "Intelligent Devices",
      "rev": 2390,
      "revPy": 2306,
      "org": 2,
      "prof": 643,
      "profPy": 637,
      "mgn": 26.9,
      "mgnPy": 27.6
     },
     {
      "n": "· Sensors",
      "rev": 996,
      "revPy": 972,
      "org": 1,
      "sub": true
     },
     {
      "n": "· Final Control",
      "rev": 1394,
      "revPy": 1334,
      "org": 2,
      "sub": true,
      "note": "Power, Americas"
     },
     {
      "n": "Safety & Productivity",
      "rev": 503,
      "revPy": 487,
      "org": 1,
      "prof": 105,
      "profPy": 104,
      "mgn": 20.9,
      "mgnPy": 21.3
     }
    ],
    "geo": [
     {
      "n": "Americas",
      "rev": 2201,
      "revPy": 2124,
      "org": 3,
      "note": "US +6%"
     },
     {
      "n": "Asia, Middle East & Africa",
      "rev": 1273,
      "revPy": 1275,
      "org": 0,
      "note": "China −5%"
     },
     {
      "n": "Europe",
      "rev": 872,
      "revPy": 776,
      "org": 3
     }
    ],
    "segNote": "New structure from fiscal 2026 (prior year restated). Test & Measurement +11% underlying (aerospace & defence, semiconductor); Software & Systems margin 31.3% despite ~2 pts drag from software-renewal timing. Intelligent Devices +2%, margin −70 bps; Safety & Productivity +1%.",
    "segLbl": "By business group and segment; margin = adj. EBITA margin; growth = underlying"
   },
   "Q2 2026": {
    "report": "Q2 2026 results (quarter ended 31 Mar 2026)",
    "date": "2026-05-05",
    "org": 0.5,
    "orgLbl": "Underlying growth",
    "mgnLbl": "Adj. segment EBITA margin",
    "mgn": 27.6,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.54",
     "c": "+4% vs $1.48; GAAP $1.10"
    },
    "orders": {
     "l": "Underlying orders",
     "v": "+5%",
     "c": "fifth quarter in a row of mid-single digits or better"
    },
    "note": "Middle East conflict (−1 pt) and software contract renewal timing (−2 pts) held back sales.",
    "guide": "FY 2026: underlying +3%, reported +4.5%, adj. EPS $6.45–6.55, FCF USD 3.5–3.6bn.",
    "src": [
     [
      "Q2 2026 Form 10-Q (PDF)",
      "reports/emerson/FQ2-2026_10-q.pdf"
     ]
    ],
    "rev": 4562,
    "revPy": 4432,
    "revChg": 2.9,
    "prof": 1258,
    "profPy": 1240,
    "mgnPy": 28.0,
    "seg": [
     {
      "n": "Software & Systems",
      "rev": 1503,
      "revPy": 1451,
      "org": 1,
      "prof": 438,
      "profPy": 462,
      "mgn": 29.2,
      "mgnPy": 31.7
     },
     {
      "n": "· Control Systems & Software",
      "rev": 1089,
      "revPy": 1093,
      "org": -2,
      "sub": true,
      "note": "Software-renewal timing; strong power and life sciences"
     },
     {
      "n": "· Test & Measurement",
      "rev": 414,
      "revPy": 358,
      "org": 12,
      "sub": true,
      "note": "Aerospace & defence, semiconductor"
     },
     {
      "n": "Intelligent Devices",
      "rev": 2512,
      "revPy": 2459,
      "org": -1,
      "prof": 701,
      "profPy": 665,
      "mgn": 27.9,
      "mgnPy": 27.1
     },
     {
      "n": "· Sensors",
      "rev": 1024,
      "revPy": 1000,
      "org": 0,
      "sub": true,
      "note": "Middle East conflict offset by Americas"
     },
     {
      "n": "· Final Control",
      "rev": 1488,
      "revPy": 1459,
      "org": -1,
      "sub": true,
      "note": "Power and LNG in the Americas"
     },
     {
      "n": "Safety & Productivity",
      "rev": 547,
      "revPy": 522,
      "org": 2,
      "prof": 119,
      "profPy": 113,
      "mgn": 21.7,
      "mgnPy": 21.8
     }
    ],
    "geo": [
     {
      "n": "Americas",
      "rev": 2371,
      "revPy": 2235,
      "org": 5,
      "note": "US +9%"
     },
     {
      "n": "Asia, Middle East & Africa",
      "rev": 1293,
      "revPy": 1331,
      "org": -5,
      "note": "China −9%"
     },
     {
      "n": "Europe",
      "rev": 898,
      "revPy": 866,
      "org": -4
     }
    ],
    "segNote": "Underlying +0.5%: price +3.5% but volume −3% from software-renewal timing (−2 pts) and the Middle East conflict (−1 pt). Software & Systems margin 29.2% (−250 bps, ~3 pts renewal timing); Intelligent Devices margin +80 bps to 27.9%. US +9%, international −5%.",
    "segLbl": "By business group and segment; margin = adj. EBITA margin; growth = underlying"
   },
   "Q3 2026": {
    "report": "Q3 2026 results (quarter ended 30 Jun 2026)",
    "date": "2026-08-04",
    "rev": 4873,
    "revChg": 7.0,
    "org": 6,
    "orgLbl": "Underlying growth",
    "mgnLbl": "Adj. segment EBITA margin",
    "mgn": 28.5,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.71",
     "c": "+13% vs $1.52"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "1,323",
     "c": "+36%; margin 27.1%"
    },
    "orders": {
     "l": "Underlying orders",
     "v": "+7%"
    },
    "extra": [
     {
      "l": "Adj. segment EBITA",
      "v": "1,387"
     },
     {
      "l": "Share buybacks, year to date",
      "v": "898"
     }
    ],
    "seg": [
     {
      "n": "Software & Systems",
      "rev": 1644,
      "revPy": 1480,
      "org": 11,
      "prof": 523,
      "profPy": 474,
      "mgn": 31.8,
      "mgnPy": 32.1
     },
     {
      "n": "· Control Systems & Software",
      "rev": 1199,
      "revPy": 1120,
      "org": 7,
      "sub": true,
      "note": "Strong demand in power (Ovation)"
     },
     {
      "n": "· Test & Measurement",
      "rev": 445,
      "revPy": 360,
      "org": 23,
      "sub": true,
      "note": "Semiconductor, aerospace & defence"
     },
     {
      "n": "Intelligent Devices",
      "rev": 2677,
      "revPy": 2535,
      "org": 5,
      "prof": 747,
      "profPy": 648,
      "mgn": 27.9,
      "mgnPy": 25.5
     },
     {
      "n": "· Sensors",
      "rev": 1091,
      "revPy": 1013,
      "org": 7,
      "sub": true,
      "note": "Power and LNG in the Americas"
     },
     {
      "n": "· Final Control",
      "rev": 1586,
      "revPy": 1522,
      "org": 3,
      "sub": true,
      "note": "AMEA and Americas, power"
     },
     {
      "n": "Safety & Productivity",
      "rev": 552,
      "revPy": 538,
      "org": 2,
      "prof": 117,
      "profPy": 110,
      "mgn": 21.2,
      "mgnPy": 20.4
     }
    ],
    "guide": "FY 2026 raised: net sales ~+5%, underlying ~+3.5%, adj. EPS ~$6.55, FCF ~USD 3.6bn, adj. segment EBITA margin ~28%.",
    "src": [
     [
      "Q3 2026 Form 10-Q (PDF)",
      "reports/emerson/FQ3-2026_10-q.pdf"
     ]
    ],
    "revPy": 4553,
    "prof": 1387,
    "profPy": 1232,
    "geo": [
     {
      "n": "Americas",
      "rev": 2537,
      "revPy": 2341,
      "org": 8,
      "note": "US +10%"
     },
     {
      "n": "Asia, Middle East & Africa",
      "rev": 1475,
      "revPy": 1356,
      "org": 8,
      "note": "China −3%"
     },
     {
      "n": "Europe",
      "rev": 861,
      "revPy": 856,
      "org": -1
     }
    ],
    "segNote": "Underlying +6%: Software & Systems +11% (Test & Measurement +23%), Intelligent Devices +5% with margin +240 bps to 27.9%, Safety & Productivity +2%. Americas and AMEA +8%, Europe −1%. Adj. EBITA includes no IEEPA refund (USD 82m excluded).",
    "mgnPy": 27.1,
    "segLbl": "By business group and segment; margin = adj. EBITA margin; growth = underlying"
   },
   "Q1 2025": {
    "report": "Q1 2025 results (quarter ended 31 Dec 2024)",
    "date": "2025-02-05",
    "rev": 4175,
    "revPy": 4117,
    "revChg": 1.4,
    "org": 2,
    "orgLbl": "Underlying growth",
    "mgnLbl": "Adj. segment EBITA margin",
    "mgn": 28.0,
    "mgnPy": 24.6,
    "prof": 1169,
    "profPy": 1014,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.38",
     "c": "+13% vs $1.22"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "694"
    },
    "segLbl": "By business group and segment; margin = adj. EBITA margin; growth = underlying",
    "seg": [
     {
      "n": "Intelligent Devices",
      "rev": 2843,
      "revPy": 2822,
      "org": 2,
      "prof": 741,
      "profPy": 671,
      "mgn": 26.1,
      "mgnPy": 23.8
     },
     {
      "n": "· Final Control",
      "rev": 976,
      "revPy": 940,
      "org": 5,
      "sub": true
     },
     {
      "n": "· Measurement & Analytical",
      "rev": 975,
      "revPy": 947,
      "org": 4,
      "sub": true
     },
     {
      "n": "· Discrete Automation",
      "rev": 580,
      "revPy": 613,
      "org": -4,
      "sub": true
     },
     {
      "n": "· Safety & Productivity",
      "rev": 312,
      "revPy": 322,
      "org": -3,
      "sub": true
     },
     {
      "n": "Software and Control",
      "rev": 1352,
      "revPy": 1314,
      "org": 4,
      "prof": 428,
      "profPy": 343,
      "mgn": 31.6,
      "mgnPy": 26.1
     },
     {
      "n": "· Control Systems & Software",
      "rev": 690,
      "revPy": 675,
      "org": 3,
      "sub": true
     },
     {
      "n": "· Test & Measurement",
      "rev": 359,
      "revPy": 382,
      "org": -5,
      "sub": true
     },
     {
      "n": "· AspenTech",
      "rev": 303,
      "revPy": 257,
      "org": 18,
      "sub": true
     }
    ],
    "geo": [
     {
      "n": "Americas",
      "org": 3
     },
     {
      "n": "Asia, Middle East & Africa",
      "org": 4,
      "note": "China −5%"
     },
     {
      "n": "Europe",
      "org": -2
     }
    ],
    "segNote": "Underlying +2%: Final Control +5% and Measurement & Analytical +4% offset Discrete Automation (−4%) and Safety & Productivity (−3%); AspenTech +18%. Adj. segment EBITA margin 28.0% (+340 bps), Software and Control 31.6% (+550 bps). Old segment structure.",
    "src": [
     [
      "Q1 2025 Form 10-Q (PDF)",
      "reports/emerson/FQ1-2025_10-q.pdf"
     ]
    ]
   }
  },
  "gf": {
   "Q2 2025": {
    "report": "H1 2025 results (6 months)",
    "date": "2025-07-24",
    "rev": 1546,
    "revChg": -3.0,
    "org": 0.1,
    "orgLbl": "Organic growth, Flow Solutions",
    "mgnLbl": "Comparable EBIT margin, Flow Solutions",
    "mgn": 10.4,
    "mgnPy": 11.7,
    "eps": {
     "l": "Net profit to shareholders",
     "v": "160",
     "c": "97 in H1 2024 (+65%); incl. gain on Machining Solutions sale"
    },
    "orders": {
     "l": "Order intake, Flow Solutions",
     "v": "1,511",
     "c": "1,487 in H1 2024; +4.6% organic"
    },
    "cash": {
     "l": "Net debt",
     "v": "1,572",
     "c": "2.5x EBITDA (3.4x at end-2024)"
    },
    "segLbl": "By division; margin = comparable EBIT margin; revenue = Flow Solutions (group incl. Casting CHF ~1.9bn)",
    "seg": [
     {
      "n": "Industry & Infrastructure Flow Solutions",
      "org": 1.6,
      "mLbl": "Comparable EBIT margin",
      "rev": 960,
      "chg": -1.4,
      "mgn": 11.5,
      "mgnPy": 13.7,
      "note": "Strong infrastructure in Europe and the Middle East; industry hit by tariff uncertainty; margin down on mix, FX and tariffs"
     },
     {
      "n": "· Water Distribution",
      "org": 8,
      "mLbl": "Comparable EBIT margin",
      "sub": true
     },
     {
      "n": "· Water Treatment",
      "org": 3,
      "mLbl": "Comparable EBIT margin",
      "sub": true
     },
     {
      "n": "· Microelectronics",
      "org": -16,
      "mLbl": "Comparable EBIT margin",
      "sub": true,
      "note": "Lower semiconductor sales; healthy project pipeline"
     },
     {
      "n": "Building Flow Solutions",
      "org": -1.6,
      "mLbl": "Comparable EBIT margin",
      "rev": 586,
      "chg": -5.6,
      "mgn": 9.7,
      "mgnPy": 9.2,
      "note": "Organic growth adjusted for phased-out products; margin up on cost savings"
     },
     {
      "n": "· Europe",
      "org": -2,
      "mLbl": "Comparable EBIT margin",
      "sub": true,
      "note": "Signs of stabilisation in DACH and Eastern Europe"
     },
     {
      "n": "· North America",
      "org": -0.5,
      "mLbl": "Comparable EBIT margin",
      "sub": true,
      "note": "Flat despite declining markets"
     },
     {
      "n": "Casting Solutions (being divested)",
      "org": -14.1,
      "mLbl": "Comparable EBIT margin",
      "rev": 388,
      "chg": -16.0,
      "mgn": 4.9,
      "mgnPy": 8.8,
      "note": "Weak European premium automotive; aerospace and gas turbines solid"
     }
    ],
    "segNote": "Flow Solutions sales CHF ~1.5bn (−3.0%, +0.1% organic) with comparable EBIT margin 10.4% (11.7%). Infrastructure grew (water distribution +8%) but industry and microelectronics (−16%) were weak; Building Flow Solutions −1.6% organic with margin up to 9.7%. Orders +4.6% organic.",
    "guide": "2025 Flow Solutions: flat to low-single-digit organic growth; comparable EBIT margin 10.5–12.5%. Capital Markets Day on 4 Nov 2025.",
    "src": [
     [
      "H1 2025 results presentation (PDF)",
      "reports/gf/Q2-2025_h1-2025-results-presentation.pdf"
     ]
    ]
   },
   "Q4 2025": {
    "report": "FY 2025 results (12 months)",
    "rev": 4110,
    "revChg": -13.9,
    "org": -1.7,
    "mgnLbl": "Comparable EBITDA margin",
    "mgn": 11.4,
    "mgnChg": -150,
    "cash": {
     "l": "Free cash flow before M&A",
     "v": "21",
     "c": "184 in 2024"
    },
    "extra": [
     {
      "l": "Comparable EBITDA",
      "v": "467"
     },
     {
      "l": "Net debt",
      "v": "1,684"
     },
     {
      "l": "Dividend",
      "v": "CHF 1.35",
      "c": "unchanged"
     }
    ],
    "seg": [
     {
      "n": "GF Flow Solutions",
      "rev": 2999,
      "chg": -1.7,
      "org": 0.6,
      "mgn": 10.0,
      "mgnPy": 11.4,
      "mLbl": "Comparable EBIT margin"
     },
     {
      "n": "· Industry & Infrastructure",
      "org": 1.9,
      "sub": true
     }
    ],
    "derived": [
     "revChg"
    ],
    "src": [
     [
      "Annual report 2025 (PDF)",
      "reports/gf/Q4-2025_annual-report-2025.pdf"
     ]
    ],
    "geo": [
     {
      "n": "Americas",
      "org": 3.5
     },
     {
      "n": "Europe",
      "note": "Organic decline of more than 2%"
     }
    ],
    "segNote": "Flow Solutions +0.6% organic with comparable EBIT margin down to 10.0%; Industry & Infrastructure +1.9% and the Americas +3.5% offset Europe (more than −2%).",
    "prof": 467
   },
   "Q2 2026": {
    "report": "H1 2026 results (6 months)",
    "rev": 1696,
    "revChg": -24.8,
    "org": 5.7,
    "orgLbl": "Organic growth, Flow Solutions",
    "mgnLbl": "Comparable EBITDA margin, Flow Solutions",
    "mgn": 13.4,
    "eps": {
     "l": "Net result to shareholders",
     "v": "−77",
     "c": "deconsolidation loss on Casting exit; +160 in H1 2025"
    },
    "extra": [
     {
      "l": "Comparable EBIT margin, Flow Solutions",
      "v": "10.0%"
     }
    ],
    "seg": [
     {
      "n": "GF Flow Solutions",
      "rev": 1584,
      "chg": 5.1,
      "org": 5.7,
      "mgn": 13.4
     },
     {
      "n": "· Industry & Infrastructure",
      "rev": 1001,
      "revPy": 921,
      "prof": 144,
      "profPy": 137,
      "mgn": 14.4,
      "mgnPy": 14.9,
      "sub": true
     },
     {
      "n": "· Building",
      "rev": 616,
      "revPy": 630,
      "org": 3.3,
      "prof": 77,
      "mgn": 12.6,
      "mgnPy": 12.5,
      "sub": true
     }
    ],
    "guide": "2026 raised to mid-single-digit organic growth (low single digit); comparable EBITDA margin 14–16% kept.",
    "derived": [
     "revChg",
     "seg.· Industry & Infrastructure.mgn",
     "seg.· Industry & Infrastructure.mgnPy"
    ],
    "src": [
     [
      "H1 2026 results presentation (PDF)",
      "reports/gf/Q2-2026_h1-2026-results-presentation.pdf"
     ]
    ],
    "revPy": 2255,
    "segNote": "Industry & Infrastructure revenue +9% with comparable EBITDA up to CHF 144m, though margin eased to 14.4%. Building +3.3% organic (−2% in CHF), margin 12.6% (12.5%). Group revenue −25% after the casting exit."
   }
  },
  "pentair": {
   "Q1 2025": {
    "report": "Q1 2025 results",
    "revChg": -0.7,
    "mgnLbl": "Adj. return on sales",
    "mgn": 24.0,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.11",
     "c": "$0.94 in Q1 2024"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "−56"
    },
    "src": [
     [
      "Q1 2025 Form 10-Q (PDF)",
      "reports/pentair/Q1-2025_10-q.pdf"
     ]
    ],
    "rev": 1010.4,
    "revPy": 1017.2,
    "org": -0.8,
    "orgLbl": "Core sales growth",
    "prof": 270.3,
    "profPy": 243.7,
    "seg": [
     {
      "n": "Flow",
      "rev": 367.9,
      "revPy": 384.3,
      "org": -2.9,
      "prof": 83.6,
      "profPy": 77.3,
      "mgn": 22.7,
      "mgnPy": 20.1
     },
     {
      "n": "Water Solutions",
      "rev": 258.2,
      "revPy": 273.1,
      "org": -4.3,
      "prof": 60.7,
      "profPy": 55.6,
      "mgn": 23.5,
      "mgnPy": 20.4
     },
     {
      "n": "Pool",
      "rev": 383.9,
      "revPy": 359.5,
      "org": 4.2,
      "prof": 126.0,
      "profPy": 110.8,
      "mgn": 32.8,
      "mgnPy": 30.8
     }
    ],
    "segLbl": "By reporting segment; margin = segment return on sales (segment income / sales); growth = core",
    "segNote": "Pool core +4.2% with segment income +14%; Flow −2.9% and Water Solutions −4.3% core, but both raised segment income (+8% and +9%) and return on sales on price and productivity."
   },
   "Q2 2025": {
    "report": "Q2 2025 results",
    "rev": 1123.1,
    "revChg": 2.2,
    "mgnLbl": "Adj. return on sales",
    "mgn": 26.4,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.39",
     "c": "GAAP $0.90"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "596",
     "c": "522 in Q2 2024"
    },
    "derived": [
     "mgn"
    ],
    "src": [
     [
      "Q2 2025 Form 10-Q (PDF)",
      "reports/pentair/Q2-2025_10-q.pdf"
     ]
    ],
    "revPy": 1099.3,
    "org": 1.3,
    "orgLbl": "Core sales growth",
    "prof": 316.0,
    "profPy": 290.9,
    "seg": [
     {
      "n": "Flow",
      "rev": 397.3,
      "revPy": 396.8,
      "org": -1.3,
      "prof": 93.1,
      "profPy": 84.4,
      "mgn": 23.4,
      "mgnPy": 21.3
     },
     {
      "n": "Water Solutions",
      "rev": 298.3,
      "revPy": 310.5,
      "org": -3.0,
      "prof": 70.2,
      "profPy": 72.9,
      "mgn": 23.5,
      "mgnPy": 23.5
     },
     {
      "n": "Pool",
      "rev": 427.2,
      "revPy": 391.5,
      "org": 7.3,
      "prof": 152.7,
      "profPy": 133.6,
      "mgn": 35.7,
      "mgnPy": 34.1
     }
    ],
    "segLbl": "By reporting segment; margin = segment return on sales (segment income / sales); growth = core",
    "segNote": "Pool core +7.3% (segment income +14%, ROS 35.7%) drove the quarter; Flow −1.3% core with ROS +210 bps to 23.4%; Water Solutions −3.0% core, segment income −4%."
   },
   "Q3 2025": {
    "report": "Q3 2025 results",
    "rev": 1022.0,
    "revPy": 993.4,
    "revChg": 2.9,
    "mgnLbl": "Adj. return on sales",
    "mgn": 25.7,
    "prof": 279.9,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.24",
     "c": "+14%; GAAP $1.12"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "179",
     "c": "234 in Q3 2024"
    },
    "seg": [
     {
      "n": "Flow",
      "rev": 394.0,
      "revPy": 372.2,
      "org": 3.6,
      "prof": 95.3,
      "profPy": 82.8,
      "mgn": 24.2,
      "mgnPy": 22.2
     },
     {
      "n": "Water Solutions",
      "rev": 273.3,
      "revPy": 289.5,
      "org": 0.5,
      "prof": 68.4,
      "profPy": 64.4,
      "mgn": 25.0,
      "mgnPy": 22.2
     },
     {
      "n": "Pool",
      "rev": 354.3,
      "revPy": 331.4,
      "org": 5.6,
      "prof": 116.2,
      "profPy": 112.7,
      "mgn": 32.8,
      "mgnPy": 34.0
     }
    ],
    "derived": [
     "mgn"
    ],
    "segNote": "Core +3.3%: Pool +5.6% and Flow +3.6% (segment income +15%, ROS 24.2%); Water Solutions +0.5% core with ROS +280 bps to 25.0%. Hydra-Stop acquired in September 2025 (USD 292m).",
    "src": [
     [
      "Q3 2025 Form 10-Q (PDF)",
      "reports/pentair/Q3-2025_10-q.pdf"
     ]
    ],
    "org": 3.3,
    "orgLbl": "Core sales growth",
    "profPy": 259.9,
    "segLbl": "By reporting segment; margin = segment return on sales (segment income / sales); growth = core"
   },
   "Q4 2025": {
    "report": "FY 2025 results (12 months)",
    "rev": 4200,
    "revChg": 2,
    "mgnLbl": "Adj. return on sales",
    "eps": {
     "l": "Adj. EPS",
     "v": "$4.92",
     "c": "+14%; GAAP $3.93"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "748",
     "c": "+55 vs 2024"
    },
    "segNote": "Full-year segment detail not yet in the dashboard (no Pentair annual report stored). Q4 2025: sales USD 1,021m, core +4%, adj. return on sales 24.7%.",
    "guide": "2026 adj. EPS $5.25–5.40 (initial guidance).",
    "src": [
     [
      "Q4 / FY 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/77360/000007736026000003/a2025q4pressrelease.htm"
     ]
    ]
   },
   "Q1 2026": {
    "report": "Q1 2026 results",
    "rev": 1036.7,
    "org": 1.1,
    "orgLbl": "Core sales growth",
    "mgnLbl": "Adj. return on sales",
    "mgn": 25.0,
    "mgnChg": 100,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.22",
     "c": "+10%"
    },
    "guide": "2026 adj. EPS raised to $5.30–5.40.",
    "src": [
     [
      "Q1 2026 Form 10-Q (PDF)",
      "reports/pentair/Q1-2026_10-q.pdf"
     ]
    ],
    "revPy": 1010.4,
    "revChg": 2.6,
    "prof": 289.2,
    "profPy": 270.3,
    "seg": [
     {
      "n": "Flow",
      "rev": 258.1,
      "revPy": 232.6,
      "org": 2.5,
      "prof": 61.2,
      "profPy": 50.2,
      "mgn": 23.7,
      "mgnPy": 21.6,
      "note": "Incl. Hydra-Stop (+4.3 pts acquisitions)"
     },
     {
      "n": "Water Solutions",
      "rev": 391.0,
      "revPy": 393.5,
      "org": 0.9,
      "prof": 99.9,
      "profPy": 94.1,
      "mgn": 25.5,
      "mgnPy": 23.9
     },
     {
      "n": "Pool",
      "rev": 387.1,
      "revPy": 383.9,
      "org": 0.5,
      "prof": 128.1,
      "profPy": 126.0,
      "mgn": 33.1,
      "mgnPy": 32.8
     }
    ],
    "segLbl": "By reporting segment; margin = segment return on sales (segment income / sales); growth = core",
    "segNote": "New segment structure from 1 Jan 2026 (residential and irrigation flow moved from Flow to Water Solutions; prior year restated). Core +1.1% on price +5.3% and volume −4.2%. Flow segment income +22% (ROS 23.7%), Water Solutions +6% (ROS 25.5%), Pool +2%."
   },
   "Q2 2026": {
    "report": "Q2 2026 results",
    "date": "2026-07-28",
    "rev": 932.6,
    "revChg": -17.0,
    "org": -17.3,
    "orgLbl": "Core sales growth",
    "mgnLbl": "Adj. return on sales",
    "mgn": 25.4,
    "mgnChg": -100,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.14",
     "c": "−18%; GAAP $0.80"
    },
    "seg": [
     {
      "n": "Flow",
      "rev": 263.7,
      "revPy": 250.9,
      "org": -0.8,
      "prof": 69.8,
      "profPy": 54.8,
      "mgn": 26.5,
      "mgnPy": 21.8
     },
     {
      "n": "Water Solutions",
      "rev": 422.0,
      "revPy": 444.7,
      "org": -2.6,
      "prof": 126.4,
      "profPy": 108.5,
      "mgn": 30.0,
      "mgnPy": 24.4
     },
     {
      "n": "Pool",
      "rev": 246.6,
      "revPy": 427.2,
      "org": -42.4,
      "prof": 57.6,
      "profPy": 152.7,
      "mgn": 23.4,
      "mgnPy": 35.7,
      "note": "Larger-than-expected channel inventory destock"
     }
    ],
    "segNote": "Pool core −42.4% on the channel destock, segment income −62%. Flow (ROS 26.5%, +470 bps) and Water Solutions (ROS 30.0%, +560 bps) grew segment income despite slightly lower core sales.",
    "guide": "2026 cut in July: adj. EPS $4.60–4.80 (from $5.30–5.40); sales −4% to −7%; adj. operating income −5% to −9%.",
    "src": [
     [
      "Q2 2026 Form 10-Q (PDF)",
      "reports/pentair/Q2-2026_10-q.pdf"
     ]
    ],
    "revPy": 1123.1,
    "prof": 253.8,
    "profPy": 316.0,
    "segLbl": "By reporting segment; margin = segment return on sales (segment income / sales); growth = core"
   },
   "Q3 2026": {
    "report": "Q3 2026 results",
    "date": "2026-10-27",
    "rev": 976,
    "revPy": 1022.0,
    "org": -5,
    "orgLbl": "Core sales growth",
    "mgnLbl": "Adj. return on sales",
    "mgn": 24.8,
    "mgnPy": 25.7,
    "prof": 242,
    "profPy": 263,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.18",
     "c": "−5%, above $1.05–1.08 guidance; GAAP $0.91"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "153",
     "c": "179 in Q3 2025"
    },
    "seg": [
     {
      "n": "Flow",
      "rev": 262,
      "chg": 4,
      "org": 1,
      "prof": 68.8,
      "profPy": 59.7,
      "mgn": 26.2,
      "mgnPy": 23.7
     },
     {
      "n": "Water Solutions",
      "rev": 422,
      "chg": 1,
      "prof": 121,
      "profPy": 104.3,
      "mgn": 28.7,
      "mgnPy": 25.0,
      "note": "Includes ~USD 6m of tariff refunds"
     },
     {
      "n": "Pool",
      "rev": 291,
      "chg": -18,
      "org": -18,
      "prof": 72,
      "profPy": 116.1,
      "mgn": 24.6,
      "mgnPy": 32.8,
      "note": "Channel destock now completed"
     }
    ],
    "segLbl": "By reporting segment; margin = segment return on sales",
    "derived": [
     "mgnPy",
     "profPy",
     "seg.Water Solutions.profPy",
     "seg.Pool.profPy"
    ],
    "segNote": "Flow (+4%, core +1%) and Water Solutions (+1%) both lifted segment income ~15% with return on sales up 250 and 370 bps. Pool −18% with income −38% as the channel destock ended; management targets ~30% Pool return on sales in 2027.",
    "guide": "FY 2026: sales ~−3%, adj. operating income ~−6%, adj. EPS ~$4.70 (−4%); Q4: sales +7–9% incl. Taco, adj. EPS ~$1.15; FCF >100% of net income.",
    "src": [
     [
      "Q3 2026 earnings presentation (PDF)",
      "reports/pentair/Q3-2026_earnings-presentation.pdf"
     ]
    ],
    "profLbl": "Adj. operating income"
   }
  },
  "danfoss": {
   "Q2 2025": {
    "report": "H1 2025 results (6 months)",
    "date": "2025-08-21",
    "rev": 4788,
    "revPy": 5012,
    "org": -3,
    "orgLbl": "Organic growth",
    "mgnLbl": "Operational EBITA margin",
    "mgn": 10.6,
    "mgnPy": 11.5,
    "prof": 509,
    "profPy": 576,
    "eps": {
     "l": "Net profit",
     "v": "269",
     "c": "291 in H1 2024"
    },
    "cash": {
     "l": "Free operating cash flow after financial items and tax (before M&A)",
     "v": "−167",
     "c": "−118 in H1 2024"
    },
    "extra": [
     {
      "l": "R&D",
      "v": "266",
      "c": "5.6% of sales"
     },
     {
      "l": "Employees",
      "v": "39,367"
     }
    ],
    "segLbl": "By segment",
    "seg": [
     {
      "n": "Danfoss Power Solutions",
      "rev": 2086,
      "revPy": 2235,
      "org": -6,
      "mgn": 11.0,
      "mgnPy": 11.6,
      "note": "Mobile hydraulics downturn (US agriculture, construction); back to growth by end-Q2 on data centres"
     },
     {
      "n": "Danfoss Climate Solutions",
      "rev": 1587,
      "revPy": 1492,
      "org": 7,
      "mgn": 15.8,
      "mgnPy": 14.3,
      "note": "Heating, cooling, heat recovery; data centres and refrigerant transition"
     },
     {
      "n": "Danfoss Power Electronics and Drives",
      "rev": 1105,
      "revPy": 1259,
      "org": -12,
      "mgn": 6.6,
      "mgnPy": 10.5,
      "note": "Inventory work-downs, weak European automotive; drives strong in data centres, HVAC, water"
     }
    ],
    "geo": [
     {
      "n": "Europe",
      "note": "41% of sales; recovery signs less pronounced"
     },
     {
      "n": "Americas",
      "note": "37% of sales; North America back to growth in Q2"
     },
     {
      "n": "Asia Pacific",
      "note": "22% of sales; China high single-digit growth"
     }
    ],
    "segNote": "Organic −3% (Q1 negative, Q2 slightly positive); operational EBITA margin 11.5% in Q2. Climate Solutions (heating and cooling) +7% organic at 15.8% margin, the strongest segment; Power Solutions −6% and Power Electronics and Drives −12%.",
    "guide": "FY 2025: sales EUR 9.5–11.0bn; operational EBITA margin 10.8–12.3% (confirmed, based on known tariffs).",
    "src": [
     [
      "H1 2025 interim announcement (PDF)",
      "reports/danfoss/Q2-2025_h1-2025-interim-announcement.pdf"
     ]
    ]
   },
   "Q4 2025": {
    "report": "FY 2025 results (12 months)",
    "date": "2026-03-03",
    "rev": 9430,
    "revPy": 9496,
    "org": 3,
    "orgLbl": "Organic growth",
    "mgnLbl": "Operational EBITA margin",
    "mgn": 12.9,
    "mgnPy": 12.5,
    "prof": 1213,
    "profPy": 1185,
    "cash": {
     "l": "Free operating cash flow after financial items and tax (before M&A)",
     "v": "734",
     "c": "467 in 2024; record"
    },
    "segNote": "Organic +3% (H1 −3%, H2 +9%). Climate Solutions delivered a strong and resilient year (North America +26% organic on data centres); data-centre sales ~7% of group, almost doubling. Hydro Holding acquired for Power Solutions.",
    "guide": "FY 2026: sales EUR 9.1–10.6bn; operational EBITA margin 12.8–14.3% (raised in August to 14.6–15.6%).",
    "src": [
     [
      "FY 2025 release",
      "https://www.danfoss.com/en/about-danfoss/news/cf/financial-performance-strengthening-with-record-high-cash-flow/"
     ],
     [
      "Cooling Post",
      "https://www.coolingpost.com/world-news/danfoss-reports-record-high-cash-flow/"
     ]
    ]
   },
   "Q2 2026": {
    "report": "H1 2026 results (6 months)",
    "date": "2026-08-20",
    "rev": 5254,
    "revPy": 4703,
    "org": 15,
    "orgLbl": "Organic growth",
    "mgnLbl": "Operational EBITA margin",
    "mgn": 15.3,
    "mgnPy": 11.8,
    "prof": 802,
    "profPy": 556,
    "eps": {
     "l": "Net profit",
     "v": "436",
     "c": "269 in H1 2025"
    },
    "cash": {
     "l": "Free operating cash flow after financial items and tax (before M&A)",
     "v": "164",
     "c": "−168 in H1 2025"
    },
    "extra": [
     {
      "l": "R&D",
      "v": "257",
      "c": "4.9% of sales"
     },
     {
      "l": "Net interest-bearing debt / EBITDA",
      "v": "1.3x",
      "c": "1.9x"
     },
     {
      "l": "Employees",
      "v": "39,345"
     }
    ],
    "segLbl": "By segment",
    "seg": [
     {
      "n": "Danfoss Power Solutions",
      "rev": 2392,
      "revPy": 2086,
      "org": 18,
      "mgn": 16.2,
      "mgnPy": 11.0,
      "note": "Data centres, construction and mining; agriculture still soft"
     },
     {
      "n": "Danfoss Climate Solutions",
      "rev": 1803,
      "revPy": 1587,
      "org": 18,
      "mgn": 18.1,
      "mgnPy": 15.8,
      "note": "Data centres and heat pumps in buildings and industry"
     },
     {
      "n": "Danfoss Power Electronics and Drives",
      "rev": 1054,
      "revPy": 1020,
      "org": 5,
      "mgn": 12.5,
      "mgnPy": 11.7,
      "note": "Data centres, electrification, core industrial; prior year restated for discontinued operations"
     }
    ],
    "geo": [
     {
      "n": "Americas",
      "note": "38% of sales; strongest improvement with Asia"
     },
     {
      "n": "Europe",
      "note": "37% of sales"
     },
     {
      "n": "Asia Pacific",
      "note": "25% of sales; China and India"
     }
    ],
    "segNote": "Organic +15% with growth and strong orders in all three segments, led by North America and Asia (China, India) and the data-centre build-out. Climate Solutions (heating and cooling) +18% organic, margin 18.1% (15.8%) on data centres and heat pumps; Power Solutions +18%; Power Electronics and Drives +5%. H1 2025 restated for discontinued operations.",
    "guide": "Raised: FY 2026 sales in the upper half of EUR 9.1–10.6bn; operational EBITA margin 14.6–15.6% (from 12.8–14.3%), based on known tariffs.",
    "src": [
     [
      "H1 2026 interim announcement (PDF)",
      "reports/danfoss/Q2-2026_h1-2026-interim-announcement.pdf"
     ]
    ]
   }
  }
 },
 "noReport": {
  "belimo": "Belimo publishes half-year and full-year results only (no Q1 or Q3 figures).",
  "gf": "Georg Fischer publishes half-year and full-year results only (no Q1 or Q3 figures).",
  "danfoss": "Danfoss is not listed and publishes half-year and full-year results only (no Q1 or Q3 figures)."
 },
 "qual": {
  "aalberts": {
   "period": "Q3 2026",
   "title": "Q3 2026 trading update, 22 Oct 2026",
   "perf": [
    "Revenue EUR 823.3m (+50.8m), organic growth 13.0% vs −1.9% a year ago; EBITA EUR 113.8m (+17.5m), margin 13.8% (+130 bps).",
    "All three segments improved organic growth and EBITA margin; added value margin remained at a good level.",
    "Semicon +34.1% organic, margin 15.5% (+230 bps); Building +9.3%, margin 12.1% (+130 bps); Industry +8.6%, margin 19.1% (+140 bps).",
    "Positive end markets: data centres, aerospace, power generation, defence and semicon; automotive and residential building stable. 2026 walk: Q1 +2.8% › H1 +5.0% › Q3 +13.0% organic."
   ],
   "ma": [
    "GVT post-merger integration (semicon) completed.",
    "Divestment programme under 'thrive 2030' continues: Broen (Denmark) sold in March 2026, 85% of Flamco RUS in June 2026; H1 portfolio effect +EUR 135m acquisitions / −EUR 178m divestments."
   ],
   "other": [
    "Operational excellence programmes and footprint optimisation in building and industry.",
    "Investing in manufacturing capacity in Europe, North America and Southeast Asia; semicon greenfield in Dronten (NL) to start production in Q4 2026.",
    "EUR 75m share buyback completed 9 Oct 2026 (2,068,007 shares), shares to be cancelled.",
    "Healthy order book entering Q4; full-year guidance of improved organic growth and EBITA margin confirmed."
   ],
   "src": [
    [
     "Q3 2026 press release (PDF)",
     "reports/aalberts/Q3-2026_q3-2026-press-release.pdf"
    ],
    [
     "Broen divestment",
     "https://www.globenewswire.com/news-release/2026/03/12/3254283/0/en/Aalberts-N-V-Aalberts-completes-divestment-Broen-in-Denmark.html"
    ]
   ]
  },
  "imi": {
   "period": "Q3 2026",
   "title": "Q3 2026 trading update, 29 Oct 2026",
   "perf": [
    "Organic revenue +2% in Q3 against +12% a year ago; +4% year to date. Statutory revenue +3%.",
    "Process Automation orders +19% organic in Q3 (+14% YTD; new construction +27%, aftermarket +7%); revenue −6% on shipment timing.",
    "Climate Control +13% (data-centre orders £25m YTD vs £9m) and Transport +19% drove Life Technology +11%.",
    "2026 walk: Q1 +5% › H1 +5% (margin 18.7%, +50 bps) › Q3 +2%. FY adj. EPS guidance raised to 137p–143p."
   ],
   "ma": [
    "Agreed acquisition of iSMA CONTROLLI (Oct 2026): a bolt-on in smart-connected building controls for small and medium-sized commercial buildings.",
    "Disposal of Truflo Marine now expected to complete in Q4 2026 (previously Q3); its extra contribution lifts 2026 EPS guidance.",
    "Strategic review of Transport ongoing. Over £400m spent on bolt-ons since 2019; pipeline strong."
   ],
   "other": [
    "£500m share buyback (£250m done by June); interim dividend +10% to 12.1p.",
    "Innovation: Growth Hub orders £78m in H1 (+22%) after a record £206m in 2025; AI-enabled valve design in Korea cut design time by >90%.",
    "Aftermarket ~45% of revenue; installed base of 200,000+ severe-service valves backs an expanding aftermarket sales force.",
    "Middle East shipments in line with plan; 2027 assumptions: net interest ~£23m, ~231m shares."
   ],
   "src": [
    [
     "Q3 2026 trading update (PDF)",
     "reports/imi/Q3-2026_q3-2026-trading-update.pdf"
    ],
    [
     "H1 2026 results (PDF)",
     "reports/imi/Q2-2026_h1-2026-results-press-release.pdf"
    ]
   ]
  },
  "belimo": {
   "period": "Q2 2026",
   "title": "H1 2026 results, 20 Jul 2026 (no Q3 report)",
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
   "src": [
    [
     "H1 2026 report",
     "https://report.belimo.com/HY26/en/management-report"
    ],
    [
     "H1 2026 press release",
     "https://www.eqs-news.com/news/ad-hoc/belimo-accelerated-sales-growth-in-the-first-half-of-2026/01f2af93-fa3e-4872-b3f8-514ab22ba0e0_en"
    ]
   ]
  },
  "xylem": {
   "period": "Q3 2026",
   "title": "Q3 2026 results, 27 Oct 2026",
   "perf": [
    "Revenue USD 2,201m, −3% reported and flat organically, below expectations on metering affordability pressure and project timing.",
    "Orders USD 2,331m, +10% organic, book-to-bill >1; backlog USD 5.5bn (+16% organic). Strength in MCS water/gas meters and AW data centres.",
    "Adj. EBITDA margin 23.9% (+70 bps) on productivity and price; adj. EPS $1.42 (+4%), excluding a $0.11 benefit from US tariff refunds.",
    "2026 walk: Q1 flat › Q2 +1% (orders +41%) › Q3 flat. FY guidance cut to ~USD 8.95bn revenue and adj. EPS $5.40–5.45."
   ],
   "ma": [
    "Acquisitions of Cornell & Roper (expected Q4 2026) and WaterFleet (~USD 200m, signed in Q2) to rotate toward higher-growth markets.",
    "Planned divestiture of AW International (Europe, MEA, APAC) and Specialty Flow Control; international metrology (~USD 250m revenue) divested in May 2026.",
    "~USD 648m of shares repurchased in Q2 2026."
   ],
   "other": [
    "From 1 Jan 2027, four segments become three: Treatment & Services (~USD 3.5bn), Flow Solutions (~2.6bn), Measurement & Analytics (~2.1bn); AW businesses to be sold move to 'Other' (~0.8bn).",
    "Operational excellence: productivity and price more than offset inflation; restructuring and realignment costs of USD 80–90m in 2026.",
    "Net debt 1.1x adj. EBITDA; capex ~USD 350m in 2026."
   ],
   "src": [
    [
     "Q3 2026 earnings package (PDF)",
     "reports/xylem/Q3-2026_earnings-package.pdf"
    ],
    [
     "Q2 2026 earnings package (PDF)",
     "reports/xylem/Q2-2026_earnings-package.pdf"
    ]
   ]
  },
  "ecolab": {
   "period": "Q3 2026",
   "title": "Q3 2026 results, 27 Oct 2026",
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
   "src": [
    [
     "Q3 2026 earnings presentation (PDF)",
     "reports/ecolab/Q3-2026_earnings-presentation.pdf"
    ],
    [
     "Q2 2026 earnings presentation (PDF)",
     "reports/ecolab/Q2-2026_earnings-presentation.pdf"
    ]
   ]
  },
  "watts": {
   "period": "Q2 2026",
   "title": "Q2 2026 results, 5 Aug 2026 (Q3 due 4 Nov)",
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
   "src": [
    [
     "Q2 2026 earnings release",
     "https://www.sec.gov/Archives/edgar/data/0000795403/000110465926091165/wts-20260805xex99d1.htm"
    ],
    [
     "Q2 2026 call",
     "https://www.investing.com/news/transcripts/earnings-call-transcript-watts-water-tops-q2-2026-forecasts-and-raises-outlook-93CH-4842900"
    ]
   ]
  },
  "emerson": {
   "period": "Q3 2026",
   "title": "Q3 2026 results (quarter ended 30 Jun 2026), 4 Aug 2026",
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
   "src": [
    [
     "Fiscal Q3 2026 Form 10-Q (PDF)",
     "reports/emerson/FQ3-2026_10-q.pdf"
    ]
   ]
  },
  "gf": {
   "period": "Q2 2026",
   "title": "H1 2026 results (no Q3 report) and news to Oct 2026",
   "perf": [
    "Now a pure-play Flow Solutions group: Flow Solutions sales CHF 1,584m, +5.1% (+5.7% organic).",
    "Comparable EBITDA margin 13.4%, comparable EBIT margin 10.0%. Industry & Infrastructure CHF 1,001m (921m), EBITDA CHF 144m; Building CHF 616m (630m), +3.3% organic.",
    "Group net loss CHF 77m from the deconsolidation loss on the casting exit (H1 2025: profit CHF 160m incl. Machining gain).",
    "Outlook raised on strong orders: mid-single-digit organic growth in 2026 (low single digit); comparable EBITDA margin 14–16%."
   ],
   "ma": [
    "Majority of GF Casting Solutions sold in February 2026; Precicast (aerospace and gas-turbine casting, CH and RO) sold to Consolidated Precision Products for CHF 215m, closed 30 Sep 2026; proceeds to reduce net debt.",
    "GF Machining Solutions divested effective 30 June 2025; Uponor integration continues.",
    "H1 2025: VAG-Group acquisition signed (water infrastructure valves, ~CHF 190m sales, ~CHF 200m value); GF Machining Solutions sale closed (CHF 630m)."
   ],
   "other": [
    "Net debt CHF 1,684m at end-2025 after the transformation; FY 2025 free cash flow before M&A only CHF 21m.",
    "New strategy outlines a CHF 4.2bn sales target (press coverage)."
   ],
   "src": [
    [
     "H1 2026 results presentation (PDF)",
     "reports/gf/Q2-2026_h1-2026-results-presentation.pdf"
    ],
    [
     "Precicast sale",
     "https://www.cash.ch/news/top-news/georg-fischer-schliesst-verkauf-von-precicast-gruppe-ab-973242"
    ]
   ]
  },
  "pentair": {
   "period": "Q3 2026",
   "title": "Q3 2026 results, 27 Oct 2026",
   "perf": [
    "Sales USD 976m (−4.5%), core sales −5%; adj. EPS $1.18 (−5%) beat the $1.05–1.08 guidance.",
    "Adj. operating income USD 242m (−8%), adj. return on sales 24.8%.",
    "Flow and Water Solutions grew segment income ~15% (return on sales 26.2% and 28.7%); Pool −18% with income −38% as channel destocking ended.",
    "2026 walk: Q1 core +2% › Q2 −17% (Pool −42%, guidance cut) › Q3 −5%. FY adj. EPS ~$4.70 reaffirmed."
   ],
   "ma": [
    "Acquisition of Taco (Taco Group Holdings, HVAC hydronics) completed 1 Oct 2026: ~USD 560m sales in 2026 (+~23%), >USD 620m expected in 2027.",
    "Financed with term loans at ~5.25%; pro forma net leverage 2.5x at the start of Q4. Adds exposure to HVAC, data centres, schools, hospitals and commercial buildings."
   ],
   "other": [
    "Pool channel inventory realignment with major partners completed; Pool expected to reach ~30% return on sales in 2027.",
    "Leadership: Robert W. Hau appointed CFO; Josh Cowley named CEO of Pentair Pool.",
    "Water Solutions margin helped by pricing, productivity and ~USD 6m of tariff refunds."
   ],
   "src": [
    [
     "Q3 2026 earnings release",
     "https://www.sec.gov/Archives/edgar/data/0000077360/000007736026000055/q32026pressrelease.htm"
    ],
    [
     "Q3 2026 call highlights",
     "https://www.gurufocus.com/news/9145327/pentair-plc-pnr-q3-2026-earnings-call-highlights-eps-beat-taco-acquisition-and-pool-recovery-in-focus"
    ]
   ]
  },
  "danfoss": {
   "period": "Q2 2026",
   "title": "H1 2026 results, 20 Aug 2026 (no Q3 report) and news to Oct 2026",
   "perf": [
    "Sales EUR 5,254m (4,703m), organic +15% led by North America and Asia (China, India); all three segments grew with strong order intake.",
    "Operational EBITA EUR 802m (+44%), margin 15.3% (+3.5 pts); net profit EUR 436m (269m); free operating cash flow after financial items and tax EUR 164m (−168m).",
    "Climate Solutions (incl. heating, hydronic and district-energy products, closest to HFC): sales EUR 1,803m, +18% organic, margin 18.1% (15.8%) on data centres and heat pumps in buildings and industry.",
    "Outlook raised: FY 2026 sales in the upper half of EUR 9.1–10.6bn; operational EBITA margin 14.6–15.6% (from 12.8–14.3%)."
   ],
   "ma": [
    "Bought the remaining 38% of Semikron Danfoss (power semiconductors) in Q1 2026, now 100% owned.",
    "Definitive agreement (10 Jul 2026) to acquire Alfagomma, Italian hydraulic hoses and fittings: ~EUR 600m sales, ~4,500 employees, 28 sites; bought out of liquidation. ACCC (Australia) approved 9 Oct; closing expected Q4 2026. Not heating-related."
   ],
   "other": [
    "Data centres drive growth in all three segments: air- and liquid-cooling, power conversion, energy storage and heat recovery for hyperscalers and chip makers.",
    "R&D EUR 257m (4.9% of sales); regionalisation of >100 factories (local-for-local); renewable electricity share 75%; LTIF at a record low of 0.8."
   ],
   "src": [
    [
     "H1 2026 interim announcement (PDF)",
     "reports/danfoss/Q2-2026_h1-2026-interim-announcement.pdf"
    ],
    [
     "Danfoss Alfagomma release",
     "https://www.danfoss.com/en/about-danfoss/news/cf/danfoss-to-create-a-leading-global-player-in-fluid-conveyance/"
    ],
    [
     "ACCC register",
     "https://www.accc.gov.au/public-registers/acquisitions-and-mergers-registers/acquisitions-register/danfoss-alfagomma"
    ]
   ]
  }
 },
 "docs": [
  {
   "co": "aalberts",
   "p": "Q1 2025",
   "type": "Results release",
   "title": "Q1 2025 press release",
   "url": "https://aalberts-website.s3.eu-west-1.amazonaws.com/media/App/Models/Download/000/000/536/attachment/original/1Q-2025-press%20release.pdf"
  },
  {
   "co": "aalberts",
   "p": "Q2 2025",
   "type": "Results release",
   "title": "H1 2025 press release",
   "url": "https://aalberts-website.s3.eu-west-1.amazonaws.com/media/App/Models/Download/000/000/555/attachment/original/1H2025.pdf"
  },
  {
   "co": "aalberts",
   "p": "Q2 2025",
   "type": "Presentation",
   "title": "H1 2025 presentation",
   "url": "https://aalberts-website.s3.eu-west-1.amazonaws.com/media/App/Models/Download/000/000/556/attachment/original/Aalberts%20-%20first%20half-year%20presentation%202025.pdf"
  },
  {
   "co": "aalberts",
   "p": "Q3 2025",
   "type": "Results release",
   "title": "Q3 2025 press release",
   "url": "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/569/attachment/original/Q3%202025.pdf"
  },
  {
   "co": "aalberts",
   "p": "Q4 2025",
   "type": "Results release",
   "title": "FY 2025 press release",
   "url": "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/574/attachment/original/FY2025%20(3).pdf"
  },
  {
   "co": "aalberts",
   "p": "Q4 2025",
   "type": "Presentation",
   "title": "FY 2025 presentation",
   "url": "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/582/attachment/original/FY2025%20results%20-%20presentation.pdf"
  },
  {
   "co": "aalberts",
   "p": "Q4 2025",
   "type": "Annual report",
   "title": "Annual report 2025",
   "url": "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/575/attachment/original/Aalberts%20annual%20report%202025.pdf"
  },
  {
   "co": "aalberts",
   "p": "Q1 2026",
   "type": "Results release",
   "title": "Q1 2026 press release",
   "url": "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/601/attachment/original/Q1%202026%20results.pdf"
  },
  {
   "co": "aalberts",
   "p": "Q2 2026",
   "type": "Results release",
   "title": "H1 2026 press release",
   "url": "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/609/attachment/original/Aalberts%20press%20release%201H2026.pdf"
  },
  {
   "co": "aalberts",
   "p": "Q2 2026",
   "type": "Presentation",
   "title": "H1 2026 presentation",
   "url": "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/610/attachment/original/Aalberts%20-%20first%20half-year%20results%202026%20presentation.pdf"
  },
  {
   "co": "aalberts",
   "p": "Q3 2026",
   "type": "Results release",
   "title": "Q3 2026 press release",
   "url": "https://www.globenewswire.com/news-release/2026/10/22/3386031/0/en/aalberts-n-v-aalberts-reports-third-quarter-2026-results.html"
  },
  {
   "co": "imi",
   "p": "Q2 2025",
   "type": "Results release",
   "title": "H1 2025 interim results",
   "url": "https://www.imiplc.com/media/41bkpiqj/imi-plc-interim-results-2025-press-release.pdf",
   "file": "reports/imi/Q2-2025_h1-2025-interim-results.pdf",
   "bytes": 639461
  },
  {
   "co": "imi",
   "p": "Q1 2026",
   "type": "Trading update",
   "title": "Q1 2026 trading update",
   "url": "https://www.imiplc.com/media/32hieuvz/imi-plc-trading-update-q1-2026.pdf",
   "file": "reports/imi/Q1-2026_q1-2026-trading-update.pdf",
   "bytes": 122252
  },
  {
   "co": "imi",
   "p": "Q2 2026",
   "type": "Results release",
   "title": "H1 2026 results press release",
   "url": "https://www.imiplc.com/media/uk3m0s4a/imi-plc-half-year-results-2026-press-release.pdf",
   "file": "reports/imi/Q2-2026_h1-2026-results-press-release.pdf",
   "bytes": 6677741
  },
  {
   "co": "imi",
   "p": "Q3 2026",
   "type": "Trading update",
   "title": "Q3 2026 trading update",
   "url": "https://www.imiplc.com/en/investors/results-reports-presentations/",
   "file": "reports/imi/Q3-2026_q3-2026-trading-update.pdf",
   "bytes": 95896
  },
  {
   "co": "imi",
   "p": "Q3 2025",
   "type": "Trading update",
   "title": "Q3 2025 trading update",
   "url": "https://www.imiplc.com/en/investors/results-reports-presentations/",
   "file": "reports/imi/Q3-2025_q3-2025-trading-update.pdf",
   "bytes": 93803
  },
  {
   "co": "imi",
   "p": "Q1 2025",
   "type": "Trading update",
   "title": "Q1 2025 trading update",
   "url": "https://www.imiplc.com/en/investors/results-reports-presentations/",
   "file": "reports/imi/Q1-2025_q1-2025-trading-update.pdf",
   "bytes": 96130
  },
  {
   "co": "belimo",
   "p": "Q2 2025",
   "type": "Results release",
   "title": "Semiannual report 2025",
   "url": "https://www.belimo.com/mam/corporate-communications/investor-relations/Reports%20and%20Presentations/2025_07_Semiannual_Report_2025_EN.pdf",
   "file": "reports/belimo/Q2-2025_semiannual-report-2025.pdf",
   "bytes": 1390356
  },
  {
   "co": "belimo",
   "p": "Q4 2025",
   "type": "Annual report",
   "title": "Annual report 2025",
   "url": "https://report.belimo.com/ar25/app/uploads/Annual-Report-2025.pdf"
  },
  {
   "co": "belimo",
   "p": "Q2 2026",
   "type": "Half-year report",
   "title": "Semiannual report 2026",
   "url": "https://report.belimo.com/HY26/",
   "file": "reports/belimo/Q2-2026_semiannual-report-2026.pdf",
   "bytes": 1394244
  },
  {
   "co": "xylem",
   "p": "Q1 2025",
   "type": "Presentation",
   "title": "Q1 2025 earnings package",
   "url": "https://investors.xylem.com/",
   "file": "reports/xylem/Q1-2025_earnings-package.pdf",
   "bytes": 1990076
  },
  {
   "co": "xylem",
   "p": "Q2 2025",
   "type": "Presentation",
   "title": "Q2 2025 earnings package",
   "url": "https://investors.xylem.com/",
   "file": "reports/xylem/Q2-2025_earnings-package.pdf",
   "bytes": 2516225
  },
  {
   "co": "xylem",
   "p": "Q3 2025",
   "type": "Presentation",
   "title": "Q3 2025 earnings package",
   "url": "https://investors.xylem.com/",
   "file": "reports/xylem/Q3-2025_earnings-package.pdf",
   "bytes": 2333904
  },
  {
   "co": "xylem",
   "p": "Q4 2025",
   "type": "Presentation",
   "title": "Q4 2025 earnings package",
   "url": "https://investors.xylem.com/",
   "file": "reports/xylem/Q4-2025_earnings-package.pdf",
   "bytes": 1780569
  },
  {
   "co": "xylem",
   "p": "Q1 2026",
   "type": "Presentation",
   "title": "Q1 2026 earnings package",
   "url": "https://investors.xylem.com/",
   "file": "reports/xylem/Q1-2026_earnings-package.pdf",
   "bytes": 1212939
  },
  {
   "co": "xylem",
   "p": "Q2 2026",
   "type": "Presentation",
   "title": "Q2 2026 earnings package",
   "url": "https://investors.xylem.com/",
   "file": "reports/xylem/Q2-2026_earnings-package.pdf",
   "bytes": 1468414
  },
  {
   "co": "xylem",
   "p": "Q3 2026",
   "type": "Presentation",
   "title": "Q3 2026 earnings package",
   "url": "https://investors.xylem.com/",
   "file": "reports/xylem/Q3-2026_earnings-package.pdf",
   "bytes": 2240173
  },
  {
   "co": "ecolab",
   "p": "Q1 2025",
   "type": "Presentation",
   "title": "Q1 2025 earnings presentation",
   "url": "https://investor.ecolab.com/",
   "file": "reports/ecolab/Q1-2025_earnings-presentation.pdf",
   "bytes": 1400897
  },
  {
   "co": "ecolab",
   "p": "Q2 2025",
   "type": "Presentation",
   "title": "Q2 2025 earnings presentation",
   "url": "https://investor.ecolab.com/",
   "file": "reports/ecolab/Q2-2025_earnings-presentation.pdf",
   "bytes": 1406182
  },
  {
   "co": "ecolab",
   "p": "Q3 2025",
   "type": "Presentation",
   "title": "Q3 2025 earnings presentation",
   "url": "https://investor.ecolab.com/",
   "file": "reports/ecolab/Q3-2025_earnings-presentation.pdf",
   "bytes": 1697690
  },
  {
   "co": "ecolab",
   "p": "Q4 2025",
   "type": "Presentation",
   "title": "Q4 2025 earnings presentation",
   "url": "https://investor.ecolab.com/",
   "file": "reports/ecolab/Q4-2025_earnings-presentation.pdf",
   "bytes": 935874
  },
  {
   "co": "ecolab",
   "p": "Q1 2026",
   "type": "Presentation",
   "title": "Q1 2026 earnings presentation",
   "url": "https://investor.ecolab.com/",
   "file": "reports/ecolab/Q1-2026_earnings-presentation.pdf",
   "bytes": 1174988
  },
  {
   "co": "ecolab",
   "p": "Q2 2026",
   "type": "Presentation",
   "title": "Q2 2026 earnings presentation",
   "url": "https://investor.ecolab.com/",
   "file": "reports/ecolab/Q2-2026_earnings-presentation.pdf",
   "bytes": 9066740
  },
  {
   "co": "ecolab",
   "p": "Q3 2026",
   "type": "Presentation",
   "title": "Q3 2026 earnings presentation",
   "url": "https://investor.ecolab.com/",
   "file": "reports/ecolab/Q3-2026_earnings-presentation.pdf",
   "bytes": 9060582
  },
  {
   "co": "watts",
   "p": "Q1 2025",
   "type": "Quarterly report",
   "title": "Q1 2025 Form 10-Q",
   "url": "https://investors.watts.com/",
   "file": "reports/watts/Q1-2025_10-q.pdf",
   "bytes": 468518
  },
  {
   "co": "watts",
   "p": "Q2 2025",
   "type": "Quarterly report",
   "title": "Q2 2025 Form 10-Q",
   "url": "https://investors.watts.com/",
   "file": "reports/watts/Q2-2025_10-q.pdf",
   "bytes": 535371
  },
  {
   "co": "watts",
   "p": "Q3 2025",
   "type": "Quarterly report",
   "title": "Q3 2025 Form 10-Q",
   "url": "https://investors.watts.com/",
   "file": "reports/watts/Q3-2025_10-q.pdf",
   "bytes": 534532
  },
  {
   "co": "watts",
   "p": "Q1 2026",
   "type": "Quarterly report",
   "title": "Q1 2026 Form 10-Q",
   "url": "https://investors.watts.com/",
   "file": "reports/watts/Q1-2026_10-q.pdf",
   "bytes": 488495
  },
  {
   "co": "watts",
   "p": "Q2 2026",
   "type": "Quarterly report",
   "title": "Q2 2026 Form 10-Q",
   "url": "https://investors.watts.com/",
   "file": "reports/watts/Q2-2026_10-q.pdf",
   "bytes": 508032
  },
  {
   "co": "watts",
   "p": "Q4 2025",
   "type": "Annual report",
   "title": "2025 annual report (incl. Form 10-K)",
   "url": "https://s29.q4cdn.com/117128878/files/doc_financials/2025/ar/Watts-Water-2025-Annual-Report.pdf"
  },
  {
   "co": "emerson",
   "p": "Q1 2025",
   "type": "Quarterly report",
   "title": "Q1 2025 Form 10-Q (quarter ended 31 Dec 2024)",
   "url": "https://ir.emerson.com/",
   "file": "reports/emerson/FQ1-2025_10-q.pdf",
   "bytes": 1809246
  },
  {
   "co": "emerson",
   "p": "Q2 2025",
   "type": "Quarterly report",
   "title": "Q2 2025 Form 10-Q",
   "url": "https://ir.emerson.com/",
   "file": "reports/emerson/FQ2-2025_10-q.pdf",
   "bytes": 2733467
  },
  {
   "co": "emerson",
   "p": "Q3 2025",
   "type": "Quarterly report",
   "title": "Q3 2025 Form 10-Q",
   "url": "https://ir.emerson.com/",
   "file": "reports/emerson/FQ3-2025_10-q.pdf",
   "bytes": 2718105
  },
  {
   "co": "emerson",
   "p": "Q1 2026",
   "type": "Quarterly report",
   "title": "Q1 2026 Form 10-Q",
   "url": "https://ir.emerson.com/",
   "file": "reports/emerson/FQ1-2026_10-q.pdf",
   "bytes": 1915301
  },
  {
   "co": "emerson",
   "p": "Q2 2026",
   "type": "Quarterly report",
   "title": "Q2 2026 Form 10-Q",
   "url": "https://ir.emerson.com/",
   "file": "reports/emerson/FQ2-2026_10-q.pdf",
   "bytes": 2615076
  },
  {
   "co": "emerson",
   "p": "Q3 2026",
   "type": "Quarterly report",
   "title": "Q3 2026 Form 10-Q",
   "url": "https://ir.emerson.com/",
   "file": "reports/emerson/FQ3-2026_10-q.pdf",
   "bytes": 2653206
  },
  {
   "co": "emerson",
   "p": "Q4 2025",
   "type": "Annual report",
   "title": "FY 2025 Form 10-K (year ended 30 Sep 2025)",
   "url": "https://ir.emerson.com/sec-filings/all-sec-filings/content/0000032604-25-000087/0000032604-25-000087.pdf"
  },
  {
   "co": "pentair",
   "p": "Q1 2025",
   "type": "Quarterly report",
   "title": "Q1 2025 Form 10-Q",
   "url": "https://investors.pentair.com/",
   "file": "reports/pentair/Q1-2025_10-q.pdf",
   "bytes": 738157
  },
  {
   "co": "pentair",
   "p": "Q2 2025",
   "type": "Quarterly report",
   "title": "Q2 2025 Form 10-Q",
   "url": "https://investors.pentair.com/",
   "file": "reports/pentair/Q2-2025_10-q.pdf",
   "bytes": 817105
  },
  {
   "co": "pentair",
   "p": "Q3 2025",
   "type": "Quarterly report",
   "title": "Q3 2025 Form 10-Q",
   "url": "https://investors.pentair.com/",
   "file": "reports/pentair/Q3-2025_10-q.pdf",
   "bytes": 996782
  },
  {
   "co": "pentair",
   "p": "Q1 2026",
   "type": "Quarterly report",
   "title": "Q1 2026 Form 10-Q",
   "url": "https://investors.pentair.com/",
   "file": "reports/pentair/Q1-2026_10-q.pdf",
   "bytes": 741827
  },
  {
   "co": "pentair",
   "p": "Q2 2026",
   "type": "Quarterly report",
   "title": "Q2 2026 Form 10-Q",
   "url": "https://investors.pentair.com/",
   "file": "reports/pentair/Q2-2026_10-q.pdf",
   "bytes": 847972
  },
  {
   "co": "pentair",
   "p": "Q3 2026",
   "type": "Presentation",
   "title": "Q3 2026 earnings presentation",
   "url": "https://investors.pentair.com/",
   "file": "reports/pentair/Q3-2026_earnings-presentation.pdf",
   "bytes": 1227710
  },
  {
   "co": "gf",
   "p": "Q4 2025",
   "type": "Annual report",
   "title": "Annual report 2025",
   "url": "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/annual-report/annual-report-2025/en/annual-report-2025-full-version-en.pdf"
  },
  {
   "co": "gf",
   "p": "Q2 2026",
   "type": "Presentation",
   "title": "H1 2026 results presentation",
   "url": "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/mid-year-reports/mid-year-report-2026/en/mid-year-report-2026-presentation-en.pdf"
  },
  {
   "co": "gf",
   "p": "Q2 2025",
   "type": "Presentation",
   "title": "H1 2025 results presentation",
   "url": "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/mid-year-reports/2025-mid-year-report/presentation-mid-year-report-2025-en.pdf"
  },
  {
   "co": "danfoss",
   "p": "Q2 2025",
   "type": "Half-year report",
   "title": "H1 2025 interim announcement",
   "url": "https://assets.danfoss.com/documents/525130/AH534348471381en-000201.pdf",
   "file": "reports/danfoss/Q2-2025_h1-2025-interim-announcement.pdf",
   "bytes": 2208823
  },
  {
   "co": "danfoss",
   "p": "Q4 2025",
   "type": "Results release",
   "title": "Annual report 2025 press release",
   "url": "https://via.ritzau.dk/ir-files/13560641/14815153/17292/ENG%20-%20AR25%20Press%20release.pdf"
  },
  {
   "co": "danfoss",
   "p": "Q4 2025",
   "type": "Annual report",
   "title": "Annual report 2025 (extract: highlights, segments, financial review and statements)",
   "url": "https://www.danfoss.com/en/about-danfoss/company/financial-information/year-in-review/",
   "find": "annual[-_ ]?report[-_ ]?2025",
   "pages": "1,3-5,8-13,32-39,127-139,154-155,206"
  },
  {
   "co": "danfoss",
   "p": "Q2 2026",
   "type": "Half-year report",
   "title": "H1 2026 interim announcement",
   "url": "https://www.danfoss.com/en/about-danfoss/news/cf/our-h1-2026-results-are-out/",
   "file": "reports/danfoss/Q2-2026_h1-2026-interim-announcement.pdf",
   "bytes": 2071006
  }
 ],
 "periodLabels": {
  "Q4 2025": "FY 2025"
 },
 "others": [
  {
   "id": "reflex",
   "name": "Reflex Winkelmann (reflexGroup)",
   "rel": 5,
   "own": "Private (Winkelmann Group, family-owned)",
   "hq": "Ahlen, Germany",
   "rev": "n/d (not published)",
   "fte": ">2,100 (company)",
   "fteSrc": [
    "Reflex Winkelmann news",
    "https://reflex-winkelmann.com/en/about-reflex/news"
   ],
   "items": [
    {
     "q": "Q1 2025",
     "c": "other",
     "t": "ISH 2025 (Frankfurt, Mar): launched the Reflex Greenbox, a prefabricated unit for filling and treating heating water, alongside Fillset / Fillcontrol Smart with app-based fault diagnosis and the Hydroflow fresh-water station.",
     "src": [
      [
       "Reflex ISH 2025 press release (PDF)",
       "https://a.storyblok.com/f/180632/x/f562940826/reflex-presseinformation-1_ish-2025_trust-in-reflex-competence.pdf"
      ]
     ]
    },
    {
     "q": "Q2 2025",
     "c": "ma",
     "t": "Winkelmann Group sharpened its focus on building technology: sold Winkelmann Automotive Poland to AURELIUS (agreed June 2025) and Winkelmann Powertrain Mexico to Sanoh (~EUR 15m).",
     "src": [
      [
       "MarketScreener",
       "https://www.marketscreener.com/news/aurelius-equity-opportunities-se-co-kgaa-agreed-to-acquire-winkelmann-automotive-poland-spolka-z-ce7e58dbda81f623"
      ],
      [
       "MergerLinks",
       "https://app.mergerlinks.com/transactions/2025-06-06-winkelmann-powertrain-mexico"
      ]
     ]
    },
    {
     "q": "Q4 2025",
     "c": "ma",
     "t": "Acquired Elbi S.p.A. (Italy; expansion vessels, heating/cooling/solar storage tanks) on 7 Nov 2025; terms undisclosed, Elbi keeps its structure and management. Strengthens Reflex in the European heating and cooling market.",
     "src": [
      [
       "Reflex: Elbi acquisition",
       "https://reflex-winkelmann.com/en/about-reflex/news/reflex-acquired-elbi"
      ],
      [
       "Finance Community",
       "https://financecommunity.it/ethica-group-con-elbi-nella-cessione-a-reflex-winkelmann/"
      ]
     ]
    },
    {
     "q": "Q1 2026",
     "c": "other",
     "t": "From 1 Jan 2026 Winkelmann Building+Industry became reflexGroup, bringing Reflex, Elbi and Nema under one umbrella; Sinus products to be sold under the Reflex brand.",
     "src": [
      [
       "reflexGroup announcement",
       "https://reflex-winkelmann.com/en/about-reflex/news/wbi-becomes-reflexgroup"
      ]
     ]
    },
    {
     "q": "Q2 2026",
     "c": "other",
     "t": "Opened a new production site for heating and cooling storage tanks in Rimavská Sobota, Slovakia (17 Jun 2026), Winkelmann's largest single investment; workforce to grow by ~450 from 2026.",
     "src": [
      [
       "Slovak Spectator",
       "https://spectator.sme.sk/business/c/the-german-factory-bringing-heat-to-a-cold-jobs-market"
      ],
      [
       "Reflex news",
       "https://reflex-winkelmann.com/en/about-reflex/news"
      ]
     ]
    },
    {
     "q": "Q3 2026",
     "c": "other",
     "t": "Reported 15 Jul 2026: Rimavská Sobota is reflexGroup's eighth production site, adding capacity for domestic hot water and buffer tanks; designed for ~450 employees. Per a third-party event database (unconfirmed): ~300,000 units a year, ~EUR 128m investment.",
     "src": [
      [
       "reflexGroup news",
       "https://reflex-winkelmann.com/en/about-reflex/news/new-plant-slovakia"
      ],
      [
       "Metroplan project page",
       "https://www.metroplan.de/en/metroplan/references/reference/new-plant-for-hot-water-storage-tanks-in-slovakia/"
      ]
     ]
    }
   ]
  },
  {
   "id": "spirotech",
   "name": "Spirotech",
   "rel": 4,
   "own": "Private (family-owned)",
   "hq": "Helmond, Netherlands",
   "rev": "n/d (not published)",
   "fte": "n/d",
   "items": [
    {
     "q": "Q1 2025",
     "c": "other",
     "t": "ISH 2025 (Frankfurt, Mar): showed new dirt-separation and vacuum-degassing products next to the SpiroVent and SpiroPress ranges.",
     "src": [
      [
       "ISH exhibitor profile",
       "https://ish.messefrankfurt.com/frankfurt/en/exhibitor-search.detail.html/spirotech-bv-niederlassung-deutschland.html"
      ]
     ]
    },
    {
     "q": "Q1 2026",
     "c": "other",
     "t": "Launched SpiroTrap HPF, a dirt separator designed to protect heat pumps (3 Feb 2026).",
     "src": [
      [
       "Installatie & Bouw company index",
       "https://installatieenbouw.nl/bedrijven/bedrijf/spirotech/"
      ]
     ]
    },
    {
     "q": "Q2 2026",
     "c": "other",
     "t": "Signed the construction contract for a new headquarters in Helmond (8 May 2026); construction Aug 2026 – Oct 2027, described as the basis for further growth.",
     "src": [
      [
       "Spirotech news",
       "https://www.spirotech.nl/over-ons/nieuws/nieuw-hoofdkantoor/"
      ],
      [
       "Installatie.nl",
       "https://www.installatie.nl/nieuws/spirotech-bouwt-nieuw-hoofdkantoor-in-helmond/"
      ]
     ]
    },
    {
     "q": "Q2 2026",
     "c": "other",
     "t": "With SCHÄFER IT-Systems, launched ProtectaCool Rack (Apr 2026): water treatment, pressure maintenance, degassing and dirt/magnetite separation integrated in a server rack for direct liquid cooling in data centres; first shown at Data Centre World Frankfurt (6–7 May).",
     "src": [
      [
       "SCHÄFER IT-Systems release",
       "https://www.schaefer-it-systems.com/en/newsroom/detail/schaefer-it-systems-und-spirotech-bv-bringen-gemeinsames-system-fuer-sichere-fluessigkeitskuehlung-in-rechenzentren-auf-den-markt/"
      ]
     ]
    },
    {
     "q": "context",
     "c": "ma",
     "t": "Acquired the pressurisation technology, know-how and services of Austrian EDER to broaden its system-water-quality range (date not confirmed).",
     "src": [
      [
       "Heating & Ventilating",
       "https://www.heatingandventilating.net/spirotech-acquires-austrian-firm-for-pressurisation-in-hvac-installations"
      ]
     ]
    }
   ]
  },
  {
   "id": "caleffi",
   "name": "Caleffi",
   "rel": 5,
   "own": "Private (Caleffi family)",
   "hq": "Fontaneto d'Agogna, Italy",
   "rev": "~EUR 273m (2025, Caleffi S.p.A. accounts)",
   "revSrc": "https://www.aziende.it/caleffi-s-p-a-NO-0",
   "fte": "~1,600; 13 plants in Italy (company)",
   "fteSrc": [
    "Caleffi corporate page",
    "https://www.caleffi.com/en-us/company/corporate"
   ],
   "items": [
    {
     "q": "Q1 2025",
     "c": "other",
     "t": "ISH 2025 (Frankfurt, Mar): launched PLURIMOD, DISCAL (separators), CALEFFI eCAL and LEGIOMIX evo; stand themed on water management, heat-pump components, sustainable HVAC comfort and water/health protection.",
     "src": [
      [
       "Caleffi ISH 2025 news",
       "https://www.caleffi.com/en-int/node/13438"
      ]
     ]
    },
    {
     "q": "Q4 2025",
     "c": "perf",
     "t": "FY 2025 (Caleffi S.p.A., from filed accounts): revenue ~EUR 272.5m (+2.1%), net profit ~EUR 43.7m (~16% of revenue). Not to be confused with the listed home-textiles Caleffi.",
     "src": [
      [
       "aziende.it (company register data)",
       "https://www.aziende.it/caleffi-s-p-a-NO-0"
      ]
     ]
    },
    {
     "q": "Q1 2026",
     "c": "other",
     "t": "AHR Expo 2026 (Las Vegas, 2–4 Feb): showed contractor-driven products for North America, including the FLOWMATIC Express Coil Kit, LEGIOMIX and AngleMix mixing valves.",
     "src": [
      [
       "Caleffi AHR 2026 release",
       "https://www.caleffi.com/en-us/news-events/02-02-2026/caleffi-showcases-contractor-driven-innovation-ahr-expo-2026"
      ]
     ]
    },
    {
     "q": "Q2 2026",
     "c": "other",
     "t": "Logistics automation (SSI Schäfer) at Fontaneto d'Agogna and Gattico-Veruno: >7,000 catalogue codes and >40 million products made per year (case study, Apr 2026).",
     "src": [
      [
       "Il Giornale della Logistica",
       "https://ilgiornaledellalogistica.it/case-history/incas-ssi-schafer-per-caleffi-hydronic-solutions/"
      ]
     ]
    },
    {
     "q": "Q3 2026",
     "c": "other",
     "t": "INTERCLIMA 2026 (Paris, 28 Sep – 1 Oct): exhibited co-branded with its long-standing French distribution partner Thermador.",
     "src": [
      [
       "Caleffi event page",
       "https://www.caleffi.com/en-int/news-events/28-09-2026/interclima-2026"
      ]
     ]
    }
   ]
  },
  {
   "id": "oventrop",
   "name": "Oventrop",
   "rel": 4,
   "own": "Private (family-owned)",
   "hq": "Olsberg, Germany",
   "rev": "~EUR 273m (Wikipedia; year n/d)",
   "revSrc": [
    "Wikipedia",
    "https://de.wikipedia.org/wiki/Oventrop_(Unternehmen)"
   ],
   "fte": "~1,000 in Olsberg/Brilon; group ~1,355",
   "fteSrc": [
    "Oventrop company page",
    "https://www.oventrop.com/de-DE/unternehmennews/%C3%BCberuns/dassindwir"
   ],
   "items": [
    {
     "q": "Q1 2025",
     "c": "other",
     "t": "ISH 2025: Regudis W-HTE GT flat station for replacing old gas boilers in line with the German Buildings Energy Act (GEG); first cloud solution OV+ to connect Regudis H substations.",
     "src": [
      [
       "HaustechnikDialog",
       "https://www.haustechnikdialog.de/News/30048/Effizient-in-die-Zukunft-Oventrop-auf-der-ISH-2025"
      ]
     ]
    },
    {
     "q": "Q3 2025",
     "c": "ma",
     "t": "HögforsGST (Finland, district-heating substations) took over Oventrop Energy & Network (formerly Kring, Haiger), 13 Aug 2025; in return Oventrop became a shareholder in HögforsGST. The Haiger site and brand are kept.",
     "src": [
      [
       "HaustechnikDialog",
       "https://www.haustechnikdialog.de/HerstellerKatalog/?content=hersteller&page=hersteller&herstellerid=7&herstellername=Oventrop&site=News"
      ]
     ]
    },
    {
     "q": "Q4 2025",
     "c": "perf",
     "t": "Headcount ~532 per Revelio Labs (Dec 2025, −3.5% y/y), a narrower scope than the company's ~1,000 figure.",
     "src": [
      [
       "Revelio Labs",
       "https://www.reveliolabs.com/companies/oventrop/employees/"
      ]
     ]
    },
    {
     "q": "Q4 2025",
     "c": "other",
     "t": "Restructuring continued (Nov 2025), citing the weak German construction market: 185 more jobs cut in Brilon, assembly moved to the group's plant in Szydłowiec (Poland); administration, plastics and test lab move from Olsberg to Brilon, with German activity concentrated in Brilon by end-2026.",
     "src": [
      [
       "HaustechnikDialog",
       "https://www.haustechnikdialog.de/News/SHKszene/30892/Oventrop-setzt-Neustrukturierung-fort"
      ],
      [
       "bigge-online",
       "https://bigge-online.de/oventrop-baut-185-weitere-stellen-in-brilon-ab-montagearbeitsplaetze-werden-nach-polen-verlegt/"
      ]
     ]
    },
    {
     "q": "Q2 2026",
     "c": "other",
     "t": "IG Metall called a two-hour warning strike at Brilon (20 May 2026) to push for a social collective agreement over the move of assembly to Poland; Olsberg is being closed this year.",
     "src": [
      [
       "Radio Sauerland",
       "https://www.radiosauerland.de/artikel/warnstreik-beim-unternehmen-oventrop-in-brilon-2654005"
      ]
     ]
    }
   ]
  },
  {
   "id": "grundfos",
   "name": "Grundfos",
   "rel": 4,
   "own": "Private (Poul Due Jensen Foundation)",
   "hq": "Bjerringbro, Denmark",
   "rev": "DKK 34.7bn / ~EUR 4.7bn (2025)",
   "revSrc": [
    "Grundfos Annual Report 2025",
    "https://www.grundfos.com/media/reports/grundfos-annual-report-2025"
   ],
   "fte": "21,433 (end-2025)",
   "fteSrc": [
    "Grundfos Annual Report 2025",
    "https://www.grundfos.com/content/dam/global/page-assets/about-us/annual-reports/Grundfos-Annual-Report-2025.pdf"
   ],
   "items": [
    {
     "q": "Q2 2025",
     "c": "perf",
     "t": "H1 2025: revenue DKK 17.2bn, EBIT before special items DKK 2.1bn.",
     "src": [
      [
       "Grundfos H1 2025",
       "https://www.grundfos.com/media/latest-news/grundfos-reports-half-year-result-continued-strong-sales-growth-and-strategic-progress"
      ]
     ]
    },
    {
     "q": "Q3 2025",
     "c": "ma",
     "t": "Acquired Newterra (US water and wastewater treatment) from Frontenac (Aug 2025).",
     "src": [
      [
       "GlobalData",
       "https://www.globaldata.com/company-profile/grundfos-holding-as/"
      ]
     ]
    },
    {
     "q": "Q4 2025",
     "c": "perf",
     "t": "FY 2025: revenue DKK 34.7bn (+5.7%), EBIT before special items 10.6% of revenue; US sales +15%, strong data-centre demand.",
     "src": [
      [
       "Grundfos FY 2025 release",
       "https://www.grundfos.com/media/latest-news/grundfos-delivers-robust-2025-results-with-us-and-data-centres-a"
      ]
     ]
    },
    {
     "q": "Q2 2026",
     "c": "perf",
     "t": "H1 2026: sales +7.7% in local currency to DKK 17.9bn; US >+20%; return to strong growth in Southern and Central Europe; FY growth outlook raised to 7–8%.",
     "src": [
      [
       "Grundfos H1 2026",
       "https://www.grundfos.com/media/latest-news/grundfos-reports-strong-growth-in-first-half-of-2026"
      ],
      [
       "Teleborsa",
       "https://www.teleborsa.it/News/2026/08/19/grundfos-solida-semestrale-con-vendite-in-crescita-del-7-7percent-25.html"
      ]
     ]
    },
    {
     "q": "Q2 2026",
     "c": "other",
     "t": "Broke ground (24 Jun 2026) on a ~143,000 sq ft manufacturing expansion at its US headquarters campus in Brookshire, Texas, completion Q3 2027; efficiency programmes at plants in Mexico and Hungary.",
     "src": [
      [
       "Teleborsa",
       "https://www.teleborsa.it/News/2026/08/19/grundfos-solida-semestrale-con-vendite-in-crescita-del-7-7percent-25.html"
      ],
      [
       "Grundfos release",
       "https://www.grundfos.com/media/latest-news/grundfos-breaks-ground-on-americas-campus-expansion-to-support-g"
      ]
     ]
    },
    {
     "q": "Q3 2026",
     "c": "ma",
     "t": "Completed the acquisition of EUWA (Gärtringen, Germany; water treatment for breweries and soft drinks, installations in >110 countries), announced mid-July 2026; extends its water-treatment platform after Newterra.",
     "src": [
      [
       "Grundfos release",
       "https://www.grundfos.com/media/latest-news/grundfos-acquires-german-water-treatment-company-euwa"
      ],
      [
       "Brauwelt",
       "https://brauwelt.com/en/news/company-news/649559-grundfos-acquires-german-water-treatment-company-euwa"
      ]
     ]
    },
    {
     "q": "Q3 2026",
     "c": "other",
     "t": "WEFTEC 2026 (New Orleans, 26–30 Sep): unveiled a combined water-treatment offer bringing Newterra, MECO and Water Works under the Grundfos brand together with its own pumps.",
     "src": [
      [
       "iGrow News",
       "https://igrownews.com/grundfos-latest-news/"
      ]
     ]
    }
   ]
  },
  {
   "id": "taco",
   "name": "Taco Comfort Solutions",
   "rel": 4,
   "own": "Pentair (NYSE: PNR) since 1 Oct 2026; previously family-owned",
   "hq": "Cranston, Rhode Island, US",
   "rev": "~USD 560m (2026e, Pentair)",
   "revSrc": [
    "Pentair Q3 2026 presentation (PDF)",
    "reports/pentair/Q3-2026_earnings-presentation.pdf"
   ],
   "fte": "n/d (estimates 350–1,000)",
   "items": [
    {
     "q": "Q4 2025",
     "c": "other",
     "t": "Completed a 50,000 sq ft expansion at its Fall River, MA facility during 2025 and leased extra space.",
     "src": [
      [
       "Yahoo Finance / Providence Journal",
       "https://finance.yahoo.com/markets/stocks/articles/fall-river-hvac-manufacturer-taco-200314218.html"
      ]
     ]
    },
    {
     "q": "Q3 2026",
     "c": "ma",
     "t": "Pentair agreed (28 Jul 2026) to acquire Taco Group Holdings for ~USD 1.4bn; closed 1 Oct 2026. Pentair cites hydronic and data-centre HVAC exposure (schools, hospitals, commercial buildings).",
     "src": [
      [
       "Taco press release",
       "https://www.tacocomfort.com/news/pentair-to-acquire-taco/"
      ],
      [
       "Pentair Q3 2026 presentation (PDF)",
       "reports/pentair/Q3-2026_earnings-presentation.pdf"
      ]
     ]
    },
    {
     "q": "Q3 2026",
     "c": "perf",
     "t": "Taco expected 2026 sales of ~USD 560m (growth >10%), above Pentair's previous expectation; Pentair expects EPS accretion in 2027.",
     "src": [
      [
       "Pentair Q3 2026 presentation (PDF)",
       "reports/pentair/Q3-2026_earnings-presentation.pdf"
      ]
     ]
    },
    {
     "q": "Q3 2026",
     "c": "other",
     "t": "Lubbock, Texas site earned two industry certifications (Aug 2026); new owner committed to keeping a major presence in Cranston.",
     "src": [
      [
       "RI News Today",
       "https://rinewstoday.com/taco-assures-mayor-continued-investment-in-cranston/"
      ]
     ]
    }
   ]
  },
  {
   "id": "bg",
   "name": "Bell & Gossett (Xylem)",
   "rel": 4,
   "own": "Xylem (NYSE: XYL), Applied Water segment",
   "hq": "Morton Grove, Illinois, US",
   "rev": "Applied Water segment USD 1,849m (2025)",
   "revSrc": [
    "Xylem Q4 2025 earnings package (PDF)",
    "reports/xylem/Q4-2025_earnings-package.pdf"
   ],
   "fte": "n/d (part of Xylem)",
   "items": [
    {
     "q": "Q1 2025",
     "c": "perf",
     "t": "Xylem Applied Water Q1 2025 (incl. Bell & Gossett): revenue USD 435m (+1% organic), adj. EBITDA margin 19.5% (+300 bps); orders USD 486m (+3%).",
     "src": [
      [
       "Xylem Q1 2025 earnings package (PDF)",
       "reports/xylem/Q1-2025_earnings-package.pdf"
      ]
     ]
    },
    {
     "q": "Q2 2025",
     "c": "perf",
     "t": "Applied Water Q2 2025: revenue USD 483m (+5% organic), adj. EBITDA margin 21.7% (+420 bps); orders USD 488m (+4%).",
     "src": [
      [
       "Xylem Q2 2025 earnings package (PDF)",
       "reports/xylem/Q2-2025_earnings-package.pdf"
      ]
     ]
    },
    {
     "q": "Q3 2025",
     "c": "perf",
     "t": "Applied Water Q3 2025: revenue USD 456m (+1% organic), adj. EBITDA margin 21.7% (+310 bps); orders flat at USD 445m.",
     "src": [
      [
       "Xylem Q3 2025 earnings package (PDF)",
       "reports/xylem/Q3-2025_earnings-package.pdf"
      ]
     ]
    },
    {
     "q": "Q4 2025",
     "c": "perf",
     "t": "FY 2025 Applied Water (incl. Bell & Gossett): revenue USD 1,849m (+2% organic), adj. EBITDA margin 20.4% (+270 bps).",
     "src": [
      [
       "Xylem Q4 2025 earnings package (PDF)",
       "reports/xylem/Q4-2025_earnings-package.pdf"
      ]
     ]
    },
    {
     "q": "Q1 2026",
     "c": "other",
     "t": "AHR Expo 2026: launched the e-80SCX pump with Hydrovar X drive (up to 4,000 rpm, sensorless control) and next-generation plate heat exchangers, with a data-centre cooling focus; BPX brazed plate heat exchanger at CMPX 2026.",
     "src": [
      [
       "Xylem / B&G news",
       "https://www.xylem.com/en-tw/resources/blog-posts/bell-gossett-industry-news/xylem-showcases-solutions/"
      ]
     ]
    },
    {
     "q": "Q1 2026",
     "c": "perf",
     "t": "Applied Water Q1 2026: revenue USD 448m (0% organic), adj. EBITDA margin 19.6% (19.5%); orders USD 512m (+2%).",
     "src": [
      [
       "Xylem Q1 2026 earnings package (PDF)",
       "reports/xylem/Q1-2026_earnings-package.pdf"
      ]
     ]
    },
    {
     "q": "Q2 2026",
     "c": "perf",
     "t": "Applied Water Q2 2026: revenue USD 501m (+3% organic), adj. EBITDA margin 21.2%; orders +9% on data-centre wins.",
     "src": [
      [
       "Xylem Q2 2026 earnings package (PDF)",
       "reports/xylem/Q2-2026_earnings-package.pdf"
      ]
     ]
    },
    {
     "q": "Q3 2026",
     "c": "perf",
     "t": "Applied Water Q3 2026: revenue USD 489m (+9% organic), orders +15% on North American data centres and commercial buildings; adj. EBITDA margin 21.3% (21.7%).",
     "src": [
      [
       "Xylem Q3 2026 earnings package (PDF)",
       "reports/xylem/Q3-2026_earnings-package.pdf"
      ]
     ]
    },
    {
     "q": "Q3 2026",
     "c": "ma",
     "t": "Xylem plans to divest AW International (Europe, MEA, APAC) and Specialty Flow Control; AW Americas (Bell & Gossett) joins the new Flow Solutions segment from 1 Jan 2027.",
     "src": [
      [
       "Xylem Q3 2026 earnings package (PDF)",
       "reports/xylem/Q3-2026_earnings-package.pdf"
      ]
     ]
    }
   ]
  },
  {
   "id": "wessels",
   "name": "Wessels Company",
   "rel": 3,
   "own": "Private (NM Group Global)",
   "hq": "Greenwood, Indiana, US",
   "rev": "n/d",
   "fte": "n/d",
   "items": [
    {
     "q": "Q2 2025",
     "c": "other",
     "t": "Announced a new factory in Tiffin, Ohio for oversized tanks, citing data-centre demand (Apr 2025).",
     "src": [
      [
       "13abc",
       "https://www.13abc.com/2025/04/30/new-factory-specialized-tanks-planned-tiffin-data-centers-driving-demand/"
      ],
      [
       "Inside Indiana Business",
       "https://www.insideindianabusiness.com/articles/greenwood-tank-manufacturer-expanding-ohio-operations"
      ]
     ]
    }
   ]
  },
  {
   "id": "zilmet",
   "name": "Zilmet",
   "rel": 3,
   "own": "Private",
   "hq": "Limena (Padova), Italy",
   "rev": "n/d",
   "fte": "n/d",
   "items": [
    {
     "q": "Q2 2025",
     "c": "other",
     "t": "Zilmet USA building a highly automated expansion-tank plant in Georgetown, South Carolina, targeted to open by end of Q2 2025.",
     "src": [
      [
       "PHC News",
       "https://www.phcppros.com/articles/20376-always-moving-forward"
      ]
     ]
    }
   ]
  },
  {
   "id": "adey",
   "name": "ADEY",
   "rel": 3,
   "own": "Genuit Group (LSE: GEN)",
   "hq": "Stonehouse, Gloucestershire, UK",
   "rev": "n/d (not split out by Genuit)",
   "fte": "n/d",
   "items": [
    {
     "q": "context",
     "c": "other",
     "t": "MagnaClean magnetic filters installed in >4 million UK homes; current range includes MagnaClean Professional 2XP. No dated 2025–2026 news found.",
     "src": [
      [
       "Gradcracker / Genuit",
       "https://www.gradcracker.com/hub/804/genuit-group/additional-content/4730/adey"
      ]
     ]
    }
   ]
  },
  {
   "id": "fernox",
   "name": "Fernox",
   "rel": 3,
   "own": "Element Solutions (NYSE: ESI)",
   "hq": "Woking, UK",
   "rev": "n/d",
   "fte": "n/d",
   "items": [
    {
     "q": "Q1 2025",
     "c": "other",
     "t": "Exhibited at ISH 2025, Frankfurt (Mar 2025).",
     "src": [
      [
       "Fernox news",
       "https://fernox.com/2025/02/21/"
      ]
     ]
    },
    {
     "q": "Q2 2025",
     "c": "other",
     "t": "Charel Marais became General Manager on 1 Apr 2025, succeeding Ernie McDonald.",
     "src": [
      [
       "Fernox news",
       "https://fernox.com/news-press"
      ]
     ]
    },
    {
     "q": "Q1 2026",
     "c": "other",
     "t": "Exhibited at MCE 2026 Milan and CMPX 2026 (Mar 2026); launched a Renewables Product Selector for heat-pump water treatment.",
     "src": [
      [
       "Heating & Ventilating",
       "https://www.heatingandventilating.net/fernox-to-exhibit-at-mostra-convegno-expocomfort-2026-1"
      ],
      [
       "MODBS",
       "https://modbs.co.uk/news/fullstory.php/aid/20603/Fernox_launches_new_Product_Selector_tool_for_its_expanding_renewables_range.html"
      ]
     ]
    },
    {
     "q": "Q2 2026",
     "c": "other",
     "t": "Launched an enhanced commercial water-treatment range, shown at InstallerSHOW 2026 (Jun 2026).",
     "src": [
      [
       "InstallerSHOW",
       "https://www.installershow.com/news/fernox-commercial-solutions-range"
      ]
     ]
    }
   ]
  },
  {
   "id": "pewo",
   "name": "PEWO Energietechnik",
   "rel": 3,
   "own": "Viessmann Group subsidiary",
   "hq": "Elsterheide, Germany",
   "rev": "n/d",
   "fte": "51–200 (database estimate)",
   "fteSrc": [
    "Implisense",
    "https://implisense.com/en/companies/pewo-energietechnik-gmbh-elsterheide-ot-neuwiese-DERHO1LXYY80"
   ],
   "items": [
    {
     "q": "context",
     "c": "ma",
     "t": "District-heating transfer stations; majority stake in MB-Brassen Fernwärmetechnik (2021). No 2025–2026 news found.",
     "src": [
      [
       "CB Insights",
       "https://www.cbinsights.com/investor/pewo-energietechnik"
      ]
     ]
    }
   ]
  },
  {
   "id": "esbe",
   "name": "ESBE",
   "rel": 3,
   "own": "Private",
   "hq": "Reftele, Sweden",
   "rev": "n/d",
   "fte": "n/d",
   "items": [
    {
     "q": "Q1 2025",
     "c": "other",
     "t": "Set up a UK subsidiary.",
     "src": [
      [
       "ESBE news",
       "https://www.esbe.eu/gb/en/news"
      ]
     ]
    },
    {
     "q": "Q1 2026",
     "c": "other",
     "t": "Updated Flexi circulation units (new insulation, adjustable bracket; Feb 2026), new GxF200 and VTN200 valves plus a circulation-unit selector tool (Mar 2026); named Entrepreneur of the Year in Gislaved.",
     "src": [
      [
       "ESBE news",
       "https://www.esbe.eu/group/news"
      ]
     ]
    },
    {
     "q": "Q2 2026",
     "c": "other",
     "t": "Invested in a transfer machine for lead-free brass, bringing more production back to Sweden (Jun 2026); named one of Sweden's best-managed companies (May 2026).",
     "src": [
      [
       "ESBE news",
       "https://www.esbe.eu/group/news"
      ]
     ]
    }
   ]
  },
  {
   "id": "paw",
   "name": "PAW",
   "rel": 3,
   "own": "Stiebel Eltron (acquisition announced 2022)",
   "hq": "Hameln, Germany",
   "rev": "n/d",
   "fte": "n/d",
   "items": [
    {
     "q": "context",
     "c": "ma",
     "t": "Pump and valve groups, heating circuit and flat stations for OEMs and wholesalers; acquired by Stiebel Eltron (2022) and run as an independent brand. No 2025–2026 news found.",
     "src": [
      [
       "Stiebel Eltron press release (PDF)",
       "https://www.stiebel-eltron.de/content/dam/ste/de/de/Presse/220222_paw/220201_PAW_final.pdf"
      ]
     ]
    }
   ]
  },
  {
   "id": "cetetherm",
   "name": "Cetetherm",
   "rel": 3,
   "own": "NIBE Group",
   "hq": "Ronneby, Sweden",
   "rev": "n/d",
   "fte": "n/d",
   "items": [
    {
     "q": "context",
     "c": "other",
     "t": "NIBE added Cetetherm heat interface units (Pioneer HIU) and district-heating substations to its UK portfolio, combining heat-pump-led and heat-network offers.",
     "src": [
      [
       "Heating & Ventilating",
       "https://www.heatingandventilating.net/nibe-adds-heat-network-solutions-to-uk-portfolio-with-cetetherm-pioneer-hiu-and-substations"
      ]
     ]
    }
   ]
  },
  {
   "id": "alfalaval",
   "name": "Alfa Laval",
   "rel": 2,
   "own": "Listed (Nasdaq Stockholm: ALFA)",
   "hq": "Lund, Sweden",
   "rev": "SEK 52.6bn (9M 2026)",
   "revSrc": [
    "Alfa Laval Q3 2026 report",
    "https://www.alfalaval.com/media/news/investors/2026/alfa-laval-ab-publ-interim-report-1-july-30-september-2026/"
   ],
   "fte": "n/d",
   "items": [
    {
     "q": "Q1 2026",
     "c": "perf",
     "t": "Q1 2026: order intake SEK 17.6bn (+6% organic), net sales SEK 15.9bn (+2% organic), adj. EBITA margin 18.1%.",
     "src": [
      [
       "Alfa Laval Q1 2026 report",
       "https://www.alfalaval.com/media/news/investors/2026/alfa-laval-ab-publ-interim-report-1-january-31-march-2026/"
      ]
     ]
    },
    {
     "q": "Q2 2026",
     "c": "perf",
     "t": "Q2 2026: order intake SEK 22.2bn (+29% organic), net sales SEK 18.1bn, adj. EBITA margin 17.0% (17.8%).",
     "src": [
      [
       "Alfa Laval Q2 2026 report",
       "https://www.alfalaval.com/media/news/investors/2026/alfa-laval-ab-publ-interim-report-1-april-30-june-2026/"
      ]
     ]
    },
    {
     "q": "Q3 2026",
     "c": "perf",
     "t": "Q3 2026: record order intake SEK 23.2bn (+33% organic), net sales SEK 18.6bn (~+6% organic), adj. EBITA margin 18.1% (18.4%); data-centre orders ~SEK 2bn in the quarter.",
     "src": [
      [
       "Alfa Laval Q3 2026 report",
       "https://www.alfalaval.com/media/news/investors/2026/alfa-laval-ab-publ-interim-report-1-july-30-september-2026/"
      ],
      [
       "Investing.com",
       "https://www.investing.com/news/transcripts/earnings-call-transcript-alfa-laval-posts-record-q3-2026-orders-shares-rise-145-93CH-4974612"
      ]
     ]
    }
   ]
  },
  {
   "id": "armstrong",
   "name": "Armstrong Fluid Technology",
   "rel": 3,
   "own": "Private (Armstrong family)",
   "hq": "Toronto, Canada",
   "rev": "n/d",
   "fte": "n/d",
   "items": [
    {
     "q": "Q1 2026",
     "c": "other",
     "t": "Launched the Systems Envelope Fluid Management Station (SE-FMS) (20 Jan 2026); appointed a Global Director of Offering Management and an MD for APAC & India.",
     "src": [
      [
       "Armstrong press release (PDF)",
       "https://armstrongfluidtechnology.com/~/media/documents/press-releases/pr-2026-01-09.pdf"
      ],
      [
       "Megaproject",
       "https://www.megaproject.com/news/plumbing/armstrong-fluid-technology-launches-systems-envelope-fluid-management-station"
      ]
     ]
    },
    {
     "q": "Q1 2026",
     "c": "perf",
     "t": "Appointed Danilo Elez as CEO (30 Mar 2026) to lead the next phase of growth; also named a new global head for data centres.",
     "src": [
      [
       "Armstrong press release (PDF)",
       "https://armstrongfluidtechnology.com/~/media/documents/press-releases/pr-2026-03-31.pdf"
      ],
      [
       "Supply House Times",
       "https://www.supplyht.com/articles/107142-armstrong-fluid-technology-appoints-danilo-elez-as-ceo"
      ]
     ]
    },
    {
     "q": "Q3 2026",
     "c": "other",
     "t": "Showcased HVAC and intelligent fluid-flow solutions at BEX Asia, Singapore (Sep 2026).",
     "src": [
      [
       "Trade Arabia",
       "https://www.tradearabia.com/tag/Armstrong-Fluid-Technology"
      ]
     ]
    }
   ]
  },
  {
   "id": "victaulic",
   "name": "Victaulic",
   "rel": 2,
   "own": "Private",
   "hq": "Easton, Pennsylvania, US",
   "rev": "~USD 5.1bn (2026, IBISWorld estimate)",
   "revSrc": [
    "IBISWorld",
    "https://www.ibisworld.com/united-states/supplieriq/victaulic-company/423099/"
   ],
   "fte": "n/d",
   "items": [
    {
     "q": "Q2 2026",
     "c": "other",
     "t": "Marked 100 years since its first mechanical pipe-joining patent (4 Apr 2026); 309,000 sq ft distribution centre in Halfway, Maryland due to open in H1 2026.",
     "src": [
      [
       "ACR News",
       "https://www.acr-news.com/victaulic-celebrates-100-years-of-innovation"
      ],
      [
       "Modern Distribution Management",
       "https://www.mdm.com/news/top-distributor-sectors/industrial-pvf/pipe-joining-supplier-victaulic-adding-dc-in-maryland/"
      ]
     ]
    },
    {
     "q": "Q3 2026",
     "c": "ma",
     "t": "Acquired Arumani to expand European modular construction and mechanical assemblies (Aug 2026); Core Pipe Products reported as acquired (Sep 2026, unconfirmed).",
     "src": [
      [
       "finanznachrichten.de",
       "https://www.finanznachrichten.de/nachrichten-2026-08/69225009-victaulic-expands-european-modular-construction-capabilities-with-acquisition-of-arumani-008.htm"
      ],
      [
       "Signalbase",
       "https://www.trysignalbase.com/news/acquisitions/core-pipe-products-acquired-by-victaulic-acquisition"
      ]
     ]
    }
   ]
  },
  {
   "id": "resideo",
   "name": "Resideo (Honeywell Home)",
   "rel": 2,
   "own": "Listed (NYSE: REZI)",
   "hq": "Scottsdale, Arizona, US",
   "rev": "USD 7.5bn (2025, incl. ADI)",
   "revSrc": [
    "Resideo Q4 2025",
    "https://quartr.com/events/resideo-technologies-inc-rezi-q4-2025_ofDN0sWM"
   ],
   "fte": "~14,600 (data aggregator)",
   "items": [
    {
     "q": "Q1 2025",
     "c": "perf",
     "t": "Products & Solutions (Honeywell Home) Q1 2025 revenue USD 649m (+5%).",
     "src": [
      [
       "Resideo Q1 2025 release",
       "https://investor.resideo.com/news/news-details/2025/Resideo-Announces-First-Quarter-2025-Financial-Results-Reaffirms-2025-Outlook/default.aspx"
      ]
     ]
    },
    {
     "q": "Q4 2025",
     "c": "perf",
     "t": "FY 2025: record revenue USD 7.5bn (+11%), adj. EBITDA USD 833m (+20%); GAAP net loss USD 527m after a USD 1.59bn payment to end the Honeywell indemnification agreement. 2026 guide: USD 7.8–7.9bn.",
     "src": [
      [
       "MarketBeat Q4 2025 call",
       "https://www.marketbeat.com/instant-alerts/resideo-technologies-q4-earnings-call-highlights-2026-02-25/?.tsrc=rss"
      ]
     ]
    },
    {
     "q": "Q2 2026",
     "c": "perf",
     "t": "Q2 2026: revenue ~USD 1.98bn (+2%), Products & Solutions +4%; input-cost pressure (memory, metals, PCBs) expected to peak in Q3.",
     "src": [
      [
       "GuruFocus",
       "https://www.gurufocus.com/news/9039264/resideo-technologies-inc-rezi-q2-2026-earnings-call-highlights-record-revenue-and-ebitda-amid-strategic-transformation"
      ]
     ]
    },
    {
     "q": "Q3 2026",
     "c": "ma",
     "t": "Completed the separation of ADI (distribution) on 3 Aug 2026; standalone Q3 guide USD 705–730m revenue; Q3 results due 10 Nov 2026.",
     "src": [
      [
       "MarketBeat",
       "https://www.marketbeat.com/instant-alerts/upcoming-resideo-technologies-rezi-set-to-announce-earnings-on-tuesday-2026-11-03/"
      ]
     ]
    }
   ]
  },
  {
   "id": "siemens",
   "name": "Siemens Smart Infrastructure",
   "rel": 3,
   "own": "Listed (Siemens AG), segment",
   "hq": "Zug, Switzerland",
   "rev": "~EUR 23bn run-rate (FY 2026 quarters)",
   "fte": "n/d",
   "fyNote": "Siemens' fiscal year ends 30 September; quarters are shown as Siemens labels them (Q1 = October–December).",
   "items": [
    {
     "q": "Q1 2026",
     "c": "perf",
     "t": "Fiscal Q1 2026 (Oct–Dec 2025): record orders EUR 7.2bn, revenue EUR 5.5bn, profit EUR 1.05bn (19.0% margin).",
     "src": [
      [
       "Siemens Q1 FY2026 release (PDF)",
       "https://assets.ctfassets.net/17si5cpawjzf/1liUz1NDLySSAIx9eMEu9D/26247a6526b6e3e9e2a4cf3e3549363e/2026-q1-earnings-release-en.pdf"
      ]
     ]
    },
    {
     "q": "Q2 2026",
     "c": "perf",
     "t": "Fiscal Q2 2026: revenue ~EUR 5.9bn, profit EUR 1.1bn (18.6%); record data-centre orders EUR 1.9bn; H1 data-centre revenue +45% to EUR 1.8bn.",
     "src": [
      [
       "TED Magazine",
       "https://tedmag.com/siemens-releases-q2-fy-2026-earnings-results/"
      ]
     ]
    },
    {
     "q": "Q3 2026",
     "c": "perf",
     "t": "Fiscal Q3 2026: orders EUR 8.0bn (+42%, record), revenue EUR 6.4bn (+13% comparable), profit EUR 1.3bn (20.0%); backlog EUR 23.7bn; FY 2026 outlook raised to +10–11% revenue, 18.5–19.5% margin.",
     "src": [
      [
       "Siemens Q3 FY2026 release (PDF)",
       "https://assets.new.siemens.com/siemens/assets/api/uuid:a659b574-caac-4ea1-a94f-a9d624fe0b7f/2026-q3-earnings-release-en.pdf"
      ]
     ]
    },
    {
     "q": "context",
     "c": "other",
     "t": "Investing EUR 300m in Germany to expand electrification and electrical-products capacity.",
     "src": [
      [
       "Siemens press release",
       "https://press.siemens.com/global/en/pressrelease/siemens-invest-eu300-million-germany-build-electrical-backbone-tomorrows-industries"
      ]
     ]
    }
   ]
  },
  {
   "id": "frese",
   "name": "Frese",
   "rel": 3,
   "own": "Vexve (Finland) since Feb 2025",
   "hq": "Slagelse, Denmark",
   "rev": "n/d (Vexve group ~EUR 200m combined)",
   "revSrc": [
    "Vexve",
    "https://vexve.com/en/articles/vexve-has-completed-the-acquisition-of-frese-a-s"
   ],
   "fte": "~250 (at acquisition)",
   "fteSrc": [
    "Vexve",
    "https://vexve.com/en/articles/vexve-has-completed-the-acquisition-of-frese-a-s"
   ],
   "items": [
    {
     "q": "Q1 2025",
     "c": "ma",
     "t": "Vexve completed the acquisition of Frese from the founding family (3 Feb 2025), creating a ~EUR 200m hydronic-network valve group.",
     "src": [
      [
       "Vexve",
       "https://vexve.com/en/articles/vexve-has-completed-the-acquisition-of-frese-a-s"
      ],
      [
       "Valve World",
       "https://valve-world.net/?p=254199"
      ]
     ]
    },
    {
     "q": "context",
     "c": "other",
     "t": "Rebranded under Vexve with a modernised Frese identity; dynamic balancing and PICV range continues.",
     "src": [
      [
       "Vexve",
       "https://www.vexve.com/en/articles/strengthening-vexve-brand-with-frese"
      ]
     ]
    }
   ]
  },
  {
   "id": "giacomini",
   "name": "Giacomini",
   "rel": 3,
   "own": "Private (Giacomini family)",
   "hq": "San Maurizio d'Opaglio, Italy",
   "rev": "~EUR 212m (database; year n/d, −5.5%)",
   "revSrc": [
    "Atoka",
    "https://atoka.io/public/it/azienda/giacomini-spa/70035b52b989"
   ],
   "fte": "~724 (database)",
   "items": [
    {
     "q": "context",
     "c": "perf",
     "t": "Unions reported internal tensions within the ownership; the mayor of San Maurizio d'Opaglio commented publicly (date not stated). No 2025–2026 financials found.",
     "src": [
      [
       "NewsNovara (PDF)",
       "https://www.newsnovara.it/fileadmin/archivio/newsnovara/comunicato_stampa_sindaco_ronchi.pdf"
      ]
     ]
    }
   ]
  },
  {
   "id": "herz",
   "name": "HERZ Armaturen",
   "rel": 3,
   "own": "Private; moving to the non-profit HERZ foundation",
   "hq": "Vienna, Austria",
   "rev": "n/d",
   "fte": "~3,100 (group)",
   "fteSrc": [
    "HERZ",
    "https://herz-armaturen.at/news/130-years-of-herz/"
   ],
   "items": [
    {
     "q": "Q4 2025",
     "c": "perf",
     "t": "2025 review: weak Austria (red tape, weak economy, changed boiler rules) hit valves and boilers, with fierce price competition; better internationally, e.g. Indonesia (data centres) and Thailand.",
     "src": [
      [
       "HERZ: That was 2025",
       "https://herz-armaturen.at/news/our-heart-beats-globally-br-that-was-2025/"
      ]
     ]
    },
    {
     "q": "context",
     "c": "ma",
     "t": "The non-profit HERZ foundation is to become owner of the group after sale talks (incl. Chinese bidders) did not proceed.",
     "src": [
      [
       "MeinBezirk",
       "https://www.meinbezirk.at/oberwart/c-wirtschaft/gemeinnuetzige-herz-stiftung-als-zukuenftiger-konzern-eigentuemer_a7542089"
      ]
     ]
    }
   ]
  },
  {
   "id": "wilo",
   "name": "Wilo",
   "rel": 3,
   "own": "Private (Wilo-Foundation)",
   "hq": "Dortmund, Germany",
   "rev": "EUR 1,918.7m (2025)",
   "revSrc": [
    "Wilo 2025 results",
    "https://wilo.com/id/en/About-Wilo-Indonesia/Current-News/Wilo-Group-continues-to-grow-profitably-and-takes-next-strategic-step-in-its-corporate-development_3392.html"
   ],
   "fte": "~9,000 (2025)",
   "fteSrc": [
    "Wilo Annual Report 2025",
    "https://wilo-group.com/en/Company/Annual-and-sustainability-report/"
   ],
   "items": [
    {
     "q": "Q1 2025",
     "c": "other",
     "t": "Expanded its Dubai plant to double production capacity (Mar 2025).",
     "src": [
      [
       "ME Construction News",
       "https://meconstructionnews.com/topics/wilo"
      ]
     ]
    },
    {
     "q": "Q4 2025",
     "c": "perf",
     "t": "FY 2025: sales EUR 1,918.7m (+4.5% currency-adjusted), EBITDA EUR 212m (+39%), margin 11.1%; net income EUR 65m; free cash flow EUR 66.4m (+80%); regional 'region-for-region' organisation.",
     "src": [
      [
       "Wilo 2025 results",
       "https://impeller.net/magazin/wilo-group-continues-to-grow-profitably-and-takes-next-strategic-step-in-its-corporate-development/"
      ]
     ]
    },
    {
     "q": "Q3 2026",
     "c": "other",
     "t": "Established Wilo Japan (Aug 2026), targeting data centres.",
     "src": [
      [
       "MONOist",
       "https://monoist.itmedia.co.jp/mn/spv/2609/01/news017.html"
      ]
     ]
    }
   ]
  }
 ]
};
