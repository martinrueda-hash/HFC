/* Figures of QBR/SBR reports as they were published (typed from the presented slides).
 * A quarter listed here is shown exactly as published, and the next report compares against it
 * (variation chips on the growth outlook slide, previous market figures in brackets on the EMEA slide).
 * Growth figures in % (one decimal as on the slide); null = blank on the slide.
 * Rows: res / res_new / res_reno = residential; non / non_new / non_reno = non-residential (definitions of that deck).
 * Chips: sp strongly positive, p positive, n neutral, ng negative, sn strongly negative ([’Y E, CAGR] per column). */
window.HFC_QBR_PUBLISHED = {
  "2026Q3": {
    deck: "HFC QBR3 2026",
    goSrc: "Source: Oxford Economics April 2026 release, Group strategy and M&A analysis",
    goNotes: "Notes: figures as published in the Q3 2026 SBR (residential and non-residential as defined in that deck).",
    go: {
      us: { res: [0.7, 1.5, 3.3], non: [0.5, 2.1, 2.2] },
      de: { res: [-4.3, 1.3, 2.5], res_new: [-4.9, 5.5, 3.2], res_reno: [-4.0, -0.1, 2.4], non: [-3.2, 0.8, 2.4], non_new: [-3.5, 1.0, 3.3], non_reno: [-3.0, 0.6, 3.7] },
      fr: { res: [-0.4, 1.2, 1.6], res_new: [-5.0, -1.8, 0.7], res_reno: [1.1, 1.9, 1.7], non: [-0.4, 1.3, 1.3], non_new: [-2.2, 1.0, 1.1], non_reno: [0.9, 1.6, 1.5] },
      nl: { res: [0.7, 2.9, 2.9], res_new: [1.0, 2.8, 2.4], res_reno: [0.5, 3.4, 3.4], non: [0.5, 2.4, 2.6], non_new: [0.5, 2.7, 4.3], non_reno: [0.8, 1.6, 2.9] },
      eu: { res: [-0.7, 1.9, 3.7], res_new: [-0.1, 4.4, 3.4], res_reno: [-1.2, 0.4, 2.2], non: [1.0, 1.8, 2.6], non_new: [-0.3, 1.7, 2.1], non_reno: [0.9, 1.7, 2.6] },
      cn: { res: [-13.9, -12.1, 2.7], non: [1.6, 1.67, 4.0] }
    },
    chips: { us: ["p", "p"], de: ["ng", "p"], fr: ["p", "p"], nl: ["p", "p"], eu: ["n", "p"], cn: ["ng", "n"] },
    dodge: { dodge_total: [null, 2.1, null], dodge_res: [null, null, null], dodge_non: [null, 2.8, null] },
    banner: "Global positive outlook for Europe, USA non-residential outlook boosted amid strong data centre activity, China res. under pressure",
    // EMEA: market 2025 and 2026 forecast (% and arrow) as published
    em: {
      Germany: { m1: -3.6, m2: 1.3, a1: "down", a2: "up" },
      France: { m1: -0.4, m2: 1.3, a1: "flat", a2: "up" },
      Netherlands: { m1: 0.7, m2: 2.6, a1: "up", a2: "up" },
      "United Kingdom": { m1: 0.8, m2: 1.8, a1: "up", a2: "up" },
      Belgium: { m1: 0.8, m2: 0.5, a1: "up", a2: "flat" },
      Poland: { m1: 1.1, m2: 6.1, a1: "up", a2: "up" },
      Nordics: { m1: 1.7, m2: 1.2, a1: "down", a2: "up", approx: true }
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
    priority: "restore execution while aligning portfolio and commercial focus with the fastest-growing technologies and markets",
    emSrc: "Source: Oxford Economics, 2026 construction market outlook. External cross-checks: ING Research, ABN AMRO, Experian / UK Government, FFB",
    emNotes: "Note: 1_ including Comap 2_excluding Comap"
  }
};
