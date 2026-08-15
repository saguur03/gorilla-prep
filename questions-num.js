/* Numerical Reasoning — matched to TestGorilla's four published question types:
   numerical computation · numerical estimation · numerical reasoning · data interpretation.
   Includes number series & patterns, which TestGorilla lists explicitly.
   Note: a calculator and pen/paper ARE allowed on the real test, so the skill being
   trained here is setting the problem up correctly and fast, not raw arithmetic.
   `d` = difficulty 1 easy / 2 medium / 3 hard (drives the per-question target time). */
window.QUESTION_BANK = window.QUESTION_BANK || {};
window.QUESTION_BANK.num = [

/* ---------- PERCENTAGES ---------- */
{
  type: "percent",
  prompt: "A company's revenue grew from $2.4 million to $3.0 million.\n\nBy what percentage did revenue grow?",
  choices: ["12%", "18%", "20%", "25%"],
  answer: 3,
  explanation: "Percent change = (new − old) ÷ old. Here (3.0 − 2.4) ÷ 2.4 = 0.6 ÷ 2.4 = 0.25 = 25%. The trap is dividing by the new value instead of the old one, which gives 20%. Always divide by the starting figure."
},
{
  type: "percent",
  prompt: "After a 20% discount, a product sells for $200.\n\nWhat was the original price?",
  choices: ["$220", "$240", "$250", "$260"],
  answer: 2,
  explanation: "The sale price is 80% of the original, so original = 200 ÷ 0.80 = $250. Adding 20% back to $200 gives $240, which is wrong because the 20% was taken off the larger original figure, not the smaller sale price."
},
{
  type: "percent",
  prompt: "A price is increased by 20% and then decreased by 20%.\n\nWhat is the net change from the original price?",
  choices: ["No change", "4% decrease", "4% increase", "2% decrease"],
  answer: 1,
  explanation: "Multiply the factors: 1.20 × 0.80 = 0.96, a 4% decrease. The percentages apply to different bases — the 20% cut comes off the inflated price — so equal-percentage moves never cancel. An x% rise followed by an x% fall always loses (x/10)²% of value."
},
{
  type: "percent",
  prompt: "A number increased by 15% equals 460.\n\nWhat was the original number?",
  choices: ["391", "400", "410", "445"],
  answer: 1,
  explanation: "Original × 1.15 = 460, so original = 460 ÷ 1.15 = 400. Verify: 400 + 15% of 400 = 400 + 60 = 460. Subtracting 15% from 460 would give 391, the classic error of applying the percentage to the wrong base."
},
{
  type: "percent",
  prompt: "Company A's revenue is 40% higher than Company B's.\n\nCompany B's revenue is what percentage lower than Company A's?",
  choices: ["28.6%", "30%", "40%", "60%"],
  answer: 0,
  explanation: "Set B = 100, so A = 140. B is lower by 40, and as a share of A that is 40 ÷ 140 = 28.6%. The comparison base flips when you reverse the direction, so the two percentages are never equal — a distinction that matters constantly in market-share work."
},
{
  type: "percent",
  prompt: "If x is 25% of y, then y is what percentage of x?",
  choices: ["75%", "125%", "250%", "400%"],
  answer: 3,
  explanation: "x = 0.25y means y = 4x, and 4x expressed as a percentage of x is 400%. When a quantity is a fraction 1/n of another, reversing the relationship gives n × 100%. Here 1/4 inverts to 4, or 400%."
},
{
  type: "percent",
  prompt: "A company reduces its headcount from 250 to 200 employees.\n\nWhat is the percentage reduction?",
  choices: ["20%", "25%", "40%", "50%"],
  answer: 0,
  explanation: "Reduction = 50 employees on a base of 250, so 50 ÷ 250 = 0.20 = 20%. Dividing by the new figure of 200 gives 25%, which would be the percentage you'd need to add to get back from 200 to 250 — a different question."
},
{
  type: "percent",
  prompt: "A 25% price increase is to be fully reversed.\n\nWhat percentage decrease returns the price to its original level?",
  choices: ["20%", "22.5%", "25%", "30%"],
  answer: 0,
  explanation: "Starting at 100, a 25% increase gives 125. To return to 100 you must remove 25 from a base of 125: 25 ÷ 125 = 20%. The reversing discount is always smaller than the original increase because it applies to the larger amount."
},
{
  type: "percent",
  prompt: "15% of 240 equals a certain number.\n\nThat number is what percentage of 300?",
  choices: ["9%", "10%", "12%", "15%"],
  answer: 2,
  explanation: "First, 15% of 240 = 36. Then 36 ÷ 300 = 0.12 = 12%. Two-step percentage questions reward computing the intermediate value explicitly rather than trying to combine the percentages directly."
},

/* ---------- MARGINS, COSTS, PROFIT ---------- */
{
  type: "margin",
  prompt: "A product sells for $120 and costs $90 to produce.\n\nWhat is the gross margin as a percentage of the selling price?",
  choices: ["25%", "30%", "33.3%", "75%"],
  answer: 0,
  explanation: "Margin = (price − cost) ÷ price = (120 − 90) ÷ 120 = 30 ÷ 120 = 25%. Dividing by cost instead gives 33.3%, which is the markup, not the margin. Margin uses price as the denominator; markup uses cost."
},
{
  type: "margin",
  prompt: "A company's costs equal 60% of its revenue. Revenue is $850,000.\n\nWhat is the company's profit?",
  choices: ["$255,000", "$340,000", "$425,000", "$510,000"],
  answer: 1,
  explanation: "If costs are 60% of revenue, profit is the remaining 40%: 0.40 × 850,000 = $340,000. Recognizing that the margin is simply the complement of the cost ratio saves you from computing costs first and subtracting."
},
{
  type: "margin",
  prompt: "A store marks up its cost by 40%, then offers a 25% discount off the marked price.\n\nWhat is the store's profit as a percentage of cost?",
  choices: ["5%", "10%", "15%", "The store breaks even"],
  answer: 0,
  explanation: "Take cost = 100. Marked price = 140. After a 25% discount: 140 × 0.75 = 105. Profit = 5 on a cost of 100, which is 5%. Chaining multipliers (1.40 × 0.75 = 1.05) gets there in one step and avoids sign errors."
},
{
  type: "margin",
  prompt: "Product A represents 30% of sales at a 40% margin. Product B represents 70% of sales at a 20% margin.\n\nWhat is the blended margin across both products?",
  choices: ["24%", "26%", "28%", "30%"],
  answer: 1,
  explanation: "Weight each margin by its sales share: (0.30 × 0.40) + (0.70 × 0.20) = 0.12 + 0.14 = 0.26 = 26%. Averaging 40% and 20% to get 30% ignores that the lower-margin product carries more than twice the weight."
},
{
  type: "margin",
  prompt: "A business has fixed costs of $50,000, a variable cost of $30 per unit, and sells each unit for $50.\n\nHow many units must it sell to break even?",
  choices: ["1,000", "1,500", "2,000", "2,500"],
  answer: 3,
  explanation: "Contribution per unit = 50 − 30 = $20. Break-even units = fixed costs ÷ contribution = 50,000 ÷ 20 = 2,500. Dividing fixed costs by the price rather than the contribution margin is the standard error here."
},
{
  type: "margin",
  prompt: "A company has fixed costs of $120,000 and a contribution margin of 30% of revenue.\n\nWhat revenue is required to break even?",
  choices: ["$156,000", "$360,000", "$400,000", "$460,000"],
  answer: 2,
  explanation: "Break-even revenue = fixed costs ÷ contribution margin ratio = 120,000 ÷ 0.30 = $400,000. Check: 30% of 400,000 = 120,000, exactly covering fixed costs. When the margin is given as a ratio rather than per unit, divide directly by the ratio."
},
{
  type: "margin",
  prompt: "A company's profit margin is 15% and its revenue is $2 million.\n\nWhat are its total costs?",
  choices: ["$300,000", "$1.5 million", "$1.7 million", "$1.85 million"],
  answer: 2,
  explanation: "Profit = 0.15 × 2,000,000 = $300,000, so costs = 2,000,000 − 300,000 = $1.7 million. Equivalently, costs are 85% of revenue. The distractor $300,000 is the profit itself rather than the costs the question asks for."
},
{
  type: "margin",
  prompt: "The ratio of a company's costs to its revenue is 3:5. Revenue is $250,000.\n\nWhat is the company's profit?",
  choices: ["$100,000", "$150,000", "$180,000", "$200,000"],
  answer: 0,
  explanation: "Costs are 3/5 of revenue = 0.6 × 250,000 = $150,000, so profit = 250,000 − 150,000 = $100,000. Alternatively, profit is the remaining 2/5 of revenue: 0.4 × 250,000 = $100,000."
},

/* ---------- RATES & WORK ---------- */
{
  type: "rates",
  prompt: "Three machines produce 600 units in 4 hours, all working at the same rate.\n\nHow many units will five machines produce in 6 hours?",
  choices: ["600", "900", "1,200", "1,500"],
  answer: 3,
  explanation: "Rate per machine per hour = 600 ÷ (3 × 4) = 50 units. Five machines over six hours: 5 × 6 × 50 = 1,500 units. Reducing to a single-unit rate first makes any combination of machines and hours a one-line multiplication."
},
{
  type: "rates",
  prompt: "A team of 8 people completes a project in 15 days.\n\nAt the same rate, how long would 12 people take?",
  choices: ["10 days", "12 days", "15 days", "22.5 days"],
  answer: 0,
  explanation: "Total work = 8 × 15 = 120 person-days, a constant. With 12 people: 120 ÷ 12 = 10 days. People and days are inversely proportional, so more workers means proportionally fewer days."
},
{
  type: "rates",
  prompt: "Five workers can paint 3 rooms in 6 hours.\n\nHow long will 10 workers take to paint 12 rooms?",
  choices: ["9 hours", "12 hours", "15 hours", "24 hours"],
  answer: 1,
  explanation: "Three rooms take 5 × 6 = 30 worker-hours, so one room takes 10 worker-hours and 12 rooms take 120. With 10 workers: 120 ÷ 10 = 12 hours. Converting to worker-hours per unit of output handles changes on both sides cleanly."
},
{
  type: "rates",
  prompt: "Pipe A fills a tank in 6 hours; pipe B fills the same tank in 12 hours.\n\nHow long will both pipes together take?",
  choices: ["4 hours", "6 hours", "9 hours", "18 hours"],
  answer: 0,
  explanation: "Add rates, not times: 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4 of the tank per hour, so 4 hours in total. Averaging the two times to get 9 hours is wrong — combined work is always faster than either pipe alone."
},
{
  type: "rates",
  prompt: "A car travels 180 km at 60 km/h, then another 180 km at 90 km/h.\n\nWhat is the average speed for the whole journey?",
  choices: ["72 km/h", "75 km/h", "80 km/h", "84 km/h"],
  answer: 0,
  explanation: "Average speed = total distance ÷ total time. Time = 180/60 + 180/90 = 3 + 2 = 5 hours, so 360 ÷ 5 = 72 km/h. The simple average of 75 km/h is wrong because more time is spent at the slower speed, pulling the true average down."
},
{
  type: "rates",
  prompt: "A consultant bills $250 per hour, works 6 billable hours per day, and works 22 days per month.\n\nWhat is the consultant's monthly billing?",
  choices: ["$27,500", "$30,000", "$33,000", "$36,000"],
  answer: 2,
  explanation: "250 × 6 × 22 = $33,000. Multiply the chain of rates in any order — 6 × 22 = 132 hours, then × 250 — since multiplication is commutative and the intermediate figure is easier to handle."
},
{
  type: "rates",
  prompt: "A factory produces 480 units in 8 hours. Production is to be increased to 900 units per day without changing the hourly rate.\n\nHow many hours per day must the factory operate?",
  choices: ["12 hours", "13 hours", "15 hours", "18 hours"],
  answer: 2,
  explanation: "Hourly rate = 480 ÷ 8 = 60 units. Required hours = 900 ÷ 60 = 15. Establishing the unit rate first turns a two-variable problem into a single division."
},

/* ---------- AVERAGES ---------- */
{
  type: "average",
  prompt: "The average of 5 numbers is 20. One of the numbers, which equals 12, is removed.\n\nWhat is the average of the remaining 4 numbers?",
  choices: ["20", "21", "22", "23"],
  answer: 2,
  explanation: "Total = 5 × 20 = 100. After removing 12, the sum is 88 across 4 numbers, so the average is 88 ÷ 4 = 22. Convert averages into sums before adding or removing elements — averages themselves cannot be added or subtracted directly."
},
{
  type: "average",
  prompt: "A group of 20 people has an average age of 30. One more person joins, raising the average to 31.\n\nHow old is the new person?",
  choices: ["31", "41", "51", "61"],
  answer: 2,
  explanation: "Original total = 20 × 30 = 600. New total = 21 × 31 = 651. The new person's age is 651 − 600 = 51. Intuitively, they must supply their own 31 plus one extra year for each of the 20 existing members."
},
{
  type: "average",
  prompt: "A buyer purchases 100 units at $8 each and 300 units at $12 each.\n\nWhat is the weighted average cost per unit?",
  choices: ["$9.00", "$10.00", "$10.50", "$11.00"],
  answer: 3,
  explanation: "Total cost = (100 × 8) + (300 × 12) = 800 + 3,600 = $4,400 across 400 units, giving $11.00 each. The simple average of $10 ignores that three-quarters of the units were bought at the higher price."
},
{
  type: "average",
  prompt: "An investor holds $20,000 returning 5% and $30,000 returning 8%.\n\nWhat is the overall return on the combined portfolio?",
  choices: ["6.5%", "6.8%", "7.0%", "7.2%"],
  answer: 1,
  explanation: "Returns = (20,000 × 0.05) + (30,000 × 0.08) = 1,000 + 2,400 = $3,400 on $50,000 invested, which is 6.8%. Weighted averages always sit closer to the value carrying the larger weight — here nearer 8% than 5%."
},
{
  type: "average",
  prompt: "The average salary in a department of 12 people is $60,000. A new hire joins at $86,000.\n\nWhat is the new average salary?",
  choices: ["$62,000", "$62,500", "$63,000", "$64,600"],
  answer: 0,
  explanation: "Original total = 12 × 60,000 = $720,000. Adding the new hire: 806,000 across 13 people, so 806,000 ÷ 13 = $62,000. A faster route: the new hire is $26,000 above the old average, and spreading that excess over 13 people lifts the average by $2,000."
},

/* ---------- RATIOS ---------- */
{
  type: "ratio",
  prompt: "The ratio of managers to analysts at a firm is 2:7. There are 63 analysts.\n\nHow many managers are there?",
  choices: ["9", "12", "14", "18"],
  answer: 3,
  explanation: "Each ratio unit equals 63 ÷ 7 = 9 people, so managers = 2 × 9 = 18. Solving for the value of one ratio unit is the fastest general method and works no matter how many categories the ratio contains."
},
{
  type: "ratio",
  prompt: "A project cost of $240,000 is shared among three departments in the ratio 3:4:5.\n\nWhat does the department with the largest share pay?",
  choices: ["$60,000", "$80,000", "$100,000", "$120,000"],
  answer: 2,
  explanation: "Total parts = 3 + 4 + 5 = 12, so one part = 240,000 ÷ 12 = $20,000. The largest share is 5 parts = $100,000. Always sum the ratio terms first to find the value of a single part."
},
{
  type: "ratio",
  prompt: "In a company of 500 employees, 60% work in operations, and 25% of those operations employees are managers.\n\nHow many operations managers are there?",
  choices: ["75", "100", "125", "150"],
  answer: 0,
  explanation: "Operations staff = 0.60 × 500 = 300. Managers among them = 0.25 × 300 = 75. Successive percentages multiply through the chain: 0.60 × 0.25 = 0.15, and 15% of 500 is 75."
},
{
  type: "ratio",
  prompt: "40% of a company's employees are women. 30% of the women and 50% of the men hold an MBA.\n\nWhat percentage of all employees holds an MBA?",
  choices: ["38%", "40%", "42%", "45%"],
  answer: 2,
  explanation: "Weight each group by its share: (0.40 × 0.30) + (0.60 × 0.50) = 0.12 + 0.30 = 0.42 = 42%. Averaging 30% and 50% to get 40% would only be right if the two groups were the same size, which they are not."
},

/* ---------- GROWTH & INTEREST ---------- */
{
  type: "growth",
  prompt: "An investment of $50,000 grows at 8% per year, compounded annually.\n\nWhat is its value after 2 years?",
  choices: ["$54,000", "$56,000", "$58,000", "$58,320"],
  answer: 3,
  explanation: "50,000 × 1.08² = 50,000 × 1.1664 = $58,320. Simple interest would give $58,000; the extra $320 is the second year's interest earned on the first year's interest, which is what compounding means."
},
{
  type: "growth",
  prompt: "$10,000 is invested at 6% simple interest for 3 years.\n\nHow much interest is earned?",
  choices: ["$1,600", "$1,800", "$1,910", "$2,000"],
  answer: 1,
  explanation: "Simple interest = principal × rate × time = 10,000 × 0.06 × 3 = $1,800. Simple interest is always computed on the original principal, so each year contributes the same $600 with no compounding effect."
},
{
  type: "growth",
  prompt: "$10,000 is invested at 10% compounded annually for 3 years.\n\nHow much interest is earned in total?",
  choices: ["$2,800", "$3,000", "$3,100", "$3,310"],
  answer: 3,
  explanation: "Final value = 10,000 × 1.1³ = 10,000 × 1.331 = $13,310, so interest = $3,310. Simple interest would give $3,000; the additional $310 comes from interest compounding in years 2 and 3."
},
{
  type: "growth",
  prompt: "A company's revenue is $5 million and grows 20% per year.\n\nAfter how many full years will revenue first exceed $10 million?",
  choices: ["4 years", "5 years", "6 years", "7 years"],
  answer: 0,
  explanation: "Multiply successively: 1.2, 1.44, 1.728, 2.0736. Revenue only passes double after the fourth year ($10.37M). Dividing 100% by 20% to get 5 years ignores compounding, and the rule of 72 gives a close estimate: 72 ÷ 20 ≈ 3.6 years."
},
{
  type: "growth",
  prompt: "A company's revenue grew from $100 million to $121 million over two years.\n\nWhat was the compound annual growth rate?",
  choices: ["10%", "10.5%", "11%", "21%"],
  answer: 0,
  explanation: "Total growth factor = 121 ÷ 100 = 1.21, and the annual factor is √1.21 = 1.10, so the CAGR is 10%. Dividing the 21% total growth by two years gives 10.5%, which slightly overstates the rate because it ignores compounding."
},
{
  type: "growth",
  prompt: "A machine worth $50,000 depreciates 20% of its remaining value each year.\n\nWhat is it worth after 3 years?",
  choices: ["$18,000", "$20,000", "$24,000", "$25,600"],
  answer: 3,
  explanation: "50,000 × 0.8³ = 50,000 × 0.512 = $25,600. Declining-balance depreciation applies the rate to the reducing value each year, so it never reaches zero — unlike straight-line depreciation, which would give $20,000 here."
},

/* ---------- MARKET SHARE & BUSINESS METRICS ---------- */
{
  type: "business",
  prompt: "A company sells 45,000 units in a total market of 300,000 units.\n\nWhat is its market share?",
  choices: ["12%", "15%", "18%", "20%"],
  answer: 1,
  explanation: "Market share = 45,000 ÷ 300,000 = 0.15 = 15%. Simplify before dividing: 45 ÷ 300 = 15 ÷ 100, which makes the answer immediate without long division."
},
{
  type: "business",
  prompt: "A company's unit sales rise from 45,000 to 50,400 while the total market grows from 300,000 to 360,000 units.\n\nWhat happened to the company's market share?",
  choices: ["It rose from 15% to 14%", "It fell from 15% to 14%", "It stayed at 15%", "It rose from 14% to 15%"],
  answer: 1,
  explanation: "Old share = 45,000 ÷ 300,000 = 15%. New share = 50,400 ÷ 360,000 = 14%. The company grew 12% while the market grew 20%, so growing in absolute terms while losing share is entirely possible — a distinction consultants watch for closely."
},
{
  type: "business",
  prompt: "A retailer's inventory turns over 6 times per year, with average inventory valued at $200,000.\n\nWhat is the annual cost of goods sold?",
  choices: ["$600,000", "$1.2 million", "$1.8 million", "$2.4 million"],
  answer: 1,
  explanation: "Inventory turnover = COGS ÷ average inventory, so COGS = 6 × 200,000 = $1.2 million. Rearranging the definition of the ratio is all that's required; the turnover figure tells you how many times the average stock was sold and replaced."
},
{
  type: "business",
  prompt: "Quarterly sales are: Q1 $100k, Q2 $120k, Q3 $90k, Q4 $130k.\n\nQ4 represents approximately what percentage of annual sales?",
  choices: ["25.0%", "27.5%", "29.5%", "32.5%"],
  answer: 2,
  explanation: "Annual total = 100 + 120 + 90 + 130 = $440k. Q4 share = 130 ÷ 440 = 0.295 = 29.5%. Estimating helps confirm: 130 is somewhat more than a quarter of 440 (which would be 110), so a figure just under 30% is sensible."
},
{
  type: "business",
  prompt: "A salary of $60,000 receives a 10% raise, followed a year later by a 5% raise.\n\nWhat is the final salary?",
  choices: ["$66,000", "$67,500", "$69,000", "$69,300"],
  answer: 3,
  explanation: "60,000 × 1.10 × 1.05 = 66,000 × 1.05 = $69,300. Adding the percentages to get 15% gives $69,000 and misses the $300 earned because the second raise applies to the already-increased salary."
},
{
  type: "business",
  prompt: "Unit sales increase by 50% while the price per unit falls by 20%.\n\nWhat is the change in total revenue?",
  choices: ["10% increase", "20% increase", "30% increase", "No change"],
  answer: 1,
  explanation: "Revenue = price × units, so the change factor is 1.50 × 0.80 = 1.20, a 20% increase. Adding +50% and −20% to get +30% ignores that the two effects multiply rather than add."
},
{
  type: "business",
  prompt: "A product's price is reduced from $80 to $68.\n\nWhat is the percentage reduction?",
  choices: ["15%", "17.6%", "20%", "25%"],
  answer: 0,
  explanation: "Reduction = $12 on a base of $80, so 12 ÷ 80 = 0.15 = 15%. Using the new price of $68 as the denominator gives 17.6%, which answers a different question — how much you'd have to add to get back to $80."
},
{
  type: "business",
  prompt: "The exchange rate is 1 USD = 4,000 COP.\n\nHow many US dollars is 2,600,000 COP worth?",
  choices: ["$260", "$450", "$520", "$650"],
  answer: 3,
  explanation: "2,600,000 ÷ 4,000 = $650. Cancel the trailing zeros first — 2,600 ÷ 4 = 650 — which removes most of the arithmetic risk under time pressure."
},

/* ---------- PROBABILITY & COUNTING ---------- */
{
  type: "probability",
  prompt: "A bag contains 4 red and 6 blue marbles. Two marbles are drawn without replacement.\n\nWhat is the probability that both are red?",
  choices: ["2/15", "3/20", "4/25", "1/5"],
  answer: 0,
  explanation: "P(first red) = 4/10. After removing one red, P(second red) = 3/9. Multiply: (4/10)(3/9) = 12/90 = 2/15. Without replacement, both the numerator and the denominator shrink for the second draw."
},
{
  type: "probability",
  prompt: "A fair coin is flipped three times.\n\nWhat is the probability of getting exactly two heads?",
  choices: ["1/4", "3/8", "1/2", "2/3"],
  answer: 1,
  explanation: "There are 2³ = 8 equally likely outcomes. Exactly two heads occurs in three of them (HHT, HTH, THH), giving 3/8. Counting the favourable arrangements rather than just the number of heads is the key step."
},
{
  type: "probability",
  prompt: "In a group of 40 consultants, 25 speak English and 20 speak Portuguese. Every consultant speaks at least one of the two languages.\n\nHow many speak both?",
  choices: ["5", "10", "15", "20"],
  answer: 0,
  explanation: "By inclusion-exclusion: 25 + 20 − both = 40, so both = 5. The sum 45 exceeds the group size of 40 by exactly the number double-counted, which is the overlap."
},
{
  type: "probability",
  prompt: "A project team must select 2 people from a pool of 6 candidates.\n\nHow many different pairs are possible?",
  choices: ["15", "20", "30", "36"],
  answer: 0,
  explanation: "Order doesn't matter for a pair, so this is a combination: 6 × 5 ÷ 2 = 15. The figure 30 counts ordered selections, which double-counts every pair since selecting A then B is the same team as B then A."
},

/* ---------- MIXED / MULTI-STEP ---------- */
{
  type: "multistep",
  prompt: "A consultancy charges $180 per hour. A project requires 3 consultants working 25 hours each, plus $4,500 in expenses.\n\nWhat is the total cost to the client?",
  choices: ["$13,500", "$15,750", "$17,100", "$18,900"],
  answer: 3,
  explanation: "Billable hours = 3 × 25 = 75, so fees = 75 × 180 = $13,500. Adding expenses: 13,500 + 4,500 = $18,900. The distractor $13,500 omits expenses — always confirm which components the question asks you to include."
},
{
  type: "multistep",
  prompt: "A store buys an item for $60, marks it up by 50%, and later sells it at a 20% discount off the marked price.\n\nWhat is the final selling price?",
  choices: ["$54", "$63", "$68", "$72"],
  answer: 3,
  explanation: "Marked price = 60 × 1.50 = $90. After the discount: 90 × 0.80 = $72. Chaining the multipliers as 60 × 1.5 × 0.8 = 60 × 1.2 = $72 does the whole calculation in one step."
},
{
  type: "multistep",
  prompt: "A company has 3 offices. The Bogotá office generates 45% of revenue, Medellín 30%, and Cali the rest. Total revenue is $12 million.\n\nHow much more revenue does Bogotá generate than Cali?",
  choices: ["$2.4 million", "$3.0 million", "$3.6 million", "$5.4 million"],
  answer: 0,
  explanation: "Cali's share = 100% − 45% − 30% = 25%. The gap between Bogotá and Cali is 45% − 25% = 20% of revenue, which is 0.20 × 12,000,000 = $2.4 million. Working with the percentage difference avoids computing both figures separately."
},
{
  type: "multistep",
  prompt: "A subscription service has 8,000 subscribers paying $25 per month. It raises the price to $30 and loses 10% of its subscribers.\n\nHow does monthly revenue change?",
  choices: ["It falls by $8,000", "It is unchanged", "It rises by $16,000", "It rises by $40,000"],
  answer: 2,
  explanation: "Before: 8,000 × 25 = $200,000. After: 7,200 × 30 = $216,000. Revenue rises by $16,000 because the 20% price increase more than offsets the 10% subscriber loss (1.20 × 0.90 = 1.08, an 8% gain)."
},
{
  type: "multistep",
  prompt: "A factory operates 20 days per month and produces 250 units per day. Each unit sells for $40, and variable costs are $28 per unit. Monthly fixed costs are $30,000.\n\nWhat is the monthly profit?",
  choices: ["$30,000", "$45,000", "$60,000", "$90,000"],
  answer: 0,
  explanation: "Monthly output = 20 × 250 = 5,000 units. Contribution per unit = 40 − 28 = $12, so total contribution = 5,000 × 12 = $60,000. Subtracting fixed costs: 60,000 − 30,000 = $30,000 profit. Working with contribution margin avoids computing revenue and total variable cost separately."
},
{
  type: "multistep",
  prompt: "An investment fund charges a 2% annual management fee on assets. It manages $450 million and expects assets to grow 10% next year.\n\nApproximately what fee will it collect next year on the year-end asset value?",
  choices: ["$8.1 million", "$9.0 million", "$9.5 million", "$9.9 million"],
  answer: 3,
  explanation: "Year-end assets = 450 × 1.10 = $495 million. Fee = 0.02 × 495 = $9.9 million. Applying the fee to the starting figure gives $9.0 million, so read carefully which asset base the question specifies."
},
{
  type: "multistep",
  prompt: "A company's revenue rose 25% while its costs rose 10%. Revenue was originally $800,000 and costs were originally $600,000.\n\nWhat is the new profit?",
  choices: ["$200,000", "$220,000", "$340,000", "$360,000"],
  answer: 2,
  explanation: "New revenue = 800,000 × 1.25 = $1,000,000. New costs = 600,000 × 1.10 = $660,000. Profit = 1,000,000 − 660,000 = $340,000, up from the original $200,000. Note how a modest gap in growth rates produces a large profit swing — this is operating leverage."
},
{
  type: "multistep",
  prompt: "Two consultants split a $90,000 fee in the ratio 5:4. The one with the larger share pays 30% of it in tax.\n\nHow much does that consultant keep after tax?",
  choices: ["$35,000", "$40,000", "$45,000", "$50,000"],
  answer: 0,
  explanation: "Total parts = 9, so one part = 90,000 ÷ 9 = $10,000 and the larger share is 5 × 10,000 = $50,000. After 30% tax: 50,000 × 0.70 = $35,000. Keeping the after-tax multiplier (0.70) rather than computing the tax and subtracting saves a step."
},
{
  type: "multistep",
  prompt: "A store's sales were $40,000 in January. Sales rose 20% in February, then fell 25% in March.\n\nWhat were March sales?",
  choices: ["$36,000", "$38,000", "$40,000", "$44,000"],
  answer: 0,
  explanation: "40,000 × 1.20 = $48,000 in February, then 48,000 × 0.75 = $36,000 in March. Combining the factors first (1.20 × 0.75 = 0.90) shows immediately that March lands 10% below January."
},
{
  type: "multistep",
  prompt: "A firm bills 70% of its consultants' available hours. Each of its 12 consultants has 160 available hours per month, and the billing rate is $200 per hour.\n\nWhat is monthly revenue?",
  choices: ["$268,800", "$288,000", "$336,000", "$384,000"],
  answer: 0,
  explanation: "Total available hours = 12 × 160 = 1,920. Billable hours = 0.70 × 1,920 = 1,344. Revenue = 1,344 × 200 = $268,800. The distractor $384,000 assumes 100% utilization, which is the figure to guard against."
},
{
  type: "multistep",
  prompt: "A product costs $45 to make. The company wants a gross margin of 40% of the selling price.\n\nWhat should the selling price be?",
  choices: ["$54", "$63", "$67.50", "$75"],
  answer: 3,
  explanation: "If margin is 40% of price, then cost is 60% of price: price = 45 ÷ 0.60 = $75. Adding 40% to the cost gives $63, which produces only a 28.6% margin — the standard markup-versus-margin trap."
},
{
  type: "multistep",
  prompt: "A company plans to cut total costs by 12%. Costs are $8 million, of which 60% is labour. If it protects labour costs entirely, by what percentage must non-labour costs fall?",
  choices: ["12%", "20%", "24%", "30%"],
  answer: 3,
  explanation: "Target reduction = 0.12 × 8,000,000 = $960,000. Non-labour costs = 0.40 × 8,000,000 = $3.2 million. Required cut = 960,000 ÷ 3,200,000 = 30%. Protecting the largest cost category forces a much steeper cut on what remains."
},
{
  type: "multistep",
  prompt: "A company acquires a competitor for $60 million. The competitor generates $9 million in annual profit, expected to be constant.\n\nHow many years until the acquisition pays for itself, ignoring interest?",
  choices: ["Between 5 and 6 years", "Between 6 and 7 years", "Between 7 and 8 years", "Between 8 and 9 years"],
  answer: 1,
  explanation: "Payback period = 60 ÷ 9 = 6.67 years, which falls between 6 and 7. This simple payback ratio is a common first screen in deal evaluation, though it ignores the time value of money."
},
{
  type: "multistep",
  prompt: "Sales rose from 2,400 units to 3,000 units while revenue rose from $96,000 to $105,000.\n\nWhat happened to the average price per unit?",
  choices: ["It rose from $35 to $40", "It fell from $40 to $35", "It was unchanged at $40", "It fell from $40 to $37.50"],
  answer: 1,
  explanation: "Old price = 96,000 ÷ 2,400 = $40. New price = 105,000 ÷ 3,000 = $35. Volume grew 25% but revenue grew only 9.4%, so the average price must have fallen — a signal of discounting or a shift toward cheaper products."
},
{
  type: "multistep",
  prompt: "A company's operating costs are $2.5 million per year, growing 4% annually. Revenue is $3.0 million per year, growing 2% annually.\n\nApproximately what is the profit in two years?",
  choices: ["$0.30 million", "$0.42 million", "$0.50 million", "$0.58 million"],
  answer: 1,
  explanation: "Revenue after 2 years = 3.0 × 1.02² ≈ $3.121M. Costs = 2.5 × 1.04² = $2.704M. Profit ≈ 3.121 − 2.704 ≈ $0.42 million, down from $0.50 million today. When costs grow faster than revenue, profit shrinks even though both figures rise."
},

/* ---------- NUMBER SERIES & PATTERNS ----------
   TestGorilla lists "number series and patterns" explicitly under Numerical Reasoning.
   Method: compute the differences first; if those aren't constant, check ratios;
   if neither, check second differences or an alternating rule. */
{
  type: "series",
  prompt: "What number comes next in the series?\n\n3,  8,  15,  24,  35,  ?",
  choices: ["42", "44", "46", "48"],
  answer: 3,
  explanation: "Take the differences between consecutive terms: 5, 7, 9, 11. They rise by 2 each time, so the next difference is 13, giving 35 + 13 = 48. These terms are also n² − 1 for n = 2,3,4,5,6, so the next is 7² − 1 = 48 — the same answer by a different route."
},
{
  type: "series",
  prompt: "What number comes next in the series?\n\n203616,  101808,  50904,  25452,  12726,  ?",
  choices: ["6362", "6363", "6371", "6374"],
  answer: 1,
  explanation: "Each term is exactly half the previous one: 203616 ÷ 2 = 101808, and so on down to 12726 ÷ 2 = 6363. When the numbers are large and shrinking fast, always test division before hunting for a difference pattern."
},
{
  type: "series",
  prompt: "What number comes next in the series?\n\n3,  4,  7,  11,  18,  29,  ?",
  choices: ["47", "51", "55", "58"],
  answer: 0,
  explanation: "Each term is the sum of the two before it: 3 + 4 = 7, 4 + 7 = 11, 7 + 11 = 18, 11 + 18 = 29. So the next is 18 + 29 = 47. This Fibonacci-style rule is worth checking whenever the differences themselves reproduce earlier terms."
},
{
  type: "series",
  prompt: "What number comes next in the series?\n\n100,  92,  76,  52,  ?",
  choices: ["16", "20", "24", "28"],
  answer: 1,
  explanation: "The differences are −8, −16, −24, each 8 larger than the last. The next difference is −32, giving 52 − 32 = 20. Falling series follow the same method as rising ones: difference the terms first and look for a pattern in those differences."
},
{
  type: "series",
  prompt: "What number comes next in the series?\n\n5,  11,  23,  47,  ?",
  choices: ["71", "83", "89", "95"],
  answer: 3,
  explanation: "Each term doubles and adds 1: 5×2+1 = 11, 11×2+1 = 23, 23×2+1 = 47, so next is 47×2+1 = 95. The differences (6, 12, 24) double each time, which is the clue that a multiply-then-add rule is at work rather than a simple ratio."
},
{
  type: "series",
  prompt: "What number comes next in the series?\n\n120,  60,  20,  5,  ?",
  choices: ["1", "2", "2.5", "4"],
  answer: 0,
  explanation: "The divisors increase by one each step: 120 ÷ 2 = 60, 60 ÷ 3 = 20, 20 ÷ 4 = 5, so next is 5 ÷ 5 = 1. If you mistakenly assume a constant ratio and divide by 4 again, you'd get 1.25, which isn't an option. The right move is recognizing that the divisor itself increases by one each time."
},
{
  type: "series",
  prompt: "What number comes next in the series?\n\n2,  5,  10,  17,  26,  ?",
  choices: ["37", "39", "41", "43"],
  answer: 0,
  explanation: "Differences are 3, 5, 7, 9 — consecutive odd numbers — so the next is 11, giving 26 + 11 = 37. Equivalently each term is n² + 1, and 6² + 1 = 37."
},
{
  type: "series",
  prompt: "What number comes next in the series?\n\n12,  15,  21,  30,  42,  ?",
  choices: ["48", "51", "54", "57"],
  answer: 3,
  explanation: "The differences are 3, 6, 9, 12, increasing by 3 each time. The next difference is 15, so 42 + 15 = 57. Differences that grow by a constant amount signal a quadratic pattern."
},
{
  type: "series",
  prompt: "What number comes next in the series?\n\n1,  2,  6,  24,  120,  ?",
  choices: ["240", "480", "600", "720"],
  answer: 3,
  explanation: "Each term is multiplied by an increasing integer: 1×2 = 2, 2×3 = 6, 6×4 = 24, 24×5 = 120, so next is 120×6 = 720. These are the factorials, and the giveaway is that the ratio between terms rises by exactly one each step."
},
{
  type: "series",
  prompt: "One number in this sequence breaks the pattern. Which one?\n\n123,  234,  345,  465,  567",
  choices: ["234", "345", "465", "567"],
  answer: 2,
  explanation: "The sequence increases by 111 each step: 123, 234, 345, then 456, then 567. The fourth term should be 456, but 465 is written instead — the digits are transposed. Error-spotting questions like this reward checking the rule against every term rather than only the last one."
},

/* ---------- NUMERICAL ESTIMATION ----------
   TestGorilla lists "numerical estimation" as a distinct type: getting close enough,
   fast, rather than computing exactly. Round to friendly numbers, then adjust. */
{
  type: "estimation",
  prompt: "Estimate: what is 19.8% of 4,050?",
  choices: ["approximately 600", "approximately 700", "approximately 800", "approximately 900"],
  answer: 2,
  explanation: "Round to friendly numbers: 20% of 4,000 = 800. Both roundings are tiny and pull in opposite directions, so 800 is very close (the exact value is 801.9). Estimation questions are designed so that only one option survives sensible rounding."
},
{
  type: "estimation",
  prompt: "Estimate: 3,960 ÷ 41",
  choices: ["approximately 80", "approximately 97", "approximately 110", "approximately 125"],
  answer: 1,
  explanation: "Round to 4,000 ÷ 40 = 100. Because you rounded the numerator up slightly and the denominator down slightly, the true value sits just under 100 — the exact figure is 96.6. Knowing which direction your rounding pushes the answer lets you pick between close options."
},
{
  type: "estimation",
  prompt: "Estimate: 1,240 × 19",
  choices: ["approximately 21,800", "approximately 23,600", "approximately 25,400", "approximately 27,200"],
  answer: 1,
  explanation: "Use 1,240 × 20 = 24,800, then subtract one lot of 1,240 to get 23,560. Multiplying by a round number and adjusting is almost always faster than long multiplication, and it is exact here rather than merely approximate."
},
{
  type: "estimation",
  prompt: "Which of these fractions is the largest?",
  choices: ["3/7", "4/9", "5/11", "7/16"],
  answer: 2,
  explanation: "All four sit near one half, so compare each with 1/2: 3/7 ≈ 0.4286, 4/9 ≈ 0.4444, 5/11 ≈ 0.4545, 7/16 = 0.4375. The largest is 5/11. Notice that 3/7, 4/9, and 5/11 all have denominator = 2 × numerator + 1; among fractions of this form, the one with the larger numerator is larger. For 7/16, which doesn't follow that pattern, the decimal check is quickest."
},
{
  type: "estimation",
  prompt: "A market worth $2.94 billion is growing at about 10% per year.\n\nEstimate its size after 3 years.",
  choices: ["approximately $3.2 billion", "approximately $3.6 billion", "approximately $3.9 billion", "approximately $4.3 billion"],
  answer: 2,
  explanation: "Compounding at 10% for three years multiplies by roughly 1.33 (1.1³ = 1.331). So 2.94 × 1.33 ≈ $3.9 billion. A useful shortcut: 10% per year for 3 years adds about a third, and for 7 years it roughly doubles."
},
{
  type: "estimation",
  prompt: "Estimate: 48% of 6,120",
  choices: ["approximately 2,450", "approximately 2,940", "approximately 3,400", "approximately 3,800"],
  answer: 1,
  explanation: "48% is just under a half, and half of 6,120 is 3,060. Reducing slightly gives about 2,940 (the exact value is 2,937.6). Anchoring on the nearest simple fraction — a half, a quarter, a third — and then adjusting is the fastest estimation habit."
}

];

/* ---------- Difficulty defaults ----------
   Assign a difficulty to every question that does not declare one explicitly.
   1 = easy (single step) · 2 = medium (two steps or a common trap) · 3 = hard (multi-step). */
(function(){
  const byType = {
    percent:1, ratio:1, business:1, series:2, estimation:2, margin:2,
    rates:2, average:2, growth:2, probability:2, multistep:3
  };
  /* Questions whose real difficulty differs from their type's default, keyed by a
     distinctive fragment of the prompt. Mostly one-step-looking questions that hide a trap. */
  const overrides = [
    ['increased by 20% and then decreased by 20%', 2],
    ["Company A's revenue is 40% higher", 2],
    ['If x is 25% of y', 2],
    ['25% price increase is to be fully reversed', 2],
    ['15% of 240 equals a certain number', 2],
    ['60% work in operations', 2],
    ['30% of the women and 50% of the men', 2],
    ['inventory turns over 6 times', 2],
    ['unit sales rise from 45,000 to 50,400', 2],
    ['Quarterly sales are', 2],
    ['receives a 10% raise, followed', 2],
    ['Unit sales increase by 50%', 2],
    ['marks up its cost by 40%', 3],
    ['protects labour costs entirely', 3],
    ['operating costs are $2.5 million per year', 3]
  ];
  window.QUESTION_BANK.num.forEach(q => { if(!q.d) q.d = byType[q.type] || 2; });
  overrides.forEach(([frag, d]) => {
    const q = window.QUESTION_BANK.num.find(x => x.prompt.indexOf(frag) !== -1);
    if(q) q.d = d;
  });
})();
