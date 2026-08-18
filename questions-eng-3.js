/* English Level — third expansion bank (15 ago 2026).

   Replaces the 40 "sentence correction" GMAT-style questions retired from the eng bank
   (bonus:true in questions-eng.js / questions-eng-2.js) with real TestGorilla-format
   gap-fill grammar and idiom items, confirmed against a recording of the actual B2 Upper
   test. Targets grammar (48% accuracy) and the mislabelled "composition" score (40%,
   actually GMAT content) that Santiago flagged as weak.

   Also adds the reading section's missing True/False sub-format (Paso 3): the existing 22
   reading questions were 100% "which is best supported", with zero True/False items, even
   though both formats appear in the real test. See guide-en.js/guide-es.js's 'reading'
   topic for the technique added alongside these.

   Appends to QUESTION_BANK.eng, so ids of all previous questions (including the retired
   bonus ones, which keep their id but are filtered out of every pool) stay untouched.

   Every question carries `type`, `d`, and `cefr` explicitly — the difficulty-default IIFE
   in questions-eng.js has already run, and levels-eng.js's index-based CEFR assignment
   does not extend to this file (see levels-eng.js EXPECTED_ENG, updated separately).

   Options here are text, so they are shuffled at runtime and the stored `answer` index is
   only the position in this file.

   Difficulty distribution (grammar 53×d1/0×d2/17×d3, idiom 13×d1/1×d2/10×d3) deliberately
   skews away from d:2 because the existing 94 grammar+idiom questions were already
   84%/75% concentrated in d:2 — see the Paso 3 audit (15 ago 2026). */
window.QUESTION_BANK = window.QUESTION_BANK || {};
window.QUESTION_BANK.eng = window.QUESTION_BANK.eng || [];

(function(){
var Q = [

/* ---------- GRAMMAR ---------- */

/* 1. Subject-verb agreement */
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe board of directors ___ scheduled to meet on Tuesday to review the merger proposal.",
  choices: ["is", "are", "were", "have been"],
  answer: 0,
  explanation: "'Board of directors' is a collective noun treated as a single unit in standard business usage, so it takes the singular verb 'is'. 'Are' is the common trap because 'directors' at the end of the phrase sounds plural, but the true subject is the collective noun 'board'."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nEach of the regional offices ___ its own compliance officer.",
  choices: ["has", "have", "are", "were"],
  answer: 0,
  explanation: "'Each' is always grammatically singular, regardless of the plural noun phrase that follows it, so the verb is 'has'. The singular possessive 'its' later in the sentence confirms this agreement."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nEvery employee and manager ___ required to complete the compliance training by Friday.",
  choices: ["is", "are", "were", "have"],
  answer: 0,
  explanation: "When 'every' links two nouns with 'and', the subject is still treated as a series of singular items, so the verb stays singular: 'is'. This is a common exception learners miss, expecting 'and' to automatically create a plural subject."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe CEO, as well as the senior partners, ___ attending the shareholder meeting.",
  choices: ["is", "are", "were", "have been"],
  answer: 0,
  explanation: "Phrases introduced by 'as well as' are parenthetical and do not change the number of the main subject. The subject is 'the CEO', which is singular, so the verb is 'is', even though 'senior partners' right before the verb suggests a plural."
},
{
  type: "grammar", d: 3, cefr: "B2",
  prompt: "Choose the correct option:\n\nNeither the audit team nor the compliance officers ___ satisfied with the vendor's response.",
  choices: ["was", "were", "is", "has been"],
  answer: 1,
  explanation: "With 'neither … nor', the verb agrees with the subject closest to it, which here is 'the compliance officers', a plural noun, so 'were' is correct. Reversing the order to 'neither the compliance officers nor the audit team' would require the singular 'was' instead."
},

/* 2. Third conditional and mixed conditionals */
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nIf the supplier ___ the shipment on time, we would have avoided the production delay.",
  choices: ["had dispatched", "dispatched", "would dispatch", "has dispatched"],
  answer: 0,
  explanation: "This is a classic third conditional: 'if + past perfect' in the condition pairs with 'would have + past participle' in the result. Since the shipment was not dispatched on time, 'had dispatched' correctly expresses the unreal past condition."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe board would have approved the budget if the projections ___ more realistic.",
  choices: ["had been", "were", "would be", "have been"],
  answer: 0,
  explanation: "The result clause 'would have approved' signals a third conditional, so the if-clause needs the past perfect 'had been'. 'Were' would instead pair with a second conditional result like 'would approve', which is not the tense used here."
},
{
  type: "grammar", d: 3, cefr: "C1",
  prompt: "Choose the correct option:\n\nIf the company ___ the merger last year, it would be the market leader today.",
  choices: ["had completed", "completed", "would complete", "has completed"],
  answer: 0,
  explanation: "This is a mixed conditional: a hypothetical past action ('if + past perfect') producing a present result ('would be … today', not 'would have been'). The time marker 'last year' in the condition and 'today' in the result signal the mismatch between the two clauses that defines this type."
},
{
  type: "grammar", d: 3, cefr: "C1",
  prompt: "Choose the correct option:\n\nIf Maria ___ so cautious by nature, she wouldn't have delayed the launch for three extra rounds of testing.",
  choices: ["weren't", "hadn't been", "wasn't", "didn't be"],
  answer: 0,
  explanation: "This mixed conditional has a present, unreal characteristic ('if she weren't so cautious', describing who she is now) producing a past hypothetical result ('wouldn't have delayed'). 'Hadn't been' would wrongly suggest her caution was also a one-off past state rather than an ongoing trait."
},
{
  type: "grammar", d: 3, cefr: "B2",
  prompt: "Choose the correct option:\n\n___ the auditors flagged the discrepancy sooner, the fraud might have been prevented.",
  choices: ["Had", "If", "Should", "Were"],
  answer: 0,
  explanation: "This is an inverted third conditional: 'Had the auditors flagged' is equivalent to 'If the auditors had flagged', with 'if' dropped and the auxiliary moved before the subject. 'Should' is used for inverted first conditionals and 'Were' for inverted second conditionals, so neither fits a past hypothetical here."
},

/* 3. Reported speech */
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe manager said that the deadline ___ moved to next Monday.",
  choices: ["had been", "has been", "will be", "is"],
  answer: 0,
  explanation: "Reporting verbs in the past, like 'said', normally shift the original tense one step back. The original statement, 'the deadline has been moved', becomes 'had been moved' in reported speech."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe client asked whether the invoice ___ already been sent.",
  choices: ["had", "has", "have", "was"],
  answer: 0,
  explanation: "Reported questions follow the same backshift rule as statements. The original question, 'has the invoice already been sent?', becomes 'whether the invoice had already been sent' once reported in the past."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe supervisor told the interns ___ the report before leaving.",
  choices: ["to finish", "finish", "that finish", "finishing"],
  answer: 0,
  explanation: "Reported commands and instructions follow the pattern 'tell someone + to-infinitive', so 'to finish' is correct. 'That finish' is not valid grammar, since 'that' clauses need a full verb with a subject, not a bare infinitive."
},
{
  type: "grammar", d: 3, cefr: "C1",
  prompt: "Choose the correct option:\n\nShe said that the team ___ complete the audit within two weeks.",
  choices: ["could complete", "can complete", "would complete", "completed"],
  answer: 0,
  explanation: "Modal verbs backshift in reported speech just like other verb forms, so 'can' in the original statement ('we can complete the audit') becomes 'could' when reported. 'Can complete' keeps the present-tense modal, which is inconsistent with the past reporting verb 'said'."
},
{
  type: "grammar", d: 3, cefr: "C1",
  prompt: "Choose the correct option:\n\nHe mentioned that the shipment ___ arrived by the time the client called to check on it.",
  choices: ["would have", "will have", "would", "had already"],
  answer: 0,
  explanation: "The original statement used the future perfect ('the shipment will have arrived by the time you call'), which backshifts to 'would have arrived' in reported speech. 'Will have' keeps the untouched future tense, which does not agree with the past reporting verb 'mentioned'."
},

/* 4. Passive voice */
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nAll expense reports ___ by the finance department before reimbursement.",
  choices: ["are reviewed", "review", "are reviewing", "reviewed"],
  answer: 0,
  explanation: "The expense reports do not perform the reviewing themselves — they receive the action — so the present passive 'are reviewed' is correct. 'Review' and 'are reviewing' are both active forms, which would wrongly make 'expense reports' the one doing the checking."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe contract ___ by both parties last Thursday.",
  choices: ["was signed", "signed", "has sign", "were signing"],
  answer: 0,
  explanation: "'The contract' is the entity being signed, not the one performing the signing, so the passive form is needed. 'Last Thursday' fixes the time in the simple past, giving the past simple passive 'was signed'."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe new pricing structure ___ to all clients next month.",
  choices: ["will be announced", "will announce", "announces", "is announcing"],
  answer: 0,
  explanation: "'The pricing structure' cannot announce anything itself; it is the thing being announced, so the future passive 'will be announced' is required. The active forms 'will announce' and 'is announcing' would need a human or company as the subject instead."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nAll expenditures over $10,000 ___ approved by the CFO.",
  choices: ["must be", "must", "have to", "are must"],
  answer: 0,
  explanation: "Modal passives follow the pattern 'modal + be + past participle', so 'must be approved' is correct. 'Have to' would need to be followed by 'be approved' as well to form a valid passive, so on its own it cannot combine directly with the past participle."
},
{
  type: "grammar", d: 3, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe recommendation ___ by an external auditor before it reaches the board.",
  choices: ["will have been reviewed", "will review", "will be reviewing", "has reviewed"],
  answer: 0,
  explanation: "The sentence describes a passive action ('the recommendation' is reviewed, not reviewing) that must be complete before a future point ('before it reaches the board'), which calls for the future perfect passive: 'will have been reviewed'. The active options wrongly make the recommendation the one carrying out the review."
},

/* 5. Modals of deduction */
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nIt's 9 a.m. and Tom's desk light is off. He ___ arrived yet.",
  choices: ["can't have", "must have", "should have", "might have"],
  answer: 0,
  explanation: "The dark desk light is strong evidence that Tom is not there, so the negative deduction 'can't have arrived' fits. 'Must have' would express near-certainty that he did arrive, which contradicts the evidence in the sentence."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe invoice total doesn't match the purchase order. Someone ___ a typing error.",
  choices: ["must have made", "can't have made", "should have made", "would have made"],
  answer: 0,
  explanation: "A mismatched total is strong evidence pointing to one clear explanation, so the confident positive deduction 'must have made' is correct. 'Can't have made' would express the opposite conclusion, that no error occurred, which contradicts the mismatch described."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe client hasn't replied in three days, even though the proposal was urgent. She ___ it.",
  choices: ["might not have received", "can't receive", "must not receive", "should not receive"],
  answer: 0,
  explanation: "The silence is only a possible explanation, not a certainty, so the tentative deduction 'might not have received' fits best. 'Can't receive' and 'must not receive' use the wrong verb form for a past deduction and imply a level of certainty the situation doesn't support."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe presentation went smoothly, but the projector kept freezing. They ___ the software beforehand.",
  choices: ["should have tested", "must have tested", "can't have tested", "might have tested"],
  answer: 0,
  explanation: "'Should have tested' expresses criticism of a past action that didn't happen but ought to have, which fits the freezing projector as evidence they skipped testing. 'Must have tested' would wrongly imply they did test, contradicting the problem described."
},
{
  type: "grammar", d: 3, cefr: "B2",
  prompt: "Choose the correct option:\n\nGiven that three major clients cancelled within the same month, the drop in revenue this quarter ___ a coincidence.",
  choices: ["can't be", "can't have been", "couldn't have been", "mustn't be"],
  answer: 0,
  explanation: "The revenue drop is a current, ongoing state ('this quarter'), so the present deduction 'can't be' is correct. 'Can't have been' and 'couldn't have been' both deduce about a completed past event, which doesn't match a situation still unfolding in the present quarter."
},

/* 6. Modals of obligation and permission */
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nNew hires ___ complete the compliance course within their first week; it's non-negotiable company policy.",
  choices: ["must", "should", "might", "could"],
  answer: 0,
  explanation: "'Must' expresses a strong, non-negotiable obligation, matching the phrase 'non-negotiable company policy'. 'Should' would only express a recommendation, which is weaker than what the sentence describes."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nIt's just a recommendation, not a rule, but employees ___ back up their files weekly.",
  choices: ["should", "must", "have to", "need"],
  answer: 0,
  explanation: "The sentence explicitly says this is 'a recommendation, not a rule', so the advice modal 'should' is correct. 'Must' and 'have to' both express obligation, which contradicts the sentence's own framing."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nYou ___ submit a physical copy — the online form is sufficient.",
  choices: ["don't need to", "mustn't", "shouldn't", "can't"],
  answer: 0,
  explanation: "'Don't need to' expresses the absence of an obligation: the physical copy is simply not required. 'Mustn't' would instead express prohibition, meaning submitting a physical copy is forbidden, which is not what the sentence means."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nVisitors ___ enter the server room without an escort, for security reasons.",
  choices: ["mustn't", "don't have to", "needn't", "shouldn't necessarily"],
  answer: 0,
  explanation: "'Mustn't' expresses prohibition, correctly matching a strict security rule. 'Don't have to' and 'needn't' both express the absence of obligation, which would wrongly suggest visitors are simply allowed to skip the escort if they choose."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nBecause the auditor requested additional evidence, the team ___ resubmit the entire report.",
  choices: ["had to", "must", "should have", "needed"],
  answer: 0,
  explanation: "'Must' has no past tense form, so past obligation is expressed with 'had to', which fits the completed past request described here. 'Needed' alone is incomplete without 'to' before the verb, making it grammatically wrong in this position."
},

/* 7. Gerund vs infinitive after verbs */
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe team decided to reschedule the call in order to avoid ___ with the board meeting.",
  choices: ["clashing", "clash", "to clash", "clashed"],
  answer: 0,
  explanation: "'Avoid' is always followed by a gerund, never a to-infinitive, so 'clashing' is correct. 'To clash' is the classic trap, since many similar verbs like 'want' or 'decide' do take a to-infinitive, but 'avoid' does not follow that pattern."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nManagement is considering ___ the customer service department to a new location.",
  choices: ["relocating", "to relocate", "relocate", "relocated"],
  answer: 0,
  explanation: "'Consider' takes a gerund when followed by a verb, so 'relocating' is correct. 'To relocate' is ungrammatical after 'consider', even though the to-infinitive feels natural after many other planning verbs like 'plan' or 'decide'."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nWe look forward to ___ from you regarding the partnership proposal.",
  choices: ["hearing", "hear", "heard", "to hear"],
  answer: 0,
  explanation: "In 'look forward to', the word 'to' functions as a preposition, not part of an infinitive, so it must be followed by a gerund: 'hearing'. 'To hear' is the frequent error, since 'to' is mistaken for the infinitive marker rather than the fixed preposition of the phrase."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe regulator insisted on ___ the entire supply chain before granting approval.",
  choices: ["auditing", "audit", "to audit", "audited"],
  answer: 0,
  explanation: "'Insist on' is followed by a gerund because 'on' is a preposition here, so 'auditing' is correct. 'To audit' incorrectly treats 'on' as if it were absent, applying the infinitive pattern used after verbs like 'insist that' instead."
},
{
  type: "grammar", d: 3, cefr: "B2",
  prompt: "Choose the correct option:\n\nDespite the tight schedule, the analyst finally got around to ___ the reconciliation report.",
  choices: ["finishing", "finish", "to finish", "having finished"],
  answer: 0,
  explanation: "'Get around to' is a fixed phrasal expression followed by a gerund, just like 'look forward to', so 'finishing' is correct. 'To finish' is the common trap here, because the final 'to' looks like an infinitive marker when it is actually a preposition ending the phrase."
},

/* 8. Present perfect vs past simple */
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nRevenue ___ steadily since the beginning of Q1.",
  choices: ["has increased", "increased", "was increasing", "increases"],
  answer: 0,
  explanation: "'Since the beginning of Q1' marks a point in the past connected to the present, which requires the present perfect 'has increased'. The simple past 'increased' would instead suggest the increase is a finished event with no continuing relevance."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe company ___ its headquarters to Austin last year.",
  choices: ["relocated", "has relocated", "was relocating", "relocates"],
  answer: 0,
  explanation: "'Last year' is a finished, specific time in the past, which requires the simple past 'relocated'. The present perfect 'has relocated' cannot be used with a definite past time expression like 'last year'."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nSo far this year, the sales team ___ its target twice.",
  choices: ["has exceeded", "exceeded", "was exceeding", "exceeds"],
  answer: 0,
  explanation: "'So far this year' describes an unfinished time period that includes the present moment, which calls for the present perfect 'has exceeded'. The simple past 'exceeded' would only be correct if the year were already over."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nWe ___ the vendor contract in 2023, before the new procurement policy came into effect.",
  choices: ["signed", "have signed", "were signing", "sign"],
  answer: 0,
  explanation: "'In 2023' is a specific, completed past time, which requires the simple past 'signed'. The present perfect 'have signed' would be inappropriate here because it cannot combine with a definite past date."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe board ___ three emergency meetings this quarter, and the quarter isn't over yet.",
  choices: ["has held", "held", "was holding", "holds"],
  answer: 0,
  explanation: "'This quarter' is an unfinished time period, confirmed by 'the quarter isn't over yet', so the present perfect 'has held' is correct. The simple past 'held' would only fit once the quarter had already ended."
},

/* 9. Perfect continuous */
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nBy the time the merger closes, the two teams ___ together for over a year.",
  choices: ["will have been working", "will be working", "have been working", "had worked"],
  answer: 0,
  explanation: "The sentence describes a duration that will continue up until a future reference point ('by the time the merger closes'), which requires the future perfect continuous 'will have been working'. 'Will be working' only describes an action in progress at that future point, without emphasizing the ongoing duration leading up to it."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe two firms ___ the terms for six months before the deal finally closed.",
  choices: ["had been negotiating", "have been negotiating", "were negotiating", "negotiated"],
  answer: 0,
  explanation: "The negotiating happened over a duration leading up to another past event ('before the deal finally closed'), which is exactly what the past perfect continuous expresses. 'Were negotiating' describes an action in progress at a past moment but doesn't capture the six-month duration building up to the deal closing."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe IT department ___ on the migration all week, and they still haven't finished.",
  choices: ["has been working", "had been working", "worked", "was working"],
  answer: 0,
  explanation: "'All week' combined with 'still haven't finished' describes an unfinished action continuing up to now, which requires the present perfect continuous 'has been working'. 'Had been working' would wrongly shift the whole sentence into the past, which contradicts 'haven't finished' in the present."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nBefore the acquisition was finalized, the lawyers ___ the contract for nearly a month.",
  choices: ["had been reviewing", "have been reviewing", "were reviewing", "reviewed"],
  answer: 0,
  explanation: "The reviewing was a duration leading up to another past event ('before the acquisition was finalized'), which calls for the past perfect continuous 'had been reviewing'. 'Were reviewing' only marks an action in progress at a point in time, without conveying the month-long buildup."
},
{
  type: "grammar", d: 3, cefr: "C1",
  prompt: "Choose the correct option:\n\nThe consultants ___ the process for weeks, which is why they were able to identify the bottleneck so quickly.",
  choices: ["had been observing", "have been observing", "were observing", "have observed"],
  answer: 0,
  explanation: "Because the result clause 'were able to identify' is in the simple past, the observing that led up to it must also be anchored in the past, requiring the past perfect continuous 'had been observing'. 'Have been observing' incorrectly uses a present perfect form inside a narrative that is entirely set in the past."
},

/* 10. Relative clauses */
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe analyst ___ prepared the forecast has since left the firm.",
  choices: ["who", "which", "whose", "where"],
  answer: 0,
  explanation: "'Who' introduces a relative clause that refers back to a person, here 'the analyst'. 'Which' would be used for things, and 'whose' would signal possession rather than acting as the subject of 'prepared'."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe client ___ contract was terminated last month has filed a formal complaint.",
  choices: ["whose", "who", "which", "that"],
  answer: 0,
  explanation: "'Whose' shows possession, linking 'the client' to 'contract' as in 'the client's contract'. 'Who' would need to be followed directly by a verb, not a possessed noun, so it cannot fit this position."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe warehouse ___ the inventory is stored will be audited next week.",
  choices: ["where", "which", "that", "whose"],
  answer: 0,
  explanation: "'Where' introduces a relative clause referring to a place, and it functions like 'in which', matching 'the inventory is stored' there. 'Which' or 'that' would instead require a preposition before them, as in 'in which the inventory is stored'."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe proposal, ___ was submitted late, was still accepted by the committee.",
  choices: ["which", "that", "who", "whose"],
  answer: 0,
  explanation: "This is a non-defining relative clause, marked off by commas, and only 'which' can be used in this position for things — 'that' is restricted to defining clauses without commas. 'Who' would be for people, not a document like 'the proposal'."
},
{
  type: "grammar", d: 3, cefr: "C1",
  prompt: "Choose the correct option:\n\nThe supplier ___ we have worked with for over a decade has just announced its retirement from the industry.",
  choices: ["whom", "who", "which", "whose"],
  answer: 0,
  explanation: "'Whom' is the grammatically correct object form, since 'the supplier' is the object of the preposition-final clause 'worked with'; this prescriptive distinction between subject 'who' and object 'whom' is tested at the higher levels even though 'who' is common in everyday speech. 'Which' is reserved for things, not people, and 'whose' would signal possession rather than an object relationship."
},

/* 11. Causative have/get something done */
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nWe ___ the servers upgraded by an external contractor last quarter.",
  choices: ["had", "did", "made", "let"],
  answer: 0,
  explanation: "The causative structure 'have something done' shows that someone else performed the action for the subject, which fits an external contractor doing the upgrade. 'Made' and 'let' don't combine with a past participle in this way to express arranging a service."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe company is planning to ___ the annual accounts audited by an independent firm.",
  choices: ["have", "do", "make", "let"],
  answer: 0,
  explanation: "'Have something done' is the standard causative pattern for arranging for someone else to carry out a task, matching 'audited by an independent firm'. 'Make' would require a different structure entirely, such as 'make the firm audit the accounts'."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThey ___ the office repainted before the client visit next week.",
  choices: ["are having", "are doing", "are making", "are letting"],
  answer: 0,
  explanation: "'Have something done' expresses arranging for a service to be carried out by someone else, so 'are having' correctly combines with 'repainted'. 'Are letting' would instead imply granting permission, not arranging a paid service."
},
{
  type: "grammar", d: 3, cefr: "B2",
  prompt: "Choose the correct option:\n\nRather than fixing the bug themselves, the developers ___ it fixed by the vendor's support team under warranty.",
  choices: ["got", "made", "let", "did"],
  answer: 0,
  explanation: "'Get something done' is an alternative causative structure to 'have something done', often used in business contexts to describe arranging a service, so 'got' fits with 'fixed'. 'Made' would need a different pattern, such as 'made the team fix it', without the past participle 'fixed'."
},
{
  type: "grammar", d: 3, cefr: "C1",
  prompt: "Choose the correct option:\n\nAll contractors ___ their credentials verified before accessing the site, according to the new safety policy.",
  choices: ["must have", "must having", "should has", "would having"],
  answer: 0,
  explanation: "This combines the causative 'have something done' with the modal 'must' for obligation: 'must have their credentials verified' means someone else does the verifying. A modal is always followed by a bare infinitive, never a gerund or a conjugated verb, which rules out the other three options."
},

/* 12. Time clauses and sequence */
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nBy the time the invoice arrives, the payment window ___ already closed.",
  choices: ["will have", "will", "would have", "has"],
  answer: 0,
  explanation: "'By the time' with a future event signals the future perfect for an action completed before that point, so 'will have already closed' is correct. 'Has' would incorrectly anchor the closing in the present rather than a projected future point."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nAs soon as the client ___ the contract, we can begin onboarding.",
  choices: ["signs", "will sign", "signed", "is signing"],
  answer: 0,
  explanation: "Time clauses introduced by expressions like 'as soon as' use the present simple to refer to a future event, so 'signs' is correct. 'Will sign' is the common trap, since the main clause already carries the future meaning, so the time clause itself stays in the present."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nOnce the budget ___ approved, the project can move into execution.",
  choices: ["is", "will be", "was", "has been"],
  answer: 0,
  explanation: "Like other future time clauses, 'once' uses the present tense to refer to a future event, so the present passive 'is approved' is correct here. 'Will be' incorrectly duplicates the future meaning that the main clause 'can move into execution' already carries."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe team won't launch the campaign until the legal department ___ its review.",
  choices: ["completes", "will complete", "completed", "is completing"],
  answer: 0,
  explanation: "'Until' introducing a future time clause takes the present simple, so 'completes' is correct even though the overall meaning is future. 'Will complete' wrongly places the future marker inside the time clause itself, which English grammar does not allow."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nBefore the auditors ___ next week, we need to organize all the receipts.",
  choices: ["arrive", "will arrive", "arrived", "are arriving"],
  answer: 0,
  explanation: "'Before' introducing a future time clause uses the present simple, so 'arrive' is correct despite referring to next week. 'Arrived' would wrongly place the event in the past, contradicting 'next week'."
},

/* 13. Comparatives and superlatives in business metrics */
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThis quarter's revenue growth was ___ than analysts had forecasted.",
  choices: ["higher", "more high", "highest", "the highest"],
  answer: 0,
  explanation: "'Higher' is the correct one-syllable comparative form used with 'than' to compare two figures. 'More high' incorrectly doubles the comparative, since short adjectives like 'high' take '-er' rather than 'more'."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nOf the three regional offices, the Chicago branch has ___ headcount.",
  choices: ["the largest", "larger", "the larger", "more large"],
  answer: 0,
  explanation: "Comparing three or more items requires the superlative form, so 'the largest' is correct. 'The larger' would only be appropriate when comparing exactly two offices, not three."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nOur market share is ___ our closest competitor's, despite spending less on advertising.",
  choices: ["larger than", "larger as", "as large than", "more large than"],
  answer: 0,
  explanation: "The comparative structure 'larger than' correctly pairs the comparative adjective with 'than' to introduce the second element being compared. 'As large than' incorrectly mixes the equality pattern 'as … as' with the comparative word 'than'."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe new product line performed far ___ than the previous one during its launch quarter.",
  choices: ["better", "more better", "best", "the best"],
  answer: 0,
  explanation: "'Better' is the correct irregular comparative form of 'good', used here with 'than' to compare two product lines. 'More better' incorrectly doubles the comparative, which irregular adjectives like 'good' never take."
},
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nAmong all the KPIs tracked this year, customer retention showed ___ improvement.",
  choices: ["the most significant", "more significant", "most significant than", "significanter"],
  answer: 0,
  explanation: "'Among all the KPIs' signals a comparison across more than two items, which requires the superlative 'the most significant'. 'More significant' is only a comparative form, appropriate for comparing just two KPIs, not the full set."
},

/* 14. Participle clauses */
{
  type: "grammar", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\n___ the quarterly figures, the CFO scheduled a meeting with the board.",
  choices: ["Having reviewed", "Have reviewed", "Reviewed", "Reviewing had"],
  answer: 0,
  explanation: "'Having reviewed' is a perfect participle clause showing that the reviewing was completed before the main action of scheduling the meeting. 'Reviewed' alone would need a passive subject — the figures themselves — but here it's the CFO who actively did the reviewing."
},
{
  type: "grammar", d: 3, cefr: "C1",
  prompt: "Choose the correct option:\n\n___ received no response after three follow-up emails, the account manager escalated the issue to her director.",
  choices: ["Having received", "Receiving", "Have received", "Received"],
  answer: 0,
  explanation: "'Having received' is the active perfect participle, correctly showing that the lack of response happened before the escalation. 'Received' alone would carry a passive meaning, implying something was done to the account manager rather than describing what she experienced."
},
{
  type: "grammar", d: 3, cefr: "C1",
  prompt: "Choose the correct option:\n\n___ received formal approval from compliance, the team decided not to proceed with the launch.",
  choices: ["Not having", "Having not", "Not have", "Never having had"],
  answer: 0,
  explanation: "In negative participle clauses, 'not' is placed before 'having', so 'Not having received' is the correct order. 'Having not received' reverses this word order, a very common error among learners transferring word order from other structures."
},
{
  type: "grammar", d: 3, cefr: "C1",
  prompt: "Choose the correct option:\n\n___ by a third-party auditor, the financial statements were deemed fully compliant.",
  choices: ["Having been reviewed", "Having reviewed", "Reviewing", "Reviewed of"],
  answer: 0,
  explanation: "The passive perfect participle 'Having been reviewed' is needed because the financial statements were the ones reviewed, not the ones doing the reviewing. 'Having reviewed' would wrongly imply the statements actively reviewed something themselves."
},
{
  type: "grammar", d: 3, cefr: "B2",
  prompt: "Choose the correct option:\n\n___ the risks associated with the new market, the executive team decided to postpone the expansion by two quarters.",
  choices: ["Having assessed", "Assessed of", "Having been assessed", "Assess"],
  answer: 0,
  explanation: "'Having assessed' is the active perfect participle, correct because the executive team performed the assessing before making its decision. 'Having been assessed' would incorrectly imply that the executive team itself was the one being assessed."
},

/* ---------- IDIOM ---------- */

{
  type: "idiom", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nOvertime costs account ___ nearly 15 percent of total departmental spending last quarter.",
  choices: ["for", "to", "on", "of"],
  answer: 0,
  explanation: "'Account for' means to constitute or make up a portion of something, which fits describing overtime as part of total spending. The other prepositions do not form a recognized collocation with 'account' in this sense."
},
{
  type: "idiom", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe final delivery date will depend ___ how quickly customs clears the shipment.",
  choices: ["on", "of", "for", "from"],
  answer: 0,
  explanation: "'Depend on' is the fixed collocation used to show that one thing is determined by another. 'Depend of' is a direct translation trap from Spanish 'depender de' that does not exist in English."
},
{
  type: "idiom", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nAll contractors must comply ___ the updated safety regulations before resuming work on site.",
  choices: ["with", "to", "on", "for"],
  answer: 0,
  explanation: "'Comply with' is the fixed collocation for following a rule or requirement. 'Comply to' is a common error, likely influenced by the related but distinct verb 'adhere to', which does take 'to'."
},
{
  type: "idiom", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe firm decided to invest heavily ___ automation to cut long-term labor costs.",
  choices: ["in", "on", "for", "with"],
  answer: 0,
  explanation: "'Invest in' is the standard collocation for putting money or resources into something. 'Invest on' is a frequent error, often confused with 'spend on', which does take that preposition."
},
{
  type: "idiom", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nSmaller suppliers often rely ___ a single major client for the bulk of their revenue.",
  choices: ["on", "in", "for", "at"],
  answer: 0,
  explanation: "'Rely on' is the fixed collocation meaning to depend on someone or something. 'Rely for' does not exist as a standard pattern in English."
},
{
  type: "idiom", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nEmployees who wish to apply ___ the internal transfer must submit their request by Friday.",
  choices: ["for", "to", "on", "at"],
  answer: 0,
  explanation: "'Apply for' is the fixed collocation used when requesting a position, transfer, or benefit. 'Apply to' exists but is used for the organization or place being applied to, as in 'apply to a company', not the thing being requested."
},
{
  type: "idiom", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe customer support team is trained to deal ___ complaints within 24 hours.",
  choices: ["with", "to", "on", "for"],
  answer: 0,
  explanation: "'Deal with' is the fixed collocation meaning to handle or manage an issue. The other prepositions do not form a recognized collocation with 'deal' in this sense."
},
{
  type: "idiom", d: 3, cefr: "C1",
  prompt: "Choose the correct option:\n\nDuring the quiet period before the earnings call, executives must refrain ___ discussing financial results publicly.",
  choices: ["from", "of", "with", "to"],
  answer: 0,
  explanation: "'Refrain from' is the fixed collocation meaning to deliberately avoid doing something, followed by a gerund. The other prepositions do not combine with 'refrain' in standard English."
},
{
  type: "idiom", d: 3, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe delayed shipment resulted ___ a significant loss of customer trust.",
  choices: ["in", "from", "with", "to"],
  answer: 0,
  explanation: "'Result in' introduces the outcome or consequence of an event, which fits the loss of trust caused by the delay. 'Result from' reverses the direction of causation, introducing the cause rather than the effect, and would need the sentence rewritten with the loss as the subject."
},
{
  type: "idiom", d: 3, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe due diligence team consists ___ two lawyers, an accountant, and an industry specialist.",
  choices: ["of", "in", "with", "from"],
  answer: 0,
  explanation: "'Consist of' is the fixed collocation used to list the parts that make up a whole. The other prepositions do not combine with 'consist' in this sense in standard English."
},
{
  type: "idiom", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe operations manager is directly responsible ___ inventory accuracy across all warehouses.",
  choices: ["for", "of", "to", "with"],
  answer: 0,
  explanation: "'Responsible for' is the standard collocation when naming a task or area someone is accountable for. 'Responsible to' exists but describes being accountable to a person or body, as in 'responsible to the board', not a task."
},
{
  type: "idiom", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nNot all employees are fully aware ___ the new expense-reporting policy.",
  choices: ["of", "about", "with", "for"],
  answer: 0,
  explanation: "'Aware of' is the fixed collocation used to describe knowledge of a fact or situation. 'Aware about' is a common error, likely confused with the verb form 'know about', which does take that preposition."
},
{
  type: "idiom", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nNew hires are expected to become familiar ___ the compliance handbook within their first month.",
  choices: ["with", "of", "to", "in"],
  answer: 0,
  explanation: "'Familiar with' is the fixed collocation describing knowledge or experience of something. 'Familiar to' exists but reverses the relationship, meaning something is known by someone, as in 'the process is familiar to experienced staff'."
},
{
  type: "idiom", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe client expressed that she was not fully satisfied ___ the level of communication during the project.",
  choices: ["with", "of", "by", "for"],
  answer: 0,
  explanation: "'Satisfied with' is the fixed collocation used to describe contentment regarding something specific. The other prepositions do not form a standard collocation with 'satisfied' in this sense."
},
{
  type: "idiom", d: 3, cefr: "C1",
  prompt: "Choose the correct option:\n\nThe updated software is capable ___ processing ten times the current transaction volume.",
  choices: ["of", "to", "for", "in"],
  answer: 0,
  explanation: "'Capable of' is the fixed collocation, always followed by a gerund rather than a to-infinitive. 'Capable to' is a frequent error, likely influenced by adjectives like 'able to', which follow a different pattern."
},
{
  type: "idiom", d: 3, cefr: "C1",
  prompt: "Choose the correct option:\n\nSenior leadership remains committed ___ reducing the company's carbon footprint by 2030.",
  choices: ["to", "for", "with", "toward"],
  answer: 0,
  explanation: "'Committed to' is the fixed collocation, and the 'to' here functions as a preposition, which is why it takes the gerund 'reducing' rather than a bare infinitive. This is a frequent source of confusion, since 'to' is often mistaken for an infinitive marker in this position."
},
{
  type: "idiom", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe board decided to ___ the acquisition offer, citing an unrealistic valuation.",
  choices: ["turn down", "turn over", "turn out", "turn in"],
  answer: 0,
  explanation: "'Turn down' means to reject an offer or proposal, which fits the board rejecting the acquisition. 'Turn over' means to hand something to someone else, which doesn't match the meaning of rejecting an offer."
},
{
  type: "idiom", d: 1, cefr: "B2",
  prompt: "Choose the correct option:\n\nAn independent firm was hired to ___ a full review of the internal controls.",
  choices: ["carry out", "carry on", "carry over", "carry off"],
  answer: 0,
  explanation: "'Carry out' means to perform or execute a task, which fits conducting a review. 'Carry on' means to continue an activity already in progress, which doesn't match hiring a firm to start a new review."
},
{
  type: "idiom", d: 2, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe account manager promised to ___ the client's complaint by the end of the week.",
  choices: ["follow up on", "follow through on", "follow up to", "follow out"],
  answer: 0,
  explanation: "'Follow up on' means to check on the progress or status of something, which fits keeping track of an open complaint. 'Follow through on' means to complete a commitment already made, a close but distinct meaning that doesn't fit checking on a complaint's status."
},
{
  type: "idiom", d: 3, cefr: "C1",
  prompt: "Choose the correct option:\n\nGiven the early positive results, management decided to ___ the product launch by two months.",
  choices: ["bring forward", "bring about", "bring on", "bring up"],
  answer: 0,
  explanation: "'Bring forward' means to move an event to an earlier date, which fits accelerating the launch. 'Bring about' means to cause something to happen, and 'bring up' means to mention a topic, neither of which relates to rescheduling a date."
},
{
  type: "idiom", d: 3, cefr: "B2",
  prompt: "Choose the correct option:\n\nTo protect margins during the downturn, the company had to ___ discretionary spending.",
  choices: ["cut back on", "cut down to", "cut off", "cut out"],
  answer: 0,
  explanation: "'Cut back on' means to reduce something moderately, which fits trimming discretionary spending without eliminating it. 'Cut off' means to stop something abruptly and completely, and 'cut out' means to eliminate it entirely, both stronger than what a margin-protection measure typically implies."
},
{
  type: "idiom", d: 3, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe launch was ___ until next quarter after the testing revealed critical bugs.",
  choices: ["put off", "put down", "put across", "put over"],
  answer: 0,
  explanation: "'Put off' means to postpone something to a later time, which fits delaying the launch. 'Put down' means to write something down or to suppress it, neither of which relates to rescheduling."
},
{
  type: "idiom", d: 3, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe company plans to ___ the new CRM system across all regional offices by Q3.",
  choices: ["roll out", "roll over", "roll up", "roll back"],
  answer: 0,
  explanation: "'Roll out' means to launch or introduce something new, typically in stages, which fits deploying a system across offices. 'Roll back' means to reverse or undo a previous change, the opposite of introducing something new."
},
{
  type: "idiom", d: 3, cefr: "B2",
  prompt: "Choose the correct option:\n\nThe team needed to ___ a workaround before the client demo the next morning.",
  choices: ["come up with", "come across with", "come through with", "come along with"],
  answer: 0,
  explanation: "'Come up with' means to produce an idea or solution, which fits devising a workaround under time pressure. 'Come through with' means to deliver on something already promised, a related but distinct meaning that doesn't fit inventing a new solution."
},

/* ---------- READING (True/False) ----------
   Added 15 ago 2026 (Paso 3): the real test's reading section uses two formats — "which is
   best supported" (already covered, 22 questions) and "True or False" (missing entirely
   until now, confirmed from a recording of the actual test). See guide-en.js/guide-es.js's
   'reading' topic for the technique, updated in the same pass. Most False statements here
   are compound claims where only one clause is wrong — the specific trap the guide update
   calls out — rather than being flatly contradicted, since that is the harder and more
   realistic version of the trap. */
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe consulting firm's new travel policy caps business-class flights to trips longer than six hours and requires manager approval for any single expense over $500. Employees have generally welcomed the change, though a few partners have noted it adds friction to last-minute client trips.\n\nTrue or false: Under the new policy, a five-hour flight would not qualify for business class without a separate exception.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The policy caps business class to trips 'longer than six hours', so a five-hour flight falls below that threshold and would not qualify on its own. Nothing in the passage suggests exceptions are unavailable, but the flight itself does not meet the stated rule."
},
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nA mid-sized retailer reduced its supplier base from twelve to four over the past two years, aiming to negotiate better volume discounts. The strategy lowered unit costs by 9%, but a factory fire at one of the four remaining suppliers halted production of a key product line for six weeks last spring.\n\nTrue or false: Consolidating suppliers reduced the retailer's costs and eliminated its exposure to supply disruptions.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The cost reduction is confirmed (9% lower unit costs), but the passage directly contradicts the second half of the claim: a single factory fire halted production for six weeks, showing the retailer's exposure to disruption actually increased, not disappeared. Because one clause of the statement is false, the whole statement is False."
},
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nAfter switching to a four-day work week on a trial basis, the firm's client-facing team reported no change in billable hours, since staff simply compressed the same workload into fewer days. Employee satisfaction scores rose by 14 points, but two clients complained about slower response times on the team's day off.\n\nTrue or false: The trial changed how much work got done but had no effect on client relationships.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The passage states billable hours were unchanged, meaning the amount of work done stayed the same rather than changing — and it explicitly reports two client complaints about slower responses, which is an effect on client relationships. Both halves of the statement misread the passage, so it is False."
},
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe firm's new expense-reporting software flags any submission missing a receipt image, but it does not verify that the receipt matches the claimed amount. Finance staff still manually cross-check a random 10% sample each month.\n\nTrue or false: The software can catch a missing receipt but not a receipt that has been altered to show a higher amount.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The passage says the software flags missing receipts but 'does not verify that the receipt matches the claimed amount', which is exactly the gap an altered receipt would exploit. The manual 10% sample is a separate, partial safeguard, not something the software itself does."
},
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe procurement team negotiated a three-year contract with its main logistics provider, locking in current rates despite forecasts of rising fuel costs. In exchange, the provider required a minimum annual shipping volume, with penalties if the firm ships less.\n\nTrue or false: The firm is protected from rising fuel costs but has taken on a new risk if its shipping volume drops.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The passage confirms both parts directly: rates are locked in against 'forecasts of rising fuel costs', and the firm faces 'penalties if the firm ships less' than the minimum volume, which is a new risk it did not have before. Both clauses are supported, so the statement is True."
},
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nA regional bank rolled out a new mobile app that reduced average teller-line wait times by 40%. Branch visits fell overall, but visits by customers over 65 increased slightly, which the bank attributes to that group needing more in-person help adjusting to the new app.\n\nTrue or false: The app caused branch visits to fall across every age group.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The passage explicitly states that visits by customers over 65 'increased slightly', which directly contradicts a claim of a fall 'across every age group'. The overall trend was down, but the statement's use of 'every' makes it False."
},
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe HR team introduced a referral bonus of $2,000 for successful hires in engineering roles, paid out after the new hire completes six months. Within a year, referred candidates made up 35% of engineering hires, up from 12% before the programme, and their six-month retention rate was ten points higher than non-referred hires.\n\nTrue or false: Referred engineering hires were both more common and more likely to stay past six months than non-referred hires after the programme launched.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "Both clauses are directly supported: referred hires rose to 35% of engineering hires (more common), and their retention rate was 'ten points higher than non-referred hires' (more likely to stay). Since both parts hold up against the passage, the statement is True."
},

{
  type: "reading", d: 2, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nA consultancy's benchmarking study compared client call-center costs against an 'industry average', a figure drawn from firms of varying size and geography that self-reported their own numbers. Several clients used the comparison to justify layoffs, aiming to bring their costs down to the reported average.\n\nTrue or false: The benchmark figure was independently verified and directly comparable across the firms in the study.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The passage describes the figure as self-reported by firms 'of varying size and geography', which means it was neither independently verified nor drawn from directly comparable operations. The statement claims the opposite of both conditions the passage actually describes, so it is False."
},
{
  type: "reading", d: 2, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nA manufacturer's exit interviews showed that 'compensation' was the most cited reason for leaving, mentioned by 60% of departing employees. A separate anonymous survey of the entire workforce, however, found that only 22% ranked pay as their top concern, with 'lack of advancement' cited far more often.\n\nTrue or false: The exit interview data and the anonymous survey agreed on the primary driver of employee departures.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The two sources point to different top concerns: exit interviews cite compensation most often, while the anonymous survey found 'lack of advancement' cited far more than pay. Because the passage highlights this discrepancy rather than an agreement, the statement is False."
},
{
  type: "reading", d: 2, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nA software vendor priced its enterprise tier 40% higher than its mid-tier plan but bundled in a dedicated account manager and priority support. Adoption of the enterprise tier exceeded internal forecasts, though churn data later showed enterprise clients cancelled at roughly the same rate as mid-tier clients.\n\nTrue or false: The added support in the enterprise tier reduced client cancellations compared to the mid-tier plan.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The passage states enterprise clients 'cancelled at roughly the same rate as mid-tier clients', meaning the added support did not produce a measurably lower cancellation rate. Higher adoption than forecast is a separate fact and does not itself support a claim about reduced churn."
},
{
  type: "reading", d: 2, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nAn accounting firm automated its lowest-level reconciliation tasks, reassigning the staff who previously did that work to client-facing analysis roles instead of making them redundant. Junior staff turnover fell by half in the following year, and the firm reported no reduction in headcount.\n\nTrue or false: Automating reconciliation tasks led to job losses but improved staff retention among those who remained.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The passage explicitly says staff were reassigned 'instead of making them redundant' and that the firm 'reported no reduction in headcount', which directly contradicts the claim of job losses. The retention improvement is real, but the first half of the statement is false, so the whole statement is False."
},
{
  type: "reading", d: 2, cefr: "C1",
  prompt: "Read the text and answer the question.\n\nA private equity firm's due diligence report flagged that the target company's revenue had grown 18% year-on-year, but nearly all of that growth came from a single client whose contract was up for renewal within the next two quarters. The report characterized the growth as 'encouraging but concentrated'.\n\nTrue or false: The due diligence report treated the revenue growth as unambiguously positive news for the deal.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The report's own characterization, 'encouraging but concentrated', signals a qualified view, not an unambiguous one, and the passage stresses that the growth depends on a single client whose contract was about to come up for renewal — a clear risk flag. Describing the report's stance as unambiguously positive misreads that qualification, so the statement is False."
},
{
  type: "reading", d: 2, cefr: "C1",
  prompt: "Read the text and answer the question.\n\nA logistics company's new routing algorithm cut average delivery times by 15% in simulation testing. When rolled out to actual routes, drivers reported the algorithm frequently ignored real-world constraints like loading-dock hours, and the company paused the rollout after three weeks to retrain the model on operational data rather than simulated data alone.\n\nTrue or false: The algorithm's simulated performance translated directly into an equivalent real-world improvement.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The passage describes drivers reporting the algorithm 'frequently ignored real-world constraints' and the company pausing the rollout to retrain it, both of which indicate the simulated gains did not hold up unchanged in practice. The statement's claim of a direct, equivalent translation is contradicted by the described rollout problems, so it is False."
},
{
  type: "reading", d: 2, cefr: "C1",
  prompt: "Read the text and answer the question.\n\nA retailer's loyalty programme offered points redeemable for discounts, and enrolled members spent 22% more per visit than non-members on average. Internal analysis later found that customers who were already frequent, high-spending shoppers were the most likely to enroll in the first place, making it unclear how much of the spending gap the programme itself actually caused.\n\nTrue or false: The internal analysis confirmed that the loyalty programme caused members to spend 22% more per visit.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The passage explicitly says it became 'unclear how much of the spending gap the programme itself actually caused', because high-spending shoppers were more likely to enroll regardless of the programme. The 22% figure is a real correlation reported earlier, but the analysis does not confirm it as an effect the programme caused, so the statement is False."
},
{
  type: "reading", d: 3, cefr: "C1",
  prompt: "Read the text and answer the question.\n\nA hospital system's new triage software reduced average emergency-room wait times by 12% overall. A subgroup analysis found the improvement was concentrated among patients arriving during off-peak hours; during peak hours, when the system was under the most strain, wait times were statistically unchanged. Administrators nonetheless cited the 12% figure in a press release announcing the software's success.\n\nTrue or false: The press release's headline figure accurately represented the software's impact during the hospital's busiest hours.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The subgroup analysis shows wait times were 'statistically unchanged' during peak hours, meaning the overall 12% figure — driven by off-peak improvements — does not represent what happened during the busiest hours at all. Citing the aggregate figure without that qualification is precisely the kind of overreach the passage is pointing to, so the statement is False."
},
{
  type: "reading", d: 3, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nA telecom operator's customer churn fell from 18% to 14% annually after it introduced a two-year contract discount. Over the same period, the industry-wide average churn rate also fell, from 20% to 17%, as a broader economic slowdown reduced switching across all providers.\n\nTrue or false: The operator's churn improvement shows its discount programme outperformed the industry-wide trend.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The operator's churn fell by 4 points (18% to 14%) while the industry average fell by only 3 points (20% to 17%) over the same period, so the operator's improvement was larger than the broader trend even after accounting for the industry-wide slowdown. Both figures are stated directly in the passage and support the comparison, so the statement is True."
},

/* The 16 questions above skewed heavily False (11 False / 5 True) — a pattern that would
   teach guessing rather than reading. These 6 add True statements, including compound ones
   where BOTH clauses hold, to balance the set closer to even. */
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe procurement team renegotiated its office-supplies contract, securing a 12% price reduction in exchange for a two-year commitment instead of the previous year-to-year terms. The supplier also agreed to guarantee delivery within 48 hours for rush orders.\n\nTrue or false: The new contract lowered prices but required a longer commitment than before.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "Both parts of the statement are confirmed directly: the passage states a '12% price reduction' and that it came 'in exchange for a two-year commitment instead of the previous year-to-year terms', which is longer than before. Since both clauses hold up, the statement is True."
},
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nA regional airline's new loyalty tier requires 40 flights per year to qualify, up from 25 the previous year. Membership in the top tier fell by nearly a third after the change, though the airline reports that spending per top-tier member rose slightly.\n\nTrue or false: Fewer members qualified for the top tier after the requirement was raised.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The passage directly states that 'membership in the top tier fell by nearly a third after the change', which confirms fewer members qualified once the threshold moved from 25 to 40 flights. This is a single, directly stated claim with no unsupported second clause."
},
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nAfter a data-entry error caused several duplicate invoices to be sent to the same client, the finance team introduced a mandatory second approval step for any invoice over $5,000. No duplicate invoices have been reported since the change was introduced six months ago.\n\nTrue or false: The new approval step was introduced in response to a duplicate-invoice error.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The passage states the team 'introduced a mandatory second approval step' directly after describing the duplicate-invoice error that caused it, making the cause-and-effect relationship explicit. This is a single supported claim, so the statement is True."
},
{
  type: "reading", d: 2, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nA consumer goods company shifted 30% of its advertising budget from television to social media over two years. Brand awareness among 18-34 year-olds rose by 9 points over the same period, while awareness among consumers over 50 stayed roughly flat, a group the company had not specifically targeted with the new campaigns.\n\nTrue or false: The budget shift coincided with higher brand awareness among younger consumers, while awareness among an older, non-targeted group was largely unchanged.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "Both clauses are directly supported: awareness 'among 18-34 year-olds rose by 9 points', and awareness 'among consumers over 50 stayed roughly flat', a group the passage confirms was not specifically targeted. Since both parts of this compound claim match the passage, the statement is True."
},
{
  type: "reading", d: 2, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nA law firm piloted an AI tool to draft first versions of standard contracts, which associates then reviewed and revised. Average drafting time fell by 35%, and a post-pilot survey found associates spent the time saved on higher-value client advisory work rather than reporting reduced workload.\n\nTrue or false: The pilot reduced drafting time, and associates redirected that time toward advisory work instead of simply working less.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "Both halves of the statement are confirmed: drafting time 'fell by 35%', and the survey found associates 'spent the time saved on higher-value client advisory work rather than reporting reduced workload'. With both clauses matching the passage precisely, the statement is True."
},
{
  type: "reading", d: 2, cefr: "C1",
  prompt: "Read the text and answer the question.\n\nA manufacturer's new predictive-maintenance system flagged equipment likely to fail up to two weeks in advance, based on sensor data. Unplanned downtime fell by 27% in the first year, though the maintenance team noted the system's early flags were only actionable at three of the company's five plants, since the other two lacked the sensor infrastructure to generate the needed data.\n\nTrue or false: The system reduced unplanned downtime overall, even though its predictive flags were only usable at a subset of the company's plants.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The passage supports both parts: overall 'unplanned downtime fell by 27%', and the flags 'were only actionable at three of the company's five plants' due to missing sensor infrastructure elsewhere. Both clauses of this compound claim are directly confirmed, so the statement is True."
}

];
window.QUESTION_BANK.eng = window.QUESTION_BANK.eng.concat(Q);
})();
