/* Critical Thinking — mapped to TestGorilla's published question types.
   TestGorilla lists four: inferences · cause-and-effect · arrangements · logical conclusions,
   and states the test covers syllogisms, assumptions, fallacies and weighing arguments.

   How the tags below map onto that:
     inference                  -> inferences / logical conclusions
     syllogism                  -> analyzing syllogisms (heavily tested; formal logic)
     arrangement                -> arrangements & sequences (ordering puzzles)
     argument-strength          -> weighing arguments, Watson-Glaser strong vs weak
     weaken / strengthen        -> cause-and-effect reasoning
     assumption / flaw          -> recognizing assumptions and fallacies
     paradox / evaluate         -> general analytical reasoning

   `d` = difficulty 1 easy / 2 medium / 3 hard (drives the per-question target time). */
window.QUESTION_BANK = window.QUESTION_BANK || {};
window.QUESTION_BANK.ct = [

/* ---------- WEAKEN ---------- */
{
  type: "weaken",
  prompt: "Last year the city installed brighter streetlights along Main Street. Over the following six months, reported crime on Main Street fell by 30%. City officials concluded that the brighter lighting caused the drop in crime.\n\nWhich of the following, if true, most weakens the officials' conclusion?",
  choices: [
    "During the same six months, the police department doubled the number of officers patrolling Main Street.",
    "The brighter streetlights cost the city more to operate than the older ones.",
    "Crime on Main Street had been rising slowly for the previous three years.",
    "Residents of Main Street reported feeling safer after the lights were installed."
  ],
  answer: 0,
  explanation: "The conclusion is causal. The strongest weakener supplies an alternative cause operating at the same time. Doubling police patrols is a well-known driver of reported crime and fully competes with the lighting explanation. Cost is irrelevant to causation; a prior rising trend would if anything strengthen the claim; and feelings of safety are not the same as the crime drop."
},
{
  type: "weaken",
  prompt: "A retail chain found that stores that play classical music have 12% higher average transaction values than stores that play pop music. The chain plans to switch all stores to classical music to raise revenue.\n\nWhich of the following, if true, most weakens the plan?",
  choices: [
    "Some customers report that they dislike classical music.",
    "Stores that play classical music are located almost exclusively in affluent neighborhoods.",
    "Switching the music in all stores would take about three months.",
    "The chain's competitors play a mix of both genres."
  ],
  answer: 1,
  explanation: "This is a classic selection-effect problem: if classical-music stores sit in affluent areas, the higher transaction value is explained by customer income, not by the music. The correlation would then disappear once you switch music in ordinary stores. Implementation time and competitor behavior do not bear on whether music causes spending."
},
{
  type: "weaken",
  prompt: "A manufacturer claims: 'Our factory reduced defects by 40% after we introduced the new quality-control checklist. Other factories should adopt the checklist to cut their defect rates.'\n\nWhich of the following, if true, most undermines the recommendation?",
  choices: [
    "The checklist takes workers about ten minutes per shift to complete.",
    "The factory replaced most of its aging machinery in the same quarter the checklist was introduced.",
    "Some workers found the checklist repetitive.",
    "The factory's defect rate had previously been higher than the industry average."
  ],
  answer: 1,
  explanation: "Replacing aging machinery is an obvious alternative cause of a defect drop, and it happened in the same quarter, so the checklist may deserve little or none of the credit. Time cost and worker opinion don't address whether the checklist works, and a previously high defect rate doesn't explain the improvement away."
},
{
  type: "weaken",
  prompt: "A university reports that graduates of its entrepreneurship program earn 35% more ten years after graduation than graduates of other programs. The university advertises the program as a way to increase future earnings.\n\nWhich of the following, if true, most weakens the advertisement's implied claim?",
  choices: [
    "Admission to the entrepreneurship program requires prior business experience and a competitive selection process.",
    "The entrepreneurship program has more required credits than most other programs.",
    "Some entrepreneurship graduates work outside the business sector.",
    "The 35% figure is calculated before taxes."
  ],
  answer: 0,
  explanation: "If the program admits only candidates who already have business experience and survive competitive selection, those students would likely out-earn their peers regardless of the program. The earnings gap reflects who gets in, not what the program adds. Credit load, sector variation, and pre-tax accounting leave the causal claim untouched."
},
{
  type: "weaken",
  prompt: "A hospital administrator argues: 'Patients treated at our hospital have a higher mortality rate than those at the community clinic across town. Therefore, the clinic provides better care.'\n\nWhich of the following, if true, most weakens the argument?",
  choices: [
    "The hospital employs more staff than the clinic.",
    "The hospital is the region's designated trauma center and receives the most severely injured patients.",
    "The clinic has recently expanded its facilities.",
    "Both facilities use similar record-keeping systems."
  ],
  answer: 1,
  explanation: "Raw mortality rates must be adjusted for how sick the patients are. As the regional trauma center, the hospital treats patients who arrive far more severely injured, so a higher mortality rate is expected even with superior care. This is confounding by case mix, not evidence of worse quality."
},
{
  type: "weaken",
  prompt: "A software company observed that users who complete the in-app tutorial renew their subscriptions at twice the rate of users who skip it. Management proposes making the tutorial mandatory to improve retention.\n\nWhich of the following, if true, most weakens the proposal?",
  choices: [
    "The tutorial takes about eight minutes to complete.",
    "Users who voluntarily complete the tutorial are those who already intended to use the product heavily.",
    "A competitor offers a shorter tutorial.",
    "The tutorial was developed two years ago."
  ],
  answer: 1,
  explanation: "Voluntary completion is a signal of pre-existing intent, not a cause of it. If highly motivated users self-select into the tutorial, forcing indifferent users through it will not transfer that motivation, and retention will not follow. The other options concern cost or context, not the causal link."
},
{
  type: "weaken",
  prompt: "Consultant: 'Companies that hold weekly all-hands meetings report higher employee engagement scores. Our client should institute weekly all-hands meetings to raise engagement.'\n\nWhich of the following, if true, most seriously weakens the consultant's recommendation?",
  choices: [
    "All-hands meetings typically last 45 minutes.",
    "Companies with already-engaged workforces are the ones most likely to adopt weekly all-hands meetings in the first place.",
    "Engagement scores are collected annually.",
    "The client currently holds monthly all-hands meetings."
  ],
  answer: 1,
  explanation: "This reverses the proposed causal direction: high engagement may cause the meetings rather than result from them. If so, adding meetings at a disengaged company would not raise engagement. Meeting length, survey frequency, and the current cadence are all beside the point."
},
{
  type: "weaken",
  prompt: "A city council argues that its new bike-lane network reduced traffic congestion, citing a 15% drop in average commute times downtown in the year after the lanes opened.\n\nWhich of the following, if true, most weakens the council's argument?",
  choices: [
    "A major downtown employer shifted 40% of its workforce to permanent remote work during that same year.",
    "The bike lanes cost more to build than originally projected.",
    "Cyclists report that the lanes feel safer than the previous road layout.",
    "Some drivers opposed the bike lanes before construction."
  ],
  answer: 0,
  explanation: "Moving 40% of a major employer's workforce to remote work removes a large volume of cars from downtown independently of the bike lanes, and it coincides exactly with the measurement window. That alternative cause could account for the entire drop. Cost overruns, cyclist sentiment, and prior opposition say nothing about what caused commute times to fall."
},

/* ---------- STRENGTHEN ---------- */
{
  type: "strengthen",
  prompt: "A retailer noticed that customers who install its mobile app spend 25% more per year than customers who do not. The marketing director argues that persuading more customers to install the app will increase overall revenue.\n\nWhich of the following, if true, most strengthens the director's argument?",
  choices: [
    "Customers who were randomly offered a small incentive to install the app subsequently increased their spending by a similar margin.",
    "The app was expensive to develop.",
    "Most of the retailer's competitors also offer mobile apps.",
    "App users are on average younger than non-users."
  ],
  answer: 0,
  explanation: "The weakness in the original argument is that app users may simply be the retailer's most loyal customers. A randomized experiment breaks that selection effect: because the incentive was assigned at random, the spending increase must be attributed to the app itself. The other options either raise costs, add competitive context, or reinforce the selection concern."
},
{
  type: "strengthen",
  prompt: "A public-health official claims that a new anti-smoking advertising campaign caused smoking rates in the region to fall by 8% last year.\n\nWhich of the following, if true, most strengthens the claim?",
  choices: [
    "The campaign was praised by several medical associations.",
    "In a neighboring region with similar demographics and no campaign, smoking rates were unchanged over the same period.",
    "The campaign cost less than previous public-health efforts.",
    "Smoking rates nationwide have generally declined over the past decade."
  ],
  answer: 1,
  explanation: "A comparable region without the campaign functions as a control group. If smoking fell only where the campaign ran, background trends and demographics are ruled out as explanations. Note that a general nationwide decline would actually weaken the claim, since it offers a competing explanation for the drop."
},
{
  type: "strengthen",
  prompt: "An airline argues that its new boarding procedure reduced average departure delays.\n\nWhich of the following, if true, most strengthens the argument?",
  choices: [
    "Passengers report that the new procedure is easier to understand.",
    "Delays fell only at the airports where the new procedure was implemented, and not at the airline's other airports.",
    "The airline's on-time reputation has improved in press coverage.",
    "The new procedure was designed by an experienced operations consultant."
  ],
  answer: 1,
  explanation: "A within-airline comparison isolates the procedure: airports that adopted it improved while those that did not stayed the same, which rules out weather, fleet, and company-wide factors. Passenger opinion, press coverage, and the designer's credentials are not evidence that delays actually fell because of the procedure."
},
{
  type: "strengthen",
  prompt: "Researchers propose that regular short breaks during the workday improve afternoon productivity.\n\nWhich of the following, if true, most strengthens the proposal?",
  choices: [
    "Employees say they enjoy taking breaks.",
    "Teams randomly assigned to a mandatory break schedule produced 12% more output in the afternoon than teams assigned to work straight through.",
    "Companies in several industries have adopted break policies.",
    "Productivity generally declines in the late afternoon."
  ],
  answer: 1,
  explanation: "Random assignment plus a measured output difference is the strongest possible support: it establishes causation rather than correlation, and it measures the outcome the proposal is about. Enjoyment, industry adoption, and the general afternoon slump are consistent with the proposal but do not test it."
},
{
  type: "strengthen",
  prompt: "A firm claims that its new employee-referral bonus improved the quality of new hires, pointing to higher first-year performance ratings among referred hires.\n\nWhich of the following, if true, most strengthens the firm's claim?",
  choices: [
    "Referred hires who joined before the bonus existed had performance ratings similar to non-referred hires.",
    "The referral bonus is paid six months after the new hire's start date.",
    "Employees appreciate the opportunity to earn the bonus.",
    "The firm receives more applications than it can review."
  ],
  answer: 0,
  explanation: "If referred hires performed no better before the bonus, then referral status alone does not explain the improvement — something about the bonus period does. This eliminates the most natural alternative explanation, that referred candidates are simply better regardless of any incentive. Payment timing, employee sentiment, and application volume don't test the claim."
},
{
  type: "strengthen",
  prompt: "An economist argues that raising a city's minimum wage did not reduce employment in that city's restaurant sector.\n\nWhich of the following, if true, most strengthens the economist's argument?",
  choices: [
    "Restaurant owners in the city publicly opposed the wage increase.",
    "Restaurant employment in the city tracked closely with restaurant employment in three neighboring cities that did not raise their minimum wage.",
    "The minimum wage increase was phased in over two years.",
    "Some restaurants raised menu prices after the increase."
  ],
  answer: 1,
  explanation: "Comparison cities that did not change their wage floor serve as a counterfactual. If employment moved identically in both, the wage increase plausibly had no employment effect. Owner opposition and price adjustments are consistent with either outcome, and a phase-in describes the policy without measuring its effect."
},

/* ---------- ASSUMPTION ---------- */
{
  type: "assumption",
  prompt: "A consulting firm invested heavily in new financial-modeling software after several junior analysts reported spending disproportionate hours on repetitive model-building tasks during client engagements. Early internal testing showed that the software reduces the time needed to build a financial model by 40% compared with the firm's previous process. At the annual planning meeting, the managing partner cited this figure and concluded that the firm will therefore be able to take on 40% more client engagements next year without adding headcount.\n\nThe partner's conclusion depends on which of the following assumptions?",
  choices: [
    "The software will be adopted by every consultant in the firm.",
    "Model-building time is what currently limits the number of engagements the firm can accept.",
    "Competing firms do not have access to similar software.",
    "The software costs less than the revenue from one additional engagement."
  ],
  answer: 1,
  explanation: "The argument leaps from a time saving in one task to a proportional increase in total output. That leap only holds if model-building is the binding constraint. If engagements are limited by client demand, partner availability, or anything else, faster modeling buys no additional engagements. Negate this assumption and the conclusion collapses — the hallmark of a necessary assumption."
},
{
  type: "assumption",
  prompt: "Facing pressure from residents about worsening air quality downtown, city officials unveiled a new initiative aimed at reducing pollution from daily commuter traffic. Under the plan, the city will offer free public-transit passes to downtown commuters, funded through a reallocation of the parking-enforcement budget. Officials publicly stated that they expect a significant drop in vehicle emissions within the first year of the program, citing similar initiatives in other cities as precedent.\n\nThe plan assumes which of the following?",
  choices: [
    "Public transit is more comfortable than driving.",
    "A meaningful number of commuters who currently drive will switch to public transit because the passes are free.",
    "The city's transit system runs entirely on electricity.",
    "Downtown commuters earn above-average incomes."
  ],
  answer: 1,
  explanation: "The plan's whole mechanism is mode-switching: free passes only reduce emissions if drivers actually stop driving. If the passes are taken up mainly by people who already ride transit, emissions barely move. Comfort, transit energy source, and commuter income are not required for the argument to work."
},
{
  type: "assumption",
  prompt: "During a quarterly business review, a customer service manager presented results from the department's latest satisfaction survey, which had been emailed to customers automatically after each support interaction over the past three months. Summarizing the findings for senior leadership, the manager argues: 'Our customer satisfaction survey shows 90% satisfaction. Our customers are clearly happy with our service,' and recommended no changes to the current support process.\n\nWhich of the following is an assumption the manager is making?",
  choices: [
    "The survey respondents are reasonably representative of the overall customer base.",
    "The company's service is better than that of its competitors.",
    "The survey was conducted by an independent firm.",
    "Satisfied customers spend more than dissatisfied ones."
  ],
  answer: 0,
  explanation: "Generalizing from a survey to the whole customer base requires that respondents resemble that base. If only enthusiastic customers bothered to respond — a very common pattern — the 90% figure says nothing about customers overall. Competitive comparison, survey administration, and spending behavior are not needed for this particular inference."
},
{
  type: "assumption",
  prompt: "An investor argues: 'This company's revenue has grown 25% annually for three years. It will therefore be a profitable investment.'\n\nThe investor's reasoning assumes which of the following?",
  choices: [
    "The company has no competitors.",
    "Revenue growth will translate into returns for shareholders.",
    "The company operates in a single country.",
    "The company's founders remain with the business."
  ],
  answer: 1,
  explanation: "Revenue growth and investor return are different things: a company can grow revenue rapidly while losing money, diluting shareholders, or trading at a price that already reflects the growth. The argument silently bridges that gap. The other options may be relevant business facts but are not required links in this chain of reasoning."
},
{
  type: "assumption",
  prompt: "After several years of stagnant literacy results, a school district adopted a new reading curriculum developed by an outside education consultancy, rolling it out across all elementary schools at the start of the academic year. At the year's end, district administrators compared standardized test results with the previous year's figures. Based on this comparison, the school district concludes that its new reading curriculum is effective because average reading scores rose 10 points after it was introduced.\n\nThe conclusion assumes which of the following?",
  choices: [
    "No other significant change affecting reading scores occurred at the same time as the curriculum change.",
    "Every teacher in the district supported the new curriculum.",
    "Reading is the most important subject in the curriculum.",
    "The previous curriculum had been in use for many years."
  ],
  answer: 0,
  explanation: "Attributing the score increase to the curriculum requires ruling out concurrent causes such as smaller classes, a new testing format, or a change in student population. This is the standard necessary assumption behind any before-and-after causal claim. Teacher enthusiasm, subject priority, and curriculum age are not required."
},
{
  type: "assumption",
  prompt: "A logistics company plans to cut delivery costs by 15% by switching to a smaller vehicle fleet, since smaller vehicles consume less fuel per mile.\n\nThe plan assumes which of the following?",
  choices: [
    "Smaller vehicles are less expensive to purchase.",
    "The company will not need to make substantially more trips to move the same volume of goods.",
    "Fuel prices will remain stable.",
    "Drivers prefer operating smaller vehicles."
  ],
  answer: 1,
  explanation: "Fuel savings per mile can be entirely erased if smaller capacity forces more trips and therefore more total miles. The plan works only if total mileage doesn't rise proportionally. Purchase price, fuel-price stability, and driver preference are not necessary for the stated cost logic to hold."
},

/* ---------- INFERENCE / MUST BE TRUE ---------- */
{
  type: "inference",
  prompt: "The firm's HR department reviewed last year's promotion cycle across all analyst-track employees, comparing outcomes against completion records for the advanced modeling certification, which several team leads had recommended as useful preparation. The review confirmed that every analyst who was promoted last year had completed the advanced modeling certification before their promotion took effect. Maria, a second-year analyst on the strategy team, has not completed the advanced modeling certification.\n\nWhich of the following must be true?",
  choices: [
    "Maria was not promoted last year.",
    "Maria is not qualified for promotion.",
    "Maria will complete the certification this year.",
    "The certification is required of all analysts."
  ],
  answer: 0,
  explanation: "The statement establishes: promoted → certified. Its contrapositive is: not certified → not promoted, which applies directly to Maria. Note that the reverse (certified → promoted) does not follow, and nothing is said about Maria's qualifications, her future plans, or a general requirement."
},
{
  type: "inference",
  prompt: "As part of a staffing review, the firm's regional operations office compiled language and assignment records for the strategy team, which supports clients across Latin America and periodically rotates members through overseas postings. The records show that all members of the strategy team speak Portuguese, and that some members of the strategy team have worked on assignment in Brazil at some point in their careers. Separately, HR policy establishes that no one who has worked in Brazil is based in the Bogotá office.\n\nWhich of the following must be true?",
  choices: [
    "Some Portuguese speakers are not based in the Bogotá office.",
    "No member of the strategy team is based in the Bogotá office.",
    "Everyone based in the Bogotá office speaks Portuguese.",
    "All Portuguese speakers have worked in Brazil."
  ],
  answer: 0,
  explanation: "Take the strategy members who have worked in Brazil: they exist, they speak Portuguese (all strategy members do), and they are not Bogotá-based. So some Portuguese speakers are not in Bogotá. Option 1 overreaches — strategy members who never worked in Brazil could be in Bogotá. Options 2 and 3 reverse the given relationships."
},
{
  type: "inference",
  prompt: "The HR analytics team distributed an anonymous post-training survey to every employee who completed the firm's new analytical-skills workshop, part of a broader initiative to modernize internal learning programs this year. The survey asked participants to rate their confidence in applying analytical techniques compared with before the workshop, and it remained open for two weeks after each session ended. The final results showed that among employees who received the new training, 85% reported higher confidence in their analytical skills.\n\nWhich of the following can be properly inferred?",
  choices: [
    "Most employees who received the training believed their confidence had increased.",
    "The training improved employees' actual analytical skills.",
    "Employees who did not receive the training had lower confidence.",
    "85% of all employees at the company received the training."
  ],
  answer: 0,
  explanation: "85% exceeds half, so 'most' follows directly and claims nothing beyond the data. The trap options each add something the survey cannot support: self-reported confidence is not measured skill, no untrained comparison group was described, and the 85% is a share of the trained group, not of all employees."
},
{
  type: "inference",
  prompt: "The engagement contract between the consulting firm and its client included a standard delay clause, added after a previous project ran significantly over schedule and caused disputes about compensation. Under the terms both parties signed, if the project is delayed, the client will renegotiate the fee before any additional work continues. At the project's scheduled close-out meeting, the account manager confirmed that the client did not renegotiate the fee at any point during the engagement.\n\nWhich of the following must be true?",
  choices: [
    "The project was not delayed.",
    "The project was completed early.",
    "The client was satisfied with the project.",
    "The fee was higher than originally agreed."
  ],
  answer: 0,
  explanation: "This is modus tollens: given 'delayed → renegotiate' and 'not renegotiate', it follows necessarily that the project was not delayed. 'Not delayed' does not mean early — on time also satisfies it — and nothing at all is stated about client satisfaction or the fee level."
},
{
  type: "inference",
  prompt: "The firm's staffing policy, introduced after a client complaint about a language barrier on an earlier project, states that no consultant who lacks fluency in English is assigned to international engagements, regardless of seniority or prior client relationships. A staffing audit conducted this quarter found that some consultants in the Bogotá office are currently assigned to international engagements spanning multiple regions.\n\nWhich of the following must be true?",
  choices: [
    "Some consultants in the Bogotá office are fluent in English.",
    "All consultants in the Bogotá office are fluent in English.",
    "Most international engagements are staffed from Bogotá.",
    "Consultants who are fluent in English are always assigned internationally."
  ],
  answer: 0,
  explanation: "International assignment requires English fluency. Since some Bogotá consultants hold international assignments, those particular consultants must be fluent — so 'some' follows. 'All' overreaches, because Bogotá consultants without international work are unconstrained. Options 3 and 4 invert or invent relationships not given."
},
{
  type: "inference",
  prompt: "The finance team's year-end summary, prepared for the board's annual review, highlighted two separate trends observed across the fiscal year. First, the report states that revenue rose in every quarter of last year, meaning each quarter's total exceeded the quarter before it. Second, the same report notes that total annual costs were lower than the year before, a result the CFO attributed partly to renegotiated supplier contracts.\n\nWhich of the following must be true?",
  choices: [
    "Annual profit was higher than the previous year's.",
    "Fourth-quarter revenue was the highest of the four quarters.",
    "Costs fell in every quarter.",
    "The company had no losses in any quarter."
  ],
  answer: 1,
  explanation: "'Rose in every quarter' means each quarter exceeded the one before it, so Q4 is necessarily the largest. Profit comparison requires knowing last year's total revenue, which isn't given — only that it rose within the year. And a lower annual cost total is compatible with costs rising in some individual quarters."
},
{
  type: "inference",
  prompt: "Following a data-security review, the firm tightened its access controls for sensitive client records and updated its internal policy manual accordingly. The revised policy states that only employees who have completed the compliance course may access the client database, and IT now enforces this requirement through an automated permissions system rather than manual approval. A routine audit of database logs this month confirmed that Javier, an analyst on the advisory team, has access to the client database.\n\nWhich of the following must be true?",
  choices: [
    "Javier has completed the compliance course.",
    "Javier is a senior employee.",
    "Everyone who completes the compliance course gets database access.",
    "The compliance course covers database security."
  ],
  answer: 0,
  explanation: "'Only X may Y' means Y requires X: access → completed the course. Javier has access, so he completed it. Beware the reversal in option 2: completing the course is necessary for access but not stated to be sufficient. Seniority and course content are never mentioned."
},

/* ---------- FLAW ---------- */
{
  type: "flaw",
  prompt: "Manager: 'Our best salespeople all arrive at the office before 8 a.m. If we require everyone to arrive before 8 a.m., overall sales will improve.'\n\nWhich of the following best describes the flaw in the manager's reasoning?",
  choices: [
    "It assumes that a characteristic shared by successful salespeople is what causes their success.",
    "It fails to define what counts as a 'best' salesperson.",
    "It relies on the testimony of an interested party.",
    "It assumes that all salespeople want to improve."
  ],
  answer: 0,
  explanation: "Early arrival may be a symptom of the drive that makes these salespeople successful, not the cause of the success. Mandating the symptom in others won't transplant the underlying trait. The definitional and motivational points are quibbles that don't identify the reasoning error."
},
{
  type: "flaw",
  prompt: "Critic: 'The new tax proposal cannot be sound economic policy, because it was written by legislators who have never run a business.'\n\nThe critic's argument is most vulnerable to the criticism that it:",
  choices: [
    "attacks the origin of the proposal rather than its content",
    "relies on statistics from an unnamed source",
    "confuses a necessary condition with a sufficient one",
    "assumes what it sets out to prove"
  ],
  answer: 0,
  explanation: "This is an ad hominem — specifically, a genetic fallacy. The authors' backgrounds are irrelevant to whether the policy's provisions are economically sound; sound proposals can come from inexperienced authors and vice versa. No statistics, conditional logic, or circularity appear in the argument."
},
{
  type: "flaw",
  prompt: "Executive: 'Either we cut the marketing budget or we will miss our profit target. We cannot afford to miss our profit target, so we must cut the marketing budget.'\n\nThe reasoning is flawed because it:",
  choices: [
    "presents only two options when others may be available",
    "cites an authority without justification",
    "generalizes from an unrepresentative sample",
    "confuses correlation with causation"
  ],
  answer: 0,
  explanation: "This is a false dilemma. Profit could also be protected by raising prices, cutting other costs, or increasing volume, none of which the executive considers. The argument's logic is valid given its premise, but the premise itself illegitimately narrows the option set."
},
{
  type: "flaw",
  prompt: "Analyst: 'The average tenure of employees at our company is eight years, so most of our employees have been here about eight years.'\n\nThe analyst's reasoning is flawed because:",
  choices: [
    "an average can be produced by a distribution in which few or no individuals are near the average",
    "tenure is not a meaningful measure of employee value",
    "the analyst does not specify which employees were counted",
    "eight years is a short period in most industries"
  ],
  answer: 0,
  explanation: "Averages hide distribution. A workforce split between many one-year hires and a few thirty-year veterans can average eight years while almost nobody is actually near eight. Inferring the typical case from the mean requires assumptions about the shape of the distribution that the analyst never states."
},
{
  type: "flaw",
  prompt: "Advertisement: 'Nine out of ten dentists who responded to our survey recommend our toothpaste. Clearly, our toothpaste is the choice of dental professionals.'\n\nThe advertisement's reasoning is most vulnerable to which criticism?",
  choices: [
    "It draws a conclusion about all dentists from those who chose to respond.",
    "It does not state how much the toothpaste costs.",
    "It assumes dentists use the toothpaste themselves.",
    "It fails to compare the toothpaste to other brands."
  ],
  answer: 0,
  explanation: "The claim rests on self-selected respondents, who may differ systematically from dentists overall — particularly if the survey reached dentists with an existing relationship to the brand. This response bias makes the leap from 'those who responded' to 'dental professionals' unwarranted. Price and personal use are not the logical gap here."
},
{
  type: "flaw",
  prompt: "Politician: 'My opponent's healthcare plan should be rejected. He claims it will solve every problem in the system, which is obviously impossible.'\n\nThe politician's argument is flawed because it:",
  choices: [
    "misrepresents the opponent's position in order to refute it more easily",
    "appeals to popular opinion instead of evidence",
    "treats a single counterexample as decisive",
    "assumes that what is true of a part is true of the whole"
  ],
  answer: 0,
  explanation: "This is a straw man. By inflating the opponent's plan into a claim of solving 'every problem', the politician attacks a position the opponent probably never took, leaving the actual plan unexamined. No appeal to popularity, counterexample, or part-whole reasoning is present."
},

/* ---------- PARADOX / EXPLAIN ---------- */
{
  type: "paradox",
  prompt: "An airline reduced base ticket prices on a popular route by 15%. The number of tickets sold on that route rose by 30%. Yet total revenue from the route fell.\n\nWhich of the following, if true, best explains this outcome?",
  choices: [
    "Along with the price reduction, the airline eliminated baggage and seat-selection fees, which had previously generated substantial revenue on the route.",
    "The airline's competitors also reduced prices on the same route.",
    "Fuel costs on the route increased during the same period.",
    "The airline added two additional daily flights on the route."
  ],
  answer: 0,
  explanation: "A 15% price cut paired with 30% more volume should raise ticket revenue by about 10% (0.85 × 1.30 ≈ 1.105), so the fall must come from revenue outside base fares. Eliminating substantial ancillary fees supplies exactly that missing piece. Note that rising fuel costs affect profit, not revenue — a tempting but incorrect choice."
},
{
  type: "paradox",
  prompt: "A company introduced a generous work-from-home policy expecting office costs to fall. Employee satisfaction rose sharply, but the company's total facilities spending increased that year.\n\nWhich of the following, if true, best explains the increase?",
  choices: [
    "The company's lease required a fixed payment through the end of a ten-year term, and the company opened additional small satellite offices for occasional in-person collaboration.",
    "Employees reported enjoying the flexibility of remote work.",
    "Several competitors introduced similar policies.",
    "The company's headcount remained stable during the year."
  ],
  answer: 0,
  explanation: "The paradox needs a reason costs rose despite emptier desks. A non-cancellable lease means the original cost persists, and new satellite offices add cost on top of it — together they fully account for the increase. Satisfaction, competitor behavior, and stable headcount describe the situation without explaining the cost movement."
},
{
  type: "paradox",
  prompt: "A grocery chain moved its most profitable products to eye-level shelves, a placement known to increase sales. Sales of those products did increase, but the chain's overall profit declined.\n\nWhich of the following, if true, best explains this result?",
  choices: [
    "The products displaced from eye-level shelves had even higher profit margins and sold in much larger volumes.",
    "Customers took slightly longer to find products after the rearrangement.",
    "The rearrangement was completed over a single weekend.",
    "Competing chains use similar shelf-placement strategies."
  ],
  answer: 0,
  explanation: "Shelf space is zero-sum: promoting one product demotes another. If the displaced products contributed more total profit — higher margins across much larger volumes — their decline can easily outweigh the gain, producing exactly the observed outcome. The other options describe minor friction or context with no profit consequence of that magnitude."
},
{
  type: "paradox",
  prompt: "A country's unemployment rate rose last quarter, even though the number of people employed also increased.\n\nWhich of the following best explains this apparent contradiction?",
  choices: [
    "The labor force grew faster than the number of jobs, as many people who had stopped looking for work resumed their job search.",
    "Wages increased across most industries during the quarter.",
    "Several large employers announced expansion plans.",
    "The government revised its method of counting part-time workers."
  ],
  answer: 0,
  explanation: "Unemployment is a ratio: unemployed ÷ labor force. When discouraged workers re-enter the search, they join the labor force and count as unemployed until hired, pushing the rate up even as employment grows. Wage growth and expansion plans don't touch the arithmetic, and a vague methodological revision explains far less precisely."
},
{
  type: "paradox",
  prompt: "A hotel chain raised its room rates by 20% and expected occupancy to fall. Occupancy remained unchanged, and yet the chain's profit per room declined.\n\nWhich of the following, if true, best explains the decline?",
  choices: [
    "To justify the higher rates, the chain added complimentary breakfast, airport transfers, and daily housekeeping upgrades whose combined cost exceeded the rate increase.",
    "Several competing hotels also raised their rates.",
    "The chain's marketing budget was unchanged.",
    "Guests stayed for the same average number of nights as before."
  ],
  answer: 0,
  explanation: "With rates up and occupancy flat, revenue per room clearly rose — so falling profit must come from the cost side. Amenities added specifically to justify the increase, costing more than the increase itself, explain the gap exactly. Competitor pricing, marketing spend, and stay length leave per-room economics unchanged."
},

/* ---------- EVALUATE ---------- */
{
  type: "evaluate",
  prompt: "A company is deciding whether to move its customer-service center from City A to City B, where wages are 30% lower.\n\nAnswering which of the following would be most useful in evaluating whether the move will reduce total costs?",
  choices: [
    "Whether output per employee in City B is comparable to output per employee in City A",
    "Whether current employees in City A would prefer to relocate",
    "What the average commute time is in City B",
    "Whether City B has a larger population than City A"
  ],
  answer: 0,
  explanation: "Labor cost depends on wages and productivity together. If workers in City B handle proportionally fewer cases, the company must hire more of them, and the 30% wage advantage shrinks or vanishes. This question therefore directly determines whether the cost saving is real. Preferences, commutes, and population size don't bear on total cost."
},
{
  type: "evaluate",
  prompt: "A publisher plans to increase profits by raising the price of its flagship magazine by 20%.\n\nWhich of the following would be most useful to know in evaluating the plan?",
  choices: [
    "How many subscribers would cancel in response to the price increase",
    "When the magazine was first published",
    "How many pages the magazine contains",
    "Whether the magazine has won industry awards"
  ],
  answer: 0,
  explanation: "The plan's outcome hinges on price elasticity: a 20% price rise raises profit only if subscriber losses stay small enough. Cancellation volume is precisely the unknown that decides between success and failure. History, page count, and awards are descriptive facts with no bearing on the profit arithmetic."
},
{
  type: "evaluate",
  prompt: "Facing rising costs at its regional landfill, which is expected to reach capacity within five years, a city's public works department proposed a new pricing structure for household waste collection. Under the proposal, the city proposes to reduce landfill waste by requiring residents to pay per bag of trash collected, replacing the current flat monthly fee that applies regardless of how much trash a household generates. The city council is expected to vote on the measure next month.\n\nAnswering which of the following would be most relevant to evaluating whether the proposal will reduce total waste?",
  choices: [
    "Whether residents would respond by increasing illegal dumping or by compacting the same waste into fewer bags",
    "How many collection trucks the city currently operates",
    "Whether neighboring cities have similar landfills",
    "What the city's population was ten years ago"
  ],
  answer: 0,
  explanation: "Per-bag pricing reduces bags, but the goal is reducing waste. If residents simply pack tighter or dump illegally, bag counts fall while actual waste does not — the policy would appear to work while failing. This question tests exactly that gap. Fleet size, neighboring landfills, and past population don't."
},
{
  type: "evaluate",
  prompt: "A pharmaceutical company presented interim results from a clinical trial to a panel of industry analysts ahead of its planned application for regulatory approval. The company reports that patients taking its new drug recovered faster than patients taking no medication at all, describing the difference as clinically meaningful in its press release. Analysts on the call asked several follow-up questions about how the trial had been designed.\n\nWhich of the following would be most useful in evaluating the significance of this result?",
  choices: [
    "How the new drug's recovery times compare with those of existing standard treatments",
    "How long the company spent developing the drug",
    "How many countries have approved the drug",
    "What the drug's brand name is"
  ],
  answer: 0,
  explanation: "Beating no treatment is a low bar; the decision-relevant question is whether the drug beats what patients would otherwise receive. Without that comparison, the reported advantage may be real but clinically worthless. Development time, approvals, and branding say nothing about efficacy."
},

/* ---------- QUANTITATIVE REASONING IN ARGUMENT ---------- */
{
  type: "flaw",
  prompt: "In one year, Company X's profit margin rose from 4% to 6%, while Company Y's rose from 20% to 24%. An analyst concluded that Company X improved its margin more than Company Y did.\n\nWhich of the following best evaluates the analyst's claim?",
  choices: [
    "The claim is defensible in relative terms (a 50% increase versus 20%) but not in absolute terms (2 points versus 4 points).",
    "The claim is correct because 6% is greater than 4%.",
    "The claim is incorrect because Company Y has the higher margin.",
    "The claim cannot be evaluated without knowing each company's revenue."
  ],
  answer: 0,
  explanation: "The word 'more' is ambiguous between percentage-point change and percent change. X gained 2 points, a 50% relative improvement; Y gained 4 points, a 20% relative improvement. Each company wins on one measure, so the claim is only valid once the measure is specified — a distinction consultants are expected to make explicit."
},
{
  type: "flaw",
  prompt: "A report notes that a hospital's surgical complication rate rose from 2% to 3% last year and describes this as 'a 1% increase in complications.'\n\nThe report's description is misleading because:",
  choices: [
    "the rate rose by 1 percentage point, which represents a 50% increase in the complication rate",
    "complication rates should never be expressed as percentages",
    "the report does not state how many surgeries were performed",
    "a one-year period is too short to draw conclusions"
  ],
  answer: 0,
  explanation: "Percentage points and percentages are distinct units. Going from 2% to 3% is a 1-point rise but a 50% relative increase — half again as many patients experiencing complications. Calling it 'a 1% increase' understates the change dramatically. This conflation is one of the most common quantitative errors in business reporting."
},
{
  type: "weaken",
  prompt: "A manager reports: 'Our customer complaints doubled this year, from 50 to 100. Service quality is clearly deteriorating.'\n\nWhich of the following, if true, most weakens the manager's conclusion?",
  choices: [
    "The company's customer base grew from 5,000 to 20,000 during the same year.",
    "Complaints are logged by the customer-service team.",
    "Some complaints concerned products rather than service.",
    "The company received praise from several long-standing customers."
  ],
  answer: 0,
  explanation: "Absolute counts are meaningless without a base. Complaints per customer actually fell from 1% (50/5,000) to 0.5% (100/20,000), so the rate improved even as the raw number doubled. This inverts the manager's conclusion. Logging procedures, complaint categories, and anecdotal praise are far weaker responses."
},
{
  type: "inference",
  prompt: "A mid-sized manufacturing company's annual report summarized two consecutive years of financial performance for shareholders ahead of the upcoming board meeting. According to the figures presented, the company's revenue grew 10% in Year 1 compared with the prior baseline, before falling 10% in Year 2 relative to the Year 1 total. Management did not comment on whether this pattern was expected to continue into Year 3.\n\nWhich of the following must be true about revenue at the end of Year 2 compared with the starting level?",
  choices: [
    "It is lower than the starting level.",
    "It is equal to the starting level.",
    "It is higher than the starting level.",
    "It cannot be determined."
  ],
  answer: 0,
  explanation: "Percentage changes compound on different bases. Starting at 100: Year 1 ends at 110, and a 10% fall from 110 removes 11, landing at 99 — below the original 100. A gain and an equal-percentage loss never cancel out; the result is always below the starting point, regardless of the starting value."
},

/* ---------- ADDITIONAL MIXED ---------- */
{
  type: "weaken",
  prompt: "A study found that people who eat breakfast weigh less on average than people who skip it. A nutritionist concludes that eating breakfast helps prevent weight gain.\n\nWhich of the following, if true, most weakens the conclusion?",
  choices: [
    "People who skip breakfast are more likely to be shift workers with irregular eating and sleeping schedules that independently affect weight.",
    "Breakfast foods vary widely in nutritional content.",
    "The study included participants from several countries.",
    "Some people who eat breakfast also eat large dinners."
  ],
  answer: 0,
  explanation: "Irregular shift schedules plausibly cause both breakfast-skipping and weight gain, making the observed association spurious. This is a confounding variable, the standard weakener for an observational correlation. Food variety, geographic breadth, and dinner size don't sever the proposed causal link."
},
{
  type: "assumption",
  prompt: "Facing a funding shortfall, a charity's board debated whether to significantly increase its marketing budget for the upcoming fundraising cycle. Reviewing five years of internal data, the development director noted that donations have historically risen in proportion to advertising spend across that period. Based on this pattern, the charity argues that doubling its advertising spend will double the donations it receives, and proposed reallocating funds from program services to cover the increase.\n\nThe argument assumes which of the following?",
  choices: [
    "The proportional relationship between advertising and donations will continue to hold at the higher spending level.",
    "The charity's cause is popular with the public.",
    "No other charity advertises in the same channels.",
    "Donors prefer to give in response to advertisements."
  ],
  answer: 0,
  explanation: "Extrapolating a historical ratio to a new spending level assumes the relationship doesn't break down — but advertising typically shows diminishing returns as the most responsive audience is exhausted. Without the assumption of continued proportionality, the conclusion fails. Popularity, competition, and donor preference are contextual, not load-bearing."
},
{
  type: "inference",
  prompt: "An internal memo circulated to department heads outlined recent changes to the firm's proposal-approval process, prompted by two incidents in which unreviewed proposals proceeded without adequate risk assessment. The memo states that no proposal is approved unless it is reviewed by the risk committee, formalizing a step that had previously been informal. It further notes that some proposals reviewed by the risk committee are rejected, based on a summary of decisions from the past two quarters.\n\nWhich of the following must be true?",
  choices: [
    "Review by the risk committee does not guarantee approval.",
    "Most proposals are rejected.",
    "The risk committee reviews every proposal submitted.",
    "Proposals rejected by the risk committee cannot be resubmitted."
  ],
  answer: 0,
  explanation: "The second sentence establishes that some reviewed proposals are rejected, which is precisely the statement that review is not sufficient for approval — it is necessary but not sufficient. Nothing indicates what share is rejected, whether all submissions reach the committee, or what happens after rejection."
},
{
  type: "strengthen",
  prompt: "A city argues that its new recycling education program caused household recycling rates to rise from 30% to 45%.\n\nWhich of the following, if true, most strengthens the city's argument?",
  choices: [
    "Recycling rates rose sharply in the districts that received the program and stayed near 30% in demographically similar districts that did not.",
    "The program was well received by community organizations.",
    "Recycling is widely regarded as environmentally beneficial.",
    "The city also expanded the number of recycling drop-off locations citywide."
  ],
  answer: 0,
  explanation: "A district-level comparison with similar untreated areas isolates the program's effect and rules out citywide trends. Note that option 4 actively weakens the argument by introducing a competing cause applied everywhere. Community approval and general environmental sentiment are not evidence of causation."
},
{
  type: "paradox",
  prompt: "A software firm doubled the size of its engineering team to accelerate a delayed product launch. The launch was delayed further.\n\nWhich of the following, if true, best explains this outcome?",
  choices: [
    "Existing engineers had to spend much of their time training and coordinating with the new hires, and coordination overhead grew faster than the added capacity.",
    "The new engineers were paid market-rate salaries.",
    "The product had been in development for two years.",
    "Competing firms were also hiring engineers."
  ],
  answer: 0,
  explanation: "Adding people to a late project imposes onboarding and communication costs on the very people who were producing output — a well-documented effect in software management. When that overhead exceeds the new capacity, net progress slows. Salaries, project age, and the hiring market don't explain why more people produced less progress."
},
{
  type: "flaw",
  prompt: "Board member: 'Our CEO must be doing an excellent job. Our stock price has risen 40% since she took over.'\n\nThe board member's reasoning is most vulnerable to the criticism that it:",
  choices: [
    "fails to consider whether the broader market or industry rose by a similar or greater amount",
    "assumes that stock prices are publicly reported",
    "relies on a sample of only one company",
    "confuses a necessary condition with a sufficient one"
  ],
  answer: 0,
  explanation: "Performance must be judged against a benchmark. If the whole market rose 50%, a 40% gain means the company underperformed and the evidence cuts the opposite way. Without that comparison the 40% figure is uninterpretable. The other options misidentify the structure of the argument."
},
{
  type: "evaluate",
  prompt: "The maintenance costs on an aging piece of factory equipment have grown steadily over the past several years, prompting the plant manager to explore whether replacement would be more economical than continued repair. Currently, the manufacturer is considering replacing a machine that costs $50,000 per year to maintain with a new model costing $200,000 to purchase outright, financed either through a bank loan or the plant's existing capital budget. No decision has been made yet pending further analysis.\n\nAnswering which of the following would be most useful in evaluating the decision?",
  choices: [
    "How many years the new machine would operate and what its own maintenance costs would be",
    "Which supplier manufactures the new machine",
    "How long the current machine has been in service",
    "Whether competitors use similar machines"
  ],
  answer: 0,
  explanation: "The comparison is between a recurring cost and an upfront one, so the decision requires knowing the new machine's useful life and its own running costs — only then can total cost of ownership be compared. The current machine's age is a sunk-cost distraction, and supplier identity and competitor practice don't determine the economics."
},
{
  type: "weaken",
  prompt: "A newspaper claims that its subscription price increase was justified because subscriber numbers held steady in the month following the increase.\n\nWhich of the following, if true, most weakens the newspaper's claim?",
  choices: [
    "Most subscribers are on annual contracts that could not be cancelled until their renewal dates, which fall throughout the following year.",
    "The newspaper's print quality improved at the same time.",
    "Competing newspapers charge similar prices.",
    "The price increase was announced two months in advance."
  ],
  answer: 0,
  explanation: "A one-month window cannot detect attrition when subscribers are contractually locked in. Steady numbers reflect the contract structure, not customer acceptance, and the real test arrives at renewal. Print quality and competitor pricing might justify the increase on other grounds but don't address the flawed evidence."
},
{
  type: "assumption",
  prompt: "After years of public complaints about gridlock during peak commuting hours, a metropolitan planning agency proposed a major infrastructure investment to address the region's traffic problems. Presenting the proposal at a public hearing, a government official argues that building a new highway will reduce traffic congestion in the metropolitan area, pointing to projected travel-time savings modeled by the agency's engineering team as justification for the project's cost.\n\nThe argument assumes which of the following?",
  choices: [
    "The additional road capacity will not attract enough new drivers to offset the congestion relief.",
    "The highway will be completed on schedule.",
    "Public transit ridership will remain constant.",
    "The highway will be financed by tolls."
  ],
  answer: 0,
  explanation: "Induced demand is the standard counterargument: new capacity lowers the effective cost of driving, drawing in trips that previously didn't happen and restoring congestion. The official's conclusion holds only if that effect stays small. Schedule, transit ridership, and financing are not necessary to the congestion claim itself."
},
{
  type: "inference",
  prompt: "The project management office compiled a year-end report reviewing the outcomes of every major engagement completed during the fiscal year, intended to identify patterns that might inform future scheduling and budgeting practices. Among its findings, the report states that every project that finished under budget also finished on time. Separately, the report confirms that Project Delta, a six-month infrastructure engagement, finished on time.\n\nWhich of the following can be properly concluded about Project Delta?",
  choices: [
    "Nothing can be concluded about whether it finished under budget.",
    "It finished under budget.",
    "It did not finish under budget.",
    "It exceeded its budget."
  ],
  answer: 0,
  explanation: "The stated rule runs under budget → on time. Knowing Delta finished on time affirms the consequent, which licenses no conclusion: on-time projects may or may not have been under budget. Choosing option 2 commits the classic converse error, one of the most frequently tested traps in formal reasoning."
},
{
  type: "strengthen",
  prompt: "A bank claims that its fraud-detection system prevented $10 million in losses last year.\n\nWhich of the following, if true, most strengthens the claim?",
  choices: [
    "Transactions the system flagged and blocked were later confirmed by investigators to be fraudulent at a rate above 90%.",
    "The system was developed by a leading technology vendor.",
    "The bank's total transaction volume increased last year.",
    "Other banks have installed similar systems."
  ],
  answer: 0,
  explanation: "The claim rests on the assumption that blocked transactions really were fraud. Independent confirmation at a 90%+ rate validates exactly that, converting the $10 million from an assertion into a substantiated estimate. Vendor reputation, transaction growth, and industry adoption provide no verification of the blocked transactions."
},
{
  type: "flaw",
  prompt: "Researcher: 'Countries with more physicians per capita have higher rates of chronic disease diagnosis. Therefore, physicians may be over-diagnosing chronic conditions.'\n\nWhich of the following, if true, most seriously undermines the researcher's interpretation?",
  choices: [
    "Countries with more physicians per capita also have older populations, in which chronic disease is genuinely more prevalent.",
    "Physicians in some countries specialize more narrowly than in others.",
    "Chronic disease definitions have changed over the past decade.",
    "Some patients consult multiple physicians for the same condition."
  ],
  answer: 0,
  explanation: "An older population means more actual chronic disease, so higher diagnosis rates reflect true prevalence rather than over-diagnosis. This confounder offers a complete and benign alternative explanation for the correlation. Specialization patterns, shifting definitions, and multiple consultations are secondary and don't account for the pattern as directly."
},
{
  type: "paradox",
  prompt: "A restaurant chain replaced its paper menus with digital tablets, expecting order accuracy to improve. Order accuracy improved, but average customer wait time increased.\n\nWhich of the following, if true, best explains the increase in wait time?",
  choices: [
    "Customers browsed the digital menus considerably longer than the paper ones before ordering, delaying the start of food preparation.",
    "The tablets were more expensive than printing paper menus.",
    "Kitchen staff received the same training as before.",
    "The chain's food suppliers did not change."
  ],
  answer: 0,
  explanation: "Wait time includes the decision phase, not just cooking. Richer digital menus invite longer browsing, which pushes back the moment the kitchen begins work and lengthens total wait even with a faster, more accurate kitchen. Tablet cost, unchanged training, and stable suppliers have no effect on timing."
},
{
  type: "evaluate",
  prompt: "After losing several experienced staff members to competitors over the past year, a mid-sized firm's leadership team met to discuss ways to improve retention. Following a benchmarking exercise against similar companies in the industry, the company plans to reduce employee turnover by increasing salaries by 10% across all departments, effective at the start of next quarter. HR has not yet conducted exit interviews to understand the departures in more detail.\n\nWhich of the following would be most useful to determine in evaluating whether the plan will work?",
  choices: [
    "Whether departing employees have been leaving primarily because of compensation",
    "How long the company has been in business",
    "Whether the company's salaries are published internally",
    "How many employees the company currently has"
  ],
  answer: 0,
  explanation: "A salary increase only addresses turnover if pay is what drives departures. If people are leaving over management, workload, or advancement, a 10% raise buys goodwill but doesn't fix the cause. Exit reasons are therefore the decisive unknown; company age, pay transparency, and headcount are not."
},
{
  type: "weaken",
  prompt: "An education official argues that smaller class sizes improve student outcomes, citing that students in classes of fewer than 20 score higher on standardized tests than students in larger classes.\n\nWhich of the following, if true, most weakens the argument?",
  choices: [
    "Small classes are concentrated in well-funded schools that also employ more experienced teachers and offer extensive tutoring.",
    "Some teachers prefer teaching smaller classes.",
    "Standardized tests are administered once per year.",
    "Class sizes vary across school districts."
  ],
  answer: 0,
  explanation: "School funding bundles small classes with experienced teachers and tutoring, any of which could produce the score advantage. Because these factors travel together, the data cannot isolate class size as the cause. Teacher preference, testing frequency, and district variation don't offer competing explanations."
},
{
  type: "inference",
  prompt: "An analyst preparing a client-concentration report for the risk committee flagged the firm's reliance on a small number of large accounts as a potential vulnerability worth monitoring going forward. The note states that our two largest clients together account for 60% of revenue, and separately confirms that no other single client accounts for more than 5% of revenue individually. The analyst did not specify how the remaining revenue is distributed among the smaller accounts.\n\nWhich of the following must be true?",
  choices: [
    "At least eight clients besides the two largest are needed to account for the remaining 40% of revenue.",
    "The company has exactly ten clients.",
    "The second-largest client accounts for exactly 30% of revenue.",
    "Losing the largest client would reduce revenue by 30%."
  ],
  answer: 0,
  explanation: "With every remaining client capped at 5%, covering 40% requires at least 40 ÷ 5 = 8 clients. The other options assume an even split between the top two (they could be 55% and 5%) or invent a total client count the note never provides."
},
{
  type: "assumption",
  prompt: "A national retailer reviewed the performance of its loyalty program a year after launch, comparing transaction data between enrolled members and non-members across all store locations. The analysis, presented to the finance committee, found that loyalty members spend 40% more per visit than non-members on average. Based on this finding alone, the retailer concludes that its loyalty program is profitable, and is now considering expanding the rewards offered to members.\n\nWhich of the following is an assumption required by the conclusion?",
  choices: [
    "The additional spending exceeds the cost of the rewards and discounts the program provides.",
    "Loyalty members visit the store more often than non-members.",
    "The program is more generous than competitors' programs.",
    "Most customers are aware that the program exists."
  ],
  answer: 0,
  explanation: "Profitability compares incremental revenue against program cost, but the argument cites only the revenue side. If rewards cost more than the extra 40% brings in, the program loses money despite the impressive spending figure. Visit frequency, competitive generosity, and awareness are not required for this specific conclusion."
},
{
  type: "flaw",
  prompt: "Marketing director: 'Our campaign reached two million people, so it was a success.'\n\nThe director's reasoning is flawed primarily because it:",
  choices: [
    "treats a measure of exposure as if it were a measure of the campaign's objective",
    "fails to specify the campaign's total budget",
    "assumes that all two million people saw the entire advertisement",
    "does not compare the campaign to previous campaigns"
  ],
  answer: 0,
  explanation: "Reach is an input metric; success is defined by outcomes such as sales, sign-ups, or brand shift. Substituting the easily measured proxy for the actual objective is the core error. Budget and benchmarking would help evaluate the campaign, but the fundamental flaw is measuring the wrong thing entirely."
},
{
  type: "strengthen",
  prompt: "A logistics firm claims that its new route-optimization software reduced fuel consumption per delivery by 12%.\n\nWhich of the following, if true, most strengthens the claim?",
  choices: [
    "Fuel consumption per delivery was measured over the same routes, in the same season, with the same vehicles before and after the software was introduced.",
    "The software was purchased from a well-regarded vendor.",
    "Drivers found the software easy to use.",
    "Fuel prices declined during the measurement period."
  ],
  answer: 0,
  explanation: "Holding routes, season, and vehicles constant eliminates the main alternative explanations for a fuel-efficiency change, so the remaining difference is attributable to the software. Vendor reputation and ease of use are not evidence of results, and falling fuel prices affect cost rather than consumption."
},
{
  type: "weaken",
  prompt: "A wellness company advertises that 80% of participants in its six-week program lost weight, concluding that the program is effective.\n\nWhich of the following, if true, most weakens the conclusion?",
  choices: [
    "Roughly half of enrolled participants dropped out before the six weeks ended and were excluded from the 80% figure.",
    "The program includes both dietary and exercise components.",
    "Participants paid a fee to enroll in the program.",
    "Weight was measured using the company's own scales."
  ],
  answer: 0,
  explanation: "Excluding dropouts is survivorship bias. If half the participants left — plausibly those seeing no results — the 80% describes only the successful remainder. Measured against everyone who enrolled, the success rate could be as low as 40%. Program design and enrollment fees don't distort the statistic this way."
},
{
  type: "inference",
  prompt: "After a pilot program revealed inconsistent remote-work practices across departments, the company issued a formal policy to standardize eligibility company-wide. The policy states that employees may work remotely only if they have completed one year of service and their manager approves, with both conditions enforced through the HR system before remote access is granted. Managers were also asked to document their approval decisions for quarterly review, though the review itself does not affect eligibility.\n\nWhich of the following must be true of an employee who is working remotely?",
  choices: [
    "The employee has completed at least one year of service and has manager approval.",
    "The employee has worked at the company for more than two years.",
    "The employee's manager also works remotely.",
    "All employees with one year of service work remotely."
  ],
  answer: 0,
  explanation: "'Only if' introduces necessary conditions, and both must hold for anyone working remotely. Option 2 invents a stricter threshold than the policy states; option 3 adds an unstated condition; option 4 reverses necessity into sufficiency, since eligible employees need not actually work remotely."
},
{
  type: "paradox",
  prompt: "After a bank installed additional ATMs throughout a city, the average waiting time at each ATM increased rather than decreased.\n\nWhich of the following, if true, best explains this result?",
  choices: [
    "The added convenience attracted many customers who had previously used branch tellers or competing banks' ATMs, increasing total ATM demand faster than capacity grew.",
    "The new ATMs cost more to install than the bank had budgeted.",
    "The new ATMs offer the same services as the older machines.",
    "Bank branches maintained their existing operating hours."
  ],
  answer: 0,
  explanation: "This is induced demand applied to a service network: improved availability draws in users who previously chose other channels. When new arrivals outpace the added capacity, queues lengthen despite there being more machines. Installation costs, service parity, and branch hours don't change the demand-versus-capacity balance."
},
{
  type: "flaw",
  prompt: "Consultant: 'Our recommendation must be correct — no one on the client's team has raised any objection to it.'\n\nThe consultant's reasoning is most vulnerable to the criticism that it:",
  choices: [
    "treats the absence of stated disagreement as positive evidence of correctness",
    "generalizes from an unrepresentative sample of clients",
    "assumes the client team has relevant expertise",
    "confuses a cause with its effect"
  ],
  answer: 0,
  explanation: "This is an appeal to ignorance: silence is not endorsement. Team members may lack information, defer to the consultant, or hesitate to challenge an expert — none of which makes the recommendation sound. The argument mistakes an absence of evidence against for evidence in favor."
},
{
  type: "evaluate",
  prompt: "As part of its national climate strategy, a country's energy ministry is evaluating several policy options intended to lower transportation-related carbon emissions over the next decade. Among the proposals under review, the ministry is considering whether to subsidize electric vehicles in order to reduce carbon emissions, an approach several neighboring countries have already adopted with mixed results. A final decision is expected before the ministry's annual budget review.\n\nAnswering which of the following would be most useful in evaluating whether the subsidy will reduce emissions?",
  choices: [
    "What share of the country's electricity is generated from fossil fuels",
    "How many automobile dealerships operate in the country",
    "What the average age of the country's vehicle fleet is",
    "Whether neighboring countries offer similar subsidies"
  ],
  answer: 0,
  explanation: "Electric vehicles shift emissions from the tailpipe to the power plant. On a coal-heavy grid the net emissions benefit shrinks dramatically or disappears, so grid composition is decisive for whether the policy achieves its goal. Dealership counts, fleet age, and neighboring policy are peripheral to that calculation."
},
{
  type: "assumption",
  prompt: "A newspaper editor argues that publishing more investigative journalism will increase digital subscriptions, since the paper's most-read articles last year were investigative pieces.\n\nThe argument assumes which of the following?",
  choices: [
    "Readership of an article type corresponds to willingness to pay for a subscription.",
    "Investigative journalism is more expensive to produce than other coverage.",
    "The paper's competitors publish little investigative journalism.",
    "Digital subscribers read more articles than print subscribers."
  ],
  answer: 0,
  explanation: "The argument slides from reading to paying. Popular articles are often those shared freely and read by non-subscribers, so high readership need not convert into subscriptions. That bridge is exactly the unstated assumption. Production cost, competitor coverage, and reading volume are not required links."
},
{
  type: "inference",
  prompt: "The regional sales director prepared a data note summarizing the product's rollout performance for the executive team ahead of next year's expansion planning. The note states that in every region where the product was launched, sales exceeded forecasts, a result attributed partly to strong early demand. It also notes that in two regions the product was not launched at all, due to unrelated regulatory delays that are expected to be resolved next quarter.\n\nWhich of the following must be true?",
  choices: [
    "Sales exceeded forecasts in each region where the product was available.",
    "Total company sales exceeded forecasts.",
    "The two unlaunched regions had lower forecasts.",
    "The product will be launched in the remaining two regions."
  ],
  answer: 0,
  explanation: "This simply restates the given premise in equivalent terms, which is what a 'must be true' answer should do. The other options each add information: company-wide totals depend on the unlaunched regions, and nothing is said about those regions' forecasts or future launch plans."
},
{
  type: "weaken",
  prompt: "An executive argues that the company's new open-plan office increased collaboration, citing a 25% rise in the number of meetings held per week.\n\nWhich of the following, if true, most weakens the argument?",
  choices: [
    "Employees report scheduling more meetings because the open plan makes spontaneous private conversation impossible.",
    "The open-plan renovation was completed ahead of schedule.",
    "Some employees prefer the open-plan layout.",
    "The company also purchased new video-conferencing equipment."
  ],
  answer: 0,
  explanation: "If meetings rose because informal conversation became impossible, the metric captures a workaround for a problem the layout created rather than genuine collaboration gains. The evidence would then point the opposite direction. Renovation timing and employee preference don't reinterpret the metric; new equipment is a weaker competing cause."
},
{
  type: "strengthen",
  prompt: "A city claims that its new traffic-signal timing system reduced average intersection wait times.\n\nWhich of the following, if true, most strengthens the claim?",
  choices: [
    "Wait times measured at intersections that received the new timing fell 20%, while wait times at otherwise comparable intersections without it were unchanged.",
    "The system was installed on schedule and within budget.",
    "Drivers report that traffic feels smoother downtown.",
    "Traffic volume across the city declined slightly during the study period."
  ],
  answer: 0,
  explanation: "A controlled comparison between treated and untreated intersections isolates the timing system from citywide influences. Note that option 4 weakens the claim by supplying a competing cause, and driver perception is not a measurement. Delivery on schedule and budget says nothing about performance."
},

/* ---------- SYLLOGISMS ----------
   TestGorilla lists "analyzing syllogisms" first among the skills measured.
   Method: translate each premise into a set relationship, then test each conclusion
   against it. "Some" means at least one. Beware reversing a conditional. */
{
  type: "syllogism",
  prompt: "Some students have a job. Everyone who has a job has money.\n\nWhich conclusion necessarily follows?",
  choices: [
    "Some students have money",
    "All students have money",
    "Everyone who has money has a job",
    "Some students do not have money"
  ],
  answer: 0,
  explanation: "At least one student has a job, and every job-holder has money, so that student has money — hence 'some students have money'. 'All students' overreaches because the first premise only covers some. Option 3 reverses the conditional, and option 4 asserts something the premises never establish."
},
{
  type: "syllogism",
  prompt: "All managers attend the weekly meeting. No one who attends the weekly meeting works on Fridays.\n\nWhich conclusion necessarily follows?",
  choices: [
    "No manager works on Fridays",
    "Everyone who works on Fridays is a manager",
    "Some managers work on Fridays",
    "Everyone who attends the weekly meeting is a manager"
  ],
  answer: 0,
  explanation: "Chain the two premises: manager → attends meeting → does not work Fridays. The links connect cleanly, so no manager works on Fridays. Option 4 reverses the first premise — non-managers could attend the meeting too — and options 2 and 3 contradict the chain."
},
{
  type: "syllogism",
  prompt: "All roses are flowers. Some flowers fade quickly.\n\nWhich conclusion necessarily follows?",
  choices: [
    "Some roses fade quickly",
    "No roses fade quickly",
    "It cannot be determined whether any roses fade quickly",
    "All flowers that fade quickly are roses"
  ],
  answer: 2,
  explanation: "Roses are a subset of flowers, but the flowers that fade quickly might be entirely outside that subset — tulips, say. The premises are compatible both with roses fading and with none fading, so neither can be concluded. This 'some' overlap trap is the single most common error in syllogism questions."
},
{
  type: "syllogism",
  prompt: "No consultants are accountants. All accountants are licensed.\n\nWhich conclusion necessarily follows?",
  choices: [
    "Some licensed people are not consultants",
    "No consultants are licensed",
    "All licensed people are accountants",
    "Some consultants are licensed"
  ],
  answer: 0,
  explanation: "Take any accountant: they are licensed (second premise) and not a consultant (first premise). So at least one licensed person is not a consultant. Option 2 is the trap — consultants may well be licensed by some other route, since the premises only rule out their being accountants."
},
{
  type: "syllogism",
  prompt: "No senior partner works part-time. Some consultants work part-time.\n\nWhich conclusion necessarily follows?",
  choices: [
    "Some consultants are not senior partners",
    "No consultants are senior partners",
    "All senior partners are consultants",
    "Some senior partners are consultants"
  ],
  answer: 0,
  explanation: "The consultants who work part-time cannot be senior partners, since no senior partner works part-time. That gives 'some consultants are not senior partners'. 'No consultants are senior partners' overreaches: full-time consultants are left entirely unconstrained by these premises."
},
{
  type: "syllogism",
  prompt: "All members of the audit team are certified. Rodríguez is certified.\n\nWhich conclusion necessarily follows?",
  choices: [
    "Rodríguez is a member of the audit team",
    "Rodríguez is not a member of the audit team",
    "Nothing can be concluded about Rodríguez's team membership",
    "Everyone who is certified is on the audit team"
  ],
  answer: 2,
  explanation: "The premise runs audit team → certified. Knowing Rodríguez is certified affirms the consequent, which licenses no conclusion: certification is necessary for membership but was never said to be sufficient. Plenty of certified people may work elsewhere in the firm."
},
{
  type: "syllogism",
  prompt: "All engineers at the firm speak English. Some people who speak English also speak German.\n\nWhich conclusion necessarily follows?",
  choices: [
    "Some engineers speak German",
    "No engineers speak German",
    "It cannot be determined whether any engineer speaks German",
    "All German speakers are engineers"
  ],
  answer: 2,
  explanation: "Engineers form a subset of English speakers, and the German-speaking subset of English speakers may or may not overlap with them. The premises leave the question completely open — structurally identical to the roses-and-flowers case, and the same trap."
},
{
  type: "syllogism",
  prompt: "Every proposal that passes legal review is sent to the client. Some proposals are never sent to the client.\n\nWhich conclusion necessarily follows?",
  choices: [
    "Some proposals do not pass legal review",
    "All proposals that are sent to the client passed legal review",
    "No proposals pass legal review",
    "Some proposals that pass legal review are not sent to the client"
  ],
  answer: 0,
  explanation: "The rule is passes review → sent to client. Its contrapositive is not sent → did not pass review. Since some proposals are never sent, those proposals did not pass legal review. Option 4 directly contradicts the first premise, and option 2 reverses it."
},

/* ---------- ARRANGEMENTS & SEQUENCES ----------
   TestGorilla lists "arrangements" as a distinct question type and says the test asks you to
   "interpret sequences and arrangements". Method: write the fixed positions first, then
   apply the relative constraints, then eliminate. */
{
  type: "arrangement",
  prompt: "Five colleagues finished a race.\n\n• Ana finished before Beto.\n• Carlos finished after Beto.\n• Diana finished before Ana.\n• Elena finished last.\n\nWho finished second?",
  choices: ["Diana", "Ana", "Beto", "Carlos"],
  answer: 1,
  explanation: "Elena is fixed last. Chaining the rest: Diana before Ana, Ana before Beto, Carlos after Beto gives Diana → Ana → Beto → Carlos. So the order is Diana, Ana, Beto, Carlos, Elena, and second place is Ana. Build the chain from the relative constraints, then slot in whatever is fixed."
},
{
  type: "arrangement",
  prompt: "Four buildings stand in a row.\n\n• Q is immediately to the right of P.\n• R is at the far left.\n• S is not next to Q.\n\nWhich building is second from the left?",
  choices: ["P", "Q", "R", "S"],
  answer: 3,
  explanation: "R takes position 1, leaving 2, 3 and 4 for P, Q and S with Q immediately right of P. If P is at 2 and Q at 3, then S lands at 4 — adjacent to Q, which is forbidden. So P is at 3, Q at 4 and S at 2, giving R, S, P, Q. Testing the small number of possible placements is faster than reasoning abstractly."
},
{
  type: "arrangement",
  prompt: "Five products are ranked by sales.\n\n• Alpha sold more than Beta.\n• Gamma sold less than Beta.\n• Delta sold more than Alpha.\n• Epsilon sold less than Gamma.\n\nWhich product had the third-highest sales?",
  choices: ["Alpha", "Beta", "Gamma", "Delta"],
  answer: 1,
  explanation: "Chain the comparisons into one order: Delta > Alpha > Beta > Gamma > Epsilon. Counting down from the top, the third is Beta. When every constraint links two adjacent items, the whole ranking resolves to a single sequence."
},
{
  type: "arrangement",
  prompt: "Four candidates are interviewed on four consecutive days, Monday to Thursday, one per day.\n\n• Rojas is not interviewed on Monday.\n• Silva is interviewed the day after Rojas.\n• Torres is interviewed on Thursday.\n\nWho is interviewed on Monday?",
  choices: ["Rojas", "Silva", "Torres", "Uribe"],
  answer: 3,
  explanation: "Torres is fixed on Thursday, so Rojas and Silva must occupy consecutive days among Monday to Wednesday. Rojas cannot be Monday, and Rojas on Wednesday would put Silva on Thursday where Torres already sits. So Rojas is Tuesday, Silva Wednesday, leaving Monday for Uribe."
},
{
  type: "arrangement",
  prompt: "An office building has six floors.\n\n• Operations is on floor 1.\n• Finance is on floor 2.\n• HR is directly above Finance.\n• Legal is on the top floor.\n• Marketing is directly below Legal.\n\nIT occupies the one remaining floor. Which floor is it on?",
  choices: ["Floor 3", "Floor 4", "Floor 5", "Floor 6"],
  answer: 1,
  explanation: "Place the fixed departments: Operations 1, Finance 2, HR 3 (directly above Finance), Legal 6 (top), Marketing 5 (directly below Legal). Floor 4 is the only one unassigned, so IT is there. Filling every stated constraint and reading off the gap is the standard technique."
},
{
  type: "arrangement",
  prompt: "Five boxes have different weights.\n\n• Box A is heavier than Box B.\n• Box C is lighter than Box B.\n• Box D is heavier than Box A but lighter than Box E.\n\nWhich box is the second lightest?",
  choices: ["Box A", "Box B", "Box C", "Box D"],
  answer: 1,
  explanation: "The constraints chain into E > D > A > B > C. Reading from the lightest end: C is lightest, B second lightest. Converting every comparison into a single left-to-right ordering makes questions about any position immediate."
},
{
  type: "arrangement",
  prompt: "What comes next in the sequence?\n\nA,  C,  F,  J,  O,  ?",
  choices: ["Q", "S", "T", "U"],
  answer: 3,
  explanation: "Convert letters to positions: A=1, C=3, F=6, J=10, O=15. The gaps are 2, 3, 4, 5, so the next gap is 6, giving position 21 — the letter U. Letter sequences are just number sequences in disguise; always convert to positions first."
},
{
  type: "arrangement",
  prompt: "What comes next in the sequence?\n\nZ,  X,  V,  T,  ?",
  choices: ["S", "R", "Q", "P"],
  answer: 1,
  explanation: "Working backwards through the alphabet: Z=26, X=24, V=22, T=20, each step down by 2. The next is position 18, which is R. Note the sequence moves backwards, so counting forwards from T gives the wrong direction entirely."
},
{
  type: "arrangement",
  prompt: "A project has these constraints:\n\n• Task B cannot start until Task A is finished.\n• Task C cannot start until Task B is finished.\n• Task D has no dependencies.\n\nWhich of the following is NOT a valid order of completion?",
  choices: ["A, B, C, D", "D, A, B, C", "A, B, D, C", "B, A, D, C"],
  answer: 3,
  explanation: "The dependency chain requires A before B before C, while D may go anywhere. The first three options all respect A → B → C. The fourth places B before A, violating the first constraint. With 'NOT valid' questions, check each option against every rule rather than looking for the answer that feels wrong."
},
{
  type: "arrangement",
  prompt: "Three meetings are scheduled in one week.\n\n• The audit is on Wednesday.\n• The client meeting is two days before the audit.\n• The report review is the day after the audit.\n\nOn which day is the client meeting?",
  choices: ["Monday", "Tuesday", "Thursday", "Friday"],
  answer: 0,
  explanation: "The audit anchors the week on Wednesday. Two days before Wednesday is Monday, which is the client meeting; the day after is Thursday, the report review. Anchoring on the one fixed date and counting outwards prevents off-by-one slips."
},

/* ---------- WEIGHING ARGUMENTS (strong vs weak) ----------
   Watson-Glaser style, which TestGorilla describes as "evaluate arguments to find a weak
   argument". An argument is STRONG only if it is both directly relevant to the question
   AND substantive. Appeals to tradition, popularity, personal preference, or trivial
   consequences are weak however true they may be. */
{
  type: "argument-strength",
  prompt: "Question: Should a city introduce a congestion charge for driving downtown?\n\nWhich is the STRONGEST argument against?",
  choices: [
    "Drivers dislike paying additional charges",
    "Evidence from comparable cities shows the charge falls hardest on low-income workers who cannot shift their hours or switch to public transport",
    "The scheme would require new signage throughout the downtown area",
    "Congestion charging was first introduced in Singapore"
  ],
  answer: 1,
  explanation: "A strong argument must be both relevant and weighty. The distributional evidence identifies a serious, documented harm caused by the policy itself. Disliking charges is mere preference, signage is a trivial implementation cost, and the origin of the idea is a historical fact with no bearing on whether this city should adopt it."
},
{
  type: "argument-strength",
  prompt: "Question: Should the company require all employees to return to the office five days a week?\n\nWhich is the STRONGEST argument against?",
  choices: [
    "Some employees have spent money decorating their home offices",
    "Commuting is unpleasant in bad weather",
    "The company's own data show output per employee rose 8% when remote work began and has not since declined",
    "Several other companies have chosen to remain remote"
  ],
  answer: 2,
  explanation: "Internal productivity data speaks directly to the business consequence of the decision and is substantial enough to change the answer. Sunk spending on home offices and unpleasant commutes are minor personal costs, and what other companies do is not evidence about this company's situation."
},
{
  type: "argument-strength",
  prompt: "Question: Should a hospital adopt a new surgical technique?\n\nWhich is the STRONGEST argument in favour?",
  choices: [
    "The technique was developed at a prestigious university",
    "Several surgeons on staff are curious to try it",
    "The equipment supplier is offering a discount this year",
    "In randomized trials the technique reduced serious complications by a third with no increase in operating time"
  ],
  answer: 3,
  explanation: "Randomized trial evidence of fewer complications goes to the heart of what a surgical technique is for, and the effect is large. The other options are an appeal to authority, an expression of curiosity, and a commercial incentive — none of which is evidence that the technique is better for patients."
},
{
  type: "argument-strength",
  prompt: "Question: Should a school prohibit mobile phones during lessons?\n\nWhich is the STRONGEST argument in favour?",
  choices: [
    "Teachers find phones annoying",
    "Trials in comparable schools found that removing phones raised test scores, with the largest gains among the lowest-achieving students",
    "Mobile phones did not exist when the school was founded",
    "Phones are expensive and might be stolen at school"
  ],
  answer: 1,
  explanation: "Measured effects on learning, in comparable schools, address exactly what the policy is meant to achieve — and the distributional detail makes it weightier still. Teacher annoyance is preference, the founding date is an appeal to tradition, and theft risk is a real but tangential concern."
},
{
  type: "argument-strength",
  prompt: "Question: Should the firm open an office in a country where it currently has no presence?\n\nWhich is the STRONGEST argument against?",
  choices: [
    "Some staff would prefer not to relocate",
    "The new office would need to be added to the company's calendar system",
    "The firm has no partner with local client relationships, and comparable expansions without local presence have consistently failed",
    "The country is a long flight from headquarters"
  ],
  answer: 2,
  explanation: "This names a concrete capability gap and supports it with a track record of similar attempts failing — directly relevant and decisive. Staff preferences, calendar configuration and flight duration are either minor or easily managed, and none would change a well-founded expansion decision."
},
{
  type: "argument-strength",
  prompt: "Question: Should university tuition be free for all students?\n\nArgument: 'No — students would end up with more free time than they currently have.'\n\nHow should this argument be judged?",
  choices: [
    "Strong, because how students use their time is an important policy consideration",
    "Weak, because the claimed consequence is trivial and does not bear on whether education should be publicly funded",
    "Strong, because it identifies a genuine consequence of the policy",
    "Weak, because the claim is factually false"
  ],
  answer: 1,
  explanation: "Judging an argument weak does not require showing it is false. Even granting that students would gain free time, that consequence is trivial next to the question of how education should be funded, and it does not engage with the costs, benefits or fairness at stake. Weakness here is about relevance and weight, not truth."
},
{
  type: "argument-strength",
  prompt: "Question: Should a company invest $2 million in automating its warehouse?\n\nArgument: 'Yes — automation would cut annual operating costs by an estimated $700,000, repaying the investment in under three years.'\n\nHow should this argument be judged?",
  choices: [
    "Weak, because estimates are not certainties",
    "Weak, because it ignores the effect on warehouse staff",
    "Strong, because it quantifies a directly relevant benefit on a scale that would determine the decision",
    "Strong, because reducing costs is always desirable"
  ],
  answer: 2,
  explanation: "The argument is relevant to the investment question and substantial: a sub-three-year payback is exactly the kind of figure that settles such decisions. That an argument is an estimate does not make it weak, and that it omits other considerations does not either — strength is judged on what the argument itself contributes."
},
{
  type: "argument-strength",
  prompt: "Question: Should the firm replace annual performance reviews with continuous feedback?\n\nWhich is the WEAKEST argument in favour?",
  choices: [
    "Feedback delivered close to the event has been shown to change behaviour substantially more than feedback delayed by months",
    "Continuous feedback is currently a popular approach among large employers",
    "Annual reviews concentrate a year of judgement into a single conversation, which research links to recency bias",
    "Managers report that they cannot recall specific incidents from early in the review year"
  ],
  answer: 1,
  explanation: "Popularity among other employers is a bandwagon appeal: it gives no reason to think the approach works, only that others have adopted it. The other three all point to a specific mechanism — timing effects, recency bias, memory limits — by which continuous feedback would outperform the annual cycle."
}

];

/* ---------- Difficulty defaults ----------
   1 = easy · 2 = medium · 3 = hard (long stimulus, multi-constraint, or subtle distractors). */
(function(){
  const byType = {
    syllogism:2, arrangement:2, inference:2, 'argument-strength':2,
    weaken:2, strengthen:2, assumption:3, flaw:2, paradox:3, evaluate:2
  };
  const hard = [
    'strategy team speak Portuguese', 'two largest clients together',
    'Every project that finished under budget', 'four buildings stand in a row',
    'four consecutive days', 'roses are flowers', 'engineers at the firm speak English',
    'profit margin rose from 4% to 6%', 'grew 10% in Year 1'
  ];
  const easy = [
    'If today is Tuesday', 'If the project is delayed', 'audit is on Wednesday',
    'five colleagues finished a race', 'Operations is on floor 1', 'Z,  X,  V,  T'
  ];
  const bank = window.QUESTION_BANK.ct;
  bank.forEach(q => { if(!q.d) q.d = byType[q.type] || 2; });
  easy.forEach(f => { const q = bank.find(x => x.prompt.toLowerCase().indexOf(f.toLowerCase()) !== -1); if(q) q.d = 1; });
  hard.forEach(f => { const q = bank.find(x => x.prompt.toLowerCase().indexOf(f.toLowerCase()) !== -1); if(q) q.d = 3; });
})();
