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
,

/* ---------- ASSUMPTION ---------- */
{
  type: "assumption", d: 3,
  prompt: "A city transport authority is deciding how to reduce congestion in the centre. Officials note that 40% of morning journeys into the core are made by single-occupancy car, and that the tram network runs at 60% of capacity at the same hour. They have concluded that raising the city-centre parking charge will cut congestion, because drivers facing the higher charge will switch to the tram.\n\nThe officials' conclusion depends on which of the following assumptions?",
  choices: [
    "The tram network could be expanded further if demand required it.",
    "A significant number of drivers currently paying to park have a tram route that is a workable alternative for their journey.",
    "Parking charges in the city centre are currently lower than in comparable cities.",
    "Congestion in the city centre has worsened over the past five years."
  ],
  answer: 1,
  explanation: "The plan only works if the drivers being priced out can actually reach their destination by tram. Spare capacity on the network says nothing about whether it serves the right origins and destinations at the right times. Expansion potential, comparative pricing and historical trends are irrelevant to whether the switch is available to today's drivers."
},
{
  type: "assumption", d: 3,
  prompt: "A consulting firm is choosing between two scheduling systems. The partner responsible argues that the cheaper system is the better choice: over a three-year horizon its licence fees are $180,000 lower than the alternative's, and the firm's technology budget is under pressure after two years of overspend.\n\nThe partner's argument depends on which of the following assumptions?",
  choices: [
    "The cheaper system will not generate additional costs elsewhere that offset the licence saving.",
    "The technology budget will remain under pressure for the next three years.",
    "The more expensive system is the market leader in its category.",
    "Both systems were evaluated by the same group of staff."
  ],
  answer: 0,
  explanation: "Licence fees are one line in a total cost of ownership. If the cheaper system needs more configuration, more support staff or more training, the $180,000 evaporates and the argument collapses. The partner must be assuming it does not. Future budget pressure, market position and evaluator identity leave the cost comparison intact."
},
{
  type: "assumption", d: 3,
  prompt: "A charity is planning next year's fundraising. Its analysis shows that donors acquired through the door-to-door programme give an average of $340 in their first year, against $210 for donors acquired online. The fundraising director has proposed shifting the acquisition budget towards door-to-door on the grounds that it will raise total income.\n\nThe director's proposal depends on which of the following assumptions?",
  choices: [
    "Door-to-door fundraising is well received in the areas where the charity operates.",
    "The cost of acquiring a donor door-to-door is not so much higher than the online cost that it eliminates the difference in donations.",
    "The charity's online donors are younger on average than its door-to-door donors.",
    "First-year giving is a reliable predictor of lifetime giving."
  ],
  answer: 1,
  explanation: "The comparison is gross giving, not net contribution. Door-to-door acquisition is labour-intensive and typically far more expensive per donor, so a $130 advantage in first-year gifts could easily be wiped out. The proposal silently assumes it is not. Public reception, donor age and lifetime value are secondary to that arithmetic."
},
{
  type: "assumption", d: 3,
  prompt: "A hospital trust is reviewing its outpatient clinics. Managers observe that clinics using the new appointment-reminder service have a missed-appointment rate of 6%, against 14% for clinics that have not adopted it. They plan to roll the service out across all clinics, expecting missed appointments to fall to around 6% everywhere.\n\nThe managers' expectation depends on which of the following assumptions?",
  choices: [
    "The clinics that adopted the service early do not differ from the others in ways that affect attendance.",
    "The reminder service can be delivered at the same cost in every clinic.",
    "Patients prefer receiving reminders by text rather than by telephone.",
    "The 14% figure has been stable over the past three years."
  ],
  answer: 0,
  explanation: "Early adopters are rarely a random sample: they may serve more affluent, more settled or better-connected patient populations, any of which would lower missed appointments regardless of reminders. Without comparability, the 6% cannot be transported to the remaining clinics. Cost, channel preference and trend stability do not repair that."
},
{
  type: "assumption", d: 3,
  prompt: "A publisher is deciding whether to close its print magazine. The finance team notes that print circulation has fallen 45% in four years while the digital edition has grown steadily, and argues that closing print and redirecting the editorial budget to digital will improve overall profitability.\n\nThe finance team's argument depends on which of the following assumptions?",
  choices: [
    "Digital subscriptions will continue to grow at their current rate.",
    "A substantial share of the revenue currently attached to the print edition would not be lost when print closes.",
    "The editorial team can produce digital content without additional training.",
    "Competing publishers have also reduced their print output."
  ],
  answer: 1,
  explanation: "Print typically carries advertising and bundled-subscription revenue that does not migrate automatically to digital. If most of that revenue simply disappears with the magazine, closing it could reduce profit even as costs fall. The argument assumes otherwise. Growth rates, training and competitor behaviour do not address the revenue that closure destroys."
},
{
  type: "assumption", d: 3,
  prompt: "A manufacturer is considering moving assembly of its mid-range line from Germany to Portugal. The operations director points out that fully loaded labour cost per assembled unit is 38% lower in Portugal and concludes that the move will reduce the cost of each unit produced.\n\nThe director's conclusion depends on which of the following assumptions?",
  choices: [
    "Portuguese labour law is comparable to German labour law in relevant respects.",
    "The move will not increase non-labour costs per unit by enough to offset the labour saving.",
    "The mid-range line is the manufacturer's most profitable product family.",
    "Demand for the mid-range line will remain stable after the move."
  ],
  answer: 1,
  explanation: "Unit cost includes freight, duties, scrap during ramp-up, supplier proximity and quality rework, all of which typically rise when production moves. The 38% labour advantage only survives if those do not eat it. Legal comparability, product profitability and demand stability sit outside the unit-cost calculation."
},
{
  type: "assumption", d: 3,
  prompt: "A software company is planning its pricing for next year. Analysts note that the firm's churn rate is 4% a year, well below the 9% industry average, and conclude that a 15% price increase can be implemented without material customer loss, since the customer base is evidently unusually loyal.\n\nThe analysts' conclusion depends on which of the following assumptions?",
  choices: [
    "The loyalty reflected in the current churn rate would survive a change in the price customers pay.",
    "Competitors will not reduce their prices in response.",
    "The 15% increase would apply to all customer segments equally.",
    "The industry churn average has been calculated on a comparable basis."
  ],
  answer: 0,
  explanation: "Low churn observed at today's price is evidence about behaviour at today's price. It does not establish that customers are insensitive to price, since the very thing that keeps them may be the value-for-money they currently get. The argument treats historical loyalty as if it were price inelasticity. The other options are real risks but not the load-bearing assumption."
},
{
  type: "assumption", d: 3,
  prompt: "A university is evaluating its new admissions test. Administrators report that students admitted under the test achieved higher first-year grades than the previous cohort, and conclude that the test is a better predictor of academic ability than the interview process it replaced.\n\nThe administrators' conclusion depends on which of the following assumptions?",
  choices: [
    "The test is cheaper to administer than the interview process.",
    "First-year grading standards did not change between the two cohorts.",
    "Students admitted under the test came from a wider range of schools.",
    "The interview process had been in use for many years."
  ],
  answer: 1,
  explanation: "The comparison is between grades awarded to two different cohorts. If marking became more lenient, the higher grades reflect the grading, not the students, and the argument has no evidence at all. Constant standards is the unstated bridge. Administration cost, intake diversity and the interview's longevity do not affect the comparability of the grades."
},
{
  type: "assumption", d: 3,
  prompt: "A supermarket chain is deciding whether to extend its home-delivery service to rural areas. The commercial team calculates that rural households order a larger average basket than urban ones and concludes that rural delivery will be more profitable per order than the existing urban service.\n\nThe commercial team's conclusion depends on which of the following assumptions?",
  choices: [
    "Rural households will order as frequently as urban households.",
    "The cost of fulfilling and delivering a rural order will not exceed the extra margin the larger basket generates.",
    "Rural customers are willing to accept longer delivery windows.",
    "The chain's rural competitors do not currently offer delivery."
  ],
  answer: 1,
  explanation: "Profit per order is margin minus fulfilment cost. Rural delivery means longer drive times and fewer drops per route, which raises cost per order sharply. The conclusion holds only if that increase stays below the extra margin from the bigger basket. Order frequency affects total profit, not profit per order; delivery windows and competition are separate issues."
},
{
  type: "assumption", d: 3,
  prompt: "An airline is considering replacing meal service on short-haul routes with a paid buy-on-board menu. The commercial director argues that this will improve short-haul profitability, citing $22m of annual catering cost currently absorbed into the ticket price and the fact that two competitors have made the same change.\n\nThe director's argument depends on which of the following assumptions?",
  choices: [
    "The competitors that made the change did so for the same reasons.",
    "Passengers will not shift enough business to airlines still offering complimentary meals to outweigh the catering saving.",
    "Buy-on-board menus can be operated with the existing cabin crew complement.",
    "Catering costs will continue to rise in future years."
  ],
  answer: 1,
  explanation: "The saving is certain; the revenue risk is not. If enough price-comparable passengers defect to airlines that still include a meal, lost ticket revenue can exceed $22m and profitability falls. The argument assumes that does not happen. Competitor motives, crewing arrangements and future cost inflation do not carry the conclusion."
},

/* ---------- ARRANGEMENT ---------- */
{
  type: "arrangement", d: 2,
  prompt: "Five departments occupy the five floors of an office building, one department per floor, numbered 1 (ground) to 5 (top).\n\n· Finance is directly above Legal.\n· Marketing is on floor 5.\n· HR is not on a floor adjacent to Finance.\n· Operations is on floor 1.\n\nWhich floor is Legal on?",
  choices: ["Floor 2", "Floor 3", "Floor 4", "Floor 5"],
  answer: 1,
  explanation: "Operations takes floor 1 and Marketing floor 5, leaving floors 2, 3 and 4 for Finance, Legal and HR. Finance directly above Legal allows Legal 2 / Finance 3 or Legal 3 / Finance 4. In the first case HR lands on floor 4, adjacent to Finance on 3, which is barred. So Legal is on floor 3, Finance on 4 and HR on 2."
},
{
  type: "arrangement", d: 2,
  prompt: "Four candidates — Novak, Okafor, Patel and Reyes — are interviewed on four consecutive days from Monday to Thursday, one candidate per day.\n\n· Reyes is interviewed before Novak.\n· Patel is interviewed on Wednesday.\n· Okafor is not interviewed on Monday.\n\nWhich of the following must be true?",
  choices: [
    "Novak is interviewed on Thursday.",
    "Okafor is interviewed on Tuesday.",
    "Reyes is interviewed on Monday.",
    "Novak is interviewed on Tuesday."
  ],
  answer: 2,
  explanation: "Patel takes Wednesday, leaving Monday, Tuesday and Thursday for Reyes, Novak and Okafor. Okafor cannot take Monday, so Monday goes to Reyes or Novak; since Reyes precedes Novak, Novak cannot be first, so Reyes is on Monday. Novak then takes Tuesday or Thursday depending on where Okafor sits, so only the Reyes placement is forced."
},
{
  type: "arrangement", d: 2,
  prompt: "Five trainees — Nadia, Omar, Priya, Rafael and Sena — were ranked first to fifth on an assessment, with no ties.\n\n· Nadia scored higher than Omar.\n· Priya had the lowest score.\n· Omar scored higher than Rafael.\n· Sena scored higher than Nadia.\n\nWho ranked third?",
  choices: ["Nadia", "Omar", "Rafael", "Sena"],
  answer: 1,
  explanation: "The three comparisons chain into Sena above Nadia above Omar above Rafael, and Priya is fixed in fifth. That leaves exactly one possible order: Sena first, Nadia second, Omar third, Rafael fourth, Priya fifth."
},
{
  type: "arrangement", d: 2,
  prompt: "Five files are stored in a drawer in positions 1 to 5, position 1 being at the front.\n\n· The contracts file is immediately in front of the invoices file.\n· The payroll file is in position 1.\n· The tax file is somewhere behind the invoices file.\n· The audit file is not in position 5.\n\nWhich of the following must be true?",
  choices: [
    "The contracts file is in position 2.",
    "The audit file is in position 2.",
    "The tax file is in position 5.",
    "The invoices file is in position 3."
  ],
  answer: 2,
  explanation: "Payroll fixes position 1, so contracts/invoices sit at 2-3, 3-4 or 4-5. The 4-5 option leaves no room behind invoices for tax. With contracts 2 / invoices 3, tax and audit take 4 and 5, and since audit cannot be 5, tax is 5. With contracts 3 / invoices 4, tax must be behind 4, so again 5. Tax in position 5 holds in both."
},
{
  type: "arrangement", d: 2,
  prompt: "Five speakers — Kaur, Lindqvist, Mbeki, Novak and Oyelaran — present one after another in five slots.\n\n· Kaur presents immediately before Lindqvist.\n· Mbeki presents fifth.\n· Novak presents at some point before Kaur.\n· Oyelaran presents second.\n\nWho presents first?",
  choices: ["Kaur", "Lindqvist", "Novak", "Oyelaran"],
  answer: 2,
  explanation: "Mbeki takes slot 5 and Oyelaran slot 2, leaving slots 1, 3 and 4 for Kaur, Lindqvist and Novak. The only consecutive pair among those slots is 3-4, so Kaur presents third and Lindqvist fourth. Novak takes the remaining slot 1, which also satisfies the requirement that Novak precedes Kaur."
},
{
  type: "arrangement", d: 2,
  prompt: "An executive visits five cities — Lisbon, Madrid, Oslo, Prague and Rome — on five consecutive days, one city per day.\n\n· Lisbon is visited the day after Madrid.\n· Oslo is visited on day 1.\n· Prague is visited before Madrid.\n· Rome is visited on day 5.\n\nOn which day is Madrid visited?",
  choices: ["Day 2", "Day 3", "Day 4", "Day 5"],
  answer: 1,
  explanation: "Oslo and Rome fix days 1 and 5, leaving days 2, 3 and 4. Madrid immediately followed by Lisbon gives either Madrid 2 / Lisbon 3 or Madrid 3 / Lisbon 4. The first leaves Prague on day 4, after Madrid, which the constraints forbid. So Madrid is day 3, Lisbon day 4 and Prague day 2."
},
{
  type: "arrangement", d: 2,
  prompt: "Five colleagues — Ana, Bruno, Carla, Diego and Elena — sit in a row of five chairs numbered 1 to 5 from left to right.\n\n· Ana sits in chair 1.\n· Bruno sits immediately to the right of Carla.\n· Diego sits in chair 5.\n\nWhich of the following must be true?",
  choices: [
    "Carla sits in chair 2.",
    "Elena does not sit in chair 3.",
    "Bruno sits in chair 4.",
    "Elena sits in chair 4."
  ],
  answer: 1,
  explanation: "Ana and Diego occupy the ends, leaving chairs 2, 3 and 4 for Carla, Bruno and Elena. Carla immediately left of Bruno gives either Carla 2 / Bruno 3 with Elena 4, or Carla 3 / Bruno 4 with Elena 2. Elena therefore never occupies chair 3, while every other option holds in only one of the two arrangements."
},
{
  type: "arrangement", d: 2,
  prompt: "An audit is carried out in five steps — fieldwork, reporting, review, sampling and scoping — performed one at a time in some order.\n\n· Sampling is performed immediately after scoping.\n· Reporting is performed last.\n· Fieldwork is performed before sampling.\n\nWhich of the following could be true?",
  choices: [
    "Sampling is performed second.",
    "Scoping is performed first.",
    "Review is performed first.",
    "Fieldwork is performed fourth."
  ],
  answer: 2,
  explanation: "Reporting takes step 5, so the scoping-sampling pair sits at 1-2, 2-3 or 3-4. Fieldwork must precede sampling, which rules out the pair at 1-2 and therefore rules out scoping first and sampling second. Fieldwork always lands at step 1 or 2, never fourth. With scoping 3 and sampling 4, fieldwork can take step 2 and review step 1."
},
{
  type: "arrangement", d: 2,
  prompt: "Four regional offices — Kraków, Lyon, Malmö and Turin — are ranked first to fourth by annual revenue, with no ties.\n\n· The Lyon office ranks higher than the Turin office.\n· The Malmö office ranks lower than the Turin office.\n· The Kraków office does not rank first.\n\nWhich of the following must be true?",
  choices: [
    "Turin ranks second.",
    "Malmö ranks fourth.",
    "Lyon ranks first.",
    "Kraków ranks third."
  ],
  answer: 2,
  explanation: "The two comparisons chain into Lyon above Turin above Malmö, so neither Turin nor Malmö can rank first, and Kraków is barred from first by the third condition. Lyon is the only office left for the top position. Kraków can then sit second, third or fourth, which unfixes every other option."
},
{
  type: "arrangement", d: 2,
  prompt: "Four training sessions — compliance, ethics, finance and safety — are held on four consecutive days from Monday to Thursday, one per day.\n\n· The compliance session is held neither on Monday nor on Thursday.\n· The safety session is held the day before the ethics session.\n· The finance session is held on Monday.\n\nOn which day is the safety session held?",
  choices: ["Monday", "Tuesday", "Wednesday", "Thursday"],
  answer: 2,
  explanation: "Finance takes Monday, so compliance must be Tuesday or Wednesday. The safety-ethics pair must occupy consecutive days among Tuesday, Wednesday and Thursday. If safety were Tuesday and ethics Wednesday, compliance would be pushed to Thursday, which is barred. So safety is Wednesday, ethics Thursday and compliance Tuesday."
}
,

/* ---------- PARADOX ---------- */
{
  type: "paradox", d: 3,
  prompt: "A retailer redesigned its checkout page to remove three form fields and one confirmation step. Usability testing had shown the shorter flow was faster and less error-prone, and it was expected to lift completed purchases. After launch, the share of shoppers who reached the checkout page and completed a purchase fell by four percentage points, even though the average time spent on the page dropped as predicted.\n\nWhich of the following, if true, best explains this result?",
  choices: [
    "The removed confirmation step had let shoppers review their order and correct mistakes before paying, and many now abandon at the payment screen instead.",
    "The redesign was released to all markets at the same time.",
    "Some shoppers took longer than the average on the new page.",
    "The retailer's competitors also use short checkout flows."
  ],
  answer: 0,
  explanation: "The paradox is that a faster page converts worse. If the deleted confirmation step was doing real work — letting shoppers catch errors before committing — then removing it moves the moment of doubt to the payment screen, where abandonment is final. Simultaneous release, variance in page time and competitor practice describe the situation without explaining the drop."
},
{
  type: "paradox", d: 3,
  prompt: "A manufacturer invested heavily in automated inspection at the end of its production line, and the equipment performs exactly as specified: it now detects far more defective units than the manual inspectors it replaced. Yet in the two years since installation, the number of defective units reaching customers has risen rather than fallen.\n\nWhich of the following, if true, best explains this outcome?",
  choices: [
    "The automated system is more expensive to maintain than manual inspection was.",
    "Confident that the automated system would catch problems, the plant scaled back the in-process checks that had previously prevented defects from being produced at all.",
    "The automated system inspects units more quickly than the manual inspectors did.",
    "Some manual inspectors were redeployed to other parts of the plant."
  ],
  answer: 1,
  explanation: "End-of-line detection cannot improve outcomes if upstream prevention degrades faster than detection improves. Removing in-process checks raises the number of defects created, and even a very good final filter passes a fraction of a much larger population. Maintenance cost, inspection speed and redeployment do not connect detection quality to customer outcomes."
},
{
  type: "paradox", d: 3,
  prompt: "A national employment agency reports that the number of people in work rose by 180,000 last quarter, and no significant change occurred in the size of the working-age population or in the definitions used. Yet the published unemployment rate also rose over the same quarter, from 5.1% to 5.4%.\n\nWhich of the following, if true, best explains these two figures?",
  choices: [
    "A large number of people who had previously stopped looking for work began actively seeking jobs, entering the labour force.",
    "Average wages grew more slowly than in the previous quarter.",
    "Employment growth was concentrated in part-time roles.",
    "Some regions saw employment fall while others saw it rise."
  ],
  answer: 0,
  explanation: "The unemployment rate is unemployed people divided by the labour force, and only active job-seekers count in the labour force. If discouraged workers re-enter and start searching, both the numerator and the denominator grow, and the ratio can rise even as employment climbs. Wages, hours and regional mix leave the rate arithmetic untouched."
},
{
  type: "paradox", d: 3,
  prompt: "A software firm doubled the size of its customer-support team after complaints about slow responses. Average first-response time duly halved. Yet in the following two quarters the proportion of customers rating support as satisfactory declined, and the volume of formal escalations to account managers increased.\n\nWhich of the following, if true, best explains this pattern?",
  choices: [
    "The firm's product range expanded during the same period.",
    "The new hires answered quickly but, lacking product depth, frequently gave answers that did not resolve the underlying issue.",
    "The support team now works across more time zones than before.",
    "Support costs rose in line with the increase in headcount."
  ],
  answer: 1,
  explanation: "First-response time measures speed, not resolution. Doubling headcount with inexperienced staff buys speed while lowering the share of contacts that actually solve the problem, so customers get a fast answer, remain stuck, and escalate. Product breadth, time-zone coverage and cost do not explain why faster replies satisfied customers less."
},
{
  type: "paradox", d: 3,
  prompt: "A city introduced a scheme paying households a rebate for every kilogram by which their annual landfill waste fell below the previous year's figure. Measured landfill waste from participating households dropped sharply in the first year. However, the total tonnage arriving at the city's landfill from all sources was almost unchanged.\n\nWhich of the following, if true, best explains this discrepancy?",
  choices: [
    "Participating households placed a substantial share of their waste in commercial skips and neighbouring districts' bins rather than reducing what they discarded.",
    "The rebate was smaller than some households had expected.",
    "Not every household in the city chose to participate.",
    "The city's recycling facilities operated at full capacity during the year."
  ],
  answer: 0,
  explanation: "The scheme measures waste at the household's own collection point, so waste displaced elsewhere still reaches the landfill while disappearing from the measured figure. That reconciles a sharp measured fall with flat total tonnage. Rebate size and partial participation would dampen the measured drop, which did occur; recycling capacity is unrelated."
},
{
  type: "paradox", d: 3,
  prompt: "An insurer tightened the underwriting criteria for its motor policies, declining applicants whose claims history suggested elevated risk. The measure worked as designed: the average claims frequency among newly written policies fell noticeably. Nevertheless, the insurer's overall loss ratio on the motor book worsened over the following two years.\n\nWhich of the following, if true, best explains this outcome?",
  choices: [
    "The insurer's marketing budget was reduced during the period.",
    "The stricter criteria also priced out many low-risk customers who shopped elsewhere, leaving a smaller book over which fixed claims-handling costs and remaining large losses were spread.",
    "Motor insurance is a competitive market.",
    "Claims frequency is only one component of underwriting risk."
  ],
  answer: 1,
  explanation: "Loss ratio is losses over premium, so shrinking the book matters as much as improving its quality. If tightening drove away good risks along with bad, premium income falls faster than losses, and the ratio deteriorates despite a cleaner claims frequency. The last option is a true generality but names no mechanism; budget and market competitiveness explain nothing."
},
{
  type: "paradox", d: 3,
  prompt: "A hospital introduced a rapid-triage protocol in its emergency department. Audits confirm the protocol is followed correctly and that patients are now assessed by a clinician within twenty minutes of arrival, down from fifty. Yet the average total time patients spend in the department before admission or discharge has increased.\n\nWhich of the following, if true, best explains this result?",
  choices: [
    "The protocol requires additional documentation from triage nurses.",
    "Faster assessment identified more patients needing diagnostic imaging, and the imaging department's capacity was unchanged, so waits simply moved downstream.",
    "The emergency department sees more patients in winter than in summer.",
    "Some patients arrive by ambulance rather than on foot."
  ],
  answer: 1,
  explanation: "Speeding up one stage of a process does not shorten the whole unless the bottleneck moves with it. Earlier assessment pushes more patients into an imaging queue of fixed capacity, so the wait is relocated rather than removed and total time can rise. Documentation, seasonality and arrival mode do not explain a systematic increase."
},
{
  type: "paradox", d: 3,
  prompt: "A supermarket chain launched a widely advertised price-cut campaign on 400 everyday products. Customer research confirms that shoppers noticed the cuts and rated the chain better on value than before. Nevertheless, the chain's total sales revenue and its transaction count both fell slightly over the campaign period.\n\nWhich of the following, if true, best explains this pattern?",
  choices: [
    "The 400 products were concentrated in categories that shoppers buy in fixed quantities regardless of price, and the cuts reduced the value of those same baskets.",
    "The campaign was advertised on television and radio.",
    "Some competitors also reduced prices during the period.",
    "The chain operates stores of varying sizes."
  ],
  answer: 0,
  explanation: "Cutting prices on inelastic staples lowers revenue per basket without generating extra volume, so revenue falls even when the value perception improves. It also explains why transactions did not rise: nobody makes an extra trip for milk they were already buying. Advertising channels, competitor moves and store size do not connect the perception gain to the revenue loss."
},

/* ---------- SYLLOGISM ---------- */
{
  type: "syllogism", d: 2,
  prompt: "All members of the risk committee are directors of the company. No director of the company is an external auditor.\n\nWhich conclusion follows necessarily?",
  choices: [
    "No member of the risk committee is an external auditor.",
    "All directors of the company are members of the risk committee.",
    "Some external auditors are directors of the company.",
    "No external auditor is qualified to sit on a committee."
  ],
  answer: 0,
  explanation: "Risk-committee members are a subset of directors, and directors are entirely excluded from the auditors. A subset of an excluded group is itself excluded, so no committee member is an auditor. The second reverses the subset relation, the third contradicts the second premise, and the fourth introduces a claim about qualifications that appears nowhere."
},
{
  type: "syllogism", d: 2,
  prompt: "All approved suppliers have passed a financial check. Some approved suppliers are based overseas.\n\nWhich conclusion follows necessarily?",
  choices: [
    "All suppliers based overseas have passed a financial check.",
    "Some suppliers that have passed a financial check are based overseas.",
    "All suppliers that have passed a financial check are approved.",
    "No overseas supplier has failed a financial check."
  ],
  answer: 1,
  explanation: "The overseas suppliers mentioned are approved, and every approved supplier passed the check, so those particular suppliers are both overseas and financially checked — an existential conclusion. The first and fourth generalise to all overseas suppliers, including unapproved ones the premises never mention; the third reverses the conditional."
},
{
  type: "syllogism", d: 2,
  prompt: "No contract signed this year contains an arbitration clause. Some contracts held by the legal department contain an arbitration clause.\n\nWhich conclusion follows necessarily?",
  choices: [
    "No contract held by the legal department was signed this year.",
    "Some contracts held by the legal department were not signed this year.",
    "All contracts signed this year are held by the legal department.",
    "Some contracts signed this year contain no clauses at all."
  ],
  answer: 1,
  explanation: "The legal department's arbitration-clause contracts cannot be among this year's signings, since none of those has such a clause. That establishes that some of its contracts predate this year, but not that all do — the department may well hold other contracts signed this year without arbitration clauses, which is why the first option overreaches."
},
{
  type: "syllogism", d: 2,
  prompt: "All projects that received board approval have a named sponsor. Some projects with a named sponsor are behind schedule.\n\nWhich conclusion follows necessarily?",
  choices: [
    "Some board-approved projects are behind schedule.",
    "All projects with a named sponsor received board approval.",
    "No project without a sponsor received board approval.",
    "Most projects behind schedule have a sponsor."
  ],
  answer: 2,
  explanation: "The contrapositive of the first premise is exact: if board approval guarantees a sponsor, then lacking a sponsor guarantees no board approval. The first option is tempting but invalid, because the delayed sponsored projects need not be the approved ones. The second reverses the conditional and the fourth asserts a proportion nothing supports."
},
{
  type: "syllogism", d: 2,
  prompt: "All certified technicians may operate the pressure line. No temporary staff member is a certified technician.\n\nWhich conclusion follows necessarily?",
  choices: [
    "No temporary staff member may operate the pressure line.",
    "Some temporary staff members are certified technicians.",
    "Anyone who may operate the pressure line is a certified technician.",
    "Some people who may operate the pressure line are not temporary staff."
  ],
  answer: 3,
  explanation: "Temporary staff are excluded from certification, but certification is only a sufficient condition for operating the line, so the first option does not follow — someone could be authorised by another route. What does follow is that the certified technicians, who may operate the line, are not temporary staff. The second contradicts a premise and the third reverses the conditional."
},
{
  type: "syllogism", d: 2,
  prompt: "Some regional managers have completed the leadership programme. All who have completed the leadership programme are eligible for the international assignment.\n\nWhich conclusion follows necessarily?",
  choices: [
    "All regional managers are eligible for the international assignment.",
    "Some regional managers are eligible for the international assignment.",
    "Only those who completed the programme are eligible.",
    "All those eligible for the assignment are regional managers."
  ],
  answer: 1,
  explanation: "The regional managers who completed the programme are eligible, which supports an existential but not a universal claim: nothing tells us about regional managers who did not complete it. The third turns a sufficient condition into a necessary one, and the fourth reverses the relation between eligibility and role."
},
{
  type: "syllogism", d: 2,
  prompt: "No product in the discontinued range is stocked in the flagship store. All products launched this season are stocked in the flagship store.\n\nWhich conclusion follows necessarily?",
  choices: [
    "No product launched this season is in the discontinued range.",
    "All products stocked in the flagship store were launched this season.",
    "Some discontinued products are stocked elsewhere.",
    "The flagship store stocks every product not discontinued."
  ],
  answer: 0,
  explanation: "This season's products are all in the flagship store, and nothing discontinued is in that store, so no product from this season can be discontinued. The second reverses the subset relation; the third asserts stocking elsewhere, which the premises never mention; the fourth turns a one-way condition into a guarantee about all non-discontinued products."
},
{
  type: "syllogism", d: 2,
  prompt: "All loans reviewed by the workout team are classified as non-performing. Some loans classified as non-performing were originated before 2020.\n\nWhich conclusion follows necessarily?",
  choices: [
    "Some loans reviewed by the workout team were originated before 2020.",
    "Every loan originated before 2020 is non-performing.",
    "Any loan not classified as non-performing was not reviewed by the workout team.",
    "Most non-performing loans predate 2020."
  ],
  answer: 2,
  explanation: "Only the contrapositive is guaranteed: review implies non-performing, so not non-performing implies not reviewed. The first is invalid because the pre-2020 non-performing loans need not be the reviewed ones. The second reverses the conditional and the fourth invents a proportion."
},

/* ---------- ARGUMENT STRENGTH ---------- */
{
  type: "argument-strength", d: 2,
  prompt: "Question: Should the company require all new software to pass an accessibility audit before release?\n\nWhich is the STRONGEST argument in favour?",
  choices: [
    "Accessibility is an important value for a modern organisation",
    "An internal review found that 14% of the company's users rely on assistive technology, and three of the last five releases were unusable with a screen reader",
    "Several competitors have published accessibility commitments",
    "Requiring audits would demonstrate the company's seriousness about inclusion"
  ],
  answer: 1,
  explanation: "The second argument is both relevant and substantial: it establishes a large affected user base and a demonstrated failure rate, which together show the audit would fix a real and recurring problem. The others assert values, imitate competitors or appeal to appearances without evidence that the audit would change anything."
},
{
  type: "argument-strength", d: 2,
  prompt: "Question: Should the firm move its annual conference from a physical venue to an online format?\n\nWhich is the WEAKEST argument in favour?",
  choices: [
    "Attendance data shows that 40% of invited clients declined last year specifically because of travel time",
    "Online delivery would cut the event budget from $600,000 to roughly $90,000",
    "Virtual conferences have become far more common since 2020",
    "Session recordings would remain available to clients who could not attend live"
  ],
  answer: 2,
  explanation: "That virtual events have become common is a bandwagon observation: it reports what others do without giving any reason the change would serve this firm. The other three each identify a concrete benefit — removing a documented barrier to attendance, a large cost saving, and extended reach — that bears directly on the decision."
},
{
  type: "argument-strength", d: 2,
  prompt: "Question: Should the hospital adopt a single electronic records system across all its sites?\n\nWhich is the STRONGEST argument in favour?",
  choices: [
    "A single system would be simpler to describe to regulators",
    "An incident review attributed 61 medication errors last year to clinicians being unable to see records created at another site",
    "Most large hospital groups now operate a unified system",
    "Staff have complained about having to remember several logins"
  ],
  answer: 1,
  explanation: "Sixty-one medication errors traced directly to fragmented records is both relevant and serious: it names a specific harm the unified system would address and quantifies it. Regulatory simplicity and multiple logins are genuine but minor, and what other hospital groups do is not an argument about this hospital's patients."
},
{
  type: "argument-strength", d: 2,
  prompt: "Question: Should the manufacturer bring its currently outsourced customer service back in house?\n\nWhich is the WEAKEST argument in favour?",
  choices: [
    "In-house agents could be trained on the products in far greater depth than the outsourcer permits",
    "The outsourcing contract has become more expensive each year for six consecutive years",
    "Bringing the function back would give the company more direct control over quality",
    "The outsourcer is based in a country the company's executives rarely visit"
  ],
  answer: 3,
  explanation: "The outsourcer's location relative to executive travel says nothing about service quality, cost or capability — it is an irrelevance dressed as a reason. Deeper product training, six years of cost escalation and direct control over quality all bear on whether the change would improve outcomes."
},
{
  type: "argument-strength", d: 2,
  prompt: "Question: Should the university introduce a compulsory statistics course for all undergraduate degrees?\n\nWhich is the STRONGEST argument in favour?",
  choices: [
    "Statistics is a demanding subject that develops rigorous thinking",
    "A survey of graduate employers ranked data interpretation as the skill most often lacking in new hires from the university, ahead of eight other skills",
    "Several peer universities already require a quantitative course",
    "The statistics department has capacity to teach additional students"
  ],
  answer: 1,
  explanation: "The employer survey supplies exactly the evidence the decision needs: it identifies a specific deficit in this university's graduates and ranks it as the most serious one. Rigour is a vague virtue, peer practice is imitation, and departmental capacity addresses feasibility rather than whether the course is worth requiring."
},
{
  type: "argument-strength", d: 2,
  prompt: "Question: Should the retailer stop accepting cash payments in its city-centre stores?\n\nWhich is the WEAKEST argument in favour?",
  choices: [
    "Cash handling, banking and security cost the chain approximately $2.3m a year across its city-centre estate",
    "Cash accounts for under 4% of transactions in these stores and the share has fallen every year since 2019",
    "Card payments are more modern than cash",
    "Removing cash drawers would free roughly 1.5 square metres of counter space per store for self-service terminals"
  ],
  answer: 2,
  explanation: "Calling card payments 'more modern' is an appeal to novelty: modernity is not itself a benefit, and the argument gives no consequence that would follow. The other three quantify a cost, establish that the affected volume is small and shrinking, and identify a concrete operational gain."
},
{
  type: "argument-strength", d: 2,
  prompt: "Question: Should the bank close its smallest twenty branches?\n\nWhich is the STRONGEST argument against?",
  choices: [
    "Branch closures are unpopular with the public",
    "Fourteen of the twenty branches are the only banking facility within twenty miles, and internal analysis shows customers in such locations close their accounts at four times the normal rate when a branch shuts",
    "The branches have served their communities for many years",
    "Closing branches would require redundancy consultations with staff"
  ],
  answer: 1,
  explanation: "The second argument quantifies the downside in the bank's own terms: fourteen closures would strand customers with no alternative, and the fourfold attrition figure shows the revenue consequence. Unpopularity, longevity and consultation requirements are real but do not weigh against the closure with comparable force or evidence."
},
{
  type: "argument-strength", d: 2,
  prompt: "Question: Should the company replace its open-plan office with a mix of quiet rooms and collaboration spaces?\n\nWhich is the WEAKEST argument in favour?",
  choices: [
    "Internal surveys over three years consistently rank noise as the top obstacle to focused work",
    "The current lease permits reconfiguration without landlord consent",
    "Observation studies found meeting rooms booked out 94% of the working week, forcing discussions onto the open floor",
    "The existing layout was chosen by a facilities manager who has since left the company"
  ],
  answer: 3,
  explanation: "Who chose the current layout, and whether they still work there, tells us nothing about whether the layout works. It is an argument about the source rather than the substance. The other three offer survey evidence of the problem, evidence that collaboration space is genuinely short, and confirmation that the change is permissible."
},

/* ---------- EVALUATE ---------- */
{
  type: "evaluate", d: 2,
  prompt: "A regional bakery chain is deciding whether to install solar panels on the roofs of its twelve production sites. The proposal costs $2.4m up front and the energy team projects annual electricity savings of $310,000, implying a payback period of under eight years. The board has asked for further analysis before committing, since the company has not previously made an investment of this length.\n\nAnswering which of the following would be most useful in evaluating the proposal?",
  choices: [
    "Whether the panels would be visible from the street at each site",
    "How much of each site's electricity demand falls during daylight hours, when the panels generate",
    "Which supplier manufactures the panels",
    "How many other bakeries in the region have installed solar panels"
  ],
  answer: 1,
  explanation: "Rooftop solar only offsets consumption that coincides with generation; anything else is either exported at a lower rate or wasted. If the bakery's heaviest load is overnight baking, the $310,000 figure collapses and so does the payback. Visibility, supplier identity and peer adoption do not touch the savings calculation."
},
{
  type: "evaluate", d: 2,
  prompt: "A logistics company is considering replacing its diesel delivery vans with electric ones across its urban fleet. The finance team calculates that lower fuel and maintenance costs would recover the higher purchase price within five years. The operations director supports the change in principle but has asked for one further piece of analysis before the board decides.\n\nAnswering which of the following would be most useful in evaluating the proposal?",
  choices: [
    "Whether the electric vans' range covers the daily distance of the company's typical urban routes without mid-shift charging",
    "What colour scheme the new vans would carry",
    "How many manufacturers currently produce electric delivery vans",
    "Whether the company's drivers have driven electric vehicles before"
  ],
  answer: 0,
  explanation: "If the vans cannot complete a shift without stopping to charge, the fleet loses productive hours and may need more vehicles, which destroys the five-year payback the whole case rests on. Livery and the number of manufacturers are irrelevant, and driver familiarity is a short training matter rather than a structural risk."
},
{
  type: "evaluate", d: 2,
  prompt: "A publisher is deciding whether to acquire a small competitor for $18m. The strategy team argues that the combined business would eliminate $4m of duplicated overhead within two years, and that the target's catalogue complements the publisher's own. The board is broadly supportive but wants one further question answered before approving the deal.\n\nAnswering which of the following would be most useful in evaluating the acquisition?",
  choices: [
    "How long the target company has been trading",
    "What proportion of the target's revenue depends on author contracts that permit termination on a change of control",
    "Which advisers the publisher would appoint for the transaction",
    "Whether the target's offices are close to the publisher's own"
  ],
  answer: 1,
  explanation: "A publisher's value is largely its author relationships. If a large share of the target's revenue sits under contracts authors can walk away from once ownership changes, the acquirer may pay $18m for a catalogue that leaves. Trading history, adviser selection and office proximity are minor beside that risk."
},
{
  type: "evaluate", d: 2,
  prompt: "A hotel group is deciding whether to convert two floors of a city property from guest rooms into serviced offices. The development team projects that office rents would exceed the rooms' current contribution by about $500,000 a year, based on prevailing commercial rents in the district. The board has asked for one further analysis before approving the conversion.\n\nAnswering which of the following would be most useful in evaluating the proposal?",
  choices: [
    "What the current vacancy rate is for serviced offices in the district",
    "How long the conversion works would take",
    "Which architect would design the office floors",
    "Whether the hotel's restaurant is used by non-residents"
  ],
  answer: 0,
  explanation: "The projection uses prevailing rents, which are what occupied space earns. If the district's serviced offices already sit substantially vacant, achievable rent and occupancy will both fall short and the $500,000 is fictional. Construction duration affects timing, and the architect and restaurant are unrelated to whether the rent is achievable."
},
{
  type: "evaluate", d: 2,
  prompt: "A retailer is deciding whether to open on Sundays at its forty high-street stores. The commercial team estimates additional weekly revenue of $190,000 against $120,000 of extra staffing and operating cost, giving a clear positive contribution. The finance director has asked for one further question to be answered before the trial is extended chain-wide.\n\nAnswering which of the following would be most useful in evaluating the proposal?",
  choices: [
    "Whether staff would prefer to work Sundays rather than Saturdays",
    "What proportion of Sunday revenue represents purchases customers would otherwise have made on another day",
    "How many competing retailers already open on Sundays",
    "Whether the stores' suppliers deliver at weekends"
  ],
  answer: 1,
  explanation: "If most Sunday spending is simply shifted from Saturday or Monday, the extra revenue is largely cannibalised while the extra staffing cost is entirely new, turning a positive contribution negative. Staff preferences, competitor hours and delivery schedules affect implementation rather than whether the revenue is genuinely incremental."
},
{
  type: "evaluate", d: 2,
  prompt: "A software firm is deciding whether to move its customer data from its own servers to a cloud provider. The infrastructure team projects savings of $700,000 a year in hardware, power and maintenance once the migration is complete, and notes that the provider offers stronger uptime guarantees than the firm currently achieves.\n\nAnswering which of the following would be most useful in evaluating the proposal?",
  choices: [
    "How much the firm would pay the cloud provider in data transfer and storage charges at its actual usage volumes",
    "Which programming languages the firm's engineers prefer",
    "How many other firms in the sector use cloud providers",
    "When the firm's current servers were purchased"
  ],
  answer: 0,
  explanation: "The $700,000 counts only the costs removed, not the costs added. Cloud billing scales with storage and especially with data egress, and at high volumes those charges routinely consume the entire saving. Language preferences and sector adoption are irrelevant, and server purchase dates matter only for residual value."
},
{
  type: "evaluate", d: 2,
  prompt: "A manufacturer is deciding whether to offer an extended five-year warranty on its flagship appliance, in place of the current two-year cover. Marketing projects that the longer warranty would lift unit sales by 12%, on the basis of a survey in which customers rated warranty length as an important purchase factor.\n\nAnswering which of the following would be most useful in evaluating the proposal?",
  choices: [
    "What the appliance's failure rate is between years two and five",
    "Which retailers stock the appliance",
    "How long the two-year warranty has been offered",
    "Whether competitors advertise their warranty terms prominently"
  ],
  answer: 0,
  explanation: "The whole economics of the proposal turn on how many units fail in the three extra years being covered. A low failure rate makes the warranty a cheap sales tool; a high one makes it a large unfunded liability that the 12% volume gain would not cover. Retail distribution, warranty history and competitor advertising do not size that exposure."
}

/* END-CT-2 */
];
Q.forEach(function(q){ window.QUESTION_BANK.ct.push(q); });
})();
