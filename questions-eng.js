/* English Level — matched to TestGorilla's CEFR B1/B2 language test, which measures
   grammar & vocabulary · sentence composition · reading comprehension · listening comprehension.

   Listening cannot be practised in a text app — see the note in RESEARCH.md. Everything
   else is covered here, including the gap-fill and discourse-marker formats TestGorilla
   publishes as sample questions.

   Pace target: ~36 seconds per question (20 questions in 12 minutes).
   `d` = difficulty 1 easy / 2 medium / 3 hard. */
window.QUESTION_BANK = window.QUESTION_BANK || {};
window.QUESTION_BANK.eng = [

/* ---------- VOCABULARY ---------- */
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'mitigate':",
  choices: ["Intensify", "Alleviate", "Postpone", "Clarify"],
  answer: 1,
  explanation: "'Mitigate' means to make something less severe or painful, so 'alleviate' is the closest match. 'Intensify' is its opposite. In business writing you will most often meet it as 'mitigate risk' — to reduce a risk's severity, not to remove or delay it."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'feasible':",
  choices: ["Expensive", "Achievable", "Complicated", "Temporary"],
  answer: 1,
  explanation: "'Feasible' means capable of being done successfully, so 'achievable' is the synonym. Note that a feasible plan is not necessarily a cheap or simple one — feasibility concerns possibility alone, which is why 'a feasibility study' asks whether something can be done at all."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'ambiguous':",
  choices: ["Precise", "Unclear", "Lengthy", "Forceful"],
  answer: 1,
  explanation: "'Ambiguous' describes something open to more than one interpretation, making 'unclear' the best fit. Do not confuse it with 'ambivalent', which describes having mixed feelings — ambiguity is a property of language or evidence, ambivalence a property of a person."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'scrutinize':",
  choices: ["Ignore", "Examine closely", "Approve", "Summarize"],
  answer: 1,
  explanation: "To 'scrutinize' is to inspect with great care and attention to detail. 'Summarize' is a tempting distractor because both involve engaging with a document, but summarizing condenses while scrutinizing examines — opposite directions of effort."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'redundant':",
  choices: ["Essential", "Unnecessary", "Frequent", "Reliable"],
  answer: 1,
  explanation: "'Redundant' means exceeding what is necessary, hence 'unnecessary'. In British usage it also means dismissed from a job ('made redundant'), but the core sense of superfluity is what the word tests here."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'prudent':",
  choices: ["Reckless", "Sensible", "Generous", "Rapid"],
  answer: 1,
  explanation: "'Prudent' describes acting with care and good judgement about the future, so 'sensible' is the closest option and 'reckless' the direct opposite. The related noun 'prudence' appears constantly in financial contexts, as in 'prudent reserves'."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'substantiate':",
  choices: ["Refute", "Support with evidence", "Replace", "Simplify"],
  answer: 1,
  explanation: "To 'substantiate' a claim is to provide evidence proving it true. 'Refute' means the opposite — to disprove. The shared root with 'substance' is a useful memory aid: you are giving the claim substance."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'volatile':",
  choices: ["Stable", "Unpredictable", "Valuable", "Transparent"],
  answer: 1,
  explanation: "'Volatile' means liable to rapid and unpredictable change, so 'unpredictable' fits and 'stable' is the antonym. Financial writing uses it constantly for prices and markets that swing sharply in either direction."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'consolidate':",
  choices: ["Separate", "Combine", "Postpone", "Announce"],
  answer: 1,
  explanation: "'Consolidate' means to unite separate elements into a single whole, so 'combine' is correct. In accounting, 'consolidated financial statements' merge a parent company and its subsidiaries into one set of figures — the same underlying idea."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'obsolete':",
  choices: ["Outdated", "Expensive", "Fragile", "Essential"],
  answer: 0,
  explanation: "'Obsolete' means no longer in use because something newer has replaced it, which 'outdated' captures exactly. Obsolete equipment may still function perfectly well; what makes it obsolete is that better alternatives now exist."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'discrepancy':",
  choices: ["Agreement", "Inconsistency", "Delay", "Shortage"],
  answer: 1,
  explanation: "A 'discrepancy' is a difference between two things that should match, making 'inconsistency' the synonym. You will meet it most often as 'a discrepancy between the reported and actual figures' — a mismatch requiring investigation."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'meticulous':",
  choices: ["Careless", "Extremely careful", "Hesitant", "Impatient"],
  answer: 1,
  explanation: "'Meticulous' describes showing great attention to detail, so 'extremely careful' is correct. It carries a positive connotation of thoroughness, unlike 'fussy' or 'pedantic', which describe excessive attention to trivial detail."
},
{
  type: "vocabulary",
  prompt: "Choose the word that is most nearly OPPOSITE in meaning to 'abundant':",
  choices: ["Plentiful", "Scarce", "Visible", "Complex"],
  answer: 1,
  explanation: "'Abundant' means existing in large quantities, so its opposite is 'scarce', meaning insufficient in supply. 'Plentiful' is a synonym rather than an antonym — read carefully whenever a question asks for the opposite."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'comprehensive':",
  choices: ["Understandable", "Complete and thorough", "Brief", "Compulsory"],
  answer: 1,
  explanation: "'Comprehensive' means covering all or nearly all elements of something. The trap is 'understandable', which is the meaning of the similar-looking 'comprehensible' — a single suffix separates coverage from clarity."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'incentive':",
  choices: ["Obstacle", "Motivation", "Penalty", "Requirement"],
  answer: 1,
  explanation: "An 'incentive' is something that encourages a person to act, so 'motivation' is correct. A penalty may also influence behaviour, but it does so by discouraging rather than encouraging, which is the opposite mechanism."
},

/* ---------- GRAMMAR: AGREEMENT ---------- */
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'Neither the manager nor the analysts ___ available this afternoon.'",
  choices: ["is", "are", "was", "has been"],
  answer: 1,
  explanation: "With 'neither...nor', the verb agrees with the subject nearer to it. 'Analysts' is plural and stands closest, so 'are' is correct. Had the order been reversed — 'neither the analysts nor the manager' — the singular 'is' would be required."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'Each of the proposals ___ considerable merit.'",
  choices: ["have", "has", "are having", "were having"],
  answer: 1,
  explanation: "'Each' is always singular, however plural the phrase that follows it may sound. The subject is 'each', not 'proposals', so the singular 'has' is required. The same rule governs 'every', 'either', and 'neither' when used as subjects."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'The number of applicants ___ increased sharply this year.'",
  choices: ["have", "has", "were", "are"],
  answer: 1,
  explanation: "'The number of' takes a singular verb because the subject is the number itself. Contrast this with 'a number of applicants have increased...', where 'a number of' simply means 'several' and the verb becomes plural. The article changes the entire agreement."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'The report, along with its appendices, ___ submitted yesterday.'",
  choices: ["were", "was", "have been", "are"],
  answer: 1,
  explanation: "Phrases introduced by 'along with', 'as well as', 'in addition to', and 'together with' do not change the grammatical subject. The subject remains the singular 'report', so 'was' is correct — mentally delete the interrupting phrase to check agreement."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'Neither of the two options ___ acceptable to the client.'",
  choices: ["are", "is", "were", "have been"],
  answer: 1,
  explanation: "'Neither' functions as a singular pronoun meaning 'not one of the two', so it takes 'is'. The plural 'options' in the intervening prepositional phrase is not the subject and cannot control the verb."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'One of the consultants who ___ on the project has been promoted.'",
  choices: ["work", "works", "working", "has worked"],
  answer: 0,
  explanation: "The relative pronoun 'who' refers back to 'consultants', which is plural, so the verb inside the clause is 'work'. The main verb 'has been promoted' correctly stays singular because it belongs to 'one'. Two subjects, two different agreements."
},

/* ---------- GRAMMAR: TENSES ---------- */
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'By the time we arrived, the meeting ___.'",
  choices: ["already started", "has already started", "had already started", "was already starting"],
  answer: 2,
  explanation: "When one past event precedes another, the earlier one takes the past perfect. The meeting started before the arrival, so 'had already started' is correct. The present perfect 'has started' cannot be used because both events sit entirely in the past."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'She ___ at this firm since 2019.'",
  choices: ["works", "worked", "has worked", "is working"],
  answer: 2,
  explanation: "'Since' plus a start point signals an action that began in the past and continues now, which requires the present perfect: 'has worked'. The simple past 'worked' would imply she no longer works there, contradicting 'since 2019'."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'If I ___ more time, I would finish the analysis today.'",
  choices: ["have", "had", "would have", "will have"],
  answer: 1,
  explanation: "This is the second conditional, describing a hypothetical present situation. Its structure is 'if + past simple, would + base verb', so 'had' is required. Placing 'would' in the if-clause is one of the most common errors in conditional sentences."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'If the client had called earlier, we ___ the deadline.'",
  choices: ["would meet", "will meet", "would have met", "had met"],
  answer: 2,
  explanation: "This is the third conditional, describing an unreal past. Its structure is 'if + past perfect, would have + past participle', so 'would have met' completes it. The sentence implies the deadline was in fact missed."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'He ___ for the company for five years before he moved abroad.'",
  choices: ["works", "has worked", "had worked", "is working"],
  answer: 2,
  explanation: "The five years of work finished before another past event (moving abroad), so the past perfect 'had worked' is correct. The present perfect would wrongly connect the period to the present moment rather than to the later past event."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'The committee ___ its decision next Tuesday.'",
  choices: ["announces", "will announce", "has announced", "announced"],
  answer: 1,
  explanation: "'Next Tuesday' places the action firmly in the future, requiring 'will announce'. The present simple can express future meaning for fixed timetables ('the train leaves at six'), but a committee decision is not a scheduled timetable event."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'She suggested that he ___ the report before Friday.'",
  choices: ["revises", "revised", "revise", "will revise"],
  answer: 2,
  explanation: "Verbs of recommendation — suggest, recommend, insist, propose, demand, require — trigger the subjunctive, which uses the bare base form regardless of the subject. Hence 'that he revise', without the usual third-person -s."
},

/* ---------- GRAMMAR: PRONOUNS, COMPARATIVES, QUANTIFIERS ---------- */
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'The findings should remain between you and ___.'",
  choices: ["I", "me", "myself", "mine"],
  answer: 1,
  explanation: "'Between' is a preposition and therefore takes the object pronoun 'me'. 'Between you and I' is a well-known hypercorrection: speakers avoid 'me' because it sounds informal, but grammar requires it after any preposition."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'___ employees applied for the programme this year than last year.'",
  choices: ["Less", "Fewer", "Lesser", "Little"],
  answer: 1,
  explanation: "'Fewer' is used with countable nouns such as employees; 'less' is used with uncountable quantities such as time, money considered in bulk, or water. Since employees can be counted individually, 'fewer' is correct."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'___ of the delays, the project was completed on schedule.'",
  choices: ["Despite", "Although", "However", "Nevertheless"],
  answer: 0,
  explanation: "'Despite' is a preposition and takes a noun phrase such as 'the delays'. 'Although' is a conjunction and would require a full clause: 'although there were delays'. The two express the same contrast but cannot take the same complement."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'To ___ should I address the invoice?'",
  choices: ["who", "whom", "whose", "which"],
  answer: 1,
  explanation: "After a preposition, the object form 'whom' is required. A quick test: rephrase as a statement and substitute a pronoun — 'I should address it to him', and 'him' corresponds to 'whom', while 'he' would correspond to 'who'."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'This quarter's results were ___ than the previous quarter's.'",
  choices: ["more good", "gooder", "better", "best"],
  answer: 2,
  explanation: "'Good' has the irregular comparative 'better' and superlative 'best'. Comparing exactly two things calls for the comparative, so 'better' is correct; 'best' would require three or more items."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'He is used to ___ under tight deadlines.'",
  choices: ["work", "works", "working", "worked"],
  answer: 2,
  explanation: "In 'be used to', the word 'to' is a preposition and must be followed by a gerund: 'working'. Distinguish it from 'used to work', where 'used to' describes a discontinued past habit and takes the base form."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'I look forward to ___ from you soon.'",
  choices: ["hear", "hearing", "heard", "be hearing"],
  answer: 1,
  explanation: "'Look forward to' ends in a preposition, so a gerund must follow: 'hearing'. This is among the most frequent errors in professional correspondence, precisely because 'to' looks like an infinitive marker but is not one here."
},

/* ---------- SENTENCE CORRECTION ---------- */
{
  type: "sentence correction",
  prompt: "Which version is grammatically correct?",
  choices: [
    "Walking into the office, the reports were already on the desk.",
    "Walking into the office, I saw the reports already on the desk.",
    "Walking into the office, the desk had the reports on it.",
    "The reports, walking into the office, were on the desk."
  ],
  answer: 1,
  explanation: "An introductory participial phrase must modify the subject that follows it. Only a person can walk into an office, so the subject must be 'I'. The other versions create dangling modifiers in which reports or a desk appear to be doing the walking."
},
{
  type: "sentence correction",
  prompt: "Which version is grammatically correct?",
  choices: [
    "The role requires analyzing data, preparing reports, and to present findings.",
    "The role requires analyzing data, to prepare reports, and presenting findings.",
    "The role requires analyzing data, preparing reports, and presenting findings.",
    "The role requires to analyze data, preparing reports, and presenting findings."
  ],
  answer: 2,
  explanation: "Items in a list must share the same grammatical form. Only the third version keeps all three in the gerund form (-ing). Mixing infinitives with gerunds breaks parallelism, one of the most heavily tested structures in sentence correction."
},
{
  type: "sentence correction",
  prompt: "Which version is grammatically correct?",
  choices: [
    "The revenue of Company A is higher than Company B.",
    "The revenue of Company A is higher than that of Company B.",
    "The revenue of Company A is higher than Company B's revenue are.",
    "The revenue of Company A is more higher than Company B."
  ],
  answer: 1,
  explanation: "Comparisons must be logically parallel: revenue must be compared with revenue, not with a company. The pronoun 'that' stands in for 'the revenue', producing a valid comparison. The first version illogically compares a revenue figure to an entire company."
},
{
  type: "sentence correction",
  prompt: "Which version is grammatically correct?",
  choices: [
    "The team not only completed the analysis but also the presentation.",
    "The team not only completed the analysis but also prepared the presentation.",
    "The team not only completed the analysis but prepared also the presentation.",
    "Not only the team completed the analysis but also the presentation."
  ],
  answer: 1,
  explanation: "'Not only... but also' must join grammatically equivalent elements. In the correct version both halves are verb phrases ('completed the analysis', 'prepared the presentation'). The first version pairs a verb phrase with a bare noun phrase, breaking the structure."
},
{
  type: "sentence correction",
  prompt: "Which version is grammatically correct?",
  choices: [
    "Having reviewed the contract, several issues were identified by the lawyer.",
    "Having reviewed the contract, the lawyer identified several issues.",
    "Having reviewed the contract, the issues were clear to the lawyer.",
    "Having reviewed the contract, there were several issues."
  ],
  answer: 1,
  explanation: "The opening phrase describes who did the reviewing, so the subject immediately after the comma must be the reviewer — the lawyer. The passive constructions in the other options leave the participle dangling, implying the issues reviewed the contract."
},
{
  type: "sentence correction",
  prompt: "Which version is correct?",
  choices: [
    "Our approach is different than the one used last year.",
    "Our approach is different from the one used last year.",
    "Our approach is different to than last year.",
    "Our approach is differing from last year."
  ],
  answer: 1,
  explanation: "Standard written English, and the GMAT in particular, requires the idiom 'different from'. 'Different than' is common in informal American speech but is treated as incorrect in formal testing, and 'different to' is a British colloquialism."
},
{
  type: "sentence correction",
  prompt: "Which version is correct?",
  choices: [
    "The budget was divided between the four departments.",
    "The budget was divided among the four departments.",
    "The budget was divided between each of the four departments.",
    "The budget was divided in the four departments."
  ],
  answer: 1,
  explanation: "'Between' is used for two items; 'among' is used for three or more. With four departments, 'among' is required. The distinction is tested frequently and is easy to check by counting the items involved."
},
{
  type: "sentence correction",
  prompt: "Which sentence is free of redundancy?",
  choices: [
    "Please revert back to me once you have reviewed the file.",
    "Please revert to me once you have reviewed the file.",
    "Please revert back again to me once you have reviewed the file.",
    "Please return back to me once you have reviewed the file."
  ],
  answer: 1,
  explanation: "'Revert' already contains the sense of going back, so 'revert back' is redundant. The same applies to 'return back', 'repeat again', and 'advance forward' — each pairs a verb with a word that duplicates its built-in meaning."
},
{
  type: "sentence correction",
  prompt: "Which version is correct?",
  choices: [
    "The company's profits, which rose sharply, was reported yesterday.",
    "The company's profits, which rose sharply, were reported yesterday.",
    "The company's profits, which rose sharply, has been reported yesterday.",
    "The company's profits, which rose sharply, is reported yesterday."
  ],
  answer: 1,
  explanation: "The subject 'profits' is plural, so the main verb must be 'were'. The intervening relative clause does not affect agreement. The past tense is also required by 'yesterday', which rules out the present perfect and present forms."
},
{
  type: "sentence correction",
  prompt: "Which version is clearest and grammatically correct?",
  choices: [
    "When the manager met the director, he explained the new policy.",
    "When the manager met the director, the director explained the new policy.",
    "When the manager met with the director, he explained it to him.",
    "When he met the director, he explained the new policy."
  ],
  answer: 1,
  explanation: "In the other versions 'he' could refer to either the manager or the director, leaving the sentence ambiguous. Naming the person explicitly removes the ambiguity. Clarity of reference outweighs the mild repetition it costs."
},
{
  type: "sentence correction",
  prompt: "Which version is correct?",
  choices: [
    "Neither the results nor the methodology were explained clearly.",
    "Neither the results nor the methodology was explained clearly.",
    "Neither the results nor the methodology are explained clearly.",
    "Neither the results nor the methodology have been explained clearly."
  ],
  answer: 1,
  explanation: "With 'neither...nor', the verb agrees with the nearer subject. 'Methodology' is singular and sits closest to the verb, so 'was' is correct. Reversing the two nouns would make 'were' the right choice — the rule depends entirely on word order."
},
{
  type: "sentence correction",
  prompt: "Which version is correct?",
  choices: [
    "The consultant recommended that the client reduces its overhead.",
    "The consultant recommended that the client reduce its overhead.",
    "The consultant recommended that the client reducing its overhead.",
    "The consultant recommended the client to reduce its overhead."
  ],
  answer: 1,
  explanation: "'Recommend that' triggers the subjunctive, which uses the base form of the verb without the third-person -s: 'the client reduce'. The construction 'recommend someone to do something' is not idiomatic in standard English, unlike 'advise someone to do something'."
},

/* ---------- PREPOSITIONS & IDIOMS ---------- */
{
  type: "idiom",
  prompt: "Complete the sentence:\n\n'She is responsible ___ the regional budget.'",
  choices: ["of", "for", "to", "with"],
  answer: 1,
  explanation: "The fixed collocation is 'responsible for' something. Note the related but distinct 'responsible to someone', which identifies the person you report to — the preposition changes the meaning entirely."
},
{
  type: "idiom",
  prompt: "Complete the sentence:\n\n'These figures are consistent ___ last quarter's findings.'",
  choices: ["to", "with", "of", "for"],
  answer: 1,
  explanation: "'Consistent with' is the standard idiom when describing agreement between two sets of information. 'Consistent in' exists but means something different: showing steady behaviour, as in 'consistent in her approach'."
},
{
  type: "idiom",
  prompt: "Complete the sentence:\n\n'The outcome will depend ___ the client's response.'",
  choices: ["of", "on", "to", "from"],
  answer: 1,
  explanation: "'Depend on' (or the equivalent 'depend upon') is the required form. Spanish speakers frequently transfer 'depender de' and produce 'depend of', which is not English — this is worth memorizing as a fixed pair."
},
{
  type: "idiom",
  prompt: "Complete the sentence:\n\n'All suppliers must comply ___ the new regulations.'",
  choices: ["to", "with", "for", "on"],
  answer: 1,
  explanation: "The verb 'comply' always takes 'with'. The related noun phrase follows the same pattern: 'in compliance with the regulations'. 'Adhere to' expresses a similar idea but takes a different preposition."
},
{
  type: "idiom",
  prompt: "Complete the sentence:\n\n'He is in charge ___ the Bogotá office.'",
  choices: ["for", "of", "on", "with"],
  answer: 1,
  explanation: "'In charge of' is the fixed expression for having authority over something. Be careful not to confuse it with 'in charge for', which is not idiomatic, or with 'charged with', which suggests a formal accusation or an assigned duty."
},
{
  type: "idiom",
  prompt: "Complete the sentence:\n\n'The new system is capable ___ processing twice the volume.'",
  choices: ["to", "of", "for", "in"],
  answer: 1,
  explanation: "'Capable of' is always followed by a gerund, giving 'capable of processing'. The synonym 'able' takes the infinitive instead — 'able to process' — so the two adjectives require different structures despite similar meanings."
},
{
  type: "idiom",
  prompt: "Complete the sentence:\n\n'The delay resulted ___ significant additional costs.'",
  choices: ["from", "in", "to", "of"],
  answer: 1,
  explanation: "'Result in' points forward to the consequence, while 'result from' points backward to the cause. Costs were the consequence of the delay, so 'in' is correct. Reversing the preposition reverses the direction of causation."
},
{
  type: "idiom",
  prompt: "Complete the sentence:\n\n'The board is concerned ___ the drop in margins.'",
  choices: ["of", "about", "for", "with"],
  answer: 1,
  explanation: "'Concerned about' expresses worry, which the context requires. 'Concerned with' means involved in or relating to a subject, as in 'the report is concerned with logistics' — a neutral statement of topic rather than an expression of anxiety."
},
{
  type: "idiom",
  prompt: "Complete the sentence:\n\n'The team must account ___ the discrepancy in the figures.'",
  choices: ["of", "for", "to", "on"],
  answer: 1,
  explanation: "'Account for' means to explain or to constitute a portion of something. 'Account to' exists but means to answer to a person or body, as in 'the manager accounts to the board' — again, the preposition determines the meaning."
},

/* ---------- READING COMPREHENSION ---------- */
{
  type: "reading",
  prompt: "Read the passage and answer the question.\n\n'A recent study tracked 3,000 employees across twelve firms after they shifted to remote work. Self-reported productivity rose in nearly every firm, but objective output measures showed gains at only four. The researchers noted that employees who had previously commuted more than an hour reported the largest improvements, though their measured output was indistinguishable from that of colleagues with shorter commutes.'\n\nWhich statement is best supported by the passage?",
  choices: [
    "Remote work objectively increased productivity at most of the firms studied.",
    "Employees' perceptions of their productivity did not consistently match measured output.",
    "Long commutes reduce measured productivity.",
    "The study found that remote work harmed productivity."
  ],
  answer: 1,
  explanation: "The passage contrasts self-reported gains 'in nearly every firm' with objective gains at 'only four', which is precisely a mismatch between perception and measurement. Option 1 contradicts the four-firm figure, and option 3 is ruled out by the statement that output was indistinguishable across commute lengths."
},
{
  type: "reading",
  prompt: "Read the passage and answer the question.\n\n'When Verano Foods entered the Chilean market, it priced its products 15% below local competitors and captured 8% market share within a year. Margins, however, fell below the company's internal threshold, and in the second year Verano raised prices to match competitors. Market share settled at 5%, but the Chilean operation became profitable for the first time.'\n\nWhat can be concluded from the passage?",
  choices: [
    "Verano's price increase reduced its share but improved its profitability.",
    "Verano's entry into Chile was a failure.",
    "Chilean consumers are indifferent to price.",
    "Verano should have priced higher from the start."
  ],
  answer: 0,
  explanation: "The passage directly reports both outcomes: share fell from 8% to 5% after prices rose, and the operation became profitable. Option 2 is contradicted by that profitability, option 3 is contradicted by the share loss following the price rise, and option 4 is a recommendation the passage never makes."
},
{
  type: "reading",
  prompt: "Read the passage and answer the question.\n\n'Advocates of the four-day week argue that concentrated hours reduce fatigue and improve focus. Critics counter that most published trials rely on volunteer firms, which tend to be small, well-managed, and already committed to the idea. Few trials have examined large organizations with complex shift patterns, where the scheduling costs would be greatest.'\n\nThe critics' main objection is that:",
  choices: [
    "the four-day week reduces total output",
    "the evidence comes from firms that may not represent organizations generally",
    "employees dislike compressed schedules",
    "scheduling software is not yet available"
  ],
  answer: 1,
  explanation: "The criticism is methodological: volunteer firms are described as small, well-managed, and already sympathetic, which makes them unrepresentative and limits what the trials can prove about other organizations. The passage never claims output falls or that employees object."
},
{
  type: "reading",
  prompt: "Read the passage and answer the question.\n\n'The bank's cost-to-income ratio improved from 62% to 54% over three years. Management attributed the improvement to branch closures. Analysts observed, however, that income grew 22% over the period while costs grew 6%, and that the branch programme accounted for roughly one-fifth of the cost reduction.'\n\nWhich statement is best supported by the passage?",
  choices: [
    "Branch closures were the principal driver of the ratio improvement.",
    "Income growth contributed more to the improved ratio than management's explanation suggests.",
    "The bank's costs declined in absolute terms.",
    "Analysts believe the ratio will continue to improve."
  ],
  answer: 1,
  explanation: "Income rose 22% against a 6% cost increase, and branch closures explain only about a fifth of the cost side — so the ratio improved mainly through income growth. Option 3 is contradicted by the 6% cost increase, and the passage offers no forecast."
},
{
  type: "reading",
  prompt: "Read the passage and answer the question.\n\n'Between 2019 and 2024, the share of household spending devoted to food delivery tripled in urban areas but remained flat in rural ones. Analysts attribute the divergence primarily to delivery density: in cities, a courier can complete several orders per hour, whereas rural distances make each delivery costly. Rural consumer interest, measured by app downloads, grew at rates similar to urban interest.'\n\nThe passage suggests that the rural-urban gap is primarily explained by:",
  choices: [
    "lower consumer interest in rural areas",
    "the economics of delivering orders over longer distances",
    "differences in household income",
    "a lack of restaurants in rural areas"
  ],
  answer: 1,
  explanation: "The passage names delivery density as the primary cause and explains the mechanism through courier efficiency. It explicitly rules out option 1 by reporting similar download growth in both areas, and it never mentions income or restaurant availability."
},
{
  type: "reading",
  prompt: "Read the passage and answer the question.\n\n'The manufacturer offered an extended warranty at no charge on all units sold in the fourth quarter. Unit sales rose 18% over the third quarter. Warranty claims in the following year, however, exceeded actuarial projections by 40%, and the finance team concluded that the promotion had been value-destroying despite the sales increase.'\n\nThe finance team's conclusion rests on which comparison?",
  choices: [
    "Fourth-quarter sales against third-quarter sales",
    "The cost of the excess warranty claims against the profit from the additional units sold",
    "Actuarial projections against industry benchmarks",
    "Warranty claims in the fourth quarter against those in the third quarter"
  ],
  answer: 1,
  explanation: "Calling the promotion 'value-destroying' means its costs exceeded its benefits: the excess claims outweighed the profit on the extra 18% of units. The sales comparison alone shows only the benefit side, and neither benchmarks nor quarter-on-quarter claims are used in the reasoning."
},
{
  type: "reading",
  prompt: "Read the passage and answer the question.\n\n'Early adopters of the platform were overwhelmingly software developers, who valued its customization options. As the company pursued mainstream users, it simplified the interface and removed several advanced features. Mainstream adoption accelerated, but developer forums recorded a sharp rise in complaints, and the company's enterprise renewal rate declined for two consecutive quarters.'\n\nWhat does the passage most strongly imply?",
  choices: [
    "The simplification benefited one user group at the expense of another.",
    "The platform's mainstream strategy failed.",
    "Developers are more profitable customers than mainstream users.",
    "The company should restore the removed features."
  ],
  answer: 0,
  explanation: "Mainstream adoption accelerated while developers complained and enterprise renewals fell — a gain for one segment paired with a loss for another. Option 2 overstates the case given the accelerating adoption, and options 3 and 4 introduce claims and recommendations the passage does not make."
},
{
  type: "reading",
  prompt: "Read the passage and answer the question.\n\n'The consultancy's report recommended closing two of the client's five distribution centres. It calculated annual savings of $4.2 million in fixed costs but acknowledged that transport costs would rise by an estimated $1.1 million and that service times in two regions would lengthen by approximately one day.'\n\nWhich of the following best describes the report's net cost position?",
  choices: [
    "A net saving of $4.2 million",
    "A net saving of approximately $3.1 million, alongside a service trade-off",
    "A net cost of $1.1 million",
    "No net change in costs"
  ],
  answer: 1,
  explanation: "Netting the two figures gives $4.2 million saved minus $1.1 million added, or roughly $3.1 million. The longer service times are a real consequence but are not quantified in money, so they are described as a trade-off rather than folded into the total."
},

/* ---------- DISCOURSE MARKERS & LINKING ----------
   TestGorilla publishes sentence-opening gap fills as B2 sample questions
   (e.g. "_____ that she isn't the best candidate, she is considering withdrawing"). */
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'_____ that she isn't the strongest candidate, she is considering withdrawing her application.'",
  choices: ["Despite", "Given", "Although", "Whereas"],
  answer: 1,
  explanation: "'Given that' introduces a reason and is followed by a clause, which fits perfectly here. 'Despite' cannot precede 'that' at all, and 'Although' and 'Whereas' both signal contrast — but there is no contrast here, since recognizing she is not the strongest candidate is precisely why she would withdraw."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'The proposal was rejected; _____, the team was asked to submit a revised version.'",
  choices: ["therefore", "however", "nevertheless", "moreover"],
  answer: 1,
  explanation: "The second clause contrasts with the first: rejection would normally end the matter, yet a revision was invited. 'However' marks that contrast. 'Therefore' would wrongly signal a consequence, and 'moreover' would signal an addition of similar information."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'_____ the budget constraints, the team delivered the project on schedule.'",
  choices: ["Even though", "In spite of", "Because of", "So that"],
  answer: 1,
  explanation: "'In spite of' is a preposition and takes the noun phrase 'the budget constraints' directly. 'Even though' is a conjunction and would need a full clause ('even though the budget was constrained'). 'Because of' reverses the logic, since constraints did not cause the on-time delivery."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'The client approved the plan _____ we reduce the timeline by two weeks.'",
  choices: ["provided that", "in order to", "as a result of", "despite"],
  answer: 0,
  explanation: "'Provided that' introduces a condition attached to the approval, which is exactly the relationship here. 'In order to' would require an infinitive, and both 'as a result of' and 'despite' take noun phrases rather than the clause that follows."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'She had barely started the presentation _____ the system crashed.'",
  choices: ["than", "when", "then", "while"],
  answer: 1,
  explanation: "The fixed pattern is 'had barely/hardly... when', describing one event interrupted almost immediately by another. 'Than' belongs with the parallel structure 'no sooner... than', which is a different construction and would require inversion."
},

/* ---------- SENTENCE ORDERING / COMPOSITION ----------
   TestGorilla lists "sentence composition" as a measured skill. */
{
  type: "sentence correction",
  prompt: "Arrange these fragments into a coherent sentence:\n\n(1) the board approved the acquisition\n(2) after reviewing the due diligence report\n(3) which had taken three months to complete",
  choices: ["1, 2, 3", "2, 3, 1", "2, 1, 3", "3, 2, 1"],
  answer: 1,
  explanation: "The relative clause 'which had taken three months' must sit immediately after 'the due diligence report', the noun it describes. That fixes 2 followed by 3, with the main clause 1 completing the sentence: 'After reviewing the due diligence report, which had taken three months to complete, the board approved the acquisition.'"
},
{
  type: "sentence correction",
  prompt: "Which version expresses the idea most clearly and concisely?",
  choices: [
    "Due to the fact that the deadline was moved forward, we were required to make the decision to reduce the scope.",
    "Because the deadline moved forward, we decided to reduce the scope.",
    "The deadline having been moved forward, a decision was made by us to reduce the scope.",
    "On account of the deadline being moved forward, the scope reduction decision was taken."
  ],
  answer: 1,
  explanation: "The second version says the same thing in half the words, with an active verb and no padding. 'Due to the fact that' is always reducible to 'because', 'make the decision to' to 'decided to', and passive constructions like 'a decision was made by us' hide the actor for no benefit."
},
{
  type: "sentence correction",
  prompt: "Which sentence is correctly punctuated?",
  choices: [
    "The report was late, the client was informed immediately.",
    "The report was late; the client was informed immediately.",
    "The report was late the client was informed immediately.",
    "The report was late: however the client was informed immediately."
  ],
  answer: 1,
  explanation: "Two independent clauses cannot be joined by a comma alone — that is a comma splice, which the first option commits. A semicolon correctly links closely related independent clauses. The third option runs them together with no punctuation, and the fourth misuses a colon and omits the comma after 'however'."
},
{
  type: "sentence correction",
  prompt: "Which version correctly places the modifier?",
  choices: [
    "The consultant only presented three of the findings to the board.",
    "The consultant presented only three of the findings to the board.",
    "Only the consultant presented three of the findings to the board.",
    "The consultant presented three of the findings only to the board."
  ],
  answer: 1,
  explanation: "'Only' should sit immediately before the element it limits. To convey that the number was limited to three, it belongs directly before 'three'. Version 1 suggests presenting was the sole thing the consultant did, version 3 limits who presented, and version 4 limits the audience — three different meanings from one word's position."
},
{
  type: "sentence correction",
  prompt: "Which sentence maintains consistent verb tense?",
  choices: [
    "The team analysed the data, prepares the report and presented the findings.",
    "The team analysed the data, prepared the report and presented the findings.",
    "The team analyses the data, prepared the report and will present the findings.",
    "The team had analysed the data, prepares the report and presented the findings."
  ],
  answer: 1,
  explanation: "All three actions belong to the same completed sequence, so all three verbs take the simple past: analysed, prepared, presented. Shifting tense mid-list, as the other options do, implies the actions happened at different times without giving any reason for the shift."
},

/* ---------- ADDITIONAL VOCABULARY (business register) ---------- */
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'streamline':",
  choices: ["Expand", "Make more efficient by simplifying", "Postpone", "Document in detail"],
  answer: 1,
  explanation: "To 'streamline' a process is to remove unnecessary steps so it runs more smoothly and efficiently. The metaphor comes from shaping an object to reduce drag. Note that it implies simplification, not merely speeding up an unchanged process."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'contingent' in 'The bonus is contingent on hitting the target':",
  choices: ["Guaranteed", "Dependent", "Proportional", "Immediate"],
  answer: 1,
  explanation: "'Contingent on' means conditional upon — the bonus happens only if the target is hit. 'Proportional' is the tempting distractor, but it would mean the bonus scales with performance, whereas contingency is about whether it is paid at all."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'anticipate':",
  choices: ["Expect", "Prevent", "Announce", "Accelerate"],
  answer: 0,
  explanation: "'Anticipate' means to expect or foresee something. Spanish speakers should be careful: 'anticipar' can carry a sense of bringing forward in time, but English 'anticipate' does not mean to accelerate — that would be 'bring forward' or 'advance'."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'stakeholder':",
  choices: [
    "A shareholder who owns more than 10% of a company",
    "Any party with an interest in or affected by a project or decision",
    "A person who has invested money in a venture",
    "An external consultant hired to advise on strategy"
  ],
  answer: 1,
  explanation: "A stakeholder is anyone with a stake in the outcome — employees, customers, regulators, suppliers and communities, not just investors. The narrower financial definitions in the other options describe shareholders or investors, which are only one kind of stakeholder."
},
{
  type: "vocabulary",
  prompt: "Choose the word that is most nearly OPPOSITE in meaning to 'concise':",
  choices: ["Brief", "Verbose", "Precise", "Formal"],
  answer: 1,
  explanation: "'Concise' means expressing much in few words, so its opposite is 'verbose', meaning using more words than necessary. 'Brief' is a near synonym rather than an antonym, and 'precise' concerns accuracy rather than length — a common confusion."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'defer' in 'The committee agreed to defer the decision':",
  choices: ["Reverse", "Postpone", "Delegate", "Reconsider"],
  answer: 1,
  explanation: "To 'defer' a decision is to put it off until later. The separate idiom 'defer to someone' means to yield to their judgement, which is where 'delegate' becomes tempting — but with a decision as the object, the meaning is postponement."
},
{
  type: "vocabulary",
  prompt: "Choose the word closest in meaning to 'robust' in 'The findings are robust':",
  choices: ["Preliminary", "Holding up well under scrutiny or varied conditions", "Surprising", "Widely publicized"],
  answer: 1,
  explanation: "Applied to findings or a method, 'robust' means the result does not fall apart when assumptions change or when tested differently. It is a statement about reliability, not about how strong the effect is or how confidently it is asserted."
},

/* ---------- ADDITIONAL GRAMMAR ---------- */
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'If I _____ you were coming to the office, I would have prepared the documents.'",
  choices: ["knew", "had known", "would know", "have known"],
  answer: 1,
  explanation: "The main clause uses 'would have prepared', which marks a third conditional about an unreal past. Its if-clause requires the past perfect: 'had known'. Pairing a simple past with 'would have' mixes the second and third conditionals and is a very common error."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'The consultant, along with two analysts, _____ attending the client meeting.'",
  choices: ["are", "is", "were", "have been"],
  answer: 1,
  explanation: "'Along with two analysts' is a parenthetical addition, not part of the grammatical subject, which remains the singular 'the consultant'. So the verb is 'is'. Had the sentence read 'The consultant and two analysts', the compound subject would take the plural 'are'."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'By this time next year, the team _____ the new system across all offices.'",
  choices: ["will implement", "will have implemented", "implements", "had implemented"],
  answer: 1,
  explanation: "'By this time next year' names a future point by which the action will already be finished, which calls for the future perfect: 'will have implemented'. The simple future 'will implement' would place the action at that moment rather than before it."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'The manager insisted that the report _____ submitted before Friday.'",
  choices: ["is", "was", "be", "will be"],
  answer: 2,
  explanation: "'Insist that' triggers the subjunctive, which uses the bare base form — here 'be submitted' in the passive. This is the same rule that governs suggest, recommend, demand and require, and it does not change with the subject or the tense of the main verb."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'Neither of the proposals _____ the client's requirements.'",
  choices: ["meet", "meets", "are meeting", "have met"],
  answer: 1,
  explanation: "'Neither' is singular when it acts as the subject, so the verb is 'meets'. The plural 'proposals' sits inside a prepositional phrase and cannot control the verb — mentally strip out 'of the proposals' and the agreement becomes obvious."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'The firm has offices in Bogotá, Lima and Santiago, _____ employs over 400 consultants in total.'",
  choices: ["which", "who", "where", "that"],
  answer: 0,
  explanation: "The relative pronoun refers back to 'the firm', a thing rather than a person, so 'which' is correct — and after a comma, only 'which' can introduce a non-defining clause. 'That' is never used after a comma in this way, and 'who' would require a person."
},
{
  type: "grammar",
  prompt: "Complete the sentence:\n\n'We need to _____ the number of meetings to free up time for analysis.'",
  choices: ["reduce", "reduce down", "lower down", "diminish down"],
  answer: 0,
  explanation: "'Reduce' already contains the sense of moving downward, so adding 'down' is redundant. English does allow 'cut down on', but 'reduce down' and 'lower down' are not idiomatic. Concision matters in professional writing, and redundant particles are a frequent giveaway of non-native usage."
}

];

/* ---------- Difficulty defaults ----------
   1 = easy · 2 = medium · 3 = hard (long reading passages, subtle register or idiom). */
(function(){
  const byType = { vocabulary:1, grammar:2, idiom:2, 'sentence correction':2, reading:3 };
  const bank = window.QUESTION_BANK.eng;
  bank.forEach(q => { if(!q.d) q.d = byType[q.type] || 2; });
  /* Vocabulary items that are genuinely advanced rather than everyday. */
  ['substantiate','meticulous','comprehensive','contingent','robust','stakeholder','streamline']
    .forEach(w => { const q = bank.find(x => x.prompt.indexOf("'" + w) !== -1); if(q) q.d = 2; });
})();
