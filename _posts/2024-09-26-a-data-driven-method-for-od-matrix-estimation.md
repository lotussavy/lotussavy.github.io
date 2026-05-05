---
layout: article
title: A Data-Driven Method for OD Matrix Estimation
date: '2024-09-26'
categories:
- Technical Articles
reading_time: 6
sitemap: true
robots: index,follow
description: A clear walkthrough of a data-driven origin-destination matrix estimation method that uses traffic speeds, flows, production-attraction patterns, shortest paths, and PCA.
image: /assets/blog/a-data-driven-method-for-od-matrix-estimation/cover.png
source_url: https://doi.org/10.1016/j.trc.2019.05.014
---

Origin-destination matrix estimation is one of the hardest inverse problems in transportation. We want to know how many trips move from every origin zone to every destination zone, but we usually observe only fragments of the traffic system: speeds, flows, counts, travel times, or partial trajectory samples.

Krishnakumari, van Lint, Djukic, and Cats propose a data-driven method that takes a different route from many traditional OD estimation approaches. Instead of relying on iterative dynamic network loading and strong assumptions about equilibrium traffic assignment, their framework uses observed supply patterns such as speeds and flows to estimate OD matrices more directly.

The main idea is practical: if the network's traffic state contains information about where demand is being produced and attracted, then machine learning and dimensionality reduction can help recover a plausible OD pattern.

## Why Traditional OD Estimation Is Difficult

OD estimation is severely underdetermined. A large network may contain millions of possible OD pairs, while the number of independent observations is far smaller.

Traditional approaches often start with a prior OD matrix, run a traffic assignment or simulation model, compare simulated counts or speeds with observed data, and then adjust the OD matrix. This can be computationally expensive, especially for dynamic congested networks.

It also depends on behavioral assumptions. Many methods need assumptions about route choice, equilibrium, stochastic assignment, or how travelers respond to travel times. Those assumptions may be reasonable in some settings, but they are difficult to validate at large scale.

The data-driven method in this paper tries to reduce that dependence.

## The Proposed Framework

<figure>
  <img src="/assets/blog/a-data-driven-method-for-od-matrix-estimation/cover.png" alt="Framework of the data-driven OD matrix estimation method">
  <figcaption>Framework of the data-driven OD matrix estimation method</figcaption>
</figure>

The framework has four main pieces:

1. Estimate production and attraction time series.
2. Compute multiple shortest paths between OD zones.
3. Allocate path flows using travel-time-based assumptions.
4. Use principal component analysis to reduce the solution space for large networks.

This structure keeps the model grounded in observed traffic states while avoiding a full iterative network-loading loop.

## Production and Attraction Estimation

The first step is to estimate how much traffic each zone produces and attracts over time.

Productions represent trips leaving a zone. Attractions represent trips arriving at a zone. If these time series are estimated well, they provide strong constraints on the OD matrix. The model no longer has to guess total outgoing and incoming demand for each zone from scratch.

The paper uses supply patterns, especially speeds and flows, to infer these production and attraction patterns. This is important because supply patterns are often more available than direct OD observations.

In a practical city network, loop detectors, floating-car data, connected vehicle data, or traffic management systems may provide speed and flow information even when full trajectory data is unavailable.

## Shortest Paths and Route Structure

After estimating productions and attractions, the method computes the `N` shortest paths between each origin and destination.

This introduces a controlled route-choice structure. Instead of considering every possible path, the model focuses on a limited set of plausible paths. That makes the problem more tractable.

The method also uses assumptions about how traffic is distributed across these paths. In general, shorter or faster paths receive more flow, while overlapping paths are penalized to avoid double-counting nearly identical alternatives.

This is a compromise. The model does not need a full equilibrium assignment, but it still needs enough route structure to connect OD demand to observed traffic states.

## Path Flow Proportions

The method assumes that path flows are proportional in a way that depends on travel time and path overlap.

If two paths connect the same origin and destination, the faster path should generally receive more flow. But if two paths overlap heavily, treating them as fully independent alternatives would exaggerate choice diversity. The overlap penalty helps correct that.

This assumption is not perfect, but it is transparent. It gives the model a way to distribute OD demand across routes without solving a full behavioral route-choice equilibrium.

## Principal Component Analysis for Large Networks

Large OD matrices are too high-dimensional to estimate directly without strong constraints. The paper uses Principal Component Analysis (PCA) to reduce dimensionality.

PCA identifies dominant patterns in the data and represents the OD matrix in a lower-dimensional space. Instead of estimating every OD pair independently, the model estimates a smaller number of components that capture the major structure of the OD pattern.

This is valuable for scalability. It also helps regularize the estimation problem. Since many OD flows are correlated through geography, time of day, and network structure, a lower-dimensional representation can preserve the main patterns while reducing noise.

## Application and Validation

![](/assets/blog/a-data-driven-method-for-od-matrix-estimation/figure-02.png)

The authors test the method on two networks.

The first is a toy network. This allows them to examine assumptions carefully and understand how estimation quality changes when production-attraction inputs, path assumptions, and available traffic observations vary.

The second is a real-world city network in Santander, Spain. This demonstrates that the method can scale beyond a small controlled example.

Testing both cases is useful. The toy network helps diagnose the method. The real network shows whether the method remains practical when the network becomes more complex.

## Key Findings

The strongest result is that the method performs well when production and attraction estimates are accurate. That makes sense: if the model knows how much demand leaves and enters each zone, the remaining task of distributing trips between origins and destinations becomes much better constrained.

Errors in production and attraction estimates lead to proportional increases in OD estimation error. This is an important practical lesson. The quality of the first stage strongly affects the quality of the final OD matrix.

The method is also scalable when PCA is used to reduce the solution space. Without dimensionality reduction, large OD matrices can become computationally difficult. PCA helps keep the estimation feasible.

Sensitivity analyses show that parameters such as the number of shortest paths, availability of traffic counts, and quality of supply data all influence performance.

## Why This Method Is Useful

The method is useful because it avoids some of the hardest parts of conventional dynamic OD estimation.

It does not require iterative dynamic network loading. It does not require a strong equilibrium assumption. It can use traffic supply data, such as speeds and flows, which are increasingly available in modern traffic systems. It can also scale better to larger networks through dimensionality reduction.

This makes the approach attractive for applications where full trajectory data is unavailable but network performance data is available.

## Limitations

The method still depends on assumptions. It needs good production and attraction estimates. It needs assumptions about the number of shortest paths and path flow proportionality. It also depends on the quality and coverage of speed and flow observations.

PCA can improve scalability, but it may also smooth out rare or unusual OD patterns. If a special event, incident, or temporary travel pattern does not align with dominant components, it may be harder to capture.

The method should therefore be viewed as a strong data-driven framework, not a complete replacement for validation, domain knowledge, or context-specific calibration.

## Why It Matters for AAM and Transportation Planning

OD matrices are foundational for transportation planning. They influence road investment, transit planning, congestion management, pricing policies, and emerging mobility systems.

They are also important for Advanced Air Mobility. If planners want to estimate demand for air taxis, regional air mobility, airport shuttles, or vertiport networks, they need plausible origin-destination flows. A poor OD estimate can lead to poor infrastructure placement and unrealistic demand forecasts.

Methods like this one help move the field toward data-driven demand estimation that can work with the kinds of traffic data cities increasingly collect.

## Final Thoughts

The paper's main contribution is a practical shift in perspective. Instead of forcing OD estimation through a heavy simulation-assignment loop, it asks how much information can be learned directly from observed traffic supply patterns.

That does not make OD estimation easy. The problem remains underdetermined and assumption-sensitive. But by estimating production and attraction patterns, using structured path assumptions, and reducing dimensionality with PCA, the method creates a scalable pathway for large networks.

For planners and researchers, the lesson is clear: better OD estimation depends not only on more data, but on using the right data structure to constrain an otherwise enormous problem.

## References

1. Krishnakumari, P., van Lint, H., Djukic, T. and Cats, O., 2020. A data driven method for OD matrix estimation. *Transportation Research Part C: Emerging Technologies*, 113, pp. 38-56. https://doi.org/10.1016/j.trc.2019.05.014
2. ScienceDirect record. https://www.sciencedirect.com/science/article/pii/S0968090X18317388
3. TU Delft research portal. https://research.tudelft.nl/en/publications/a-data-driven-method-for-od-matrix-estimation
