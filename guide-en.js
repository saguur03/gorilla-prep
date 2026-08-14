/* THE PLAYBOOK (English)
   A technique framework for every question type in the bank.
   Each topic's `type` matches the `type` tag used on questions, so the app can jump
   from any question straight to the technique that solves it. */
window.GUIDE = window.GUIDE || {};
window.GUIDE.en = {
title: 'The Playbook',
subtitle: 'A technique for every question type on the test',
intro: [
  'This is not a summary of the questions — it is the set of moves that solves them. Read a section before you practise it, then come back to it whenever you get one wrong.',
  'The test is TestGorilla, assembled from a published test library, so the question formats are known and each one has a repeatable method. Nothing here requires memorising content; all of it is about recognising a shape and applying the right move.'
],

sections: [

/* ============================ CORE ============================ */
{
  id:'core', icon:'🧭', title:'Before anything else',
  blurb:'The rules of the game, and the habits that apply to every section.',
  topics: [
    {
      title:'How the test actually works',
      recognise:'Facts confirmed from Bain and TestGorilla sources.',
      steps:[
        'Four timed sections, roughly 45 minutes in total, all multiple choice with four options.',
        'You CANNOT return to a previous question once answered. Decide and commit.',
        'A calculator and pen/paper ARE allowed. Use paper for structure, the calculator for arithmetic.',
        'Your webcam is on and browser extensions must be disabled.',
        'Reported guidance is that accuracy is weighted more heavily than speed.',
        'There is no penalty for a wrong answer, so never leave a question blank.'
      ],
      traps:[
        'Treating the target times as deadlines. They are pacing guides — a right answer at 60s beats a wrong one at 30s.',
        'Burning three minutes on one hard question and losing four easy ones you never reached.'
      ]
    },
    {
      title:'The four habits that raise every score',
      recognise:'Apply these on every single question, in every section.',
      steps:[
        'READ THE QUESTION FIRST. Before the passage, before the table. You cannot spot what matters until you know what is being asked.',
        'ELIMINATE, do not select. Cross out what is definitely wrong. Two eliminations turn a guess from 25% to 50%.',
        'ANSWER FROM WHAT IS GIVEN. Never from what you know about the world, and never from what seems reasonable.',
        'CHECK THE MAGNITUDE. Before locking an answer, ask whether the size is plausible. Most arithmetic slips are off by a factor of 10 or invert a fraction.'
      ],
      traps:[
        'Extreme words in an answer option — always, never, all, only, must — are usually wrong on inference and reading questions, because the source text rarely supports them.',
        'An option that is true in the real world but not supported by the text is still wrong.'
      ]
    },
    {
      title:'Pacing and when to guess',
      recognise:'How to spend the clock.',
      steps:[
        'Each question carries a target time in this app, adjusted for difficulty. Glance at it before you start.',
        'If you pass 1.5× the target and have no route to the answer, eliminate what you can, pick, and move on.',
        'On the first pass of a section, answer everything you can do confidently. Difficulty is not ordered — easy questions sit at the end too.',
        'Spend saved seconds on re-reading the question stem, not on double-checking arithmetic the calculator already did.'
      ],
      traps:['Sunk cost. Time already spent on a question is gone; it is not a reason to spend more.']
    }
  ]
},

/* ============================ CRITICAL THINKING ============================ */
{
  id:'ct', icon:'🧠', title:'Critical Thinking',
  blurb:'16 questions in 12 minutes. TestGorilla rates this section Advanced. It mixes formal logic, ordering puzzles and argument analysis.',
  topics: [
    {
      type:'syllogism', title:'Syllogisms & logical conclusions',
      recognise:'Premises using All / Some / No / Only, followed by "which conclusion necessarily follows?"',
      steps:[
        'Translate each premise into a set relation: "All A are B" = A→B. "No A are B" = A and B never overlap. "Some A are B" = at least one overlap.',
        'Chain the conditionals: A→B and B→C gives A→C.',
        'Use the contrapositive freely: A→B is exactly equivalent to not-B→not-A.',
        'Test each option by trying to break it: can you imagine a world where all premises hold but the option is false? If yes, it does not follow.'
      ],
      key:[
        'Two "some" premises alone yield NO valid conclusion.',
        'If a premise says "some", the conclusion can only say "some".',
        'If a premise is negative, any valid conclusion is negative.',
        'Never reverse a conditional. "All A are B" does NOT give "All B are A".',
        'Assume the categories mentioned are non-empty — standard on these tests.'
      ],
      traps:[
        'Reversal (affirming the consequent): "All audit team members are certified; Rodríguez is certified" gives you nothing.',
        'Turning "some" into "all".',
        'Assuming two "some" groups overlap when the premises allow them not to.'
      ],
      example:{
        q:'All roses are flowers. Some flowers fade quickly.',
        a:'It cannot be determined whether any roses fade quickly.',
        why:'Roses sit inside flowers, but the fast-fading flowers may lie entirely outside the rose subset. Both "some roses fade" and "no roses fade" are consistent with the premises, so neither follows.'
      }
    },
    {
      type:'inference', title:'Inferences & must-be-true',
      recognise:'"Which must be true?", "which can be properly inferred?", "which is best supported?"',
      steps:[
        'The answer must be provable from the text alone. No outside knowledge, no reasonable-sounding additions.',
        'Prefer the weakest, safest statement. "Some" is safer than "all"; "at least" is safer than "exactly".',
        'Walk each option and ask: what extra fact would I need to assume? If you need one, reject it.',
        'Do not distrust an option for being obvious. A near-restatement of a premise is airtight and often correct.'
      ],
      traps:[
        'Extreme language in the option.',
        'Reading a causal claim out of a text that only reports a correlation.',
        'Confusing "reported", "believed" or "expects" with "is true".',
        'Ratios: a raw count rising while the rate falls, or vice versa.'
      ],
      example:{
        q:'Among employees who received the training, 85% reported higher confidence.',
        a:'Most trained employees believed their confidence had increased.',
        why:'85% exceeds half, so "most" follows and claims nothing more. Saying the training improved actual skill confuses self-report with measurement; there was also no untrained comparison group.'
      }
    },
    {
      type:'arrangement', title:'Arrangements & sequences',
      recognise:'Bullet-point constraints about order, position, days, floors or rankings — or a letter sequence.',
      steps:[
        'Draw the slots on paper: 1 2 3 4 5, or Mon–Thu, or floors 1–6.',
        'Place the ABSOLUTE constraints first ("Torres is on Thursday", "R is at the far left"). These anchor everything.',
        'Convert relative constraints into a single chain: A before B, B before C gives A < B < C.',
        'Apply negative constraints ("not on Monday") as eliminations.',
        'Only a handful of placements remain — test them. A contradiction means backtrack, not guess.',
        'For letter sequences, convert to positions (A=1 … Z=26) and treat it as a number series.'
      ],
      traps:[
        'Forgetting a negative constraint entirely.',
        'Assuming two items are adjacent when the clue only fixes their order.',
        'Reading a backwards alphabet sequence forwards.'
      ],
      example:{
        q:'Four candidates, Monday–Thursday. Rojas not Monday. Silva the day after Rojas. Torres on Thursday.',
        a:'Uribe is interviewed on Monday.',
        why:'Torres anchors Thursday. Rojas cannot be Monday, and Rojas on Wednesday would force Silva onto Thursday where Torres already sits. So Rojas is Tuesday, Silva Wednesday, and Monday is left for Uribe.'
      }
    },
    {
      type:'weaken', title:'Weakening a causal claim',
      recognise:'"Which most weakens / undermines?" The conclusion says X caused Y, usually from a correlation.',
      steps:[
        'State the conclusion and the evidence in one line each.',
        'Notice that the argument almost always leaps from "X and Y happened together" to "X caused Y".',
        'Attack that leap with one of six standard moves: an ALTERNATIVE CAUSE, REVERSE causation, a CONFOUNDER affecting both, a SELECTION effect, an UNREPRESENTATIVE sample, or a MISSING BASE RATE.',
        'The right answer only has to make the conclusion less likely — it need not disprove anything.'
      ],
      traps:[
        'Picking a cost, feasibility or popularity objection when the claim is about causation.',
        'Picking something that attacks a premise you were told to accept as true.',
        'Confusing a fact about profit with a fact about revenue.'
      ],
      example:{
        q:'Brighter streetlights went up on Main Street; crime fell 30%. Officials credit the lighting.',
        a:'Police doubled patrols on Main Street over the same six months.',
        why:'A simultaneous alternative cause, itself a well-known driver of crime, competes directly with the lighting explanation and could account for the whole drop.'
      }
    },
    {
      type:'strengthen', title:'Strengthening a claim',
      recognise:'"Which most strengthens / supports?"',
      steps:[
        'Find the gap the argument jumps over — usually the same causal leap as in weaken questions.',
        'The strongest support closes that gap by ruling out the leading alternative explanation.',
        'A CONTROLLED COMPARISON is the gold standard: a randomized group, or a matched group that did not receive the treatment and did not improve.',
        'Check the direction. Some options quietly weaken by introducing a competing cause.'
      ],
      traps:[
        'Reputation, prestige, popularity, vendor quality, cost and staff enthusiasm are never evidence that something worked.',
        'A general background trend usually WEAKENS a specific causal claim rather than supporting it.'
      ],
      example:{
        q:'A city claims its recycling education programme raised recycling from 30% to 45%.',
        a:'Rates rose sharply in districts that got the programme and stayed near 30% in similar districts that did not.',
        why:'The untreated districts act as a control group, ruling out citywide trends and demographics as explanations.'
      }
    },
    {
      type:'assumption', title:'Necessary assumptions',
      recognise:'"The argument depends on which assumption?", "the conclusion assumes..."',
      steps:[
        'Write the argument as premise → conclusion and find the unstated bridge between them.',
        'Apply the NEGATION TEST: negate the option and re-read the argument. If it collapses, that option is the assumption. If it survives, it is not.',
        'Prefer the modest option. A necessary assumption is the minimum the argument needs, not the strongest supporting statement available.'
      ],
      traps:[
        'Confusing a strengthener (helps the argument) with an assumption (the argument dies without it). Use negation to separate them.',
        'Picking a fact that is merely relevant background.'
      ],
      example:{
        q:'New software cuts model-building time 40%, so the firm can take 40% more engagements.',
        a:'Model-building time is what currently limits how many engagements the firm can accept.',
        why:'Negate it: if model-building is NOT the constraint, faster modelling buys no extra engagements and the conclusion fails outright. That collapse is the signature of a necessary assumption.'
      }
    },
    {
      type:'flaw', title:'Naming the flaw',
      recognise:'"The reasoning is flawed because...", "most vulnerable to the criticism that..."',
      steps:[
        'Name the fallacy before looking at the options — then find the option that says it.',
        'Run the catalogue below; one of them fits almost every question of this type.'
      ],
      key:[
        'Correlation treated as causation.',
        'Attacking the source, not the argument (ad hominem / genetic).',
        'Straw man: refuting an exaggerated version of the position.',
        'False dilemma: only two options presented when others exist.',
        'Appeal to authority, popularity, tradition, or ignorance (silence taken as agreement).',
        'Selection and survivorship bias; self-selected survey respondents.',
        'Part–whole: what is true of a member need not be true of the group.',
        'Percentage vs percentage POINT confusion.',
        'No benchmark: judging performance without a comparison.',
        'An average taken as the typical case when the distribution is skewed.',
        'Measuring a proxy (reach, meetings held) instead of the actual objective.'
      ],
      traps:['An option can state a genuine weakness that is not the LOGICAL error being asked about.'],
      example:{
        q:'"Our best salespeople all arrive before 8 a.m., so requiring everyone to arrive before 8 will raise sales."',
        a:'It assumes a characteristic shared by successful people is what causes their success.',
        why:'Early arrival is plausibly a symptom of underlying drive, not its cause. Mandating the symptom does not transplant the trait.'
      }
    },
    {
      type:'paradox', title:'Resolving a paradox',
      recognise:'Two facts that seem to contradict each other. "Which best explains / resolves the discrepancy?"',
      steps:[
        'Write both facts down precisely, with the numbers if given.',
        'Do the arithmetic where you can — it often shows exactly how big the gap to be explained is.',
        'Look for a hidden second channel: other revenue lines, other costs, a mix shift, or a change in the denominator.',
        'Test each option against BOTH facts. If it explains only one, it is wrong.'
      ],
      traps:[
        'Options that move profit when the puzzle is about revenue, or vice versa. Rising fuel costs never explain falling revenue.',
        'Options that restate the paradox instead of resolving it.'
      ],
      example:{
        q:'Fares cut 15%, tickets sold up 30%, yet total route revenue FELL.',
        a:'The airline also scrapped baggage and seat-selection fees, which had produced substantial revenue.',
        why:'0.85 × 1.30 ≈ 1.10, so ticket revenue should have risen about 10%. The fall must come from revenue outside base fares — which the scrapped ancillary fees supply exactly.'
      }
    },
    {
      type:'evaluate', title:'Evaluating a plan',
      recognise:'"Answering which question would be most useful in evaluating...?"',
      steps:[
        'Identify the plan\'s mechanism — the chain by which it is supposed to produce the result.',
        'Find the weakest link in that chain.',
        'The right question is the one whose two possible answers push the conclusion in OPPOSITE directions.',
        'Test it: "If the answer is yes, does the plan work? If no, does it fail?" Both must be true.'
      ],
      traps:['Descriptive facts — company age, headcount, who supplies the equipment — never decide whether a plan works.'],
      example:{
        q:'Move the service centre to City B, where wages are 30% lower.',
        a:'Is output per employee in City B comparable to City A?',
        why:'If productivity is lower, more staff are needed and the wage saving shrinks or vanishes. Yes and no lead to opposite conclusions, which is what makes it the decisive question.'
      }
    },
    {
      type:'argument-strength', title:'Strong vs weak arguments',
      recognise:'"Which is the strongest / weakest argument for or against X?" This is the Watson-Glaser format.',
      steps:[
        'An argument is STRONG only if BOTH tests pass: (a) it is directly relevant to the exact question asked, and (b) it is substantive enough to change the decision.',
        'Fail either test and it is weak, however true the statement may be.',
        'Ask: "if I accepted this, would it actually move me?" If the connection needs several unstated steps, it is weak.'
      ],
      key:[
        'Automatically WEAK: personal preference, tradition ("we have always..."), popularity ("others are doing it"), prestige of the source, trivial consequences, emotional appeal, irrelevant facts.',
        'Typically STRONG: measured evidence, a quantified effect of decision-changing size, a documented track record, a direct consequence for the objective at stake.'
      ],
      traps:[
        'Judging by whether you agree with the conclusion.',
        'Calling an argument weak because it is an estimate, or because it does not address every other factor. Strength is judged on what the argument itself contributes.'
      ],
      example:{
        q:'Should university tuition be free? "No — students would have more free time than they do now."',
        a:'Weak: the consequence is trivial and does not bear on how education should be funded.',
        why:'Even granting it is true, it does not engage with cost, fairness or access. Weakness here is about relevance and weight, not truth.'
      }
    }
  ]
},

/* ============================ NUMERICAL ============================ */
{
  id:'num', icon:'🔢', title:'Numerical Reasoning',
  blurb:'12 questions in 10 minutes, rated Intermediate. A calculator is allowed, so the skill being tested is setting the problem up — fast and correctly.',
  topics: [
    {
      type:'percent', title:'The percentage toolkit',
      recognise:'Anything with %, discounts, increases, or "what percentage of".',
      steps:[
        'Percentage change = (new − old) ÷ OLD. The denominator is always the starting value.',
        'To reverse a percentage, DIVIDE. After a 20% discount the price is 0.8 × original, so original = price ÷ 0.8.',
        'Successive percentages MULTIPLY: +20% then −20% is 1.2 × 0.8 = 0.96, a 4% loss.',
        'Reversing a +x% needs a smaller −%: up 25% (×1.25) needs down 20% (×0.8).'
      ],
      key:[
        '10% = shift the decimal one place. 5% = half of that. 15% = 10% + 5%. 20% = double 10%. 25% = ÷4. 33⅓% = ÷3.',
        '"A is 40% more than B" is NOT "B is 40% less than A" (it is 28.6% less).',
        'Percentage POINTS ≠ percent. 2% to 3% is +1 point but a +50% increase.',
        'If x is 1/n of y, then y is n × 100% of x.'
      ],
      traps:['Dividing by the new value instead of the old — the single most common error in the whole section.']
    },
    {
      type:'margin', title:'Margin, markup and break-even',
      recognise:'Price, cost, margin, contribution, fixed costs, break-even.',
      steps:[
        'Decide first whether the question wants MARGIN or MARKUP. They have different denominators.',
        'Margin = (price − cost) ÷ PRICE. Markup = (price − cost) ÷ COST.',
        'To price for a target margin m: price = cost ÷ (1 − m). Adding m% to cost gives the wrong answer.',
        'Contribution per unit = price − variable cost. This, not price, drives break-even.'
      ],
      key:[
        'Break-even units = fixed costs ÷ contribution per unit.',
        'Break-even revenue = fixed costs ÷ contribution margin %.',
        'Profit = contribution × units − fixed costs.',
        'Blended margin = weighted by each product\'s revenue share, never the simple average.'
      ],
      traps:['Dividing fixed costs by price rather than by contribution.']
    },
    {
      type:'rates', title:'Rates, work and speed',
      recognise:'Machines, workers, pipes, days, km/h, billable hours.',
      steps:[
        'Reduce everything to a UNIT RATE first: units per machine per hour, or worker-hours per room.',
        'For work problems, total work = people × time, and that product is constant. More people, proportionally fewer days.',
        'When two things work together, ADD THE RATES, never the times: 1/6 + 1/12 = 1/4, so 4 hours.',
        'Average speed = total distance ÷ total time. Never average the two speeds.'
      ],
      traps:['Averaging times or speeds. Combined work is always faster than either worker alone — if your answer is slower, you added times.']
    },
    {
      type:'average', title:'Averages and weighted averages',
      recognise:'"Average", "mean", adding or removing a member, combining two groups.',
      steps:[
        'Convert every average into a SUM before you add or remove anything: sum = average × count.',
        'A joining member\'s value = new total − old total.',
        'For groups of different sizes, weight each value by its count: (n₁v₁ + n₂v₂) ÷ (n₁ + n₂).'
      ],
      key:['Shortcut for a new member: it supplies the new average, plus the change in average for every existing member.'],
      traps:['Averaging two averages when the groups differ in size — right only if the groups are equal.']
    },
    {
      type:'ratio', title:'Ratios and proportions',
      recognise:'"In the ratio 3:4:5", "for every 2 managers there are 7 analysts".',
      steps:[
        'Find the value of ONE part: total ÷ sum of the ratio terms.',
        'Multiply that unit by whichever term the question asks for.',
        'For a chain of percentages of percentages, multiply along the chain: 60% then 25% of that = 15% of the whole.'
      ],
      traps:['Dividing the total by one term instead of by the sum of all terms.']
    },
    {
      type:'growth', title:'Growth, interest and depreciation',
      recognise:'Per year, compounded, CAGR, depreciation, "after n years".',
      steps:[
        'Compound growth: value = P × (1 + r)ⁿ. Multiply factors; never multiply the rate by n.',
        'Simple interest: P × r × n, always computed on the original principal.',
        'CAGR = (end ÷ start)^(1/n) − 1. Over 2 years, take the square root of the total factor.',
        'Declining-balance depreciation: value = P × (1 − r)ⁿ, which never reaches zero.'
      ],
      key:['Rule of 72: years to double ≈ 72 ÷ rate%. At 20% a year, about 3.6 years.'],
      traps:['Treating "grows 20% a year for 4 years" as +80%. It is ×2.07.']
    },
    {
      type:'series', title:'Number series and patterns',
      recognise:'A row of numbers ending in "?". TestGorilla lists this type explicitly.',
      steps:[
        'Write the DIFFERENCES between consecutive terms. Constant? Arithmetic — done.',
        'If not, check the RATIOS. Constant? Geometric — done.',
        'If not, take the differences OF the differences. Constant? Quadratic, usually n² ± k.',
        'Check whether each term is the SUM of the two before it (Fibonacci-style).',
        'Check multiply-then-add rules (×2+1) — the giveaway is differences that double.',
        'Check whether the divisor or multiplier itself increases by one each step (÷2, ÷3, ÷4).',
        'Check for two interleaved series, or an alternating operation.'
      ],
      key:['Keep squares, cubes and factorials in mind: 1 4 9 16 25 · 1 8 27 64 · 1 2 6 24 120.'],
      traps:[
        'Spending more than 90 seconds. If the checklist runs out, eliminate implausible options and move on.',
        'For error-spotting variants, test the rule against EVERY term, not just the last.'
      ],
      example:{
        q:'3, 8, 15, 24, 35, ?',
        a:'48',
        why:'Differences are 5, 7, 9, 11 — rising by 2 — so the next is 13 and 35 + 13 = 48. Equivalently the terms are n² − 1, and 7² − 1 = 48.'
      }
    },
    {
      type:'estimation', title:'Estimation',
      recognise:'"Approximately", "estimate", or options far enough apart that exact work is wasted.',
      steps:[
        'Round to friendly numbers, then adjust for the direction you rounded.',
        'Anchor on simple fractions: 48% is just under a half; 19.8% is just under a fifth.',
        'Use ×20 − ×1 for ×19, and similar adjustments for awkward multipliers.',
        'To compare fractions, measure each against 1/2.'
      ],
      key:['10% a year compounds to about ×1.33 over 3 years and roughly ×2 over 7 years.'],
      traps:['Computing exactly when the options are far apart — it costs time and gains nothing.']
    },
    {
      type:'probability', title:'Probability and counting',
      recognise:'Draws, coins, overlapping groups, "how many different pairs".',
      steps:[
        'Without replacement, BOTH numerator and denominator shrink on the second draw.',
        'For "exactly k of n", count the arrangements — three ways to get exactly two heads in three flips.',
        'Overlapping groups: |A or B| = |A| + |B| − |both|. Rearrange to find the overlap.',
        'Unordered pairs from n items: n(n − 1) ÷ 2.'
      ],
      traps:['Counting ordered selections when order does not matter — it doubles the true number of pairs.']
    },
    {
      type:'business', title:'Business metrics',
      recognise:'Market share, turnover, utilization, payback, revenue drivers.',
      steps:[
        'Market share = own sales ÷ total market. Share rises only if your growth EXCEEDS market growth.',
        'Revenue = price × volume, so combine percentage moves by multiplying: +50% volume with −20% price = ×1.2.',
        'Inventory turnover = COGS ÷ average inventory. Rearrange to get whichever term is missing.',
        'Utilization = billable hours ÷ available hours. Never assume 100%.',
        'Simple payback = investment ÷ annual profit.'
      ],
      traps:['Adding percentage changes that should be multiplied.']
    },
    {
      type:'multistep', title:'Multi-step problems',
      recognise:'Several quantities given, and the question asks for something two or three operations away.',
      steps:[
        'Read the FINAL sentence first and write down the target quantity.',
        'Work backwards: list what you need to reach it, then what you need for that.',
        'Compute one step at a time on paper, labelling every intermediate number with its unit.',
        'Before answering, re-read the question to confirm you produced the quantity it asked for.'
      ],
      traps:[
        'Stopping one step early — gross profit when operating profit was asked, or fees without expenses.',
        'Answering an intermediate value because it appears among the options. It is there deliberately.'
      ]
    }
  ]
},

/* ============================ WORKING WITH DATA ============================ */
{
  id:'data', icon:'📊', title:'Working with Data',
  blurb:'12 questions in 10 minutes. Beyond reading tables, this section tests descriptive statistics and whether you can spot data that should not be trusted.',
  topics: [
    {
      type:'table', title:'Reading tables and charts',
      recognise:'A table or chart followed by a question about values, totals, shares or growth.',
      steps:[
        'Read the QUESTION first, then return to the table for only the numbers you actually need.',
        'Check the units and any footnote before computing: $000, millions, per cent.',
        'If a share is asked, compute the total yourself — it is almost never given.',
        'Write intermediate values on paper with labels. Unlabelled numbers cause row/column mix-ups.'
      ],
      key:[
        'Segment share rises if and only if the segment grows faster than the total.',
        'Percentage growth off a small base looks dramatic and often means very little.',
        'Absolute change and percentage change frequently rank items differently — check which one is asked.'
      ],
      traps:['Scanning the whole table before reading the question. It is the single biggest time sink in this section.']
    },
    {
      type:'chart', title:'Reading charts and graphs',
      recognise:'A bar chart, line chart, pie or stacked bar instead of a table. TestGorilla lists line graphs, charts and diagrams explicitly.',
      steps:[
        'Read the QUESTION first, then the chart title, then the AXIS LABELS — including the units.',
        'CHECK WHERE THE VERTICAL AXIS STARTS. If it does not start at zero, bar heights are not proportional to values and every visual comparison is exaggerated.',
        'Read values against the gridlines, interpolating when a point sits between them. Never estimate from the shape alone.',
        'On grouped bars, compare within each group first, then across groups.',
        'On line charts, a crossover happens at the first plotted point where the lines actually swap order — not where they look close.',
        'On stacked bars, only the bottom segment shares a common baseline, so read each segment\'s own height before comparing growth.',
        'On a pie, convert 1% of the total into money once; every slice then becomes a quick multiplication.'
      ],
      key:[
        'Bar charts encode value as LENGTH, so they need a zero baseline to be honest. Line charts do not.',
        'The steepest-looking line is not necessarily the fastest-growing one — the vertical scale decides that.',
        'A segment can rise in absolute terms while falling as a share of a growing total.',
        'Pie slices are hard to compare by eye; always use the printed percentages when they are given.'
      ],
      traps:[
        'Trusting relative bar heights without checking the axis origin.',
        'Calling a near-touch on a line chart a crossover.',
        'Reading the top of a stacked bar as one segment rather than the total.'
      ],
      example:{
        q:'Two bars sit at 102 and 108 units, but the vertical axis begins at 100. One bar looks four times the other.',
        a:'The real difference is about 6%.',
        why:'With the axis at 100, the visible heights represent 2 and 8, which is where the 4× impression comes from. The actual gap is 6 on a base of 102, about 5.9%. A truncated axis is not always dishonest, but it always magnifies — check the origin before believing your eyes.'
      }
    },
    {
      type:'statistics', title:'Descriptive statistics',
      recognise:'Mean, median, mode, range, spread, standard deviation, correlation.',
      steps:[
        'Mean = sum ÷ count. It is pulled hard by outliers.',
        'Median = the middle of the SORTED list. With an even count, average the two middle values.',
        'Mode = the most frequent value, and the only average that is always an actually observed value.',
        'Range = max − min. Standard deviation = typical distance from the mean.'
      ],
      key:[
        'Mean well above median means a high outlier is skewing the data. For "typical", use the median.',
        'Two datasets can share a mean and have completely different spread — always report or check variability.',
        'Correlation r runs from −1 to +1. Strength is |r|; the sign is only direction. r = −0.78 is stronger than r = 0.60.',
        'Correlation is never causation and is never a percentage of anything.'
      ],
      traps:[
        'Reading the median off the unsorted list.',
        'Treating a strong correlation as proof of cause. Look for a confounder — the ice cream and drowning pattern is driven by temperature.'
      ],
      example:{
        q:'Deals per rep: 3, 5, 5, 6, 8, 9, 20.',
        a:'Mean 8, median 6, mode 5. The median best describes a typical rep.',
        why:'One rep at 20 drags the mean above six of the seven values. Remove that outlier and the mean falls by 2 while the median moves only 0.5 — which is exactly why the median is the robust measure.'
      }
    },
    {
      type:'validation', title:'Data quality and validation',
      recognise:'A raw extract, a survey design, a chart, or a claim built on one sample.',
      steps:[
        'Run this checklist on any dataset you are shown, in order.',
        'Do the shares sum to 100%? If not, something is double-counted or mis-keyed.',
        'Are there impossible values — a negative order, a percentage above 100, a month of 13?',
        'Are there duplicate rows: same customer, value and date under a different ID?',
        'Are the units consistent down each column? Mixed units make every total meaningless.',
        'Who is in the sample, and who is MISSING? Survivorship, voluntary response and single-site results all fail to generalize.',
        'On a chart, where does the axis start? A truncated axis exaggerates differences.'
      ],
      key:[
        'Missing values: investigate, choose a treatment, and disclose it. Never silently fill them with the most common value — that invents data.',
        'A pilot at one site is a sample of one. Without a comparison group it suggests, it does not prove.'
      ],
      traps:['Computing an average before cleaning. A negative entry and a duplicate row distort both the numerator and the denominator.']
    }
  ]
},

/* ============================ ENGLISH ============================ */
{
  id:'eng', icon:'🇬🇧', title:'English',
  blurb:'20 questions in 12 minutes, CEFR B1/B2. Covers grammar and vocabulary, sentence composition, reading and — on the real test — listening.',
  topics: [
    {
      type:'grammar', title:'Grammar: agreement, tenses, conditionals',
      recognise:'A gap in a sentence with four verb forms or function words.',
      steps:[
        'For agreement, mentally DELETE everything between the subject and the verb. "The report, along with its appendices, WAS submitted."',
        'Identify the time markers: "yesterday" forces simple past, "since 2019" forces present perfect, "by next year" forces future perfect.',
        'For two past events, the earlier one takes the past perfect (had + participle).',
        'Match the conditional to the clause you are given.'
      ],
      key:[
        'Each, every, neither, either as SUBJECT are singular.',
        '"The number of" is singular; "a number of" is plural.',
        'Neither…nor / either…or: the verb agrees with the NEARER subject.',
        '2nd conditional: if + past simple, would + base. 3rd conditional: if + past perfect, would have + participle.',
        'Subjunctive after suggest, recommend, insist, demand, require: the bare base form ("that he revise").',
        'Fewer for countable, less for uncountable.'
      ],
      traps:['Putting "would" inside the if-clause. It belongs only in the result clause.']
    },
    {
      type:'idiom', title:'Prepositions and fixed expressions',
      recognise:'A gap before a preposition, or a verb + preposition pair.',
      steps:[
        'These are memorised, not derived. Learn them as fixed pairs.',
        'When two prepositions are both possible, the preposition changes the MEANING — decide which meaning the sentence needs.'
      ],
      key:[
        'responsible FOR a task · responsible TO a person',
        'consistent WITH · depend ON · comply WITH · in charge OF · capable OF + -ing',
        'result IN (the consequence) · result FROM (the cause)',
        'concerned ABOUT (worried) · concerned WITH (the topic)',
        'account FOR (explain) · different FROM (never "than" in formal English)',
        'look forward TO + -ing · be used TO + -ing (habit) vs used TO + base (past habit)'
      ],
      traps:['"Depend of" — a direct transfer from Spanish "depender de". It is always "depend on".']
    },
    {
      type:'sentence correction', title:'Sentence composition',
      recognise:'Four versions of the same sentence; choose the correct or clearest one.',
      steps:[
        'Run this checklist against each option rather than reading for what "sounds right".',
        'PARALLELISM: items in a list share a form — all -ing, or all infinitives.',
        'MODIFIERS: the subject right after an opening phrase must be the thing doing the action.',
        'COMPARISONS: compare like with like — "higher than THAT OF Company B", not "than Company B".',
        'PRONOUNS: every pronoun needs exactly one possible referent.',
        'PUNCTUATION: two independent clauses need a semicolon or a conjunction, never a bare comma.',
        'PLACEMENT: put "only" immediately before what it limits.',
        'CONCISION: cut redundancy — "revert back", "due to the fact that", "make the decision to".'
      ],
      traps:['Choosing the longest, most formal-sounding option. Concise and active almost always wins.']
    },
    {
      type:'vocabulary', title:'Vocabulary',
      recognise:'"Closest in meaning to", "most nearly opposite".',
      steps:[
        'Read the instruction twice — synonym and antonym questions look identical at a glance.',
        'Define the word yourself before reading the options, then find the closest match.',
        'If the word appears in a sentence, let the context decide between its senses.'
      ],
      key:[
        'Core business register: mitigate (reduce) · feasible (doable) · ambiguous (unclear) · scrutinize (examine closely) · redundant (unnecessary) · prudent (sensible) · substantiate (support with evidence) · volatile (unstable) · consolidate (combine) · obsolete (outdated) · discrepancy (mismatch) · meticulous (very careful) · comprehensive (complete) · incentive (motivation) · streamline (simplify) · contingent on (conditional on) · robust (holds up under scrutiny) · stakeholder (anyone affected) · defer (postpone).',
        'Watch near-identical pairs: comprehensive (complete) vs comprehensible (understandable).'
      ],
      traps:['Missing the word "OPPOSITE" and picking the synonym, which is always offered as a distractor.']
    },
    {
      type:'reading', title:'Reading comprehension',
      recognise:'A short passage followed by "which is best supported / most strongly implied".',
      steps:[
        'Read the QUESTION first so you know what to look for.',
        'Read the passage for structure — claim, evidence, qualification — not for detail.',
        'The answer must be provable from the passage. Locate the sentence that proves it.',
        'Eliminate on four grounds: EXTREME language, OUT OF SCOPE, CONTRADICTS the text, or right idea but OVERREACHES.'
      ],
      traps:[
        'Choosing an option that is true in the real world but absent from the passage.',
        'Turning a reported perception into a fact.',
        'Accepting an option that is 90% right — the last clause is often what makes it wrong.'
      ]
    },
    {
      title:'Traps specific to Spanish speakers',
      recognise:'Errors that feel correct because Spanish works that way.',
      steps:[
        'These are the highest-yield items to over-learn, because your ear will not catch them.'
      ],
      key:[
        'depend ON, not "depend of" (depender de).',
        '"I agree", not "I am agree" (estoy de acuerdo).',
        'actually = in fact. Currently = actualmente. They are NOT the same word.',
        'realize = become aware. To carry out = realizar.',
        'assist = help. To attend = asistir a.',
        'sensible = sensato; sensitive = sensible. The pair is swapped.',
        'Information and advice are uncountable — never "informations" or "advices".',
        '"Explain TO me", not "explain me".',
        '"What is it called?", not "How is it called?" (¿Cómo se llama?)',
        'Adjectives go before the noun: "the red car", never "the car red".',
        'people = plural (people ARE), not "the people is".'
      ],
      traps:['Trusting a word because it looks like its Spanish cousin. False friends are deliberately used as distractors.']
    }
  ]
},

/* ============================ ENGLISH C1 ============================ */
{
  id:'engC1', icon:'🎓', title:'English C1 (advanced)',
  blurb:'Deliberate over-training. The real module is B1/B2, so everything here is harder than the test will ask. The point is not that these structures will appear — it is that after practising them, B2 items stop feeling like decisions and start feeling obvious.',
  topics: [
    {
      type:'grammar-c1', title:'Inversion, cleft and fronting',
      recognise:'A gap at the START of a clause, or a sentence beginning with a negative adverbial (Not only, Rarely, Seldom, No sooner, Under no circumstances, Only when/after/if).',
      steps:[
        'Spot the trigger. If a negative or restrictive adverbial has been FRONTED, the clause after it must invert like a question: auxiliary before subject.',
        '"Rarely HAVE WE seen…", not "Rarely we have seen…". If there is no auxiliary, insert do/does/did: "Only then DID HE realise".',
        'With "Only when/after/if + clause", the inversion lands on the MAIN clause, not the subordinate one: "Only when the board approved DID the CEO announce…".',
        '"No sooner … THAN", never "no sooner … when". "Hardly/Scarcely … WHEN", never "than". These two pairs are swapped on purpose in distractors.',
        'For cleft sentences, check what is being emphasised: "It was the CFO who raised it" (emphasis on person) vs "What the CFO raised was the risk" (emphasis on thing).'
      ],
      key:[
        'Fronted negative adverbial → invert. That is the whole rule.',
        'Not only … but also: the inversion goes in the FIRST clause. "Not only DID sales fall, but margins also narrowed."',
        'Should/Were/Had can replace "if" in conditionals, and then they invert: "Had we known" = "If we had known"; "Should you require" = "If you require"; "Were it not for" = "If it were not for".',
        'Inversion is NOT used when the adverbial is not fronted: "We have rarely seen this" is perfectly correct.',
        'Cleft with "What" takes a SINGULAR verb: "What concerns me IS the assumptions" — even before a plural.'
      ],
      traps:[
        'Inverting the subordinate clause instead of the main one after "Only when…".',
        'Pairing "no sooner" with "when" or "hardly" with "than".',
        'Adding "would" to the if-clause of an inverted conditional. "Had we would known" is not a sentence.'
      ]
    },
    {
      type:'vocabulary-c1', title:'Register, connotation and near-synonyms',
      recognise:'Four options that all mean roughly the right thing. The question is not what the word means but how formal it is and what it implies.',
      steps:[
        'Decide what the gap actually needs: neutral, formal, or loaded. The surrounding sentence tells you — a regulator "sanctions", a friend "lets you".',
        'Check connotation, not just denotation. Notorious = famous for something BAD. Ambitious plan = admiring; overambitious = critical.',
        'Watch collocation: you MOUNT a defence, LODGE a complaint, RAISE a concern, VOICE an objection. The verb is fixed by the noun.',
        'When two options are both formal and both fit, the answer is usually the one whose implication matches the sentence\'s stance.'
      ],
      key:[
        'Formality ladder: start → begin → commence · end → conclude → terminate · ask for → request → solicit · about → concerning → with regard to.',
        'Same meaning, opposite stance: thrifty (approving) / stingy (critical); confident / arrogant; determined / stubborn; frank / blunt.',
        'Words that quietly signal doubt: purported, ostensibly, supposedly, allegedly, so-called, apparent. If one appears, the author is distancing themselves.',
        'C1 verbs worth owning: countenance (tolerate), preclude (make impossible), obviate (remove the need for), attenuate (weaken), corroborate (confirm independently), equivocate (be deliberately vague), belie (give a false impression of), undermine, curtail, exacerbate, mitigate.',
        'Nuance pairs that get tested: continual (repeated) vs continuous (unbroken) · comprise (the whole comprises the parts) vs compose (the parts compose the whole) · disinterested (impartial) vs uninterested (bored) · fortuitous (by chance) vs fortunate (lucky).'
      ],
      traps:[
        'Choosing the most impressive word rather than the one that fits the register of the sentence.',
        'Treating a near-synonym as interchangeable when its connotation reverses the author\'s stance.'
      ]
    },
    {
      type:'sentence-c1', title:'Subtle parallelism and modifier placement',
      recognise:'A sentence that sounds fine on first reading. Nothing is broken; something is merely misaligned.',
      steps:[
        'Find the correlative pair (not only … but also, both … and, either … or, rather than, as much as). Whatever follows the first half must be the SAME grammatical kind as what follows the second.',
        'Test it by deletion: "not only [X] but also [Y]" — read the sentence with X alone, then with Y alone. Both must work.',
        'For modifiers, find the word the phrase is meant to describe and check it sits immediately beside it.',
        'Track "only", "even", "just", "also". Each attaches to whatever follows it, and moving it changes the meaning of the sentence rather than breaking it.',
        'For a dangling participle, ask who is doing the -ing. If that doer is not the subject of the main clause, it dangles.'
      ],
      key:[
        'Parallel: "He emphasised reducing costs and improving service" — gerund + gerund. Not "…reducing costs and to improve service".',
        '"Not only the need for X but also the importance of Y" — noun phrase against noun phrase.',
        '"Only the board approved the merger" (nobody else did) ≠ "The board approved only the merger" (nothing else) ≠ "The board only approved the merger" (did not, say, fund it).',
        'Comparisons must be like with like: "Our margins are higher than OUR COMPETITORS\'" — not "than our competitors", which compares margins to people.',
        'A participle opening a sentence attaches to the subject that follows: "Having reviewed the data, THE TEAM concluded…" — not "…the conclusion was".'
      ],
      traps:[
        'Accepting a sentence because it reads smoothly. At C1 the error is never audible.',
        'Fixing the wrong half of a correlative pair.',
        'Comparing a quality to a person, or a year to a company.'
      ]
    },
    {
      type:'idiom-c1', title:'Phrasal verbs and fixed expressions',
      recognise:'One verb, four particles — or an expression where a single preposition is the whole question.',
      steps:[
        'Treat the verb + particle as ONE vocabulary item. "Bear out" and "bear on" share no meaning; knowing "bear" tells you nothing.',
        'Use the object as the clue: data bears OUT a hypothesis (confirms it); a fact bears ON a question (is relevant to it); a person bears WITH you (is patient).',
        'For fixed expressions, the preposition is not logical — it is memorised. Reasoning from Spanish will mislead you.',
        'If two particles both seem possible, pick the one whose object type matches.'
      ],
      key:[
        'bear out (confirm) · bear on (be relevant to) · bear with (be patient) · bear down on (approach threateningly).',
        'account for (explain / make up) · allow for (leave room for) · answer for (take responsibility for) · call for (require).',
        'put off (postpone / deter) · put up with (tolerate) · put down to (attribute to) · put forward (propose).',
        'come up against (encounter) · come down to (be essentially about) · come in for (receive, of criticism) · come round to (eventually accept).',
        'Fixed and frequently tested: at odds with · on the grounds that · in the wake of · with a view to + -ing · subject to · conducive to · tantamount to · in lieu of · by dint of · to no avail.',
        'Note the -ing traps: "with a view to LAUNCHING", "committed to IMPROVING", "look forward to HEARING". "To" here is a preposition, not an infinitive.'
      ],
      traps:[
        'Assuming the particle carries its literal spatial meaning.',
        'Writing "with a view to launch" — the -ing is obligatory.',
        'Choosing a phrasal verb that exists but takes a different kind of object.'
      ]
    },
    {
      type:'reading-c1', title:'Author stance and implication',
      recognise:'A denser passage where the question asks about TONE, ATTITUDE, or what the author would most likely agree with — not about a stated fact.',
      steps:[
        'Read for the author\'s hedges and loaded words before you read for content. "So-called", "purportedly", "merely", "at best" are stance markers.',
        'Separate what the author REPORTS from what the author ENDORSES. A passage can describe a view at length and still reject it.',
        'Find the pivot. "Yet", "however", "in practice", "the reality is" almost always mark the sentence carrying the author\'s real position.',
        'For tone questions, grade the intensity. Most C1 answers are moderate — "sceptical", "measured", "qualified approval" — while the wrong ones are extreme: "contemptuous", "enthusiastic", "indifferent".',
        'For inference questions, the answer must follow from the passage, not merely sit comfortably alongside it.'
      ],
      key:[
        'Concession then reversal is the standard C1 structure: "While the approach has merits, …". The position lives after the comma.',
        'A rhetorical question is a statement. "Is this really innovation?" means the author thinks it is not.',
        'Understatement signals criticism in formal English: "the results were less than compelling" is a harsh verdict.',
        'If the author never states a view, the correct tone answer really is "neutral" or "detached" — do not manufacture an opinion.'
      ],
      traps:[
        'Picking an extreme tone word when the passage is measured.',
        'Attributing a reported view to the author.',
        'Choosing an option that is reasonable in general but unsupported by this passage.'
      ]
    }
  ]
},

/* ============================ BUSINESS JUDGMENT ============================ */
{
  id:'judgment', icon:'⚖️', title:'Business Judgment',
  blurb:'Not one of your four confirmed modules, but the briefing slide warns they may change and Bain sometimes includes a judgment block. A little familiarity converts directly into points here.',
  topics: [
    {
      type:'judgment', title:'Judgment scenarios',
      recognise:'A short business situation followed by "what should you do first?" or "what most deserves testing?". There is rarely a single clever move.',
      steps:[
        'Identify the DECISION being made and who owns it. Your job is to make its basis explicit, not to win the argument or to comply.',
        'Find the assumption carrying the largest downside if it is wrong. That is almost always what deserves testing first.',
        'Prefer the option that QUANTIFIES an unknown over one that decides around it in either direction. An incomplete analysis is not the same as a negative answer.',
        'When two explanations compete, look for the subgroup each one does not apply to — the data usually separates them already.',
        'Separate robust findings from fragile ones and name the fragility. Blending them into one number hides a decision the client should make consciously.',
        'Make trade-offs visible rather than absorbing them silently or refusing outright.'
      ],
      key:[
        'Stated preference is not revealed preference — survey intent overstates real behaviour.',
        'Historical parameters (elasticity, conversion, churn) only hold while the conditions that produced them hold.',
        'Costs outside the model — severance, reputation, supply risk — belong in the analysis, not in a footnote.',
        'Under a binary risk, split decisions into those that pay off either way and those that need the outcome first.',
        'Surface a material error the moment you find it. The cost of disclosure only grows.'
      ],
      traps:[
        'Choosing the boldest-sounding option. Judgment questions reward balance, not decisiveness.',
        'Treating a non-financial consequence as either outside your remit or as automatically decisive — both avoid the work.',
        'Splitting a scarce resource 50/50 across two demanding workstreams, which usually delivers neither.'
      ],
      example:{
        q:'A model shows closing 12 of 40 branches saves $8m a year "with no revenue loss". Which assumption most deserves testing?',
        a:'That displaced customers stay with the bank rather than leaving.',
        why:'The entire saving rests on that clause. A departing customer takes all their business, not just their branch visits, so if even a fraction leave the saving shrinks or reverses. Property and staffing assumptions change the size of the number; this one decides whether there is a number at all.'
      }
    }
  ]
},

/* ============================ PLAN ============================ */
{
  id:'plan', icon:'🗓️', title:'How to use the remaining days',
  blurb:'A study routine that fits into spare moments.',
  topics: [
    {
      title:'The daily routine',
      recognise:'11 questions a day, which is what the bank is sized for.',
      steps:[
        'Read one Playbook topic before you practise it. Technique first, volume second.',
        'Do your 11 questions in short bursts — Quick Question mode is built for gaps between other work.',
        'Read EVERY explanation, including the ones you got right. A lucky guess and real understanding score the same today but not on test day.',
        'Clear your mistakes list at least twice a week. A question you got wrong and then right is worth more than a fresh one.',
        'Run one full timed section every few days, and always in exam mode so the pacing is realistic.'
      ]
    },
    {
      title:'The last week',
      recognise:'Roughly the final seven days.',
      steps:[
        'Shift the balance from new questions toward timed full sections.',
        'Re-read the Playbook sections for your two weakest categories — the app tracks accuracy per section on the home screen.',
        'Practise listening separately: business news or podcasts in English. The real English module includes listening and this app cannot cover it.',
        'The day before: one light session, no cramming. Confirm your webcam works and your browser extensions are disabled.'
      ],
      traps:['Grinding new questions in the final days. At that point, reviewing errors and rehearsing pace pays far more.']
    }
  ]
}

],

sources: [
  'TestGorilla test library: Critical Thinking, Numerical Reasoning, Working with Data, English B1/B2 test pages',
  'Bain & Company careers — digital assessment',
  'HackingTheCaseInterview, StrategyCase, ManagementConsulted, IGotAnOffer, CaseBasix (EN/FR) — Bain TestGorilla guides',
  'PrepLounge consulting forum — candidate reports',
  'JobTestPrep, iPrep, How2Become, PracticeAptitudeTests — TestGorilla and numerical reasoning practice material',
  'JobTestPrep and TheLawyerPortal — Watson-Glaser argument evaluation',
  'Magoosh, Experts\' Global, GMAT Club, Princeton Review — assumption negation test and critical reasoning method',
  'PuzzleBaron, ThePuzzleLabs — logic grid and arrangement solving method',
  'Assessment-Training, GeeksforGeeks, AptitudeAce — syllogism rules and number series patterns',
  'Magoosh GRE, Achievable, Princeton Review — reading comprehension elimination strategy',
  'LeonardoEnglish, HeatherHughes, EverestLanguageSchool — common English errors among Spanish speakers'
]
};
