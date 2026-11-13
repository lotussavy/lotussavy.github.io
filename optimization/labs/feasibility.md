---
layout: optimization-lesson
title: "Feasibility Explorer"
seo_title: "Feasibility Explorer | Optimization Lab"
description: "Toggle resource constraints and explore a continuous two-dimensional feasible set, slack, trade-offs and empty, line or single-point cases."
permalink: /optimization/labs/feasibility/
lesson_id: LAB-B
lesson_status: published
level: foundations
level_label: Foundations
difficulty: Beginner
estimated_minutes: 8
subtitle: "Test every rule. See their overlap. Explain the trade-off."
learning_objectives:
  - "Check a point against every active resource rule and the domain."
  - "Distinguish a feasible area, line, point and empty set."
prerequisites:
  - title: "OPT-002: Decisions, Objectives, and Constraints"
    url: /optimization/learn/foundations/decisions-objectives-constraints/
concepts: [feasible-set, constraint, slack, trade-off, continuous-variable]
labs: [feasibility-explorer]
reviewed_on: 2026-11-13
last_modified_at: 2026-11-13
math_reviewed: true
accessibility_reviewed: true
code_verified: true
robots: index,follow
sitemap: true
---

## Explore the allowed choices

Predict whether (4, 4) satisfies both default resource rules. Then use the example buttons, switch a rule off and on, and inspect every numerical check. Reset restores the original model and selected point.

{% include optimization/labs/feasibility.html %}

## Read the result

The full feasible set contains every real pair within the 0–10 domain satisfying every active rule. A failed candidate may sit outside a nonempty region. A model with contradictory rules has no feasible candidate. A line segment or one point is still nonempty, even though its area is zero.

The browser intersects half-planes by clipping the domain polygon, preserving included boundaries and degenerate sets. Its geometry is checked against an independent boundary-intersection method for all 109,368 supported settings. It uses a numerical tolerance of 0.000000001. No objective is supplied, so this lab reports feasibility rather than an optimum.

## Continue learning

Read [OPT-003: Feasibility and Trade-offs]({{ '/optimization/learn/foundations/feasibility-and-trade-offs/' | relative_url }}) for the formulation, worked examples, five knowledge checks, assumptions and [independent Python example]({{ '/assets/code/optimization/opt003_example.py' | relative_url }}).
