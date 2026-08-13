# Bain TestGorilla — research findings (12 Aug 2026)

Sources consulted in English, Spanish and French. Summary of what the real test is,
and what that implies for the question bank.

## What the test actually is

Bain replaced its older **SOVA** assessment with **TestGorilla** in 2024. TestGorilla is a
commercial pre-employment assessment platform — the test is assembled from TestGorilla's
standard test library, not written by Bain. This matters: the question formats are
TestGorilla's published formats, which are documented.

- Sits between application submission and first-round interview
- 3–4 timed modules, ~40–50 minutes total
- Multiple choice, 4 options
- **Webcam on**, browser extensions disabled
- **Cannot return to previous questions** once a section is submitted
- **Calculator and pen/paper ARE allowed**
- Each skill scored 1–3
- Optional non-evaluative video component at the end (2 behavioural questions)
- Reported guidance: **accuracy is weighted over speed**

## Santiago's confirmed section structure

From the Bain Bogotá briefing slide (authoritative for this candidate):

| Section | Questions | Time | Per question |
|---|---|---|---|
| Critical Thinking | 16 | 12 min | 45 s |
| Numerical Reasoning | 12 | 10 min | 50 s |
| Working with Data | 12 | 10 min | 50 s |
| English Level | 20 | 12 min | 36 s |

Slide notes "puede haber cambios en los módulos" — modules may vary.

## TestGorilla official test specifications

### Critical Thinking — 12 min, difficulty: Advanced
Measures: analyzing syllogisms · making inferences · recognizing assumptions and
fallacies · weighing arguments.

Four published question types:
1. **Inferences** — drawing conclusions from given information
2. **Cause-and-effect** — identifying relationships between events
3. **Arrangements** — interpreting sequences and orderings (logic-puzzle style)
4. **Logical conclusions** — which conclusions validly follow from premises

Also assesses "evaluate arguments to find a weak argument" — Watson-Glaser
**strong vs weak argument** format, where an argument is *strong* only if it is both
directly relevant to the question and substantive.

Documented sample style: *"Some students have a job. Everyone who has a job has money."*
→ which conclusions follow?

### Numerical Reasoning — 10 min, 12 questions, difficulty: Intermediate
Four published question types:
1. **Numerical computation** — decimals, averages, ratios
2. **Numerical estimation** — fast approximate answers under pressure
3. **Numerical reasoning** — choosing the method to solve with given data
4. **Data interpretation** — line graphs, charts, tables

Explicitly includes **number series and patterns**.

Documented samples:
- Series: `203616, 101808, 50904, 25452, 12726, ?` → halving → 6363
- Series: `3, 8, 15, 24, 35, ?` → differences 5,7,9,11,13 → 48
- `Revenue $1,200,000 grows 15% → $1,380,000`
- `5 people paint a house in 8 days; 10 people → 4 days`

### Working with Data — 10 min, difficulty: Intermediate
Measures: understanding data handling concepts · basic data analysis and
interpretation · working with graphs and charts.

Reported coverage: **descriptive statistics** (mean, median, mode, standard deviation,
correlation), **data validation / cleaning** (spotting errors, outliers skewing results,
sampling bias), reading charts and tables, summarizing to spot trends, and recognizing
flawed conclusions.

### English — 12 min, 20 questions, CEFR B1/B2 level
Measures: grammar and vocabulary · sentence composition · reading comprehension ·
**listening comprehension**.

Documented B2 samples:
- *"If I _____ you were coming to town, I would have thrown a party."* (third conditional)
- *"_____ that she isn't the best candidate for the job, she is considering withdrawing."* (discourse marker)
- *"She is looking forward to _____ her new project."* → starting

## Implications for the question bank

Gaps found against the real format:

| Gap | Section | Status before audit |
|---|---|---|
| Arrangements / sequence-ordering puzzles | Critical Thinking | absent |
| Formal syllogisms | Critical Thinking | only ~3 |
| Strong vs weak argument (Watson-Glaser) | Critical Thinking | absent |
| Over-weighting of GMAT weaken/strengthen | Critical Thinking | ~30 questions |
| Number series and patterns | Numerical | absent |
| Numerical estimation | Numerical | thin |
| Descriptive statistics (mean/median/mode/SD/correlation) | Working with Data | absent |
| Data validation, outliers, sampling bias | Working with Data | absent |
| Sentence ordering / discourse markers | English | thin |
| Listening comprehension | English | not practicable in a text app |

Two corrections to the framing of explanations:
- A **calculator is allowed**, so explanations should teach *problem setup* first and
  present mental shortcuts as a speed aid, not as the core skill.
- Because **accuracy is weighted over speed**, target times are guides, not hard limits.

## What the audit changed (12 Aug 2026)

Every one of the original 250 questions was re-read and its answer re-derived.

Arithmetic and answer keys:
- All 66 Numerical questions re-computed — all correct.
- All 46 Working with Data questions re-computed — one explanation contained an addition
  error (annual gross profit stated as 9,710 and operating profit as 4,360; the correct
  figures are 9,720 and 4,370). The answer option itself was right. Fixed.
- One explanation overstated a point about the West region's absolute volume. Reworded.
- All formal-logic questions in Critical Thinking re-derived (contrapositives, "some"
  overlaps, affirming the consequent) — all correct.
- Machine check across the whole bank: no out-of-range answer indices, no duplicate
  options, no missing explanations. Choice shuffling verified over 8,425 trials with
  zero mismatches between the shuffled position and the correct option.

Content added to close the format gaps:

| Added | Section | Count |
|---|---|---|
| Number series & patterns | Numerical | 10 |
| Numerical estimation | Numerical | 6 |
| Descriptive statistics (mean/median/mode/range/spread/correlation) | Working with Data | 11 |
| Data validation (outliers, duplicates, impossible values, sampling bias, truncated axes) | Working with Data | 10 |
| Formal syllogisms | Critical Thinking | 8 |
| Arrangements & sequences | Critical Thinking | 10 |
| Strong vs weak arguments (Watson-Glaser) | Critical Thinking | 8 |
| Discourse markers, sentence ordering, business vocabulary | English | 24 |

Bank grew from 250 to **337 questions**. Every question now carries a difficulty rating
(1 easy / 2 medium / 3 hard) which drives a per-question target time, shown in the app.

Still not covered: **listening comprehension**, which forms part of the real English
module and cannot be practised in a text-only app. Worth doing separately — podcasts or
news audio in English, at business register.

## Sources

- https://www.hackingthecaseinterview.com/pages/bain-testgorilla-assessment
- https://strategycase.com/bain-testgorilla/
- https://www.testgorilla.com/test-library/cognitive-ability-tests/critical-thinking-test/
- https://www.testgorilla.com/test-library/cognitive-ability-tests/numerical-reasoning-test/
- https://www.testgorilla.com/test-library/role-specific-skills-tests/working-with-data-test/
- https://www.testgorilla.com/test-library/language-tests/b2-english-test-upper-intermediate/
- https://www.preplounge.com/consulting-forum/bain-testgorilla-24954
- https://www.jobtestprep.co.uk/testgorilla-assessment-practice
- https://www.iprep.online/courses/testgorilla-practice-test/
- https://www.how2become.com/blog/preparing-for-testgorilla-assessments-sample-questions-tips/
- https://www.jobtestprep.com/arguments-watson-glaser
- https://www.bain.com/careers/hiring-process/digital-assessment/
- https://www.casebasix.com/fr/pages/bain-testgorilla (FR)
- https://managementconsulted.com/bain-gorilla-test/
