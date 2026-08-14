/* CEFR levels for the English bank.

   Santiago wants every 10-question English session to be 2 B1 / 5 B2 / 3 C1 — B2 is the
   centre of gravity of the real test, with B1 either side to keep the basics warm and C1
   to over-train. That quota needs every question to carry a level, which the bank did not
   record.

   Levels live here rather than in the question files for the same reason takeaways and the
   Spanish explanations do: the banks are append-only with ids assigned by index, so an
   external map keyed by index stays valid as long as nothing is inserted mid-array. The
   size guard below turns a mid-array insertion into a loud console error instead of a
   silent mislabelling of everything after the insertion point.

   How the levels were assigned: read question by question, not derived from the `d` field
   (which is timing difficulty, not language level). The dividing lines used were the CEFR
   ones — B1 is everyday high-frequency language, core tenses, first and second
   conditionals, common dependent prepositions; B2 is third conditionals, passives,
   reported speech, relative clauses, discourse markers, business register, inference from
   text; C1 is inversion, cleft, subjunctive, nuanced register and connotation, rare
   phrasal verbs, author stance.

   Two findings worth keeping in mind:
     - Only 32 of the original 176 are genuinely B1. The bank was written in business
       register throughout, which pushes almost everything to B2. questions-eng-b1.js adds
       26 more so the 20% quota does not recycle the same handful every few days.
     - 28 of the original 176 are genuinely C1 (inversion, subjunctive, `only` placement,
       low-frequency vocabulary). They stay in the `eng` bank and therefore still appear in
       the full mock. That is a pre-existing fidelity wrinkle, not one introduced here. */
(function(){
  var bank = window.QUESTION_BANK || {};
  var eng = bank.eng || [], engC1 = bank.engC1 || [];

  /* Indices into QUESTION_BANK.eng. Everything not listed is B2. */
  var B1 = [
    21, 22, 23, 26, 32, 34,        /* core tenses, 1st/2nd conditional, comparatives */
    47, 49, 51, 54,                /* responsible for / depend on / in charge of / concerned about */
    76, 87, 92, 102, 105, 108, 110, 112, 113, 114,
    121, 127,                      /* responsible for / differ from */
    134, 140, 142,                 /* steady, weaknesses, simplify */
    152, 154, 159, 161, 163, 165, 167
  ];
  var C1 = [
    6, 27, 31, 46,                 /* substantiate; subjunctive; 'to whom'; subjunctive */
    58, 59, 61, 63,                /* reading: representativeness, attribution, trade-off */
    68, 75, 78, 84, 93, 97,        /* barely…when; contingent; verbose; subjunctive; agreement; subjunctive */
    101, 106, 119, 120,            /* inverted conditional; inversion; correlative comparative; attributable to */
    139, 146, 147, 150,            /* dampened, negligible, proviso, undermined */
    153, 156, 157,                 /* `only` placement; subjunctive; like-for-like comparison */
    170, 171, 173, 175             /* reading: author stance and inference */
  ];

  /* The B1 questions appended by questions-eng-b1.js occupy every index from 176 on. */
  var B1_APPEND_FROM = 176;

  /* Guard: these are the sizes the index lists above were written against. A mismatch
     means the bank changed shape, and every index after the change now points at the
     wrong question. Fail loudly rather than mislabel silently. */
  var EXPECTED_ENG = 202, EXPECTED_C1 = 88;
  if(eng.length !== EXPECTED_ENG || engC1.length !== EXPECTED_C1){
    console.error('[levels-eng] Bank size changed (eng ' + eng.length + ' vs ' + EXPECTED_ENG +
      ', engC1 ' + engC1.length + ' vs ' + EXPECTED_C1 + '). CEFR labels are keyed by index ' +
      'and are now unreliable. Re-check levels-eng.js before trusting the 2/5/3 quota.');
  }

  var b1 = {}, c1 = {};
  B1.forEach(function(i){ b1[i] = 1; });
  C1.forEach(function(i){ c1[i] = 1; });

  eng.forEach(function(q, i){
    q.cefr = (i >= B1_APPEND_FROM || b1[i]) ? 'B1' : (c1[i] ? 'C1' : 'B2');
  });
  /* The C1 bank is C1 by construction — it was written to be above the level of the test. */
  engC1.forEach(function(q){ q.cefr = 'C1'; });

  window.CEFR_LEVELS = ['B1', 'B2', 'C1'];
  window.cefrCounts = function(){
    var n = {B1:0, B2:0, C1:0};
    eng.concat(engC1).forEach(function(q){ if(n[q.cefr] !== undefined) n[q.cefr]++; });
    return n;
  };
})();
