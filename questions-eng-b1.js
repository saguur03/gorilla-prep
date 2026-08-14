/* English B1 — 26 questions.

   The bank was built for a B1/B2 test but written almost entirely in business register,
   which pushed nearly everything to B2: an honest CEFR pass over the original 176 found
   only 32 items that are genuinely B1. That is not enough to sustain a 20% B1 quota in
   10-question sessions without recycling the same items every few days, so these fill
   the gap.

   B1 here means what the CEFR means by it: everyday high-frequency language, core tenses,
   first and second conditionals, common dependent prepositions, concrete vocabulary.
   Deliberately lighter in register than the rest of the bank — that is the point.

   Appended to QUESTION_BANK.eng (ids eng-176 onwards), so these are part of the real
   English module and do appear in the full mock, which is correct: the real test is
   B1/B2. Levels are assigned in levels-eng.js. */
window.QUESTION_BANK = window.QUESTION_BANK || {};
window.QUESTION_BANK.eng = window.QUESTION_BANK.eng || [];

(function(){
var Q = [

/* ---------- GRAMMAR (8) ---------- */
{
  type: "grammar", d: 1,
  prompt: "Complete the sentence:\n\n'I ___ for this company for three years.'",
  choices: ["have worked", "work", "worked", "am working"],
  answer: 0,
  explanation: "'For three years' describes a period that started in the past and continues now, which is the present perfect: 'have worked'. The past simple 'worked' would mean the period is over and you no longer work there."
},
{
  type: "grammar", d: 1,
  prompt: "Complete the sentence:\n\n'She ___ to the Bogotá office last month.'",
  choices: ["moved", "has moved", "moves", "is moving"],
  answer: 0,
  explanation: "'Last month' is a finished time expression, so it takes the past simple: 'moved'. The present perfect cannot be used with a specific finished time — 'has moved last month' is always wrong."
},
{
  type: "grammar", d: 1,
  prompt: "Complete the sentence:\n\n'If it rains tomorrow, we ___ the meeting online.'",
  choices: ["will hold", "would hold", "held", "will have held"],
  answer: 0,
  explanation: "This is a first conditional: a real possibility in the future. The 'if' clause takes the present simple ('rains') and the main clause takes 'will' — 'will hold'. Note that 'will' never appears in the 'if' half."
},
{
  type: "grammar", d: 1,
  prompt: "Complete the sentence:\n\n'If I were you, I ___ the manager first.'",
  choices: ["would ask", "will ask", "asked", "would have asked"],
  answer: 0,
  explanation: "'If I were you' signals a second conditional — imagined, not real — so the main clause takes 'would' plus the base verb: 'would ask'. 'Would have asked' would move it into the past."
},
{
  type: "grammar", d: 1,
  prompt: "Complete the sentence:\n\n'This report is ___ than the one we sent last week.'",
  choices: ["longer", "longest", "more long", "the longest"],
  answer: 0,
  explanation: "Comparing two things takes the comparative, and short adjectives form it with '-er': 'longer than'. 'More' is used with longer adjectives ('more useful'), never with a one-syllable word, and superlatives compare three or more."
},
{
  type: "grammar", d: 1,
  prompt: "Complete the sentence:\n\n'You ___ wear a helmet in the warehouse. It is a company rule.'",
  choices: ["must", "might", "could", "may"],
  answer: 0,
  explanation: "'It is a company rule' signals obligation, and the modal for obligation is 'must'. 'Might', 'could' and 'may' all express possibility or permission, which is the opposite of a rule you have to follow."
},
{
  type: "grammar", d: 1,
  prompt: "Complete the sentence:\n\n'We ___ launch the new product in June — the date is already agreed.'",
  choices: ["are going to", "will have", "would", "have been"],
  answer: 0,
  explanation: "'Going to' is used for plans that are already decided, which 'the date is already agreed' confirms. 'Will' is more common for decisions made at the moment of speaking or for predictions."
},
{
  type: "grammar", d: 1,
  prompt: "Complete the sentence:\n\n'How long ___ you worked in this team?'",
  choices: ["have", "are", "did", "do"],
  answer: 0,
  explanation: "The main verb is the past participle 'worked', and 'How long…?' about a period continuing to now needs the present perfect, so the auxiliary is 'have'. 'Did' would require the base form: 'How long did you work…?'"
},

/* ---------- VOCABULARY (7) ---------- */
{
  type: "vocabulary", d: 1,
  prompt: "Choose the word closest in meaning to 'reduce':",
  choices: ["Decrease", "Increase", "Repeat", "Delay"],
  answer: 0,
  explanation: "'Reduce' means to make something smaller in size or amount, which is what 'decrease' means. 'Increase' is its opposite, and 'delay' is about time rather than amount."
},
{
  type: "vocabulary", d: 1,
  prompt: "What does 'deadline' mean?",
  choices: ["The date by which work must be finished", "The date a project begins", "A meeting to review progress", "A written agreement between two companies"],
  answer: 0,
  explanation: "A deadline is the latest time by which something must be completed. The word is common in everyday work English and does not refer to the start of anything, despite the 'line' ending suggesting a boundary in either direction."
},
{
  type: "vocabulary", d: 1,
  prompt: "Choose the phrase closest in meaning to 'delay':",
  choices: ["Make something happen later", "Finish something early", "Cancel something completely", "Improve the quality of something"],
  answer: 0,
  explanation: "'Delay' means to postpone something or make it later than planned. It does not mean cancelling: a delayed meeting still happens, just later."
},
{
  type: "vocabulary", d: 1,
  prompt: "Choose the word closest in meaning to 'hire':",
  choices: ["Employ", "Dismiss", "Train", "Promote"],
  answer: 0,
  explanation: "To hire someone is to give them a job, which is what 'employ' means. 'Dismiss' is the opposite, while 'train' and 'promote' both apply to people who already work there."
},
{
  type: "vocabulary", d: 1,
  prompt: "Choose the phrase closest in meaning to 'improve':",
  choices: ["Get better", "Get worse", "Stay the same", "Start again"],
  answer: 0,
  explanation: "'Improve' means to become or make something better. The word describes a direction of change, so 'stay the same' cannot be right."
},
{
  type: "vocabulary", d: 1,
  prompt: "Choose the word closest in meaning to 'goal':",
  choices: ["Aim", "Problem", "Result", "Rule"],
  answer: 0,
  explanation: "A goal is something you are trying to achieve, which is what an 'aim' is. A 'result' is what actually happens afterwards, which is not the same as what you intended."
},
{
  type: "vocabulary", d: 1,
  prompt: "Choose the word closest in meaning to 'staff':",
  choices: ["Employees", "Customers", "Products", "Offices"],
  answer: 0,
  explanation: "'Staff' means the people who work for an organisation. Note that it is normally used as a plural idea — 'the staff are' — even though it has no '-s'."
},

/* ---------- IDIOM (5) ---------- */
{
  type: "idiom", d: 1,
  prompt: "Complete the sentence:\n\n'She is very good ___ solving problems under pressure.'",
  choices: ["at", "in", "for", "with"],
  answer: 0,
  explanation: "'Good at' is the fixed pairing for describing a skill, and it is followed by a gerund: 'good at solving'. Spanish speakers often reach for 'good in' by analogy with 'bueno en'."
},
{
  type: "idiom", d: 1,
  prompt: "Complete the sentence:\n\n'We are still waiting ___ the client's reply.'",
  choices: ["for", "to", "at", "on"],
  answer: 0,
  explanation: "'Wait for' is the fixed pairing when something or someone is awaited. 'Wait on' means to serve someone in a restaurant, which is a different verb altogether."
},
{
  type: "idiom", d: 1,
  prompt: "Complete the sentence:\n\n'I am interested ___ joining the new project team.'",
  choices: ["in", "on", "for", "about"],
  answer: 0,
  explanation: "'Interested in' is fixed, and the preposition is followed by a gerund: 'interested in joining'. This is a very common error, because the natural translation from Spanish suggests 'interested on'."
},
{
  type: "idiom", d: 1,
  prompt: "Complete the sentence:\n\n'Please listen ___ the recording before tomorrow's meeting.'",
  choices: ["to", "at", "for", "on"],
  answer: 0,
  explanation: "'Listen' always takes 'to' before its object. English keeps the preposition even though Spanish 'escuchar' takes a direct object, which is why 'listen the recording' is such a frequent slip."
},
{
  type: "idiom", d: 1,
  prompt: "Complete the sentence:\n\n'The train arrives ___ the station at nine o'clock.'",
  choices: ["at", "to", "in", "on"],
  answer: 0,
  explanation: "'Arrive at' is used with specific places such as a station, an airport or a building; 'arrive in' is used with towns and countries. 'Arrive to' does not exist in English, though it mirrors Spanish 'llegar a'."
},

/* ---------- SENTENCE CORRECTION (4) ---------- */
{
  type: "sentence correction", d: 1,
  prompt: "Which sentence is correct?",
  choices: [
    "She works in the Bogotá office and reports to the regional manager.",
    "She work in the Bogotá office and report to the regional manager.",
    "She works in the Bogotá office and report to the regional manager.",
    "She work in the Bogotá office and reports to the regional manager."
  ],
  answer: 0,
  explanation: "The subject 'she' is third person singular, so both verbs need '-s': 'works' and 'reports'. When one subject governs two verbs joined by 'and', both must agree with it — changing only one is the trap here."
},
{
  type: "sentence correction", d: 1,
  prompt: "Which sentence has the correct word order?",
  choices: [
    "I usually finish work at six o'clock.",
    "I finish usually work at six o'clock.",
    "Usually I finish work at six o'clock at.",
    "I finish work usually at six o'clock at."
  ],
  answer: 0,
  explanation: "Adverbs of frequency such as 'usually', 'always' and 'often' go before the main verb: 'I usually finish'. They never sit between the verb and its object."
},
{
  type: "sentence correction", d: 1,
  prompt: "Which sentence is correctly written?",
  choices: [
    "The meeting was long, but it was useful.",
    "The meeting was long it was useful.",
    "The meeting was long, it was useful.",
    "The meeting was long but, it was useful."
  ],
  answer: 0,
  explanation: "Two complete clauses need a joining word: a comma plus 'but' does the job. Option B runs them together with nothing, option C joins them with only a comma, and option D puts the comma on the wrong side of 'but'."
},
{
  type: "sentence correction", d: 1,
  prompt: "Which sentence is correct?",
  choices: [
    "My colleagues are on holiday this week.",
    "My colleagues is on holiday this week.",
    "My colleagues was on holiday this week.",
    "My colleague are on holiday this week."
  ],
  answer: 0,
  explanation: "'Colleagues' is plural, so it takes 'are'. Option D uses the singular noun 'colleague' with the plural verb, which is the same agreement error in reverse."
},

/* ---------- READING (2) ---------- */
{
  type: "reading", d: 1,
  prompt: "Read the passage and answer the question.\n\nThe company is moving to a new office in the north of the city next March. The new building is smaller than the current one, but it is much closer to the metro station. Staff who currently drive to work will not have a parking space at the new site. The company will pay for a monthly metro card for anyone who gives up their parking space this year.\n\nWhat will happen to employees who drive to work?",
  choices: [
    "They will lose their parking space but can receive a metro card.",
    "They will keep their parking space at the new office.",
    "They will have to pay for their own parking.",
    "They will be asked to work from home instead."
  ],
  answer: 0,
  explanation: "The passage says drivers 'will not have a parking space at the new site' and that the company will pay for a metro card for those who give up their space. Options C and D describe things the passage never mentions."
},
{
  type: "reading", d: 1,
  prompt: "Read the passage and answer the question.\n\nAll new employees must complete the online safety course in their first two weeks. The course takes about three hours and can be done in several short sessions. Employees who do not finish it in time cannot enter the laboratory areas until they do. Managers receive a weekly list of staff who have not yet completed the course.\n\nWhat happens if an employee does not finish the course in two weeks?",
  choices: [
    "They cannot enter the laboratory areas until they complete it.",
    "They must start the course again from the beginning.",
    "They are removed from the company.",
    "They have to complete it in one single session."
  ],
  answer: 0,
  explanation: "The passage states the consequence directly: they 'cannot enter the laboratory areas until they do'. Option D contradicts the text, which says the course can be done in several short sessions."
}

];
Q.forEach(function(q){ window.QUESTION_BANK.eng.push(q); });
})();
