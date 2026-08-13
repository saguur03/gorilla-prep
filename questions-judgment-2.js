/* Business judgment — expansion bank (2026 expansion to support 20 questions/day).

   Appends to QUESTION_BANK.judgment, so the ids of the original 16 questions are untouched.

   Same design principle as the original file: the right answer is normally the one that
   identifies what would actually decide the question, not the one that sounds most
   decisive. Difficulty and takeaways are declared inline, as in questions-judgment.js.

   Still excluded from SECTION_ORDER, so none of this enters mixed practice or the full mock. */
window.QUESTION_BANK = window.QUESTION_BANK || {};
window.QUESTION_BANK.judgment = window.QUESTION_BANK.judgment || [];

(function(){
var Q = [

{ type:'judgment', d:2,
  prompt:"A retail client wants to close its twenty worst-performing stores, ranked by operating profit. Six of the twenty sit in cities where the client has no other presence.\n\nWhat should be established before the list is finalised?",
  choices:[
    "How much of each store's contribution is recovered by nearby stores or online after a closure",
    "How long each store's lease has left to run",
    "Which store managers have the weakest performance reviews",
    "Whether competitors have closed stores in the same cities"
  ],
  answer:0,
  takeaway:"A store's profit is not the same as the profit that disappears when it closes.",
  explanation:"Closing a store transfers some of its customers elsewhere and loses the rest. In cities with other branches or strong online penetration, much of the contribution survives; in the six standalone cities it probably does not, and the client also loses local brand presence. Ranking by standalone profit ignores this entirely. Lease terms matter for timing and cost, but only after the recovery question is answered." },

{ type:'judgment', d:3,
  prompt:"Your team's analysis supports a recommendation the client's chief operating officer has publicly opposed. A colleague suggests softening the language so the recommendation is easier to accept.\n\nWhat is the most appropriate response?",
  choices:[
    "Keep the recommendation as the analysis supports it, and invest the effort in presenting the evidence and addressing the COO's stated objections directly",
    "Soften the language, since an accepted recommendation is worth more than a rejected one",
    "Present both the strong and softened versions and let the client choose",
    "Escalate to the chief executive so the COO is bypassed"
  ],
  answer:0,
  takeaway:"Adjust how you make the case, never what the evidence says.",
  explanation:"Changing the substance of a finding to fit an audience is what makes advice worthless, and the client is paying precisely for the independent read. What is legitimately adjustable is the framing: engaging the COO's specific objections, showing the working, and acknowledging what would change the answer. Bypassing the COO turns an analytical disagreement into a political one and usually loses both." },

{ type:'judgment', d:2,
  prompt:"A manufacturing client is choosing between two suppliers. Supplier A is 8% cheaper; Supplier B has a longer track record and a plant two hours away rather than eleven.\n\nWhat is most important to quantify before deciding?",
  choices:[
    "The cost of a supply interruption and how the two suppliers differ in the probability of one",
    "The difference in the two suppliers' payment terms",
    "Which supplier has more customers in the industry",
    "How long each supplier has been in business"
  ],
  answer:0,
  takeaway:"Price differences are certain; reliability differences are probabilistic — put both in the same units before comparing.",
  explanation:"An 8% price advantage is easy to measure and easy to overweight. The relevant comparison is that saving against the expected cost of disruption, which combines the cost of a stoppage with the difference in how likely each supplier is to cause one. Proximity and track record are inputs to that probability, not decisions in themselves. Payment terms and customer counts are second-order." },

{ type:'judgment', d:2,
  prompt:"A client's new product has strong margins but has taken share almost entirely from the client's own established line.\n\nWhat should the analysis establish first?",
  choices:[
    "What the client's total profit would have been without the new product, given what competitors launched in the same period",
    "Whether the new product can be repositioned to a different segment",
    "How much was spent developing the new product",
    "Whether the established line should be discontinued"
  ],
  answer:0,
  takeaway:"Cannibalisation is only a loss if the old line would have held its ground anyway.",
  explanation:"Self-cannibalisation looks like waste, but the counterfactual decides it. If a competitor's launch would have taken that share regardless, the new product defended revenue that was leaving; if the established line was secure, the company has spent money moving customers between its own products. Development cost is sunk and repositioning is a response, not a diagnosis." },

{ type:'judgment', d:3,
  prompt:"Two weeks before a final presentation you find an error in a model that changes a headline number by 15%. The direction of the recommendation is unchanged.\n\nWhat is the most appropriate action?",
  choices:[
    "Correct the model, tell the client team about the change and its cause, and check whether any other conclusion depended on the original figure",
    "Correct the model quietly, since the recommendation is unaffected",
    "Leave the figure and add a note about model uncertainty",
    "Delay the presentation until the entire model has been rebuilt"
  ],
  answer:0,
  takeaway:"Disclose the error and check its blast radius; a stable conclusion is not proof the error was harmless.",
  explanation:"The recommendation surviving does not mean nothing else did — sizing, prioritisation and sequencing decisions may all rest on that number. Correcting it quietly risks the client discovering the discrepancy later, which costs far more credibility than the error itself. Papering over it with an uncertainty note is worse, and rebuilding the whole model is disproportionate to a single identified fault." },

{ type:'judgment', d:2,
  prompt:"A client asks you to size a market for a product category that does not yet exist in its country. No published market data is available.\n\nWhat is the most defensible approach?",
  choices:[
    "Build the estimate from the ground up using population and adoption drivers, then sense-check it against comparable categories in similar countries",
    "Decline to size the market until primary research can be commissioned",
    "Use the size of the nearest existing category as a proxy",
    "Apply the global market size scaled by the country's share of world GDP"
  ],
  answer:0,
  takeaway:"With no data, build from drivers you can defend and triangulate against an analogue — never from a single ratio.",
  explanation:"A bottom-up build makes every assumption visible and testable, and the cross-check against comparable countries catches errors of magnitude. Scaling a global figure by GDP share assumes the category behaves identically everywhere, which is precisely what is unknown. Using the nearest category as a proxy imports its dynamics wholesale, and refusing to estimate leaves the client with nothing." },

{ type:'judgment', d:2,
  prompt:"A client's customer satisfaction scores have risen for six consecutive quarters while its market share has fallen in each of those quarters.\n\nWhat is the most useful interpretation to test first?",
  choices:[
    "That the satisfaction survey is reaching a shrinking group of loyal customers as less satisfied ones leave",
    "That satisfaction and market share are unrelated metrics",
    "That competitors are spending more on advertising",
    "That the survey methodology changed six quarters ago"
  ],
  answer:0,
  takeaway:"When a metric improves as the population it measures shrinks, suspect survivorship before celebrating.",
  explanation:"Departing customers stop answering satisfaction surveys, so a company losing its least satisfied customers will watch its average score climb while its business contracts. This is the interpretation that reconciles both trends with a single mechanism. Competitor spending might explain the share loss but not the satisfaction rise, and a methodology change is worth ruling out but explains a step, not six quarters of drift." },

{ type:'judgment', d:3,
  prompt:"A client is deciding whether to enter a market where it would be the fourth entrant. Its analysis shows it could reach 15% share within three years.\n\nWhat matters most in assessing this projection?",
  choices:[
    "Where that 15% would come from and how the three incumbents would be expected to respond",
    "Whether 15% is above or below the average share of a fourth entrant",
    "How long the three incumbents have been in the market",
    "Whether the client has entered other markets successfully"
  ],
  answer:0,
  takeaway:"Share projections are claims about competitors' behaviour, whether or not they say so.",
  explanation:"Fifteen points of share must be taken from somebody, and incumbents defending their position will change price, service or capacity in ways that affect the entrant's economics as well as its volume. A projection that does not model the response is describing an uncontested entry, which fourth entrants rarely get. Benchmarks and the client's record elsewhere are context, not tests of this number." },

{ type:'judgment', d:2,
  prompt:"During interviews, three frontline managers independently describe a process problem that does not appear anywhere in the client's data.\n\nWhat is the most appropriate way to treat this?",
  choices:[
    "Treat it as a lead worth testing, and work out what the data would look like if the managers were right",
    "Exclude it, since it is not supported by the data",
    "Include it in the findings on the strength of three consistent accounts",
    "Ask the client's leadership whether the managers are reliable"
  ],
  answer:0,
  takeaway:"Absence from the data is often a property of the data, not of the world.",
  explanation:"Three independent accounts are meaningful signal, but not yet a finding. The productive move is to specify what evidence the problem would leave — in cycle times, rework rates, exception logs — and go looking for it, which either confirms the issue or shows the data cannot see it. Discarding it assumes the data is complete; reporting it uncritically assumes three people cannot share a mistaken impression." },

{ type:'judgment', d:2,
  prompt:"A client wants to cut its marketing budget by 30% and asks which channels to stop. Attribution data shows paid search delivering by far the lowest cost per acquisition.\n\nWhat should be established before the cuts are made?",
  choices:[
    "How much of paid search's measured performance depends on demand created by the upper-funnel channels being considered for cuts",
    "Which channels the marketing team most wants to keep",
    "How the client's cost per acquisition compares with industry benchmarks",
    "Whether the 30% target could be met by renegotiating agency fees"
  ],
  answer:0,
  takeaway:"Last-click attribution rewards the channel that closes demand, not the one that created it.",
  explanation:"Paid search captures customers who are already searching, and something usually made them search. Cutting the awareness channels that generate that intent can degrade search performance while the attribution model continues to credit search for whatever remains. Understanding that dependency is what stops the client from cutting the channels that feed its best-performing one. Benchmarks and agency fees are useful but secondary." },

{ type:'judgment', d:3,
  prompt:"You are asked to recommend whether a client should acquire a competitor. The synergy case is strong, but the target's founder — who holds the key customer relationships — has said nothing about staying.\n\nHow should this be handled in the recommendation?",
  choices:[
    "Quantify how much of the synergy case survives if the founder leaves, and make retention terms an explicit condition of the deal's value",
    "Assume the founder stays, since acquirers normally offer retention packages",
    "Recommend against the acquisition until the founder commits",
    "Note the risk in the appendix and proceed with the base case"
  ],
  answer:0,
  takeaway:"Price a key-person risk into the case rather than assuming it away or letting it veto the deal.",
  explanation:"The founder's departure is not a footnote if the relationships are the asset being bought, so the honest treatment is to run the case both ways and show what the deal is worth in each. That converts an unresolved risk into a negotiating position on retention terms and price. Assuming departure away misleads; making it a veto forfeits a possibly attractive deal; burying it in an appendix does both." },

{ type:'judgment', d:2,
  prompt:"A client's operations director presents a plan that would cut costs by $8m but relies on a supplier concession the supplier has not agreed to.\n\nWhat is the most useful contribution to make?",
  choices:[
    "Separate the savings that require the concession from those that do not, and establish what the supplier would want in return",
    "Remove the concession-dependent savings from the plan",
    "Recommend approaching an alternative supplier as leverage",
    "Accept the plan and flag the concession as an execution risk"
  ],
  answer:0,
  takeaway:"Split a plan by what it depends on, so the parts that are within your control can proceed.",
  explanation:"Splitting the plan tells the client what it can bank now and what it is negotiating for, which is exactly what it needs to decide how hard to push. It also converts a vague risk into a priced question: what would the concession cost in volume, term or price. Deleting the savings discards value that may well be obtainable, and flagging it as a risk without sizing it leaves the client no better informed." },

{ type:'judgment', d:2,
  prompt:"A pilot in one region produced a 22% improvement. The client wants to roll the change out nationally on the strength of that result.\n\nWhat should be established first?",
  choices:[
    "Whether the pilot region differs from the others in ways that contributed to the result, including the attention the pilot itself attracted",
    "How much the national rollout would cost",
    "How long the pilot ran",
    "Whether staff in other regions support the change"
  ],
  answer:0,
  takeaway:"Pilots run in favourable conditions with unusual attention; assume both until shown otherwise.",
  explanation:"Pilots are typically placed where they are most likely to work, staffed by volunteers, and watched closely — all of which inflate results in ways that do not survive a rollout. Establishing how much of the 22% is attributable to the change itself is the difference between a $22m programme and an expensive disappointment. Cost and duration matter once the effect is believed." },

{ type:'judgment', d:3,
  prompt:"A client's board is split. Half want to invest $40m in a new platform now; half want to wait a year for clearer regulatory guidance. Both positions are internally coherent.\n\nWhat is the most useful analytical contribution?",
  choices:[
    "Identify which parts of the investment are valuable under any regulatory outcome and what the year of delay would actually cost",
    "Recommend the position supported by the chief executive",
    "Recommend a $20m investment as a compromise between the two positions",
    "Recommend waiting, since the regulatory risk is unquantified"
  ],
  answer:0,
  takeaway:"When a board splits on timing, unbundle the decision instead of splitting the difference.",
  explanation:"The debate is framed as all-now against all-later, but investments rarely decompose that way: data foundations, hiring and vendor selection are usually valuable whatever the regulator decides, while regulated-surface build is not. Sizing the cost of delay — lost position, price inflation, capability gaps — tells the board what patience actually costs. Halving the number satisfies both camps and serves neither." },

{ type:'judgment', d:2,
  prompt:"Your recommendation would eliminate around 200 roles at a client. The client asks you to omit the headcount figure from the main presentation and place it in an appendix.\n\nWhat is the most appropriate response?",
  choices:[
    "Keep the figure in the main document, since it is central to the recommendation, while discussing how and when it is communicated to those affected",
    "Move it to the appendix, since the client controls how its own decisions are communicated",
    "Omit the number and present the savings only",
    "Refuse to continue with the engagement"
  ],
  answer:0,
  takeaway:"Where a hard number lives is presentation; whether decision-makers see it is integrity.",
  explanation:"Two hundred roles is not a detail — it is the main cost of the recommendation and the board cannot weigh the decision without it. What is genuinely the client's call is sequencing and communication to staff, and that is worth engaging with seriously. Presenting savings without their human cost misrepresents the proposal; walking away over a formatting request is disproportionate." },

{ type:'judgment', d:2,
  prompt:"A client is considering a 12% price increase. The finance team's model shows profit rising under every volume scenario it tested, from no loss up to a 10% volume decline.\n\nWhat should be checked before the model is relied on?",
  choices:[
    "Whether a 10% decline is genuinely the worst plausible case, and what the model assumes about competitor pricing",
    "Whether the price increase can be phased in over two quarters",
    "How the increase compares with recent inflation",
    "Whether the sales team believes the increase is achievable"
  ],
  answer:0,
  takeaway:"A model that wins under every scenario tested has usually not been tested hard enough.",
  explanation:"A result that holds across the entire tested range is a warning that the range is too narrow. Twelve points of price can easily cost more than 10% of volume, particularly if competitors hold their prices and become visibly cheaper — an assumption the model may make silently. Phasing, inflation comparisons and sales sentiment all matter, but none of them tests whether the model's boundaries are honest." }

];
Q.forEach(function(q){ window.QUESTION_BANK.judgment.push(q); });
})();
