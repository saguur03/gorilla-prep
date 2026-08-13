/* English Level — expansion bank (2026 expansion to support 20 questions/day).

   Appends to QUESTION_BANK.eng, so the ids of the original 88 questions are untouched and
   their Spanish translations stay correctly mapped.

   Every question carries `type` and `d` explicitly: the difficulty-default IIFE at the end
   of questions-eng.js has already run by the time this file loads.

   Options here are text, so they are shuffled at runtime and the stored `answer` index is
   only the position in this file. */
window.QUESTION_BANK = window.QUESTION_BANK || {};
window.QUESTION_BANK.eng = window.QUESTION_BANK.eng || [];

(function(){
var Q = [

/* ---------- GRAMMAR ---------- */
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nNeither the project manager nor the analysts ___ available for the review on Thursday.",
  choices: ["was", "were", "is", "has been"],
  answer: 1,
  explanation: "With 'neither … nor', the verb agrees with the subject closest to it. That subject is 'the analysts', which is plural, so 'were' is correct. Had the order been reversed — 'neither the analysts nor the project manager' — the singular 'was' would be required."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nThe report, along with its supporting appendices, ___ due on Friday.",
  choices: ["are", "is", "were", "have been"],
  answer: 1,
  explanation: "Phrases introduced by 'along with', 'as well as' and 'together with' are parenthetical and do not change the number of the subject. The subject is 'the report', which is singular, so the verb is 'is'."
},
{
  type: "grammar", d: 3,
  prompt: "Choose the correct option:\n\nIf the client ___ to our proposal earlier, we would have adjusted the timeline.",
  choices: ["responded", "had responded", "would respond", "has responded"],
  answer: 1,
  explanation: "This is a third conditional, used for hypothetical situations in the past. The pattern is 'if + past perfect' in the condition and 'would have + past participle' in the result, so 'had responded' pairs with 'would have adjusted'."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nEach of the five departments ___ submitted its budget on time.",
  choices: ["have", "has", "are", "were"],
  answer: 1,
  explanation: "'Each' is always singular, no matter how plural the phrase that follows it sounds. The subject is 'each', not 'departments', so the verb is 'has'. The singular possessive 'its' later in the sentence confirms the agreement."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nThe engineering team ___ working on the migration since March.",
  choices: ["is", "was", "has been", "have being"],
  answer: 2,
  explanation: "'Since March' marks an action that began in the past and continues now, which calls for the present perfect continuous: 'has been working'. The collective noun 'team' takes a singular verb in standard business usage."
},
{
  type: "grammar", d: 3,
  prompt: "Choose the correct option:\n\nShe is one of the few candidates who ___ experience in both regulated and unregulated markets.",
  choices: ["has", "have", "is having", "had been"],
  answer: 1,
  explanation: "The relative pronoun 'who' refers back to 'candidates', not to 'one', so the verb is plural: 'have'. A useful test is to reorder the sentence — 'of the few candidates who have experience, she is one' — which makes the plural agreement audible."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nBetween you and ___, the revenue forecast looks optimistic.",
  choices: ["I", "me", "myself", "mine"],
  answer: 1,
  explanation: "'Between' is a preposition, and pronouns following a preposition take the object form, so 'me' is correct. 'Between you and I' is a very common overcorrection, but the pronoun is not the subject of any verb here."
},
{
  type: "grammar", d: 3,
  prompt: "Choose the correct option:\n\nThe number of applications we received this quarter ___ increased sharply.",
  choices: ["have", "has", "were", "are"],
  answer: 1,
  explanation: "'The number of' is a singular subject and takes 'has'. Compare 'a number of applications have increased', where 'a number of' functions as a quantifier meaning 'several' and takes a plural verb. The article changes the agreement."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nBy the time the audit begins next month, we ___ all the supporting documentation.",
  choices: ["will prepare", "will have prepared", "have prepared", "prepared"],
  answer: 1,
  explanation: "The sentence describes an action that will be completed before a specified future point, which is the future perfect: 'will have prepared'. The marker 'by the time … next month' is the signal."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nThe consultant recommended that the company ___ its pricing structure before entering the new market.",
  choices: ["revises", "revise", "will revise", "is revising"],
  answer: 1,
  explanation: "Verbs such as 'recommend', 'suggest', 'insist' and 'require' are followed by the subjunctive in a that-clause, which uses the base form regardless of the subject: 'that the company revise'. The absence of the usual -s is deliberate, not an error."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nThis quarter's results were significantly better than ___.",
  choices: ["last year", "those of last year", "that of last year", "last year's ones"],
  answer: 1,
  explanation: "The comparison must be between like things — results with results. 'Those of last year' stands in for 'the results of last year', keeping the comparison parallel. 'Better than last year' compares results with a period of time."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nWe have very ___ information about the competitor's pricing strategy.",
  choices: ["few", "little", "a few", "many"],
  answer: 1,
  explanation: "'Information' is an uncountable noun in English, so it takes 'little' and 'much' rather than 'few' and 'many'. The same applies to 'advice', 'equipment', 'feedback' and 'research'."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nThe supplier failed to deliver on time, ___ delayed the entire production schedule.",
  choices: ["which", "that", "what", "who"],
  answer: 0,
  explanation: "'Which' can refer back to a whole clause — the fact that the supplier failed to deliver — whereas 'that' cannot be used this way in a non-defining clause after a comma. 'What' would need no antecedent and 'who' refers only to people."
},
{
  type: "grammar", d: 3,
  prompt: "Choose the correct option:\n\nHad we known about the regulatory change, we ___ the launch date.",
  choices: ["would move", "would have moved", "had moved", "will have moved"],
  answer: 1,
  explanation: "'Had we known' is an inverted third conditional, equivalent to 'if we had known', so the result clause takes 'would have + past participle'. This inversion is common in formal and written business English."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nThe board asked the finance director ___ the revised forecast at the next meeting.",
  choices: ["presenting", "to present", "present", "that he presents"],
  answer: 1,
  explanation: "'Ask' followed by a person takes the infinitive: 'asked the director to present'. Verbs like 'suggest' and 'recommend' behave differently, which is why the pattern must be learned verb by verb rather than by rule."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nNone of the proposals submitted so far ___ the client's budget constraints.",
  choices: ["meet", "meets", "is meeting", "have met"],
  answer: 1,
  explanation: "'None' is treated as singular in careful formal usage, meaning 'not one', so 'meets' is the safer choice in a business-English test. The plural 'meet' is widely accepted in speech but is the weaker answer here."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nWe expect the results ___ by the end of the week.",
  choices: ["to publish", "to be published", "publishing", "being published"],
  answer: 1,
  explanation: "The results do not publish themselves; they receive the action, so the passive infinitive 'to be published' is required. 'To publish' would make the results the agent."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nThe new system is far ___ than the one it replaced.",
  choices: ["more efficient", "efficienter", "most efficient", "the more efficient"],
  answer: 0,
  explanation: "Adjectives of three or more syllables form the comparative with 'more', so 'more efficient' is correct. 'Most efficient' is the superlative and would need three or more items being compared, not two."
},
{
  type: "grammar", d: 3,
  prompt: "Choose the correct option:\n\nNot only ___ the deadline, but the team also came in under budget.",
  choices: ["they met", "did they meet", "they did meet", "met they"],
  answer: 1,
  explanation: "When a sentence opens with a negative adverbial such as 'not only', 'rarely' or 'under no circumstances', the subject and auxiliary invert: 'did they meet'. Without the inversion the construction is ungrammatical in formal writing."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nThe contract ___ by both parties before work can begin.",
  choices: ["must sign", "must be signed", "must have signed", "must signing"],
  answer: 1,
  explanation: "The contract is the thing being signed, so the passive 'must be signed' is required. 'Must sign' would mean the contract performs the signing."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nWe are looking forward to ___ your revised proposal.",
  choices: ["receive", "receiving", "have received", "be received"],
  answer: 1,
  explanation: "In 'look forward to', the word 'to' is a preposition rather than part of an infinitive, so it is followed by the -ing form: 'receiving'. The same applies to 'object to', 'be committed to' and 'be used to'."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nThe manager told the team that the deadline ___ moved to the following Monday.",
  choices: ["has been", "had been", "will be", "is being"],
  answer: 1,
  explanation: "In reported speech introduced by a past-tense verb such as 'told', the tense of the original statement shifts back one step. A present perfect 'has been moved' becomes the past perfect 'had been moved'."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nThere ___ several reasons why the pilot was postponed.",
  choices: ["was", "were", "has been", "is"],
  answer: 1,
  explanation: "In 'there is / there are' constructions the verb agrees with the noun that follows it. 'Several reasons' is plural, so the verb is 'were'."
},
{
  type: "grammar", d: 3,
  prompt: "Choose the correct option:\n\n___ the delay in approvals, the team still delivered the first release on schedule.",
  choices: ["Despite of", "In spite", "Despite", "Although"],
  answer: 2,
  explanation: "'Despite' is followed directly by a noun phrase, with no 'of'. 'In spite' requires 'of' to be complete, and 'although' introduces a clause with its own subject and verb, not a bare noun phrase."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nThe company has been trading ___ 1998 and has never posted a loss.",
  choices: ["for", "since", "from", "during"],
  answer: 1,
  explanation: "'Since' marks the point at which a period began, while 'for' marks its length. With a specific year such as 1998, 'since' is required; 'for' would need a duration like 'for twenty-eight years'."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nIf the exchange rate ___ further, our margins on imported components will suffer.",
  choices: ["will fall", "falls", "would fall", "fell"],
  answer: 1,
  explanation: "This is a first conditional describing a realistic future possibility: the if-clause takes the present simple and the main clause takes 'will'. English does not use 'will' in the if-clause of a first conditional."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nThe two candidates were equally strong, so we could not decide which of ___ to appoint.",
  choices: ["them", "they", "these", "those"],
  answer: 0,
  explanation: "The pronoun follows the preposition 'of' and so takes the object form 'them'. 'These' and 'those' are demonstratives and would need a noun or a clearer antecedent to work here."
},
{
  type: "grammar", d: 3,
  prompt: "Choose the correct option:\n\nThe firm is considering ___ its London office to reduce fixed costs.",
  choices: ["to close", "closing", "close", "for closing"],
  answer: 1,
  explanation: "'Consider' is followed by the -ing form, not the infinitive. Verbs taking the gerund include 'avoid', 'suggest', 'postpone' and 'risk'; verbs taking the infinitive include 'decide', 'agree' and 'plan'."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nBy the end of last year, the platform ___ more than two million transactions.",
  choices: ["processed", "had processed", "has processed", "was processing"],
  answer: 1,
  explanation: "'By the end of last year' fixes a point in the past, and the sentence describes what was already complete before it, which calls for the past perfect: 'had processed'."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nThe findings were presented to the committee, ___ approved them without amendment.",
  choices: ["which", "who", "whom", "that"],
  answer: 1,
  explanation: "The relative pronoun is the subject of 'approved' and refers to the committee as a group of people acting, so 'who' is correct. 'Whom' would be needed only if the pronoun were the object of the verb."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nOur data suggests that customers ___ increasingly price-sensitive over the past two years.",
  choices: ["become", "have become", "became", "are becoming"],
  answer: 1,
  explanation: "'Over the past two years' describes a period running up to the present, which the present perfect marks: 'have become'. The past simple 'became' would place the change entirely in a finished period."
},
{
  type: "grammar", d: 3,
  prompt: "Choose the correct option:\n\nThe more detailed the specification, ___ the risk of rework later.",
  choices: ["the lower", "lower", "the lowest", "lowest"],
  answer: 0,
  explanation: "The 'the more … the more' construction requires 'the' before each comparative: 'the more detailed …, the lower …'. Dropping the article or using the superlative breaks the parallel structure."
},

/* ---------- PREPOSITIONS AND IDIOM ---------- */
{
  type: "idiom", d: 2,
  prompt: "Choose the correct option:\n\nThe delay was largely attributable ___ a shortage of certified components.",
  choices: ["on", "to", "for", "with"],
  answer: 1,
  explanation: "'Attributable to' is the fixed collocation, as are 'attribute something to something' and 'due to'. 'Responsible for' takes a different preposition, which is the usual source of the confusion."
},
{
  type: "idiom", d: 2,
  prompt: "Choose the correct option:\n\nThe finance team is responsible ___ preparing the quarterly consolidation.",
  choices: ["of", "for", "to", "on"],
  answer: 1,
  explanation: "'Responsible for' is the standard collocation when naming a task or area. 'Responsible to' exists but means accountable to a person, as in 'responsible to the board'."
},
{
  type: "idiom", d: 2,
  prompt: "Choose the correct option:\n\nThe new policy will come ___ effect at the start of the next financial year.",
  choices: ["in", "into", "on", "at"],
  answer: 1,
  explanation: "'Come into effect' is the fixed expression for a rule beginning to apply. The related form 'be in effect' describes the ongoing state, which is why both prepositions appear in similar contexts."
},
{
  type: "idiom", d: 2,
  prompt: "Choose the correct option:\n\nWe need to comply ___ the reporting requirements set out in the framework.",
  choices: ["to", "with", "on", "for"],
  answer: 1,
  explanation: "'Comply with' is the fixed collocation. The related noun works the same way — 'compliance with the requirements' — while 'adhere to' takes a different preposition for the same idea."
},
{
  type: "idiom", d: 2,
  prompt: "Choose the correct option:\n\nThe results are broadly consistent ___ what we observed in the pilot phase.",
  choices: ["to", "with", "of", "against"],
  answer: 1,
  explanation: "'Consistent with' is the standard collocation when comparing findings. 'Consistent in' exists but means uniform over time, as in 'consistent in quality'."
},
{
  type: "idiom", d: 2,
  prompt: "Choose the correct option:\n\nSeveral departments objected ___ the proposed reallocation of the training budget.",
  choices: ["against", "to", "on", "for"],
  answer: 1,
  explanation: "'Object to' is the fixed pattern, and because 'to' is a preposition here it is followed by a noun or an -ing form: 'objected to reallocating the budget'."
},
{
  type: "idiom", d: 2,
  prompt: "Choose the correct option:\n\nThe supplier's performance fell short ___ the standard set out in the contract.",
  choices: ["from", "of", "to", "than"],
  answer: 1,
  explanation: "'Fall short of' is the fixed expression for failing to reach a target or standard. 'Short from' and 'short than' are not English collocations."
},
{
  type: "idiom", d: 2,
  prompt: "Choose the correct option:\n\nThe two forecasts differ ___ each other by less than three percent.",
  choices: ["to", "from", "with", "than"],
  answer: 1,
  explanation: "'Differ from' is the standard collocation when comparing two things. 'Differ with' exists but means to disagree with a person, as in 'I differ with my colleague on this point'."
},
{
  type: "idiom", d: 2,
  prompt: "Choose the correct option:\n\nThe committee is expected to decide ___ the shortlist by the end of the month.",
  choices: ["about", "on", "for", "to"],
  answer: 1,
  explanation: "'Decide on' is the collocation used when choosing from options. 'Decide about' is possible in casual speech but is weaker in formal business English, and 'decide to' is followed by a verb rather than a noun."
}
,

/* ---------- VOCABULARY ---------- */
{
  type: "vocabulary", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe consultant's report was ___: it identified the problem without ever proposing a solution.",
  choices: ["exhaustive", "incisive", "diagnostic", "prescriptive"],
  answer: 2,
  explanation: "'Diagnostic' means concerned with identifying what is wrong, which is exactly what the sentence describes. 'Prescriptive' would mean the opposite — recommending action — and 'exhaustive' and 'incisive' describe thoroughness and sharpness rather than the identify-but-not-solve distinction."
},
{
  type: "vocabulary", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe two divisions have ___ product lines, so merging them would eliminate duplication.",
  choices: ["overlapping", "divergent", "proprietary", "adjacent"],
  answer: 0,
  explanation: "'Overlapping' means covering some of the same ground, which is what creates the duplication the sentence mentions. 'Divergent' means moving apart, 'adjacent' means neighbouring without overlap, and 'proprietary' concerns ownership."
},
{
  type: "vocabulary", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe forecast rests on several ___ assumptions that have not yet been tested against real data.",
  choices: ["robust", "tentative", "empirical", "definitive"],
  answer: 1,
  explanation: "'Tentative' means provisional and not yet confirmed, which fits assumptions awaiting testing. 'Robust' and 'definitive' both suggest the opposite, and 'empirical' means derived from observation — precisely what these assumptions are not."
},
{
  type: "vocabulary", d: 3,
  prompt: "Choose the word that best completes the sentence:\n\nManagement was accused of being ___ in its response, addressing the symptoms while leaving the underlying cause untouched.",
  choices: ["superficial", "meticulous", "candid", "expedient"],
  answer: 0,
  explanation: "'Superficial' means dealing only with the surface, which matches treating symptoms rather than causes. 'Expedient' is close in tone but means convenient rather than shallow, and 'meticulous' and 'candid' describe care and honesty."
},
{
  type: "vocabulary", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe agreement includes a clause allowing either party to ___ the contract with ninety days' notice.",
  choices: ["terminate", "initiate", "ratify", "arbitrate"],
  answer: 0,
  explanation: "'Terminate' means to bring to an end, which is what a notice clause provides for. 'Initiate' means to begin, 'ratify' means to formally approve, and 'arbitrate' means to settle a dispute as a third party."
},
{
  type: "vocabulary", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nRevenue growth has been ___ over the past three quarters, never rising or falling by more than one percent.",
  choices: ["volatile", "stagnant", "erratic", "steady"],
  answer: 3,
  explanation: "'Steady' means consistent and without sharp movement, matching the very small variation described. 'Volatile' and 'erratic' mean the opposite, and 'stagnant' would imply no growth at all rather than consistent growth."
},
{
  type: "vocabulary", d: 3,
  prompt: "Choose the word that best completes the sentence:\n\nThe committee reached a ___ decision: every member voted in favour without reservation.",
  choices: ["majority", "unanimous", "provisional", "contentious"],
  answer: 1,
  explanation: "'Unanimous' means agreed by everyone, which is what 'every member voted in favour' describes. A 'majority' decision implies dissent, 'provisional' means temporary, and 'contentious' means disputed."
},
{
  type: "vocabulary", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe firm decided to ___ its supplier base, moving from a single vendor to four.",
  choices: ["consolidate", "diversify", "streamline", "outsource"],
  answer: 1,
  explanation: "'Diversify' means to spread across more options, which is what moving from one vendor to four achieves. 'Consolidate' and 'streamline' both mean reducing to fewer, and 'outsource' concerns moving work outside the company."
},
{
  type: "vocabulary", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe new regulation will ___ significant additional reporting obligations on mid-sized firms.",
  choices: ["impose", "relieve", "waive", "defer"],
  answer: 0,
  explanation: "'Impose' means to place a requirement on someone, which fits additional obligations. 'Relieve' and 'waive' mean removing a burden, and 'defer' means postponing it."
},
{
  type: "vocabulary", d: 3,
  prompt: "Choose the word that best completes the sentence:\n\nThe chief executive's remarks were deliberately ___, giving the impression of a commitment without actually making one.",
  choices: ["ambiguous", "concise", "emphatic", "verbose"],
  answer: 0,
  explanation: "'Ambiguous' means open to more than one interpretation, which is how a statement can imply commitment without delivering it. 'Emphatic' means forceful and clear, 'concise' means brief, and 'verbose' means wordy."
},
{
  type: "vocabulary", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nSales in the fourth quarter were ___ by an unusually mild winter, which suppressed demand for heating products.",
  choices: ["bolstered", "dampened", "sustained", "accelerated"],
  answer: 1,
  explanation: "'Dampened' means reduced or held back, which matches suppressed demand. 'Bolstered' and 'accelerated' both mean increased, and 'sustained' means maintained at the same level."
},
{
  type: "vocabulary", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe auditors found no evidence of fraud, but they did identify several ___ in the approval process.",
  choices: ["weaknesses", "sanctions", "provisions", "endorsements"],
  answer: 0,
  explanation: "'Weaknesses' are shortcomings in a control or process, which is what auditors report when no fraud is found but the process is imperfect. 'Sanctions' are penalties, 'provisions' are contractual terms, and 'endorsements' are approvals."
},
{
  type: "vocabulary", d: 3,
  prompt: "Choose the word that best completes the sentence:\n\nThe pilot results were promising, but the sample was too small to be ___ of the wider customer base.",
  choices: ["representative", "indicative", "exhaustive", "comparable"],
  answer: 0,
  explanation: "'Representative' means accurately reflecting the characteristics of a larger group, which is precisely what a small sample cannot guarantee. 'Indicative' is weaker and would sit oddly with 'too small to be', since small samples can still be indicative."
},
{
  type: "vocabulary", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe two roles were merged to ___ the reporting structure, which had grown unnecessarily complex.",
  choices: ["simplify", "duplicate", "delegate", "escalate"],
  answer: 0,
  explanation: "'Simplify' means to make less complex, which is the stated purpose of the merger. 'Duplicate' would add complexity, while 'delegate' and 'escalate' describe passing work down or up rather than restructuring it."
},
{
  type: "vocabulary", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe project was ___ indefinitely after the main funder withdrew.",
  choices: ["suspended", "concluded", "expedited", "reinstated"],
  answer: 0,
  explanation: "'Suspended' means stopped temporarily with no fixed restart, which matches 'indefinitely'. 'Concluded' would mean finished as planned, 'expedited' means sped up, and 'reinstated' means restored."
},
{
  type: "vocabulary", d: 3,
  prompt: "Choose the word that best completes the sentence:\n\nThe two datasets could not be combined because their definitions of 'active customer' were not ___.",
  choices: ["compatible", "confidential", "cumulative", "conditional"],
  answer: 0,
  explanation: "'Compatible' means able to work together, which is what incompatible definitions prevent. 'Cumulative' means adding up over time, 'conditional' means dependent on something, and 'confidential' concerns secrecy."
},
{
  type: "vocabulary", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nBecause demand is highly ___, the company holds extra inventory to absorb unexpected spikes.",
  choices: ["predictable", "volatile", "marginal", "residual"],
  answer: 1,
  explanation: "'Volatile' means liable to sudden change, which explains why buffer inventory is needed. 'Predictable' would remove the need for a buffer, and 'marginal' and 'residual' describe size rather than variability."
},
{
  type: "vocabulary", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe savings identified in the review were ___: they amounted to less than half a percent of total spend.",
  choices: ["substantial", "negligible", "recurring", "unforeseen"],
  answer: 1,
  explanation: "'Negligible' means too small to be worth considering, which fits less than half a percent. 'Substantial' means the opposite, while 'recurring' and 'unforeseen' describe timing and expectation rather than magnitude."
},
{
  type: "vocabulary", d: 3,
  prompt: "Choose the word that best completes the sentence:\n\nThe agreement was signed on the ___ that the supplier would obtain certification within six months.",
  choices: ["premise", "proviso", "pretext", "precedent"],
  answer: 1,
  explanation: "'Proviso' means a condition attached to an agreement, which is exactly what the sentence describes. 'Premise' is an underlying assumption in an argument, 'pretext' is a false reason, and 'precedent' is an earlier case used as a guide."
},
{
  type: "vocabulary", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe team was asked to ___ the findings into a two-page summary for the board.",
  choices: ["condense", "elaborate", "annotate", "replicate"],
  answer: 0,
  explanation: "'Condense' means to reduce to a shorter form while keeping the substance, which is what a two-page summary requires. 'Elaborate' means to expand, 'annotate' means to add notes, and 'replicate' means to reproduce."
},
{
  type: "vocabulary", d: 2,
  prompt: "Choose the word that best completes the sentence:\n\nThe increase in costs was partly ___ by higher selling prices, so margins fell less than expected.",
  choices: ["offset", "compounded", "amplified", "triggered"],
  answer: 0,
  explanation: "'Offset' means counterbalanced, which explains why the margin fall was smaller than the cost increase alone would suggest. 'Compounded' and 'amplified' would make the effect worse, and 'triggered' means caused."
},
{
  type: "vocabulary", d: 3,
  prompt: "Choose the word that best completes the sentence:\n\nThe report's conclusions were ___ by the discovery that a quarter of the survey responses had been double-counted.",
  choices: ["undermined", "corroborated", "reiterated", "expedited"],
  answer: 0,
  explanation: "'Undermined' means weakened or called into question, which is what a serious counting error does to conclusions. 'Corroborated' means confirmed, 'reiterated' means repeated, and 'expedited' means hastened."
},

/* ---------- SENTENCE CORRECTION ---------- */
{
  type: "sentence correction", d: 2,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "Having reviewed the figures, the conclusion was that the forecast was too optimistic.",
    "Having reviewed the figures, we concluded that the forecast was too optimistic.",
    "Having reviewed the figures, it was concluded the forecast was too optimistic.",
    "The figures having been reviewed, the forecast was concluded too optimistic."
  ],
  answer: 1,
  explanation: "The opening participle must attach to the person who did the reviewing. In the other versions the grammatical subject is 'the conclusion' or 'it', neither of which reviewed anything, leaving the participle dangling."
},
{
  type: "sentence correction", d: 2,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "The new process is faster, cheaper, and it uses less energy.",
    "The new process is faster, cheaper and more energy-efficient.",
    "The new process is faster, cheaper, and energy is used less.",
    "The new process is faster, it is cheaper, and more energy-efficient."
  ],
  answer: 1,
  explanation: "Items in a list should share the same grammatical form. Three adjectives — 'faster, cheaper and more energy-efficient' — are parallel; the other versions mix adjectives with full clauses and break the pattern."
},
{
  type: "sentence correction", d: 3,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "We only reviewed the contracts signed after March.",
    "We reviewed only the contracts signed after March.",
    "Only we reviewed the contracts signed after March.",
    "We reviewed the contracts only signed after March."
  ],
  answer: 1,
  explanation: "'Only' should sit immediately before what it limits. Placed before 'the contracts', it correctly restricts which contracts were reviewed. Before 'reviewed' it suggests reviewing was the sole action taken, and at the start it says nobody else reviewed them."
},
{
  type: "sentence correction", d: 2,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "The report was submitted by the team and it was approved by the board.",
    "The team submitted the report and the board approved it.",
    "The report having been submitted by the team, approval was given by the board.",
    "Submission of the report by the team was followed by approval by the board."
  ],
  answer: 1,
  explanation: "The active voice is shorter and identifies who did what without ambiguity. The other versions use passive constructions and nominalisations that add words while removing clarity about the actors."
},
{
  type: "sentence correction", d: 3,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "Neither of the two proposals were considered viable by the committee.",
    "Neither of the two proposals was considered viable by the committee.",
    "Neither of the two proposals have been considered viable by the committee.",
    "Neither of the two proposals are considered viable by the committee."
  ],
  answer: 1,
  explanation: "'Neither' is singular and takes a singular verb, so 'was' is correct. The plural 'proposals' sits between the subject and the verb and pulls the ear towards a plural form, which is what makes this pattern a reliable test item."
},
{
  type: "sentence correction", d: 2,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "The client requested that we would send the revised terms by Friday.",
    "The client requested that we send the revised terms by Friday.",
    "The client requested that we will send the revised terms by Friday.",
    "The client requested for us sending the revised terms by Friday."
  ],
  answer: 1,
  explanation: "'Request that' takes the subjunctive, which uses the base form of the verb: 'that we send'. Adding 'would' or 'will' breaks the construction, and 'request for … sending' is not an English pattern."
},
{
  type: "sentence correction", d: 3,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "Our margins are higher than our competitors.",
    "Our margins are higher than our competitors'.",
    "Our margins are higher than our competitors are.",
    "Our margins are more high than our competitors."
  ],
  answer: 1,
  explanation: "The comparison is between two sets of margins, so the possessive apostrophe after 'competitors' is essential: it stands for 'our competitors' margins'. Without it the sentence compares margins to companies."
},
{
  type: "sentence correction", d: 2,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "The system crashed twice last week, this caused significant delays.",
    "The system crashed twice last week, which caused significant delays.",
    "The system crashed twice last week this caused significant delays.",
    "The system crashed twice last week, causing significant delays, this delayed the release."
  ],
  answer: 1,
  explanation: "A comma alone cannot join two independent clauses — that is a comma splice, which the first and last options commit. Using the relative pronoun 'which' subordinates the second clause correctly."
},
{
  type: "sentence correction", d: 2,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "Each employee must submit their timesheet by Monday.",
    "Each employee must submit his or her timesheet by Monday.",
    "Each employee must submit the timesheet by Monday.",
    "All employees must submit their timesheets by Monday."
  ],
  answer: 3,
  explanation: "Recasting in the plural avoids the singular-they debate and the clumsy 'his or her' entirely, while saying exactly the same thing. Where a formal register is required, making the subject plural is the cleanest fix."
},
{
  type: "sentence correction", d: 3,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "The consultant presented the findings to the directors that were controversial.",
    "The consultant presented the findings, which were controversial, to the directors.",
    "The consultant presented to the directors the findings that were controversial.",
    "The consultant presented the controversial findings to the directors."
  ],
  answer: 3,
  explanation: "Placing 'controversial' directly before 'findings' removes all ambiguity in the fewest words. The first version leaves the relative clause next to 'directors', implying it was the directors who were controversial."
},
{
  type: "sentence correction", d: 2,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "Due to the fact that the supplier was late, we missed the deadline.",
    "Because the supplier was late, we missed the deadline.",
    "Owing to the fact of the supplier's lateness, we missed the deadline.",
    "On account of the supplier being late, we missed the deadline."
  ],
  answer: 1,
  explanation: "'Because' does in one word what the other options take four or five to do. 'Due to the fact that' and 'owing to the fact of' are padding, and business-English tests consistently reward the direct construction."
},
{
  type: "sentence correction", d: 3,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "The pilot was successful, we therefore recommend a full rollout.",
    "The pilot was successful; we therefore recommend a full rollout.",
    "The pilot was successful therefore we recommend a full rollout.",
    "The pilot was successful, therefore, we recommend a full rollout."
  ],
  answer: 1,
  explanation: "'Therefore' is a conjunctive adverb, not a conjunction, so it cannot join two independent clauses with a comma. A semicolon before it — or a full stop — is required."
},
{
  type: "sentence correction", d: 2,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "We need to urgently address the backlog before the audit.",
    "We need to address the backlog urgently before the audit.",
    "We urgently need to address the backlog before the audit.",
    "Urgently we need to address the backlog before the audit."
  ],
  answer: 2,
  explanation: "Placing 'urgently' before 'need' keeps the infinitive 'to address' intact and reads naturally. Split infinitives are widely tolerated, but in a formal test the unsplit version is the safer answer."
},
{
  type: "sentence correction", d: 3,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "The company reduced costs by closing two sites, cutting overtime, and a hiring freeze.",
    "The company reduced costs by closing two sites, cutting overtime and freezing hiring.",
    "The company reduced costs by closing two sites, overtime cuts and freezing hiring.",
    "The company reduced costs through closing two sites, overtime was cut and hiring frozen."
  ],
  answer: 1,
  explanation: "All three items after 'by' should take the same -ing form: closing, cutting, freezing. The other versions mix gerunds with noun phrases or clauses, breaking the parallel structure."
},
{
  type: "sentence correction", d: 2,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "There is three outstanding issues that need resolution.",
    "There are three outstanding issues that need resolution.",
    "There is three outstanding issues needing resolution.",
    "There has been three outstanding issues to resolve."
  ],
  answer: 1,
  explanation: "In 'there is / there are' the verb agrees with what follows it. 'Three outstanding issues' is plural, so the verb must be 'are'."
},
{
  type: "sentence correction", d: 3,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "After analysing the data, several inconsistencies were identified.",
    "After analysing the data, the analysts identified several inconsistencies.",
    "After analysing the data, there were several inconsistencies identified.",
    "After the data was analysed, several inconsistencies were identifying."
  ],
  answer: 1,
  explanation: "The participial phrase 'after analysing the data' must describe whoever did the analysing. Only the second version supplies that subject; in the others the inconsistencies appear to have analysed the data themselves."
},
{
  type: "sentence correction", d: 2,
  prompt: "Which version of the sentence is best written?",
  choices: [
    "The proposal was rejected on the grounds of it being too expensive.",
    "The proposal was rejected because it was too expensive.",
    "The proposal was rejected, the reason being its expense.",
    "The proposal was rejected, this was because of the expense."
  ],
  answer: 1,
  explanation: "'Because it was too expensive' states the reason directly and grammatically. The third and fourth versions attach explanations with commas where a conjunction or full stop is needed, and the first is unnecessarily indirect."
},

/* ---------- READING ---------- */
{
  type: "reading", d: 2,
  prompt: "Read the passage and answer the question.\n\nMost organisations measure customer satisfaction after a support interaction has ended. This captures how the conversation felt but says little about whether the customer's problem was actually solved. Firms that also track repeat contacts on the same issue often find a very different picture: agents who score highly on politeness sometimes generate the most follow-up calls, because a pleasant conversation that resolves nothing simply defers the work.\n\nWhat does the passage suggest about satisfaction scores measured immediately after a call?",
  choices: [
    "They can be high even when the underlying problem remains unresolved",
    "They are generally lower than repeat-contact measures",
    "They are the most reliable single measure of support quality",
    "They should be replaced entirely by repeat-contact tracking"
  ],
  answer: 0,
  explanation: "The passage says such scores capture 'how the conversation felt' rather than whether the problem was solved, and gives the example of polite agents generating the most follow-up calls. It recommends tracking repeat contacts as well, not instead, so the fourth option overstates the argument."
},
{
  type: "reading", d: 2,
  prompt: "Read the passage and answer the question.\n\nWhen a company reports that a cost-saving programme delivered its target, the figure is almost always a gross number. Savings are counted where they occur, while the costs of achieving them — redundancy payments, consultancy fees, new systems — are recorded elsewhere in the accounts. Analysts who want to know whether a programme was worth running have to reassemble both sides themselves, which is rarely possible from published statements alone.\n\nWhat is the main point of the passage?",
  choices: [
    "Reported savings figures typically exclude the costs of achieving them",
    "Cost-saving programmes rarely reach their stated targets",
    "Consultancy fees are the largest hidden cost of such programmes",
    "Published accounts deliberately conceal the results of cost programmes"
  ],
  answer: 0,
  explanation: "The passage's central claim is that reported savings are gross figures with the associated costs booked elsewhere. It does not say targets are missed, does not rank the hidden costs, and describes an accounting convention rather than deliberate concealment."
},
{
  type: "reading", d: 3,
  prompt: "Read the passage and answer the question.\n\nRemote work studies have produced apparently contradictory findings. Some report productivity gains of ten percent or more; others find measurable declines. On closer reading, the disagreement is largely definitional. Studies reporting gains tend to measure individual task output, while those reporting declines tend to measure coordination-heavy work such as onboarding, mentoring and cross-team projects. Both sets of findings may be accurate descriptions of different kinds of work.\n\nWhat does the passage suggest about the contradictory findings?",
  choices: [
    "They largely reflect differences in what each study chose to measure",
    "The studies reporting productivity gains are methodologically weaker",
    "Remote work is more productive for most kinds of work",
    "Coordination-heavy work cannot be performed remotely"
  ],
  answer: 0,
  explanation: "The passage states the disagreement is 'largely definitional' and that both sets of findings may be accurate for different kinds of work. It does not rank the studies' quality, take a side on overall productivity, or claim coordination work is impossible remotely."
},
{
  type: "reading", d: 2,
  prompt: "Read the passage and answer the question.\n\nA common failure in pricing analysis is to treat historical price stability as evidence that customers are insensitive to price. If a company has not changed its prices for several years, its data contains no information about how demand would respond to a change. The apparent stability of demand reflects the stability of the price, not any property of the customers. Firms in this position frequently discover their true elasticity only after a price rise has already cost them volume.\n\nAccording to the passage, why is historical price stability an unreliable guide to customer price sensitivity?",
  choices: [
    "Because unchanged prices generate no evidence about how demand responds to change",
    "Because customers become more price-sensitive over time",
    "Because historical data is usually recorded inaccurately",
    "Because competitors' prices also affect demand"
  ],
  answer: 0,
  explanation: "The passage's argument is that stable prices leave the data silent on elasticity: 'the stability of demand reflects the stability of the price'. It makes no claim about sensitivity changing over time, data accuracy, or competitor pricing."
},
{
  type: "reading", d: 2,
  prompt: "Read the passage and answer the question.\n\nThe standard justification for a four-day week is that a fifth day adds hours without adding much output. Where trials have succeeded, they have generally involved a redesign of meetings and internal processes rather than a simple removal of a day. Trials that removed the day without the redesign have tended to compress the same workload into fewer hours, producing longer days and, in several documented cases, higher reported stress.\n\nWhat distinguishes the successful trials described in the passage?",
  choices: [
    "They accompanied the shorter week with changes to meetings and processes",
    "They applied the shorter week only to non-customer-facing teams",
    "They reduced pay in proportion to the reduction in hours",
    "They ran for longer than the unsuccessful trials"
  ],
  answer: 0,
  explanation: "The passage attributes success to 'a redesign of meetings and internal processes rather than a simple removal of a day', and attributes failure to removing the day without that redesign. Pay, team type and trial length are not mentioned."
},
{
  type: "reading", d: 3,
  prompt: "Read the passage and answer the question.\n\nInternal benchmarking — comparing branches, plants or teams within the same organisation — is often preferred to external benchmarking because the data is easier to obtain and genuinely comparable. Its weakness is that it can only ever identify the best performer within the existing system. If every unit shares the same flawed process, internal comparison will locate the least affected unit and present it as best practice, while the flaw itself remains invisible.\n\nWhat limitation of internal benchmarking does the passage identify?",
  choices: [
    "It cannot reveal problems that affect every unit in the organisation",
    "The data it relies on is less accurate than external data",
    "It takes longer to complete than external benchmarking",
    "It works only in organisations with many comparable units"
  ],
  answer: 0,
  explanation: "The passage says internal comparison identifies only the best performer within the existing system, so a flaw shared by every unit stays invisible. It explicitly describes internal data as easier to obtain and genuinely comparable, ruling out the accuracy option."
},
{
  type: "reading", d: 2,
  prompt: "Read the passage and answer the question.\n\nWhen a firm reports that a new tool 'saved 2,000 hours', the figure usually counts time no longer spent on a task. Whether those hours turned into anything of value depends on what replaced them. If the time was absorbed by other work of equal or greater value, the saving is real; if it was distributed thinly across many people as small fragments, it may produce no measurable benefit at all. The distinction is rarely made in the reporting.\n\nWhat is the passage's main concern about reported time savings?",
  choices: [
    "That saved time does not automatically translate into value",
    "That the hours saved are usually overstated",
    "That new tools rarely save as much time as promised",
    "That employees resist tools which reduce their workload"
  ],
  answer: 0,
  explanation: "The passage accepts the hours as counted and asks what happened to them afterwards, distinguishing time absorbed by valuable work from time scattered in fragments. It does not allege overstatement, tool underperformance, or employee resistance."
},
{
  type: "reading", d: 3,
  prompt: "Read the passage and answer the question.\n\nSurvey non-response is not a neutral loss of sample size. The people who decline to answer an employee engagement survey are, on average, less engaged than those who complete it. A department reporting 85% satisfaction on a 40% response rate may therefore be describing the views of its most contented staff. Raising the response rate usually lowers the reported score, which is one reason departments with genuinely improving engagement sometimes appear to be getting worse.\n\nWhat does the passage imply about a department whose reported satisfaction score falls after its response rate improves?",
  choices: [
    "Its underlying engagement may not have deteriorated at all",
    "Its engagement has probably declined more than the score suggests",
    "Its earlier survey was administered incorrectly",
    "Its response rate is now too high to be representative"
  ],
  answer: 0,
  explanation: "The passage explains that low response rates over-represent contented staff, so a broader sample naturally produces a lower score. The final sentence makes the implication explicit: departments with genuinely improving engagement can appear to be getting worse."
}

/* END-ENG-2 */
];
Q.forEach(function(q){ window.QUESTION_BANK.eng.push(q); });
})();
