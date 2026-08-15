/* Numerical Reasoning — expansion bank (2026 expansion to support 20 questions/day).

   Appends to QUESTION_BANK.num, so the ids of the original 82 questions are untouched
   and their Spanish translations stay correctly mapped.

   Every question carries `type` and `d` explicitly: the difficulty-default IIFE lives at
   the end of questions-num.js and has already run by the time this file loads.

   Options are listed in ascending order, matching the real test, and are NOT shuffled at
   runtime when every option starts with a digit or a $. The position of the correct answer
   is therefore varied deliberately across the bank (audit #1). */
window.QUESTION_BANK = window.QUESTION_BANK || {};
window.QUESTION_BANK.num = window.QUESTION_BANK.num || [];

(function(){
var Q = [

/* ---------- PERCENT ---------- */
{
  type: "percent", d: 2,
  prompt: "A supplier raises the unit price of a component from $85 to $102. By what percentage has the price increased?",
  choices: ["16.7%", "17.0%", "18.5%", "20.0%"],
  answer: 3,
  explanation: "The increase is $102 − $85 = $17. Percentage change is measured against the original figure: 17 ÷ 85 = 0.20, so 20%. Dividing by the new price instead gives 16.7%, which is the most common trap here."
},
{
  type: "percent", d: 2,
  prompt: "A company's headcount falls from 640 to 512 over a year. By what percentage has headcount decreased?",
  choices: ["12.8%", "20.0%", "25.0%", "32.0%"],
  answer: 1,
  explanation: "The fall is 640 − 512 = 128. Against the starting figure, 128 ÷ 640 = 0.20, so a 20% decrease. Dividing by the ending figure gives 25%, which measures the increase needed to get back to 640, not the decrease that occurred."
},
{
  type: "percent", d: 2,
  prompt: "A retailer reduces a price by 20% in a first sale, then reduces the already-discounted price by a further 15%. What is the overall percentage reduction from the original price?",
  choices: ["27.0%", "32.0%", "33.0%", "35.0%"],
  answer: 1,
  explanation: "Successive percentages multiply rather than add. The price becomes 0.80 × 0.85 = 0.68 of the original, which is a 32% reduction. Adding 20 and 15 to get 35% double-counts, because the second discount applies to a smaller base."
},
{
  type: "percent", d: 2,
  prompt: "After a 25% increase, a monthly subscription costs $60. What was the price before the increase?",
  choices: ["$45.00", "$48.00", "$50.00", "$75.00"],
  answer: 1,
  explanation: "The new price is 125% of the old, so the old price is 60 ÷ 1.25 = $48. Taking 25% off $60 gives $45, which is wrong because the 25% was applied to the smaller original figure, not to $60."
},
{
  type: "percent", d: 1,
  prompt: "A firm employs 1,240 people, of whom 35% work remotely. How many work on site?",
  choices: ["434", "620", "806", "1,240"],
  answer: 2,
  explanation: "If 35% work remotely, 65% work on site: 1,240 × 0.65 = 806. The figure 434 is the remote headcount (1,240 × 0.35), which answers the opposite question."
},
{
  type: "percent", d: 2,
  prompt: "A division's quarterly sales rise by 40% in one quarter and then fall by 40% in the next. What is the net change over the two quarters?",
  choices: [
    "A decrease of 16%",
    "A decrease of 20%",
    "No change",
    "An increase of 16%"
  ],
  answer: 0,
  explanation: "The multipliers compound: 1.40 × 0.60 = 0.84, so sales end at 84% of where they started, a 16% decrease. Equal-looking rises and falls never cancel, because the fall is applied to the larger post-increase base."
},
{
  type: "percent", d: 2,
  prompt: "A retailer buys an item for $40 and sells it for $55. What is the markup expressed as a percentage of cost?",
  choices: ["27.3%", "33.3%", "37.5%", "40.0%"],
  answer: 2,
  explanation: "Markup on cost is profit divided by cost: (55 − 40) ÷ 40 = 15 ÷ 40 = 37.5%. Dividing by the selling price instead gives 27.3%, which is the gross margin — a different measure of the same $15."
},
{
  type: "percent", d: 2,
  prompt: "Value-added tax of 21% is applied to a net price of $340. What is the gross price including tax?",
  choices: ["$351.40", "$361.40", "$401.40", "$411.40"],
  answer: 3,
  explanation: "The tax is 340 × 0.21 = $71.40, giving 340 + 71.40 = $411.40. Equivalently, multiply by 1.21 in one step. The other options use miscomputed tax amounts: $11.40, $21.40, and $61.40 instead of $71.40."
},
{
  type: "percent", d: 2,
  prompt: "A department's annual budget of $180,000 is cut by 12.5%. What is the new budget?",
  choices: ["$157,500", "$160,000", "$162,000", "$202,500"],
  answer: 0,
  explanation: "A 12.5% cut leaves 87.5%: 180,000 × 0.875 = $157,500. The cut itself is $22,500, and adding rather than subtracting it produces the $202,500 distractor."
},

/* ---------- MARGIN ---------- */
{
  type: "margin", d: 2,
  prompt: "A business reports revenue of $2.4m and cost of goods sold of $1.56m. What is its gross margin?",
  choices: ["30.0%", "35.0%", "46.2%", "65.0%"],
  answer: 1,
  explanation: "Gross profit is 2.4 − 1.56 = $0.84m, and gross margin is that divided by revenue: 0.84 ÷ 2.4 = 35%. The 65% figure is the cost ratio (1.56 ÷ 2.4), which is what remains after the margin."
},
{
  type: "margin", d: 2,
  prompt: "A product sells for $80 and carries a gross margin of 45%. What does the product cost to make?",
  choices: ["$35.00", "$36.00", "$44.00", "$55.20"],
  answer: 2,
  explanation: "If margin is 45% of the selling price, cost is the remaining 55%: 80 × 0.55 = $44. The $36 distractor is the gross profit (80 × 0.45), which is what the margin earns rather than what the item costs."
},
{
  type: "margin", d: 3,
  prompt: "A company reports revenue of $5m, gross profit of $1.75m and operating expenses of $900,000. What is its operating margin?",
  choices: ["15.0%", "16.0%", "16.5%", "17.0%"],
  answer: 3,
  explanation: "Operating profit is gross profit less operating expenses: 1.75 − 0.90 = $0.85m. Divided by revenue, 0.85 ÷ 5 = 17%. The gross margin of 35% is a separate figure and must not be used as the numerator here."
},
{
  type: "margin", d: 2,
  prompt: "A manufacturer wants a gross margin of 40% on an item that costs $18 to produce. What selling price achieves this?",
  choices: ["$25.20", "$28.80", "$30.00", "$32.40"],
  answer: 2,
  explanation: "If margin is 40% of the selling price, cost is 60% of it, so price = 18 ÷ 0.60 = $30. Adding 40% to cost gives $25.20, which produces a margin of only 28.6% — the classic markup-versus-margin confusion."
},
{
  type: "margin", d: 3,
  prompt: "A business currently has revenue of $1,000 and cost of goods sold of $600. Next year revenue rises by 10% and cost of goods sold rises by 5%. What will the gross margin be next year?",
  choices: ["40.0%", "41.5%", "42.7%", "45.0%"],
  answer: 2,
  explanation: "New revenue is 1,000 × 1.10 = $1,100 and new cost is 600 × 1.05 = $630, so gross profit is $470. The margin is 470 ÷ 1,100 = 42.7%, up from this year's 40% because revenue grew faster than cost."
},
{
  type: "margin", d: 1,
  prompt: "A company reports revenue of $12.5m and a net margin of 6%. What is its net profit?",
  choices: ["$750,000", "$833,000", "$1,250,000", "$2,083,000"],
  answer: 0,
  explanation: "Net profit is revenue multiplied by net margin: 12,500,000 × 0.06 = $750,000. The $1,250,000 figure is 10% of revenue and the $2,083,000 figure divides rather than multiplies."
},
{
  type: "margin", d: 3,
  prompt: "A retailer buys an item for $24 and applies a markup of 60% on cost. What gross margin does the resulting selling price represent?",
  choices: ["37.5%", "40.0%", "60.0%", "62.5%"],
  answer: 0,
  explanation: "The selling price is 24 × 1.60 = $38.40 and the gross profit is $14.40. Margin is measured against the selling price: 14.40 ÷ 38.40 = 37.5%. A 60% markup on cost is always a smaller number when restated as a margin."
},
{
  type: "margin", d: 3,
  prompt: "A company sells two product lines. Line A generates $600,000 of revenue at a 30% gross margin; Line B generates $400,000 at a 50% gross margin. What is the blended gross margin across both lines?",
  choices: ["30.0%", "35.0%", "36.0%", "38.0%"],
  answer: 3,
  explanation: "Gross profit is 600,000 × 0.30 = $180,000 plus 400,000 × 0.50 = $200,000, giving $380,000 on $1,000,000 of revenue, or 38%. Averaging 30% and 50% to get 40% ignores that the lower-margin line carries more revenue."
},

/* ---------- GROWTH ---------- */
{
  type: "growth", d: 3,
  prompt: "A company's revenue grows from $4.0m to $6.4m over two years. What is the compound annual growth rate?",
  choices: ["20.0%", "24.0%", "25.0%", "26.5%"],
  answer: 3,
  explanation: "Total growth is 6.4 ÷ 4.0 = 1.6 over two years, so the annual multiplier is √1.6 ≈ 1.265, a CAGR of about 26.5%. Halving the 60% total growth to get 30%, or averaging to 20%, both ignore compounding."
},
{
  type: "growth", d: 2,
  prompt: "A subscriber base is growing at 8% a year. Using the rule of 72, roughly how long will it take to double?",
  choices: ["6 years", "9 years", "12 years", "15 years"],
  answer: 1,
  explanation: "The rule of 72 estimates doubling time as 72 divided by the growth rate: 72 ÷ 8 = 9 years. The exact answer is 9.006 years, so the approximation is very close at this rate."
},
{
  type: "growth", d: 2,
  prompt: "A product sold 250 units in year 1. Unit sales grew 20% in year 2 and a further 15% in year 3. How many units were sold in year 3?",
  choices: ["331", "337", "345", "350"],
  answer: 2,
  explanation: "Year 2 is 250 × 1.20 = 300 units and year 3 is 300 × 1.15 = 345 units. Applying a combined 35% to the year-1 figure gives 337.5, which understates the result because the second year's growth builds on the first."
},
{
  type: "growth", d: 3,
  prompt: "A company's revenue grew from $50m to $86.4m over three years. What was the compound annual growth rate?",
  choices: ["20.0%", "24.3%", "28.8%", "72.8%"],
  answer: 0,
  explanation: "The total multiplier is 86.4 ÷ 50 = 1.728, and 1.728 is 1.2 cubed, so the annual rate is exactly 20%. The 72.8% figure is total growth over the whole period and 24.3% is that total divided by three."
},
{
  type: "growth", d: 2,
  prompt: "A market worth $800m is expected to grow at 5% a year. What will it be worth after three years, to the nearest million?",
  choices: ["$840m", "$920m", "$926m", "$940m"],
  answer: 2,
  explanation: "Compounding gives 800 × 1.05³ = 800 × 1.157625 = $926.1m, so $926m. Simple growth of 15% would give $920m, and the $6m difference is the compounding effect over three years."
},
{
  type: "growth", d: 2,
  prompt: "An investment doubles in value over six years. Using the rule of 72, what is the approximate annual growth rate?",
  choices: ["8.0%", "10.0%", "12.0%", "16.7%"],
  answer: 2,
  explanation: "Rearranging the rule of 72, the rate is 72 divided by the doubling time: 72 ÷ 6 = 12%. The 16.7% figure divides the 100% total gain by six years, which ignores compounding and overstates the rate."
},

/* ---------- AVERAGE ---------- */
{
  type: "average", d: 1,
  prompt: "Five sales representatives closed 12, 15, 9, 18 and 11 deals last quarter. What was the mean number of deals closed?",
  choices: ["11", "12", "13", "15"],
  answer: 2,
  explanation: "The deals sum to 12 + 15 + 9 + 18 + 11 = 65, and 65 ÷ 5 = 13. The median of the same set is 12, which is the most likely wrong answer if the values are sorted rather than added."
},
{
  type: "average", d: 2,
  prompt: "A team of eight people has an average salary of $54,000. A ninth person joins on a salary of $72,000. What is the new average salary for the team?",
  choices: ["$54,000", "$56,000", "$58,000", "$63,000"],
  answer: 1,
  explanation: "The original payroll is 8 × 54,000 = $432,000. Adding $72,000 gives $504,000 across nine people, so 504,000 ÷ 9 = $56,000. Averaging $54,000 and $72,000 directly gives $63,000, which wrongly gives the newcomer the same weight as the whole existing team."
},
{
  type: "average", d: 2,
  prompt: "The mean of six numbers is 24. Five of the numbers are 18, 22, 25, 30 and 20. What is the sixth number?",
  choices: ["27", "28", "29", "31"],
  answer: 2,
  explanation: "A mean of 24 across six numbers means the total is 6 × 24 = 144. The five known values sum to 115, so the sixth is 144 − 115 = 29."
},
{
  type: "average", d: 3,
  prompt: "A delivery driver covers 120 km at an average of 60 km/h and then a further 120 km at an average of 40 km/h. What is the average speed for the whole journey?",
  choices: ["48 km/h", "50 km/h", "52 km/h", "55 km/h"],
  answer: 0,
  explanation: "Average speed is total distance over total time, not the average of the two speeds. The legs take 2 hours and 3 hours, so 240 km in 5 hours is 48 km/h. The 50 km/h answer averages the speeds and ignores that more time is spent on the slow leg."
},
{
  type: "average", d: 1,
  prompt: "A shop recorded monthly revenue of $82,000, $91,000, $77,000 and $94,000 over four months. What was the average monthly revenue?",
  choices: ["$82,500", "$84,000", "$85,000", "$86,000"],
  answer: 3,
  explanation: "The four months total $344,000, and 344,000 ÷ 4 = $86,000. Each value is within $9,000 of that figure, which is a useful sanity check on the arithmetic."
},

/* ---------- RATIO ---------- */
{
  type: "ratio", d: 2,
  prompt: "A budget of $1.2m is divided between marketing, sales and product development in the ratio 3 : 5 : 2. How much is allocated to sales?",
  choices: ["$240,000", "$360,000", "$600,000", "$720,000"],
  answer: 2,
  explanation: "The ratio has 3 + 5 + 2 = 10 parts, so each part is $120,000. Sales takes 5 parts: 5 × 120,000 = $600,000. The $360,000 and $240,000 figures are the marketing and product shares."
},
{
  type: "ratio", d: 2,
  prompt: "Two departments have headcounts in the ratio 4 : 7. The smaller department has 48 people. How many people are in the larger department?",
  choices: ["56", "72", "80", "84"],
  answer: 3,
  explanation: "If 4 parts equal 48 people, one part is 12 people. The larger department is 7 parts: 7 × 12 = 84. Adding the difference of 3 parts to 48 gives the same answer, 48 + 36 = 84."
},
{
  type: "ratio", d: 1,
  prompt: "An industrial mixture contains solvent and resin in the ratio 5 : 3. How many litres of resin are there in 320 litres of the mixture?",
  choices: ["96", "120", "128", "200"],
  answer: 1,
  explanation: "The mixture has 5 + 3 = 8 parts, so each part is 320 ÷ 8 = 40 litres. Resin is 3 parts: 3 × 40 = 120 litres. The 200-litre figure is the solvent content."
},
{
  type: "ratio", d: 2,
  prompt: "A company's revenue is split between its West and East regions in the ratio 9 : 5. The East region earned $3.5m. What did the West region earn?",
  choices: ["$6.3m", "$6.5m", "$7.0m", "$9.0m"],
  answer: 0,
  explanation: "East's 5 parts equal $3.5m, so one part is $0.7m. West has 9 parts: 9 × 0.7 = $6.3m. Total revenue would be 14 parts, or $9.8m, which is a useful check."
},

/* ---------- PROBABILITY ---------- */
{
  type: "probability", d: 1,
  prompt: "A box contains 20 units, of which 4 are defective. One unit is drawn at random. What is the probability that it is defective?",
  choices: ["15%", "20%", "25%", "80%"],
  answer: 1,
  explanation: "The probability is defectives over the total: 4 ÷ 20 = 0.20, or 20%. The 25% figure compares defectives to the 16 good units rather than to the whole box."
},
{
  type: "probability", d: 2,
  prompt: "Two independent production processes each have a 10% chance of failing on a given day. What is the probability that both fail on the same day?",
  choices: ["1%", "10%", "19%", "20%"],
  answer: 0,
  explanation: "For independent events, multiply the probabilities: 0.10 × 0.10 = 0.01, or 1%. The 19% figure is the probability that at least one fails, and 20% simply adds the two rates."
},
{
  type: "probability", d: 2,
  prompt: "A machine produces units with a 5% defect rate, and each unit is independent of the others. What is the probability that two consecutive units are both free of defects?",
  choices: ["85.00%", "90.00%", "90.25%", "95.00%"],
  answer: 2,
  explanation: "Each unit is good with probability 0.95, so two in a row is 0.95 × 0.95 = 0.9025, or 90.25%. Subtracting 5% twice from 100% gives 90%, which is close but ignores that the second 5% applies to a slightly smaller base."
},
{
  type: "probability", d: 3,
  prompt: "Of 200 applicants, 80 passed the numerical test. Of those 80, exactly 50 also passed the verbal test. An applicant is selected at random from those who passed the numerical test. What is the probability that this applicant also passed the verbal test?",
  choices: ["25.0%", "40.0%", "60.0%", "62.5%"],
  answer: 3,
  explanation: "The question conditions on having passed the numerical test, so the denominator is 80, not 200: 50 ÷ 80 = 0.625, or 62.5%. The 25% figure divides by the full 200 and answers a different question."
}
,

/* ---------- SERIES ---------- */
{
  type: "series", d: 2,
  prompt: "What number comes next in this series?\n\n3, 7, 15, 31, ?",
  choices: ["47", "55", "63", "71"],
  answer: 2,
  explanation: "Each term is double the previous one plus 1: 3→7, 7→15, 15→31, so next is 31 × 2 + 1 = 63. Equivalently the terms are 2ⁿ − 1 for n = 2, 3, 4, 5, 6. The gaps double each step, so a jump of 32 is expected."
},
{
  type: "series", d: 2,
  prompt: "What number comes next in this series?\n\n2, 6, 12, 20, 30, ?",
  choices: ["40", "42", "44", "46"],
  answer: 1,
  explanation: "The differences are 4, 6, 8, 10 — rising by 2 each time — so the next difference is 12 and the next term is 30 + 12 = 42. The terms are also n × (n + 1) for n = 1 to 6."
},
{
  type: "series", d: 1,
  prompt: "What number comes next in this series?\n\n81, 27, 9, 3, ?",
  choices: ["0", "1", "1.5", "2"],
  answer: 1,
  explanation: "Each term is the previous one divided by 3: 81 → 27 → 9 → 3, so the next is 3 ÷ 3 = 1. The series is descending powers of 3."
},
{
  type: "series", d: 1,
  prompt: "What number comes next in this series?\n\n1, 4, 9, 16, 25, ?",
  choices: ["36", "42", "49", "64"],
  answer: 0,
  explanation: "These are the square numbers: 1², 2², 3², 4², 5², so the next is 6² = 36. The differences are the odd numbers 3, 5, 7, 9, which gives the same answer: 25 + 11 = 36."
},
{
  type: "series", d: 2,
  prompt: "What number comes next in this series?\n\n120, 60, 30, 15, ?",
  choices: ["5", "7.5", "10", "12"],
  answer: 1,
  explanation: "Each term is half the previous one, and halving does not stop at whole numbers: 15 ÷ 2 = 7.5. Expecting the pattern to break because the result is not an integer is the trap here."
},
{
  type: "series", d: 2,
  prompt: "What number comes next in this series?\n\n2, 3, 5, 8, 13, ?",
  choices: ["21", "24", "26", "34"],
  answer: 0,
  explanation: "Each term is the sum of the two before it: 2 + 3 = 5, 3 + 5 = 8, 5 + 8 = 13, so the next is 8 + 13 = 21. This is the Fibonacci pattern starting from 2 and 3."
},
{
  type: "series", d: 1,
  prompt: "What number comes next in this series?\n\n7, 14, 28, 56, ?",
  choices: ["84", "96", "112", "128"],
  answer: 2,
  explanation: "Each term doubles: 7 → 14 → 28 → 56, so the next is 56 × 2 = 112. The 84 distractor comes from adding a constant 28 rather than doubling."
},
{
  type: "series", d: 2,
  prompt: "What number comes next in this series?\n\n100, 91, 83, 76, ?",
  choices: ["66", "68", "69", "70"],
  answer: 3,
  explanation: "The differences are −9, −8, −7, shrinking by 1 each step, so the next difference is −6 and the next term is 76 − 6 = 70. Assuming a constant gap of −7 gives 69."
},
{
  type: "series", d: 2,
  prompt: "What number comes next in this series?\n\n1, 8, 27, 64, ?",
  choices: ["81", "100", "121", "125"],
  answer: 3,
  explanation: "These are the cube numbers: 1³, 2³, 3³, 4³, so the next is 5³ = 125. The 81 and 121 distractors are squares, which fit the earlier terms poorly once you check 27."
},
{
  type: "series", d: 2,
  prompt: "What number comes next in this series?\n\n3, 6, 11, 18, 27, ?",
  choices: ["34", "36", "38", "40"],
  answer: 2,
  explanation: "The differences are 3, 5, 7, 9 — consecutive odd numbers — so the next difference is 11 and the term is 27 + 11 = 38. The terms are also n² + 2 for n = 1 to 6."
},

/* ---------- RATES ---------- */
{
  type: "rates", d: 1,
  prompt: "A machine produces 240 units in 6 hours. Working at the same rate, how many units will it produce in 15 hours?",
  choices: ["480", "540", "600", "660"],
  answer: 2,
  explanation: "The rate is 240 ÷ 6 = 40 units an hour, so 15 hours gives 40 × 15 = 600 units. Scaling directly also works: 15 hours is 2.5 times 6 hours, and 240 × 2.5 = 600."
},
{
  type: "rates", d: 2,
  prompt: "Three workers complete a task in 12 days. Assuming every worker works at the same rate, how long would four workers take to complete the same task?",
  choices: ["8 days", "9 days", "10 days", "16 days"],
  answer: 1,
  explanation: "The task takes 3 × 12 = 36 worker-days. Shared among four workers, that is 36 ÷ 4 = 9 days. More workers means fewer days, so the 16-day option has the relationship backwards."
},
{
  type: "rates", d: 3,
  prompt: "One pump can fill a tank in 8 hours and a second pump can fill the same tank in 12 hours. Working together from empty, how long will they take to fill it?",
  choices: ["2.4 hours", "4.0 hours", "4.5 hours", "4.8 hours"],
  answer: 3,
  explanation: "Add the rates, not the times: the pumps fill 1/8 and 1/12 of the tank per hour, giving 3/24 + 2/24 = 5/24 per hour. The time is the reciprocal, 24/5 = 4.8 hours. Averaging 8 and 12 to get 10 hours is the classic error — together they must beat the faster pump's 8 hours."
},
{
  type: "rates", d: 1,
  prompt: "A car travels 315 km in 3.5 hours. What is its average speed?",
  choices: ["90 km/h", "95 km/h", "100 km/h", "110 km/h"],
  answer: 0,
  explanation: "Average speed is distance divided by time: 315 ÷ 3.5 = 90 km/h. Checking backwards, 90 × 3.5 = 315, which confirms the result."
},
{
  type: "rates", d: 3,
  prompt: "A team of 5 people processes 1,200 claims in 4 days. Working at the same rate per person, how many claims would 8 people process in 5 days?",
  choices: ["1,920", "2,400", "2,880", "3,000"],
  answer: 1,
  explanation: "One person processes 1,200 ÷ (5 × 4) = 60 claims a day. Eight people over five days give 8 × 5 × 60 = 2,400 claims. Scaling only the headcount, or only the days, produces the 1,920 and 3,000 distractors."
},
{
  type: "rates", d: 1,
  prompt: "A printer prints 45 pages per minute. How long will it take to print 1,530 pages?",
  choices: ["28 minutes", "32 minutes", "34 minutes", "38 minutes"],
  answer: 2,
  explanation: "Time is quantity divided by rate: 1,530 ÷ 45 = 34 minutes. A quick check: 45 × 30 = 1,350 and 45 × 4 = 180, and 1,350 + 180 = 1,530."
},
{
  type: "rates", d: 3,
  prompt: "Water flows into a tank at 15 litres per minute while a drain removes water at 6 litres per minute. Starting from empty, how long will it take to fill a 540-litre tank?",
  choices: ["25 minutes", "36 minutes", "50 minutes", "60 minutes"],
  answer: 3,
  explanation: "The net inflow is 15 − 6 = 9 litres a minute, so the tank fills in 540 ÷ 9 = 60 minutes. Using the inflow rate alone gives 36 minutes and ignores the drain entirely."
},

/* ---------- ESTIMATION ---------- */
{
  type: "estimation", d: 2,
  prompt: "A subscription business has 4,850 customers, each spending approximately $197 a year. Which of the following is closest to its annual revenue?",
  choices: ["$760,000", "$860,000", "$960,000", "$1,060,000"],
  answer: 2,
  explanation: "Round to convenient figures: roughly 4,850 × 200 = $970,000, and because $197 is slightly under $200 the true figure is a little lower, at about $955,000. That is closest to $960,000."
},
{
  type: "estimation", d: 1,
  prompt: "A warehouse holds 78 pallets, each carrying 96 cartons. Which of the following is closest to the total number of cartons?",
  choices: ["6,500", "7,500", "8,500", "9,500"],
  answer: 1,
  explanation: "Approximate as 80 × 100 = 8,000, then note that both figures were rounded up, so the true total is somewhat lower. The exact product is 7,488, closest to 7,500."
},
{
  type: "estimation", d: 2,
  prompt: "A project requires about 1,960 hours of work. A team of 7 people each work 38 hours a week. Approximately how many weeks will the project take?",
  choices: ["7 weeks", "9 weeks", "11 weeks", "14 weeks"],
  answer: 0,
  explanation: "The team delivers roughly 7 × 38 ≈ 270 hours a week, and 1,960 ÷ 270 ≈ 7.3 weeks. Rounding 38 to 40 gives 280 hours a week and 7 weeks, which is close enough to identify the answer."
},
{
  type: "estimation", d: 2,
  prompt: "A city of 2.1 million residents has approximately one doctor for every 340 residents. Roughly how many doctors does the city have?",
  choices: ["4,000", "6,000", "8,000", "12,000"],
  answer: 1,
  explanation: "Round the divisor: 2,100,000 ÷ 350 = 6,000, and since the true divisor of 340 is slightly smaller, the real figure is a little above 6,000 — about 6,180. The nearest option is 6,000."
},
{
  type: "estimation", d: 2,
  prompt: "A retailer sells about 312 units a day at an average price of $28.60. Which of the following is closest to its revenue over a seven-day week?",
  choices: ["$38,000", "$50,000", "$62,000", "$74,000"],
  answer: 2,
  explanation: "Daily revenue is roughly 300 × 30 = $9,000, so a week is about $63,000. Working more precisely, 312 × 28.60 = $8,923 a day and $62,462 a week, closest to $62,000."
},
{
  type: "estimation", d: 2,
  prompt: "A fleet of 43 vehicles each covers approximately 1,180 km a month. Which of the following is closest to the fleet's total monthly distance?",
  choices: ["31,000 km", "38,000 km", "44,000 km", "51,000 km"],
  answer: 3,
  explanation: "Approximate as 43 × 1,200 ≈ 51,600 km, or more simply 40 × 1,200 = 48,000 plus a little more for the remaining three vehicles. The exact figure is 50,740 km, closest to 51,000."
}
,

/* ---------- BUSINESS METRICS ---------- */
{
  type: "business", d: 2,
  prompt: "A product sells for $25 a unit with a variable cost of $15 a unit. The company's fixed costs are $80,000. How many units must it sell to break even?",
  choices: ["3,200", "5,333", "8,000", "16,000"],
  answer: 2,
  explanation: "Contribution per unit is 25 − 15 = $10. Break-even is fixed costs divided by contribution: 80,000 ÷ 10 = 8,000 units. Dividing by the $25 price instead gives 3,200 and ignores the variable cost entirely."
},
{
  type: "business", d: 1,
  prompt: "A marketing campaign costs $45,000 and brings in 900 new customers. What is the customer acquisition cost?",
  choices: ["$20", "$50", "$75", "$90"],
  answer: 1,
  explanation: "Acquisition cost is spend divided by customers acquired: 45,000 ÷ 900 = $50 per customer."
},
{
  type: "business", d: 2,
  prompt: "A subscriber pays $30 a month and stays with the service for an average of 40 months. What is the average customer lifetime value, before costs?",
  choices: ["$360", "$750", "$900", "$1,200"],
  answer: 3,
  explanation: "Lifetime value before costs is monthly revenue times average lifetime: 30 × 40 = $1,200. The $360 figure is one year's revenue and does not use the 40-month lifetime."
},
{
  type: "business", d: 2,
  prompt: "A consultancy employs 60 consultants, each with 1,800 available hours a year. Last year the firm billed 86,400 hours to clients. What was its utilisation rate?",
  choices: ["72%", "75%", "80%", "85%"],
  answer: 2,
  explanation: "Total available hours are 60 × 1,800 = 108,000. Utilisation is billed over available: 86,400 ÷ 108,000 = 0.80, or 80%."
},
{
  type: "business", d: 2,
  prompt: "A retailer reports cost of goods sold of $4.2m and average inventory of $700,000. What is its inventory turnover?",
  choices: ["6 times", "8 times", "10 times", "12 times"],
  answer: 0,
  explanation: "Inventory turnover is cost of goods sold divided by average inventory: 4,200,000 ÷ 700,000 = 6 times a year. That implies inventory is held for about two months on average."
},
{
  type: "business", d: 2,
  prompt: "An investment of $250,000 has a final value of $310,000. What is the return on investment (ROI)?",
  choices: ["19.4%", "24.0%", "30.0%", "124.0%"],
  answer: 1,
  explanation: "Return on investment is gain divided by the amount invested: (310,000 − 250,000) ÷ 250,000 = 60,000 ÷ 250,000 = 24%. The 124% figure is the final value as a percentage of the original investment, not the gain."
},
{
  type: "business", d: 3,
  prompt: "A company has fixed costs of $120,000. It sells its product for $40 a unit with a variable cost of $28 a unit. How many units must it sell to make a profit of $60,000?",
  choices: ["5,000", "10,000", "12,000", "15,000"],
  answer: 3,
  explanation: "Contribution per unit is 40 − 28 = $12. The units must cover fixed costs plus the target profit: (120,000 + 60,000) ÷ 12 = 15,000 units. Covering fixed costs alone would need 10,000 units."
},
{
  type: "business", d: 2,
  prompt: "A subscription business starts the month with 2,400 customers. During the month it loses 72 customers and gains 150 new ones. What is its monthly churn rate?",
  choices: ["3.0%", "3.25%", "6.0%", "6.25%"],
  answer: 0,
  explanation: "Churn measures customers lost against the opening base: 72 ÷ 2,400 = 0.03, or 3%. New customers belong in the growth calculation, not the churn one, so they do not enter this figure."
},

/* ---------- MULTI-STEP ---------- */
{
  type: "multistep", d: 2,
  prompt: "A shop buys 300 units at $12 each. It sells 240 of them at $22 each and clears the remaining units at $14 each. What is the shop's total profit on the batch?",
  choices: ["$2,040", "$2,520", "$3,120", "$3,600"],
  answer: 1,
  explanation: "Total cost is 300 × 12 = $3,600. Revenue is 240 × 22 = $5,280 plus 60 × 14 = $840, giving $6,120. Profit is 6,120 − 3,600 = $2,520."
},
{
  type: "multistep", d: 3,
  prompt: "A company reports revenue of $8m at a gross margin of 30%. Operating expenses are $1.5m and tax is charged at 25% of profit before tax. What is the company's net profit?",
  choices: ["$450,000", "$600,000", "$675,000", "$900,000"],
  answer: 2,
  explanation: "Gross profit is 8m × 0.30 = $2.4m. Subtracting operating expenses gives profit before tax of $0.9m. Tax is 0.9m × 0.25 = $225,000, leaving net profit of $675,000."
},
{
  type: "multistep", d: 2,
  prompt: "An employee earning $52,000 receives a 6% pay rise, followed a year later by a further 4% rise. What is the employee's salary after both rises?",
  choices: ["$56,160.00", "$57,200.00", "$57,300.00", "$57,324.80"],
  answer: 3,
  explanation: "The rises compound: 52,000 × 1.06 = $55,120, then 55,120 × 1.04 = $57,324.80. Applying a single 10% rise gives $57,200, which understates the result because the second rise applies to the already-increased salary."
},
{
  type: "multistep", d: 3,
  prompt: "A project has four phases costing $18,000, $27,000, $35,000 and $20,000. The approved budget is $110,000. What percentage of the budget remains unspent?",
  choices: ["9.1%", "10.0%", "11.0%", "12.5%"],
  answer: 0,
  explanation: "The phases total $100,000, leaving $10,000 unspent. As a share of the budget that is 10,000 ÷ 110,000 = 9.1%. Dividing by the $100,000 spent instead gives 10%, which measures the remainder against the wrong base."
},
{
  type: "multistep", d: 2,
  prompt: "A factory operates 22 days a month, running two shifts a day of 8 hours each, and produces 65 units an hour. What is its monthly output?",
  choices: ["17,160", "22,880", "28,600", "45,760"],
  answer: 1,
  explanation: "Daily production hours are 2 × 8 = 16, so monthly hours are 22 × 16 = 352. Output is 352 × 65 = 22,880 units. Forgetting the second shift halves the figure to 11,440."
},
{
  type: "multistep", d: 2,
  prompt: "A store recorded sales of $240,000 in the first quarter. Sales fell 15% in the second quarter and then rose 25% in the third. What were the third-quarter sales?",
  choices: ["$240,000", "$244,800", "$255,000", "$270,000"],
  answer: 2,
  explanation: "Second-quarter sales are 240,000 × 0.85 = $204,000, and third-quarter sales are 204,000 × 1.25 = $255,000. Applying a net 10% rise to the opening figure gives $264,000, which is wrong because the rise applies to the reduced base."
},
{
  type: "multistep", d: 2,
  prompt: "A vehicle is purchased for $32,000. It depreciates by 20% in the first year and by a further 15% of its remaining value in the second year. What is it worth after two years?",
  choices: ["$20,800", "$21,760", "$22,400", "$24,320"],
  answer: 1,
  explanation: "After year one the value is 32,000 × 0.80 = $25,600. After year two it is 25,600 × 0.85 = $21,760. Applying a combined 35% to the original price gives $20,800, which over-depreciates because the second reduction applies to a smaller base."
},
{
  type: "multistep", d: 3,
  prompt: "A conference has 480 attendees. Of these, 25% attend workshop A. Of the attendees who do not attend workshop A, 40% attend workshop B. How many attend workshop B?",
  choices: ["96", "120", "132", "144"],
  answer: 3,
  explanation: "Workshop A takes 480 × 0.25 = 120 attendees, leaving 360. Workshop B takes 40% of those: 360 × 0.40 = 144. Taking 40% of the full 480 gives 192 and misses that B draws only from the remainder."
},
{
  type: "multistep", d: 2,
  prompt: "A loan of $18,000 accrues simple interest at 7% a year for three years, with nothing repaid until the end. What total amount is repayable?",
  choices: ["$19,260", "$20,260", "$21,600", "$21,780"],
  answer: 3,
  explanation: "Simple interest is principal × rate × time: 18,000 × 0.07 × 3 = $3,780. The total repayable is 18,000 + 3,780 = $21,780. One year's interest alone would give $19,260."
},
{
  type: "multistep", d: 2,
  prompt: "A team of 6 people works 7.5 hours a day for 12 days at a labour rate of $45 an hour. What is the total labour cost?",
  choices: ["$24,300", "$27,000", "$29,160", "$32,400"],
  answer: 0,
  explanation: "Total hours are 6 × 7.5 × 12 = 540. At $45 an hour that is 540 × 45 = $24,300. Working in stages, one person's 12 days cost $4,050, and six people cost six times that."
},
{
  type: "multistep", d: 3,
  prompt: "A wholesaler applies a 15% discount to orders above $5,000, and then a further 5% off the discounted amount for payment within ten days. What is the final cost of a $7,200 order paid within ten days?",
  choices: ["$5,814", "$5,940", "$6,120", "$6,840"],
  answer: 0,
  explanation: "The first discount gives 7,200 × 0.85 = $6,120, and the early-payment discount gives 6,120 × 0.95 = $5,814. Adding the discounts to 20% and applying once gives $5,760, which over-discounts because the second reduction applies to the already-reduced amount."
},
{
  type: "multistep", d: 3,
  prompt: "A department's annual budget rose from $340,000 to $391,000, while its headcount rose from 17 to 23. What happened to the budget per head?",
  choices: [
    "It fell by $3,000",
    "It fell by $1,700",
    "It rose by $3,000",
    "It rose by $51,000"
  ],
  answer: 0,
  explanation: "Budget per head was 340,000 ÷ 17 = $20,000 and is now 391,000 ÷ 23 = $17,000, a fall of $3,000. The total budget grew by 15% but headcount grew by 35%, so spending per person fell despite the larger budget."
},
{
  type: "multistep", d: 2,
  prompt: "A machine costs $84,000 to buy and saves $1,750 a month in operating costs. Ignoring interest, how long is the payback period?",
  choices: ["3.5 years", "4.0 years", "4.5 years", "5.0 years"],
  answer: 1,
  explanation: "The machine pays back in 84,000 ÷ 1,750 = 48 months, which is 4.0 years. Converting the saving to an annual figure first gives $21,000 a year, and 84,000 ÷ 21,000 = 4 as well."
},
{
  type: "multistep", d: 2,
  prompt: "A firm invoices three clients for $12,400, $9,750 and $15,850. All three take advantage of a 3% early-payment discount. What total amount does the firm receive?",
  choices: ["$36,860", "$37,050", "$37,240", "$38,000"],
  answer: 0,
  explanation: "The invoices total $38,000. A 3% discount leaves 97%: 38,000 × 0.97 = $36,860. The discount given away is $1,140."
},
{
  type: "multistep", d: 3,
  prompt: "A maker sells a product through a retailer at a list price of $45. The retailer takes a 30% commission on the list price, and the maker also pays $4.20 per unit in shipping. How much does the maker receive per unit?",
  choices: ["$26.10", "$27.00", "$27.30", "$31.50"],
  answer: 2,
  explanation: "After the retailer's commission the maker receives 45 × 0.70 = $31.50. Subtracting shipping gives 31.50 − 4.20 = $27.30. Deducting shipping before the commission instead gives $28.56, a common ordering error."
}

/* END-NUM-2 */
];
Q.forEach(function(q){ window.QUESTION_BANK.num.push(q); });
})();
