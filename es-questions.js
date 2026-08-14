/* Spanish questions — enunciados, opciones y tablas.

   Sits alongside es-explanations.js and es-takeaways.js: same shape, keyed by question id,
   with automatic fallback to English for anything not yet translated. What is new here is
   that the QUESTION itself is localised, not just the commentary after it.

   Rules this file follows, and the checks at the bottom that enforce them:

   1. OPTION ORDER IS LOAD-BEARING. The bank stores the correct answer as an index, so a
      translation must keep its options in exactly the authored order and must have the
      same number of them. Reordering the Spanish options silently marks the wrong answer
      correct. The check below refuses to install any entry whose option count differs, and
      app.js falls back to English at render time as a second line of defence.

   2. THE ENGLISH MODULES ARE NEVER TRANSLATED. `eng` and `engC1` test English, so serving
      them in Spanish defeats the point. app.js guards this by category; the check below
      also rejects any eng/engC1 id that appears here by mistake.

   3. CONVENTIONS agreed before starting, applied uniformly:
      - Thousands separator: 1.200, not 1,200. A Colombian reader parses "1,200" as 1.2.
      - Currency: "USD 10 millones", never a bare "$10 millones" — in Colombia a bare $
        reads as pesos, which turns a consulting figure into an absurd one.
      - Anglo-Saxon referents stay literal rather than being localised, so the logical
        structure of the item is preserved. (Localising a congestion charge to pico y placa
        would change the mechanism the argument is about.)
      - Consulting register in neutral Latin American Spanish: "costo" not "coste",
        usted/impersonal, no vosotros. bottom-up / top-down / trade-off kept as the
        anglicisms actually used in the field.

   Batch 1 of 4: judgment (32). Still to come: num (164), data (150), ct (200). */
window.ES_QUESTIONS = window.ES_QUESTIONS || {};

(function(){
var T = {

/* ---------------- JUDGMENT ---------------- */
'judgment-0': {
  prompt: "La línea de producto más rentable de una empresa crece 3% al año en un mercado que crece 12%. La empresa quiere invertir fuerte para defender su posición.\n\n¿Qué debe establecerse primero?",
  choices: [
    "Si la pérdida de participación viene de una debilidad corregible o de un cambio estructural en lo que quieren los clientes",
    "Cuánto están gastando los competidores en marketing",
    "Si la línea de producto puede relanzarse con otra marca",
    "Cuánto tiempo lleva existiendo la línea de producto"
  ]
},
'judgment-1': {
  prompt: "Un programa de reducción de costos debe entregar USD 10 millones en ahorros. Tu análisis encuentra USD 12 millones, pero USD 5 millones provienen de recortar el presupuesto de mantenimiento.\n\n¿Cuál es la forma más responsable de presentarlo?",
  choices: [
    "Presentar los USD 12 millones completos, ya que superan la meta",
    "Presentar USD 7 millones como sólidos y el ahorro de mantenimiento por separado, declarando su riesgo para la confiabilidad de los activos",
    "Presentar exactamente USD 10 millones, para calzar con la meta",
    "Presentar solo los USD 7 millones y descartar la partida de mantenimiento"
  ]
},
'judgment-2': {
  prompt: "Dos días antes de una presentación al cliente encuentras un error en tu modelo que reduce el beneficio proyectado de USD 40 millones a USD 28 millones.\n\n¿Qué debes hacer?",
  choices: [
    "Avisar de inmediato al líder del equipo y corregir la presentación antes de la reunión",
    "Presentar la cifra original y emitir una corrección después",
    "Presentar un rango de USD 28 a 40 millones sin explicar el cambio",
    "Mantener los USD 40 millones, ya que está dentro del margen de error de cualquier proyección"
  ]
},
'judgment-3': {
  prompt: "Un cliente te pide recomendar el cierre de una planta. Tu análisis lo respalda financieramente, pero notas que la planta suministra un componente que usan otras tres plantas, y no se evaluó ningún proveedor alternativo.\n\n¿Cuál es el siguiente paso correcto?",
  choices: [
    "Recomendar el cierre, ya que el caso financiero es sólido",
    "Recomendar no hacerlo, ya que el riesgo de suministro no está cuantificado",
    "Cuantificar el costo y la viabilidad de conseguir el componente en otra parte antes de recomendar en cualquier sentido",
    "Recomendar el cierre con una nota de que el suministro debe revisarse más adelante"
  ]
},
'judgment-4': {
  prompt: "La satisfacción de clientes de una empresa ha caído durante tres trimestres consecutivos. El director de operaciones lo atribuye a un nuevo sistema de TI; el director comercial, a un aumento de precios.\n\n¿Cómo deberías resolverlo?",
  choices: [
    "Apoyar al director de operaciones, ya que los cambios de TI son más disruptivos",
    "Revisar si la satisfacción cayó entre los clientes no afectados por el aumento de precios, y entre los que siguen en el sistema de TI anterior",
    "Promediar ambas explicaciones y atender las dos por igual",
    "Encuestar a los equipos de ambos directores para ver qué postura es más compartida"
  ]
},
'judgment-5': {
  prompt: "Tienes dos semanas para dimensionar un mercado. Una estimación bottom-up rigurosa tomaría cuatro semanas; una estimación top-down con datos publicados tomaría tres días.\n\n¿Cuál es el mejor enfoque?",
  choices: [
    "Hacer la estimación top-down y presentarla como definitiva",
    "Hacer primero la estimación top-down y luego usar el tiempo restante para probar bottom-up su supuesto más sensible",
    "Empezar la estimación bottom-up y presentar lo que esté terminado en dos semanas",
    "Pedir que el plazo se extienda a cuatro semanas"
  ]
},
'judgment-6': {
  prompt: "La junta directiva de un cliente quiere una recomendación sobre entrar a un nuevo país. Los datos disponibles son buenos en tamaño de mercado pero pobres en regulación.\n\n¿Cómo debería formularse la recomendación?",
  choices: [
    "Recomendar la entrada, ya que el mercado es grande",
    "Abstenerse de recomendar hasta tener datos regulatorios",
    "Recomendar la entrada condicionada a hallazgos regulatorios específicos, y declarar qué cambiaría la respuesta",
    "Recomendar un piloto pequeño sin analizar la regulación"
  ]
},
'judgment-7': {
  prompt: "Un modelo de costos muestra que cerrar 12 de 40 sucursales ahorra USD 8 millones al año sin pérdida de ingresos, porque los clientes pueden usar sucursales cercanas.\n\n¿Qué supuesto merece más ser probado?",
  choices: [
    "Que las 12 sucursales son las menos rentables",
    "Que los clientes de las sucursales cerradas efectivamente se quedan en el banco en lugar de irse",
    "Que las sucursales pueden venderse en lugar de arrendarse",
    "Que el personal puede reubicarse en otras sucursales"
  ]
},
'judgment-8': {
  prompt: "El análisis de un colega junior contiene un error metodológico, pero su conclusión resulta ser correcta.\n\n¿Cuál es la respuesta adecuada?",
  choices: [
    "No decir nada, ya que la conclusión es correcta",
    "Corregir el método en privado y explicar por qué importa incluso cuando la respuesta fue correcta",
    "Escalar el error al líder del equipo",
    "Rehacer el análisis por tu cuenta sin mencionarlo"
  ]
},
'judgment-9': {
  prompt: "Un cliente insiste en una recomendación que crees que los datos no respaldan. Él está pagando por el proyecto.\n\n¿Qué debes hacer?",
  choices: [
    "Dar la recomendación que quiere, ya que conoce su negocio",
    "Exponer qué respaldan y qué no respaldan los datos, nombrar las condiciones bajo las cuales su postura sería correcta, y dejar que decida",
    "Negarse a escribir la recomendación",
    "Escribirla con una advertencia al final"
  ]
},
'judgment-10': {
  prompt: "Dos frentes de trabajo necesitan al mismo analista la próxima semana. Uno está en la ruta crítica hacia la fecha límite del cliente; el otro evita que un problema de datos crezca.\n\n¿Cuál es la mejor resolución?",
  choices: [
    "Asignar el analista al frente de la ruta crítica y aceptar el problema de datos",
    "Dividir al analista entre ambos al 50%",
    "Asignar el analista a la ruta crítica, y establecer qué tan rápido se agrava el problema de datos antes de decidir si puede esperar una semana",
    "Asignar el analista al problema de datos, ya que los datos sin resolver corrompen todo lo que viene después"
  ]
},
'judgment-11': {
  prompt: "Un análisis de precios sugiere que subir precios 8% aumentaría la utilidad, suponiendo que la demanda caiga según la elasticidad histórica. Los datos históricos vienen de un periodo en que el cliente no tenía competidor directo.\n\n¿Cómo debería afectar esto a la recomendación?",
  choices: [
    "En nada: la elasticidad es una propiedad del producto",
    "La elasticidad histórica probablemente subestima cuánto caerá la demanda ahora que los clientes tienen una alternativa, así que la recomendación debe probarse con elasticidades mayores",
    "La recomendación debe abandonarse",
    "El alza de precio debe reducirse a 4% por precaución"
  ]
},
'judgment-12': {
  prompt: "Una mejora operativa ahorraría USD 3 millones al año pero requiere 40 despidos en un pueblo donde el cliente es el mayor empleador.\n\n¿Qué debe incluir la recomendación?",
  choices: [
    "Solo el caso financiero, ya que el cliente decide sobre asuntos sociales",
    "El caso financiero junto con los costos de transición, la exposición reputacional y cualquier alternativa por fases que logre parte del ahorro",
    "Una recomendación en contra, por motivos sociales",
    "El caso financiero con una nota de que los despidos son lamentables"
  ]
},
'judgment-13': {
  prompt: "A mitad del proyecto, el cliente te pide analizar también una segunda unidad de negocio, sin cambio en los honorarios ni en el plazo.\n\n¿Cuál es la mejor respuesta?",
  choices: [
    "Absorber el trabajo adicional para preservar la relación",
    "Negarse, ya que el alcance fue acordado",
    "Exponer qué tendría que eliminarse o acortarse para que quepa lo adicional, y dejar que el cliente elija el trade-off",
    "Hacer una versión superficial del segundo análisis"
  ]
},
'judgment-14': {
  prompt: "Una encuesta a 200 clientes muestra que 68% pagaría más por una entrega más rápida. El cliente quiere subir los cargos de envío de inmediato.\n\n¿Cuál es la advertencia clave?",
  choices: [
    "La muestra es demasiado pequeña para ser significativa",
    "La disposición a pagar declarada suele sobreestimar el comportamiento real, así que el hallazgo necesita una prueba conductual antes de cambiar precios",
    "La encuesta debió preguntar por los ingresos de los 200 clientes",
    "68% no es una mayoría suficientemente amplia para actuar"
  ]
},
'judgment-15': {
  prompt: "Tu recomendación depende de un solo supuesto: que una aprobación regulatoria llegue dentro de nueve meses. El equipo legal del cliente estima la probabilidad en 60%.\n\n¿Cómo debería manejar esto la recomendación?",
  choices: [
    "Proceder, ya que 60% es más probable que no",
    "Esperar la aprobación antes de recomendar cualquier cosa",
    "Presentar el valor esperado a través de ambos escenarios e identificar qué decisiones pueden aplazarse hasta conocer la aprobación",
    "Reducir el beneficio proyectado en 40%"
  ]
},
'judgment-16': {
  prompt: "Un cliente minorista quiere cerrar sus veinte tiendas de peor desempeño, ordenadas por utilidad operativa. Seis de las veinte están en ciudades donde el cliente no tiene otra presencia.\n\n¿Qué debe establecerse antes de cerrar la lista?",
  choices: [
    "Cuánto de la contribución de cada tienda se recupera en tiendas cercanas o en el canal digital tras un cierre",
    "Cuánto le queda de vigencia al contrato de arriendo de cada tienda",
    "Qué gerentes de tienda tienen las peores evaluaciones de desempeño",
    "Si los competidores han cerrado tiendas en las mismas ciudades"
  ]
},
'judgment-17': {
  prompt: "El análisis de tu equipo respalda una recomendación a la que el director de operaciones del cliente se ha opuesto públicamente. Un colega sugiere suavizar el lenguaje para que la recomendación sea más fácil de aceptar.\n\n¿Cuál es la respuesta más apropiada?",
  choices: [
    "Mantener la recomendación tal como la respalda el análisis, e invertir el esfuerzo en presentar la evidencia y atender directamente las objeciones declaradas del director de operaciones",
    "Suavizar el lenguaje, ya que una recomendación aceptada vale más que una rechazada",
    "Presentar tanto la versión fuerte como la suavizada y dejar que el cliente elija",
    "Escalar al director ejecutivo para pasar por encima del director de operaciones"
  ]
},
'judgment-18': {
  prompt: "Un cliente manufacturero está eligiendo entre dos proveedores. El Proveedor A es 8% más barato; el Proveedor B tiene una trayectoria más larga y una planta a dos horas en lugar de once.\n\n¿Qué es más importante cuantificar antes de decidir?",
  choices: [
    "El costo de una interrupción de suministro y en cuánto difieren ambos proveedores en la probabilidad de que ocurra",
    "La diferencia en las condiciones de pago de ambos proveedores",
    "Qué proveedor tiene más clientes en la industria",
    "Cuántos años lleva operando cada proveedor"
  ]
},
'judgment-19': {
  prompt: "El nuevo producto de un cliente tiene márgenes fuertes pero ha tomado participación casi enteramente de la propia línea establecida del cliente.\n\n¿Qué debe establecer primero el análisis?",
  choices: [
    "Cuál habría sido la utilidad total del cliente sin el nuevo producto, dado lo que los competidores lanzaron en el mismo periodo",
    "Si el nuevo producto puede reposicionarse hacia un segmento distinto",
    "Cuánto se gastó en desarrollar el nuevo producto",
    "Si la línea establecida debería descontinuarse"
  ]
},
'judgment-20': {
  prompt: "Dos semanas antes de una presentación final encuentras un error en un modelo que cambia una cifra principal en 15%. La dirección de la recomendación no cambia.\n\n¿Cuál es la acción más apropiada?",
  choices: [
    "Corregir el modelo, informar al equipo del cliente sobre el cambio y su causa, y verificar si alguna otra conclusión dependía de la cifra original",
    "Corregir el modelo en silencio, ya que la recomendación no se ve afectada",
    "Dejar la cifra y agregar una nota sobre la incertidumbre del modelo",
    "Aplazar la presentación hasta reconstruir el modelo completo"
  ]
},
'judgment-21': {
  prompt: "Un cliente te pide dimensionar un mercado para una categoría de producto que aún no existe en su país. No hay datos de mercado publicados.\n\n¿Cuál es el enfoque más defendible?",
  choices: [
    "Construir la estimación desde cero usando población y factores de adopción, y luego contrastarla con categorías comparables en países similares",
    "Abstenerse de dimensionar el mercado hasta poder encargar investigación primaria",
    "Usar el tamaño de la categoría existente más cercana como aproximación",
    "Aplicar el tamaño global del mercado escalado por la participación del país en el PIB mundial"
  ]
},
'judgment-22': {
  prompt: "Los puntajes de satisfacción de clientes de una empresa han subido durante seis trimestres consecutivos mientras su participación de mercado ha caído en cada uno de esos trimestres.\n\n¿Cuál es la interpretación más útil de probar primero?",
  choices: [
    "Que la encuesta de satisfacción está llegando a un grupo cada vez menor de clientes leales, a medida que los menos satisfechos se van",
    "Que la satisfacción y la participación de mercado son métricas no relacionadas",
    "Que los competidores están gastando más en publicidad",
    "Que la metodología de la encuesta cambió hace seis trimestres"
  ]
},
'judgment-23': {
  prompt: "Un cliente está decidiendo si entra a un mercado donde sería el cuarto participante. Su análisis muestra que podría alcanzar 15% de participación en tres años.\n\n¿Qué importa más al evaluar esta proyección?",
  choices: [
    "De dónde saldría ese 15% y cómo se esperaría que respondan los tres participantes ya establecidos",
    "Si 15% está por encima o por debajo de la participación promedio de un cuarto entrante",
    "Cuánto tiempo llevan los tres establecidos en el mercado",
    "Si el cliente ha entrado con éxito a otros mercados"
  ]
},
'judgment-24': {
  prompt: "Durante las entrevistas, tres gerentes de primera línea describen de forma independiente un problema de proceso que no aparece en ninguna parte de los datos del cliente.\n\n¿Cuál es la forma más apropiada de tratarlo?",
  choices: [
    "Tratarlo como una pista que vale la pena probar, y deducir cómo se verían los datos si los gerentes tuvieran razón",
    "Excluirlo, ya que no está respaldado por los datos",
    "Incluirlo en los hallazgos con base en tres relatos consistentes",
    "Preguntar a la dirección del cliente si los gerentes son confiables"
  ]
},
'judgment-25': {
  prompt: "Un cliente quiere recortar 30% su presupuesto de marketing y pregunta qué canales detener. Los datos de atribución muestran que la búsqueda pagada entrega por mucho el menor costo por adquisición.\n\n¿Qué debe establecerse antes de hacer los recortes?",
  choices: [
    "Cuánto del desempeño medido de la búsqueda pagada depende de la demanda creada por los canales de la parte alta del embudo que se están considerando recortar",
    "Qué canales quiere conservar más el equipo de marketing",
    "Cómo se compara el costo por adquisición del cliente con los referentes de la industria",
    "Si la meta de 30% podría alcanzarse renegociando los honorarios de la agencia"
  ]
},
'judgment-26': {
  prompt: "Te piden recomendar si un cliente debería adquirir a un competidor. El caso de sinergias es fuerte, pero el fundador de la empresa objetivo —que tiene las relaciones clave con los clientes— no ha dicho nada sobre quedarse.\n\n¿Cómo debe manejarse esto en la recomendación?",
  choices: [
    "Cuantificar cuánto del caso de sinergias sobrevive si el fundador se va, y hacer de las condiciones de retención un requisito explícito del valor de la operación",
    "Suponer que el fundador se queda, ya que los adquirentes normalmente ofrecen paquetes de retención",
    "Recomendar no hacer la adquisición hasta que el fundador se comprometa",
    "Anotar el riesgo en el anexo y proceder con el caso base"
  ]
},
'judgment-27': {
  prompt: "El director de operaciones de un cliente presenta un plan que recortaría costos en USD 8 millones pero depende de una concesión de un proveedor que este no ha aceptado.\n\n¿Cuál es la contribución más útil?",
  choices: [
    "Separar los ahorros que requieren la concesión de los que no, y establecer qué querría el proveedor a cambio",
    "Eliminar del plan los ahorros que dependen de la concesión",
    "Recomendar acercarse a un proveedor alternativo como palanca de negociación",
    "Aceptar el plan y señalar la concesión como un riesgo de ejecución"
  ]
},
'judgment-28': {
  prompt: "Un piloto en una región produjo una mejora de 22%. El cliente quiere desplegar el cambio a nivel nacional con base en ese resultado.\n\n¿Qué debe establecerse primero?",
  choices: [
    "Si la región del piloto difiere de las demás en formas que contribuyeron al resultado, incluida la atención que el propio piloto atrajo",
    "Cuánto costaría el despliegue nacional",
    "Cuánto tiempo duró el piloto",
    "Si el personal de otras regiones apoya el cambio"
  ]
},
'judgment-29': {
  prompt: "La junta directiva de un cliente está dividida. La mitad quiere invertir USD 40 millones en una nueva plataforma ahora; la otra mitad quiere esperar un año a que haya lineamientos regulatorios más claros. Ambas posturas son internamente coherentes.\n\n¿Cuál es la contribución analítica más útil?",
  choices: [
    "Identificar qué partes de la inversión son valiosas bajo cualquier resultado regulatorio y cuánto costaría realmente el año de espera",
    "Recomendar la postura que respalda el director ejecutivo",
    "Recomendar una inversión de USD 20 millones como punto medio entre ambas posturas",
    "Recomendar esperar, ya que el riesgo regulatorio no está cuantificado"
  ]
},
'judgment-30': {
  prompt: "Tu recomendación eliminaría alrededor de 200 puestos en un cliente. El cliente te pide omitir la cifra de puestos de la presentación principal y ponerla en un anexo.\n\n¿Cuál es la respuesta más apropiada?",
  choices: [
    "Mantener la cifra en el documento principal, ya que es central para la recomendación, y a la vez discutir cómo y cuándo se comunica a los afectados",
    "Moverla al anexo, ya que el cliente controla cómo se comunican sus propias decisiones",
    "Omitir el número y presentar solo los ahorros",
    "Negarse a continuar con el proyecto"
  ]
},
'judgment-31': {
  prompt: "Un cliente está considerando un aumento de precios de 12%. El modelo del equipo de finanzas muestra que la utilidad sube bajo todos los escenarios de volumen que probó, desde ninguna pérdida hasta una caída de volumen de 10%.\n\n¿Qué debe verificarse antes de confiar en el modelo?",
  choices: [
    "Si una caída de 10% es genuinamente el peor caso plausible, y qué supone el modelo sobre los precios de los competidores",
    "Si el aumento de precio puede aplicarse por fases en dos trimestres",
    "Cómo se compara el aumento con la inflación reciente",
    "Si el equipo comercial cree que el aumento es alcanzable"
  ]
}

};

/* Commentary (explicación y takeaway) for the items the earlier translation pass never
   reached. judgment-0..15 already had Spanish commentary in es-explanations.js and
   es-takeaways.js; only 16..31 were left in English, which would have produced the jarring
   half-translated state of a Spanish question followed by an English explanation. These
   feed the same ES_EXPLANATIONS / ES_TAKEAWAYS maps, so explanationOf() and takeawayOf()
   pick them up with no further wiring. */
var COMMENTARY = {
'judgment-16': {
  takeaway: "La utilidad de una tienda no es lo mismo que la utilidad que desaparece cuando cierra.",
  explanation: "Cerrar una tienda transfiere parte de sus clientes a otro lado y pierde el resto. En ciudades con otras sucursales o con fuerte penetración digital, buena parte de la contribución sobrevive; en las seis ciudades sin otra presencia probablemente no, y además el cliente pierde presencia local de marca. Ordenar por utilidad individual ignora esto por completo. Las condiciones de arriendo importan para el momento y el costo, pero solo después de responder la pregunta de recuperación."
},
'judgment-17': {
  takeaway: "Ajusta cómo argumentas, nunca lo que dice la evidencia.",
  explanation: "Cambiar el fondo de un hallazgo para acomodarlo a la audiencia es lo que vuelve inútil una asesoría, y el cliente paga precisamente por la lectura independiente. Lo que sí es legítimamente ajustable es el encuadre: atender las objeciones específicas del director de operaciones, mostrar el desarrollo y reconocer qué cambiaría la respuesta. Pasar por encima de él convierte un desacuerdo analítico en uno político, y normalmente se pierden los dos."
},
'judgment-18': {
  takeaway: "Las diferencias de precio son ciertas; las de confiabilidad son probabilísticas. Llévalas a las mismas unidades antes de comparar.",
  explanation: "Una ventaja de precio de 8% es fácil de medir y fácil de sobreponderar. La comparación relevante es ese ahorro contra el costo esperado de una interrupción, que combina el costo de una parada con la diferencia en qué tan probable es que cada proveedor la cause. La cercanía y la trayectoria son insumos de esa probabilidad, no decisiones en sí mismas. Las condiciones de pago y el número de clientes son de segundo orden."
},
'judgment-19': {
  takeaway: "La canibalización solo es pérdida si la línea antigua habría mantenido su terreno de todos modos.",
  explanation: "La autocanibalización parece desperdicio, pero lo define el contrafactual. Si el lanzamiento de un competidor habría tomado esa participación de todas formas, el nuevo producto defendió ingresos que se estaban yendo; si la línea establecida estaba segura, la empresa gastó dinero en mover clientes entre sus propios productos. El costo de desarrollo es hundido, y reposicionar es una respuesta, no un diagnóstico."
},
'judgment-20': {
  takeaway: "Revela el error y verifica su radio de impacto: que la conclusión no cambie no prueba que fuera inofensivo.",
  explanation: "Que la recomendación sobreviva no significa que todo lo demás lo haya hecho: el dimensionamiento, la priorización y la secuencia pueden descansar en esa cifra. Corregirla en silencio arriesga que el cliente descubra la discrepancia después, lo que cuesta mucha más credibilidad que el error mismo. Taparla con una nota de incertidumbre es peor, y reconstruir el modelo completo es desproporcionado frente a una sola falla ya identificada."
},
'judgment-21': {
  takeaway: "Sin datos, construye desde factores que puedas defender y triangula contra un análogo. Nunca desde un solo ratio.",
  explanation: "Una construcción bottom-up hace visible y comprobable cada supuesto, y el contraste con países comparables detecta errores de magnitud. Escalar una cifra global por participación en el PIB supone que la categoría se comporta igual en todas partes, que es justamente lo que se desconoce. Usar la categoría más cercana como aproximación importa sus dinámicas en bloque, y negarse a estimar deja al cliente sin nada."
},
'judgment-22': {
  takeaway: "Cuando una métrica mejora mientras se encoge la población que mide, sospecha del sesgo de supervivencia antes de celebrar.",
  explanation: "Los clientes que se van dejan de responder encuestas de satisfacción, así que una empresa que pierde a sus clientes menos satisfechos verá subir su puntaje promedio mientras su negocio se contrae. Esta es la interpretación que reconcilia ambas tendencias con un solo mecanismo. El gasto de los competidores podría explicar la pérdida de participación pero no el alza en satisfacción, y un cambio de metodología vale la pena descartarlo, pero explicaría un escalón, no seis trimestres de deriva."
},
'judgment-23': {
  takeaway: "Las proyecciones de participación son afirmaciones sobre el comportamiento de los competidores, lo digan o no.",
  explanation: "Quince puntos de participación hay que quitárselos a alguien, y los establecidos que defiendan su posición cambiarán precio, servicio o capacidad de formas que afectan tanto la economía del entrante como su volumen. Una proyección que no modela la respuesta describe una entrada sin oposición, algo que un cuarto entrante rara vez consigue. Los referentes de la industria y el historial del cliente en otros mercados son contexto, no pruebas de esta cifra."
},
'judgment-24': {
  takeaway: "La ausencia en los datos suele ser una propiedad de los datos, no del mundo.",
  explanation: "Tres relatos independientes son señal significativa, pero todavía no un hallazgo. El movimiento productivo es especificar qué evidencia dejaría el problema —en tiempos de ciclo, tasas de reproceso, registros de excepciones— e ir a buscarla, lo que confirma el problema o muestra que los datos no pueden verlo. Descartarlo supone que los datos están completos; reportarlo sin filtro supone que tres personas no pueden compartir una impresión equivocada."
},
'judgment-25': {
  takeaway: "La atribución al último clic premia al canal que cierra la demanda, no al que la creó.",
  explanation: "La búsqueda pagada captura clientes que ya están buscando, y algo normalmente los hizo buscar. Recortar los canales de reconocimiento que generan esa intención puede degradar el desempeño de la búsqueda mientras el modelo de atribución le sigue acreditando a la búsqueda lo que quede. Entender esa dependencia es lo que evita que el cliente recorte justo los canales que alimentan su canal de mejor desempeño. Los referentes de industria y los honorarios de la agencia son útiles, pero secundarios."
},
'judgment-26': {
  takeaway: "Ponle precio al riesgo de persona clave dentro del caso, en lugar de suponerlo inexistente o dejar que vete la operación.",
  explanation: "La salida del fundador no es una nota al pie si las relaciones son el activo que se está comprando, así que el tratamiento honesto es correr el caso en ambos sentidos y mostrar cuánto vale la operación en cada uno. Eso convierte un riesgo sin resolver en una posición de negociación sobre condiciones de retención y precio. Suponer que se queda induce a error; convertirlo en veto sacrifica una operación posiblemente atractiva; enterrarlo en un anexo hace las dos cosas."
},
'judgment-27': {
  takeaway: "Separa un plan según de qué depende, para que las partes bajo tu control puedan avanzar.",
  explanation: "Separar el plan le dice al cliente qué puede dar por seguro ahora y qué está negociando, que es exactamente lo que necesita para decidir con cuánta fuerza presionar. También convierte un riesgo vago en una pregunta con precio: qué costaría la concesión en volumen, plazo o precio. Eliminar esos ahorros descarta valor que probablemente sí sea alcanzable, y señalarlo como riesgo sin dimensionarlo deja al cliente igual de desinformado."
},
'judgment-28': {
  takeaway: "Los pilotos corren en condiciones favorables y con atención inusual. Supón ambas cosas hasta que se demuestre lo contrario.",
  explanation: "Los pilotos suelen ubicarse donde es más probable que funcionen, se dotan con voluntarios y se vigilan de cerca, todo lo cual infla resultados de formas que no sobreviven a un despliegue. Establecer cuánto del 22% es atribuible al cambio en sí es la diferencia entre un programa valioso y una decepción costosa. El costo y la duración importan una vez que el efecto sea creíble."
},
'judgment-29': {
  takeaway: "Cuando una junta se divide por el momento de actuar, desagrega la decisión en lugar de partir la diferencia.",
  explanation: "El debate se plantea como todo ahora contra todo después, pero las inversiones rara vez se descomponen así: las bases de datos, la contratación y la selección de proveedores suelen ser valiosas decida lo que decida el regulador, mientras que construir sobre la superficie regulada no lo es. Dimensionar el costo de la espera —posición perdida, inflación de precios, brechas de capacidad— le dice a la junta cuánto cuesta realmente la paciencia. Partir la cifra a la mitad satisface a ambos bandos y no le sirve a ninguno."
},
'judgment-30': {
  takeaway: "Dónde vive una cifra dura es presentación; si quienes deciden la ven es integridad.",
  explanation: "Doscientos puestos no son un detalle: son el principal costo de la recomendación, y la junta no puede sopesar la decisión sin ese dato. Lo que sí es genuinamente decisión del cliente es la secuencia y la comunicación al personal, y vale la pena involucrarse en eso con seriedad. Presentar los ahorros sin su costo humano tergiversa la propuesta; retirarse del proyecto por una petición de formato es desproporcionado."
},
'judgment-31': {
  takeaway: "Un modelo que gana en todos los escenarios probados normalmente no se ha probado con suficiente dureza.",
  explanation: "Un resultado que se sostiene en todo el rango probado es una advertencia de que el rango es demasiado estrecho. Doce puntos de precio pueden costar fácilmente más de 10% de volumen, sobre todo si los competidores mantienen sus precios y quedan visiblemente más baratos, un supuesto que el modelo puede estar haciendo en silencio. El escalonamiento, la comparación con la inflación y el sentir del equipo comercial importan, pero ninguno prueba si los límites del modelo son honestos."
}
};

/* Install only entries that are safe to install. An entry that fails a check is dropped
   and reported: the question then renders in English, which is a visible inconvenience
   rather than a silently wrong answer key. */
var byId = {};
Object.keys(window.QUESTION_BANK || {}).forEach(function(cat){
  (window.QUESTION_BANK[cat] || []).forEach(function(q){ byId[q.id] = q; });
});

var installed = 0, rejected = [];
Object.keys(T).forEach(function(id){
  var src = byId[id], tr = T[id];
  if(!src){ rejected.push(id + ': no such question'); return; }
  if(src.cat === 'eng' || src.cat === 'engC1'){
    rejected.push(id + ': English modules are never translated'); return;
  }
  if(tr.choices && tr.choices.length !== src.choices.length){
    rejected.push(id + ': ' + tr.choices.length + ' options vs ' + src.choices.length +
      ' in the bank — answer index would point at the wrong option'); return;
  }
  window.ES_QUESTIONS[id] = tr;
  installed++;
});

window.ES_EXPLANATIONS = window.ES_EXPLANATIONS || {};
window.ES_TAKEAWAYS = window.ES_TAKEAWAYS || {};
Object.keys(COMMENTARY).forEach(function(id){
  var src = byId[id], c = COMMENTARY[id];
  if(!src){ rejected.push(id + ' (commentary): no such question'); return; }
  if(src.cat === 'eng' || src.cat === 'engC1'){
    rejected.push(id + ' (commentary): English modules are never translated'); return;
  }
  if(c.explanation) window.ES_EXPLANATIONS[id] = c.explanation;
  if(c.takeaway) window.ES_TAKEAWAYS[id] = c.takeaway;
});

if(rejected.length){
  console.error('[es-questions] ' + rejected.length + ' translation(s) rejected:\n  ' +
    rejected.join('\n  '));
}
window.esQuestionStats = function(){
  var n = {};
  Object.keys(window.QUESTION_BANK || {}).forEach(function(cat){
    var bank = window.QUESTION_BANK[cat] || [];
    n[cat] = { total: bank.length,
               translated: bank.filter(function(q){ return window.ES_QUESTIONS[q.id]; }).length };
  });
  return { byCategory: n, installed: installed, rejected: rejected };
};
})();
