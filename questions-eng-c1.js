/* English C1 — advanced over-training bank (88 questions).

   Deliberately ABOVE the level of the real test. The Bain/TestGorilla English module is
   CEFR B1/B2; everything here is C1. It lives in its own category (QUESTION_BANK.engC1)
   rather than appending to QUESTION_BANK.eng, for one reason: `engC1` is excluded from
   SECTION_ORDER, so these items never enter the full mock or the readiness score. Letting
   above-level questions into either would make both understate how ready he actually is.

   Types are C1-specific (`grammar-c1`, `vocabulary-c1`, `sentence-c1`, `idiom-c1`,
   `reading-c1`) and each has its own topic in guide-en.js and guide-es.js, so the
   "Technique" button works from every explanation.

   Options are text, so they are shuffled at runtime; the stored `answer` index is only the
   position in this file. */
window.QUESTION_BANK = window.QUESTION_BANK || {};
window.QUESTION_BANK.engC1 = window.QUESTION_BANK.engC1 || [];

(function(){
var Q = [

/* ---------- GRAMMAR C1: inversion, cleft, fronting (26) ---------- */
{
  type: "grammar-c1", d: 2,
  prompt: "Choose the correct option:\n\nOnly when the board had approved the merger ___ the decision to employees.",
  choices: ["did the chief executive announce", "the chief executive announced", "the chief executive did announce", "announced the chief executive"],
  answer: 0,
  explanation: "'Only when + clause' forces inversion in the MAIN clause, not in the subordinate one. The main clause therefore behaves like a question: auxiliary before subject, so 'did the chief executive announce'. The subordinate clause 'the board had approved' keeps normal word order."
},
{
  type: "grammar-c1", d: 2,
  prompt: "Choose the correct option:\n\nNot only ___ the deadline, but the team also exceeded every quality benchmark set for the release.",
  choices: ["they met", "did they meet", "met they", "have they met"],
  answer: 1,
  explanation: "A fronted 'Not only' triggers inversion in the clause it introduces: auxiliary before subject. With a simple past verb and no existing auxiliary, 'did' is inserted and the main verb reverts to the base form — 'did they meet'."
},
{
  type: "grammar-c1", d: 2,
  prompt: "Choose the correct option:\n\nNo sooner had the results been published ___ the share price began to fall.",
  choices: ["when", "than", "then", "that"],
  answer: 1,
  explanation: "'No sooner' pairs with 'than'; 'hardly' and 'scarcely' pair with 'when'. The two pairings are routinely swapped in distractors, and the mismatch is the whole point of the question."
},
{
  type: "grammar-c1", d: 2,
  prompt: "Choose the correct option:\n\nRarely ___ such a sharp reversal in consumer sentiment within a single quarter.",
  choices: ["analysts have seen", "have analysts seen", "analysts had seen", "seen analysts have"],
  answer: 1,
  explanation: "'Rarely' is a negative adverbial. Fronted, it forces inversion: the auxiliary 'have' moves in front of the subject 'analysts'. Without fronting the sentence would read 'Analysts have rarely seen…', which needs no inversion at all."
},
{
  type: "grammar-c1", d: 2,
  prompt: "Choose the correct option:\n\nUnder no circumstances ___ the raw data be shared with a third party.",
  choices: ["should", "it should", "should it", "that should"],
  answer: 0,
  explanation: "'Under no circumstances' is a fronted negative adverbial, so the modal comes before the subject: 'should the raw data be shared'. The subject 'the raw data' already follows in the sentence, so only the bare modal is needed in the gap."
},
{
  type: "grammar-c1", d: 2,
  prompt: "Choose the correct option:\n\nHardly had the meeting begun ___ the finance director raised her objection to the forecast.",
  choices: ["than", "when", "then", "before which"],
  answer: 1,
  explanation: "'Hardly' and 'scarcely' take 'when'. Only 'no sooner' takes 'than'. The structure describes two events in quick succession, and the pairing is fixed rather than logical."
},
{
  type: "grammar-c1", d: 3,
  prompt: "Choose the correct option:\n\n___ we known about the defect earlier, we would have halted production immediately.",
  choices: ["Had", "If", "Should", "Were"],
  answer: 0,
  explanation: "This is an inverted third conditional. 'Had we known' is the inversion of 'If we had known', and the result clause 'would have halted' confirms the past-unreal reading. 'Should' introduces a future possibility and 'Were' a present-unreal one, neither of which fits 'would have halted'."
},
{
  type: "grammar-c1", d: 2,
  prompt: "Choose the correct option:\n\n___ you require any further clarification, please contact the project office directly.",
  choices: ["Would", "Should", "Had", "Were"],
  answer: 1,
  explanation: "'Should you require' is the inverted form of 'If you (should) require' and is the standard formal register for a first conditional in written business English. 'Had' would make it past-unreal and 'Were' present-unreal, neither of which fits an instruction about the future."
},
{
  type: "grammar-c1", d: 3,
  prompt: "Choose the correct option:\n\n___ it not for the regulator's late intervention, the acquisition would have completed in March.",
  choices: ["Had", "Should", "Were", "Was"],
  answer: 2,
  explanation: "'Were it not for' is a fixed inverted form meaning 'If it were not for'. It stays in the subjunctive 'were' regardless of the tense of the result clause, so 'Was it not for' is never correct here."
},
{
  type: "grammar-c1", d: 3,
  prompt: "Choose the correct option:\n\nWhat ___ me most about the proposal is the assumptions buried in the revenue forecast.",
  choices: ["concern", "concerns", "are concerning", "have concerned"],
  answer: 1,
  explanation: "In a 'What…' cleft, the subject of the main verb is the whole 'What' clause, which is grammatically singular. The verb is therefore 'concerns', even though the complement 'the assumptions' is plural. The plural noun after 'is' is the classic trap."
},
{
  type: "grammar-c1", d: 2,
  prompt: "Choose the correct option:\n\nIt was the operations director, not the finance team, ___ first identified the discrepancy in the stock figures.",
  choices: ["which", "who", "whom", "that she"],
  answer: 1,
  explanation: "In an 'It was X who…' cleft, the relative pronoun refers to the emphasised element. That element is a person acting as the subject of 'identified', so 'who' is required. 'Whom' would be needed only if the pronoun were the object."
},
{
  type: "grammar-c1", d: 2,
  prompt: "Choose the correct option:\n\nSeldom ___ a single quarter produce such divergent results across the four regions.",
  choices: ["does", "it does", "is", "has"],
  answer: 0,
  explanation: "'Seldom' fronted forces inversion, and the main verb 'produce' is in the base form, which signals a present simple needing the dummy auxiliary 'does'. 'Has' would require a past participle ('produced') and 'is' a participle or adjective."
},
{
  type: "grammar-c1", d: 3,
  prompt: "Choose the correct option:\n\nNot until the external audit was complete ___ the full extent of the misstatement.",
  choices: ["the board grasped", "did the board grasp", "the board did grasp", "grasped the board"],
  answer: 1,
  explanation: "'Not until + clause' behaves like 'Only when': the inversion falls on the MAIN clause. So the subordinate 'the external audit was complete' is normal, and the main clause inverts to 'did the board grasp'."
},
{
  type: "grammar-c1", d: 3,
  prompt: "Choose the correct option:\n\nSo compelling ___ that the committee approved it without a single amendment.",
  choices: ["the argument was", "was the argument", "the argument had been", "had the argument"],
  answer: 1,
  explanation: "When 'So + adjective' is fronted for emphasis, the clause inverts: 'So compelling was the argument…'. This is the same mechanism as with negative adverbials, applied to a fronted complement."
},
{
  type: "grammar-c1", d: 2,
  prompt: "Choose the correct option:\n\nLittle ___ that their principal supplier had already filed for insolvency.",
  choices: ["they knew", "did they know", "they did know", "knew they"],
  answer: 1,
  explanation: "'Little' used in this sense is a negative adverbial, so fronting it forces inversion with the dummy auxiliary: 'Little did they know'. The phrase is close to fixed in narrative English."
},
{
  type: "grammar-c1", d: 2,
  prompt: "Choose the correct option:\n\nOn no account ___ the machine be operated while the safety guard is removed.",
  choices: ["must", "it must", "must it", "that must"],
  answer: 0,
  explanation: "'On no account' is a fronted negative adverbial, so the modal precedes the subject: 'must the machine be operated'. The subject appears later in the sentence, so the gap takes the bare modal."
},
{
  type: "grammar-c1", d: 3,
  prompt: "Choose the correct option:\n\nOnly after reviewing all three downside scenarios ___ a formal recommendation to the board.",
  choices: ["the team made", "did the team make", "the team did make", "made the team"],
  answer: 1,
  explanation: "'Only after…' is restrictive and fronted, so the main clause inverts. Note that the base form 'make' follows the inserted auxiliary 'did' — 'did the team made' is never possible."
},
{
  type: "grammar-c1", d: 3,
  prompt: "Choose the correct option:\n\nSuch ___ to the announcement that the launch was postponed indefinitely.",
  choices: ["the backlash was", "was the backlash", "the backlash had been", "had the backlash been"],
  answer: 1,
  explanation: "Fronted 'Such' inverts in the same way as fronted 'So': 'Such was the backlash that…'. The 'that' clause carries the consequence, which confirms the emphatic structure."
},
{
  type: "grammar-c1", d: 2,
  prompt: "Choose the correct option:\n\nNot one of the eleven proposals submitted this year ___ the criteria set out by the investment committee.",
  choices: ["meet", "meets", "have met", "were meeting"],
  answer: 1,
  explanation: "'Not one' is the subject and is singular, so the verb is 'meets'. The plural 'proposals' sits inside a prepositional phrase and cannot govern the verb — deleting 'of the eleven proposals submitted this year' makes this obvious."
},
{
  type: "grammar-c1", d: 3,
  prompt: "Choose the correct option:\n\nThe committee insisted that the revised report ___ before the end of the quarter.",
  choices: ["is submitted", "was submitted", "be submitted", "would be submitted"],
  answer: 2,
  explanation: "Verbs of demand — insist, demand, require, recommend, suggest, propose — take the subjunctive in the that-clause. The subjunctive uses the bare base form regardless of tense or subject, giving the passive 'be submitted'."
},
{
  type: "grammar-c1", d: 2,
  prompt: "Choose the correct option:\n\nIt is essential that every participant ___ the confidentiality agreement before receiving the materials.",
  choices: ["signs", "sign", "will sign", "is signing"],
  answer: 1,
  explanation: "'It is essential/vital/imperative that…' takes the subjunctive, so the verb appears in the bare base form: 'sign', not 'signs', even with the third-person singular subject 'every participant'."
},
{
  type: "grammar-c1", d: 3,
  prompt: "Choose the correct option:\n\nWere the group ___ its European distribution arm, the fixed cost base would fall by roughly a third.",
  choices: ["divest", "to divest", "divesting", "divested"],
  answer: 1,
  explanation: "'Were + subject + to + infinitive' is the inverted form of a hypothetical future conditional: 'If the group were to divest…'. The 'would fall' in the result clause confirms the unreal reading."
},
{
  type: "grammar-c1", d: 3,
  prompt: "Choose the correct option:\n\nNowhere in the tender documentation ___ any reference to the licensing restriction.",
  choices: ["there is", "is there", "it is", "there was being"],
  answer: 1,
  explanation: "'Nowhere' is a fronted negative adverbial, so the existential 'there is' inverts to 'is there'. The pattern is identical to 'Never before has there been…'."
},
{
  type: "grammar-c1", d: 2,
  prompt: "Choose the correct option:\n\nNot since the 2008 crisis ___ the sector faced pressure on this scale.",
  choices: ["has", "it has", "did", "was"],
  answer: 0,
  explanation: "'Not since + time' is a fronted negative adverbial requiring inversion, and 'since' with a period running up to the present calls for the present perfect. The auxiliary 'has' therefore precedes the subject 'the sector'."
},
{
  type: "grammar-c1", d: 3,
  prompt: "Choose the correct option:\n\nScarcely ___ the new reporting system when the first reconciliation errors appeared.",
  choices: ["they had installed", "had they installed", "did they install", "they installed"],
  answer: 1,
  explanation: "'Scarcely' fronted forces inversion, and the pairing with 'when' plus a past simple in the second clause requires the past perfect in the first: 'Scarcely had they installed… when…'."
},
{
  type: "grammar-c1", d: 3,
  prompt: "Choose the correct option:\n\nOnly by revisiting the original demand assumptions ___ able to reconcile the two forecasts.",
  choices: ["the analysts were", "were the analysts", "the analysts have been", "had the analysts"],
  answer: 1,
  explanation: "'Only by + -ing' is restrictive and fronted, so the clause inverts. With 'be' as the main verb, 'be' itself moves in front of the subject: 'were the analysts able to'."
},

/* ---------- VOCABULARY C1: register, connotation, near-synonyms (22) ---------- */
{
  type: "vocabulary-c1", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe independent testing ___ the auditor's initial suspicion rather than dispelling it.",
  choices: ["corroborated", "contradicted", "obscured", "anticipated"],
  answer: 0,
  explanation: "'Corroborate' means to confirm through independent evidence, which is exactly what separate testing does. 'Contradicted' reverses the meaning against 'rather than dispelling', 'obscured' means hid, and 'anticipated' means expected in advance."
},
{
  type: "vocabulary-c1", d: 3,
  prompt: "Choose the word that best completes the sentence:\n\nAdopting the new standard would ___ the need for a separate annual compliance review.",
  choices: ["obviate", "exacerbate", "necessitate", "reiterate"],
  answer: 0,
  explanation: "'Obviate' means to remove the need for something — precisely the relationship signalled by 'the need for'. 'Necessitate' is its opposite, 'exacerbate' means worsen, and 'reiterate' means repeat."
},
{
  type: "vocabulary-c1", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nRising input costs have ___ the margin pressure the division was already under.",
  choices: ["exacerbated", "mitigated", "obviated", "attenuated"],
  answer: 0,
  explanation: "'Exacerbate' means to make an existing bad situation worse, which fits 'already under' pressure. 'Mitigate' and 'attenuate' both mean to lessen, and 'obviate' means to remove the need for."
},
{
  type: "vocabulary-c1", d: 3,
  prompt: "Choose the word that best completes the sentence:\n\nPressed on the delivery date, the vendor ___ rather than giving a direct answer.",
  choices: ["equivocated", "elaborated", "conceded", "reiterated"],
  answer: 0,
  explanation: "'Equivocate' means to use deliberately vague language to avoid committing, which is the contrast being drawn with 'a direct answer'. 'Elaborated' means gave more detail, 'conceded' means admitted, and 'reiterated' means repeated."
},
{
  type: "vocabulary-c1", d: 3,
  prompt: "Choose the word that best completes the sentence:\n\nHis confident manner ___ a deep private uncertainty about the strategy.",
  choices: ["belied", "reflected", "reinforced", "conveyed"],
  answer: 0,
  explanation: "'Belie' means to give a false impression of something. The sentence sets an outward manner against a hidden reality, which is exactly the contrast 'belied' encodes. The other three would all mean the manner revealed the uncertainty."
},
{
  type: "vocabulary-c1", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe non-compete clause ___ the company from entering that market for three years.",
  choices: ["precludes", "permits", "compels", "exempts"],
  answer: 0,
  explanation: "'Preclude' means to make impossible or rule out in advance, which is what a non-compete clause does. 'Exempts' would mean released from an obligation, and 'permits' and 'compels' reverse or misstate the relationship."
},
{
  type: "vocabulary-c1", d: 3,
  prompt: "Choose the word that best completes the sentence:\n\nThe chair called the twelve-week timeline ___, a word she chose to signal that she considered it unrealistic.",
  choices: ["overambitious", "ambitious", "achievable", "prudent"],
  answer: 0,
  explanation: "The question is about connotation, not meaning. 'Ambitious' is admiring; the prefix in 'overambitious' converts it into criticism, which is what the second half of the sentence tells you she intended."
},
{
  type: "vocabulary-c1", d: 3,
  prompt: "Choose the word that best completes the sentence:\n\nA genuinely ___ reviewer would have no stake in which of the two suppliers won the contract.",
  choices: ["disinterested", "uninterested", "unconcerned", "inattentive"],
  answer: 0,
  explanation: "'Disinterested' means having no personal stake — impartial. 'Uninterested' means bored, and it is the most common confusion in English. 'Unconcerned' and 'inattentive' describe indifference or carelessness, not impartiality."
},
{
  type: "vocabulary-c1", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe outage was ___, running without interruption from Friday evening to Sunday morning.",
  choices: ["continuous", "continual", "recurrent", "intermittent"],
  answer: 0,
  explanation: "'Continuous' means unbroken in time, which 'without interruption' makes explicit. 'Continual' means repeated with gaps, and 'recurrent' and 'intermittent' both imply the outage stopped and started."
},
{
  type: "vocabulary-c1", d: 3,
  prompt: "Choose the option that best completes the sentence:\n\nThe portfolio ___ four business units, each reporting to a separate managing director.",
  choices: ["comprises", "is comprised of", "composes", "consists"],
  answer: 0,
  explanation: "The whole comprises the parts, so 'the portfolio comprises four units' is correct. 'Is comprised of' is widely used but is treated as an error in formal writing, 'composes' runs the other way (the parts compose the whole), and 'consists' would need 'of'."
},
{
  type: "vocabulary-c1", d: 3,
  prompt: "Choose the word that best completes the sentence:\n\nManagement was accused of being ___ with the figures — technically accurate, but presented so as to mislead.",
  choices: ["disingenuous", "meticulous", "transparent", "candid"],
  answer: 0,
  explanation: "'Disingenuous' means insincere while appearing straightforward, which is exactly the gap between technical accuracy and intent to mislead. 'Transparent' and 'candid' mean the opposite, and 'meticulous' describes care, not honesty."
},
{
  type: "vocabulary-c1", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe firm's ___ reputation preceded it; three regulators had opened investigations in as many years.",
  choices: ["notorious", "renowned", "distinguished", "prominent"],
  answer: 0,
  explanation: "'Notorious' means famous specifically for something bad, which the regulatory investigations establish. 'Renowned' and 'distinguished' carry positive connotations, and 'prominent' is neutral."
},
{
  type: "vocabulary-c1", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe consultant ___ that the savings were achievable, but supplied no modelling to support the figure.",
  choices: ["asserted", "substantiated", "corroborated", "demonstrated"],
  answer: 0,
  explanation: "'Assert' means to state something forcefully without necessarily proving it, which fits 'supplied no modelling'. 'Substantiated', 'corroborated' and 'demonstrated' all entail that evidence was in fact provided."
},
{
  type: "vocabulary-c1", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nHer ___ attention to detail meant that errors almost never reached the client.",
  choices: ["meticulous", "cursory", "perfunctory", "expedient"],
  answer: 0,
  explanation: "'Meticulous' means extremely careful about detail, which the outcome in the sentence confirms. 'Cursory' and 'perfunctory' both mean hasty and superficial, and 'expedient' means convenient rather than careful."
},
{
  type: "vocabulary-c1", d: 3,
  prompt: "Choose the word that best completes the sentence:\n\nThe review was ___, covering nineteen processes in a little under two hours.",
  choices: ["cursory", "exhaustive", "meticulous", "rigorous"],
  answer: 0,
  explanation: "Nineteen processes in two hours is roughly six minutes each, so the review was superficial: 'cursory'. The other three all claim thoroughness, which the arithmetic in the sentence contradicts."
},
{
  type: "vocabulary-c1", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe board ___ its decision pending the outcome of the litigation.",
  choices: ["deferred", "expedited", "ratified", "rescinded"],
  answer: 0,
  explanation: "'Defer' means to postpone to a later time, which 'pending the outcome' requires. 'Expedited' means speeded up, 'ratified' means formally approved, and 'rescinded' means cancelled something already in force."
},
{
  type: "vocabulary-c1", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nQuarterly sales have been ___, swinging by more than thirty per cent between consecutive periods.",
  choices: ["volatile", "stagnant", "robust", "consistent"],
  answer: 0,
  explanation: "'Volatile' means liable to rapid and unpredictable change, which the thirty per cent swings describe. 'Stagnant' means unmoving, and 'robust' and 'consistent' both imply stability."
},
{
  type: "vocabulary-c1", d: 3,
  prompt: "Choose the option that best completes the sentence:\n\nCounsel advised against the wording, arguing that the concession was ___ an admission of liability.",
  choices: ["tantamount to", "contingent on", "conducive to", "incumbent on"],
  answer: 0,
  explanation: "'Tantamount to' means equivalent in effect to, which is why counsel objected. 'Contingent on' means dependent on, 'conducive to' means helping to bring about, and 'incumbent on' means an obligation resting with someone."
},
{
  type: "vocabulary-c1", d: 3,
  prompt: "Choose the option that best completes the sentence:\n\nThe second tranche of funding is ___ the project meeting its first two milestones.",
  choices: ["contingent on", "tantamount to", "conducive to", "attributable to"],
  answer: 0,
  explanation: "'Contingent on' means dependent on a condition being met, which is the relationship between funding and milestones. 'Tantamount to' means equivalent to, and 'attributable to' identifies a cause rather than a condition."
},
{
  type: "vocabulary-c1", d: 3,
  prompt: "Choose the option that best completes the sentence:\n\nThe redesigned floor plan proved ___ collaboration: cross-team projects doubled within a year.",
  choices: ["conducive to", "detrimental to", "tantamount to", "incumbent on"],
  answer: 0,
  explanation: "'Conducive to' means helping to create the conditions for something good, which the doubling of cross-team projects supports. 'Detrimental to' reverses the meaning, and the other two express equivalence and obligation."
},
{
  type: "vocabulary-c1", d: 3,
  prompt: "Choose the word that best completes the sentence:\n\nThe ___ efficiency gains were never realised, despite three years of assurances from the vendor.",
  choices: ["purported", "verified", "documented", "realised"],
  answer: 0,
  explanation: "'Purported' means claimed but not proven, and it signals the author's scepticism — which the rest of the sentence confirms. 'Verified' and 'documented' would assert the gains were real, and 'realised' contradicts 'never realised'."
},
{
  type: "vocabulary-c1", d: 3,
  prompt: "Choose the option that best completes the sentence:\n\nThe team lobbied for an extension for the better part of a month, but ___.",
  choices: ["to no avail", "by dint of", "in lieu of", "at odds with"],
  answer: 0,
  explanation: "'To no avail' means without success, which the contrastive 'but' sets up. The other three are also fixed expressions but are incomplete here: 'by dint of' means by means of, 'in lieu of' means instead of, and 'at odds with' means in conflict with."
},

/* ---------- SENTENCE CORRECTION C1: parallelism, modifiers (16) ---------- */
{
  type: "sentence-c1", d: 3,
  prompt: "Choose the option that completes the sentence correctly:\n\nThe consultant emphasised not only the need for cost reduction but also ___ employee engagement.",
  choices: ["the importance of protecting", "protecting", "to protect", "how to protect"],
  answer: 0,
  explanation: "'Not only … but also' must join two elements of the same grammatical kind. The first is the noun phrase 'the need for cost reduction', so the second must also be a noun phrase: 'the importance of protecting employee engagement'."
},
{
  type: "sentence-c1", d: 3,
  prompt: "Which sentence is correctly constructed?",
  choices: [
    "Having reviewed all twelve submissions, the panel selected three finalists.",
    "Having reviewed all twelve submissions, three finalists were selected.",
    "Having reviewed all twelve submissions, a decision on the finalists was reached.",
    "Having reviewed all twelve submissions, it was decided to shortlist three."
  ],
  answer: 0,
  explanation: "An opening participle attaches to the subject of the main clause, so that subject must be whoever performed the action. Only 'the panel' can have reviewed the submissions; in the other three the grammatical subject is a decision or an empty 'it', which leaves the participle dangling."
},
{
  type: "sentence-c1", d: 3,
  prompt: "Choose the option that conveys that the auditors examined the third-quarter accounts and no others:\n\nThe auditors ___ the third-quarter accounts.",
  choices: ["reviewed only", "only reviewed", "had only been reviewing", "only had reviewed"],
  answer: 0,
  explanation: "'Only' attaches to whatever follows it. Placing it directly before the object — 'reviewed only the third-quarter accounts' — restricts which accounts were reviewed. 'Only reviewed' would restrict the action instead, implying they reviewed but did not, say, audit them."
},
{
  type: "sentence-c1", d: 2,
  prompt: "Choose the option that completes the sentence correctly:\n\nThe division's operating margins are considerably higher than ___.",
  choices: ["those of its nearest competitor", "its nearest competitor", "compared with its nearest competitor", "that of its nearest competitors"],
  answer: 0,
  explanation: "A comparison must set like against like. 'Margins' are being compared, so the second half needs 'those of its nearest competitor'. Option B compares margins to a company, and option D uses the singular 'that' with a plural noun."
},
{
  type: "sentence-c1", d: 2,
  prompt: "Choose the option that completes the sentence correctly:\n\nThe strategy involves entering two adjacent markets, launching a premium range and ___.",
  choices: ["restructuring the salesforce", "to restructure the salesforce", "a restructure of the salesforce", "the salesforce will be restructured"],
  answer: 0,
  explanation: "The list runs 'entering… launching… ___'. Two gerunds have been established, so the third item must also be a gerund: 'restructuring the salesforce'. Switching to an infinitive or a noun phrase breaks the parallel."
},
{
  type: "sentence-c1", d: 3,
  prompt: "Choose the option that completes the sentence correctly:\n\nThe new chief executive was both technically fluent and ___.",
  choices: ["commercially astute", "she understood commerce", "had commercial instincts", "with a grasp of commerce"],
  answer: 0,
  explanation: "'Both … and' joins two elements of the same kind. The first is the adjective phrase 'technically fluent', so the second must be an adjective phrase too: 'commercially astute'. The other options switch to a clause, a verb phrase and a prepositional phrase."
},
{
  type: "sentence-c1", d: 3,
  prompt: "Choose the option that completes the sentence correctly:\n\nThe board must either approve the additional funding or ___.",
  choices: ["accept a twelve-month delay", "a twelve-month delay must be accepted", "accepting a twelve-month delay", "the acceptance of a twelve-month delay"],
  answer: 0,
  explanation: "'Either … or' joins like with like. After the modal 'must', the first branch is the bare verb 'approve', so the second must also be a bare verb phrase: 'accept a twelve-month delay'."
},
{
  type: "sentence-c1", d: 3,
  prompt: "Choose the option that completes the sentence correctly:\n\nThe team chose to rebuild the model from first principles rather than ___ the existing one.",
  choices: ["patch", "patching", "to patch", "the patching of"],
  answer: 0,
  explanation: "'Rather than' takes the same form as the element it contrasts with. Here that element is the bare infinitive 'rebuild' following 'chose to', so the parallel form is the bare 'patch'."
},
{
  type: "sentence-c1", d: 3,
  prompt: "Which sentence states unambiguously that the instruction to revise came before the meeting?",
  choices: [
    "The director said before the meeting that the forecast should be revised.",
    "The director said that the forecast should be revised before the meeting.",
    "Before the meeting the forecast should be revised, the director said.",
    "The director said the forecast, before the meeting, should be revised."
  ],
  answer: 0,
  explanation: "In option B, 'before the meeting' sits between two verbs and could modify either — a squinting modifier. Moving it next to 'said' fixes the reading to the moment of speaking. Options C and D are contorted and leave the same ambiguity."
},
{
  type: "sentence-c1", d: 3,
  prompt: "Choose the option that conveys that the project consumed very nearly the whole budget:",
  choices: [
    "The project consumed almost the entire budget.",
    "The project almost consumed the entire budget.",
    "Almost, the project consumed the entire budget.",
    "The project consumed the entire budget almost."
  ],
  answer: 0,
  explanation: "'Almost' modifies whatever follows it. Before 'the entire budget', it limits the amount spent. In option B it modifies 'consumed', which implies the project came close to spending the budget but did not really spend it."
},
{
  type: "sentence-c1", d: 3,
  prompt: "Choose the option that completes the sentence correctly:\n\nThe report recommends reducing headcount in the regional offices, consolidating the two data centres and ___.",
  choices: ["renegotiating the freight contracts", "to renegotiate the freight contracts", "renegotiation of the freight contracts", "that freight contracts be renegotiated"],
  answer: 0,
  explanation: "'Recommends' governs a list of gerunds: 'reducing… consolidating… renegotiating'. Only the gerund keeps the third item parallel with the first two."
},
{
  type: "sentence-c1", d: 2,
  prompt: "Choose the option that completes the sentence correctly:\n\nThe supplier was selected as much for its delivery record as ___.",
  choices: ["for its price", "its price", "because of price", "on price"],
  answer: 0,
  explanation: "'As much … as' joins two elements of identical form. The first is the prepositional phrase 'for its delivery record', so the second must repeat the preposition: 'as for its price'."
},
{
  type: "sentence-c1", d: 3,
  prompt: "Which sentence is correctly constructed?",
  choices: [
    "After analysing three years of returns, the committee revised its allocation policy.",
    "After analysing three years of returns, the allocation policy was revised.",
    "After analysing three years of returns, a revision to the allocation policy followed.",
    "After analysing three years of returns, it became clear the policy needed revision."
  ],
  answer: 0,
  explanation: "The participial phrase needs a subject capable of doing the analysing. Only 'the committee' qualifies. In the other three the subject is a policy, a revision or an empty 'it', none of which can analyse anything."
},
{
  type: "sentence-c1", d: 3,
  prompt: "Choose the option that completes the sentence correctly:\n\nThe merger was pursued with a view to ___ the group's exposure to a single market.",
  choices: ["reducing", "reduce", "the reduction", "have reduced"],
  answer: 0,
  explanation: "In 'with a view to', 'to' is a preposition rather than part of an infinitive, so it must be followed by a gerund: 'with a view to reducing'. The same applies to 'committed to', 'look forward to' and 'object to'."
},
{
  type: "sentence-c1", d: 3,
  prompt: "Choose the option that completes the sentence correctly:\n\nNot only was the forecast revised downwards, but the underlying assumptions ___ as well.",
  choices: ["were republished", "republished", "had been republish", "republishing"],
  answer: 0,
  explanation: "The second branch of 'Not only … but … as well' needs a finite verb matching the passive construction of the first: 'was revised' pairs with 'were republished'. Note that the inversion applies only to the first clause."
},
{
  type: "sentence-c1", d: 3,
  prompt: "Choose the option that completes the sentence correctly:\n\nThe firm is known less for the originality of its research than ___.",
  choices: ["for the rigour of its execution", "its execution is rigorous", "because it executes rigorously", "having rigorous execution"],
  answer: 0,
  explanation: "'Less … than' requires matching structures on both sides. The first is 'for the originality of its research', so the second must be a parallel prepositional phrase: 'for the rigour of its execution'."
},

/* ---------- IDIOM C1: phrasal verbs and fixed expressions (12) ---------- */
{
  type: "idiom-c1", d: 3,
  prompt: "Choose the option that best completes the sentence:\n\nThe follow-up study ___ the original findings, which had been questioned for nearly a decade.",
  choices: ["bore out", "bore on", "bore with", "bore down on"],
  answer: 0,
  explanation: "'Bear out' means to confirm or substantiate. 'Bear on' means to be relevant to, 'bear with' means to be patient with someone, and 'bear down on' means to approach in a threatening way. The verb 'bear' contributes nothing predictable to any of them."
},
{
  type: "idiom-c1", d: 3,
  prompt: "Choose the option that best completes the sentence:\n\nThe question of who authorised the payment ___ directly the board's decision on the audit.",
  choices: ["bears on", "bears out", "bears with", "bears up"],
  answer: 0,
  explanation: "'Bear on' means to be relevant to or have a direct connection with. 'Bear out' would mean the question confirms the decision, which makes no sense with a question as the subject."
},
{
  type: "idiom-c1", d: 2,
  prompt: "Choose the option that best completes the sentence:\n\nThe two largest clients together ___ nearly sixty per cent of the firm's annual revenue.",
  choices: ["account for", "allow for", "answer for", "call for"],
  answer: 0,
  explanation: "'Account for' means to constitute or make up a proportion of a total. 'Allow for' means to leave room for, 'answer for' means to take responsibility for, and 'call for' means to require."
},
{
  type: "idiom-c1", d: 2,
  prompt: "Choose the option that best completes the sentence:\n\nThe schedule should ___ the possibility that customs clearance takes longer than planned.",
  choices: ["allow for", "account for", "call for", "stand for"],
  answer: 0,
  explanation: "'Allow for' means to take a possibility into consideration when planning. 'Account for' would mean to explain the delay after the fact rather than build slack in ahead of it."
},
{
  type: "idiom-c1", d: 3,
  prompt: "Choose the option that best completes the sentence:\n\nThe operations director ___ the shortfall ___ an unusually wet quarter rather than to any weakness in demand.",
  choices: ["put … down to", "put … up with", "put … off", "put … forward"],
  answer: 0,
  explanation: "'Put something down to something' means to attribute it to a cause, which the contrast with 'rather than to any weakness' confirms. 'Put up with' means tolerate, 'put off' means postpone or deter, and 'put forward' means propose."
},
{
  type: "idiom-c1", d: 3,
  prompt: "Choose the option that best completes the sentence:\n\nStripped of the jargon, the disagreement ___ whether the savings are recurring or one-off.",
  choices: ["comes down to", "comes up against", "comes in for", "comes round to"],
  answer: 0,
  explanation: "'Come down to' means to be essentially a matter of. 'Come up against' means to encounter an obstacle, 'come in for' means to receive criticism, and 'come round to' means to eventually accept a view."
},
{
  type: "idiom-c1", d: 3,
  prompt: "Choose the option that best completes the sentence:\n\nThe revised bonus scheme ___ considerable criticism from the regional teams.",
  choices: ["came in for", "came down to", "came up against", "came round to"],
  answer: 0,
  explanation: "'Come in for' is used almost exclusively with criticism, blame or flak, and means to receive it. 'Come up against' takes an obstacle or resistance as its object rather than the criticism itself."
},
{
  type: "idiom-c1", d: 2,
  prompt: "Choose the option that best completes the sentence:\n\nThe pilot was launched ___ extending the service to all forty branches by the end of next year.",
  choices: ["with a view to", "in lieu of", "at odds with", "by dint of"],
  answer: 0,
  explanation: "'With a view to' means with the intention of, and it is always followed by a gerund — hence 'extending'. 'In lieu of' means instead of, 'at odds with' means in conflict with, and 'by dint of' means by means of."
},
{
  type: "idiom-c1", d: 2,
  prompt: "Choose the option that best completes the sentence:\n\n___ the regulator's ruling, three competitors withdrew their applications within a fortnight.",
  choices: ["In the wake of", "In lieu of", "By dint of", "To no avail"],
  answer: 0,
  explanation: "'In the wake of' means following on from and as a consequence of an event. The other three mean instead of, by means of, and without success, none of which fits a sequence of cause and effect."
},
{
  type: "idiom-c1", d: 3,
  prompt: "Choose the option that best completes the sentence:\n\nThe finance team's projection is ___ the commercial team's, and the board will have to decide which to use.",
  choices: ["at odds with", "conducive to", "in the wake of", "in lieu of"],
  answer: 0,
  explanation: "'At odds with' means in conflict or disagreement with, which the board's need to choose between the two confirms. 'Conducive to' means helping to bring about, and the other two express sequence and substitution."
},
{
  type: "idiom-c1", d: 3,
  prompt: "Choose the option that best completes the sentence:\n\nThe partner accepted a fixed fee ___ the usual hourly billing arrangement.",
  choices: ["in lieu of", "in the wake of", "at odds with", "on the grounds that"],
  answer: 0,
  explanation: "'In lieu of' means in place of or instead of, which describes substituting one billing method for another. 'In the wake of' would mean after it, which is not the same as replacing it."
},
{
  type: "idiom-c1", d: 3,
  prompt: "Choose the option that best completes the sentence:\n\nThe tender was rejected ___ the bidder had failed to disclose a material conflict of interest.",
  choices: ["on the grounds that", "with a view to", "in lieu of", "by dint of"],
  answer: 0,
  explanation: "'On the grounds that' introduces the reason or justification for a decision and is followed by a clause. 'With a view to' and 'by dint of' are followed by gerunds and express purpose and means respectively."
},

/* ---------- READING C1: author stance and implication (12) ---------- */
{
  type: "reading-c1", d: 3,
  prompt: "Read the passage and answer the question.\n\nThe term 'disruptive innovation' has become so fashionable in business circles that almost every new venture now claims to be practising it. The original concept, as its author defined it, described something quite specific: a cheaper, initially inferior offering that takes root among customers the incumbents are happy to ignore, and only later moves upmarket. Most self-described disruptors do nothing of the kind. They offer a marginally better product to the same customers at a similar price, which is ordinary competition and has never needed a special name.\n\nThe author's attitude towards current usage of the term is best described as:",
  choices: ["sceptical", "enthusiastic", "indifferent", "hostile"],
  answer: 0,
  explanation: "'So fashionable that almost every venture claims it', 'do nothing of the kind' and 'has never needed a special name' are all critical, but the tone is measured rather than angry. 'Sceptical' captures that; 'hostile' overstates it, and the passage plainly does have a view, so 'indifferent' is wrong."
},
{
  type: "reading-c1", d: 3,
  prompt: "Read the passage and answer the question.\n\nAdvocates of the four-day week point to a series of trials in which output was maintained despite the shorter schedule. The results are genuinely encouraging. It is worth noting, however, that firms volunteering for such trials tend to be those whose work is already project-based and measurable, and whose staff are salaried professionals. Whether the same result would survive in continuous-process manufacturing, or in roles where output is a direct function of hours present, remains untested.\n\nWhich statement best reflects the author's position?",
  choices: [
    "The trial evidence may not generalise to workplaces unlike those that volunteered.",
    "The four-day week does not maintain output and the trials were flawed.",
    "The four-day week should be adopted across all sectors without delay.",
    "The trials show nothing of value about working time."
  ],
  answer: 0,
  explanation: "The author concedes the results are 'genuinely encouraging' and then raises a selection-bias point about which firms volunteer. That is a limit on generalisation, not a rejection: options B and D overstate the criticism, and C ignores it entirely."
},
{
  type: "reading-c1", d: 3,
  prompt: "Read the passage and answer the question.\n\nThe company's sustainability report runs to ninety-four pages and features photographs of wind turbines on eleven of them. It discloses emissions from its own operations in some detail. Emissions from its supply chain, which independent estimates put at roughly eight times the disclosed figure, are described in a single paragraph as 'an area of ongoing focus'.\n\nThe author conveys criticism principally by:",
  choices: [
    "juxtaposing the length and imagery of the report with what it omits",
    "citing regulatory findings against the company",
    "quoting environmental campaigners directly",
    "stating explicitly that the report is misleading"
  ],
  answer: 0,
  explanation: "No judgement is ever stated. The criticism comes entirely from the arrangement of facts: ninety-four pages and eleven turbine photographs set against one paragraph for the emissions that are eight times larger. Recognising unstated criticism carried by structure is the C1 skill being tested."
},
{
  type: "reading-c1", d: 3,
  prompt: "Read the passage and answer the question.\n\nIt is often claimed that data-driven organisations outperform their peers. The claim is plausible and probably true in some form. What the supporting studies usually show, however, is that firms which invest heavily in analytics also tend to be larger, better capitalised and more professionally managed than those that do not. Disentangling the contribution of the analytics from the contribution of simply being a well-run company has proved remarkably difficult.\n\nThe author's main point is that:",
  choices: [
    "the evidence cannot separate the effect of analytics from other features of successful firms",
    "data-driven organisations do not in fact outperform their peers",
    "analytics investment is a waste of money for most firms",
    "only large firms should invest in analytics"
  ],
  answer: 0,
  explanation: "The author calls the claim 'probably true in some form' and then identifies a confounding problem: the firms that invest in analytics differ in other ways too. That is an argument about what the evidence can establish, not a denial of the claim, which rules out B, C and D."
},
{
  type: "reading-c1", d: 3,
  prompt: "Read the passage and answer the question.\n\nThe incoming chief executive has promised a 'fundamental reset' of the company's culture, to be delivered through a programme of workshops beginning next quarter. Her three predecessors each announced a comparable initiative on taking office. Two of those programmes were discontinued within eighteen months; the third was absorbed into a wider restructuring and is no longer referred to by name.\n\nThe author's tone is best described as:",
  choices: ["drily sceptical", "openly contemptuous", "warmly supportive", "entirely neutral"],
  answer: 0,
  explanation: "The author states only verifiable facts about the three previous programmes, but the sequence makes the point. That understatement is characteristic of dry scepticism. 'Contemptuous' is too strong for a passage with no loaded vocabulary, and the pointed selection of facts rules out true neutrality."
},
{
  type: "reading-c1", d: 3,
  prompt: "Read the passage and answer the question.\n\nBenchmarking has an obvious appeal: it converts a difficult strategic question into an arithmetic one. If our cost per unit exceeds the industry median, the reasoning goes, we have a cost problem. Yet the median is composed of firms pursuing different strategies with different customers. A company that deliberately competes on service will carry costs its low-price rivals do not, and closing that gap would mean abandoning the strategy rather than executing it better.\n\nWhich statement would the author most likely endorse?",
  choices: [
    "A cost gap against the median is only meaningful once strategy is taken into account.",
    "Benchmarking against the industry median is the most reliable diagnostic available.",
    "Companies competing on service should reduce costs to the industry median.",
    "Cost per unit is not a useful measure under any circumstances."
  ],
  answer: 0,
  explanation: "The author's objection is that the median aggregates firms with incompatible strategies, so a gap may reflect a deliberate choice rather than inefficiency. That qualifies the metric rather than discarding it, which rules out D, and directly contradicts B and C."
},
{
  type: "reading-c1", d: 3,
  prompt: "Read the passage and answer the question.\n\nThe consultancy's report identifies £40m of potential savings. Read closely, some £26m of that figure depends on a reduction in headcount that the client has already said it will not make, and a further £9m assumes supplier concessions for which no negotiation has begun. The remaining £5m is well evidenced and could be realised this year.\n\nThe passage suggests that the £40m figure is:",
  choices: [
    "technically defensible but largely dependent on conditions that do not hold",
    "fabricated in order to justify the consultancy's fee",
    "an underestimate of what could in fact be achieved",
    "accurate and immediately actionable in full"
  ],
  answer: 0,
  explanation: "The author does not allege dishonesty; each component is described as a real calculation. The objection is that £35m of the £40m rests on a decision already ruled out and a negotiation not yet started. 'Technically defensible but largely dependent on conditions that do not hold' is exactly that distinction."
},
{
  type: "reading-c1", d: 3,
  prompt: "Read the passage and answer the question.\n\nSurveys consistently report that a large majority of employees would prefer to work from home at least part of the week. This is sometimes presented as evidence that hybrid arrangements improve productivity. It is, of course, evidence of nothing of the sort. What people prefer and what makes them productive are separate questions, and the survey instrument was never designed to answer the second.\n\nThe phrase 'of course' in the passage functions to:",
  choices: [
    "signal that the distinction being drawn should be obvious",
    "concede a point to those who disagree",
    "introduce an exception to the author's own argument",
    "indicate that the author is uncertain"
  ],
  answer: 0,
  explanation: "'Of course' here marks the following statement as something the reader ought already to accept, which sharpens the criticism of anyone who conflated preference with productivity. It is not a concession, an exception or a hedge."
},
{
  type: "reading-c1", d: 3,
  prompt: "Read the passage and answer the question.\n\nThe division has grown revenue in each of the last five years, a record its management cites frequently. Over the same period the market it serves has roughly doubled. The division's share of that market has fallen from 19 per cent to 11 per cent.\n\nWhich conclusion is best supported by the passage?",
  choices: [
    "The division's growth has lagged the growth of its market.",
    "The division's revenue has declined over the five years.",
    "The division is the weakest performer in its market.",
    "The market is no longer growing."
  ],
  answer: 0,
  explanation: "Revenue rose every year while share fell from 19 to 11 per cent in a market that doubled, so the division grew more slowly than the market. B contradicts the passage, and C and D introduce claims about rivals and future growth that the text does not support."
},
{
  type: "reading-c1", d: 3,
  prompt: "Read the passage and answer the question.\n\nProponents of agile working describe it as a fundamental reordering of how teams relate to one another. Critics dismiss it as a repackaging of practices that good engineering teams have used for thirty years. Both descriptions are defensible, which is itself informative: a method elastic enough to be read either way is unlikely to have the uniform effects that either camp attributes to it.\n\nThe author uses the disagreement between proponents and critics primarily to:",
  choices: [
    "argue that the method is too loosely defined for either claim to hold",
    "endorse the critics' position over the proponents'",
    "demonstrate that the proponents have misunderstood the critics",
    "show that the debate has been settled by evidence"
  ],
  answer: 0,
  explanation: "The author accepts both readings as 'defensible' and then draws a conclusion from that fact itself: elasticity of definition undermines any claim of uniform effect. The point is aimed at both camps, so B is wrong, and no evidence is cited to settle anything."
},
{
  type: "reading-c1", d: 3,
  prompt: "Read the passage and answer the question.\n\nThe merger was announced as a partnership of equals. The combined entity took the acquirer's name, its headquarters, its chief executive and eleven of the fourteen board seats. The target's chief executive was appointed vice-chair, a role created for the purpose, and left within a year.\n\nThe author's use of the phrase 'a partnership of equals' is best described as:",
  choices: ["ironic", "approving", "literal", "speculative"],
  answer: 0,
  explanation: "The phrase is quoted from the announcement and then systematically contradicted by every fact that follows. Using a phrase while marshalling evidence that it is false is irony; nothing in the passage is approving, and the phrase is plainly not meant literally."
},
{
  type: "reading-c1", d: 3,
  prompt: "Read the passage and answer the question.\n\nThe pilot achieved a 22 per cent improvement, and the results have been described internally as conclusive. The site chosen for the pilot was the group's newest facility, staffed largely by volunteers from other plants, and was visited by the programme sponsor on eleven occasions during the trial. None of this means the improvement was illusory. It does mean that 22 per cent is an upper bound rather than an expectation.\n\nThe final sentence serves to:",
  choices: [
    "qualify the pilot result without dismissing it",
    "reject the pilot result as unreliable",
    "confirm that the improvement will be replicated at scale",
    "attribute the improvement entirely to the sponsor's visits"
  ],
  answer: 0,
  explanation: "'None of this means the improvement was illusory' explicitly preserves the finding, while 'an upper bound rather than an expectation' limits what may be inferred from it. That is qualification, not rejection — and the author never attributes the gain to any single cause."
}

];
Q.forEach(function(q){ window.QUESTION_BANK.engC1.push(q); });
})();
