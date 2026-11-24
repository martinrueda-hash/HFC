/* Figures of QBR/SBR reports as they were published (typed from the presented slides).
 * A quarter listed here is shown exactly as published, and the next report compares against it
 * (variation chips on the growth outlook slide, previous market figures in brackets on the EMEA slide).
 * Growth figures in % (one decimal as on the slide); null = blank on the slide.
 * Rows: res / res_new / res_reno = residential; non / non_new / non_reno = non-residential (definitions of that deck).
 * Chips: sp strongly positive, p positive, n neutral, ng negative, sn strongly negative ([’Y E, CAGR] per column). */
window.HFC_QBR_PUBLISHED = {
  "2026Q3": {
    deck: "QBR3 2026, Oxford Economics data of 27 Jun 2026",
    goSrc: "Source: Oxford Economics June 2026 release (27 Jun 2026), Group strategy and M&A analysis",
    goNotes: "Notes: (1) Single family only. (2) Commercial buildings + multifamily residential. USA and China: residential total and non-residential building total.",
    go: {
      us: { res: [-5.05, -2.32, 3.5], non: [-5.69, -0.2, 2.16] },
      de: { res: [-4.85, -0.01, 1.8], res_new: [-3.64, 7.96, 3.06], res_reno: [-5.1, -1.71, 1.52], non: [-3.34, 2.54, 3.43], non_new: [-4.97, 3.51, 3.14], non_reno: [-2.38, 1.99, 3.59] },
      fr: { res: [-0.15, 1.03, 1.67], res_new: [-6.45, -4.2, 1.12], res_reno: [1.85, 2.55, 1.83], non: [-0.55, 1.7, 1.63], non_new: [-3.63, 0.61, 0.81], non_reno: [1.33, 2.33, 2.1] },
      nl: { res: [0.6, 2.29, 2.75], res_new: [1.15, 1.99, 2.09], res_reno: [0.26, 2.48, 3.15], non: [0.75, 2.91, 2.99], non_new: [0.77, 3.43, 2.58], non_reno: [0.72, 2.22, 3.53] },
      eu: { res: [-1.66, 0.84, 2.29], res_new: [-1.17, 3.19, 3.16], res_reno: [-1.93, -0.43, 1.81], non: [-0.32, 2.5, 2.85], non_new: [-0.5, 3.81, 3.08], non_reno: [-0.15, 1.38, 2.65] },
      cn: { res: [-13.9, -12.11, 3.3], non: [1.59, 1.67, 3.85] }
    },
    // USA and China: residential total / non-residential building total (the June data has no split), so not compared in Q4
    oldDefs: ["us", "cn", "us_oe", "us_tot"],
    chips: { us: ["p", "p"], de: ["ng", "p"], fr: ["p", "p"], nl: ["p", "p"], eu: ["n", "p"], cn: ["ng", "n"] },
    dodge: { dodge_total: [null, 2.1, null], dodge_res: [null, null, null], dodge_non: [null, 2.8, null] },
    banner: "Global positive outlook for Europe, USA non-residential outlook boosted amid strong data centre activity, China res. under pressure",
    // EMEA: market 2025 and 2026 forecast (residential¹ + commercial², Oxford Economics levels of 27 Jun 2026)
    em: {
      Germany: { m1: -4.05, m2: 1.34, a1: "down", a2: "up" },
      France: { m1: -0.41, m2: 1.47, a1: "flat", a2: "up" },
      Netherlands: { m1: 0.67, m2: 2.58, a1: "up", a2: "up" },
      "United Kingdom": { m1: -1.32, m2: 0.63, a1: "down", a2: "up" },
      Belgium: { m1: -0.28, m2: -0.4, a1: "flat", a2: "flat" },
      Poland: { m1: -1.51, m2: 5.42, a1: "down", a2: "up" },
      Nordics: { m1: -2.52, m2: 1.52, a1: "down", a2: "up" }
    },
    comments: {
      Germany: "Heating equipment rebounding strongly (+16.7% Q1’26), led by heat pumps (+34.7%), supporting hydronic demand",
      France: "Heating equipment remains under pressure (-18.6% Q1’26); boilers decline sharply while air/air heat pumps recover (+6.5%)",
      Netherlands: "Heating equipment remains soft (-7.2% Q1’26), despite continued heat-pump growth (+18.6%)",
      "United Kingdom": "Heating market grew +2.1% in 2025, with heat pumps significantly outperforming (+23.3%)",
      Belgium: "Heating equipment weakened (-9.0% Q1’26), while heat pumps remain resilient (+6.5%)",
      Poland: "Heating equipment stabilising (+0.1% Q1’26), with strong heat-pump momentum (+21.0%)",
      Nordics: ""
    },
    takeaways: [
      "Market turning positive: 2026 outlook improving across most key European markets",
      "Performance remains uneven: HFC growth concentrated in France, Poland and Nordics, while Netherlands and UK materially underperform",
      "Execution matters as much as market: delivery issues in H1 and HIU exposure have constrained conversion of market recovery into sales",
      "Structural shift accelerating: strong move from boilers towards heat pumps / air-to-air / VRV, reshaping product and channel demand"
    ],
    // macroeconomic indicators | building: 2026 growth and 2026-2030 CAGR (%, ":5y" ids). Oxford Economics rows from the levels of 27 Jun 2026,
    // Europe = 19 Euroconstruct countries; USA rows on totals (no split, no civil in the June data); us_val = Dodge non-res as on the growth slide
    macro: { eu_tot: 1.87, eu_new: 3.18, eu_reno: 0.82, eu_res: 0.84, eu_non: 2.5, us_oe: -0.2, us_val: 2.8,
      "eu_tot:5y": 2.68, "eu_new:5y": 2.73, "eu_reno:5y": 2.64, "eu_res:5y": 2.66, "eu_non:5y": 2.94, "us_oe:5y": 2.76, "us_val:5y": null, us_tot: -1.35, "us_tot:5y": 3.99, us_dtot: 2.1, "us_dtot:5y": null,
      oeDate: "2026-06-27", dodgeDate: null, oldDefs: ["us_oe", "us_tot"],
      defsNote: "¹ Residential = single family; ² Commercial = commercial buildings + multifamily (USA OE: residential / non-residential totals)" },
    priority: "restore execution while aligning portfolio and commercial focus with the fastest-growing technologies and markets",
    emSrc: "Source: Oxford Economics, June 2026 release (27 Jun 2026), construction work done (residential¹ + commercial²). External cross-checks: ING Research, ABN AMRO, Experian / UK Government, FFB",
    emNotes: "Note: 1_ including Comap 2_excluding Comap"
  }
};

/* Q4 2026 comments: EHI Q2 2026 (heating equipment, y/y), Oxford Economics 8 Oct vs. 27 Jun 2026, Dodge 2Q2026;
 * US context: NAHB / Census housing starts 2026, ConstructConnect and Dodge data-centre reports 2026, EHPA / IEA heat pumps 2026.
 * Built-in figures for cells that are otherwise entered on the page (yellow), per report quarter.
 * EHI heat pumps, Europe total: EHI Europe market statistics Q2 2026 (presented 31 Aug 2026; the briefing itself is not stored in the repository),
 * "8 countries total" BE, FR, DE, IT, NL, PL, ES, UK: heat pumps total +24.2% (270,800 units); Spain not included yet.
 * Euroconstruct, 19 countries: 101st EUROCONSTRUCT summary tables (June 2026), 2026 vs. 2025 in real terms: total construction
 * output +2.0%, residential +1.9%, non-residential +1.3%; forecasts reach 2028, so the multi-year column holds the 2026-2028
 * CAGR (+2.1%, +2.4%, +1.5%), marked ³ and footnoted. Tables not stored here.
 * Latest EHI and Euroconstruct releases for both reports until newer ones are out. */
window.HFC_QBR_INPUTS = {
  "2026Q3": { "mi:ec_tot": "+2.0%", "mi:ec_tot:5y": "+2.1%³", "mi:ec_res": "+1.9%", "mi:ec_res:5y": "+2.4%³", "mi:ec_non": "+1.3%", "mi:ec_non:5y": "+1.5%³", "mi:ecNote": "; ³ EC: CAGR ’26-’28", "mi:ecSrc": "Euroconstruct (Jun-’26)", "mi:hp": "+24.2%", "mi:hp:period": "Q2-’26", "mi:hp:5y": "n/a", "mi:ehiSrc": "heat pumps Q2-’26 vs. Q2-’25 excl. ES (Aug-’26)" },
  "2026Q4": { "mi:cm:1": "Europe: building outlook stable (+2.0% in 2026, in line with EC), but residential¹ stalls at 0.0% (+0.8% last SBR) as consumer uncertainty weighs on renovation", "mi:cm:2": "USA OE: 2026 cut sharply since June (residential -6.2% vs. -2.3%, non-res. building -6.0% vs. -0.2%): mortgage rates, affordability, single-family starts at lowest since 2022; rebound expected in 2027", "mi:cm:3": "USA Dodge: project value +10.8% in 2026 (+2.1% last SBR), driven by data centres (in office, +58%) and power (+27%); excl. office, buildings only +3.3%", "mi:cm:4": "Heat pumps keep accelerating: EHI +24.2% Q2’26 (DE +43%, BE +48%, NL +38%) while gas boilers fall (-4.2%), helped by higher gas prices", "cm:Germany": "Heating equipment rebounding strongly (+22.4% Q2’26), led by heat pumps (+43.2%) while boilers stabilise (-1.0%); 2026 market trimmed to +1.0%", "cm:France": "Heating equipment still under pressure (-6.9% Q2’26): gas boilers -21.1%, hybrids -60%, heat pumps recovering (+18.0%); 2026 market cut to +0.8%", "cm:Netherlands": "Heating equipment soft (-5.0% Q2’26) as boilers drop (-17.5%), despite strong heat-pump growth (+38.4%); 2026 market eased to +1.9%", "cm:United Kingdom": "Heating equipment flat (-0.5% Q2’26), heat pumps only +6.4% (split -37.5%); 2026 market cut to +0.3%", "cm:Belgium": "Heating equipment down (-2.5% Q2’26), boilers -7.3% while heat pumps jump (+47.5%); 2026 market flat (+0.1%)", "cm:Poland": "Heating equipment growing (+16.6% Q2’26), boilers +14.3% and heat pumps +22.6%; strongest 2026 market (+6.1%, up from +5.4%)", "cm:Nordics": "Not covered by EHI; 2026 market outlook turned negative (-1.4% vs. +1.5% last SBR)", "kt:1": "Recovery flattening: 2026 market outlook trimmed vs. last SBR in most countries (Nordics turned negative), Poland the exception", "kt:2": "Heating market polarised: Germany (+22.4%) and Poland (+16.6%) grow in Q2’26 while France, Netherlands and Belgium decline", "kt:3": "Shift to heat pumps accelerating (+24.2% Q2’26, 8 countries) while gas boilers fall (-4.2%), supported by higher gas prices", "kt:4": "Growth pockets narrower: market support concentrated in Germany and Poland, France / Netherlands / UK remain weak in 2026", "kt:priority": "capture heat-pump driven growth in Germany and Poland while protecting share and margins in declining boiler markets",
    "val:mi:us_oe": -0.2, "chip:mi:us_oe": "ng", "mi:ec_tot": "+2.0%", "mi:ec_tot:5y": "+2.1%³", "mi:ec_res": "+1.9%", "mi:ec_res:5y": "+2.4%³", "mi:ec_non": "+1.3%", "mi:ec_non:5y": "+1.5%³", "mi:ecNote": "; ³ EC: CAGR ’26-’28", "mi:ecSrc": "Euroconstruct (Jun-’26)", "mi:hp": "+24.2%", "mi:hp:period": "Q2-’26", "mi:hp:5y": "n/a", "mi:ehiSrc": "heat pumps Q2-’26 vs. Q2-’25 excl. ES (Aug-’26)" }
};
