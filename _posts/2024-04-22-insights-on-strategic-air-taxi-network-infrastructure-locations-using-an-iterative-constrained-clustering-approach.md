---
layout: article
seo_title: "Strategic Air Taxi Infrastructure via Clustering"
title: Insights on strategic air taxi network infrastructure locations using an iterative constrained clustering approach
date: '2024-04-22'
categories:
- Advanced Air Mobility
reading_time: 7
sitemap: true
robots: index,follow
description: A readable look at how NYC taxi data and constrained clustering can help planners decide where early air taxi vertistops should go.
image: /assets/blog/insights-on-strategic-air-taxi-network-infrastructure-locations-using-an-iterative-constrained-clustering-approach/cover.png
source_url: https://doi.org/10.1016/j.tre.2019.06.003
---

Air taxi networks are often imagined through the aircraft first: quiet electric vehicles lifting off from rooftops, crossing a city in minutes, and landing near the passenger's destination. But the aircraft is only one part of the system. The harder question is much more grounded: where should the network actually be built?

A vertistop in the wrong place is expensive concrete with very little demand. A vertistop in the right place can connect airports, business districts, tourist zones, and dense residential areas into a transportation network that people might actually use. Rajendran and Zack's study tackles that infrastructure question directly. Instead of asking where air taxis look futuristic, it asks where they make operational sense.

The paper proposes a two-phase approach. First, estimate which existing ground taxi trips could plausibly shift to an air taxi. Then, use an iterative constrained clustering method to identify the infrastructure locations that best serve that demand.

<figure>
  <img src="/assets/blog/insights-on-strategic-air-taxi-network-infrastructure-locations-using-an-iterative-constrained-clustering-approach/cover.png" alt="Schematic representation of an air taxi network" width="800" height="325" loading="eager" decoding="async" fetchpriority="high">
  <figcaption>Schematic representation of an air taxi network</figcaption>
</figure>

## Why Taxi Data Is a Useful Starting Point

Because large-scale air taxi services were not operating when the study was written, the researchers needed a proxy for potential demand. They used public New York City Taxi and Limousine Commission records from January 2014 through December 2015, combining yellow and green taxi trips into a dataset of roughly 300 million records.

That period matters. After 2015, privacy rules changed the public taxi data so exact pickup and drop-off coordinates were no longer available in the same way. For a study about where to place infrastructure, exact locations are essential. A broad taxi zone can tell you that demand exists somewhere in an area; coordinates can tell you whether a proposed vertistop is close enough for a passenger to realistically walk, ride, or transfer to it.

The raw trip records include pickup and drop-off times, pickup and drop-off coordinates, trip distance, fare amount, passenger count, and payment type. The researchers also calculate trip duration from the available timestamps.

Before estimating demand, they clean the data aggressively. Trips with impossible or illogical values are removed: negative fares, unrealistic passenger counts, distances that do not match travel times, fares below the base rate, suspiciously high fares, invalid payment codes, and other obvious inconsistencies. Rides with more than six passengers are excluded, since those are more likely to represent limousine-style services. Major peak holidays such as New Year's, Christmas, and Independence Day are also removed so the model is not skewed by unusual travel behavior.

## Turning Taxi Trips Into Potential Air Taxi Demand

The next step is not to assume every taxi rider becomes an air taxi passenger. That would be unrealistic. Air taxis only make sense for certain trips: long enough to benefit from flight, congested enough to produce time savings, and close enough to infrastructure at both ends.

<figure>
  <img src="/assets/blog/insights-on-strategic-air-taxi-network-infrastructure-locations-using-an-iterative-constrained-clustering-approach/figure-02.png" alt="Air taxi ride booking process" width="800" height="285" loading="lazy" decoding="async">
  <figcaption>Air taxi ride booking process</figcaption>
</figure>

The paper uses assumptions inspired by the Uber Elevate white paper. A passenger takes no more than one VTOL flight leg, the maximum VTOL distance is 120 miles, the cruising speed is 170 mph, and the air taxi route must be at least 40% faster than the ground taxi trip. The service is also treated as on-demand, not something passengers schedule far in advance.

The authors add a practical access constraint: the first-mile and last-mile ground legs should each be no more than one mile. They assume one mile of on-road travel takes about 10 minutes in congested New York conditions, so a complete air taxi trip includes up to 20 minutes of access and egress time plus the flight itself.

![](/assets/blog/insights-on-strategic-air-taxi-network-infrastructure-locations-using-an-iterative-constrained-clustering-approach/figure-03.png){: width="713" height="552" loading="lazy" decoding="async" }

The flight time is estimated from the Haversine distance between pickup and drop-off points, using the assumed air taxi speed of 170 mph, or about 2.83 miles per minute.

![](/assets/blog/insights-on-strategic-air-taxi-network-infrastructure-locations-using-an-iterative-constrained-clustering-approach/figure-04.png){: width="569" height="112" loading="lazy" decoding="async" }

Time savings are then calculated by comparing the original ground taxi duration with the estimated air taxi trip duration.

![](/assets/blog/insights-on-strategic-air-taxi-network-infrastructure-locations-using-an-iterative-constrained-clustering-approach/figure-05.png){: width="478" height="70" loading="lazy" decoding="async" }

A rider qualifies as potential air taxi demand only if the estimated air taxi trip is at least 40% faster than the original ground trip.

![](/assets/blog/insights-on-strategic-air-taxi-network-infrastructure-locations-using-an-iterative-constrained-clustering-approach/figure-06.png){: width="478" height="70" loading="lazy" decoding="async" }

This filtering step is important because it keeps the model from treating air taxis as a universal replacement for city taxis. The service is valuable when flight meaningfully beats the street network. For short trips, awkward access legs, or routes with limited time savings, the regular taxi still wins.

## Why Plain Clustering Is Not Enough

Once the eligible demand is estimated, the next question is where to place the infrastructure. A simple clustering algorithm such as k-means can group pickup and drop-off points, but it has a weakness: its starting points are usually random. With a large, constrained, real-world transportation problem, random starts can lead to locations that are mathematically convenient but operationally weak.

The paper addresses this with a multimodal transportation-based warm start. Instead of beginning with arbitrary cluster centers, the algorithm starts from candidate locations that already make transportation sense: airports, transit hubs, tourism centers, and other places where passengers are likely to connect between modes.

For each possible vertistop, the model measures how much demand it can serve within the one-mile ground-access limit. If a candidate location captures a large share of pickup and drop-off points nearby, it receives a higher fitness score.

![](/assets/blog/insights-on-strategic-air-taxi-network-infrastructure-locations-using-an-iterative-constrained-clustering-approach/figure-07.jpg){: width="55" height="33" loading="lazy" decoding="async" }

The top candidate locations are then used as smarter initial seeds for the constrained clustering process. This is the key idea: the algorithm is still data-driven, but it begins with locations that reflect how people already move through the city.

## Evaluating the Cluster Quality

To judge the resulting clusters, the authors use the Davies-Bouldin Index. This metric compares how compact each cluster is with how far apart the clusters are from one another. It is useful here because the dataset is very large. Some other cluster-validation metrics require heavy pairwise distance calculations across many points, which becomes expensive at this scale.

In practical terms, the evaluation asks whether the proposed infrastructure locations are serving tight, meaningful areas of demand or creating messy, overlapping service regions.

## What the Results Suggest

<figure>
  <img src="/assets/blog/insights-on-strategic-air-taxi-network-infrastructure-locations-using-an-iterative-constrained-clustering-approach/figure-08.png" alt="Passenger distribution over time" width="800" height="363" loading="lazy" decoding="async">
  <figcaption>Passenger distribution over time</figcaption>
</figure>

![](/assets/blog/insights-on-strategic-air-taxi-network-infrastructure-locations-using-an-iterative-constrained-clustering-approach/figure-09.png){: width="800" height="141" loading="lazy" decoding="async" }

![](/assets/blog/insights-on-strategic-air-taxi-network-infrastructure-locations-using-an-iterative-constrained-clustering-approach/figure-10.png){: width="800" height="141" loading="lazy" decoding="async" }

![](/assets/blog/insights-on-strategic-air-taxi-network-infrastructure-locations-using-an-iterative-constrained-clustering-approach/figure-11.png){: width="800" height="141" loading="lazy" decoding="async" }

![](/assets/blog/insights-on-strategic-air-taxi-network-infrastructure-locations-using-an-iterative-constrained-clustering-approach/figure-12.png){: width="800" height="141" loading="lazy" decoding="async" }

![](/assets/blog/insights-on-strategic-air-taxi-network-infrastructure-locations-using-an-iterative-constrained-clustering-approach/figure-13.png){: width="800" height="392" loading="lazy" decoding="async" }

![](/assets/blog/insights-on-strategic-air-taxi-network-infrastructure-locations-using-an-iterative-constrained-clustering-approach/figure-14.png){: width="1303" height="654" loading="lazy" decoding="async" }

The strongest takeaway is that air taxi demand is not evenly spread across the city. It concentrates around places where long, time-sensitive, and congestion-heavy trips are common. According to the paper's base-case results, major facilities would be needed around JFK International Airport and South Central Park, with smaller stops suggested around locations such as the World Trade Center, Washington Square, and Allerton Ballfields.

That result is intuitive, but the method gives it structure. Airports matter because they generate long, high-value trips. Dense central-city locations matter because they create enough nearby demand to justify frequent operations. Some smaller locations matter because they extend network coverage without requiring the same level of capacity as the largest facilities.

The paper also evaluates sensitivity around willingness to fly, demand fulfillment, and time-cost tradeoffs. One interesting insight is that willingness-to-fly rates and percentage time savings do not dramatically change the recommended locations in the study. The more sensitive issue is the on-road access limit. In other words, where passengers can conveniently reach a vertistop may matter as much as the flight itself.

## Why This Matters for Air Taxi Planning

For advanced air mobility, infrastructure location is a network design problem, not a branding exercise. The first vertistops should not simply be placed where rooftops are available or where a city wants to signal innovation. They need to sit where demand, access, capacity, and multimodal connections overlap.

This study is valuable because it connects future air mobility planning to actual travel behavior. It shows how existing taxi data can be transformed into a practical decision-support tool: estimate which trips are worth serving by air, constrain the access distance, cluster the demand, and then test whether the resulting locations are coherent.

It also highlights a useful planning discipline. Early networks should probably be staged. Large-capacity facilities belong where demand is consistently strong. Smaller stops can expand reach into secondary demand pockets. As ridership, regulation, vehicle performance, and public acceptance evolve, the network can be updated with newer data.

## Limitations to Keep in Mind

The model is only as realistic as its assumptions. Taxi trips are a useful proxy, but they are not the same as future air taxi demand. Pricing, weather, passenger comfort, safety perception, regulation, noise, land use, battery charging, vertiport construction cost, and community acceptance all affect whether a proposed location is viable.

The dataset is also historical. New York travel patterns have changed since 2014 and 2015, especially after the growth of ride-hailing and shifts in commuting behavior. The method remains useful, but planners applying it today would need fresher mobility data and local constraints.

Even with those limitations, the paper makes a strong point: successful air taxi networks will be won or lost before the aircraft takes off. The placement of the stops determines how many people can reach the system, how much time they actually save, and whether the network becomes a real transportation service rather than a novelty.

## References

1. Rajendran, S. and Zack, J., 2019. Insights on strategic air taxi network infrastructure locations using an iterative constrained clustering approach. Transportation Research Part E: Logistics and Transportation Review, 128, pp. 470-505. https://doi.org/10.1016/j.tre.2019.06.003
2. Holden, J. and Goel, N., 2016. Fast-forwarding to a future of on-demand urban air transportation. San Francisco, CA.
