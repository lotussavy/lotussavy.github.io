---
layout: article
title: Stochastic Origin-Destination Matrix Forecasting Using Dual-Stage Graph Convolutional, Recurrent Neural Networks
date: '2024-09-27'
categories:
- Advanced Air Mobility
- Machine Learning
reading_time: 7
sitemap: true
robots: index,follow
description: A clear explanation of stochastic OD matrix forecasting with matrix factorization, graph convolutional networks, and recurrent neural networks.
image: /assets/blog/stochastic-origin-destination-matrix-forecasting-using-dual-stage-graph-convolutional-recurrent-neural-networks/cover.png
source_url: https://doi.org/10.1109/ICDE48307.2020.00126
---

Origin-destination matrices are usually used to describe traffic between regions. A cell in the matrix may record how many trips moved from one region to another, or what the average travel speed or cost was between that pair.

But average values hide uncertainty. Two vehicles traveling between the same origin and destination during the same time interval may experience different speeds because of signals, route choices, driving behavior, congestion, or incidents. Hu, Yang, Guo, Jensen, and Xiong model this uncertainty directly by forecasting stochastic OD matrices, where each OD pair is represented by a distribution rather than a single value.

## Why Stochastic OD Matrices Matter

A deterministic OD matrix gives one value per origin-destination pair. That can be useful, but traffic systems are variable. A stochastic OD matrix captures the distribution of travel costs, making it more informative for routing, logistics, travel-time reliability, and risk-aware planning.

This is important for intelligent transportation systems because reliability matters as much as average performance. A route with a slightly slower average time but lower variability may be better for a time-sensitive trip.

## The Main Challenges

The paper addresses two major challenges.

The first is sparsity. OD matrices built from vehicle trip data are often incomplete. In a given time interval, some region pairs may have no observed trips at all. That creates empty entries, even though future forecasting requires values for all OD pairs.

The second is spatiotemporal dependency. Traffic conditions are linked across space and time. Congestion in one area can influence neighboring regions, and current traffic patterns can persist into the future. A good forecasting model must learn both spatial and temporal structure.

The difficulty is that matrix row and column order does not necessarily preserve geographic adjacency. Two neighboring regions may not appear next to each other in the matrix. That is why graph modeling becomes useful.

## The Proposed Framework

<figure>
  <img src="/assets/blog/stochastic-origin-destination-matrix-forecasting-using-dual-stage-graph-convolutional-recurrent-neural-networks/cover.png" alt="Framework overview">
  <figcaption>Framework overview</figcaption>
</figure>

The proposed framework combines three ideas: matrix factorization, graph convolutional networks, and recurrent neural networks.

Matrix factorization turns sparse stochastic OD matrices into denser latent representations. Instead of trying to forecast every OD distribution directly, the model learns latent source and destination factors.

Graph convolutional networks capture spatial relationships between regions. The graph can represent geographic proximity or road-network relationships, allowing the model to learn from nearby and connected areas even when matrix positions do not reflect physical closeness.

Recurrent neural networks, specifically GRU-style temporal modeling, capture how OD patterns evolve over time. This allows the model to forecast future stochastic OD matrices from historical sequences.

## Why the Model Has Two Graph Stages

The "dual-stage" design reflects the fact that OD data has two spatial sides: origins and destinations.

A region can behave as a source of trips and as a destination of trips. The model learns spatial structure for both roles. This helps it capture patterns such as a residential area producing trips in the morning and an employment center attracting trips during the same period.

By applying graph convolution to latent source and destination representations, the model can learn more realistic regional dependencies.

## Experimental Results

The framework is tested on two real-world datasets: New York City taxi data and Chengdu taxi data.

The proposed method outperforms several baselines, especially under sparse data conditions. Performance is evaluated using distribution-aware metrics such as Kullback-Leibler divergence, Jensen-Shannon divergence, and Earth Mover's Distance.

Those metrics are appropriate because the model is forecasting distributions, not only point estimates. A model should be rewarded for predicting the shape of the travel-cost distribution, not just its average.

## Why This Matters for Planning

Stochastic OD forecasting is useful wherever uncertainty matters. It can support traffic management, travel-time reliability analysis, logistics planning, ride-hailing dispatch, and advanced mobility systems.

For Advanced Air Mobility, the idea is also relevant. Future air mobility planning will need OD forecasts that account for variability in demand, access time, weather, vertiport congestion, and multimodal connections. Deterministic averages may be too thin for operational decision-making.

## Limitations

The model depends on historical trip data and graph construction choices. If the trip sample is biased or the graph does not reflect real travel relationships, performance may suffer.

The framework also focuses on forecasting from observed historical patterns. Sudden disruptions, policy changes, disasters, or new mobility services may create patterns that historical data cannot fully predict.

## Final Thoughts

This paper advances OD forecasting by treating travel costs as distributions and by combining matrix factorization, graph learning, and recurrent temporal modeling.

The main lesson is that OD forecasting should not ignore uncertainty. Transportation systems are variable by nature, and models that represent that variability can support better planning than models that collapse every OD pair into a single average.

## References

1. Hu, J., Yang, B., Guo, C., Jensen, C.S. and Xiong, H., 2020. Stochastic Origin-Destination Matrix Forecasting Using Dual-Stage Graph Convolutional, Recurrent Neural Networks. In *2020 IEEE 36th International Conference on Data Engineering (ICDE)*, pp. 1417-1428. https://doi.org/10.1109/ICDE48307.2020.00126
2. Rutgers research portal. https://www.researchwithrutgers.com/en/publications/stochastic-origin-destination-matrix-forecasting-using-dual-stage/
