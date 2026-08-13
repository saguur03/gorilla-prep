/* Data Interpretation — reading tables, computing growth, shares, weighted averages, multi-step
   Each question carries an optional `table` field rendered as real HTML. */
window.QUESTION_BANK = window.QUESTION_BANK || {};

/* Shared table markup, defined once and reused across the questions that reference it. */
var T_REGION =
  '<table><thead><tr><th>Region</th><th>2024 sales</th><th>2025 sales</th></tr></thead><tbody>' +
  '<tr><td>North</td><td>1,200</td><td>1,440</td></tr>' +
  '<tr><td>South</td><td>800</td><td>920</td></tr>' +
  '<tr><td>East</td><td>1,500</td><td>1,425</td></tr>' +
  '<tr><td>West</td><td>500</td><td>715</td></tr>' +
  '</tbody></table><p class="tnote">Units sold, in thousands</p>';

var T_PRODUCT =
  '<table><thead><tr><th>Product</th><th>Units sold</th><th>Price</th><th>Unit cost</th></tr></thead><tbody>' +
  '<tr><td>Alpha</td><td>1,200</td><td>$50</td><td>$30</td></tr>' +
  '<tr><td>Beta</td><td>800</td><td>$75</td><td>$60</td></tr>' +
  '<tr><td>Gamma</td><td>2,000</td><td>$20</td><td>$12</td></tr>' +
  '<tr><td>Delta</td><td>450</td><td>$150</td><td>$90</td></tr>' +
  '</tbody></table>';

var T_PAYROLL =
  '<table><thead><tr><th>Month</th><th>Headcount</th><th>Payroll ($000)</th></tr></thead><tbody>' +
  '<tr><td>January</td><td>120</td><td>600.0</td></tr>' +
  '<tr><td>February</td><td>132</td><td>682.0</td></tr>' +
  '<tr><td>March</td><td>140</td><td>700.0</td></tr>' +
  '<tr><td>April</td><td>150</td><td>787.5</td></tr>' +
  '</tbody></table>';

var T_SHARE =
  '<table><thead><tr><th>Company</th><th>Market share</th></tr></thead><tbody>' +
  '<tr><td>Alpha Corp</td><td>32%</td></tr>' +
  '<tr><td>Beta Ltd</td><td>28%</td></tr>' +
  '<tr><td>Gamma Inc</td><td>19%</td></tr>' +
  '<tr><td>Delta SA</td><td>12%</td></tr>' +
  '<tr><td>Others</td><td>9%</td></tr>' +
  '</tbody></table><p class="tnote">Total market size: $2.5 billion</p>';

var T_SURVEY =
  '<table><thead><tr><th>Response</th><th>Respondents</th></tr></thead><tbody>' +
  '<tr><td>Very satisfied</td><td>320</td></tr>' +
  '<tr><td>Satisfied</td><td>480</td></tr>' +
  '<tr><td>Neutral</td><td>200</td></tr>' +
  '<tr><td>Dissatisfied</td><td>120</td></tr>' +
  '<tr><td>Very dissatisfied</td><td>80</td></tr>' +
  '</tbody></table>';

var T_QUARTER =
  '<table><thead><tr><th>Quarter</th><th>Revenue</th><th>COGS</th><th>Operating expenses</th></tr></thead><tbody>' +
  '<tr><td>Q1</td><td>5,000</td><td>3,000</td><td>1,200</td></tr>' +
  '<tr><td>Q2</td><td>5,500</td><td>3,190</td><td>1,300</td></tr>' +
  '<tr><td>Q3</td><td>6,000</td><td>3,600</td><td>1,350</td></tr>' +
  '<tr><td>Q4</td><td>7,000</td><td>3,990</td><td>1,500</td></tr>' +
  '</tbody></table><p class="tnote">All figures in $000</p>';

var T_DEPT =
  '<table><thead><tr><th>Department</th><th>Headcount</th><th>Average salary</th></tr></thead><tbody>' +
  '<tr><td>Sales</td><td>80</td><td>$55,000</td></tr>' +
  '<tr><td>Engineering</td><td>120</td><td>$85,000</td></tr>' +
  '<tr><td>Operations</td><td>150</td><td>$45,000</td></tr>' +
  '<tr><td>Administration</td><td>50</td><td>$40,000</td></tr>' +
  '</tbody></table>';

var T_USERS =
  '<table><thead><tr><th>Year</th><th>Active users (millions)</th></tr></thead><tbody>' +
  '<tr><td>2021</td><td>2.00</td></tr>' +
  '<tr><td>2022</td><td>3.00</td></tr>' +
  '<tr><td>2023</td><td>4.20</td></tr>' +
  '<tr><td>2024</td><td>5.25</td></tr>' +
  '</tbody></table>';

var T_COSTS =
  '<table><thead><tr><th>Cost category</th><th>2024</th><th>2025</th></tr></thead><tbody>' +
  '<tr><td>Labour</td><td>4,800</td><td>5,280</td></tr>' +
  '<tr><td>Materials</td><td>3,000</td><td>3,450</td></tr>' +
  '<tr><td>Logistics</td><td>1,200</td><td>1,140</td></tr>' +
  '<tr><td>Overhead</td><td>1,000</td><td>1,130</td></tr>' +
  '</tbody></table><p class="tnote">All figures in $000</p>';

/* Deals closed per sales rep. Deliberately skewed: mean 8, median 6, mode 5, range 17. */
var T_REPS =
  '<table><thead><tr><th>Sales rep</th><th>Deals closed</th></tr></thead><tbody>' +
  '<tr><td>Alvarez</td><td>3</td></tr>' +
  '<tr><td>Bermúdez</td><td>5</td></tr>' +
  '<tr><td>Castro</td><td>5</td></tr>' +
  '<tr><td>Duarte</td><td>6</td></tr>' +
  '<tr><td>Espinosa</td><td>8</td></tr>' +
  '<tr><td>Fajardo</td><td>9</td></tr>' +
  '<tr><td>Gómez</td><td>20</td></tr>' +
  '</tbody></table>';

/* Same mean (50), very different spread. */
var T_TEAMS =
  '<table><thead><tr><th>Month</th><th>Team A</th><th>Team B</th></tr></thead><tbody>' +
  '<tr><td>January</td><td>48</td><td>30</td></tr>' +
  '<tr><td>February</td><td>49</td><td>40</td></tr>' +
  '<tr><td>March</td><td>50</td><td>50</td></tr>' +
  '<tr><td>April</td><td>51</td><td>60</td></tr>' +
  '<tr><td>May</td><td>52</td><td>70</td></tr>' +
  '</tbody></table><p class="tnote">Units sold per month</p>';

/* Raw extract containing deliberate data-quality faults. */
var T_DIRTY =
  '<table><thead><tr><th>ID</th><th>Customer</th><th>Order value</th><th>Order date</th><th>Region</th></tr></thead><tbody>' +
  '<tr><td>1001</td><td>Restrepo SA</td><td>$4,200</td><td>2025-03-14</td><td>North</td></tr>' +
  '<tr><td>1002</td><td>Vélez Ltda</td><td>$3,850</td><td>2025-03-15</td><td>South</td></tr>' +
  '<tr><td>1003</td><td>Ochoa SAS</td><td>−$1,200</td><td>2025-03-15</td><td>North</td></tr>' +
  '<tr><td>1004</td><td>Restrepo SA</td><td>$4,200</td><td>2025-03-14</td><td>North</td></tr>' +
  '<tr><td>1005</td><td>Mejía y Cía</td><td>$2,970</td><td>2025-13-02</td><td>East</td></tr>' +
  '</tbody></table><p class="tnote">Raw extract from the order system, before cleaning</p>';

window.QUESTION_BANK.data = [

/* ---------- REGIONAL SALES ---------- */
{
  table: T_REGION,
  prompt: "Which region achieved the highest percentage growth in sales from 2024 to 2025?",
  choices: ["North", "South", "East", "West"],
  answer: 3,
  explanation: "Compute each growth rate: North 240/1,200 = 20%; South 120/800 = 15%; East −75/1,500 = −5%; West 215/500 = 43%. West wins clearly. Note that West grew fastest in percentage terms while starting from much the smallest base — small bases produce large percentages, which is why percentage growth alone never tells you which region matters most."
},
{
  table: T_REGION,
  prompt: "What were total sales across all four regions in 2025?",
  choices: ["4,150", "4,350", "4,500", "4,725"],
  answer: 2,
  explanation: "1,440 + 920 + 1,425 + 715 = 4,500 thousand units. Group the addition to reduce errors: 1,440 + 715 = 2,155 and 920 + 1,425 = 2,345, and 2,155 + 2,345 = 4,500."
},
{
  table: T_REGION,
  prompt: "East's 2025 sales represent approximately what percentage of total 2025 sales?",
  choices: ["28.5%", "30.0%", "31.7%", "33.3%"],
  answer: 2,
  explanation: "Total 2025 sales are 4,500. East's share = 1,425 ÷ 4,500 = 0.3167 ≈ 31.7%. A quick sanity check: one quarter of 4,500 is 1,125 and one third is 1,500, so 1,425 must sit just below one third."
},
{
  table: T_REGION,
  prompt: "By what percentage did total sales across all regions grow from 2024 to 2025?",
  choices: ["9.0%", "10.0%", "11.1%", "12.5%"],
  answer: 3,
  explanation: "Totals are 4,000 in 2024 and 4,500 in 2025, so growth = 500 ÷ 4,000 = 12.5%. Dividing by the 2025 figure instead gives 11.1%, the common base error — always divide by the earlier period."
},
{
  table: T_REGION,
  prompt: "North's share of total sales changed how between 2024 and 2025?",
  choices: ["It rose from 30% to 32%", "It fell from 32% to 30%", "It was unchanged at 30%", "It rose from 28% to 30%"],
  answer: 0,
  explanation: "2024: 1,200 ÷ 4,000 = 30%. 2025: 1,440 ÷ 4,500 = 32%. North gained share because its 20% growth outpaced the market's 12.5% growth. Comparing a segment's growth to the total's growth tells you the direction of share movement without computing both shares."
},
{
  table: T_REGION,
  prompt: "If East had grown at the same percentage rate as the total market, what would its 2025 sales have been?",
  choices: ["1,575", "1,650", "1,687.5", "1,725"],
  answer: 2,
  explanation: "The market grew 12.5%, so East would have reached 1,500 × 1.125 = 1,687.5 thousand units. Its actual figure of 1,425 falls 262.5 short, which quantifies precisely how much the region underperformed the market."
},

/* ---------- PRODUCT PROFITABILITY ---------- */
{
  table: T_PRODUCT,
  prompt: "Which product generates the most total gross profit?",
  choices: ["Alpha", "Beta", "Gamma", "Delta"],
  answer: 3,
  explanation: "Gross profit = units × (price − cost). Alpha: 1,200 × 20 = $24,000. Beta: 800 × 15 = $12,000. Gamma: 2,000 × 8 = $16,000. Delta: 450 × 60 = $27,000. Delta leads despite selling the fewest units, because its per-unit profit is by far the largest."
},
{
  table: T_PRODUCT,
  prompt: "Which product has the lowest gross margin as a percentage of price?",
  choices: ["Alpha", "Beta", "Gamma", "Delta"],
  answer: 1,
  explanation: "Margin % = (price − cost) ÷ price. Alpha: 20/50 = 40%. Beta: 15/75 = 20%. Gamma: 8/20 = 40%. Delta: 60/150 = 40%. Beta is the outlier at 20% — it has the second-highest price but converts the least of it into profit."
},
{
  table: T_PRODUCT,
  prompt: "What is total revenue across all four products?",
  choices: ["$205,000", "$220,000", "$227,500", "$235,000"],
  answer: 2,
  explanation: "Alpha 1,200 × 50 = $60,000; Beta 800 × 75 = $60,000; Gamma 2,000 × 20 = $40,000; Delta 450 × 150 = $67,500. Total = $227,500. Three products cluster near $60,000 despite very different volumes and prices."
},
{
  table: T_PRODUCT,
  prompt: "What is the overall gross margin across all four products, as a percentage of total revenue?",
  choices: ["34.7%", "37.5%", "40.0%", "42.5%"],
  answer: 0,
  explanation: "Total gross profit = 24,000 + 12,000 + 16,000 + 27,000 = $79,000 on revenue of $227,500, giving 34.7%. The blended figure sits below 40% because Beta's low-margin revenue drags the weighted average down."
},
{
  table: T_PRODUCT,
  prompt: "Gamma accounts for approximately what percentage of total revenue?",
  choices: ["14.6%", "17.6%", "20.0%", "23.4%"],
  answer: 1,
  explanation: "Gamma's revenue is 2,000 × $20 = $40,000 against a total of $227,500, so 40,000 ÷ 227,500 ≈ 17.6%. Gamma sells the most units of any product yet contributes the smallest revenue share, because its price is the lowest by a wide margin."
},

/* ---------- PAYROLL & HEADCOUNT ---------- */
{
  table: T_PAYROLL,
  prompt: "In which month was the payroll cost per employee highest?",
  choices: ["January", "February", "March", "April"],
  answer: 3,
  explanation: "Divide payroll by headcount: January 600/120 = $5.00k; February 682/132 = $5.17k; March 700/140 = $5.00k; April 787.5/150 = $5.25k. April is highest. Per-employee cost isolates wage effects from the effect of simply hiring more people."
},
{
  table: T_PAYROLL,
  prompt: "By what percentage did headcount grow from January to April?",
  choices: ["20%", "25%", "30%", "33%"],
  answer: 1,
  explanation: "Headcount rose from 120 to 150, an increase of 30 on a base of 120: 30 ÷ 120 = 25%. Using April as the denominator would give 20%, which answers the reverse question of how much April exceeds January proportionally."
},
{
  table: T_PAYROLL,
  prompt: "By what percentage did total payroll grow from January to April?",
  choices: ["22.50%", "25.00%", "28.75%", "31.25%"],
  answer: 3,
  explanation: "Payroll rose from 600.0 to 787.5, an increase of 187.5: 187.5 ÷ 600 = 31.25%. Payroll grew faster than the 25% headcount increase, which is why cost per employee rose over the same period."
},
{
  table: T_PAYROLL,
  prompt: "What was the total payroll across all four months?",
  choices: ["$2,669,500", "$2,769,500", "$2,869,500", "$2,969,500"],
  answer: 1,
  explanation: "600.0 + 682.0 + 700.0 + 787.5 = 2,769.5 thousand dollars, or $2,769,500. Watch the units carefully: the table is expressed in thousands, so the figure must be scaled up by 1,000."
},

/* ---------- MARKET SHARE ---------- */
{
  table: T_SHARE,
  prompt: "What is Alpha Corp's annual revenue in this market?",
  choices: ["$800 million", "$875 million", "$925 million", "$1.0 billion"],
  answer: 0,
  explanation: "Alpha holds 32% of a $2.5 billion market: 0.32 × 2,500 = $800 million. Converting to a convenient unit first — 1% of the market is $25 million, so 32% is 32 × 25 — makes this and every other share in the table quick to compute."
},
{
  table: T_SHARE,
  prompt: "How much more revenue does Beta Ltd generate than Delta SA?",
  choices: ["$300 million", "$400 million", "$450 million", "$500 million"],
  answer: 1,
  explanation: "The share gap is 28% − 12% = 16 percentage points, and 16% of $2.5 billion = $400 million. Working with the difference in shares avoids computing both revenues separately."
},
{
  table: T_SHARE,
  prompt: "The two largest companies together control what portion of the market by revenue?",
  choices: ["$1.35 billion", "$1.50 billion", "$1.75 billion", "$2.00 billion"],
  answer: 1,
  explanation: "Alpha and Beta hold 32% + 28% = 60%, and 60% of $2.5 billion = $1.5 billion. This concentration measure — the combined share of the top players — is a standard first read on how competitive a market is."
},
{
  table: T_SHARE,
  prompt: "If Gamma Inc acquired Delta SA and the combined entity retained all of both companies' customers, what would its market share be?",
  choices: ["19%", "24%", "31%", "34%"],
  answer: 2,
  explanation: "19% + 12% = 31%, which would place the merged company just below Alpha Corp's 32% and above Beta's 28%. Share is additive when the total market size is unchanged and no customers are lost."
},

/* ---------- CUSTOMER SURVEY ---------- */
{
  table: T_SURVEY,
  prompt: "What percentage of respondents were either satisfied or very satisfied?",
  choices: ["40.0%", "53.3%", "60.0%", "66.7%"],
  answer: 3,
  explanation: "Total respondents = 320 + 480 + 200 + 120 + 80 = 1,200. Satisfied categories = 320 + 480 = 800, so 800 ÷ 1,200 = 66.7%. Always compute the total from the table rather than assuming a round number like 1,000."
},
{
  table: T_SURVEY,
  prompt: "What is the ratio of satisfied respondents (both levels) to dissatisfied respondents (both levels)?",
  choices: ["2:1", "3:1", "4:1", "5:1"],
  answer: 2,
  explanation: "Satisfied = 320 + 480 = 800. Dissatisfied = 120 + 80 = 200. The ratio 800:200 simplifies to 4:1. Neutral respondents are excluded from both sides, which is why the ratio is cleaner than the raw percentages suggest."
},
{
  table: T_SURVEY,
  prompt: "If the company's target is that no more than 15% of respondents express any dissatisfaction, did it meet the target?",
  choices: ["Yes, dissatisfaction was 10.0%", "Yes, dissatisfaction was 14.2%", "No, dissatisfaction was 16.7%", "No, dissatisfaction was 20.0%"],
  answer: 2,
  explanation: "Dissatisfied plus very dissatisfied = 120 + 80 = 200 out of 1,200, which is 16.7% — above the 15% ceiling, so the target was missed. Counting only the 'very dissatisfied' group would give 6.7% and wrongly suggest success."
},
{
  table: T_SURVEY,
  prompt: "If 300 additional 'very satisfied' responses were collected and added to the survey, what percentage of all responses would then be 'very satisfied'?",
  choices: ["26.7%", "35.5%", "41.3%", "51.7%"],
  answer: 2,
  explanation: "New count = 320 + 300 = 620, and the new total = 1,200 + 300 = 1,500, so 620 ÷ 1,500 = 41.3%. The key discipline is remembering that added responses increase the denominator as well as the numerator — dividing 620 by the original 1,200 would wrongly give 51.7%."
},

/* ---------- QUARTERLY FINANCIALS ---------- */
{
  table: T_QUARTER,
  prompt: "Which quarter had the highest gross margin (revenue minus COGS, as a percentage of revenue)?",
  choices: ["Q1", "Q2", "Q3", "Q4"],
  answer: 3,
  explanation: "Gross margins: Q1 2,000/5,000 = 40%; Q2 2,310/5,500 = 42%; Q3 2,400/6,000 = 40%; Q4 3,010/7,000 = 43%. Q4 is highest. Notice Q3 had higher gross profit than Q2 in dollars but a lower margin — dollars and percentages can rank differently."
},
{
  table: T_QUARTER,
  prompt: "What was total revenue for the full year?",
  choices: ["$23,500 thousand", "$24,500 thousand", "$25,500 thousand", "$26,500 thousand"],
  answer: 0,
  explanation: "5,000 + 5,500 + 6,000 + 7,000 = $23,500 thousand, or $23.5 million. Pairing the figures — 5,000 + 7,000 = 12,000 and 5,500 + 6,000 = 11,500 — makes the mental arithmetic straightforward."
},
{
  table: T_QUARTER,
  prompt: "What was the company's operating profit in Q4 (revenue minus COGS minus operating expenses)?",
  choices: ["$1,510 thousand", "$1,890 thousand", "$2,400 thousand", "$3,010 thousand"],
  answer: 0,
  explanation: "7,000 − 3,990 − 1,500 = $1,510 thousand. The distractor $3,010 is gross profit, stopping one line too early — always check which profit measure the question names."
},
{
  table: T_QUARTER,
  prompt: "What was the company's operating margin for the full year?",
  choices: ["15.3%", "18.6%", "20.4%", "41.3%"],
  answer: 1,
  explanation: "Annual gross profit = 2,000 + 2,310 + 2,400 + 3,010 = 9,720. Annual operating expenses = 1,200 + 1,300 + 1,350 + 1,500 = 5,350. Operating profit = 9,720 − 5,350 = 4,370 on revenue of 23,500, which is 18.6%. The 41.3% distractor is the gross margin (9,720 ÷ 23,500), not the operating margin — check which line of the income statement the question is asking about."
},
{
  table: T_QUARTER,
  prompt: "By what percentage did revenue grow from Q3 to Q4?",
  choices: ["14.3%", "16.7%", "18.0%", "20.0%"],
  answer: 1,
  explanation: "Revenue rose from 6,000 to 7,000, an increase of 1,000: 1,000 ÷ 6,000 = 16.7%. Dividing by the Q4 figure gives 14.3%, the persistent base error in sequential growth calculations."
},
{
  table: T_QUARTER,
  prompt: "Operating expenses as a percentage of revenue changed how between Q1 and Q4?",
  choices: ["They fell from 24.0% to 21.4%", "They rose from 21.4% to 24.0%", "They were unchanged at 24.0%", "They fell from 24.0% to 18.6%"],
  answer: 0,
  explanation: "Q1: 1,200 ÷ 5,000 = 24.0%. Q4: 1,500 ÷ 7,000 = 21.4%. Operating expenses grew 25% while revenue grew 40%, so the ratio improved — evidence of operating leverage, where fixed-cost elements are spread over a larger revenue base."
},

/* ---------- DEPARTMENT PAYROLL ---------- */
{
  table: T_DEPT,
  prompt: "What is the company's total annual payroll?",
  choices: ["$20,350,000", "$21,350,000", "$22,350,000", "$23,350,000"],
  answer: 3,
  explanation: "Sales 80 × 55,000 = $4.4M; Engineering 120 × 85,000 = $10.2M; Operations 150 × 45,000 = $6.75M; Administration 50 × 40,000 = $2.0M. Total = $23.35 million. Each department requires headcount times average salary — the averages alone cannot simply be added."
},
{
  table: T_DEPT,
  prompt: "What is the average salary across the entire company?",
  choices: ["$56,250", "$58,375", "$60,000", "$61,250"],
  answer: 1,
  explanation: "Total payroll of $23.35M divided by 400 employees = $58,375. The unweighted average of the four departmental figures is $56,250, which is wrong because Engineering's high salaries apply to 120 people while Administration's low salaries apply to only 50."
},
{
  table: T_DEPT,
  prompt: "Engineering accounts for what percentage of total payroll?",
  choices: ["30.0%", "36.5%", "40.2%", "43.7%"],
  answer: 3,
  explanation: "Engineering payroll of $10.2M against a total of $23.35M gives 43.7%. Engineering is only 30% of headcount (120 of 400) but consumes far more of the payroll because its average salary is well above the company average."
},
{
  table: T_DEPT,
  prompt: "If Operations headcount were cut by 20% with no other changes, what would the new total payroll be?",
  choices: ["$21,000,000", "$21,700,000", "$22,000,000", "$22,675,000"],
  answer: 2,
  explanation: "A 20% cut removes 30 people (0.20 × 150), each costing $45,000, for a saving of $1,350,000. New payroll = 23,350,000 − 1,350,000 = $22,000,000. Only the Operations line changes, so there is no need to recompute the other three departments."
},

/* ---------- USER GROWTH ---------- */
{
  table: T_USERS,
  prompt: "In which year did the platform achieve its highest percentage user growth?",
  choices: ["2022", "2023", "2024", "Growth was equal in 2022 and 2023"],
  answer: 0,
  explanation: "Growth rates: 2022 = 1.00/2.00 = 50%; 2023 = 1.20/3.00 = 40%; 2024 = 1.05/4.20 = 25%. The highest is 2022 at 50%. The absolute additions (1.00M, 1.20M, 1.05M) are similar, but the growing base steadily reduces the percentage rate."
},
{
  table: T_USERS,
  prompt: "What was the compound annual growth rate of users from 2021 to 2024?",
  choices: ["27%", "30%", "33%", "38%"],
  answer: 3,
  explanation: "Total growth factor = 5.25 ÷ 2.00 = 2.625 over three years, so the annual factor is the cube root of 2.625 ≈ 1.38, a CAGR of about 38%. Verify: 2.00 × 1.38³ ≈ 2.00 × 2.63 ≈ 5.25. Dividing the 162% total growth by three years would badly overstate the rate."
},
{
  table: T_USERS,
  prompt: "How many users were added in total between 2021 and 2024?",
  choices: ["3.25 million", "4.00 million", "4.25 million", "5.25 million"],
  answer: 0,
  explanation: "5.25 − 2.00 = 3.25 million users added. The 5.25 million distractor is the ending level rather than the increase, a distinction worth reading for carefully in any growth question."
},
{
  table: T_USERS,
  prompt: "If 2025 growth matches the 2024 growth rate, approximately how many users will there be at the end of 2025?",
  choices: ["6.30 million", "6.56 million", "6.83 million", "7.25 million"],
  answer: 1,
  explanation: "The 2024 growth rate was 25%, so 5.25 × 1.25 = 6.5625 ≈ 6.56 million. Applying the absolute increase of 1.05 million instead would give 6.30 million, which confuses a constant growth rate with a constant addition."
},

/* ---------- COST STRUCTURE ---------- */
{
  table: T_COSTS,
  prompt: "Which cost category grew fastest between 2024 and 2025?",
  choices: ["Labour", "Materials", "Logistics", "Overhead"],
  answer: 1,
  explanation: "Growth rates: Labour 480/4,800 = 10%; Materials 450/3,000 = 15%; Logistics −60/1,200 = −5%; Overhead 130/1,000 = 13%. Materials grew fastest at 15%, even though Labour added the most dollars — absolute and percentage rankings differ."
},
{
  table: T_COSTS,
  prompt: "Which cost category declined between 2024 and 2025?",
  choices: ["Labour", "Materials", "Logistics", "None declined"],
  answer: 2,
  explanation: "Logistics fell from 1,200 to 1,140, a decrease of 60, or −5%. Every other category rose. Scanning for the single declining line is often the fastest first read of a cost table."
},
{
  table: T_COSTS,
  prompt: "What is Labour's share of total costs in 2025?",
  choices: ["40%", "44%", "46%", "48%"],
  answer: 3,
  explanation: "Total 2025 costs = 5,280 + 3,450 + 1,140 + 1,130 = 11,000. Labour's share = 5,280 ÷ 11,000 = 48%. Computing the total first is essential — no share can be read directly off the table."
},
{
  table: T_COSTS,
  prompt: "How did Labour's share of total costs change between 2024 and 2025?",
  choices: ["It rose by 2 percentage points", "It fell by 2 percentage points", "It was unchanged", "It rose by 4 percentage points"],
  answer: 2,
  explanation: "2024: 4,800 ÷ 10,000 = 48%. 2025: 5,280 ÷ 11,000 = 48%. The share is unchanged because Labour grew 10%, exactly matching the growth in total costs (10,000 to 11,000). When a component grows at the same rate as the total, its share holds constant."
},
{
  table: T_COSTS,
  prompt: "By what percentage did total costs grow between 2024 and 2025?",
  choices: ["8%", "10%", "11%", "12%"],
  answer: 1,
  explanation: "Totals are 10,000 in 2024 and 11,000 in 2025, so growth = 1,000 ÷ 10,000 = 10%. The round base makes this an easy check on your column additions — if your total doesn't come to 10,000, re-add before proceeding."
},

/* ---------- MIXED / CROSS-TABLE REASONING ---------- */
{
  table: T_PRODUCT,
  prompt: "If Beta's unit cost could be reduced from $60 to $52 with no change in price or volume, by how much would total gross profit across all products increase?",
  choices: ["$4,800", "$6,400", "$8,000", "$12,000"],
  answer: 1,
  explanation: "The saving is $8 per unit across 800 units: 8 × 800 = $6,400. Only Beta is affected, so the other products can be ignored entirely — a reminder to isolate the changing line rather than recomputing the whole table."
},
{
  table: T_REGION,
  prompt: "If West continues growing at its 2024–2025 rate, approximately what will its 2026 sales be?",
  choices: ["930", "1,022", "1,100", "1,180"],
  answer: 1,
  explanation: "West grew from 500 to 715, a rate of 215/500 = 43%. Applying it again: 715 × 1.43 ≈ 1,022 thousand units. Adding the absolute increase of 215 instead would give 930, which assumes linear rather than compound growth."
},
{
  table: T_DEPT,
  prompt: "Operations employs what percentage of the company's headcount?",
  choices: ["25.0%", "30.0%", "34.5%", "37.5%"],
  answer: 3,
  explanation: "Total headcount = 80 + 120 + 150 + 50 = 400. Operations = 150 ÷ 400 = 37.5%. Operations is the largest department by people but not by payroll, since its average salary is the second-lowest in the company."
},
{
  table: T_QUARTER,
  prompt: "COGS as a percentage of revenue was lowest in which quarter?",
  choices: ["Q1", "Q2", "Q3", "Q4"],
  answer: 3,
  explanation: "COGS ratios: Q1 3,000/5,000 = 60%; Q2 3,190/5,500 = 58%; Q3 3,600/6,000 = 60%; Q4 3,990/7,000 = 57%. Q4 is lowest. This is simply the complement of the gross margin question — the lowest COGS ratio always corresponds to the highest gross margin."
},

/* ---------- DESCRIPTIVE STATISTICS ----------
   TestGorilla's Working with Data test covers mean, median, mode, spread and correlation.
   The reps dataset is deliberately skewed by one outlier so the measures disagree. */
{
  table: T_REPS,
  type: "statistics",
  prompt: "What is the mean number of deals closed per rep?",
  choices: ["5", "6", "7", "8"],
  answer: 3,
  explanation: "Sum the values: 3+5+5+6+8+9+20 = 56, across 7 reps, so the mean is 56 ÷ 7 = 8. Notice that only one rep (Gómez, with 20) is above this mean — a warning sign that a single large value is pulling the average upward."
},
{
  table: T_REPS,
  type: "statistics",
  prompt: "What is the median number of deals closed per rep?",
  choices: ["5", "6", "8", "9"],
  answer: 1,
  explanation: "Sort the values: 3, 5, 5, 6, 8, 9, 20. With 7 values the median is the 4th, which is 6. The median must always be read from the sorted list, and because it ignores how extreme the largest value is, it sits well below the mean of 8 here."
},
{
  table: T_REPS,
  type: "statistics",
  prompt: "What is the mode of the deals-closed figures?",
  choices: ["3", "5", "6", "20"],
  answer: 1,
  explanation: "The mode is the most frequently occurring value. Only 5 appears more than once (Bermúdez and Castro), so the mode is 5. Mode is the only one of the three averages that is always an actual observed value in the dataset."
},
{
  table: T_REPS,
  type: "statistics",
  prompt: "Which measure best represents the performance of a typical rep on this team?",
  choices: [
    "The mean, because it uses every data point",
    "The median, because one unusually high value distorts the mean",
    "The mode, because it is the most common result",
    "The range, because it shows the full spread"
  ],
  answer: 1,
  explanation: "Gómez's 20 deals is an outlier that drags the mean up to 8, even though six of the seven reps closed 9 or fewer. The median of 6 describes the middle of the group far better. The general rule: when a distribution is skewed by extreme values, the median is the more honest measure of the typical case."
},
{
  table: T_REPS,
  type: "statistics",
  prompt: "What is the range of the deals-closed figures?",
  choices: ["17", "20", "23", "26"],
  answer: 0,
  explanation: "Range = highest − lowest = 20 − 3 = 17. The range is the crudest measure of spread because it depends entirely on the two most extreme observations and ignores everything in between — which is exactly why it looks so large here."
},
{
  table: T_REPS,
  type: "statistics",
  prompt: "If Gómez's 20 deals were excluded, what would happen to the mean and the median?",
  choices: [
    "The mean would fall to 6 and the median to 5.5",
    "The mean would fall to 6 and the median would stay at 6",
    "Both would stay the same",
    "The mean would stay at 8 and the median would fall to 5.5"
  ],
  answer: 0,
  explanation: "Without Gómez: the six remaining values (3, 5, 5, 6, 8, 9) sum to 36, so the mean is 6 — a fall of 2 whole deals. The median becomes the average of the 3rd and 4th values, (5 + 6) ÷ 2 = 5.5, a fall of only 0.5. This contrast is the point: the mean is highly sensitive to outliers, the median barely moves."
},
{
  table: T_TEAMS,
  type: "statistics",
  prompt: "Both teams have the same mean monthly sales. Which team has the larger standard deviation?",
  choices: ["Team A", "Team B", "They are identical", "It cannot be determined from a mean alone"],
  answer: 1,
  explanation: "Both average 50 units, but Team A ranges only from 48 to 52 while Team B ranges from 30 to 70. Standard deviation measures typical distance from the mean, so Team B's is far larger. You do not need to compute it — the spread of the values is visible directly."
},
{
  table: T_TEAMS,
  type: "statistics",
  prompt: "A manager wants the team whose monthly output is most predictable. Which should they choose, and why?",
  choices: [
    "Team B, because it reached the highest single month",
    "Team A, because its results vary far less around the same average",
    "Team B, because its growth is steadier",
    "Either team, because the averages are equal"
  ],
  answer: 1,
  explanation: "Predictability is about variability, not level. Team A never deviates more than 2 units from its mean, whereas Team B swings 20 units either side of the same mean. Equal averages can hide completely different risk profiles, which is why spread must always be reported alongside the average."
},
{
  type: "statistics",
  prompt: "A study reports a correlation coefficient of r = 0.85 between advertising spend and sales.\n\nWhat does this indicate?",
  choices: [
    "Advertising causes 85% of sales",
    "A strong positive relationship: higher spend tends to accompany higher sales",
    "85% of the data points lie exactly on the trend line",
    "Sales rise by 0.85% for every 1% increase in advertising"
  ],
  answer: 1,
  explanation: "A correlation coefficient runs from −1 to +1 and measures only the strength and direction of a linear association. At 0.85 the relationship is strong and positive. It says nothing about causation, nothing about the size of the effect, and it is not a percentage of anything — all three of which the distractors wrongly assert."
},
{
  type: "statistics",
  prompt: "Which correlation coefficient indicates the strongest relationship between two variables?",
  choices: ["r = 0.60", "r = 0.05", "r = −0.78", "r = 0.40"],
  answer: 2,
  explanation: "Strength is given by how far r sits from zero, regardless of sign. |−0.78| = 0.78 is larger than 0.60, 0.40 or 0.05, so the negative correlation is the strongest. A negative sign means the variables move in opposite directions, not that the relationship is weak."
},
{
  type: "statistics",
  prompt: "Ice cream sales and drowning incidents are strongly positively correlated across a year.\n\nWhat is the most reasonable interpretation?",
  choices: [
    "Buying ice cream increases the risk of drowning",
    "A third factor — warm weather — drives both independently",
    "Drowning incidents cause people to buy ice cream",
    "The correlation must be a calculation error"
  ],
  answer: 1,
  explanation: "Both variables rise in hot weather: more people buy ice cream and more people swim. Temperature is a confounding variable producing a correlation with no causal link between the two. Recognizing confounders is the single most valuable habit in reading correlational data."
},

/* ---------- DATA VALIDATION & QUALITY ---------- */
{
  table: T_DIRTY,
  type: "validation",
  prompt: "Which record contains an impossible date?",
  choices: ["1002", "1003", "1004", "1005"],
  answer: 3,
  explanation: "Record 1005 is dated 2025-13-02. In the YYYY-MM-DD format used throughout the table, 13 would be the month, and there is no thirteenth month. This usually signals that a day/month order was swapped somewhere upstream — the intended date was probably 2 December or 13 February."
},
{
  table: T_DIRTY,
  type: "validation",
  prompt: "Which two records appear to be duplicates of the same order?",
  choices: ["1001 and 1002", "1001 and 1004", "1002 and 1003", "1003 and 1005"],
  answer: 1,
  explanation: "Records 1001 and 1004 share the same customer, the same value, the same date and the same region — everything except the ID. That pattern is the signature of a double-entered record. Left uncleaned, it would inflate both the order count and total revenue for Restrepo SA."
},
{
  table: T_DIRTY,
  type: "validation",
  prompt: "Which value in this extract is logically impossible for an order and must be investigated?",
  choices: [
    "The $4,200 value, because it appears twice",
    "The −$1,200 value, because an order cannot have a negative amount",
    "The $2,970 value, because it is not a round number",
    "The $3,850 value, because it is from a different region"
  ],
  answer: 1,
  explanation: "A negative order value is not possible as a sale; it usually indicates a refund or credit note that has been mixed into the orders table, or a sign error. Repeated values, non-round amounts and differing regions are all perfectly normal and are not data-quality problems."
},
{
  table: T_DIRTY,
  type: "validation",
  prompt: "If you computed average order value from this extract without cleaning it, what would go wrong?",
  choices: [
    "Nothing — the average would be reliable",
    "The average would be understated, because a negative value and a duplicated order both distort it",
    "The average would be overstated, because there are too few records",
    "The average cannot be computed at all"
  ],
  answer: 1,
  explanation: "Raw, the five values average (4,200 + 3,850 − 1,200 + 4,200 + 2,970) ÷ 5 = $2,804. After removing the duplicate and the negative entry, the three genuine orders average $3,673. The negative value drags the total down while the duplicate adds a spurious record to the denominator — cleaning first is not optional."
},
{
  type: "validation",
  prompt: "A report states that a market's segments hold shares of 34%, 28%, 21%, 14% and 9%.\n\nWhat should you conclude?",
  choices: [
    "The largest segment is dominant",
    "The figures contain an error, because the shares total 106%",
    "The market is highly fragmented",
    "The shares are consistent and can be used as given"
  ],
  answer: 1,
  explanation: "Add them: 34 + 28 + 21 + 14 + 9 = 106%. Mutually exclusive shares of a whole must sum to 100%, so something is wrong — a double-counted segment, a mis-keyed figure, or overlapping definitions. Checking that shares total 100% is a five-second validation worth doing on every share table you are given."
},
{
  type: "validation",
  prompt: "A company emails a satisfaction survey to customers who made a purchase in the past 30 days. 92% report being satisfied.\n\nWhat is the main limitation of this result?",
  choices: [
    "The sample excludes customers who stopped buying, who are the most likely to be dissatisfied",
    "Thirty days is too short a period to measure satisfaction",
    "Email surveys are less accurate than telephone surveys",
    "The result should have been reported as a fraction rather than a percentage"
  ],
  answer: 0,
  explanation: "This is survivorship bias. By surveying only recent purchasers, the company has excluded exactly the customers whose dissatisfaction made them leave, so 92% measures satisfaction among people already inclined to buy. The finding is not wrong, but it cannot support a claim about the customer base as a whole."
},
{
  type: "validation",
  prompt: "An analyst finds that 3 of 400 rows in a dataset are missing a value in the 'region' column.\n\nWhich response is most appropriate?",
  choices: [
    "Delete the entire dataset and request a new extract",
    "Fill the gaps with the most common region so no rows are lost",
    "Investigate why they are missing, then exclude or label them, and note the treatment in the analysis",
    "Ignore the issue entirely, since 3 rows cannot matter"
  ],
  answer: 2,
  explanation: "Missing values need a deliberate, documented decision. Filling them with the most common region invents data and biases regional totals; discarding the whole dataset is disproportionate for 0.75% of rows; ignoring it silently hides a judgement from anyone reading the analysis. Investigate, choose a treatment, and disclose it."
},
{
  type: "validation",
  prompt: "A chart shows two bars, one at 102 units and one at 108 units, but its vertical axis begins at 100 rather than 0.\n\nWhat is the effect?",
  choices: [
    "The chart understates the difference between the two bars",
    "The chart exaggerates the difference, making a roughly 6% gap look far larger",
    "The chart is invalid and cannot be interpreted",
    "The axis choice has no effect on how the bars are read"
  ],
  answer: 1,
  explanation: "With the axis starting at 100, the visible bar heights represent 2 and 8, so one bar appears four times the other — while the real difference is 108 versus 102, about 6%. A truncated axis is legitimate in some contexts but always magnifies differences, so check where the axis starts before trusting a visual comparison."
},
{
  type: "validation",
  prompt: "A dataset of monthly revenue lists most months in dollars but three months in thousands of dollars.\n\nWhat kind of problem is this?",
  choices: [
    "A missing-data problem",
    "An inconsistent-units problem, which will distort any total or average until corrected",
    "A duplicate-records problem",
    "A rounding problem with negligible impact"
  ],
  answer: 1,
  explanation: "Mixing units within a single column means the numbers are not comparable, and any sum, average or trend computed across them is meaningless — the three thousand-scale months would be understated by a factor of 1,000. Confirming that a column uses one consistent unit is a basic validation step before any calculation."
},
{
  type: "validation",
  prompt: "A pilot programme at one branch raised productivity 30%. Management proposes rolling it out company-wide and expects the same result.\n\nWhat is the key data limitation?",
  choices: [
    "A 30% improvement is too large to be believable",
    "A single branch is a sample of one, and may differ from other branches in ways that produced the result",
    "Productivity is not a measurable quantity",
    "The programme should have run for a full year"
  ],
  answer: 1,
  explanation: "One branch cannot establish that the effect generalizes: it may have had unusually motivated staff, a supportive manager, or favourable conditions. Without a comparison group or replication across several branches, the 30% figure is suggestive rather than evidence of what a company-wide rollout would achieve."
}

];

/* ---------- Difficulty defaults ----------
   1 = easy (single lookup or one step) · 2 = medium · 3 = hard (multi-step across a table). */
(function(){
  const easy = [
    'total sales across all four regions in 2025', 'total revenue for the full year',
    'users were added in total', 'cost category declined', 'total payroll across all four months',
    "Alpha Corp's annual revenue", 'two largest companies together', 'acquired Delta SA',
    'median number of deals', 'mode of the deals-closed', 'range of the deals-closed',
    'impossible date', 'appear to be duplicates', 'total costs grow between 2024 and 2025'
  ];
  const hard = [
    'operating margin for the full year', 'compound annual growth rate',
    'overall gross margin across all four products', 'average salary across the entire company',
    'East had grown at the same percentage rate', 'If 300 additional',
    'Operations headcount were cut by 20%', 'West continues growing',
    'mean and the median', 'without cleaning it'
  ];
  const bank = window.QUESTION_BANK.data;
  /* Anything untagged is a straight table-reading question. */
  bank.forEach(q => { if(!q.type) q.type = 'table'; });
  bank.forEach(q => { if(!q.d) q.d = 2; });
  easy.forEach(frag => { const q = bank.find(x => x.prompt.indexOf(frag) !== -1); if(q) q.d = 1; });
  hard.forEach(frag => { const q = bank.find(x => x.prompt.indexOf(frag) !== -1); if(q) q.d = 3; });
})();
