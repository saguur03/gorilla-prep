/* Business judgment — closes AUDIT #6.
   Santiago's briefing slide warns the modules may change, and several sources report that
   Bain's TestGorilla sometimes includes business-judgment or situational-judgment blocks.
   The bank had zero coverage, which is uninsured tail risk: if such a block appears he
   meets it cold, and it is a format where a little familiarity converts directly to points.

   These questions reward balanced reasoning over a single clever move. The right answer is
   normally the one that identifies what would actually decide the question, rather than the
   one that sounds most decisive.

   Kept OUT of the four real sections and out of the full mock, so it never distorts the
   simulation. Reachable from its own button on the home screen. */
window.QUESTION_BANK = window.QUESTION_BANK || {};
window.QUESTION_BANK.judgment = [

{ type:'judgment', d:2,
  prompt:"A client's most profitable product line is growing 3% a year in a market growing 12%. The client wants to invest heavily to defend its position.\n\nWhat should be established first?",
  choices:[
    "Whether the share loss comes from a fixable weakness or from a structural shift in what customers want",
    "How much the competitors are spending on marketing",
    "Whether the product line can be rebranded",
    "How long the product line has existed"
  ],
  answer:0,
  takeaway:"Diagnose why share is being lost before deciding whether defending it is worth the money.",
  explanation:"Growing slower than the market means losing share, but the right response depends entirely on the cause. If customers are migrating to a substitute technology, heavy investment defends a shrinking position; if it is a fixable service or pricing gap, investment may be exactly right. Competitor spending, branding and product age are all downstream of that diagnosis." },

{ type:'judgment', d:2,
  prompt:"A cost-reduction programme must deliver $10 million in savings. Your analysis finds $12 million, but $5 million of it comes from cutting the maintenance budget.\n\nWhat is the most responsible way to present this?",
  choices:[
    "Present the full $12 million, since it exceeds the target",
    "Present $7 million as robust and the maintenance saving separately, with its risk to asset reliability stated",
    "Present $10 million exactly, to match the target",
    "Present only the $7 million and drop the maintenance item"
  ],
  answer:1,
  takeaway:"Separate robust savings from risky ones and name the risk — do not blend them into one number.",
  explanation:"Deferred maintenance is a genuine saving in year one and often a larger cost later, so it is not comparable to structural savings. Presenting the two together hides a decision the client should make consciously. Trimming the figure to match the target, or silently dropping the item, both substitute your judgement for theirs." },

{ type:'judgment', d:2,
  prompt:"Two days before a client presentation you find an error in your model that reduces the projected benefit from $40 million to $28 million.\n\nWhat should you do?",
  choices:[
    "Tell the team lead immediately and correct the deck before the meeting",
    "Present the original figure and issue a correction afterwards",
    "Present a range of $28–40 million without explaining the change",
    "Keep the $40 million, since it is within the margin of error of any forecast"
  ],
  answer:0,
  takeaway:"Surface a material error the moment you find it — the cost of disclosure only grows with time.",
  explanation:"A 30% reduction in the headline benefit is material and will change what the client decides. Raising it immediately leaves time to fix the analysis and preserves credibility; every other option trades a small amount of short-term discomfort for a large amount of later damage. Presenting an unexplained range is a way of hiding the error while appearing rigorous." },

{ type:'judgment', d:3,
  prompt:"A client asks you to recommend closing a plant. Your analysis supports it financially, but you notice the plant supplies a component used by three other plants, and no alternative supplier was assessed.\n\nWhat is the right next step?",
  choices:[
    "Recommend the closure, since the financial case is sound",
    "Recommend against it, since the supply risk is unquantified",
    "Quantify the cost and feasibility of sourcing the component elsewhere before recommending either way",
    "Recommend closure with a note that supply should be reviewed later"
  ],
  answer:2,
  takeaway:"When a material factor is unquantified, quantify it — do not decide around it in either direction.",
  explanation:"The financial case is incomplete rather than wrong: it omits a cost that could be small or could be decisive. Recommending closure buries the gap, recommending against it treats an unknown as a fatal flaw, and deferring the review pushes the risk onto the client after the irreversible decision. The analysis simply is not finished." },

{ type:'judgment', d:2,
  prompt:"A client's customer satisfaction has fallen for three consecutive quarters. The operations director attributes it to a new IT system; the sales director attributes it to a price increase.\n\nHow should you resolve this?",
  choices:[
    "Side with the operations director, since IT changes are more disruptive",
    "Check whether satisfaction fell among customers unaffected by the price increase, and among those on the old IT system",
    "Average the two explanations and address both equally",
    "Survey the two directors' teams to see which view is more widely held"
  ],
  answer:1,
  takeaway:"Competing explanations are settled by finding the group each one does not apply to.",
  explanation:"Both hypotheses make different predictions about specific customer subgroups, so the data can separate them. Customers who never saw the price rise but did get the new system isolate the IT effect, and vice versa. Deferring to seniority, splitting the difference, or polling opinion all substitute social process for evidence that is already available." },

{ type:'judgment', d:2,
  prompt:"You have two weeks to size a market. A rigorous bottom-up estimate would take four weeks; a top-down estimate using published data would take three days.\n\nWhat is the best approach?",
  choices:[
    "Do the top-down estimate and present it as definitive",
    "Do the top-down estimate first, then use the remaining time to test its most sensitive assumption bottom-up",
    "Start the bottom-up estimate and present whatever is finished in two weeks",
    "Ask for the deadline to be extended to four weeks"
  ],
  answer:1,
  takeaway:"Get a fast answer first, then spend the remaining time on the assumption that most moves it.",
  explanation:"A quick estimate establishes the order of magnitude and, crucially, reveals which assumption the answer is most sensitive to. Directing the remaining eleven days at that single assumption buys most of the accuracy of a full bottom-up build at a fraction of the cost. A half-finished bottom-up model gives neither a number nor a range." },

{ type:'judgment', d:2,
  prompt:"A client's board wants a recommendation on entering a new country. The data available is good on market size but poor on regulation.\n\nHow should the recommendation be framed?",
  choices:[
    "Recommend entry, since the market is large",
    "Decline to recommend until regulatory data is available",
    "Recommend entry conditional on specific regulatory findings, and state what would change the answer",
    "Recommend a small pilot without analysing regulation"
  ],
  answer:2,
  takeaway:"A conditional recommendation with named triggers is more useful than a delayed one.",
  explanation:"Boards need a decision path, not a verdict withheld until certainty arrives. Stating what the answer is under each regulatory scenario, and naming the specific findings that would flip it, lets the client act while directing the remaining diligence. Recommending entry on market size alone ignores the known gap; declining entirely wastes the analysis already done." },

{ type:'judgment', d:3,
  prompt:"A cost model shows that closing 12 of 40 branches saves $8 million a year with no revenue loss, because customers can use nearby branches.\n\nWhich assumption most deserves testing?",
  choices:[
    "That the 12 branches are the least profitable",
    "That customers of closed branches actually stay with the bank rather than leaving",
    "That the branches can be sold rather than leased out",
    "That staff can be redeployed to other branches"
  ],
  answer:1,
  takeaway:"Test the assumption that carries the largest downside if it is wrong.",
  explanation:"The whole $8 million depends on 'no revenue loss'. If even a fraction of displaced customers leave, the saving shrinks or reverses, because a departing customer takes all their business, not just the branch visit. Property treatment and staff redeployment affect the size of the saving; customer retention determines whether there is a saving at all." },

{ type:'judgment', d:2,
  prompt:"A junior colleague's analysis contains a methodological error, but their conclusion happens to be correct.\n\nWhat is the right response?",
  choices:[
    "Say nothing, since the conclusion is right",
    "Correct the method privately and explain why it matters even when the answer was right",
    "Escalate the error to the team lead",
    "Redo the analysis yourself without mentioning it"
  ],
  answer:1,
  takeaway:"A right answer from a wrong method will not survive the next question.",
  explanation:"The conclusion being correct is luck, and the same method will produce a wrong answer on the next dataset. Correcting it privately fixes the underlying capability without embarrassment. Silence lets the error propagate, escalation is disproportionate for a first correctable mistake, and redoing it quietly teaches nothing and duplicates work." },

{ type:'judgment', d:2,
  prompt:"A client insists on a recommendation you believe the data does not support. They are paying for the engagement.\n\nWhat should you do?",
  choices:[
    "Provide the recommendation they want, since they know their business",
    "Set out what the data does and does not support, name the conditions under which their view would be right, and let them decide",
    "Refuse to write the recommendation",
    "Write it with a disclaimer at the end"
  ],
  answer:1,
  takeaway:"Your job is to make the basis of the decision explicit, not to win or to comply.",
  explanation:"The client owns the decision; you own the integrity of the analysis. Stating precisely what the evidence supports, and under what conditions their instinct would be vindicated, gives them everything needed to choose — and often reveals that their view rests on information you did not have. Simply complying or simply refusing both abandon the analytical role." },

{ type:'judgment', d:2,
  prompt:"Two workstreams both need the same analyst next week. One is on the critical path to the client deadline; the other prevents a data problem from growing.\n\nWhat is the best resolution?",
  choices:[
    "Give the analyst to the critical-path workstream and accept the data problem",
    "Split the analyst between both at 50%",
    "Give the analyst to the critical path, and establish how fast the data problem compounds before deciding whether it can wait a week",
    "Give the analyst to the data problem, since unresolved data corrupts everything downstream"
  ],
  answer:2,
  takeaway:"Sequencing conflicts turn on how fast the deferred problem grows, not on which sounds more urgent.",
  explanation:"The critical path has a hard deadline, so it takes precedence by default — but only if the deferred problem is genuinely deferrable. A data issue that doubles in scope weekly is a different decision from one that is static. Splitting an analyst across two demanding workstreams usually delivers neither, and choosing purely on principle skips the question that decides it." },

{ type:'judgment', d:3,
  prompt:"A pricing analysis suggests raising prices 8% would increase profit, assuming demand falls by the historical elasticity. The historical data comes from a period when the client had no direct competitor.\n\nHow should this affect the recommendation?",
  choices:[
    "Not at all — elasticity is a property of the product",
    "The historical elasticity likely understates how much demand will fall now that customers have an alternative, so the recommendation should be tested at higher elasticities",
    "The recommendation should be abandoned",
    "The price rise should be reduced to 4% as a precaution"
  ],
  answer:1,
  takeaway:"Check whether the conditions that generated your historical data still hold.",
  explanation:"Elasticity is not intrinsic to a product; it depends on the alternatives available. With a competitor now present, customers can leave in a way they previously could not, so the historical figure is a lower bound on sensitivity. The right response is to re-run the analysis across a range of higher elasticities and see at what point the price rise stops paying — not to abandon it, and not to halve it arbitrarily." },

{ type:'judgment', d:2,
  prompt:"An operational improvement would save $3 million a year but requires 40 redundancies in a town where the client is the largest employer.\n\nWhat belongs in the recommendation?",
  choices:[
    "Only the financial case, since the client decides on social matters",
    "The financial case together with the transition costs, reputational exposure and any phased alternatives that achieve part of the saving",
    "A recommendation against, on social grounds",
    "The financial case with a note that redundancies are regrettable"
  ],
  answer:1,
  takeaway:"Quantify the consequences that sit outside the model rather than labelling them non-financial.",
  explanation:"Severance, rehiring risk, local reputation and political exposure are real costs that belong in the analysis, not in a footnote. Presenting phased or attrition-based alternatives lets the client see the trade-off curve rather than a single all-or-nothing figure. Treating the social dimension as either outside your remit or as automatically decisive both avoid the actual work." },

{ type:'judgment', d:2,
  prompt:"Halfway through an engagement, the client asks you to also analyse a second business unit, at no change to the fee or timeline.\n\nWhat is the best response?",
  choices:[
    "Absorb the extra work to preserve the relationship",
    "Refuse, since the scope was agreed",
    "Set out what would have to be dropped or shortened to fit the addition, and let the client choose the trade-off",
    "Do a superficial version of the second analysis"
  ],
  answer:2,
  takeaway:"Make the trade-off visible instead of silently absorbing it or refusing outright.",
  explanation:"Fixed time and fixed people mean the addition has to come from somewhere; the only question is whether that is decided openly or by quality quietly dropping. Presenting the options — deprioritise a workstream, extend the timeline, add resource — keeps the client in control. Absorbing the work degrades everything, and a superficial analysis is worse than none because it will still be quoted." },

{ type:'judgment', d:2,
  prompt:"A survey of 200 customers shows 68% would pay more for faster delivery. The client wants to raise delivery charges immediately.\n\nWhat is the key caution?",
  choices:[
    "The sample is too small to be meaningful",
    "Stated willingness to pay routinely overstates actual behaviour, so the finding needs a behavioural test before repricing",
    "The survey should have asked about 200 customers' incomes",
    "68% is not a large enough majority to act on"
  ],
  answer:1,
  takeaway:"Stated preference is not revealed preference — test with behaviour before repricing.",
  explanation:"The reliable gap between what customers say in a survey and what they do at checkout is one of the best-documented findings in pricing research. A limited live test or a price experiment converts the claim into evidence. Two hundred responses is a workable sample, and 68% is a clear majority — the problem is the type of evidence, not its quantity." },

{ type:'judgment', d:3,
  prompt:"Your recommendation depends on a single assumption: that a regulatory approval arrives within nine months. The client's legal team estimates the probability at 60%.\n\nHow should the recommendation handle this?",
  choices:[
    "Proceed, since 60% is more likely than not",
    "Wait for the approval before recommending anything",
    "Present the expected value across both outcomes and identify which decisions can be deferred until the approval is known",
    "Reduce the projected benefit by 40%"
  ],
  answer:2,
  takeaway:"Under a binary risk, separate the decisions that must be made now from those that can wait.",
  explanation:"A 40% chance of failure is far too large to treat the approval as given, but waiting forfeits nine months of preparation. The useful move is to identify which investments are valuable under both outcomes and which are only justified if approval arrives — then commit to the first group now and hold the second. Simply scaling the benefit by the probability produces a number that describes no actual outcome." }

];

/* Difficulty and takeaways are declared inline above; nothing else to attach. */
