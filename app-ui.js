/* ==========================================================================
   Gorilla Prep — views and interaction
   ========================================================================== */

const T = {
  sub:{en:'Preparation for the Bain assessment', es:'Preparación para el proceso de Bain'},
  home:{en:'Home', es:'Inicio'},
  daysUntil:{en:d=>d+' days until the test', es:d=>'Faltan '+d+' días para la prueba'},
  tomorrow:{en:'Test is tomorrow', es:'La prueba es mañana'},
  today:{en:'Test is today — good luck', es:'La prueba es hoy — mucha suerte'},
  crunchModeBanner:{en:'FINAL WEEK: Focus on mocks and mistakes', es:'ÚLTIMA SEMANA: Enfócate en simulacros y errores'},
  crunchModeNote:{en:'Skip new material. Consolidate what you know.', es:'Omite material nuevo. Consolida lo que sabes.'},
  approachingTarget:{en:'Approaching target time', es:'Acercándote al tiempo objetivo'},
  passed:{en:'Test date passed', es:'La fecha ya pasó'},
  tapToChange:{en:'tap to change', es:'toca para cambiar'},
  examDateLabel:{en:'Test date', es:'Fecha de la prueba'},
  save:{en:'Save', es:'Guardar'}, cancel:{en:'Cancel', es:'Cancelar'},
  todayGoal:{en:"Today's goal", es:'Meta de hoy'},
  goalDone:{en:'✓ Daily goal reached', es:'✓ Meta diaria cumplida'},
  streak:{en:'Day streak', es:'Racha (días)'},
  answered:{en:'Answered', es:'Respondidas'},
  accuracy:{en:'Accuracy', es:'Acierto'},
  readiness:{en:'Readiness', es:'Preparación'},
  readinessInfo:{en:'combines accuracy & pacing', es:'combina acierto y velocidad'},
  insufficientData:{en:'Not enough data', es:'Sin suficientes datos'},
  numBreakdown:{en:'Numerical breakdown', es:'Desglose de Numérico'},
  numBreakdownHint:{en:'by subtype', es:'por subtipo'},
  mockFatigue:{en:'Fatigue analysis', es:'Análisis de fatiga'},
  fatigueStable:{en:'Stable', es:'Estable'},
  fatigueDeclining:{en:'Declining', es:'Declinando'},
  mentalMath:{en:'🧮 Mental math', es:'🧮 Aritmética mental'},
  mentalMathSub:{en:'quick drills to sharpen speed', es:'ejercicios rápidos para la velocidad'},
  drillLength:{en:d=>''+d+' seconds', es:d=>''+d+' segundos'},
  mathCorrect:{en:'Correct', es:'Correcto'},
  mathAnswer:{en:'Answer: ', es:'Respuesta: '},
  mathResults:{en:'Results', es:'Resultados'},
  mathScore:{en:c=>c+' correct', es:c=>c+' correctas'},
  mathAgain:{en:'Another drill', es:'Otro ejercicio'},
  mixed:{en:'⚡ Mixed practice', es:'⚡ Práctica mixta'},
  mixedSub:{en:'types arrive unlabelled, like the real test', es:'los tipos llegan sin etiqueta, como en la prueba real'},
  quickOne:{en:'One quick question', es:'Una pregunta rápida'},
  playbook:{en:'📘 The Playbook', es:'📘 La Guía'},
  playbookSub:{en:'techniques for every question type', es:'técnicas para cada tipo de pregunta'},
  review:{en:'🔁 Review my mistakes', es:'🔁 Repasar mis errores'},
  reviewNone:{en:' — none due', es:' — ninguno pendiente'},
  examMenu:{en:'🕒 Exam modes', es:'🕒 Modos de examen'},
  weakAreas:{en:'Your weakest areas', es:'Tus áreas más débiles'},
  weakHint:{en:'Tap to drill this type', es:'Toca para practicar este tipo'},
  needMoreData:{en:'Answer a few more questions and your weakest question types will appear here.', es:'Responde algunas preguntas más y aquí aparecerán tus tipos más débiles.'},
  diagnostic:{en:'Practice by section', es:'Practicar por sección'},
  diagnosticNote:{en:'Blocked practice — useful for diagnosis, but mixed practice transfers better to the real test.', es:'Práctica en bloque — útil para diagnosticar, pero la práctica mixta transfiere mejor a la prueba real.'},
  stillUnseen:{en:(a,b)=>a+' of '+b+' unseen', es:(a,b)=>a+' de '+b+' sin ver'},
  each:{en:s=>s+'s each', es:s=>s+'s c/u'},
  accShort:{en:p=>p+'% accuracy', es:p=>p+'% acierto'},
  listeningNote:{en:'The real English module includes listening, which this app cannot cover. Spend a few minutes a day on English-language business news or podcasts.', es:'El módulo real de inglés incluye comprensión auditiva, que esta app no puede cubrir. Dedica unos minutos al día a noticias o podcasts de negocios en inglés.'},
  judgmentBtn:{en:'⚖️ Business judgment', es:'⚖️ Criterio de negocio'},
  judgmentSub:{en:'not a confirmed module — practise it as insurance', es:'no es un módulo confirmado — practícalo como seguro'},
  /* exam menu */
  examStrict:{en:'Strict exam', es:'Examen estricto'},
  examStrictSub:{en:'No feedback until the end — real conditions', es:'Sin feedback hasta el final — condiciones reales'},
  examCoached:{en:'Exam with coaching', es:'Examen con explicaciones'},
  examCoachedSub:{en:'Clock pauses after each answer so you can read', es:'El reloj se pausa tras cada respuesta para que leas'},
  fullMock:{en:'Full mock', es:'Simulacro completo'},
  fullMockSub:{en:'All four sections back to back, no breaks', es:'Las cuatro secciones seguidas, sin pausas'},
  chooseSection:{en:'Choose the section', es:'Elige la sección'},
  realFormat:{en:(q,m)=>'Real format: '+q+' questions in '+m+' min', es:(q,m)=>'Formato real: '+q+' preguntas en '+m+' min'},
  thisRun:{en:(n,m)=>'This run: '+n+' questions in '+m+' min', es:(n,m)=>'Esta ronda: '+n+' preguntas en '+m+' min'},
  strictNote:{en:'No feedback, no pausing, no going back. You will see every explanation at the end.', es:'Sin feedback, sin pausas, sin volver atrás. Verás todas las explicaciones al final.'},
  coachedNote:{en:'The countdown pauses automatically while you read each explanation.', es:'El cronómetro se pausa solo mientras lees cada explicación.'},
  mockNote:{en:'Four sections, 60 questions, about 44 minutes. Nothing pauses. Treat it as the real sitting.', es:'Cuatro secciones, 60 preguntas, unos 44 minutos. Nada se pausa. Trátalo como la prueba real.'},
  startMock:{en:'Start full mock', es:'Empezar simulacro'},
  /* question view */
  modeQuick:{en:'Quick question', es:'Pregunta rápida'},
  modePractice:{en:'Practice', es:'Práctica'},
  modeMixed:{en:'Mixed practice', es:'Práctica mixta'},
  modeReview:{en:'Reviewing mistakes', es:'Repasando errores'},
  modeExam:{en:'Exam', es:'Examen'},
  modeDrill:{en:'Drill', es:'Refuerzo'},
  pause:{en:'⏸ Pause', es:'⏸ Pausar'},
  resume:{en:'▶ Resume', es:'▶ Reanudar'},
  pausedManual:{en:'Timer paused.', es:'Cronómetro en pausa.'},
  pausedExam:{en:'Section clock paused while you read.', es:'Cronómetro pausado mientras lees.'},
  correct:{en:'Correct.', es:'Correcto.'},
  incorrect:{en:'Incorrect.', es:'Incorrecto.'},
  vsTarget:{en:(s,t)=>s+'s vs '+t+'s target', es:(s,t)=>s+'s vs '+t+'s objetivo'},
  correctAnswer:{en:'Correct answer:', es:'Respuesta correcta:'},
  why:{en:'Why:', es:'Por qué:'},
  technique:{en:'📘 Technique: ', es:'📘 Técnica: '},
  next:{en:'Next question', es:'Siguiente pregunta'},
  seeResult:{en:'See result', es:'Ver resultado'},
  calc:{en:'Calculator', es:'Calculadora'},
  yourMedian:{en:s=>'your median on this one: '+s+'s', es:s=>'tu mediana en esta: '+s+'s'},
  /* result */
  result:{en:'Result', es:'Resultado'},
  mixedLabel:{en:'Mixed practice', es:'Práctica mixta'},
  correctOf:{en:t=>' / '+t+' correct', es:t=>' / '+t+' correctas'},
  reviewAnswers:{en:'Review every question', es:'Revisar todas las preguntas'},
  anotherMixed:{en:'⚡ More mixed practice', es:'⚡ Más práctica mixta'},
  backHome:{en:'Back to home', es:'Volver al inicio'},
  note85:{en:'Strong — around the level you want on test day.', es:'Fuerte — cerca del nivel que quieres el día de la prueba.'},
  note70:{en:'Solid. Read the explanations for the ones you missed.', es:'Sólido. Lee las explicaciones de las que fallaste.'},
  note50:{en:'Worth reviewing — these are now in your mistakes list.', es:'Vale la pena repasar — quedaron en tu lista de errores.'},
  noteLow:{en:'Slow down in practice mode first; speed comes after accuracy.', es:'Ve más despacio en modo práctica; la velocidad viene después de la precisión.'},
  timeUp:{en:'Time is up.', es:'Se acabó el tiempo.'},
  timeUpBody:{en:'Remaining questions were marked incorrect, as on the real test.', es:'Las preguntas restantes se marcaron incorrectas, como en la prueba real.'},
  sectionDone:{en:'Section complete', es:'Sección completa'},
  nextSection:{en:'Next section', es:'Siguiente sección'},
  mockSummary:{en:'Mock results', es:'Resultados del simulacro'},
  /* review screen */
  yourAnswer:{en:'You answered:', es:'Respondiste:'},
  noAnswer:{en:'(ran out of time)', es:'(se acabó el tiempo)'},
  /* guide */
  recognise:{en:'Recognise it', es:'Cómo reconocerla'},
  method:{en:'Method', es:'Método'},
  remember:{en:'Key facts', es:'Datos clave'},
  traps:{en:'Traps', es:'Trampas'},
  worked:{en:'Worked example', es:'Ejemplo resuelto'},
  sources:{en:'Sources', es:'Fuentes'},
  guideBack:{en:'Playbook', es:'Guía'},
  practiceThis:{en:'Practise this type', es:'Practicar este tipo'},
  /* settings */
  settings:{en:'Settings', es:'Ajustes'},
  appearance:{en:'Appearance', es:'Apariencia'},
  themeAuto:{en:'Auto', es:'Auto'}, themeLight:{en:'Light', es:'Claro'}, themeDark:{en:'Dark', es:'Oscuro'},
  showDiff:{en:'Show difficulty', es:'Mostrar dificultad'},
  diffBefore:{en:'Before answering', es:'Antes de responder'},
  diffAfter:{en:'After answering', es:'Después de responder'},
  diffAfterNote:{en:'Hiding it before you answer removes the priming effect — the real test shows nothing.', es:'Ocultarla antes de responder elimina el efecto de anticipación — la prueba real no muestra nada.'},
  backup:{en:'Backup', es:'Respaldo'},
  backupNote:{en:'Your progress lives only in this browser. Export it weekly so a cleared cache cannot erase your work.', es:'Tu progreso vive solo en este navegador. Expórtalo cada semana para que borrar el caché no destruya tu trabajo.'},
  exportBtn:{en:'Export progress', es:'Exportar progreso'},
  importBtn:{en:'Import progress', es:'Importar progreso'},
  imported:{en:'Progress restored.', es:'Progreso restaurado.'},
  importFailed:{en:'That file could not be read.', es:'No se pudo leer ese archivo.'},
  footer:{en:n=>n+' questions · progress saved on this device', es:n=>n+' preguntas · progreso guardado en este dispositivo'}
};
function t(key, ...args){
  const v = T[key] && T[key][lang] !== undefined ? T[key][lang] : (T[key] ? T[key].en : '');
  return typeof v === 'function' ? v(...args) : v;
}
function catName(k){ const n = CATEGORIES[k].name; return n[lang] || n.en; }
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function fmtTime(s){ s = Math.max(0, Math.round(s)); return Math.floor(s/60)+':'+String(s%60).padStart(2,'0'); }

/* ==================== THEME & LANG ==================== */
function applyTheme(){
  const root = document.documentElement;
  root.removeAttribute('data-theme');
  if(theme === 'dark') root.setAttribute('data-theme','dark');
  else if(theme === 'light') root.setAttribute('data-theme','light');
}
function setTheme(v){ theme = v; try{ localStorage.setItem(THEME_KEY, v); }catch(e){} applyTheme(); rerender(); }
function setLang(l){
  if(l !== 'en' && l !== 'es') return;
  lang = l;
  try { localStorage.setItem(LANG_KEY, l); } catch(e){}
  document.documentElement.setAttribute('lang', l);
  document.getElementById('langEn').classList.toggle('on', l==='en');
  document.getElementById('langEs').classList.toggle('on', l==='es');
  rerender();
}

/* ==================== NAV ==================== */
const main = document.getElementById('main');
const backBtn = document.getElementById('backBtn');
const backLabel = document.getElementById('backLabel');
const headerTitle = document.getElementById('headerTitle');
const headerSub = document.getElementById('headerSub');
const countdownEl = document.getElementById('countdown');
const footerEl = document.getElementById('footer');
let session = null, timerHandle = null, viewState = { name:'home' }, editingDate = false;

backBtn.addEventListener('click', () => {
  stopTimer();
  if(viewState.name === 'guideTopic'){ renderGuide(); return; }
  renderHome();
});
function setHeader(title, sub, showBack){
  headerTitle.textContent = title;
  headerSub.textContent = sub || '';
  backBtn.classList.toggle('hidden', !showBack);
  backLabel.textContent = (viewState.name === 'guideTopic') ? t('guideBack') : t('home');
}
function stopTimer(){ if(timerHandle){ clearInterval(timerHandle); timerHandle = null; } }
/* The neutral, TestGorilla-like skin is applied only during exam modes (audit #19). */
function setExamSkin(on){ document.body.classList.toggle('exam-skin', !!on); }
function rerender(){
  switch(viewState.name){
    case 'guide': renderGuide(); break;
    case 'guideTopic': renderGuideTopic(viewState.sec, viewState.topic); break;
    case 'question': if(session){ const p = session.paused; renderQuestion(); if(p) pauseTimer(t('pausedManual')); } break;
    case 'examMenu': renderExamMenu(); break;
    case 'settings': renderSettings(); break;
    case 'reviewList': renderReviewList(); break;
    case 'mental-math': if(session && !session.finished) renderMentalMathDrill(); else renderMentalMathResult(); break;
    default: renderHome();
  }
}
function toggleDateEditor(){
  if(viewState.name !== 'home'){ editingDate = true; renderHome(); return; }
  editingDate = !editingDate; renderHome();
  if(editingDate){ const i = document.getElementById('examDateInput'); if(i) i.focus(); }
}
function saveExamDate(){
  const i = document.getElementById('examDateInput');
  if(i && i.value) setExamDate(i.value);
  editingDate = false; renderHome();
}

/* ==================== HOME ==================== */
function renderHome(){
  stopTimer(); session = null; setExamSkin(false); viewState = { name:'home' };
  setHeader('Gorilla Prep', t('sub'), false);

  const days = daysUntilExam();
  const label = days > 1 ? t('daysUntil', days) : days === 1 ? t('tomorrow') : days === 0 ? t('today') : t('passed');
  countdownEl.innerHTML = esc(label) + '<span class="hint">· ' + t('tapToChange') + '</span>';
  countdownEl.classList.remove('hidden');

  const acc = stats.totalAnswered ? Math.round(100*stats.totalCorrect/stats.totalAnswered) : 0;
  const done = answeredToday();
  const pct = Math.min(100, Math.round(100*done/DAILY_GOAL));
  const due = duePool().length;

  const dateEditor = editingDate
    ? '<div class="date-editor"><label for="examDateInput">'+t('examDateLabel')+'</label>'+
      '<input type="date" id="examDateInput" value="'+examDate()+'">'+
      '<div class="row"><button class="ok" onclick="saveExamDate()">'+t('save')+'</button>'+
      '<button class="no" onclick="toggleDateEditor()">'+t('cancel')+'</button></div></div>' : '';

  /* Final week mode: focus consolidation over new learning */
  const daysLeft = daysUntilExam();
  const crunchMode = daysLeft <= 7 && daysLeft > 0;
  const crunchBanner = crunchMode
    ? '<div class="card crunch-banner"><strong>⏰ '+t('crunchModeBanner')+'</strong><br>'+
      '<small>'+t('crunchModeNote')+'</small></div>'
    : '';

  /* Readiness Score per section (combines accuracy + pacing) */
  const readinessHtml = SECTION_ORDER.map(k => {
    const c = CATEGORIES[k];
    const score = readinessScoreFor(k);
    const scoreStr = score !== null ? score : '—';
    const scoreClass = score === null ? 'nodata' : score >= 80 ? 'strong' : score >= 60 ? 'ok' : 'weak';
    return '<div class="readiness-item">'+
      '<span class="r-emoji">'+c.emoji+'</span>'+
      '<span class="r-name">'+catName(k)+'</span>'+
      '<span class="r-score '+scoreClass+'">'+scoreStr+(score!==null?'/100':'')+
      (score === null ? ' <span class="r-hint">'+t('insufficientData')+'</span>' : '')+'</span>'+
      '</div>';
  }).join('');

  /* Numerical breakdown by subtype */
  const numBreakdown = numericalSubtypes(2);
  const numHtml = numBreakdown.length
    ? '<div class="section-title">'+t('numBreakdown')+'</div><div class="num-breakdown">'+
      numBreakdown.map(nb =>
        '<div class="nb-item"><span class="nb-type">'+esc(typeName(nb.type))+'</span>'+
        '<span class="nb-meta">'+nb.attempts+'a</span>'+
        '<span class="nb-acc '+(nb.acc>=70?'ok':nb.acc>=50?'mid':'bad')+'">'+nb.acc+'%'+(nb.avgSec?' · '+nb.avgSec+'s':'')+
        '</span></div>').join('')+
      '</div>'
    : '';

  /* Weak areas — the single highest-value addition from the audit (#10). */
  const weak = typeStats(3).slice(0,3);
  const weakHtml = weak.length
    ? '<div class="section-title">'+t('weakAreas')+'</div><div class="cat-list">'+
      weak.map(w =>
        '<button class="weak-btn" onclick="drillType(\''+w.type+'\')">'+
        '<span class="w-info"><span class="w-name">'+esc(typeName(w.type))+'</span>'+
        '<span class="w-meta">'+w.attempts+' attempted'+(w.avgSec?' · ~'+w.avgSec+'s avg':'')+' · '+t('weakHint')+'</span></span>'+
        '<span class="w-acc '+(w.acc>=70?'ok':w.acc>=50?'mid':'bad')+'">'+w.acc+'%</span></button>').join('')+
      '</div>'
    : '<div class="section-title">'+t('weakAreas')+'</div><div class="card muted-note">'+t('needMoreData')+'</div>';

  const catButtons = SECTION_ORDER.map(k => {
    const c = CATEGORIES[k], cs = stats.byCategory[k];
    const catAcc = cs.a ? Math.round(100*cs.c/cs.a) : null;
    const size = bankOf(k).length;
    const unseen = bankOf(k).filter(q => recOf(q.id).seen === 0).length;
    return '<button class="cat-btn" onclick="startPractice(\''+k+'\')">'+
      '<span class="emoji">'+c.emoji+'</span><span class="info">'+
      '<span class="name">'+catName(k)+'</span><span class="meta">'+
      '<span class="pill">'+c.secQuestions+'q / '+c.secMinutes+'min</span>'+
      '<span class="pill">'+t('each', c.idealSecPerQ)+'</span>'+
      (catAcc!==null ? '<span class="pill '+(catAcc>=70?'ok':'warn')+'">'+t('accShort',catAcc)+'</span>' : '')+
      '<br>'+t('stillUnseen', unseen, size)+'</span></span><span class="arrow">›</span></button>';
  }).join('');

  main.innerHTML =
    dateEditor +
    crunchBanner +
    '<div class="goal"><div class="goal-top"><span class="goal-label">'+t('todayGoal')+'</span>'+
      '<span class="goal-count">'+done+' / '+DAILY_GOAL+'</span></div>'+
      '<div class="bar"><div class="bar-fill" style="width:'+pct+'%"></div></div>'+
      (done>=DAILY_GOAL ? '<div class="goal-done">'+t('goalDone')+'</div>' : '')+'</div>'+
    '<div class="stats-grid">'+
      '<div class="stat"><span class="num">'+stats.streak+'</span><span class="lbl">'+t('streak')+'</span></div>'+
      '<div class="stat"><span class="num">'+stats.totalAnswered+'</span><span class="lbl">'+t('answered')+'</span></div>'+
      '<div class="stat"><span class="num">'+acc+'%</span><span class="lbl">'+t('accuracy')+'</span></div>'+
    '</div>'+
    '<div class="section-title">'+t('readiness')+'</div>'+
    '<div class="readiness-grid">'+readinessHtml+'</div>'+
    '<p class="muted-note small">'+t('readinessInfo')+'</p>'+
    numHtml +
    '<button class="btn-primary" onclick="startMixed()">'+t('mixed')+'<span class="sub">&nbsp;· '+t('mixedSub')+'</span></button>'+
    '<button class="btn-secondary" onclick="startMentalMath(60)">'+t('mentalMath')+'<span class="sub">&nbsp;· '+t('mentalMathSub')+'</span></button>'+
    '<button class="btn-guide" onclick="renderGuide()">'+t('playbook')+'<span class="sub">&nbsp;· '+t('playbookSub')+'</span></button>'+
    '<button class="btn-secondary" onclick="startReview()"'+(due?'':' disabled')+'>'+
      t('review')+(due?' ('+due+')':t('reviewNone'))+'</button>'+
    '<button class="btn-secondary" onclick="renderExamMenu()">'+t('examMenu')+'</button>'+
    weakHtml +
    (crunchMode ? '' : '<div class="section-title">'+t('diagnostic')+'</div>'+
    '<p class="muted-note small">'+t('diagnosticNote')+'</p>'+
    '<div class="cat-list">'+catButtons+'</div>'+
    '<div class="listening-note">🎧 '+t('listeningNote')+'</div>'+
    '<button class="cat-btn" style="margin-top:12px;" onclick="startPractice(\'judgment\')">'+
      '<span class="emoji">⚖️</span><span class="info">'+
      '<span class="name">'+t('judgmentBtn').replace('⚖️ ','')+'</span>'+
      '<span class="meta">'+t('judgmentSub')+'</span></span><span class="arrow">›</span></button>') +
    '<button class="btn-plain" onclick="renderSettings()">⚙ '+t('settings')+'</button>'+
    '<button class="btn-plain" onclick="if(confirm(\'Reset all data? This cannot be undone.\')) { localStorage.clear(); location.reload(); }">🔄 Reset all data</button>';

  footerEl.textContent = t('footer', totalQuestions());
}

/* ==================== MODES ==================== */
function startMixed(){
  /* One mixed session covers the whole daily goal, as it did when the goal was 11. */
  const qs = pickQuestions(null, DAILY_GOAL);
  if(!qs.length) return;
  session = { mode:'mixed', queue:qs, index:0, correctCount:0, log:[] };
  renderQuestion();
}
function startQuick(){
  const q = pickOneMixed(); if(!q) return;
  session = { mode:'quick', queue:[q], index:0, correctCount:0, log:[] };
  renderQuestion();
}
function startPractice(catKey){
  const qs = pickQuestions(catKey, 10); if(!qs.length) return;
  session = { mode:'practice', catKey, queue:qs, index:0, correctCount:0, log:[] };
  renderQuestion();
}
function drillType(type){
  const qs = pickQuestions(null, 10, type); if(!qs.length) return;
  session = { mode:'drill', drillType:type, queue:qs, index:0, correctCount:0, log:[] };
  renderQuestion();
}
function practiceType(type){ drillType(type); }
function startReview(){
  let pool = duePool(); if(!pool.length) return;
  pool.sort(() => Math.random()-0.5);
  /* Apply transfer logic: prefer different questions of the same type for 2nd retrieval */
  pool = applyTransferLogic(pool);
  session = { mode:'review', queue:pool.slice(0,10), index:0, correctCount:0, log:[] };
  renderQuestion();
}
function startMentalMath(seconds){
  session = { mode:'mental-math', duration:seconds, endTime:Date.now()+seconds*1000,
              correct:0, total:0, problems:[], currentProblem:null, finished:false };
  renderMentalMathDrill();
}
function nextMentalMathProblem(){
  if(Date.now() >= session.endTime){
    session.finished = true;
    renderMentalMathResult();
    return;
  }
  session.currentProblem = mentalMathProblem();
  session.total++;
  renderMentalMathDrill();
}
function checkMentalMathAnswer(){
  const input = document.getElementById('mathAnswer');
  const userAns = parseFloat(input.value);
  const correct = Math.abs(userAns - session.currentProblem.ans) < 0.01;
  if(correct) session.correct++;
  session.problems.push({...session.currentProblem, userAns, correct});
  input.value = '';
  nextMentalMathProblem();
}

function renderExamMenu(){
  stopTimer(); setExamSkin(false); viewState = { name:'examMenu' };
  setHeader(t('examMenu'), '', true);
  countdownEl.classList.add('hidden');
  const mockQs = SECTION_ORDER.reduce((n,k) => n + Math.min(CATEGORIES[k].secQuestions, bankOf(k).length), 0);
  const mockMin = Math.round(SECTION_ORDER.reduce((n,k) =>
    n + Math.min(CATEGORIES[k].secQuestions, bankOf(k).length) * CATEGORIES[k].idealSecPerQ, 0)/60);
  main.innerHTML =
    '<button class="mode-card strict" onclick="chooseSection(true)">'+
      '<span class="mc-title">🔒 '+t('examStrict')+'</span><span class="mc-sub">'+t('examStrictSub')+'</span></button>'+
    '<button class="mode-card" onclick="chooseSection(false)">'+
      '<span class="mc-title">🕒 '+t('examCoached')+'</span><span class="mc-sub">'+t('examCoachedSub')+'</span></button>'+
    '<button class="mode-card mock" onclick="startFullMock()">'+
      '<span class="mc-title">🏁 '+t('fullMock')+'</span>'+
      '<span class="mc-sub">'+t('fullMockSub')+' · '+mockQs+'q · ~'+mockMin+' min</span></button>'+
    '<p class="muted-note small">'+t('mockNote')+'</p>';
}
function chooseSection(strict){
  viewState = { name:'examMenu' };
  setHeader(strict ? t('examStrict') : t('examCoached'), t('chooseSection'), true);
  main.innerHTML =
    '<div class="section-title">'+t('chooseSection')+'</div><div class="cat-list">'+
    SECTION_ORDER.map(k => {
      const c = CATEGORIES[k];
      const n = Math.min(c.secQuestions, bankOf(k).length);
      const mins = Math.round(n*c.idealSecPerQ/60);
      return '<button class="cat-btn" onclick="beginExam(\''+k+'\','+strict+')">'+
        '<span class="emoji">'+c.emoji+'</span><span class="info">'+
        '<span class="name">'+catName(k)+'</span><span class="meta">'+
        t('realFormat', c.secQuestions, c.secMinutes)+
        (n<c.secQuestions ? '<br>'+t('thisRun', n, mins) : '')+
        '</span></span><span class="arrow">›</span></button>';
    }).join('')+
    '</div><p class="muted-note small">'+(strict ? t('strictNote') : t('coachedNote'))+'</p>';
}
function buildSection(catKey){
  const cat = CATEGORIES[catKey];
  const n = Math.min(cat.secQuestions, bankOf(catKey).length);
  const qs = pickQuestions(catKey, n).sort(() => Math.random()-0.5);
  return { catKey, queue:qs, seconds:n*cat.idealSecPerQ };
}
function beginExam(catKey, strict){
  const s = buildSection(catKey);
  session = { mode:'exam', strict:!!strict, catKey, queue:s.queue, index:0, correctCount:0, log:[],
              examEndsAt: Date.now() + s.seconds*1000 };
  renderQuestion();
}
function startFullMock(){
  const sections = SECTION_ORDER.map(buildSection);
  session = { mode:'exam', strict:true, mock:true, mockSections:sections, mockIndex:0, mockResults:[],
              catKey:sections[0].catKey, queue:sections[0].queue, index:0, correctCount:0, log:[],
              examEndsAt: Date.now() + sections[0].seconds*1000 };
  renderQuestion();
}

/* ==================== QUESTION VIEW ==================== */
function renderQuestion(){
  stopTimer();
  viewState = { name:'question' };
  countdownEl.classList.add('hidden');
  const q = session.queue[session.index];
  const cat = CATEGORIES[q.cat];
  const isExam = session.mode === 'exam';
  setExamSkin(isExam);

  const label = { quick:t('modeQuick'), practice:t('modePractice'), mixed:t('modeMixed'),
                  review:t('modeReview'), exam:t('modeExam'), drill:t('modeDrill') }[session.mode];
  const sub = isExam && session.mock
    ? catName(q.cat)+' — '+(session.mockIndex+1)+'/'+session.mockSections.length
    : catName(q.cat);
  setHeader(label, sub, !isExam);

  const view = prepare(q);
  session.view = view;
  session.paused = false;
  const target = targetSecFor(q);
  const showDiff = prefs.revealDiff === 'before' && !isExam;
  const dl = DIFF[q.d || 2].label[lang] || DIFF[q.d || 2].label.en;
  const canCalc = q.cat === 'num' || q.cat === 'data';

  main.innerHTML =
    '<div class="card">'+
      '<div class="q-header"><span class="q-cat">'+(isExam?'':cat.emoji+' ')+catName(q.cat)+'</span>'+
        '<span class="q-progress">'+(session.index+1)+' / '+session.queue.length+'</span></div>'+
      '<div class="timer-row">'+
        '<span class="timer" id="timerEl">'+(isExam ? fmtTime((session.examEndsAt-Date.now())/1000) : '0:00')+'</span>'+
        (isExam && session.strict ? '' :
          '<button class="btn-pause" id="pauseBtn" onclick="togglePause()">'+t('pause')+'</button>')+
        (canCalc ? '<button class="btn-pause" onclick="toggleCalc()">🧮</button>' : '')+
        '<span class="meta-right">'+
          (showDiff ? '<span class="badge-diff d'+(q.d||2)+'">'+dl+'</span>' : '')+
          '<span class="badge-target">🎯 '+target+'s</span></span>'+
      '</div>'+
      '<div id="calcWrap"></div>'+
      '<div id="pausedNote"></div>'+
      '<div id="pacingHint"></div>'+
      (q.table ? '<div class="table-wrap">'+q.table+'</div>' : '')+
      (q.chart ? '<div class="chart-wrap">'+q.chart+'</div>' : '')+
      '<div class="q-prompt">'+esc(q.prompt)+'</div>'+
      '<div id="choicesWrap">'+
        view.choices.map((c,i)=>'<button class="choice" onclick="answerQuestion('+i+')">'+esc(c)+'</button>').join('')+
      '</div><div id="explanationWrap"></div>'+
    '</div>';

  if(prefs.calcOpen && canCalc) renderCalc();
  session.qStartedAt = Date.now();
  session.target = target;
  session.pacingHintShown = false;
  startTicking();
  window.scrollTo(0,0);
}

function startTicking(){
  stopTimer();
  if(!session || session.paused) return;
  const isExam = session.mode === 'exam';
  timerHandle = setInterval(() => {
    const el = document.getElementById('timerEl');
    if(!el) return;
    if(isExam){
      const rem = (session.examEndsAt - Date.now())/1000;
      el.textContent = fmtTime(rem);
      el.classList.toggle('warn', rem <= 30);
      if(rem <= 0){ stopTimer(); timeUpExam(); }
    } else {
      const e = (Date.now() - session.qStartedAt)/1000;
      el.textContent = fmtTime(e);
      const over = e > session.target;
      const approaching = !over && e >= session.target * 0.8;
      el.classList.toggle('warn', over);
      el.classList.toggle('approaching', approaching);
      /* Pacing Trainer: a subtle, once-per-question signal — not a countdown, not a
         penalty. Only in training modes, where the goal is building pacing instinct. */
      const hint = document.getElementById('pacingHint');
      if(hint){
        if(approaching && !session.pacingHintShown){
          session.pacingHintShown = true;
          hint.innerHTML = '<div class="pacing-hint">⏱ '+t('approachingTarget')+'</div>';
        } else if(over || (!approaching && !over)){
          hint.innerHTML = '';
        }
      }
    }
  }, 250);
}
function pauseTimer(note){
  if(!session || session.paused) return;
  if(session.mode === 'exam' && session.strict) return;   /* strict mode never pauses */
  stopTimer();
  session.paused = true; session.pauseStartedAt = Date.now();
  const el = document.getElementById('timerEl'); if(el) el.classList.add('paused');
  const b = document.getElementById('pauseBtn'); if(b){ b.textContent = t('resume'); b.classList.add('on'); }
  const n = document.getElementById('pausedNote'); if(n && note) n.innerHTML = '<div class="paused-note">⏸ '+esc(note)+'</div>';
}
function resumeTimer(){
  if(!session || !session.paused) return;
  const delta = Date.now() - session.pauseStartedAt;
  if(session.mode === 'exam') session.examEndsAt += delta; else session.qStartedAt += delta;
  session.paused = false;
  const el = document.getElementById('timerEl'); if(el) el.classList.remove('paused');
  const b = document.getElementById('pauseBtn'); if(b){ b.textContent = t('pause'); b.classList.remove('on'); }
  const n = document.getElementById('pausedNote'); if(n) n.innerHTML = '';
  startTicking();
}
function togglePause(){ if(session) session.paused ? resumeTimer() : pauseTimer(t('pausedManual')); }

function answerQuestion(idx){
  const q = session.queue[session.index];
  const view = session.view;
  const correct = idx === view.answer;
  const elapsedMs = Date.now() - session.qStartedAt;
  stopTimer();

  recordAnswer(q, correct, elapsedMs);
  if(correct) session.correctCount = (session.correctCount||0)+1;
  session.log.push({ q, chosen: view.choices[idx], correctText: view.choices[view.answer], correct, secs: Math.round(elapsedMs/1000) });

  /* Strict exam: no feedback at all, straight to the next question. */
  if(session.mode === 'exam' && session.strict){ nextQuestion(); return; }

  document.querySelectorAll('.choice').forEach((b,i) => {
    b.disabled = true;
    if(i === view.answer) b.classList.add('correct');
    else if(i === idx) b.classList.add('incorrect');
  });
  pauseTimer(session.mode === 'exam' ? t('pausedExam') : null);

  const last = session.index+1 >= session.queue.length;
  document.getElementById('explanationWrap').innerHTML =
    feedbackHtml(q, correct, Math.round(elapsedMs/1000), view.choices[view.answer], !correct) +
    '<button class="btn-next" onclick="nextQuestion()">'+(last?t('seeResult'):t('next'))+'</button>';
  const diffBadge = document.querySelector('.meta-right');
  if(prefs.revealDiff === 'after' && diffBadge && !diffBadge.querySelector('.badge-diff')){
    const dl = DIFF[q.d||2].label[lang] || DIFF[q.d||2].label.en;
    diffBadge.insertAdjacentHTML('afterbegin','<span class="badge-diff d'+(q.d||2)+'">'+dl+'</span>');
  }
}
/* Shared by the inline feedback and the end-of-exam review list. */
function feedbackHtml(q, correct, secs, correctText, showCorrectLine){
  const target = targetSecFor(q);
  const onPace = secs <= target;
  const med = medianTime(q);
  const pace = ' <span class="pace '+(onPace?'ok':'')+'">'+t('vsTarget', secs, target)+(onPace?' ✓':'')+'</span>'+
               (med ? ' <span class="pace">· '+t('yourMedian', med)+'</span>' : '');
  const take = takeawayOf(q);
  const topic = topicFor(q);
  return '<div class="explanation">'+
    '<b>'+(correct?t('correct'):t('incorrect'))+'</b>'+pace+
    (showCorrectLine ? '<br><b>'+t('correctAnswer')+'</b> '+esc(correctText) : '')+
    (take ? '<div class="takeaway">'+esc(take)+'</div>' : '')+
    '<div class="why"><b>'+t('why')+'</b> '+esc(explanationOf(q))+'</div></div>'+
    (topic ? '<button class="btn-technique" onclick="openTopicFromQuestion(\''+q.type+'\')">'+t('technique')+esc(topic.tp.title)+'</button>' : '');
}
function openTopicFromQuestion(type){
  const g = guideDoc();
  for(let si=0; si<g.sections.length; si++)
    for(let ti=0; ti<g.sections[si].topics.length; ti++)
      if(g.sections[si].topics[ti].type === type){ stopTimer(); setExamSkin(false); renderGuideTopic(si, ti); return; }
}
function nextQuestion(){
  resumeTimer();
  session.index++;
  if(session.index >= session.queue.length){ finishSection(); return; }
  renderQuestion();
}
function timeUpExam(){
  for(let i=session.index; i<session.queue.length; i++){
    recordAnswer(session.queue[i], false, 0);
    session.log.push({ q: session.queue[i], chosen:null, correctText:null, correct:false, secs:0 });
  }
  session.index = session.queue.length;
  if(session.strict){ finishSection(); return; }
  const w = document.getElementById('explanationWrap');
  if(w){
    w.innerHTML = '<div class="explanation"><b>'+t('timeUp')+'</b><br>'+t('timeUpBody')+'</div>'+
      '<button class="btn-next" onclick="finishSection()">'+t('seeResult')+'</button>';
    document.querySelectorAll('.choice').forEach(b => b.disabled = true);
  }
}
/* End of a section: in a full mock, roll into the next one. */
function finishSection(){
  stopTimer();
  if(session.mock){
    session.mockResults.push({ catKey: session.catKey, correct: session.correctCount, total: session.queue.length });
    session.mockIndex++;
    if(session.mockIndex < session.mockSections.length){
      const s = session.mockSections[session.mockIndex];
      session.catKey = s.catKey; session.queue = s.queue; session.index = 0; session.correctCount = 0;
      session.examEndsAt = Date.now() + s.seconds*1000;
      renderQuestion();
      return;
    }
  }
  renderResult();
}

/* ==================== CALCULATOR (audit #5) ==================== */
let calcState = { acc:null, op:null, cur:'0', fresh:true };
function toggleCalc(){ prefs.calcOpen = !prefs.calcOpen; savePrefs(); renderCalc(); }
function renderCalc(){
  const wrap = document.getElementById('calcWrap');
  if(!wrap) return;
  if(!prefs.calcOpen){ wrap.innerHTML = ''; return; }
  const keys = ['7','8','9','÷','4','5','6','×','1','2','3','−','0','.','=','+'];
  wrap.innerHTML = '<div class="calc"><div class="calc-display" id="calcDisplay">'+calcState.cur+'</div>'+
    '<div class="calc-keys">'+
    keys.map(k => '<button class="ck'+(/[÷×−+=]/.test(k)?' op':'')+'" onclick="calcKey(\''+k+'\')">'+k+'</button>').join('')+
    '<button class="ck wide" onclick="calcKey(\'C\')">C</button></div></div>';
}
function calcKey(k){
  const d = () => { const el = document.getElementById('calcDisplay'); if(el) el.textContent = calcState.cur; };
  if(k === 'C'){ calcState = { acc:null, op:null, cur:'0', fresh:true }; d(); return; }
  if(/[0-9.]/.test(k)){
    if(k === '.' && calcState.cur.indexOf('.') !== -1) return;
    calcState.cur = calcState.fresh ? (k === '.' ? '0.' : k) : calcState.cur + k;
    calcState.fresh = false; d(); return;
  }
  const val = parseFloat(calcState.cur);
  const apply = (a,b,op) => op==='+'?a+b : op==='−'?a-b : op==='×'?a*b : op==='÷'?(b===0?NaN:a/b) : b;
  if(calcState.op !== null && calcState.acc !== null && !calcState.fresh){
    const r = apply(calcState.acc, val, calcState.op);
    calcState.acc = r;
    calcState.cur = Number.isFinite(r) ? String(Math.round(r*1e10)/1e10) : 'Error';
  } else {
    calcState.acc = val;
  }
  calcState.op = (k === '=') ? null : k;
  calcState.fresh = true;
  d();
}

/* ==================== MENTAL MATH DRILLS ==================== */
function renderMentalMathDrill(){
  stopTimer(); setExamSkin(false); viewState = { name:'mental-math' };
  if(!session.currentProblem) nextMentalMathProblem();
  const remaining = Math.max(0, Math.ceil((session.endTime - Date.now())/1000));
  const p = session.currentProblem;
  main.innerHTML =
    '<div class="mental-math-container">'+
    '<div class="math-timer">'+remaining+'s</div>'+
    '<div class="math-problem">'+esc(p.display)+'</div>'+
    '<input type="number" id="mathAnswer" placeholder="?" step="0.01" autocomplete="off" autofocus>'+
    '<button class="btn-primary" onclick="checkMentalMathAnswer()">'+t('mathCorrect')+'</button>'+
    '<div class="math-stats">'+session.correct+' / '+session.total+'</div>'+
    '</div>';
  setHeader(t('mentalMath'), t('drillLength',session.duration), true);
  const input = document.getElementById('mathAnswer');
  if(input) input.focus();
}
function renderMentalMathResult(){
  stopTimer(); setExamSkin(false); viewState = { name:'mental-math-result' };
  const acc = session.total ? Math.round(100*session.correct/session.total) : 0;
  main.innerHTML =
    '<div class="card result-score"><span class="big">'+session.correct+'</span>'+
    '<span class="of">'+t('mathScore',session.total)+'</span>'+
    '<div class="result-note">'+acc+'% accuracy</div></div>'+
    '<button class="btn-secondary" onclick="startMentalMath(60)">60s</button>'+
    '<button class="btn-secondary" onclick="startMentalMath(90)">90s</button>'+
    '<button class="btn-secondary" onclick="startMentalMath(120)">2min</button>'+
    '<button class="btn-secondary" onclick="renderHome()">'+t('backHome')+'</button>';
  setHeader(t('mathResults'), '', true);
}

/* ==================== RESULT & REVIEW ==================== */
function renderResult(){
  stopTimer(); setExamSkin(false);
  viewState = { name:'result' };
  const isMock = !!session.mock;
  const total = isMock ? session.mockResults.reduce((n,r)=>n+r.total,0) : session.queue.length;
  const correct = isMock ? session.mockResults.reduce((n,r)=>n+r.correct,0) : (session.correctCount||0);
  const pct = total ? Math.round(100*correct/total) : 0;
  setHeader(isMock ? t('mockSummary') : t('result'),
            session.catKey && !isMock ? catName(session.catKey) : t('mixedLabel'), true);

  const note = pct>=85 ? t('note85') : pct>=70 ? t('note70') : pct>=50 ? t('note50') : t('noteLow');
  const perSection = isMock
    ? '<div class="card"><table class="mock-table"><tbody>'+
      session.mockResults.map(r => '<tr><td>'+catName(r.catKey)+'</td><td class="n">'+r.correct+'/'+r.total+'</td>'+
        '<td class="n">'+Math.round(100*r.correct/r.total)+'%</td></tr>').join('')+
      '</tbody></table></div>' : '';

  /* Fatigue analysis for full mocks */
  const fatigue = isMock && session.log ? mockFatigueAnalysis(session.log) : null;
  const fatigueHtml = fatigue
    ? '<div class="card"><div class="section-title">'+t('mockFatigue')+'</div>'+
      '<table class="fatigue-table"><tbody><tr><th>Questions</th><th>Correct</th><th>Accuracy</th></tr>'+
      fatigue.map(q => {
        const isBad = q.acc < (fatigue[0].acc - 15);
        return '<tr class="'+(isBad?'fatigue-declining':'')+'"><td>'+q.range+'</td><td class="n">'+q.correct+'/'+q.total+
          '</td><td class="n '+(q.acc>=80?'ok':q.acc>=60?'warn':'bad')+'">'+q.acc+'%</td></tr>';
      }).join('')+
      '</tbody></table>'+
      (fatigue[fatigue.length-1].acc < fatigue[0].acc - 10 ? '<p class="bad-note">⚠ '+t('fatigueDeclining')+'</p>' : '<p class="ok-note">✓ '+t('fatigueStable')+'</p>')+
      '</div>' : '';

  main.innerHTML =
    '<div class="card result-score"><span class="big">'+correct+'</span>'+
      '<span class="of">'+t('correctOf', total)+'</span>'+
      '<div class="result-note">'+pct+'% · '+note+'</div></div>'+
    perSection +
    fatigueHtml +
    (session.log && session.log.length ? '<button class="btn-primary" onclick="renderReviewList()">'+t('reviewAnswers')+'</button>' : '')+
    '<button class="btn-secondary" onclick="startMixed()">'+t('anotherMixed')+'</button>'+
    '<button class="btn-secondary" onclick="renderHome()">'+t('backHome')+'</button>';
  window.scrollTo(0,0);
}
/* Full post-exam review — the payoff for withholding feedback during a strict run. */
function renderReviewList(){
  stopTimer(); setExamSkin(false);
  viewState = { name:'reviewList' };
  setHeader(t('reviewAnswers'), '', true);
  const rows = session.log.map((e,i) => {
    const q = e.q;
    return '<div class="card review-item">'+
      '<div class="q-header"><span class="q-cat">'+(i+1)+'. '+catName(q.cat)+' · '+esc(typeName(q.type))+'</span>'+
      '<span class="'+(e.correct?'tick ok':'tick bad')+'">'+(e.correct?'✓':'✕')+'</span></div>'+
      (q.table ? '<div class="table-wrap">'+q.table+'</div>' : '')+
      (q.chart ? '<div class="chart-wrap">'+q.chart+'</div>' : '')+
      '<div class="q-prompt small">'+esc(q.prompt)+'</div>'+
      '<div class="ans-line"><b>'+t('yourAnswer')+'</b> '+(e.chosen ? esc(e.chosen) : t('noAnswer'))+'</div>'+
      (e.correct ? '' : '<div class="ans-line good"><b>'+t('correctAnswer')+'</b> '+esc(e.correctText || q.choices[q.answer])+'</div>')+
      (takeawayOf(q) ? '<div class="takeaway">'+esc(takeawayOf(q))+'</div>' : '')+
      '<div class="why"><b>'+t('why')+'</b> '+esc(explanationOf(q))+'</div></div>';
  }).join('');
  main.innerHTML = rows + '<button class="btn-secondary" onclick="renderHome()">'+t('backHome')+'</button>';
  window.scrollTo(0,0);
}

/* ==================== PLAYBOOK ==================== */
function renderGuide(){
  stopTimer(); setExamSkin(false); viewState = { name:'guide' };
  const g = guideDoc();
  setHeader(g.title, g.subtitle, true);
  countdownEl.classList.add('hidden');
  let html = '<div class="card">' + g.intro.map(p => '<p class="guide-intro">'+esc(p)+'</p>').join('') + '</div>';
  g.sections.forEach((sec, si) => {
    html += '<div class="g-sec-title">'+sec.icon+' '+esc(sec.title)+'</div>';
    if(sec.blurb) html += '<p class="g-sec-blurb">'+esc(sec.blurb)+'</p>';
    sec.topics.forEach((tp, ti) => {
      const st = tp.type && stats.byType[tp.type];
      const acc = st && st.a >= 3 ? Math.round(100*st.c/st.a) : null;
      html += '<button class="g-topic-btn" onclick="renderGuideTopic('+si+','+ti+')">'+
        '<span class="t">'+esc(tp.title)+'</span>'+
        (acc!==null ? '<span class="w-acc '+(acc>=70?'ok':acc>=50?'mid':'bad')+'">'+acc+'%</span>' : '')+
        '<span class="arrow">›</span></button>';
    });
  });
  html += '<div class="section-title">'+t('sources')+'</div><div class="card"><ul class="g-sources">'+
    g.sources.map(s => '<li>'+esc(s)+'</li>').join('')+'</ul></div>';
  main.innerHTML = html;
  window.scrollTo(0,0);
}
function renderGuideTopic(si, ti){
  stopTimer(); setExamSkin(false);
  viewState = { name:'guideTopic', sec:si, topic:ti };
  const g = guideDoc(), sec = g.sections[si], tp = sec.topics[ti];
  setHeader(tp.title, sec.icon+' '+sec.title, true);
  countdownEl.classList.add('hidden');
  let html = '<div class="card">';
  if(tp.recognise) html += '<div class="g-block"><div class="g-label">'+t('recognise')+'</div><div class="g-text">'+esc(tp.recognise)+'</div></div>';
  if(tp.steps && tp.steps.length) html += '<div class="g-block"><div class="g-label">'+t('method')+'</div><ol class="g-steps">'+tp.steps.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ol></div>';
  if(tp.key && tp.key.length) html += '<div class="g-block"><div class="g-label key">'+t('remember')+'</div><ul class="g-list key">'+tp.key.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ul></div>';
  if(tp.traps && tp.traps.length) html += '<div class="g-block"><div class="g-label traps">'+t('traps')+'</div><ul class="g-list traps">'+tp.traps.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ul></div>';
  if(tp.example) html += '<div class="g-block"><div class="g-label">'+t('worked')+'</div><div class="g-example"><div class="q">'+esc(tp.example.q)+'</div><div class="a">→ '+esc(tp.example.a)+'</div><div>'+esc(tp.example.why)+'</div></div></div>';
  html += '</div>';
  if(tp.type) html += '<button class="btn-primary" onclick="drillType(\''+tp.type+'\')">'+t('practiceThis')+' · '+esc(tp.title)+'</button>';
  main.innerHTML = html;
  window.scrollTo(0,0);
}

/* ==================== SETTINGS ==================== */
function renderSettings(){
  stopTimer(); setExamSkin(false); viewState = { name:'settings' };
  setHeader(t('settings'), '', true);
  countdownEl.classList.add('hidden');
  const seg = (opts, cur, fn) => '<div class="seg">'+opts.map(o =>
    '<button class="'+(cur===o.v?'on':'')+'" onclick="'+fn+'(\''+o.v+'\')">'+o.l+'</button>').join('')+'</div>';
  main.innerHTML =
    '<div class="card"><div class="g-label">'+t('appearance')+'</div>'+
      seg([{v:'auto',l:t('themeAuto')},{v:'light',l:t('themeLight')},{v:'dark',l:t('themeDark')}], theme, 'setTheme')+
    '</div>'+
    '<div class="card"><div class="g-label">'+t('showDiff')+'</div>'+
      seg([{v:'before',l:t('diffBefore')},{v:'after',l:t('diffAfter')}], prefs.revealDiff, 'setRevealDiff')+
      '<p class="muted-note small" style="margin-top:8px;">'+t('diffAfterNote')+'</p>'+
    '</div>'+
    '<div class="card"><div class="g-label">'+t('backup')+'</div>'+
      '<p class="muted-note small">'+t('backupNote')+'</p>'+
      '<button class="btn-secondary" onclick="exportProgress()">⬇ '+t('exportBtn')+'</button>'+
      '<label class="btn-secondary file-label">⬆ '+t('importBtn')+
        '<input type="file" accept="application/json" onchange="importProgress(event)" hidden></label>'+
      '<div id="importMsg" class="muted-note small"></div>'+
    '</div>';
}
function setRevealDiff(v){ prefs.revealDiff = v; savePrefs(); renderSettings(); }
function exportProgress(){
  const blob = new Blob([JSON.stringify({ v:3, examDate:examDate(), stats }, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'gorilla-prep-' + todayStr() + '.json';
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
}
function importProgress(ev){
  const f = ev.target.files && ev.target.files[0];
  const msg = document.getElementById('importMsg');
  if(!f) return;
  const rd = new FileReader();
  rd.onload = () => {
    try{
      const d = JSON.parse(rd.result);
      if(!d || !d.stats || typeof d.stats.totalAnswered !== 'number') throw new Error('shape');
      stats = Object.assign(blankStats(), d.stats);
      saveStats();
      if(d.examDate) setExamDate(d.examDate);
      if(msg){ msg.textContent = t('imported'); msg.className = 'ok-note small'; }
    }catch(e){
      if(msg){ msg.textContent = t('importFailed'); msg.className = 'bad-note small'; }
    }
  };
  rd.readAsText(f);
}

/* ==================== BOOT ==================== */
if('serviceWorker' in navigator){
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(()=>{}); });
}
document.getElementById('langEn').classList.toggle('on', lang === 'en');
document.getElementById('langEs').classList.toggle('on', lang === 'es');
document.documentElement.setAttribute('lang', lang);
applyTheme();
renderHome();
