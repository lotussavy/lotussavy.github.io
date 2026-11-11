# Project State — Optimization Learning Lab

**Last updated:** 2026-11-11  
**Milestone:** M1–M2 transition — Mathematical core verified  
**Active next task:** BL-005 — Build interactive LAB-A UI, subject to BL-003 rendering checks  
**BL-004 status:** **Done** — source committed, exact test suite run, and committed file integrity checked.

## Confirmed progress

| Task | Status | Evidence / remaining |
|---|---|---|
| BL-000 | Done | Continuity infrastructure in GitHub |
| BL-001 | In Review | Core architecture audited; end-to-end build verification still outstanding |
| BL-002 | In Review | Landing page and main/footer links committed; production route/browser QA pending |
| BL-003 | In Review | Reusable template committed; actual Jekyll rendering/browser QA pending |
| **BL-004** | **Done** | Engine, 13 independent fixtures, seven passing automated tests, algebraic certificate, browser export smoke test |
| BL-005 | Proposed | Waiting on render acceptance for BL-003 before releasing UI; implementation can be planned |

## BL-004 implementation

- `assets/js/optimization/profit-model.js` — dependency-free deterministic module with browser global / Node CommonJS support.
- `scripts/optimization/profit-fixtures.json` — expected reference values for all n=0,…,12.
- `scripts/optimization/profit-model.test.cjs` — executable Node test suite.
- [LAB_A_MODEL.md](LAB_A_MODEL.md) — precise formula, domain, outputs, API, test command, limitations, and UI integration requirements.
- Repository source hashes and sizes match the exact locally tested files (see VALIDATION.md).

Mathematics: maximize `P(n)=80n−5n²−100` for integer `0≤n≤12`. Complete enumeration yields unique `n*=8`, `P*=220` illustrative USD. Independent identity `P(n)=220−5(n−8)²` certifies no larger objective is possible.

## What is not done

- **No simulator UI** has been created; BL-005 is separate.
- No published OPT-001 lesson, interactive chart or link to live simulator.
- No claims that previous open Jekyll/build/Pages/UI checks passed.

## Next exact actions

1. BL-005: design native accessible controls, chart and interpretation connected to the **single existing core module**. Avoid duplicating math in UI.
2. Run clean Jekyll build and browser checks for BL-002/003 before claiming a published interface.
3. Implement BL-005 acceptance checks (selected value, chart, status, keyboard/mobile, input validation, reset, reduced motion).
4. Record source commit, test evidence, blockers and next work in project continuity files.

## Source of truth

Read [MASTER_BLUEPRINT.md](MASTER_BLUEPRINT.md), [LESSON_AUTHORING.md](LESSON_AUTHORING.md), [LAB_A_MODEL.md](LAB_A_MODEL.md), [TASKS.md](TASKS.md), and [VALIDATION.md](VALIDATION.md) at the start of a follow-up session.
