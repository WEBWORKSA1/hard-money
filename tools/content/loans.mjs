/* Loan program pages. Terms are indicative 2026 market ranges synthesized from
   published lender rate sheets (Kiavi, RCN, Lima One, Anchor, LendingOne,
   Easy Street, Groundfloor, CIVIC) — not offers. */
export const loans = [
  {
    slug: 'fix-and-flip', short: 'Fix & Flip Loans', title: 'Fix and Flip Loans', ico: '🔨', type: 'fix-flip',
    tag: 'Most popular',
    blurb: 'Short-term, interest-only financing that covers the purchase and 100% of the renovation budget for 1–4 unit properties you plan to resell.',
    terms: { 'Rates': '8.25% – 11.5%', 'Points': '1 – 2.5', 'Max LTC': '85% – 92.5%', 'Max ARV': '70% – 75%', 'Loan size': '$75K – $5M', 'Term': '6 – 18 months', 'Close in': '5 – 10 biz days', 'Min FICO': '600 – 660' },
    desc: 'Fix and flip loans explained: 2026 rates, points, LTC/ARV limits, draw schedules, requirements and how to qualify. Compare lenders and request terms in 24 hours.',
    intro: `A fix and flip loan is the workhorse of hard money lending. It is a short-term, asset-based loan — usually 6 to 18 months, interest-only — that finances the acquisition of a distressed 1–4 unit property <em>and</em> the renovation budget, with the lender underwriting primarily on the deal (purchase price, rehab scope and after-repair value) rather than on your tax returns.`,
    sections: [
      ['How a fix and flip loan is structured', `<p>Lenders size the loan with two caps and you get the lower of the two:</p>
<ul><li><strong>Loan-to-cost (LTC):</strong> a percentage of purchase price plus rehab budget — commonly 85% to 92.5% for experienced flippers, 80% for first-timers, and up to 100% of the rehab portion.</li>
<li><strong>Loan-to-ARV:</strong> a ceiling of 70% to 75% of the after-repair value as supported by an appraisal or broker price opinion.</li></ul>
<p>The purchase portion funds at closing. The rehab portion sits in a <strong>holdback</strong> and is released in <strong>draws</strong> as work is completed and inspected — typically 24 to 72 hours after an inspection. Most lenders charge interest only on funds actually drawn.</p>
<p><strong>Worked example.</strong> Purchase $220,000, rehab $60,000, ARV $380,000. Total cost $280,000. At 90% LTC the loan is $252,000; at 75% ARV the cap is $285,000. The loan is $252,000, so you bring roughly $28,000 plus points and closing costs. At 10% interest-only, the carry is about $2,100 per month while the project runs.</p>`],
      ['What it costs in 2026', `<p>Pricing is tiered by experience and credit. New investors with a 660 FICO can expect roughly 10.5% to 11.5% and 2 points; investors with 10+ completed flips and 720+ credit see 8.25% to 9.5% and 1 to 1.5 points. Expect a document or processing fee of $1,000 to $2,000, an appraisal or valuation fee, and draw-inspection fees of $150 to $300 each. Most fix and flip loans carry no prepayment penalty, which matters because the average flip is sold in 5 to 7 months.</p>
<p>Use the <a href="/calculators/fix-and-flip/">fix and flip profit calculator</a> to model carry cost against your projected spread, and the <a href="/calculators/hard-money-loan/">hard money cost calculator</a> for total financing cost.</p>`],
      ['Requirements', `<ul><li>Non-owner-occupied property (business-purpose loan). Most lenders require you to borrow through an LLC or corporation.</li><li>Credit score floor of 600 to 660 depending on the lender; a soft pull is common at pre-qualification.</li><li>Liquidity: proof of funds for the down payment, closing costs and 3 to 6 months of interest reserves.</li><li>A credible scope of work with a line-item rehab budget and contractor bids.</li><li>Exit strategy: resale comps, or a pre-qualification for a <a href="/loans/rental-dscr/">DSCR refinance</a> if you plan to hold.</li><li>Experience is not required, but it moves every dial: leverage, rate, points and speed.</li></ul>`],
      ['Pros and cons', `<div class="grid-2"><div class="card"><h4>Pros</h4><ul><li>Close in days, not 45+ days — you can compete with cash offers.</li><li>Rehab budget financed; distressed properties qualify.</li><li>No tax returns or DTI calculation; underwriting is deal-based.</li><li>Interest-only payments keep carry low during construction.</li><li>No prepayment penalty at most lenders.</li></ul></div><div class="card"><h4>Cons</h4><ul><li>Rates are 2–4 points above conventional and you pay origination points.</li><li>Short term: a stalled project can force an expensive extension.</li><li>Draw process adds friction and inspection fees.</li><li>Personal guarantee is standard even when borrowing through an LLC.</li><li>Leverage caps mean you still need real cash in the deal.</li></ul></div></div>`],
    ],
    faqs: [
      ['How fast can a fix and flip loan close?', 'Direct lenders routinely close in 5 to 10 business days once title and valuation are back; some advertise 24- to 72-hour closings for repeat borrowers with a clean file. The realistic pacing item is the appraisal or BPO.'],
      ['Do I need experience to get a fix and flip loan?', 'No. First-time investors are financed by most national lenders, but at lower leverage (75–80% LTC), higher rates and more points. Completing even one or two documented flips materially improves pricing.'],
      ['Can I get 100% financing on a flip?', 'Some lenders offer 100% of purchase for very experienced borrowers, and 100% of rehab is common, but total leverage is still capped by the 70–75% ARV rule. “No money down” marketing usually means cross-collateralizing another property or a profit-share structure.'],
      ['What happens if I cannot sell before the loan matures?', 'Most lenders offer one or two extensions of 3 to 6 months for a fee of 0.5 to 1 point. Beyond that, refinancing into a 30-year DSCR rental loan is the standard exit.'],
    ],
  },
  {
    slug: 'bridge', short: 'Bridge Loans', title: 'Bridge Loans for Real Estate', ico: '🌉', type: 'bridge',
    blurb: 'Fast 6–24 month financing to acquire, reposition or cash out a property while you arrange permanent financing or a sale.',
    terms: { 'Rates': '8.0% – 11.0%', 'Points': '1 – 2', 'Max LTV': '65% – 80%', 'Loan size': '$100K – $20M+', 'Term': '6 – 24 months', 'Close in': '5 – 14 biz days', 'Property': '1–4 unit, MF, commercial', 'Payments': 'Interest-only' },
    desc: 'Bridge loans for real estate investors: how they work, 2026 rates and LTV, when to use one instead of a fix and flip loan, and how to exit. Request terms in 24 hours.',
    intro: `A bridge loan is short-term debt that “bridges” the gap between buying a property and either selling it or refinancing into long-term financing. In private lending the term covers everything from a 70% LTV loan on a stabilized rental that needs a fast close, to a multifamily acquisition that cannot qualify for agency debt until occupancy improves.`,
    sections: [
      ['When a bridge loan makes sense', `<ul><li><strong>Speed:</strong> the seller needs to close in 10 days and a bank cannot get there.</li><li><strong>Condition or occupancy:</strong> the property is vacant, partially leased or needs light work, so permanent lenders decline it until it is stabilized.</li><li><strong>Borrower profile:</strong> your tax returns are complex, you are a foreign national, or you own more financed properties than agency guidelines allow.</li><li><strong>Cash-out:</strong> you want to pull equity from a free-and-clear property to fund the next acquisition.</li><li><strong>Auction or REO purchases</strong> where the contract allows no financing contingency.</li></ul>`],
      ['Bridge vs. fix and flip loan', `<div class="tbl-wrap"><table class="tbl"><tr><th>Feature</th><th>Bridge loan</th><th>Fix and flip loan</th></tr><tr><td>Rehab holdback</td><td>Rarely, or light (under 10% of value)</td><td>Core feature; 100% of budget financed</td></tr><tr><td>Leverage basis</td><td>Current “as-is” value (LTV)</td><td>Cost and ARV (LTC / LTARV)</td></tr><tr><td>Typical LTV</td><td>65–80%</td><td>Up to 92.5% LTC, 75% ARV</td></tr><tr><td>Property types</td><td>Residential, multifamily, mixed-use, commercial</td><td>Mostly 1–4 unit residential</td></tr><tr><td>Exit</td><td>Refinance or sale</td><td>Sale (or DSCR refinance)</td></tr></table></div>`],
      ['Cost and structure', `<p>Expect 8% to 11% interest-only, 1 to 2 origination points, and a 6- to 24-month term, often with a built-in extension option. Larger commercial bridge loans ($5M+) price off SOFR plus a spread and may require an interest reserve escrowed at closing. Because bridge loans are sized on current value, the appraisal matters more than on a flip: a conservative as-is value directly cuts your proceeds.</p>`],
      ['Exit planning', `<p>Lenders approve bridge loans on the credibility of the exit. For a rental, line up a <a href="/loans/rental-dscr/">DSCR takeout</a> before you close the bridge and confirm its seasoning requirement (many DSCR lenders now refinance on the new appraised value with no seasoning if the rehab is documented). For a sale, support the pricing with recent comps. For commercial, know the occupancy or debt-yield threshold the permanent lender needs and the time it will take to reach it.</p>`],
    ],
    faqs: [
      ['Is a bridge loan the same as a hard money loan?', 'Bridge loan describes the purpose (short-term, transitional); hard money describes the source and underwriting style (private capital, asset-based). Most private bridge loans are hard money loans, but banks also make bridge loans with full income underwriting.'],
      ['Can I get a bridge loan on a primary residence?', 'Business-purpose private lenders generally cannot lend on an owner-occupied home because of consumer-lending regulations. Owner-occupied bridge loans exist but come from licensed mortgage lenders under different rules.'],
      ['How much can I cash out with a bridge loan?', 'Typically up to 65–70% of appraised value on a free-and-clear investment property, less any payoff of existing liens.'],
    ],
  },
  {
    slug: 'rental-dscr', short: 'Rental / DSCR Loans', title: 'DSCR Rental Loans', ico: '🏘️', type: 'dscr',
    tag: 'Long-term',
    blurb: '30-year investor loans qualified on the property’s rent-to-payment ratio instead of your personal income. The standard exit for BRRRR.',
    terms: { 'Rates': '6.0% – 8.0%', 'Points': '0 – 2', 'Max LTV': '75% – 80%', 'Min DSCR': '0.75 – 1.25', 'Loan size': '$75K – $3M', 'Term': '30-yr fixed / ARM', 'Close in': '2 – 4 weeks', 'Min FICO': '660 – 680' },
    desc: 'DSCR loans explained for 2026: how the ratio is calculated, rates, LTV, seasoning and how investors use DSCR financing to refinance out of hard money. Calculator included.',
    intro: `A DSCR loan (debt service coverage ratio loan) is a long-term mortgage for rental property where qualification rests on one question: does the property's rent cover the proposed payment? No W-2s, no tax returns, no debt-to-income ratio. For hard money borrowers it is the most common way to refinance a flip into a hold.`,
    sections: [
      ['How DSCR is calculated', `<p>DSCR = gross monthly rent ÷ monthly PITIA (principal, interest, taxes, insurance and association dues). A property renting for $2,400 with a $2,000 PITIA has a DSCR of 1.20. Most lenders want 1.0 to 1.25 for best pricing; several will lend below 1.0 — even to 0.75 — at lower leverage and higher rates. Market rent is set by the appraiser's rent schedule (Form 1007), with the lease amount used if lower in some programs.</p>
<p>Run your numbers in the <a href="/calculators/dscr/">DSCR calculator</a>.</p>`],
      ['Program features', `<ul><li>30-year fixed, 5/6 and 7/6 ARMs, and 10-year interest-only options.</li><li>Purchase, rate-and-term and cash-out refinance; portfolio loans covering 5 to 20+ properties on one note.</li><li>Short-term rentals qualified on AirDNA-style projections at some lenders.</li><li>Vesting in an LLC is allowed and usually preferred.</li><li>Prepayment penalties are standard (3-2-1 or 5-4-3-2-1 step-downs) and can be bought out with points.</li></ul>`],
      ['Using DSCR as the hard money exit', `<p>The sequence investors call BRRRR — buy, rehab, rent, refinance, repeat — is really a two-loan structure: a <a href="/loans/fix-and-flip/">fix and flip loan</a> for acquisition and construction, then a DSCR refinance at up to 75–80% of the new appraised value. Order your DSCR pre-qualification while the rehab is underway, confirm the lender's seasoning rule (many allow cash-out on new value after 3 to 6 months of ownership; some have none if rehab is documented), and keep your credit clean during the project.</p>`],
    ],
    faqs: [
      ['What credit score do I need for a DSCR loan?', 'Most programs start at 660 with best pricing above 740. Credit affects both rate and maximum LTV.'],
      ['Do DSCR loans report to my personal credit?', 'Usually not when the borrower is an LLC, though you sign a personal guarantee. Confirm with each lender.'],
      ['Can I get a DSCR loan with no rental history?', 'Yes. Purchases and newly renovated properties qualify on the appraiser’s market-rent opinion.'],
    ],
  },
  {
    slug: 'new-construction', short: 'Construction Loans', title: 'Ground-Up Construction Loans', ico: '🏗️', type: 'construction',
    blurb: 'Financing for infill builders and spec developers: land plus vertical costs with a draw schedule tied to construction milestones.',
    terms: { 'Rates': '9.0% – 12.0%', 'Points': '1.5 – 3', 'Max LTC': '80% – 90%', 'Max LTV (ARV)': '65% – 75%', 'Loan size': '$150K – $10M+', 'Term': '12 – 24 months', 'Draws': '24 – 72 hours', 'Experience': 'Usually 1+ builds' },
    desc: 'Ground-up construction loans from private lenders: leverage, draw schedules, 2026 rates, builder requirements and how to structure land plus vertical financing.',
    intro: `Private construction loans finance the land (or lot payoff) and the hard and soft costs of building, with funds advanced in draws as inspections confirm progress. They move far faster than bank construction lending and tolerate spec builds, but they price for the risk: construction is the one segment where most lenders insist on a track record.`,
    sections: [
      ['How construction loans are sized', `<p>Lenders look at loan-to-cost (total project budget including land, soft costs, contingency and interest reserve) and loan-to-completed-value. A typical structure is 85% of cost capped at 70% of the completed appraised value, with the land advance limited to 50–75% of the lot's value or purchase price. An interest reserve for the full term is usually built into the loan so there are no out-of-pocket payments during construction.</p>`],
      ['Draw schedule mechanics', `<p>The budget is broken into line items — foundation, framing, rough mechanicals, drywall, finishes — and funds release after each milestone is inspected. Expect a 5–10% retainage held to completion, inspection fees of $200–$400 per draw, and 2–5 business days from request to wire at a well-run lender. Change orders need lender approval, and a 10% contingency line prevents a stalled project.</p>`],
      ['What lenders require', `<ul><li>Approved plans and permits (or permit-ready status) at closing.</li><li>General contractor with license, insurance and references; owner-builders are accepted by fewer lenders.</li><li>Detailed budget and construction timeline; builder's risk insurance.</li><li>Liquidity for the down payment and a contingency, plus 660+ credit.</li><li>Experience: one or more completed ground-up projects for best terms; first-time builders can qualify with a strong GC and more equity.</li></ul>`],
    ],
    faqs: [
      ['Can I use a construction loan to build a rental I will keep?', 'Yes. This is the build-to-rent model: a private construction loan during the build, then a DSCR refinance once leased.'],
      ['Do construction loans cover land purchase?', 'Most do, up to a limit of the land’s value. Some lenders require the land to be owned or under contract with equity already in it.'],
    ],
  },
  {
    slug: 'commercial', short: 'Commercial Bridge', title: 'Commercial Hard Money Loans', ico: '🏢', type: 'commercial',
    blurb: 'Asset-based loans on multifamily (5+ units), mixed-use, retail, office, industrial, hospitality and land when speed or story matters more than rate.',
    terms: { 'Rates': '9.0% – 13.0%', 'Points': '1.5 – 3', 'Max LTV': '55% – 70%', 'Loan size': '$500K – $75M', 'Term': '12 – 36 months', 'Close in': '2 – 4 weeks', 'Recourse': 'Varies', 'Payments': 'IO, reserve common' },
    desc: 'Commercial hard money and bridge loans: multifamily, mixed-use, retail, office, industrial and land. Leverage, pricing, use cases and how to present a deal to private lenders.',
    intro: `Commercial hard money fills the gap when a property or sponsor does not fit bank or agency boxes: value-add multifamily with low occupancy, a retail center with lease-up risk, an office conversion, a hotel repositioning, or land with entitlements in progress. Leverage is lower than residential and the diligence is heavier, but a decision in days rather than months is often what wins the deal.`,
    sections: [
      ['Typical uses', `<ul><li>Acquisition of under-performing or vacant commercial assets.</li><li>Cash-out to recapitalize a partnership or fund tenant improvements.</li><li>Discounted payoff of a maturing CMBS or bank loan.</li><li>Land acquisition with entitlement risk, or horizontal development.</li><li>Special situations: partner buyouts, tax liens, bankruptcy exits.</li></ul>`],
      ['How commercial lenders underwrite', `<p>Expect a focus on as-is value, stabilized value and the business plan that connects them. Sponsors need relevant experience, a credible budget and timeline, and liquidity for reserves. Third-party reports (appraisal, environmental Phase I, property condition) add two to three weeks and $5,000–$15,000 in cost. Larger loans are often structured with an interest reserve, a completion guarantee and springing recourse.</p>`],
      ['Presenting a deal', `<p>A one- to two-page executive summary wins faster responses: property and location, purchase price or payoff, as-is and stabilized values with support, sources and uses, business plan with milestones, exit, sponsor bio and liquidity. Submit it through the <a href="/apply/">funding request</a> and attach rent rolls and T-12 operating statements where available.</p>`],
    ],
    faqs: [
      ['What is the minimum commercial hard money loan?', 'Most commercial-focused private lenders start at $500,000 to $1 million; residential-focused lenders will do 5–10 unit multifamily from about $250,000.'],
      ['Is commercial hard money non-recourse?', 'Sometimes at lower leverage (55–60% LTV) with strong collateral; most loans carry a personal guarantee or at least bad-boy carve-outs.'],
    ],
  },
  {
    slug: 'bad-credit', short: 'Bad Credit Options', title: 'Hard Money Loans With Bad Credit', ico: '🛠️', type: 'fix-flip',
    blurb: 'What is realistic with a 550–640 score: which lenders look past credit, what they require instead, and how to improve your terms.',
    terms: { 'Rates': '10.5% – 14.0%', 'Points': '2 – 4', 'Max LTC': '65% – 80%', 'Max ARV': '60% – 70%', 'Min FICO': '550 – 620', 'Down payment': '20% – 35%', 'Term': '6 – 12 months', 'Reserves': '6+ months' },
    desc: 'Hard money loans with bad credit: realistic minimum scores, how asset-based lenders compensate for credit with equity and experience, costs, and steps to better terms.',
    intro: `Hard money is asset-based, so credit matters less than it does at a bank — but “less” is not “not at all.” National fix and flip lenders typically floor at 600 to 660. Below that, you are working with regional private lenders and individual investors who compensate for credit risk with lower leverage, more points and shorter terms. Here is what is realistic and how to make a low-score file fundable.`,
    sections: [
      ['What lenders look at instead of your score', `<ul><li><strong>Equity:</strong> a 25–35% down payment and a loan under 65% of ARV makes the collateral do the talking.</li><li><strong>The deal:</strong> a clean, well-supported spread between all-in cost and ARV.</li><li><strong>Experience:</strong> documented completed projects can override a thin credit file.</li><li><strong>Liquidity:</strong> verified reserves covering six or more months of interest.</li><li><strong>Credit story:</strong> medical collections or a years-old short sale read differently from recent mortgage lates or an open bankruptcy.</li></ul>`],
      ['What it costs', `<p>Expect 10.5% to 14% interest, 2 to 4 points and a 6- to 12-month term, often with a prepaid interest reserve. On a $200,000 loan that is roughly $4,000–$8,000 in points plus $1,750–$2,300 per month in interest. Model the full cost before committing with the <a href="/calculators/hard-money-loan/">hard money cost calculator</a>.</p>`],
      ['Ways to improve your terms', `<ol><li>Bring a partner or co-guarantor with strong credit and experience.</li><li>Offer cross-collateral: a second property with equity can replace a down payment or raise leverage.</li><li>Clean up quick wins — pay down revolving balances below 30%, dispute errors, resolve small collections — 30 to 60 days before applying.</li><li>Start with a smaller, simpler project to build a track record.</li><li>Ask about a profit-share or joint-venture structure with a local private lender.</li></ol>`],
    ],
    faqs: [
      ['What is the lowest credit score for a hard money loan?', 'Some regional private lenders have no stated minimum and lend purely on equity; most institutional hard money lenders require 600–660. Below 580 expect to need 35%+ equity and a strong exit.'],
      ['Do hard money lenders pull credit?', 'Nearly all do, usually a soft pull at pre-qualification and a hard pull before closing. The score is used for pricing tiers more than approval.'],
      ['Can a recent bankruptcy be financed?', 'A discharged Chapter 7 is often acceptable after 12–24 months with equity; open bankruptcies are generally not fundable.'],
    ],
  },
  {
    slug: 'land', short: 'Land & Lot Loans', title: 'Land and Lot Loans From Private Lenders', ico: '🌄', type: 'land',
    blurb: 'Short-term financing for entitled lots, infill land and acreage with a clear development or resale plan.',
    terms: { 'Rates': '10.0% – 14.0%', 'Points': '2 – 4', 'Max LTV': '40% – 60%', 'Loan size': '$100K – $10M', 'Term': '6 – 24 months', 'Entitlements': 'Preferred', 'Payments': 'IO or reserve', 'Exit': 'Construction loan / sale' },
    desc: 'Private land and lot loans: how lenders value raw vs entitled land, leverage limits, pricing and how to pair a land loan with a ground-up construction loan.',
    intro: `Land is the hardest asset class to finance because it produces no income and its value depends on what can be built. Banks rarely lend on it; private lenders will, at conservative leverage, when the path to an exit — permits, construction financing or a resale to a builder — is clear.`,
    sections: [
      ['Raw vs. entitled land', `<p>Raw acreage with no utilities or zoning approvals typically caps at 35–50% LTV. Entitled, shovel-ready infill lots in strong metros can reach 60–65% and are often rolled directly into a <a href="/loans/new-construction/">construction loan</a>. Lenders will want a survey, zoning letter, utility availability and, ideally, approved plans.</p>`],
      ['What to prepare', `<ul><li>Purchase contract and title commitment.</li><li>Appraisal or broker opinion supported by lot sales, not just acreage comps.</li><li>Entitlement status with timeline to permits.</li><li>Development budget and a construction lender's term sheet or pre-approval.</li><li>Sponsor liquidity; land loans frequently require interest to be prepaid.</li></ul>`],
    ],
    faqs: [
      ['Can I finance land and construction with one loan?', 'Yes — many construction lenders fund the lot acquisition or payoff as the first draw, which is usually cheaper than two separate loans.'],
    ],
  },
];
