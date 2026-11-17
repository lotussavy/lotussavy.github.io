---
layout: optimization-lesson
title: "What Does ‘Optimal’ Mean?"
seo_title: "What Does Optimal Mean? | Optimization Lab"
description: "Distinguish feasible, best recorded, locally optimal and globally optimal decisions using a two-peak example, tied solutions and an exact continuous certificate."
permalink: /optimization/learn/foundations/what-does-optimal-mean/
lesson_id: OPT-004
lesson_status: published
level: foundations
level_label: Foundations
difficulty: Beginner
estimated_minutes: 20
subtitle: "A good candidate, a local peak and a proven best answer make different claims."
learning_objectives:
  - "Distinguish a feasible candidate from a best recorded candidate and a proven optimum."
  - "Explain local versus global optimality using feasible nearby choices."
  - "Separate an optimal decision from its objective value and recognize ties."
  - "Use an upper bound and an attaining feasible point to certify a maximum."
  - "Recheck optimality when the feasible set changes and state the evidence honestly."
prerequisites:
  - title: "OPT-003: Feasibility and Trade-offs"
    url: /optimization/learn/foundations/feasibility-and-trade-offs/
previous_lesson:
  title: "Feasibility and Trade-offs"
  url: /optimization/learn/foundations/feasibility-and-trade-offs/
concepts: [feasible-solution, objective-value, local-optimum, global-optimum, best-known-solution, optimality-certificate]
labs: [optimality-comparator]
reviewed_on: 2026-11-17
last_modified_at: 2026-11-17
math_reviewed: true
accessibility_reviewed: true
code_verified: true
license: "© 2026 Kamal Acharya. All rights reserved."
robots: index,follow
sitemap: true
---

> **Teaching model:** The score and its two peaks are synthetic. They represent no measured profit or operating recommendation. This lesson studies the meaning of an answer, using an example whose global maximum can be proved without a solver.

## In one minute

“Optimal” means best among every feasible choice for a stated model and objective. It is a stronger claim than “allowed,” “better than the other candidates I tried,” or “no nearby change improves it.” Those statements describe feasibility, a comparison record, and local optimality.

Imagine searching a landscape with two peaks. You may reach the top of the first peak and find that every small move goes downhill. That is a local maximum. A taller peak farther away can still make your answer globally inferior. Searching longer might discover it, but elapsed time alone does not prove that nothing better exists.

In this lesson you will compare a few candidates, inspect both peaks, and request an exact global certificate. You will also change a constraint and see two different decisions share the same best score. The decision is an optimizer; the score is the optimal value.

**Your goal:** Match each claim about an answer to the evidence supporting it.

## Driving question

Suppose the recorded scores at \\(x=0,2,4\\) are \\(2,6,2\\). Is \\(x=2\\) optimal?

It is best among those three points. It is also the top of one peak in our example. Neither fact rules out a better point elsewhere. In fact, \\(x=8\\) has score \\(10\\).

In OPT-003 you asked whether a point satisfied every rule. Now you ask whether **any other feasible point has a better objective value**, and how you can justify the answer.

## Interactive intuition

**Predict first:** After comparing only 0, 2 and 4, which claim is justified: “best recorded” or “globally optimal”?

1. Start with **Local peak**. The record contains 0, 2 and 4, and its best score is 6. Select **Verify entire model**. Read why the selected peak is local but not global.
2. Select **Better peak**. The record now includes 8. It has the largest recorded score, but the record alone still supplies no global proof. Request verification and inspect the bound.
3. Select **Tied optima**. The upper limit is now 6. Verify and identify both optimal decisions and their shared value.
4. Select **Outside limit**. Point 8 still has arithmetic score 10, but is it allowed when the upper limit is 5? Check which recorded points compete.
5. Select **Only feasible point**, then verify. Finally clear the comparison record. An empty record and an empty feasible set are different things.

{% include optimization/labs/optimality.html %}

[Open the standalone Optimality Comparator]({{ '/optimization/labs/optimality/' | relative_url }}).

## What you observed

The example has a lower peak at \\((2,6)\\) and a higher one at \\((8,10)\\), where each pair means (decision, score). The first peak is a genuine continuous local maximum: all sufficiently close feasible moves reduce its score. A larger move can reach a better peak.

| Limit U | Candidate | Candidate score | What is true? | Global optimizer(s) and value |
|---|---:|---:|---|---|
| 10 | 2 | 6 | Feasible local maximum; best in the initial record | x = 8; value 10 |
| 10 | 8 | 10 | Feasible and globally optimal | x = 8; value 10 |
| 6 | 2 or 6 | 6 | Two different globally optimal decisions | x = 2 and x = 6; value 6 |
| 5 | 8 | 10 | Infeasible; its score cannot compete | x = 2; value 6 |
| 0 | 0 | 2 | The only feasible decision | x = 0; value 2 |

The comparator keeps a **record of deliberately selected points**. The full curve gives context, but its drawing and sample points are not the proof. Verification uses an analytic argument covering every real feasible point.

Changing the candidate preserves a certificate for the same model. Changing U clears it because the model has changed. A previous optimizer may become infeasible, or an earlier inferior point may become optimal under the new rule.

## Formal definition

For a maximization problem with feasible set \\(\mathcal{F}\\) and objective \\(f\\), a **global optimizer** \\(x^{\ast}\\) satisfies

\\[
x^{\ast}\in\mathcal{F},\qquad f(x^{\ast})\ge f(z)\quad\text{for every }z\in\mathcal{F}.
\\]

The **optimal value** is \\(f^{\ast}=f(x^{\ast})\\). Different optimizers can share this value. For minimization, reverse the comparison: an optimal value is no larger than that of any feasible alternative.

A **local maximizer** \\(x_{\mathrm{loc}}\\) satisfies the comparison only within some sufficiently small feasible neighborhood:

\\[
\text{There exists }r>0\text{ such that }f(x_{\mathrm{loc}})\ge f(z)
\quad\text{for all }z\in\mathcal{F}\text{ with }|z-x_{\mathrm{loc}}|<r.
\\]

“Nearby” refers to feasible points, including at a domain boundary. A global optimizer is also locally optimal; a local optimizer need not be global. Comparing only adjacent slider positions cannot establish this continuous definition, because it leaves intervening real values unchecked.

For a recorded subset \\(R\subseteq\mathcal{F}\\), its **best recorded value** is \\(L=\max_{x\in R}f(x)\\), when R is nonempty. This is what “best-known” means when the stated evidence is that search record. It may already equal the true optimum, but the record alone need not prove equality. Infeasible recorded points are excluded from R.

## Mathematical formulation

We maximize

\\[
f(x)=\max\left\lbrace q_A(x),q_B(x)\right\rbrace,\qquad
q_A(x)=6-(x-2)^2,\quad q_B(x)=10-(x-8)^2,
\\]

subject to \\(0\le x\le U\\), where the supplied integer limit is \\(U\in\left\lbrace0,1,\ldots,10\right\rbrace\\). The decision x is continuous even though the limit and slider steps are discrete controls.

At the default \\(U=10\\), a square is nonnegative, so

\\[
q_A(x)\le6,\qquad q_B(x)\le10
\quad\Longrightarrow\quad f(x)\le10.
\\]

This gives an upper bound on **every** feasible score. Since \\(x=8\\) is feasible and \\(f(8)=10\\), the bound is attained and the global optimum is proved. The best recorded point \\(x=2\\) only gives \\(f^{\ast}\ge6\\).

For \\(U=6\\), the second peak is excluded. Every feasible x has \\(8-x\ge2\\), so

\\[
q_B(x)=10-(8-x)^2\le6,\qquad q_A(x)\le6.
\\]

Both \\(x=2\\) and \\(x=6\\) attain 6. Thus there are two optimal decisions, with one optimal value.

To see why the first peak is local, take \\(1<x<3\\). On this interval the first branch is larger, and \\(f(x)=6-(x-2)^2\le6\\), with equality only at 2. Under the default limit, this proves a strict local maximum while \\(f(8)>f(2)\\) disproves global optimality.

## Solution approach

First check feasibility. Then rank only feasible recorded candidates. Finally ask whether there is evidence about **all** feasible choices. Here an exact bound supplies that evidence; a larger record alone does not.

For any allowed limit, each concave quadratic reaches its own interval maximum at its peak if that peak is allowed, otherwise at the nearest endpoint. Set

\\[
a=\min\left\lbrace2,U\right\rbrace,\qquad b=\min\left\lbrace8,U\right\rbrace.
\\]

Then \\(q_A(x)\le q_A(a)\\) and \\(q_B(x)\le q_B(b)\\) throughout \\([0,U]\\). Therefore

\\[
f^{\ast}=\max\left\lbrace q_A(a),q_B(b)\right\rbrace.
\\]

Any branch attaining that larger bound supplies an optimizer at its maximizing point. If both branch bounds agree at different points, retain both optimizers. This argument covers all real x; it is not a claim based on grid sampling or numerical search.

For maximization, a feasible score is a lower bound on the global optimum, while a justified upper bound limits what remains possible. If \\(L\le f^{\ast}\le B\\) and \\(L=B\\), a feasible point attaining L is globally optimal. A numerical gap \\(B-L>0\\) describes remaining uncertainty in those bounds; it does not by itself show that the current point is suboptimal. The upper bound may be loose. Minimization reverses the roles.

The browser bounds each quadratic branch. The Python example independently splits the interval where the branches meet, at \\(x=14/3\\), and checks the endpoints and permitted branch peaks. Tests compare these methods for every supported U. A separate derivative-sign check verifies the local classification, including constrained endpoints.

## Python implementation

[Download the complete independent Python example]({{ '/assets/code/optimization/opt004_example.py' | relative_url }}). It uses exact rational arithmetic from Python's standard library. Run `python3 opt004_example.py`.

The score function is:

```python
def score(x):
    x = F(x)
    if not 0 <= x <= 10:
        raise ValueError("x must lie in [0, 10]")
    return max(6 - (x-2)**2, 10 - (x-8)**2)
```

The complete file defines `F` as `fractions.Fraction`. Its certificate checks the endpoints, permitted peaks 2 and 8, and the exact branch crossover 14/3. These cover the maxima of the two quadratic pieces on the bounded interval. They do not turn x into an integer variable.

Expected output:

```text
U=10: best recorded score 6 at x=2; global score 10 at x=8
U=6: global score 6 at x=2 and x=6
U=5: x=8 is infeasible; global score 6 at x=2
PASS: exact comparison record and independent piecewise certificate
```

For decimal rational input, use a string such as `F("0.1")`; constructing a Fraction from a float retains the float's binary value. The browser uses a tolerance of \\(10^{-9}\\) for point classification and comparison ties; its half-step controls give exact binary inputs in this example.

## Failure modes and assumptions

- **Calling the best attempted point optimal:** state the record and what remains unproved. A best-known answer can be globally optimal without yet having a proof.
- **Ignoring feasibility:** when \\(U=5\\), \\(x=8\\) has score 10 but cannot solve the constrained model.
- **Calling any search stop a local optimum:** no improvement among two sampled neighbors is weaker than no improvement in a continuous feasible neighborhood.
- **Assuming every local optimum is inferior:** global optima are local too. At \\(U=5\\), even the endpoint \\(x=5\\) is a constrained local maximum, although the better feasible point 2 exists farther away.
- **Expecting a unique decision:** \\(U=6\\) has two optimizers. Reporting the objective value alone does not identify either decision.
- **Carrying a certificate into a changed model:** changing constraints, objective or domain requires checking whether the earlier argument still applies.
- **Assuming every problem attains an optimum:** our continuous score on the closed bounded interval does. By contrast, maximizing x over \\(0<x<1\\) has scores arbitrarily close to 1 but no feasible point attaining 1. An empty comparison record does not imply an empty model.
- **Treating the synthetic curve as operating evidence:** the example teaches definitions and proof. It contains no uncertainty, data fitting, runtime benchmark or solver-performance claim.

## Knowledge check

Answer before opening each explanation.

<details markdown="1"><summary><strong>1. You checked only 0, 2 and 4. What can you claim?</strong></summary>

At U = 10, point 2 is best among those recorded feasible candidates, with value 6. That record alone does not establish global optimality. In this model, the unrecorded point 8 has value 10.

</details>

<details markdown="1"><summary><strong>2. Does a genuine local maximum have to be globally optimal?</strong></summary>

No. At U = 10, point 2 beats sufficiently close feasible alternatives but loses to point 8 farther away. A global optimizer is also local; the reverse implication fails for this example.

</details>

<details markdown="1"><summary><strong>3. At U = 6, what are the optimal decisions and the optimal value?</strong></summary>

The optimal decisions are \\(x=2\\) and \\(x=6\\). Both attain the single optimal value \\(f^{\ast}=6\\). These are two distinct optimizers, not an interval of tied points.

</details>

<details markdown="1"><summary><strong>4. Why does an upper bound of 10 plus feasible f(8) = 10 prove optimality?</strong></summary>

No feasible score can exceed 10, and point 8 achieves it. The lower and upper bounds meet. A visually high point or a long search would not supply the same proof.

</details>

<details markdown="1"><summary><strong>5. Can x = 8 remain the solution after setting U = 5?</strong></summary>

No. It violates \\(x\le5\\). Its arithmetic score is still 10, but infeasible points cannot compete. Rechecking the changed model gives the global optimizer \\(x=2\\), with value 6.

</details>

## Recap and next step

A feasible point passes the rules. A best recorded point wins among the stated checked candidates. A local optimum wins in some feasible neighborhood. A global optimum wins over the entire feasible set. The optimizer is a decision; the optimal value is its score. A valid bound attained by a feasible point can turn a best-known answer into a certified global answer.

Revisit [OPT-003]({{ '/optimization/learn/foundations/feasibility-and-trade-offs/' | relative_url }}) or compare cases in the [standalone activity]({{ '/optimization/labs/optimality/' | relative_url }}). This completes the four planned foundation lessons. The foundation package still needs glossary/search and its overall release review. **Next planned lesson: OPT-005, Variables and Domains**, after the remaining foundation-package work.

### References and provenance

- Boyd, S., & Vandenberghe, L. (2004). [*Convex Optimization*](https://stanford.edu/~boyd/cvxbook/), §4.1.1, pp. 127–129. Primary reference for optimal points, locally optimal points, attainment and feasibility. The two-peak model, examples and certificates in this lesson are original synthetic teaching material.
- Python Software Foundation. [*fractions — Rational numbers*](https://docs.python.org/3/library/fractions.html). Primary documentation for the independent exact-arithmetic implementation. Accessed November 17, 2026.

Review covers the mathematical examples, executable checks, keyboard/reflow behavior and automated accessibility audits. Dedicated screen-reader compatibility remains a tracked follow-up.
