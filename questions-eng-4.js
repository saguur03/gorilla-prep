/* English Level — fourth expansion bank (15 ago 2026).
   Listening comprehension questions using Web Speech API (speechSynthesis).
   Audio is generated client-side from text — no pre-recorded files, offline-compatible.
   Each prompt includes both the text to be spoken and the comprehension question.
   Appends to QUESTION_BANK.eng, ids continue from questions-eng-3.js (eng-300 onward).
   Every question carries type, d, cefr explicitly. */
window.QUESTION_BANK = window.QUESTION_BANK || {};
window.QUESTION_BANK.eng = window.QUESTION_BANK.eng || [];

(function(){
var Q = [
// ============= LEVEL d:1 (fácil) — 8 questions =============
// 6 × B2, 2 × C1

{
  type: "listening", d: 1, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nWe held our quarterly meeting yesterday to review sales performance. The report shows a fifteen percent increase compared to last quarter.",
  question: "¿Cuál fue el cambio en el desempeño de ventas?",
  choices: ["Aumentó 15%", "Disminuyó 15%", "Se mantuvo igual", "Aumentó 50%"],
  answer: 0,
  explanation: "El audio dice explícitamente 'fifteen percent increase' en comparación al trimestre anterior."
},

{
  type: "listening", d: 1, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe project deadline has been moved from March to June due to resource constraints. Our team needs more time to complete the deliverables.",
  question: "¿Por qué se cambió la fecha límite del proyecto?",
  choices: ["Restricciones de recursos", "Cambio de cliente", "Problemas de calidad", "Cambio de prioridades"],
  answer: 0,
  explanation: "El audio menciona 'due to resource constraints' como razón del cambio de fecha."
},

{
  type: "listening", d: 1, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nOur budget allocation for this fiscal year has been approved. Marketing will receive eight million dollars, while operations will get twelve million.",
  question: "¿Cuánto presupuesto se asignó para operaciones?",
  choices: ["$8 millones", "$12 millones", "$20 millones", "$10 millones"],
  answer: 1,
  explanation: "El audio dice claramente 'operations will get twelve million dollars'."
},

{
  type: "listening", d: 1, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nWe need to address the client retention issue immediately. Last month we lost three major accounts to competitors.",
  question: "¿Cuántas cuentas importantes se perdieron el mes pasado?",
  choices: ["Una", "Dos", "Tres", "Cinco"],
  answer: 2,
  explanation: "El audio menciona específicamente 'lost three major accounts to competitors'."
},

{
  type: "listening", d: 1, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe merger announcement will be made next Monday during the shareholders' meeting. This strategic move will strengthen our market position significantly.",
  question: "¿Cuándo se anunciará la fusión?",
  choices: ["Hoy", "El próximo lunes", "El próximo mes", "En tres semanas"],
  answer: 1,
  explanation: "El audio dice 'The merger announcement will be made next Monday during the shareholders' meeting'."
},

{
  type: "listening", d: 1, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe new product launch exceeded expectations. Customer demand is so high that we have already doubled our initial production targets.",
  question: "¿Cómo ha sido la acogida del nuevo producto?",
  choices: ["Decepcionante", "Muy exitosa", "Moderada", "Nula"],
  answer: 1,
  explanation: "El audio indica que 'exceeded expectations' y que 'doubled production targets' debido a la alta demanda."
},

{
  type: "listening", d: 1, cefr: "C1",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nWe have implemented a comprehensive digital transformation strategy to enhance operational efficiency. The initiative encompasses cloud migration, process automation, and workforce upskilling programs.",
  question: "¿Cuáles son los componentes principales de la estrategia de transformación?",
  choices: ["Reducción de personal y ventas", "Migración a la nube, automatización y capacitación", "Solo cambios de marketing", "Cambio de liderazgo"],
  answer: 1,
  explanation: "El audio lista explícitamente los tres componentes: 'cloud migration, process automation, and workforce upskilling programs'."
},

{
  type: "listening", d: 1, cefr: "C1",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nOur stakeholder analysis reveals a critical gap in communication infrastructure. Implementing a centralized reporting dashboard will facilitate better cross-departmental collaboration and decision-making.",
  question: "¿Qué problema se identificó en el análisis de partes interesadas?",
  choices: ["Falta de personal", "Brecha en infraestructura de comunicación", "Pérdida de clientes", "Problemas de financiamiento"],
  answer: 1,
  explanation: "El audio menciona 'critical gap in communication infrastructure' como el problema identificado."
},

// ============= LEVEL d:2 (medio) — 8 questions =============
// 6 × B2, 2 × C1

{
  type: "listening", d: 2, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nDuring the consultation, the client expressed concerns about implementation timeline. However, she seemed satisfied with our technical approach and budget proposal.",
  question: "¿Con qué aspecto de la propuesta estaba satisfecho el cliente?",
  choices: ["Solo el presupuesto", "El cronograma de implementación", "El enfoque técnico y el presupuesto", "Nada en particular"],
  answer: 2,
  explanation: "El audio dice que el cliente 'seemed satisfied with our technical approach and budget proposal', pero tenía preocupaciones sobre el cronograma."
},

{
  type: "listening", d: 2, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nAlthough the revenue targets were not achieved, the team made significant progress in market penetration. The new customer acquisition rate increased by twenty percent.",
  question: "¿Qué se logró a pesar de no alcanzar los objetivos de ingresos?",
  choices: ["Reducción de costos", "Progreso significativo en penetración de mercado", "Aumento de personal", "Cierre de competidores"],
  answer: 1,
  explanation: "A pesar de no alcanzar los objetivos, el audio destaca 'significant progress in market penetration' y aumento de 20% en nuevas adquisiciones."
},

{
  type: "listening", d: 2, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe regulatory change will have minimal impact on our operations because we already comply with the new standards. Our compliance team anticipated these changes last year.",
  question: "¿Por qué el cambio regulatorio no afectará significativamente la operación?",
  choices: ["Es un cambio muy pequeño", "Ya cumplen con los nuevos estándares", "No es obligatorio cumplir", "Nadie sabe qué hacer"],
  answer: 1,
  explanation: "El audio explicita que 'we already comply with the new standards' por lo que tendrá 'minimal impact'."
},

{
  type: "listening", d: 2, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nWhile the acquisition looks promising on paper, there are underlying concerns about cultural integration. The due diligence process revealed incompatibilities in management philosophies.",
  question: "¿Cuál es la principal preocupación sobre la adquisición?",
  choices: ["El precio es muy alto", "Incompatibilidades en filosofías de gestión", "Falta de análisis financiero", "El regulador la rechazará"],
  answer: 1,
  explanation: "El audio indica que aunque se ve prometedora, existen 'concerns about cultural integration' y 'incompatibilities in management philosophies'."
},

{
  type: "listening", d: 2, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nOur competitive advantage stems from a combination of proprietary technology and talented workforce. Nevertheless, we must innovate continuously to maintain our market leadership position.",
  question: "¿De qué depende la ventaja competitiva mencionada?",
  choices: ["Solo de bajos precios", "De tecnología y talento humano", "Del tamaño de la empresa", "De asociaciones estratégicas"],
  answer: 1,
  explanation: "El audio dice explícitamente que la ventaja viene de 'combination of proprietary technology and talented workforce'."
},

{
  type: "listening", d: 2, cefr: "C1",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe strategic pivot toward sustainability initiatives reflects our commitment to stakeholder value creation beyond mere profitability. Integrating ESG principles into our supply chain will mitigate reputational risks and enhance long-term viability.",
  question: "¿Cuál es el propósito principal del giro estratégico hacia sostenibilidad?",
  choices: ["Cumplir con regulaciones", "Crear valor sostenible y mitigar riesgos", "Reducir costos inmediatos", "Mejorar solo la imagen"],
  answer: 1,
  explanation: "El audio conecta la sostenibilidad con 'value creation', mitigación de riesgos reputacionales y 'long-term viability'."
},

{
  type: "listening", d: 2, cefr: "C1",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nDespite robust market indicators, the organization faces latent structural constraints that impede scalability. Organizational restructuring and capability-building initiatives are prerequisites for sustained competitive advantage.",
  question: "¿Qué obstáculos enfrenta la organización para escalar?",
  choices: ["Solo mercado débil", "Restricciones estructurales latentes", "Falta de clientes", "Problemas de financiamiento externo"],
  answer: 1,
  explanation: "El audio menciona 'latent structural constraints that impede scalability' como el obstáculo principal, a pesar de indicadores de mercado robustos."
},

{
  type: "listening", d: 2, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe vendor selection process prioritized both cost efficiency and quality assurance. We ultimately chose the supplier who offered the best balance, not necessarily the cheapest option.",
  question: "¿Cuál fue el criterio principal para seleccionar al proveedor?",
  choices: ["El precio más bajo", "La mejor combinación de costo y calidad", "Solo calidad", "Proximidad geográfica"],
  answer: 1,
  explanation: "El audio indica que se eligió 'the best balance' entre costo y calidad, 'not necessarily the cheapest option'."
}
];

window.QUESTION_BANK.eng = window.QUESTION_BANK.eng.concat(Q);
})();
