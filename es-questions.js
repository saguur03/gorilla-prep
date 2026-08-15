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
},

/* ---------------- NUMERICAL ----------------
   Decimals take a comma (33,3%) and thousands a period (255.000), which is the Colombian
   convention and the reverse of the English bank. The currency is written USD in the
   stem, where the ambiguity actually matters, but the options keep a bare $ — repeating
   "USD" four times makes an option list slower to scan, and the stem has already fixed
   the currency. Options starting with $ or a digit keep their ascending order rather than
   being shuffled, exactly as in English. */
'num-0': {
  prompt: "Los ingresos de una empresa crecieron de USD 2,4 millones a USD 3,0 millones. ¿En qué porcentaje crecieron los ingresos?",
  choices: ["12%", "18%", "20%", "25%"]
},
'num-1': {
  prompt: "Tras un descuento de 20%, un producto se vende en USD 200. ¿Cuál era el precio original?",
  choices: ["$220", "$240", "$250", "$260"]
},
'num-2': {
  prompt: "Un precio se aumenta 20% y luego se reduce 20%. ¿Cuál es el cambio neto respecto al precio original?",
  choices: ["Sin cambio", "Disminución de 4%", "Aumento de 4%", "Disminución de 2%"]
},
'num-3': {
  prompt: "Un número aumentado en 15% es igual a 460. ¿Cuál era el número original?",
  choices: ["391", "400", "410", "445"]
},
'num-4': {
  prompt: "Los ingresos de la Empresa A son 40% más altos que los de la Empresa B. ¿En qué porcentaje son más bajos los ingresos de la Empresa B respecto a los de la Empresa A?",
  choices: ["28,6%", "30%", "40%", "60%"]
},
'num-5': {
  prompt: "Si x es el 25% de y, ¿y es qué porcentaje de x?",
  choices: ["75%", "125%", "250%", "400%"]
},
'num-6': {
  prompt: "Una empresa reduce su planta de 250 a 200 empleados. ¿Cuál es la reducción porcentual?",
  choices: ["20%", "25%", "40%", "50%"]
},
'num-7': {
  prompt: "Un aumento de precio de 25% debe revertirse por completo. ¿Qué reducción porcentual devuelve el precio a su nivel original?",
  choices: ["20%", "22,5%", "25%", "30%"]
},
'num-8': {
  prompt: "El 15% de 240 es igual a cierto número. ¿Ese número es qué porcentaje de 300?",
  choices: ["9%", "10%", "12%", "15%"]
},
'num-9': {
  prompt: "Un producto se vende en USD 120 y cuesta USD 90 producirlo. ¿Cuál es el margen bruto como porcentaje del precio de venta?",
  choices: ["25%", "30%", "33,3%", "75%"]
},
'num-10': {
  prompt: "Los costos de una empresa equivalen al 60% de sus ingresos. Los ingresos son USD 850.000. ¿Cuál es la utilidad de la empresa?",
  choices: ["$255.000", "$340.000", "$425.000", "$510.000"]
},
'num-11': {
  prompt: "Una tienda aplica un sobreprecio de 40% sobre su costo y luego ofrece 25% de descuento sobre el precio marcado. ¿Cuál es la utilidad de la tienda como porcentaje del costo?",
  choices: ["5%", "10%", "15%", "La tienda queda en punto de equilibrio"]
},
'num-12': {
  prompt: "El Producto A representa el 30% de las ventas con un margen de 40%. El Producto B representa el 70% de las ventas con un margen de 20%. ¿Cuál es el margen combinado de ambos productos?",
  choices: ["24%", "26%", "28%", "30%"]
},
'num-13': {
  prompt: "Un negocio tiene costos fijos de USD 50.000, un costo variable de USD 30 por unidad y vende cada unidad en USD 50. ¿Cuántas unidades debe vender para alcanzar el punto de equilibrio?",
  choices: ["1.000", "1.500", "2.000", "2.500"]
},
'num-14': {
  prompt: "Una empresa tiene costos fijos de USD 120.000 y un margen de contribución de 30% sobre los ingresos. ¿Qué ingresos se requieren para alcanzar el punto de equilibrio?",
  choices: ["$156.000", "$360.000", "$400.000", "$460.000"]
},
'num-15': {
  prompt: "El margen de utilidad de una empresa es 15% y sus ingresos son USD 2 millones. ¿Cuáles son sus costos totales?",
  choices: ["$300.000", "$1,5 millones", "$1,7 millones", "$1,85 millones"]
},
'num-16': {
  prompt: "La razón entre los costos y los ingresos de una empresa es 3:5. Los ingresos son USD 250.000. ¿Cuál es la utilidad de la empresa?",
  choices: ["$100.000", "$150.000", "$180.000", "$200.000"]
},
'num-17': {
  prompt: "Tres máquinas producen 600 unidades en 4 horas, todas trabajando al mismo ritmo. ¿Cuántas unidades producirán cinco máquinas en 6 horas?",
  choices: ["600", "900", "1.200", "1.500"]
},
'num-18': {
  prompt: "Un equipo de 8 personas completa un proyecto en 15 días. Al mismo ritmo, ¿cuánto tardarían 12 personas?",
  choices: ["10 días", "12 días", "15 días", "22,5 días"]
},
'num-19': {
  prompt: "Cinco trabajadores pueden pintar 3 habitaciones en 6 horas. ¿Cuánto tardarán 10 trabajadores en pintar 12 habitaciones?",
  choices: ["9 horas", "12 horas", "15 horas", "24 horas"]
},
'num-20': {
  prompt: "La tubería A llena un tanque en 6 horas; la tubería B llena el mismo tanque en 12 horas. ¿Cuánto tardarán ambas tuberías trabajando juntas?",
  choices: ["4 horas", "6 horas", "9 horas", "18 horas"]
},
'num-21': {
  prompt: "Un auto recorre 180 km a 60 km/h y luego otros 180 km a 90 km/h. ¿Cuál es la velocidad promedio de todo el trayecto?",
  choices: ["72 km/h", "75 km/h", "80 km/h", "84 km/h"]
},
'num-22': {
  prompt: "Un consultor cobra USD 250 por hora, trabaja 6 horas facturables al día y trabaja 22 días al mes. ¿Cuál es su facturación mensual?",
  choices: ["$27.500", "$30.000", "$33.000", "$36.000"]
},
'num-23': {
  prompt: "Una fábrica produce 480 unidades en 8 horas. La producción debe aumentarse a 900 unidades por día sin cambiar el ritmo por hora. ¿Cuántas horas diarias debe operar la fábrica?",
  choices: ["12 horas", "13 horas", "15 horas", "18 horas"]
},
'num-24': {
  prompt: "El promedio de 5 números es 20. Se elimina uno de los números, que es igual a 12. ¿Cuál es el promedio de los 4 números restantes?",
  choices: ["20", "21", "22", "23"]
},
'num-25': {
  prompt: "Un grupo de 20 personas tiene una edad promedio de 30 años. Se suma una persona más y el promedio sube a 31. ¿Qué edad tiene la nueva persona?",
  choices: ["31", "41", "51", "61"]
},
'num-26': {
  prompt: "Un comprador adquiere 100 unidades a USD 8 cada una y 300 unidades a USD 12 cada una. ¿Cuál es el costo promedio ponderado por unidad?",
  choices: ["$9,00", "$10,00", "$10,50", "$11,00"]
},
'num-27': {
  prompt: "Un inversionista tiene USD 20.000 que rinden 5% y USD 30.000 que rinden 8%. ¿Cuál es el rendimiento del portafolio combinado?",
  choices: ["6,5%", "6,8%", "7,0%", "7,2%"]
},
'num-28': {
  prompt: "El salario promedio en un área de 12 personas es USD 60.000. Se contrata a alguien nuevo por USD 86.000. ¿Cuál es el nuevo salario promedio?",
  choices: ["$62.000", "$62.500", "$63.000", "$64.600"]
},
'num-29': {
  prompt: "La razón entre gerentes y analistas en una firma es 2:7. Hay 63 analistas. ¿Cuántos gerentes hay?",
  choices: ["9", "12", "14", "18"]
},
'num-30': {
  prompt: "Un costo de proyecto de USD 240.000 se reparte entre tres áreas en razón 3:4:5. ¿Cuánto paga el área con la mayor porción?",
  choices: ["$60.000", "$80.000", "$100.000", "$120.000"]
},
'num-31': {
  prompt: "En una empresa de 500 empleados, el 60% trabaja en operaciones, y el 25% de esos empleados de operaciones son gerentes. ¿Cuántos gerentes de operaciones hay?",
  choices: ["75", "100", "125", "150"]
},
'num-32': {
  prompt: "El 40% de los empleados de una empresa son mujeres. El 30% de las mujeres y el 50% de los hombres tienen MBA. ¿Qué porcentaje del total de empleados tiene MBA?",
  choices: ["38%", "40%", "42%", "45%"]
},
'num-33': {
  prompt: "Una inversión de USD 50.000 crece 8% al año, con capitalización anual. ¿Cuál es su valor después de 2 años?",
  choices: ["$54.000", "$56.000", "$58.000", "$58.320"]
},
'num-34': {
  prompt: "Se invierten USD 10.000 al 6% de interés simple durante 3 años. ¿Cuánto interés se gana?",
  choices: ["$1.600", "$1.800", "$1.910", "$2.000"]
},
'num-35': {
  prompt: "Se invierten USD 10.000 al 10% con capitalización anual durante 3 años. ¿Cuánto interés se gana en total?",
  choices: ["$2.800", "$3.000", "$3.100", "$3.310"]
},
'num-36': {
  prompt: "Los ingresos de una empresa son USD 5 millones y crecen 20% al año. ¿Después de cuántos años completos superarán por primera vez los USD 10 millones?",
  choices: ["4 años", "5 años", "6 años", "7 años"]
},
'num-37': {
  prompt: "Los ingresos de una empresa crecieron de USD 100 millones a USD 121 millones en dos años. ¿Cuál fue la tasa de crecimiento anual compuesta?",
  choices: ["10%", "10,5%", "11%", "21%"]
},
'num-38': {
  prompt: "Una máquina que vale USD 50.000 se deprecia 20% de su valor restante cada año. ¿Cuánto vale después de 3 años?",
  choices: ["$18.000", "$20.000", "$24.000", "$25.600"]
},
'num-39': {
  prompt: "Una empresa vende 45.000 unidades en un mercado total de 300.000 unidades. ¿Cuál es su participación de mercado?",
  choices: ["12%", "15%", "18%", "20%"]
},
'num-40': {
  prompt: "Las ventas en unidades de una empresa suben de 45.000 a 50.400 mientras el mercado total crece de 300.000 a 360.000 unidades. ¿Qué pasó con la participación de mercado de la empresa?",
  choices: ["Subió de 15% a 14%", "Bajó de 15% a 14%", "Se mantuvo en 15%", "Subió de 14% a 15%"]
},
'num-41': {
  prompt: "El inventario de un minorista rota 6 veces al año, con un inventario promedio valorado en USD 200.000. ¿Cuál es el costo anual de la mercancía vendida?",
  choices: ["$600.000", "$1,2 millones", "$1,8 millones", "$2,4 millones"]
},
'num-42': {
  prompt: "Las ventas trimestrales son: T1 USD 100.000, T2 USD 120.000, T3 USD 90.000, T4 USD 130.000. ¿T4 representa aproximadamente qué porcentaje de las ventas anuales?",
  choices: ["25,0%", "27,5%", "29,5%", "32,5%"]
},
'num-43': {
  prompt: "Un salario de USD 60.000 recibe un aumento de 10% y, un año después, otro aumento de 5%. ¿Cuál es el salario final?",
  choices: ["$66.000", "$67.500", "$69.000", "$69.300"]
},
'num-44': {
  prompt: "Las ventas en unidades aumentan 50% mientras el precio por unidad cae 20%. ¿Cuál es el cambio en los ingresos totales?",
  choices: ["Aumento de 10%", "Aumento de 20%", "Aumento de 30%", "Sin cambio"]
},
'num-45': {
  prompt: "El precio de un producto se reduce de USD 80 a USD 68. ¿Cuál es la reducción porcentual?",
  choices: ["15%", "17,6%", "20%", "25%"]
},
'num-46': {
  prompt: "La tasa de cambio es 1 USD = 4.000 COP. ¿Cuántos dólares estadounidenses valen 2.600.000 COP?",
  choices: ["$260", "$450", "$520", "$650"]
},
'num-47': {
  prompt: "Una bolsa contiene 4 canicas rojas y 6 azules. Se sacan dos canicas sin reposición. ¿Cuál es la probabilidad de que ambas sean rojas?",
  choices: ["2/15", "3/20", "4/25", "1/5"]
},
'num-48': {
  prompt: "Se lanza una moneda equilibrada tres veces. ¿Cuál es la probabilidad de obtener exactamente dos caras?",
  choices: ["1/4", "3/8", "1/2", "2/3"]
},
'num-49': {
  prompt: "En un grupo de 40 consultores, 25 hablan inglés y 20 hablan portugués. Cada consultor habla al menos uno de los dos idiomas. ¿Cuántos hablan ambos?",
  choices: ["5", "10", "15", "20"]
},
'num-50': {
  prompt: "Un equipo de proyecto debe seleccionar 2 personas de un grupo de 6 candidatos. ¿Cuántas parejas distintas son posibles?",
  choices: ["15", "20", "30", "36"]
},
'num-51': {
  prompt: "Una consultora cobra USD 180 por hora. Un proyecto requiere 3 consultores trabajando 25 horas cada uno, más USD 4.500 en gastos. ¿Cuál es el costo total para el cliente?",
  choices: ["$13.500", "$15.750", "$17.100", "$18.900"]
},
'num-52': {
  prompt: "Una tienda compra un artículo en USD 60, le aplica un sobreprecio de 50% y luego lo vende con 20% de descuento sobre el precio marcado. ¿Cuál es el precio final de venta?",
  choices: ["$54", "$63", "$68", "$72"]
},
'num-53': {
  prompt: "Una empresa tiene 3 oficinas. La oficina de Bogotá genera el 45% de los ingresos, Medellín el 30% y Cali el resto. Los ingresos totales son USD 12 millones. ¿Cuánto más genera Bogotá que Cali?",
  choices: ["$2,4 millones", "$3,0 millones", "$3,6 millones", "$5,4 millones"]
},
'num-54': {
  prompt: "Un servicio de suscripción tiene 8.000 suscriptores que pagan USD 25 al mes. Sube el precio a USD 30 y pierde el 10% de sus suscriptores. ¿Cómo cambian los ingresos mensuales?",
  choices: ["Caen USD 8.000", "No cambian", "Suben USD 16.000", "Suben USD 40.000"]
},
'num-55': {
  prompt: "Una fábrica opera 20 días al mes y produce 250 unidades diarias. Cada unidad se vende en USD 40 y los costos variables son USD 28 por unidad. Los costos fijos mensuales son USD 30.000. ¿Cuál es la utilidad mensual?",
  choices: ["$30.000", "$45.000", "$60.000", "$90.000"]
},
'num-56': {
  prompt: "Un fondo de inversión cobra una comisión de administración anual de 2% sobre los activos. Administra USD 450 millones y espera que los activos crezcan 10% el próximo año. ¿Aproximadamente qué comisión cobrará el próximo año sobre el valor de los activos al cierre del año?",
  choices: ["$8,1 millones", "$9,0 millones", "$9,5 millones", "$9,9 millones"]
},
'num-57': {
  prompt: "Los ingresos de una empresa subieron 25% mientras sus costos subieron 10%. Los ingresos eran originalmente USD 800.000 y los costos, USD 600.000. ¿Cuál es la nueva utilidad?",
  choices: ["$200.000", "$220.000", "$340.000", "$360.000"]
},
'num-58': {
  prompt: "Dos consultores reparten un honorario de USD 90.000 en razón 5:4. El de la porción mayor paga 30% de ella en impuestos. ¿Cuánto le queda después de impuestos?",
  choices: ["$35.000", "$40.000", "$45.000", "$50.000"]
},
'num-59': {
  prompt: "Las ventas de una tienda fueron USD 40.000 en enero. Subieron 20% en febrero y luego cayeron 25% en marzo. ¿Cuáles fueron las ventas de marzo?",
  choices: ["$36.000", "$38.000", "$40.000", "$44.000"]
},
'num-60': {
  prompt: "Una firma factura el 70% de las horas disponibles de sus consultores. Cada uno de sus 12 consultores tiene 160 horas disponibles al mes, y la tarifa de facturación es USD 200 por hora. ¿Cuáles son los ingresos mensuales?",
  choices: ["$268.800", "$288.000", "$336.000", "$384.000"]
},
'num-61': {
  prompt: "Un producto cuesta USD 45 fabricarlo. La empresa quiere un margen bruto de 40% sobre el precio de venta. ¿Cuál debería ser el precio de venta?",
  choices: ["$54", "$63", "$67,50", "$75"]
},
'num-62': {
  prompt: "Una empresa planea recortar sus costos totales en 12%. Los costos son USD 8 millones, de los cuales el 60% es mano de obra. Si protege por completo los costos de mano de obra, ¿en qué porcentaje deben caer los costos que no son de mano de obra?",
  choices: ["12%", "20%", "24%", "30%"]
},
'num-63': {
  prompt: "Una empresa adquiere a un competidor por USD 60 millones. El competidor genera USD 9 millones de utilidad anual, que se espera constante. ¿Cuántos años tardará la adquisición en pagarse sola, ignorando intereses?",
  choices: ["Entre 5 y 6 años", "Entre 6 y 7 años", "Entre 7 y 8 años", "Entre 8 y 9 años"]
},
'num-64': {
  prompt: "Las ventas subieron de 2.400 unidades a 3.000 unidades mientras los ingresos subieron de USD 96.000 a USD 105.000. ¿Qué pasó con el precio promedio por unidad?",
  choices: ["Subió de $35 a $40", "Bajó de $40 a $35", "Se mantuvo en $40", "Bajó de $40 a $37,50"]
},
'num-65': {
  prompt: "Los costos operativos de una empresa son USD 2,5 millones al año y crecen 4% anual. Los ingresos son USD 3,0 millones al año y crecen 2% anual. ¿Aproximadamente cuál es la utilidad dentro de dos años?",
  choices: ["$0,30 millones", "$0,42 millones", "$0,50 millones", "$0,58 millones"]
},

/* Series keep their digits unseparated, as the English bank does. A thousands separator
   inside a sequence puzzle adds visual noise to the very thing being pattern-matched, and
   203.616 also invites a misread as a decimal. */
'num-66': {
  prompt: "¿Qué número sigue en la serie?\n\n3,  8,  15,  24,  35,  ?",
  choices: ["42", "44", "46", "48"]
},
'num-67': {
  prompt: "¿Qué número sigue en la serie?\n\n203616,  101808,  50904,  25452,  12726,  ?",
  choices: ["6362", "6363", "6371", "6374"]
},
'num-68': {
  prompt: "¿Qué número sigue en la serie?\n\n3,  4,  7,  11,  18,  29,  ?",
  choices: ["47", "51", "55", "58"]
},
'num-69': {
  prompt: "¿Qué número sigue en la serie?\n\n100,  92,  76,  52,  ?",
  choices: ["16", "20", "24", "28"]
},
'num-70': {
  prompt: "¿Qué número sigue en la serie?\n\n5,  11,  23,  47,  ?",
  choices: ["71", "83", "89", "95"]
},
'num-71': {
  prompt: "¿Qué número sigue en la serie?\n\n120,  60,  20,  5,  ?",
  choices: ["1", "2", "2,5", "4"]
},
'num-72': {
  prompt: "¿Qué número sigue en la serie?\n\n2,  5,  10,  17,  26,  ?",
  choices: ["37", "39", "41", "43"]
},
'num-73': {
  prompt: "¿Qué número sigue en la serie?\n\n12,  15,  21,  30,  42,  ?",
  choices: ["48", "51", "54", "57"]
},
'num-74': {
  prompt: "¿Qué número sigue en la serie?\n\n1,  2,  6,  24,  120,  ?",
  choices: ["240", "480", "600", "720"]
},
'num-75': {
  prompt: "Un número de esta secuencia rompe el patrón. ¿Cuál es?\n\n123,  234,  345,  465,  567",
  choices: ["234", "345", "465", "567"]
},
'num-76': {
  prompt: "Estima: ¿cuánto es el 19,8% de 4.050?",
  choices: ["aproximadamente 600", "aproximadamente 700", "aproximadamente 800", "aproximadamente 900"]
},
'num-77': {
  prompt: "Estima: 3.960 ÷ 41",
  choices: ["aproximadamente 80", "aproximadamente 97", "aproximadamente 110", "aproximadamente 125"]
},
'num-78': {
  prompt: "Estima: 1.240 × 19",
  choices: ["aproximadamente 21.800", "aproximadamente 23.600", "aproximadamente 25.400", "aproximadamente 27.200"]
},
'num-79': {
  prompt: "¿Cuál de estas fracciones es la mayor?",
  choices: ["3/7", "4/9", "5/11", "7/16"]
},
'num-80': {
  prompt: "Un mercado que vale USD 2,94 mil millones crece cerca de 10% al año. Estima su tamaño después de 3 años.",
  choices: ["aproximadamente $3,2 mil millones", "aproximadamente $3,6 mil millones", "aproximadamente $3,9 mil millones", "aproximadamente $4,3 mil millones"]
},
'num-81': {
  prompt: "Estima: el 48% de 6.120",
  choices: ["aproximadamente 2.450", "aproximadamente 2.940", "aproximadamente 3.400", "aproximadamente 3.800"]
},
'num-82': {
  prompt: "Un proveedor sube el precio unitario de un componente de USD 85 a USD 102. ¿En qué porcentaje ha aumentado el precio?",
  choices: ["16,7%", "17,0%", "18,5%", "20,0%"]
},
'num-83': {
  prompt: "La planta de personal de una empresa cae de 640 a 512 en un año. ¿En qué porcentaje ha disminuido?",
  choices: ["12,8%", "20,0%", "25,0%", "32,0%"]
},
'num-84': {
  prompt: "Un minorista reduce un precio 20% en una primera promoción y luego reduce el precio ya rebajado en un 15% adicional. ¿Cuál es la reducción porcentual total respecto al precio original?",
  choices: ["27,0%", "32,0%", "33,0%", "35,0%"]
},
'num-85': {
  prompt: "Tras un aumento de 25%, una suscripción mensual cuesta USD 60. ¿Cuál era el precio antes del aumento?",
  choices: ["$45,00", "$48,00", "$50,00", "$75,00"]
},
'num-86': {
  prompt: "Una firma emplea a 1.240 personas, de las cuales el 35% trabaja de forma remota. ¿Cuántas trabajan de manera presencial?",
  choices: ["434", "620", "806", "1.240"]
},
'num-87': {
  prompt: "Las ventas trimestrales de una división suben 40% en un trimestre y luego caen 40% en el siguiente. ¿Cuál es el cambio neto en los dos trimestres?",
  choices: ["Una disminución de 16%", "Una disminución de 20%", "Sin cambio", "Un aumento de 16%"]
},
'num-88': {
  prompt: "Un minorista compra un artículo en USD 40 y lo vende en USD 55. ¿Cuál es el sobreprecio expresado como porcentaje del costo?",
  choices: ["27,3%", "33,3%", "37,5%", "40,0%"]
},
'num-89': {
  prompt: "Se aplica un IVA de 21% a un precio neto de USD 340. ¿Cuál es el precio bruto con impuesto incluido?",
  choices: ["$351,40", "$361,40", "$401,40", "$411,40"]
},
'num-90': {
  prompt: "El presupuesto anual de un área, de USD 180.000, se recorta 12,5%. ¿Cuál es el nuevo presupuesto?",
  choices: ["$157.500", "$160.000", "$162.000", "$202.500"]
},
'num-91': {
  prompt: "Un negocio reporta ingresos de USD 2,4 millones y un costo de mercancía vendida de USD 1,56 millones. ¿Cuál es su margen bruto?",
  choices: ["30,0%", "35,0%", "46,2%", "65,0%"]
},
'num-92': {
  prompt: "Un producto se vende en USD 80 y tiene un margen bruto de 45%. ¿Cuánto cuesta fabricarlo?",
  choices: ["$35,00", "$36,00", "$44,00", "$55,20"]
},
'num-93': {
  prompt: "Una empresa reporta ingresos de USD 5 millones, utilidad bruta de USD 1,75 millones y gastos operativos de USD 900.000. ¿Cuál es su margen operativo?",
  choices: ["15,0%", "16,0%", "16,5%", "17,0%"]
},
'num-94': {
  prompt: "Un fabricante quiere un margen bruto de 40% en un artículo que cuesta USD 18 producir. ¿Qué precio de venta lo logra?",
  choices: ["$25,20", "$28,80", "$30,00", "$32,40"]
},
'num-95': {
  prompt: "Un negocio tiene actualmente ingresos de USD 1.000 y un costo de mercancía vendida de USD 600. El próximo año los ingresos suben 10% y el costo de mercancía vendida sube 5%. ¿Cuál será el margen bruto el próximo año?",
  choices: ["40,0%", "41,5%", "42,7%", "45,0%"]
},
'num-96': {
  prompt: "Una empresa reporta ingresos de USD 12,5 millones y un margen neto de 6%. ¿Cuál es su utilidad neta?",
  choices: ["$750.000", "$833.000", "$1.250.000", "$2.083.000"]
},
'num-97': {
  prompt: "Un minorista compra un artículo en USD 24 y aplica un sobreprecio de 60% sobre el costo. ¿Qué margen bruto representa el precio de venta resultante?",
  choices: ["37,5%", "40,0%", "60,0%", "62,5%"]
},
'num-98': {
  prompt: "Una empresa vende dos líneas de producto. La Línea A genera USD 600.000 de ingresos con un margen bruto de 30%; la Línea B genera USD 400.000 con un margen bruto de 50%. ¿Cuál es el margen bruto combinado de ambas líneas?",
  choices: ["30,0%", "35,0%", "36,0%", "38,0%"]
},
'num-99': {
  prompt: "Los ingresos de una empresa crecen de USD 4,0 millones a USD 6,4 millones en dos años. ¿Cuál es la tasa de crecimiento anual compuesta?",
  choices: ["20,0%", "24,0%", "25,0%", "26,5%"]
},
'num-100': {
  prompt: "Una base de suscriptores crece 8% al año. Usando la regla del 72, ¿aproximadamente cuánto tardará en duplicarse?",
  choices: ["6 años", "9 años", "12 años", "15 años"]
},
'num-101': {
  prompt: "Un producto vendió 250 unidades en el año 1. Las ventas en unidades crecieron 20% en el año 2 y un 15% adicional en el año 3. ¿Cuántas unidades se vendieron en el año 3?",
  choices: ["331", "337", "345", "350"]
},
'num-102': {
  prompt: "Los ingresos de una empresa crecieron de USD 50 millones a USD 86,4 millones en tres años. ¿Cuál fue la tasa de crecimiento anual compuesta?",
  choices: ["20,0%", "24,3%", "28,8%", "72,8%"]
},
'num-103': {
  prompt: "Un mercado que vale USD 800 millones crecerá 5% al año. ¿Cuánto valdrá después de tres años, redondeado al millón más cercano?",
  choices: ["$840 millones", "$920 millones", "$926 millones", "$940 millones"]
},
'num-104': {
  prompt: "Una inversión duplica su valor en seis años. Usando la regla del 72, ¿cuál es la tasa de crecimiento anual aproximada?",
  choices: ["8,0%", "10,0%", "12,0%", "16,7%"]
},
'num-105': {
  prompt: "Cinco representantes de ventas cerraron 12, 15, 9, 18 y 11 negocios el trimestre pasado. ¿Cuál fue el número promedio de negocios cerrados?",
  choices: ["11", "12", "13", "15"]
},
'num-106': {
  prompt: "Un equipo de ocho personas tiene un salario promedio de USD 54.000. Una novena persona se une con un salario de USD 72.000. ¿Cuál es el nuevo salario promedio del equipo?",
  choices: ["$54.000", "$56.000", "$58.000", "$63.000"]
},
'num-107': {
  prompt: "El promedio de seis números es 24. Cinco de los números son 18, 22, 25, 30 y 20. ¿Cuál es el sexto número?",
  choices: ["27", "28", "29", "31"]
},
'num-108': {
  prompt: "Un repartidor recorre 120 km a un promedio de 60 km/h y luego otros 120 km a un promedio de 40 km/h. ¿Cuál es la velocidad promedio de todo el trayecto?",
  choices: ["48 km/h", "50 km/h", "52 km/h", "55 km/h"]
},
'num-109': {
  prompt: "Una tienda registró ingresos mensuales de USD 82.000, USD 91.000, USD 77.000 y USD 94.000 durante cuatro meses. ¿Cuál fue el ingreso mensual promedio?",
  choices: ["$82.500", "$84.000", "$85.000", "$86.000"]
},
'num-110': {
  prompt: "Un presupuesto de USD 1,2 millones se divide entre marketing, ventas y desarrollo de producto en razón 3 : 5 : 2. ¿Cuánto se asigna a ventas?",
  choices: ["$240.000", "$360.000", "$600.000", "$720.000"]
},
'num-111': {
  prompt: "Dos áreas tienen plantas de personal en razón 4 : 7. El área más pequeña tiene 48 personas. ¿Cuántas personas hay en el área más grande?",
  choices: ["56", "72", "80", "84"]
},
'num-112': {
  prompt: "Una mezcla industrial contiene solvente y resina en razón 5 : 3. ¿Cuántos litros de resina hay en 320 litros de la mezcla?",
  choices: ["96", "120", "128", "200"]
},
'num-113': {
  prompt: "Los ingresos de una empresa se reparten entre sus regiones Oeste y Este en razón 9 : 5. La región Este generó USD 3,5 millones. ¿Cuánto generó la región Oeste?",
  choices: ["$6,3 millones", "$6,5 millones", "$7,0 millones", "$9,0 millones"]
},
'num-114': {
  prompt: "Una caja contiene 20 unidades, de las cuales 4 son defectuosas. Se saca una unidad al azar. ¿Cuál es la probabilidad de que sea defectuosa?",
  choices: ["15%", "20%", "25%", "80%"]
},
'num-115': {
  prompt: "Dos procesos de producción independientes tienen cada uno 10% de probabilidad de fallar en un día dado. ¿Cuál es la probabilidad de que ambos fallen el mismo día?",
  choices: ["1%", "10%", "19%", "20%"]
},
'num-116': {
  prompt: "Una máquina produce unidades con una tasa de defectos de 5%, y cada unidad es independiente de las demás. ¿Cuál es la probabilidad de que dos unidades consecutivas estén ambas libres de defectos?",
  choices: ["85,00%", "90,00%", "90,25%", "95,00%"]
},
'num-117': {
  prompt: "De 200 postulantes, 80 aprobaron la prueba numérica. De esos 80, exactamente 50 aprobaron también la prueba verbal. Se elige al azar a un postulante entre los que aprobaron la prueba numérica. ¿Cuál es la probabilidad de que también haya aprobado la verbal?",
  choices: ["25,0%", "40,0%", "60,0%", "62,5%"]
},
'num-118': {
  prompt: "¿Qué número sigue en esta serie?\n\n3, 7, 15, 31, ?",
  choices: ["47", "55", "63", "71"]
},
'num-119': {
  prompt: "¿Qué número sigue en esta serie?\n\n2, 6, 12, 20, 30, ?",
  choices: ["40", "42", "44", "46"]
},
'num-120': {
  prompt: "¿Qué número sigue en esta serie?\n\n81, 27, 9, 3, ?",
  choices: ["0", "1", "1,5", "2"]
},
'num-121': {
  prompt: "¿Qué número sigue en esta serie?\n\n1, 4, 9, 16, 25, ?",
  choices: ["36", "42", "49", "64"]
},
'num-122': {
  prompt: "¿Qué número sigue en esta serie?\n\n120, 60, 30, 15, ?",
  choices: ["5", "7,5", "10", "12"]
},
'num-123': {
  prompt: "¿Qué número sigue en esta serie?\n\n2, 3, 5, 8, 13, ?",
  choices: ["21", "24", "26", "34"]
},
'num-124': {
  prompt: "¿Qué número sigue en esta serie?\n\n7, 14, 28, 56, ?",
  choices: ["84", "96", "112", "128"]
},
'num-125': {
  prompt: "¿Qué número sigue en esta serie?\n\n100, 91, 83, 76, ?",
  choices: ["66", "68", "69", "70"]
},
'num-126': {
  prompt: "¿Qué número sigue en esta serie?\n\n1, 8, 27, 64, ?",
  choices: ["81", "100", "121", "125"]
},
'num-127': {
  prompt: "¿Qué número sigue en esta serie?\n\n3, 6, 11, 18, 27, ?",
  choices: ["34", "36", "38", "40"]
},
'num-128': {
  prompt: "Una máquina produce 240 unidades en 6 horas. Trabajando al mismo ritmo, ¿cuántas unidades producirá en 15 horas?",
  choices: ["480", "540", "600", "660"]
},
'num-129': {
  prompt: "Tres trabajadores completan una tarea en 12 días. Suponiendo que todos trabajan al mismo ritmo, ¿cuánto tardarían cuatro trabajadores en completar la misma tarea?",
  choices: ["8 días", "9 días", "10 días", "16 días"]
},
'num-130': {
  prompt: "Una bomba puede llenar un tanque en 8 horas y una segunda bomba puede llenar el mismo tanque en 12 horas. Trabajando juntas desde vacío, ¿cuánto tardarán en llenarlo?",
  choices: ["2,4 horas", "4,0 horas", "4,5 horas", "4,8 horas"]
},
'num-131': {
  prompt: "Un auto recorre 315 km en 3,5 horas. ¿Cuál es su velocidad promedio?",
  choices: ["90 km/h", "95 km/h", "100 km/h", "110 km/h"]
},
'num-132': {
  prompt: "Un equipo de 5 personas procesa 1.200 reclamaciones en 4 días. Trabajando al mismo ritmo por persona, ¿cuántas reclamaciones procesarían 8 personas en 5 días?",
  choices: ["1.920", "2.400", "2.880", "3.000"]
},
'num-133': {
  prompt: "Una impresora imprime 45 páginas por minuto. ¿Cuánto tardará en imprimir 1.530 páginas?",
  choices: ["28 minutos", "32 minutos", "34 minutos", "38 minutos"]
},
'num-134': {
  prompt: "Entra agua a un tanque a 15 litros por minuto mientras un desagüe saca agua a 6 litros por minuto. Partiendo de vacío, ¿cuánto tardará en llenarse un tanque de 540 litros?",
  choices: ["25 minutos", "36 minutos", "50 minutos", "60 minutos"]
},
'num-135': {
  prompt: "Un negocio de suscripción tiene 4.850 clientes, cada uno gastando aproximadamente USD 197 al año. ¿Cuál de las siguientes cifras se acerca más a sus ingresos anuales?",
  choices: ["$760.000", "$860.000", "$960.000", "$1.060.000"]
},
'num-136': {
  prompt: "Una bodega almacena 78 estibas, cada una con 96 cajas. ¿Cuál de las siguientes cifras se acerca más al número total de cajas?",
  choices: ["6.500", "7.500", "8.500", "9.500"]
},
'num-137': {
  prompt: "Un proyecto requiere cerca de 1.960 horas de trabajo. Un equipo de 7 personas trabaja 38 horas semanales cada una. ¿Aproximadamente cuántas semanas tomará el proyecto?",
  choices: ["7 semanas", "9 semanas", "11 semanas", "14 semanas"]
},
'num-138': {
  prompt: "Una ciudad de 2,1 millones de habitantes tiene aproximadamente un médico por cada 340 habitantes. ¿Cuántos médicos tiene aproximadamente la ciudad?",
  choices: ["4.000", "6.000", "8.000", "12.000"]
},
'num-139': {
  prompt: "Un minorista vende cerca de 312 unidades al día a un precio promedio de USD 28,60. ¿Cuál de las siguientes cifras se acerca más a sus ingresos en una semana de siete días?",
  choices: ["$38.000", "$50.000", "$62.000", "$74.000"]
},
'num-140': {
  prompt: "Una flota de 43 vehículos recorre aproximadamente 1.180 km al mes cada uno. ¿Cuál de las siguientes cifras se acerca más a la distancia total mensual de la flota?",
  choices: ["31.000 km", "38.000 km", "44.000 km", "51.000 km"]
},
'num-141': {
  prompt: "Un producto se vende en USD 25 por unidad con un costo variable de USD 15 por unidad. Los costos fijos de la empresa son USD 80.000. ¿Cuántas unidades debe vender para alcanzar el punto de equilibrio?",
  choices: ["3.200", "5.333", "8.000", "16.000"]
},
'num-142': {
  prompt: "Una campaña de marketing cuesta USD 45.000 y trae 900 clientes nuevos. ¿Cuál es el costo de adquisición por cliente?",
  choices: ["$20", "$50", "$75", "$90"]
},
'num-143': {
  prompt: "Un suscriptor paga USD 30 al mes y permanece en el servicio un promedio de 40 meses. ¿Cuál es el valor de vida promedio del cliente, antes de costos?",
  choices: ["$360", "$750", "$900", "$1.200"]
},
'num-144': {
  prompt: "Una consultora emplea a 60 consultores, cada uno con 1.800 horas disponibles al año. El año pasado la firma facturó 86.400 horas a clientes. ¿Cuál fue su tasa de utilización?",
  choices: ["72%", "75%", "80%", "85%"]
},
'num-145': {
  prompt: "Un minorista reporta un costo de mercancía vendida de USD 4,2 millones y un inventario promedio de USD 700.000. ¿Cuál es su rotación de inventario?",
  choices: ["6 veces", "8 veces", "10 veces", "12 veces"]
},
'num-146': {
  prompt: "Una inversión de USD 250.000 tiene un valor final de USD 310.000. ¿Cuál es el retorno sobre la inversión (ROI)?",
  choices: ["19,4%", "24,0%", "30,0%", "124,0%"]
},
'num-147': {
  prompt: "Una empresa tiene costos fijos de USD 120.000. Vende su producto en USD 40 por unidad con un costo variable de USD 28 por unidad. ¿Cuántas unidades debe vender para obtener una utilidad de USD 60.000?",
  choices: ["5.000", "10.000", "12.000", "15.000"]
},
'num-148': {
  prompt: "Un negocio de suscripción empieza el mes con 2.400 clientes. Durante el mes pierde 72 clientes y gana 150 nuevos. ¿Cuál es su tasa de cancelación mensual?",
  choices: ["3,0%", "3,25%", "6,0%", "6,25%"]
},
'num-149': {
  prompt: "Una tienda compra 300 unidades a USD 12 cada una. Vende 240 de ellas a USD 22 cada una y liquida las unidades restantes a USD 14 cada una. ¿Cuál es la utilidad total de la tienda sobre el lote?",
  choices: ["$2.040", "$2.520", "$3.120", "$3.600"]
},
'num-150': {
  prompt: "Una empresa reporta ingresos de USD 8 millones con un margen bruto de 30%. Los gastos operativos son USD 1,5 millones y el impuesto se cobra al 25% de la utilidad antes de impuestos. ¿Cuál es la utilidad neta de la empresa?",
  choices: ["$450.000", "$600.000", "$675.000", "$900.000"]
},
'num-151': {
  prompt: "Un empleado que gana USD 52.000 recibe un aumento de 6% y, un año después, otro aumento de 4%. ¿Cuál es su salario después de ambos aumentos?",
  choices: ["$56.160,00", "$57.200,00", "$57.300,00", "$57.324,80"]
},
'num-152': {
  prompt: "Un proyecto tiene cuatro fases que cuestan USD 18.000, USD 27.000, USD 35.000 y USD 20.000. El presupuesto aprobado es USD 110.000. ¿Qué porcentaje del presupuesto queda sin gastar?",
  choices: ["9,1%", "10,0%", "11,0%", "12,5%"]
},
'num-153': {
  prompt: "Una fábrica opera 22 días al mes, con dos turnos diarios de 8 horas cada uno, y produce 65 unidades por hora. ¿Cuál es su producción mensual?",
  choices: ["17.160", "22.880", "28.600", "45.760"]
},
'num-154': {
  prompt: "Una tienda registró ventas de USD 240.000 en el primer trimestre. Las ventas cayeron 15% en el segundo trimestre y luego subieron 25% en el tercero. ¿Cuáles fueron las ventas del tercer trimestre?",
  choices: ["$240.000", "$244.800", "$255.000", "$270.000"]
},
'num-155': {
  prompt: "Un vehículo se compra por USD 32.000. Se deprecia 20% el primer año y un 15% adicional de su valor restante el segundo año. ¿Cuánto vale después de dos años?",
  choices: ["$20.800", "$21.760", "$22.400", "$24.320"]
},
'num-156': {
  prompt: "Una conferencia tiene 480 asistentes. De estos, el 25% asiste al taller A. De los asistentes que no van al taller A, el 40% asiste al taller B. ¿Cuántos asisten al taller B?",
  choices: ["96", "120", "132", "144"]
},
'num-157': {
  prompt: "Un préstamo de USD 18.000 acumula interés simple de 7% anual durante tres años, sin pagos hasta el final. ¿Qué monto total debe pagarse?",
  choices: ["$19.260", "$20.260", "$21.600", "$21.780"]
},
'num-158': {
  prompt: "Un equipo de 6 personas trabaja 7,5 horas diarias durante 12 días a una tarifa de mano de obra de USD 45 por hora. ¿Cuál es el costo total de mano de obra?",
  choices: ["$24.300", "$27.000", "$29.160", "$32.400"]
},
'num-159': {
  prompt: "Un mayorista aplica 15% de descuento a pedidos superiores a USD 5.000, y luego un 5% adicional sobre el monto ya descontado por pago dentro de diez días. ¿Cuál es el costo final de un pedido de USD 7.200 pagado dentro de diez días?",
  choices: ["$5.814", "$5.940", "$6.120", "$6.840"]
},
'num-160': {
  prompt: "El presupuesto anual de un área subió de USD 340.000 a USD 391.000, mientras su planta de personal subió de 17 a 23. ¿Qué pasó con el presupuesto por persona?",
  choices: ["Cayó USD 3.000", "Cayó USD 1.700", "Subió USD 3.000", "Subió USD 51.000"]
},
'num-161': {
  prompt: "Una máquina cuesta USD 84.000 y ahorra USD 1.750 mensuales en costos operativos. Ignorando intereses, ¿cuál es el periodo de recuperación?",
  choices: ["3,5 años", "4,0 años", "4,5 años", "5,0 años"]
},
'num-162': {
  prompt: "Una firma factura a tres clientes por USD 12.400, USD 9.750 y USD 15.850. Los tres aprovechan un descuento de 3% por pago anticipado. ¿Qué monto total recibe la firma?",
  choices: ["$36.860", "$37.050", "$37.240", "$38.000"]
},
'num-163': {
  prompt: "Un fabricante vende un producto a través de un minorista a un precio de lista de USD 45. El minorista se lleva una comisión de 30% sobre el precio de lista, y el fabricante además paga USD 4,20 por unidad en envío. ¿Cuánto recibe el fabricante por unidad?",
  choices: ["$26,10", "$27,00", "$27,30", "$31,50"]
},

/* ---------------- WORKING WITH DATA ----------------
   The tables these refer to are generated in es-tables.js from a glossary. Terms used in a
   prompt must match that glossary exactly — a question asking about "el Este" against a
   table headed "East" would be unanswerable — so region names, quarters (T1..T4), months
   and cost categories here all follow it.

   "billion" becomes "mil millones", so $1.35 billion is written $1.350 millones: same
   quantity, and it keeps the option list on the same unit as the rest of the set. */
'data-0': {
  prompt: "¿Qué región logró el mayor crecimiento porcentual en ventas de 2024 a 2025?",
  choices: ["Norte", "Sur", "Este", "Oeste"]
},
'data-1': {
  prompt: "¿Cuáles fueron las ventas totales de las cuatro regiones en 2025?",
  choices: ["4.150", "4.350", "4.500", "4.725"]
},
'data-2': {
  prompt: "¿Las ventas de 2025 del Este representan aproximadamente qué porcentaje del total de ventas de 2025?",
  choices: ["28,5%", "30,0%", "31,7%", "33,3%"]
},
'data-3': {
  prompt: "¿En qué porcentaje crecieron las ventas totales de todas las regiones de 2024 a 2025?",
  choices: ["9,0%", "10,0%", "11,1%", "12,5%"]
},
'data-4': {
  prompt: "¿Cómo cambió la participación del Norte en las ventas totales entre 2024 y 2025?",
  choices: ["Subió de 30% a 32%", "Bajó de 32% a 30%", "Se mantuvo en 30%", "Subió de 28% a 30%"]
},
'data-5': {
  prompt: "Si el Este hubiera crecido al mismo ritmo porcentual que el mercado total, ¿cuáles habrían sido sus ventas de 2025?",
  choices: ["1.575", "1.650", "1.687,5", "1.725"]
},
'data-6': {
  prompt: "¿Qué producto genera la mayor utilidad bruta total?",
  choices: ["Alpha", "Beta", "Gamma", "Delta"]
},
'data-7': {
  prompt: "¿Qué producto tiene el menor margen bruto como porcentaje del precio?",
  choices: ["Alpha", "Beta", "Gamma", "Delta"]
},
'data-8': {
  prompt: "¿Cuáles son los ingresos totales de los cuatro productos?",
  choices: ["$205.000", "$220.000", "$227.500", "$235.000"]
},
'data-9': {
  prompt: "¿Cuál es el margen bruto global de los cuatro productos, como porcentaje de los ingresos totales?",
  choices: ["34,7%", "37,5%", "40,0%", "42,5%"]
},
'data-10': {
  prompt: "¿Gamma representa aproximadamente qué porcentaje de los ingresos totales?",
  choices: ["14,6%", "17,6%", "20,0%", "23,4%"]
},
'data-11': {
  prompt: "¿En qué mes fue más alto el costo de nómina por empleado?",
  choices: ["Enero", "Febrero", "Marzo", "Abril"]
},
'data-12': {
  prompt: "¿En qué porcentaje creció el personal de enero a abril?",
  choices: ["20%", "25%", "30%", "33%"]
},
'data-13': {
  prompt: "¿En qué porcentaje creció la nómina total de enero a abril?",
  choices: ["22,50%", "25,00%", "28,75%", "31,25%"]
},
'data-14': {
  prompt: "¿Cuál fue la nómina total de los cuatro meses?",
  choices: ["$2.669.500", "$2.769.500", "$2.869.500", "$2.969.500"]
},
'data-15': {
  prompt: "¿Cuáles son los ingresos anuales de Alpha Corp en este mercado?",
  choices: ["$800 millones", "$875 millones", "$925 millones", "$1.000 millones"]
},
'data-16': {
  prompt: "¿Cuántos ingresos más genera Beta Ltd que Delta SA?",
  choices: ["$300 millones", "$400 millones", "$450 millones", "$500 millones"]
},
'data-17': {
  prompt: "¿Qué porción del mercado por ingresos controlan juntas las dos empresas más grandes?",
  choices: ["$1.350 millones", "$1.500 millones", "$1.750 millones", "$2.000 millones"]
},
'data-18': {
  prompt: "Si Gamma Inc adquiriera a Delta SA y la entidad combinada conservara todos los clientes de ambas empresas, ¿cuál sería su participación de mercado?",
  choices: ["19%", "24%", "31%", "34%"]
},
'data-19': {
  prompt: "¿Qué porcentaje de los encuestados estaba satisfecho o muy satisfecho?",
  choices: ["40,0%", "53,3%", "60,0%", "66,7%"]
},
'data-20': {
  prompt: "¿Cuál es la razón entre encuestados satisfechos (ambos niveles) e insatisfechos (ambos niveles)?",
  choices: ["2:1", "3:1", "4:1", "5:1"]
},
'data-21': {
  prompt: "Si la meta de la empresa es que no más del 15% de los encuestados exprese alguna insatisfacción, ¿cumplió la meta?",
  choices: ["Sí, la insatisfacción fue 10,0%", "Sí, la insatisfacción fue 14,2%", "No, la insatisfacción fue 16,7%", "No, la insatisfacción fue 20,0%"]
},
'data-22': {
  prompt: "Si se recolectaran 300 respuestas adicionales de 'muy satisfecho' y se agregaran a la encuesta, ¿qué porcentaje de todas las respuestas sería entonces 'muy satisfecho'?",
  choices: ["26,7%", "35,5%", "41,3%", "51,7%"]
},
'data-23': {
  prompt: "¿Qué trimestre tuvo el mayor margen bruto (ingresos menos costo de ventas, como porcentaje de los ingresos)?",
  choices: ["T1", "T2", "T3", "T4"]
},
'data-24': {
  prompt: "¿Cuáles fueron los ingresos totales del año completo?",
  choices: ["$23.500 miles", "$24.500 miles", "$25.500 miles", "$26.500 miles"]
},
'data-25': {
  prompt: "¿Cuál fue la utilidad operativa de la empresa en T4 (ingresos menos costo de ventas menos gastos operativos)?",
  choices: ["$1.510 miles", "$1.890 miles", "$2.400 miles", "$3.010 miles"]
},
'data-26': {
  prompt: "¿Cuál fue el margen operativo de la empresa en el año completo?",
  choices: ["15,3%", "18,6%", "20,4%", "41,3%"]
},
'data-27': {
  prompt: "¿En qué porcentaje crecieron los ingresos de T3 a T4?",
  choices: ["14,3%", "16,7%", "18,0%", "20,0%"]
},
'data-28': {
  prompt: "¿Cómo cambiaron los gastos operativos como porcentaje de los ingresos entre T1 y T4?",
  choices: ["Cayeron de 24,0% a 21,4%", "Subieron de 21,4% a 24,0%", "Se mantuvieron en 24,0%", "Cayeron de 24,0% a 18,6%"]
},
'data-29': {
  prompt: "¿Cuál es la nómina anual total de la empresa?",
  choices: ["$20.350.000", "$21.350.000", "$22.350.000", "$23.350.000"]
},
'data-30': {
  prompt: "¿Cuál es el salario promedio de toda la empresa?",
  choices: ["$56.250", "$58.375", "$60.000", "$61.250"]
},
'data-31': {
  prompt: "¿Qué porcentaje de la nómina total representa Ingeniería?",
  choices: ["30,0%", "36,5%", "40,2%", "43,7%"]
},
'data-32': {
  prompt: "Si el personal de Operaciones se recortara 20% sin ningún otro cambio, ¿cuál sería la nueva nómina total?",
  choices: ["$21.000.000", "$21.700.000", "$22.000.000", "$22.675.000"]
},
'data-33': {
  prompt: "¿En qué año logró la plataforma su mayor crecimiento porcentual de usuarios?",
  choices: ["2022", "2023", "2024", "El crecimiento fue igual en 2022 y 2023"]
},
'data-34': {
  prompt: "¿Cuál fue la tasa de crecimiento anual compuesta de usuarios de 2021 a 2024?",
  choices: ["27%", "30%", "33%", "38%"]
},
'data-35': {
  prompt: "¿Cuántos usuarios se sumaron en total entre 2021 y 2024?",
  choices: ["3,25 millones", "4,00 millones", "4,25 millones", "5,25 millones"]
},
'data-36': {
  prompt: "Si el crecimiento de 2025 iguala el ritmo de 2024, ¿aproximadamente cuántos usuarios habrá al cierre de 2025?",
  choices: ["6,30 millones", "6,56 millones", "6,83 millones", "7,25 millones"]
},
'data-37': {
  prompt: "¿Qué categoría de costo creció más rápido entre 2024 y 2025?",
  choices: ["Mano de obra", "Materiales", "Logística", "Gastos generales"]
},
'data-38': {
  prompt: "¿Qué categoría de costo disminuyó entre 2024 y 2025?",
  choices: ["Mano de obra", "Materiales", "Logística", "Ninguna disminuyó"]
},
'data-39': {
  prompt: "¿Cuál es la participación de Mano de obra en los costos totales de 2025?",
  choices: ["40%", "44%", "46%", "48%"]
},
'data-40': {
  prompt: "¿Cómo cambió la participación de Mano de obra en los costos totales entre 2024 y 2025?",
  choices: ["Subió 2 puntos porcentuales", "Bajó 2 puntos porcentuales", "No cambió", "Subió 4 puntos porcentuales"]
},
'data-41': {
  prompt: "¿En qué porcentaje crecieron los costos totales entre 2024 y 2025?",
  choices: ["8%", "10%", "11%", "12%"]
},
'data-42': {
  prompt: "Si el costo unitario de Beta pudiera reducirse de USD 60 a USD 52 sin cambio en precio ni volumen, ¿en cuánto aumentaría la utilidad bruta total de todos los productos?",
  choices: ["$4.800", "$6.400", "$8.000", "$12.000"]
},
'data-43': {
  prompt: "Si el Oeste sigue creciendo a su ritmo de 2024–2025, ¿aproximadamente cuáles serán sus ventas de 2026?",
  choices: ["930", "1.022", "1.100", "1.180"]
},
'data-44': {
  prompt: "¿Qué porcentaje del personal de la empresa emplea Operaciones?",
  choices: ["25,0%", "30,0%", "34,5%", "37,5%"]
},
'data-45': {
  prompt: "¿En qué trimestre fue más bajo el costo de ventas como porcentaje de los ingresos?",
  choices: ["T1", "T2", "T3", "T4"]
},
'data-46': {
  prompt: "¿Cuál es el promedio de negocios cerrados por representante?",
  choices: ["5", "6", "7", "8"]
},
'data-47': {
  prompt: "¿Cuál es la mediana de negocios cerrados por representante?",
  choices: ["5", "6", "8", "9"]
},
'data-48': {
  prompt: "¿Cuál es la moda de las cifras de negocios cerrados?",
  choices: ["3", "5", "6", "20"]
},
'data-49': {
  prompt: "¿Qué medida representa mejor el desempeño de un representante típico de este equipo?",
  choices: [
    "La media, porque usa todos los datos",
    "La mediana, porque un valor inusualmente alto distorsiona la media",
    "La moda, porque es el resultado más común",
    "El rango, porque muestra la dispersión completa"
  ]
},
'data-50': {
  prompt: "¿Cuál es el rango de las cifras de negocios cerrados?",
  choices: ["17", "20", "23", "26"]
},
'data-51': {
  prompt: "Si se excluyeran los 20 negocios de Gómez, ¿qué pasaría con la media y la mediana?",
  choices: [
    "La media caería a 6 y la mediana a 5,5",
    "La media caería a 6 y la mediana se mantendría en 6",
    "Ambas se mantendrían igual",
    "La media se mantendría en 8 y la mediana caería a 5,5"
  ]
},
'data-52': {
  prompt: "Ambos equipos tienen la misma media de ventas mensuales. ¿Qué equipo tiene la mayor desviación estándar?",
  choices: ["Equipo A", "Equipo B", "Son idénticas", "No puede determinarse solo con la media"]
},
'data-53': {
  prompt: "Un gerente quiere el equipo cuya producción mensual sea más predecible. ¿Cuál debería elegir, y por qué?",
  choices: [
    "El Equipo B, porque alcanzó el mes individual más alto",
    "El Equipo A, porque sus resultados varían mucho menos alrededor del mismo promedio",
    "El Equipo B, porque su crecimiento es más constante",
    "Cualquiera de los dos, porque los promedios son iguales"
  ]
},
'data-54': {
  prompt: "Un estudio reporta un coeficiente de correlación de r = 0,85 entre el gasto en publicidad y las ventas.\n\n¿Qué indica esto?",
  choices: [
    "La publicidad causa el 85% de las ventas",
    "Una relación positiva fuerte: un mayor gasto tiende a acompañar mayores ventas",
    "El 85% de los puntos está exactamente sobre la línea de tendencia",
    "Las ventas suben 0,85% por cada 1% de aumento en publicidad"
  ]
},
'data-55': {
  prompt: "¿Qué coeficiente de correlación indica la relación más fuerte entre dos variables?",
  choices: ["r = 0,60", "r = 0,05", "r = −0,78", "r = 0,40"]
},
'data-56': {
  prompt: "Las ventas de helado y los incidentes de ahogamiento están fuertemente correlacionados de forma positiva a lo largo del año.\n\n¿Cuál es la interpretación más razonable?",
  choices: [
    "Comprar helado aumenta el riesgo de ahogarse",
    "Un tercer factor —el clima cálido— impulsa ambos de forma independiente",
    "Los incidentes de ahogamiento hacen que la gente compre helado",
    "La correlación debe ser un error de cálculo"
  ]
},
'data-57': {
  prompt: "¿Qué registro contiene una fecha imposible?",
  choices: ["1002", "1003", "1004", "1005"]
},
'data-58': {
  prompt: "¿Qué dos registros parecen ser duplicados del mismo pedido?",
  choices: ["1001 y 1002", "1001 y 1004", "1002 y 1003", "1003 y 1005"]
},
'data-59': {
  prompt: "¿Qué valor de este extracto es lógicamente imposible para un pedido y debe investigarse?",
  choices: [
    "El valor de $4.200, porque aparece dos veces",
    "El valor de −$1.200, porque un pedido no puede tener monto negativo",
    "El valor de $2.970, porque no es un número redondo",
    "El valor de $3.850, porque es de otra región"
  ]
},
'data-60': {
  prompt: "Si calcularas el valor promedio de pedido con este extracto sin limpiarlo, ¿qué saldría mal?",
  choices: [
    "Nada: el promedio sería confiable",
    "El promedio quedaría subestimado, porque un valor negativo y un pedido duplicado lo distorsionan",
    "El promedio quedaría sobreestimado, porque hay muy pocos registros",
    "El promedio no puede calcularse en absoluto"
  ]
},
'data-61': {
  prompt: "Un informe indica que los segmentos de un mercado tienen participaciones de 34%, 28%, 21%, 14% y 9%.\n\n¿Qué debes concluir?",
  choices: [
    "El segmento más grande es dominante",
    "Las cifras contienen un error, porque las participaciones suman 106%",
    "El mercado está muy fragmentado",
    "Las participaciones son consistentes y pueden usarse tal cual"
  ]
},
'data-62': {
  prompt: "Una empresa envía por correo una encuesta de satisfacción a clientes que compraron en los últimos 30 días. El 92% dice estar satisfecho.\n\n¿Cuál es la principal limitación de este resultado?",
  choices: [
    "La muestra excluye a los clientes que dejaron de comprar, que son los más propensos a estar insatisfechos",
    "Treinta días es un periodo demasiado corto para medir satisfacción",
    "Las encuestas por correo son menos precisas que las telefónicas",
    "El resultado debió reportarse como fracción y no como porcentaje"
  ]
},
'data-63': {
  prompt: "Un analista encuentra que 3 de 400 filas de un conjunto de datos no tienen valor en la columna 'región'.\n\n¿Qué respuesta es más apropiada?",
  choices: [
    "Eliminar todo el conjunto de datos y pedir un extracto nuevo",
    "Rellenar los vacíos con la región más común para no perder filas",
    "Investigar por qué faltan, luego excluirlas o etiquetarlas, y dejar constancia del tratamiento en el análisis",
    "Ignorar el asunto por completo, ya que 3 filas no pueden importar"
  ]
},
'data-64': {
  prompt: "Un gráfico muestra dos barras, una en 102 unidades y otra en 108, pero su eje vertical empieza en 100 en lugar de 0.\n\n¿Cuál es el efecto?",
  choices: [
    "El gráfico subestima la diferencia entre las dos barras",
    "El gráfico exagera la diferencia, haciendo que una brecha de cerca de 6% se vea mucho mayor",
    "El gráfico es inválido y no puede interpretarse",
    "La elección del eje no afecta cómo se leen las barras"
  ]
},
'data-65': {
  prompt: "Un conjunto de datos de ingresos mensuales lista la mayoría de los meses en dólares pero tres meses en miles de dólares.\n\n¿Qué tipo de problema es este?",
  choices: [
    "Un problema de datos faltantes",
    "Un problema de unidades inconsistentes, que distorsionará cualquier total o promedio hasta corregirlo",
    "Un problema de registros duplicados",
    "Un problema de redondeo con impacto insignificante"
  ]
},
'data-66': {
  prompt: "Un programa piloto en una sucursal elevó la productividad 30%. La dirección propone desplegarlo a toda la empresa y espera el mismo resultado.\n\n¿Cuál es la limitación clave de los datos?",
  choices: [
    "Una mejora de 30% es demasiado grande para ser creíble",
    "Una sola sucursal es una muestra de uno, y puede diferir de las demás en formas que produjeron el resultado",
    "La productividad no es una cantidad medible",
    "El programa debió correr un año completo"
  ]
},
'data-67': {
  prompt: "¿En qué trimestre el Producto A vendió por primera vez más que el Producto B?",
  choices: ["T1", "T2", "T3", "T4"]
},
'data-68': {
  prompt: "¿Qué producto creció más rápido durante el año, medido de T1 a T4?",
  choices: [
    "El Producto A, por un margen amplio",
    "El Producto B, por un margen amplio",
    "Crecieron al mismo ritmo",
    "El Producto B, pero solo ligeramente"
  ]
},
'data-69': {
  prompt: "¿Cuáles fueron las ventas totales del Producto A en los cuatro trimestres?",
  choices: ["$195.000", "$205.000", "$215.000", "$245.000"]
},
'data-70': {
  prompt: "¿Qué trimestre tuvo las mayores ventas combinadas de ambos productos?",
  choices: ["T1", "T2", "T3", "T4"]
},
'data-71': {
  prompt: "¿En qué año la participación de Beta superó por primera vez la de Alpha?",
  choices: ["2021", "2022", "2023", "2024"]
},
'data-72': {
  prompt: "¿Cuántos puntos porcentuales cayó la participación de Alpha entre 2020 y 2024?",
  choices: ["6 puntos", "8 puntos", "10 puntos", "14 puntos"]
},
'data-73': {
  prompt: "Entre 2020 y 2024, ¿qué pasó aproximadamente con la participación combinada de las dos empresas?",
  choices: ["Subió de 42% a 46%", "Bajó de 42% a 40%", "Se mantuvo en 42%", "Bajó de 46% a 42%"]
},
'data-74': {
  prompt: "¿Qué serie muestra el cambio interanual más estable?",
  choices: [
    "Alpha, cambiando 2–3 puntos al año",
    "Beta, cambiando exactamente 2 puntos al año",
    "Ambas cambian igual",
    "Ninguna muestra un patrón consistente"
  ]
},
'data-75': {
  prompt: "La barra de la Región B parece cerca de cuatro veces la altura de la de la Región A.\n\n¿En qué porcentaje las ventas reales de la Región B superan a las de la Región A?",
  choices: ["cerca de 6%", "cerca de 25%", "cerca de 75%", "cerca de 300%"]
},
'data-76': {
  prompt: "¿Qué único cambio haría que este gráfico representara la diferencia de forma justa?",
  choices: [
    "Empezar el eje vertical en cero",
    "Intercambiar el orden de las dos barras",
    "Poner ambas barras del mismo color",
    "Agregar una tercera región como contexto"
  ]
},
'data-77': {
  prompt: "¿Cuáles son los ingresos de Alpha en este mercado?",
  choices: ["$240 millones", "$320 millones", "$360 millones", "$400 millones"]
},
'data-78': {
  prompt: "¿Cuántos ingresos más genera Beta que Gamma?",
  choices: ["$20 millones", "$40 millones", "$60 millones", "$80 millones"]
},
'data-79': {
  prompt: "Si Gamma adquiriera todo el grupo 'Otros' y conservara a cada cliente, ¿qué afirmación sería cierta?",
  choices: [
    "Gamma se convertiría en el jugador más grande",
    "Gamma pasaría al segundo lugar",
    "Gamma seguiría siendo tercera",
    "Gamma empataría con Alpha"
  ]
},
'data-80': {
  prompt: "Leyendo la altura de cada segmento en ambos años, ¿qué categoría de costo creció más rápido en términos porcentuales?",
  choices: ["Mano de obra", "Materiales", "Otros", "Todas crecieron al mismo ritmo"]
},
'data-81': {
  prompt: "¿Qué pasó con la participación de Mano de obra en los costos totales?",
  choices: [
    "Subió de 50% a 55%",
    "Bajó de 50% a cerca de 47%",
    "Se mantuvo en 50%",
    "Bajó de 55% a 50%"
  ]
},
'data-82': {
  prompt: "¿En cuánto subieron los costos totales entre 2024 y 2025?",
  choices: ["$12 millones", "$18 millones", "$24 millones", "$30 millones"]
},
'data-83': {
  prompt: "¿Qué línea de producto generó los mayores ingresos en el año completo?",
  choices: ["Alpha", "Beta", "Gamma", "Delta"]
},
'data-84': {
  prompt: "¿Cuáles fueron los ingresos totales de las cuatro líneas de producto en T4?",
  choices: ["1.470", "1.525", "1.585", "1.620"]
},
'data-85': {
  prompt: "¿Qué línea de producto creció más rápido en términos porcentuales entre T1 y T4?",
  choices: ["Alpha", "Beta", "Gamma", "Delta"]
},
'data-86': {
  prompt: "¿Qué participación de los ingresos totales de T4 representó Gamma, al entero porcentual más cercano?",
  choices: ["20%", "23%", "25%", "28%"]
},
'data-87': {
  prompt: "¿En qué porcentaje crecieron los ingresos totales de todas las líneas de producto de T1 a T4?",
  choices: ["21,9%", "22,5%", "24,0%", "28,5%"]
},
'data-88': {
  prompt: "Si Gamma sigue creciendo cada trimestre el mismo monto absoluto que creció entre T3 y T4, ¿cuáles serán sus ingresos en T1 del próximo año?",
  choices: ["420", "432", "450", "480"]
},
'data-89': {
  prompt: "¿Qué área tiene el salario promedio más alto?",
  choices: ["Ingeniería", "Finanzas", "Marketing", "Ventas"]
},
'data-90': {
  prompt: "¿Cuál es el salario promedio de toda la empresa, a la centena de dólares más cercana?",
  choices: ["$65.000", "$67.600", "$70.000", "$74.000"]
},
'data-91': {
  prompt: "¿Qué porcentaje del personal total de la empresa representa Operaciones?",
  choices: ["29,6%", "33,3%", "40,0%", "44,0%"]
},
'data-92': {
  prompt: "Si el personal de Operaciones se recortara 25% sin cambiar su salario promedio, ¿en cuánto quedaría la nómina total de la empresa?",
  choices: ["$17.280 miles", "$18.780 miles", "$19.080 miles", "$20.280 miles"]
},
'data-93': {
  prompt: "Ventas, Marketing y Finanzas comparten el mismo salario promedio. ¿Cuál es?",
  choices: ["$70.000", "$75.000", "$80.000", "$90.000"]
},
'data-94': {
  prompt: "¿La nómina total de Ingeniería es qué múltiplo de la de Finanzas?",
  choices: ["4,50", "5,25", "6,75", "7,00"]
},
'data-95': {
  prompt: "¿Qué categoría de costo creció más rápido en términos porcentuales entre 2024 y 2025?",
  choices: ["Mano de obra", "Logística", "Gastos generales", "Energía"]
},
'data-96': {
  prompt: "El control de costos parece haber funcionado en exactamente una categoría: ¿en cuál?",
  choices: ["Energía", "Mano de obra", "Logística", "Gastos generales"]
},
'data-97': {
  prompt: "Sumando las cinco categorías de costos, ¿cuál fue el aumento porcentual interanual de los costos totales?",
  choices: ["10,2%", "11,4%", "12,5%", "13,6%"]
},
'data-98': {
  prompt: "¿Qué participación de los costos totales representaron las materias primas en 2025?",
  choices: ["39,4%", "40,0%", "42,0%", "44,0%"]
},
'data-99': {
  prompt: "Si los costos de energía crecen en 2026 al mismo ritmo porcentual que en 2025, ¿en cuánto quedarán, al millar de dólares más cercano?",
  choices: ["$1.530 miles", "$1.640 miles", "$1.700 miles", "$1.823 miles"]
},
'data-100': {
  prompt: "¿Qué participación de los costos totales de 2025 representaron juntas la mano de obra y la energía?",
  choices: ["40,8%", "42,0%", "44,5%", "46,0%"]
},
'data-101': {
  prompt: "¿Qué tienda genera las menores ventas por metro cuadrado?",
  choices: ["Centro", "Northgate", "Riverside", "Southbank"]
},
'data-102': {
  prompt: "¿Cuáles fueron las ventas anuales totales de las cinco tiendas?",
  choices: ["$25.450 miles", "$26.950 miles", "$27.500 miles", "$28.150 miles"]
},
'data-103': {
  prompt: "¿Cuáles son las ventas anuales promedio por empleado en todo el parque de tiendas, a la centena de dólares más cercana?",
  choices: ["$150.000", "$168.400", "$172.000", "$180.000"]
},
'data-104': {
  prompt: "Northgate tiene la mayor superficie de todas las tiendas. ¿En qué puesto queda en ventas por metro cuadrado?",
  choices: ["1.º", "2.º", "4.º", "5.º"]
},
'data-105': {
  prompt: "Si las ventas por metro cuadrado de Riverside subieran hasta igualar las de Centro, ¿en cuánto quedarían sus ventas anuales?",
  choices: ["$4.800 miles", "$5.000 miles", "$5.400 miles", "$6.000 miles"]
},
'data-106': {
  prompt: "¿Qué porcentaje de las ventas totales del parque de tiendas representa la tienda Centro?",
  choices: ["24,0%", "25,5%", "26,7%", "28,0%"]
},
'data-107': {
  prompt: "¿Qué país genera la mayor utilidad bruta?",
  choices: ["Francia", "Polonia", "España", "Suecia"]
},
'data-108': {
  prompt: "¿Cuál es el margen bruto combinado de los cinco países?",
  choices: ["35,0%", "37,6%", "40,0%", "42,0%"]
},
'data-109': {
  prompt: "¿Cuál es la utilidad bruta total de los cinco países?",
  choices: ["$52,5 millones", "$54,0 millones", "$56,5 millones", "$59,0 millones"]
},
'data-110': {
  prompt: "Suecia tiene el margen bruto más alto de todos los países. ¿Qué participación de la utilidad bruta total aporta?",
  choices: ["10,6%", "12,0%", "14,0%", "16,0%"]
},
'data-111': {
  prompt: "Si el margen bruto de Italia subiera de 32% a 40% sin cambio en los ingresos, ¿cuánta utilidad bruta adicional generaría?",
  choices: ["$2,4 millones", "$2,7 millones", "$3,0 millones", "$3,6 millones"]
},
'data-112': {
  prompt: "¿Qué dos países suman exactamente el 60% de los ingresos totales?",
  choices: ["Francia y España", "Francia e Italia", "Italia y España", "Polonia y Francia"]
},
'data-113': {
  prompt: "¿En qué mes fueron más altos los ingresos?",
  choices: ["Marzo", "Abril", "Mayo", "Junio"]
},
'data-114': {
  prompt: "¿Cuáles fueron los ingresos totales de los seis meses?",
  choices: ["$368.000", "$375.500", "$383.000", "$391.000"]
},
'data-115': {
  prompt: "¿Cuál fue el precio promedio realizado por unidad en todo el periodo de seis meses?",
  choices: ["$40,74", "$41,17", "$42,00", "$43,50"]
},
'data-116': {
  prompt: "¿En qué porcentaje crecieron las ventas en unidades de enero a junio?",
  choices: ["36,8%", "50,0%", "58,3%", "63,2%"]
},
'data-117': {
  prompt: "¿En qué porcentaje crecieron los ingresos de enero a junio?",
  choices: ["33,7%", "36,0%", "40,0%", "45,0%"]
},
'data-118': {
  prompt: "¿Entre qué dos meses consecutivos crecieron los ingresos en el menor monto absoluto?",
  choices: ["Febrero y marzo", "Marzo y abril", "Abril y mayo", "Mayo y junio"]
},
'data-119': {
  prompt: "¿En qué porcentaje excedió el programa su presupuesto total?",
  choices: ["5,0%", "6,5%", "7,0%", "8,5%"]
},
'data-120': {
  prompt: "¿Qué frente de trabajo se sobregiró en el mayor monto absoluto?",
  choices: ["Construcción", "Diseño", "Despliegue", "Pruebas"]
},
'data-121': {
  prompt: "¿Qué dos frentes de trabajo se sobregiraron en el mismo porcentaje de sus presupuestos?",
  choices: ["Construcción y Pruebas", "Construcción y Despliegue", "Diseño y Capacitación", "Pruebas y Despliegue"]
},
'data-122': {
  prompt: "¿Cuál fue el gasto real total del programa?",
  choices: ["$2.140 miles", "$2.180 miles", "$2.240 miles", "$2.300 miles"]
},
'data-123': {
  prompt: "Si el frente de Construcción hubiera cerrado exactamente en presupuesto y todos los demás sin cambios, ¿cuál habría sido la posición general del programa?",
  choices: [
    "Un subgasto de $4 miles",
    "Un sobregasto de $4 miles",
    "Un sobregasto de $140 miles",
    "Exactamente en presupuesto"
  ]
},
'data-124': {
  prompt: "¿Qué empresa ganó más participación de mercado entre 2023 y 2025?",
  choices: ["Caldera", "Norvex", "Ostrand", "Pilar"]
},
'data-125': {
  prompt: "Si el mercado total valía USD 4.000 millones en 2025, ¿cuáles fueron los ingresos de Caldera ese año?",
  choices: ["$840 millones", "$960 millones", "$1.000 millones", "$1.120 millones"]
},
'data-126': {
  prompt: "¿Cuántos puntos porcentuales cayó la participación de Norvex entre 2023 y 2025?",
  choices: ["2 puntos porcentuales", "3 puntos porcentuales", "4 puntos porcentuales", "11 puntos porcentuales"]
},
'data-127': {
  prompt: "La participación de Norvex cayó de 28% a 25%. ¿En qué porcentaje disminuyó su participación en términos relativos?",
  choices: ["3,0%", "8,5%", "10,7%", "12,0%"]
},
'data-128': {
  prompt: "El mercado total creció de USD 3.200 millones en 2023 a USD 4.000 millones en 2025. ¿Qué pasó con los ingresos de Norvex en ese periodo?",
  choices: [
    "Subieron cerca de $100 millones",
    "Subieron cerca de $300 millones",
    "Cayeron cerca de $100 millones",
    "Cayeron cerca de $300 millones"
  ]
},
'data-129': {
  prompt: "¿Cuál es la mediana de negocios cerrados?",
  choices: ["11", "14", "16", "22"]
},
'data-130': {
  prompt: "¿Cuál es el promedio de negocios cerrados, con un decimal?",
  choices: ["14,0", "15,5", "16,3", "17,1"]
},
'data-131': {
  prompt: "¿Por cuántos negocios supera el mejor representante al más débil?",
  choices: ["21", "23", "26", "30"]
},
'data-132': {
  prompt: "Si un gerente de ventas quisiera saber la cifra de negocios que más representantes están realmente alcanzando, ¿cuál sería esa cifra?",
  choices: ["9", "11", "14", "30"]
},
'data-133': {
  prompt: "La media de este conjunto de datos es notablemente mayor que su mediana. ¿Qué indica eso sobre la distribución?",
  choices: [
    "Está sesgada a la derecha por uno o dos valores inusualmente altos",
    "Está sesgada a la izquierda por uno o dos valores inusualmente bajos",
    "Es simétrica alrededor de la media",
    "Los valores se registraron incorrectamente"
  ]
},
'data-134': {
  prompt: "Si se excluyeran del conjunto los 30 negocios de F. Torres, ¿qué pasaría con la mediana?",
  choices: ["Se mantendría en 14", "Caería a 12,5", "Caería a 11", "Subiría a 16"]
},
'data-135': {
  prompt: "Si se excluyeran los 30 negocios de F. Torres, ¿en cuánto quedaría la media?",
  choices: ["13,5", "14,0", "15,0", "16,3"]
},
'data-136': {
  prompt: "Un conjunto de datos contiene los valores 4, 8, 8, 10 y 20. ¿Qué medida de tendencia central se ve más afectada por el valor 20?",
  choices: ["La media", "La mediana", "La moda", "Las tres por igual"]
},
'data-137': {
  prompt: "Dos equipos de producción tienen la misma producción diaria promedio, pero la desviación estándar del Equipo A es tres veces la del Equipo B. ¿Qué te dice esto?",
  choices: [
    "La producción diaria del Equipo A varía mucho más de un día a otro que la del Equipo B",
    "El Equipo A produce más en total que el Equipo B",
    "La producción del Equipo A es sistemáticamente mayor que la del Equipo B",
    "El Equipo B tiene más días de producción que el Equipo A"
  ]
},
'data-138': {
  prompt: "Una encuesta a 500 personas encuentra que el 60% aprueba una propuesta, con un margen de error de ±4 puntos porcentuales. ¿Qué rango contiene con mayor probabilidad el nivel real de aprobación?",
  choices: ["52% a 68%", "56% a 64%", "58% a 62%", "60% a 64%"]
},
'data-139': {
  prompt: "En un conjunto de datos de salarios de una empresa donde un número pequeño de ejecutivos gana muchas veces el salario típico, ¿qué medida representa mejor el salario de un empleado típico?",
  choices: ["La mediana", "La media", "El rango", "El máximo"]
},
'data-140': {
  prompt: "¿Qué fila contiene una fecha de ingreso que no puede ser válida?",
  choices: ["3002", "3003", "3005", "3006"]
},
'data-141': {
  prompt: "¿Qué dos filas parecen ser duplicados del mismo registro?",
  choices: ["3001 y 3003", "3001 y 3004", "3002 y 3005", "3003 y 3004"]
},
'data-142': {
  prompt: "¿Qué fila contiene un valor imposible para el campo de salario?",
  choices: ["3002", "3004", "3005", "3006"]
},
'data-143': {
  prompt: "La fila 3005 registra 95 horas por semana. ¿Cuál es el primer paso más apropiado?",
  choices: [
    "Consultar el valor con el sistema de origen antes de decidir cómo tratarlo",
    "Eliminar la fila para que no distorsione el análisis",
    "Reemplazar el valor por el promedio del conjunto de datos",
    "Dejarlo sin cambios, ya que los valores extremos siguen siendo datos reales"
  ]
},
'data-144': {
  prompt: "Si la fila duplicada no se elimina antes de calcular el salario promedio, ¿qué efecto tiene?",
  choices: [
    "Jala el promedio hacia $58.000 al contar dos veces a ese empleado",
    "No tiene efecto, porque las dos filas tienen ID distintos",
    "Baja el promedio, porque aumenta el número de registros",
    "Hace imposible calcular el promedio"
  ]
},
'data-145': {
  prompt: "¿Cuál es el salario promedio si el análisis se corre sobre este extracto sin limpiarlo?",
  choices: ["$45.883", "$52.180", "$55.740", "$57.875"]
},
'data-146': {
  prompt: "¿Cuál es el salario promedio después de eliminar la fila duplicada y excluir el valor negativo?",
  choices: ["$52.180", "$55.175", "$55.740", "$57.875"]
},
'data-147': {
  prompt: "La columna Horas/semana contiene 37,5 para un empleado y 40 para los demás. ¿Es esto un problema de calidad de datos?",
  choices: [
    "No: los contratos de medio tiempo y de jornada reducida son valores legítimos",
    "Sí: todos los valores de una columna deben ser números enteros",
    "Sí: la columna debería contener un único valor consistente",
    "Sí: los decimales indican un error de formato en la exportación"
  ]
},
'data-148': {
  prompt: "¿Qué problema de calidad de datos detectaría aplicar una verificación de rango a una columna de salarios?",
  choices: [
    "Un valor de salario negativo",
    "Un nombre de empleado mal escrito",
    "Dos filas que registran al mismo empleado",
    "Un nombre de área ingresado en la columna equivocada"
  ]
},
'data-149': {
  prompt: "Un conjunto de datos combina registros de dos sistemas, uno de los cuales guarda el área como 'Ventas' y el otro como 'VENTAS'. ¿Qué problema crea esto?",
  choices: [
    "Las agregaciones dividirán una sola área en dos grupos separados",
    "Los registros no cargarán en la herramienta de análisis",
    "Los valores de salario quedarán desalineados entre sistemas",
    "Se crearán automáticamente registros de empleados duplicados"
  ]
},

/* ---------------- CRITICAL THINKING ----------------
   The longest stimuli in the bank, and the ones where translation can do real damage. Two
   things have to survive intact.

   The logical skeleton. Quantifiers map one to one — all/todos, some/algunos, none/ninguno —
   but they must not drift: rendering "some members have worked in Brazil" as "varios" would
   quietly strengthen a premise that the correct answer depends on being weak.

   The relative force of the distractors. A weaken question works because three options are
   irrelevant or trivial and one is decisive; translating a trivial option into something
   that sounds weightier than it is makes the item ambiguous. Each distractor here keeps the
   register of its original — a cost complaint stays a cost complaint.

   Units are localised where it does not touch the logic: fuel consumption is per kilómetro
   rather than per mile, since the reasoning is about consumption per unit of distance. */
'ct-0': {
  prompt: "El año pasado la ciudad instaló luminarias más brillantes a lo largo de la calle Main. En los seis meses siguientes, los delitos reportados en la calle Main cayeron 30%. Las autoridades municipales concluyeron que la mejor iluminación causó la caída del delito.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la conclusión de las autoridades?",
  choices: [
    "Durante esos mismos seis meses, la policía duplicó el número de agentes que patrullaban la calle Main.",
    "Las luminarias más brillantes le cuestan a la ciudad más en operación que las antiguas.",
    "El delito en la calle Main venía subiendo lentamente durante los tres años anteriores.",
    "Los residentes de la calle Main reportaron sentirse más seguros tras la instalación de las luces."
  ]
},
'ct-1': {
  prompt: "Una cadena minorista encontró que las tiendas que ponen música clásica tienen un valor promedio de transacción 12% mayor que las tiendas que ponen música pop. La cadena planea cambiar todas sus tiendas a música clásica para aumentar los ingresos.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más el plan?",
  choices: [
    "Algunos clientes reportan que les disgusta la música clásica.",
    "Las tiendas que ponen música clásica están ubicadas casi exclusivamente en barrios de altos ingresos.",
    "Cambiar la música en todas las tiendas tomaría cerca de tres meses.",
    "Los competidores de la cadena ponen una mezcla de ambos géneros."
  ]
},
'ct-2': {
  prompt: "Un fabricante afirma: 'Nuestra fábrica redujo los defectos 40% después de introducir la nueva lista de verificación de control de calidad. Otras fábricas deberían adoptar la lista para recortar sus tasas de defectos.'\n\n¿Cuál de las siguientes opciones, de ser cierta, socava más la recomendación?",
  choices: [
    "La lista de verificación les toma a los trabajadores unos diez minutos por turno.",
    "La fábrica reemplazó la mayor parte de su maquinaria envejecida en el mismo trimestre en que se introdujo la lista.",
    "Algunos trabajadores encontraron repetitiva la lista de verificación.",
    "La tasa de defectos de la fábrica había sido antes más alta que el promedio de la industria."
  ]
},
'ct-3': {
  prompt: "Una universidad reporta que los egresados de su programa de emprendimiento ganan 35% más diez años después de graduarse que los egresados de otros programas. La universidad promociona el programa como una forma de aumentar los ingresos futuros.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la afirmación implícita del anuncio?",
  choices: [
    "La admisión al programa de emprendimiento exige experiencia previa en negocios y un proceso de selección competitivo.",
    "El programa de emprendimiento tiene más créditos obligatorios que la mayoría de los otros programas.",
    "Algunos egresados de emprendimiento trabajan fuera del sector empresarial.",
    "La cifra de 35% se calcula antes de impuestos."
  ]
},
'ct-4': {
  prompt: "Un administrador de hospital argumenta: 'Los pacientes atendidos en nuestro hospital tienen una tasa de mortalidad más alta que los de la clínica comunitaria del otro lado de la ciudad. Por lo tanto, la clínica brinda mejor atención.'\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más el argumento?",
  choices: [
    "El hospital emplea más personal que la clínica.",
    "El hospital es el centro de trauma designado de la región y recibe a los pacientes con lesiones más graves.",
    "La clínica amplió recientemente sus instalaciones.",
    "Ambas instituciones usan sistemas de registro similares."
  ]
},
'ct-5': {
  prompt: "Una empresa de software observó que los usuarios que completan el tutorial dentro de la aplicación renuevan sus suscripciones al doble de la tasa de quienes lo omiten. La gerencia propone hacer obligatorio el tutorial para mejorar la retención.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la propuesta?",
  choices: [
    "El tutorial toma cerca de ocho minutos en completarse.",
    "Los usuarios que completan el tutorial voluntariamente son los que ya tenían la intención de usar el producto intensamente.",
    "Un competidor ofrece un tutorial más corto.",
    "El tutorial se desarrolló hace dos años."
  ]
},
'ct-6': {
  prompt: "Consultor: 'Las empresas que hacen reuniones generales semanales reportan puntajes más altos de compromiso de los empleados. Nuestro cliente debería instituir reuniones generales semanales para elevar el compromiso.'\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más seriamente la recomendación del consultor?",
  choices: [
    "Las reuniones generales duran típicamente 45 minutos.",
    "Las empresas con una fuerza laboral ya comprometida son las que más probablemente adoptan reuniones generales semanales en primer lugar.",
    "Los puntajes de compromiso se recogen anualmente.",
    "El cliente actualmente hace reuniones generales mensuales."
  ]
},
'ct-7': {
  prompt: "Un concejo municipal argumenta que su nueva red de ciclorrutas redujo la congestión vehicular, citando una caída de 15% en los tiempos promedio de desplazamiento en el centro durante el año posterior a su apertura.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más el argumento del concejo?",
  choices: [
    "Un gran empleador del centro pasó al 40% de su personal a trabajo remoto permanente durante ese mismo año.",
    "Las ciclorrutas costaron más de lo proyectado originalmente.",
    "Los ciclistas reportan que las ciclorrutas se sienten más seguras que la disposición vial anterior.",
    "Algunos conductores se opusieron a las ciclorrutas antes de su construcción."
  ]
},
'ct-8': {
  prompt: "Un minorista notó que los clientes que instalan su aplicación móvil gastan 25% más al año que los clientes que no la instalan. El director de marketing argumenta que persuadir a más clientes de instalar la aplicación aumentará los ingresos totales.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más el argumento del director?",
  choices: [
    "Los clientes a quienes se les ofreció al azar un pequeño incentivo para instalar la aplicación aumentaron después su gasto en un margen similar.",
    "La aplicación fue costosa de desarrollar.",
    "La mayoría de los competidores del minorista también ofrece aplicaciones móviles.",
    "Los usuarios de la aplicación son en promedio más jóvenes que los no usuarios."
  ]
},
'ct-9': {
  prompt: "Un funcionario de salud pública afirma que una nueva campaña publicitaria antitabaco causó que las tasas de tabaquismo en la región cayeran 8% el año pasado.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más la afirmación?",
  choices: [
    "La campaña fue elogiada por varias asociaciones médicas.",
    "En una región vecina con demografía similar y sin campaña, las tasas de tabaquismo no cambiaron en el mismo periodo.",
    "La campaña costó menos que esfuerzos anteriores de salud pública.",
    "Las tasas de tabaquismo a nivel nacional han declinado en general durante la última década."
  ]
},
'ct-10': {
  prompt: "Una aerolínea argumenta que su nuevo procedimiento de abordaje redujo los retrasos promedio de salida.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más el argumento?",
  choices: [
    "Los pasajeros reportan que el nuevo procedimiento es más fácil de entender.",
    "Los retrasos cayeron solo en los aeropuertos donde se implementó el nuevo procedimiento, y no en los demás aeropuertos de la aerolínea.",
    "La reputación de puntualidad de la aerolínea ha mejorado en la cobertura de prensa.",
    "El nuevo procedimiento fue diseñado por un consultor de operaciones experimentado."
  ]
},
'ct-11': {
  prompt: "Unos investigadores proponen que las pausas cortas y regulares durante la jornada laboral mejoran la productividad de la tarde.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más la propuesta?",
  choices: [
    "Los empleados dicen que disfrutan tomar pausas.",
    "Los equipos asignados al azar a un horario obligatorio de pausas produjeron 12% más en la tarde que los equipos asignados a trabajar de corrido.",
    "Empresas de varias industrias han adoptado políticas de pausas.",
    "La productividad generalmente decae al final de la tarde."
  ]
},
'ct-12': {
  prompt: "Una firma afirma que su nuevo bono por referidos mejoró la calidad de las nuevas contrataciones, señalando calificaciones de desempeño más altas en el primer año entre los contratados por referencia.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más la afirmación de la firma?",
  choices: [
    "Los contratados por referencia que ingresaron antes de que existiera el bono tenían calificaciones de desempeño similares a las de los no referidos.",
    "El bono por referidos se paga seis meses después de la fecha de ingreso del nuevo contratado.",
    "Los empleados aprecian la oportunidad de ganar el bono.",
    "La firma recibe más postulaciones de las que puede revisar."
  ]
},
'ct-13': {
  prompt: "Un economista argumenta que subir el salario mínimo de una ciudad no redujo el empleo en el sector de restaurantes de esa ciudad.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más el argumento del economista?",
  choices: [
    "Los dueños de restaurantes de la ciudad se opusieron públicamente al aumento salarial.",
    "El empleo en restaurantes de la ciudad siguió de cerca el empleo en restaurantes de tres ciudades vecinas que no subieron su salario mínimo.",
    "El aumento del salario mínimo se aplicó por fases durante dos años.",
    "Algunos restaurantes subieron los precios del menú tras el aumento."
  ]
},
'ct-14': {
  prompt: "Una firma consultora invirtió fuerte en un nuevo software de modelación financiera después de que varios analistas junior reportaran dedicar horas desproporcionadas a tareas repetitivas de construcción de modelos durante los proyectos con clientes. Las pruebas internas iniciales mostraron que el software reduce 40% el tiempo necesario para construir un modelo financiero frente al proceso anterior de la firma. En la reunión anual de planeación, el socio director citó esta cifra y concluyó que la firma podrá, por lo tanto, aceptar 40% más proyectos de clientes el próximo año sin sumar personal.\n\n¿La conclusión del socio depende de cuál de los siguientes supuestos?",
  choices: [
    "El software será adoptado por todos los consultores de la firma.",
    "El tiempo de construcción de modelos es lo que actualmente limita el número de proyectos que la firma puede aceptar.",
    "Las firmas competidoras no tienen acceso a un software similar.",
    "El software cuesta menos que los ingresos de un proyecto adicional."
  ]
},
'ct-15': {
  prompt: "Ante la presión de los residentes por el empeoramiento de la calidad del aire en el centro, las autoridades municipales presentaron una nueva iniciativa para reducir la contaminación del tráfico diario de quienes se desplazan al trabajo. Bajo el plan, la ciudad ofrecerá pases gratuitos de transporte público a quienes se desplacen al centro, financiados mediante una reasignación del presupuesto de control de estacionamiento. Las autoridades declararon públicamente que esperan una caída significativa en las emisiones vehiculares dentro del primer año del programa, citando como precedente iniciativas similares en otras ciudades.\n\n¿El plan supone cuál de las siguientes opciones?",
  choices: [
    "El transporte público es más cómodo que conducir.",
    "Un número significativo de quienes hoy conducen se cambiará al transporte público porque los pases son gratuitos.",
    "El sistema de transporte de la ciudad funciona enteramente con electricidad.",
    "Quienes se desplazan al centro ganan ingresos por encima del promedio."
  ]
},
'ct-16': {
  prompt: "Durante una revisión trimestral del negocio, un gerente de servicio al cliente presentó los resultados de la última encuesta de satisfacción del área, que se había enviado automáticamente por correo a los clientes después de cada interacción de soporte durante los últimos tres meses. Al resumir los hallazgos para la alta dirección, el gerente argumenta: 'Nuestra encuesta de satisfacción muestra 90% de satisfacción. Nuestros clientes están claramente contentos con nuestro servicio', y recomendó no hacer cambios al proceso actual de soporte.\n\n¿Cuál de las siguientes es una suposición que hace el gerente?",
  choices: [
    "Quienes respondieron la encuesta son razonablemente representativos del conjunto de clientes.",
    "El servicio de la empresa es mejor que el de sus competidores.",
    "La encuesta fue realizada por una firma independiente.",
    "Los clientes satisfechos gastan más que los insatisfechos."
  ]
},
'ct-17': {
  prompt: "Un inversionista argumenta: 'Los ingresos de esta empresa han crecido 25% anual durante tres años. Por lo tanto será una inversión rentable.'\n\n¿El razonamiento del inversionista supone cuál de las siguientes opciones?",
  choices: [
    "La empresa no tiene competidores.",
    "El crecimiento de los ingresos se traducirá en retornos para los accionistas.",
    "La empresa opera en un solo país.",
    "Los fundadores de la empresa siguen en el negocio."
  ]
},
'ct-18': {
  prompt: "Tras varios años de resultados estancados en lectura, un distrito escolar adoptó un nuevo currículo de lectura desarrollado por una consultora educativa externa, y lo desplegó en todas las escuelas primarias al inicio del año académico. Al cierre del año, los administradores del distrito compararon los resultados de las pruebas estandarizadas con las cifras del año anterior. Con base en esa comparación, el distrito escolar concluye que su nuevo currículo de lectura es efectivo porque los puntajes promedio de lectura subieron 10 puntos después de su introducción.\n\n¿La conclusión supone cuál de las siguientes opciones?",
  choices: [
    "Ningún otro cambio significativo que afectara los puntajes de lectura ocurrió al mismo tiempo que el cambio de currículo.",
    "Todos los docentes del distrito apoyaron el nuevo currículo.",
    "La lectura es la materia más importante del currículo.",
    "El currículo anterior llevaba muchos años en uso."
  ]
},
'ct-19': {
  prompt: "Una empresa de logística planea recortar 15% los costos de entrega cambiando a una flota de vehículos más pequeños, ya que los vehículos pequeños consumen menos combustible por kilómetro.\n\n¿El plan supone cuál de las siguientes opciones?",
  choices: [
    "Los vehículos más pequeños son menos costosos de comprar.",
    "La empresa no necesitará hacer sustancialmente más viajes para mover el mismo volumen de mercancía.",
    "Los precios del combustible se mantendrán estables.",
    "Los conductores prefieren operar vehículos más pequeños."
  ]
},
'ct-20': {
  prompt: "El área de Recursos Humanos de la firma revisó el ciclo de promociones del año pasado en todos los empleados de la línea de analistas, comparando los resultados contra los registros de finalización de la certificación avanzada en modelación, que varios líderes de equipo habían recomendado como preparación útil. La revisión confirmó que todos los analistas promovidos el año pasado habían completado la certificación avanzada en modelación antes de que su promoción entrara en vigor. María, analista de segundo año del equipo de estrategia, no ha completado la certificación avanzada en modelación.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "María no fue promovida el año pasado.",
    "María no está calificada para una promoción.",
    "María completará la certificación este año.",
    "La certificación es obligatoria para todos los analistas."
  ]
},
'ct-21': {
  prompt: "Como parte de una revisión de dotación, la oficina regional de operaciones de la firma compiló registros de idiomas y asignaciones del equipo de estrategia, que atiende clientes en América Latina y rota periódicamente a sus miembros por destinos en el exterior. Los registros muestran que todos los miembros del equipo de estrategia hablan portugués, y que algunos miembros del equipo de estrategia han trabajado en asignaciones en Brasil en algún momento de su carrera. Por separado, la política de Recursos Humanos establece que nadie que haya trabajado en Brasil tiene su base en la oficina de Bogotá.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "Algunos hablantes de portugués no tienen su base en la oficina de Bogotá.",
    "Ningún miembro del equipo de estrategia tiene su base en la oficina de Bogotá.",
    "Todos los que tienen su base en la oficina de Bogotá hablan portugués.",
    "Todos los hablantes de portugués han trabajado en Brasil."
  ]
},
'ct-22': {
  prompt: "El equipo de analítica de Recursos Humanos distribuyó una encuesta anónima posterior a la capacitación a todos los empleados que completaron el nuevo taller de habilidades analíticas de la firma, parte de una iniciativa más amplia para modernizar los programas de aprendizaje interno este año. La encuesta pedía a los participantes calificar su confianza al aplicar técnicas analíticas frente a la que tenían antes del taller, y permaneció abierta dos semanas después del cierre de cada sesión. Los resultados finales mostraron que, entre los empleados que recibieron la nueva capacitación, el 85% reportó mayor confianza en sus habilidades analíticas.\n\n¿Cuál de las siguientes opciones puede inferirse correctamente?",
  choices: [
    "La mayoría de los empleados que recibieron la capacitación creyó que su confianza había aumentado.",
    "La capacitación mejoró las habilidades analíticas reales de los empleados.",
    "Los empleados que no recibieron la capacitación tenían menor confianza.",
    "El 85% de todos los empleados de la empresa recibió la capacitación."
  ]
},
'ct-23': {
  prompt: "El contrato del proyecto entre la firma consultora y su cliente incluía una cláusula estándar de retraso, agregada después de que un proyecto anterior se pasara significativamente del cronograma y generara disputas sobre la compensación. Según los términos que ambas partes firmaron, si el proyecto se retrasa, el cliente renegociará los honorarios antes de que continúe cualquier trabajo adicional. En la reunión de cierre programada del proyecto, el gerente de cuenta confirmó que el cliente no renegoció los honorarios en ningún momento durante el proyecto.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "El proyecto no se retrasó.",
    "El proyecto se completó antes de tiempo.",
    "El cliente quedó satisfecho con el proyecto.",
    "Los honorarios fueron más altos que lo acordado originalmente."
  ]
},
'ct-24': {
  prompt: "La política de asignación de personal de la firma, introducida tras la queja de un cliente por una barrera idiomática en un proyecto anterior, establece que ningún consultor que carezca de fluidez en inglés es asignado a proyectos internacionales, sin importar su antigüedad ni sus relaciones previas con clientes. Una auditoría de asignaciones realizada este trimestre encontró que algunos consultores de la oficina de Bogotá están actualmente asignados a proyectos internacionales que abarcan múltiples regiones.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "Algunos consultores de la oficina de Bogotá tienen fluidez en inglés.",
    "Todos los consultores de la oficina de Bogotá tienen fluidez en inglés.",
    "La mayoría de los proyectos internacionales se dota desde Bogotá.",
    "Los consultores con fluidez en inglés siempre son asignados internacionalmente."
  ]
},
'ct-25': {
  prompt: "El resumen de fin de año del equipo de finanzas, preparado para la revisión anual de la junta, destacó dos tendencias separadas observadas durante el año fiscal. Primero, el informe indica que los ingresos subieron en cada trimestre del año pasado, es decir, el total de cada trimestre superó al del trimestre anterior. Segundo, el mismo informe señala que los costos anuales totales fueron menores que los del año anterior, un resultado que el director financiero atribuyó en parte a contratos renegociados con proveedores.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "La utilidad anual fue mayor que la del año anterior.",
    "Los ingresos del cuarto trimestre fueron los más altos de los cuatro trimestres.",
    "Los costos cayeron en todos los trimestres.",
    "La empresa no tuvo pérdidas en ningún trimestre."
  ]
},
'ct-26': {
  prompt: "Tras una revisión de seguridad de datos, la firma endureció sus controles de acceso a los registros sensibles de clientes y actualizó su manual de políticas internas en consecuencia. La política revisada establece que solo los empleados que hayan completado el curso de cumplimiento pueden acceder a la base de datos de clientes, y TI ahora hace cumplir este requisito mediante un sistema automatizado de permisos en lugar de aprobación manual. Una auditoría de rutina de los registros de la base de datos realizada este mes confirmó que Javier, analista del equipo de asesoría, tiene acceso a la base de datos de clientes.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "Javier ha completado el curso de cumplimiento.",
    "Javier es un empleado sénior.",
    "Todos los que completan el curso de cumplimiento obtienen acceso a la base de datos.",
    "El curso de cumplimiento cubre seguridad de bases de datos."
  ]
},
'ct-27': {
  prompt: "Gerente: 'Nuestros mejores vendedores llegan todos a la oficina antes de las 8 a. m. Si exigimos que todos lleguen antes de las 8 a. m., las ventas generales mejorarán.'\n\n¿Cuál de las siguientes opciones describe mejor la falla en el razonamiento del gerente?",
  choices: [
    "Supone que una característica compartida por los vendedores exitosos es lo que causa su éxito.",
    "No define qué cuenta como un 'mejor' vendedor.",
    "Se apoya en el testimonio de una parte interesada.",
    "Supone que todos los vendedores quieren mejorar."
  ]
},
'ct-28': {
  prompt: "Crítico: 'La nueva propuesta tributaria no puede ser una política económica sólida, porque fue redactada por legisladores que nunca han dirigido una empresa.'\n\nEl argumento del crítico es más vulnerable a la crítica de que:",
  choices: [
    "ataca el origen de la propuesta en lugar de su contenido",
    "se apoya en estadísticas de una fuente no identificada",
    "confunde una condición necesaria con una suficiente",
    "supone lo que se propone demostrar"
  ]
},
'ct-29': {
  prompt: "Ejecutivo: 'O recortamos el presupuesto de marketing o incumpliremos nuestra meta de utilidad. No podemos permitirnos incumplir la meta de utilidad, así que debemos recortar el presupuesto de marketing.'\n\nEl razonamiento es defectuoso porque:",
  choices: [
    "presenta solo dos opciones cuando pueden existir otras",
    "cita una autoridad sin justificación",
    "generaliza a partir de una muestra no representativa",
    "confunde correlación con causalidad"
  ]
},
'ct-30': {
  prompt: "Analista: 'La antigüedad promedio de los empleados de nuestra empresa es de ocho años, así que la mayoría de nuestros empleados lleva cerca de ocho años aquí.'\n\nEl razonamiento del analista es defectuoso porque:",
  choices: [
    "un promedio puede producirse por una distribución en la que pocos individuos, o ninguno, están cerca del promedio",
    "la antigüedad no es una medida significativa del valor de un empleado",
    "el analista no especifica qué empleados fueron contados",
    "ocho años es un periodo corto en la mayoría de las industrias"
  ]
},
'ct-31': {
  prompt: "Anuncio: 'Nueve de cada diez odontólogos que respondieron nuestra encuesta recomiendan nuestra crema dental. Claramente, nuestra crema dental es la elección de los profesionales odontológicos.'\n\n¿A cuál de las siguientes críticas es más vulnerable el razonamiento del anuncio?",
  choices: [
    "Extrae una conclusión sobre todos los odontólogos a partir de quienes eligieron responder.",
    "No indica cuánto cuesta la crema dental.",
    "Supone que los odontólogos usan la crema dental ellos mismos.",
    "No compara la crema dental con otras marcas."
  ]
},
'ct-32': {
  prompt: "Político: 'El plan de salud de mi oponente debe rechazarse. Él afirma que resolverá todos los problemas del sistema, lo cual es obviamente imposible.'\n\nEl argumento del político es defectuoso porque:",
  choices: [
    "tergiversa la posición del oponente para refutarla más fácilmente",
    "apela a la opinión popular en lugar de a la evidencia",
    "trata un solo contraejemplo como decisivo",
    "supone que lo cierto de una parte es cierto del todo"
  ]
},
'ct-33': {
  prompt: "Una aerolínea redujo 15% los precios base de los tiquetes en una ruta popular. El número de tiquetes vendidos en esa ruta subió 30%. Sin embargo, los ingresos totales de la ruta cayeron.\n\n¿Cuál de las siguientes opciones, de ser cierta, explica mejor este resultado?",
  choices: [
    "Junto con la reducción de precio, la aerolínea eliminó los cargos por equipaje y por selección de asiento, que antes generaban ingresos sustanciales en la ruta.",
    "Los competidores de la aerolínea también redujeron precios en la misma ruta.",
    "Los costos de combustible en la ruta aumentaron durante el mismo periodo.",
    "La aerolínea agregó dos vuelos diarios adicionales en la ruta."
  ]
},
'ct-34': {
  prompt: "Una empresa introdujo una política generosa de trabajo desde casa esperando que los costos de oficina cayeran. La satisfacción de los empleados subió marcadamente, pero el gasto total en instalaciones de la empresa aumentó ese año.\n\n¿Cuál de las siguientes opciones, de ser cierta, explica mejor el aumento?",
  choices: [
    "El contrato de arrendamiento de la empresa exigía un pago fijo hasta el final de un plazo de diez años, y la empresa abrió oficinas satélite pequeñas adicionales para colaboración presencial ocasional.",
    "Los empleados reportaron disfrutar la flexibilidad del trabajo remoto.",
    "Varios competidores introdujeron políticas similares.",
    "La planta de personal de la empresa se mantuvo estable durante el año."
  ]
},
'ct-35': {
  prompt: "Una cadena de supermercados movió sus productos más rentables a los estantes a la altura de los ojos, una ubicación que se sabe aumenta las ventas. Las ventas de esos productos sí aumentaron, pero la utilidad general de la cadena disminuyó.\n\n¿Cuál de las siguientes opciones, de ser cierta, explica mejor este resultado?",
  choices: [
    "Los productos desplazados de los estantes a la altura de los ojos tenían márgenes de utilidad aún más altos y se vendían en volúmenes mucho mayores.",
    "A los clientes les tomó un poco más de tiempo encontrar los productos tras la reorganización.",
    "La reorganización se completó en un solo fin de semana.",
    "Las cadenas competidoras usan estrategias similares de ubicación en estantes."
  ]
},
'ct-36': {
  prompt: "La tasa de desempleo de un país subió el trimestre pasado, aunque el número de personas empleadas también aumentó.\n\n¿Cuál de las siguientes opciones explica mejor esta aparente contradicción?",
  choices: [
    "La fuerza laboral creció más rápido que el número de empleos, ya que muchas personas que habían dejado de buscar trabajo retomaron su búsqueda.",
    "Los salarios aumentaron en la mayoría de las industrias durante el trimestre.",
    "Varios grandes empleadores anunciaron planes de expansión.",
    "El gobierno revisó su método de conteo de trabajadores de medio tiempo."
  ]
},
'ct-37': {
  prompt: "Una cadena hotelera subió 20% sus tarifas de habitación y esperaba que la ocupación cayera. La ocupación se mantuvo sin cambios, y sin embargo la utilidad por habitación de la cadena disminuyó.\n\n¿Cuál de las siguientes opciones, de ser cierta, explica mejor la disminución?",
  choices: [
    "Para justificar las tarifas más altas, la cadena agregó desayuno de cortesía, traslados al aeropuerto y mejoras diarias de limpieza cuyo costo combinado superó el aumento de tarifa.",
    "Varios hoteles competidores también subieron sus tarifas.",
    "El presupuesto de marketing de la cadena se mantuvo sin cambios.",
    "Los huéspedes se quedaron el mismo número promedio de noches que antes."
  ]
},
'ct-38': {
  prompt: "Una empresa está decidiendo si traslada su centro de servicio al cliente de la Ciudad A a la Ciudad B, donde los salarios son 30% menores.\n\n¿Responder cuál de las siguientes preguntas sería más útil para evaluar si el traslado reducirá los costos totales?",
  choices: [
    "Si la producción por empleado en la Ciudad B es comparable a la producción por empleado en la Ciudad A",
    "Si los empleados actuales de la Ciudad A preferirían reubicarse",
    "Cuál es el tiempo promedio de desplazamiento en la Ciudad B",
    "Si la Ciudad B tiene una población mayor que la Ciudad A"
  ]
},
'ct-39': {
  prompt: "Una editorial planea aumentar sus utilidades subiendo 20% el precio de su revista insignia.\n\n¿Cuál de las siguientes sería más útil saber para evaluar el plan?",
  choices: [
    "Cuántos suscriptores cancelarían en respuesta al aumento de precio",
    "Cuándo se publicó la revista por primera vez",
    "Cuántas páginas tiene la revista",
    "Si la revista ha ganado premios de la industria"
  ]
},
'ct-40': {
  prompt: "Ante los costos crecientes de su relleno sanitario regional, que se espera alcance su capacidad dentro de cinco años, el departamento de obras públicas de una ciudad propuso una nueva estructura de cobro para la recolección de residuos domiciliarios. Bajo la propuesta, la ciudad busca reducir los residuos que llegan al relleno exigiendo a los residentes pagar por cada bolsa de basura recolectada, reemplazando la tarifa mensual plana actual que aplica sin importar cuánta basura genere un hogar. Se espera que el concejo municipal vote la medida el próximo mes.\n\n¿Responder cuál de las siguientes preguntas sería más relevante para evaluar si la propuesta reducirá los residuos totales?",
  choices: [
    "Si los residentes responderían aumentando el vertimiento ilegal o compactando los mismos residuos en menos bolsas",
    "Cuántos camiones de recolección opera actualmente la ciudad",
    "Si las ciudades vecinas tienen rellenos sanitarios similares",
    "Cuál era la población de la ciudad hace diez años"
  ]
},
'ct-41': {
  prompt: "Una empresa farmacéutica presentó resultados preliminares de un ensayo clínico a un panel de analistas de la industria antes de su solicitud planeada de aprobación regulatoria. La empresa reporta que los pacientes que toman su nuevo medicamento se recuperaron más rápido que los pacientes que no tomaban ningún medicamento, describiendo la diferencia como clínicamente significativa en su comunicado de prensa. Los analistas en la llamada hicieron varias preguntas de seguimiento sobre cómo se había diseñado el ensayo.\n\n¿Cuál de las siguientes sería más útil para evaluar la significancia de este resultado?",
  choices: [
    "Cómo se comparan los tiempos de recuperación del nuevo medicamento con los de los tratamientos estándar existentes",
    "Cuánto tiempo dedicó la empresa a desarrollar el medicamento",
    "Cuántos países han aprobado el medicamento",
    "Cuál es el nombre comercial del medicamento"
  ]
},
'ct-42': {
  prompt: "En un año, el margen de utilidad de la Empresa X subió de 4% a 6%, mientras que el de la Empresa Y subió de 20% a 24%. Un analista concluyó que la Empresa X mejoró su margen más que la Empresa Y.\n\n¿Cuál de las siguientes opciones evalúa mejor la afirmación del analista?",
  choices: [
    "La afirmación es defendible en términos relativos (un aumento de 50% frente a 20%) pero no en términos absolutos (2 puntos frente a 4 puntos).",
    "La afirmación es correcta porque 6% es mayor que 4%.",
    "La afirmación es incorrecta porque la Empresa Y tiene el margen más alto.",
    "La afirmación no puede evaluarse sin conocer los ingresos de cada empresa."
  ]
},
'ct-43': {
  prompt: "Un informe señala que la tasa de complicaciones quirúrgicas de un hospital subió de 2% a 3% el año pasado y describe esto como 'un aumento de 1% en las complicaciones'.\n\nLa descripción del informe es engañosa porque:",
  choices: [
    "la tasa subió 1 punto porcentual, lo que representa un aumento de 50% en la tasa de complicaciones",
    "las tasas de complicaciones nunca deberían expresarse como porcentajes",
    "el informe no indica cuántas cirugías se realizaron",
    "un periodo de un año es demasiado corto para sacar conclusiones"
  ]
},
'ct-44': {
  prompt: "Un gerente reporta: 'Nuestras quejas de clientes se duplicaron este año, de 50 a 100. La calidad del servicio claramente se está deteriorando.'\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la conclusión del gerente?",
  choices: [
    "La base de clientes de la empresa creció de 5.000 a 20.000 durante ese mismo año.",
    "Las quejas son registradas por el equipo de servicio al cliente.",
    "Algunas quejas se referían a productos y no al servicio.",
    "La empresa recibió elogios de varios clientes antiguos."
  ]
},
'ct-45': {
  prompt: "El informe anual de una empresa manufacturera mediana resumió dos años consecutivos de desempeño financiero para los accionistas antes de la próxima reunión de junta. Según las cifras presentadas, los ingresos de la empresa crecieron 10% en el Año 1 frente a la línea base anterior, y luego cayeron 10% en el Año 2 respecto al total del Año 1. La gerencia no comentó si se esperaba que este patrón continuara en el Año 3.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta sobre los ingresos al final del Año 2 en comparación con el nivel inicial?",
  choices: [
    "Son menores que el nivel inicial.",
    "Son iguales al nivel inicial.",
    "Son mayores que el nivel inicial.",
    "No puede determinarse."
  ]
},
'ct-46': {
  prompt: "Un estudio encontró que las personas que desayunan pesan en promedio menos que las que lo omiten. Un nutricionista concluye que desayunar ayuda a prevenir el aumento de peso.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la conclusión?",
  choices: [
    "Las personas que omiten el desayuno tienen mayor probabilidad de trabajar por turnos, con horarios irregulares de comida y sueño que afectan el peso de forma independiente.",
    "Los alimentos del desayuno varían mucho en contenido nutricional.",
    "El estudio incluyó participantes de varios países.",
    "Algunas personas que desayunan también cenan en abundancia."
  ]
},
'ct-47': {
  prompt: "Ante un déficit de financiación, la junta de una fundación debatió si aumentar significativamente su presupuesto de marketing para el próximo ciclo de recaudación. Al revisar cinco años de datos internos, el director de desarrollo notó que las donaciones han subido históricamente en proporción al gasto en publicidad durante ese periodo. Con base en este patrón, la fundación argumenta que duplicar su gasto en publicidad duplicará las donaciones que recibe, y propuso reasignar fondos de los servicios programáticos para cubrir el aumento.\n\n¿El argumento supone cuál de las siguientes opciones?",
  choices: [
    "La relación proporcional entre publicidad y donaciones seguirá manteniéndose en el nivel de gasto más alto.",
    "La causa de la fundación es popular entre el público.",
    "Ninguna otra fundación se anuncia en los mismos canales.",
    "Los donantes prefieren dar en respuesta a anuncios."
  ]
},
'ct-48': {
  prompt: "Un memorando interno circulado a los jefes de área describió cambios recientes al proceso de aprobación de propuestas de la firma, motivados por dos incidentes en los que propuestas sin revisar avanzaron sin una evaluación de riesgo adecuada. El memorando establece que ninguna propuesta se aprueba a menos que sea revisada por el comité de riesgo, formalizando un paso que antes era informal. Señala además que algunas propuestas revisadas por el comité de riesgo son rechazadas, con base en un resumen de decisiones de los dos últimos trimestres.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "La revisión del comité de riesgo no garantiza la aprobación.",
    "La mayoría de las propuestas son rechazadas.",
    "El comité de riesgo revisa todas las propuestas presentadas.",
    "Las propuestas rechazadas por el comité de riesgo no pueden volver a presentarse."
  ]
},
'ct-49': {
  prompt: "Una ciudad argumenta que su nuevo programa de educación en reciclaje causó que las tasas de reciclaje domiciliario subieran de 30% a 45%.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más el argumento de la ciudad?",
  choices: [
    "Las tasas de reciclaje subieron marcadamente en los distritos que recibieron el programa y se mantuvieron cerca de 30% en distritos demográficamente similares que no lo recibieron.",
    "El programa fue bien recibido por las organizaciones comunitarias.",
    "El reciclaje se considera ampliamente beneficioso para el medio ambiente.",
    "La ciudad también amplió el número de puntos de entrega de reciclaje en todo su territorio."
  ]
},
'ct-50': {
  prompt: "Una empresa de software duplicó el tamaño de su equipo de ingeniería para acelerar el lanzamiento retrasado de un producto. El lanzamiento se retrasó aún más.\n\n¿Cuál de las siguientes opciones, de ser cierta, explica mejor este resultado?",
  choices: [
    "Los ingenieros existentes tuvieron que dedicar buena parte de su tiempo a capacitar y coordinar con los nuevos, y la sobrecarga de coordinación creció más rápido que la capacidad agregada.",
    "A los nuevos ingenieros se les pagaron salarios de mercado.",
    "El producto llevaba dos años en desarrollo.",
    "Las firmas competidoras también estaban contratando ingenieros."
  ]
},
'ct-51': {
  prompt: "Miembro de junta: 'Nuestra directora ejecutiva debe estar haciendo un excelente trabajo. El precio de nuestra acción ha subido 40% desde que asumió.'\n\nEl razonamiento del miembro de junta es más vulnerable a la crítica de que:",
  choices: [
    "no considera si el mercado o la industria en general subieron en una magnitud similar o mayor",
    "supone que los precios de las acciones se reportan públicamente",
    "se apoya en una muestra de una sola empresa",
    "confunde una condición necesaria con una suficiente"
  ]
},
'ct-52': {
  prompt: "Los costos de mantenimiento de un equipo de fábrica envejecido han crecido de forma sostenida en los últimos años, lo que llevó al gerente de planta a explorar si reemplazarlo sería más económico que seguir reparándolo. Actualmente, el fabricante está considerando reemplazar una máquina que cuesta USD 50.000 al año en mantenimiento por un modelo nuevo que cuesta USD 200.000 comprarlo de contado, financiado mediante un crédito bancario o el presupuesto de capital existente de la planta. Aún no se ha tomado una decisión, a la espera de más análisis.\n\n¿Responder cuál de las siguientes preguntas sería más útil para evaluar la decisión?",
  choices: [
    "Cuántos años operaría la máquina nueva y cuáles serían sus propios costos de mantenimiento",
    "Qué proveedor fabrica la máquina nueva",
    "Cuánto tiempo lleva en servicio la máquina actual",
    "Si los competidores usan máquinas similares"
  ]
},
'ct-53': {
  prompt: "Un periódico afirma que su aumento en el precio de suscripción estuvo justificado porque el número de suscriptores se mantuvo estable en el mes siguiente al aumento.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la afirmación del periódico?",
  choices: [
    "La mayoría de los suscriptores tiene contratos anuales que no podían cancelarse hasta sus fechas de renovación, repartidas a lo largo del año siguiente.",
    "La calidad de impresión del periódico mejoró al mismo tiempo.",
    "Los periódicos competidores cobran precios similares.",
    "El aumento de precio se anunció con dos meses de anticipación."
  ]
},
'ct-54': {
  prompt: "Tras años de quejas públicas por los trancones en las horas pico, una agencia metropolitana de planeación propuso una gran inversión en infraestructura para atender los problemas de tráfico de la región. Al presentar la propuesta en una audiencia pública, un funcionario del gobierno argumenta que construir una nueva autopista reducirá la congestión vehicular en el área metropolitana, señalando como justificación del costo del proyecto los ahorros de tiempo de viaje proyectados por el equipo de ingeniería de la agencia.\n\n¿El argumento supone cuál de las siguientes opciones?",
  choices: [
    "La capacidad vial adicional no atraerá suficientes conductores nuevos como para anular el alivio de la congestión.",
    "La autopista se completará según el cronograma.",
    "El uso del transporte público se mantendrá constante.",
    "La autopista se financiará con peajes."
  ]
},
'ct-55': {
  prompt: "La oficina de gestión de proyectos elaboró un informe de fin de año que revisó los resultados de cada proyecto importante completado durante el año fiscal, con el fin de identificar patrones que pudieran informar futuras prácticas de programación y presupuesto. Entre sus hallazgos, el informe indica que todo proyecto que terminó por debajo del presupuesto también terminó a tiempo. Por separado, el informe confirma que el Proyecto Delta, un proyecto de infraestructura de seis meses, terminó a tiempo.\n\n¿Qué puede concluirse correctamente sobre el Proyecto Delta?",
  choices: [
    "Nada puede concluirse sobre si terminó por debajo del presupuesto.",
    "Terminó por debajo del presupuesto.",
    "No terminó por debajo del presupuesto.",
    "Excedió su presupuesto."
  ]
},
'ct-56': {
  prompt: "Un banco afirma que su sistema de detección de fraude evitó pérdidas por USD 10 millones el año pasado.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más la afirmación?",
  choices: [
    "Las transacciones que el sistema marcó y bloqueó fueron confirmadas después por los investigadores como fraudulentas en una tasa superior al 90%.",
    "El sistema fue desarrollado por un proveedor tecnológico de prestigio.",
    "El volumen total de transacciones del banco aumentó el año pasado.",
    "Otros bancos han instalado sistemas similares."
  ]
},
'ct-57': {
  prompt: "Investigador: 'Los países con más médicos per cápita tienen tasas más altas de diagnóstico de enfermedades crónicas. Por lo tanto, los médicos podrían estar sobrediagnosticando condiciones crónicas.'\n\n¿Cuál de las siguientes opciones, de ser cierta, socava más seriamente la interpretación del investigador?",
  choices: [
    "Los países con más médicos per cápita también tienen poblaciones más envejecidas, en las que la enfermedad crónica es genuinamente más prevalente.",
    "Los médicos de algunos países se especializan más estrechamente que en otros.",
    "Las definiciones de enfermedad crónica han cambiado en la última década.",
    "Algunos pacientes consultan a varios médicos por la misma condición."
  ]
},
'ct-58': {
  prompt: "Una cadena de restaurantes reemplazó sus menús de papel por tabletas digitales, esperando que mejorara la precisión de los pedidos. La precisión de los pedidos mejoró, pero el tiempo de espera promedio de los clientes aumentó.\n\n¿Cuál de las siguientes opciones, de ser cierta, explica mejor el aumento en el tiempo de espera?",
  choices: [
    "Los clientes exploraron los menús digitales considerablemente más tiempo que los de papel antes de pedir, retrasando el inicio de la preparación de los alimentos.",
    "Las tabletas eran más costosas que imprimir menús de papel.",
    "El personal de cocina recibió la misma capacitación que antes.",
    "Los proveedores de alimentos de la cadena no cambiaron."
  ]
},
'ct-59': {
  prompt: "Tras perder a varios empleados con experiencia frente a la competencia durante el último año, el equipo directivo de una firma mediana se reunió para discutir formas de mejorar la retención. Después de un ejercicio de comparación con empresas similares de la industria, la empresa planea reducir la rotación de empleados aumentando los salarios 10% en todas las áreas, con efecto a partir del inicio del próximo trimestre. Recursos Humanos aún no ha realizado entrevistas de salida para entender las partidas con más detalle.\n\n¿Cuál de las siguientes sería más útil determinar para evaluar si el plan funcionará?",
  choices: [
    "Si los empleados que se han ido lo han hecho principalmente por la compensación",
    "Cuánto tiempo lleva la empresa en el negocio",
    "Si los salarios de la empresa se publican internamente",
    "Cuántos empleados tiene actualmente la empresa"
  ]
},
'ct-60': {
  prompt: "Un funcionario de educación argumenta que los grupos más pequeños mejoran los resultados de los estudiantes, citando que los estudiantes en grupos de menos de 20 obtienen puntajes más altos en pruebas estandarizadas que los estudiantes en grupos más grandes.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más el argumento?",
  choices: [
    "Los grupos pequeños se concentran en colegios bien financiados que además emplean docentes más experimentados y ofrecen tutorías extensas.",
    "Algunos docentes prefieren enseñar a grupos más pequeños.",
    "Las pruebas estandarizadas se aplican una vez al año.",
    "El tamaño de los grupos varía entre distritos escolares."
  ]
},
'ct-61': {
  prompt: "Un analista que preparaba un informe de concentración de clientes para el comité de riesgo señaló la dependencia de la firma en un número pequeño de cuentas grandes como una vulnerabilidad que vale la pena monitorear en adelante. La nota indica que nuestros dos clientes más grandes representan juntos el 60% de los ingresos, y confirma por separado que ningún otro cliente individual representa más del 5% de los ingresos. El analista no especificó cómo se distribuyen los ingresos restantes entre las cuentas más pequeñas.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "Se necesitan al menos ocho clientes además de los dos más grandes para dar cuenta del 40% restante de los ingresos.",
    "La empresa tiene exactamente diez clientes.",
    "El segundo cliente más grande representa exactamente el 30% de los ingresos.",
    "Perder al cliente más grande reduciría los ingresos en 30%."
  ]
},
'ct-62': {
  prompt: "Un minorista nacional revisó el desempeño de su programa de fidelización un año después del lanzamiento, comparando datos de transacciones entre miembros inscritos y no miembros en todas sus tiendas. El análisis, presentado al comité financiero, encontró que los miembros del programa gastan en promedio 40% más por visita que los no miembros. Con base únicamente en este hallazgo, el minorista concluye que su programa de fidelización es rentable, y ahora está considerando ampliar las recompensas ofrecidas a los miembros.\n\n¿Cuál de las siguientes es una suposición que requiere la conclusión?",
  choices: [
    "El gasto adicional supera el costo de las recompensas y descuentos que otorga el programa.",
    "Los miembros del programa visitan la tienda con más frecuencia que los no miembros.",
    "El programa es más generoso que los de los competidores.",
    "La mayoría de los clientes sabe que el programa existe."
  ]
},
'ct-63': {
  prompt: "Director de marketing: 'Nuestra campaña llegó a dos millones de personas, así que fue un éxito.'\n\nEl razonamiento del director es defectuoso principalmente porque:",
  choices: [
    "trata una medida de exposición como si fuera una medida del objetivo de la campaña",
    "no especifica el presupuesto total de la campaña",
    "supone que los dos millones de personas vieron el anuncio completo",
    "no compara la campaña con campañas anteriores"
  ]
},
'ct-64': {
  prompt: "Una firma de logística afirma que su nuevo software de optimización de rutas redujo 12% el consumo de combustible por entrega.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más la afirmación?",
  choices: [
    "El consumo de combustible por entrega se midió en las mismas rutas, en la misma temporada y con los mismos vehículos antes y después de introducir el software.",
    "El software se compró a un proveedor de buena reputación.",
    "Los conductores encontraron el software fácil de usar.",
    "Los precios del combustible bajaron durante el periodo de medición."
  ]
},
'ct-65': {
  prompt: "Una empresa de bienestar anuncia que el 80% de los participantes de su programa de seis semanas bajó de peso, y concluye que el programa es efectivo.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la conclusión?",
  choices: [
    "Cerca de la mitad de los participantes inscritos abandonó antes de terminar las seis semanas y fue excluida de la cifra del 80%.",
    "El programa incluye componentes dietéticos y de ejercicio.",
    "Los participantes pagaron una cuota para inscribirse en el programa.",
    "El peso se midió usando las básculas de la propia empresa."
  ]
},
'ct-66': {
  prompt: "Después de que un programa piloto revelara prácticas inconsistentes de trabajo remoto entre áreas, la empresa emitió una política formal para estandarizar la elegibilidad en toda la organización. La política establece que los empleados pueden trabajar de forma remota solo si han completado un año de servicio y su jefe lo aprueba, con ambas condiciones verificadas por el sistema de Recursos Humanos antes de otorgar el acceso remoto. También se pidió a los jefes documentar sus decisiones de aprobación para revisión trimestral, aunque la revisión en sí no afecta la elegibilidad.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta sobre un empleado que está trabajando de forma remota?",
  choices: [
    "El empleado ha completado al menos un año de servicio y cuenta con la aprobación de su jefe.",
    "El empleado lleva más de dos años en la empresa.",
    "El jefe del empleado también trabaja de forma remota.",
    "Todos los empleados con un año de servicio trabajan de forma remota."
  ]
},
'ct-67': {
  prompt: "Después de que un banco instalara cajeros automáticos adicionales por toda una ciudad, el tiempo de espera promedio en cada cajero aumentó en lugar de disminuir.\n\n¿Cuál de las siguientes opciones, de ser cierta, explica mejor este resultado?",
  choices: [
    "La mayor comodidad atrajo a muchos clientes que antes usaban la ventanilla de las sucursales o los cajeros de bancos competidores, aumentando la demanda total de cajeros más rápido de lo que creció la capacidad.",
    "Los nuevos cajeros costaron más de instalar de lo que el banco había presupuestado.",
    "Los nuevos cajeros ofrecen los mismos servicios que las máquinas antiguas.",
    "Las sucursales del banco mantuvieron sus horarios de atención existentes."
  ]
},
'ct-68': {
  prompt: "Consultor: 'Nuestra recomendación debe ser correcta: nadie en el equipo del cliente ha planteado ninguna objeción.'\n\nEl razonamiento del consultor es más vulnerable a la crítica de que:",
  choices: [
    "trata la ausencia de desacuerdo expresado como evidencia positiva de corrección",
    "generaliza a partir de una muestra no representativa de clientes",
    "supone que el equipo del cliente tiene la experticia relevante",
    "confunde una causa con su efecto"
  ]
},
'ct-69': {
  prompt: "Como parte de su estrategia climática nacional, el ministerio de energía de un país está evaluando varias opciones de política destinadas a reducir las emisiones de carbono del transporte durante la próxima década. Entre las propuestas en revisión, el ministerio está considerando si subsidiar los vehículos eléctricos para reducir las emisiones de carbono, un enfoque que varios países vecinos ya adoptaron con resultados mixtos. Se espera una decisión final antes de la revisión anual de presupuesto del ministerio.\n\n¿Responder cuál de las siguientes preguntas sería más útil para evaluar si el subsidio reducirá las emisiones?",
  choices: [
    "Qué proporción de la electricidad del país se genera con combustibles fósiles",
    "Cuántos concesionarios de automóviles operan en el país",
    "Cuál es la edad promedio del parque automotor del país",
    "Si los países vecinos ofrecen subsidios similares"
  ]
},
'ct-70': {
  prompt: "El editor de un periódico argumenta que publicar más periodismo investigativo aumentará las suscripciones digitales, ya que los artículos más leídos del periódico el año pasado fueron piezas investigativas.\n\n¿El argumento supone cuál de las siguientes opciones?",
  choices: [
    "La cantidad de lectores de un tipo de artículo corresponde a la disposición a pagar por una suscripción.",
    "El periodismo investigativo es más costoso de producir que otras coberturas.",
    "Los competidores del periódico publican poco periodismo investigativo.",
    "Los suscriptores digitales leen más artículos que los suscriptores impresos."
  ]
},
'ct-71': {
  prompt: "El director regional de ventas preparó una nota de datos que resumía el desempeño del lanzamiento del producto para el equipo directivo, de cara a la planeación de expansión del próximo año. La nota indica que en todas las regiones donde se lanzó el producto, las ventas superaron los pronósticos, un resultado atribuido en parte a una fuerte demanda inicial. También señala que en dos regiones el producto no se lanzó en absoluto, por retrasos regulatorios no relacionados que se espera resolver el próximo trimestre.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "Las ventas superaron los pronósticos en cada región donde el producto estuvo disponible.",
    "Las ventas totales de la empresa superaron los pronósticos.",
    "Las dos regiones sin lanzamiento tenían pronósticos más bajos.",
    "El producto se lanzará en las dos regiones restantes."
  ]
},
'ct-72': {
  prompt: "Un ejecutivo argumenta que la nueva oficina de planta abierta de la empresa aumentó la colaboración, citando un alza de 25% en el número de reuniones realizadas por semana.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más el argumento?",
  choices: [
    "Los empleados reportan agendar más reuniones porque la planta abierta hace imposible la conversación privada espontánea.",
    "La remodelación de planta abierta se completó antes del cronograma.",
    "A algunos empleados les gusta la distribución de planta abierta.",
    "La empresa también compró equipos nuevos de videoconferencia."
  ]
},
'ct-73': {
  prompt: "Una ciudad afirma que su nuevo sistema de sincronización de semáforos redujo los tiempos promedio de espera en las intersecciones.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más la afirmación?",
  choices: [
    "Los tiempos de espera medidos en las intersecciones que recibieron la nueva sincronización cayeron 20%, mientras que en intersecciones comparables sin ella no cambiaron.",
    "El sistema se instaló a tiempo y dentro del presupuesto.",
    "Los conductores reportan que el tráfico se siente más fluido en el centro.",
    "El volumen de tráfico en toda la ciudad disminuyó levemente durante el periodo de estudio."
  ]
},

/* The syllogisms are where a loose translation is most dangerous. Spanish has exact
   equivalents for the logical quantifiers, so they are used strictly: todos/todo el que for
   the universal, algunos for the existential (never "varios", which reads as more than the
   premise grants), ningún/nadie for the negative universal. The "cannot be determined"
   options keep that exact force rather than becoming a softer "no está claro". */
'ct-74': {
  prompt: "Algunos estudiantes tienen trabajo. Todo el que tiene trabajo tiene dinero.\n\n¿Qué conclusión se sigue necesariamente?",
  choices: [
    "Algunos estudiantes tienen dinero",
    "Todos los estudiantes tienen dinero",
    "Todo el que tiene dinero tiene trabajo",
    "Algunos estudiantes no tienen dinero"
  ]
},
'ct-75': {
  prompt: "Todos los gerentes asisten a la reunión semanal. Nadie que asiste a la reunión semanal trabaja los viernes.\n\n¿Qué conclusión se sigue necesariamente?",
  choices: [
    "Ningún gerente trabaja los viernes",
    "Todo el que trabaja los viernes es gerente",
    "Algunos gerentes trabajan los viernes",
    "Todo el que asiste a la reunión semanal es gerente"
  ]
},
'ct-76': {
  prompt: "Todas las rosas son flores. Algunas flores se marchitan rápido.\n\n¿Qué conclusión se sigue necesariamente?",
  choices: [
    "Algunas rosas se marchitan rápido",
    "Ninguna rosa se marchita rápido",
    "No puede determinarse si alguna rosa se marchita rápido",
    "Todas las flores que se marchitan rápido son rosas"
  ]
},
'ct-77': {
  prompt: "Ningún consultor es contador. Todos los contadores tienen licencia.\n\n¿Qué conclusión se sigue necesariamente?",
  choices: [
    "Algunas personas con licencia no son consultores",
    "Ningún consultor tiene licencia",
    "Todas las personas con licencia son contadores",
    "Algunos consultores tienen licencia"
  ]
},
'ct-78': {
  prompt: "Ningún socio sénior trabaja medio tiempo. Algunos consultores trabajan medio tiempo.\n\n¿Qué conclusión se sigue necesariamente?",
  choices: [
    "Algunos consultores no son socios sénior",
    "Ningún consultor es socio sénior",
    "Todos los socios sénior son consultores",
    "Algunos socios sénior son consultores"
  ]
},
'ct-79': {
  prompt: "Todos los miembros del equipo de auditoría están certificados. Rodríguez está certificado.\n\n¿Qué conclusión se sigue necesariamente?",
  choices: [
    "Rodríguez es miembro del equipo de auditoría",
    "Rodríguez no es miembro del equipo de auditoría",
    "Nada puede concluirse sobre la pertenencia de Rodríguez al equipo",
    "Todo el que está certificado está en el equipo de auditoría"
  ]
},
'ct-80': {
  prompt: "Todos los ingenieros de la firma hablan inglés. Algunas personas que hablan inglés también hablan alemán.\n\n¿Qué conclusión se sigue necesariamente?",
  choices: [
    "Algunos ingenieros hablan alemán",
    "Ningún ingeniero habla alemán",
    "No puede determinarse si algún ingeniero habla alemán",
    "Todos los hablantes de alemán son ingenieros"
  ]
},
'ct-81': {
  prompt: "Toda propuesta que pasa la revisión legal se envía al cliente. Algunas propuestas nunca se envían al cliente.\n\n¿Qué conclusión se sigue necesariamente?",
  choices: [
    "Algunas propuestas no pasan la revisión legal",
    "Todas las propuestas que se envían al cliente pasaron la revisión legal",
    "Ninguna propuesta pasa la revisión legal",
    "Algunas propuestas que pasan la revisión legal no se envían al cliente"
  ]
},
'ct-82': {
  prompt: "Cinco colegas terminaron una carrera.\n\n• Ana terminó antes que Beto.\n• Carlos terminó después que Beto.\n• Diana terminó antes que Ana.\n• Elena terminó de última.\n\n¿Quién terminó en segundo lugar?",
  choices: ["Diana", "Ana", "Beto", "Carlos"]
},
'ct-83': {
  prompt: "Cuatro edificios están en fila.\n\n• Q está inmediatamente a la derecha de P.\n• R está en el extremo izquierdo.\n• S no está junto a Q.\n\n¿Qué edificio es el segundo desde la izquierda?",
  choices: ["P", "Q", "R", "S"]
},
'ct-84': {
  prompt: "Cinco productos están ordenados por ventas.\n\n• Alpha vendió más que Beta.\n• Gamma vendió menos que Beta.\n• Delta vendió más que Alpha.\n• Epsilon vendió menos que Gamma.\n\n¿Qué producto tuvo las terceras ventas más altas?",
  choices: ["Alpha", "Beta", "Gamma", "Delta"]
},
'ct-85': {
  prompt: "Cuatro candidatos son entrevistados en cuatro días consecutivos, de lunes a jueves, uno por día.\n\n• Rojas no es entrevistado el lunes.\n• Silva es entrevistado el día siguiente a Rojas.\n• Torres es entrevistado el jueves.\n\n¿Quién es entrevistado el lunes?",
  choices: ["Rojas", "Silva", "Torres", "Uribe"]
},
'ct-86': {
  prompt: "Un edificio de oficinas tiene seis pisos.\n\n• Operaciones está en el piso 1.\n• Finanzas está en el piso 2.\n• Recursos Humanos está directamente encima de Finanzas.\n• Jurídica está en el último piso.\n• Marketing está directamente debajo de Jurídica.\n\nTI ocupa el único piso restante. ¿En qué piso está?",
  choices: ["Piso 3", "Piso 4", "Piso 5", "Piso 6"]
},
'ct-87': {
  prompt: "Cinco cajas tienen pesos diferentes.\n\n• La Caja A es más pesada que la Caja B.\n• La Caja C es más liviana que la Caja B.\n• La Caja D es más pesada que la Caja A pero más liviana que la Caja E.\n\n¿Cuál es la segunda caja más liviana?",
  choices: ["Caja A", "Caja B", "Caja C", "Caja D"]
},

/* ct-88 needs a note the English never needed. The series A, C, F, J, O advances by
   +2, +3, +4, +5, which only holds on a 26-letter alphabet: with Ñ between N and O the
   fifth term lands on Ñ, the visible pattern breaks, and a reader counting in Spanish
   cannot reach the intended answer. Stating the convention keeps the item solvable without
   touching the stored answer. ct-89 needs no such note — Z, X, V, T, R skips alternate
   letters in a range Ñ never enters, so it works identically in both alphabets. */
'ct-88': {
  prompt: "¿Qué sigue en la secuencia?\n\nA,  C,  F,  J,  O,  ?\n\n(Usa el alfabeto de 26 letras, sin Ñ.)",
  choices: ["Q", "S", "T", "U"]
},
'ct-89': {
  prompt: "¿Qué sigue en la secuencia?\n\nZ,  X,  V,  T,  ?",
  choices: ["S", "R", "Q", "P"]
},
'ct-90': {
  prompt: "Un proyecto tiene estas restricciones:\n\n• La Tarea B no puede empezar hasta que la Tarea A esté terminada.\n• La Tarea C no puede empezar hasta que la Tarea B esté terminada.\n• La Tarea D no tiene dependencias.\n\n¿Cuál de los siguientes NO es un orden válido de finalización?",
  choices: ["A, B, C, D", "D, A, B, C", "A, B, D, C", "B, A, D, C"]
},
'ct-91': {
  prompt: "Se programan tres reuniones en una semana.\n\n• La auditoría es el miércoles.\n• La reunión con el cliente es dos días antes de la auditoría.\n• La revisión del informe es el día después de la auditoría.\n\n¿Qué día es la reunión con el cliente?",
  choices: ["Lunes", "Martes", "Jueves", "Viernes"]
},
'ct-92': {
  prompt: "Pregunta: ¿Debería una ciudad introducir un cargo por congestión para conducir en el centro?\n\n¿Cuál es el argumento MÁS FUERTE en contra?",
  choices: [
    "A los conductores les disgusta pagar cargos adicionales",
    "La evidencia de ciudades comparables muestra que el cargo golpea más fuerte a los trabajadores de bajos ingresos, que no pueden cambiar su horario ni pasarse al transporte público",
    "El esquema requeriría nueva señalización en toda el área del centro",
    "El cargo por congestión se introdujo por primera vez en Singapur"
  ]
},
'ct-93': {
  prompt: "Pregunta: ¿Debería la empresa exigir que todos los empleados vuelvan a la oficina cinco días a la semana?\n\n¿Cuál es el argumento MÁS FUERTE en contra?",
  choices: [
    "Algunos empleados han gastado dinero decorando sus oficinas en casa",
    "Desplazarse es desagradable con mal clima",
    "Los propios datos de la empresa muestran que la producción por empleado subió 8% cuando empezó el trabajo remoto y desde entonces no ha bajado",
    "Varias otras empresas han optado por seguir en remoto"
  ]
},
'ct-94': {
  prompt: "Pregunta: ¿Debería un hospital adoptar una nueva técnica quirúrgica?\n\n¿Cuál es el argumento MÁS FUERTE a favor?",
  choices: [
    "La técnica fue desarrollada en una universidad prestigiosa",
    "Varios cirujanos del personal tienen curiosidad por probarla",
    "El proveedor del equipo está ofreciendo un descuento este año",
    "En ensayos aleatorizados la técnica redujo un tercio las complicaciones graves sin aumentar el tiempo de operación"
  ]
},
'ct-95': {
  prompt: "Pregunta: ¿Debería un colegio prohibir los teléfonos móviles durante las clases?\n\n¿Cuál es el argumento MÁS FUERTE a favor?",
  choices: [
    "A los docentes les molestan los teléfonos",
    "Ensayos en colegios comparables encontraron que retirar los teléfonos elevó los puntajes de las pruebas, con las mayores ganancias entre los estudiantes de menor rendimiento",
    "Los teléfonos móviles no existían cuando se fundó el colegio",
    "Los teléfonos son costosos y podrían ser robados en el colegio"
  ]
},
'ct-96': {
  prompt: "Pregunta: ¿Debería la firma abrir una oficina en un país donde actualmente no tiene presencia?\n\n¿Cuál es el argumento MÁS FUERTE en contra?",
  choices: [
    "A algunos empleados no les gustaría reubicarse",
    "La nueva oficina tendría que agregarse al sistema de calendario de la empresa",
    "La firma no tiene un socio con relaciones locales de clientes, y expansiones comparables sin presencia local han fracasado de forma consistente",
    "El país está a un vuelo largo de la sede"
  ]
},
'ct-97': {
  prompt: "Pregunta: ¿Debería la matrícula universitaria ser gratuita para todos los estudiantes?\n\nArgumento: 'No, porque los estudiantes terminarían con más tiempo libre del que tienen actualmente.'\n\n¿Cómo debería juzgarse este argumento?",
  choices: [
    "Fuerte, porque cómo usan su tiempo los estudiantes es una consideración importante de política",
    "Débil, porque la consecuencia que plantea es trivial y no incide en si la educación debe financiarse con fondos públicos",
    "Fuerte, porque identifica una consecuencia genuina de la política",
    "Débil, porque la afirmación es fácticamente falsa"
  ]
},
'ct-98': {
  prompt: "Pregunta: ¿Debería una empresa invertir USD 2 millones en automatizar su bodega?\n\nArgumento: 'Sí, porque la automatización recortaría los costos operativos anuales en unos USD 700.000, recuperando la inversión en menos de tres años.'\n\n¿Cómo debería juzgarse este argumento?",
  choices: [
    "Débil, porque las estimaciones no son certezas",
    "Débil, porque ignora el efecto sobre el personal de la bodega",
    "Fuerte, porque cuantifica un beneficio directamente relevante en una escala que determinaría la decisión",
    "Fuerte, porque reducir costos siempre es deseable"
  ]
},
'ct-99': {
  prompt: "Pregunta: ¿Debería la firma reemplazar las evaluaciones anuales de desempeño por retroalimentación continua?\n\n¿Cuál es el argumento MÁS DÉBIL a favor?",
  choices: [
    "Se ha demostrado que la retroalimentación entregada cerca del hecho cambia el comportamiento sustancialmente más que la retroalimentación retrasada meses",
    "La retroalimentación continua es actualmente un enfoque popular entre los grandes empleadores",
    "Las evaluaciones anuales concentran un año de juicio en una sola conversación, algo que la investigación vincula con el sesgo de recencia",
    "Los jefes reportan que no logran recordar incidentes específicos del inicio del año de evaluación"
  ]
},
'ct-100': {
  prompt: "Una empresa de software reemplazó su planta abierta por escritorios de altura ajustable después de que los empleados se quejaran de dolor de espalda. La remodelación cubrió los 240 escritorios del piso de ingeniería y costó USD 1,9 millones. En los dos trimestres siguientes, el número promedio de puntos de historia completados por ingeniero subió 18%, una ganancia que la empresa no había registrado en ningún semestre anterior. El jefe de operaciones del lugar de trabajo presentó estas cifras a la junta y argumentó que la inversión en escritorios debería extenderse a las otras tres oficinas de la empresa, ya que los escritorios de pie evidentemente hacen más productivos a los ingenieros.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más el argumento?",
  choices: [
    "Los escritorios costaron cerca de USD 900 cada uno, más que las sillas que reemplazaron.",
    "En esos mismos dos trimestres la empresa adoptó un nuevo sistema de gestión de proyectos que dividía las tareas grandes en historias más pequeñas.",
    "Una minoría de ingenieros dijo que rara vez subía su escritorio por encima de la altura de estar sentado.",
    "Las quejas por dolor de espalda no bajaron tanto como el equipo de operaciones esperaba."
  ]
},
'ct-101': {
  prompt: "Un minorista en línea analizó dos años de datos de transacciones que cubrían poco más de 12.000 publicaciones y encontró que los productos con más de cincuenta reseñas de clientes venden, en promedio, cuatro veces más unidades al mes que los productos con menos de diez reseñas. La relación se sostuvo en todas las categorías que el equipo examinó, desde utensilios de cocina hasta electrónica de consumo. El director de marketing ha propuesto pagar a los clientes un pequeño crédito por dejar reseñas en productos de baja rotación, con el argumento de que acumular reseñas elevará las ventas de esos productos.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la propuesta?",
  choices: [
    "Las reseñas se acumulan en un producto principalmente porque este ya vende en alto volumen.",
    "Algunos clientes dicen que solo leen las dos o tres reseñas más recientes.",
    "El crédito le costaría al minorista unos cuarenta centavos por reseña recolectada.",
    "Minoristas competidores han corrido esquemas similares de incentivos por reseñas."
  ]
},
'ct-102': {
  prompt: "Un grupo manufacturero introdujo un curso obligatorio de seguridad de ocho horas en su planta Riverside, dictado a los 600 empleados de producción durante un periodo de tres meses. Las lesiones registrables en Riverside cayeron de 42 en el año anterior al curso a 19 en el año posterior, la cifra anual más baja que la planta haya registrado. El oficial de seguridad del grupo ha recomendado desplegar el curso en las once plantas a un costo combinado de USD 2,3 millones, argumentando que las cifras de Riverside muestran que la capacitación reduce aproximadamente a la mitad las tasas de lesiones.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la recomendación?",
  choices: [
    "El curso fue dictado por un proveedor externo a un costo significativo.",
    "Riverside opera equipos más antiguos que la mayoría de las otras plantas del grupo.",
    "Riverside además pasó de dos turnos a uno durante ese mismo año, recortando 45% las horas trabajadas.",
    "Algunos empleados de Riverside dijeron que el curso cubría riesgos que nunca enfrentan."
  ]
},
'ct-103': {
  prompt: "Una firma consultora notó que los consultores que se inscribieron en su esquema voluntario de trabajo remoto renunciaron a menos de la mitad de la tasa de los consultores que permanecieron en la oficina. El patrón se ha sostenido por tres años consecutivos y en las cuatro áreas de práctica de la firma. La directora de personas ha argumentado que hacer universal el trabajo remoto recortaría la rotación general de la firma, que hoy está muy por encima del referente de la industria y cuesta unos USD 4 millones al año en contratación de reemplazos.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más el argumento de la directora de personas?",
  choices: [
    "El esquema remoto estaba abierto solo a consultores que habían pasado su evaluación de tercer año y estaban en la vía a socio.",
    "Algunos consultores basados en oficina dijeron que preferían el aprendizaje informal que viene de sentarse cerca de los colegas.",
    "Los consultores remotos facturan levemente menos horas al mes que los basados en oficina.",
    "El referente de rotación de la industria ha subido en los últimos dos años."
  ]
},
'ct-104': {
  prompt: "Una cadena de supermercados lanzó hace dieciocho meses una tarjeta de fidelización por puntos y desde entonces ha inscrito a poco menos de la mitad de sus clientes habituales. El análisis de los datos de caja muestra que los tarjetahabientes gastan USD 87 al mes en la cadena frente a USD 34 de quienes no tienen tarjeta, una brecha que se ha mantenido estable desde el lanzamiento. El director de marketing quiere gastar USD 2 millones en convertir a los clientes restantes, proyectando que cada conversión sumará unos USD 50 de gasto mensual con base en esta brecha.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la proyección?",
  choices: [
    "La tarjeta se ofrece gratis en cada caja y toma cerca de un minuto inscribirse.",
    "Los compradores que ya hacen la mayor parte de su mercado semanal en la cadena son mucho más propensos a tomarse la molestia de inscribirse.",
    "Un número pequeño de tarjetahabientes nunca redime los puntos que acumula.",
    "El principal competidor de la cadena también opera un esquema de fidelización."
  ]
},
'ct-105': {
  prompt: "Un proveedor de software B2B desplegó en enero un nuevo sistema CRM a su equipo comercial, reemplazando un conjunto de hojas de cálculo que cada representante mantenía por su cuenta. Durante el año siguiente, la tasa de cierre del equipo sobre oportunidades calificadas subió de 22% a 31%, y el tamaño promedio de negocio también subió levemente. El líder de operaciones comerciales ha escrito un caso de estudio interno atribuyendo la mejora al CRM y lo está usando para justificar otros USD 1,4 millones de gasto en herramientas.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la conclusión del caso de estudio?",
  choices: [
    "El CRM exigía que cada representante registrara unos veinte minutos de datos al día.",
    "En enero la empresa además endureció su definición de oportunidad calificada, excluyendo los negocios más pequeños y menos probables.",
    "Dos representantes dijeron que encontraban más fácil de navegar el sistema anterior.",
    "La tasa de cierre subió más marcadamente en el cuarto trimestre."
  ]
},
'ct-106': {
  prompt: "Un banco encuestó al personal de su sede antes y después de una remodelación de USD 3 millones del comedor y las áreas sociales, logrando tasas de respuesta superiores al 70% en ambas ocasiones. La satisfacción reportada con el lugar de trabajo subió de 54% a 71%. El director de instalaciones ha recomendado la misma remodelación en seis oficinas regionales, a un costo combinado de USD 16 millones, argumentando que el resultado de la sede muestra que la inversión eleva de forma confiable la satisfacción en unos diecisiete puntos.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la recomendación?",
  choices: [
    "La segunda encuesta se distribuyó una semana después de que el personal se enterara de que los bonos anuales serían 20% más altos de lo pronosticado.",
    "La remodelación tomó cuatro meses y causó algo de disrupción mientras estuvo en curso.",
    "Las oficinas regionales tienen comedores más pequeños que la sede.",
    "La satisfacción con la remuneración se midió por separado y no está incluida en la cifra de 71%."
  ]
},
'ct-107': {
  prompt: "Un servicio de streaming recortó el precio de su plan estándar de USD 12 a USD 9 en un mercado nacional, donde era el tercer proveedor más grande por número de suscriptores. Durante los seis meses siguientes, los ingresos totales por suscripción en ese mercado subieron 11% y las cancelaciones cayeron levemente. El equipo de precios ha propuesto el mismo recorte en los catorce mercados en que opera el servicio, argumentando que la ganancia en volumen por un precio menor compensa con creces el margen más pequeño por suscriptor.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la propuesta?",
  choices: [
    "El mercado de prueba fue el único en el que un competidor importante se retiró durante esos mismos seis meses.",
    "Algunos suscriptores del plan estándar rara vez ven más de unas pocas horas al mes.",
    "El presupuesto de contenido del servicio se fija anualmente y no cambiaría con el precio.",
    "Los contactos a servicio al cliente cayeron levemente tras el cambio de precio."
  ]
},
'ct-108': {
  prompt: "Un fabricante de automóviles gastó USD 40 millones en una campaña nacional de televisión que corrió de marzo a mayo, su mayor compromiso individual de medios en una década. Un estudio de seguimiento realizado en junio encontró que el reconocimiento espontáneo de marca se situó en 61%, frente a 44% en un estudio comparable realizado en junio del año anterior. Ambos estudios usaron la misma agencia, el mismo tamaño de muestra y la misma redacción de preguntas. El equipo de marca ha concluido que la campaña produjo un alza de diecisiete puntos y está solicitando un presupuesto similar para el próximo año.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la conclusión del equipo de marca?",
  choices: [
    "La campaña corrió solo en televisión, sin componente digital.",
    "En abril el fabricante fue objeto de amplia cobertura noticiosa nacional tras un llamado a revisión de producto muy publicitado.",
    "El estudio de junio encuestó a levemente más participantes que el del año anterior.",
    "El reconocimiento entre participantes menores de treinta subió menos que el promedio general."
  ]
},
'ct-109': {
  prompt: "Un distribuidor cambió su principal proveedor de transporte de carga en marzo, moviendo cerca de dos tercios de su volumen de despachos al nuevo transportador bajo un contrato a tres años. El tiempo promedio de entrega en toda su red cayó de 4,1 días a 3,2 días durante el trimestre siguiente, y las quejas de clientes por llegadas tardías bajaron un tercio. El gerente de logística ha recomendado mover al mismo proveedor los corredores regionales restantes, presentando la cifra de red como evidencia de que el nuevo transportador es aproximadamente un día más rápido.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la recomendación?",
  choices: [
    "El nuevo proveedor cobra cerca de 6% más por despacho que el anterior.",
    "En febrero el distribuidor abrió dos nuevas bodegas regionales, acortando la distancia a la mayoría de los clientes.",
    "El proveedor anterior había tenido el contrato durante once años.",
    "Un puñado de despachos con el nuevo proveedor llegó más tarde de lo prometido."
  ]
},
'ct-110': {
  prompt: "Una aseguradora introdujo un programa voluntario de bienestar que ofrecía subsidios de gimnasio y tamizaje anual de salud, al que cerca de un tercio de sus 2.400 empleados eligió unirse el primer año. Los empleados que se unieron tomaron en promedio 3,1 días de incapacidad el año pasado frente a 6,8 de quienes no lo hicieron, una diferencia que se sostuvo en todas las áreas. La directora de Recursos Humanos ha propuesto hacer obligatoria la participación, proyectando ahorros de unos USD 1,1 millones al año en cobertura de ausencias con base en esa diferencia.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la proyección?",
  choices: [
    "El programa cuesta unos USD 340 por empleado participante al año.",
    "Los empleados que manejan condiciones crónicas de salud eran mucho menos propensos a inscribirse en un programa basado en gimnasio.",
    "El componente de tamizaje identificó varias condiciones no diagnosticadas previamente.",
    "Los días de incapacidad en toda la industria cayeron levemente el año pasado."
  ]
},
'ct-111': {
  prompt: "Una cadena de artículos para el hogar rediseñó la distribución de una tienda, moviendo los accesorios de alto margen al pasillo principal y reubicando los utensilios de cocina de volumen al fondo. El trabajo tomó dos semanas y costó USD 65.000. Durante los tres meses siguientes el valor promedio de la canasta de la tienda subió de USD 41 a USD 53, mientras que el volumen de transacciones se mantuvo prácticamente estable. El equipo de operaciones minoristas ha presupuestado USD 6 millones para rediseñar las noventa tiendas, usando la ganancia de doce dólares de la tienda piloto como base del cálculo de retorno.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más el cálculo de retorno?",
  choices: [
    "La tienda piloto es la única de las noventa ubicada dentro de un centro comercial que abrió un nuevo local ancla durante la prueba.",
    "El rediseño tomó ocho días, durante los cuales la tienda piloto operó a capacidad reducida.",
    "A algunos empleados les pareció más difícil reabastecer con la nueva distribución.",
    "Los accesorios tienen mayor margen que las líneas de muebles de la cadena."
  ]
},
'ct-112': {
  prompt: "Un centro de llamadas reemplazó su salario fijo por hora con un bono atado al número de llamadas que cada agente registra como resueltas por turno. El esquema aplicó a los 180 agentes de la sede y se introdujo sin ningún cambio en los niveles de dotación ni en los horarios de atención. El promedio de llamadas resueltas por agente subió 24% en el trimestre siguiente. El director de operaciones ha recomendado extender el esquema a los otros dos centros de la empresa, argumentando que el bono eleva demostrablemente la producción de los agentes.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más la recomendación?",
  choices: [
    "El bono agrega cerca de 9% al pago del agente promedio.",
    "Bajo el nuevo esquema los agentes marcan una llamada como resuelta al final de la conversación, y las llamadas repetidas por el mismo asunto subieron un tercio.",
    "Algunos agentes dijeron que el esquema hizo que los turnos se sintieran más presionados.",
    "La planta de personal del centro no cambió durante el trimestre."
  ]
},
'ct-113': {
  prompt: "Una firma de tecnología introdujo una herramienta automatizada de filtrado de hojas de vida para cargos de ingeniería de nivel inicial y junior, donde hoy filtra unas 9.000 postulaciones al año hasta una lista corta para entrevista. Entre los candidatos contratados mediante la herramienta, el 84% recibió una calificación alta en su primera evaluación anual, frente a 66% de los candidatos contratados por el proceso manual anterior. El líder de talento ha argumentado que la herramienta identifica candidatos más fuertes y debería extenderse a la contratación sénior.\n\n¿Cuál de las siguientes opciones, de ser cierta, debilita más el argumento?",
  choices: [
    "La herramienta se usó solo para cargos de nivel inicial, donde las calificaciones del primer año son en general más altas que entre contrataciones con experiencia.",
    "La herramienta toma cerca de cuatro segundos en filtrar cada postulación.",
    "Un número pequeño de jefes dijo que no confiaba en el filtrado automatizado.",
    "La firma recibe varios miles de postulaciones por cada cohorte de nivel inicial."
  ]
},
'ct-114': {
  prompt: "Un grupo hotelero está considerando reemplazar los artículos de tocador de un solo uso por dispensadores recargables en sus 60 propiedades, que van desde hoteles urbanos económicos hasta dos resorts de cinco estrellas. El equipo de sostenibilidad estima que el cambio ahorraría USD 1,8 millones al año en consumibles y retiraría unas 14 toneladas de plástico del flujo de residuos del grupo. El director financiero no está convencido, y señala que los puntajes de satisfacción de huéspedes son el principal activo competitivo del grupo y que algunos huéspedes podrían leer el cambio como un desmejoramiento.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más el caso a favor del cambio?",
  choices: [
    "Los dispensadores recargables se han vuelto comunes en el segmento de mercado del grupo.",
    "En una prueba de doce meses en ocho propiedades, los puntajes de satisfacción se mantuvieron estadísticamente sin cambios mientras el gasto en consumibles cayó según lo proyectado.",
    "El grupo se ha comprometido públicamente a reducir los residuos plásticos.",
    "Los artículos de tocador de un solo uso los suministra un único proveedor cuyo contrato vence el próximo año."
  ]
},
'ct-115': {
  prompt: "Una firma de arquitectura está debatiendo pasar a una semana de cuatro días sin reducción de salario. La socia directora argumenta que la producción facturable se mantendría, porque una revisión del registro de tiempos sugiere que la mayor parte del quinto día se consume en coordinación interna que no genera honorarios. También espera que el cambio ayude con la contratación en un mercado apretado. Varios arquitectos sénior son escépticos, y señalan que las fechas límite de los clientes no se acortarán en consecuencia y que la firma ya opera cerca de su capacidad.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más el argumento de la socia directora?",
  choices: [
    "El personal de la firma ha dicho que recibiría con agrado una semana de cuatro días.",
    "Los datos de registro de tiempos muestran que el 31% de las horas de los viernes de los últimos dos años se registraron en coordinación interna que podría consolidarse en otros días.",
    "Varias firmas competidoras han anunciado pruebas de semana de cuatro días.",
    "La tasa de utilización de la firma se mide mensualmente y no semanalmente."
  ]
},
'ct-116': {
  prompt: "Una firma de servicios profesionales opera un esquema de mentoría que empareja a personal junior con socios de forma voluntaria; cerca de una cuarta parte de los juniors elegibles participa actualmente. Los mentoreados son promovidos a gerente 40% más rápido que los no mentoreados, y la brecha ha sido consistente durante los cuatro años del esquema. El jefe de talento quiere expandir el esquema a toda la firma a costa de algo de tiempo de los socios, pero el comité ejecutivo sospecha que el patrón refleja que los socios eligen mentorear a las personas ya marcadas como de alto desempeño.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más la posición del jefe de talento?",
  choices: [
    "Los mentoreados reportan mayor satisfacción laboral que los no mentoreados.",
    "Los mentores se asignan por sorteo entre todos los juniors que se postulan, y las calificaciones de desempeño previas de los postulantes son indistinguibles de las de quienes no se postulan.",
    "El esquema le cuesta poco a la firma más allá del tiempo de los socios.",
    "Varios mentoreados han dicho que el esquema les ayudó a entender los criterios de promoción."
  ]
},
'ct-117': {
  prompt: "Un exportador de cerámica está considerando un inserto moldeado más grueso para su empaque. El gerente de operaciones proyecta que la rotura en tránsito, hoy 3,4% de las unidades despachadas, caería por debajo de 1%, justificando cómodamente los USD 0,35 adicionales por unidad en costo de empaque sobre los cerca de dos millones de unidades despachadas cada año. Los artículos reemplazados se envían actualmente sin cargo, y el exportador además absorbe el flete de devolución. El equipo de finanzas señala que nadie ha establecido dónde ocurren realmente las roturas.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más la proyección del gerente de operaciones?",
  choices: [
    "El nuevo inserto está hecho de material reciclado.",
    "Los registros de inspección de daños muestran que el 92% de las roturas involucra fracturas por impacto del tipo que el inserto está diseñado para absorber.",
    "El inserto ha sido usado con éxito por un fabricante de cristalería.",
    "El principal competidor del exportador usa un inserto similar."
  ]
},
'ct-118': {
  prompt: "Una empresa de servicios públicos planea desplegar un chatbot para atender consultas rutinarias de facturación, que representan poco más de la mitad de las cerca de 900.000 llamadas que su centro de contacto recibe cada año. El ahorro proyectado es de USD 2,4 millones anuales, neto de costos de licencia y construcción. El director de clientes objeta que si el chatbot atiende mal las consultas simples, los clientes escalarán a un agente de todos modos y la empresa pagará por ambos canales.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más el caso a favor del despliegue?",
  choices: [
    "El chatbot puede desplegarse en menos de tres meses.",
    "En un piloto de seis meses sobre el 15% del tráfico de facturación, el 78% de las conversaciones con el chatbot cerró sin escalar y el costo total de atención por consulta cayó un tercio.",
    "Las consultas de facturación son la categoría individual más grande del volumen del centro de contacto.",
    "El chatbot usa la misma base de conocimiento que los agentes humanos."
  ]
},
'ct-119': {
  prompt: "Una marca de cosméticos está considerando cobrar precios distintos en distintas regiones en lugar de un precio nacional único, fijando el precio de cada región según la disposición local a pagar. El equipo de ingresos estima que el cambio elevaría el margen combinado 5% sin ningún aumento en gasto de marketing. El jefe jurídico teme que los clientes que descubran las diferencias reaccionen mal, y que el daño reputacional resultante pese más que la ganancia.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más el caso del equipo de ingresos?",
  choices: [
    "El precio regional es práctica estándar en la categoría de la marca.",
    "La marca aplicó precios regionales en dos regiones durante dieciocho meses; el conocimiento de la diferencia alcanzó al 4% de los clientes y las tasas de recompra no cambiaron.",
    "Los márgenes de la marca están actualmente por debajo del promedio de la categoría.",
    "El precio regional se implementaría mediante el sistema de punto de venta existente."
  ]
},
'ct-120': {
  prompt: "Un negocio de distribución está evaluando una inversión de USD 9 millones en robótica de bodega para su centro de distribución más grande, con un retorno proyectado en menos de cuatro años por reducción de mano de obra de alistamiento. El proveedor ha garantizado por escrito las tasas de rendimiento, y la sede tiene el espacio de piso y la capacidad eléctrica requeridos. La directora de operaciones es cautelosa: la bodega maneja un rango inusualmente amplio de formas de artículos, y ha visto proyectos de robótica en otros lugares estancarse exactamente por eso.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más el caso a favor de la inversión?",
  choices: [
    "El proveedor de robótica ha instalado sistemas similares en veinte bodegas.",
    "Una prueba de cuatro meses en sitio corrió el sistema propuesto contra el rango completo de artículos del propio negocio y alcanzó la tasa de alistamiento proyectada en el 97% de los SKU.",
    "La mano de obra de alistamiento es el mayor costo individual de bodega del negocio.",
    "La inversión podría financiarse a una tasa favorable."
  ]
},
'ct-121': {
  prompt: "Una empresa de software está rediseñando la inducción de nuevos ingenieros, con el objetivo de recortar el tiempo hasta el primer despliegue de código independiente de once semanas a seis. La empresa contrata unos noventa ingenieros al año, y el director de ingeniería argumenta que el rediseño vale unos USD 700.000 anuales en tiempo productivo recuperado, antes de contar cualquier efecto sobre la retención. El director financiero responde que un arranque más rápido podría simplemente significar que los ingenieros despliegan antes y rompen más.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más el caso del director de ingeniería?",
  choices: [
    "El rediseño lo construiría el equipo existente de experiencia de desarrollo.",
    "Dos equipos pilotearon la inducción rediseñada; el tiempo mediano hasta el primer despliegue cayó a siete semanas y su tasa de defectos posdespliegue igualó el promedio de la empresa.",
    "Los nuevos ingenieros reportan actualmente frustración con la duración de la inducción.",
    "La cifra de once semanas es más larga que en empresas comparables."
  ]
},
'ct-122': {
  prompt: "Una planta embotelladora está considerando pasar de reparación por falla a mantenimiento preventivo programado en sus cuatro líneas de llenado. El gerente de planta proyecta que el tiempo de inactividad no planeado, que hoy cuesta unos USD 3 millones al año en producción perdida y reparaciones urgentes, caería a la mitad en dieciocho meses. El director financiero señala que el mantenimiento preventivo implica sacar de operación máquinas que funcionan, lo cual es en sí mismo tiempo de inactividad.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más la proyección del gerente de planta?",
  choices: [
    "El mantenimiento preventivo es el estándar de la industria para líneas de embotellado.",
    "Plantas hermanas que hicieron el mismo cambio recortaron 55% el tiempo de inactividad no planeado, mientras que el mantenimiento planeado devolvió menos de una quinta parte de las horas ahorradas.",
    "El equipo de mantenimiento de la planta es experimentado y bien valorado.",
    "Los repuestos para las máquinas de la planta son de fácil consecución."
  ]
},
'ct-123': {
  prompt: "Una firma de logística que atiende clientes europeos está considerando financiar capacitación en idioma de negocios para sus cuarenta gerentes de cuenta, a unos USD 4.000 cada uno en un programa de doce meses. El director comercial argumenta que mejorará la retención de clientes, hoy en 81% y unos cinco puntos por debajo de su competidor más cercano. La junta no está convencida, y señala que la mayoría de los clientes ya realiza sus reuniones en inglés y que la retención suele estar impulsada por la confiabilidad del servicio.\n\n¿Cuál de las siguientes opciones, de ser cierta, fortalece más el caso del director comercial?",
  choices: [
    "El proveedor de capacitación es bien valorado y tiene horarios flexibles.",
    "Las entrevistas de salida con clientes que se fueron durante tres años citan la dificultad para comunicarse con su gerente de cuenta como factor contribuyente en el 38% de los casos.",
    "Los gerentes de cuenta han expresado interés en la capacitación en idiomas.",
    "Varios competidores ofrecen capacitación en idiomas a su personal."
  ]
},
'ct-124': {
  prompt: "Un banco regional revisó su expediente de crédito tras una visita de supervisión. Todo crédito aprobado por el comité de crédito en los últimos dos años estuvo respaldado por un avalúo independiente. Algunos créditos del mismo periodo fueron aprobados bajo la facultad delegada del gerente de sucursal y no por el comité. Todos los créditos superiores a USD 500.000, sin excepción, pasaron al comité de crédito.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta con base en estos enunciados?",
  choices: [
    "Todo crédito superior a USD 500.000 aprobado en los últimos dos años estuvo respaldado por un avalúo independiente.",
    "Ningún crédito aprobado bajo facultad delegada estuvo respaldado por un avalúo independiente.",
    "La mayoría de los créditos de los últimos dos años fue aprobada por el comité de crédito.",
    "Los créditos inferiores a USD 500.000 nunca se enviaron al comité de crédito."
  ]
},
'ct-125': {
  prompt: "Un fabricante lleva registros de su base de proveedores. Todo proveedor que ha tenido certificación ISO por más de cinco años ha pasado sus últimas tres auditorías de calidad. Algunos proveedores que pasaron sus últimas tres auditorías tienen su base fuera de la Unión Europea. Ningún proveedor con base fuera de la Unión Europea ha tenido certificación ISO por más de cinco años.\n\n¿Cuál de las siguientes opciones puede inferirse correctamente?",
  choices: [
    "Todo proveedor que pasó sus últimas tres auditorías tiene certificación ISO.",
    "Algunos proveedores que pasaron sus últimas tres auditorías no han tenido certificación ISO por más de cinco años.",
    "Ningún proveedor fuera de la Unión Europea ha pasado una auditoría de calidad.",
    "La mayoría de los proveedores con certificación antigua tiene su base en la Unión Europea."
  ]
},
'ct-126': {
  prompt: "La política de despacho de un distribuidor es fija. Todo pedido enviado desde la bodega central se rastrea de extremo a extremo, y todo pedido rastreado de extremo a extremo genera una confirmación de entrega en la cuenta del cliente. Durante una revisión de servicio el equipo encontró un pedido para el cual nunca se generó una confirmación de entrega.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta sobre ese pedido?",
  choices: [
    "No fue enviado desde la bodega central.",
    "Nunca fue rastreado de extremo a extremo, pero aun así pudo venir de la bodega central.",
    "Fue enviado desde un depósito regional.",
    "Nunca fue entregado al cliente."
  ]
},
'ct-127': {
  prompt: "Una aerolínea revisó sus datos de puntualidad. Todo vuelo que salió tarde el trimestre pasado fue operado por una aeronave que había volado al menos tres tramos ese día. Algunos vuelos operados por tales aeronaves llegaron dentro de los quince minutos de lo programado. Ningún vuelo que llegó dentro de los quince minutos de lo programado fue objeto de una reclamación de compensación de pasajeros.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "Todo vuelo operado por una aeronave en su cuarto tramo salió tarde.",
    "Algunos vuelos operados por aeronaves en su tercer tramo o posterior no fueron objeto de una reclamación de compensación.",
    "Ningún vuelo que salió tarde llegó dentro de los quince minutos de lo programado.",
    "Las reclamaciones de compensación surgieron solo en vuelos que salieron tarde."
  ]
},
'ct-128': {
  prompt: "El manual de crédito de un banco establece que una solicitud se escala al comité de crédito solo si supera los EUR 2 millones. En el último trimestre, 40 solicitudes superaron los EUR 2 millones y 12 solicitudes en total fueron escaladas al comité.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "Toda solicitud escalada al comité superó los EUR 2 millones.",
    "Toda solicitud que superó los EUR 2 millones fue escalada al comité.",
    "Veintiocho solicitudes fueron rechazadas por el comité.",
    "Ninguna solicitud por debajo de EUR 2 millones fue rechazada."
  ]
},
'ct-129': {
  prompt: "Un minorista analizó su parque de 200 tiendas. El sesenta por ciento de las tiendas superó su meta anual de ventas. El cuarenta y cinco por ciento de las tiendas está ubicado en centros comerciales, y toda tienda ubicada en un centro comercial superó su meta.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "Al menos treinta tiendas que superaron su meta no están en centros comerciales.",
    "Toda tienda que superó su meta está en un centro comercial.",
    "Exactamente la mitad de las tiendas fuera de centros comerciales superó su meta.",
    "La mayoría de las tiendas que no alcanzaron su meta está en centros comerciales."
  ]
},
'ct-130': {
  prompt: "Todo asunto abierto por la firma se asigna exactamente a uno de dos equipos, litigio o asesoría, y nunca a ambos. Ningún asunto manejado por el equipo de asesoría se factura con honorarios de éxito. El informe financiero muestra que algunos asuntos abiertos el año pasado se facturaron con honorarios de éxito.\n\n¿Cuál de las siguientes opciones puede inferirse correctamente?",
  choices: [
    "Algunos asuntos abiertos el año pasado fueron manejados por el equipo de litigio.",
    "Todo asunto manejado por el equipo de litigio se factura con honorarios de éxito.",
    "El equipo de litigio abrió más asuntos que el de asesoría.",
    "Ningún asunto de asesoría fue rentable."
  ]
},
'ct-131': {
  prompt: "Las reglas de compras de una universidad son absolutas: a ningún proveedor de la lista restringida se le puede emitir una nueva orden de compra, y todo proveedor que reprueba el filtro de ética queda en la lista restringida. El sistema financiero muestra que la semana pasada se emitió una nueva orden de compra a Halden Instruments.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "Halden Instruments no reprobó el filtro de ética.",
    "Halden Instruments nunca ha sido evaluada frente al filtro de ética.",
    "Halden Instruments aprobó el filtro de ética con la calificación más alta posible.",
    "La lista restringida no contiene proveedor alguno."
  ]
},
'ct-132': {
  prompt: "Una naviera comparó los márgenes operativos de cuatro rutas el año pasado. La ruta del Báltico obtuvo un margen mayor que la ruta del Adriático. La ruta del Egeo obtuvo un margen menor que la ruta del Adriático. La ruta del Mar del Norte obtuvo un margen mayor que la ruta del Báltico. Ninguna de las rutas obtuvo el mismo margen.\n\n¿Cuál de las siguientes opciones puede inferirse correctamente?",
  choices: [
    "La ruta del Egeo obtuvo el margen más bajo de las cuatro.",
    "La ruta del Adriático obtuvo el segundo margen más alto.",
    "La ruta del Báltico obtuvo un margen mayor que la del Mar del Norte.",
    "Las rutas del Mar del Norte y del Báltico juntas obtuvieron más de la mitad del margen total."
  ]
},
'ct-133': {
  prompt: "Una empresa de energía revisó sus contratos. Todo contrato firmado antes de la reforma tarifaria incluye una cláusula de indexación por inflación. Algunos contratos con cláusula de indexación son con clientes del sector público. Ningún cliente del sector público aceptó un contrato de menos de cinco años.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "Algunos contratos con cláusula de indexación duran cinco años o más.",
    "Todo contrato con cláusula de indexación se firmó antes de la reforma.",
    "Ningún contrato firmado después de la reforma es con un cliente del sector público.",
    "Todos los contratos a cinco años son con clientes del sector público."
  ]
},
'ct-134': {
  prompt: "Un productor de alimentos revisó las 400 líneas de producto que tiene. El setenta por ciento de las líneas lleva etiqueta de azúcar reducida, y el sesenta por ciento se vende a través de minoristas de descuento.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "Al menos 120 líneas llevan etiqueta de azúcar reducida y además se venden a través de minoristas de descuento.",
    "Exactamente 120 líneas llevan la etiqueta y se venden a través de minoristas de descuento.",
    "Al menos 120 líneas llevan la etiqueta pero no se venden a través de minoristas de descuento.",
    "El treinta por ciento de las líneas de minoristas de descuento no lleva etiqueta de azúcar reducida."
  ]
},
'ct-135': {
  prompt: "Bajo el acuerdo marco del grupo, la acreditación de un contratista se renueva automáticamente cada año a menos que el contratista registre un incidente de seguridad reportable durante el periodo. El registro muestra que a Verrand Civils no se le renovó la acreditación este año.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "Verrand Civils registró un incidente de seguridad reportable durante el periodo.",
    "Verrand Civils registró más incidentes reportables que cualquier otro contratista.",
    "Verrand Civils no podrá licitar por trabajos en años futuros.",
    "Todo contratista que registró un incidente perdió su acreditación."
  ]
},
'ct-136': {
  prompt: "Un grupo de medios revisó sus productos de suscripción. Todo producto que creció en suscriptores el trimestre pasado ofrece descuento estudiantil. Algunos productos que ofrecen descuento estudiantil vienen empaquetados con un servicio aliado. Ningún producto empaquetado con un servicio aliado está disponible en más de dos países.\n\n¿Cuál de las siguientes opciones puede inferirse correctamente?",
  choices: [
    "Todo producto que ofrece descuento estudiantil creció en suscriptores.",
    "Algunos productos que ofrecen descuento estudiantil están disponibles en no más de dos países.",
    "Ningún producto que creció en suscriptores viene empaquetado con un servicio aliado.",
    "Los productos disponibles en tres o más países no crecieron."
  ]
},
'ct-137': {
  prompt: "Un director de retail se dirige a la junta sobre la línea sostenible, lanzada hace dieciocho meses en las 240 tiendas. 'Nuestra investigación encargada encuestó a 4.000 compradores y encontró que el 78% dice que pagaría más por productos de origen sostenible, una cifra que ha subido seis puntos en dos años. Sin embargo, la línea todavía representa solo el 12% de las ventas, y esa participación ha estado plana desde el lanzamiento. Los compradores claramente quieren estos productos, así que no deben estar encontrándolos. Propongo que invirtamos en señalización más clara en tienda.'\n\n¿Cuál de las siguientes opciones describe con más precisión una falla en el razonamiento del director?",
  choices: [
    "Supone sin respaldo que la disposición declarada a pagar más se traduce en comportamiento real de compra.",
    "No especifica cuánto más dijeron los compradores que pagarían.",
    "No compara el desempeño de la empresa contra el de los competidores.",
    "Se apoya en investigación realizada entre clientes existentes y no potenciales."
  ]
},
'ct-138': {
  prompt: "Un gerente de operaciones presenta al comité ejecutivo. 'He revisado la producción por hora de trabajo en las catorce plantas durante los últimos tres años. Cada una de nuestras cinco plantas de mejor desempeño usa métodos de manufactura esbelta, y nuestras dos peores nunca los han adoptado. La brecha entre esos dos grupos es sustancial y se ha ampliado cada uno de los tres años. Los métodos esbeltos son por lo tanto lo que separa una planta fuerte de una débil, y recomiendo que los hagamos obligatorios en toda la red dentro de doce meses.'\n\n¿Cuál de las siguientes opciones describe con más precisión una falla en el argumento?",
  choices: [
    "Trata una correlación observada en un conjunto pequeño y seleccionado de plantas como si estableciera causalidad.",
    "No define qué cuenta como manufactura esbelta.",
    "No considera el costo de implementar los métodos esbeltos.",
    "Supone que todas las plantas producen los mismos productos."
  ]
},
'ct-139': {
  prompt: "Un director financiero se dirige a una reunión de comité sobre una plataforma de clientes que va en su tercer año de desarrollo. 'Ya hemos gastado USD 6 millones del presupuesto de USD 9 millones, y la construcción está aproximadamente a dos tercios. El proveedor ha confirmado que puede entregar la funcionalidad restante por los USD 3 millones que quedan. Si abandonamos el programa ahora, esos USD 6 millones se pierden por completo y no tenemos nada que mostrarle a la junta por tres años de trabajo. Por lo tanto deberíamos aprobar el gasto restante y terminar la construcción.'\n\n¿Cuál de las siguientes opciones describe con más precisión una falla en el razonamiento del director?",
  choices: [
    "Trata el dinero ya gastado como razón para continuar, en lugar de comparar el costo restante contra el beneficio futuro esperado.",
    "No indica si el presupuesto de USD 9 millones fue aprobado por la junta.",
    "Supone que la plataforma puede completarse por exactamente USD 3 millones.",
    "No considera si un proveedor externo podría terminar el trabajo más barato."
  ]
},
'ct-140': {
  prompt: "Un líder de marketing defiende el presupuesto del próximo año. 'Nuestra participación ha caído en cada uno de los últimos cinco trimestres, y nuestros dos competidores más grandes han duplicado aproximadamente su gasto digital en el mismo periodo. La situación es sencilla: o duplicamos nuestro propio presupuesto de publicidad digital, o aceptamos que nuestra participación seguirá cayendo. Nadie en esta sala está dispuesto a pararse frente a la junta y aceptar una participación decreciente, así que el aumento de presupuesto es la única decisión responsable.'\n\n¿Cuál de las siguientes opciones describe con más precisión una falla en el argumento?",
  choices: [
    "Presenta solo dos opciones cuando pueden existir otros medios de defender la participación de mercado.",
    "No cuantifica cuánta participación se ha perdido.",
    "Supone que la sala tiene autoridad sobre el presupuesto de publicidad.",
    "Se apoya en las opiniones de los presentes y no en datos."
  ]
},
'ct-141': {
  prompt: "Un socio defiende una reestructuración propuesta en una reunión de liderazgo. 'He leído con cuidado las objeciones escritas, y noto de dónde vienen. Casi todas fueron presentadas por los gerentes regionales, cada uno de los cuales perdería una línea de reporte directo si la reestructuración avanza, y varios de los cuales quedarían un grado más abajo en la nueva estructura. Su oposición es exactamente lo que predeciríamos de personas en su posición, y por lo tanto no nos dice nada sobre si la reestructuración es una buena idea.'\n\n¿Cuál de las siguientes opciones describe con más precisión una falla en el razonamiento del socio?",
  choices: [
    "Descarta las objeciones con base en quién las planteó y no en los méritos de lo que dijeron.",
    "No indica cuántos gerentes regionales objetaron.",
    "No explica en qué consiste la reestructuración.",
    "Supone que los gerentes regionales entendieron la propuesta."
  ]
},
'ct-142': {
  prompt: "Un gerente de calidad presenta el informe mensual de servicio. 'Encuestamos a todos los clientes que contactaron nuestra línea de soporte durante marzo, y el 91% calificó el servicio recibido como bueno o excelente, frente a 88% en febrero. La muestra es grande —poco más de 2.000 respuestas— y la redacción del cuestionario no ha cambiado en dos años, así que la comparación es justa. Con esta evidencia nuestra base de clientes está claramente muy satisfecha con el soporte que damos, y no veo motivo para la inversión adicional que se propone.'\n\n¿Cuál de las siguientes opciones describe con más precisión una falla en el informe?",
  choices: [
    "Generaliza de los clientes que eligieron contactar a soporte al conjunto de la base de clientes.",
    "No distingue entre las calificaciones de 'bueno' y 'excelente'.",
    "No compara la cifra de este mes con la de meses anteriores.",
    "No especifica cuántos clientes fueron encuestados."
  ]
},
'ct-143': {
  prompt: "Un asesor de políticas responde a una solicitud del área de ingeniería para trasladar USD 400.000 de presupuesto no ejecutado al año siguiente. 'Entiendo el razonamiento del área, y la solicitud específica no es irrazonable en sí misma: el retraso lo causó un proveedor, no una mala planeación. Pero si permitimos esta única excepción, todas las demás áreas exigirán el mismo trato el próximo año. Nuestra disciplina presupuestal colapsará, la proyección se volverá irrelevante, y en pocos años la organización no tendrá control financiero real alguno. La solicitud debe rechazarse.'\n\n¿Cuál de las siguientes opciones describe con más precisión una falla en el argumento?",
  choices: [
    "Supone sin respaldo que el primer paso llevará inevitablemente al resultado final.",
    "No indica cuánto presupuesto no ejecutado está en juego.",
    "No considera las razones del área para la solicitud.",
    "Supone que las demás áreas se enteran de la solicitud."
  ]
},
'ct-144': {
  prompt: "Una directora de Recursos Humanos presenta los resultados anuales de compromiso al equipo ejecutivo. 'Encuestamos a 3.200 empleados de todas las funciones y regiones. Los equipos cuyos jefes tienen reuniones individuales semanales puntúan once puntos más en compromiso que los equipos cuyos jefes no las tienen, y el patrón se sostiene en las seis regiones sin excepción. La diferencia es mayor que la producida por cualquier otro factor que medimos, incluidos satisfacción salarial y carga de trabajo. Las reuniones individuales semanales por lo tanto elevan el compromiso, y recomiendo que las exijamos en toda la organización desde el próximo trimestre.'\n\n¿Cuál de las siguientes opciones describe con más precisión una falla en el razonamiento?",
  choices: [
    "Pasa por alto la posibilidad de que los equipos comprometidos sean, en primer lugar, más propensos a sostener reuniones individuales regulares.",
    "No reporta la tasa de respuesta de la encuesta.",
    "No define qué cuenta como una reunión individual.",
    "Supone que los jefes tienen tiempo para reuniones semanales."
  ]
},
'ct-145': {
  prompt: "Un consultor asesora a una junta que considera una fusión. 'El caso descansa casi enteramente en USD 40 millones de sinergias de costo anuales identificadas por el propio equipo financiero de la empresa objetivo. Ese modelo nunca ha sido auditado de forma independiente. Dos de sus supuestos centrales —el ritmo de integración de sistemas y la retención de la fuerza de ventas combinada— han sido cuestionados por nuestros analistas, y la empresa objetivo aún no ha entregado los cálculos subyacentes. Hasta que el modelo sea verificado por un tercero, debemos concluir que los ahorros proyectados no existen, y la fusión no puede justificarse por razones de costo.'\n\n¿Cuál de las siguientes opciones describe con más precisión una falla en el argumento?",
  choices: [
    "Trata la ausencia de evidencia verificada de los ahorros como evidencia de que no los hay.",
    "No identifica cuáles dos supuestos fueron cuestionados.",
    "Supone que una auditoría independiente sería concluyente.",
    "Considera solo razones de costo e ignora las estratégicas."
  ]
},
'ct-146': {
  prompt: "Un gerente de ventas le escribe al director comercial. 'La nueva presentación de ventas debe estar funcionando. La introdujimos a comienzos de abril, y en los cuatro meses desde entonces hemos cerrado once negocios, mientras que en los cuatro meses previos a abril cerramos solo seis. El equipo además reporta sentirse más seguro presentándola, y dos clientes comentaron favorablemente sobre el diseño en sus reuniones finales. Bajo cualquier lectura razonable, la presentación es el activo comercial más fuerte que hemos construido en años y debería desplegarse en todas las regiones.'\n\n¿Cuál de las siguientes opciones describe con más precisión una falla en el razonamiento?",
  choices: [
    "Infiere que la presentación causó el aumento solo porque el aumento vino después de su introducción.",
    "No reporta el valor de los negocios cerrados.",
    "No indica cuántos prospectos vieron la presentación.",
    "Compara un número desigual de meses de cada lado."
  ]
},
'ct-147': {
  prompt: "Un miembro de junta habla en contra de una propuesta para encargar una revisión independiente del programa de transformación. 'Nuestra directora ejecutiva le dijo a esta junta el mes pasado que el programa va en camino y que los hitos restantes son alcanzables dentro del presupuesto actual. Ella tiene treinta años de experiencia en esta industria, ha liderado dos reestructuraciones exitosas en negocios comparables, y fue reclutada precisamente por ese historial. Una revisión externa costaría varios cientos de miles de dólares y tomaría tres meses en reportar. Por lo tanto no hay necesidad de que la junta encargue una.'\n\n¿Cuál de las siguientes opciones describe con más precisión una falla en el argumento?",
  choices: [
    "Sustituye la evidencia sobre el programa mismo por las credenciales de quien habla.",
    "No especifica en qué consiste el programa de transformación.",
    "Supone que una revisión independiente sería costosa.",
    "No considera las opiniones de otros ejecutivos."
  ]
},
'ct-148': {
  prompt: "Un oficial de compras resume una evaluación de proveedores para el comité de selección. 'Su propuesta afirma que la plataforma recortará 60% nuestro tiempo de procesamiento, y han entregado tres referencias de clientes que parecen respaldar esa cifra. Sin embargo, durante la negociación comercial su vendedor cotizó tres costos de licencia distintos en el lapso de quince días, y dos veces no entregó confirmación escrita cuando la pedimos. Dado ese historial del lado comercial, deberíamos rechazar su afirmación sobre el tiempo de procesamiento y sacarlos de la lista corta.'\n\n¿Cuál de las siguientes opciones describe con más precisión una falla en el razonamiento?",
  choices: [
    "Trata la inconsistencia en un punto como suficiente para rechazar una afirmación no relacionada sobre otro.",
    "No verifica si la cifra de 60% vino del vendedor.",
    "Supone que el tiempo de procesamiento es el criterio más importante.",
    "No considera las propuestas de otros proveedores."
  ]
},
'ct-149': {
  prompt: "Una autoridad de transporte urbano está decidiendo cómo reducir la congestión en el centro, donde las velocidades promedio de tráfico han caído cuatro años consecutivos. Los funcionarios señalan que el 40% de los viajes matutinos hacia el núcleo se hacen en carro con un solo ocupante, y que la red de tranvía opera al 60% de su capacidad a esa misma hora. Una consulta pública el año pasado encontró que las tarifas de estacionamiento eran la medida a la que menos se oponían los residentes. Han concluido que subir la tarifa de estacionamiento del centro recortará la congestión, porque los conductores que enfrenten la tarifa más alta se pasarán al tranvía.\n\n¿La conclusión de los funcionarios depende de cuál de los siguientes supuestos?",
  choices: [
    "La red de tranvía podría expandirse más si la demanda lo requiriera.",
    "Un número significativo de conductores que hoy pagan por estacionar tiene una ruta de tranvía que es una alternativa viable para su viaje.",
    "Las tarifas de estacionamiento del centro son actualmente más bajas que en ciudades comparables.",
    "La congestión en el centro ha empeorado en los últimos cinco años."
  ]
},

/* Most of the assumption items in this block share one shape: a saving is quantified on
   one dimension and the conclusion silently assumes nothing offsets it on another. The
   correct option is always the offsetting-cost one, so its phrasing has to stay a
   conditional about magnitude ("no… lo suficiente como para anular") rather than becoming a
   flat denial that other costs exist, which would overstate what the argument needs. */
'ct-150': {
  prompt: "Una firma consultora está eligiendo entre dos sistemas de programación para sus 400 consultores. El socio responsable argumenta que el sistema más barato es la mejor opción: en un horizonte de tres años sus cuotas de licencia son USD 180.000 menores que las de la alternativa, y el presupuesto de tecnología de la firma está bajo presión tras dos años de sobregasto. Ambos sistemas cumplen los requisitos funcionales fijados por el equipo de operaciones, y ambos proveedores han ofrecido el mismo cronograma de implementación.\n\n¿El argumento del socio depende de cuál de los siguientes supuestos?",
  choices: [
    "El sistema más barato no generará costos adicionales en otras partes que anulen el ahorro en licencias.",
    "El presupuesto de tecnología seguirá bajo presión durante los próximos tres años.",
    "El sistema más caro es el líder de mercado en su categoría.",
    "Ambos sistemas fueron evaluados por el mismo grupo de personas."
  ]
},
'ct-151': {
  prompt: "Una fundación está planeando la recaudación del próximo año con un presupuesto total de captación de USD 2 millones. Su análisis de los últimos tres años muestra que los donantes captados por el programa puerta a puerta dan en promedio USD 340 en su primer año, frente a USD 210 de los donantes captados en línea. La brecha ha sido consistente año tras año y se sostiene en varios miles de donantes. El director de recaudación ha propuesto desplazar el presupuesto de captación hacia el puerta a puerta con el argumento de que eso elevará el ingreso total.\n\n¿La propuesta del director depende de cuál de los siguientes supuestos?",
  choices: [
    "La recaudación puerta a puerta es bien recibida en las zonas donde opera la fundación.",
    "El costo de captar un donante puerta a puerta no es tanto mayor que el costo en línea como para eliminar la diferencia en donaciones.",
    "Los donantes en línea de la fundación son en promedio más jóvenes que los de puerta a puerta.",
    "La donación del primer año es un predictor confiable de la donación de por vida."
  ]
},
'ct-152': {
  prompt: "Un sistema hospitalario está revisando sus consultas externas, donde las citas incumplidas cuestan unos USD 3 millones al año en tiempo clínico desperdiciado. Los gerentes observan que las consultas que usan el nuevo servicio de recordatorio de citas tienen una tasa de inasistencia de 6%, frente a 14% en las consultas que no lo han adoptado. El servicio lleva dieciocho meses disponible y cerca de un tercio de las consultas lo usa hoy. Planean desplegarlo en todas las consultas, esperando que la inasistencia caiga a cerca de 6% en todas partes.\n\n¿La expectativa de los gerentes depende de cuál de los siguientes supuestos?",
  choices: [
    "Las consultas que adoptaron el servicio temprano no difieren de las demás en formas que afecten la asistencia.",
    "El servicio de recordatorio puede entregarse al mismo costo en todas las consultas.",
    "Los pacientes prefieren recibir recordatorios por mensaje de texto y no por teléfono.",
    "La cifra de 14% ha sido estable durante los últimos tres años."
  ]
},
'ct-153': {
  prompt: "Una editorial está decidiendo si cierra su revista impresa, que ha aparecido de forma continua durante treinta y un años. El equipo financiero señala que la circulación impresa ha caído 45% en cuatro años mientras la edición digital ha crecido de forma sostenida en el mismo periodo, y que la operación impresa hoy opera con una pequeña pérdida antes de cualquier asignación de gastos generales centrales. Argumenta que cerrar la edición impresa y redirigir el presupuesto editorial a lo digital mejorará la rentabilidad general.\n\n¿El argumento del equipo financiero depende de cuál de los siguientes supuestos?",
  choices: [
    "Las suscripciones digitales seguirán creciendo a su ritmo actual.",
    "Una parte sustancial de los ingresos hoy atados a la edición impresa no se perdería al cerrarla.",
    "El equipo editorial puede producir contenido digital sin capacitación adicional.",
    "Editoriales competidoras también han reducido su producción impresa."
  ]
},
'ct-154': {
  prompt: "Un fabricante está considerando mover el ensamblaje de su línea de gama media de Alemania a Portugal, donde ya opera una planta de componentes. El director de operaciones señala que el costo laboral totalmente cargado por unidad ensamblada es 38% menor en Portugal, que la sede portuguesa tiene espacio de piso disponible de inmediato, y que la fuerza laboral local puede reclutarse sin dificultad. Concluye que el traslado reducirá el costo de cada unidad producida.\n\n¿La conclusión del director depende de cuál de los siguientes supuestos?",
  choices: [
    "La legislación laboral portuguesa es comparable a la alemana en los aspectos relevantes.",
    "El traslado no aumentará los costos no laborales por unidad lo suficiente como para anular el ahorro laboral.",
    "La línea de gama media es la familia de productos más rentable del fabricante.",
    "La demanda de la línea de gama media se mantendrá estable tras el traslado."
  ]
},
'ct-155': {
  prompt: "Una empresa de software está planeando sus precios del próximo año, tras haber mantenido los precios de lista planos durante tres años. Los analistas señalan que la tasa anual de cancelación de la firma es 4%, muy por debajo del promedio de la industria de 9%, y que la retención neta de ingresos ha superado el 100% en cada uno de esos tres años. Concluyen que un aumento de precio de 15% puede implementarse sin pérdida material de clientes, ya que la base de clientes es evidentemente inusualmente leal.\n\n¿La conclusión de los analistas depende de cuál de los siguientes supuestos?",
  choices: [
    "La lealtad reflejada en la tasa de cancelación actual sobreviviría a un cambio en el precio que pagan los clientes.",
    "Los competidores no reducirán sus precios en respuesta.",
    "El aumento de 15% aplicaría por igual a todos los segmentos de clientes.",
    "El promedio de cancelación de la industria se ha calculado sobre una base comparable."
  ]
},
'ct-156': {
  prompt: "Una universidad está evaluando la nueva prueba de admisión que introdujo hace dos años en lugar de una entrevista estructurada. Los administradores reportan que los estudiantes admitidos con la prueba obtuvieron notas promedio más altas en primer año que la cohorte admitida el año anterior, y que la brecha apareció en todas las facultades. Las postulaciones totales subieron levemente en el mismo periodo. Concluyen que la prueba es mejor predictor de la capacidad académica que el proceso de entrevista que reemplazó.\n\n¿La conclusión de los administradores depende de cuál de los siguientes supuestos?",
  choices: [
    "La prueba es más barata de administrar que el proceso de entrevista.",
    "Los estándares de calificación de primer año no cambiaron entre las dos cohortes.",
    "Los estudiantes admitidos con la prueba venían de un rango más amplio de colegios.",
    "El proceso de entrevista llevaba muchos años en uso."
  ]
},
'ct-157': {
  prompt: "Una cadena de supermercados está decidiendo si extiende su servicio de domicilios a zonas rurales, tras haber operado el servicio en ciudades durante seis años. El equipo comercial calcula que los hogares rurales, donde han sido encuestados, piden una canasta promedio mayor que los urbanos —cerca de USD 95 frente a USD 62— y que los clientes rurales reportan menos opciones competidoras cerca. Concluye que el domicilio rural será más rentable por pedido que el servicio urbano existente.\n\n¿La conclusión del equipo comercial depende de cuál de los siguientes supuestos?",
  choices: [
    "Los hogares rurales pedirán con la misma frecuencia que los urbanos.",
    "El costo de alistar y entregar un pedido rural no superará el margen adicional que genera la canasta más grande.",
    "Los clientes rurales están dispuestos a aceptar ventanas de entrega más largas.",
    "Los competidores rurales de la cadena no ofrecen domicilios actualmente."
  ]
},
'ct-158': {
  prompt: "Una aerolínea está considerando reemplazar el servicio de comida de cortesía en rutas de corta distancia por un menú de compra a bordo. El director comercial argumenta que esto mejorará la rentabilidad de corta distancia, citando USD 22 millones de costo anual de catering hoy absorbido en el precio del tiquete, el hecho de que dos de sus tres principales competidores ya hicieron el mismo cambio, e investigación interna que indica que la mayoría de los pasajeros de corta distancia come poco de lo que hoy se sirve.\n\n¿El argumento del director depende de cuál de los siguientes supuestos?",
  choices: [
    "Los competidores que hicieron el cambio lo hicieron por las mismas razones.",
    "Los pasajeros no trasladarán suficiente negocio a aerolíneas que aún ofrecen comida de cortesía como para superar el ahorro en catering.",
    "Los menús de compra a bordo pueden operarse con la dotación actual de tripulación de cabina.",
    "Los costos de catering seguirán subiendo en los próximos años."
  ]
},
'ct-159': {
  prompt: "Cinco áreas ocupan los cinco pisos de un edificio de oficinas, un área por piso, numerados del 1 (planta baja) al 5 (último).\n\n· Finanzas está directamente encima de Jurídica.\n· Marketing está en el piso 5.\n· Recursos Humanos no está en un piso adyacente a Finanzas.\n· Operaciones está en el piso 1.\n\n¿En qué piso está Jurídica?",
  choices: ["Piso 2", "Piso 3", "Piso 4", "Piso 5"]
},
'ct-160': {
  prompt: "Cuatro candidatos —Novak, Okafor, Patel y Reyes— son entrevistados en cuatro días consecutivos de lunes a jueves, un candidato por día.\n\n· Reyes es entrevistado antes que Novak.\n· Patel es entrevistado el miércoles.\n· Okafor no es entrevistado el lunes.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "Novak es entrevistado el jueves.",
    "Okafor es entrevistado el martes.",
    "Reyes es entrevistado el lunes.",
    "Novak es entrevistado el martes."
  ]
},
'ct-161': {
  prompt: "Cinco aprendices —Nadia, Omar, Priya, Rafael y Sena— fueron clasificados del primero al quinto en una evaluación, sin empates.\n\n· Nadia puntuó más alto que Omar.\n· Priya tuvo el puntaje más bajo.\n· Omar puntuó más alto que Rafael.\n· Sena puntuó más alto que Nadia.\n\n¿Quién quedó tercero?",
  choices: ["Nadia", "Omar", "Rafael", "Sena"]
},
'ct-162': {
  prompt: "Cinco carpetas se guardan en un cajón en las posiciones 1 a 5, siendo la posición 1 la del frente.\n\n· La carpeta de contratos está inmediatamente delante de la de facturas.\n· La carpeta de nómina está en la posición 1.\n· La carpeta de impuestos está en algún lugar detrás de la de facturas.\n· La carpeta de auditoría no está en la posición 5.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "La carpeta de contratos está en la posición 2.",
    "La carpeta de auditoría está en la posición 2.",
    "La carpeta de impuestos está en la posición 5.",
    "La carpeta de facturas está en la posición 3."
  ]
},
'ct-163': {
  prompt: "Cinco ponentes —Kaur, Lindqvist, Mbeki, Novak y Oyelaran— presentan uno tras otro en cinco turnos.\n\n· Kaur presenta inmediatamente antes que Lindqvist.\n· Mbeki presenta de quinto.\n· Novak presenta en algún momento antes que Kaur.\n· Oyelaran presenta de segundo.\n\n¿Quién presenta primero?",
  choices: ["Kaur", "Lindqvist", "Novak", "Oyelaran"]
},
'ct-164': {
  prompt: "Un ejecutivo visita cinco ciudades —Lisboa, Madrid, Oslo, Praga y Roma— en cinco días consecutivos, una ciudad por día.\n\n· Lisboa se visita el día después de Madrid.\n· Oslo se visita el día 1.\n· Praga se visita antes que Madrid.\n· Roma se visita el día 5.\n\n¿Qué día se visita Madrid?",
  choices: ["Día 2", "Día 3", "Día 4", "Día 5"]
},
'ct-165': {
  prompt: "Cinco colegas —Ana, Bruno, Carla, Diego y Elena— se sientan en una fila de cinco sillas numeradas del 1 al 5 de izquierda a derecha.\n\n· Ana se sienta en la silla 1.\n· Bruno se sienta inmediatamente a la derecha de Carla.\n· Diego se sienta en la silla 5.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "Carla se sienta en la silla 2.",
    "Elena no se sienta en la silla 3.",
    "Bruno se sienta en la silla 4.",
    "Elena se sienta en la silla 4."
  ]
},
'ct-166': {
  prompt: "Una auditoría se realiza en cinco pasos —trabajo de campo, reporte, revisión, muestreo y alcance— ejecutados uno a la vez en algún orden.\n\n· El muestreo se realiza inmediatamente después del alcance.\n· El reporte se realiza de último.\n· El trabajo de campo se realiza antes del muestreo.\n\n¿Cuál de las siguientes afirmaciones podría ser cierta?",
  choices: [
    "El muestreo se realiza de segundo.",
    "El alcance se realiza de primero.",
    "La revisión se realiza de primera.",
    "El trabajo de campo se realiza de cuarto."
  ]
},
'ct-167': {
  prompt: "Cuatro oficinas regionales —Cracovia, Lyon, Malmö y Turín— están clasificadas de la primera a la cuarta por ingresos anuales, sin empates.\n\n· La oficina de Lyon queda más arriba que la de Turín.\n· La oficina de Malmö queda más abajo que la de Turín.\n· La oficina de Cracovia no queda primera.\n\n¿Cuál de las siguientes afirmaciones debe ser cierta?",
  choices: [
    "Turín queda segunda.",
    "Malmö queda cuarta.",
    "Lyon queda primera.",
    "Cracovia queda tercera."
  ]
},
'ct-168': {
  prompt: "Cuatro sesiones de capacitación —cumplimiento, ética, finanzas y seguridad— se realizan en cuatro días consecutivos de lunes a jueves, una por día.\n\n· La sesión de cumplimiento no se realiza ni el lunes ni el jueves.\n· La sesión de seguridad se realiza el día antes de la de ética.\n· La sesión de finanzas se realiza el lunes.\n\n¿Qué día se realiza la sesión de seguridad?",
  choices: ["Lunes", "Martes", "Miércoles", "Jueves"]
},

/* The paradox items all work the same way: something performed exactly as designed, and
   the surprise is a second-order effect somewhere the measurement did not look. The
   correct option is the only one that names a mechanism; the distractors are true
   statements that explain nothing. Translating a distractor into something that gestures
   at a cause would blur that line, so they stay as inert as they are in English. */
'ct-169': {
  prompt: "Un minorista rediseñó su página de pago para eliminar tres campos de formulario y un paso de confirmación. Las pruebas de usabilidad habían mostrado que el flujo más corto era más rápido y menos propenso a errores, y se esperaba que elevara las compras completadas. Tras el lanzamiento, la proporción de compradores que llegaron a la página de pago y completaron una compra cayó cuatro puntos porcentuales, aunque el tiempo promedio en la página bajó como se había previsto. El nuevo flujo se liberó a todo el tráfico de una vez, sin ningún cambio acompañante en precios, opciones de entrega ni en las páginas previas al pago.\n\n¿Cuál de las siguientes opciones, de ser cierta, explica mejor este resultado?",
  choices: [
    "El paso de confirmación eliminado permitía a los compradores revisar su pedido y corregir errores antes de pagar, y muchos ahora abandonan en la pantalla de pago.",
    "El rediseño se liberó en todos los mercados al mismo tiempo.",
    "Algunos compradores tomaron más tiempo que el promedio en la nueva página.",
    "Los competidores del minorista también usan flujos de pago cortos."
  ]
},
'ct-170': {
  prompt: "Un fabricante invirtió USD 7 millones en inspección óptica automatizada al final de su línea de producción, reemplazando al equipo de inspectores manuales que hacía el trabajo. El equipo funciona exactamente como se especificó: ahora detecta muchas más unidades defectuosas de las que detectaban los inspectores, y su tasa de detección ha sido verificada de forma independiente contra muestras conocidas. Sin embargo, en los dos años desde la instalación, el número de unidades defectuosas que llegan a los clientes ha subido en lugar de bajar.\n\n¿Cuál de las siguientes opciones, de ser cierta, explica mejor este resultado?",
  choices: [
    "El sistema automatizado es más costoso de mantener de lo que era la inspección manual.",
    "Confiada en que el sistema automatizado detectaría los problemas, la planta redujo los controles en proceso que antes evitaban que los defectos se produjeran siquiera.",
    "El sistema automatizado inspecciona unidades más rápido de lo que lo hacían los inspectores manuales.",
    "Algunos inspectores manuales fueron reubicados en otras partes de la planta."
  ]
},
'ct-171': {
  prompt: "Una agencia nacional de empleo reporta que el número de personas trabajando subió en 180.000 el trimestre pasado, y que no hubo cambio significativo en el tamaño de la población en edad de trabajar, en las definiciones usadas ni en la metodología de la encuesta. Ambas cifras provienen de la misma encuesta de hogares y se publicaron juntas. Sin embargo, la tasa de desempleo también subió en el mismo trimestre, de 5,1% a 5,4%.\n\n¿Cuál de las siguientes opciones, de ser cierta, explica mejor estas dos cifras?",
  choices: [
    "Un gran número de personas que antes había dejado de buscar trabajo empezó a buscar empleo activamente, entrando a la fuerza laboral.",
    "Los salarios promedio crecieron más lentamente que en el trimestre anterior.",
    "El crecimiento del empleo se concentró en cargos de medio tiempo.",
    "Algunas regiones vieron caer el empleo mientras otras lo vieron subir."
  ]
},
'ct-172': {
  prompt: "Una empresa de software duplicó el tamaño de su equipo de soporte al cliente tras quejas sostenidas por respuestas lentas, reclutando cuarenta agentes adicionales en un solo trimestre. El tiempo promedio de primera respuesta se redujo a la mitad, como era de esperarse, y la firma publicitó la mejora a su base de clientes. El volumen de tiquetes entrantes se mantuvo prácticamente plano en todo el periodo. Sin embargo, en los dos trimestres siguientes la proporción de clientes que calificó el soporte como satisfactorio disminuyó, y el volumen de escalamientos formales a los gerentes de cuenta aumentó.\n\n¿Cuál de las siguientes opciones, de ser cierta, explica mejor este patrón?",
  choices: [
    "La gama de productos de la firma se amplió durante el mismo periodo.",
    "Los nuevos contratados respondían rápido pero, sin profundidad de producto, con frecuencia daban respuestas que no resolvían el problema de fondo.",
    "El equipo de soporte ahora trabaja en más husos horarios que antes.",
    "Los costos de soporte subieron en línea con el aumento de personal."
  ]
},
'ct-173': {
  prompt: "Una ciudad introdujo un esquema que paga a los hogares un reembolso por cada kilogramo en que sus residuos anuales a relleno sanitario caen por debajo de la cifra del año anterior. Cerca del 60% de los hogares se inscribió el primer año. Los residuos a relleno medidos de los hogares participantes cayeron marcadamente durante ese año, y la ciudad pagó los reembolsos en consecuencia. Sin embargo, el tonelaje total que llegó a los rellenos de la ciudad desde todas las fuentes se mantuvo casi sin cambios.\n\n¿Cuál de las siguientes opciones, de ser cierta, explica mejor esta discrepancia?",
  choices: [
    "Los hogares participantes pusieron una parte sustancial de sus residuos en contenedores comerciales y en canecas de distritos vecinos, en lugar de reducir lo que desechaban.",
    "El reembolso fue menor de lo que algunos hogares esperaban.",
    "No todos los hogares de la ciudad eligieron participar.",
    "Las instalaciones de reciclaje de la ciudad operaron a plena capacidad durante el año."
  ]
},
'ct-174': {
  prompt: "Una aseguradora endureció los criterios de suscripción de sus pólizas de automóvil, rechazando a solicitantes cuyo historial de siniestros sugería riesgo elevado. La medida funcionó como estaba diseñada: la frecuencia promedio de siniestros entre las pólizas nuevas cayó notoriamente, y los criterios se aplicaron de forma consistente en todos los canales de distribución. Las tarifas de prima sobre el negocio aceptado se dejaron sin cambios. No obstante, la siniestralidad general de la aseguradora en el ramo de automóviles empeoró durante los dos años siguientes.\n\n¿Cuál de las siguientes opciones, de ser cierta, explica mejor este resultado?",
  choices: [
    "El presupuesto de marketing de la aseguradora se redujo durante el periodo.",
    "Los criterios más estrictos también dejaron por fuera a muchos clientes de bajo riesgo que se fueron a otra parte, dejando una cartera más pequeña sobre la cual repartir los costos fijos de gestión de siniestros y los siniestros grandes restantes.",
    "El seguro de automóviles es un mercado competitivo.",
    "La frecuencia de siniestros es solo un componente del riesgo de suscripción."
  ]
},
'ct-175': {
  prompt: "Un hospital introdujo un protocolo de triage rápido en su servicio de urgencias, bajo el cual una enfermera sénior evalúa a toda persona que llega antes de completar el registro. Las auditorías confirman que el protocolo se sigue correctamente y que los pacientes ahora son evaluados por un clínico dentro de los veinte minutos de su llegada, frente a cincuenta antes. Los números de atención se han mantenido estables durante el periodo. Sin embargo, el tiempo total promedio que los pacientes pasan en el servicio antes de ser admitidos o dados de alta ha aumentado.\n\n¿Cuál de las siguientes opciones, de ser cierta, explica mejor este resultado?",
  choices: [
    "El protocolo exige documentación adicional de las enfermeras de triage.",
    "La evaluación más rápida identificó a más pacientes que necesitaban imágenes diagnósticas, y la capacidad del área de imágenes no cambió, así que las esperas simplemente se corrieron aguas abajo.",
    "El servicio de urgencias atiende más pacientes en invierno que en verano.",
    "Algunos pacientes llegan en ambulancia y no a pie."
  ]
},
'ct-176': {
  prompt: "Una cadena de supermercados lanzó una campaña de recorte de precios ampliamente publicitada en 400 productos de uso diario, manteniendo los precios más bajos durante un trimestre completo. Los recortes promediaron 8% y se financiaron con el margen propio de la cadena y no con rebajas de proveedores. La investigación de clientes confirma que los compradores notaron los recortes y calificaron mejor a la cadena en valor que antes. No obstante, los ingresos totales por ventas de la cadena y su número de transacciones cayeron levemente durante el periodo de campaña.\n\n¿Cuál de las siguientes opciones, de ser cierta, explica mejor este patrón?",
  choices: [
    "Los 400 productos se concentraban en categorías que los compradores adquieren en cantidades fijas sin importar el precio, y los recortes redujeron el valor de esas mismas canastas.",
    "La campaña se anunció en televisión y radio.",
    "Algunos competidores también redujeron precios durante el periodo.",
    "La cadena opera tiendas de tamaños variados."
  ]
},
'ct-177': {
  prompt: "Todos los miembros del comité de riesgo son directores de la empresa. Ningún director de la empresa es auditor externo.\n\n¿Qué conclusión se sigue necesariamente?",
  choices: [
    "Ningún miembro del comité de riesgo es auditor externo.",
    "Todos los directores de la empresa son miembros del comité de riesgo.",
    "Algunos auditores externos son directores de la empresa.",
    "Ningún auditor externo está calificado para integrar un comité."
  ]
},
'ct-178': {
  prompt: "Todos los proveedores aprobados han pasado una verificación financiera. Algunos proveedores aprobados tienen su base en el exterior.\n\n¿Qué conclusión se sigue necesariamente?",
  choices: [
    "Todos los proveedores con base en el exterior han pasado una verificación financiera.",
    "Algunos proveedores que han pasado una verificación financiera tienen su base en el exterior.",
    "Todos los proveedores que han pasado una verificación financiera están aprobados.",
    "Ningún proveedor del exterior ha reprobado una verificación financiera."
  ]
},
'ct-179': {
  prompt: "Ningún contrato firmado este año contiene una cláusula de arbitraje. Algunos contratos que tiene el área jurídica contienen una cláusula de arbitraje.\n\n¿Qué conclusión se sigue necesariamente?",
  choices: [
    "Ningún contrato que tiene el área jurídica fue firmado este año.",
    "Algunos contratos que tiene el área jurídica no fueron firmados este año.",
    "Todos los contratos firmados este año los tiene el área jurídica.",
    "Algunos contratos firmados este año no contienen cláusula alguna."
  ]
},
'ct-180': {
  prompt: "Todos los proyectos que recibieron aprobación de la junta tienen un patrocinador designado. Algunos proyectos con patrocinador designado están retrasados.\n\n¿Qué conclusión se sigue necesariamente?",
  choices: [
    "Algunos proyectos aprobados por la junta están retrasados.",
    "Todos los proyectos con patrocinador designado recibieron aprobación de la junta.",
    "Ningún proyecto sin patrocinador recibió aprobación de la junta.",
    "La mayoría de los proyectos retrasados tiene patrocinador."
  ]
},
'ct-181': {
  prompt: "Todos los técnicos certificados pueden operar la línea de presión. Ningún miembro del personal temporal es técnico certificado.\n\n¿Qué conclusión se sigue necesariamente?",
  choices: [
    "Ningún miembro del personal temporal puede operar la línea de presión.",
    "Algunos miembros del personal temporal son técnicos certificados.",
    "Cualquiera que pueda operar la línea de presión es técnico certificado.",
    "Algunas personas que pueden operar la línea de presión no son personal temporal."
  ]
},
'ct-182': {
  prompt: "Algunos gerentes regionales han completado el programa de liderazgo. Todos los que han completado el programa de liderazgo son elegibles para la asignación internacional.\n\n¿Qué conclusión se sigue necesariamente?",
  choices: [
    "Todos los gerentes regionales son elegibles para la asignación internacional.",
    "Algunos gerentes regionales son elegibles para la asignación internacional.",
    "Solo quienes completaron el programa son elegibles.",
    "Todos los elegibles para la asignación son gerentes regionales."
  ]
},
'ct-183': {
  prompt: "Ningún producto de la línea descontinuada está en inventario en la tienda insignia. Todos los productos lanzados esta temporada están en inventario en la tienda insignia.\n\n¿Qué conclusión se sigue necesariamente?",
  choices: [
    "Ningún producto lanzado esta temporada está en la línea descontinuada.",
    "Todos los productos en inventario en la tienda insignia fueron lanzados esta temporada.",
    "Algunos productos descontinuados están en inventario en otro lugar.",
    "La tienda insignia tiene en inventario todos los productos no descontinuados."
  ]
},
'ct-184': {
  prompt: "Todos los créditos revisados por el equipo de recuperación están clasificados como no productivos. Algunos créditos clasificados como no productivos fueron originados antes de 2020.\n\n¿Qué conclusión se sigue necesariamente?",
  choices: [
    "Algunos créditos revisados por el equipo de recuperación fueron originados antes de 2020.",
    "Todo crédito originado antes de 2020 es no productivo.",
    "Cualquier crédito no clasificado como no productivo no fue revisado por el equipo de recuperación.",
    "La mayoría de los créditos no productivos son anteriores a 2020."
  ]
},

/* The strong/weak argument items are graded on relevance and weight, so the evidence-bearing
   option keeps every figure that gives it force, and the weak option stays weak for the same
   reason it was: it appeals to fashion, to who chose something, or to a quality of the thing
   rather than to a consequence. Distance in ct-191 is given in kilómetros — the figure is a
   stand-in for "far", carries no arithmetic, and miles would read as foreign here. */
'ct-185': {
  prompt: "Pregunta: ¿Debería la empresa exigir que todo software nuevo pase una auditoría de accesibilidad antes de su lanzamiento?\n\n¿Cuál es el argumento MÁS FUERTE a favor?",
  choices: [
    "La accesibilidad es un valor importante para una organización moderna",
    "Una revisión interna encontró que el 14% de los usuarios de la empresa depende de tecnología asistiva, y tres de los últimos cinco lanzamientos eran inutilizables con un lector de pantalla",
    "Varios competidores han publicado compromisos de accesibilidad",
    "Exigir auditorías demostraría la seriedad de la empresa sobre la inclusión"
  ]
},
'ct-186': {
  prompt: "Pregunta: ¿Debería la firma pasar su conferencia anual de una sede física a un formato en línea?\n\n¿Cuál es el argumento MÁS DÉBIL a favor?",
  choices: [
    "Los datos de asistencia muestran que el 40% de los clientes invitados declinó el año pasado específicamente por el tiempo de viaje",
    "La entrega en línea recortaría el presupuesto del evento de USD 600.000 a unos USD 90.000",
    "Las conferencias virtuales se han vuelto mucho más comunes desde 2020",
    "Las grabaciones de las sesiones quedarían disponibles para los clientes que no pudieran asistir en vivo"
  ]
},
'ct-187': {
  prompt: "Pregunta: ¿Debería el hospital adoptar un único sistema de historia clínica electrónica en todas sus sedes?\n\n¿Cuál es el argumento MÁS FUERTE a favor?",
  choices: [
    "Un sistema único sería más sencillo de describir ante los reguladores",
    "Una revisión de incidentes atribuyó 61 errores de medicación el año pasado a que los clínicos no podían ver registros creados en otra sede",
    "La mayoría de los grandes grupos hospitalarios opera hoy un sistema unificado",
    "El personal se ha quejado de tener que recordar varias credenciales de acceso"
  ]
},
'ct-188': {
  prompt: "Pregunta: ¿Debería el fabricante devolver a casa su servicio al cliente, hoy tercerizado?\n\n¿Cuál es el argumento MÁS DÉBIL a favor?",
  choices: [
    "Los agentes internos podrían capacitarse en los productos con mucha mayor profundidad de la que permite el tercero",
    "El contrato de tercerización se ha encarecido cada año durante seis años consecutivos",
    "Traer la función de vuelta le daría a la empresa control más directo sobre la calidad",
    "El tercero tiene su base en un país que los ejecutivos de la empresa rara vez visitan"
  ]
},
'ct-189': {
  prompt: "Pregunta: ¿Debería la universidad introducir un curso obligatorio de estadística en todos los pregrados?\n\n¿Cuál es el argumento MÁS FUERTE a favor?",
  choices: [
    "La estadística es una materia exigente que desarrolla pensamiento riguroso",
    "Una encuesta a empleadores de egresados clasificó la interpretación de datos como la habilidad que con más frecuencia falta en los recién contratados de la universidad, por delante de otras ocho habilidades",
    "Varias universidades pares ya exigen un curso cuantitativo",
    "El departamento de estadística tiene capacidad para enseñar a más estudiantes"
  ]
},
'ct-190': {
  prompt: "Pregunta: ¿Debería el minorista dejar de aceptar pagos en efectivo en sus tiendas del centro?\n\n¿Cuál es el argumento MÁS DÉBIL a favor?",
  choices: [
    "El manejo de efectivo, la consignación y la seguridad le cuestan a la cadena unos USD 2,3 millones al año en sus tiendas del centro",
    "El efectivo representa menos del 4% de las transacciones en estas tiendas y esa participación ha caído cada año desde 2019",
    "Los pagos con tarjeta son más modernos que el efectivo",
    "Quitar las cajas de efectivo liberaría cerca de 1,5 metros cuadrados de mostrador por tienda para terminales de autoservicio"
  ]
},
'ct-191': {
  prompt: "Pregunta: ¿Debería el banco cerrar sus veinte sucursales más pequeñas?\n\n¿Cuál es el argumento MÁS FUERTE en contra?",
  choices: [
    "Los cierres de sucursales son impopulares entre el público",
    "Catorce de las veinte sucursales son la única entidad bancaria en treinta kilómetros a la redonda, y el análisis interno muestra que los clientes en esas ubicaciones cierran sus cuentas a cuatro veces la tasa normal cuando cierra una sucursal",
    "Las sucursales han servido a sus comunidades durante muchos años",
    "Cerrar sucursales exigiría procesos de consulta por despido con el personal"
  ]
},
'ct-192': {
  prompt: "Pregunta: ¿Debería la empresa reemplazar su oficina de planta abierta por una mezcla de salas silenciosas y espacios de colaboración?\n\n¿Cuál es el argumento MÁS DÉBIL a favor?",
  choices: [
    "Las encuestas internas de tres años clasifican consistentemente el ruido como el principal obstáculo para el trabajo concentrado",
    "El contrato de arrendamiento actual permite reconfigurar sin autorización del arrendador",
    "Los estudios de observación encontraron las salas de reuniones ocupadas el 94% de la semana laboral, empujando las discusiones al piso abierto",
    "La distribución actual fue elegida por un jefe de instalaciones que desde entonces dejó la empresa"
  ]
},
'ct-193': {
  prompt: "Una cadena regional de panaderías está decidiendo si instala paneles solares en los techos de sus doce plantas de producción. La propuesta cuesta USD 2,4 millones por adelantado y el equipo de energía proyecta ahorros anuales de electricidad de USD 310.000, lo que implica un periodo de recuperación de menos de ocho años. Los paneles se tendrían en propiedad y no en arriendo, y la proyección supone los precios actuales de electricidad. La junta ha pedido más análisis antes de comprometerse, ya que la empresa no ha hecho antes una inversión de este plazo.\n\n¿Responder cuál de las siguientes preguntas sería más útil para evaluar la propuesta?",
  choices: [
    "Si los paneles serían visibles desde la calle en cada planta",
    "Qué parte de la demanda eléctrica de cada planta ocurre durante las horas de luz, cuando los paneles generan",
    "Qué proveedor fabrica los paneles",
    "Cuántas otras panaderías de la región han instalado paneles solares"
  ]
},
'ct-194': {
  prompt: "Una empresa de logística está considerando reemplazar sus furgonetas diésel de reparto por eléctricas en toda su flota urbana de 320 vehículos. El equipo financiero calcula que los menores costos de combustible y mantenimiento recuperarían el mayor precio de compra en cinco años, y que la infraestructura de carga podría instalarse en los cuatro depósitos existentes de la empresa. El director de operaciones apoya el cambio en principio pero ha pedido un análisis adicional antes de que la junta decida.\n\n¿Responder cuál de las siguientes preguntas sería más útil para evaluar la propuesta?",
  choices: [
    "Si la autonomía de las furgonetas eléctricas cubre la distancia diaria de las rutas urbanas típicas de la empresa sin carga a mitad de turno",
    "Qué esquema de colores llevarían las nuevas furgonetas",
    "Cuántos fabricantes producen actualmente furgonetas eléctricas de reparto",
    "Si los conductores de la empresa han manejado vehículos eléctricos antes"
  ]
},
'ct-195': {
  prompt: "Una editorial está decidiendo si adquiere a un competidor pequeño por USD 18 millones. El equipo de estrategia argumenta que el negocio combinado eliminaría USD 4 millones de gastos generales duplicados en dos años, que el catálogo de la empresa objetivo complementa el propio de la editorial con casi ningún traslape de títulos, y que la empresa objetivo ha sido rentable en cada uno de los últimos cuatro años. La junta apoya la operación en general pero quiere una pregunta más respondida antes de aprobarla.\n\n¿Responder cuál de las siguientes preguntas sería más útil para evaluar la adquisición?",
  choices: [
    "Cuánto tiempo lleva operando la empresa objetivo",
    "Qué proporción de los ingresos de la empresa objetivo depende de contratos con autores que permiten terminarlos ante un cambio de control",
    "Qué asesores nombraría la editorial para la transacción",
    "Si las oficinas de la empresa objetivo están cerca de las de la editorial"
  ]
},
'ct-196': {
  prompt: "Un grupo hotelero está decidiendo si convierte dos pisos de una propiedad urbana de habitaciones a oficinas con servicios. El equipo de desarrollo proyecta que los arriendos de oficina superarían la contribución actual de las habitaciones en unos USD 500.000 al año, con base en los arriendos comerciales vigentes en el sector, y que la obra de conversión tomaría unos cinco meses. Los dos pisos operan actualmente a la ocupación promedio del hotel. La junta ha pedido un análisis adicional antes de aprobar la conversión.\n\n¿Responder cuál de las siguientes preguntas sería más útil para evaluar la propuesta?",
  choices: [
    "Cuál es la tasa actual de desocupación de oficinas con servicios en el sector",
    "Cuánto tomaría la obra de conversión",
    "Qué arquitecto diseñaría los pisos de oficina",
    "Si el restaurante del hotel es usado por personas no hospedadas"
  ]
},
'ct-197': {
  prompt: "Un minorista está decidiendo si abre los domingos en sus cuarenta tiendas de calle, tras haber probado la apertura dominical en seis de ellas durante tres meses. El equipo comercial estima ingresos semanales adicionales de USD 190.000 en toda la cadena frente a USD 120.000 de costo extra de personal y operación, lo que da una contribución claramente positiva. El director financiero ha pedido que se responda una pregunta más antes de extender la prueba a toda la cadena.\n\n¿Responder cuál de las siguientes preguntas sería más útil para evaluar la propuesta?",
  choices: [
    "Si el personal preferiría trabajar los domingos en vez de los sábados",
    "Qué proporción de los ingresos del domingo representa compras que los clientes habrían hecho otro día de todos modos",
    "Cuántos minoristas competidores ya abren los domingos",
    "Si los proveedores de las tiendas entregan los fines de semana"
  ]
},
'ct-198': {
  prompt: "Una firma de software está decidiendo si mueve los datos de sus clientes de sus propios servidores a un proveedor de nube. El equipo de infraestructura proyecta ahorros de USD 700.000 al año en hardware, energía y mantenimiento una vez completada la migración, señala que el proveedor ofrece garantías de disponibilidad más fuertes de las que la firma logra hoy, y estima que la migración misma tomaría unos nueve meses de esfuerzo de ingeniería.\n\n¿Responder cuál de las siguientes preguntas sería más útil para evaluar la propuesta?",
  choices: [
    "Cuánto pagaría la firma al proveedor de nube en cargos de transferencia y almacenamiento de datos a sus volúmenes reales de uso",
    "Qué lenguajes de programación prefieren los ingenieros de la firma",
    "Cuántas otras firmas del sector usan proveedores de nube",
    "Cuándo se compraron los servidores actuales de la firma"
  ]
},
'ct-199': {
  prompt: "Un fabricante está decidiendo si ofrece una garantía extendida de cinco años en su electrodoméstico insignia, en lugar de la cobertura actual de dos años. Marketing proyecta que la garantía más larga elevaría las ventas en unidades 12%, con base en una encuesta en la que los clientes calificaron la duración de la garantía como un factor importante de compra. El competidor más cercano del electrodoméstico ofrece hoy tres años, y la cobertura extendida aplicaría a unidades que ya están en el canal de distribución.\n\n¿Responder cuál de las siguientes preguntas sería más útil para evaluar la propuesta?",
  choices: [
    "Cuál es la tasa de falla del electrodoméstico entre los años dos y cinco",
    "Qué minoristas venden el electrodoméstico",
    "Cuánto tiempo lleva ofreciéndose la garantía de dos años",
    "Si los competidores publicitan sus términos de garantía de forma prominente"
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
  explanation: "Los pilotos suelen ubicarse donde es más probable que funcionen, se dotan con voluntarios y se vigilan de cerca, todo lo cual infla resultados de formas que no sobreviven a un despliegue. Establecer cuánto del 22% es atribuible al cambio en sí es la diferencia entre un programa de USD 22 millones y una decepción costosa. El costo y la duración importan una vez que el efecto sea creíble."
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
},

/* Numerical explanations, num-82 onwards — the half of that bank the original translation
   pass never reached. These are worked arithmetic, so two things matter beyond the prose.
   Every figure follows the Colombian convention the questions use (decimal comma, thousands
   period), or the explanation would contradict the numbers shown above it. And each one
   names the specific wrong operation that produces each distractor, because in a numerical
   bank the distractors are not noise — they are the answers you get from a particular
   mistake, and saying which mistake is most of the teaching. */
'num-82': { explanation: "El aumento es $102 − $85 = $17. El cambio porcentual se mide contra la cifra original: 17 ÷ 85 = 0,20, o sea 20%. Dividir por el precio nuevo da 16,7%, que es la trampa más común aquí." },
'num-83': { explanation: "La caída es 640 − 512 = 128. Contra la cifra inicial, 128 ÷ 640 = 0,20, o sea una disminución de 20%. Dividir por la cifra final da 25%, que mide el aumento necesario para volver a 640, no la disminución que ocurrió." },
'num-84': { explanation: "Los porcentajes sucesivos se multiplican, no se suman. El precio queda en 0,80 × 0,85 = 0,68 del original, una reducción de 32%. Sumar 20 y 15 para llegar a 35% cuenta doble, porque el segundo descuento se aplica sobre una base menor." },
'num-85': { explanation: "El precio nuevo es 125% del anterior, así que el anterior es 60 ÷ 1,25 = $48. Quitarle 25% a $60 da $45, y está mal porque ese 25% se aplicó sobre la cifra original más pequeña, no sobre $60." },
'num-86': { explanation: "Si 35% trabaja de forma remota, 65% trabaja presencialmente: 1.240 × 0,65 = 806. La cifra 434 es el personal remoto (1.240 × 0,35), que responde la pregunta contraria." },
'num-87': { explanation: "Los multiplicadores se componen: 1,40 × 0,60 = 0,84, así que las ventas terminan en 84% de donde empezaron, una disminución de 16%. Las subidas y bajadas que parecen iguales nunca se cancelan, porque la caída se aplica sobre la base mayor posterior al aumento." },
'num-88': { explanation: "El sobreprecio sobre el costo es la utilidad dividida por el costo: (55 − 40) ÷ 40 = 15 ÷ 40 = 37,5%. Dividir por el precio de venta da 27,3%, que es el margen bruto: otra medida de los mismos $15." },
'num-89': { explanation: "El impuesto es 340 × 0,21 = $71,40, lo que da 340 + 71,40 = $411,40. De forma equivalente, multiplica por 1,21 en un solo paso. Las opciones cercanas salen de escalar mal el impuesto por un factor de diez." },
'num-90': { explanation: "Un recorte de 12,5% deja el 87,5%: 180.000 × 0,875 = $157.500. El recorte en sí es $22.500, y sumarlo en vez de restarlo produce el distractor de $202.500." },
'num-91': { explanation: "La utilidad bruta es 2,4 − 1,56 = $0,84 millones, y el margen bruto es eso dividido por los ingresos: 0,84 ÷ 2,4 = 35%. La cifra de 65% es la razón de costo (1,56 ÷ 2,4), que es lo que queda después del margen." },
'num-92': { explanation: "Si el margen es 45% del precio de venta, el costo es el 55% restante: 80 × 0,55 = $44. El distractor de $36 es la utilidad bruta (80 × 0,45), que es lo que gana el margen y no lo que cuesta el artículo." },
'num-93': { explanation: "La utilidad operativa es la utilidad bruta menos los gastos operativos: 1,75 − 0,90 = $0,85 millones. Dividida por los ingresos, 0,85 ÷ 5 = 17%. El margen bruto de 35% es una cifra aparte y no debe usarse como numerador aquí." },
'num-94': { explanation: "Si el margen es 40% del precio de venta, el costo es el 60% de este, así que el precio = 18 ÷ 0,60 = $30. Sumarle 40% al costo da $25,20, que produce un margen de apenas 28,6%: la clásica confusión entre sobreprecio y margen." },
'num-95': { explanation: "Los ingresos nuevos son 1.000 × 1,10 = $1.100 y el costo nuevo es 600 × 1,05 = $630, así que la utilidad bruta es $470. El margen es 470 ÷ 1.100 = 42,7%, arriba del 40% de este año porque los ingresos crecieron más rápido que el costo." },
'num-96': { explanation: "La utilidad neta es los ingresos multiplicados por el margen neto: 12.500.000 × 0,06 = $750.000. La cifra de $1.250.000 es el 10% de los ingresos y la de $2.083.000 divide en vez de multiplicar." },
'num-97': { explanation: "El precio de venta es 24 × 1,60 = $38,40 y la utilidad bruta es $14,40. El margen se mide contra el precio de venta: 14,40 ÷ 38,40 = 37,5%. Un sobreprecio de 60% sobre el costo siempre es un número menor cuando se reexpresa como margen." },
'num-98': { explanation: "La utilidad bruta es 600.000 × 0,30 = $180.000 más 400.000 × 0,50 = $200.000, lo que da $380.000 sobre $1.000.000 de ingresos, o 38%. Promediar 30% y 50% para llegar a 40% ignora que la línea de menor margen carga más ingresos." },
'num-99': { explanation: "El crecimiento total es 6,4 ÷ 4,0 = 1,6 en dos años, así que el multiplicador anual es √1,6 ≈ 1,265, una tasa compuesta cercana a 26,5%. Partir el 60% de crecimiento total a la mitad para llegar a 30%, o promediarlo a 20%, ignoran la composición." },
'num-100': { explanation: "La regla del 72 estima el tiempo de duplicación como 72 dividido por la tasa de crecimiento: 72 ÷ 8 = 9 años. La respuesta exacta es 9,006 años, así que la aproximación queda muy cerca a esta tasa." },
'num-101': { explanation: "El año 2 es 250 × 1,20 = 300 unidades y el año 3 es 300 × 1,15 = 345 unidades. Aplicar un 35% combinado a la cifra del año 1 da 337,5, que subestima el resultado porque el crecimiento del segundo año se construye sobre el del primero." },
'num-102': { explanation: "El multiplicador total es 86,4 ÷ 50 = 1,728, y 1,728 es 1,2 al cubo, así que la tasa anual es exactamente 20%. La cifra de 72,8% es el crecimiento total de todo el periodo y 24,3% es ese total dividido entre tres." },
'num-103': { explanation: "La composición da 800 × 1,05³ = 800 × 1,157625 = $926,1 millones, o sea $926 millones. Un crecimiento simple de 15% daría $920 millones, y esos $6 millones de diferencia son el efecto de la composición en tres años." },
'num-104': { explanation: "Reordenando la regla del 72, la tasa es 72 dividido por el tiempo de duplicación: 72 ÷ 6 = 12%. La cifra de 16,7% divide la ganancia total de 100% entre seis años, lo que ignora la composición y sobreestima la tasa." },
'num-105': { explanation: "Los negocios suman 12 + 15 + 9 + 18 + 11 = 65, y 65 ÷ 5 = 13. La mediana del mismo conjunto es 12, que es la respuesta incorrecta más probable si se ordenan los valores en lugar de sumarlos." },
'num-106': { explanation: "La nómina original es 8 × 54.000 = $432.000. Sumar $72.000 da $504.000 entre nueve personas, así que 504.000 ÷ 9 = $56.000. Promediar $54.000 y $72.000 directamente da $63.000, lo que le da erróneamente al recién llegado el mismo peso que a todo el equipo existente." },
'num-107': { explanation: "Un promedio de 24 en seis números significa que el total es 6 × 24 = 144. Los cinco valores conocidos suman 115, así que el sexto es 144 − 115 = 29." },
'num-108': { explanation: "La velocidad promedio es la distancia total sobre el tiempo total, no el promedio de las dos velocidades. Los tramos toman 2 horas y 3 horas, así que 240 km en 5 horas son 48 km/h. La respuesta de 50 km/h promedia las velocidades e ignora que se pasa más tiempo en el tramo lento." },
'num-109': { explanation: "Los cuatro meses suman $344.000, y 344.000 ÷ 4 = $86.000. Cada valor está dentro de $9.000 de esa cifra, lo que sirve como chequeo de sensatez de la aritmética." },
'num-110': { explanation: "La razón tiene 3 + 5 + 2 = 10 partes, así que cada parte son $120.000. Ventas se lleva 5 partes: 5 × 120.000 = $600.000. Las cifras de $360.000 y $240.000 son las porciones de marketing y de producto." },
'num-111': { explanation: "Si 4 partes equivalen a 48 personas, una parte son 12 personas. El área más grande tiene 7 partes: 7 × 12 = 84. Sumarle la diferencia de 3 partes a 48 da la misma respuesta: 48 + 36 = 84." },
'num-112': { explanation: "La mezcla tiene 5 + 3 = 8 partes, así que cada parte son 320 ÷ 8 = 40 litros. La resina son 3 partes: 3 × 40 = 120 litros. La cifra de 200 litros es el contenido de solvente." },
'num-113': { explanation: "Las 5 partes del Este equivalen a USD 3,5 millones, así que una parte son USD 0,7 millones. El Oeste tiene 9 partes: 9 × 0,7 = $6,3 millones. Los ingresos totales serían 14 partes, o $9,8 millones, lo que sirve de chequeo." },
'num-114': { explanation: "La probabilidad es defectuosas sobre el total: 4 ÷ 20 = 0,20, o 20%. La cifra de 25% compara las defectuosas con las 16 unidades buenas en lugar de con la caja completa." },
'num-115': { explanation: "Para eventos independientes se multiplican las probabilidades: 0,10 × 0,10 = 0,01, o 1%. La cifra de 19% es la probabilidad de que falle al menos uno, y 20% simplemente suma las dos tasas." },
'num-116': { explanation: "Cada unidad es buena con probabilidad 0,95, así que dos seguidas son 0,95 × 0,95 = 0,9025, o 90,25%. Restar 5% dos veces de 100% da 90%, que queda cerca pero ignora que el segundo 5% se aplica sobre una base levemente menor." },
'num-117': { explanation: "La pregunta condiciona a haber aprobado la prueba numérica, así que el denominador es 80, no 200: 50 ÷ 80 = 0,625, o 62,5%. La cifra de 25% divide entre los 200 completos y responde otra pregunta." },
'num-118': { explanation: "Cada término es el doble del anterior más 1: 3→7, 7→15, 15→31, así que el siguiente es 31 × 2 + 1 = 63. De forma equivalente, los términos son 2ⁿ − 1 para n = 2, 3, 4, 5, 6. Las brechas se duplican en cada paso, así que un salto de 32 es lo esperable." },
'num-119': { explanation: "Las diferencias son 4, 6, 8, 10 —subiendo 2 cada vez—, así que la siguiente diferencia es 12 y el siguiente término es 30 + 12 = 42. Los términos también son n × (n + 1) para n de 1 a 6." },
'num-120': { explanation: "Cada término es el anterior dividido entre 3: 81 → 27 → 9 → 3, así que el siguiente es 3 ÷ 3 = 1. La serie son potencias descendentes de 3." },
'num-121': { explanation: "Son los números cuadrados: 1², 2², 3², 4², 5², así que el siguiente es 6² = 36. Las diferencias son los impares 3, 5, 7, 9, lo que da la misma respuesta: 25 + 11 = 36." },
'num-122': { explanation: "Cada término es la mitad del anterior, y dividir a la mitad no se detiene en los números enteros: 15 ÷ 2 = 7,5. Esperar que el patrón se rompa porque el resultado no es entero es la trampa aquí." },
'num-123': { explanation: "Cada término es la suma de los dos anteriores: 2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13, así que el siguiente es 8 + 13 = 21. Es el patrón de Fibonacci empezando en 2 y 3." },
'num-124': { explanation: "Cada término se duplica: 7 → 14 → 28 → 56, así que el siguiente es 56 × 2 = 112. El distractor de 84 sale de sumar una constante de 28 en vez de duplicar." },
'num-125': { explanation: "Las diferencias son −9, −8, −7, encogiéndose 1 en cada paso, así que la siguiente diferencia es −6 y el siguiente término es 76 − 6 = 70. Suponer una brecha constante de −7 da 69." },
'num-126': { explanation: "Son los números cúbicos: 1³, 2³, 3³, 4³, así que el siguiente es 5³ = 125. Los distractores 81 y 121 son cuadrados, que encajan mal con los términos anteriores en cuanto se revisa el 27." },
'num-127': { explanation: "Las diferencias son 3, 5, 7, 9 —impares consecutivos—, así que la siguiente diferencia es 11 y el término es 27 + 11 = 38. Los términos también son n² + 2 para n de 1 a 6." },
'num-128': { explanation: "El ritmo es 240 ÷ 6 = 40 unidades por hora, así que 15 horas dan 40 × 15 = 600 unidades. Escalar directamente también funciona: 15 horas son 2,5 veces 6 horas, y 240 × 2,5 = 600." },
'num-129': { explanation: "La tarea toma 3 × 12 = 36 días-trabajador. Repartida entre cuatro trabajadores, son 36 ÷ 4 = 9 días. Más trabajadores significa menos días, así que la opción de 16 días tiene la relación al revés." },
'num-130': { explanation: "Se suman los ritmos, no los tiempos: las bombas llenan 1/8 y 1/12 del tanque por hora, lo que da 3/24 + 2/24 = 5/24 por hora. El tiempo es el recíproco, 24/5 = 4,8 horas. Promediar 8 y 12 para llegar a 10 horas es el error clásico: juntas tienen que superar las 8 horas de la bomba más rápida." },
'num-131': { explanation: "La velocidad promedio es la distancia dividida por el tiempo: 315 ÷ 3,5 = 90 km/h. Verificando al revés, 90 × 3,5 = 315, lo que confirma el resultado." },
'num-132': { explanation: "Una persona procesa 1.200 ÷ (5 × 4) = 60 reclamaciones al día. Ocho personas durante cinco días dan 8 × 5 × 60 = 2.400 reclamaciones. Escalar solo el número de personas, o solo los días, produce los distractores de 1.920 y 3.000." },
'num-133': { explanation: "El tiempo es la cantidad dividida por el ritmo: 1.530 ÷ 45 = 34 minutos. Un chequeo rápido: 45 × 30 = 1.350 y 45 × 4 = 180, y 1.350 + 180 = 1.530." },
'num-134': { explanation: "El flujo neto de entrada es 15 − 6 = 9 litros por minuto, así que el tanque se llena en 540 ÷ 9 = 60 minutos. Usar solo el caudal de entrada da 36 minutos e ignora el desagüe por completo." },
'num-135': { explanation: "Redondea a cifras cómodas: aproximadamente 4.850 × 200 = $970.000, y como $197 está apenas por debajo de $200, la cifra real es un poco menor, cerca de $955.000. Eso es lo más próximo a $960.000." },
'num-136': { explanation: "Aproxima como 80 × 100 = 8.000, y luego nota que ambas cifras se redondearon hacia arriba, así que el total real es algo menor. El producto exacto es 7.488, lo más próximo a 7.500." },
'num-137': { explanation: "El equipo entrega aproximadamente 7 × 38 ≈ 270 horas por semana, y 1.960 ÷ 270 ≈ 7,3 semanas. Redondear 38 a 40 da 280 horas semanales y 7 semanas, suficientemente cerca para identificar la respuesta." },
'num-138': { explanation: "Redondea el divisor: 2.100.000 ÷ 350 = 6.000, y como el divisor real de 340 es algo menor, la cifra verdadera queda un poco por encima de 6.000, cerca de 6.180. La opción más próxima es 6.000." },
'num-139': { explanation: "El ingreso diario es aproximadamente 300 × 30 = $9.000, así que una semana son unos $63.000. Con más precisión, 312 × 28,60 = $8.923 al día y $62.462 a la semana, lo más próximo a $62.000." },
'num-140': { explanation: "Aproxima como 43 × 1.200 ≈ 51.600 km, o más simple: 40 × 1.200 = 48.000 más un poco por los tres vehículos restantes. La cifra exacta es 50.740 km, lo más próximo a 51.000." },
'num-141': { explanation: "La contribución por unidad es 25 − 15 = $10. El punto de equilibrio son los costos fijos divididos por la contribución: 80.000 ÷ 10 = 8.000 unidades. Dividir por el precio de $25 da 3.200 e ignora por completo el costo variable." },
'num-142': { explanation: "El costo de adquisición es el gasto dividido por los clientes captados: 45.000 ÷ 900 = $50 por cliente." },
'num-143': { explanation: "El valor de vida antes de costos es el ingreso mensual por la permanencia promedio: 30 × 40 = $1.200. La cifra de $360 es el ingreso de un año y no usa la permanencia de 40 meses." },
'num-144': { explanation: "Las horas disponibles totales son 60 × 1.800 = 108.000. La utilización es lo facturado sobre lo disponible: 86.400 ÷ 108.000 = 0,80, o 80%." },
'num-145': { explanation: "La rotación de inventario es el costo de la mercancía vendida dividido por el inventario promedio: 4.200.000 ÷ 700.000 = 6 veces al año. Eso implica que el inventario se mantiene unos dos meses en promedio." },
'num-146': { explanation: "El retorno sobre la inversión es la ganancia dividida por el monto invertido: (310.000 − 250.000) ÷ 250.000 = 60.000 ÷ 250.000 = 24%. La cifra de 124% es el valor final como porcentaje de la inversión original, no la ganancia." },
'num-147': { explanation: "La contribución por unidad es 40 − 28 = $12. Las unidades deben cubrir los costos fijos más la utilidad objetivo: (120.000 + 60.000) ÷ 12 = 15.000 unidades. Cubrir solo los costos fijos requeriría 10.000 unidades." },
'num-148': { explanation: "La cancelación mide los clientes perdidos contra la base de apertura: 72 ÷ 2.400 = 0,03, o 3%. Los clientes nuevos pertenecen al cálculo de crecimiento, no al de cancelación, así que no entran en esta cifra." },
'num-149': { explanation: "El costo total es 300 × 12 = $3.600. Los ingresos son 240 × 22 = $5.280 más 60 × 14 = $840, lo que da $6.120. La utilidad es 6.120 − 3.600 = $2.520." },
'num-150': { explanation: "La utilidad bruta es 8 millones × 0,30 = $2,4 millones. Restando los gastos operativos queda una utilidad antes de impuestos de $0,9 millones. El impuesto es 0,9 millones × 0,25 = $225.000, dejando una utilidad neta de $675.000." },
'num-151': { explanation: "Los aumentos se componen: 52.000 × 1,06 = $55.120, luego 55.120 × 1,04 = $57.324,80. Aplicar un solo aumento de 10% da $57.200, que subestima el resultado porque el segundo aumento se aplica sobre el salario ya incrementado." },
'num-152': { explanation: "Las fases suman $100.000, dejando $10.000 sin ejecutar. Como proporción del presupuesto son 10.000 ÷ 110.000 = 9,1%. Dividir por los $100.000 gastados da 10%, que mide el remanente contra la base equivocada." },
'num-153': { explanation: "Las horas diarias de producción son 2 × 8 = 16, así que las horas mensuales son 22 × 16 = 352. La producción es 352 × 65 = 22.880 unidades. Olvidar el segundo turno reduce la cifra a la mitad, 11.440." },
'num-154': { explanation: "Las ventas del segundo trimestre son 240.000 × 0,85 = $204.000, y las del tercero son 204.000 × 1,25 = $255.000. Aplicar un alza neta de 10% a la cifra inicial da $264.000, y está mal porque el alza se aplica sobre la base reducida." },
'num-155': { explanation: "Tras el primer año el valor es 32.000 × 0,80 = $25.600. Tras el segundo es 25.600 × 0,85 = $21.760. Aplicar un 35% combinado al precio original da $20.800, que deprecia de más porque la segunda reducción se aplica sobre una base menor." },
'num-156': { explanation: "El taller A se lleva 480 × 0,25 = 120 asistentes, dejando 360. El taller B se lleva el 40% de esos: 360 × 0,40 = 144. Tomar el 40% de los 480 completos da 192 y pasa por alto que B solo saca del remanente." },
'num-157': { explanation: "El interés simple es capital × tasa × tiempo: 18.000 × 0,07 × 3 = $3.780. El total a pagar es 18.000 + 3.780 = $21.780. El interés de un solo año daría $19.260." },
'num-158': { explanation: "Las horas totales son 6 × 7,5 × 12 = 540. A $45 por hora eso da 540 × 45 = $24.300. Por etapas: los 12 días de una persona cuestan $4.050, y seis personas cuestan seis veces eso." },
'num-159': { explanation: "El primer descuento da 7.200 × 0,85 = $6.120, y el descuento por pago anticipado da 6.120 × 0,95 = $5.814. Sumar los descuentos a 20% y aplicarlos una sola vez da $5.760, que descuenta de más porque la segunda reducción se aplica sobre el monto ya rebajado." },
'num-160': { explanation: "El presupuesto por persona era 340.000 ÷ 17 = $20.000 y ahora es 391.000 ÷ 23 = $17.000, una caída de $3.000. El presupuesto total creció 15% pero la planta creció 35%, así que el gasto por persona cayó pese al presupuesto mayor." },
'num-161': { explanation: "La máquina se paga en 84.000 ÷ 1.750 = 48 meses, o sea 4,0 años. Convertir primero el ahorro a cifra anual da $21.000 al año, y 84.000 ÷ 21.000 = 4 también." },
'num-162': { explanation: "Las facturas suman $38.000. Un descuento de 3% deja el 97%: 38.000 × 0,97 = $36.860. El descuento cedido es $1.140." },
'num-163': { explanation: "Tras la comisión del minorista el fabricante recibe 45 × 0,70 = $31,50. Restando el envío queda 31,50 − 4,20 = $27,30. Descontar el envío antes de la comisión da $28,56, un error común de orden." },

/* Data explanations, data-83 onwards. These read figures straight off the tables, so the
   department, region, country and cost-category names must match es-tables.js exactly — an
   explanation citing "Engineering" under a table headed "Ingeniería" would be unusable. */
'data-83': { explanation: "Sumando cada fila: Alpha 320 + 350 + 410 + 480 = 1.560; Beta 540 + 510 + 495 + 470 = 2.015; Gamma 180 + 240 + 300 + 360 = 1.080; Delta 260 + 260 + 265 + 275 = 1.060. Beta lidera pese a caer cada trimestre, porque partió de una base mucho mayor." },
'data-84': { explanation: "480 + 470 + 360 + 275 = 1.585 miles de dólares. Agrupar ayuda: 480 + 470 = 950 y 360 + 275 = 635, y 950 + 635 = 1.585. La cifra de 1.470 es el total de T3." },
'data-85': { explanation: "Alpha creció 160/320 = 50%; Beta cayó 70/540 = −13%; Gamma creció 180/180 = 100%; Delta creció 15/260 = 6%. Gamma se duplicó, pero nota que lo hizo desde la base más pequeña: su ganancia absoluta de 180 es apenas mayor que los 160 de Alpha." },
'data-86': { explanation: "Los ingresos de T4 suman 1.585 y Gamma aportó 360, así que 360 ÷ 1.585 = 0,227, que redondea a 23%. Dividir por el total anual de Gamma da una cifra sin sentido." },
'data-87': { explanation: "El total de T1 es 320 + 540 + 180 + 260 = 1.300 y el de T4 es 1.585, un aumento de 285. Como porcentaje de T1, 285 ÷ 1.300 = 21,9%. Dividir por el total de T4 da 18,0%." },
'data-88': { explanation: "Gamma creció de 300 en T3 a 360 en T4, un aumento absoluto de 60, así que el siguiente trimestre sería 360 + 60 = 420. Aplicar el crecimiento porcentual de 20% da 432, que es la respuesta a otra pregunta: lee con cuidado si la extrapolación es absoluta o proporcional." },
'data-89': { explanation: "Divide la nómina por el personal en cada caso: Ingeniería 7.560 ÷ 84 = $90.000; Ventas 3.920 ÷ 56 = $70.000; Operaciones 6.000 ÷ 120 = $50.000; Marketing 1.680 ÷ 24 = $70.000; Finanzas 1.120 ÷ 16 = $70.000. Ingeniería lidera. Nota que la nómina más grande y el salario promedio más alto no tienen por qué coincidir." },
'data-90': { explanation: "La nómina total es 7.560 + 3.920 + 6.000 + 1.680 + 1.120 = $20.280 miles entre 84 + 56 + 120 + 24 + 16 = 300 personas, lo que da 20.280.000 ÷ 300 = $67.600. Promediar los cinco promedios por área da $70.000, lo que pondera erróneamente igual a un área de 16 personas y a una de 120." },
'data-91': { explanation: "El personal total es 300, y Operaciones tiene 120, así que 120 ÷ 300 = 40%. Su participación en la nómina es menor, 6.000 ÷ 20.280 = 29,6%, porque su salario promedio es el más bajo de los cinco." },
'data-92': { explanation: "Operaciones promedia 6.000 ÷ 120 = $50.000 por persona. Recortar 25% deja 90 personas, así que su nómina queda en 90 × 50 = $4.500 miles, un ahorro de $1.500 miles. La nómina total cae de $20.280 miles a $18.780 miles." },
'data-93': { explanation: "Ventas da 3.920 ÷ 56 = $70.000, Marketing 1.680 ÷ 24 = $70.000 y Finanzas 1.120 ÷ 16 = $70.000. Tres áreas de tamaños muy distintos pueden compartir un promedio idéntico, y por eso el personal debe arrastrarse en cualquier cálculo a nivel de empresa." },
'data-94': { explanation: "7.560 ÷ 1.120 = 6,75. Ingeniería tiene 5,25 veces el personal de Finanzas pero 6,75 veces su nómina, porque su salario promedio también es mayor." },
'data-95': { explanation: "Materias primas creció 630/4.200 = 15%; Mano de obra 180/3.600 = 5%; Energía 315/900 = 35%; Logística cayó 55/1.100 = −5%; Gastos generales 180/1.200 = 15%. Energía creció más rápido en términos porcentuales aunque su aumento absoluto de 315 fue menor que los 630 de materias primas." },
'data-96': { explanation: "Logística cayó de 1.100 a 1.045, una reducción de 55. Todas las demás categorías subieron, así que Logística es la única línea donde realmente se redujeron los costos." },
'data-97': { explanation: "Los costos de 2024 suman 4.200 + 3.600 + 900 + 1.100 + 1.200 = 11.000 y los de 2025 suman 4.830 + 3.780 + 1.215 + 1.045 + 1.380 = 12.250. El aumento de 1.250 contra 11.000 es 11,4%." },
'data-98': { explanation: "4.830 ÷ 12.250 = 39,4%. En 2024 la misma categoría era 4.200 ÷ 11.000 = 38,2%, así que su participación subió levemente porque creció más rápido que el total." },
'data-99': { explanation: "Energía creció de 900 a 1.215, una tasa de 35%. Aplicarla a 1.215 da 1.215 × 1,35 = $1.640 miles. Sumar el mismo aumento absoluto de 315 da $1.530 miles." },
'data-100': { explanation: "Mano de obra y energía suman 3.780 + 1.215 = 4.995 contra costos totales de 12.250, lo que da 40,8%. En 2024 el mismo par era 4.500 ÷ 11.000 = 40,9%, así que su participación combinada casi no se movió pese al fuerte aumento de energía." },
'data-101': { explanation: "Ventas por metro cuadrado: Centro 7.200 ÷ 1.200 = $6.000; Riverside 4.000 ÷ 800 = $5.000; Northgate 6.750 ÷ 1.500 = $4.500; Eastfield 3.600 ÷ 600 = $6.000; Southbank 5.400 ÷ 900 = $6.000. Northgate es la más baja, pese a tener la mayor superficie y las segundas ventas más altas." },
'data-102': { explanation: "7.200 + 4.000 + 6.750 + 3.600 + 5.400 = $26.950 miles. Agrupa para verificar: 7.200 + 3.600 = 10.800 y 4.000 + 6.750 + 5.400 = 16.150, y 10.800 + 16.150 = 26.950." },
'data-103': { explanation: "Las ventas totales son $26.950 miles entre 40 + 25 + 45 + 20 + 30 = 160 empleados, lo que da 26.950.000 ÷ 160 = $168.438, o $168.400 a la centena más cercana. Promediar las cinco cifras por tienda da $170.000 e ignora los distintos números de personal." },
'data-104': { explanation: "A $4.500 por metro cuadrado Northgate es la más baja de las cinco, así que queda en el puesto 5. Tres tiendas empatan en $6.000 y Riverside queda en $5.000. Aquí el tamaño y la productividad se mueven en direcciones opuestas, que es exactamente lo que una métrica por unidad está diseñada para exponer." },
'data-105': { explanation: "Centro logra $6.000 por metro cuadrado. Riverside tiene 800 m², así que igualar esa tasa da 800 × 6.000 = $4.800 miles, un aumento de $800 miles sobre sus $4.000 miles actuales." },
'data-106': { explanation: "7.200 ÷ 26.950 = 26,7%. Centro tiene el 24% de la superficie y el 25% del personal pero genera una participación mayor de las ventas que cualquiera de las dos, lo que es consistente con sus altas ventas por metro cuadrado." },
'data-107': { explanation: "Multiplica ingresos por margen: España 42 × 0,38 = $15,96 millones; Polonia 18 × 0,45 = $8,10 millones; Italia 30 × 0,32 = $9,60 millones; Suecia 12 × 0,50 = $6,00 millones; Francia 48 × 0,35 = $16,80 millones. Francia lidera en utilidad bruta pese a no tener el margen más alto ni uno grande: su base de ingresos la carga." },
'data-108': { explanation: "La utilidad bruta total es $56,46 millones sobre ingresos totales de $150,0 millones, lo que da 56,46 ÷ 150 = 37,6%. Promediar los cinco márgenes da exactamente 40%, que sobreestima el resultado porque los dos países de mayor margen son los dos más pequeños." },
'data-109': { explanation: "Sumando las utilidades brutas por país: 15,96 + 8,10 + 9,60 + 6,00 + 16,80 = $56,46 millones, que redondea a $56,5 millones." },
'data-110': { explanation: "Suecia genera 12 × 0,50 = $6,00 millones del total de $56,46 millones, o 10,6%. El margen más alto de la tabla produce el menor aporte de utilidad bruta porque los ingresos de Suecia son apenas el 8% del grupo." },
'data-111': { explanation: "La ganancia de margen son 8 puntos porcentuales aplicados a $30 millones de ingresos: 30 × 0,08 = $2,4 millones. Verificando directamente, la utilidad bruta pasaría de $9,60 millones a $12,00 millones." },
'data-112': { explanation: "Los ingresos totales son $150 millones, así que el 60% son $90 millones. Los $42 millones de España más los $48 millones de Francia dan exactamente $90 millones. Francia e Italia suman $78 millones y Italia y España suman $72 millones." },
'data-113': { explanation: "El ingreso es unidades por precio: enero $54.000; febrero $59.400; marzo $63.000; abril $66.000; mayo $68.400; junio $72.200. Junio es el más alto, porque el aumento de volumen más que compensó el precio plano." },
'data-114': { explanation: "Sumando las cifras mensuales: 54.000 + 59.400 + 63.000 + 66.000 + 68.400 + 72.200 = $383.000. Multiplicar las unidades totales por un promedio de los precios listados no da esta cifra, porque los meses de mayor volumen tienen precios menores." },
'data-115': { explanation: "El cálculo correcto son los ingresos totales divididos por las unidades totales: 383.000 ÷ 9.400 = $40,74. Promediar los seis precios listados da $41,17, que queda muy alto porque pondera las 1.200 unidades de enero igual que las 1.900 de junio." },
'data-116': { explanation: "Las unidades subieron de 1.200 a 1.900, un aumento de 700. Contra la base de enero, 700 ÷ 1.200 = 58,3%. Dividir por la cifra de junio da 36,8%." },
'data-117': { explanation: "Los ingresos subieron de $54.000 a $72.200, un aumento de $18.200, o 33,7% de la cifra de enero. Los ingresos crecieron mucho más lento que el 58,3% de crecimiento en volumen porque el precio promedio cayó de $45 a $38 en el mismo periodo." },
'data-118': { explanation: "Los cambios mensuales de ingresos son +$5.400, +$3.600, +$3.000, +$2.400 y +$3.800. El menor aumento es de abril a mayo con $2.400, el mes en que el precio bajó de $40 a $38." },
'data-119': { explanation: "El presupuesto suma $2.000 miles y el gasto real $2.140 miles, un sobregasto de $140 miles. Contra el presupuesto son 140 ÷ 2.000 = 7,0%. Tres de los cinco frentes cerraron por debajo del presupuesto, pero los dos que se pasaron fueron lo bastante grandes para empujar todo el programa por encima." },
'data-120': { explanation: "Construcción se pasó por 1.104 − 960 = $144 miles y Pruebas por 368 − 320 = $48 miles. Diseño, Capacitación y Despliegue cerraron todos por debajo del presupuesto." },
'data-121': { explanation: "Construcción se pasó 144 ÷ 960 = 15% y Pruebas 48 ÷ 320 = 15%, así que pese a cifras absolutas muy distintas se pasaron en proporción idéntica. Diseño, Capacitación y Despliegue subejecutaron 5%, 10% y 7,5% respectivamente." },
'data-122': { explanation: "228 + 1.104 + 368 + 144 + 296 = $2.140 miles. Agrupar ayuda: 228 + 144 + 296 = 668 y 1.104 + 368 = 1.472, y 668 + 1.472 = 2.140." },
'data-123': { explanation: "Quitar el sobregasto de $144 miles de Construcción del sobregasto total de $140 miles deja −$4 miles, o sea una subejecución. El sobregasto de $48 miles de Pruebas quedaría entonces más que cubierto por los $52 miles de subejecución de Diseño, Capacitación y Despliegue." },
'data-124': { explanation: "Caldera subió de 18% a 24%, una ganancia de 6 puntos porcentuales. Norvex perdió 3 puntos, Pilar perdió 1 y Ostrand perdió 1. La ganancia de Caldera vino casi enteramente a costa de Norvex." },
'data-125': { explanation: "Caldera tenía el 24% del mercado en 2025: 4,0 × 0,24 = $960 millones. La cifra de $1.000 millones corresponde al 25% de Norvex." },
'data-126': { explanation: "Norvex pasó de 28% a 25%, una caída de 3 puntos porcentuales. La cifra de 11 puntos confunde los puntos porcentuales con la caída porcentual relativa, que es una medida distinta." },
'data-127': { explanation: "La caída relativa divide el cambio por la participación inicial: 3 ÷ 28 = 10,7%. La caída de 3 puntos y la caída relativa de 10,7% describen el mismo movimiento, y confundir las dos es uno de los errores más comunes en análisis de participación." },
'data-128': { explanation: "Norvex ganó 3,2 × 0,28 = $896 millones en 2023 y 4,0 × 0,25 = $1.000 millones en 2025, un alza de unos $100 millones. Perder participación en un mercado creciente puede aun así significar ingresos crecientes, y por eso la participación y el desempeño absoluto deben leerse juntos." },
'data-129': { explanation: "Ordena los valores: 9, 11, 14, 14, 14, 22, 30. Con siete observaciones la mediana es la cuarta, que es 14. La media de 16,3 es mayor, lo que es señal de que la distribución está siendo jalada por los dos valores grandes." },
'data-130': { explanation: "Los negocios suman 14 + 9 + 22 + 14 + 11 + 30 + 14 = 114 entre siete representantes, así que 114 ÷ 7 = 16,3." },
'data-131': { explanation: "Esto es el rango: el valor mayor menos el menor, 30 − 9 = 21. El distractor de 30 es simplemente el máximo, que no es lo mismo que la brecha entre el mejor y el peor." },
'data-132': { explanation: "Esa cifra es la moda, el valor que ocurre con más frecuencia. Tres representantes cerraron 14 negocios; todas las demás cifras aparecen una sola vez." },
'data-133': { explanation: "Una media por encima de la mediana significa que la cola alta es más larga: aquí 22 y sobre todo 30 jalan el promedio hacia arriba mientras la mediana se queda en 14. Eso es sesgo a la derecha, y es la razón por la que la mediana suele describir mejor el caso típico en datos sesgados." },
'data-134': { explanation: "Sin el 30 los valores ordenados son 9, 11, 14, 14, 14, 22. Con seis observaciones la mediana es el promedio del tercero y el cuarto, ambos 14, así que se queda en 14. La insensibilidad de la mediana a los valores extremos es exactamente lo que la hace robusta." },
'data-135': { explanation: "Los seis valores restantes suman 114 − 30 = 84, así que la media es 84 ÷ 6 = 14,0. Eliminar una sola observación movió la media 2,3 dejando la mediana intacta." },
'data-136': { explanation: "La media usa todos los valores, así que una observación extrema la desplaza directamente: aquí es 10,0, igual o por encima de cuatro de los cinco valores. La mediana se queda en 8 y la moda se queda en 8 sin importar qué tan grande sea el valor final." },
'data-137': { explanation: "La desviación estándar mide dispersión, no nivel. Con medias idénticas, una desviación estándar mayor significa que las cifras diarias del Equipo A están más dispersas alrededor de esa media: menos consistentes, no más ni menos productivas en promedio." },
'data-138': { explanation: "Un margen de error de ±4 puntos se aplica en ambas direcciones alrededor de la estimación: 60 − 4 = 56% y 60 + 4 = 64%. Duplicar el margen da la primera opción, demasiado amplia, y aplicarlo en una sola dirección da la última." },
'data-139': { explanation: "La mediana es el valor del medio y no se ve afectada por qué tan extremos sean los salarios más altos, así que describe bien al empleado típico. La media es arrastrada hacia arriba por los salarios ejecutivos y puede superar lo que la mayoría del personal realmente gana; el rango y el máximo describen los extremos y no el centro." },
'data-140': { explanation: "La fila 3002 registra 2024-02-30. Febrero nunca tiene treinta días, ni en año bisiesto ni fuera de él, así que esta es una fecha imposible y no una inusual. Una verificación de validez de fecha la marcaría automáticamente." },
'data-141': { explanation: "Las filas 3001 y 3004 comparten el mismo nombre de empleado, área, fecha de ingreso, salario y horas. Solo difiere el ID, que es la firma clásica de un registro insertado dos veces: un ID único no hace que dos filas sean registros distintos." },
'data-142': { explanation: "La fila 3006 registra un salario de −$3.400. Un salario anual no puede ser negativo, así que casi con certeza es un error de signo o un asiento de ajuste mal ubicado que se cargó en la columna equivocada." },
'data-143': { explanation: "Noventa y cinco horas es inverosímil pero no imposible, así que puede ser un valor atípico genuino, un error de digitación, o dos cargos combinados en una sola fila. Solo la fuente puede resolverlo. Eliminar o sobrescribir un valor antes de entenderlo destruye información y puede sesgar el resultado en una dirección desconocida." },
'data-144': { explanation: "Un duplicado agrega tanto un valor como un registro, así que actúa como un segundo voto por $58.000 y arrastra la media hacia esa cifra. Los ID distintos son irrelevantes para la aritmética; lo que importa es que el salario de una persona se cuenta dos veces." },
'data-145': { explanation: "Sumando los seis valores incluyendo el negativo: 58.000 + 61.500 + 54.000 + 58.000 + 47.200 − 3.400 = $275.300, y 275.300 ÷ 6 = $45.883. El asiento negativo por sí solo arrastra la cifra unos $10.000 por debajo de cualquier salario realmente pagado, y por eso nunca debería llegar al cálculo." },
'data-146': { explanation: "Los cuatro registros restantes son $58.000, $61.500, $54.000 y $47.200, con un total de $220.700. Dividido entre cuatro da $55.175: más de $9.000 por encima de la cifra sin limpiar, lo que muestra cuánto pueden mover dos filas defectuosas un conjunto de datos pequeño." },
'data-147': { explanation: "La variación no es lo mismo que un error. Una semana de 37,5 horas es un contrato estándar en muchas organizaciones y cae bien dentro de un rango plausible. Los controles de calidad de datos deben marcar valores imposibles o inverosímiles, no simplemente valores que difieren de la mayoría." },
'data-148': { explanation: "Una verificación de rango prueba si cada valor cae entre límites definidos, así que un salario negativo falla de inmediato. Los errores de escritura, los duplicados y el desalineamiento de columnas requieren controles distintos: coincidencia de texto, verificación de unicidad y validación de esquema, respectivamente." },
'data-149': { explanation: "La mayoría de las operaciones de agrupación tratan el texto como sensible a mayúsculas, así que 'Ventas' y 'VENTAS' se vuelven dos categorías y todo total por área queda subestimado. La solución es estandarizar mayúsculas y espacios antes de agregar, no después de notar que los totales se ven mal." },

/* Critical Thinking explanations, ct-100 onwards. These were missing from the debt I
   reported earlier, which counted only num and data.

   Unlike the numerical ones these carry almost no arithmetic; what they carry is the shape
   of the reasoning error, and each names it precisely — autoselección, artefacto de
   medición, ganancia caída del cielo, manipulación de la métrica. Those labels are the
   transferable part, so they are rendered consistently rather than paraphrased differently
   each time. Each explanation also says why the three wrong options fail, which is what
   makes the item teach rather than merely mark. */
'ct-100': { explanation: "Los puntos de historia son una unidad de medida, no una cantidad fija de trabajo. Si las tareas se recortaron en historias más pequeñas, el conteo por ingeniero subiría incluso con una producción idéntica, así que toda la ganancia observada puede ser un artefacto de medición. El costo, la adopción parcial y el dolor de espalda sin mejorar dejan en pie la afirmación de productividad." },
'ct-101': { explanation: "La propuesta supone que las reseñas impulsan las ventas, pero la correlación es igual de consistente con que las ventas impulsen las reseñas: más compradores producen simplemente más reseñadores. Si esa es la dirección de la causalidad, fabricar reseñas en un producto lento no cambia nada. Cuántas reseñas leen los compradores, el costo unitario y el comportamiento de los competidores no abordan la dirección de la relación." },
'ct-102': { explanation: "Los conteos de lesiones escalan con la exposición. Si las horas trabajadas cayeron 45%, una baja de 42 a 19 es cercana a lo que esperarías sin ningún cambio en seguridad, porque la tasa de lesiones por hora casi no se movió. El costo, la antigüedad de los equipos y la pertinencia del curso no dicen nada sobre si la caída observada refleja la capacitación." },
'ct-103': { explanation: "La elegibilidad estaba restringida a consultores sénior en la vía a socio, exactamente el grupo con menos probabilidad de irse en cualquier firma. La brecha de retención refleja entonces quién fue admitido al esquema, no lo que el esquema hace. Extender el trabajo remoto a todos no convertiría a los consultores junior en candidatos a socio. Las demás opciones no tocan el problema de selección." },
'ct-104': { explanation: "Autoselección otra vez: la tarjeta atrae a gente que ya compraba mucho, así que la brecha de $53 mide en buena medida quién se inscribe y no qué hace inscribirse. Convertir a un comprador ocasional no importaría la canasta del comprador leal. La facilidad de inscripción, los puntos sin redimir y los esquemas de la competencia dejan intacto ese factor de confusión." },
'ct-105': { explanation: "La tasa de cierre son los cierres divididos por las oportunidades calificadas. Endurecer la barra de calificación saca del denominador los negocios con menos probabilidad de cerrar, lo que eleva la razón aritméticamente sin una sola venta adicional. El cambio de definición y el lanzamiento del CRM ocurrieron juntos, así que el CRM puede no merecer nada del crédito. El tiempo de registro y la preferencia de los usuarios son irrelevantes para el efecto medido." },
'ct-106': { explanation: "Un bono grande e inesperado es una explicación competidora poderosa para un salto en la satisfacción general con el lugar de trabajo, y cayó justo antes de la encuesta. Que la pregunta sobre remuneración se calificara por separado no ayuda, porque el ánimo se derrama entre los ítems de una encuesta. La disrupción y el tamaño de los comedores afectan la viabilidad, no la inferencia causal." },
'ct-107': { explanation: "La salida de un competidor le entrega al servicio los suscriptores de ese mercado sin importar el precio, así que el 11% puede ser una ganancia caída del cielo y no elasticidad. Como ningún otro mercado tiene esa ganancia disponible, el resultado no se generaliza. Los espectadores ligeros, un presupuesto de contenido fijo y los volúmenes de soporte no inciden en por qué subieron los ingresos." },
'ct-108': { explanation: "El reconocimiento espontáneo mide si la gente puede nombrar la marca, no si piensa bien de ella. Una cobertura noticiosa intensa dispararía esa cifra por sí sola, así que el alza no puede atribuirse a la campaña. La mezcla de canales, una muestra levemente mayor y la variación demográfica no aportan una causa competidora." },
'ct-109': { explanation: "Bodegas nuevas más cerca de los clientes acortan los tiempos de entrega mecánicamente, y abrieron un mes antes del cambio de transportador, así que los dos efectos quedan enredados. El promedio de red no puede separarlos, y el efecto de las bodegas no se repetiría en corredores que ya son cortos. El precio, la antigüedad del proveedor anterior y unos pocos despachos tardíos no explican la mejora." },
'ct-110': { explanation: "Si los empleados más propensos a ausentarse eran los menos propensos a inscribirse, la brecha mide quién optó por entrar y no lo que el programa logra. La participación obligatoria arrastraría justo al grupo que se quedó afuera, y sus días de incapacidad no bajarían al nivel de los voluntarios. La cifra de costo y la tendencia de la industria no abordan el efecto de selección." },
'ct-111': { explanation: "Un nuevo local ancla cambia la mezcla de tráfico de ese centro comercial, lo que mueve el valor de la canasta con independencia de la distribución de los estantes. Como ninguna otra tienda tuvo ese cambio, la ganancia del piloto no es una base segura para proyectar noventa rediseños. El tiempo de obra, la dificultad de reabastecimiento y la estructura de márgenes no compiten como causas del aumento de canasta." },
'ct-112': { explanation: "Un tercio más de llamadas repetidas sugiere que los mismos problemas se están contando varias veces: los agentes están cerrando conversaciones, no resolviendo asuntos. El 24% puede entonces medir la manipulación de la métrica y no producción genuina, y el mismo incentivo produciría la misma distorsión en otra parte. Los niveles de pago, la presión percibida y una planta estable no debilitan la cifra." },
'ct-113': { explanation: "Los dos grupos no son comparables: si los cargos de nivel inicial producen calificaciones de primer año más altas en general, la brecha de dieciocho puntos refleja la mezcla de cargos y no la calidad del filtrado. Extender la herramienta a la contratación sénior es exactamente la extrapolación que los datos no pueden sostener. La velocidad de procesamiento, la opinión de los jefes y el volumen de postulaciones están al margen." },
'ct-114': { explanation: "La objeción del director financiero es específicamente que la satisfacción podría caer. Una prueba de doce meses en ocho propiedades pone a prueba esa objeción directamente y no encuentra efecto, mientras confirma los ahorros. Las normas del mercado y los compromisos públicos son razones para querer el cambio, no evidencia de que sea seguro; el vencimiento del contrato afecta solo el momento." },
'ct-115': { explanation: "La afirmación de la socia es que el quinto día es mayormente coordinación de bajo valor. Dos años de registro de tiempos mostrando que el 31% de las horas de los viernes va a trabajo interno consolidable es evidencia directa de esa premisa exacta. El entusiasmo del personal y los anuncios de competidores no son evidencia sobre la producción de la propia firma; el periodo de medición es irrelevante." },
'ct-116': { explanation: "La objeción del comité es de selección: socios escogiendo a las estrellas. La asignación aleatoria entre postulantes, combinada con que postulantes y no postulantes tengan calificaciones previas indistinguibles, elimina tanto el escogido a dedo como el canal de autoselección, dejando al esquema mismo como explicación. La satisfacción, el bajo costo y los testimonios no abordan la selección." },
'ct-117': { explanation: "El vacío que señala el equipo de finanzas es que nadie conoce el mecanismo de rotura. Los registros de inspección que muestran que el 92% de las roturas son fracturas por impacto —precisamente lo que el inserto absorbe— llenan ese vacío y hacen creíble la reducción proyectada. El material reciclado es irrelevante; el uso por un fabricante de cristalería o por un competidor no establece el mecanismo en este producto." },
'ct-118': { explanation: "La objeción es específicamente que el escalamiento se coma los ahorros. Datos del piloto que muestran que el 78% de las conversaciones cierra sin escalar y una caída de un tercio en el costo por consulta atienden esa objeción con resultados medidos. La velocidad de despliegue, el tamaño de la categoría y una base de conocimiento compartida describen el plan en vez de poner a prueba el riesgo." },
'ct-119': { explanation: "La preocupación del jefe jurídico es el descubrimiento y la reacción. Dieciocho meses de operación real mostrando apenas 4% de conocimiento y recompra sin cambios miden directamente ambas mitades de esa preocupación. Las normas de la categoría y los márgenes delgados son motivos para intentarlo; la ruta de implementación no dice nada sobre la reacción de los clientes." },
'ct-120': { explanation: "La preocupación específica de la directora de operaciones es la variedad de formas de artículos en esta bodega. Una prueba corrida contra el rango completo de SKU del propio negocio, alcanzando la tasa proyectada en el 97% de los artículos, pone a prueba esa preocupación en las condiciones exactas que importan. La trayectoria del proveedor en otros lugares, la estructura de costos y las condiciones de financiación no responden la pregunta de las formas." },
'ct-121': { explanation: "La objeción del director financiero es un intercambio de calidad. Los datos del piloto que muestran que el arranque casi se redujo a la mitad mientras las tasas de defectos se mantuvieron en el promedio de la empresa atienden precisamente ese intercambio. Quién construye el rediseño, cómo se sienten los ingenieros y cómo se comparan los competidores no prueban si la velocidad cuesta calidad." },
'ct-122': { explanation: "El punto del director financiero es que el tiempo de inactividad planeado compensa el no planeado que se evita. Los datos de plantas hermanas que cuantifican ambos lados —55% de reducción contra menos de una quinta parte devuelta— muestran que el neto es fuertemente positivo en operaciones comparables. La práctica de la industria, la calidad del equipo y la disponibilidad de repuestos no cuantifican el intercambio." },
'ct-123': { explanation: "La junta duda de que el idioma importe siquiera para la retención. Tres años de entrevistas de salida que nombran la dificultad de comunicación en el 38% de las partidas son evidencia directa de que sí importa, y convierten la propuesta de una corazonada en una solución dirigida. La calidad del proveedor, el interés del personal y la práctica de los competidores no establecen el vínculo con la retención." },
'ct-124': { explanation: "Todos los créditos superiores a USD 500.000 pasaron al comité, y todo crédito aprobado por el comité tenía un avalúo independiente, así que la cadena entrega la primera opción con certeza. La segunda se excede: los enunciados nunca dicen que los créditos delegados carecieran de avalúo, solo que los del comité lo tenían. Nada establece proporciones, y que todos los créditos grandes pasaran al comité no impide que los pequeños también pasaran." },
'ct-125': { explanation: "Algunos proveedores que pasaron las auditorías tienen base fuera de la Unión Europea, y ningún proveedor de fuera de la Unión Europea ha estado certificado por más de cinco años, así que esos que pasaron las auditorías no pueden tener certificación antigua: exactamente la segunda opción. La primera invierte el condicional. La tercera contradice la premisa de que algunos proveedores de fuera de la Unión Europea pasaron. 'La mayoría' afirma una proporción que los enunciados nunca dan." },
'ct-126': { explanation: "Recorre la cadena hacia atrás: sin confirmación significa que no fue rastreado de extremo a extremo, y si no fue rastreado no pudo venir de la bodega central. Esa es la única conclusión que la cadena obliga. La segunda opción acepta la primera mitad de ese razonamiento pero rechaza la segunda, cosa que las premisas no permiten. La tercera supone que un depósito regional es la única alternativa, y la cuarta confunde una confirmación faltante con una entrega faltante." },
'ct-127': { explanation: "Algunos vuelos con varios tramos llegaron a tiempo, y las llegadas a tiempo no tuvieron reclamaciones de compensación, así que esos vuelos quedaron libres de reclamación: la segunda opción. La primera invierte el condicional. La tercera no está establecida, ya que una salida tardía todavía puede aterrizar cerca de lo programado. La cuarta afirma un recíproco que los enunciados nunca dan." },
'ct-128': { explanation: "'Solo si' establece una condición necesaria, no una suficiente: superar los EUR 2 millones es requisito para escalar, así que todo lo escalado tuvo que superarlo. La segunda opción lee la regla al revés: el manual permite que una solicitud grande se quede por debajo del nivel del comité, y por eso se escalaron 12 y no 40. La tercera inventa un resultado que el texto nunca menciona, y la cuarta trata sobre rechazos, de los que la regla no dice nada." },
'ct-129': { explanation: "120 tiendas superaron la meta y 90 están en centros comerciales, todas las cuales la superaron. Eso deja al menos 120 − 90 = 30 tiendas que superaron la meta en otra parte. La segunda opción exigiría que los dos grupos coincidieran, cosa que los números prohíben. La tercera fija una proporción que los datos no determinan, y la cuarta es imposible: toda tienda de centro comercial superó su meta, así que ninguna de las que no la alcanzaron puede estar ahí." },
'ct-130': { explanation: "Los asuntos con honorarios de éxito no pueden ser de asesoría, y como todo asunto pertenece a exactamente uno de dos equipos, tienen que ser de litigio: por lo tanto existen asuntos de litigio. La segunda invierte ese razonamiento: los asuntos de litigio pueden facturarse de cualquier forma. La tercera compara volúmenes que el texto nunca da, y la cuarta introduce la rentabilidad, que no se menciona." },
'ct-131': { explanation: "Una orden nueva significa que Halden no está en la lista restringida, y como reprobar el filtro garantiza un lugar en esa lista, Halden no pudo haberlo reprobado. La segunda va más allá de lo que permiten las premisas: no reprobar es compatible con haber sido evaluada y aprobada. La tercera inventa una calificación que las reglas nunca mencionan, y la cuarta generaliza de un proveedor a toda la lista." },
'ct-132': { explanation: "Las tres comparaciones se encadenan en un solo orden: Mar del Norte por encima del Báltico, Báltico por encima del Adriático, Adriático por encima del Egeo. El Egeo queda entonces al fondo. La segunda está mal porque el Adriático es tercero en esa cadena, la tercera invierte una comparación explícita, y la cuarta trata los márgenes como si fueran montos sumables, cosa que el ordenamiento no permite." },
'ct-133': { explanation: "Algunos contratos indexados son con clientes del sector público, y esos clientes no aceptaron nada de menos de cinco años, así que esos contratos duran cinco años o más. La segunda invierte el condicional; la tercera y la cuarta afirman relaciones entre fecha de firma, plazo y tipo de cliente que las premisas no respaldan." },
'ct-134': { explanation: "Los dos grupos cubren 70% + 60% = 130% de las líneas, así que al menos 30% —120 líneas— tiene que caer en ambos. Eso es un piso, no una cifra fija: el traslape podría llegar hasta 60%, y por eso falla el 'exactamente' de la segunda opción. La tercera afirma lo contrario de lo que obliga la aritmética, y la cuarta plantea una división dentro del grupo de descuento que los totales no determinan." },
'ct-135': { explanation: "'A menos que' establece la única circunstancia que bloquea la renovación, así que un contratista no renovado tuvo que cumplirla. La segunda agrega una comparación que el registro no respalda: un solo incidente basta. La tercera especula sobre licitaciones futuras, que el acuerdo no aborda, y la cuarta generaliza a todos los contratistas desde una regla sobre la renovación en un caso único." },
'ct-136': { explanation: "Algunos productos con descuento estudiantil vienen empaquetados, y los productos empaquetados están en máximo dos países, así que esos productos están limitados a dos países o menos. La primera invierte el condicional; la tercera y la cuarta sacan conclusiones sobre crecimiento y cobertura de países que las premisas no autorizan." },
'ct-137': { explanation: "La brecha entre la cifra de 78% y el resultado de 12% solo cuenta como evidencia de un problema de visibilidad si las respuestas de encuesta predicen el comportamiento, y la disposición declarada a pagar suele sobreestimarlo. El director simplemente supone el vínculo y salta directo a la señalización. Las demás opciones nombran limitaciones incidentales, no el error inferencial." },
'ct-138': { explanation: "El gerente mira solo los extremos de la distribución y lee una regla causal en el patrón, ignorando que las plantas bien gestionadas pueden adoptar métodos esbeltos precisamente porque están bien gestionadas, e ignorando por completo las plantas del medio. Las definiciones, los costos y la mezcla de productos son preocupaciones prácticas, no el error de razonamiento." },
'ct-139': { explanation: "Es la falacia del costo hundido. Los USD 6 millones ya se fueron, decida lo que decida la reunión; la única pregunta racional es si gastar otros USD 3 millones compra más de USD 3 millones de valor. La aprobación del presupuesto, la certeza del costo y las alternativas de proveedor son secundarias frente a ese error de encuadre." },
'ct-140': { explanation: "Es un falso dilema. El precio, la distribución, la mejora del producto y el trabajo de retención son todas rutas plausibles para defender la participación, y el argumento saca su fuerza puramente de fingir que no existen. La cuantificación, la autoridad y el apoyo en opiniones son periféricos a ese error estructural." },
'ct-141': { explanation: "Tener un interés en el resultado puede ser razón para escrutar un argumento, pero no es razón para descartarlo. Los gerentes regionales pueden estar motivados y tener razón. El socio nunca se enfrenta al fondo de las objeciones, que es la jugada ad hominem clásica." },
'ct-142': { explanation: "La muestra está compuesta solo por personas que llegaron a soporte y se quedaron en la línea, lo que excluye a los clientes que se rindieron, nunca llamaron o se fueron en silencio: plausiblemente el grupo menos satisfecho. La conclusión sobre toda la base no se sigue. La granularidad de las calificaciones, las tendencias y el tamaño de muestra son preocupaciones menores." },
'ct-143': { explanation: "Es un argumento de pendiente resbaladiza: cada eslabón de la cadena que va de un solo traslado a la pérdida total del control financiero se afirma en vez de demostrarse, y cualquiera podría bloquearse con una regla sencilla. El monto en juego, las razones del área y el conocimiento de las demás no describen la debilidad estructural." },
'ct-144': { explanation: "La causalidad inversa está viva aquí: los equipos que ya están comprometidos, con jefes que tienen capacidad y buenas relaciones, son exactamente los equipos que sostienen reuniones semanales. Imponer el ritual no importa necesariamente las condiciones de fondo. Las tasas de respuesta, las definiciones y la carga de los jefes son asuntos de implementación." },
'ct-145': { explanation: "Un modelo no verificado es razón para suspender el juicio, no para concluir que los ahorros no existen: esta es la apelación a la ignorancia. Los ahorros pueden ser reales, exagerados o subestimados; nadie lo sabe todavía. Nombrar los supuestos, la confiabilidad de la auditoría y los factores estratégicos no capturan esa inversión." },
'ct-146': { explanation: "Razonamiento post hoc: la secuencia se está leyendo como causa. La estacionalidad, un embudo más grande entrando al periodo, cambios de precio y el crecimiento del equipo producirían todos el mismo patrón. Los valores de los negocios y el conteo de prospectos enriquecerían el análisis, pero el error es el salto causal en sí; los periodos comparados son ambos de cuatro meses." },
'ct-147': { explanation: "La experiencia hace que valga la pena escuchar el juicio de alguien; no establece que este programa en particular vaya en camino, y es precisamente la persona responsable del programa quien está reportando sobre él. La apelación a la autoridad es el error. El detalle del programa, el costo de la revisión y otras opiniones son asuntos laterales." },
'ct-148': { explanation: "Las cotizaciones cambiantes son razón de cautela sobre el proveedor en general, pero no son evidencia sobre el desempeño de procesamiento de la plataforma, que puede probarse directamente. Rechazar la afirmación con esa base confunde la confiabilidad de la fuente con la verdad de una aseveración separable y verificable." },
'ct-149': { explanation: "El plan solo funciona si los conductores que quedan fuera por precio pueden efectivamente llegar a su destino en tranvía. La capacidad ociosa de la red no dice nada sobre si sirve los orígenes y destinos correctos a las horas correctas. El potencial de expansión, la comparación de tarifas y las tendencias históricas son irrelevantes para si el cambio está disponible para los conductores de hoy." },
'ct-150': { explanation: "Las cuotas de licencia son una línea dentro del costo total de propiedad. Si el sistema más barato necesita más configuración, más personal de soporte o más capacitación, los USD 180.000 se evaporan y el argumento se cae. El socio tiene que estar suponiendo que no. La presión presupuestal futura, la posición de mercado y la identidad de los evaluadores dejan intacta la comparación de costos." },
'ct-151': { explanation: "La comparación es de donación bruta, no de contribución neta. La captación puerta a puerta es intensiva en trabajo y típicamente mucho más costosa por donante, así que una ventaja de $130 en donaciones del primer año podría borrarse fácilmente. La propuesta supone en silencio que no. La recepción del público, la edad de los donantes y el valor de por vida son secundarios frente a esa aritmética." },
'ct-152': { explanation: "Los adoptantes tempranos rara vez son una muestra aleatoria: pueden atender poblaciones de pacientes más acomodadas, más estables o mejor conectadas, cualquiera de las cuales bajaría la inasistencia sin importar los recordatorios. Sin comparabilidad, el 6% no puede trasladarse a las consultas restantes. El costo, la preferencia de canal y la estabilidad de la tendencia no reparan eso." },
'ct-153': { explanation: "La edición impresa típicamente carga publicidad e ingresos de suscripciones empaquetadas que no migran automáticamente a lo digital. Si la mayor parte de esos ingresos simplemente desaparece con la revista, cerrarla podría reducir la utilidad aun con costos que bajan. El argumento supone lo contrario. Las tasas de crecimiento, la capacitación y el comportamiento de los competidores no abordan los ingresos que el cierre destruye." },
'ct-154': { explanation: "El costo unitario incluye flete, aranceles, desperdicio durante el arranque, cercanía de proveedores y reprocesos de calidad, todos los cuales típicamente suben cuando la producción se mueve. La ventaja laboral de 38% solo sobrevive si esos no se la comen. La comparabilidad legal, la rentabilidad del producto y la estabilidad de la demanda quedan fuera del cálculo de costo unitario." },
'ct-155': { explanation: "Una cancelación baja observada al precio de hoy es evidencia sobre el comportamiento al precio de hoy. No establece que los clientes sean insensibles al precio, ya que lo mismo que los retiene puede ser justamente la relación valor-precio que reciben hoy. El argumento trata la lealtad histórica como si fuera inelasticidad al precio. Las demás opciones son riesgos reales pero no el supuesto que carga el peso." },
'ct-156': { explanation: "La comparación es entre notas otorgadas a dos cohortes distintas. Si la calificación se volvió más benévola, las notas más altas reflejan la calificación y no a los estudiantes, y el argumento se queda sin evidencia alguna. Los estándares constantes son el puente no declarado. El costo de administración, la diversidad de la admisión y la antigüedad de la entrevista no afectan la comparabilidad de las notas." },
'ct-157': { explanation: "La utilidad por pedido es el margen menos el costo de alistamiento y entrega. El domicilio rural implica trayectos más largos y menos entregas por ruta, lo que eleva marcadamente el costo por pedido. La conclusión se sostiene solo si ese aumento queda por debajo del margen adicional de la canasta más grande. La frecuencia de pedido afecta la utilidad total, no la utilidad por pedido; las ventanas de entrega y la competencia son asuntos aparte." },
'ct-158': { explanation: "El ahorro es cierto; el riesgo de ingresos no. Si suficientes pasajeros sensibles al precio se pasan a aerolíneas que aún incluyen comida, los ingresos por tiquete perdidos pueden superar los USD 22 millones y la rentabilidad cae. El argumento supone que eso no pasa. Los motivos de los competidores, los arreglos de tripulación y la inflación futura de costos no sostienen la conclusión." },
'ct-159': { explanation: "Operaciones toma el piso 1 y Marketing el 5, dejando los pisos 2, 3 y 4 para Finanzas, Jurídica y Recursos Humanos. Finanzas directamente encima de Jurídica permite Jurídica 2 / Finanzas 3, o Jurídica 3 / Finanzas 4. En el primer caso Recursos Humanos cae en el piso 4, adyacente a Finanzas en el 3, lo que está prohibido. Así que Jurídica está en el piso 3, Finanzas en el 4 y Recursos Humanos en el 2." },
'ct-160': { explanation: "Patel toma el miércoles, dejando lunes, martes y jueves para Reyes, Novak y Okafor. Okafor no puede tomar el lunes, así que el lunes va para Reyes o Novak; y como Reyes precede a Novak, Novak no puede ser el primero, así que Reyes queda el lunes. Novak toma entonces el martes o el jueves según dónde quede Okafor, así que solo la ubicación de Reyes está forzada." },
'ct-161': { explanation: "Las tres comparaciones se encadenan en Sena sobre Nadia sobre Omar sobre Rafael, y Priya está fija en el quinto lugar. Eso deja exactamente un orden posible: Sena primera, Nadia segunda, Omar tercero, Rafael cuarto, Priya quinta." },
'ct-162': { explanation: "Nómina fija la posición 1, así que contratos/facturas quedan en 2-3, 3-4 o 4-5. La opción 4-5 no deja espacio detrás de facturas para impuestos. Con contratos 2 / facturas 3, impuestos y auditoría toman 4 y 5, y como auditoría no puede ser 5, impuestos es 5. Con contratos 3 / facturas 4, impuestos tiene que ir detrás de 4, así que otra vez 5. Impuestos en la posición 5 se sostiene en ambos casos." },
'ct-163': { explanation: "Mbeki toma el turno 5 y Oyelaran el 2, dejando los turnos 1, 3 y 4 para Kaur, Lindqvist y Novak. El único par consecutivo entre esos turnos es 3-4, así que Kaur presenta tercero y Lindqvist cuarto. Novak toma el turno 1 restante, lo que además satisface el requisito de que Novak preceda a Kaur." },
'ct-164': { explanation: "Oslo y Roma fijan los días 1 y 5, dejando los días 2, 3 y 4. Madrid seguido inmediatamente por Lisboa da Madrid 2 / Lisboa 3, o Madrid 3 / Lisboa 4. La primera deja a Praga en el día 4, después de Madrid, cosa que las restricciones prohíben. Así que Madrid es el día 3, Lisboa el 4 y Praga el 2." },
'ct-165': { explanation: "Ana y Diego ocupan los extremos, dejando las sillas 2, 3 y 4 para Carla, Bruno y Elena. Carla inmediatamente a la izquierda de Bruno da Carla 2 / Bruno 3 con Elena en 4, o Carla 3 / Bruno 4 con Elena en 2. Elena por lo tanto nunca ocupa la silla 3, mientras que cualquier otra opción se sostiene en solo uno de los dos arreglos." },
'ct-166': { explanation: "El reporte toma el paso 5, así que el par alcance-muestreo queda en 1-2, 2-3 o 3-4. El trabajo de campo debe preceder al muestreo, lo que descarta el par en 1-2 y por lo tanto descarta que el alcance sea primero y el muestreo segundo. El trabajo de campo siempre cae en el paso 1 o 2, nunca cuarto. Con alcance en 3 y muestreo en 4, el trabajo de campo puede tomar el paso 2 y la revisión el paso 1." },
'ct-167': { explanation: "Las dos comparaciones se encadenan en Lyon sobre Turín sobre Malmö, así que ni Turín ni Malmö pueden quedar primeras, y a Cracovia la tercera condición le prohíbe el primer lugar. Lyon es la única oficina que queda para la posición más alta. Cracovia puede entonces quedar segunda, tercera o cuarta, lo que deja sin fijar todas las demás opciones." },
'ct-168': { explanation: "Finanzas toma el lunes, así que cumplimiento tiene que ser martes o miércoles. El par seguridad-ética debe ocupar días consecutivos entre martes, miércoles y jueves. Si seguridad fuera el martes y ética el miércoles, cumplimiento quedaría empujado al jueves, que está prohibido. Así que seguridad es el miércoles, ética el jueves y cumplimiento el martes." },
'ct-169': { explanation: "La paradoja es que una página más rápida convierte peor. Si el paso de confirmación eliminado estaba haciendo un trabajo real —dejar que los compradores detectaran errores antes de comprometerse—, entonces quitarlo mueve el momento de duda a la pantalla de pago, donde el abandono es definitivo. El lanzamiento simultáneo, la varianza en el tiempo de página y la práctica de los competidores describen la situación sin explicar la caída." },
'ct-170': { explanation: "La detección al final de línea no puede mejorar los resultados si la prevención aguas arriba se degrada más rápido de lo que mejora la detección. Quitar los controles en proceso eleva el número de defectos creados, e incluso un filtro final muy bueno deja pasar una fracción de una población mucho mayor. El costo de mantenimiento, la velocidad de inspección y la reubicación no conectan la calidad de detección con lo que recibe el cliente." },
'ct-171': { explanation: "La tasa de desempleo son los desempleados divididos por la fuerza laboral, y solo cuentan en la fuerza laboral quienes buscan activamente. Si los trabajadores desanimados vuelven a entrar y empiezan a buscar, crecen tanto el numerador como el denominador, y la razón puede subir aunque el empleo trepe. Los salarios, las horas y la mezcla regional dejan intacta la aritmética de la tasa." },
'ct-172': { explanation: "El tiempo de primera respuesta mide velocidad, no resolución. Duplicar la planta con personal sin experiencia compra velocidad mientras baja la proporción de contactos que realmente resuelven el problema, así que los clientes reciben una respuesta rápida, siguen atascados y escalan. La amplitud de producto, la cobertura horaria y el costo no explican por qué respuestas más rápidas satisficieron menos." },
'ct-173': { explanation: "El esquema mide los residuos en el punto de recolección del propio hogar, así que los residuos desplazados a otra parte siguen llegando al relleno mientras desaparecen de la cifra medida. Eso reconcilia una caída medida marcada con un tonelaje total plano. El tamaño del reembolso y la participación parcial amortiguarían la caída medida, que sí ocurrió; la capacidad de reciclaje no tiene relación." },
'ct-174': { explanation: "La siniestralidad son los siniestros sobre la prima, así que encoger la cartera importa tanto como mejorar su calidad. Si el endurecimiento espantó buenos riesgos junto con los malos, el ingreso por primas cae más rápido que los siniestros y la razón se deteriora pese a una frecuencia de siniestros más limpia. La última opción es una generalidad cierta pero no nombra ningún mecanismo; el presupuesto y la competitividad del mercado no explican nada." },
'ct-175': { explanation: "Acelerar una etapa de un proceso no acorta el conjunto salvo que el cuello de botella se mueva con ella. La evaluación más temprana empuja a más pacientes a una fila de imágenes de capacidad fija, así que la espera se reubica en vez de eliminarse y el tiempo total puede subir. La documentación, la estacionalidad y el modo de llegada no explican un aumento sistemático." },
'ct-176': { explanation: "Recortar precios en productos básicos inelásticos baja el ingreso por canasta sin generar volumen extra, así que los ingresos caen aunque mejore la percepción de valor. También explica por qué las transacciones no subieron: nadie hace un viaje adicional por leche que ya estaba comprando. Los canales de publicidad, los movimientos de los competidores y el tamaño de las tiendas no conectan la ganancia de percepción con la pérdida de ingresos." },
'ct-177': { explanation: "Los miembros del comité de riesgo son un subconjunto de los directores, y los directores están enteramente excluidos de los auditores. Un subconjunto de un grupo excluido está a su vez excluido, así que ningún miembro del comité es auditor. La segunda invierte la relación de subconjunto, la tercera contradice la segunda premisa, y la cuarta introduce una afirmación sobre calificaciones que no aparece en ninguna parte." },
'ct-178': { explanation: "Los proveedores del exterior mencionados están aprobados, y todo proveedor aprobado pasó la verificación, así que esos proveedores en particular son a la vez del exterior y verificados financieramente: una conclusión existencial. La primera y la cuarta generalizan a todos los proveedores del exterior, incluidos los no aprobados que las premisas nunca mencionan; la tercera invierte el condicional." },
'ct-179': { explanation: "Los contratos con cláusula de arbitraje que tiene el área jurídica no pueden estar entre los firmados este año, ya que ninguno de esos tiene tal cláusula. Eso establece que algunos de sus contratos son anteriores a este año, pero no que todos lo sean: bien puede tener otros contratos firmados este año sin cláusula de arbitraje, y por eso la primera opción se excede." },
'ct-180': { explanation: "El contrapositivo de la primera premisa es exacto: si la aprobación de la junta garantiza un patrocinador, entonces no tener patrocinador garantiza no tener aprobación de la junta. La primera opción es tentadora pero inválida, porque los proyectos patrocinados que van retrasados no tienen por qué ser los aprobados. La segunda invierte el condicional y la cuarta afirma una proporción que nada respalda." },
'ct-181': { explanation: "El personal temporal está excluido de la certificación, pero la certificación es solo una condición suficiente para operar la línea, así que la primera opción no se sigue: alguien podría estar autorizado por otra vía. Lo que sí se sigue es que los técnicos certificados, que pueden operar la línea, no son personal temporal. La segunda contradice una premisa y la tercera invierte el condicional." },
'ct-182': { explanation: "Los gerentes regionales que completaron el programa son elegibles, lo que respalda una afirmación existencial pero no una universal: nada nos dice sobre los gerentes regionales que no lo completaron. La tercera convierte una condición suficiente en necesaria, y la cuarta invierte la relación entre elegibilidad y cargo." },
'ct-183': { explanation: "Todos los productos de esta temporada están en la tienda insignia, y nada descontinuado está en esa tienda, así que ningún producto de esta temporada puede estar descontinuado. La segunda invierte la relación de subconjunto; la tercera afirma que hay inventario en otro lugar, cosa que las premisas nunca mencionan; la cuarta convierte una condición de una sola vía en una garantía sobre todos los productos no descontinuados." },
'ct-184': { explanation: "Solo el contrapositivo está garantizado: revisado implica no productivo, así que no ser no productivo implica no haber sido revisado. La primera es inválida porque los créditos no productivos anteriores a 2020 no tienen por qué ser los revisados. La segunda invierte el condicional y la cuarta inventa una proporción." },
'ct-185': { explanation: "El segundo argumento es a la vez relevante y sustancial: establece una base grande de usuarios afectados y una tasa de falla demostrada, que juntas muestran que la auditoría arreglaría un problema real y recurrente. Los demás afirman valores, imitan a los competidores o apelan a las apariencias sin evidencia de que la auditoría cambiaría algo." },
'ct-186': { explanation: "Que los eventos virtuales se hayan vuelto comunes es una observación de arrastre: reporta lo que hacen otros sin dar ninguna razón por la que el cambio le sirva a esta firma. Los otros tres identifican cada uno un beneficio concreto —eliminar una barrera documentada de asistencia, un ahorro grande de costo y un alcance ampliado— que incide directamente en la decisión." },
'ct-187': { explanation: "Sesenta y un errores de medicación rastreados directamente a registros fragmentados es a la vez relevante y grave: nombra un daño específico que el sistema unificado atendería y lo cuantifica. La simplicidad regulatoria y las múltiples credenciales son genuinas pero menores, y lo que hacen otros grupos hospitalarios no es un argumento sobre los pacientes de este hospital." },
'ct-188': { explanation: "La ubicación del tercero respecto a los viajes de los ejecutivos no dice nada sobre calidad de servicio, costo o capacidad: es una irrelevancia disfrazada de razón. La capacitación de producto más profunda, seis años de escalada de costos y el control directo sobre la calidad sí inciden en si el cambio mejoraría los resultados." },
'ct-189': { explanation: "La encuesta a empleadores aporta exactamente la evidencia que la decisión necesita: identifica un déficit específico en los egresados de esta universidad y lo ubica como el más serio. El rigor es una virtud vaga, la práctica de las universidades pares es imitación, y la capacidad del departamento aborda la viabilidad y no si vale la pena exigir el curso." },
'ct-190': { explanation: "Llamar a los pagos con tarjeta 'más modernos' es una apelación a la novedad: la modernidad no es en sí un beneficio, y el argumento no da ninguna consecuencia que se siga de ella. Los otros tres cuantifican un costo, establecen que el volumen afectado es pequeño y decreciente, e identifican una ganancia operativa concreta." },
'ct-191': { explanation: "El segundo argumento cuantifica el costo en los propios términos del banco: catorce cierres dejarían varados a clientes sin alternativa, y la cifra de cuatro veces la deserción muestra la consecuencia en ingresos. La impopularidad, la antigüedad y los requisitos de consulta son reales pero no pesan contra el cierre con fuerza ni evidencia comparables." },
'ct-192': { explanation: "Quién eligió la distribución actual, y si sigue trabajando ahí, no nos dice nada sobre si la distribución funciona. Es un argumento sobre la fuente y no sobre el fondo. Los otros tres ofrecen evidencia de encuesta sobre el problema, evidencia de que el espacio de colaboración está genuinamente escaso, y confirmación de que el cambio es permitido." },
'ct-193': { explanation: "La energía solar en techo solo compensa el consumo que coincide con la generación; todo lo demás se exporta a una tarifa menor o se desperdicia. Si la carga más pesada de la panadería es el horneado nocturno, la cifra de $310.000 se derrumba y con ella el retorno. La visibilidad, la identidad del proveedor y la adopción por pares no tocan el cálculo del ahorro." },
'ct-194': { explanation: "Si las furgonetas no pueden completar un turno sin detenerse a cargar, la flota pierde horas productivas y puede necesitar más vehículos, lo que destruye el retorno a cinco años sobre el que descansa todo el caso. La rotulación y el número de fabricantes son irrelevantes, y la familiaridad de los conductores es un asunto de capacitación corta, no un riesgo estructural." },
'ct-195': { explanation: "El valor de una editorial son en buena medida sus relaciones con autores. Si una parte grande de los ingresos de la empresa objetivo descansa en contratos de los que los autores pueden salirse una vez cambia la propiedad, el adquirente podría pagar USD 18 millones por un catálogo que se va. El historial comercial, la selección de asesores y la cercanía de oficinas son menores frente a ese riesgo." },
'ct-196': { explanation: "La proyección usa los arriendos vigentes, que son lo que gana el espacio ocupado. Si las oficinas con servicios del sector ya están sustancialmente desocupadas, tanto el arriendo alcanzable como la ocupación quedarán cortos y los $500.000 son ficticios. La duración de la obra afecta el momento, y el arquitecto y el restaurante no tienen relación con si el arriendo es alcanzable." },
'ct-197': { explanation: "Si la mayor parte del gasto dominical simplemente se corre del sábado o del lunes, el ingreso adicional está en buena medida canibalizado mientras el costo adicional de personal es enteramente nuevo, y una contribución positiva se vuelve negativa. Las preferencias del personal, los horarios de la competencia y los cronogramas de entrega afectan la implementación, no si el ingreso es genuinamente incremental." },
'ct-198': { explanation: "Los $700.000 cuentan solo los costos que se quitan, no los que se agregan. La facturación de nube escala con el almacenamiento y sobre todo con la salida de datos, y a volúmenes altos esos cargos consumen rutinariamente todo el ahorro. Las preferencias de lenguaje y la adopción del sector son irrelevantes, y las fechas de compra de los servidores importan solo para el valor residual." },
'ct-199': { explanation: "Toda la economía de la propuesta depende de cuántas unidades fallan en los tres años adicionales que se cubrirían. Una tasa de falla baja hace de la garantía una herramienta de venta barata; una alta la convierte en un pasivo grande sin fondeo que la ganancia de 12% en volumen no alcanzaría a cubrir. La distribución minorista, el historial de la garantía y la publicidad de los competidores no dimensionan esa exposición." }
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
