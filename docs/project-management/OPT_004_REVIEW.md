# OPT-004 — Release Review

**Date:** November 17, 2026. **State:** Candidate review; not yet published at this checkpoint.

The complete eleven-section lesson, five aligned objectives/checks, reusable/standalone Optimality Comparator and independent Python example are implemented. Default local/global peaks, tied optima at U=6, excluded x=8 at U=5 and the singleton at U=0 agree with independent proofs.

All 33 Node tests pass, including seven new tests: all 11 upper limits; 11,011 candidate/limit probes against piecewise arithmetic and one-sided derivative classification; all 22,528 integer-point subset/limit records; invalid inputs and immutable results. Three new Python tests pass, checking exact piecewise arithmetic, all limit certificates and code-excerpt consistency. Earlier Python/model regressions pass.

Strict local production Jekyll build and same-site validation pass on 110 HTML pages and 4,375 references. Direct browser review confirmed global evidence, local classification, tied markers, model-change invalidation and infeasible-record exclusion. All 54 mathematical passages render with assistive MathML and no MathJax error. Twenty-seven local open-disclosure WCAG-tagged axe/reflow audits passed (nine routes at 1280/375/320 px), with no violations, overflow or raw TeX. Visual review caught the primary button becoming low-contrast on hover; its dark hover state was fixed and a browser regression assertion added. The fixed colors were observed directly. CI and production release evidence will be recorded after execution.

Dedicated screen-reader compatibility remains unexecuted AT-001 under ADR-029. This review does not claim full WCAG conformance or universal assistive-technology compatibility. OPT-004 does not complete the full MVP; glossary/search and the remaining acceptance review are outstanding.

## Candidate environment repair

Initial candidate `984c3e75e32f1ffbb1fd4856968920b2cbe51acd` passed model/Python/build checks but both browser workflows failed at Chromium setup. Job logs 134378153649 and 134378153007 report: `Playwright does not support chromium on ubuntu26.04-x64`. The moving `ubuntu-latest` image is incompatible with the pinned Playwright 1.56.1. Both validation workflows now explicitly use Ubuntu 24.04; no tests or thresholds were removed. Replacement candidate runs must pass before promotion. Initial failed runs: 44179055994 and 44179056048.
