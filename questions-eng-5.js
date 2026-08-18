/* English Level — fifth expansion bank (17 ago 2026).

   Santiago asked for at least 50 reading True/False and 50 listening questions (previous
   totals: 22 reading T/F from questions-eng-3.js, 16 listening from questions-eng-4.js).
   This file adds 28 reading True/False + 34 listening to reach 50 of each.

   Appends to QUESTION_BANK.eng after questions-eng-4.js (which ends at index 337 / id
   eng-337), so these 62 new questions land at indices 338-399 (ids eng-338 to eng-399).
   The 28 reading questions come first (eng-338 to eng-365), then the 34 listening
   questions (eng-366 to eng-399) — audio files must be named to match those ids exactly.

   Reading: difficulty and True/False balance both targeted to keep the running totals
   close to even. Combined with questions-eng-3.js's 22 (11 True / 11 False, d1:10/d2:10/
   d3:2), this file's 14 True / 14 False and d1:10/d2:10/d3:8 brings the 50-question total
   to 25/25 True-False and roughly 40/40/20 easy/medium/hard.

   Listening: combined with questions-eng-4.js's 16 (d1:8/d2:8/d3:0, 12 B2/4 C1), this
   file's d1:12/d2:12/d3:10 (23 B2/11 C1) brings the 50-question total to d1:20/d2:20/d3:10
   (40/40/20) and 35 B2/15 C1 (roughly 70/30, matching prior batches' ratio). The d3
   listening items are inference/gist questions (what the speaker implies, not just states)
   rather than harder vocabulary, since genuine listening difficulty in the real test comes
   from synthesis, not obscure words — the audio itself stays short and TTS-safe (all under
   180 characters; texts over ~200 characters triggered 400 Bad Request from the Google
   Translate TTS endpoint used to generate the paso-4 audio files, per that session's retry
   log). New audio must be generated the same way and saved as ./audio/eng-{id}.mp3.

   Every question carries `type`, `d`, and `cefr` explicitly, same as questions-eng-3.js and
   questions-eng-4.js — the index-based CEFR assignment in levels-eng.js does not extend to
   this file (see levels-eng.js EXPECTED_ENG, updated separately to 400). */
window.QUESTION_BANK = window.QUESTION_BANK || {};
window.QUESTION_BANK.eng = window.QUESTION_BANK.eng || [];

(function(){
var Q = [

/* ---------- READING (True/False) — 28 questions, d1:10/d2:10/d3:8, 19 B2/9 C1, 14T/14F ---------- */

/* d1 — 10 questions, single-clause claims */
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe retailer tested a 5% price increase on its top-selling product line in a subset of stores before rolling it out nationwide. Sales volume in the test stores fell by only 2%, well within the threshold the pricing team had set for a viable increase.\n\nTrue or false: The retailer piloted the price increase in select stores before applying it company-wide.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The passage says the increase was 'tested... in a subset of stores before rolling it out nationwide', which directly confirms a pilot before the company-wide rollout."
},
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nA logistics company installed automated sorting robots in its largest distribution center, cutting average order processing time by 30%. The rollout was limited to that single facility while the company evaluates results before expanding further.\n\nTrue or false: The automated sorting robots have already been installed across all of the company's distribution centers.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The passage states the rollout 'was limited to that single facility', which directly contradicts a claim of installation 'across all' distribution centers."
},
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe firm's chief financial officer resigned after five years in the role, citing a desire to pursue an opportunity outside the industry. The board named the current controller as interim CFO while it conducts an external search.\n\nTrue or false: The company has not yet permanently replaced its former CFO.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The board named the controller as 'interim CFO while it conducts an external search', which confirms no permanent replacement has been made yet."
},
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nSales leadership restructured its commission plan to reward long-term contract renewals more heavily than new customer acquisition. Within two quarters, the renewal rate rose, but new customer signings dropped by 18%.\n\nTrue or false: The restructured commission plan increased both renewal rates and new customer signings.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The passage states new customer signings 'dropped by 18%', which directly contradicts a claim that both figures increased."
},
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nAfter shifting to a permanent hybrid schedule, the company measured no change in average output per employee, based on internal productivity metrics tracked before and after the transition.\n\nTrue or false: The company's internal metrics showed productivity per employee stayed roughly the same after adopting hybrid work.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The passage directly states 'no change in average output per employee', which matches a claim that productivity stayed roughly the same."
},
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nA mid-sized bank detected unauthorized access to an internal server but confirmed that no customer account data was exposed, since the affected server stored only internal scheduling records.\n\nTrue or false: The cybersecurity incident exposed customer account data.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The passage confirms 'no customer account data was exposed', directly contradicting the claim."
},
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe IT vendor missed its contractual 99.9% uptime guarantee for the third consecutive quarter, triggering a service-credit clause that reduces the client's next invoice by 10%.\n\nTrue or false: The vendor's repeated failure to meet its uptime guarantee will lower the client's upcoming bill.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The missed guarantee 'triggering a service-credit clause that reduces the client's next invoice by 10%' directly confirms the claim."
},
{
  type: "reading", d: 1, cefr: "C1",
  prompt: "Read the text and answer the question.\n\nThe company set a goal of increasing representation of women in senior leadership to 35% within three years. At the two-year mark, the figure stood at 29%, up from 22% at the programme's launch, putting the firm on a trajectory that would fall short of the target if the pace held steady.\n\nTrue or false: At the two-year mark, the company had already met its three-year representation target.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The two-year figure was 29%, below the 35% target, and the passage explicitly says the trajectory 'would fall short of the target' — the goal had not been met."
},
{
  type: "reading", d: 1, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe company outsourced its tier-one customer support to a third-party call center, keeping more complex technical escalations in-house with its original support staff.\n\nTrue or false: The company still handles some customer support internally after outsourcing.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The passage says the company kept 'more complex technical escalations in-house', confirming some support remains internal."
},
{
  type: "reading", d: 1, cefr: "C1",
  prompt: "Read the text and answer the question.\n\nThe manufacturer issued a voluntary recall of one product batch after a supplier flagged a labeling error, though the company stated the affected units posed no safety risk and that the recall was a precautionary measure taken ahead of any regulatory requirement to do so.\n\nTrue or false: Regulators ordered the manufacturer to recall the affected batch.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The passage describes a 'voluntary recall' taken 'ahead of any regulatory requirement', meaning the company initiated it, not a regulator."
},

/* d2 — 10 questions, compound-clause claims */
{
  type: "reading", d: 2, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe exporter began hedging 70% of its expected euro revenue using forward contracts, aiming to reduce exposure to exchange-rate swings. In the following year, the euro weakened sharply, and while the hedge limited losses on the hedged portion, the unhedged 30% still exposed the company to a meaningful earnings hit.\n\nTrue or false: The hedging strategy fully protected the exporter's earnings from the euro's decline.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The passage says the unhedged 30% 'still exposed the company to a meaningful earnings hit', so the protection was partial, not full."
},
{
  type: "reading", d: 2, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe startup claimed an R&D tax credit that offset a portion of its engineering payroll costs, reducing its effective tax liability for the year. Finance estimated the credit freed up enough cash to extend the company's runway by roughly two months.\n\nTrue or false: The tax credit both lowered the company's tax liability and extended its available cash runway.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "Both clauses are directly confirmed: the credit reduced 'effective tax liability' and freed cash to 'extend the company's runway by roughly two months'."
},
{
  type: "reading", d: 2, cefr: "C1",
  prompt: "Read the text and answer the question.\n\nFollowing pressure from an activist investor, the company added two independent directors with operational turnaround experience, while the founder retained his seat as chairman. The activist investor had originally called for the founder's removal from the board entirely.\n\nTrue or false: The company fully complied with the activist investor's original demand regarding the founder.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The activist wanted the founder removed entirely, but the founder 'retained his seat as chairman' — the company did not fully comply with that specific demand."
},
{
  type: "reading", d: 2, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe software company introduced a mid-priced tier between its existing basic and premium plans. Within one quarter, a third of premium subscribers downgraded to the new mid-tier plan, while overall subscriber revenue held steady due to new sign-ups at the mid-tier level.\n\nTrue or false: Some premium subscribers moved to the new mid-tier plan, and total subscriber revenue did not decline as a result.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "Both parts are supported: a third of premium subscribers downgraded, and overall revenue 'held steady' rather than declining."
},
{
  type: "reading", d: 2, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe company granted stock options to all full-time employees as part of a new retention initiative, vesting over four years with a one-year cliff. An internal survey found the programme had no measurable effect on voluntary turnover in its first year, though HR noted the cliff period had not yet been reached for any employee.\n\nTrue or false: The survey proved the stock option programme failed to reduce turnover once the vesting cliff took effect.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "HR noted the cliff 'had not yet been reached for any employee', so no conclusion can be drawn about turnover once the cliff takes effect — the claim overreaches."
},
{
  type: "reading", d: 2, cefr: "C1",
  prompt: "Read the text and answer the question.\n\nExpanding into a new European market required the firm to appoint a local data protection officer and update its consent workflows to meet regional privacy regulations. Legal estimated the compliance work added roughly ten weeks to the original launch timeline.\n\nTrue or false: Meeting the new market's privacy requirements delayed the firm's launch compared to its original schedule.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The compliance work 'added roughly ten weeks to the original launch timeline', directly confirming the delay."
},
{
  type: "reading", d: 2, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe manufacturer moved a portion of its production from an overseas facility to a plant closer to its main market, citing shipping delays as the primary motivation. Unit costs at the new facility were 8% higher, though the company reported faster average delivery times to customers.\n\nTrue or false: Nearshoring production reduced both delivery times and unit costs.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "Unit costs were '8% higher' at the new facility, not reduced, so only one half of the compound claim holds — the statement is False."
},
{
  type: "reading", d: 2, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe company repositioned its flagship brand to target a younger demographic, updating its packaging and advertising tone. Sales among customers under 30 rose 15% in the following year, while sales among its traditional older customer base declined slightly.\n\nTrue or false: The rebrand grew sales with younger customers but came with a slight decline among the brand's traditional customer base.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "Both clauses are directly confirmed: sales rose 15% under-30, and sales among the traditional older base 'declined slightly'."
},
{
  type: "reading", d: 2, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe app's free tier attracted a large user base, but only 3% converted to a paid subscription within their first year, below the 5% benchmark the product team had targeted. The team attributed the shortfall partly to a paywall that appeared too late in the user journey.\n\nTrue or false: The app's conversion rate from free to paid subscribers exceeded the product team's target.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The actual conversion rate was 3%, 'below the 5% benchmark' the team had targeted — it fell short, not exceeded it."
},
{
  type: "reading", d: 2, cefr: "C1",
  prompt: "Read the text and answer the question.\n\nAn internal audit of the procurement function found that 12% of purchase orders over $10,000 lacked the required second approval signature, a control gap the audit attributed to a temporary staffing shortage in the approvals team rather than a failure of the approval policy itself.\n\nTrue or false: The audit attributed the missing approvals to a staffing issue rather than a flaw in the policy itself.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The passage states this directly: the gap was attributed 'to a temporary staffing shortage... rather than a failure of the approval policy itself'."
},

/* d3 — 8 questions, nuanced statistical or framing traps */
{
  type: "reading", d: 3, cefr: "C1",
  prompt: "Read the text and answer the question.\n\nAfter a restatement of prior-year earnings, the board invoked its clawback policy to recover a portion of the bonuses paid to the two most senior executives during the affected period. The policy did not extend to equity awards, which the board noted would require a separate legal review before any recovery could be pursued.\n\nTrue or false: The board's clawback action recovered both the executives' cash bonuses and their equity awards from the affected period.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The passage explicitly says the policy 'did not extend to equity awards', which would need a separate review — only cash bonuses were recovered so far."
},
{
  type: "reading", d: 3, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe company announced it would relocate a manufacturing plant to a lower-cost region over the next 18 months, a move projected to save $4 million annually once complete. In the interim, the company expects a one-time $6 million relocation cost, meaning the move will not be cash-positive until roughly the start of its second year of operation at the new site.\n\nTrue or false: The relocation is expected to cost more than it saves during its first year after the move is complete.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The $6 million one-time cost exceeds the $4 million in annual savings, and the passage confirms the move 'will not be cash-positive until roughly the start of its second year'."
},
{
  type: "reading", d: 3, cefr: "C1",
  prompt: "Read the text and answer the question.\n\nA defect traced to a single component supplier affected roughly 2% of units shipped in the affected quarter. Although the defect rate was small in relative terms, the affected units were concentrated in the company's flagship product line, which accounts for the majority of its warranty claims and brand reputation risk.\n\nTrue or false: Because the defect rate was only 2%, the passage treats the incident as low-risk overall.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The passage stresses the defect was concentrated in the flagship line tied to warranty claims and reputation risk — it does not treat the small percentage as low-risk overall."
},
{
  type: "reading", d: 3, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nTwo competitors entered the same emerging market roughly a year apart. The first mover captured 40% share within two years, but the second entrant, launching with a lower price point, closed the gap to within 10 percentage points by year three, suggesting the first-mover advantage was not decisive on its own.\n\nTrue or false: The first mover's early share advantage narrowed considerably by the time the second competitor had been in the market for a couple of years.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The gap narrowed from roughly 40 points to 'within 10 percentage points by year three', confirming the advantage narrowed considerably."
},
{
  type: "reading", d: 3, cefr: "C1",
  prompt: "Read the text and answer the question.\n\nThe manufacturer began selling directly to consumers online, alongside its existing network of retail distributors. Several distributors threatened to drop the manufacturer's product line in response, though the company's direct sales accounted for only 4% of total revenue in the first year, well below what would be needed to offset a mass exit by distributors.\n\nTrue or false: The manufacturer's direct-to-consumer channel had grown large enough to comfortably replace its distributor network if needed.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "Direct sales were only 4% of revenue, 'well below what would be needed to offset a mass exit' by distributors — the channel could not replace the distributor network."
},
{
  type: "reading", d: 3, cefr: "C1",
  prompt: "Read the text and answer the question.\n\nThe two firms settled their patent dispute out of court, with the defendant agreeing to pay an undisclosed licensing fee going forward rather than a one-time damages payment. Analysts noted the structure suggested the plaintiff prioritized an ongoing revenue stream over a lump-sum recovery.\n\nTrue or false: The settlement structure indicates the plaintiff favored recurring payments over a single upfront sum.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The licensing fee 'going forward rather than a one-time damages payment', plus analysts noting a preference for 'ongoing revenue stream over a lump-sum recovery', directly support this."
},
{
  type: "reading", d: 3, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe company's wellness programme reduced average sick days per employee by 15%, a figure often cited in the annual report as evidence of the programme's success. A separate cost analysis, however, found that the programme's expenses exceeded the estimated savings from reduced absenteeism in every year since its launch.\n\nTrue or false: The cost analysis confirmed the wellness programme was financially worthwhile based on absenteeism savings alone.",
  choices: ["True", "False"],
  answer: 1,
  explanation: "The cost analysis found expenses 'exceeded the estimated savings... in every year' — the programme was not financially worthwhile by that measure, despite the positive sick-day figure."
},
{
  type: "reading", d: 3, cefr: "B2",
  prompt: "Read the text and answer the question.\n\nThe operations team rolled out a real-time KPI dashboard to replace weekly manual reports. Adoption was strong among regional managers, who reported faster decision-making, but head office noted that the underlying data feed still lags by up to six hours during peak periods, meaning some 'real-time' figures are not fully current when viewed.\n\nTrue or false: Despite being marketed as real-time, the dashboard's data can be several hours out of date during busy periods.",
  choices: ["True", "False"],
  answer: 0,
  explanation: "The passage says the data feed 'lags by up to six hours during peak periods', directly confirming the figures can be several hours out of date."
},

/* ---------- LISTENING — 34 questions, d1:12/d2:12/d3:10, 23 B2/11 C1 ----------
   Audio texts kept under ~180 characters (the paso-4 batch found Google Translate TTS
   returns 400 Bad Request above roughly 200 characters). d3 items are inference/gist
   questions — what the speaker implies rather than states outright — since that is where
   real listening difficulty comes from, not obscure vocabulary. Audio files must be saved
   as ./audio/eng-{id}.mp3 matching each question's index-based id (eng-366 to eng-399). */

/* d1 — 12 questions, direct detail */
{
  type: "listening", d: 1, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe IT team resolved the server outage within two hours. Full service was restored before the start of business the next day.",
  question: "¿Cuánto tiempo tardó el equipo de TI en resolver la falla del servidor?",
  choices: ["Dos horas", "Cuatro horas", "Un día completo", "Treinta minutos"],
  answer: 0,
  explanation: "El audio dice 'resolved the server outage within two hours'."
},
{
  type: "listening", d: 1, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nOur new office lease begins in September and runs for five years. The building includes underground parking for staff.",
  question: "¿Cuánto dura el nuevo contrato de arrendamiento de la oficina?",
  choices: ["Cinco años", "Diez años", "Un año", "Tres años"],
  answer: 0,
  explanation: "El audio dice claramente 'runs for five years'."
},
{
  type: "listening", d: 1, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe training workshop will be held every Wednesday for six weeks. Attendance is mandatory for all new hires.",
  question: "¿Con qué frecuencia se realizará el taller de capacitación?",
  choices: ["Cada miércoles", "Cada lunes", "Una vez al mes", "Los fines de semana"],
  answer: 0,
  explanation: "El audio menciona 'held every Wednesday'."
},
{
  type: "listening", d: 1, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nWe hired four new sales representatives this quarter to cover the expanding western region.",
  question: "¿Cuántos representantes de ventas nuevos se contrataron este trimestre?",
  choices: ["Cuatro", "Dos", "Seis", "Diez"],
  answer: 0,
  explanation: "El audio dice 'hired four new sales representatives'."
},
{
  type: "listening", d: 1, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe annual conference will take place in Chicago this year instead of its usual location in Boston.",
  question: "¿Dónde se llevará a cabo la conferencia anual este año?",
  choices: ["Chicago", "Boston", "Nueva York", "Miami"],
  answer: 0,
  explanation: "El audio indica que la conferencia será 'in Chicago this year'."
},
{
  type: "listening", d: 1, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nCustomer complaints dropped by twenty five percent after we launched the new support chatbot.",
  question: "¿Qué pasó con las quejas de los clientes después de lanzar el chatbot?",
  choices: ["Disminuyeron 25%", "Aumentaron 25%", "No cambiaron", "Se duplicaron"],
  answer: 0,
  explanation: "El audio dice 'dropped by twenty five percent'."
},
{
  type: "listening", d: 1, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe finance team will close the books for the quarter on Friday, one day earlier than usual.",
  question: "¿Cuándo cerrará el equipo de finanzas los libros del trimestre?",
  choices: ["El viernes", "El lunes", "El sábado", "El miércoles"],
  answer: 0,
  explanation: "El audio dice 'close the books for the quarter on Friday'."
},
{
  type: "listening", d: 1, cefr: "C1",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nNotwithstanding the delayed shipment, the client agreed to extend the contract for another year.",
  question: "A pesar del envío retrasado, ¿qué decidió hacer el cliente?",
  choices: ["Extender el contrato un año", "Cancelar el contrato", "Reducir el pedido", "Cambiar de proveedor"],
  answer: 0,
  explanation: "El audio dice 'the client agreed to extend the contract for another year'."
},
{
  type: "listening", d: 1, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe warehouse will remain closed on Monday for scheduled maintenance and reopen Tuesday morning.",
  question: "¿Cuándo reabrirá el almacén?",
  choices: ["El martes por la mañana", "El lunes por la tarde", "El miércoles", "No reabrirá"],
  answer: 0,
  explanation: "El audio dice 'reopen Tuesday morning'."
},
{
  type: "listening", d: 1, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nOur marketing budget for next year was increased by fifteen percent to support the product launch.",
  question: "¿Qué pasó con el presupuesto de marketing para el próximo año?",
  choices: ["Aumentó 15%", "Disminuyó 15%", "Se mantuvo igual", "Se eliminó"],
  answer: 0,
  explanation: "El audio dice 'increased by fifteen percent'."
},
{
  type: "listening", d: 1, cefr: "C1",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nGiven the supplier's persistent delays, procurement has begun qualifying a backup vendor as a contingency.",
  question: "¿Por qué el equipo de compras está calificando a un proveedor alterno?",
  choices: ["Por retrasos persistentes del proveedor actual", "Por un precio más bajo", "Por solicitud del cliente", "Por una fusión"],
  answer: 0,
  explanation: "El audio dice 'Given the supplier's persistent delays', indicando la razón directamente."
},
{
  type: "listening", d: 1, cefr: "C1",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe committee unanimously approved the revised budget, notwithstanding earlier objections from two members.",
  question: "¿Cómo fue aprobado el presupuesto revisado?",
  choices: ["Por unanimidad", "Por mayoría simple", "Fue rechazado", "Se pospuso la votación"],
  answer: 0,
  explanation: "El audio dice 'unanimously approved the revised budget'."
},

/* d2 — 12 questions, detail with contrast */
{
  type: "listening", d: 2, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nAlthough the team missed its sales target for the quarter, it still outperformed the same period last year.",
  question: "¿Cómo se comparó el desempeño del equipo con el año anterior, a pesar de no alcanzar la meta?",
  choices: ["Fue mejor que el año anterior", "Fue peor que el año anterior", "Fue igual", "No hay datos de comparación"],
  answer: 0,
  explanation: "El audio dice 'it still outperformed the same period last year'."
},
{
  type: "listening", d: 2, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe new pricing model increased average revenue per customer, but overall customer count declined slightly.",
  question: "¿Qué efecto tuvo el nuevo modelo de precios?",
  choices: ["Aumentó ingresos por cliente pero bajó el número de clientes", "Aumentó ambos", "Disminuyó ambos", "No tuvo efecto"],
  answer: 0,
  explanation: "El audio confirma ambos efectos: 'increased average revenue per customer, but overall customer count declined slightly'."
},
{
  type: "listening", d: 2, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe product passed all safety tests, though the launch was still delayed due to a packaging supplier issue.",
  question: "¿Por qué se retrasó el lanzamiento del producto, si pasó las pruebas de seguridad?",
  choices: ["Por un problema con el proveedor de empaques", "Por fallas de seguridad", "Por falta de demanda", "Por un error de precio"],
  answer: 0,
  explanation: "El audio dice 'delayed due to a packaging supplier issue'."
},
{
  type: "listening", d: 2, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nEmployee satisfaction scores rose this year, yet the survey response rate fell to its lowest level in five years.",
  question: "¿Qué pasó con la tasa de respuesta de la encuesta este año?",
  choices: ["Cayó a su nivel más bajo en cinco años", "Subió a un récord", "Se mantuvo igual", "No se realizó la encuesta"],
  answer: 0,
  explanation: "El audio dice 'the survey response rate fell to its lowest level in five years'."
},
{
  type: "listening", d: 2, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe company reduced its office footprint by forty percent but kept headcount unchanged through a hybrid work policy.",
  question: "¿Qué se mantuvo igual a pesar de reducir el espacio de oficina?",
  choices: ["El número de empleados", "El presupuesto de marketing", "El número de oficinas", "La cantidad de clientes"],
  answer: 0,
  explanation: "El audio dice 'kept headcount unchanged'."
},
{
  type: "listening", d: 2, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nRevenue grew in every region except the southern division, which saw a slight decline due to a competitor's price cuts.",
  question: "¿Qué región no tuvo crecimiento de ingresos?",
  choices: ["La división sur", "La división norte", "La división este", "Todas crecieron"],
  answer: 0,
  explanation: "El audio dice 'except the southern division, which saw a slight decline'."
},
{
  type: "listening", d: 2, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe audit found no major violations, though it recommended tightening approval controls for expenses over five thousand dollars.",
  question: "¿Qué recomendó la auditoría, aunque no encontró violaciones importantes?",
  choices: ["Reforzar controles de aprobación para gastos mayores", "Despedir personal", "Cerrar el departamento", "Aumentar el presupuesto"],
  answer: 0,
  explanation: "El audio dice 'recommended tightening approval controls'."
},
{
  type: "listening", d: 2, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nTwo of the three finalist vendors offered similar pricing, but only one had the certifications required for this contract.",
  question: "¿Qué diferenció al proveedor finalmente elegido de los otros dos?",
  choices: ["Tenía las certificaciones requeridas", "Ofreció el precio más bajo", "Era una empresa más grande", "Tenía mejor ubicación"],
  answer: 0,
  explanation: "El audio dice 'only one had the certifications required for this contract'."
},
{
  type: "listening", d: 2, cefr: "C1",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nNotwithstanding a favorable market outlook, management remains cautious given unresolved supply chain constraints.",
  question: "¿Por qué la gerencia se mantiene cautelosa, a pesar de las perspectivas favorables del mercado?",
  choices: ["Por restricciones no resueltas en la cadena de suministro", "Por falta de demanda", "Por problemas legales", "Por un cambio de liderazgo"],
  answer: 0,
  explanation: "El audio dice 'given unresolved supply chain constraints'."
},
{
  type: "listening", d: 2, cefr: "C1",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nWhile headline growth appears strong, much of it stems from a single large contract unlikely to recur next year.",
  question: "¿Qué preocupación se sugiere sobre el crecimiento reportado?",
  choices: ["Depende de un solo contrato que podría no repetirse", "Es completamente sostenible", "Se debe a varios clientes nuevos", "No hay preocupaciones"],
  answer: 0,
  explanation: "El audio dice que el crecimiento 'stems from a single large contract unlikely to recur'."
},
{
  type: "listening", d: 2, cefr: "C1",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nDespite a strong quarter for bookings, cash collections lagged, straining short-term liquidity.",
  question: "¿Qué problema surgió a pesar de un buen trimestre en reservas?",
  choices: ["Problemas de liquidez a corto plazo", "Pérdida de clientes", "Reducción de precios", "Falta de nuevos productos"],
  answer: 0,
  explanation: "El audio dice 'cash collections lagged, straining short-term liquidity'."
},
{
  type: "listening", d: 2, cefr: "C1",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe merger closed on schedule, although integration of the two IT systems is now expected to take longer than planned.",
  question: "¿Qué aspecto de la fusión tomará más tiempo de lo planeado?",
  choices: ["La integración de los sistemas de TI", "El cierre legal de la fusión", "La aprobación regulatoria", "El nombramiento de directivos"],
  answer: 0,
  explanation: "El audio dice 'integration of the two IT systems is now expected to take longer than planned'."
},

/* d3 — 10 questions, inference/gist (what is implied, not just stated) */
{
  type: "listening", d: 3, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe team celebrated hitting the revenue target, but nobody mentioned that costs had also risen by the same percentage.",
  question: "¿Qué se puede inferir sobre la celebración del equipo?",
  choices: ["Pasó por alto que los costos subieron igual", "Fue completamente justificada", "Se debió a una reducción de costos", "No hubo aumento de ingresos"],
  answer: 0,
  explanation: "Se infiere que la celebración ignoró que los costos subieron en la misma proporción, matizando el logro."
},
{
  type: "listening", d: 3, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nShe thanked the team for their hard work this quarter, then quietly asked finance to review the overtime budget.",
  question: "¿Qué sugiere la acción de pedir revisar el presupuesto de horas extra?",
  choices: ["Posible preocupación por el gasto en horas extra", "Un aumento salarial planeado", "Una celebración adicional", "Un recorte de personal confirmado"],
  answer: 0,
  explanation: "La combinación de agradecimiento y una revisión discreta sugiere preocupación implícita por el costo de las horas extra."
},
{
  type: "listening", d: 3, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe client praised the proposal but asked for three more weeks to respond, the second extension this month.",
  question: "¿Qué se puede inferir sobre la decisión del cliente?",
  choices: ["Podría haber dudas o retrasos internos", "El cliente rechazó la propuesta", "El acuerdo se firmó de inmediato", "No hay interés del cliente"],
  answer: 0,
  explanation: "Una segunda extensión en el mismo mes sugiere posibles dudas o demoras internas, no un rechazo ni una aprobación inmediata."
},
{
  type: "listening", d: 3, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nEvery department except engineering met its hiring plan this year; engineering filled only half its open roles.",
  question: "¿Qué se puede inferir sobre el área de ingeniería?",
  choices: ["Tuvo más dificultad para contratar que otras áreas", "Superó su meta de contratación", "No tenía vacantes", "Fue el área con mejor desempeño"],
  answer: 0,
  explanation: "El contraste 'except engineering... filled only half' implica mayor dificultad de contratación en esa área específicamente."
},
{
  type: "listening", d: 3, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe CEO called the pilot a success in the town hall, though the slide only showed results from the best-performing store.",
  question: "¿Qué matiz sugiere el hecho de que solo se mostraran resultados de la tienda con mejor desempeño?",
  choices: ["El éxito general del piloto podría estar exagerado", "El piloto fracasó por completo", "Todas las tiendas tuvieron resultados idénticos", "No se recopilaron datos"],
  answer: 0,
  explanation: "Mostrar solo la tienda con mejor desempeño sugiere que el resultado podría no representar el desempeño general del piloto."
},
{
  type: "listening", d: 3, cefr: "B2",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe report highlighted record revenue but buried the declining profit margin in a footnote on the last page.",
  question: "¿Qué sugiere la forma en que se presentó el informe?",
  choices: ["Se minimizó un dato negativo importante", "Los ingresos y márgenes crecieron por igual", "El informe fue completamente transparente", "No hubo cambios en los márgenes"],
  answer: 0,
  explanation: "Colocar el margen decreciente en una nota al pie sugiere que se minimizó deliberadamente un dato negativo relevante."
},
{
  type: "listening", d: 3, cefr: "C1",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nHe described the restructuring as routine, though three of the five affected employees were the most tenured on the team.",
  question: "¿Qué se puede inferir sobre la reestructuración, más allá de la descripción oficial?",
  choices: ["Podría no ser tan rutinaria como se afirma", "Fue completamente aleatoria", "No afectó a nadie con experiencia", "Fue anunciada con mucha anticipación"],
  answer: 0,
  explanation: "Que la mayoría de los afectados fueran los empleados más antiguos sugiere un patrón que contradice la descripción de 'medida rutinaria'."
},
{
  type: "listening", d: 3, cefr: "C1",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe vendor's proposal emphasized flexibility repeatedly, a term that conveniently avoided any mention of fixed delivery dates.",
  question: "¿Qué se puede inferir del uso repetido de la palabra 'flexibilidad' en la propuesta?",
  choices: ["Podría estar evitando comprometerse con fechas fijas", "Garantiza entregas puntuales", "Reduce el costo del contrato", "Indica un proveedor poco confiable en general"],
  answer: 0,
  explanation: "El énfasis en 'flexibilidad' junto con la ausencia de fechas fijas sugiere una forma de evitar compromisos de entrega concretos."
},
{
  type: "listening", d: 3, cefr: "C1",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe board praised the CFO's cost discipline, without noting that most of the savings came from a one-time tax refund.",
  question: "¿Qué matiz se pierde en el elogio de la junta hacia el director financiero?",
  choices: ["Que gran parte del ahorro no fue producto de disciplina continua", "Que los ahorros fueron insignificantes", "Que no hubo ahorro alguno", "Que la disciplina de costos fue negativa"],
  answer: 0,
  explanation: "Atribuir el ahorro a 'disciplina de costos' sin mencionar el reembolso fiscal puntual oculta que gran parte no fue un logro sostenible."
},
{
  type: "listening", d: 3, cefr: "C1",
  prompt: "Listen to the audio and answer the question.\n\n[Audio text to be spoken:]\nThe consultant's report was optimistic overall, yet it recommended monitoring three risk indicators monthly instead of quarterly, as before.",
  question: "¿Qué sugiere el cambio en la frecuencia de monitoreo recomendado?",
  choices: ["Existe una preocupación subyacente pese al tono optimista", "No hay ningún riesgo real", "El informe fue completamente negativo", "La frecuencia se redujo, no aumentó"],
  answer: 0,
  explanation: "Recomendar monitoreo mensual en vez de trimestral, a pesar del tono optimista general, sugiere una preocupación subyacente sobre esos riesgos."
}

];
window.QUESTION_BANK.eng = window.QUESTION_BANK.eng.concat(Q);
})();
