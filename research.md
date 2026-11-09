---
layout: default
title: "Research in Advanced Air Mobility and Neurosymbolic AI"
seo_title: "Research | AAM Demand Modeling and eVTOL Optimization | Kamal Acharya"
description: "Kamal Acharya’s completed PhD research in Advanced Air Mobility demand modeling and neurosymbolic AI, and ongoing Baylor research in eVTOL scheduling and optimization."
permalink: /research/
last_modified_at: 2026-11-09
---

{% include research-interactive-hub.html %}

{% assign research_ev_video = site.static_files | where_exp: "file", "file.path == '/assets/videos/Final-48s.mp4'" | first %}
{% assign research_ev_poster = site.static_files | where_exp: "file", "file.path == '/assets/images/evtol-research-poster.jpg'" | first %}
{% if research_ev_video %}
<section class="research-section" aria-labelledby="research-evtol-video-title">
  <p class="research-flow-eyebrow">Current work · Baylor University</p>
  <h2 id="research-evtol-video-title">eVTOL fleet scheduling in motion</h2>
  <p>How does a fleet plan change when new passenger requests arrive? This 48-second video introduces the difference between planning a full operating schedule and repeatedly updating aircraft assignments through a rolling horizon.</p>
  <div style="max-width:900px;margin:1.15rem auto;border-radius:14px;overflow:hidden;background:#102334;box-shadow:0 12px 30px rgba(13,38,55,.12)">
    <video controls playsinline preload="none" style="display:block;width:100%;aspect-ratio:16/9;background:#102334" {% if research_ev_poster %}poster="{{ '/assets/images/evtol-research-poster.jpg' | relative_url }}"{% endif %} aria-label="48-second eVTOL fleet scheduling research presentation">
      <source src="{{ '/assets/videos/Final-48s.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support this video. <a href="{{ '/assets/videos/Final-48s.mp4' | relative_url }}">View the video file</a>.
    </video>
  </div>
  <p style="font-size:.85rem;color:#506b7a">Ongoing research at Baylor's AVIA Lab. Comparisons are specific to the study scenarios shown; they should not be interpreted as validated real-world operating performance.</p>
</section>
{% endif %}

<section class="research-section">
  <h2>Research Talks and Presentations</h2>
  <div class="research-talk-links">
    <a href="{{ '/talks/#invited-talks' | relative_url }}">Invited Talks <span aria-hidden="true">→</span></a>
    <a href="{{ '/talks/#conference-presentations' | relative_url }}">Conference Presentations <span aria-hidden="true">→</span></a>
    <a href="{{ '/talks/#poster-presentations' | relative_url }}">Posters &amp; Research Seminars <span aria-hidden="true">→</span></a>
  </div>
</section>

<section class="research-section research-support-section">
  <h2>Research Support and Collaborating Institutions</h2>
  <div class="research-support-grid" aria-label="Research support organizations">
    <a class="research-support-card" href="https://www.nasa.gov/mission/advanced-air-mobility/" target="_blank" rel="noopener noreferrer" aria-label="NASA Advanced Air Mobility">
      <img src="{{ '/assets/logos/NASA-logo.png' | relative_url }}" alt="NASA" width="1638" height="1362" loading="lazy" decoding="async" />
    </a>
    <a class="research-support-card" href="https://www.nsf.gov/" target="_blank" rel="noopener noreferrer" aria-label="National Science Foundation">
      <img src="{{ '/assets/logos/nsf-logo.gif' | relative_url }}" alt="National Science Foundation" width="98" height="98" loading="lazy" decoding="async" />
    </a>
    <a class="research-support-card" href="https://umbc.edu/" target="_blank" rel="noopener noreferrer" aria-label="University of Maryland, Baltimore County">
      <img src="{{ '/assets/logos/umbc-logo.png' | relative_url }}" alt="University of Maryland, Baltimore County" width="1200" height="1848" loading="lazy" decoding="async" />
    </a>
    <a class="research-support-card" href="https://www.baylor.edu/" target="_blank" rel="noopener noreferrer" aria-label="Baylor University">
      <img src="{{ '/assets/logos/baylor-university.svg' | relative_url }}" alt="Baylor University" width="250" height="46" loading="lazy" decoding="async" />
    </a>
    <a class="research-support-card" href="https://erau.edu/" target="_blank" rel="noopener noreferrer" aria-label="Embry-Riddle Aeronautical University">
      <img class="research-support-logo-erau" src="{{ '/assets/logos/embry-riddle-aeronautical-university.svg' | relative_url }}" alt="Embry-Riddle Aeronautical University" width="242" height="40" loading="lazy" decoding="async" />
    </a>
    <a class="research-support-card" href="https://www.ncat.edu/cobe/transportation-institute/catm/" target="_blank" rel="noopener noreferrer" aria-label="Center for Advanced Transportation Mobility">
      <img src="{{ '/assets/logos/catm-logo.png' | relative_url }}" alt="Center for Advanced Transportation Mobility" width="682" height="314" loading="lazy" decoding="async" />
    </a>
    <a class="research-support-card" href="https://www.bgsu.edu/" target="_blank" rel="noopener noreferrer" aria-label="Bowling Green State University">
      <img src="{{ '/assets/logos/bgsu-stacked-logo.svg' | relative_url }}" alt="Bowling Green State University" width="156" height="67" loading="lazy" decoding="async" />
    </a>
  </div>
</section>

<section class="research-section research-collaboration">
  <div>
    <p class="research-eyebrow">Collaboration</p>
    <h2>Work With Me</h2>
    <p>I welcome collaborations involving advanced mobility modeling, interpretable AI, and optimization for resilient transportation systems.</p>
  </div>
  <a class="home-action-link" href="{{ '/contact/' | relative_url }}">Get in Touch</a>
</section>
