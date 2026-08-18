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
  prompt: "Choose the correct option:\n\nWe received ___ complaints this quarter than in any quarter since the redesign.",
  choices: ["less", "fewer", "lesser", "least"],
  answer: 1,
  explanation: "'Complaints' are countable, so the comparative is 'fewer'; 'less' belongs with uncountable quantities such as 'less feedback' or 'less time'. 'Lesser' means inferior in importance rather than smaller in number, and 'least' is superlative, which 'than' rules out."
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
  prompt: "Choose the correct option:\n\nThe findings were presented to the directors, ___ approved them without amendment.",
  choices: ["which", "who", "whom", "that"],
  answer: 1,
  explanation: "The antecedent is people, so 'which' is out, and the pronoun is the subject of 'approved', so 'whom' is out as well. 'That' cannot introduce a non-defining clause after a comma, which leaves 'who'."
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
  type: "sentence correction", bonus: true, d: 2,
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
  type: "sentence correction", bonus: true, d: 2,
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
  type: "sentence correction", bonus: true, d: 3,
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
  type: "sentence correction", bonus: true, d: 2,
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
  type: "sentence correction", bonus: true, d: 3,
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
  type: "sentence correction", bonus: true, d: 2,
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
  type: "sentence correction", bonus: true, d: 3,
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
  type: "sentence correction", bonus: true, d: 2,
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
  type: "sentence correction", bonus: true, d: 2,
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
  type: "sentence correction", bonus: true, d: 3,
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
  type: "sentence correction", bonus: true, d: 2,
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
  type: "sentence correction", bonus: true, d: 3,
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
  type: "sentence correction", bonus: true, d: 2,
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
  type: "sentence correction", bonus: true, d: 3,
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
  type: "sentence correction", bonus: true, d: 2,
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
  type: "sentence correction", bonus: true, d: 3,
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
  type: "sentence correction", bonus: true, d: 2,
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
},

/* ---------- EXPANSION 15 ago 2026: 30 more B2 to widen the pool after B1 was
   eliminated from the CEFR quota (recruiter confirmed no B1 in the real test). ---------- */
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nIf we had invested in the new machinery two years ago, our production costs ___ lower now.",
  choices: ["would be", "would have been", "were", "will be"],
  answer: 0,
  explanation: "This is a mixed conditional: a past hypothetical condition ('had invested') combined with a present result ('now'), so the result clause uses 'would be' rather than 'would have been', which would wrongly place the result in the past too."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nThe client wanted to know ___ the shipment would arrive.",
  choices: ["when would it", "when it would", "would it when", "when does it"],
  answer: 1,
  explanation: "In reported/embedded questions the word order reverts to statement order (subject before verb), so 'when it would' is correct. 'When would it' wrongly keeps the inverted order used only in direct questions."
},
{
  type: "grammar", d: 1,
  prompt: "Choose the correct option:\n\nUnder the new policy, all expense claims ___ approved by a line manager before reimbursement.",
  choices: ["must", "must be", "must have", "must being"],
  answer: 1,
  explanation: "Claims do not approve themselves, so a passive is needed: modal + be + past participle, 'must be approved'. 'Must' alone would need an active verb, and 'must have' would change the meaning to a deduction about the past."
},
{
  type: "grammar", d: 2,
  prompt: "Choose the correct option:\n\nI wish I ___ the contract more carefully before signing it.",
  choices: ["read", "had read", "would read", "have read"],
  answer: 1,
  explanation: "'Wish' about a past action that cannot be changed takes the past perfect: 'wish I had read'. 'Would read' expresses a wish about someone else's future behaviour or an annoying habit, not a regret about one's own past action."
},
{
  type: "grammar", d: 1,
  prompt: "Choose the correct option:\n\nThe supplier, ___ delivery record had slipped noticeably, was asked to explain the delays.",
  choices: ["who", "whose", "which", "that"],
  answer: 1,
  explanation: "'Whose' introduces a possessive relative clause, showing the delivery record belongs to the supplier. 'Who' and 'that' cannot show possession, and 'which' would need to be followed by 'its', not the noun directly."
},
{
  type: "grammar", d: 1,
  prompt: "Choose the correct option:\n\nThe bank will extend the credit line, ___ the company submits updated financial statements.",
  choices: ["provided that", "even though", "in spite of", "so that"],
  answer: 0,
  explanation: "'Provided that' introduces a necessary condition, meaning 'only if', which fits the logic here. 'Even though' and 'in spite of' introduce a contrast rather than a condition, and 'so that' expresses purpose, not a requirement."
},
{
  type: "idiom", d: 1,
  prompt: "Choose the correct option:\n\nThe board was initially reluctant ___ additional funds to the project.",
  choices: ["to commit", "committing", "for committing", "on committing"],
  answer: 0,
  explanation: "'Reluctant' is followed by a to-infinitive: 'reluctant to commit'. The gerund forms in the other options are not used after this adjective."
},
{
  type: "idiom", d: 1,
  prompt: "Choose the correct option:\n\nThe restructuring plan was met ___ fierce resistance from staff.",
  choices: ["by", "with", "from", "against"],
  answer: 1,
  explanation: "'Be met with' is the fixed phrase for describing the reaction a proposal or action receives. 'Met by' would describe someone being physically greeted, not an abstract reaction."
},
{
  type: "idiom", d: 1,
  prompt: "Choose the correct option:\n\nEmployees who have completed one year of service are entitled ___ additional annual leave.",
  choices: ["to", "for", "with", "on"],
  answer: 0,
  explanation: "'Entitled' is followed by 'to' plus a noun or infinitive: 'entitled to leave'. The other prepositions do not collocate with 'entitled' in this sense."
},
{
  type: "idiom", d: 1,
  prompt: "Choose the correct option:\n\nThe negotiating team succeeded ___ securing a two-year extension on the lease.",
  choices: ["in", "at", "on", "for"],
  answer: 0,
  explanation: "'Succeed' takes 'in' before a gerund: 'succeed in securing'. 'Succeed at' is sometimes used before a skill or task noun ('succeed at chess'), but not in this verb + gerund pattern."
},
{
  type: "idiom", d: 1,
  prompt: "Choose the correct option:\n\nSenior management is keen ___ expanding into the Southeast Asian market next year.",
  choices: ["on", "in", "for", "to"],
  answer: 0,
  explanation: "'Keen on' + gerund expresses enthusiasm for a plan. 'Keen to' is used with a bare infinitive instead ('keen to expand'), not with 'expanding', so it cannot fill this gap."
},
{
  type: "idiom", d: 1,
  prompt: "Choose the correct option:\n\nThe supplier agreed to a lower price ___ a longer-term contract.",
  choices: ["in return for", "in place of", "in charge of", "on account of"],
  answer: 0,
  explanation: "'In return for' signals an exchange: a lower price given in exchange for a longer contract. 'In place of' would mean substitution, and 'on account of' would mean the price change was caused by the contract, reversing the logic."
},
{
  type: "sentence correction", bonus: true, d: 1,
  prompt: "Which version is grammatically correct?",
  choices: [
    "The new hire is expected to manage the budget, coordinate with vendors, and reporting weekly.",
    "The new hire is expected to manage the budget, to coordinating vendors, and report weekly.",
    "The new hire is expected to manage the budget, coordinate with vendors, and report weekly.",
    "The new hire is expected manage the budget, coordinate with vendors, and report weekly."
  ],
  answer: 2,
  explanation: "The three duties following 'expected to' must be parallel: 'manage', 'coordinate' and 'report' all share the single 'to'. The other options break parallelism by switching to a gerund, inserting 'to' before a gerund, or dropping the infinitive marker entirely."
},
{
  type: "sentence correction", bonus: true, d: 2,
  prompt: "Which version is grammatically correct?",
  choices: [
    "Having reviewed the proposal twice, several concerns were raised by the committee.",
    "Having reviewed the proposal twice, the committee raised several concerns.",
    "The committee raised several concerns, having reviewed the proposal twice by them.",
    "Several concerns, having reviewed the proposal twice, were raised by the committee."
  ],
  answer: 1,
  explanation: "The participle phrase 'having reviewed the proposal twice' must modify whoever did the reviewing. Only option 2 places 'the committee' immediately after the comma as that subject; in the others, the phrase wrongly attaches to 'concerns', which cannot review anything."
},
{
  type: "sentence correction", bonus: true, d: 2,
  prompt: "Which version is correctly punctuated?",
  choices: [
    "The forecast was revised downward, the board requested a full explanation.",
    "The forecast was revised downward the board requested a full explanation.",
    "The forecast was revised downward, so the board requested a full explanation.",
    "The forecast was revised downward; so the board requested a full explanation."
  ],
  answer: 2,
  explanation: "Two independent clauses need either a conjunction or a semicolon to join them correctly. Option 3 adds the coordinating conjunction 'so' after the comma. Option 1 is a comma splice, option 2 is a run-on with no punctuation, and option 4 misuses a semicolon before a conjunction."
},
{
  type: "sentence correction", bonus: true, d: 1,
  prompt: "Which version places the modifier correctly?",
  choices: [
    "The team almost finished all of the deliverables before the deadline.",
    "The team finished almost all of the deliverables before the deadline.",
    "The team finished all of the deliverables almost before the deadline.",
    "Almost the team finished all of the deliverables before the deadline."
  ],
  answer: 1,
  explanation: "'Almost' should sit directly before the word it limits. The intended meaning is that nearly all deliverables were finished, so it belongs before 'all': 'finished almost all of the deliverables'. Option 1 wrongly suggests the team almost didn't finish at all."
},
{
  type: "sentence correction", bonus: true, d: 1,
  prompt: "Which sentence is free of redundancy?",
  choices: [
    "The two proposals were completely identical in every respect.",
    "The two proposals were identical.",
    "The two proposals were both the same and identical to one another.",
    "The two proposals were identical to each other in every single way."
  ],
  answer: 1,
  explanation: "'Identical' already means 'exactly the same', so adding 'completely', 'in every respect' or 'to one another' repeats the same idea. Option 2 states the fact once, without redundant qualifiers."
},
{
  type: "sentence correction", bonus: true, d: 1,
  prompt: "Which version expresses the idea most clearly and concisely?",
  choices: [
    "Due to the fact that the budget was reduced, the launch was postponed.",
    "Because the budget was reduced, the launch was postponed.",
    "On account of the reason that the budget being reduced, the launch was postponed.",
    "In light of the fact of the budget reduction, the launch, it was postponed."
  ],
  answer: 1,
  explanation: "'Because' expresses the causal link directly. 'Due to the fact that' and 'on account of the reason that' are wordy substitutes for 'because', and option 4 is additionally ungrammatical."
},
{
  type: "vocabulary", d: 1,
  prompt: "Choose the word that best completes the sentence:\n\nOutdated software continued to ___ the team's ability to process orders quickly.",
  choices: ["hinder", "expedite", "facilitate", "endorse"],
  answer: 0,
  explanation: "'Hinder' means to slow down or obstruct progress, fitting software that makes order processing harder. 'Facilitate' and 'expedite' mean the opposite, and 'endorse' means to approve, which is unrelated."
},
{
  type: "vocabulary", d: 1,
  prompt: "Choose the word that best completes the sentence:\n\nThe new booking platform was designed to ___ communication between clients and account managers.",
  choices: ["facilitate", "hinder", "postpone", "restrict"],
  answer: 0,
  explanation: "'Facilitate' means to make a process easier, matching a platform built to improve communication. 'Hinder' and 'restrict' suggest making something harder, and 'postpone' means to delay."
},
{
  type: "vocabulary", d: 2,
  prompt: "Choose the word closest in meaning to 'overhaul' in 'The IT department plans to overhaul the entire booking system next year':",
  choices: ["thoroughly rebuild", "slightly adjust", "temporarily disable", "gradually monitor"],
  answer: 0,
  explanation: "'Overhaul' means to examine and make major improvements or repairs, effectively rebuilding it. 'Slightly adjust' understates the scale, and 'disable' or 'monitor' describe unrelated actions."
},
{
  type: "vocabulary", d: 1,
  prompt: "Choose the word closest in meaning to 'surplus' in 'The warehouse is holding a surplus of unsold inventory':",
  choices: ["excess", "shortage", "sample", "estimate"],
  answer: 0,
  explanation: "'Surplus' means an amount left over beyond what is needed, so 'excess' is closest. 'Shortage' is the opposite meaning, and 'sample' and 'estimate' are unrelated concepts."
},
{
  type: "vocabulary", d: 1,
  prompt: "Choose the word closest in meaning to 'plummet' in 'Shares in the company plummeted after the profit warning':",
  choices: ["fell sharply", "rose gradually", "remained stable", "fluctuated slightly"],
  answer: 0,
  explanation: "'Plummet' describes a sudden, steep drop, so 'fell sharply' is closest. The other options all describe upward, stable or mild movement."
},
{
  type: "vocabulary", d: 1,
  prompt: "Choose the word that best completes the sentence:\n\nThe finance director had to ___ the remaining budget across four competing departments.",
  choices: ["allocate", "reimburse", "forfeit", "audit"],
  answer: 0,
  explanation: "'Allocate' means to distribute resources for a purpose, fitting dividing a budget among departments. 'Reimburse' means to pay back, 'forfeit' means to lose as a penalty, and 'audit' means to inspect records."
},
{
  type: "reading", d: 1,
  prompt: "Read the passage and answer the question.\n\n'A mid-sized retailer calculated that replacing a departing store manager cost roughly four months of that manager's salary once recruitment, training and lost productivity were included. Store turnover had been treated as a minor line item in the budget, but once the full replacement cost was calculated, several regions found that retention bonuses would have been cheaper than the staff they lost.'\n\nWhat is the main point of the passage?",
  choices: [
    "The true cost of turnover was higher than the budget had reflected, changing the retention calculation",
    "Retention bonuses are always more expensive than recruitment",
    "Store managers are paid too little compared to their responsibilities",
    "Training costs are the largest component of replacing a manager"
  ],
  answer: 0,
  explanation: "The passage's point is that turnover had been undercounted as 'a minor line item', and once the full cost was calculated, retention looked cheaper than replacement in several regions. It never claims bonuses are always cheaper, does not comment on pay levels, and does not rank training as the largest single cost."
},
{
  type: "reading", d: 2,
  prompt: "Read the passage and answer the question.\n\n'An online retailer tested a redesigned checkout page against the original for two weeks and found a 3% increase in completed purchases. Encouraged, the company rolled the redesign out permanently. Six months later, conversion rates had returned to their original level. A subsequent review found that the two-week test had coincided with a seasonal promotion that boosted sales across both versions of the page.'\n\nWhat does the passage suggest went wrong with the original test?",
  choices: [
    "An outside factor affecting both versions was mistaken for an effect of the redesign",
    "The redesign itself caused conversion rates to fall after six months",
    "The test period was too short to collect any data at all",
    "Customers preferred the original checkout page over the redesign"
  ],
  answer: 0,
  explanation: "The seasonal promotion lifted sales on 'both versions of the page', meaning the 3% gain was not caused by the redesign at all. The passage does not say the redesign caused the later decline, does not claim the test collected no data, and never states customers preferred the original."
},
{
  type: "reading", d: 2,
  prompt: "Read the passage and answer the question.\n\n'A car manufacturer that had operated a just-in-time supply chain for over a decade experienced no major disruption until a single supplier's factory flooded, halting production at three assembly plants within days. An internal review found that 60% of a critical component came from that one factory, a concentration the company had not tracked because it monitored supplier count, not supplier share.'\n\nWhat does the passage identify as the underlying problem?",
  choices: [
    "The company tracked the number of suppliers rather than how concentrated its supply actually was",
    "Just-in-time supply chains are inherently unreliable",
    "The flooded factory had a history of quality problems",
    "The company used too many suppliers for the critical component"
  ],
  answer: 0,
  explanation: "The review's finding is explicit: the company 'monitored supplier count, not supplier share', which hid the 60% concentration in one factory. The passage does not generalise about just-in-time chains, mentions no quality history, and the problem was too much concentration, not too many suppliers."
},
{
  type: "reading", d: 1,
  prompt: "Read the passage and answer the question.\n\n'A professional services firm moved new-employee onboarding entirely online during a period of remote work. Formal training scores on the new online modules were slightly higher than the previous in-person average. However, new hires who joined during this period took noticeably longer to become fully productive, and exit interviews showed that many struggled to build informal relationships with colleagues that had previously formed naturally in the office.'\n\nWhat does the passage suggest about the online onboarding programme?",
  choices: [
    "It improved formal training scores but may have weakened informal relationship-building that supports productivity",
    "It failed on every measure the firm tracked",
    "It should be abandoned in favour of the previous in-person format",
    "It had no measurable effect on how quickly new hires became productive"
  ],
  answer: 0,
  explanation: "The passage reports higher formal scores alongside slower time-to-productivity and weaker informal relationships, a mixed result rather than failure on every measure. It never recommends abandoning the programme, and it explicitly says productivity was affected, contradicting the fourth option."
},
{
  type: "reading", d: 2,
  prompt: "Read the passage and answer the question.\n\n'A software company added a high-priced \"enterprise\" tier to its pricing page, even though very few customers were expected to choose it. Sales of the mid-priced tier, previously the top seller, increased by 20% in the following quarter, while the enterprise tier itself accounted for under 2% of new subscriptions.'\n\nWhat does the passage suggest happened?",
  choices: [
    "The expensive tier made the mid-priced tier look more reasonable by comparison, shifting customer choices toward it",
    "Customers overwhelmingly chose the new enterprise tier",
    "The mid-priced tier's features were improved to attract more customers",
    "Adding the enterprise tier had no effect on sales of other tiers"
  ],
  answer: 0,
  explanation: "Sales of the mid-priced tier rose 20% while the new top tier itself barely sold, the classic anchoring effect of an expensive option making a cheaper one look reasonable. The passage never mentions feature changes, and it clearly reports an effect on other tiers, not an absence of one."
},
{
  type: "reading", d: 2,
  prompt: "Read the passage and answer the question.\n\n'In its quarterly letter to shareholders, a retail chain highlighted that \"comparable store sales\" had grown for the ninth consecutive quarter. The letter did not mention that the company had closed 40 of its lowest-performing stores over the same period, since closed stores are excluded from the comparable-store calculation by definition.'\n\nWhat is the passage's main point?",
  choices: [
    "A headline growth figure omitted a factor — store closures — that also shaped the underlying picture",
    "The company's overall sales grew for nine consecutive quarters",
    "Comparable store sales is a meaningless metric",
    "The company deliberately falsified its sales figures"
  ],
  answer: 0,
  explanation: "The passage points out that the celebrated metric, by its own definition, excludes closed stores, so the nine-quarter streak does not capture the full picture. It does not claim overall company sales grew, does not call the metric meaningless outright, and does not allege falsification — the calculation was accurate, just incomplete."
}

/* END-ENG-2 */
];
Q.forEach(function(q){ window.QUESTION_BANK.eng.push(q); });
})();
