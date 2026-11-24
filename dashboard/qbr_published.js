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
    goNotes: "Notes: residential = residential total; non-residential = non-residential building total; Europe = European Union.",
    go: {
      us: { res: [-5.05, -2.32, 3.5], non: [-5.69, -0.2, 2.16] },
      de: { res: [-4.26, 1.33, 2.63], res_new: [-4.91, 5.46, 3.2], res_reno: [-4.03, -0.1, 2.44], non: [-3.24, 0.8, 2.61], non_new: [-3.46, 0.99, 2.29], non_reno: [-3.05, 0.64, 2.87] },
      fr: { res: [-0.35, 1.22, 1.6], res_new: [-4.95, -1.84, 0.66], res_reno: [1.64, 2.45, 1.97], non: [-0.44, 1.32, 1.36], non_new: [-2.2, 0.96, 1.15], non_reno: [0.87, 1.57, 1.52] },
      nl: { res: [0.72, 2.78, 2.92], res_new: [1.0, 2.85, 2.42], res_reno: [0.48, 2.71, 3.36], non: [0.52, 2.11, 2.74], non_new: [0.22, 2.6, 2.51], non_reno: [0.85, 1.58, 3.0] },
      eu: { res: [-0.69, 1.86, 2.23], res_new: [-0.1, 4.4, 3.4], res_reno: [-1.2, 0.4, 2.2], non: [1.04, 1.85, 2.4], non_new: [-0.34, 1.73, 2.12], non_reno: [0.92, 1.66, 2.61] },
      cn: { res: [-13.9, -12.11, 3.3], non: [1.59, 1.67, 3.85] }
    },
    chips: { us: ["p", "p"], de: ["ng", "p"], fr: ["p", "p"], nl: ["p", "p"], eu: ["n", "p"], cn: ["ng", "n"] },
    dodge: { dodge_total: [null, 2.1, null], dodge_res: [null, null, null], dodge_non: [null, 2.8, null] },
    banner: "Global positive outlook for Europe, USA non-residential outlook boosted amid strong data centre activity, China res. under pressure",
    // EMEA: market 2025 and 2026 forecast (residential + non-residential building, Oxford Economics data of 27 Jun 2026)
    em: {
      Germany: { m1: -4.01, m2: 1.2, a1: "down", a2: "up" },
      France: { m1: -0.39, m2: 1.26, a1: "flat", a2: "up" },
      Netherlands: { m1: 0.65, m2: 2.53, a1: "up", a2: "up" },
      "United Kingdom": { m1: 0.69, m2: 1.69, a1: "up", a2: "up" },
      Belgium: { m1: 0.47, m2: 0.45, a1: "flat", a2: "flat" },
      Poland: { m1: -1.32, m2: 5.07, a1: "down", a2: "up" },
      Nordics: { m1: -2.15, m2: 1.13, a1: "down", a2: "up" }
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
    // macroeconomic indicators | building: 2026 growth and 2026-2030 CAGR (%, ":5y" ids). Oxford Economics rows from the data of 27 Jun 2026, Europe = 19 Euroconstruct
    // countries (residential new build / renovation weighted with the October 2026 release's 2025 levels); us_val = Dodge non-res as on the growth slide
    macro: { eu_tot: 1.87, eu_new: 3.18, eu_reno: 0.82, eu_res: 1.98, eu_non: 1.7, us_oe: -0.2, us_val: 2.8,
      "eu_tot:5y": 2.68, "eu_new:5y": 2.73, "eu_reno:5y": 2.64, "eu_res:5y": 2.79, "eu_non:5y": 2.52, "us_oe:5y": 2.76, "us_val:5y": null,
      oeDate: "2026-06-27", dodgeDate: null },
    priority: "restore execution while aligning portfolio and commercial focus with the fastest-growing technologies and markets",
    emSrc: "Source: Oxford Economics, June 2026 release (27 Jun 2026), construction work done (residential + non-residential building). External cross-checks: ING Research, ABN AMRO, Experian / UK Government, FFB",
    emNotes: "Note: 1_ including Comap 2_excluding Comap"
  }
};
