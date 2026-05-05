---
layout: article
title: Assessing Urban Air Mobility Attractiveness in Jakarta — A Case Study
date: '2024-08-15'
categories:
- Advanced Air Mobility
reading_time: 7
sitemap: true
robots: index,follow
description: A practical look at a Jakarta UAM case study that estimates when airport travelers may prefer air mobility over ground transportation.
image: /assets/blog/assessing-urban-air-mobility-attractiveness-in-jakarta-a-case-study/cover.png
source_url: https://doi.org/10.2514/6.2024-3557
---

Jakarta is one of the clearest places to ask whether Urban Air Mobility can solve a real transportation problem. The city is dense, economically important, and heavily congested. Airport access is especially painful because travelers moving between Soekarno-Hatta International Airport (CGK) and the Jakarta metro area can lose a large amount of time on the ground.

Gerardus, Edsel, Gunady, and DeLaurentis study this problem by asking a focused question: when would travelers prefer a UAM trip over a ground-only trip between CGK and locations across Jakarta?

The answer depends on the value of time. UAM becomes attractive only when travelers value saved time enough to justify the added cost and transfer complexity.

## Why Jakarta Is a Useful Case Study

Many Asian megacities face the same mobility challenge: high population density, fast economic growth, severe congestion, and rising transportation demand. Jakarta is a strong example because road travel can be slow and unreliable, while airport trips are time-sensitive.

UAM is not presented here as a replacement for public transport or road travel. It is evaluated as a premium airport-access option for travelers who may pay more to save time.

The study focuses on demand modeling rather than the full infrastructure and certification problem. That makes the paper useful as an early attractiveness analysis: if the service existed, which trips would be likely to choose it?

## Modeling the UAM Option

The paper builds on a modular computational framework for UAM network analysis. The framework compares a ground-only trip with a mixed ground-and-air trip.

<figure>
  <img src="/assets/blog/assessing-urban-air-mobility-attractiveness-in-jakarta-a-case-study/cover.png" alt="UAM network model of the modular computational framework">
  <figcaption>UAM network model of the modular computational framework</figcaption>
</figure>

The comparison uses an effective cost metric. Effective cost combines two pieces:

1. Operating cost, based on the cost of using ground and air vehicles.
2. Time cost, based on total trip time multiplied by the passenger's value of time.

![](/assets/blog/assessing-urban-air-mobility-attractiveness-in-jakarta-a-case-study/figure-02.png)

This is a practical way to model mode choice. A traveler does not simply choose the fastest trip or the cheapest trip. They choose based on the tradeoff between time and money. A high-value-of-time traveler may prefer UAM even if it costs more, while a low-value-of-time traveler may stay with ground transport.

## Demand Data Sources

The study uses several data sources to approximate airport-access demand.

First, the authors collect points of interest across Jakarta, including location types such as hotels, apartments, hostels, museums, parks, and other urban destinations. These points are divided into likely origins and destinations. Rest-related locations such as apartments and hostels are treated as possible origins, while recreational or activity-oriented locations can serve as destinations.

<figure>
  <img src="/assets/blog/assessing-urban-air-mobility-attractiveness-in-jakarta-a-case-study/figure-03.png" alt="Jakarta points of interest and existing helipads">
  <figcaption>Jakarta points of interest and existing helipads</figcaption>
</figure>

The authors also map existing helipads. This matters because early UAM service may rely on existing aviation infrastructure before a purpose-built vertiport network is available. The mapped helipads are concentrated in central Jakarta and the northwest region near Tangerang.

Second, the study uses FlightRadar24 data for commercial flights arriving at and departing from CGK on March 14, 2024. The date is selected as a normal weekday without major holidays or unusual travel spikes. After filtering unknown, canceled, and diverted flights, the dataset includes 368 departures and 368 arrivals, for 736 total flights.

## Estimating the Passenger Market

The target market is not assumed to include every airport passenger. The study focuses on passengers in premium economy, business class, first class, or premium subclasses on low-cost carriers. This is reasonable because UAM is modeled as a premium mobility service.

The authors assume an 80% commercial flight load factor, close to the International Air Transport Association's global March 2024 passenger load factor. Passenger origins and destinations inside Jakarta are then assigned using population density weighting. Districts with higher population density receive more simulated passenger trips.

This is a simplification. Real airport demand depends on hotels, offices, income, trip purpose, tourism, business districts, and household distribution. But for an early case study, population-weighted sampling provides a tractable way to estimate spatial demand.

## Departing Passenger Scenario

For departing passengers, the trip begins somewhere in Jakarta and ends at CGK airport. The model assumes passengers want to arrive at the airport 60 minutes before their flight.

To estimate when each passenger must leave, the model calculates the geodesic distance between the passenger's origin and CGK using the haversine formula. Ground travel time is estimated using an average Jakarta driving speed of about 26 km/h from the TomTom Traffic Index for March 14, 2024.

![](/assets/blog/assessing-urban-air-mobility-attractiveness-in-jakarta-a-case-study/figure-04.png)

The result is a modeled departure time from the passenger's origin. The framework then compares the ground-only option with the UAM option.

<figure>
  <img src="/assets/blog/assessing-urban-air-mobility-attractiveness-in-jakarta-a-case-study/figure-05.png" alt="UAM network model adapted for departing passenger scenario">
  <figcaption>UAM network model adapted for departing passenger scenario</figcaption>
</figure>

This scenario is important because missing a flight is costly. Travelers going to the airport may value reliability and time savings more than ordinary city travelers.

## Arriving Passenger Scenario

For arriving passengers, the trip begins at CGK and ends somewhere in Jakarta. The model assumes passengers spend about one hour after landing on security, baggage claim, and airport navigation before leaving the airport.

The final destination is sampled from the Jakarta metropolitan area using the same demand-generation approach. The framework then evaluates whether the traveler would choose ground transportation or UAM based on effective cost.

<figure>
  <img src="/assets/blog/assessing-urban-air-mobility-attractiveness-in-jakarta-a-case-study/figure-06.png" alt="UAM network model adapted for arriving passenger scenario">
  <figcaption>UAM network model adapted for arriving passenger scenario</figcaption>
</figure>

The arriving and departing cases are not identical. Airport-to-city trips and city-to-airport trips can have different time pressure, spatial demand patterns, and effective cost outcomes.

## Results: When UAM Becomes Attractive

<figure>
  <img src="/assets/blog/assessing-urban-air-mobility-attractiveness-in-jakarta-a-case-study/figure-07.png" alt="Fraction of UAM-preferred trips between CGK and Jakarta metro area">
  <figcaption>Fraction of UAM-preferred trips between CGK and Jakarta metro area</figcaption>
</figure>

The results show that UAM-preferred trips begin to appear when the value of time reaches about USD 75 per hour. Below that threshold, ground transportation remains more attractive for most travelers.

For trips from the Jakarta metro area to CGK, UAM captures about 55% of trips when value of time reaches USD 600 per hour. For trips from CGK to the Jakarta metro area, UAM captures roughly 65% of trips when value of time reaches USD 400 per hour.

The finding is straightforward: UAM demand is strongest among travelers with high value of time. The service becomes more attractive when the cost of losing time in traffic is high enough to outweigh the cost of flying.

## What the Study Suggests

The Jakarta case study suggests that airport-access UAM may be more attractive than general citywide air taxi service in early deployment. Airport trips are predictable, time-sensitive, and concentrated around a major node. That makes them easier to model and potentially easier to serve.

The study also suggests that value of time is a critical modeling variable. A UAM service may look unattractive for the average traveler but attractive for premium passengers, business travelers, urgent trips, or travelers facing flight departure deadlines.

Another important finding is that existing helipads may not be enough. If helipad locations do not align with actual high-value passenger origins and destinations, demand capture will be limited. Purpose-built vertiports or improved access links may be needed.

## Limitations

The model uses simplifying assumptions. Passenger origins and destinations are sampled from population density and points of interest, not observed airport passenger itineraries. Flight data comes from a single weekday. Ground travel time is approximated with average speed and geodesic distance rather than a full road network simulation.

The model also focuses on effective cost, not the full set of adoption factors. Real passengers may care about safety perception, weather reliability, baggage handling, booking convenience, brand trust, vertiport access, noise, privacy, and regulatory confidence.

Finally, willingness to pay is represented through value of time. That is useful, but stated-preference or revealed-preference data from Jakarta travelers would strengthen future models.

## Final Thoughts

Jakarta is a compelling UAM case because congestion is severe and airport trips are time-sensitive. The study shows that UAM can become attractive, but mainly for travelers whose time is valuable enough to justify the premium.

The practical takeaway is that early UAM deployment in Jakarta should probably focus on airport access and high-value travelers rather than broad mass-market service. The demand is not simply a function of population size. It depends on value of time, vertiport access, ground congestion, and how well the air network connects to real passenger origins and destinations.

For Jakarta, UAM may be most promising as a targeted airport mobility service first, with broader urban applications depending on infrastructure, pricing, and public acceptance.

## References

1. Gerardus, J., Edsel, A., Gunady, N. and DeLaurentis, D.A., 2024. Assessing Urban Air Mobility Attractiveness in Jakarta - A Case Study. In *AIAA AVIATION FORUM AND ASCEND 2024* (p. 3557). https://doi.org/10.2514/6.2024-3557
2. Maheshwari, A., Mudumba, S.V., Sells, B.E., DeLaurentis, D.A. and Crossley, W.A., 2020. Identifying and analyzing operational limits for passenger-carrying urban air mobility missions. In *AIAA AVIATION 2020 FORUM*. https://doi.org/10.2514/6.2020-2913
