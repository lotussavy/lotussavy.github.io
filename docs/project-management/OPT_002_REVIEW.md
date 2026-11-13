# OPT-002 — Final Release Review

**Date:** November 13, 2026. **Disposition:** Released following owner authorization, successful candidate/main checks and direct production verification.

**Released source:** `718c887e2cfa3a0eb48557c36a1c7c57b335f3a9`

## 1. Learning and implementation scope

OPT-002, Decisions, Objectives, and Constraints, follows the established eleven-section lesson layout. It contains five learning objectives, a 148-word introduction, a prediction-first investigation, formal definitions, a complete formulation, an independent certificate, executable/downloadable Python, failure modes and five knowledge checks. Its reusable Decision Model Builder also has a standalone route.

Learners choose a candidate fleet, edit a budget and availability, and compare profit maximization, revenue maximization and cost minimization. The lesson explicitly distinguishes editing parameters between scenarios from choosing optimization variables within one solve. It explains why all constraints and the domain must hold, why an infeasible candidate's arithmetic value is not a solution, why an optimal profit can be negative, and why missing service requirements produce a zero-service minimum-cost answer.

This one-variable activity does not claim to complete the later LAB-B two-dimensional explorer. OPT-003 is not implemented.

## 2. Mathematical certificate and assumptions

Reuse LAB-A financial functions: R(n)=100n−5n², C(n)=20n+100 and P(n)=80n−5n²−100. The decision n is integer 0…12. Given parameters are integer availability A ∈ [0,12] and integer budget B ∈ [0,400]. Check n ≤ A and C(n) ≤ B together. Enumerate all 13 choices, compare only feasible rows in the selected direction, and return null optimizer/value when none survive.

If B < 100 the feasible set is empty. Otherwise K = min(12,A,floor((B−100)/20)) defines its members 0…K. The completed-square identities for profit and revenue give the unique best fleets min(8,K) and min(10,K), respectively. Cost is increasing, so its minimum is n=0 whenever the set is nonempty. These independent certificates were compared with both implementations across all 15,639 supported scenarios.

| Goal | Budget | Availability | Feasible fleets | Best fleet | Goal value |
|---|---:|---:|---|---:|---:|
| Max profit | 260 | 12 | 0–8 | 8 | 220 |
| Max profit | 220 | 12 | 0–6 | 6 | 200 |
| Max profit | 260 | 4 | 0–4 | 4 | 140 |
| Max revenue | 400 | 12 | 0–12 | 10 | 500 |
| Min cost | 400 | 12 | 0–12 | 0 | 100 |
| Max profit | 80 | 12 | Empty | None | None |
| Max profit | 100 | 12 | 0 | 0 | -100 |

All money values are synthetic illustrative USD per period. The fixed $100 charge applies even at n=0; no minimum service, passenger, routing, time, charging or uncertainty model is present. Results are not operating-fleet recommendations.

## 3. Verified acceptance evidence

| Check | Result |
|---|---|
| Existing and new Node tests | 19 passed, zero failures; seven model-builder cases include exhaustive certificates, independent fixed values, simultaneous violations and invalid inputs |
| Independent Python tests | Three passed; all 15,639 models, invalid parameters and exact displayed/downloadable code equality |
| Seven reference Python models | Passed, including infeasibility and negative optimal profit |
| Production build and same-site references | Local strict-front-matter Jekyll build passed; 106 HTML pages and 4,219 links/assets passed; CI also passed |
| OPT-002 / standalone builder browser tests | Passed on both routes: seven reference models, exact rule checks, all table rows, invalid-input preservation, keyboard, disclosures, math, 320 px reflow and no-JavaScript fallback |
| Accessibility / reflow | Fifteen audits: five routes at 1280/375/320 px, all disclosures open; no WCAG-tagged axe violations, renderer errors, raw TeX or page overflow |
| Manual browser review | Default n=8/$220; budget 220 → n=6/$200; budget 80 → infeasible; arrow-key updates; invalid budget preserved last valid result and disabled solving; desktop/narrow layout inspected |
| Mathematical rendering | All 38 passages typeset with assistive MathML; explicit brace commands repair Markdown-sensitive set notation, including the same notation in OPT-001 |
| References | MIT OCW lecture verified; Google reference corrected to its current official Python introduction after the initial overview URL returned 404 |
| Live deployment/navigation | Homepage entry, OPT-001 ↔ OPT-002, lesson status, math, budget interaction and standalone builder verified directly |
| Dedicated screen-reader compatibility | Not run; existing AT-001 follow-up under ADR-029 |

## 4. Release references

- [Optimization Lab validation: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824236)
- [Site-wide validation: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824295)
- [GitHub Pages deployment: success](https://github.com/lotussavy/lotussavy.github.io/actions/runs/43484824146)
- Identical release-candidate checks passed before main promotion: runs 43484481890 and 43484481886.
- CI uses Node 22, Ruby 3.3, the committed GitHub Pages/Jekyll lockfile, Playwright 1.56.1 and axe-core 4.10.3. Python uses standard features compatible with 3.10+.

## 5. Accessibility evidence boundary

ADR-029 remains in force. The completed review is supported by actual browser/keyboard/visual/MathML observation and automated accessibility checks. Dedicated NVDA, VoiceOver or Orca compatibility is unverified. Do not claim independent human screen-reader sign-off, universal compatibility or full WCAG certification. Invalid inputs are announced explicitly; there is one coherent live status; no-JavaScript controls remain disabled with a readable default table and explanation.

## 6. Published result and handoff

[OPT-002](https://lotussavy.github.io/optimization/learn/foundations/decisions-objectives-constraints/) · [Decision Model Builder](https://lotussavy.github.io/optimization/labs/model-builder/).

The owner authorized completing this lesson in the current session (ADR-032), superseding the prior design-only allocation. BL-007A/B/C are complete. The next item is BL-007D: OPT-003 design. No OPT-003 work was started.
