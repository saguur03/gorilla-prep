/* Chart questions — closes AUDIT #3.
   TestGorilla's Numerical Reasoning and Working with Data both list line graphs, charts
   and diagrams; the bank previously had none. Reading a chart is a different perceptual
   skill from reading a table: interpolating between gridlines, comparing slopes, spotting
   a crossover, and noticing a truncated axis visually rather than being told about it.

   These append to QUESTION_BANK.data, so existing ids (and their Spanish translations)
   are untouched. Loaded after questions-data.js. */
window.QUESTION_BANK = window.QUESTION_BANK || {};
window.QUESTION_BANK.data = window.QUESTION_BANK.data || [];

/* ---------- A. Grouped bars: two products, four quarters ---------- */
var C_BARS = (function(){
  var A = [40,55,50,70], B = [60,58,62,65];
  var y = function(v){ return 160 - v*1.75; };
  var xs = [[50,76],[118,144],[185,211],[253,279]];
  var bars = '', labels = '';
  for(var i=0;i<4;i++){
    bars += '<rect class="s1" x="'+xs[i][0]+'" y="'+y(A[i])+'" width="22" height="'+(160-y(A[i]))+'"/>'+
            '<rect class="s2" x="'+xs[i][1]+'" y="'+y(B[i])+'" width="22" height="'+(160-y(B[i]))+'"/>';
    labels += '<text class="cx-label" x="'+(xs[i][0]+24)+'" y="174" text-anchor="middle">Q'+(i+1)+'</text>';
  }
  var grid = '';
  [0,20,40,60,80].forEach(function(v){
    grid += '<line class="cx-grid" x1="40" y1="'+y(v)+'" x2="310" y2="'+y(v)+'"/>'+
            '<text class="cx-label" x="34" y="'+(y(v)+3)+'" text-anchor="end">'+v+'</text>';
  });
  return '<svg viewBox="0 0 320 200" role="img" aria-label="Grouped bar chart of quarterly revenue">'+
    '<text class="cx-title" x="40" y="12">Revenue by quarter ($000)</text>'+
    grid + bars + labels +
    '<line class="cx-axis" x1="40" y1="160" x2="310" y2="160"/>'+
    '<rect class="s1" x="150" y="188" width="10" height="10"/><text class="cx-label" x="164" y="197">Product A</text>'+
    '<rect class="s2" x="222" y="188" width="10" height="10"/><text class="cx-label" x="236" y="197">Product B</text>'+
    '</svg>';
})();

/* ---------- B. Line chart: market share, two series that cross ---------- */
var C_LINES = (function(){
  var X = [30,28,26,23,20], Y = [12,16,19,22,26], yrs = [2020,2021,2022,2023,2024];
  var px = function(i){ return 45 + i*65; };
  var py = function(v){ return 160 - v*4.5; };
  var path = function(arr){ return arr.map(function(v,i){ return (i?'L':'M')+px(i)+' '+py(v); }).join(' '); };
  var dots = function(arr, cls){ return arr.map(function(v,i){ return '<circle class="'+cls+'" cx="'+px(i)+'" cy="'+py(v)+'" r="3.5"/>'; }).join(''); };
  var grid = '', labels = '';
  [0,10,20,30].forEach(function(v){
    grid += '<line class="cx-grid" x1="45" y1="'+py(v)+'" x2="305" y2="'+py(v)+'"/>'+
            '<text class="cx-label" x="39" y="'+(py(v)+3)+'" text-anchor="end">'+v+'%</text>';
  });
  yrs.forEach(function(yr,i){ labels += '<text class="cx-label" x="'+px(i)+'" y="174" text-anchor="middle">'+yr+'</text>'; });
  return '<svg viewBox="0 0 320 200" role="img" aria-label="Line chart of market share over five years">'+
    '<text class="cx-title" x="45" y="12">Market share, 2020–2024</text>'+
    grid +
    '<path class="ln1" d="'+path(X)+'"/><path class="ln2" d="'+path(Y)+'"/>'+
    dots(X,'s1') + dots(Y,'s2') + labels +
    '<line class="cx-axis" x1="45" y1="160" x2="305" y2="160"/>'+
    '<rect class="s1" x="150" y="188" width="10" height="10"/><text class="cx-label" x="164" y="197">Alpha</text>'+
    '<rect class="s2" x="222" y="188" width="10" height="10"/><text class="cx-label" x="236" y="197">Beta</text>'+
    '</svg>';
})();

/* ---------- C. Truncated axis — the trap is visual, not stated ---------- */
var C_TRUNC =
  '<svg viewBox="0 0 320 200" role="img" aria-label="Bar chart with a vertical axis starting at 100">'+
  '<text class="cx-title" x="45" y="12">Units sold</text>'+
  ['100','102','104','106','108'].map(function(v,i){
    var yy = 160 - i*32;
    return '<line class="cx-grid" x1="45" y1="'+yy+'" x2="305" y2="'+yy+'"/>'+
           '<text class="cx-label" x="39" y="'+(yy+3)+'" text-anchor="end">'+v+'</text>';
  }).join('')+
  '<rect class="s1" x="90" y="128" width="60" height="32"/>'+     /* 102 */
  '<rect class="s2" x="200" y="32" width="60" height="128"/>'+    /* 108 */
  '<text class="cx-label" x="120" y="174" text-anchor="middle">Region A</text>'+
  '<text class="cx-label" x="230" y="174" text-anchor="middle">Region B</text>'+
  '<line class="cx-axis" x1="45" y1="160" x2="305" y2="160"/>'+
  '</svg>';

/* ---------- D. Pie: market share of a $800m market ---------- */
var C_PIE = (function(){
  var data = [['Alpha',40,'s1'],['Beta',25,'s2'],['Gamma',20,'s3'],['Others',15,'s4']];
  var cx=95, cy=100, r=70, a=-Math.PI/2, out='', legend='';
  data.forEach(function(d,i){
    var ang = d[1]/100*2*Math.PI, a2 = a+ang;
    var large = ang > Math.PI ? 1 : 0;
    out += '<path class="'+d[2]+'" d="M'+cx+' '+cy+' L'+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)+
           ' A'+r+' '+r+' 0 '+large+' 1 '+(cx+r*Math.cos(a2)).toFixed(1)+' '+(cy+r*Math.sin(a2)).toFixed(1)+' Z"/>';
    legend += '<rect class="'+d[2]+'" x="200" y="'+(52+i*24)+'" width="11" height="11"/>'+
              '<text class="cx-label" x="217" y="'+(62+i*24)+'">'+d[0]+' — '+d[1]+'%</text>';
    a = a2;
  });
  return '<svg viewBox="0 0 320 200" role="img" aria-label="Pie chart of market share">'+
    '<text class="cx-title" x="20" y="14">Market share (total market $800m)</text>'+ out + legend + '</svg>';
})();

/* ---------- E. Stacked bars: cost structure, two years ---------- */
var C_STACK = (function(){
  var yrs = [{y:'2024', v:[50,30,20]}, {y:'2025', v:[55,39,24]}];
  var scale = 1.1;   /* 120 units -> 132px */
  var out = '', legend = '';
  yrs.forEach(function(d,i){
    var x = 80 + i*110, base = 160;
    ['s1','s2','s3'].forEach(function(cls,j){
      var h = d.v[j]*scale;
      base -= h;
      out += '<rect class="'+cls+'" x="'+x+'" y="'+base.toFixed(1)+'" width="58" height="'+h.toFixed(1)+'"/>';
    });
    out += '<text class="cx-label" x="'+(x+29)+'" y="174" text-anchor="middle">'+d.y+'</text>';
  });
  ['Labour','Materials','Other'].forEach(function(n,i){
    legend += '<rect class="s'+(i+1)+'" x="240" y="'+(60+i*22)+'" width="11" height="11"/>'+
              '<text class="cx-label" x="256" y="'+(70+i*22)+'">'+n+'</text>';
  });
  return '<svg viewBox="0 0 320 200" role="img" aria-label="Stacked bar chart of cost structure">'+
    '<text class="cx-title" x="30" y="12">Cost structure ($m)</text>'+
    out + legend + '<line class="cx-axis" x1="60" y1="160" x2="230" y2="160"/></svg>';
})();

(function(){
  var Q = [
  /* ---- A ---- */
  { chart:C_BARS, type:'chart', d:2,
    prompt:"In which quarter did Product A first sell more than Product B?",
    choices:["Q1","Q2","Q3","Q4"], answer:3,
    takeaway:"On a grouped bar chart, compare bars within each group before comparing across groups.",
    explanation:"Read each pair: Q1 40 vs 60, Q2 55 vs 58, Q3 50 vs 62, Q4 70 vs 65. Only in Q4 does the Product A bar rise above Product B. Q2 is the trap — the bars are nearly level there, which invites a careless eye to call it the crossover." },
  { chart:C_BARS, type:'chart', d:2,
    prompt:"Which product grew faster over the year, measured from Q1 to Q4?",
    choices:["Product A, by a wide margin","Product B, by a wide margin","They grew at the same rate","Product B, but only slightly"], answer:0,
    takeaway:"Growth is judged on percentage change from each product's own starting point, not on bar height.",
    explanation:"Product A went 40 → 70, a rise of 30 on a base of 40, or 75%. Product B went 60 → 65, a rise of 5 on a base of 60, or 8.3%. Product B's bars are taller for most of the year, which is exactly why growth must be computed rather than eyeballed." },
  { chart:C_BARS, type:'chart', d:1,
    prompt:"What were Product A's total sales across the four quarters?",
    choices:["$195,000","$205,000","$215,000","$245,000"], answer:2,
    takeaway:"Read each bar against the gridlines, then add — do not estimate the total from the visual bulk.",
    explanation:"Reading Product A off the axis: 40 + 55 + 50 + 70 = 215, and the chart is labelled in $000, so $215,000. Note that Q2 and Q3 sit between gridlines, so each has to be interpolated rather than read directly." },
  { chart:C_BARS, type:'chart', d:2,
    prompt:"Which quarter had the highest combined sales across both products?",
    choices:["Q1","Q2","Q3","Q4"], answer:3,
    takeaway:"For a combined total on a grouped chart, add the pair in each group before comparing.",
    explanation:"Q1 40+60 = 100; Q2 55+58 = 113; Q3 50+62 = 112; Q4 70+65 = 135. Q4 is highest. Q2 and Q3 are close enough that reading the values matters — the taller single bar in Q3 does not decide it." },

  /* ---- B ---- */
  { chart:C_LINES, type:'chart', d:2,
    prompt:"In which year did Beta's market share first exceed Alpha's?",
    choices:["2021","2022","2023","2024"], answer:3,
    takeaway:"A crossover happens at the first plotted point where the lines actually swap order, not where they look close.",
    explanation:"Read the pairs: 2022 gives Alpha 26 vs Beta 19; 2023 gives 23 vs 22, still Alpha ahead; 2024 gives 20 vs 26, Beta ahead. The lines converge visually during 2023, which is the trap — near-touching is not crossing." },
  { chart:C_LINES, type:'chart', d:1,
    prompt:"By how many percentage points did Alpha's share fall between 2020 and 2024?",
    choices:["6 points","8 points","10 points","14 points"], answer:2,
    takeaway:"A change in a share is expressed in percentage POINTS, not percent.",
    explanation:"Alpha went from 30% to 20%, a fall of 10 percentage points. Note that this is also a 33% relative decline — the question asks for points, so 10 is correct. Confusing the two units is the most common error in share questions." },
  { chart:C_LINES, type:'chart', d:3,
    prompt:"Between 2020 and 2024, roughly what happened to the two companies' combined share?",
    choices:["It rose from 42% to 46%","It fell from 42% to 40%","It was unchanged at 42%","It fell from 46% to 42%"], answer:0,
    takeaway:"Combined share needs both series added at each end point — one falling series does not settle it.",
    explanation:"2020: 30 + 12 = 42%. 2024: 20 + 26 = 46%. Together they gained 4 points, even though Alpha lost 10, because Beta gained 14. Reading only the declining line and concluding the pair shrank is the trap this question is built around." },
  { chart:C_LINES, type:'chart', d:2,
    prompt:"Which series shows the steadier year-on-year change?",
    choices:["Alpha, changing by 2–3 points a year","Beta, changing by exactly 2 points a year","Both change identically","Neither shows a consistent pattern"], answer:0,
    takeaway:"Steadiness is about the size of each step, which you read from the gaps between consecutive points.",
    explanation:"Alpha steps −2, −2, −3, −3: consistently small and shrinking. Beta steps +4, +3, +3, +4: larger and less even. Beta is not changing by exactly 2 a year, so that option misreads the chart even though Beta's line looks smooth." },

  /* ---- C: truncated axis ---- */
  { chart:C_TRUNC, type:'chart', d:2,
    prompt:"Region B's bar appears about four times the height of Region A's.\n\nBy what percentage do Region B's actual sales exceed Region A's?",
    choices:["about 6%","about 25%","about 75%","about 300%"], answer:0,
    takeaway:"Check where the vertical axis starts before trusting any visual comparison of bar heights.",
    explanation:"The axis begins at 100, not 0, so the visible heights represent 2 and 8 rather than 102 and 108. The real difference is 6 on a base of 102, about 5.9%. A truncated axis is not necessarily dishonest, but it always magnifies differences — this is the single most common way a chart misleads." },
  { chart:C_TRUNC, type:'chart', d:2,
    prompt:"What single change would make this chart represent the difference fairly?",
    choices:["Starting the vertical axis at zero","Swapping the order of the two bars","Making both bars the same colour","Adding a third region for context"], answer:0,
    takeaway:"A zero baseline is what makes bar height proportional to value.",
    explanation:"Bar charts encode value as length, and length is only proportional to value when the axis starts at zero. With a zero baseline these two bars would be nearly indistinguishable, which is the honest picture. Colour and ordering change appearance but not the distortion." },

  /* ---- D: pie ---- */
  { chart:C_PIE, type:'chart', d:1,
    prompt:"What is Alpha's revenue in this market?",
    choices:["$240 million","$320 million","$360 million","$400 million"], answer:1,
    takeaway:"Convert 1% of the total into money once, then every slice becomes a quick multiplication.",
    explanation:"1% of an $800m market is $8m, so Alpha's 40% is 40 × 8 = $320m. Reading the pie visually would suggest Alpha is 'about half', which would give $400m — the slice looks larger than it is because it is the biggest one." },
  { chart:C_PIE, type:'chart', d:2,
    prompt:"How much more revenue does Beta generate than Gamma?",
    choices:["$20 million","$40 million","$60 million","$80 million"], answer:1,
    takeaway:"Work with the difference in shares rather than computing both revenues.",
    explanation:"Beta 25% minus Gamma 20% is a 5-point gap, and 5% of $800m is $40m. Computing $200m and $160m separately reaches the same place with two extra steps and two extra chances to slip." },
  { chart:C_PIE, type:'chart', d:2,
    prompt:"If Gamma acquired the whole of 'Others' and kept every customer, which statement would be true?",
    choices:["Gamma would become the largest player","Gamma would move into second place","Gamma would still be third","Gamma would tie with Alpha"], answer:1,
    takeaway:"Shares add when the total market is unchanged — then re-rank against the others.",
    explanation:"Gamma would hold 20 + 15 = 35%, which sits above Beta's 25% but below Alpha's 40%. So it moves from third to second. The trap is stopping at the addition without re-ranking against every other slice." },

  /* ---- E: stacked ---- */
  { chart:C_STACK, type:'chart', d:2,
    prompt:"Which cost category grew fastest between 2024 and 2025?",
    choices:["Labour","Materials","Other","They all grew at the same rate"], answer:1,
    takeaway:"On a stacked chart, read each segment's own height in both years before comparing growth.",
    explanation:"Labour 50 → 55 is +10%; Materials 30 → 39 is +30%; Other 20 → 24 is +20%. Materials grew fastest despite Labour adding more dollars. Stacked charts make this hard to see because only the bottom segment shares a common baseline." },
  { chart:C_STACK, type:'chart', d:3,
    prompt:"What happened to Labour's share of total costs?",
    choices:["It rose from 50% to 55%","It fell from 50% to about 47%","It was unchanged at 50%","It fell from 55% to 50%"], answer:1,
    takeaway:"A segment's share falls whenever it grows more slowly than the total.",
    explanation:"2024 totals 100 with Labour at 50, so 50%. 2025 totals 55 + 39 + 24 = 118 with Labour at 55, so 46.6%. Labour rose in absolute terms while falling as a share, because total costs grew 18% against Labour's 10% — the distinction a stacked chart is designed to obscure." },
  { chart:C_STACK, type:'chart', d:2,
    prompt:"By how much did total costs rise between 2024 and 2025?",
    choices:["$12 million","$18 million","$24 million","$30 million"], answer:1,
    takeaway:"On a stacked chart the total is the full bar height — add the segments rather than reading the top edge.",
    explanation:"2024: 50 + 30 + 20 = 100. 2025: 55 + 39 + 24 = 118. The rise is $18m, or 18%. Reading the top of the bar against the gridlines is error-prone here because the axis is unlabelled above the stack." }
  ];
  Q.forEach(function(q){ window.QUESTION_BANK.data.push(q); });
})();
