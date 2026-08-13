> **Status: implemented 13 Aug 2026.** Every P0, P1 and P2 finding below has been acted on,
> except #7 (lengthening Critical Thinking stimuli) and #8 (rebalancing the CT/Numerical type
> mix), which remain open. See "Implementation record" at the end for what changed and how it
> was verified.

# External audit — Gorilla Prep

**Reviewer brief:** audit this app against one purpose only — getting one candidate through
Bain & Company's TestGorilla assessment for an Associate Consultant role in the Bogotá
office (the LatAm cluster hub). Judge it as a teacher would: does every element move the
learner toward a higher score on the real instrument, and does anything in it teach
something false?

Findings are ordered by severity. Each is stated with the evidence that produced it.

---

## What is already sound

Stated first because it defines the baseline the rest is measured against.

- **337 questions, structurally clean.** No out-of-range answer keys, no duplicate options,
  no missing explanations, every item carries a difficulty rating.
- **Answer-position shuffling is correct** for the 227 non-numeric items — verified over
  8,425 randomised trials with zero mismatch between shuffled position and correct option.
- **Colour contrast passes WCAG AA everywhere.** All 13 measured text/background pairs sit
  between 5.11:1 and 16.49:1, against a 4.5:1 requirement. Contrast is not a defect.
- **Technique coverage is complete.** All 29 question types map to a Playbook topic in both
  languages; no orphan topics.
- **Explanations teach mechanism, not just the key.** They name the trap and generalise it.

---

## P0 — Actively teaches something false

### 1. Positional bias in numeric answers is training a harmful heuristic

**Evidence.** Numeric questions deliberately keep their source order (ascending), which is
right — real tests present numeric options in order. But across those 110 items the correct
answer falls at:

| Rank of correct option | 1st | 2nd | 3rd | 4th |
|---|---|---|---|---|
| Count | 10 | 48 | 49 | 3 |
| Share | 9% | 44% | 45% | 3% |

**Why this matters.** 88% of correct numeric answers sit in the middle two positions. After
working through ~100 such items, the learner will have absorbed an implicit rule — *when
unsure on a numeric question, pick a middle value* — without ever articulating it. That prior
is an artifact of how the distractors were written, not a property of the real test. On test
day it will produce confident wrong answers. **A biased practice set is worse than no
practice set**, because it installs a false prior that feels like earned intuition.

**Fix.** Rewrite the distractor sets so the correct value lands at each of the four ranks
roughly 25% of the time, while preserving ascending order. This means changing distractor
*values*, not their order: where the answer is 48, offer `[48, 52, 56, 60]` as often as
`[36, 40, 44, 48]`. Roughly 60 items need new distractors.

### 2. Feedback is never withheld, so the exam state is never rehearsed

**Evidence.** In every mode including exam mode, answering reveals the correct option and the
explanation immediately, and the section clock auto-pauses.

**Why this matters.** The real assessment gives no feedback at all until the end, and does not
allow returning to a question. The single hardest skill it measures is not knowledge — it is
committing to an answer under uncertainty and letting it go. The current design removes every
opportunity to practise that. It also means the learner never experiences the compounding
anxiety of *not knowing how they are doing mid-section*, which is precisely what degrades
performance in the back half of a timed block.

There is a second cost. Immediate feedback after every item produces strong within-session
performance and weaker retention than delayed feedback for this class of material; the app is
optimising the metric that does not matter.

**Fix.** Add a **Strict exam** mode: no feedback during the section, no pause, then a full
review screen at the end showing every item, the response given, the correct answer and the
explanation. Keep the current forgiving exam mode and label it *Exam (with coaching)*.

---

## P1 — Gaps against the real instrument

### 3. There is not a single chart in the app

**Evidence.** 58 of 67 Working-with-Data items use an HTML table; 9 use no visual. Charts: zero.

**Why this matters.** TestGorilla's published descriptions for both Numerical Reasoning and
Working with Data explicitly list *line graphs, charts and diagrams*. Reading a chart is a
different perceptual skill from reading a table — estimating a value between gridlines,
comparing slopes, judging whether two series have crossed, noticing a truncated axis
visually rather than being told about it. The bank tests none of this. There is even a
question *about* truncated axes that describes one in prose instead of showing one.

**Fix.** Add ~15 chart items as inline SVG: grouped bars, a two-series line chart, a stacked
bar requiring a share computation, a pie, and at least two where the visual itself is the
trap (truncated axis, unequal x-spacing).

### 4. No full-length mock

**Evidence.** Exam mode simulates one section at a time.

**Why this matters.** The real sitting is four sections back to back in roughly 45 minutes,
with no break. Fatigue in the final block, and the cost of a slow start bleeding into later
sections, are untested. Section-level stamina is a trainable variable being left untrained.

**Fix.** A **Full mock** that chains all four sections at real counts with no pause, and
reports per-section results at the end.

### 5. No calculator, when the real test provides one

**Evidence.** Sources confirm a calculator and pen/paper are permitted. The app has neither
affordance.

**Why this matters.** Permitting a calculator changes the optimal strategy: the skill becomes
*deciding when reaching for it is faster than estimating*. Practising entirely without one
trains a different workflow than the one he will use, and understates achievable speed.

**Fix.** Simple on-screen calculator available in numeric and data sections, plus a note in
the Playbook that reaching for it on a three-step problem is correct and on a percentage
estimate is usually slower.

### 6. Zero coverage of business judgment / situational modules

**Evidence.** The briefing slide notes modules may change. Multiple sources report Bain's
TestGorilla sometimes includes business-judgment and situational-judgment blocks.

**Why this matters.** This is uninsured tail risk. If a judgment module appears, he meets it
cold, and it is a format where a little familiarity converts directly into points because the
scoring rewards balanced reasoning over a single right answer.

**Fix.** ~20 items covering a strategy trade-off, an operations prioritisation, a resource
conflict, and a risk call.

### 7. Critical Thinking stimuli are materially shorter than the real thing

**Evidence.** CT prompt length: median 30 words, maximum 48.

**Why this matters.** Watson-Glaser and GMAT-style critical reasoning stimuli typically run
60–120 words. Argument structure is far easier to see in 30 words than in 100; much of the
real difficulty is holding a longer argument in working memory while evaluating options. The
bank systematically under-trains that load.

**Fix.** Lengthen roughly a third of CT items to 70–110 words, adding the qualifying clauses
and secondary evidence that real stimuli contain.

### 8. Type mix diverges from the published blueprint

**Evidence.**

- Critical Thinking: `weaken 14% · inference 13% · flaw 12% · strengthen 10% · assumption 10% ·
  arrangement 10% · paradox 8% · syllogism 8% · argument-strength 8% · evaluate 7%`
- Working with Data: `table 69% · statistics 16% · validation 15%`
- Numerical: `multistep 18%` is the single largest type

**Why this matters.** TestGorilla names four CT types: inferences, cause-and-effect,
arrangements, logical conclusions. **Arrangements and syllogisms are the two most distinctive
formats and together are only 18%**, while flaw + assumption + paradox + evaluate — adjacent
GMAT categories not named in the blueprint — take 37%. Working with Data is weighted toward
table arithmetic when the blueprint gives equal billing to data-handling concepts and to
graphs. And in Numerical, `multistep` cannot plausibly be the largest real category at 50
seconds per question.

**Fix.** Raise arrangements and syllogisms to ~15% each of CT; raise statistics and validation
toward a third each of Working with Data once charts are added; reduce multistep to ~10% of
Numerical and reallocate to computation, estimation and series.

---

## P2 — Pedagogy

### 9. A mistake is retired after a single correct answer

**Evidence.** `recordAnswer` decrements the `wrong` counter on any correct response.
Confirmed: answer wrong, then right, and the item leaves the mistakes pool permanently —
within the same minute.

**Why this matters.** One successful retrieval, immediately after seeing the answer, is
mostly a memory of the last thirty seconds. Durable learning requires *spaced* successful
retrievals. The current rule systematically discharges items at the moment they are most
fragile, and the mistakes pool will read empty while the underlying weakness persists.

**Fix.** Require two correct retrievals **on different days** before retiring. Re-surface
missed items at expanding intervals (1 day, 3 days, 7 days).

### 10. No per-type accuracy tracking — the single biggest efficiency loss

**Evidence.** `stats.byCategory` covers four categories. There is no `byType`.

**Why this matters.** He can be 90% on syllogisms and 40% on arrangements inside the same
"Critical Thinking" number and never see it. With three weeks and finite attention, the
dominant waste is undirected practice. The app already tags every question with a `type` and
already knows which technique teaches it — it simply does not aggregate.

**Fix.** Track accuracy and attempts by `type`. Surface the three weakest on the home screen
with a one-tap drill, and link each to its Playbook topic. This is the highest
value-per-line-of-code change available.

### 11. Time per question is measured, shown once, and thrown away

**Evidence.** Elapsed time is computed in `answerQuestion` for the pace note and never stored.

**Why this matters.** Speed is half the assessment and it is the variable that improves most
visibly with practice. Right now improvement is invisible, which removes the strongest
motivational signal available and hides whether he is on track to finish sections.

**Fix.** Store elapsed per attempt. Show median time by type, trend over the last 7 days, and
a projection: *at your current pace you would finish Critical Thinking with 40 seconds spare*.

### 12. Difficulty is declared by heuristic, not measured

**Evidence.** `d` comes from a type-based default table with hand-written overrides.

**Why this matters.** The target times shown to the learner derive from this. If the estimate
is wrong the pacing guidance is wrong — and difficulty is ultimately a property of *this*
learner, not of the item.

**Fix.** After a few attempts per item, blend observed accuracy and time into the displayed
difficulty and target.

### 13. Difficulty and target time are shown before the question

**Evidence.** The badge renders above the stimulus.

**Why this matters.** This was requested and the pacing value is real, so it should stay. But
it primes: seeing **HARD · 68s** before reading raises anticipatory load and licenses
over-spending on items that might have been quick. The real test shows nothing.

**Fix.** Keep as default, add a toggle to reveal difficulty only after answering, and hide the
difficulty label (not the timer) in exam modes.

### 14. Section practice is blocked practice

**Evidence.** "Practice by section" serves 10 consecutive items of one category.

**Why this matters.** Blocked practice feels productive and produces worse transfer than
interleaved practice, because the learner stops having to *identify* which technique applies —
the hardest step on the real test, where types arrive unlabelled and mixed. Quick Question
interleaves correctly; section practice trains a crutch.

**Fix.** Make interleaved mixed sets the recommended default; reframe section practice as
diagnostic and say so in the UI.

### 15. Explanations bury the rule in prose

**Evidence.** Explanations run 300–400 characters of continuous text.

**Why this matters.** The reasoning quality is high, but the *retrievable unit* — the one-line
rule to carry into the next question — has to be reconstructed each time. Under review
conditions that reconstruction usually does not happen.

**Fix.** Add a bold one-line takeaway before the prose: **"Percent change always divides by
the OLD value."** Same content, retrievable in two seconds.

---

## P3 — Robustness and environment

### 16. Twenty-one days of progress live in one localStorage key with no backup

Clearing site data, switching browser, or iOS evicting storage from an infrequently-opened
PWA erases everything irrecoverably. **Fix:** export/import JSON, and prompt for a backup once
a week.

### 17. No dark mode

Study happens in spare moments, including at night. A full-screen white app at 23:00 is a real
adherence cost, and adherence is the binding constraint on a 21-day plan.

### 18. The listening gap is documented in a file he will not open

The English module includes listening comprehension; the app cannot cover it. That fact
currently lives in `RESEARCH.md`. **Fix:** surface it on the home screen or in the English
section as a standing reminder with a concrete instruction.

### 19. Colour: accessible, but not a rehearsal of the real environment

Contrast passes everywhere. The issue is different: the app reads as a *study product* —
maroon-to-red gradient header, rounded cards, emoji, generous spacing. TestGorilla renders as
a plain, dense, mostly white form. Encoding specificity predicts a small but real cost when
the retrieval environment differs from the practice environment, and it is free to remove.

**Fix.** Give exam modes a neutral **test skin**: white background, no gradient, no emoji,
single column, plain monospaced timer, muted grey chrome. Keep the warm palette for study
modes, where it aids adherence.

---

## Recommended order of work

Ranked by score impact per unit of effort:

1. **#10** per-type accuracy tracking — turns undirected practice into targeted practice
2. **#1** fix numeric answer positions — stops active harm
3. **#2** strict exam mode — rehearses the state that decides the score
4. **#9** spaced retirement of mistakes — makes the mistakes pool honest
5. **#3** add charts — closes the largest content gap
6. **#15** one-line takeaways — cheap, compounds across all 337 items
7. **#4** full mock, **#5** calculator, **#19** test skin — realism cluster, do together
8. **#16** export/import — insurance
9. Everything else

Items 1–4 are achievable well inside the remaining window and address the difference between
an app that looks like preparation and one that produces score movement.

---

# Implementation record — 13 Aug 2026

| # | Finding | Status | Verification |
|---|---|---|---|
| 1 | Numeric answers biased to middle positions | **Fixed** | 44 distractor sets rewritten keeping the pedagogically key distractor. Distribution 9/44/45/3% → **26/27/21/27%**; χ² vs uniform = 1.6 against a 7.81 threshold, i.e. indistinguishable from chance |
| 2 | Feedback never withheld | **Fixed** | Strict exam mode: no feedback, no pause, full review screen at the end. Verified it advances without rendering an explanation and refuses to pause |
| 3 | No charts | **Fixed** | 16 SVG chart questions (grouped bars, lines, pie, stacked, truncated axis). Bar heights verified exactly proportional; truncated-axis chart verified to produce a 4.0× visual ratio for a real 5.9% gap |
| 4 | No full mock | **Fixed** | Four sections chained, 60 questions, no pause between. Verified rollover keeps the clock running and reports per-section results |
| 5 | No calculator | **Fixed** | On-screen calculator in numeric and data sections; arithmetic and divide-by-zero verified |
| 6 | No business-judgment coverage | **Fixed** | 16 scenarios in a separate optional bank, deliberately excluded from mixed practice and the mock so it cannot distort the simulation |
| 7 | CT stimuli too short | **Open** | Median still 30 words against a real 60–120 |
| 8 | Type mix diverges from blueprint | **Open** | Arrangements + syllogisms still 18% of CT |
| 9 | Mistakes retired after one correct answer | **Fixed** | Now requires two correct recalls on **different days**; a later miss resets mastery. All four state transitions verified |
| 10 | No per-type accuracy tracking | **Fixed** | `stats.byType` with accuracy and average time; three weakest types surface on the home screen with one-tap drilling |
| 11 | Time per question discarded | **Fixed** | Stored per attempt; median per question shown in feedback, average per type on the home screen |
| 12 | Difficulty declared, not measured | **Partial** | Time and accuracy are now captured per type and per question; the displayed difficulty is not yet recalibrated from them |
| 13 | Difficulty shown before the question | **Fixed** | Settings toggle for before/after; hidden entirely in exam modes |
| 14 | Blocked practice by section | **Fixed** | Mixed practice is now the primary action; section practice relabelled as diagnostic with a note on why interleaving transfers better |
| 15 | Explanations bury the rule | **Fixed** | One-line takeaway on all 369 questions, median 70 characters, rendered above the explanation |
| 16 | No backup | **Fixed** | JSON export/import; round-trip verified |
| 17 | No dark mode | **Fixed** | Auto/light/dark, full token palette |
| 18 | Listening gap hidden in a file | **Fixed** | Standing note on the home screen |
| 19 | Study-app look versus test environment | **Fixed** | Neutral white "exam skin" applied in exam modes: no gradient, no emoji, monospaced timer |

Bank grew from 337 to **369 questions**. Spanish coverage is complete: 369/369 explanations and
369/369 takeaways, with the guide at full structural parity across both languages.
