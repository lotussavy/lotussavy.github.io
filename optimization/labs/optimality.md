---
layout: optimization-lesson
title: "Optimality Comparator"
seo_title: "Optimality Comparator | Optimization Lab"
description: "Compare a best recorded candidate with a certified continuous global optimum; explore local peaks, tied solutions and changed constraints."
permalink: /optimization/labs/optimality/
lesson_id: OPT-004-ACTIVITY
lesson_status: published
level: foundations
level_label: Foundations
difficulty: Beginner
estimated_minutes: 8
subtitle: "Compare candidates, then check what the evidence proves."
learning_objectives:
  - "Distinguish a comparison record from an exact global certificate."
  - "Explore local peaks, tied optima and infeasible candidates."
prerequisites:
  - title: "OPT-003: Feasibility and Trade-offs"
    url: /optimization/learn/foundations/feasibility-and-trade-offs/
concepts: [local-optimum, global-optimum, best-known-solution, optimality-certificate]
labs: [optimality-comparator]
reviewed_on: 2026-11-17
last_modified_at: 2026-11-17
math_reviewed: true
accessibility_reviewed: true
code_verified: true
robots: index,follow
sitemap: true
---

## Compare the evidence

Start with the initial record. Predict whether its best candidate is globally optimal, then request the exact certificate. Use the example buttons to compare a local peak, a taller peak, ties and an excluded candidate.

{% include optimization/labs/optimality.html %}

## Read the result

Only feasible recorded points compete for the best recorded score. The record is a deliberately chosen subset; the plotted curve supplies context rather than a proof. The exact certificate bounds both quadratic branches over the complete feasible interval and identifies every attaining point. It covers continuous x, not just half-step samples.

Changing the upper limit clears the previous certificate and rechecks the stored candidates. Clearing the record does not remove any feasible choices. The synthetic score is a teaching example, with no operating or solver-performance claim.

## Continue learning

Read [OPT-004: What Does ‘Optimal’ Mean?]({{ '/optimization/learn/foundations/what-does-optimal-mean/' | relative_url }}) for definitions, worked proofs, five knowledge checks and the [independent Python example]({{ '/assets/code/optimization/opt004_example.py' | relative_url }}).
