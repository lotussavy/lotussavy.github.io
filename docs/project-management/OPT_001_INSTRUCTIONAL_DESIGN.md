# OPT-001 Instructional Design — What Is Optimization?

**Work item:** BL-006A (instructional design only)  
**Date:** 2026-11-11  
**Curriculum:** Level 1 — Foundations  
**Status:** Editorial design complete as a proposed lesson plan; **not** a drafted, peer-reviewed, or published lesson.  
**Planned lesson ID:** OPT-001  
**Planned public permalink:** `/optimization/learn/foundations/what-is-optimization/`  
**Prerequisites:** None  
**Planned reading-and-interaction time:** 12–15 minutes (to be timed during usability review)  
**Lab:** Existing LAB-A profit playground, currently at `/optimization/labs/profit-preview/` (development preview).  
**Success criterion:** Learner identifies a choice, its objective, and feasibility conditions; predicts a plausible improving change; and explains why a demonstrated globally optimal result is supported by evidence **for the specified model only**.

## 1. Intended audience and learning promise

**Primary:** Curious readers, undergraduate students, early graduate students, and researchers new to optimization. Assume familiarity with counting and basic arithmetic, **not** calculus, coding, solver terminology, or operations research.

**Secondary:** Technical readers who want a crisp link between simple intuition and formal modeling. Offer optional deeper explanations instead of introducing MILP, TSP, duality, and algorithmic guarantees in the first two screens.

**One-sentence lesson promise:** By the end, the reader can tell what the decision is, what must be satisfied, what is being improved, and what evidence is required to call a decision optimal.

**Core misconception to address:** "The largest fleet, revenue, or number of served requests must also produce the largest profit." The model shows why this conclusion is not generally valid.

## 2. Measurable learning objectives and assessment alignment

| Objective | Observable learner behavior | Evidence in lesson |
|---|---|---|
| LO1 — Identify the decision | State that `n`, the number of vehicles, is the decision variable, while profit is an outcome | Driving question + question 1 |
| LO2 — Separate objective and constraint | State that profit is maximized and that `n` must be an integer between 0 and 12 | Model labeling + question 2 |
| LO3 — Explore trade-offs | Compare two fleet sizes using displayed revenue, cost and profit, rather than choosing solely on revenue | Prediction prompt + interaction |
| LO4 — Distinguish feasible from optimal | Explain why `n=4` is feasible but `n=8` is optimal for the toy model | Debrief + question 3 |
| LO5 — Explain evidence of global optimality | Describe the finite exhaustive search and, optionally, the quadratic identity; limit conclusion to this model | Proof panel + question 4 |

**Minimum mastery gate:** At least 3 of 4 end-of-lesson checks correct, with LO1/LO2 and LO4 represented. Use formative feedback with explanations; don't collect personal learner data.

## 3. Instructional trajectory and timing

We will use **concrete decision → prediction → experiment → interpretation → formalization → proof → transfer**, matching the blueprint's Learn → Visualize → Experiment → Understand → Implement → Research ethos.

| Sequence | Reading section from article contract | Time budget | Instructional content and interaction |
|---|---|---:|---|
| 0 | Metadata/learning objectives | 0:30 | ID, foundations, beginner level, duration, no prerequisites, optional "Why should I care?" |
| 1 | In one minute | 1:00 | Plain-language 100–160-word introduction: choose among allowed options to improve a clearly stated outcome |
| 2 | Driving question | 1:00 | Fleet operator decides how many vehicles to deploy; distinguish serving demand, revenue, cost and profit without claiming real calibration |
| 3 | Interactive intuition | 3:00 | **Before** interacting, predict: "Would more vehicles always increase profit?" Choose n=4, 8, 10, 12 and compare; use existing LAB-A |
| 4 | What you observed | 1:30 | Profit initially improves, peaks, then declines; revenue maximizes at n=10 but profit at n=8; no causal generalization beyond model |
| 5 | Formal definition | 1:00 | Define decision variable `n`, objective `P(n)`, domain/integrality constraint `n∈{0,…,12}`, feasibility and optimality |
| 6 | Mathematical formulation | 1:00 | Introduce `R(n)=100n−5n²`, `C(n)=20n+100`, `P(n)=R(n)−C(n)` with explicit unit/assumption notes |
| 7 | Solution approach | 1:15 | Evaluate all 13 integers; certify `n*=8`; optional expandable identity `P(n)=220−5(n−8)²` |
| 8 | Python implementation | 1:00 | Short versioned example using a for loop over `range(13)`; independently verify planned code before publication |
| 9 | Failure modes | 0:45 | False optimum from checking only a few points; conflating revenue/profit; ignoring integrality or synthetic assumptions |
| 10 | Knowledge check | 1:15 | Four questions with immediate explanatory feedback; keyboard-accessible when implemented |
| 11 | Recap + next step | 0:45 | Three compact takeaways, model limitations, references, planned OPT-002 link only after page exists |

**Total:** approximately 13 minutes (target 12–15; actual time to be measured). This is a lesson plan, not written manuscript text.

## 4. Concept map and explanations

```text
Real-world decision
    |
    v
Choices we control: n (integer fleet size 0…12)
    |                      |
    |                      +--> Feasible set = allowed choices
    v
Quantities we measure: revenue R(n), cost C(n)
    |
    v
Objective P(n) = R(n) - C(n)
    |
    v
Compare feasible candidates --> best objective value
    |
    v
Proof or exhaustive check --> GLOBAL OPTIMUM FOR THIS FIXED MODEL
```

**Terminology precision:**
- **Decision variable**: number of vehicles `n`; not the profit number itself.
- **Parameter**: fixed coefficients in this synthetic example, which are **not learned from operational data**.
- **Objective**: maximizing total profit for one stylized decision.
- **Constraints/domain**: integer nonnegative fleet size bounded above by 12. Do not claim the model includes vehicle assignment, battery energy, charger capacity, time, demand, or service constraints.
- **Feasible**: belongs to the stated domain; even `n=0` is feasible mathematically (but yields a loss).
- **Optimal**: feasible choice with the greatest objective among all feasible choices.
- **Algorithm vs model**: the expression defines the mathematical problem; exhaustive enumeration is the method used to solve this finite instance. The interactive slider itself is not the solver.
- **Global vs local**: do not teach full local-optimum nuances in this first lesson; note that "global" means the best among **all** feasible candidates, and defer further nuances to OPT-004.

## 5. LAB-A activity storyboard (reuse, do not reimplement)

**Lab dependency:** `_includes/optimization/labs/profit.html`, `assets/js/optimization/profit-model.js`, `assets/js/optimization/profit-ui.js`. Display all computed figures directly from the existing model. The lesson may embed the reusable include; no new math should be copied into lesson-specific scripts.

1. **Before reveal — predict:** "If we increase the fleet, will profit always rise?" Make the choice visible before clicking Find optimum. User chooses from "Yes / No / Not sure" as an *instructional prompt*; implementation of any answer-selection control belongs to BL-006B.
2. **Baseline n=4:** Revenue 320, cost 180, profit **140** illustrative USD. Ask: "Is this choice allowed?" (Yes.)
3. **Try n=8:** Revenue 480, cost 260, profit **220**. Ask: "What changed, and why is profit higher?"
4. **Try n=10:** Revenue **500** (higher than at n=8), cost 300, profit **200** (lower than 220). This is the critical counterexample to "maximum revenue = maximum profit."
5. **Try n=12:** Revenue 480, cost 340, profit 140. Ask learners to describe the downturn.
6. **Click Find optimum:** Shows n=8/P=220 and explains all 13 integers were checked. Do not claim that the learner's four selected probes alone constitute proof.
7. **Reset:** Return to n=4 and invite readers to predict a different outcome.

**Data and graph expectations:** Integer x-axis 0–12, profit in illustrative USD; shaded selection or selected-point marker; chart must have text alternative and synchronize with numeric outputs. No results from fictional demand datasets.

## 6. Mathematical progression and correctness gate

```text
Allowed n: {0,1,2,...,12}
R(n) = 100n - 5n²
C(n) = 20n + 100
P(n) = R(n) - C(n) = 80n - 5n² - 100
Goal: maximize P(n) for allowed integer n
```

**Selected reference values:**

| n | R(n) | C(n) | P(n) |
|---:|---:|---:|---:|
| 0 | 0 | 100 | -100 |
| 4 | 320 | 180 | 140 |
| 8 | 480 | 260 | **220** |
| 10 | **500** | 300 | 200 |
| 12 | 480 | 340 | 140 |

`R(n)` reaches its maximum at n=10 on 0…12; `P(n)` at n=8. The result follows from (a) exhaustive evaluation of 13 decisions and (b) the identity `P(n)=220−5(n−8)²≤220`, with equality only at n=8. These are independent ways to justify this *specific* result. Do not imply optimality for a real transportation system.

**Assumption ledger:** Synthetic polynomial revenue with diminishing returns, linear operating costs plus fixed cost, identical stylized fleet units, no demand uncertainties or resource constraints other than range/integrality, fixed horizon unspecified. The narrative should say "illustrative accounting units/dollars" and must not conflate the model with an eVTOL operational optimizer.

## 7. Planned knowledge checks, expected answers, and explanatory feedback

**Q1 (LO1):** Which quantity is the decision variable? (A) Revenue, (B) Fleet size `n`, (C) Profit. **Answer B.** Explanatory feedback: `n` is chosen; revenue/profit result from that choice.

**Q2 (LO2):** Is `n=7.5` a feasible solution? (A) Yes, (B) No. **Answer B.** The feasible set permits integers only; the model's integrality is not optional.

**Q3 (LO4):** Why is `n=4` not optimal even though it is feasible? **Expected:** Another feasible choice, n=8, yields $220 rather than $140. Do not accept "it is too small" without an objective comparison.

**Q4 (LO5):** What justifies calling `n=8` a *global* optimum? (A) Slider looks highest, (B) all 13 feasible integers were checked (and algebraic upper bound confirms), (C) it has the largest revenue. **Answer B.** "Looks highest" is not a proof and maximal revenue actually occurs at n=10.

**Optional transfer prompt:** In a different business example, what new constraint could shrink the feasible set? E.g., limited budget or available drivers. Discuss qualitatively—do not pretend these constraints exist in LAB-A.

Questions will be accessible and offer explanations; no quiz widget should be implemented in BL-006A.

## 8. Implementation blueprint for BL-006B (not implemented today)

**Proposed future source path:** `optimization/learn/foundations/what-is-optimization.md`  
**Status on creation:** `draft`, `robots: noindex,nofollow`, `sitemap: false`.  
**Layout:** `optimization-lesson`; populate ID, level, objectives, estimated minutes, prerequisite list, concepts, review flags, citation/source disclosures.  
**Interactive include:** `{% include optimization/labs/profit.html %}` in "Interactive intuition". Ensure the Jekyll include renders safely and scripts only load as needed.  
**Lesson body:** The 11 sections specified in `LESSON_AUTHORING.md`, including Python implementation (not code duplication in a browser script), failure modes, four knowledge checks, and recap.  
**Planned next lesson:** OPT-002 "Decisions, Objectives, and Constraints"; do not link until created and reviewed.  
**Publishing gate:** Only after mathematical/content review, test evidence, valid rendered route, mobile, keyboard, screen-reader checks, references/SEO and actual release decision.

## 9. Editorial and instructional quality controls

- **Clear language:** Every equation immediately follows its plain-language interpretation; use one symbol for one concept.
- **Progressive disclosure:** Elementary explanation first; detailed proof and code in expandable or separate lower sections.
- **Accessibility:** Label all inputs, preserve keyboard operation, offer chart-independent text, avoid color-only status, ensure focus visible and appropriate contrast.
- **Prediction before reveal:** The objective is learning, not merely showing an optimum.
- **Status honesty:** "feasible," "best tested so far," and "globally optimal" are not interchangeable; global claim must be tied to enumeration/analytic certificate.
- **Scientific honesty:** No borrowed empirical data, fabricated source claims, real fleet cost claims, or untested executable example.
- **Assessment alignment:** Each LO connects to interaction and check; explanations should remediate common misconceptions.
- **Reader load:** Avoid introducing TSP, VRP, battery state of charge, mixed-integer algorithms or Gurobi in first lesson; place those as future links in the broader curriculum.

## 10. Source and citation plan (for BL-006B research verification)

**Already version-controlled:**
- `docs/project-management/MASTER_BLUEPRINT.md` — curriculum, 12-section specification.
- `docs/project-management/LESSON_AUTHORING.md` — Jekyll front-matter and editorial contract.
- `docs/project-management/LAB_A_MODEL.md` — mathematical assumptions and exact verification.
- `assets/js/optimization/profit-model.js` and `scripts/optimization/profit-model.test.cjs` — reference computation and reproducibility.
- `docs/project-management/LAB_A_UI.md` — UI status and limitations.

**External authorities to consult when drafting and publishing:** standard introductory optimization textbook material (e.g. Bertsimas & Tsitsiklis, *Introduction to Linear Optimization*, 1997, or an appropriate open course resource), and original solver/model documentation only when necessary for claimed concepts. Bibliographic editions, URLs and applicability must be verified at writing time. No external paper claim is treated as checked by this design document.

**Attribution:** Own synthetic LAB-A data/model and openly describe its assumptions; do not give it fictitious field-study citations.

## 11. Definition of Done — BL-006A only

- [x] Stable lesson ID, audience, prerequisites, estimated duration and future path documented.
- [x] At least five measurable learning objectives with assessment alignment.
- [x] Ordered lesson storyboard adheres to existing article specification.
- [x] Accurate LAB-A prediction/experimentation storyboard and exact numerical anchors.
- [x] Four planned knowledge checks with correct answers/explanations.
- [x] Explicit assumptions, limitations and precise "global optimum" scope.
- [x] BL-006B implementation contract with draft/noindex and release gates.
- [x] Citation/references verification plan and accessibility criteria.
- [ ] Full lesson article authored — **out of scope**.
- [ ] Interactive quiz or new lab interface built — **out of scope**.
- [ ] Lesson Jekyll build, browser QA, review and publication — **out of scope**.

**Next daily milestone:** BL-006B, writing a complete *draft* lesson with the verified LAB-A include and scheduled QA; only after a distinct subsequent session and release review may it become a public published lesson.
