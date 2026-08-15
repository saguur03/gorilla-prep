/* CEFR levels for the English bank.

   UPDATED 15 ago 2026: recruiter confirmed the real test has no B1, only B2 (40%) and C1
   (60%). Every 10-question English session now draws 0 B1 / 4 B2 / 6 C1 — see
   ENGLISH_LEVEL_MIX in app.js. That quota needs every question to carry a level, which the
   bank did not record on its own.

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

   Note: Only 32 of the original 176 were genuinely B1, and 26 came from
   questions-eng-b1.js. Both groups were relabelled as B2 when B1 was removed from the
   quota. The eng-b1.js file is no longer loaded (removed 15 ago 2026 along with B1
   support); the 32 B1-level questions from the original eng bank stay in the eng pool
   (now labeled B2 because B1 tier does not exist in the real test). */
(function(){
  var bank = window.QUESTION_BANK || {};
  var eng = bank.eng || [], engC1 = bank.engC1 || [];

  /* UPDATED 15 ago 2026: reclutador confirmó que no hay B1 en el examen real.
     Solo C1 (60%) y B2 (40%). Se eliminaron todos los B1 de la cuota. */
  var B1 = [];  /* Unused — no B1 in the real test. Keep for backwards compatibility. */
  var C1 = [
    6, 27, 31, 46,                 /* substantiate; subjunctive; 'to whom'; subjunctive */
    58, 59, 61, 63,                /* reading: representativeness, attribution, trade-off */
    68, 75, 78, 84, 93, 97,        /* barely…when; contingent; verbose; subjunctive; agreement; subjunctive */
    101, 106, 119, 120,            /* inverted conditional; inversion; correlative comparative; attributable to */
    139, 146, 147, 150,            /* dampened, negligible, proviso, undermined */
    153, 156, 157,                 /* `only` placement; subjunctive; like-for-like comparison */
    170, 171, 173, 175             /* reading: author stance and inference */
  ];

  /* B1_APPEND_FROM was a sentinel marking where the B1 questions started in the eng bank.
     With B1 eliminated from the quota (15 ago 2026), this branch is permanently disabled.
     Infinity ensures i >= B1_APPEND_FROM is never true for any valid index.
     (BUG FIXED: it was set to -1, which is true for every i >= 0, silently labeling all
     questions as B1 instead of none. Infinity is the correct "never true" sentinel.) */
  var B1_APPEND_FROM = Infinity;

  /* Guard: sizes the index lists were written against. A mismatch means the bank changed
     shape, and every index after the change now points at the wrong question.

     UPDATED 15 ago 2026: eng bank = questions-eng.js (88) + questions-eng-2.js (88
     original + 30 new B2) = 206 (questions-eng-b1.js no longer loaded, 15 ago 2026).
     engC1 = questions-eng-c1.js (88 original + 30 new C1) = 118. The 32 B1-level
     questions from the original eng bank are now labeled B2 (B1 tier eliminated). All new
     questions sit outside the C1 index list above, so they land correctly as B2 (eng) or
     C1 (engC1, by construction). */
  var EXPECTED_ENG = 206, EXPECTED_C1 = 118;
  if(eng.length !== EXPECTED_ENG || engC1.length !== EXPECTED_C1){
    console.error('[levels-eng] Bank size changed (eng ' + eng.length + ' vs ' + EXPECTED_ENG +
      ', engC1 ' + engC1.length + ' vs ' + EXPECTED_C1 + '). CEFR labels are keyed by index ' +
      'and are now unreliable. Re-check levels-eng.js before trusting the B2/C1 quota.');
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
