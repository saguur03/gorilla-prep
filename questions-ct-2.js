/* Critical Thinking — expansion bank (2026 expansion to support 20 questions/day).

   These append to QUESTION_BANK.ct, so the ids of the original 100 questions are
   untouched and their Spanish translations stay correctly mapped.

   Every question carries `type` and `d` explicitly: the difficulty-default IIFE lives at
   the end of questions-ct.js and has already run by the time this file loads.

   Prompt style follows the post-audit standard: 75-95 words of realistic business
   context before the question stem. */
window.QUESTION_BANK = window.QUESTION_BANK || {};
window.QUESTION_BANK.ct = window.QUESTION_BANK.ct || [];

(function(){
var Q = [

/* ---------- WEAKEN ---------- */
{
  type: "weaken", d: 2,
  prompt: "A software company replaced its open-plan floor with height-adjustable standing desks after employees complained of back pain. In the two quarters that followed, the average number of story points completed per engineer rose by 18%. The head of workplace operations presented these figures to the board and argued that the desk investment should be extended to the company's other three offices, since standing desks evidently make engineers more productive.\n\nWhich of the following, if true, most weakens the argument?",
  choices: [
    "The desks cost roughly $900 each, more than the chairs they replaced.",
    "In the same two quarters the company adopted a new project-management system that broke large tasks into smaller stories.",
    "A minority of engineers said they rarely raised their desks above sitting height.",
    "Back-pain complaints did not fall as much as the operations team had hoped."
  ],
  answer: 1,
  explanation: "Story points are a unit of measurement, not a fixed quantity of work. If tasks were re-cut into smaller stories, the count per engineer would rise even with identical output, so the entire observed gain may be a measurement artefact. Cost, partial adoption and unchanged back pain all leave the productivity claim itself standing."
},
{
  type: "weaken", d: 2,
  prompt: "An online retailer analysed two years of data and found that products with more than fifty customer reviews sell, on average, four times as many units per month as products with fewer than ten reviews. The marketing director has proposed paying customers a small credit to leave reviews on slow-moving products, on the grounds that accumulating reviews will lift those products' sales.\n\nWhich of the following, if true, most weakens the proposal?",
  choices: [
    "Reviews accumulate on a product mainly because it already sells in high volume.",
    "Some customers say they read only the most recent two or three reviews.",
    "The credit would cost the retailer about forty cents per review collected.",
    "Competing retailers have run similar review-incentive schemes."
  ],
  answer: 0,
  explanation: "The proposal assumes reviews drive sales, but the correlation is equally consistent with sales driving reviews: more buyers simply produce more reviewers. If that is the direction of causation, manufacturing reviews on a slow product changes nothing. How many reviews shoppers read, the unit cost, and competitor behaviour do not address the direction of the relationship."
},
{
  type: "weaken", d: 2,
  prompt: "A manufacturing group introduced a mandatory eight-hour safety course at its Riverside plant. Recordable injuries at Riverside fell from 42 in the year before the course to 19 in the year after. The group's safety officer has recommended rolling the course out to all eleven plants, arguing that the Riverside figures show the training roughly halves injury rates.\n\nWhich of the following, if true, most weakens the recommendation?",
  choices: [
    "The course was delivered by an external provider at significant cost.",
    "Riverside runs older equipment than most of the group's other plants.",
    "Riverside also moved from two shifts to one during the same year, cutting hours worked by 45%.",
    "A few Riverside employees said the course covered hazards they never encounter."
  ],
  answer: 2,
  explanation: "Injury counts scale with exposure. If hours worked fell by 45%, a drop from 42 to 19 is close to what you would expect with no change in safety at all, because the injury rate per hour barely moved. Cost, equipment age and course relevance say nothing about whether the observed fall reflects the training."
},
{
  type: "weaken", d: 2,
  prompt: "A consulting firm noticed that consultants who opted into its voluntary remote-work scheme resigned at less than half the rate of consultants who remained office-based. The people director has argued that making remote work universal would cut the firm's overall attrition, which currently sits well above the industry benchmark and costs an estimated $4m a year in replacement hiring.\n\nWhich of the following, if true, most weakens the people director's argument?",
  choices: [
    "The remote scheme was open only to consultants who had passed their third-year review and were on partner track.",
    "Some office-based consultants said they preferred the informal learning that comes from sitting near colleagues.",
    "Remote consultants bill slightly fewer hours per month than office-based ones.",
    "The industry benchmark for attrition has risen over the past two years."
  ],
  answer: 0,
  explanation: "Eligibility was restricted to senior consultants on partner track — exactly the group least likely to leave in any firm. The retention gap therefore reflects who was allowed into the scheme, not what the scheme does. Extending remote work to everyone would not turn junior consultants into partner-track ones. The other options do not touch the selection problem."
},
{
  type: "weaken", d: 2,
  prompt: "A grocery chain launched a points-based loyalty card. Analysis shows that cardholders spend $87 per month at the chain against $34 for non-cardholders. The chief marketing officer wants to spend $2m converting the remaining non-cardholders, projecting that each conversion will add roughly $50 of monthly spend on the strength of this gap.\n\nWhich of the following, if true, most weakens the projection?",
  choices: [
    "The card is offered free at every checkout and takes about a minute to sign up for.",
    "Shoppers who already do most of their weekly shopping at the chain are far more likely to bother signing up.",
    "A small number of cardholders never redeem the points they accumulate.",
    "The chain's main competitor also operates a loyalty scheme."
  ],
  answer: 1,
  explanation: "Self-selection again: the card attracts people who were already heavy shoppers, so the $53 gap largely measures who signs up rather than what signing up does. Converting an occasional shopper would not import the loyal shopper's basket. Ease of signup, unredeemed points and competitor schemes leave that confound untouched."
},
{
  type: "weaken", d: 2,
  prompt: "A B2B software vendor rolled out a new CRM system to its sales team in January. Over the following year the team's win rate on qualified opportunities climbed from 22% to 31%. The sales operations lead has written a case study attributing the improvement to the CRM and is using it to justify a further $1.4m of tooling spend.\n\nWhich of the following, if true, most weakens the case study's conclusion?",
  choices: [
    "The CRM required each representative to log roughly twenty minutes of data per day.",
    "In January the company also tightened its definition of a qualified opportunity, excluding the smallest and least likely deals.",
    "Two representatives said they found the old system easier to navigate.",
    "The win rate rose most sharply in the fourth quarter."
  ],
  answer: 1,
  explanation: "Win rate is wins divided by qualified opportunities. Tightening the qualification bar removes the deals least likely to close from the denominator, which raises the ratio arithmetically without a single extra sale. The definitional change and the CRM launched together, so the CRM may deserve none of the credit. Logging time and user preference are irrelevant to the measured effect."
},
{
  type: "weaken", d: 2,
  prompt: "A bank surveyed staff at its head office before and after a $3m refurbishment of the canteen and social spaces. Reported satisfaction with the workplace rose from 54% to 71%. The facilities director has recommended the same refurbishment at six regional offices, arguing that the head-office result shows the investment reliably lifts satisfaction by around seventeen points.\n\nWhich of the following, if true, most weakens the recommendation?",
  choices: [
    "The second survey was distributed a week after staff learned that annual bonuses would be 20% higher than forecast.",
    "The refurbishment took four months and caused some disruption while it was underway.",
    "Regional offices have smaller canteens than the head office.",
    "Satisfaction with pay was measured separately and is not included in the 71% figure."
  ],
  answer: 0,
  explanation: "A large unexpected bonus is a powerful competing explanation for a jump in general workplace satisfaction, and it landed immediately before the survey. That the pay question was scored separately does not help, because mood spills across survey items. Disruption and canteen size affect feasibility, not the causal inference."
},
{
  type: "weaken", d: 2,
  prompt: "A streaming service cut the price of its standard tier from $12 to $9 in one national market. Over the next six months, total subscription revenue in that market rose by 11%. The pricing team has proposed the same cut across all fourteen markets, arguing that the volume gain from a lower price more than compensates for the smaller margin per subscriber.\n\nWhich of the following, if true, most weakens the proposal?",
  choices: [
    "The test market was the only one in which a major competitor withdrew from the market during the same six months.",
    "Some subscribers on the standard tier rarely watch more than a few hours a month.",
    "The service's content budget is set annually and would not change with the price.",
    "Customer-service contacts fell slightly after the price change."
  ],
  answer: 0,
  explanation: "A competitor exiting hands the service that market's subscribers regardless of price, so the 11% may be windfall rather than elasticity. Because no other market has that windfall available, the result does not generalise. Light viewers, a fixed content budget and support volumes do not bear on why revenue rose."
},
{
  type: "weaken", d: 2,
  prompt: "A car manufacturer spent $40m on a national television campaign in the spring. A tracking study run in June found that unprompted brand awareness stood at 61%, against 44% in a comparable study run the previous June. The brand team has concluded that the campaign produced a seventeen-point lift and is requesting a similar budget for next year.\n\nWhich of the following, if true, most weakens the brand team's conclusion?",
  choices: [
    "The campaign ran on television only, with no digital component.",
    "In April the manufacturer was the subject of extensive national news coverage after a widely publicised product recall.",
    "The June study surveyed slightly more respondents than the previous year's.",
    "Awareness among respondents under thirty rose less than the overall average."
  ],
  answer: 1,
  explanation: "Unprompted awareness measures whether people can name the brand, not whether they think well of it. Heavy recall coverage would drive that number up sharply on its own, so the lift cannot be attributed to the campaign. Channel mix, a marginally larger sample and demographic variation do not supply a competing cause."
},
{
  type: "weaken", d: 2,
  prompt: "A distributor switched its main freight provider in March. Average delivery time across its network fell from 4.1 days to 3.2 days over the following quarter. The logistics manager has recommended moving the remaining regional lanes to the same provider, presenting the network figure as evidence that the new carrier is roughly a day faster.\n\nWhich of the following, if true, most weakens the recommendation?",
  choices: [
    "The new provider charges about 6% more per shipment than the previous one.",
    "In February the distributor opened two new regional warehouses, shortening the distance to most customers.",
    "The previous provider had held the contract for eleven years.",
    "A handful of shipments under the new provider arrived later than promised."
  ],
  answer: 1,
  explanation: "New warehouses closer to customers shorten delivery times mechanically, and they opened a month before the carrier switch, so the two effects are entangled. The network average cannot separate them, and the warehouse effect would not repeat on lanes that already run short. Price, incumbency and a few late shipments do not explain the improvement away."
},
{
  type: "weaken", d: 2,
  prompt: "An insurer introduced a voluntary wellness programme offering gym subsidies and health screening. Employees who joined took an average of 3.1 sick days last year against 6.8 for those who did not. The HR director has proposed making participation compulsory, projecting savings of roughly $1.1m a year in absence cover on the strength of the difference.\n\nWhich of the following, if true, most weakens the projection?",
  choices: [
    "The programme costs about $340 per participating employee per year.",
    "Employees managing chronic health conditions were far less likely to sign up for a gym-based programme.",
    "The screening component identified several previously undiagnosed conditions.",
    "Sick days across the industry fell slightly last year."
  ],
  answer: 1,
  explanation: "If the employees most prone to absence were the least likely to join, the gap measures who opted in rather than what the programme achieves. Compulsory participation would sweep in exactly the group that stayed out, and their sick days would not fall to the volunteers' level. The cost figure and the industry trend do not address the selection effect."
},
{
  type: "weaken", d: 2,
  prompt: "A homeware chain redesigned the layout of one store, moving high-margin accessories to the main aisle. Over the following three months the store's average basket value rose from $41 to $53. The retail operations team has budgeted $6m to redesign all ninety stores, using the pilot store's twelve-dollar gain as the basis for the return calculation.\n\nWhich of the following, if true, most weakens the return calculation?",
  choices: [
    "The pilot store is the only one of the ninety located inside a shopping centre that opened a new anchor tenant during the trial.",
    "The redesign took eight days, during which the pilot store traded at reduced capacity.",
    "Some staff found the new layout harder to restock.",
    "Accessories carry a higher margin than the chain's furniture lines."
  ],
  answer: 0,
  explanation: "A new anchor tenant changes the footfall mix at that centre, which moves basket value independently of shelf layout. Since no other store enjoys that change, the pilot's gain is not a safe basis for forecasting ninety redesigns. Downtime, restocking difficulty and the margin structure do not compete as causes of the basket increase."
},
{
  type: "weaken", d: 2,
  prompt: "A call centre replaced its flat hourly wage with a bonus tied to calls resolved per shift. Average calls resolved per agent rose 24% in the following quarter. The operations director has recommended extending the scheme to the company's two other centres, arguing that the bonus demonstrably raises agent output.\n\nWhich of the following, if true, most weakens the recommendation?",
  choices: [
    "The bonus adds roughly 9% to the average agent's pay.",
    "Under the new scheme agents mark a call resolved at the end of the conversation, and repeat calls about the same issue rose by a third.",
    "Some agents said the scheme made shifts feel more pressured.",
    "The centre's headcount was unchanged over the quarter."
  ],
  answer: 1,
  explanation: "A third more repeat calls suggests the same problems are being counted several times: agents are closing conversations rather than resolving issues. The 24% may therefore measure gaming of the metric rather than genuine output, and the same incentive would produce the same distortion elsewhere. Pay levels, perceived pressure and stable headcount do not undercut the figure."
},
{
  type: "weaken", d: 2,
  prompt: "A technology firm introduced an automated CV-screening tool. Among candidates hired through the tool, 84% received a strong rating at their first annual review, against 66% for candidates hired through the previous manual process. The talent lead has argued that the tool identifies stronger candidates and should be extended to senior hiring.\n\nWhich of the following, if true, most weakens the argument?",
  choices: [
    "The tool was used only for graduate roles, where first-year ratings are generally higher than in experienced hires.",
    "The tool takes about four seconds to screen each application.",
    "A small number of managers said they did not trust automated screening.",
    "The firm receives several thousand applications per graduate intake."
  ],
  answer: 0,
  explanation: "The two groups are not comparable: if graduate roles produce higher first-year ratings generally, the eighteen-point gap reflects the role mix, not screening quality. Extending the tool to senior hiring is exactly the extrapolation the data cannot support. Processing speed, manager sentiment and application volume are beside the point."
},

/* ---------- STRENGTHEN ---------- */
{
  type: "strengthen", d: 2,
  prompt: "A hotel group is considering replacing single-use toiletries with refillable dispensers across its 60 properties. The sustainability team estimates the switch would save $1.8m a year in consumables. The finance director is unconvinced, noting that the group's guest-satisfaction scores are its main competitive asset and that some guests may read the change as a downgrade.\n\nWhich of the following, if true, most strengthens the case for the switch?",
  choices: [
    "Refillable dispensers have become common in the group's market segment.",
    "In a twelve-month trial across eight properties, satisfaction scores were statistically unchanged while consumables spend fell as projected.",
    "The group has publicly committed to reducing plastic waste.",
    "Single-use toiletries are supplied by a single vendor whose contract expires next year."
  ],
  answer: 1,
  explanation: "The finance director's objection is specifically that satisfaction may fall. A twelve-month trial across eight properties tests that objection directly and finds no effect, while confirming the savings. Market norms and public commitments are reasons to want the change, not evidence it is safe; the contract expiry affects timing only."
},
{
  type: "strengthen", d: 2,
  prompt: "An architecture practice is debating a move to a four-day week with no reduction in pay. The managing partner argues that billable output would hold because most of the fifth day is consumed by low-value coordination. Several senior architects are sceptical, pointing out that client deadlines will not shorten to match and that the practice already runs close to capacity.\n\nWhich of the following, if true, most strengthens the managing partner's argument?",
  choices: [
    "Staff at the practice have said they would welcome a four-day week.",
    "Time-tracking data shows that 31% of Friday hours across the past two years were logged to internal coordination that could be consolidated into other days.",
    "Several competitor practices have announced four-day-week trials.",
    "The practice's utilisation rate is measured monthly rather than weekly."
  ],
  answer: 1,
  explanation: "The partner's claim is that the fifth day is mostly low-value coordination. Two years of time-tracking showing 31% of Friday hours going to consolidatable internal work is direct evidence for exactly that premise. Staff enthusiasm and competitor announcements are not evidence about the practice's own output; the measurement period is irrelevant."
},
{
  type: "strengthen", d: 2,
  prompt: "A professional services firm runs a mentorship scheme pairing junior staff with partners. Mentees are promoted to manager 40% faster than non-mentees. The head of talent wants to expand the scheme firm-wide, but the executive committee suspects the pattern reflects partners choosing to mentor the people already marked as high performers.\n\nWhich of the following, if true, most strengthens the head of talent's position?",
  choices: [
    "Mentees report higher job satisfaction than non-mentees.",
    "Mentors are assigned by lottery among all juniors who apply, and applicants' prior performance ratings are indistinguishable from non-applicants'.",
    "The scheme costs the firm little beyond partner time.",
    "Several mentees have said the scheme helped them understand the promotion criteria."
  ],
  answer: 1,
  explanation: "The committee's objection is selection: partners cherry-picking stars. Random assignment among applicants, combined with applicants and non-applicants having indistinguishable prior ratings, removes both the cherry-picking and the self-selection channel, leaving the scheme itself as the explanation. Satisfaction, low cost and testimonials do not address selection."
},
{
  type: "strengthen", d: 2,
  prompt: "A ceramics exporter is considering a thicker moulded insert for its packaging. The operations manager projects that breakage in transit, currently 3.4% of units shipped, would fall to under 1%, comfortably justifying the extra $0.35 per unit in packaging cost. The finance team notes that no one has established where the breakages actually occur.\n\nWhich of the following, if true, most strengthens the operations manager's projection?",
  choices: [
    "The new insert is made from recycled material.",
    "Damage inspection records show that 92% of breakages involve impact fractures of the kind the insert is designed to absorb.",
    "The insert has been used successfully by a manufacturer of glassware.",
    "The exporter's main competitor uses a similar insert."
  ],
  answer: 1,
  explanation: "The finance team's gap is that nobody knows the breakage mechanism. Inspection records showing 92% of breakages are impact fractures — precisely what the insert absorbs — fills that gap and makes the projected reduction credible. Recycled material is irrelevant; use by a glassware maker or a competitor does not establish the mechanism in this product."
},
{
  type: "strengthen", d: 2,
  prompt: "A utility company plans to deploy a chatbot to handle routine billing enquiries, projecting a $2.4m annual reduction in contact-centre cost. The customer director objects that if the chatbot handles simple queries badly, customers will escalate to an agent anyway and the company will pay for both channels.\n\nWhich of the following, if true, most strengthens the case for deployment?",
  choices: [
    "The chatbot can be deployed in under three months.",
    "In a six-month pilot on 15% of billing traffic, 78% of chatbot conversations closed without escalation and overall handling cost per enquiry fell by a third.",
    "Billing enquiries make up the largest single category of contact-centre volume.",
    "The chatbot uses the same knowledge base as human agents."
  ],
  answer: 1,
  explanation: "The objection is specifically about escalation eating the savings. Pilot data showing 78% of conversations closing without escalation and a one-third fall in cost per enquiry addresses that objection with measured outcomes. Deployment speed, category size and a shared knowledge base describe the plan rather than test the risk."
},
{
  type: "strengthen", d: 2,
  prompt: "A cosmetics brand is considering charging different prices in different regions rather than a single national price. The revenue team estimates a 5% margin gain. The general counsel worries that customers who discover the differences will react badly, and that the resulting reputational damage could outweigh the gain.\n\nWhich of the following, if true, most strengthens the revenue team's case?",
  choices: [
    "Regional pricing is standard practice in the brand's category.",
    "The brand ran regional pricing in two regions for eighteen months; awareness of the difference reached 4% of customers and repeat-purchase rates were unchanged.",
    "The brand's margins are currently below the category average.",
    "Regional pricing would be implemented through the existing point-of-sale system."
  ],
  answer: 1,
  explanation: "The counsel's worry is discovery and backlash. Eighteen months of live operation showing only 4% awareness and flat repeat purchase measures both halves of that worry directly. Category norms and thin margins are motives for trying it; the implementation route says nothing about customer reaction."
},
{
  type: "strengthen", d: 2,
  prompt: "A distribution business is evaluating a $9m investment in warehouse robotics, projected to pay back in under four years through reduced picking labour. The chief operating officer is cautious: the warehouse handles an unusually wide range of item shapes, and she has seen robotics projects elsewhere stall on exactly that.\n\nWhich of the following, if true, most strengthens the case for the investment?",
  choices: [
    "The robotics vendor has installed similar systems in twenty warehouses.",
    "A four-month on-site trial ran the proposed system against the business's own full item range and achieved the projected pick rate on 97% of SKUs.",
    "Picking labour is the business's largest single warehouse cost.",
    "The investment could be financed at a favourable rate."
  ],
  answer: 1,
  explanation: "The COO's specific concern is item-shape variety in this warehouse. A trial run against the business's own full SKU range, hitting the projected rate on 97% of items, tests that concern in the exact conditions that matter. Vendor track record elsewhere, cost structure and financing terms do not answer the shape question."
},
{
  type: "strengthen", d: 2,
  prompt: "A software company is redesigning onboarding for new engineers, aiming to cut the time to first independent code deployment from eleven weeks to six. The engineering director argues the investment is worth roughly $700,000 a year in recovered productive time. The CFO responds that faster ramp-up may simply mean engineers deploy sooner and break more.\n\nWhich of the following, if true, most strengthens the engineering director's case?",
  choices: [
    "The redesign would be built by the existing developer-experience team.",
    "Two teams piloted the redesigned onboarding; median time to first deployment fell to seven weeks and their post-deployment defect rate matched the company average.",
    "New engineers currently report frustration with the length of onboarding.",
    "The eleven-week figure is longer than at comparable companies."
  ],
  answer: 1,
  explanation: "The CFO's objection is a quality trade-off. Pilot data showing the ramp-up nearly halved while defect rates stayed at the company average addresses precisely that trade-off. Who builds the redesign, how engineers feel, and how competitors compare do not test whether speed costs quality."
},
{
  type: "strengthen", d: 2,
  prompt: "A bottling plant is considering a shift from repair-on-failure to scheduled preventive maintenance. The plant manager projects that unplanned downtime, currently costing about $3m a year, would fall by half. The finance director notes that preventive maintenance means taking working machines offline, which is itself downtime.\n\nWhich of the following, if true, most strengthens the plant manager's projection?",
  choices: [
    "Preventive maintenance is the industry standard for bottling lines.",
    "Sister plants that made the same switch cut unplanned downtime by 55% while planned maintenance added back less than a fifth of the hours saved.",
    "The plant's maintenance team is experienced and well regarded.",
    "Spare parts for the plant's machines are readily available."
  ],
  answer: 1,
  explanation: "The finance director's point is that planned downtime offsets the unplanned downtime avoided. Sister-plant data quantifying both sides — 55% reduction against under a fifth added back — shows the net is strongly positive in comparable operations. Industry practice, team quality and parts availability do not quantify the trade-off."
},
{
  type: "strengthen", d: 2,
  prompt: "A logistics firm serving European clients is considering funding business-language training for its account managers, at about $4,000 per manager. The commercial director argues it will improve client retention, currently 81%. The board is unconvinced, noting that most clients already conduct meetings in English and that retention is usually driven by service reliability.\n\nWhich of the following, if true, most strengthens the commercial director's case?",
  choices: [
    "The training provider is well regarded and has flexible scheduling.",
    "Exit interviews with departing clients over three years cite difficulty communicating with their account manager as a contributing factor in 38% of cases.",
    "Account managers have expressed interest in language training.",
    "Several competitors offer language training to their staff."
  ],
  answer: 1,
  explanation: "The board doubts that language matters to retention at all. Three years of exit interviews naming communication difficulty in 38% of departures is direct evidence that it does, converting the proposal from a guess into a targeted fix. Provider quality, staff interest and competitor practice do not establish the link to retention."
}
,

/* ---------- INFERENCE ---------- */
{
  type: "inference", d: 2,
  prompt: "A regional bank reviewed its lending file after a supervisory visit. Every loan approved by the credit committee in the past two years was supported by an independent valuation. Some loans in the same period were approved under the branch manager's delegated authority rather than by the committee. All loans over $500,000, without exception, went to the credit committee.\n\nWhich of the following must be true on the basis of these statements?",
  choices: [
    "Every loan over $500,000 approved in the past two years was supported by an independent valuation.",
    "No loan approved under delegated authority was supported by an independent valuation.",
    "Most loans in the past two years were approved by the credit committee.",
    "Loans under $500,000 were never sent to the credit committee."
  ],
  answer: 0,
  explanation: "All loans over $500,000 went to the committee, and every committee-approved loan had an independent valuation, so the chain gives the first option with certainty. The second overreaches: the statements never say delegated loans lacked valuations, only that committee loans had them. Nothing establishes proportions, and 'all large loans went to committee' does not stop smaller ones from going too."
},
{
  type: "inference", d: 2,
  prompt: "A manufacturer keeps records on its supplier base. Every supplier that has held ISO certification for more than five years has passed its last three quality audits. Some suppliers that passed their last three audits are based outside the European Union. No supplier based outside the European Union has held ISO certification for more than five years.\n\nWhich of the following can be properly inferred?",
  choices: [
    "Every supplier that passed its last three audits holds ISO certification.",
    "Some suppliers that passed their last three audits have not held ISO certification for more than five years.",
    "No supplier outside the European Union has passed a quality audit.",
    "Most long-certified suppliers are based in the European Union."
  ],
  answer: 1,
  explanation: "Some audit-passers are non-EU, and no non-EU supplier has been certified for over five years, so those particular audit-passers cannot be long-certified — which is exactly the second option. The first reverses the conditional. The third contradicts the premise that some non-EU suppliers passed. 'Most' asserts a proportion the statements never give."
},
{
  type: "inference", d: 2,
  prompt: "A publishing house tracks its output. Every title that sold more than 50,000 copies last year was released in both hardback and paperback. Some titles released in both formats were translated into at least three languages. All translated titles received a marketing budget above $20,000.\n\nWhich of the following must be true?",
  choices: [
    "Every title released in both formats sold more than 50,000 copies.",
    "Some titles that received a marketing budget above $20,000 were released in both hardback and paperback.",
    "Every title that sold more than 50,000 copies was translated.",
    "No title with a small marketing budget sold well."
  ],
  answer: 1,
  explanation: "Some dual-format titles were translated, and all translated titles had budgets above $20,000, so those titles are both dual-format and well funded — which the second option asserts. The first and third reverse the given conditionals, and the fourth invents a claim about poorly funded titles that the statements never license."
},
{
  type: "inference", d: 2,
  prompt: "An airline reviewed its punctuality data. Every flight that departed late last quarter was operated by an aircraft that had flown at least three sectors that day. Some flights operated by such aircraft arrived within fifteen minutes of schedule. No flight that arrived within fifteen minutes of schedule was subject to a passenger compensation claim.\n\nWhich of the following must be true?",
  choices: [
    "Every flight operated by an aircraft on its fourth sector departed late.",
    "Some flights operated by aircraft on their third or later sector were not subject to a compensation claim.",
    "No flight that departed late arrived within fifteen minutes of schedule.",
    "Compensation claims arose only on flights that departed late."
  ],
  answer: 1,
  explanation: "Some multi-sector flights arrived on time, and on-time arrivals carried no compensation claims, so those flights were claim-free — the second option. The first reverses the conditional. The third is not established, since a late departure can still land near schedule. The fourth asserts a converse the statements never give."
},
{
  type: "inference", d: 2,
  prompt: "A pharmaceutical group audited its trial portfolio. Every trial that reached Phase III was reviewed by the external ethics board. Some trials reviewed by the ethics board were funded by a commercial partner. No trial funded by a commercial partner was conducted at a single site.\n\nWhich of the following can be properly inferred?",
  choices: [
    "Some trials reviewed by the ethics board were conducted at more than one site.",
    "Every trial reviewed by the ethics board reached Phase III.",
    "No Phase III trial was funded by a commercial partner.",
    "All multi-site trials were funded commercially."
  ],
  answer: 0,
  explanation: "Some ethics-reviewed trials were commercially funded, and no commercially funded trial was single-site, so those trials must have run at more than one site. The second reverses the conditional; the third contradicts nothing in the premises but is not entailed by them; the fourth reverses the site relationship."
},
{
  type: "inference", d: 2,
  prompt: "A retailer analysed its store estate. Every store that exceeded its annual sales target has a car park. Some stores with car parks are located in town centres. No store located in a town centre opened before 2015.\n\nWhich of the following must be true?",
  choices: [
    "Every store with a car park exceeded its sales target.",
    "Some stores with car parks opened in 2015 or later.",
    "No store that exceeded its target is in a town centre.",
    "All stores that opened before 2015 exceeded their targets."
  ],
  answer: 1,
  explanation: "Some car-park stores are in town centres, and no town-centre store opened before 2015, so those stores opened in 2015 or later. The first reverses the conditional. The third is unsupported: a town-centre store with a car park could well have beaten its target. The fourth is unconnected to anything stated."
},
{
  type: "inference", d: 2,
  prompt: "A law firm reviewed its matter records. Every matter billed above $200,000 was staffed with at least one partner. Some matters staffed with a partner were completed ahead of the agreed deadline. All matters completed ahead of deadline received a client satisfaction score of nine or ten.\n\nWhich of the following can be properly inferred?",
  choices: [
    "Every matter staffed with a partner was billed above $200,000.",
    "Some matters that scored nine or ten were staffed with a partner.",
    "Every matter billed above $200,000 finished ahead of deadline.",
    "No matter without a partner scored nine or ten."
  ],
  answer: 1,
  explanation: "Some partner-staffed matters finished early, and all early finishers scored nine or ten, so some high scorers were partner-staffed. The first and third reverse the given conditionals, and the fourth makes a claim about non-partner matters that the statements do not address at all."
},
{
  type: "inference", d: 2,
  prompt: "A university reviewed its research grants. Every grant above €1m was subject to an annual progress review. Some grants subject to annual review were held jointly with an industrial partner. No grant held jointly with an industrial partner was administered by the humanities faculty.\n\nWhich of the following must be true?",
  choices: [
    "Some grants subject to annual review were not administered by the humanities faculty.",
    "Every grant subject to annual review exceeded €1m.",
    "No grant above €1m involved an industrial partner.",
    "The humanities faculty held no grants above €1m."
  ],
  answer: 0,
  explanation: "Some annually reviewed grants had industrial partners, and no such grant sat in humanities, so those grants were outside humanities — the first option. The second reverses the conditional. The third and fourth assert links between grant size and faculty or partnership that the premises never establish."
},
{
  type: "inference", d: 2,
  prompt: "A shipping line reviewed its fleet. Every vessel that failed a port-state inspection last year was more than fifteen years old. Some vessels more than fifteen years old were retrofitted with new scrubbers. No vessel retrofitted with new scrubbers operates on the Baltic route.\n\nWhich of the following can be properly inferred?",
  choices: [
    "Every vessel more than fifteen years old failed an inspection.",
    "Some vessels more than fifteen years old do not operate on the Baltic route.",
    "No vessel that failed an inspection was retrofitted.",
    "All Baltic-route vessels are under fifteen years old."
  ],
  answer: 1,
  explanation: "Some old vessels were retrofitted, and no retrofitted vessel runs the Baltic route, so those vessels are off that route. The first reverses the conditional. The third and fourth are not entailed: a failed vessel could have been retrofitted afterwards, and old non-retrofitted vessels could still run the Baltic."
},
{
  type: "inference", d: 2,
  prompt: "An energy company reviewed its contracts. Every contract signed before the tariff reform includes an inflation-indexation clause. Some contracts with an indexation clause are with public-sector customers. No public-sector customer accepted a contract shorter than five years.\n\nWhich of the following must be true?",
  choices: [
    "Some contracts with an indexation clause run for five years or more.",
    "Every contract with an indexation clause was signed before the reform.",
    "No contract signed after the reform is with a public-sector customer.",
    "All five-year contracts are with public-sector customers."
  ],
  answer: 0,
  explanation: "Some indexed contracts are with public-sector customers, and those customers accepted nothing shorter than five years, so those contracts run five years or more. The second reverses the conditional; the third and fourth assert relationships between signing date, term and customer type that the premises do not support."
},
{
  type: "inference", d: 2,
  prompt: "A food producer reviewed its product lines. Every line that was reformulated last year now carries a reduced-sugar label. Some lines carrying a reduced-sugar label are sold through discount retailers. No line sold through discount retailers is packaged in glass.\n\nWhich of the following can be properly inferred?",
  choices: [
    "Every line with a reduced-sugar label was reformulated last year.",
    "Some lines with a reduced-sugar label are not packaged in glass.",
    "No reformulated line is sold through discount retailers.",
    "All glass-packaged lines were reformulated."
  ],
  answer: 1,
  explanation: "Some reduced-sugar lines go to discount retailers, and nothing sold there is in glass, so those lines are not glass-packaged. The first reverses the conditional. The third is unsupported, and the fourth invents a claim about glass packaging that the statements never make."
},
{
  type: "inference", d: 2,
  prompt: "A construction group reviewed its projects. Every project that finished within budget had a dedicated cost controller assigned from the outset. Some projects with a dedicated cost controller were delivered under a fixed-price contract. No fixed-price project in the sample ran longer than eighteen months.\n\nWhich of the following must be true?",
  choices: [
    "Some projects with a dedicated cost controller ran eighteen months or less.",
    "Every project with a cost controller finished within budget.",
    "No project that finished within budget was fixed-price.",
    "All projects longer than eighteen months overran their budgets."
  ],
  answer: 0,
  explanation: "Some cost-controller projects were fixed-price, and no fixed-price project exceeded eighteen months, so those projects ran eighteen months or less. The second reverses the conditional. The third and fourth make claims about budget outcomes and long projects that the premises leave open."
},
{
  type: "inference", d: 2,
  prompt: "A media group reviewed its subscription products. Every product that grew subscribers last quarter offers a student discount. Some products offering a student discount are bundled with a partner service. No product bundled with a partner service is available in more than two countries.\n\nWhich of the following can be properly inferred?",
  choices: [
    "Every product offering a student discount grew subscribers.",
    "Some products offering a student discount are available in no more than two countries.",
    "No product that grew subscribers is bundled with a partner service.",
    "Products available in three or more countries did not grow."
  ],
  answer: 1,
  explanation: "Some student-discount products are bundled, and bundled products are in at most two countries, so those products are limited to two countries or fewer. The first reverses the conditional; the third and fourth draw conclusions about growth and country coverage that the premises do not license."
},

/* ---------- FLAW ---------- */
{
  type: "flaw", d: 2,
  prompt: "A retail director addresses the board: 'Our customer research shows that 78% of shoppers say they would pay more for sustainably sourced products. Our sustainable range currently accounts for only 12% of sales. Clearly our shoppers are not finding the range, so the answer is better in-store signage.'\n\nWhich of the following most accurately describes a flaw in the director's reasoning?",
  choices: [
    "It assumes without support that stated willingness to pay more translates into actual purchasing behaviour.",
    "It fails to specify how much more shoppers said they would pay.",
    "It does not compare the company's performance against competitors.",
    "It relies on research conducted among existing rather than potential customers."
  ],
  answer: 0,
  explanation: "The gap between the 78% figure and the 12% outcome only counts as evidence of a discovery problem if survey answers predict behaviour, and stated willingness to pay routinely overstates it. The director simply assumes the link and jumps straight to signage. The other options name incidental limitations rather than the inferential error."
},
{
  type: "flaw", d: 2,
  prompt: "An operations manager argues: 'Every one of our top five performing plants uses lean manufacturing methods. Our two worst-performing plants do not. Lean methods are therefore what separates a strong plant from a weak one, and we should mandate them everywhere.'\n\nWhich of the following most accurately describes a flaw in the argument?",
  choices: [
    "It treats a correlation observed across a small, selectively chosen set of plants as establishing causation.",
    "It fails to define what counts as lean manufacturing.",
    "It does not consider the cost of implementing lean methods.",
    "It assumes all plants produce the same products."
  ],
  answer: 0,
  explanation: "The manager looks only at the extremes of the distribution and reads a causal rule off the pattern, ignoring that well-run plants may adopt lean because they are well run, and ignoring the plants in the middle entirely. Definitions, costs and product mix are practical concerns, not the reasoning error."
},
{
  type: "flaw", d: 2,
  prompt: "A finance director tells a project meeting: 'We have already spent $6m of the $9m budget on this platform. Abandoning it now would waste that $6m entirely. We should therefore approve the remaining $3m and finish the build.'\n\nWhich of the following most accurately describes a flaw in the director's reasoning?",
  choices: [
    "It treats money already spent as a reason to continue, rather than comparing the remaining cost against the expected future benefit.",
    "It does not state whether the $9m budget was approved by the board.",
    "It assumes the platform can be completed for exactly $3m.",
    "It fails to consider whether an external vendor could finish the work more cheaply."
  ],
  answer: 0,
  explanation: "This is the sunk-cost fallacy. The $6m is gone regardless of what the meeting decides; the only rational question is whether spending a further $3m buys more than $3m of value. Budget approval, cost certainty and vendor alternatives are secondary to that basic misframing."
},
{
  type: "flaw", d: 2,
  prompt: "A marketing lead argues: 'Either we double our digital advertising budget or we accept that our market share will keep falling. Since nobody in this room is willing to accept a shrinking share, the budget increase is the only responsible decision.'\n\nWhich of the following most accurately describes a flaw in the argument?",
  choices: [
    "It presents only two options when other means of defending market share may exist.",
    "It does not quantify how much share has been lost.",
    "It assumes the room has authority over the advertising budget.",
    "It relies on the opinions of those present rather than on data."
  ],
  answer: 0,
  explanation: "This is a false dilemma. Pricing, distribution, product improvement and retention work are all plausible routes to defending share, and the argument gets its force purely from pretending they do not exist. Quantification, authority and reliance on opinion are peripheral to that structural error."
},
{
  type: "flaw", d: 2,
  prompt: "A partner defends a proposal: 'The objections to this restructuring come mainly from the regional managers, who would lose their current reporting lines if it goes ahead. Their opposition therefore tells us nothing about whether the restructuring is a good idea.'\n\nWhich of the following most accurately describes a flaw in the partner's reasoning?",
  choices: [
    "It dismisses the objections on the basis of who raised them rather than on the merits of what they said.",
    "It fails to state how many regional managers objected.",
    "It does not explain what the restructuring involves.",
    "It assumes the regional managers understood the proposal."
  ],
  answer: 0,
  explanation: "Having an interest in the outcome may be a reason to scrutinise an argument, but it is not a reason to dismiss it. The regional managers may be motivated and right. The partner never engages with the substance of the objections, which is the classic ad hominem move."
},
{
  type: "flaw", d: 2,
  prompt: "A quality manager reports: 'We surveyed customers who contacted our support line last month, and 91% rated our service as good or excellent. Our customer base is clearly very satisfied with the support we provide.'\n\nWhich of the following most accurately describes a flaw in the report?",
  choices: [
    "It generalises from customers who chose to contact support to the customer base as a whole.",
    "It does not distinguish between ratings of 'good' and 'excellent'.",
    "It fails to compare this month's figure with previous months.",
    "It does not specify how many customers were surveyed."
  ],
  answer: 0,
  explanation: "The sample consists only of people who reached support and stayed on the line, which excludes customers who gave up, never called, or churned in silence — plausibly the least satisfied group. The conclusion about the whole base does not follow. Rating granularity, trends and sample size are lesser concerns."
},
{
  type: "flaw", d: 2,
  prompt: "A policy adviser argues: 'If we allow this one department to carry unspent budget into next year, then every department will demand the same, our annual budgeting discipline will collapse, and within a few years the organisation will have no meaningful financial control at all. The request must be refused.'\n\nWhich of the following most accurately describes a flaw in the argument?",
  choices: [
    "It assumes without support that the first step will inevitably lead to the final outcome.",
    "It does not state how much unspent budget is involved.",
    "It fails to consider the department's reasons for the request.",
    "It assumes other departments know about the request."
  ],
  answer: 0,
  explanation: "This is a slippery-slope argument: each link in the chain from a single carry-over to total loss of financial control is asserted rather than shown, and any of them could be blocked by a simple rule. The amount involved, the department's reasons and awareness elsewhere do not describe the structural weakness."
},
{
  type: "flaw", d: 2,
  prompt: "An HR director states: 'Our engagement survey found that teams with weekly one-to-ones score eleven points higher on engagement than teams without them. Weekly one-to-ones therefore raise engagement, and we will require them across the organisation.'\n\nWhich of the following most accurately describes a flaw in the reasoning?",
  choices: [
    "It overlooks the possibility that engaged teams are more likely to sustain regular one-to-ones in the first place.",
    "It does not report the survey's response rate.",
    "It fails to define what counts as a one-to-one.",
    "It assumes managers have time for weekly meetings."
  ],
  answer: 0,
  explanation: "Reverse causation is live here: teams that are already engaged, with managers who have capacity and good relationships, are exactly the teams that keep weekly meetings going. Mandating the ritual need not import the underlying conditions. Response rates, definitions and manager workload are implementation concerns."
},
{
  type: "flaw", d: 2,
  prompt: "A consultant argues: 'The proposed merger cannot be justified on cost grounds. The finance team's synergy model has not been independently audited, and two of its assumptions have been questioned. Until the model is verified, we must conclude that the projected savings do not exist.'\n\nWhich of the following most accurately describes a flaw in the argument?",
  choices: [
    "It treats the absence of verified evidence for the savings as evidence that there are none.",
    "It does not identify which two assumptions were questioned.",
    "It assumes an independent audit would be conclusive.",
    "It considers only cost grounds and ignores strategic ones."
  ],
  answer: 0,
  explanation: "An unverified model is a reason to withhold judgement, not a reason to conclude the savings are absent — this is the appeal to ignorance. The savings may be real, overstated or understated; nobody yet knows. Naming the assumptions, audit reliability and strategic factors do not capture that inversion."
},
{
  type: "flaw", d: 2,
  prompt: "A sales manager writes: 'Our new pitch deck must be working. Since we introduced it in April, we have closed eleven deals, whereas in the four months before April we closed only six. The deck is clearly the strongest sales asset we have built.'\n\nWhich of the following most accurately describes a flaw in the reasoning?",
  choices: [
    "It infers that the deck caused the increase merely because the increase followed its introduction.",
    "It does not report the value of the deals closed.",
    "It fails to state how many prospects saw the deck.",
    "It compares an unequal number of months on each side."
  ],
  answer: 0,
  explanation: "Post hoc reasoning: sequence is being read as cause. Seasonality, a larger pipeline entering the period, pricing changes and team growth would all produce the same pattern. Deal values and prospect counts would enrich the analysis, but the error is the causal leap itself; the periods compared are both four months."
},
{
  type: "flaw", d: 2,
  prompt: "A board member argues: 'Our chief executive says the transformation programme is on track. She has thirty years of experience in this industry and has led two successful turnarounds. There is therefore no need for the board to commission an independent review of the programme.'\n\nWhich of the following most accurately describes a flaw in the argument?",
  choices: [
    "It substitutes the speaker's credentials for evidence about the programme itself.",
    "It does not specify what the transformation programme involves.",
    "It assumes an independent review would be expensive.",
    "It fails to consider the views of other executives."
  ],
  answer: 0,
  explanation: "Experience makes someone's judgement worth hearing; it does not establish that this particular programme is on track, and it is precisely the person accountable for the programme who is reporting on it. Appeal to authority is the error. Programme detail, review cost and other opinions are side issues."
},
{
  type: "flaw", d: 2,
  prompt: "A procurement officer argues: 'The vendor's proposal claims their platform will reduce processing time by 60%. But their salesperson gave three different figures for the licence cost during the negotiation. We should therefore reject their claim about processing time.'\n\nWhich of the following most accurately describes a flaw in the reasoning?",
  choices: [
    "It treats inconsistency on one point as sufficient to reject an unrelated claim on another.",
    "It does not verify whether the 60% figure came from the salesperson.",
    "It assumes processing time is the most important criterion.",
    "It fails to consider other vendors' proposals."
  ],
  answer: 0,
  explanation: "Shifting price quotes are a reason for caution about the vendor generally, but they are not evidence about the platform's processing performance, which can be tested directly. Rejecting the claim on that basis conflates the source's reliability with the truth of a separable, checkable assertion."
}

/* END-CT-2 */
];
Q.forEach(function(q){ window.QUESTION_BANK.ct.push(q); });
})();
