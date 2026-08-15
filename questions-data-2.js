/* Working with Data — expansion bank (2026 expansion to support 20 questions/day).

   Appends to QUESTION_BANK.data, so the ids of the original questions (and the 16 chart
   questions appended by questions-charts.js) are untouched and their Spanish translations
   stay correctly mapped. Loaded after questions-charts.js.

   Every question carries `type` and `d` explicitly: the difficulty-default IIFE at the end
   of questions-data.js has already run by the time this file loads, so nothing here is
   auto-tagged.

   Options that all begin with a digit or $ are NOT shuffled at runtime, so the position of
   the correct answer is varied deliberately in those questions (audit #1). */
window.QUESTION_BANK = window.QUESTION_BANK || {};
window.QUESTION_BANK.data = window.QUESTION_BANK.data || [];

/* ---------- Quarterly revenue by product line ---------- */
var T2_QUARTER =
  '<table><thead><tr><th>Product</th><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th></tr></thead><tbody>' +
  '<tr><td>Alpha</td><td>320</td><td>350</td><td>410</td><td>480</td></tr>' +
  '<tr><td>Beta</td><td>540</td><td>510</td><td>495</td><td>470</td></tr>' +
  '<tr><td>Gamma</td><td>180</td><td>240</td><td>300</td><td>360</td></tr>' +
  '<tr><td>Delta</td><td>260</td><td>260</td><td>265</td><td>275</td></tr>' +
  '</tbody></table><p class="tnote">Revenue by product line, $000</p>';

/* ---------- Headcount and payroll by department ---------- */
var T2_HEADCOUNT =
  '<table><thead><tr><th>Department</th><th>Headcount</th><th>Total payroll ($000)</th></tr></thead><tbody>' +
  '<tr><td>Engineering</td><td>84</td><td>7,560</td></tr>' +
  '<tr><td>Sales</td><td>56</td><td>3,920</td></tr>' +
  '<tr><td>Operations</td><td>120</td><td>6,000</td></tr>' +
  '<tr><td>Marketing</td><td>24</td><td>1,680</td></tr>' +
  '<tr><td>Finance</td><td>16</td><td>1,120</td></tr>' +
  '</tbody></table><p class="tnote">Annual payroll by department</p>';

/* ---------- Cost base, 2024 vs 2025 ---------- */
var T2_COSTS =
  '<table><thead><tr><th>Cost category</th><th>2024</th><th>2025</th></tr></thead><tbody>' +
  '<tr><td>Raw materials</td><td>4,200</td><td>4,830</td></tr>' +
  '<tr><td>Labour</td><td>3,600</td><td>3,780</td></tr>' +
  '<tr><td>Energy</td><td>900</td><td>1,215</td></tr>' +
  '<tr><td>Logistics</td><td>1,100</td><td>1,045</td></tr>' +
  '<tr><td>Overheads</td><td>1,200</td><td>1,380</td></tr>' +
  '</tbody></table><p class="tnote">Operating costs, $000</p>';

/* ---------- Store performance ---------- */
var T2_STORES =
  '<table><thead><tr><th>Store</th><th>Floor area (m²)</th><th>Staff</th><th>Annual sales ($000)</th></tr></thead><tbody>' +
  '<tr><td>Central</td><td>1,200</td><td>40</td><td>7,200</td></tr>' +
  '<tr><td>Riverside</td><td>800</td><td>25</td><td>4,000</td></tr>' +
  '<tr><td>Northgate</td><td>1,500</td><td>45</td><td>6,750</td></tr>' +
  '<tr><td>Eastfield</td><td>600</td><td>20</td><td>3,600</td></tr>' +
  '<tr><td>Southbank</td><td>900</td><td>30</td><td>5,400</td></tr>' +
  '</tbody></table><p class="tnote">Store estate, most recent full year</p>';

/* ---------- Revenue and margin by country ---------- */
var T2_COUNTRY =
  '<table><thead><tr><th>Country</th><th>Revenue ($m)</th><th>Gross margin</th></tr></thead><tbody>' +
  '<tr><td>Spain</td><td>42.0</td><td>38%</td></tr>' +
  '<tr><td>Poland</td><td>18.0</td><td>45%</td></tr>' +
  '<tr><td>Italy</td><td>30.0</td><td>32%</td></tr>' +
  '<tr><td>Sweden</td><td>12.0</td><td>50%</td></tr>' +
  '<tr><td>France</td><td>48.0</td><td>35%</td></tr>' +
  '</tbody></table><p class="tnote">Most recent full year</p>';

/* ---------- Monthly units and average price ---------- */
var T2_MONTHLY =
  '<table><thead><tr><th>Month</th><th>Units sold</th><th>Average price ($)</th></tr></thead><tbody>' +
  '<tr><td>January</td><td>1,200</td><td>45</td></tr>' +
  '<tr><td>February</td><td>1,350</td><td>44</td></tr>' +
  '<tr><td>March</td><td>1,500</td><td>42</td></tr>' +
  '<tr><td>April</td><td>1,650</td><td>40</td></tr>' +
  '<tr><td>May</td><td>1,800</td><td>38</td></tr>' +
  '<tr><td>June</td><td>1,900</td><td>38</td></tr>' +
  '</tbody></table><p class="tnote">Volume and realised price, first half of the year</p>';

/* ---------- Project budget vs actual ---------- */
var T2_PROJECT =
  '<table><thead><tr><th>Workstream</th><th>Budget ($000)</th><th>Actual ($000)</th></tr></thead><tbody>' +
  '<tr><td>Design</td><td>240</td><td>228</td></tr>' +
  '<tr><td>Build</td><td>960</td><td>1,104</td></tr>' +
  '<tr><td>Testing</td><td>320</td><td>368</td></tr>' +
  '<tr><td>Training</td><td>160</td><td>144</td></tr>' +
  '<tr><td>Rollout</td><td>320</td><td>296</td></tr>' +
  '</tbody></table><p class="tnote">Programme closeout, budget against actual spend</p>';

/* ---------- Market share by company ---------- */
var T2_MARKET =
  '<table><thead><tr><th>Company</th><th>2023</th><th>2024</th><th>2025</th></tr></thead><tbody>' +
  '<tr><td>Norvex</td><td>28%</td><td>27%</td><td>25%</td></tr>' +
  '<tr><td>Caldera</td><td>18%</td><td>21%</td><td>24%</td></tr>' +
  '<tr><td>Pilar</td><td>22%</td><td>22%</td><td>21%</td></tr>' +
  '<tr><td>Ostrand</td><td>15%</td><td>14%</td><td>14%</td></tr>' +
  '<tr><td>Others</td><td>17%</td><td>16%</td><td>16%</td></tr>' +
  '</tbody></table><p class="tnote">Share of total market by value</p>';

/* ---------- Deals closed per representative ---------- */
var T2_DEALS =
  '<table><thead><tr><th>Representative</th><th>Deals closed</th></tr></thead><tbody>' +
  '<tr><td>A. Ruiz</td><td>14</td></tr>' +
  '<tr><td>B. Novak</td><td>9</td></tr>' +
  '<tr><td>C. Silva</td><td>22</td></tr>' +
  '<tr><td>D. Adeyemi</td><td>14</td></tr>' +
  '<tr><td>E. Kane</td><td>11</td></tr>' +
  '<tr><td>F. Torres</td><td>30</td></tr>' +
  '<tr><td>G. Lindqvist</td><td>14</td></tr>' +
  '</tbody></table><p class="tnote">Deals closed last quarter</p>';

/* ---------- Raw HR extract containing deliberate data-quality faults ---------- */
var T2_DIRTY2 =
  '<table><thead><tr><th>ID</th><th>Employee</th><th>Department</th><th>Start date</th><th>Annual salary</th><th>Hours/week</th></tr></thead><tbody>' +
  '<tr><td>3001</td><td>J. Okonkwo</td><td>Sales</td><td>2023-04-11</td><td>$58,000</td><td>40</td></tr>' +
  '<tr><td>3002</td><td>M. Farrow</td><td>Marketing</td><td>2024-02-30</td><td>$61,500</td><td>37.5</td></tr>' +
  '<tr><td>3003</td><td>L. Bianchi</td><td>Sales</td><td>2022-09-05</td><td>$54,000</td><td>40</td></tr>' +
  '<tr><td>3004</td><td>J. Okonkwo</td><td>Sales</td><td>2023-04-11</td><td>$58,000</td><td>40</td></tr>' +
  '<tr><td>3005</td><td>P. Nowak</td><td>Operations</td><td>2021-11-18</td><td>$47,200</td><td>95</td></tr>' +
  '<tr><td>3006</td><td>S. Haddad</td><td>Finance</td><td>2025-06-30</td><td>−$3,400</td><td>40</td></tr>' +
  '</tbody></table><p class="tnote">Raw extract from the HR system, before cleaning</p>';

(function(){
var Q = [

/* ---------- QUARTERLY REVENUE ---------- */
{
  table: T2_QUARTER, type: "table", d: 2,
  prompt: "Which product line generated the highest revenue across the full year?",
  choices: ["Alpha", "Beta", "Gamma", "Delta"],
  answer: 1,
  explanation: "Summing each row: Alpha 320 + 350 + 410 + 480 = 1,560; Beta 540 + 510 + 495 + 470 = 2,015; Gamma 180 + 240 + 300 + 360 = 1,080; Delta 260 + 260 + 265 + 275 = 1,060. Beta leads despite declining every quarter, because it started from much the largest base."
},
{
  table: T2_QUARTER, type: "table", d: 1,
  prompt: "What was total revenue across all four product lines in Q4?",
  choices: ["1,470", "1,525", "1,585", "1,620"],
  answer: 2,
  explanation: "480 + 470 + 360 + 275 = 1,585 thousand dollars. Grouping helps: 480 + 470 = 950 and 360 + 275 = 635, and 950 + 635 = 1,585. The 1,470 figure is the Q3 total."
},
{
  table: T2_QUARTER, type: "table", d: 2,
  prompt: "Which product line grew fastest in percentage terms between Q1 and Q4?",
  choices: ["Alpha", "Beta", "Gamma", "Delta"],
  answer: 2,
  explanation: "Alpha grew 160/320 = 50%; Beta fell 70/540 = −13%; Gamma grew 180/180 = 100%; Delta grew 15/260 = 6%. Gamma doubled, but note it did so from the smallest base — its absolute gain of 180 is barely larger than Alpha's 160."
},
{
  table: T2_QUARTER, type: "table", d: 2,
  prompt: "What share of total Q4 revenue did Gamma account for, to the nearest whole percent?",
  choices: ["20%", "23%", "25%", "28%"],
  answer: 1,
  explanation: "Q4 revenue totals 1,585 and Gamma contributed 360, so 360 ÷ 1,585 = 0.227, which rounds to 23%. Dividing by Gamma's own full-year total instead gives a meaningless figure."
},
{
  table: T2_QUARTER, type: "table", d: 3,
  prompt: "By what percentage did total revenue across all product lines grow from Q1 to Q4?",
  choices: ["21.9%", "22.5%", "24.0%", "28.5%"],
  answer: 0,
  explanation: "The Q1 total is 320 + 540 + 180 + 260 = 1,300 and the Q4 total is 1,585, an increase of 285. As a percentage of Q1, 285 ÷ 1,300 = 21.9%. Dividing by the Q4 total instead gives 18.0%."
},
{
  table: T2_QUARTER, type: "table", d: 3,
  prompt: "If Gamma continues to grow by the same absolute amount each quarter as it did between Q3 and Q4, what will its revenue be in Q1 of next year?",
  choices: ["420", "432", "450", "480"],
  answer: 0,
  explanation: "Gamma grew from 300 in Q3 to 360 in Q4, an absolute increase of 60, so the next quarter would be 360 + 60 = 420. Applying the 20% percentage growth instead gives 432, which is the answer to a different question — read carefully whether the extrapolation is absolute or proportional."
},

/* ---------- HEADCOUNT AND PAYROLL ---------- */
{
  table: T2_HEADCOUNT, type: "table", d: 2,
  prompt: "Which department has the highest average salary?",
  choices: ["Engineering", "Finance", "Marketing", "Sales"],
  answer: 0,
  explanation: "Divide payroll by headcount for each: Engineering 7,560 ÷ 84 = $90,000; Sales 3,920 ÷ 56 = $70,000; Operations 6,000 ÷ 120 = $50,000; Marketing 1,680 ÷ 24 = $70,000; Finance 1,120 ÷ 16 = $70,000. Engineering leads. Note that the largest payroll and the highest average salary need not coincide."
},
{
  table: T2_HEADCOUNT, type: "table", d: 3,
  prompt: "What is the average salary across the entire company, to the nearest hundred dollars?",
  choices: ["$65,000", "$67,600", "$70,000", "$74,000"],
  answer: 1,
  explanation: "Total payroll is 7,560 + 3,920 + 6,000 + 1,680 + 1,120 = $20,280k across 84 + 56 + 120 + 24 + 16 = 300 people, giving 20,280,000 ÷ 300 = $67,600. Averaging the five departmental averages gives $70,000, which wrongly weights a 16-person department equally with a 120-person one."
},
{
  table: T2_HEADCOUNT, type: "table", d: 1,
  prompt: "Operations accounts for what percentage of total company headcount?",
  choices: ["29.6%", "33.3%", "40.0%", "44.0%"],
  answer: 2,
  explanation: "Total headcount is 300, and Operations has 120, so 120 ÷ 300 = 40%. Its share of payroll is lower, at 6,000 ÷ 20,280 = 29.6%, because its average salary is the lowest of the five."
},
{
  table: T2_HEADCOUNT, type: "table", d: 3,
  prompt: "If Operations headcount were cut by 25% with no change to its average salary, what would total company payroll become?",
  choices: ["$17,280k", "$18,780k", "$19,080k", "$20,280k"],
  answer: 1,
  explanation: "Operations averages 6,000 ÷ 120 = $50,000 per head. Cutting 25% leaves 90 people, so its payroll becomes 90 × 50 = $4,500k, a saving of $1,500k. Total payroll falls from $20,280k to $18,780k."
},
{
  table: T2_HEADCOUNT, type: "table", d: 2,
  prompt: "Sales, Marketing and Finance all share the same average salary. What is it?",
  choices: ["$70,000", "$75,000", "$80,000", "$90,000"],
  answer: 0,
  explanation: "Sales gives 3,920 ÷ 56 = $70,000, Marketing 1,680 ÷ 24 = $70,000 and Finance 1,120 ÷ 16 = $70,000. Three departments of very different sizes can share an identical average, which is why headcount must be carried through any company-wide calculation."
},
{
  table: T2_HEADCOUNT, type: "table", d: 2,
  prompt: "Engineering's total payroll is what multiple of Finance's?",
  choices: ["4.50", "5.25", "6.75", "7.00"],
  answer: 2,
  explanation: "7,560 ÷ 1,120 = 6.75. Engineering has 5.25 times Finance's headcount but 6.75 times its payroll, because its average salary is also higher."
},

/* ---------- COST BASE ---------- */
{
  table: T2_COSTS, type: "table", d: 2,
  prompt: "Which cost category grew fastest in percentage terms between 2024 and 2025?",
  choices: ["Labour", "Logistics", "Overheads", "Energy"],
  answer: 3,
  explanation: "Raw materials grew 630/4,200 = 15%; Labour 180/3,600 = 5%; Energy 315/900 = 35%; Logistics fell 55/1,100 = −5%; Overheads 180/1,200 = 15%. Energy grew fastest in percentage terms even though its absolute increase of 315 was smaller than raw materials' 630."
},
{
  table: T2_COSTS, type: "table", d: 1,
  prompt: "Cost control appears to have worked in exactly one category — which one?",
  choices: ["Energy", "Labour", "Logistics", "Overheads"],
  answer: 2,
  explanation: "Logistics fell from 1,100 to 1,045, a reduction of 55. Every other category rose, so Logistics is the only line where costs were actually brought down."
},
{
  table: T2_COSTS, type: "table", d: 2,
  prompt: "Summing all five cost categories, what was the year-on-year percentage increase in total costs?",
  choices: ["10.2%", "11.4%", "12.5%", "13.6%"],
  answer: 1,
  explanation: "2024 costs total 4,200 + 3,600 + 900 + 1,100 + 1,200 = 11,000 and 2025 costs total 4,830 + 3,780 + 1,215 + 1,045 + 1,380 = 12,250. The increase of 1,250 against 11,000 is 11.4%."
},
{
  table: T2_COSTS, type: "table", d: 2,
  prompt: "Raw materials accounted for what share of total costs in 2025?",
  choices: ["39.4%", "40.0%", "42.0%", "44.0%"],
  answer: 0,
  explanation: "4,830 ÷ 12,250 = 39.4%. In 2024 the same category was 4,200 ÷ 11,000 = 38.2%, so its share rose slightly because it grew faster than the total."
},
{
  table: T2_COSTS, type: "table", d: 3,
  prompt: "If energy costs grow in 2026 at the same percentage rate as they did in 2025, what will they be, to the nearest thousand dollars?",
  choices: ["$1,530k", "$1,640k", "$1,700k", "$1,823k"],
  answer: 1,
  explanation: "Energy grew from 900 to 1,215, a rate of 35%. Applying that to 1,215 gives 1,215 × 1.35 = $1,640k. Adding the same absolute increase of 315 instead gives $1,530k."
},
{
  table: T2_COSTS, type: "table", d: 3,
  prompt: "Labour and energy together accounted for what share of total 2025 costs?",
  choices: ["40.8%", "42.0%", "44.5%", "46.0%"],
  answer: 0,
  explanation: "Labour and energy total 3,780 + 1,215 = 4,995 against total costs of 12,250, giving 40.8%. In 2024 the same pair was 4,500 ÷ 11,000 = 40.9%, so their combined share barely moved despite energy's sharp rise."
},

/* ---------- STORE ESTATE ---------- */
{
  table: T2_STORES, type: "table", d: 2,
  prompt: "Which store generates the lowest sales per square metre?",
  choices: ["Central", "Northgate", "Riverside", "Southbank"],
  answer: 1,
  explanation: "Sales per square metre: Central 7,200 ÷ 1,200 = $6,000; Riverside 4,000 ÷ 800 = $5,000; Northgate 6,750 ÷ 1,500 = $4,500; Eastfield 3,600 ÷ 600 = $6,000; Southbank 5,400 ÷ 900 = $6,000. Northgate is lowest, despite having the largest floor area and the second-highest sales."
},
{
  table: T2_STORES, type: "table", d: 1,
  prompt: "What were total annual sales across all five stores?",
  choices: ["$25,450k", "$26,950k", "$27,500k", "$28,150k"],
  answer: 1,
  explanation: "7,200 + 4,000 + 6,750 + 3,600 + 5,400 = $26,950k. Group to check: 7,200 + 3,600 = 10,800 and 4,000 + 6,750 + 5,400 = 16,150, and 10,800 + 16,150 = 26,950."
},
{
  table: T2_STORES, type: "table", d: 3,
  prompt: "What are average annual sales per staff member across the whole estate, to the nearest hundred dollars?",
  choices: ["$150,000", "$168,400", "$172,000", "$180,000"],
  answer: 1,
  explanation: "Total sales are $26,950k across 40 + 25 + 45 + 20 + 30 = 160 staff, giving 26,950,000 ÷ 160 = $168,438, or $168,400 to the nearest hundred. Averaging the five per-store figures gives $170,000 and ignores the different staff numbers."
},
{
  table: T2_STORES, type: "table", d: 3,
  prompt: "Northgate has the largest floor area of any store. Where does it rank on sales per square metre?",
  choices: ["1st", "2nd", "4th", "5th"],
  answer: 3,
  explanation: "At $4,500 per square metre Northgate is the lowest of the five, so it ranks 5th. Three stores tie at $6,000 and Riverside sits at $5,000. Size and productivity are moving in opposite directions here, which is exactly what a per-unit metric is designed to expose."
},
{
  table: T2_STORES, type: "table", d: 2,
  prompt: "If Riverside's sales per square metre rose to match Central's, what would its annual sales become?",
  choices: ["$4,800k", "$5,000k", "$5,400k", "$6,000k"],
  answer: 0,
  explanation: "Central achieves $6,000 per square metre. Riverside has 800 m², so matching that rate gives 800 × 6,000 = $4,800k, an increase of $800k on its current $4,000k."
},
{
  table: T2_STORES, type: "table", d: 2,
  prompt: "What percentage of total estate sales does the Central store account for?",
  choices: ["24.0%", "25.5%", "26.7%", "28.0%"],
  answer: 2,
  explanation: "7,200 ÷ 26,950 = 26.7%. Central holds 24% of the floor area and 25% of the staff but generates a larger share of sales than either, which is consistent with its high sales per square metre."
}
,

/* ---------- REVENUE AND MARGIN BY COUNTRY ---------- */
{
  table: T2_COUNTRY, type: "table", d: 2,
  prompt: "Which country generates the most gross profit?",
  choices: ["France", "Poland", "Spain", "Sweden"],
  answer: 0,
  explanation: "Multiply revenue by margin: Spain 42 × 0.38 = $15.96m; Poland 18 × 0.45 = $8.10m; Italy 30 × 0.32 = $9.60m; Sweden 12 × 0.50 = $6.00m; France 48 × 0.35 = $16.80m. France leads on gross profit despite having neither the highest margin nor a large one — its revenue base carries it."
},
{
  table: T2_COUNTRY, type: "table", d: 3,
  prompt: "What is the blended gross margin across all five countries?",
  choices: ["35.0%", "37.6%", "40.0%", "42.0%"],
  answer: 1,
  explanation: "Total gross profit is $56.46m on total revenue of $150.0m, giving 56.46 ÷ 150 = 37.6%. Averaging the five margins gives exactly 40%, which overstates the result because the two highest-margin countries are the two smallest."
},
{
  table: T2_COUNTRY, type: "table", d: 2,
  prompt: "What is total gross profit across all five countries?",
  choices: ["$52.5m", "$54.0m", "$56.5m", "$59.0m"],
  answer: 2,
  explanation: "Adding the country gross profits: 15.96 + 8.10 + 9.60 + 6.00 + 16.80 = $56.46m, which rounds to $56.5m."
},
{
  table: T2_COUNTRY, type: "table", d: 3,
  prompt: "Sweden has the highest gross margin of any country. What share of total gross profit does it contribute?",
  choices: ["10.6%", "12.0%", "14.0%", "16.0%"],
  answer: 0,
  explanation: "Sweden generates 12 × 0.50 = $6.00m of the $56.46m total, or 10.6%. The highest margin in the table produces the smallest gross profit contribution because Sweden's revenue is only 8% of the group."
},
{
  table: T2_COUNTRY, type: "table", d: 2,
  prompt: "If Italy's gross margin rose from 32% to 40% with no change in revenue, how much additional gross profit would that generate?",
  choices: ["$2.4m", "$2.7m", "$3.0m", "$3.6m"],
  answer: 0,
  explanation: "The margin gain is 8 percentage points applied to $30m of revenue: 30 × 0.08 = $2.4m. Checking directly, gross profit would move from $9.60m to $12.00m."
},
{
  table: T2_COUNTRY, type: "table", d: 2,
  prompt: "Which two countries together account for exactly 60% of total revenue?",
  choices: [
    "France and Spain",
    "France and Italy",
    "Italy and Spain",
    "Poland and France"
  ],
  answer: 0,
  explanation: "Total revenue is $150m, so 60% is $90m. Spain's $42m plus France's $48m gives exactly $90m. France and Italy total $78m and Italy and Spain total $72m."
},

/* ---------- MONTHLY VOLUME AND PRICE ---------- */
{
  table: T2_MONTHLY, type: "table", d: 2,
  prompt: "In which month was revenue highest?",
  choices: ["March", "April", "May", "June"],
  answer: 3,
  explanation: "Revenue is units times price: January $54,000; February $59,400; March $63,000; April $66,000; May $68,400; June $72,200. June is highest, because the volume increase more than offset the flat price."
},
{
  table: T2_MONTHLY, type: "table", d: 2,
  prompt: "What was total revenue across the six months?",
  choices: ["$368,000", "$375,500", "$383,000", "$391,000"],
  answer: 2,
  explanation: "Summing the monthly figures: 54,000 + 59,400 + 63,000 + 66,000 + 68,400 + 72,200 = $383,000. Multiplying total units by an average of the listed prices does not give this figure, because the higher-volume months carry lower prices."
},
{
  table: T2_MONTHLY, type: "table", d: 3,
  prompt: "What was the average realised price per unit across the whole six-month period?",
  choices: ["$40.74", "$41.17", "$42.00", "$43.50"],
  answer: 0,
  explanation: "The correct calculation is total revenue divided by total units: 383,000 ÷ 9,400 = $40.74. Averaging the six listed prices gives $41.17, which is too high because it weights January's 1,200 units the same as June's 1,900."
},
{
  table: T2_MONTHLY, type: "table", d: 1,
  prompt: "By what percentage did unit sales grow from January to June?",
  choices: ["36.8%", "50.0%", "58.3%", "63.2%"],
  answer: 2,
  explanation: "Units rose from 1,200 to 1,900, an increase of 700. Against the January base, 700 ÷ 1,200 = 58.3%. Dividing by the June figure instead gives 36.8%."
},
{
  table: T2_MONTHLY, type: "table", d: 3,
  prompt: "By what percentage did revenue grow from January to June?",
  choices: ["33.7%", "36.0%", "40.0%", "45.0%"],
  answer: 0,
  explanation: "Revenue rose from $54,000 to $72,200, an increase of $18,200, or 33.7% of the January figure. Revenue grew far more slowly than the 58.3% volume growth because the average price fell from $45 to $38 over the same period."
},
{
  table: T2_MONTHLY, type: "table", d: 3,
  prompt: "Between which two consecutive months did revenue grow by the smallest absolute amount?",
  choices: [
    "February and March",
    "March and April",
    "April and May",
    "May and June"
  ],
  answer: 2,
  explanation: "Month-on-month revenue changes are +$5,400, +$3,600, +$3,000, +$2,400 and +$3,800. The smallest increase is April to May at $2,400, the month in which the price dropped from $40 to $38."
},

/* ---------- PROJECT BUDGET VS ACTUAL ---------- */
{
  table: T2_PROJECT, type: "table", d: 2,
  prompt: "By what percentage did the programme exceed its total budget?",
  choices: ["5.0%", "6.5%", "7.0%", "8.5%"],
  answer: 2,
  explanation: "Budget totals $2,000k and actual spend $2,140k, an overspend of $140k. Against budget that is 140 ÷ 2,000 = 7.0%. Three of the five workstreams came in under budget, but the two that overran were large enough to push the whole programme over."
},
{
  table: T2_PROJECT, type: "table", d: 1,
  prompt: "Which workstream overspent by the largest absolute amount?",
  choices: ["Build", "Design", "Rollout", "Testing"],
  answer: 0,
  explanation: "Build overspent by 1,104 − 960 = $144k and Testing by 368 − 320 = $48k. Design, Training and Rollout all came in under budget."
},
{
  table: T2_PROJECT, type: "table", d: 3,
  prompt: "Which two workstreams overspent by the same percentage of their budgets?",
  choices: [
    "Build and Testing",
    "Build and Rollout",
    "Design and Training",
    "Testing and Rollout"
  ],
  answer: 0,
  explanation: "Build overran by 144 ÷ 960 = 15% and Testing by 48 ÷ 320 = 15%, so despite very different absolute figures they overran in identical proportion. Design, Training and Rollout underspent by 5%, 10% and 7.5% respectively."
},
{
  table: T2_PROJECT, type: "table", d: 1,
  prompt: "What was total actual spend on the programme?",
  choices: ["$2,140k", "$2,180k", "$2,240k", "$2,300k"],
  answer: 0,
  explanation: "228 + 1,104 + 368 + 144 + 296 = $2,140k. Grouping helps: 228 + 144 + 296 = 668 and 1,104 + 368 = 1,472, and 668 + 1,472 = 2,140."
},
{
  table: T2_PROJECT, type: "table", d: 3,
  prompt: "If the Build workstream had come in exactly on budget with all other workstreams unchanged, what would the programme's overall position have been?",
  choices: [
    "An underspend of $4k",
    "An overspend of $4k",
    "An overspend of $140k",
    "Exactly on budget"
  ],
  answer: 0,
  explanation: "Removing Build's $144k overrun from the $140k total overspend leaves −$4k, an underspend. Testing's $48k overrun would then be more than covered by the $52k of underspend across Design, Training and Rollout."
},

/* ---------- MARKET SHARE ---------- */
{
  table: T2_MARKET, type: "table", d: 1,
  prompt: "Which company gained the most market share between 2023 and 2025?",
  choices: ["Caldera", "Norvex", "Ostrand", "Pilar"],
  answer: 0,
  explanation: "Caldera rose from 18% to 24%, a gain of 6 percentage points. Norvex lost 3 points, Pilar lost 1 and Ostrand lost 1. Caldera's gain came almost entirely at Norvex's expense."
},
{
  table: T2_MARKET, type: "table", d: 2,
  prompt: "If the total market was worth $4.0bn in 2025, what was Caldera's revenue that year?",
  choices: ["$0.84bn", "$0.96bn", "$1.00bn", "$1.12bn"],
  answer: 1,
  explanation: "Caldera held 24% of the market in 2025: 4.0 × 0.24 = $0.96bn. The $1.00bn figure corresponds to Norvex's 25% share."
},
{
  table: T2_MARKET, type: "table", d: 2,
  prompt: "By how many percentage points did Norvex's share fall between 2023 and 2025?",
  choices: [
    "2 percentage points",
    "3 percentage points",
    "4 percentage points",
    "11 percentage points"
  ],
  answer: 1,
  explanation: "Norvex went from 28% to 25%, a fall of 3 percentage points. The 11-point figure confuses percentage points with the relative percentage decline, which is a different measure."
},
{
  table: T2_MARKET, type: "table", d: 3,
  prompt: "Norvex's share fell from 28% to 25%. By what percentage did its share decline in relative terms?",
  choices: ["3.0%", "8.5%", "10.7%", "12.0%"],
  answer: 2,
  explanation: "The relative decline divides the change by the starting share: 3 ÷ 28 = 10.7%. The 3-point fall and the 10.7% relative decline describe the same movement, and confusing the two is one of the most common errors in share analysis."
},
{
  table: T2_MARKET, type: "table", d: 3,
  prompt: "The total market grew from $3.2bn in 2023 to $4.0bn in 2025. What happened to Norvex's revenue over that period?",
  choices: [
    "It rose by about $0.10bn",
    "It rose by about $0.30bn",
    "It fell by about $0.10bn",
    "It fell by about $0.30bn"
  ],
  answer: 0,
  explanation: "Norvex earned 3.2 × 0.28 = $0.896bn in 2023 and 4.0 × 0.25 = $1.00bn in 2025, a rise of about $0.10bn. Losing share in a growing market can still mean growing revenue, which is why share and absolute performance must be read together."
},

/* ---------- STATISTICS ---------- */
{
  table: T2_DEALS, type: "statistics", d: 1,
  prompt: "What is the median number of deals closed?",
  choices: ["11", "14", "16", "22"],
  answer: 1,
  explanation: "Sort the values: 9, 11, 14, 14, 14, 22, 30. With seven observations the median is the fourth, which is 14. The mean of 16.3 is higher, which is a signal that the distribution is being pulled by the two large values."
},
{
  table: T2_DEALS, type: "statistics", d: 2,
  prompt: "What is the mean number of deals closed, to one decimal place?",
  choices: ["14.0", "15.5", "16.3", "17.1"],
  answer: 2,
  explanation: "The deals total 14 + 9 + 22 + 14 + 11 + 30 + 14 = 114 across seven representatives, so 114 ÷ 7 = 16.3."
},
{
  table: T2_DEALS, type: "statistics", d: 1,
  prompt: "By how many deals does the top performer outstrip the weakest?",
  choices: ["21", "23", "26", "30"],
  answer: 0,
  explanation: "This is the range: the largest value minus the smallest, 30 − 9 = 21. The 30 distractor is simply the maximum, which is not the same thing as the gap between top and bottom."
},
{
  table: T2_DEALS, type: "statistics", d: 1,
  prompt: "If a sales manager wanted to know the deal count most reps are actually hitting, which figure would that be?",
  choices: ["9", "11", "14", "30"],
  answer: 2,
  explanation: "That figure is the mode, the most frequently occurring value. Three representatives closed 14 deals; every other figure appears once."
},
{
  table: T2_DEALS, type: "statistics", d: 3,
  prompt: "The mean of this dataset is noticeably higher than its median. What does that indicate about the distribution?",
  choices: [
    "It is skewed to the right by one or two unusually high values",
    "It is skewed to the left by one or two unusually low values",
    "It is symmetrical around the mean",
    "The values were recorded incorrectly"
  ],
  answer: 0,
  explanation: "A mean above the median means the high tail is longer: here 22 and especially 30 pull the average up while the median stays at 14. This is right skew, and it is why the median is usually the better description of a typical case in skewed data."
},
{
  table: T2_DEALS, type: "statistics", d: 3,
  prompt: "If F. Torres's 30 deals were excluded from the dataset, what would happen to the median?",
  choices: [
    "It would remain at 14",
    "It would fall to 12.5",
    "It would fall to 11",
    "It would rise to 16"
  ],
  answer: 0,
  explanation: "Without 30 the sorted values are 9, 11, 14, 14, 14, 22. With six observations the median is the average of the third and fourth, both 14, so it stays at 14. The median's insensitivity to extreme values is exactly what makes it robust."
},
{
  table: T2_DEALS, type: "statistics", d: 2,
  prompt: "If F. Torres's 30 deals were excluded, what would the mean become?",
  choices: ["13.5", "14.0", "15.0", "16.3"],
  answer: 1,
  explanation: "The remaining six values total 114 − 30 = 84, so the mean is 84 ÷ 6 = 14.0. Removing a single observation moved the mean by 2.3 while leaving the median untouched."
},
{
  type: "statistics", d: 2,
  prompt: "A dataset contains the values 4, 8, 8, 10 and 20. Which measure of central tendency is most affected by the value 20?",
  choices: ["The mean", "The median", "The mode", "All three equally"],
  answer: 0,
  explanation: "The mean uses every value, so an extreme observation shifts it directly: here it is 10.0, above three of the five values and equal to one. The median stays at 8 and the mode stays at 8 regardless of how large the final value becomes."
},
{
  type: "statistics", d: 2,
  prompt: "Two production teams have the same mean daily output, but Team A's standard deviation is three times Team B's. What does this tell you?",
  choices: [
    "Team A's daily output varies much more from day to day than Team B's",
    "Team A produces more in total than Team B",
    "Team A's output is systematically higher than Team B's",
    "Team B has more production days than Team A"
  ],
  answer: 0,
  explanation: "Standard deviation measures spread, not level. With identical means, a larger standard deviation means Team A's daily figures are scattered more widely around that mean — less consistent, not more or less productive on average."
},
{
  type: "statistics", d: 2,
  prompt: "A survey of 500 people finds that 60% approve of a proposal, with a margin of error of ±4 percentage points. Which range most likely contains the true level of approval?",
  choices: ["52% to 68%", "56% to 64%", "58% to 62%", "60% to 64%"],
  answer: 1,
  explanation: "A margin of error of ±4 points is applied in both directions around the estimate: 60 − 4 = 56% and 60 + 4 = 64%. Doubling the margin gives the too-wide first option, and applying it in one direction only gives the last."
},
{
  type: "statistics", d: 2,
  prompt: "In a dataset of company salaries where a small number of executives earn many times the typical wage, which measure best represents a typical employee's salary?",
  choices: ["The median", "The mean", "The range", "The maximum"],
  answer: 0,
  explanation: "The median is the middle value and is unaffected by how extreme the top salaries are, so it describes the typical employee well. The mean is dragged upward by the executive salaries and can exceed what most staff actually earn; range and maximum describe the extremes rather than the centre."
},

/* ---------- DATA VALIDATION ---------- */
{
  table: T2_DIRTY2, type: "validation", d: 2,
  prompt: "Which row contains a start date that cannot be valid?",
  choices: ["3002", "3003", "3005", "3006"],
  answer: 0,
  explanation: "Row 3002 records 2024-02-30. February never has thirty days, in a leap year or otherwise, so this is an impossible date rather than an unusual one. A date-validity check would flag it automatically."
},
{
  table: T2_DIRTY2, type: "validation", d: 2,
  prompt: "Which two rows appear to be duplicates of the same record?",
  choices: [
    "3001 and 3003",
    "3001 and 3004",
    "3002 and 3005",
    "3003 and 3004"
  ],
  answer: 1,
  explanation: "Rows 3001 and 3004 share the same employee name, department, start date, salary and hours. Only the ID differs, which is the classic signature of a record inserted twice — a unique ID does not make two rows distinct records."
},
{
  table: T2_DIRTY2, type: "validation", d: 1,
  prompt: "Which row contains a value that is impossible for the salary field?",
  choices: ["3002", "3004", "3005", "3006"],
  answer: 3,
  explanation: "Row 3006 records a salary of −$3,400. An annual salary cannot be negative, so this is almost certainly a sign error or a misplaced adjustment entry that has been loaded into the wrong column."
},
{
  table: T2_DIRTY2, type: "validation", d: 3,
  prompt: "Row 3005 records 95 hours a week. What is the most appropriate first step?",
  choices: [
    "Query the value with the source system before deciding how to treat it",
    "Delete the row so it does not distort the analysis",
    "Replace the value with the dataset average",
    "Leave it unchanged, since extreme values are still real data"
  ],
  answer: 0,
  explanation: "Ninety-five hours is implausible but not impossible, so it may be a genuine outlier, a data-entry error, or two roles combined into one row. Only the source can settle which. Deleting or overwriting a value before you understand it destroys information and can bias the result in an unknown direction."
},
{
  table: T2_DIRTY2, type: "validation", d: 3,
  prompt: "If the duplicated row is not removed before the average salary is calculated, what effect does it have?",
  choices: [
    "It pulls the average towards $58,000 by counting that employee twice",
    "It has no effect, because the two rows have different IDs",
    "It lowers the average, because it increases the number of records",
    "It makes the average impossible to calculate"
  ],
  answer: 0,
  explanation: "A duplicate adds both a value and a record, so it acts as a second vote for $58,000 and drags the mean towards that figure. Distinct IDs are irrelevant to the arithmetic; what matters is that one person's salary is counted twice."
},
{
  table: T2_DIRTY2, type: "validation", d: 3,
  prompt: "What is the average salary if the analysis is run on this extract without cleaning it?",
  choices: ["$45,883", "$52,180", "$55,740", "$57,875"],
  answer: 0,
  explanation: "Adding all six values including the negative one: 58,000 + 61,500 + 54,000 + 58,000 + 47,200 − 3,400 = $275,300, and 275,300 ÷ 6 = $45,883. The negative entry alone drags the figure roughly $10,000 below any salary actually paid, which is why it should never reach the calculation."
},
{
  table: T2_DIRTY2, type: "validation", d: 3,
  prompt: "What is the average salary after removing the duplicate row and excluding the negative value?",
  choices: ["$52,180", "$55,175", "$55,740", "$57,875"],
  answer: 1,
  explanation: "The four remaining records are $58,000, $61,500, $54,000 and $47,200, totalling $220,700. Dividing by four gives $55,175 — more than $9,000 above the uncleaned figure, which shows how much two faulty rows can move a small dataset."
},
{
  table: T2_DIRTY2, type: "validation", d: 2,
  prompt: "The Hours/week column contains 37.5 for one employee and 40 for the others. Is this a data-quality problem?",
  choices: [
    "No — part-time and reduced-hours contracts are legitimate values",
    "Yes — all values in a column must be whole numbers",
    "Yes — the column should contain a single consistent value",
    "Yes — decimals indicate a formatting error in the export"
  ],
  answer: 0,
  explanation: "Variation is not the same as error. A 37.5-hour week is a standard contract in many organisations and falls well within a plausible range. Data-quality checks should flag impossible or implausible values, not simply values that differ from the majority."
},
{
  type: "validation", d: 2,
  prompt: "Which data-quality issue would be caught by applying a range check to a salary column?",
  choices: [
    "A negative salary value",
    "A misspelled employee name",
    "Two rows recording the same employee",
    "A department name entered in the wrong column"
  ],
  answer: 0,
  explanation: "A range check tests whether each value falls between defined bounds, so a negative salary fails immediately. Misspellings, duplicates and column misalignment all require different controls — string matching, uniqueness checks and schema validation respectively."
},
{
  type: "validation", d: 2,
  prompt: "A dataset merges records from two systems, one of which stores the department as 'Sales' and the other as 'SALES'. What problem does this create?",
  choices: [
    "Aggregations will split one department into two separate groups",
    "The records will fail to load into the analysis tool",
    "The salary values will be misaligned between systems",
    "Duplicate employee records will be created automatically"
  ],
  answer: 0,
  explanation: "Most grouping operations treat text as case-sensitive, so 'Sales' and 'SALES' become two categories and every departmental total is understated. The fix is to standardise casing and whitespace before aggregating, not after noticing the totals look wrong."
}

/* END-DATA-2 */
];
Q.forEach(function(q){ window.QUESTION_BANK.data.push(q); });
})();
