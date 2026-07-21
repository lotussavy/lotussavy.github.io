---
layout: article
seo_title: "Business Travel Demand for Local AAM Markets"
title: Evaluation of business travel as a potential customer field of a local AAM market
date: '2024-06-13'
categories:
- Advanced Air Mobility
reading_time: 7
sitemap: true
robots: index,follow
description: A clear look at how business travel demand can be modeled as a potential early market for Advanced Air Mobility in Hamburg.
image: /assets/blog/evaluation-of-business-travel-as-a-potential-customer-field-of-a-local-aam-market/cover.png
source_url: https://elib.dlr.de/196084/
---

Business travelers are an attractive customer group for Advanced Air Mobility because they often value time savings more than leisure travelers or daily commuters. If an air taxi can cut travel time between a city center and a business destination, a company may be willing to pay a premium.

But that does not mean business travel is automatically a strong AAM market. The total market may be smaller than commuting demand, routes may be unevenly distributed, and the service still has to beat cars, taxis, and public transport on the full door-to-door trip.

Pertz, Lütjens, and Gollnick study this question using Hamburg, Germany, as a local case study. Their paper evaluates whether corporate meeting travel could become a meaningful demand segment for a local AAM service.

## Why Business Travel Is Worth Studying

In conventional aviation, business travelers are highly valuable because they often pay more, book closer to departure, and place a high value on time. The paper notes that business travelers can account for a large share of airline revenue even when they are a smaller share of passengers.

For AAM, the logic is similar. A passenger traveling for a meeting may care less about minimizing fare and more about arriving on time, reducing wasted travel time, and fitting more meetings into a day. That makes business travel a natural use case to test.

However, business travel is not one single behavior. It includes meetings, incentives, conventions, exhibitions, corporate hospitality, and blended business-leisure travel. The authors narrow the study to corporate meetings in the Hamburg metropolitan area so the model has a defined purpose and geography.

## Modeling Business Travel Demand

The model begins with trip generation. A business trip starts and ends at a "business cell," which is a location with at least one employee and potentially residents as well. The model cross-combines these cells to create possible itineraries, then removes very short trips that are unlikely to be relevant for AAM.

In Germany, the median business trip distance of 5.7 km is used as a threshold for filtering short connections. After that, travelers are distributed across the remaining itineraries based on destination potential and the number of passengers originating from each cell.

This matters because AAM demand is not only about distance. A 40 km trip between two low-activity locations may generate little demand, while a similar trip between a business district and a dense commuter belt may be more meaningful.

## How the Mode Choice Model Works

Each itinerary is evaluated with a mode choice model. The traveler may choose between modes such as car, taxi, public transport, and AAM. The model compares each option using a utility function that includes travel time, cost, and mode-specific preferences.

![](/assets/blog/evaluation-of-business-travel-as-a-potential-customer-field-of-a-local-aam-market/cover.png){: width="613" height="266" loading="eager" decoding="async" fetchpriority="high" }

![](/assets/blog/evaluation-of-business-travel-as-a-potential-customer-field-of-a-local-aam-market/figure-02.png){: width="800" height="256" loading="lazy" decoding="async" }

For cars and taxis, travel time is calculated through OpenTripPlanner and then adjusted using the TomTom Traffic Index for Hamburg. The traffic adjustment increases road travel time by 36%, reflecting congestion. Taxi waiting time is set to 5 minutes, and taxi cost includes a base fare plus a per-kilometer rate.

Public transport time is also calculated with OpenTripPlanner, using schedules and connection options. Public transport costs depend on whether the trip stays within Hamburg's inner tariff zone or extends into surrounding areas.

The model is calibrated using Hamburg traffic demand data and the open-source Biogeme package. The estimated parameters capture how strongly business travelers respond to time and cost.

![](/assets/blog/evaluation-of-business-travel-as-a-potential-customer-field-of-a-local-aam-market/figure-03.png){: width="432" height="120" loading="lazy" decoding="async" }

For this use case, the model estimates a value of time of about `EUR 2` per saved minute. That is high, but plausible for business travel. It means time savings can justify higher fares more easily than in commuting markets.

## Adding the AAM Mode

The AAM journey is modeled as a three-part trip.

First, the passenger travels from the origin to a vertiport. Then they fly between vertiports. Finally, they travel from the destination vertiport to the final destination.

<figure>
  <img src="/assets/blog/evaluation-of-business-travel-as-a-potential-customer-field-of-a-local-aam-market/figure-04.png" alt="AAM mode" width="758" height="563" loading="lazy" decoding="async">
  <figcaption>AAM mode</figcaption>
</figure>

If the access or egress distance is less than 1.7 km, the passenger walks. If it is longer, the passenger uses a taxi. This is a practical detail because access time can make or break AAM. A fast flight is not useful if the passenger spends too long getting to and from the vertiports.

The flight itself is simplified into vertical climb, cruise, and descent. The study uses two AAM vehicle configurations. A multicopter serves shorter urban distances, while a vectored-thrust vehicle serves longer routes between cities and surrounding areas. If the cruise distance exceeds 60% of the first vehicle's maximum range, the model switches to the second configuration.

![](/assets/blog/evaluation-of-business-travel-as-a-potential-customer-field-of-a-local-aam-market/figure-05.png){: width="748" height="327" loading="lazy" decoding="async" }

![](/assets/blog/evaluation-of-business-travel-as-a-potential-customer-field-of-a-local-aam-market/figure-06.png){: width="748" height="327" loading="lazy" decoding="async" }

This distinction is important. AAM economics depend heavily on vehicle range, cost per kilometer, utilization, and capacity. The right aircraft for a short city hop may not be the right aircraft for a longer metropolitan-area connection.

## What the Hamburg Results Show

<figure>
  <img src="/assets/blog/evaluation-of-business-travel-as-a-potential-customer-field-of-a-local-aam-market/figure-07.png" alt="Histogram of road distance in the network" width="800" height="545" loading="lazy" decoding="async">
  <figcaption>Histogram of road distance in the network</figcaption>
</figure>

The modeled itinerary distances show one major peak around 25 km, representing trips within the Hamburg city center, and another local peak around 55 km, representing travel to the commuter belt around Hamburg. That second peak is especially relevant for AAM because it is far enough for air travel to save time but still local enough to fit short- and mid-range aircraft missions.

The cost structure also shows two AAM regimes. Shorter routes use one vehicle configuration, while longer routes shift to another. This creates visible cost changes around the commuter-belt distance.

![](/assets/blog/evaluation-of-business-travel-as-a-potential-customer-field-of-a-local-aam-market/figure-08.png){: width="260" height="141" loading="lazy" decoding="async" }

Most modeled AAM business demand appears in the 40-60 km flight-distance range. This is where the service can meaningfully connect Hamburg's center with surrounding business destinations. Shorter trips are less attractive because access, egress, and fare structure reduce the advantage of flying.

![](/assets/blog/evaluation-of-business-travel-as-a-potential-customer-field-of-a-local-aam-market/figure-09.png){: width="800" height="607" loading="lazy" decoding="async" }

The study finds that AAM travel time is roughly 85% of taxi travel time for relevant itineraries, while AAM costs are about 45% higher than taxi costs. That is the tradeoff at the heart of the market: business travelers may pay more when the time savings are valuable enough, but the service is not automatically dominant.

## Sensitivity to Fare and Vehicle Assumptions

The demand results are sensitive to AAM cost assumptions. When AAM fares rise, demand falls. For business passengers with a value of time of `EUR 2` per minute, the paper reports a 17% demand drop when the fare per kilometer increases to `EUR 5.50` and `EUR 2.50` for the two vehicle configurations.

Business travelers are less cost-sensitive than commuters, but they are not insensitive. If AAM becomes too expensive, companies and employees will still choose taxis, cars, or public transport.

The study also shows that vehicle range assumptions matter. If the first vehicle can cover the commuter-belt distance using its full range, costs increase and modeled demand can drop sharply. This highlights a practical planning point: aircraft performance, fare structure, and route design cannot be separated.

## Why This Matters for AAM Planning

The paper is useful because it studies a customer group that is often mentioned but not deeply modeled. Business travelers are plausible early AAM users because time savings matter to them. But the study shows that this market depends on very specific conditions:

1. The route must be long enough for flight time savings to matter.
2. Vertiports must be close enough to origins and destinations.
3. Fares must stay within a range that employers can justify.
4. Vehicle performance must match the actual trip-distance distribution.
5. The market size must be large enough to support operations.

This is a more realistic view than simply assuming business travelers will pay for any premium mobility service.

## Limitations

The study focuses on corporate meetings in Hamburg, so the results should not be copied directly to other cities. A business travel model for New York, London, Singapore, or Dallas would need different employment data, congestion levels, public transport quality, taxi costs, vertiport assumptions, and corporate travel behavior.

The model also does not fully capture employer-side productivity considerations. In real business travel, companies may care about whether employees can work during the trip, whether the service is reliable, whether delays are predictable, and whether travel policies allow the mode.

Even with those limitations, the framework is valuable. It shows how AAM demand can be modeled by travel purpose, not just by geography.

## Final Thoughts

Business travel could be an important early market for local AAM services, but only where the value of time is high enough, access to vertiports is convenient, and the route distance creates meaningful savings over ground transport.

The Hamburg case study suggests that the strongest opportunity may sit in the middle-distance commuter-belt range, especially around 40-60 km. That is where AAM has enough distance to create time savings without stretching the service into missions that become too costly.

For AAM operators, the lesson is clear: the customer segment matters. Business travelers may be more willing to pay, but the service still has to solve a real door-to-door travel problem.

## References

1. Pertz, J., Lütjens, K. and Gollnick, V., 2023. Evaluation of business travel as a potential customer field of a local AAM market. 26th Air Transport Research Society World Conference, Kobe, Japan. https://elib.dlr.de/196084/
2. Paper PDF. https://elib.dlr.de/196084/1/114_Pertz.pdf
