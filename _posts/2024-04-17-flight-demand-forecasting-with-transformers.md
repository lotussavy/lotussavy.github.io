---
layout: article
title: Flight Demand Forecasting with Transformers
date: '2024-04-17'
categories:
- Advanced Air Mobility
- Machine Learning
reading_time: 5
sitemap: true
robots: index,follow
description: A practical explanation of using Temporal Fusion Transformers to improve
  multi-horizon airport departure demand forecasting.
image: /assets/blog/flight-demand-forecasting-with-transformers/cover.jpeg
source_url: https://medium.com/@lotussavy/flight-demand-forecasting-with-transformers-ec73582bb2aa
---

Predicting airport departure demand is difficult because airports are dynamic systems. Demand changes by time of day, day of week, season, weather, scheduled airline activity, and sudden General Aviation surges around public events. A useful forecast must look ahead across multiple future time steps and update as new operational information arrives.

The paper *Flight Demand Forecasting with Transformers* builds on earlier seq2seq work for Pacer, a MITRE-developed application that helps General Aviation operators understand future departure demand and potential congestion. The earlier work showed that seq2seq with attention could improve forecasting, especially when near-real-time SWIM data was included.

This follow-up asks whether a Transformer-based architecture can do even better.

The authors use the Temporal Fusion Transformer, or TFT, for strategic flight departure demand forecasting. TFT is designed for multi-horizon time-series forecasting, where the model must predict a sequence of future values while handling different types of inputs:

- historical observed inputs,
- future-known inputs,
- static metadata,
- time-varying features.

That makes it a natural fit for airport demand forecasting.

## Temporal Fusion Transformer

Transformers became famous in natural language processing because they can focus on the most relevant parts of an input sequence. For time-series forecasting, that same idea is powerful. The model can learn which past periods matter most for each future prediction.

TFT adapts the Transformer idea specifically for forecasting. It combines recurrent components, attention, gating mechanisms, and variable selection into one architecture.

Its major components include:

- **Variable selection networks:** These help the model decide which input variables matter at each time step.
- **Gating mechanisms:** These allow the model to suppress unnecessary components and control information flow.
- **Static covariate encoders:** These incorporate metadata that does not change over time.
- **LSTM layers:** These capture local temporal patterns in observed and known inputs.
- **Interpretable multi-head attention:** This captures longer-range relationships across time.
- **Quantile forecasting:** TFT can output prediction intervals, not only point forecasts.

For airport demand forecasting, this is useful because the model must combine several kinds of information. Past departure behavior matters, but so do future calendar features such as hour of day, day of week, and month. Near-real-time airport surface data can also change the forecast quickly.

TFT is attractive not only because it can improve accuracy, but also because it offers interpretability tools. Variable selection and attention can help analysts understand which inputs and time periods influenced the forecast.

<figure>
  <img src="/assets/blog/flight-demand-forecasting-with-transformers/cover.jpeg" alt="TFT architecture[2]">
  <figcaption>TFT architecture[2]</figcaption>
</figure>

In practical terms, TFT tries to answer two questions at once:

```text
What will departure demand look like over the forecast horizon?
Which inputs and past time periods are driving that forecast?
```

That second question matters in aviation operations. Forecasts are more useful when decision-makers can understand why the model expects congestion or a demand surge.

## Forecasting Setup

The study keeps the same general problem formulation as the earlier deep learning work. Departure demand is predicted as a multi-horizon, multivariate time series.

The target is departure demand from ASPM. The inputs include:

- historical departure demand,
- observed departure counts from SWIM,
- hour of day,
- quarter hour,
- day of week,
- month.

ASPM provides useful historical operational data, while SWIM provides near-real-time airport surface information. The combination is important because SWIM allows the forecast to respond more frequently to current airport conditions.

The paper trains TFT models for five different airports, extending the earlier work beyond the LAS-only case study.

## Results

The evaluation compares TFT with several earlier forecasting approaches:

- linear regression,
- autoregression,
- seq2seq,
- seq2seq with attention,
- TFT,
- TFT with ASPM and SWIM inputs.

The paper reports that TFT predicts departure demand more accurately than the traditional baselines by large margins. Across the tested settings, TFT improves over linear regression and autoregression, and the model benefits from the richer input data.

<figure>
  <img src="/assets/blog/flight-demand-forecasting-with-transformers/figure-02.png" alt="Model performances comparison">
  <figcaption>Model performances comparison</figcaption>
</figure>

The LAS quarter-hour comparison shows why this matters operationally. A good model must capture sudden changes, not just average daily patterns. TFT's attention-based design helps it model demand surges more effectively than simpler baselines.

<figure>
  <img src="/assets/blog/flight-demand-forecasting-with-transformers/figure-03.png" alt="LAS models quarter-hour departure demand forecasting results comparison.">
  <figcaption>LAS models quarter-hour departure demand forecasting results comparison.</figcaption>
</figure>

The authors also emphasize that TFT generally produced good predictions across diverse airports. This is important because a forecasting model for Pacer should not work only at one airport. It should be adaptable to airports with different traffic mixes and operating patterns.

## Why It Matters

The practical value of this work is better surface situation awareness.

If General Aviation operators and traffic managers can see an expected demand surge hours ahead, they can plan around it. That can reduce surprise, improve coordination, and help avoid avoidable congestion.

The modeling lesson is also clear: flight demand forecasting benefits from both better data and better architecture. ASPM gives historical operational structure. SWIM adds fresher surface information. TFT provides a model that can handle multiple horizons, heterogeneous inputs, and long-range temporal dependencies.

## Limitations

TFT is more complex than linear regression, autoregression, or even basic seq2seq models. That complexity means more tuning, more monitoring, and more care in deployment.

The paper also notes an important future direction: although the current TFT models output a single median-style forecast, TFT can produce multiple quantile predictions. That would allow forecasts to include uncertainty bands, such as 25th, 50th, and 75th percentile demand. For volatile General Aviation demand, uncertainty intervals may be just as useful as point estimates.

The main takeaway is that Transformer-based forecasting is not only about better accuracy. It can also provide more flexible, interpretable, and uncertainty-aware demand predictions for airport operations.

## References

1. Wang, L., Mykityshyn, A., Johnson, C. and Cheng, J., 2022. Flight demand forecasting with transformers. In *AIAA AVIATION 2022 Forum* (p. 3708). arXiv: [2111.04471](https://arxiv.org/abs/2111.04471)
2. Lim, B., Arık, S.Ö., Loeff, N. and Pfister, T., 2021. Temporal fusion transformers for interpretable multi-horizon time series forecasting. International Journal of Forecasting, 37(4), pp.1748–1764.
