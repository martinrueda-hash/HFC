// Competitor watch data. Strict JSON after "window.CW =", so tools/fetch_competitor_data.py can read it.
// Figures are in each company's reporting currency (millions unless stated). Calendar quarters: for Emerson
// (fiscal year ends 30 September) a calendar quarter maps to its fiscal quarter, e.g. Q3 2026 = fiscal Q4 2026.
// For half-year reporters, Q2 shows the H1 report and Q4 the full-year report; Q1 and Q3 show trading updates.
// "derived" lists figures calculated from reported growth rates and the current-year figure, not reported directly.
window.CW = {
 "asOf": "2026-10-30",
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
   "profLbl": "Operating income"
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
   "profLbl": "Adj. operating income"
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
   "cadence": "Quarterly, fiscal year ends 30 September",
   "ir": "https://ir.emerson.com/",
   "color": "#008300",
   "profLbl": "Adj. segment EBITA"
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
   "profLbl": "Adj. operating income"
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
   "event": "Fiscal Q1 2026 results"
  },
  {
   "co": "emerson",
   "date": "2026-05-05",
   "event": "Fiscal Q2 2026 results"
  },
  {
   "co": "emerson",
   "date": "2026-08-04",
   "event": "Fiscal Q3 2026 results"
  },
  {
   "co": "emerson",
   "date": "2026-11-04",
   "event": "Fiscal Q4 / FY 2026 results",
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
    "extra": [
     {
      "l": "EBITA",
      "v": "105.7"
     }
    ],
    "src": [
     [
      "Q1 2025 press release",
      "https://aalberts-website.s3.eu-west-1.amazonaws.com/media/App/Models/Download/000/000/536/attachment/original/1Q-2025-press%20release.pdf"
     ]
    ],
    "prof": 105.7
   },
   "Q2 2025": {
    "report": "H1 2025 results (6 months)",
    "date": "2025-07-24",
    "rev": 1557,
    "org": -3.2,
    "mgnLbl": "EBITA margin",
    "mgn": 13.5,
    "extra": [
     {
      "l": "EBITA",
      "v": "210"
     }
    ],
    "guide": "Full-year EBITA margin outlook cut to 13–14%; no improvement in organic growth expected in H2.",
    "src": [
     [
      "H1 2025 press release",
      "https://aalberts-website.s3.eu-west-1.amazonaws.com/media/App/Models/Download/000/000/555/attachment/original/1H2025.pdf"
     ]
    ],
    "prof": 210
   },
   "Q3 2025": {
    "report": "Q3 2025 trading update",
    "rev": 772.5,
    "org": -1.9,
    "mgnLbl": "EBITA margin",
    "mgn": 12.5,
    "extra": [
     {
      "l": "EBITA",
      "v": "96.3"
     }
    ],
    "note": "Margin remained under pressure, especially in the building segment.",
    "src": [
     [
      "Q3 2025 press release",
      "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/569/attachment/original/Q3%202025.pdf"
     ]
    ],
    "prof": 96.3,
    "seg": [
     {
      "n": "Building",
      "rev": 389.4,
      "org": 3.2,
      "prof": 42.0,
      "mgn": 10.8
     },
     {
      "n": "Industry",
      "rev": 280.3,
      "org": -1.1,
      "prof": 49.6,
      "mgn": 17.7
     },
     {
      "n": "Semicon",
      "rev": 107.8,
      "org": -17.8,
      "prof": 14.2,
      "mgn": 13.2
     }
    ],
    "segNote": "Semicon (−17.8% organic) weighed on the quarter. Building grew 3.2% organically but its margin stayed low at 10.8%; Industry −1.1% organic at a 17.7% margin."
   },
   "Q4 2025": {
    "report": "FY 2025 results (12 months)",
    "date": "2026-02-26",
    "rev": 3091,
    "revChg": -1.8,
    "org": -2.5,
    "mgnLbl": "EBITA margin",
    "mgn": 13.2,
    "mgnChg": -180,
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
    "extra": [
     {
      "l": "EBITA",
      "v": "410",
      "c": "471 in 2024"
     },
     {
      "l": "Dividend",
      "v": "EUR 1.15"
     },
     {
      "l": "Inventory",
      "v": "−155",
      "c": "DIO 82 days"
     }
    ],
    "guide": "Improvement in organic growth and EBITA margin expected in 2026. EUR 75m share buyback (27 Feb – 9 Oct 2026).",
    "src": [
     [
      "FY 2025 press release",
      "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/574/attachment/original/FY2025%20(3).pdf"
     ],
     [
      "FY 2025 presentation",
      "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/582/attachment/original/FY2025%20results%20-%20presentation.pdf"
     ]
    ],
    "prof": 410,
    "profPy": 471,
    "revPy": 3149,
    "orgPy": -3.4
   },
   "Q1 2026": {
    "report": "Q1 2026 trading update",
    "date": "2026-05-01",
    "rev": 772,
    "org": 2.8,
    "mgnLbl": "EBITA margin",
    "mgn": 14.2,
    "mgnChg": 60,
    "extra": [
     {
      "l": "EBITA",
      "v": "109.7",
      "c": "105.7 in Q1 2025"
     },
     {
      "l": "Buyback in Q1",
      "v": "31.3",
      "c": "994,341 shares"
     }
    ],
    "note": "Return to organic growth; positive organic growth and better EBITA margin in all three segments. Broen (Denmark) divested on 12 March 2026.",
    "guide": "Further improvement in organic growth and EBITA margin expected in 2026.",
    "src": [
     [
      "Q1 2026 press release",
      "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/601/attachment/original/Q1%202026%20results.pdf"
     ]
    ],
    "prof": 109.7,
    "profPy": 105.7,
    "revPy": 778.3,
    "orgPy": -3.3
   },
   "Q2 2026": {
    "report": "H1 2026 results (6 months)",
    "date": "2026-07-23",
    "rev": 1560,
    "revChg": 0.2,
    "org": 5.0,
    "mgnLbl": "EBITA margin",
    "mgn": 14.4,
    "mgnChg": 90,
    "extra": [
     {
      "l": "EBITA",
      "v": "225",
      "c": "210 in H1 2025"
     },
     {
      "l": "Portfolio effect",
      "v": "+135 / −178",
      "c": "acquisitions / divestments; FX −21"
     }
    ],
    "note": "All three segments improved. Positive end-market dynamics in data centres, aerospace, power generation, defence and semicon; stable automotive and residential building.",
    "guide": "Confident of a full year with improved organic growth and EBITA margin versus 2025.",
    "src": [
     [
      "H1 2026 press release",
      "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/609/attachment/original/Aalberts%20press%20release%201H2026.pdf"
     ],
     [
      "H1 2026 presentation",
      "https://s3.eu-west-1.amazonaws.com/aalberts-website/media/App/Models/Download/000/000/610/attachment/original/Aalberts%20-%20first%20half-year%20results%202026%20presentation.pdf"
     ]
    ],
    "prof": 225,
    "profPy": 210,
    "revPy": 1557,
    "seg": [
     {
      "n": "Building",
      "org": 2.9,
      "mgn": 13.5,
      "mgnPy": 12.9,
      "note": "Organic growth as quoted on the call (may refer to Q2)"
     },
     {
      "n": "Industry",
      "rev": 489,
      "prof": 90.9,
      "profPy": 91.8,
      "mgn": 18.6,
      "mgnPy": 16.8
     },
     {
      "n": "Semicon",
      "rev": 334,
      "org": 9.2,
      "prof": 47.5,
      "profPy": 25.3,
      "mgn": 14.2,
      "mgnPy": 11.5
     }
    ],
    "derived": [
     "seg.Industry.rev",
     "seg.Industry.profPy",
     "seg.Semicon.rev",
     "seg.Semicon.profPy"
    ],
    "segNote": "Semicon EBITA +88% with the margin up 270 bps to 14.2%; Q2 organic growth ~16% and a high order book. Industry margin +180 bps to 18.6% with EBITA stable after divestments. Building margin 13.5% (12.9%). Segment split from press coverage of the release; check the presentation.",
    "orgPy": -3.2
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
    "orgPy": -1.9
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
      "FY 2025 press release",
      "https://www.eqs-news.com/news/ad-hoc/belimo-accelerated-growth-in-2025/295f5591-80dd-4287-b3ff-f149c4acf182_en"
     ],
     [
      "FY 2025 presentation",
      "https://www.belimo.com/mam/corporate-communications/investor-relations/Reports%20and%20Presentations/2026_02_Presentation_of_Financial_Results__2025_.pdf"
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
     "c": "+23.3%"
    },
    "cash": {
     "l": "Free cash flow (excl. term deposits)",
     "v": "38.7",
     "c": "−26.7%; capex 45.4"
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
      "org": 48.3,
      "revPy": 284.1,
      "orgPy": 23.3
     },
     {
      "n": "Damper actuators",
      "rev": 254,
      "org": 7.6,
      "revPy": 251.8,
      "orgPy": 18.1
     },
     {
      "n": "Sensors and meters",
      "rev": 33,
      "org": 39.2,
      "revPy": 25.6,
      "orgPy": 16.3
     }
    ],
    "guide": "EBIT margin above 20% in 2026; H2 growth faces a higher base and annualised price increases.",
    "src": [
     [
      "H1 2026 report",
      "https://report.belimo.com/HY26/en/management-report"
     ],
     [
      "H1 2026 press release",
      "https://www.eqs-news.com/news/ad-hoc/belimo-accelerated-sales-growth-in-the-first-half-of-2026/01f2af93-fa3e-4872-b3f8-514ab22ba0e0_en"
     ]
    ],
    "revPy": 561.5,
    "prof": 152.5,
    "profPy": 128.1,
    "derived": [],
    "geo": [
     {
      "n": "Americas",
      "rev": 341.3,
      "org": 35.1,
      "revPy": 280.0,
      "orgPy": 30.1
     },
     {
      "n": "EMEA",
      "rev": 240.3,
      "org": 14.1,
      "revPy": 216.3,
      "orgPy": 9.9
     },
     {
      "n": "Asia Pacific",
      "rev": 94.8,
      "org": 58.0,
      "revPy": 65.3,
      "orgPy": 21.3
     }
    ],
    "segNote": "Control valves (Energy Valve in data-centre cooling) +48% in local currencies, now ~58% of sales; sensors and meters +39%; damper actuators +7.6% helped by fire and smoke applications. By region Asia Pacific (+58%) and the Americas (+35%) led, EMEA +14%.",
    "segLbl": "By product line",
    "orgPy": 20.6
   }
  },
  "xylem": {
   "Q1 2025": {
    "report": "Q1 2025 results",
    "rev": 2069,
    "revChg": 2,
    "org": 3,
    "mgnLbl": "Adj. EBITDA margin",
    "mgn": 20.4,
    "mgnChg": 120,
    "src": [
     [
      "Q1 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/1524472/000152447225000019/xyl04292025ex991.htm"
     ]
    ],
    "prof": 422.0,
    "derived": [
     "prof"
    ]
   },
   "Q2 2025": {
    "report": "Q2 2025 results",
    "rev": 2300,
    "revChg": 6,
    "org": 6,
    "mgnLbl": "Adj. EBITDA margin",
    "mgn": 21.8,
    "mgnChg": 100,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.26",
     "c": "+16%"
    },
    "note": "Revenue rounded to USD 2.3bn in the release summary.",
    "src": [
     [
      "Q2 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/1524472/000152447225000035/xyl07312025ex991.htm"
     ]
    ],
    "prof": 501.0,
    "derived": [
     "prof"
    ]
   },
   "Q3 2025": {
    "report": "Q3 2025 results",
    "rev": 2269,
    "revChg": 8,
    "org": 7,
    "mgnLbl": "Adj. EBITDA margin",
    "mgn": 23.2,
    "mgnChg": 200,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.37",
     "c": "+23%"
    },
    "derived": [
     "rev",
     "eps",
     "prof"
    ],
    "src": [
     [
      "Q3 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/1524472/000152447225000043/xyl10282025ex991.htm"
     ]
    ],
    "prof": 526.0
   },
   "Q4 2025": {
    "report": "Q4 2025 results",
    "date": "2026-02-10",
    "rev": 2400,
    "revChg": 6,
    "org": 4,
    "mgnLbl": "Adj. EBITDA margin",
    "mgn": 23.2,
    "mgnChg": 220,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.42",
     "c": "+20%"
    },
    "extra": [
     {
      "l": "FY 2025 revenue",
      "v": "9,000",
      "c": "+6%; organic +5%"
     },
     {
      "l": "FY 2025 adj. EPS",
      "v": "$5.08",
      "c": "+19%; GAAP $3.92"
     }
    ],
    "note": "Record full-year revenue, adjusted EBITDA margin and adjusted EPS. Quarter revenue rounded to USD 2.4bn.",
    "src": [
     [
      "Q4 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/1524472/000152447226000008/xyl02102026ex991.htm"
     ]
    ],
    "prof": 557.0,
    "derived": [
     "prof"
    ]
   },
   "Q1 2026": {
    "report": "Q1 2026 results",
    "date": "2026-04-28",
    "rev": 2125,
    "revChg": 2.7,
    "org": -0.4,
    "mgnLbl": "Adj. EBITDA margin",
    "mgn": 20.6,
    "mgnChg": 20,
    "eps": {
     "l": "GAAP EPS",
     "v": "$0.79",
     "c": "+14%; adjusted +9%"
    },
    "src": [
     [
      "Q1 2026 earnings release",
      "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000065/xyl04282026ex991.htm"
     ],
     [
      "Q1 2026 slides",
      "https://xyleminc.gcs-web.com/static-files/b7ba322b-6ff8-450f-bfa7-2df9d270fcf1"
     ]
    ],
    "prof": 438.0,
    "derived": [
     "prof"
    ],
    "orgPy": 3
   },
   "Q2 2026": {
    "report": "Q2 2026 results",
    "date": "2026-07-28",
    "rev": 2300,
    "revChg": 2,
    "org": 1,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.46",
     "c": "+16%; GAAP $1.11"
    },
    "orders": {
     "l": "Orders",
     "v": "3,100",
     "c": "+42%; organic +41%"
    },
    "guide": "FY 2026: revenue ~USD 9.2bn, organic +2–3%, adj. EBITDA margin 23.1–23.5%, adj. EPS $5.55–5.70.",
    "src": [
     [
      "Q2 2026 earnings release",
      "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000108/xyl07282026ex991.htm"
     ]
    ]
   },
   "Q3 2026": {
    "report": "Q3 2026 results",
    "date": "2026-10-27",
    "rev": 2201,
    "revChg": -3.0,
    "org": 0,
    "mgnLbl": "Adj. EBITDA margin",
    "mgn": 23.9,
    "mgnChg": 70,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.44",
     "c": "+5%; GAAP $1.25"
    },
    "orders": {
     "l": "Orders",
     "v": "2,331",
     "c": "+6.9%; organic +9.9%; backlog record USD 5.5bn"
    },
    "cash": {
     "l": "Free cash flow, year to date",
     "v": "444",
     "c": "slightly below 2025"
    },
    "extra": [
     {
      "l": "Net debt / adj. EBITDA",
      "v": "1.1x"
     }
    ],
    "seg": [
     {
      "n": "Water Infrastructure",
      "rev": 645,
      "chg": -2,
      "org": -1,
      "mgn": 26.2,
      "mgnPy": 24.4,
      "note": "Orders 675 (−1%)"
     },
     {
      "n": "Applied Water",
      "rev": 489,
      "chg": 7,
      "org": 9,
      "note": "Orders 502 (+13%); data-centre orders more than tripled"
     },
     {
      "n": "Measurement & Control Solutions",
      "rev": 436,
      "chg": -16,
      "org": -5,
      "note": "Orders 504 (+13%, +30% organic)"
     },
     {
      "n": "Water Solutions & Services",
      "rev": 631,
      "chg": 0,
      "org": -2,
      "note": "Orders 650 (+7%); margin −140 bps"
     }
    ],
    "guide": "FY 2026 cut: revenue ~USD 8.95bn (−1%), organic ~flat, adj. EPS $5.40–5.45 ($5.55–5.70), FCF margin ~10.2%.",
    "src": [
     [
      "Q3 2026 earnings release",
      "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000146/xyl10272026ex991.htm"
     ],
     [
      "Q3 2026 10-Q",
      "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000148/xyl-20260930.htm"
     ]
    ],
    "revPy": 2268,
    "prof": 527,
    "profPy": 526.2,
    "derived": [
     "profPy",
     "seg.Water Infrastructure.mgnPy"
    ],
    "segNote": "Orders were strong in Applied Water and Measurement & Control (+13% each; MCS +30% organic on water and gas metering), but MCS revenue fell 16% (−5% organic) on divestitures and weak electric metering. Water Infrastructure revenue −2% with margin +180 bps to 26.2%. Water Solutions & Services flat as large projects ramp slower.",
    "orgPy": 7
   }
  },
  "ecolab": {
   "Q1 2025": {
    "report": "Q1 2025 results",
    "org": 3,
    "mgnLbl": "Organic operating margin",
    "mgn": 16.0,
    "mgnChg": 190,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.50",
     "c": "+12%; GAAP $1.41"
    },
    "src": [
     [
      "Q1 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/31462/000155837025005743/ecl-20250429xex99d1.htm"
     ]
    ]
   },
   "Q2 2025": {
    "report": "Q2 2025 results",
    "org": 3,
    "mgnLbl": "Organic operating margin",
    "mgn": 18.3,
    "mgnChg": 170,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.89",
     "c": "+13%; GAAP $1.84"
    },
    "src": [
     [
      "Q2 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/31462/000155837025009695/ecl-20250729xex99d1.htm"
     ]
    ]
   },
   "Q3 2025": {
    "report": "Q3 2025 results",
    "rev": 4154,
    "revChg": 4,
    "org": 3,
    "mgnLbl": "Organic operating margin",
    "mgn": 18.7,
    "mgnChg": 110,
    "eps": {
     "l": "Adj. EPS",
     "v": "$2.07",
     "c": "+13%; GAAP $2.05"
    },
    "note": "Value pricing accelerated from 2% to 3%; volume +1%.",
    "derived": [
     "rev"
    ],
    "src": [
     [
      "Q3 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/31462/000110465925102859/ecl-20251028xex99d1.htm"
     ]
    ]
   },
   "Q4 2025": {
    "report": "Q4 2025 results",
    "date": "2026-02-10",
    "revChg": 5,
    "org": 3,
    "eps": {
     "l": "Adj. EPS",
     "v": "$2.07",
     "c": "FY $7.53 less Q1–Q3"
    },
    "extra": [
     {
      "l": "Organic operating income",
      "v": "+12%"
     },
     {
      "l": "FY 2025 sales",
      "v": "16,100",
      "c": "+2%; organic +3%"
     },
     {
      "l": "FY 2025 adj. EPS",
      "v": "$7.53",
      "c": "+13%; GAAP $7.28"
     },
     {
      "l": "FY 2025 operating cash flow",
      "v": "3,000",
      "c": "2,800 in 2024"
     }
    ],
    "derived": [
     "eps"
    ],
    "guide": "2026 adj. EPS growth of 12–15% (before the CoolIT deal).",
    "src": [
     [
      "Q4 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/31462/000110465926012358/ecl-20260210xex99d1.htm"
     ],
     [
      "10-K 2025",
      "https://www.sec.gov/Archives/edgar/data/31462/000110465926018357/ecl-20251231x10k.htm"
     ]
    ]
   },
   "Q1 2026": {
    "report": "Q1 2026 results",
    "date": "2026-04-28",
    "org": 4,
    "mgnLbl": "Adj. operating margin",
    "mgn": 16.7,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.70",
     "c": "+13%"
    },
    "src": [
     [
      "Q1 2026 earnings release",
      "https://www.sec.gov/Archives/edgar/data/0000031462/000110465926049822/ecl-20260428xex99d1.htm"
     ]
    ]
   },
   "Q2 2026": {
    "report": "Q2 2026 results",
    "date": "2026-07-28",
    "revChg": 10,
    "org": 5,
    "mgnLbl": "Organic operating margin",
    "mgn": 18.8,
    "eps": {
     "l": "Adj. EPS",
     "v": "$2.09",
     "c": "+11%; GAAP $1.90"
    },
    "extra": [
     {
      "l": "Reported operating margin",
      "v": "17.2%"
     }
    ],
    "guide": "2026 adj. EPS raised to $8.05–8.25 (+7–10%).",
    "src": [
     [
      "Q2 2026 earnings release",
      "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026049933/ecl_ex99x1.htm"
     ]
    ]
   },
   "Q3 2026": {
    "report": "Q3 2026 results",
    "date": "2026-10-27",
    "rev": 4694,
    "revChg": 13,
    "org": 7,
    "mgnLbl": "Organic operating margin",
    "mgn": 19.6,
    "mgnChg": 70,
    "eps": {
     "l": "Adj. EPS",
     "v": "$2.18",
     "c": "+5% (~10 pts CoolIT drag); GAAP $1.95"
    },
    "extra": [
     {
      "l": "Operating income",
      "v": "810.5",
      "c": "+7%; adjusted +14%"
     },
     {
      "l": "Reported operating margin",
      "v": "17.3%"
     },
     {
      "l": "Net interest expense",
      "v": "+70",
      "c": "deal financing"
     }
    ],
    "seg": [
     {
      "n": "Global Water",
      "rev": 2480,
      "chg": 20,
      "org": 9,
      "note": "High-Tech +63% organic; ~11 pts from Ovivo Electronics and CoolIT"
     },
     {
      "n": "Global Institutional & Specialty",
      "rev": 1640,
      "chg": 3,
      "org": 3
     },
     {
      "n": "Global Pest Elimination",
      "rev": 363.5,
      "chg": 9
     },
     {
      "n": "Global Life Sciences",
      "rev": 215,
      "org": 17,
      "prof": 50.2,
      "profPy": 33.8,
      "mgn": 23.3,
      "mgnPy": 18.3,
      "note": "Operating income +49%"
     },
     {
      "n": "Ecolab Digital",
      "rev": 129,
      "chg": 34
     }
    ],
    "guide": "2026 adj. EPS $8.10–8.20 (+8–9%); Q4 organic growth 6–7%; path to 20% organic operating margin in 2027.",
    "src": [
     [
      "Q3 2026 earnings release",
      "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026067418/ecl_ex99x1.htm"
     ],
     [
      "Q3 2026 10-Q",
      "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026068208/ecl-20260930.htm"
     ]
    ],
    "derived": [
     "seg.Global Life Sciences.rev",
     "seg.Global Life Sciences.mgnPy"
    ],
    "segNote": "Global Water +20% (9% organic), driven by High-Tech (+63% organic) and the Ovivo/CoolIT deals. Life Sciences +17% organic with operating income +49% and margin 23.3% (+500 bps). Institutional & Specialty +3%, Pest +9%. Segment sales at fixed currency.",
    "orgPy": 3
   }
  },
  "watts": {
   "Q1 2025": {
    "report": "Q1 2025 results",
    "rev": 559,
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
     "rev",
     "mgn",
     "eps"
    ],
    "note": "Derived from the Q1 2026 release's growth rates.",
    "src": [
     [
      "Watts investor relations",
      "https://investors.watts.com/"
     ]
    ]
   },
   "Q2 2025": {
    "report": "Q2 2025 results",
    "rev": 641,
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
      "rev": 499,
      "chg": 11,
      "org": 10,
      "note": "Price, volume and pull-forward demand"
     }
    ],
    "derived": [
     "rev",
     "mgn",
     "eps"
    ],
    "src": [
     [
      "Q2 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/795403/000155837025010556/wts-20250806xex99d1.htm"
     ]
    ]
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
      "rev": 464,
      "org": 13
     },
     {
      "n": "Europe",
      "rev": 112,
      "chg": 4,
      "org": -2
     },
     {
      "n": "APMEA",
      "org": 0
     }
    ],
    "guide": "Full-year 2025 sales and margin outlook raised.",
    "src": [
     [
      "Q3 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/795403/000110465925107038/wts-20251105xex99d1.htm"
     ]
    ],
    "segNote": "Americas +13% organic carried the group; Europe −2% and APMEA flat.",
    "prof": 113.2,
    "derived": [
     "prof"
    ]
   },
   "Q4 2025": {
    "report": "Q4 2025 results",
    "date": "2026-02-11",
    "rev": 625,
    "revChg": 16,
    "org": 8,
    "mgnLbl": "Adj. operating margin",
    "mgn": 19.0,
    "mgnChg": 220,
    "eps": {
     "l": "Adj. EPS",
     "v": "$2.62",
     "c": "+28%; GAAP $2.50"
    },
    "cash": {
     "l": "FY 2025 free cash flow",
     "v": "356.3",
     "c": "+7%"
    },
    "extra": [
     {
      "l": "FY 2025 sales",
      "v": "2,440",
      "c": "+8%; organic +5%"
     },
     {
      "l": "FY 2025 adj. operating margin",
      "v": "19.6%",
      "c": "+190 bps"
     },
     {
      "l": "FY 2025 adj. EPS",
      "v": "$10.58",
      "c": "+19%"
     }
    ],
    "note": "Acquisitions (~USD 29m in the quarter): Haws, Superior Boiler and Saudi Cast completed.",
    "guide": "2026: sales +8–12%, organic +2–6%.",
    "src": [
     [
      "Q4 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/795403/000110465926013437/wts-20260211xex99d1.htm"
     ]
    ],
    "prof": 118.8,
    "derived": [
     "prof"
    ]
   },
   "Q1 2026": {
    "report": "Q1 2026 results",
    "date": "2026-05-06",
    "rev": 677,
    "revChg": 21,
    "org": 12,
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
      "Q1 2026 earnings release",
      "https://www.sec.gov/Archives/edgar/data/0000795403/000110465926056325/wts-20260506xex99d1.htm"
     ],
     [
      "Q1 2026 slides",
      "https://s29.q4cdn.com/117128878/files/doc_financials/2026/q1/Watts-Water-Technologies-UPDATED-Q1-26-Earnings-Deck-050626-Earnings-Presentation-for-May-7.pdf"
     ]
    ],
    "prof": 136.1,
    "derived": [
     "prof"
    ],
    "orgPy": null
   },
   "Q2 2026": {
    "report": "Q2 2026 results",
    "date": "2026-08-05",
    "rev": 763,
    "revChg": 19,
    "org": 12,
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
      "rev": 585,
      "chg": 17,
      "org": 12,
      "mgn": 25.7,
      "mgnPy": 27.2
     },
     {
      "n": "Europe",
      "rev": 125,
      "chg": 12,
      "org": 9,
      "mgn": 13.3,
      "mgnPy": 11.7
     },
     {
      "n": "APMEA",
      "rev": 54,
      "chg": 57,
      "org": 31,
      "mgn": 19.9,
      "mgnPy": 18.9
     }
    ],
    "guide": "2026 raised: organic +8–11%, reported +14–17%, adj. operating margin +20 to +80 bps.",
    "src": [
     [
      "Q2 2026 earnings release",
      "https://www.sec.gov/Archives/edgar/data/0000795403/000110465926091165/wts-20260805xex99d1.htm"
     ],
     [
      "Q2 2026 slides",
      "https://s29.q4cdn.com/117128878/files/doc_financials/2026/q2/Watts-Water-Technologies-Q2-26-Earnings-Deck_final-Presentation-for-August-6-2026.pdf"
     ]
    ],
    "revPy": 641,
    "prof": 160,
    "profPy": 139.1,
    "derived": [
     "revPy",
     "profPy",
     "seg.Americas.mgnPy",
     "seg.Europe.mgnPy",
     "seg.APMEA.mgnPy"
    ],
    "segLbl": "Segments (= regions); margin = segment operating margin",
    "segNote": "APMEA +31% organic on data centres in China; Americas +12% organic on price and data centres, but margin −150 bps on acquisition dilution, tariffs and a tough comparison; Europe +9% organic with margin +160 bps to 13.3%."
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
   "Q1 2025": {
    "report": "Fiscal Q2 2025 (Jan–Mar 2025)",
    "date": "2025-05-07",
    "rev": 4432,
    "revChg": 1,
    "org": 2,
    "orgLbl": "Underlying growth",
    "mgnLbl": "Adj. segment EBITA margin",
    "mgn": 28.0,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.48",
     "c": "+9%"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "738",
     "c": "+14%"
    },
    "src": [
     [
      "Fiscal Q2 2025 release",
      "https://ir.emerson.com/_assets/_10ad2d822f6d4902fd020ca535f9805e/emerson/news/2025-05-07_Emerson_Reports_Second_Quarter_2025_Results_8.pdf"
     ]
    ]
   },
   "Q2 2025": {
    "report": "Fiscal Q3 2025 (Apr–Jun 2025)",
    "date": "2025-08-06",
    "rev": 4553,
    "revChg": 4,
    "org": 3,
    "orgLbl": "Underlying growth",
    "mgnLbl": "Adj. segment EBITA margin",
    "mgn": 27.1,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.52",
     "c": "+6%"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "970",
     "c": "−1%; margin 21.3%"
    },
    "guide": "FY 2025 adj. EPS ~$6.00, free cash flow ~USD 3.2bn.",
    "src": [
     [
      "Fiscal Q3 2025 release",
      "https://ir.emerson.com/_assets/_83c3777b7a2a1deaf1f9f1ccca620065/emerson/news/2025-08-06_Emerson_Reports_Third_Quarter_2025_Results_612.pdf"
     ]
    ],
    "prof": 1234,
    "derived": [
     "prof"
    ]
   },
   "Q3 2025": {
    "report": "Fiscal Q4 2025 (Jul–Sep 2025)",
    "date": "2025-11-05",
    "rev": 4855,
    "revChg": 5,
    "org": 4,
    "orgLbl": "Underlying growth",
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.62",
     "c": "top of guidance"
    },
    "cash": {
     "l": "Free cash flow",
     "v": "843",
     "c": "−7%"
    },
    "extra": [
     {
      "l": "FY 2025 net sales",
      "v": "18,016",
      "c": "+3%; underlying +3%"
     },
     {
      "l": "FY 2025 adj. EPS",
      "v": "$6.00",
      "c": "+9%"
     },
     {
      "l": "FY 2025 free cash flow",
      "v": "3,245",
      "c": "+12%"
     }
    ],
    "guide": "FY 2026: adj. EPS $6.35–6.55, FCF USD 3.5–3.6bn, net sales ~+5.5%.",
    "src": [
     [
      "Fiscal Q4 / FY 2025 release",
      "https://ir.emerson.com/_assets/_80fc1c2bd9b6b4b0e1f3c778904be7d7/emerson/news/2025-11-05_Emerson_Reports_Fourth_Quarter_and_Full_Year_2025__617.pdf"
     ]
    ]
   },
   "Q4 2025": {
    "report": "Fiscal Q1 2026 (Oct–Dec 2025)",
    "date": "2026-02-03",
    "rev": 4346,
    "revChg": 4,
    "org": 2,
    "orgLbl": "Underlying growth",
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.46",
     "c": "+6%; GAAP $1.07"
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
      "Fiscal Q1 2026 release",
      "https://ir.emerson.com/_assets/_0dfcd1db8f1e0a2d66af142d1b1193f5/emerson/news/2026-02-03_Emerson_Reports_First_Quarter_2026_Results_623.pdf"
     ]
    ]
   },
   "Q1 2026": {
    "report": "Fiscal Q2 2026 (Jan–Mar 2026)",
    "date": "2026-05-05",
    "org": 0.5,
    "orgLbl": "Underlying growth",
    "mgnLbl": "Adj. segment EBITA margin",
    "mgn": 27.6,
    "mgnChg": -40,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.54",
     "c": "+4%; GAAP $1.10"
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
      "Fiscal Q2 2026 release",
      "https://ir.emerson.com/_assets/_f6e5597605579b03df2f9ddcfe39bf0a/emerson/news/2026-05-05_Emerson_Reports_Second_Quarter_2026_Results_629.pdf"
     ]
    ]
   },
   "Q2 2026": {
    "report": "Fiscal Q3 2026 (Apr–Jun 2026)",
    "date": "2026-08-04",
    "rev": 4873,
    "revChg": 7,
    "org": 6,
    "orgLbl": "Underlying growth",
    "mgnLbl": "Adj. segment EBITA margin",
    "mgn": 28.5,
    "mgnChg": 140,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.71",
     "c": "+13%, above guidance"
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
      "rev": 1640,
      "chg": 11,
      "org": 10
     },
     {
      "n": "· Test & Measurement",
      "org": 23,
      "sub": true
     },
     {
      "n": "· Ovation (power)",
      "org": 23,
      "sub": true
     },
     {
      "n": "Intelligent Devices",
      "rev": 2680,
      "chg": 6,
      "org": 5
     },
     {
      "n": "Safety & Productivity",
      "rev": 553,
      "org": 2,
      "mgn": 21.2
     }
    ],
    "guide": "FY 2026 raised: net sales ~+5%, underlying ~+3.5%, adj. EPS ~$6.55, FCF ~USD 3.6bn, adj. segment EBITA margin ~28%.",
    "src": [
     [
      "Fiscal Q3 2026 release",
      "https://ir.emerson.com/_assets/_c0388696e3a69f59a3ee43598053c60c/emerson/news/2026-08-04_Emerson_Reports_Third_Quarter_2026_Results_Raises__642.pdf"
     ],
     [
      "Fiscal Q3 2026 presentation",
      "https://ir.emerson.com/_assets/_39b9c4b55c1314921bb642cd27956a1b/emerson/db/938/10242/presentation/Emerson+2026+Q3+Earnings+Presentation.pdf"
     ]
    ],
    "revPy": 4553,
    "prof": 1387,
    "profPy": 1232,
    "geo": [
     {
      "n": "Americas",
      "org": 8,
      "note": "US ~+10%"
     },
     {
      "n": "Europe",
      "org": -1
     },
     {
      "n": "Asia, Middle East & Africa",
      "org": 8,
      "note": "China ~−3%"
     }
    ],
    "derived": [
     "seg.Safety & Productivity.rev"
    ],
    "segNote": "Software & Systems +10% underlying, led by Test & Measurement and Ovation (+23% each) on semiconductor and power demand. Intelligent Devices +5%; Safety & Productivity +2% with the lowest margin (21.2%). Americas and AMEA ~+8%, Europe −1%."
   },
   "Q3 2026": {
    "report": "Fiscal Q4 2026 (Jul–Sep 2026) — due 4 Nov 2026",
    "pending": true,
    "note": "Guidance for the quarter: adj. segment EBITA margin ~28.5%.",
    "src": [
     [
      "Emerson investor relations",
      "https://ir.emerson.com/"
     ]
    ]
   }
  },
  "gf": {
   "Q2 2025": {
    "report": "H1 2025 results (6 months)",
    "rev": 2255,
    "eps": {
     "l": "Net profit to shareholders",
     "v": "160",
     "c": "incl. book gain on Machining Solutions sale"
    },
    "note": "Group figures still include GF Casting Solutions; GF Machining Solutions divested effective 30 June 2025.",
    "src": [
     [
      "Reports and presentations",
      "https://www.georgfischer.com/en/investors/reports-and-presentations.html"
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
      "Annual report 2025",
      "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/annual-report/annual-report-2025/en/annual-report-2025-full-version-en.pdf"
     ],
     [
      "FY 2025 presentation",
      "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/annual-report/annual-report-2025/en/presentation-analyst-and-media-conference-2026-en.pdf"
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
      "H1 2026 ad hoc announcement",
      "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/mid-year-reports/mid-year-report-2026/en/ad-hoc-announcement-en-mid-year-report-2026.pdf"
     ],
     [
      "H1 2026 presentation",
      "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/mid-year-reports/mid-year-report-2026/en/mid-year-report-2026-presentation-en.pdf"
     ]
    ],
    "revPy": 2255,
    "segNote": "Industry & Infrastructure revenue +9% with comparable EBITDA up to CHF 144m, though margin eased to 14.4%. Building +3.3% organic (−2% in CHF), margin 12.6% (12.5%). Group revenue −25% after the casting exit."
   }
  },
  "pentair": {
   "Q1 2025": {
    "report": "Q1 2025 results",
    "revChg": -1,
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
      "Q1 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/77360/000007736025000015/q12025pressrelease.htm"
     ]
    ]
   },
   "Q2 2025": {
    "report": "Q2 2025 results",
    "rev": 1124,
    "revChg": 2,
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
     "rev",
     "mgn"
    ],
    "src": [
     [
      "Q2 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/77360/000007736025000035/q22025pressrelease.htm"
     ]
    ]
   },
   "Q3 2025": {
    "report": "Q3 2025 results",
    "rev": 1022.0,
    "revPy": 993.4,
    "revChg": 2.9,
    "mgnLbl": "Adj. return on sales",
    "mgn": 25.7,
    "prof": 263,
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
      "rev": 252,
      "prof": 59.7,
      "mgn": 23.7
     },
     {
      "n": "Water Solutions",
      "rev": 418,
      "prof": 104.3,
      "mgn": 25.0
     },
     {
      "n": "Pool",
      "rev": 355,
      "prof": 116.1,
      "mgn": 32.7
     }
    ],
    "derived": [
     "mgn",
     "prof",
     "seg.Flow.rev",
     "seg.Water Solutions.rev",
     "seg.Water Solutions.prof",
     "seg.Pool.rev",
     "seg.Pool.prof",
     "seg.Pool.mgn"
    ],
    "segNote": "Prior-year base derived from the Q3 2026 release's growth rates; Pool was the most profitable segment at ~33% return on sales.",
    "src": [
     [
      "Q3 2025 earnings release",
      "https://www.sec.gov/Archives/edgar/data/77360/000007736025000044/q32025pressrelease.htm"
     ]
    ]
   },
   "Q4 2025": {
    "report": "Q4 2025 results",
    "rev": 1021,
    "org": 4,
    "orgLbl": "Core sales growth",
    "mgnLbl": "Adj. return on sales",
    "mgn": 24.7,
    "eps": {
     "l": "Adj. EPS",
     "v": "$1.18",
     "c": "+9%; GAAP $0.98"
    },
    "cash": {
     "l": "FY 2025 free cash flow",
     "v": "748",
     "c": "+55 vs 2024"
    },
    "note": "FY 2025: sales USD 4.2bn (+2%), adj. EPS $4.92 (+14%), GAAP EPS $3.93. Reported return on sales 20.1% in Q4.",
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
    "org": 2,
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
      "Q1 2026 earnings release",
      "https://www.sec.gov/Archives/edgar/data/0000077360/000007736026000023/q12026pressrelease.htm"
     ]
    ]
   },
   "Q2 2026": {
    "report": "Q2 2026 results",
    "date": "2026-07-28",
    "rev": 933,
    "revChg": -17,
    "org": -17,
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
      "n": "Pool",
      "chg": -42,
      "note": "Larger-than-expected inventory destock in the Pool channel"
     },
     {
      "n": "Flow and Water Solutions",
      "note": "Record profitability (call summary)"
     }
    ],
    "segNote": "Pool sales −42% as channel partners cut inventory; Flow and Water Solutions held up with record profitability.",
    "guide": "2026 cut in July: adj. EPS $4.60–4.80 (from $5.30–5.40); sales −4% to −7%; adj. operating income −5% to −9%.",
    "src": [
     [
      "Q2 2026 earnings release",
      "https://www.sec.gov/Archives/edgar/data/0000077360/000007736026000042/q22026pressrelease.htm"
     ],
     [
      "Q2 2026 slides",
      "https://investors.pentair.com/static-files/c02242e3-5891-418c-81e9-62a4da417ea3"
     ]
    ]
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
      "mgn": 24.7,
      "mgnPy": 32.7,
      "note": "Channel destock now completed"
     }
    ],
    "segLbl": "By reporting segment; margin = segment return on sales",
    "derived": [
     "mgnPy",
     "profPy",
     "seg.Water Solutions.profPy",
     "seg.Pool.profPy",
     "seg.Pool.mgn",
     "seg.Pool.mgnPy"
    ],
    "segNote": "Flow (+4%, core +1%) and Water Solutions (+1%) both lifted segment income ~15% with return on sales up 250 and 370 bps. Pool −18% with income −38% as the channel destock ended; management targets ~30% Pool return on sales in 2027.",
    "guide": "2026 adj. EPS ~$4.70 midpoint reaffirmed; sales ~−3% reported including Taco; GAAP EPS ~$3.76.",
    "src": [
     [
      "Q3 2026 earnings release",
      "https://www.sec.gov/Archives/edgar/data/0000077360/000007736026000055/q32026pressrelease.htm"
     ],
     [
      "Q3 2026 10-Q",
      "https://www.sec.gov/Archives/edgar/data/0000077360/000007736026000058/pnr-20260930.htm"
     ]
    ]
   }
  }
 },
 "noReport": {
  "belimo": "Belimo publishes half-year and full-year results only (no Q1 or Q3 figures).",
  "gf": "Georg Fischer publishes half-year and full-year results only (no Q1 or Q3 figures)."
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
   "src": [
    [
     "Q3 2026 earnings release",
     "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000146/xyl10272026ex991.htm"
    ],
    [
     "Divestitures and new structure",
     "https://www.rttnews.com/3703532/xylem-announces-divestitures-new-3-segment-structure.aspx"
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
     "Q3 2026 earnings release",
     "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026067418/ecl_ex99x1.htm"
    ],
    [
     "Q3 2026 10-Q",
     "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026068208/ecl-20260930.htm"
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
   "period": "Q2 2026",
   "title": "Fiscal Q3 2026 results, 4 Aug 2026 (fiscal Q4 due 4 Nov)",
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
     "Fiscal Q3 2026 release",
     "https://ir.emerson.com/_assets/_c0388696e3a69f59a3ee43598053c60c/emerson/news/2026-08-04_Emerson_Reports_Third_Quarter_2026_Results_Raises__642.pdf"
    ],
    [
     "Q3 call highlights",
     "https://finance.yahoo.com/markets/stocks/articles/emerson-electric-co-emr-q3-050620952.html"
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
    "GF Machining Solutions divested effective 30 June 2025; Uponor integration continues."
   ],
   "other": [
    "Net debt CHF 1,684m at end-2025 after the transformation; FY 2025 free cash flow before M&A only CHF 21m.",
    "New strategy outlines a CHF 4.2bn sales target (press coverage)."
   ],
   "src": [
    [
     "H1 2026 ad hoc announcement",
     "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/mid-year-reports/mid-year-report-2026/en/ad-hoc-announcement-en-mid-year-report-2026.pdf"
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
   "p": "Q4 2025",
   "type": "Results release",
   "title": "FY 2025 results press release",
   "url": "https://www.imiplc.com/media/zoonx1ed/imi-plc-full-year-results-2025-press-release.pdf"
  },
  {
   "co": "imi",
   "p": "Q4 2025",
   "type": "Presentation",
   "title": "FY 2025 results presentation",
   "url": "https://www.imiplc.com/media/qvugs2u0/imi-plc-full-year-results-2025-presentation.pdf"
  },
  {
   "co": "imi",
   "p": "Q4 2025",
   "type": "Annual report",
   "title": "Annual report 2025",
   "url": "https://www.imiplc.com/media/1i2ddtki/imi_ar_2025.pdf"
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
   "p": "Q2 2026",
   "type": "Transcript",
   "title": "H1 2026 results call transcript",
   "url": "https://www.imiplc.com/media/tqcfj3qx/imi-plc-half-year-results-2026-transcript.pdf"
  },
  {
   "co": "imi",
   "p": "Q3 2026",
   "type": "Trading update",
   "title": "Q3 2026 trading update (web)",
   "url": "https://www.investegate.co.uk/announcement/rns/imi--imi/trading-update/9846878"
  },
  {
   "co": "imi",
   "p": "Q3 2026",
   "type": "Trading update",
   "title": "Q3 2026 trading update (PDF)",
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
   "type": "Presentation",
   "title": "Financial results 2025 presentation",
   "url": "https://www.belimo.com/mam/corporate-communications/investor-relations/Reports%20and%20Presentations/2026_02_Presentation_of_Financial_Results__2025_.pdf"
  },
  {
   "co": "belimo",
   "p": "Q4 2025",
   "type": "Annual report",
   "title": "Annual report 2025 (online)",
   "url": "https://report.belimo.com/ar25/en/management-report"
  },
  {
   "co": "belimo",
   "p": "Q4 2025",
   "type": "Results release",
   "title": "FY 2025 press release (web)",
   "url": "https://www.eqs-news.com/news/ad-hoc/belimo-accelerated-growth-in-2025/295f5591-80dd-4287-b3ff-f149c4acf182_en"
  },
  {
   "co": "belimo",
   "p": "Q2 2026",
   "type": "Results release",
   "title": "H1 2026 press release (web)",
   "url": "https://www.eqs-news.com/news/ad-hoc/belimo-accelerated-sales-growth-in-the-first-half-of-2026/01f2af93-fa3e-4872-b3f8-514ab22ba0e0_en"
  },
  {
   "co": "belimo",
   "p": "Q2 2026",
   "type": "Half-year report",
   "title": "Half-year report 2026 (online)",
   "url": "https://report.belimo.com/HY26/en/management-report"
  },
  {
   "co": "belimo",
   "p": "Q4 2025",
   "type": "Annual report",
   "title": "Annual report 2025 (PDF)",
   "url": "https://report.belimo.com/ar25/app/uploads/Annual-Report-2025.pdf"
  },
  {
   "co": "xylem",
   "p": "Q1 2025",
   "type": "Results release",
   "title": "Q1 2025 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/1524472/000152447225000019/xyl04292025ex991.htm"
  },
  {
   "co": "xylem",
   "p": "Q2 2025",
   "type": "Results release",
   "title": "Q2 2025 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/1524472/000152447225000035/xyl07312025ex991.htm"
  },
  {
   "co": "xylem",
   "p": "Q3 2025",
   "type": "Results release",
   "title": "Q3 2025 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/1524472/000152447225000043/xyl10282025ex991.htm"
  },
  {
   "co": "xylem",
   "p": "Q4 2025",
   "type": "Results release",
   "title": "Q4 / FY 2025 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/1524472/000152447226000008/xyl02102026ex991.htm"
  },
  {
   "co": "xylem",
   "p": "Q1 2026",
   "type": "Results release",
   "title": "Q1 2026 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000065/xyl04282026ex991.htm"
  },
  {
   "co": "xylem",
   "p": "Q1 2026",
   "type": "Presentation",
   "title": "Q1 2026 results slides",
   "url": "https://xyleminc.gcs-web.com/static-files/b7ba322b-6ff8-450f-bfa7-2df9d270fcf1"
  },
  {
   "co": "xylem",
   "p": "Q2 2026",
   "type": "Results release",
   "title": "Q2 2026 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000108/xyl07282026ex991.htm"
  },
  {
   "co": "xylem",
   "p": "Q2 2026",
   "type": "Quarterly report",
   "title": "Q2 2026 10-Q",
   "url": "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000110/xyl-20260630.htm"
  },
  {
   "co": "xylem",
   "p": "Q3 2026",
   "type": "Results release",
   "title": "Q3 2026 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000146/xyl10272026ex991.htm"
  },
  {
   "co": "xylem",
   "p": "Q3 2026",
   "type": "Quarterly report",
   "title": "Q3 2026 10-Q",
   "url": "https://www.sec.gov/Archives/edgar/data/0001524472/000152447226000148/xyl-20260930.htm"
  },
  {
   "co": "ecolab",
   "p": "Q1 2025",
   "type": "Results release",
   "title": "Q1 2025 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/31462/000155837025005743/ecl-20250429xex99d1.htm"
  },
  {
   "co": "ecolab",
   "p": "Q2 2025",
   "type": "Results release",
   "title": "Q2 2025 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/31462/000155837025009695/ecl-20250729xex99d1.htm"
  },
  {
   "co": "ecolab",
   "p": "Q3 2025",
   "type": "Results release",
   "title": "Q3 2025 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/31462/000110465925102859/ecl-20251028xex99d1.htm"
  },
  {
   "co": "ecolab",
   "p": "Q4 2025",
   "type": "Results release",
   "title": "Q4 / FY 2025 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/31462/000110465926012358/ecl-20260210xex99d1.htm"
  },
  {
   "co": "ecolab",
   "p": "Q4 2025",
   "type": "Annual report",
   "title": "Annual report 2025",
   "url": "https://www.sec.gov/Archives/edgar/data/31462/000110465926032785/tm268255d1_ars.pdf"
  },
  {
   "co": "ecolab",
   "p": "Q4 2025",
   "type": "Annual report",
   "title": "10-K 2025",
   "url": "https://www.sec.gov/Archives/edgar/data/31462/000110465926018357/ecl-20251231x10k.htm"
  },
  {
   "co": "ecolab",
   "p": "Q1 2026",
   "type": "Results release",
   "title": "Q1 2026 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/0000031462/000110465926049822/ecl-20260428xex99d1.htm"
  },
  {
   "co": "ecolab",
   "p": "Q1 2026",
   "type": "Quarterly report",
   "title": "Q1 2026 10-Q",
   "url": "https://www.sec.gov/Archives/edgar/data/0000031462/000110465926056737/ecl-20260331x10q.htm"
  },
  {
   "co": "ecolab",
   "p": "Q2 2026",
   "type": "Results release",
   "title": "Q2 2026 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026049933/ecl_ex99x1.htm"
  },
  {
   "co": "ecolab",
   "p": "Q2 2026",
   "type": "Quarterly report",
   "title": "Q2 2026 10-Q",
   "url": "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026053886/ecl-20260630.htm"
  },
  {
   "co": "ecolab",
   "p": "Q3 2026",
   "type": "Results release",
   "title": "Q3 2026 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026067418/ecl_ex99x1.htm"
  },
  {
   "co": "ecolab",
   "p": "Q3 2026",
   "type": "Quarterly report",
   "title": "Q3 2026 10-Q",
   "url": "https://www.sec.gov/Archives/edgar/data/0000031462/000162828026068208/ecl-20260930.htm"
  },
  {
   "co": "watts",
   "p": "Q2 2025",
   "type": "Results release",
   "title": "Q2 2025 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/795403/000155837025010556/wts-20250806xex99d1.htm"
  },
  {
   "co": "watts",
   "p": "Q3 2025",
   "type": "Results release",
   "title": "Q3 2025 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/795403/000110465925107038/wts-20251105xex99d1.htm"
  },
  {
   "co": "watts",
   "p": "Q3 2025",
   "type": "Quarterly report",
   "title": "Q3 2025 10-Q",
   "url": "https://www.sec.gov/Archives/edgar/data/795403/000110465925107489/wts-20250928x10q.htm"
  },
  {
   "co": "watts",
   "p": "Q4 2025",
   "type": "Results release",
   "title": "Q4 / FY 2025 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/795403/000110465926013437/wts-20260211xex99d1.htm"
  },
  {
   "co": "watts",
   "p": "Q1 2026",
   "type": "Results release",
   "title": "Q1 2026 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/0000795403/000110465926056325/wts-20260506xex99d1.htm"
  },
  {
   "co": "watts",
   "p": "Q1 2026",
   "type": "Presentation",
   "title": "Q1 2026 earnings deck",
   "url": "https://s29.q4cdn.com/117128878/files/doc_financials/2026/q1/Watts-Water-Technologies-UPDATED-Q1-26-Earnings-Deck-050626-Earnings-Presentation-for-May-7.pdf"
  },
  {
   "co": "watts",
   "p": "Q1 2026",
   "type": "Quarterly report",
   "title": "Q1 2026 10-Q",
   "url": "https://www.sec.gov/Archives/edgar/data/795403/000110465926056817/wts-20260329x10q.htm"
  },
  {
   "co": "watts",
   "p": "Q2 2026",
   "type": "Results release",
   "title": "Q2 2026 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/0000795403/000110465926091165/wts-20260805xex99d1.htm"
  },
  {
   "co": "watts",
   "p": "Q2 2026",
   "type": "Presentation",
   "title": "Q2 2026 earnings deck",
   "url": "https://s29.q4cdn.com/117128878/files/doc_financials/2026/q2/Watts-Water-Technologies-Q2-26-Earnings-Deck_final-Presentation-for-August-6-2026.pdf"
  },
  {
   "co": "watts",
   "p": "Q2 2026",
   "type": "Quarterly report",
   "title": "Q2 2026 10-Q",
   "url": "https://www.sec.gov/Archives/edgar/data/795403/000110465926091726/wts-20260628x10q.htm"
  },
  {
   "co": "emerson",
   "p": "Q1 2025",
   "type": "Results release",
   "title": "Fiscal Q2 2025 results",
   "url": "https://ir.emerson.com/_assets/_10ad2d822f6d4902fd020ca535f9805e/emerson/news/2025-05-07_Emerson_Reports_Second_Quarter_2025_Results_8.pdf"
  },
  {
   "co": "emerson",
   "p": "Q1 2025",
   "type": "Presentation",
   "title": "Fiscal Q2 2025 presentation",
   "url": "https://ir.emerson.com/_assets/_83c3777b7a2a1deaf1f9f1ccca620065/emerson/db/938/9581/presentation/emerson-2025-q2-earnings-presentation-en-us-11737160.pdf"
  },
  {
   "co": "emerson",
   "p": "Q2 2025",
   "type": "Results release",
   "title": "Fiscal Q3 2025 results",
   "url": "https://ir.emerson.com/_assets/_83c3777b7a2a1deaf1f9f1ccca620065/emerson/news/2025-08-06_Emerson_Reports_Third_Quarter_2025_Results_612.pdf"
  },
  {
   "co": "emerson",
   "p": "Q2 2025",
   "type": "Presentation",
   "title": "Fiscal Q3 2025 presentation",
   "url": "https://ir.emerson.com/_assets/_21ac9392165fd390cbc5231cf185e4d4/emerson/db/938/10098/presentation/Emerson+2025+Q3+Earnings+Presentation.pdf"
  },
  {
   "co": "emerson",
   "p": "Q3 2025",
   "type": "Results release",
   "title": "Fiscal Q4 / FY 2025 results",
   "url": "https://ir.emerson.com/_assets/_80fc1c2bd9b6b4b0e1f3c778904be7d7/emerson/news/2025-11-05_Emerson_Reports_Fourth_Quarter_and_Full_Year_2025__617.pdf"
  },
  {
   "co": "emerson",
   "p": "Q3 2025",
   "type": "Presentation",
   "title": "Fiscal Q4 / FY 2025 presentation",
   "url": "https://ir.emerson.com/_assets/_b0268256875b876312545fa5fd0c95ef/emerson/db/938/10115/presentation/Emerson+2025+Q4+and+Full+Year+Earnings+Presentation.pdf"
  },
  {
   "co": "emerson",
   "p": "Q3 2025",
   "type": "Annual report",
   "title": "10-K fiscal 2025",
   "url": "https://ir.emerson.com/sec-filings/all-sec-filings/content/0000032604-25-000087/0000032604-25-000087.pdf"
  },
  {
   "co": "emerson",
   "p": "Q4 2025",
   "type": "Results release",
   "title": "Fiscal Q1 2026 results",
   "url": "https://ir.emerson.com/_assets/_0dfcd1db8f1e0a2d66af142d1b1193f5/emerson/news/2026-02-03_Emerson_Reports_First_Quarter_2026_Results_623.pdf"
  },
  {
   "co": "emerson",
   "p": "Q4 2025",
   "type": "Presentation",
   "title": "Fiscal Q1 2026 presentation",
   "url": "https://ir.emerson.com/_assets/_10ad2d822f6d4902fd020ca535f9805e/emerson/db/938/10134/presentation/Emerson+2026+Q1+Earnings+Presentation.pdf"
  },
  {
   "co": "emerson",
   "p": "Q1 2026",
   "type": "Results release",
   "title": "Fiscal Q2 2026 results",
   "url": "https://ir.emerson.com/_assets/_f6e5597605579b03df2f9ddcfe39bf0a/emerson/news/2026-05-05_Emerson_Reports_Second_Quarter_2026_Results_629.pdf"
  },
  {
   "co": "emerson",
   "p": "Q1 2026",
   "type": "Presentation",
   "title": "Fiscal Q2 2026 presentation",
   "url": "https://ir.emerson.com/_assets/_92938d7656e1748428814c75f21183f6/emerson/db/938/10208/presentation/Emerson+2026+Q2+Earnings+Presentation.pdf"
  },
  {
   "co": "emerson",
   "p": "Q2 2026",
   "type": "Results release",
   "title": "Fiscal Q3 2026 results",
   "url": "https://ir.emerson.com/_assets/_c0388696e3a69f59a3ee43598053c60c/emerson/news/2026-08-04_Emerson_Reports_Third_Quarter_2026_Results_Raises__642.pdf"
  },
  {
   "co": "emerson",
   "p": "Q2 2026",
   "type": "Presentation",
   "title": "Fiscal Q3 2026 presentation",
   "url": "https://ir.emerson.com/_assets/_39b9c4b55c1314921bb642cd27956a1b/emerson/db/938/10242/presentation/Emerson+2026+Q3+Earnings+Presentation.pdf"
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
   "p": "Q4 2025",
   "type": "Presentation",
   "title": "FY 2025 analyst and media presentation",
   "url": "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/annual-report/annual-report-2025/en/presentation-analyst-and-media-conference-2026-en.pdf"
  },
  {
   "co": "gf",
   "p": "Q2 2026",
   "type": "Results release",
   "title": "H1 2026 ad hoc announcement",
   "url": "https://www.georgfischer.com/content/dam/commonassets/corp/documents/reports/mid-year-reports/mid-year-report-2026/en/ad-hoc-announcement-en-mid-year-report-2026.pdf"
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
   "p": "Q2 2026",
   "type": "Half-year report",
   "title": "Mid-year report 2026 (web)",
   "url": "https://www.georgfischer.com/en/investors/reports-and-presentations/mid-year-report.html"
  },
  {
   "co": "pentair",
   "p": "Q1 2025",
   "type": "Results release",
   "title": "Q1 2025 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/77360/000007736025000015/q12025pressrelease.htm"
  },
  {
   "co": "pentair",
   "p": "Q2 2025",
   "type": "Results release",
   "title": "Q2 2025 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/77360/000007736025000035/q22025pressrelease.htm"
  },
  {
   "co": "pentair",
   "p": "Q3 2025",
   "type": "Results release",
   "title": "Q3 2025 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/77360/000007736025000044/q32025pressrelease.htm"
  },
  {
   "co": "pentair",
   "p": "Q4 2025",
   "type": "Results release",
   "title": "Q4 / FY 2025 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/77360/000007736026000003/a2025q4pressrelease.htm"
  },
  {
   "co": "pentair",
   "p": "Q1 2026",
   "type": "Results release",
   "title": "Q1 2026 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/0000077360/000007736026000023/q12026pressrelease.htm"
  },
  {
   "co": "pentair",
   "p": "Q2 2026",
   "type": "Results release",
   "title": "Q2 2026 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/0000077360/000007736026000042/q22026pressrelease.htm"
  },
  {
   "co": "pentair",
   "p": "Q2 2026",
   "type": "Presentation",
   "title": "Q2 2026 earnings slides",
   "url": "https://investors.pentair.com/static-files/c02242e3-5891-418c-81e9-62a4da417ea3"
  },
  {
   "co": "pentair",
   "p": "Q3 2026",
   "type": "Results release",
   "title": "Q3 2026 earnings release",
   "url": "https://www.sec.gov/Archives/edgar/data/0000077360/000007736026000055/q32026pressrelease.htm"
  },
  {
   "co": "pentair",
   "p": "Q3 2026",
   "type": "Results release",
   "title": "Q3 2026 news release (PDF)",
   "url": "https://investors.pentair.com/static-files/7d17cedc-d3a4-46e9-ab6e-9775bc98900e"
  },
  {
   "co": "pentair",
   "p": "Q3 2026",
   "type": "Quarterly report",
   "title": "Q3 2026 10-Q",
   "url": "https://www.sec.gov/Archives/edgar/data/0000077360/000007736026000058/pnr-20260930.htm"
  }
 ]
};
