# Optimization Lab — Project Blueprint

**Version:** 1.0  
**Baseline date:** November 11, 2026  
**Project type:** Interactive educational publishing platform  
**Primary home:** Existing academic website (`lotussavy.github.io`), under a dedicated `/optimization/` section (proposed path; confirm against repository routes)  
**Status:** Proposed baseline — implementation has not yet begun under this blueprint  
**Working motto:** *Learn → Visualize → Experiment → Understand → Implement → Research.*

> **Document purpose.** This is the single reference for product scope, curriculum, interfaces, technology, quality requirements, milestones, and decisions. Update the version and decision log whenever a material change is approved. An item is not “done” merely because code or prose exists: the defined acceptance criteria must pass.

## 1. Executive charter

### 1.1 Problem and opportunity

Optimization learners often must translate between informal explanations, mathematical notation, code, solver documentation, and academic papers. This creates unnecessary cognitive overhead. The project will provide a connected, self-paced path from basic decisions and constraints to exact methods, heuristics, routing, scheduling, and research-level optimization.

### 1.2 Mission

Teach optimization with **correct mathematics, accessible language, reproducible experiments, and meaningful interaction**. Every core concept should answer: What problem does this solve? What changes when a parameter changes? How do we know a solution is feasible or optimal? How can a learner implement and verify it?

### 1.3 Target audiences

| Persona | Entry point | Needs | Success indicator |
|---|---|---|---|
| Beginner student | Start Learning | Intuitive examples, minimal prerequisites | Can identify variables, objective, constraints |
| CS/engineering student | Topic and algorithm paths | Math, animations, code | Can implement and test a small instance |
| Practitioner | Concept library / playgrounds | Quick practical comparison | Can choose an appropriate formulation or method |
| Graduate student/researcher | Advanced tracks | Assumptions, formulations, literature, benchmarks | Can reproduce and critique an experiment |

### 1.4 Scope boundaries

**In scope:** tutorials, interactive client-side examples, concept dictionary, interactive prerequisite map, code/notebook downloads, methodological comparisons, reproducible toy instances, accessible navigation, and eventually research-oriented demos.

**Out of scope for MVP:** user accounts, gamified rankings, online multi-user collaboration, arbitrary cloud optimization jobs, production-scale eVTOL decision support, AI-generated claims without validation, and proprietary/unreleased research results.

### 1.5 Product principles

1. **Correct before attractive:** visuals and animations must accurately reflect model assumptions.
2. **Interaction must teach:** every control has a clearly explained cause-and-effect relationship.
3. **Progressive disclosure:** intuition first, then formulation, then algorithm, then implementation.
4. **No false optimality:** distinguish optimum, best-known feasible, bound, heuristic output, and unverified output.
5. **Reproducibility by default:** state data, solver/version, tolerances, and execution environment where relevant.
6. **Accessible and fast:** keyboard navigation, mobile layout, readable contrast, reduced-motion support.
7. **No unnecessary infrastructure:** static-first; add backend only when justified by a tested use case.
8. **Stable educational URLs:** maintain redirects or aliases if routes change.

## 2. Outcomes and measurable success

**North-star outcome:** a learner can move from an intuitive decision to a correctly interpreted optimization model, and verify a small solution without leaving the lesson.

| Dimension | Measure | Initial target (planning assumption, revise after baseline) |
|---|---|---|
| Learning | Correct response to two concept checks per lesson | ≥70% among those attempting both |
| Engagement | Visitors who interact with at least one purposeful control | ≥35% of lesson visits |
| Completion | Visitors who reach recap or finish a lesson | ≥40% on introductory lessons |
| Reliability | Demonstrations passing automated correctness tests | 100% before publication |
| Accessibility | Critical keyboard/contrast issues | 0 at release |
| Performance | Core lesson usable on ordinary mobile connection | Target LCP ≤2.5s at 75th percentile, measure after launch |
| Publishing | Fully vetted articles at first public release | 4 foundational lessons + 2 interactive labs |

**Interpretation:** initial engagement thresholds are hypotheses, not observed results; do not claim them as achieved. Collect analytics with privacy-conscious, consent-aware configuration where required.

## 3. Information architecture and navigation

### 3.1 Sitemap

```text
/optimization/                         Optimization Lab landing
/optimization/start/                   Beginner onboarding / roadmap
/optimization/paths/                   Learning paths overview
/optimization/paths/foundations/       Level 1
/optimization/paths/modeling/          Level 2
/optimization/paths/algorithms/        Level 3
/optimization/paths/routing/           Level 4
/optimization/paths/solvers/           Level 5
/optimization/paths/research/          Level 6
/optimization/lessons/{slug}/          Canonical lesson pages
/optimization/labs/                    Interactive demos directory
/optimization/labs/{slug}/             Standalone lab with assumptions
/optimization/concepts/                Searchable concept glossary
/optimization/concepts/{slug}/         Definition + linked examples
/optimization/map/                     Prerequisite/concept graph
/optimization/code/                    Notebooks, data, code index
/optimization/about/                   Editorial method, corrections
```

**Routing rule:** paths are proposed, not claims about the current site framework. Before development, inspect the actual repository to determine routing conventions, framework, build process, and existing CSS patterns.

### 3.2 User journeys

- **Beginner:** Landing → Start → Lesson 01 → experiment → checkpoint → next lesson.
- **Researcher:** Search “branch-and-cut” → 90-second summary → prerequisite map → animation → formulation → references.
- **Practitioner:** Labs → parameter panel → comparison → explanation of trade-off → download example.
- **Publication visitor:** Research page → linked advanced lab → simplified model, explicit departures from the paper, reproducibility note.

### 3.3 Universal navigation elements

Persistent search; level selector; next/previous lesson; prerequisite chips; estimated time; difficulty; last-reviewed date; glossary popovers; accessible reset; copy citation/permalink; report correction link. Avoid distracting autoplay and excessively elaborate hero animations.

## 4. Curriculum map — canonical sequence

### Level 1: Foundations — understand a decision

**Goal:** recognize optimization as selecting a feasible decision to improve an objective.

| Lesson ID | Working title | Required prior knowledge | Demonstration | Exit criterion |
|---|---|---|---|---|
| OPT-001 | What Is Optimization? | None | Profit vs fleet size | Distinguish a decision from its outcome |
| OPT-002 | Decisions, Objectives, and Constraints | OPT-001 | Model builder | Form a simple maximize/minimize problem |
| OPT-003 | Feasibility and Trade-offs | OPT-002 | Constraint toggles | Identify feasible/infeasible choices |
| OPT-004 | What Does “Optimal” Mean? | OPT-003 | Candidate comparison | Distinguish feasible, local, global, best-known |

### Level 2: Modeling — translate reality into mathematics

| Lesson ID | Working title | Demonstration | Exit criterion |
|---|---|---|---|
| OPT-005 | Variables and Domains | Continuous vs integer selector | Explain binary, integer, continuous variables |
| OPT-006 | Linear Programs and Geometry | 2D feasible-region lab | Interpret binding constraints and corner points |
| OPT-007 | Integer and Mixed-Integer Models | LP relaxation vs integer solution | Identify integrality requirements |
| OPT-008 | Model Assumptions and Validation | Toggle assumptions / broken model | Detect inconsistency and unrealistic results |

### Level 3: Algorithms — how solutions are found

| Lesson ID | Working title | Demonstration | Exit criterion |
|---|---|---|---|
| OPT-009 | Enumeration, Search, and Complexity | Candidate-count explorer | Explain combinatorial growth |
| OPT-010 | LP Relaxations and Bounds | Relaxation comparison | Interpret upper/lower bounds by objective sense |
| OPT-011 | Branch-and-Bound | Stepwise tree | Explain branching, incumbent, pruning |
| OPT-012 | Branch-and-Cut | Cuts and tree | Explain why valid inequalities help |
| OPT-013 | Heuristics vs Exact Methods | Solution/runtimes | Distinguish evidence of optimality |
| OPT-014 | Optimality Gap and Solver Logs | Annotated log explorer | Read bound, incumbent, time limit, gap |

### Level 4: Graphs, routing, and scheduling

| Lesson ID | Working title | Demonstration | Exit criterion |
|---|---|---|---|
| OPT-015 | Graphs and Shortest Paths | Path finder | Distinguish a shortest path from a tour |
| OPT-016 | TSP and Subtour Elimination | Draggable route nodes | Specify a valid single tour |
| OPT-017 | Multiple TSP and VRP | Multi-vehicle routes | Explain vehicles, depot, capacities |
| OPT-018 | Time Windows and Scheduling | Timeline controls | Enforce temporal feasibility |
| OPT-019 | Prize-Collecting Routing | Customer rewards | Explain visit-vs-skip trade-offs |
| OPT-020 | Energy-Constrained Routing | Battery feasibility | Identify energy/reserve constraints |

### Level 5: Implementation and evaluation

| Lesson ID | Working title | Demonstration | Exit criterion |
|---|---|---|---|
| OPT-021 | From Equations to Python | Annotated model | Map variables/constraints into code |
| OPT-022 | Solver Ecosystem: Gurobi, CPLEX, OR-Tools | Formulation-method-solver diagram | Distinguish modeling, algorithm, solver |
| OPT-023 | Reproducible Experiments | Seed and result comparison | State environment, data, reproducibility limits |
| OPT-024 | Sensitivity and Benchmarking | Parameter sweep | Interpret sensitivity without overgeneralizing |

### Level 6: Research applications

| Lesson ID | Working title | Demonstration | Exit criterion |
|---|---|---|---|
| OPT-025 | Rolling-Horizon Optimization | Moving planning horizon | Understand re-optimization decisions |
| OPT-026 | Multiple Objectives and Trade-offs | Pareto frontier | Interpret nondominated decisions |
| OPT-027 | Routing Under Uncertainty | Scenario viewer | Distinguish nominal and robust/scenario assumptions |
| OPT-028 | eVTOL Dispatch Case Study | Toy fleet/vertiport simulation | Explain feasibility, energy, service and objective trade-offs |
| OPT-029 | PCMTSP: Model Anatomy | Constraint-by-constraint explanation | Trace assumptions to formulation |
| OPT-030 | Research Methods and Responsible Comparisons | Baseline comparison panel | Separate problem definition, method, and evaluation |

**Prerequisite policy:** a lesson may link backward to foundational concepts; advanced lessons must never require a reader to guess a term. Article IDs are stable even if titles change.

## 5. Initial publication package (MVP)

**Release goal:** a coherent beginner experience, not a disconnected list of articles.

**P0 publication set:** OPT-001 to OPT-004, Lab A (profit optimization), Lab B (feasibility and constraints), glossary minimum 20 terms, landing page, start page, basic concept relationships, editorial corrections page.

**P1 expansion:** OPT-005 to OPT-008, 2D LP playground, integer-vs-continuous example.

**P2 expansion:** OPT-009 to OPT-014, branch-and-bound/cut, solver-log interpretation.

**P3 expansion:** routing, prize collecting, advanced eVTOL/PCMTSP material.

**Editorial constraint:** do not publish a misleading placeholder lab as if it were complete. If incomplete, mark it “planned” or do not link publicly.

## 6. Article specification — reusable template

Each lesson must contain, in this order:

1. **Metadata:** ID, title, level, prerequisites, estimated time, reviewed date, license, tags.
2. **In one minute:** 100–160-word plain-language explanation and a concrete objective.
3. **Driving question:** one motivating real-world decision.
4. **Interactive intuition:** a small experiment with a prediction prompt.
5. **What you observed:** explain the actual mechanism, not just the chart.
6. **Formal definition:** precise terminology, notation, domains and assumptions.
7. **Mathematical formulation:** each term annotated; constraints grouped by function.
8. **Solution approach:** identify exact/heuristic/illustrative method and guarantee.
9. **Python implementation:** executable, versioned, commented; link to notebook where needed.
10. **Failure modes:** infeasibility, unrealistic assumptions, numerical issues, or edge cases.
11. **Knowledge check:** at least two questions with explanations.
12. **Recap + next step:** key distinctions, prerequisite/next links, citations, dataset/source notes.

### 6.1 Suggested article metadata schema

```yaml
id: OPT-001
slug: what-is-optimization
level: foundations
status: draft                # proposed | draft | reviewed | published
prerequisites: []
learning_objectives:
  - Distinguish decision variable, objective, and constraint
estimated_minutes: 12
labs: [profit-playground]
concepts: [optimization, decision-variable, objective-function]
reviewed_on: null
math_reviewed: false
accessibility_reviewed: false
code_verified: false
```

### 6.2 Citation and content policy

Cite original research where relevant; prefer authoritative textbooks and primary documentation for fundamental methods. Record publication dates and software versions. Do not reproduce paywalled figures or proprietary code. Distinguish educational assumptions from empirical research results, and never present fictional data as operational evidence.

## 7. Interactive lab specification and contracts

### 7.1 Standard lab layout

**Header:** question, learning outcome, difficulty, estimated interaction time.  
**Controls:** relevant parameters with units, min/max, sensible defaults, validation and Reset.  
**Canvas:** graph, feasible region, algorithm tree, timeline, or comparable visualization.  
**Results:** objective value, feasibility, status, method, bounds/gap when applicable.  
**Interpretation:** plain-English explanation of *why* results changed.  
**Details:** precise model assumptions, pseudocode or formulation, data download, reproducibility notes.

### 7.2 Minimum interaction behavior

- Changing a parameter recomputes results or clearly indicates when recalculation is needed.
- No control may suggest a result changed when only the graphic changed.
- Infeasible, unbounded, timed-out, numerical-error, and not-run states must be shown honestly.
- Present the comparison against a baseline when it improves reasoning.
- Play/Pause/Step/Reset should be provided for algorithm animations; respect reduced motion.
- State units, ranges, precision, default values, and any approximation.
- When showing an “optimal” label, identify supporting exact procedure/certificate and problem scope.

### 7.3 Initial lab registry

| Lab ID | Name | Key inputs | Outputs | Verification |
|---|---|---|---|---|
| LAB-A | Profit playground | Integer vehicles n ∈ [0,12] | Revenue, cost, profit, best n | Exhaustively check all 13 choices |
| LAB-B | Feasibility explorer | Two linear inequalities and candidate point | Feasible flag, violations | Substitute values into each inequality |
| LAB-C | LP region explorer | 2D constraints and objective coefficients | Polygon, optimum | Independent LP solver cross-check |
| LAB-D | Branch-and-bound tree | Small integer model | Nodes, bounds, incumbent, pruning reason | Compare optimal value to enumeration/solver |
| LAB-E | Route builder | Small city set, distance model | Tour, cost, best verified tour | Permutation enumeration for tiny cases |
| LAB-F | Multiple-vehicle comparison | Depot, customers, fleet, capacity | Routes and objective | Validate visit, depot, capacity rules |
| LAB-G | Prize-collecting tour | Prizes, travel cost, optional visits | Visited set, reward, cost, objective | Tiny-instance exhaustive verification |
| LAB-H | eVTOL scheduling toy | Fleet, demand, energy, charging, horizon | Assignments, battery trajectory, served demand | Independent feasibility checks for every resource |

### 7.4 Important mathematical safeguards

**Profit toy model:** if n is integer 0–12, revenue R(n)=100n−5n², cost C(n)=20n+100, profit P(n)=80n−5n²−100. The verified maximum is **n=8, P=$220**. The unconstrained continuous vertex is also n=8. Verify all candidate values in automated tests; do not call this a general fleet economics model.

**Branch-and-bound:** for maximization, an LP relaxation may provide an upper bound and an incumbent is a feasible lower bound; roles reverse for minimization. Label the objective direction explicitly.

**TSP:** a shortest path is not a TSP tour; selecting edges with degree constraints alone may produce subtours unless additional constraints/methods enforce connectivity.

**mTSP/VRP/PC routing:** “multiple TSP,” vehicle routing, and prize-collecting routing are related but non-identical formulations; do not equate the type of problem with the algorithm or solver used.

**eVTOL:** a toy demo must not be confused with validated research experiments or operational instructions; battery, charging, dispatch, timing and infrastructure assumptions should be visible and explicit.

## 8. Technical architecture

### 8.1 Architecture decision (provisional)

Use the **existing website repository and its current framework** as the first constraint. Prefer static-generation or static pages hosted through GitHub Pages with browser-executed interaction modules. Only adopt a new framework after checking the current stack and evaluating migration cost.

```text
Author / editor
     |
     v
Markdown or MDX / Quarto authoring (choose after repository audit)
     |
     v
Build pipeline + validation
     |--------------------|
     v                    v
Static lesson pages   Interactive JS modules
     |                    |
     |--------------------|
     v
GitHub Pages / existing site
     |
     v
Reader browser → state → compute/lookup → render → explain
                   |
                optional link to Colab/notebooks for larger models
```

### 8.2 Technology choices and conditions

| Need | Preferred choice | Selection condition |
|---|---|---|
| Hosting | GitHub Pages | Keep existing deployment; no backend needed for core content |
| Writing | Existing Markdown/MDX pipeline; evaluate Quarto | Use whichever integrates without major maintenance burden |
| UI | Existing JS framework (React only if compatible) | Reuse components rather than adding parallel stacks |
| Simple charts | SVG; D3.js when graph manipulation is needed | Avoid heavy dependency for basic graphics |
| Charting | Plotly.js if advanced plots needed | Check bundle size and accessibility |
| Math | KaTeX or MathJax | Match existing site’s math rendering |
| Simple optimization | Deterministic browser calculation / exhaustive small-instance search | State search size limitations |
| Python-based models | Versioned notebooks (Colab/Jupyter) | Link from labs with versioned outputs |
| Solvers | SciPy/OR-Tools; Gurobi/CPLEX for advanced reproducible examples | Respect installation and license constraints |
| Search | Static local search index | No backend necessary for an initial concept dictionary |
| Tests | Unit + property-based + end-to-end + accessibility | Deploy blocked when critical tests fail |

**Explicit non-requirement:** no browser-hosted Gurobi/CPLEX job execution is assumed. If remote computation becomes necessary, write a separate security/cost/operations decision before adopting a backend.

### 8.3 Suggested repository layout (adapt after audit)

```text
optimization/
  pages/                 # landing, start, paths, lab directory
  lessons/               # OPT-001 ... metadata + article body
  labs/                  # each isolated visualization and model
    profit-playground/
      model.*
      ui.*
      fixtures/
      tests/
  concepts/              # glossary entries with stable slugs
  data/                  # small synthetic datasets and metadata
  notebooks/             # verified Python reproductions
  shared/                # controls, math, plots, accessibility
  assets/                # optimized media and diagrams
  references/            # bibliographies, bibliography export
  tests/                 # integration, e2e, accessibility
  docs/                  # decisions, editorial policy, changelog
```

### 8.4 Data and privacy

Default to local, anonymous interaction without account creation or personal data capture. Do not collect student identifiers. If analytics are introduced, document consent, privacy disclosures, data retention, and applicable regional requirements. Avoid logging arbitrary optimization inputs unless necessary and disclosed.

## 9. Visual and user-experience design system

**Design tone:** rigorous, calm, modern, research-oriented, consistent with the existing academic site rather than a separate competing visual identity.

**Layout:** reading column for explanations; a wider, responsive lab canvas when useful; parameter panel collapses below chart on mobile. Use restrained color to encode meaning, not decoration.

**Semantic visual rules:** one consistent representation for feasible/infeasible, incumbent/bound, selected/unselected, and exact/heuristic; pair color with text/shape so meaning survives color-vision limitations.

**Accessibility minimum:** semantic headings, labeled controls, touch targets, keyboard operation, visible focus, screen-reader result summaries, contrast testing, alt text for meaningful images, mathematical notation with adjacent plain-language explanations, reduced-motion option.

**Performance:** load advanced libraries only where used; pre-render explanatory content; compress illustrations; avoid auto-playing animations; test mobile before launch.

## 10. Development workflow and governance

### 10.1 Standard delivery workflow (every feature)

1. Define the learner problem and precise learning objective.
2. Write a small formal model or algorithm specification.
3. Create expected results and boundary-case fixtures independently.
4. Draft the interface and interpretation text.
5. Implement model computations independently of the UI.
6. Connect the UI to verified outputs and state.
7. Test correctness, accessibility, responsiveness, and performance.
8. Perform a human editorial and mathematical review.
9. Publish behind the standard deployment workflow.
10. Record URL, commit/release reference, date, status, and follow-up defects.

### 10.2 Definition of Done (DoD)

A lesson/lab is **DONE** only if all conditions hold:

- [ ] Learning objective and prerequisites defined.
- [ ] Model, notation, assumptions, and edge cases reviewed.
- [ ] Output verified against independent calculation or a trusted solver.
- [ ] No incorrect guarantee of optimality or empirical validity.
- [ ] Controls have labels, ranges, units, reset, and error states.
- [ ] Mobile and keyboard operation tested.
- [ ] Content, citations, and external links reviewed.
- [ ] Automated tests and visual quality checks pass.
- [ ] Canonical URL, metadata, and next/prerequisite links work.
- [ ] Version/review date and changelog entry recorded.

### 10.3 Review responsibilities

For each major lesson, separate **content review** (pedagogy), **mathematical verification**, **technical QA**, and **final editorial sign-off** even if initially performed by the same project owner. For advanced research content, seek an independent domain review when practical.

### 10.4 Change control

Log design choices as ADRs (Architecture Decision Records) with context, alternatives, decision, consequences, status. Maintain a change log with date, section, rationale, and impact on previously published lessons. Do not silently replace validated examples or rewrite published assumptions.

## 11. Roadmap, milestones, and acceptance gates

**Timeline assumption:** illustrative four-week MVP plan, measured from actual project kickoff; not a promise of automatic work or publication.

| Stage | Core work | Deliverable | Exit gate |
|---|---|---|---|
| M0 — Audit and foundation | Inspect repo/framework, existing routes, math, visual styles, hosting | Architecture inventory, final route decision, component plan | No unknown blocking dependencies |
| M1 — Design system | Landing prototype, article template, metadata, glossary structure | Reusable shell and navigation | Mobile/desktop and keyboard smoke tests |
| M2 — First verified lab | OPT-001 + LAB-A | Correct profit demonstration and lesson | Every n in [0,12] passes; content review |
| M3 — Foundation package | OPT-002–004 + LAB-B + ≥20 glossary entries | Coherent beginner path | All prerequisite/next links and tests pass |
| M4 — MVP launch | Search, corrections page, citations, SEO, QA | Public Optimization Lab MVP | DoD for all P0 content, deploy verified |
| M5 — Modeling expansion | OPT-005–008 + LAB-C | LP/MILP learning track | Model/solver cross-check |
| M6 — Algorithms expansion | OPT-009–014 + LAB-D | Algorithm animation track | Correct bounds, pruning, statuses |
| M7 — Routing expansion | OPT-015–020 + LAB-E–G | Routing and prize collection track | Independent routing feasibility checks |
| M8 — Research track | OPT-021–030 + LAB-H | Verified advanced examples | Research claims, limitations and provenance reviewed |

### First 30 working days (suggested allocation)

- **Days 1–5:** M0: audit site and decide exact stack; establish design/component standards.
- **Days 6–10:** M1: homepage and template; baseline accessibility and content model.
- **Days 11–15:** M2: OPT-001 and Lab A with independent test fixtures.
- **Days 16–23:** M3: three additional lessons, Lab B and glossary.
- **Days 24–30:** M4: documentation, SEO, QA, corrections mechanism, publication.

The work can be parallelized selectively, but mathematical verification must precede releasing any simulation as validated.

## 12. Backlog and priority register

| Ticket | Priority | Work item | Dependency | Acceptance evidence |
|---|---|---|---|---|
| BL-001 | P0 | Audit existing repository/framework/build | None | Written architecture inventory |
| BL-002 | P0 | Finalize `/optimization/` routes | BL-001 | Routes build and deploy |
| BL-003 | P0 | Shared lesson metadata and layout | BL-001 | Example page renders correctly |
| BL-004 | P0 | Build LAB-A computational module and tests | None | Exhaustive expected-value test |
| BL-005 | P0 | Add LAB-A controls and explanatory output | BL-003,004 | Accessible interactive QA |
| BL-006 | P0 | Publish OPT-001 draft and mathematical review | BL-005 | Signed review checklist |
| BL-007 | P0 | Publish OPT-002–004 | BL-003 | Four linked reviewed lessons |
| BL-008 | P0 | Build LAB-B | BL-003 | Constraint substitution fixtures |
| BL-009 | P0 | Create 20-item glossary and static search | BL-003 | Search and cross-links work |
| BL-010 | P0 | SEO, accessibility, content, release checklist | BL-006–009 | Passing release report |
| BL-011 | P1 | LP feasible-region explorer | MVP | Solver cross-check and boundary tests |
| BL-012 | P1 | B&B algorithm explorer | OPT-010 | Tree trace independently verified |
| BL-013 | P2 | TSP draggable lab | OPT-015 | Tour validator and exact tiny-instance test |
| BL-014 | P2 | Prize-collecting routing lab | OPT-019 | Independent reward/cost tests |
| BL-015 | P3 | eVTOL dispatch lab | Routing + scheduling tracks | Assumption and resource audit |

**Priorities:** P0 = MVP mandatory, P1 = first expansion, P2 = routing expansion, P3 = research extension.

## 13. Verification matrix

| Check type | Example question | Required evidence |
|---|---|---|
| Unit test | Does profit match the declared equation for every input? | Automated assertions |
| Property test | Can a generated route have a missing city or duplicated assignment? | Feasibility invariants |
| Independent oracle | Does small-instance search agree with the reported optimum? | Brute-force or established solver output |
| Boundary test | What happens with zero vehicles, no feasible routes, or battery at reserve? | Explicit edge-case fixtures |
| UI integration | Do the chart, numeric result and explanation reflect the same state? | Interaction tests |
| Accessibility | Can a keyboard-only reader complete the activity? | Manual + automated checks |
| Responsive | Is the lab usable on narrow mobile screens? | Device viewport QA |
| Reference integrity | Do links, citations and original source attributions resolve? | Link check |
| Performance | Does the page load and respond acceptably? | Measured audit |
| Regression | Did a UI redesign change mathematical results? | Versioned test suite |

### Model test examples for the first lab

- n=0 → revenue 0, cost 100, profit −100.
- n=4 → revenue 320, cost 180, profit 140.
- n=8 → revenue 480, cost 260, profit 220.
- n=12 → revenue 480, cost 340, profit 140.
- Check n=8 is the maximum across all allowed integer choices 0–12.

## 14. Risks, mitigation, and non-negotiable controls

| Risk | Impact | Mitigation |
|---|---|---|
| Visually persuasive but mathematically wrong demo | High | Independent oracle, review before release |
| Overly ambitious advanced scope delays beginner launch | High | P0-first release gates and deferred P3 |
| Mismatch with existing website stack | Medium–high | Audit before technology commitment |
| Slow mobile pages due to heavy graph libraries | Medium | Lazy load, trim dependencies, performance tests |
| Unsupported claim of exact optimality | High | Explicit solver/status/proof labeling |
| Research/IP disclosure in public simulator | High | Use synthetic data, review clearance and attribution |
| Accessibility barriers | Medium–high | Design and test accessibility from first component |
| Link rot/outdated solver tutorials | Medium | Version tags and regular maintenance review |
| Excessive ongoing editorial maintenance | Medium | Templates, automated checks and review cadence |

## 15. Publishing, SEO, and discoverability

- Publish stable, human-readable titles/slugs with original explanations and descriptive summaries.
- Add appropriate structured data for articles/breadcrumbs where technically supported and accurate.
- Ensure sitemap, canonical URLs, open-graph previews, and internal prerequisite links.
- Include descriptive alternative text, meaningful figure captions, and text summaries of interactive results.
- Publish code/data with clear version, license, attribution, and expected output.
- For research-oriented pages, cite paper/DOI and clearly explain differences between simplified lab and full study.
- Track search intent by concept rather than stuffing titles with generic keywords.
- Perform periodic broken-link and dependency audits; record last-reviewed dates.

## 16. Maintenance and long-term growth

**Every publication:** run tests, review math, verify links, check mobile/keyboard usage, update changelog.

**Monthly (proposed):** assess confusing lessons and issue reports, repair broken examples, update glossary cross-links, look at aggregate learning diagnostics.

**Quarterly (proposed):** review software versions, security advisories, external resource links, accessibility regressions, and whether advanced content still matches current research claims.

**Future possibilities (not committed):** multilingual explainers, downloadable instructor materials, browser-based problem editors, a guided assessment system, reader-submitted optimization instances, and hosted solver services after a documented need/cost/security analysis.

## 17. Project management and status protocol

Maintain a central tracker with: `ID | Workstream | Description | Priority | Owner | Dependency | Status | Evidence | Last updated | Next action`. Allowed statuses: **Proposed, Ready, In Progress, In Review, Blocked, Done**.

**Progress reporting rule:** report verifiable completed deliverables and blocked dependencies, not invented percentage completion. If a percentage is requested, define the weighting and denominator explicitly; do not treat documentation drafts as shipped working software.

**Every work session should start with:** current milestone, outstanding acceptance criteria, top blockers, next high-priority task.

**Every work session should end with:** what changed, what was tested, what remains, decision updates, and the next exact action.

### Decision register — baseline

| ID | Decision / assumption | State | Trigger to revisit |
|---|---|---|---|
| ADR-001 | Use existing academic site as home | Proposed | Repo audit reveals technical barrier |
| ADR-002 | Static-first interactive deployment | Proposed | A verified use case requires remote compute |
| ADR-003 | Beginner-to-researcher 6-level track | Baseline | Learner testing indicates sequence changes |
| ADR-004 | One article template + lab contract | Baseline | Accessibility or pedagogy evidence requires revision |
| ADR-005 | P0 = four lessons + two labs | Baseline | Actual workload/quality review suggests adjustment |
| ADR-006 | Advanced eVTOL/PCMTSP after foundational tracks | Baseline | Separate research communication deadline arises |

## 18. Immediate next action and handoff contract

**Start with BL-001: audit the current `lotussavy.github.io` repository.** Establish the current site framework, directory layout, build/deploy mechanism, styles, scripts, math support, existing research page, and compatibility constraints. Based on the audit, finalize actual routing/technology, then implement a single self-contained OPT-001/LAB-A lesson as the golden template.

### What to record before declaring the first task complete

1. Current branch, commit/reference, and build command.
2. Where optimization pages and interactive modules should reside.
3. Final list of libraries selected and why alternatives were rejected.
4. How mathematical functions will be verified independently of UI.
5. Screenshot and test evidence for desktop and mobile.
6. Any changes to MVP scope or timeline, recorded in the ADR and changelog.

---

## Appendix A. Initial concept dictionary (minimum twenty terms)

Optimization; decision variable; parameter; objective function; constraint; feasible solution; infeasibility; continuous variable; integer variable; binary variable; linear programming; mixed-integer linear programming; LP relaxation; local optimum; global optimum; incumbent; upper bound; lower bound; optimality gap; branch-and-bound; cutting plane; branch-and-cut; heuristic; metaheuristic; graph; shortest path; TSP; mTSP; VRP; subtour; prize collecting; time window; rolling horizon.

## Appendix B. Reading and engineering references

- Google OR-Tools documentation: https://developers.google.com/optimization
- Gurobi modeling examples: https://gurobi.github.io/modeling-examples/
- Quarto interactive documentation: https://quarto.org/docs/interactive/
- D3.js: https://d3js.org/
- MathJax: https://www.mathjax.org/
- KaTeX: https://katex.org/
- W3C Web Content Accessibility Guidelines: https://www.w3.org/WAI/standards-guidelines/wcag/
- GitHub Pages documentation: https://docs.github.com/en/pages

## Appendix C. Blueprint revision record

| Version | Date | Change | Approval state |
|---|---|---|---|
| 1.0 | 2026-11-11 | Initial baseline architecture, curriculum, scope, acceptance criteria, milestones, and backlog | Proposed for project use |