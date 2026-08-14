/* ==========================================================================
   Gorilla Prep — application logic
   Split out of index.html during the post-audit rebuild so the growing feature
   set stays readable. Loaded after the question banks and the guides.
   ========================================================================== */

/* ==================== CONFIG ==================== */
const DEFAULT_EXAM_DATE = '2026-09-03';
const EXAM_DATE_KEY = 'gorillaPrepExamDate';
const LANG_KEY  = 'gorillaPrepLang';
const THEME_KEY = 'gorillaPrepTheme';
const PREFS_KEY = 'gorillaPrepPrefs';
const STORE_KEY = 'gorillaPrepStats_v3';   /* v3: adds byType, times, spaced retirement */
const DAILY_GOAL = 20;

/* Mastery rule (audit #9): a missed question is only retired after two correct
   recalls on DIFFERENT days. One correct answer straight after seeing the
   solution is short-term memory, not learning. */
const MASTERY_CORRECT_DAYS = 2;

const CATEGORIES = {
  ct:   { key:'ct',   name:{en:'Critical Thinking',   es:'Pensamiento Crítico'},   emoji:'🧠', secQuestions:16, secMinutes:12 },
  num:  { key:'num',  name:{en:'Numerical Reasoning', es:'Razonamiento Numérico'}, emoji:'🔢', secQuestions:12, secMinutes:10 },
  data: { key:'data', name:{en:'Working with Data',   es:'Trabajo con Datos'},     emoji:'📊', secQuestions:12, secMinutes:10 },
  eng:  { key:'eng',  name:{en:'English Level',       es:'Nivel de Inglés'},       emoji:'🇬🇧', secQuestions:20, secMinutes:12 },
  /* Not one of the four confirmed modules. Kept available because the briefing slide warns
     the modules may change and Bain's assessment sometimes includes a judgment block.
     Excluded from SECTION_ORDER so it never enters the full mock or distorts the simulation. */
  judgment: { key:'judgment', name:{en:'Business Judgment', es:'Criterio de Negocio'}, emoji:'⚖️',
              secQuestions:12, secMinutes:12, optional:true },
  /* Deliberate over-training. The real English module is CEFR B1/B2, so these C1 items are
     harder than anything the test will ask. Kept out of SECTION_ORDER for the same reason as
     judgment: letting above-level questions into the mock or the readiness score would make
     both of them understate how ready he actually is. */
  engC1: { key:'engC1', name:{en:'English C1 (advanced)', es:'Inglés C1 (avanzado)'}, emoji:'🎓',
           secQuestions:20, secMinutes:12, optional:true },
};
Object.values(CATEGORIES).forEach(c => { c.idealSecPerQ = Math.round((c.secMinutes*60)/c.secQuestions); });
const SECTION_ORDER = ['ct','num','data','eng'];          /* the four real modules */
const ALL_CATS = SECTION_ORDER.concat(['judgment','engC1']); /* everything that carries questions */

const DIFF = {
  1:{ label:{en:'Easy',es:'Fácil'},   factor:0.7 },
  2:{ label:{en:'Medium',es:'Media'}, factor:1.0 },
  3:{ label:{en:'Hard',es:'Difícil'}, factor:1.5 }
};

/* Human-readable names for question types, used by the weak-areas panel. */
const TYPE_NAMES = {
  syllogism:{en:'Syllogisms',es:'Silogismos'},
  inference:{en:'Inferences',es:'Inferencias'},
  arrangement:{en:'Arrangements',es:'Ordenamientos'},
  weaken:{en:'Weakening',es:'Debilitar'},
  strengthen:{en:'Strengthening',es:'Fortalecer'},
  assumption:{en:'Assumptions',es:'Supuestos'},
  flaw:{en:'Flaws',es:'Fallas lógicas'},
  paradox:{en:'Paradoxes',es:'Paradojas'},
  evaluate:{en:'Evaluating plans',es:'Evaluar planes'},
  'argument-strength':{en:'Strong vs weak',es:'Fuerte vs débil'},
  percent:{en:'Percentages',es:'Porcentajes'},
  margin:{en:'Margins',es:'Márgenes'},
  rates:{en:'Rates & work',es:'Tasas y trabajo'},
  average:{en:'Averages',es:'Promedios'},
  ratio:{en:'Ratios',es:'Razones'},
  growth:{en:'Growth',es:'Crecimiento'},
  business:{en:'Business metrics',es:'Métricas de negocio'},
  probability:{en:'Probability',es:'Probabilidad'},
  multistep:{en:'Multi-step',es:'Varios pasos'},
  series:{en:'Number series',es:'Series numéricas'},
  estimation:{en:'Estimation',es:'Estimación'},
  table:{en:'Tables',es:'Tablas'},
  chart:{en:'Charts',es:'Gráficos'},
  statistics:{en:'Statistics',es:'Estadística'},
  validation:{en:'Data quality',es:'Calidad de datos'},
  grammar:{en:'Grammar',es:'Gramática'},
  vocabulary:{en:'Vocabulary',es:'Vocabulario'},
  idiom:{en:'Prepositions',es:'Preposiciones'},
  'sentence correction':{en:'Sentence composition',es:'Composición'},
  reading:{en:'Reading',es:'Lectura'},
  judgment:{en:'Business judgment',es:'Criterio de negocio'}
};
function typeName(t){ const n = TYPE_NAMES[t]; return n ? (n[lang]||n.en) : t; }

/* ==================== PREFERENCES ==================== */
let lang = 'en', theme = 'auto';
let prefs = { revealDiff:'before', calcOpen:false };
try { const s = localStorage.getItem(LANG_KEY); if(s==='es'||s==='en') lang = s; } catch(e){}
try { const s = localStorage.getItem(THEME_KEY); if(s) theme = s; } catch(e){}
try { const p = JSON.parse(localStorage.getItem(PREFS_KEY)||'{}'); prefs = Object.assign(prefs, p); } catch(e){}
function savePrefs(){ try{ localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); }catch(e){} }

function examDate(){
  try { const s = localStorage.getItem(EXAM_DATE_KEY); if(s && /^\d{4}-\d{2}-\d{2}$/.test(s)) return s; } catch(e){}
  return DEFAULT_EXAM_DATE;
}
function setExamDate(v){
  if(!/^\d{4}-\d{2}-\d{2}$/.test(v)) return false;
  try { localStorage.setItem(EXAM_DATE_KEY, v); } catch(e){}
  return true;
}

/* ==================== BANK ==================== */
const BANK = window.QUESTION_BANK || {};
Object.keys(CATEGORIES).forEach(k => {
  (BANK[k] || []).forEach((q,i) => { q.id = k + '-' + i; q.cat = k; });
});
function bankOf(k){ return BANK[k] || []; }
/* Mixed practice and the mistakes pool draw only on the four real modules; the optional
   judgment bank is reached deliberately, so it never dilutes exam preparation. */
function allQuestions(){ return SECTION_ORDER.reduce((a,k) => a.concat(bankOf(k)), []); }
function everyQuestion(){ return ALL_CATS.reduce((a,k) => a.concat(bankOf(k)), []); }
function totalQuestions(){ return allQuestions().length; }
function targetSecFor(q){ return Math.round(CATEGORIES[q.cat].idealSecPerQ * DIFF[q.d || 2].factor); }
function takeawayOf(q){
  if(lang === 'es' && window.ES_TAKEAWAYS && window.ES_TAKEAWAYS[q.id]) return window.ES_TAKEAWAYS[q.id];
  return q.takeaway || '';
}
function explanationOf(q){
  if(lang === 'es' && window.ES_EXPLANATIONS && window.ES_EXPLANATIONS[q.id]) return window.ES_EXPLANATIONS[q.id];
  return q.explanation;
}
function guideDoc(){ return (window.GUIDE && window.GUIDE[lang]) || (window.GUIDE && window.GUIDE.en) || null; }
function topicFor(q){
  const g = guideDoc(); if(!g) return null;
  for(const sec of g.sections) for(const tp of sec.topics) if(tp.type && tp.type === q.type) return { sec, tp };
  return null;
}

/* ==================== STATS ==================== */
function blankStats(){
  return {
    totalAnswered:0, totalCorrect:0, streak:0, lastStudyDate:null,
    /* Derived from ALL_CATS rather than listed by hand: a hardcoded list silently omits any
       category added later, and the first answer in it then crashes on `cs.a++`. */
    byCategory: ALL_CATS.reduce((m,k) => { m[k] = {a:0,c:0}; return m; }, {}),
    byType:{},      /* type -> {a, c, ms} — audit #10 */
    daily:{},
    questions:{},   /* id -> {seen, wrongCount, correctDays:[], lastSeen, times:[]} */
    mocks:[]        /* full-mock results */
  };
}
function loadStats(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(raw){
      const s = JSON.parse(raw), base = blankStats();
      return Object.assign(base, s, {
        byCategory: Object.assign(base.byCategory, s.byCategory || {}),
        byType: s.byType || {}, daily: s.daily || {},
        questions: s.questions || {}, mocks: s.mocks || []
      });
    }
    /* One-time migration from the v2 store so nothing is lost. */
    const old = localStorage.getItem('gorillaPrepStats_v2');
    if(old){
      const o = JSON.parse(old), base = blankStats();
      base.totalAnswered = o.totalAnswered||0; base.totalCorrect = o.totalCorrect||0;
      base.streak = o.streak||0; base.lastStudyDate = o.lastStudyDate||null;
      base.byCategory = Object.assign(base.byCategory, o.byCategory||{});
      base.daily = o.daily||{};
      Object.entries(o.questions||{}).forEach(([id,r]) => {
        base.questions[id] = { seen:r.seen||0, wrongCount:r.wrong||0, correctDays:[], lastSeen:r.lastSeen||null, times:[] };
      });
      return base;
    }
  }catch(e){}
  return blankStats();
}
function saveStats(){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(stats)); }catch(e){} }
let stats = loadStats();

function todayStr(){
  const d = new Date();
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function daysUntilExam(){
  return Math.round((new Date(examDate()+'T00:00:00') - new Date(todayStr()+'T00:00:00'))/86400000);
}
function answeredToday(){ return stats.daily[todayStr()] || 0; }
function bumpStreak(){
  const today = todayStr();
  if(stats.lastStudyDate === today) return;
  if(stats.lastStudyDate){
    const diff = Math.round((new Date(today+'T00:00:00') - new Date(stats.lastStudyDate+'T00:00:00'))/86400000);
    stats.streak = (diff === 1) ? stats.streak + 1 : 1;
  } else stats.streak = 1;
  stats.lastStudyDate = today;
}
function recOf(id){
  return stats.questions[id] || { seen:0, wrongCount:0, correctDays:[], lastSeen:null, times:[] };
}
/* A question needs review while it has been missed and not yet re-derived
   correctly on two separate days. */
function needsReview(rec){
  return rec.wrongCount > 0 && (rec.correctDays||[]).length < MASTERY_CORRECT_DAYS;
}
function classificationOf(correct, elapsedMs, targetMs){
  const ratio = elapsedMs / targetMs;
  if(correct){
    if(ratio <= 1.2) return 'on-target';      /* within 20% of target */
    return 'slow-correct';
  }
  if(ratio <= 1.2) return 'fast-wrong';
  return 'slow-wrong';
}
function recordAnswer(q, correct, elapsedMs){
  const today = todayStr();
  bumpStreak();
  stats.totalAnswered++;
  if(correct) stats.totalCorrect++;

  /* Create the bucket on demand: stats restored from an older save or from an imported
     backup file will not carry categories that did not exist when it was written. */
  const cs = stats.byCategory[q.cat] || (stats.byCategory[q.cat] = {a:0,c:0});
  cs.a++; if(correct) cs.c++;

  const ty = q.type || 'other';
  const ts = stats.byType[ty] || { a:0, c:0, ms:0 };
  ts.a++; if(correct) ts.c++;
  if(typeof elapsedMs === 'number' && elapsedMs > 0 && elapsedMs < 600000) ts.ms += elapsedMs;
  stats.byType[ty] = ts;

  stats.daily[today] = (stats.daily[today] || 0) + 1;

  const rec = recOf(q.id);
  rec.seen++;
  rec.correctDays = rec.correctDays || [];
  if(correct){
    if(rec.correctDays.indexOf(today) === -1) rec.correctDays.push(today);
  } else {
    rec.wrongCount++;
    rec.correctDays = [];          /* a miss resets the mastery streak */
  }
  rec.lastSeen = today;
  rec.times = (rec.times || []).concat(Math.round(elapsedMs||0)).slice(-5);

  const targetMs = targetSecFor(q) * 1000;
  /* Track the classification (fast-correct, on-target, slow-correct, fast-wrong, slow-wrong) */
  rec.classifications = (rec.classifications || []).concat(classificationOf(correct, elapsedMs, targetMs)).slice(-5);

  stats.questions[q.id] = rec;

  /* If this is a transfer question (substitute for the second correct day of another item),
     also record the outcome for the original question. */
  if(q._transferFrom && correct){
    const origRec = recOf(q._transferFrom);
    if(!origRec.correctDays.includes(today)) origRec.correctDays.push(today);
    stats.questions[q._transferFrom] = origRec;
  }

  saveStats();
}
function wrongPool(){
  /* Review covers judgment too — a missed question is worth revisiting wherever it came from. */
  return everyQuestion().filter(q => needsReview(recOf(q.id)));
}
/* Due for review today: needs review and wasn't already served today. */
function duePool(){
  const today = todayStr();
  return wrongPool().filter(q => recOf(q.id).lastSeen !== today);
}
/* For questions that need their second correct retrieval, prefer a different question
   of the same type to test transfer of technique, not memory of the exact item. */
function applyTransferLogic(pool){
  const today = todayStr();
  return pool.map(q => {
    const rec = recOf(q.id);
    /* Only apply transfer if this question has 1 correct day and needs a 2nd */
    if(rec.correctDays && rec.correctDays.length === 1 && rec.wrongCount > 0){
      /* Look for an alternative of the same type, not seen today */
      const alternatives = allQuestions()
        .filter(alt =>
          alt.type === q.type &&
          alt.id !== q.id &&
          recOf(alt.id).lastSeen !== today
        );
      if(alternatives.length > 0){
        const chosen = alternatives[Math.floor(Math.random() * alternatives.length)];
        chosen._transferFrom = q.id;  /* Mark that this is a transfer substitute */
        return chosen;
      }
    }
    return q;
  });
}

/* Accuracy by type, for the weak-areas panel (audit #10). */
function typeStats(minAttempts){
  minAttempts = minAttempts || 3;
  return Object.entries(stats.byType)
    .filter(([,v]) => v.a >= minAttempts)
    .map(([t,v]) => ({ type:t, attempts:v.a, acc: Math.round(100*v.c/v.a), avgSec: v.ms ? Math.round(v.ms/v.a/1000) : null }))
    .sort((a,b) => a.acc - b.acc);
}
/* Numerical subtypes breakdown (percent, margin, rates, etc.) for the Numerical panel. */
function numericalSubtypes(minAttempts){
  minAttempts = minAttempts || 2;
  const numTypes = ['percent','margin','rates','average','ratio','growth','business','probability','multistep','series','estimation'];
  return Object.entries(stats.byType)
    .filter(([t,v]) => numTypes.includes(t) && v.a >= minAttempts)
    .map(([t,v]) => ({ type:t, attempts:v.a, acc: Math.round(100*v.c/v.a), avgSec: v.ms ? Math.round(v.ms/v.a/1000) : null }))
    .sort((a,b) => b.acc - a.acc);  /* descending: strongest first */
}
function medianTime(q){
  const t = (recOf(q.id).times||[]).filter(x=>x>0);
  if(!t.length) return null;
  const s = t.slice().sort((a,b)=>a-b);
  return Math.round(s[Math.floor(s.length/2)]/1000);
}
function readinessScoreFor(catKey){
  /* Readiness 0-100 per section: combines accuracy + pacing.
     Conservative: penalizes slow answers even if correct.
     Returns null if insufficient data (< 15 attempts). */
  const cs = stats.byCategory[catKey];
  if(!cs || cs.a < 15) return null;

  const acc = Math.round(100 * cs.c / cs.a);
  /* Average time per question in this category */
  const avgMs = cs.ms ? cs.ms / cs.a : null;
  const avgSec = avgMs ? avgMs / 1000 : null;
  const targetSec = CATEGORIES[catKey].idealSecPerQ;

  /* Base score from accuracy */
  let score = acc;

  /* Penalty if significantly slower than target */
  if(avgSec && targetSec){
    const ratio = avgSec / targetSec;
    if(ratio > 1.5) score -= Math.min(20, (ratio - 1.5) * 10);  /* lose up to 20% for being very slow */
    else if(ratio > 1.2) score -= 5;  /* lose 5% for being moderately slow */
  }

  /* Don't let it go below a minimum based on accuracy */
  score = Math.max(Math.round(acc * 0.7), score);

  return Math.max(0, Math.min(100, Math.round(score)));
}

/* ==================== SELECTION ==================== */
function priorityOf(q){
  const rec = recOf(q.id);
  if(rec.seen === 0) return 0;              /* unseen first */
  if(needsReview(rec)) return 1;            /* then unresolved mistakes */
  return 2;                                  /* then spaced revision */
}
function pickQuestions(catKey, count, typeFilter){
  let pool = catKey ? bankOf(catKey).slice() : allQuestions();
  if(typeFilter) pool = pool.filter(q => q.type === typeFilter);
  const today = todayStr();
  pool.forEach(q => {
    const rec = recOf(q.id);
    q._p = priorityOf(q);
    /* don't serve the same item twice in one day unless nothing else is left */
    q._sameDay = rec.lastSeen === today ? 1 : 0;
    q._last = rec.lastSeen || '';
    q._rand = Math.random();
  });
  pool.sort((a,b) => (a._sameDay-b._sameDay) || (a._p-b._p) ||
                     (a._last < b._last ? -1 : a._last > b._last ? 1 : 0) || (a._rand-b._rand));
  return pool.slice(0, Math.min(count, pool.length));
}
function pickOneMixed(){
  const c = pickQuestions(null, 20);
  return c.length ? c[Math.floor(Math.random()*c.length)] : null;
}
function looksNumeric(ch){ return ch.every(c => /^[$€£]?\s*[\d]/.test(String(c).trim())); }
function prepare(q){
  /* Numeric option sets stay in their authored (ascending) order, as on the real
     test. Positional balance is handled in the bank itself — see AUDIT #1. */
  if(looksNumeric(q.choices)) return { choices:q.choices.slice(), answer:q.answer };
  const idx = q.choices.map((_,i)=>i);
  for(let i=idx.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [idx[i],idx[j]]=[idx[j],idx[i]]; }
  return { choices: idx.map(i=>q.choices[i]), answer: idx.indexOf(q.answer) };
}
/* Mock fatigue analysis: accuracy by quartile to detect cognitive decline. */
function mockFatigueAnalysis(log){
  if(!log || log.length < 4) return null;
  const n = log.length;
  const q1End = Math.ceil(n * 0.25), q2End = Math.ceil(n * 0.5), q3End = Math.ceil(n * 0.75);
  const quarts = [
    { name:'1-'+Math.ceil(q1End), log: log.slice(0, q1End) },
    { name:(q1End+1)+'-'+Math.ceil(q2End), log: log.slice(q1End, q2End) },
    { name:(q2End+1)+'-'+Math.ceil(q3End), log: log.slice(q2End, q3End) },
    { name:(q3End+1)+'-'+n, log: log.slice(q3End) }
  ];
  return quarts.map(q => {
    const correct = q.log.filter(e => e.correct).length;
    return { range: q.name, total: q.log.length, correct, acc: Math.round(100*correct/q.log.length) };
  });
}
/* ==================== MENTAL MATH DRILLS ==================== */
function mentalMathProblem(){
  const types = ['mult','div','pct','frac','ratio'];
  const type = types[Math.floor(Math.random()*types.length)];
  let a, b, op, ans, display;

  switch(type){
    case 'mult':
      a = 5 + Math.floor(Math.random()*30);  /* 5-34 */
      b = 4 + Math.floor(Math.random()*20);  /* 4-23 */
      ans = a * b;
      display = a + ' × ' + b;
      break;
    case 'div':
      ans = 10 + Math.floor(Math.random()*30);  /* 10-39 */
      a = ans * (2 + Math.floor(Math.random()*4));  /* multiply by 2-5 */
      display = a + ' ÷ ' + ans;
      break;
    case 'pct':
      a = Math.floor(Math.random()*100) + 1;  /* base 1-100 */
      b = [10,15,20,25,30,50,75][Math.floor(Math.random()*7)];  /* common % */
      ans = Math.round(a * b / 100);
      display = b + '% of ' + a;
      break;
    case 'frac':
      a = 1 + Math.floor(Math.random()*20);
      b = [2,3,4,5,6,8][Math.floor(Math.random()*6)];
      ans = Math.round(100 * a / b) / 100;
      display = a + ' ÷ ' + b;
      break;
    case 'ratio':
      a = 5 + Math.floor(Math.random()*20);
      b = 10 + Math.floor(Math.random()*30);
      ans = Math.round(100 * a / (a + b)) / 100;
      display = a + ' out of ' + (a+b) + ' (%)';
      break;
  }
  return { display, ans, type };
}
