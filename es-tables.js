/* Spanish tables for the Working with Data bank.

   The other batches are hand-written string by string. These 119 tables are not, and the
   reason is worth stating: they contain 400 header cells and 1.965 data cells drawn from a
   vocabulary of only 55 headers, 85 cell labels and 15 footnotes. Translating them by hand
   would mean writing "Department" 20 times and hoping it came out the same way each time.
   A glossary makes that consistency structural instead of aspirational, and — more
   importantly — makes gaps loud: every distinct string in the bank must appear below, even
   the proper nouns that map to themselves, so anything added later that nobody translated
   is reported at load instead of silently shipping in English.

   Only text nodes inside <th>, <td> and <p class="tnote"> are touched. Tags, attributes and
   cell counts are never rewritten, so the table that renders in Spanish has exactly the
   structure of the English one. The checks at the bottom verify that.

   NUMBERS. The converter only ever rewrites separators that are already there; it never
   inserts one. That single rule is what keeps years safe — 2021 has no separator to convert,
   so it cannot turn into 2.021, which is the obvious way this kind of pass goes wrong.
     1.200 style: a comma followed by exactly three digits is a thousands separator → period
     42,0 style: a period followed by one or two digits is a decimal point → comma
   ISO dates (2025-03-14) are deliberately left alone. They carry no separator, and several
   data-validation questions turn on spotting an impossible date, so reformatting them would
   change what the question is testing. */
(function(){
  var bank = (window.QUESTION_BANK && window.QUESTION_BANK.data) || [];
  window.ES_QUESTIONS = window.ES_QUESTIONS || {};

  /* Every distinct <th> and <td> label in the bank. Entries that map to themselves are
     proper nouns — people, products, companies, store names — and are listed explicitly so
     that "not in the glossary" always means "nobody has looked at this yet". */
  var TERMS = {
    /* headers */
    '2023':'2023', '2024':'2024', '2025':'2025',
    '2024 sales':'Ventas 2024', '2025 sales':'Ventas 2025',
    'Active users (millions)':'Usuarios activos (millones)',
    'Actual ($000)':'Real ($000)',
    'Annual salary':'Salario anual',
    'Annual sales ($000)':'Ventas anuales ($000)',
    'Average price ($)':'Precio promedio ($)',
    'Average salary':'Salario promedio',
    'Budget ($000)':'Presupuesto ($000)',
    'COGS':'Costo de ventas',
    'Company':'Empresa',
    'Cost category':'Categoría de costo',
    'Country':'País',
    'Customer':'Cliente',
    'Deals closed':'Negocios cerrados',
    'Department':'Área',
    'Employee':'Empleado',
    'Floor area (m²)':'Superficie (m²)',
    'Gross margin':'Margen bruto',
    'Headcount':'Personal',
    'Hours/week':'Horas/semana',
    'ID':'ID',
    'Market share':'Participación de mercado',
    'Month':'Mes',
    'Operating expenses':'Gastos operativos',
    'Order date':'Fecha de pedido',
    'Order value':'Valor del pedido',
    'Payroll ($000)':'Nómina ($000)',
    'Price':'Precio',
    'Product':'Producto',
    'Quarter':'Trimestre',
    'Region':'Región',
    'Representative':'Representante',
    'Respondents':'Encuestados',
    'Response':'Respuesta',
    'Revenue':'Ingresos',
    'Revenue ($m)':'Ingresos ($ millones)',
    'Sales rep':'Representante de ventas',
    'Staff':'Personal',
    'Start date':'Fecha de ingreso',
    'Store':'Tienda',
    'Team A':'Equipo A',
    'Team B':'Equipo B',
    'Total payroll ($000)':'Nómina total ($000)',
    'Unit cost':'Costo unitario',
    'Units sold':'Unidades vendidas',
    'Workstream':'Frente de trabajo',
    'Year':'Año',

    /* quarters — both a header and a cell label */
    'Q1':'T1', 'Q2':'T2', 'Q3':'T3', 'Q4':'T4',

    /* months */
    'January':'Enero', 'February':'Febrero', 'March':'Marzo',
    'April':'Abril', 'May':'Mayo', 'June':'Junio',

    /* regions and countries */
    'North':'Norte', 'South':'Sur', 'East':'Este', 'West':'Oeste', 'Central':'Centro',
    'France':'Francia', 'Italy':'Italia', 'Poland':'Polonia',
    'Spain':'España', 'Sweden':'Suecia',

    /* functions and cost categories */
    'Administration':'Administración',
    'Build':'Construcción',
    'Design':'Diseño',
    'Energy':'Energía',
    'Engineering':'Ingeniería',
    'Finance':'Finanzas',
    'Labour':'Mano de obra',
    'Logistics':'Logística',
    'Marketing':'Marketing',
    'Materials':'Materiales',
    'Operations':'Operaciones',
    'Others':'Otros',
    'Overhead':'Gastos generales',
    'Overheads':'Gastos generales',
    'Raw materials':'Materias primas',
    'Rollout':'Despliegue',
    'Sales':'Ventas',
    'Testing':'Pruebas',
    'Training':'Capacitación',

    /* survey scale */
    'Very satisfied':'Muy satisfecho',
    'Satisfied':'Satisfecho',
    'Neutral':'Neutral',
    'Dissatisfied':'Insatisfecho',
    'Very dissatisfied':'Muy insatisfecho',

    /* proper nouns — deliberately unchanged */
    'Alpha':'Alpha', 'Beta':'Beta', 'Gamma':'Gamma', 'Delta':'Delta',
    'Alpha Corp':'Alpha Corp', 'Beta Ltd':'Beta Ltd',
    'Gamma Inc':'Gamma Inc', 'Delta SA':'Delta SA',
    'Norvex':'Norvex', 'Mejía y Cía':'Mejía y Cía', 'Ochoa SAS':'Ochoa SAS',
    'Restrepo SA':'Restrepo SA', 'Vélez Ltda':'Vélez Ltda',
    'Eastfield':'Eastfield', 'Northgate':'Northgate',
    'Riverside':'Riverside', 'Southbank':'Southbank', 'Pilar':'Pilar',
    'Alvarez':'Alvarez', 'Bermúdez':'Bermúdez', 'Caldera':'Caldera',
    'Castro':'Castro', 'Duarte':'Duarte', 'Espinosa':'Espinosa',
    'Fajardo':'Fajardo', 'Gómez':'Gómez', 'Ostrand':'Ostrand',
    'A. Ruiz':'A. Ruiz', 'B. Novak':'B. Novak', 'C. Silva':'C. Silva',
    'D. Adeyemi':'D. Adeyemi', 'E. Kane':'E. Kane', 'F. Torres':'F. Torres',
    'G. Lindqvist':'G. Lindqvist', 'J. Okonkwo':'J. Okonkwo',
    'L. Bianchi':'L. Bianchi', 'M. Farrow':'M. Farrow',
    'P. Nowak':'P. Nowak', 'S. Haddad':'S. Haddad'
  };

  /* Footnotes are translated whole rather than assembled, because two of them need more
     than a literal rendering: "$2.5 billion" becomes "USD 2.500 millones" — billion is mil
     millones in Spanish, and running the number converter over it would have produced the
     plausible-looking but wrong "$2,5 billion". */
  var NOTES = {
    'All figures in $000':'Todas las cifras en $000',
    'Annual payroll by department':'Nómina anual por área',
    'Deals closed last quarter':'Negocios cerrados el trimestre pasado',
    'Most recent full year':'Último año completo',
    'Operating costs, $000':'Costos operativos, $000',
    'Programme closeout, budget against actual spend':'Cierre del programa, presupuesto contra gasto real',
    'Raw extract from the HR system, before cleaning':'Extracto crudo del sistema de RR. HH., antes de limpieza',
    'Raw extract from the order system, before cleaning':'Extracto crudo del sistema de pedidos, antes de limpieza',
    'Revenue by product line, $000':'Ingresos por línea de producto, $000',
    'Share of total market by value':'Participación del mercado total por valor',
    'Store estate, most recent full year':'Parque de tiendas, último año completo',
    'Total market size: $2.5 billion':'Tamaño total del mercado: USD 2.500 millones',
    'Units sold per month':'Unidades vendidas por mes',
    'Units sold, in thousands':'Unidades vendidas, en miles',
    'Volume and realised price, first half of the year':'Volumen y precio realizado, primer semestre del año'
  };

  function esNum(s){
    return s.replace(/(\d),(\d{3})(?!\d)/g, '$1.$2')
            .replace(/(\d)\.(\d{1,2})(?!\d)/g, '$1,$2');
  }

  var missing = [];
  function translateTable(html, id){
    return html
      .replace(/(<(?:th|td)>)([\s\S]*?)(<\/(?:th|td)>)/g, function(m, open, txt, close){
        var t = txt.trim();
        if(!t) return m;
        if(Object.prototype.hasOwnProperty.call(TERMS, t)) return open + TERMS[t] + close;
        var n = esNum(t);
        /* Anything left holding Latin letters was never looked at by a human. */
        if(/[A-Za-z]/.test(n)) missing.push(id + ': cell "' + t + '"');
        return open + n + close;
      })
      .replace(/(<p class="tnote">)([\s\S]*?)(<\/p>)/g, function(m, open, txt, close){
        var t = txt.trim();
        if(Object.prototype.hasOwnProperty.call(NOTES, t)) return open + NOTES[t] + close;
        missing.push(id + ': footnote "' + t + '"');
        return m;
      });
  }

  var built = 0;
  bank.forEach(function(q){
    if(!q.table) return;
    var es = translateTable(q.table, q.id);
    window.ES_QUESTIONS[q.id] = window.ES_QUESTIONS[q.id] || {};
    window.ES_QUESTIONS[q.id].table = es;
    built++;
  });

  if(missing.length){
    console.error('[es-tables] ' + missing.length + ' untranslated string(s) in the data tables:\n  ' +
      missing.slice(0, 40).join('\n  '));
  }

  /* Structural equivalence: the Spanish table must be the same table, only in Spanish.
     Different tag counts or a changed set of numbers means the pass corrupted something.

     The numeric comparison covers the table BODY only. Footnotes are excluded because they
     are translated as prose and may legitimately restate a magnitude in different units —
     "$2.5 billion" becomes "USD 2.500 millones", which is the same quantity written with a
     different digit string. Comparing those would flag a correct translation forever, and a
     check that always cries wolf is worse than no check. Cells cannot restate units this
     way, so the strict comparison stays where it can actually catch corruption. */
  window.esTableCheck = function(){
    var problems = [];
    var body = function(h){ return h.replace(/<p class="tnote">[\s\S]*?<\/p>/g, ''); };
    bank.forEach(function(q){
      var es = window.ES_QUESTIONS[q.id] && window.ES_QUESTIONS[q.id].table;
      if(!q.table || !es) return;
      var shape = function(h){ return (h.match(/<[^>]+>/g) || []).join(''); };
      if(shape(q.table) !== shape(es)) problems.push(q.id + ': tag structure changed');
      var digits = function(h){
        return (body(h).replace(/<[^>]+>/g, ' ').match(/[\d.,]*\d/g) || [])
                 .map(function(n){ return n.replace(/[.,]/g, ''); }).join('|');
      };
      if(digits(q.table) !== digits(es)) problems.push(q.id + ': numeric content changed');
    });
    return { tablesBuilt: built, untranslated: missing, structuralProblems: problems };
  };
})();
