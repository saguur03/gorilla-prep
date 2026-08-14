/* LA GUÍA (español) — misma estructura que guide-en.js.
   El campo `type` de cada tema coincide con el `type` de las preguntas del banco. */
window.GUIDE = window.GUIDE || {};
window.GUIDE.es = {
title: 'La Guía',
subtitle: 'Una técnica para cada tipo de pregunta de la prueba',
intro: [
  'Esto no es un resumen de las preguntas: es el conjunto de movimientos que las resuelve. Lee una sección antes de practicarla y vuelve a ella cada vez que falles una pregunta de ese tipo.',
  'La prueba es TestGorilla, armada a partir de una biblioteca de tests publicada, así que los formatos son conocidos y cada uno tiene un método repetible. Nada de esto exige memorizar contenido: se trata de reconocer una forma y aplicar el movimiento correcto.'
],

sections: [

/* ============================ NÚCLEO ============================ */
{
  id:'core', icon:'🧭', title:'Antes que nada',
  blurb:'Las reglas del juego y los hábitos que aplican a todas las secciones.',
  topics: [
    {
      title:'Cómo funciona realmente la prueba',
      recognise:'Datos confirmados en fuentes de Bain y de TestGorilla.',
      steps:[
        'Cuatro secciones cronometradas, unos 45 minutos en total, todas de opción múltiple con cuatro alternativas.',
        'NO puedes volver a una pregunta ya respondida. Decide y avanza.',
        'SÍ se permite calculadora y papel. Usa el papel para estructurar y la calculadora para la aritmética.',
        'La cámara está encendida y debes desactivar las extensiones del navegador.',
        'Según las guías de preparación, la precisión pesa más que la velocidad.',
        'No hay penalización por responder mal, así que nunca dejes una pregunta en blanco.'
      ],
      traps:[
        'Tomar los tiempos objetivo como fechas límite. Son guías de ritmo: una respuesta correcta en 60s vale más que una incorrecta en 30s.',
        'Quemar tres minutos en una pregunta difícil y perder cuatro fáciles que nunca alcanzaste.'
      ]
    },
    {
      title:'Los cuatro hábitos que suben cualquier puntaje',
      recognise:'Aplícalos en cada pregunta, en cada sección.',
      steps:[
        'LEE PRIMERO LA PREGUNTA. Antes del texto, antes de la tabla. No puedes detectar lo relevante si no sabes qué te preguntan.',
        'ELIMINA, no selecciones. Tacha lo que es claramente falso. Dos eliminaciones convierten un tiro al aire de 25% en 50%.',
        'RESPONDE CON LO QUE TE DAN. Nunca con lo que sabes del mundo real ni con lo que suena razonable.',
        'VERIFICA EL ORDEN DE MAGNITUD. Antes de confirmar, pregúntate si el tamaño es plausible. Casi todos los errores aritméticos fallan por un factor de 10 o invierten una fracción.'
      ],
      traps:[
        'Las palabras extremas en una opción — siempre, nunca, todos, solo, debe — suelen ser incorrectas en preguntas de inferencia y lectura, porque el texto rara vez las respalda.',
        'Una opción que es cierta en el mundo real pero no está respaldada por el texto sigue siendo incorrecta.'
      ]
    },
    {
      title:'Ritmo y cuándo adivinar',
      recognise:'Cómo gastar el reloj.',
      steps:[
        'Cada pregunta tiene un tiempo objetivo en esta app, ajustado por dificultad. Míralo antes de empezar.',
        'Si pasas 1.5× el objetivo y no ves ruta a la respuesta, elimina lo que puedas, escoge y sigue.',
        'En la primera pasada responde todo lo que puedas con seguridad. La dificultad no está ordenada: también hay preguntas fáciles al final.',
        'Invierte los segundos ahorrados en releer el enunciado, no en revisar aritmética que ya hizo la calculadora.'
      ],
      traps:['Costo hundido. El tiempo ya gastado en una pregunta no vuelve, y no es razón para gastar más.']
    }
  ]
},

/* ============================ PENSAMIENTO CRÍTICO ============================ */
{
  id:'ct', icon:'🧠', title:'Pensamiento Crítico',
  blurb:'16 preguntas en 12 minutos. TestGorilla clasifica esta sección como Avanzada. Mezcla lógica formal, acertijos de ordenamiento y análisis de argumentos.',
  topics: [
    {
      type:'syllogism', title:'Silogismos y conclusiones lógicas',
      recognise:'Premisas con Todos / Algunos / Ningún / Solo, seguidas de "¿qué conclusión se sigue necesariamente?"',
      steps:[
        'Traduce cada premisa a una relación entre conjuntos: "Todos los A son B" = A→B. "Ningún A es B" = A y B nunca se cruzan. "Algunos A son B" = hay al menos un cruce.',
        'Encadena los condicionales: A→B y B→C dan A→C.',
        'Usa el contrarrecíproco con libertad: A→B equivale exactamente a no-B→no-A.',
        'Pon a prueba cada opción intentando romperla: ¿puedes imaginar un mundo donde todas las premisas se cumplan y la opción sea falsa? Si sí, no se sigue.'
      ],
      key:[
        'Dos premisas con "algunos" no producen NINGUNA conclusión válida por sí solas.',
        'Si una premisa dice "algunos", la conclusión solo puede decir "algunos".',
        'Si una premisa es negativa, cualquier conclusión válida es negativa.',
        'Nunca inviertas un condicional. "Todos los A son B" NO da "Todos los B son A".',
        'Asume que las categorías mencionadas no están vacías: es el estándar en estas pruebas.'
      ],
      traps:[
        'La inversión (afirmar el consecuente): "Todos los del equipo de auditoría están certificados; Rodríguez está certificado" no te da nada.',
        'Convertir "algunos" en "todos".',
        'Suponer que dos grupos de "algunos" se cruzan cuando las premisas permiten que no lo hagan.'
      ],
      example:{
        q:'Todas las rosas son flores. Algunas flores se marchitan rápido.',
        a:'No se puede determinar si alguna rosa se marchita rápido.',
        why:'Las rosas están dentro de las flores, pero las flores que se marchitan rápido podrían estar completamente fuera del subconjunto de las rosas. Tanto "algunas rosas se marchitan" como "ninguna rosa se marchita" son compatibles con las premisas, así que ninguna se sigue.'
      }
    },
    {
      type:'inference', title:'Inferencias y "debe ser verdad"',
      recognise:'"¿Qué debe ser verdad?", "¿qué se puede inferir?", "¿qué está mejor respaldado?"',
      steps:[
        'La respuesta debe demostrarse solo con el texto. Sin conocimiento externo, sin añadidos que suenen razonables.',
        'Prefiere el enunciado más débil y seguro. "Algunos" es más seguro que "todos"; "al menos" es más seguro que "exactamente".',
        'Recorre cada opción y pregúntate: ¿qué dato extra tendría que suponer? Si necesitas alguno, descártala.',
        'No desconfíes de una opción por parecer obvia. Una casi reformulación de una premisa es a prueba de balas y suele ser la respuesta.'
      ],
      traps:[
        'Lenguaje extremo en la opción.',
        'Leer una afirmación causal en un texto que solo reporta una correlación.',
        'Confundir "reportó", "cree" o "espera" con "es verdad".',
        'Razones y tasas: un conteo bruto que sube mientras la tasa baja, o al revés.'
      ],
      example:{
        q:'Entre los empleados que recibieron la capacitación, el 85% reportó mayor confianza.',
        a:'La mayoría de los capacitados creyó que su confianza aumentó.',
        why:'85% supera la mitad, así que "la mayoría" se sigue y no afirma nada más. Decir que la capacitación mejoró la habilidad real confunde el autorreporte con la medición; además no hubo grupo de comparación sin capacitar.'
      }
    },
    {
      type:'arrangement', title:'Ordenamientos y secuencias',
      recognise:'Restricciones en viñetas sobre orden, posición, días, pisos o rankings; o una secuencia de letras.',
      steps:[
        'Dibuja las casillas en papel: 1 2 3 4 5, o lun–jue, o pisos 1–6.',
        'Coloca primero las restricciones ABSOLUTAS ("Torres es el jueves", "R está en el extremo izquierdo"). Son el ancla de todo lo demás.',
        'Convierte las restricciones relativas en una sola cadena: A antes de B, B antes de C da A < B < C.',
        'Aplica las restricciones negativas ("no el lunes") como eliminaciones.',
        'Quedan pocas ubicaciones posibles: pruébalas. Una contradicción significa retroceder, no adivinar.',
        'Para secuencias de letras, conviértelas a posiciones (A=1 … Z=26) y trátalas como una serie numérica.'
      ],
      traps:[
        'Olvidar por completo una restricción negativa.',
        'Suponer que dos elementos son adyacentes cuando la pista solo fija su orden.',
        'Leer hacia adelante una secuencia que va hacia atrás en el alfabeto.'
      ],
      example:{
        q:'Cuatro candidatos, lunes a jueves. Rojas no el lunes. Silva el día después de Rojas. Torres el jueves.',
        a:'Uribe es entrevistado el lunes.',
        why:'Torres ancla el jueves. Rojas no puede ser lunes, y Rojas el miércoles forzaría a Silva al jueves, donde ya está Torres. Entonces Rojas es martes, Silva miércoles, y el lunes queda para Uribe.'
      }
    },
    {
      type:'weaken', title:'Debilitar una afirmación causal',
      recognise:'"¿Qué debilita más?" La conclusión dice que X causó Y, normalmente a partir de una correlación.',
      steps:[
        'Escribe la conclusión y la evidencia en una línea cada una.',
        'Nota que el argumento casi siempre salta de "X e Y ocurrieron juntos" a "X causó Y".',
        'Ataca ese salto con uno de seis movimientos: una CAUSA ALTERNATIVA, causalidad INVERSA, una VARIABLE CONFUSORA que afecte a ambas, un efecto de SELECCIÓN, una muestra NO REPRESENTATIVA, o una TASA BASE ausente.',
        'La respuesta correcta solo tiene que hacer la conclusión menos probable; no necesita refutar nada.'
      ],
      traps:[
        'Escoger una objeción de costo, viabilidad o popularidad cuando la afirmación es sobre causalidad.',
        'Escoger algo que ataque una premisa que te pidieron aceptar como verdadera.',
        'Confundir un dato sobre utilidad con uno sobre ingresos.'
      ],
      example:{
        q:'Se instalaron luminarias más brillantes en Main Street; el crimen bajó 30%. Las autoridades lo atribuyen a la iluminación.',
        a:'La policía duplicó las patrullas en Main Street en esos mismos seis meses.',
        why:'Una causa alternativa simultánea, además reconocida como determinante del crimen, compite directamente con la explicación de la iluminación y podría explicar toda la caída.'
      }
    },
    {
      type:'strengthen', title:'Fortalecer una afirmación',
      recognise:'"¿Qué fortalece más / respalda mejor?"',
      steps:[
        'Encuentra el hueco que el argumento salta: normalmente el mismo salto causal de las preguntas de debilitar.',
        'El mejor respaldo cierra ese hueco descartando la explicación alternativa principal.',
        'Una COMPARACIÓN CONTROLADA es el estándar de oro: un grupo aleatorizado, o un grupo equivalente que no recibió el tratamiento y no mejoró.',
        'Revisa la dirección. Algunas opciones debilitan en silencio al introducir una causa competidora.'
      ],
      traps:[
        'Reputación, prestigio, popularidad, calidad del proveedor, costo y entusiasmo del equipo nunca son evidencia de que algo funcionó.',
        'Una tendencia general de fondo normalmente DEBILITA una afirmación causal específica en vez de respaldarla.'
      ],
      example:{
        q:'Una ciudad afirma que su programa educativo subió el reciclaje de 30% a 45%.',
        a:'Las tasas subieron fuerte donde hubo programa y se quedaron cerca de 30% en distritos similares sin programa.',
        why:'Los distritos sin tratamiento funcionan como grupo de control y descartan tendencias generales y demografía como explicación.'
      }
    },
    {
      type:'assumption', title:'Supuestos necesarios',
      recognise:'"El argumento depende de qué supuesto", "la conclusión asume que..."',
      steps:[
        'Escribe el argumento como premisa → conclusión y busca el puente no dicho entre ambas.',
        'Aplica la PRUEBA DE NEGACIÓN: niega la opción y relee el argumento. Si se derrumba, esa opción es el supuesto. Si sobrevive, no lo es.',
        'Prefiere la opción modesta. Un supuesto necesario es lo mínimo que el argumento requiere, no el respaldo más fuerte disponible.'
      ],
      traps:[
        'Confundir un fortalecedor (ayuda) con un supuesto (sin él, el argumento muere). Usa la negación para separarlos.',
        'Escoger un dato que es solo contexto relevante.'
      ],
      example:{
        q:'El nuevo software reduce 40% el tiempo de modelaje, así que la firma puede tomar 40% más proyectos.',
        a:'El tiempo de modelaje es lo que hoy limita cuántos proyectos puede aceptar la firma.',
        why:'Niégalo: si el modelaje NO es la restricción, modelar más rápido no compra ni un proyecto extra y la conclusión falla por completo. Ese derrumbe es la firma de un supuesto necesario.'
      }
    },
    {
      type:'flaw', title:'Nombrar la falla',
      recognise:'"El razonamiento es defectuoso porque...", "es vulnerable a la crítica de que..."',
      steps:[
        'Nombra la falacia antes de mirar las opciones, y después busca la opción que la enuncia.',
        'Recorre el catálogo de abajo: alguna encaja en casi todas las preguntas de este tipo.'
      ],
      key:[
        'Correlación tomada como causalidad.',
        'Atacar la fuente en vez del argumento (ad hominem / genética).',
        'Hombre de paja: refutar una versión exagerada de la posición.',
        'Falso dilema: se presentan dos opciones cuando existen más.',
        'Apelación a la autoridad, la popularidad, la tradición o la ignorancia (el silencio tomado como acuerdo).',
        'Sesgo de selección y de supervivencia; encuestados autoseleccionados.',
        'Parte–todo: lo cierto de un miembro no tiene por qué serlo del grupo.',
        'Confusión entre porcentaje y PUNTOS porcentuales.',
        'Falta de referencia: juzgar desempeño sin comparación.',
        'Tomar el promedio como el caso típico cuando la distribución está sesgada.',
        'Medir un sustituto (alcance, reuniones hechas) en vez del objetivo real.'
      ],
      traps:['Una opción puede señalar una debilidad real que no es el error LÓGICO por el que preguntan.'],
      example:{
        q:'"Nuestros mejores vendedores llegan antes de las 8, así que exigir esa hora a todos subirá las ventas."',
        a:'Asume que una característica compartida por los exitosos es lo que causa su éxito.',
        why:'Llegar temprano es plausiblemente un síntoma del impulso de fondo, no su causa. Imponer el síntoma no trasplanta el rasgo.'
      }
    },
    {
      type:'paradox', title:'Resolver una paradoja',
      recognise:'Dos hechos que parecen contradecirse. "¿Qué explica mejor / resuelve la discrepancia?"',
      steps:[
        'Escribe ambos hechos con precisión, con números si los dan.',
        'Haz la aritmética donde puedas: suele mostrar exactamente qué tan grande es el hueco a explicar.',
        'Busca un segundo canal oculto: otras líneas de ingreso, otros costos, un cambio de mezcla, o un cambio en el denominador.',
        'Prueba cada opción contra AMBOS hechos. Si solo explica uno, está mal.'
      ],
      traps:[
        'Opciones que mueven la utilidad cuando el enigma es sobre ingresos, o al revés. Un alza en combustible nunca explica una caída de ingresos.',
        'Opciones que reformulan la paradoja en vez de resolverla.'
      ],
      example:{
        q:'Tarifas -15%, boletos vendidos +30%, y aun así el ingreso total de la ruta CAYÓ.',
        a:'La aerolínea también eliminó cargos por equipaje y selección de asiento, que generaban ingresos importantes.',
        why:'0.85 × 1.30 ≈ 1.10, así que el ingreso por boletos debió subir ~10%. La caída tiene que venir de ingresos fuera de la tarifa base, que es justo lo que aportaban los cargos eliminados.'
      }
    },
    {
      type:'evaluate', title:'Evaluar un plan',
      recognise:'"¿Responder cuál pregunta sería más útil para evaluar...?"',
      steps:[
        'Identifica el mecanismo del plan: la cadena por la que se supone que produce el resultado.',
        'Encuentra el eslabón más débil de esa cadena.',
        'La pregunta correcta es aquella cuyas dos respuestas posibles empujan la conclusión en direcciones OPUESTAS.',
        'Compruébalo: "Si la respuesta es sí, ¿funciona el plan? Si es no, ¿fracasa?" Ambas deben cumplirse.'
      ],
      traps:['Los datos descriptivos —antigüedad de la empresa, número de empleados, quién provee el equipo— nunca deciden si un plan funciona.'],
      example:{
        q:'Mudar el centro de servicio a la Ciudad B, donde los salarios son 30% menores.',
        a:'¿La producción por empleado en B es comparable a la de A?',
        why:'Si la productividad es menor, hará falta más personal y el ahorro salarial se encoge o desaparece. Sí y no llevan a conclusiones opuestas, y eso la vuelve la pregunta decisiva.'
      }
    },
    {
      type:'argument-strength', title:'Argumentos fuertes vs. débiles',
      recognise:'"¿Cuál es el argumento más fuerte / más débil a favor o en contra?" Es el formato Watson-Glaser.',
      steps:[
        'Un argumento es FUERTE solo si pasa AMBAS pruebas: (a) es directamente relevante a la pregunta exacta, y (b) es sustantivo, capaz de cambiar la decisión.',
        'Si falla cualquiera de las dos, es débil, por más cierto que sea el enunciado.',
        'Pregúntate: "si aceptara esto, ¿realmente me movería?" Si la conexión necesita varios pasos no dichos, es débil.'
      ],
      key:[
        'DÉBIL automáticamente: preferencia personal, tradición ("siempre lo hemos hecho así"), popularidad ("otros lo hacen"), prestigio de la fuente, consecuencias triviales, apelación emocional, hechos irrelevantes.',
        'Típicamente FUERTE: evidencia medida, un efecto cuantificado de tamaño suficiente para cambiar la decisión, un historial documentado, una consecuencia directa sobre el objetivo en juego.'
      ],
      traps:[
        'Juzgar según si estás de acuerdo con la conclusión.',
        'Llamar débil a un argumento por ser una estimación, o por no abordar todos los demás factores. La fuerza se juzga por lo que el argumento aporta.'
      ],
      example:{
        q:'¿La universidad debería ser gratuita? "No — los estudiantes tendrían más tiempo libre del que tienen ahora."',
        a:'Débil: la consecuencia es trivial y no toca cómo debe financiarse la educación.',
        why:'Aun concediendo que sea cierto, no se mete con el costo, la equidad ni el acceso. Aquí la debilidad es de relevancia y peso, no de verdad.'
      }
    }
  ]
},

/* ============================ NUMÉRICO ============================ */
{
  id:'num', icon:'🔢', title:'Razonamiento Numérico',
  blurb:'12 preguntas en 10 minutos, nivel Intermedio. Se permite calculadora, así que lo que se evalúa es plantear el problema: rápido y bien.',
  topics: [
    {
      type:'percent', title:'La caja de herramientas de porcentajes',
      recognise:'Cualquier cosa con %, descuentos, incrementos, o "qué porcentaje de".',
      steps:[
        'Variación porcentual = (nuevo − viejo) ÷ VIEJO. El denominador siempre es el valor inicial.',
        'Para revertir un porcentaje, DIVIDE. Tras un descuento del 20% el precio es 0.8 × original, así que original = precio ÷ 0.8.',
        'Los porcentajes sucesivos se MULTIPLICAN: +20% y luego −20% es 1.2 × 0.8 = 0.96, una pérdida del 4%.',
        'Revertir un +x% requiere un −% menor: subir 25% (×1.25) exige bajar 20% (×0.8).'
      ],
      key:[
        '10% = corre la coma un lugar. 5% = la mitad de eso. 15% = 10% + 5%. 20% = doble del 10%. 25% = ÷4. 33⅓% = ÷3.',
        '"A es 40% mayor que B" NO es "B es 40% menor que A" (es 28.6% menor).',
        'PUNTOS porcentuales ≠ porcentaje. De 2% a 3% es +1 punto pero un aumento del 50%.',
        'Si x es 1/n de y, entonces y es n × 100% de x.'
      ],
      traps:['Dividir por el valor nuevo en vez del viejo: el error más común de toda la sección.']
    },
    {
      type:'margin', title:'Margen, markup y punto de equilibrio',
      recognise:'Precio, costo, margen, contribución, costos fijos, equilibrio.',
      steps:[
        'Decide primero si preguntan por MARGEN o por MARKUP. Tienen denominadores distintos.',
        'Margen = (precio − costo) ÷ PRECIO. Markup = (precio − costo) ÷ COSTO.',
        'Para fijar precio con margen objetivo m: precio = costo ÷ (1 − m). Sumar m% al costo da mal.',
        'Contribución por unidad = precio − costo variable. Es esto, no el precio, lo que manda en el equilibrio.'
      ],
      key:[
        'Unidades de equilibrio = costos fijos ÷ contribución por unidad.',
        'Ingreso de equilibrio = costos fijos ÷ margen de contribución %.',
        'Utilidad = contribución × unidades − costos fijos.',
        'El margen mezclado se pondera por la participación en ingresos de cada producto, nunca es el promedio simple.'
      ],
      traps:['Dividir los costos fijos por el precio en vez de por la contribución.']
    },
    {
      type:'rates', title:'Tasas, trabajo y velocidad',
      recognise:'Máquinas, trabajadores, tuberías, días, km/h, horas facturables.',
      steps:[
        'Reduce todo primero a una TASA UNITARIA: unidades por máquina por hora, u horas-persona por habitación.',
        'En problemas de trabajo, trabajo total = personas × tiempo, y ese producto es constante. Más personas, proporcionalmente menos días.',
        'Cuando dos cosas trabajan juntas, SUMA LAS TASAS, nunca los tiempos: 1/6 + 1/12 = 1/4, o sea 4 horas.',
        'Velocidad promedio = distancia total ÷ tiempo total. Nunca promedies las dos velocidades.'
      ],
      traps:['Promediar tiempos o velocidades. El trabajo combinado siempre es más rápido que cualquiera solo: si tu respuesta es más lenta, sumaste tiempos.']
    },
    {
      type:'average', title:'Promedios y promedios ponderados',
      recognise:'"Promedio", "media", agregar o quitar un miembro, combinar dos grupos.',
      steps:[
        'Convierte cada promedio en una SUMA antes de agregar o quitar algo: suma = promedio × cantidad.',
        'El valor de quien se suma = total nuevo − total viejo.',
        'Para grupos de distinto tamaño, pondera cada valor por su cantidad: (n₁v₁ + n₂v₂) ÷ (n₁ + n₂).'
      ],
      key:['Atajo para un nuevo miembro: aporta el promedio nuevo, más el cambio de promedio por cada miembro que ya estaba.'],
      traps:['Promediar dos promedios cuando los grupos tienen tamaños distintos: solo es válido si son iguales.']
    },
    {
      type:'ratio', title:'Razones y proporciones',
      recognise:'"En razón 3:4:5", "por cada 2 gerentes hay 7 analistas".',
      steps:[
        'Halla el valor de UNA parte: total ÷ suma de los términos de la razón.',
        'Multiplica esa unidad por el término que te piden.',
        'Para una cadena de porcentajes de porcentajes, multiplica a lo largo: 60% y luego 25% de eso = 15% del total.'
      ],
      traps:['Dividir el total entre un término en vez de entre la suma de todos.']
    },
    {
      type:'growth', title:'Crecimiento, interés y depreciación',
      recognise:'Por año, compuesto, CAGR, depreciación, "después de n años".',
      steps:[
        'Crecimiento compuesto: valor = P × (1 + r)ⁿ. Multiplica factores; nunca multipliques la tasa por n.',
        'Interés simple: P × r × n, siempre sobre el capital original.',
        'CAGR = (final ÷ inicial)^(1/n) − 1. En 2 años, saca la raíz cuadrada del factor total.',
        'Depreciación de saldo decreciente: valor = P × (1 − r)ⁿ, que nunca llega a cero.'
      ],
      key:['Regla del 72: años para duplicar ≈ 72 ÷ tasa%. Al 20% anual, unos 3.6 años.'],
      traps:['Tratar "crece 20% anual durante 4 años" como +80%. Es ×2.07.']
    },
    {
      type:'series', title:'Series numéricas y patrones',
      recognise:'Una fila de números que termina en "?". TestGorilla lista este tipo explícitamente.',
      steps:[
        'Escribe las DIFERENCIAS entre términos consecutivos. ¿Constantes? Aritmética, listo.',
        'Si no, revisa las RAZONES. ¿Constantes? Geométrica, listo.',
        'Si no, saca las diferencias DE las diferencias. ¿Constantes? Cuadrática, casi siempre n² ± k.',
        'Revisa si cada término es la SUMA de los dos anteriores (tipo Fibonacci).',
        'Revisa reglas de multiplicar y sumar (×2+1): la pista es que las diferencias se duplican.',
        'Revisa si el divisor o multiplicador aumenta en uno cada paso (÷2, ÷3, ÷4).',
        'Revisa si hay dos series entrelazadas o una operación alternada.'
      ],
      key:['Ten presentes cuadrados, cubos y factoriales: 1 4 9 16 25 · 1 8 27 64 · 1 2 6 24 120.'],
      traps:[
        'Gastar más de 90 segundos. Si la lista se agota, elimina lo implausible y sigue.',
        'En las variantes de "encuentra el error", prueba la regla contra TODOS los términos, no solo el último.'
      ],
      example:{
        q:'3, 8, 15, 24, 35, ?',
        a:'48',
        why:'Las diferencias son 5, 7, 9, 11 —suben de 2 en 2—, así que la siguiente es 13 y 35 + 13 = 48. Equivalente: los términos son n² − 1, y 7² − 1 = 48.'
      }
    },
    {
      type:'estimation', title:'Estimación',
      recognise:'"Aproximadamente", "estima", u opciones tan separadas que calcular exacto es desperdicio.',
      steps:[
        'Redondea a números amigables y luego ajusta según la dirección en que redondeaste.',
        'Ancla en fracciones simples: 48% es un poco menos de la mitad; 19.8% es un poco menos de un quinto.',
        'Usa ×20 − ×1 para multiplicar por 19, y ajustes similares para multiplicadores incómodos.',
        'Para comparar fracciones, mide cada una contra 1/2.'
      ],
      key:['10% anual compone a cerca de ×1.33 en 3 años y aproximadamente ×2 en 7 años.'],
      traps:['Calcular exacto cuando las opciones están lejos entre sí: cuesta tiempo y no gana nada.']
    },
    {
      type:'probability', title:'Probabilidad y conteo',
      recognise:'Extracciones, monedas, grupos que se traslapan, "cuántos pares distintos".',
      steps:[
        'Sin reemplazo, TANTO el numerador como el denominador se achican en la segunda extracción.',
        'Para "exactamente k de n", cuenta los arreglos: hay tres formas de sacar exactamente dos caras en tres lanzamientos.',
        'Grupos que se traslapan: |A o B| = |A| + |B| − |ambos|. Despeja para hallar el traslape.',
        'Pares sin orden a partir de n elementos: n(n − 1) ÷ 2.'
      ],
      traps:['Contar selecciones ordenadas cuando el orden no importa: duplica el número real de pares.']
    },
    {
      type:'business', title:'Métricas de negocio',
      recognise:'Participación de mercado, rotación, utilización, payback, motores de ingreso.',
      steps:[
        'Participación = ventas propias ÷ mercado total. La participación sube solo si tu crecimiento SUPERA al del mercado.',
        'Ingreso = precio × volumen, así que combina los cambios porcentuales multiplicando: +50% volumen con −20% precio = ×1.2.',
        'Rotación de inventario = COGS ÷ inventario promedio. Despeja el término que falte.',
        'Utilización = horas facturables ÷ horas disponibles. Nunca supongas 100%.',
        'Payback simple = inversión ÷ utilidad anual.'
      ],
      traps:['Sumar cambios porcentuales que deberían multiplicarse.']
    },
    {
      type:'multistep', title:'Problemas de varios pasos',
      recognise:'Dan varias cantidades y preguntan por algo que está a dos o tres operaciones de distancia.',
      steps:[
        'Lee primero la ÚLTIMA frase y anota la cantidad objetivo.',
        'Trabaja hacia atrás: lista qué necesitas para llegar a ella, y qué necesitas para eso.',
        'Calcula paso a paso en papel, rotulando cada número intermedio con su unidad.',
        'Antes de responder, relee la pregunta para confirmar que produjiste la cantidad que pedían.'
      ],
      traps:[
        'Parar un paso antes: utilidad bruta cuando pedían operativa, u honorarios sin gastos.',
        'Responder con un valor intermedio porque aparece entre las opciones. Está ahí a propósito.'
      ]
    }
  ]
},

/* ============================ TRABAJO CON DATOS ============================ */
{
  id:'data', icon:'📊', title:'Trabajo con Datos',
  blurb:'12 preguntas en 10 minutos. Más allá de leer tablas, esta sección evalúa estadística descriptiva y si detectas datos en los que no se debe confiar.',
  topics: [
    {
      type:'table', title:'Leer tablas y gráficos',
      recognise:'Una tabla o gráfico seguido de una pregunta sobre valores, totales, participaciones o crecimiento.',
      steps:[
        'Lee primero la PREGUNTA y luego vuelve a la tabla solo por los números que realmente necesitas.',
        'Revisa las unidades y cualquier nota al pie antes de calcular: $000, millones, por ciento.',
        'Si preguntan por una participación, calcula tú el total: casi nunca te lo dan.',
        'Anota los valores intermedios en papel con su rótulo. Los números sin rótulo causan confusiones de fila y columna.'
      ],
      key:[
        'La participación de un segmento sube si y solo si crece más rápido que el total.',
        'Un crecimiento porcentual sobre una base pequeña se ve espectacular y muchas veces significa poco.',
        'El cambio absoluto y el porcentual suelen ordenar los elementos de forma distinta: fíjate cuál piden.'
      ],
      traps:['Escanear toda la tabla antes de leer la pregunta. Es la mayor pérdida de tiempo de esta sección.']
    },
    {
      type:'chart', title:'Leer gráficos',
      recognise:'Un gráfico de barras, de líneas, de torta o de barras apiladas en vez de una tabla. TestGorilla menciona explícitamente gráficos de líneas, de barras y diagramas.',
      steps:[
        'Lee primero la PREGUNTA, luego el título del gráfico, luego las ETIQUETAS DE LOS EJES, incluidas las unidades.',
        'REVISA DÓNDE EMPIEZA EL EJE VERTICAL. Si no empieza en cero, las alturas de las barras no son proporcionales a los valores y toda comparación visual queda exagerada.',
        'Lee los valores contra las líneas de la cuadrícula, interpolando cuando un punto cae entre dos. Nunca estimes solo por la forma.',
        'En barras agrupadas, compara primero dentro de cada grupo y después entre grupos.',
        'En gráficos de líneas, el cruce ocurre en el primer punto donde las líneas realmente se intercambian el orden, no donde se ven cerca.',
        'En barras apiladas, solo el segmento inferior comparte una base común, así que lee la altura propia de cada segmento antes de comparar crecimientos.',
        'En una torta, convierte el 1% del total a dinero una sola vez; cada porción se vuelve una multiplicación rápida.'
      ],
      key:[
        'Las barras codifican el valor como LONGITUD, así que necesitan base en cero para ser honestas. Las líneas no.',
        'La línea que se ve más empinada no es necesariamente la que más crece: lo decide la escala vertical.',
        'Un segmento puede subir en términos absolutos y caer como participación de un total que crece.',
        'Las porciones de torta son difíciles de comparar a ojo; usa siempre los porcentajes impresos cuando los den.'
      ],
      traps:[
        'Confiar en las alturas relativas sin revisar el origen del eje.',
        'Llamar cruce a un casi-contacto en un gráfico de líneas.',
        'Leer la parte alta de una barra apilada como un segmento en vez de como el total.'
      ],
      example:{
        q:'Dos barras están en 102 y 108 unidades, pero el eje vertical empieza en 100. Una barra se ve cuatro veces la otra.',
        a:'La diferencia real es de cerca del 6%.',
        why:'Con el eje en 100, las alturas visibles representan 2 y 8, y de ahí sale la impresión de 4×. La brecha real es 6 sobre una base de 102, cerca del 5,9%. Un eje truncado no siempre es deshonesto, pero siempre magnifica: revisa el origen antes de creerle a tus ojos.'
      }
    },
    {
      type:'statistics', title:'Estadística descriptiva',
      recognise:'Media, mediana, moda, rango, dispersión, desviación estándar, correlación.',
      steps:[
        'Media = suma ÷ cantidad. Los valores atípicos la jalan con fuerza.',
        'Mediana = el valor central de la lista ORDENADA. Con cantidad par, promedia los dos centrales.',
        'Moda = el valor más frecuente, y el único promedio que siempre es un dato realmente observado.',
        'Rango = máximo − mínimo. Desviación estándar = distancia típica respecto a la media.'
      ],
      key:[
        'Media muy por encima de la mediana significa que un valor atípico alto sesga los datos. Para "lo típico", usa la mediana.',
        'Dos conjuntos pueden compartir la media y tener dispersión completamente distinta: siempre revisa la variabilidad.',
        'La correlación r va de −1 a +1. La fuerza es |r|; el signo es solo dirección. r = −0.78 es más fuerte que r = 0.60.',
        'La correlación nunca es causalidad y nunca es un porcentaje de nada.'
      ],
      traps:[
        'Leer la mediana sobre la lista sin ordenar.',
        'Tomar una correlación fuerte como prueba de causa. Busca la variable confusora: el patrón helados-ahogamientos lo explica la temperatura.'
      ],
      example:{
        q:'Negocios cerrados por vendedor: 3, 5, 5, 6, 8, 9, 20.',
        a:'Media 8, mediana 6, moda 5. La mediana describe mejor al vendedor típico.',
        why:'Un vendedor con 20 arrastra la media por encima de seis de los siete valores. Si quitas ese atípico, la media cae 2 mientras la mediana solo se mueve 0.5, y por eso la mediana es la medida robusta.'
      }
    },
    {
      type:'validation', title:'Calidad y validación de datos',
      recognise:'Un extracto crudo, el diseño de una encuesta, un gráfico, o una afirmación construida sobre una sola muestra.',
      steps:[
        'Corre esta lista sobre cualquier conjunto de datos que te muestren, en orden.',
        '¿Las participaciones suman 100%? Si no, algo está doble-contado o mal digitado.',
        '¿Hay valores imposibles: un pedido negativo, un porcentaje mayor a 100, un mes 13?',
        '¿Hay filas duplicadas: mismo cliente, valor y fecha con distinto ID?',
        '¿Las unidades son consistentes en cada columna? Mezclar unidades vuelve todo total inservible.',
        '¿Quién está en la muestra y quién FALTA? Supervivencia, respuesta voluntaria y resultados de un solo sitio no generalizan.',
        'En un gráfico, ¿dónde empieza el eje? Un eje truncado exagera las diferencias.'
      ],
      key:[
        'Valores faltantes: investiga, elige un tratamiento y decláralo. Nunca los rellenes en silencio con el valor más común: eso inventa datos.',
        'Un piloto en una sola sede es una muestra de uno. Sin grupo de comparación sugiere, no demuestra.'
      ],
      traps:['Calcular un promedio antes de limpiar. Un valor negativo y una fila duplicada distorsionan numerador y denominador a la vez.']
    }
  ]
},

/* ============================ INGLÉS ============================ */
{
  id:'eng', icon:'🇬🇧', title:'Inglés',
  blurb:'20 preguntas en 12 minutos, nivel MCER B1/B2. Cubre gramática y vocabulario, composición de oraciones, lectura y —en la prueba real— comprensión auditiva.',
  topics: [
    {
      type:'grammar', title:'Gramática: concordancia, tiempos, condicionales',
      recognise:'Un espacio en blanco con cuatro formas verbales o palabras funcionales.',
      steps:[
        'Para la concordancia, ELIMINA mentalmente todo lo que hay entre el sujeto y el verbo. "The report, along with its appendices, WAS submitted."',
        'Identifica los marcadores temporales: "yesterday" obliga a pasado simple, "since 2019" a presente perfecto, "by next year" a futuro perfecto.',
        'Con dos eventos pasados, el más antiguo va en pasado perfecto (had + participio).',
        'Empareja el condicional con la cláusula que te dan.'
      ],
      key:[
        'Each, every, neither, either como SUJETO son singulares.',
        '"The number of" es singular; "a number of" es plural.',
        'Neither…nor / either…or: el verbo concuerda con el sujeto MÁS CERCANO.',
        '2º condicional: if + pasado simple, would + base. 3er condicional: if + pasado perfecto, would have + participio.',
        'Subjuntivo tras suggest, recommend, insist, demand, require: forma base sin conjugar ("that he revise").',
        'Fewer para contables, less para incontables.'
      ],
      traps:['Poner "would" dentro de la cláusula con "if". Solo va en la cláusula de resultado.']
    },
    {
      type:'idiom', title:'Preposiciones y expresiones fijas',
      recognise:'Un espacio antes de una preposición, o un par verbo + preposición.',
      steps:[
        'Estas se memorizan, no se deducen. Apréndelas como pares fijos.',
        'Cuando dos preposiciones son posibles, la preposición cambia el SIGNIFICADO: decide cuál necesita la frase.'
      ],
      key:[
        'responsible FOR una tarea · responsible TO una persona',
        'consistent WITH · depend ON · comply WITH · in charge OF · capable OF + -ing',
        'result IN (la consecuencia) · result FROM (la causa)',
        'concerned ABOUT (preocupado) · concerned WITH (el tema)',
        'account FOR (explicar) · different FROM (nunca "than" en registro formal)',
        'look forward TO + -ing · be used TO + -ing (costumbre) vs used TO + base (hábito pasado)'
      ],
      traps:['"Depend of": calco directo de "depender de". Siempre es "depend on".']
    },
    {
      type:'sentence correction', title:'Composición de oraciones',
      recognise:'Cuatro versiones de la misma oración; elige la correcta o la más clara.',
      steps:[
        'Corre esta lista contra cada opción en vez de leer buscando lo que "suena bien".',
        'PARALELISMO: los elementos de una lista comparten forma: todos -ing, o todos infinitivos.',
        'MODIFICADORES: el sujeto justo después de una frase inicial debe ser quien hace la acción.',
        'COMPARACIONES: compara lo comparable — "higher than THAT OF Company B", no "than Company B".',
        'PRONOMBRES: cada pronombre necesita un único referente posible.',
        'PUNTUACIÓN: dos cláusulas independientes necesitan punto y coma o conjunción, nunca una coma sola.',
        'UBICACIÓN: pon "only" justo antes de lo que limita.',
        'CONCISIÓN: corta redundancias — "revert back", "due to the fact that", "make the decision to".'
      ],
      traps:['Escoger la opción más larga y de sonido más formal. Casi siempre gana la concisa y activa.']
    },
    {
      type:'vocabulary', title:'Vocabulario',
      recognise:'"Closest in meaning to", "most nearly opposite".',
      steps:[
        'Lee la instrucción dos veces: sinónimo y antónimo se ven idénticos de reojo.',
        'Define la palabra tú mismo antes de mirar las opciones, y luego busca la más cercana.',
        'Si la palabra viene en una frase, deja que el contexto decida entre sus acepciones.'
      ],
      key:[
        'Registro de negocios: mitigate (reducir) · feasible (viable) · ambiguous (ambiguo) · scrutinize (examinar a fondo) · redundant (innecesario) · prudent (sensato) · substantiate (respaldar con evidencia) · volatile (inestable) · consolidate (combinar) · obsolete (obsoleto) · discrepancy (discrepancia) · meticulous (minucioso) · comprehensive (exhaustivo) · incentive (incentivo) · streamline (simplificar) · contingent on (condicionado a) · robust (que resiste el escrutinio) · stakeholder (cualquier parte afectada) · defer (aplazar).',
        'Ojo con pares casi idénticos: comprehensive (completo) vs comprehensible (entendible).'
      ],
      traps:['No ver la palabra "OPPOSITE" y escoger el sinónimo, que siempre está entre las opciones como distractor.']
    },
    {
      type:'reading', title:'Comprensión de lectura',
      recognise:'Un texto corto seguido de "which is best supported / most strongly implied".',
      steps:[
        'Lee primero la PREGUNTA para saber qué buscar.',
        'Lee el texto por su estructura —afirmación, evidencia, matiz— no por el detalle.',
        'La respuesta debe demostrarse con el texto. Localiza la frase que la prueba.',
        'Elimina por cuatro motivos: lenguaje EXTREMO, FUERA DE ALCANCE, CONTRADICE el texto, o idea correcta pero SE EXCEDE.'
      ],
      traps:[
        'Escoger una opción cierta en el mundo real pero ausente del texto.',
        'Convertir una percepción reportada en un hecho.',
        'Aceptar una opción correcta en un 90%: la última cláusula suele ser lo que la vuelve falsa.'
      ]
    },
    {
      title:'Trampas específicas para hispanohablantes',
      recognise:'Errores que se sienten correctos porque en español funcionan así.',
      steps:['Son los de mayor rendimiento para sobre-aprender, porque tu oído no los detecta.'],
      key:[
        'depend ON, no "depend of" (depender de).',
        '"I agree", no "I am agree" (estoy de acuerdo).',
        'actually = en realidad. Currently = actualmente. NO son la misma palabra.',
        'realize = darse cuenta. To carry out = realizar.',
        'assist = ayudar. To attend = asistir a.',
        'sensible = sensato; sensitive = sensible. El par está invertido.',
        'Information y advice son incontables: nunca "informations" ni "advices".',
        '"Explain TO me", no "explain me".',
        '"What is it called?", no "How is it called?" (¿Cómo se llama?)',
        'Los adjetivos van antes del sustantivo: "the red car", nunca "the car red".',
        'people = plural (people ARE), no "the people is".'
      ],
      traps:['Confiar en una palabra porque se parece a su prima española. Los falsos amigos se usan a propósito como distractores.']
    }
  ]
},

/* ============================ INGLÉS C1 ============================ */
{
  id:'engC1', icon:'🎓', title:'Inglés C1 (avanzado)',
  blurb:'Sobreentrenamiento deliberado. El módulo real es B1/B2, así que todo lo de aquí es más difícil de lo que te van a preguntar. La idea no es que estas estructuras aparezcan, sino que tras practicarlas los ítems de B2 dejen de sentirse como decisiones y pasen a ser obvios.',
  topics: [
    {
      type:'grammar-c1', title:'Inversión, cleft y anteposición',
      recognise:'Un hueco al PRINCIPIO de una cláusula, o una oración que empieza con un adverbial negativo (Not only, Rarely, Seldom, No sooner, Under no circumstances, Only when/after/if).',
      steps:[
        'Detecta el disparador. Si se antepuso un adverbial negativo o restrictivo, la cláusula que sigue debe invertirse como una pregunta: auxiliar antes del sujeto.',
        '"Rarely HAVE WE seen…", no "Rarely we have seen…". Si no hay auxiliar, se inserta do/does/did: "Only then DID HE realise".',
        'Con "Only when/after/if + cláusula", la inversión cae en la cláusula PRINCIPAL, no en la subordinada: "Only when the board approved DID the CEO announce…".',
        '"No sooner … THAN", nunca "no sooner … when". "Hardly/Scarcely … WHEN", nunca "than". Estos dos pares se intercambian a propósito en los distractores.',
        'En las cleft, mira qué se enfatiza: "It was the CFO who raised it" (énfasis en la persona) vs "What the CFO raised was the risk" (énfasis en la cosa).'
      ],
      key:[
        'Adverbial negativo antepuesto → invertir. Esa es toda la regla.',
        'Not only … but also: la inversión va en la PRIMERA cláusula. "Not only DID sales fall, but margins also narrowed."',
        'Should/Were/Had pueden sustituir a "if" en los condicionales, y entonces invierten: "Had we known" = "If we had known"; "Should you require" = "If you require"; "Were it not for" = "If it were not for".',
        'NO se invierte cuando el adverbial no está antepuesto: "We have rarely seen this" es perfectamente correcto.',
        'La cleft con "What" lleva verbo en SINGULAR: "What concerns me IS the assumptions", incluso ante un plural.'
      ],
      traps:[
        'Invertir la subordinada en vez de la principal tras "Only when…".',
        'Emparejar "no sooner" con "when" o "hardly" con "than".',
        'Meter "would" en la cláusula if de un condicional invertido. "Had we would known" no es una oración.'
      ]
    },
    {
      type:'vocabulary-c1', title:'Registro, connotación y casi-sinónimos',
      recognise:'Cuatro opciones que significan más o menos lo correcto. La pregunta no es qué significa la palabra sino qué tan formal es y qué implica.',
      steps:[
        'Decide qué necesita el hueco: neutro, formal o cargado. La oración te lo dice: un regulador "sanctions", un amigo "lets you".',
        'Revisa la connotación, no solo el significado. Notorious = famoso por algo MALO. Ambitious plan = admirativo; overambitious = crítico.',
        'Atiende a la colocación: se MOUNT a defence, se LODGE a complaint, se RAISE a concern, se VOICE an objection. El verbo lo fija el sustantivo.',
        'Si dos opciones son formales y ambas encajan, suele ganar aquella cuya implicación coincide con la postura de la oración.'
      ],
      key:[
        'Escalera de formalidad: start → begin → commence · end → conclude → terminate · ask for → request → solicit · about → concerning → with regard to.',
        'Mismo significado, postura opuesta: thrifty (aprobatorio) / stingy (crítico); confident / arrogant; determined / stubborn; frank / blunt.',
        'Palabras que señalan duda en silencio: purported, ostensibly, supposedly, allegedly, so-called, apparent. Si aparece una, el autor se está distanciando.',
        'Verbos C1 que conviene dominar: countenance (tolerar), preclude (imposibilitar), obviate (eliminar la necesidad de), attenuate (debilitar), corroborate (confirmar de forma independiente), equivocate (ser vago a propósito), belie (dar una impresión falsa de), undermine, curtail, exacerbate, mitigate.',
        'Pares de matiz que se examinan: continual (repetido) vs continuous (ininterrumpido) · comprise (el todo comprende las partes) vs compose (las partes componen el todo) · disinterested (imparcial) vs uninterested (aburrido) · fortuitous (por azar) vs fortunate (afortunado).'
      ],
      traps:[
        'Escoger la palabra más impresionante en vez de la que encaja con el registro.',
        'Tratar un casi-sinónimo como intercambiable cuando su connotación invierte la postura del autor.'
      ]
    },
    {
      type:'sentence-c1', title:'Paralelismo sutil y colocación de modificadores',
      recognise:'Una oración que suena bien en la primera lectura. No hay nada roto; solo algo desalineado.',
      steps:[
        'Localiza el par correlativo (not only … but also, both … and, either … or, rather than, as much as). Lo que sigue a la primera mitad debe ser del MISMO tipo gramatical que lo que sigue a la segunda.',
        'Compruébalo por eliminación: "not only [X] but also [Y]" — lee la oración solo con X, luego solo con Y. Ambas deben funcionar.',
        'Con los modificadores, busca la palabra que la frase describe y verifica que esté justo al lado.',
        'Vigila "only", "even", "just", "also". Cada uno se adhiere a lo que le sigue, y moverlo cambia el significado en vez de romper la oración.',
        'Ante un participio colgante, pregunta quién hace la acción en -ing. Si no es el sujeto de la principal, cuelga.'
      ],
      key:[
        'Paralelo: "He emphasised reducing costs and improving service" — gerundio + gerundio. No "…reducing costs and to improve service".',
        '"Not only the need for X but also the importance of Y": sintagma nominal contra sintagma nominal.',
        '"Only the board approved the merger" (nadie más) ≠ "The board approved only the merger" (nada más) ≠ "The board only approved the merger" (no lo financió, por ejemplo).',
        'Las comparaciones deben ser entre iguales: "Our margins are higher than OUR COMPETITORS\'", no "than our competitors", que compara márgenes con personas.',
        'Un participio que abre la oración se adhiere al sujeto que sigue: "Having reviewed the data, THE TEAM concluded…", no "…the conclusion was".'
      ],
      traps:[
        'Aceptar una oración porque se lee con fluidez. En C1 el error nunca es audible.',
        'Corregir la mitad equivocada de un par correlativo.',
        'Comparar una cualidad con una persona, o un año con una empresa.'
      ]
    },
    {
      type:'idiom-c1', title:'Phrasal verbs y expresiones fijas',
      recognise:'Un verbo y cuatro partículas, o una expresión donde una sola preposición es toda la pregunta.',
      steps:[
        'Trata verbo + partícula como UNA sola pieza de vocabulario. "Bear out" y "bear on" no comparten significado; saber qué es "bear" no te dice nada.',
        'Usa el objeto como pista: los datos bear OUT una hipótesis (la confirman); un hecho bears ON una cuestión (es relevante); una persona bears WITH you (tiene paciencia).',
        'En las expresiones fijas la preposición no es lógica: se memoriza. Razonar desde el español te va a desviar.',
        'Si dos partículas parecen posibles, escoge aquella cuyo tipo de objeto coincida.'
      ],
      key:[
        'bear out (confirmar) · bear on (ser relevante para) · bear with (tener paciencia) · bear down on (acercarse amenazante).',
        'account for (explicar / constituir) · allow for (dejar margen para) · answer for (responder por) · call for (exigir).',
        'put off (aplazar / disuadir) · put up with (tolerar) · put down to (atribuir a) · put forward (proponer).',
        'come up against (toparse con) · come down to (reducirse esencialmente a) · come in for (recibir, de críticas) · come round to (acabar aceptando).',
        'Fijas y muy examinadas: at odds with · on the grounds that · in the wake of · with a view to + -ing · subject to · conducive to · tantamount to · in lieu of · by dint of · to no avail.',
        'Ojo con las trampas de -ing: "with a view to LAUNCHING", "committed to IMPROVING", "look forward to HEARING". Aquí "to" es preposición, no infinitivo.'
      ],
      traps:[
        'Suponer que la partícula conserva su sentido espacial literal.',
        'Escribir "with a view to launch": el -ing es obligatorio.',
        'Escoger un phrasal verb que existe pero rige otro tipo de objeto.'
      ]
    },
    {
      type:'reading-c1', title:'Postura del autor e implicación',
      recognise:'Un texto más denso donde la pregunta va sobre TONO, ACTITUD o con qué estaría de acuerdo el autor, no sobre un dato explícito.',
      steps:[
        'Lee primero los matizadores y las palabras cargadas, antes que el contenido. "So-called", "purportedly", "merely", "at best" marcan postura.',
        'Separa lo que el autor REPORTA de lo que el autor SUSCRIBE. Un texto puede describir una postura largamente y aun así rechazarla.',
        'Encuentra el pivote. "Yet", "however", "in practice", "the reality is" casi siempre marcan la frase con la posición real del autor.',
        'En preguntas de tono, gradúa la intensidad. Las respuestas C1 correctas suelen ser moderadas —"escéptico", "mesurado", "aprobación con reservas"— mientras que las falsas son extremas: "despectivo", "entusiasta", "indiferente".',
        'En preguntas de inferencia, la respuesta debe seguirse del texto, no simplemente convivir con él.'
      ],
      key:[
        'Concesión y luego giro es la estructura C1 estándar: "While the approach has merits, …". La posición vive después de la coma.',
        'Una pregunta retórica es una afirmación. "Is this really innovation?" significa que el autor cree que no.',
        'En inglés formal, la atenuación señala crítica: "the results were less than compelling" es un veredicto duro.',
        'Si el autor nunca declara una postura, la respuesta correcta de tono sí es "neutral" o "distante": no le inventes una opinión.'
      ],
      traps:[
        'Escoger una palabra de tono extremo cuando el texto es mesurado.',
        'Atribuir al autor una postura que solo está reportada.',
        'Escoger una opción razonable en general pero no sostenida por este texto.'
      ]
    }
  ]
},

/* ============================ CRITERIO DE NEGOCIO ============================ */
{
  id:'judgment', icon:'⚖️', title:'Criterio de Negocio',
  blurb:'No es uno de tus cuatro módulos confirmados, pero la diapositiva advierte que pueden cambiar y Bain a veces incluye un bloque de criterio. Un poco de familiaridad se convierte directamente en puntos aquí.',
  topics: [
    {
      type:'judgment', title:'Escenarios de criterio',
      recognise:'Una situación de negocio corta seguida de "¿qué deberías hacer primero?" o "¿qué merece más ser puesto a prueba?". Rara vez hay una única jugada ingeniosa.',
      steps:[
        'Identifica la DECISIÓN que se está tomando y quién es su dueño. Tu trabajo es hacer explícita su base, no ganar la discusión ni obedecer.',
        'Encuentra el supuesto que carga el mayor riesgo si resulta falso. Casi siempre es lo que merece probarse primero.',
        'Prefiere la opción que CUANTIFICA una incógnita sobre la que decide esquivándola en cualquier dirección. Un análisis incompleto no es lo mismo que una respuesta negativa.',
        'Cuando dos explicaciones compiten, busca el subgrupo al que cada una no aplica: los datos suelen separarlas ya.',
        'Separa los hallazgos sólidos de los frágiles y nombra la fragilidad. Mezclarlos en una sola cifra esconde una decisión que el cliente debería tomar conscientemente.',
        'Haz visibles los intercambios en vez de absorberlos en silencio o negarte de plano.'
      ],
      key:[
        'Lo que la gente dice que hará no es lo que hace: la intención declarada sobrestima el comportamiento real.',
        'Los parámetros históricos (elasticidad, conversión, fuga) solo se mantienen mientras se mantengan las condiciones que los produjeron.',
        'Los costos fuera del modelo —indemnizaciones, reputación, riesgo de suministro— van en el análisis, no en una nota al pie.',
        'Ante un riesgo binario, separa las decisiones que rinden pase lo que pase de las que necesitan conocer el resultado.',
        'Saca a la luz un error material en cuanto lo encuentres. El costo de revelarlo solo crece.'
      ],
      traps:[
        'Escoger la opción que suena más audaz. Estas preguntas premian el equilibrio, no la contundencia.',
        'Tratar una consecuencia no financiera como si estuviera fuera de tu alcance o como automáticamente decisiva: ambas evitan el trabajo.',
        'Repartir un recurso escaso 50/50 entre dos frentes exigentes, lo que normalmente no entrega ninguno.'
      ],
      example:{
        q:'Un modelo muestra que cerrar 12 de 40 sucursales ahorra $8m al año "sin pérdida de ingresos". ¿Qué supuesto merece más ser puesto a prueba?',
        a:'Que los clientes desplazados se queden con el banco en vez de irse.',
        why:'Todo el ahorro descansa en esa cláusula. Un cliente que se va se lleva todo su negocio, no solo sus visitas a la sucursal, así que si se va una fracción el ahorro se encoge o se invierte. Los supuestos sobre inmuebles y personal cambian el tamaño de la cifra; este decide si hay cifra.'
      }
    }
  ]
},

/* ============================ PLAN ============================ */
{
  id:'plan', icon:'🗓️', title:'Cómo usar los días que quedan',
  blurb:'Una rutina de estudio que cabe en ratos libres.',
  topics: [
    {
      title:'La rutina diaria',
      recognise:'11 preguntas al día, que es para lo que está dimensionado el banco.',
      steps:[
        'Lee un tema de la Guía antes de practicarlo. Primero técnica, después volumen.',
        'Haz tus 11 preguntas en ráfagas cortas: el modo Pregunta rápida está hecho para los huecos entre otras cosas.',
        'Lee TODAS las explicaciones, incluidas las que acertaste. Una adivinada con suerte y entender de verdad puntúan igual hoy, pero no el día de la prueba.',
        'Vacía tu lista de errores al menos dos veces por semana. Una pregunta que fallaste y luego acertaste vale más que una nueva.',
        'Haz una sección completa cronometrada cada pocos días, siempre en modo examen para que el ritmo sea realista.'
      ]
    },
    {
      title:'La última semana',
      recognise:'Aproximadamente los últimos siete días.',
      steps:[
        'Cambia el balance: menos preguntas nuevas, más secciones completas cronometradas.',
        'Relee los temas de la Guía de tus dos secciones más débiles: la app muestra el acierto por sección en la pantalla de inicio.',
        'Practica listening por separado: noticias o podcasts de negocios en inglés. El módulo real de inglés incluye comprensión auditiva y esta app no la cubre.',
        'El día antes: una sesión ligera, sin atracones. Confirma que tu cámara funciona y que las extensiones del navegador están desactivadas.'
      ],
      traps:['Moler preguntas nuevas en los últimos días. A esas alturas, repasar errores y ensayar el ritmo rinde mucho más.']
    }
  ]
}

],

sources: [
  'Biblioteca de tests de TestGorilla: páginas de Critical Thinking, Numerical Reasoning, Working with Data e inglés B1/B2',
  'Bain & Company careers — digital assessment',
  'HackingTheCaseInterview, StrategyCase, ManagementConsulted, IGotAnOffer, CaseBasix (EN/FR) — guías del TestGorilla de Bain',
  'Foro de consultoría PrepLounge — reportes de candidatos',
  'JobTestPrep, iPrep, How2Become, PracticeAptitudeTests — material de práctica de TestGorilla y razonamiento numérico',
  'JobTestPrep y TheLawyerPortal — evaluación de argumentos Watson-Glaser',
  'Magoosh, Experts\' Global, GMAT Club, Princeton Review — prueba de negación y método de razonamiento crítico',
  'PuzzleBaron, ThePuzzleLabs — método de resolución de acertijos de ordenamiento',
  'Assessment-Training, GeeksforGeeks, AptitudeAce — reglas de silogismos y patrones de series numéricas',
  'Magoosh GRE, Achievable, Princeton Review — estrategia de eliminación en comprensión de lectura',
  'LeonardoEnglish, HeatherHughes, EverestLanguageSchool — errores frecuentes de hispanohablantes en inglés'
]
};
