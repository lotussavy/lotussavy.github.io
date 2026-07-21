---
layout: article
seo_title: "Why Gravity Models Miss Temporal Migration"
title: Why Gravity Models Struggle to Capture Temporal Migration Dynamics
date: '2024-10-22'
categories:
- Advanced Air Mobility
reading_time: 6
sitemap: true
robots: index,follow
description: A clear explanation of why gravity models can fit spatial migration patterns well but fail to predict how migration changes over time.
image: /assets/blog/why-gravity-models-struggle-to-capture-temporal-migration-dynamics/cover.png
source_url: https://doi.org/10.1057/s41599-022-01067-x
---

Gravity models are powerful for explaining spatial interaction. They can show why migration flows are larger between some country pairs than others: larger populations, higher income differences, shorter distances, shared language, colonial ties, or other structural factors.

But Beyer, Schewe, and Lotze-Campen make a sharper point: strong spatial fit does not mean the model can explain or predict migration dynamics over time.

That distinction matters because gravity models are often used not only to describe historical migration patterns, but also to forecast future flows under changing population, income, or climate conditions.

![](/assets/blog/why-gravity-models-struggle-to-capture-temporal-migration-dynamics/cover.png){: width="1024" height="1024" loading="eager" decoding="async" fetchpriority="high" }

## Spatial Fit Can Hide Temporal Failure

When gravity models are calibrated on data pooled across countries and years, they often appear to perform well. They explain why migration is consistently larger between some corridors than others.

For example, a model may correctly estimate that migration between neighboring countries with strong economic ties is larger than migration between distant countries with weak historical links.

The problem is that these spatial differences are huge compared with year-to-year changes within a single migration corridor. A model can explain much of the total variation by capturing stable cross-country differences, while still failing to explain how a given corridor changes over time.

## The Core Statistical Problem

The paper shows that gravity models can fit pooled data well while performing poorly on temporal dynamics. In some cases, they predict year-to-year migration changes worse than simply using the historical average flow for that corridor.

This happens because the model's apparent success is dominated by spatial variation. The model learns which country pairs tend to have high or low migration, but not necessarily why a specific pair rises or falls from one year to the next.

That is a serious problem for forecasting. A model that cannot capture temporal movement in the past has weak support for predicting future migration trajectories.

## Why Temporal Migration Is Hard

Migration changes over time for reasons that are often nonlinear, sudden, and context-specific.

Economic recessions, policy changes, visa rules, conflicts, natural disasters, climate shocks, currency swings, social networks, border enforcement, and political crises can all change flows. These factors may not act smoothly or consistently across corridors.

Gravity models often assume that variables such as population and GDP affect migration in a stable way. That can work for explaining broad spatial differences, but it is much harder for short-term temporal changes.

## Fixed Effects Help, but Not Enough

Fixed effects are often added to gravity models to capture unobserved, stable relationships between origins and destinations. They can account for geography, shared language, historical ties, or other persistent corridor-specific factors.

This improves spatial fit, but it can make the temporal problem even more visible. If fixed effects explain the stable corridor differences, the remaining challenge is to explain changes over time. The paper shows that gravity models still struggle with that.

Fixed effects are useful for controlling constant factors. They do not automatically create a theory of temporal change.

## Why This Matters for Policy

The authors warn that gravity-model-based migration forecasts may lack statistical support if they are used to infer future temporal dynamics.

This is especially important for climate migration analysis. A gravity model may find a spatial association between climate variables and migration across countries, but that does not prove the model can predict how migration from one country will change as its climate changes over time.

That is the risk: spatial relationships can be mistaken for temporal mechanisms.

## The Lesson for Transportation Models

Although the paper focuses on international migration, the lesson applies broadly to spatial interaction models, including transportation planning.

A model may explain which corridors have high demand because of population, employment, distance, and cost. But that does not guarantee it can predict how those corridors change over time after a shock, infrastructure investment, price change, disaster, or new mobility service.

For Advanced Air Mobility and regional transportation forecasting, this matters. A gravity-style model may identify plausible OD flows, but temporal demand forecasting needs additional validation and time-sensitive variables.

## Final Thoughts

Gravity models remain useful for explaining spatial structure. They are simple, interpretable, and effective at identifying why some location pairs interact more than others.

Their weakness appears when we ask them to forecast time. Migration and transportation dynamics are driven by events, policies, adaptation, expectations, and shocks that may not follow the same rules as cross-sectional spatial differences.

The key lesson is not to abandon gravity models. It is to validate them for the exact job they are asked to do. A model that explains spatial patterns is not automatically a model that predicts temporal change.

## References

1. Beyer, R.M., Schewe, J. and Lotze-Campen, H., 2022. Gravity models do not explain, and cannot predict, international migration dynamics. *Humanities and Social Sciences Communications*, 9, 56. https://doi.org/10.1057/s41599-022-01067-x
2. Nature full text. https://www.nature.com/articles/s41599-022-01067-x
