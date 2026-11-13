---
layout: optimization-lesson
title: "Feasibility and Trade-offs"
seo_title: "Feasibility and Trade-offs | Optimization Lab"
description: "Explore a two-dimensional feasible region, test every constraint, interpret slack and tight boundaries, and understand trade-offs without confusing feasibility with optimality."
permalink: /optimization/learn/foundations/feasibility-and-trade-offs/
lesson_id: OPT-003
lesson_status: published
level: foundations
level_label: Foundations
difficulty: Beginner
estimated_minutes: 20
subtitle: "A choice must satisfy every rule. Changing one activity can force a change in another."
learning_objectives:
  - "Test a candidate against its domain and every active constraint."
  - "Interpret the feasible set as the intersection of allowed regions."
  - "Calculate resource slack and identify tight constraints at a point."
  - "Explain a resource trade-off without claiming an unspecified optimum."
  - "Distinguish an infeasible candidate from an empty feasible set, including line and point cases."
prerequisites:
  - title: "OPT-002: Decisions, Objectives, and Constraints"
    url: /optimization/learn/foundations/decisions-objectives-constraints/
previous_lesson:
  title: "Decisions, Objectives, and Constraints"
  url: /optimization/learn/foundations/decisions-objectives-constraints/
concepts: [feasible-set, constraint, slack, tight-constraint, trade-off, continuous-variable, infeasibility]
labs: [feasibility-explorer]
reviewed_on: 2026-11-13
last_modified_at: 2026-11-13
math_reviewed: true
accessibility_reviewed: true
code_verified: true
license: "© 2026 Kamal Acharya. All rights reserved."
robots: index,follow
sitemap: true
---

> **Teaching model:** Activity hours and resource limits are synthetic. This is a continuous planning example, not a detailed employee schedule or an operating recommendation.

## In one minute

A feasible choice satisfies every rule in a model. With two decisions, you can draw the allowed choices as a region: each constraint keeps one side of a boundary, and the feasible set is the overlap of all those allowed sides.

Suppose you plan hours of two activities. Both consume time, but one requires twice as much staffing per hour. A plan can fit the time allowance and still exceed staffing. Checking one rule is therefore insufficient. A point on an allowed boundary can be feasible too: using exactly the available resource is permitted by a “less than or equal to” rule.

When staffing is fully used, adding an hour of the demanding activity may require removing two hours of the other. That is a resource trade-off. It does not tell us which plan is better; we still need an objective for that judgment.

**Your goal:** Explain why a choice is allowed before asking whether it is best.

## Driving question

You have eight activity-hours of shared time and ten staff-hours. Activity A uses two staff-hours per hour; Activity B uses one. Can you plan four hours of each?

The time total is \\(4+4=8\\), which fits. The staffing total is \\(2(4)+4=12\\), which does not. The plan fails even though it passes one check.

Now compare \\((3,4)\\) with \\((4,2)\\). Both use ten staff-hours. The second gains one A-hour and gives up two B-hours. Which plan should you prefer? The resource rules alone cannot answer that question.

## Interactive intuition

**Predict first:** If you switch off staffing, will \\((4,4)\\) become feasible? Will switching it back on change your selected point, or change the rules that point must pass?

1. Start at \\((3,4)\\). Read both resource checks. Identify the unused time and the fully used resource.
2. Select **Violates staffing** to inspect \\((4,4)\\). Switch staffing off and on; watch the region and the failed check.
3. Select **Reset explorer**, then **Trade-off**. Compare \\((4,2)\\) with the original \\((3,4)\\).
4. Select **Empty set**. The minimum activity is nine hours while the time allowance is eight. Try moving your point: can any point repair contradictory rules?
5. Select **Line segment**, then **Single point**. Both have zero shaded area. Do they still contain allowed choices?

{% include optimization/labs/feasibility.html %}

Prefer a larger workspace? [Open the standalone Feasibility Explorer]({{ '/optimization/labs/feasibility/' | relative_url }}).

## What you observed

At the default limits, the feasible polygon has vertices \\((0,0)\\), \\((5,0)\\), \\((2,6)\\), and \\((0,8)\\). Its edges and interior are included. The selected point need not be a vertex to be feasible.

| Candidate (x, y) | Time used (hours) | Staffing used (staff-hours) | Default result |
|---|---:|---:|---|
| (3, 4) | 7 | 10 | Feasible; staffing tight |
| (4, 4) | 8 | 12 | Infeasible; staffing exceeded by 2 |
| (4, 2) | 6 | 10 | Feasible; staffing tight |
| (2, 6) | 8 | 10 | Feasible; both resource rules tight |

The graph changes when the rules change. Switching off a constraint removes its restriction; it does not mean a candidate has somehow satisfied that inequality. The domain limits stay active throughout.

The **Empty set** example is different from one failed candidate. There, every possible point fails at least one active rule. The **Line segment** example has infinitely many feasible points, and **Single point** has exactly one. Zero area alone cannot identify an empty set.

## Formal definition

A **feasible solution** is a candidate that satisfies the decision domain and every constraint. The **feasible set**, written \\(\mathcal{F}\\), contains all such candidates. For several allowed regions \\(H_i\\) and domain \\(D\\),

\\[
\mathcal{F}=D\cap H_1\cap H_2\cap\cdots\cap H_m.
\\]

The intersection symbol \\(\cap\\) means “in all of them.” It is an **AND**, not an OR. If \\(\mathcal{F}=\varnothing\\), the model is infeasible. Finding one infeasible candidate does not prove that the whole set is empty.

For an upper-limit constraint \\(g(x,y)\le b\\), **slack** is \\(b-g(x,y)\\). Positive slack means unused allowance; zero means the constraint is **tight** at that point. A negative residual means a violation. For a lower limit \\(h(x,y)\ge M\\), use \\(h(x,y)-M\\) as the surplus above the minimum. A constraint is called binding at a solution when equality holds there; tightness by itself does not prove that relaxing the constraint improves an objective.

A **trade-off** means gaining something while giving up something else. Here it describes a substitution of activity-hours under a shared staffing limit. We have not defined monetary values, preferences, or multiple objectives.

## Mathematical formulation

Let \\(x\\) and \\(y\\) be hours of A and B. They are **continuous variables**: fractional hours are allowed. The bounded domain is part of this model:

\\[
D=\left\lbrace(x,y)\in\mathbb{R}^2:0\le x\le10,\;0\le y\le10\right\rbrace.
\\]

The supplied parameters are time allowance \\(T\\), staffing capacity \\(S\\), and optional minimum activity \\(M\\). When both resource rules are on and the minimum is off,

\\[
\mathcal{F}(T,S)=\left\lbrace(x,y)\in D:x+y\le T,\;2x+y\le S\right\rbrace.
\\]

The coefficient 2 has units of staff-hours per A-hour. Multiplying it by A-hours gives staff-hours. For the default \\(T=8\\), \\(S=10\\), the point \\((3,4)\\) has

\\[
s_{\mathrm{time}}=8-(3+4)=1\text{ hour},\qquad
s_{\mathrm{staff}}=10-(2\cdot3+4)=0\text{ staff-hours}.
\\]

Both inequalities include equality. A strict inequality would exclude its boundary, but this activity uses only \\(\le\\) and \\(\ge\\).

On the staffing boundary \\(2x+y=10\\), rearrange to \\(y=10-2x\\). A change \\(\Delta x=1\\) requires \\(\Delta y=-2\\) to keep staffing unchanged. This substitution is valid only while the resulting point still satisfies the time rule, minimum if enabled, and domain. It is not a universal rule for every feasible move.

When enabled, the minimum adds \\(x+y\ge M\\). With \\(M=9\\) and \\(T=8\\), it demands simultaneously

\\[
9\le x+y\le8,
\\]

which is impossible. With \\(M=T=8\\) and \\(S=10\\), instead,

\\[
x+y=8,\qquad 2x+y\le10
\quad\Longrightarrow\quad 0\le x\le2,\quad y=8-x.
\\]

That is the included segment from \\((0,8)\\) to \\((2,6)\\). If the time rule is \\(x+y\le0\\), nonnegative hours force \\(x=y=0\\), giving one feasible point when the minimum is off.

## Solution approach

For a **selected candidate**, substitute its coordinates into each active inequality and check the domain. This directly certifies that point. A drawing is helpful, but a point that merely looks inside is not a numerical certificate.

For the **whole feasible set**, the browser starts with the square domain and clips it against each active half-plane. Clipping retains the allowed portion and any included boundary intersections. This convex model yields a polygon, a line segment, a point, or nothing. There is no objective to optimize and no numeric optimizer to report.

The Python example independently intersects every pair of boundary lines, then retains only intersections satisfying all inequalities. Because this model is a bounded intersection of closed half-planes, a nonempty set has vertices; this method also retains the endpoints of a line and a singleton. Sorting and listing the vertices is enough to identify the region here. The method would need different reasoning for an unbounded model or a curved constraint.

**Verification:** All 109,368 supported combinations of rule switches and integer limits are checked against the independent boundary-intersection oracle in the JavaScript tests. Candidate substitution and empty/line/point examples receive separate checks. Browser calculations use a tolerance of \\(10^{-9}\\) to handle roundoff; the downloadable Python example uses exact rational arithmetic.

## Python implementation

[Download the complete Python example]({{ '/assets/code/optimization/opt003_example.py' | relative_url }}). It needs only the Python standard library. Save it as `opt003_example.py` and run `python3 opt003_example.py`.

The key point check is deliberately small:

```python
def feasible(x, y, constraints):
    x, y = F(x), F(y)
    return all(a*x + b*y <= c for a, b, c in constraints)
```

In the complete file, `F` is `fractions.Fraction`, and each triple `(a, b, c)` means `a*x + b*y <= c`. Thus the minimum uses `(-1, -1, -M)`. The four domain bounds are constraints too. For exact decimal input use strings such as `F("0.1")`; constructing a fraction from a float preserves that float's binary value.

The program prints the default vertices in coordinate order:

```text
('0', '0')
('0', '8')
('2', '6')
('5', '0')
PASS: default polygon, three candidate checks, empty, line and point
```

The browser lists vertices in boundary order, so its order may differ while representing the same set. This example computes feasibility and geometry; it does not choose a preferred plan.

## Failure modes and assumptions

- **Passing only one rule:** \\((4,4)\\) meets time but fails staffing. Every active rule must pass.
- **Treating a boundary as forbidden:** equality is allowed in this model. A tight constraint can belong to a feasible point.
- **Confusing a point with a model:** one failed point does not imply infeasibility of the entire model. Contradictory minimum and maximum rules do.
- **Equating zero area with empty:** a line has infinitely many points; a singleton has one. Both are nonempty.
- **Calling a feasible point optimal:** no objective is supplied. A corner, a tight constraint, or less total resource use is not by itself a definition of “best.”
- **Treating slider samples as the domain:** x and y are continuous; the half-hour slider steps only make exploration manageable. An integer-hours model would have a different feasible set.
- **Treating this aggregate plan as a schedule:** hours are divisible, coefficients are constant, and resources are pooled. We omit sequencing, simultaneous worker availability, breaks, uncertainty and operating costs. The 0–10 bounds are actual domain restrictions, not just a chart crop.

## Knowledge check

Answer before opening each explanation.

<details markdown="1"><summary><strong>1. Does (4, 4) pass the default model?</strong></summary>

No. Time is \\(8\le8\\), but staffing is \\(12>10\\). It violates staffing by two staff-hours. Passing one constraint does not excuse failing another.

</details>

<details markdown="1"><summary><strong>2. At (2, 6), which resource constraint has slack?</strong></summary>

Neither. Time is \\(2+6=8\\), and staffing is \\(2(2)+6=10\\). Both have zero slack and are tight. The point is feasible because equality is allowed.

</details>

<details markdown="1"><summary><strong>3. Does removing staffing make the feasible set smaller?</strong></summary>

No. With the other rules unchanged, removing a constraint can only keep or enlarge the feasible set. Here it admits \\((4,4)\\). Removing a redundant rule could leave the set unchanged.

</details>

<details markdown="1"><summary><strong>4. Is the feasible set empty when M = T = 8 and S = 10?</strong></summary>

No. With all three rules on it is the segment \\((x,8-x)\\) for \\(0\le x\le2\\). It contains infinitely many points, including \\((1,7)\\), despite having zero area. Raising M to 9 with T fixed at 8 makes the set empty.

</details>

<details markdown="1"><summary><strong>5. Is (4, 2) necessarily better than (3, 4)?</strong></summary>

No. Both use ten staff-hours and are feasible under the default rules. The former gains one A-hour and gives up two B-hours. Choosing between them requires an objective or preference that this model has not supplied.

</details>

## Recap and next step

Feasibility means satisfying the domain and **every** active constraint. The feasible region is their intersection, including the permitted boundaries. Slack measures unused allowance; a tight rule has zero slack at the selected point. Resource trade-offs explain what changes together, while an objective explains what counts as better. An empty set, a line, and a singleton are different outcomes.

Return to [OPT-002]({{ '/optimization/learn/foundations/decisions-objectives-constraints/' | relative_url }}) to revisit decisions, objectives and rules, or explore [LAB-B]({{ '/optimization/labs/feasibility/' | relative_url }}) on its own. **Next planned: OPT-004, What Does “Optimal” Mean?** It will distinguish feasible choices, global and local optima, and best-known answers.

### References and provenance

- Boyd, S., & Vandenberghe, L. (2004). [*Convex Optimization*](https://stanford.edu/~boyd/cvxbook/), Chapters 2 and 4. Primary reference for half-spaces, intersections, polyhedra and feasibility. The example and its coefficients here are original synthetic teaching material.
- Python Software Foundation. [*fractions — Rational numbers*](https://docs.python.org/3/library/fractions.html). Primary documentation for the exact arithmetic used in the independent Python example. Accessed November 13, 2026.

The lab and executable examples were reviewed against independent arithmetic and geometric checks. Automated accessibility audits and keyboard/reflow review cover the released pages; dedicated screen-reader compatibility testing remains a tracked follow-up.
