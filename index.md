---
layout: default
title: "Kamal Acharya"
description: "Kamal Acharya is a Ph.D. candidate at UMBC researching interpretable AI, Advanced Air Mobility demand modeling, neurosymbolic systems, forecasting, and optimization."
permalink: /
---

<section class="home-hero">
  {% assign profile_image = site.static_files | where_exp: "file", "file.path == '/assets/images/Profile.png'" | first %}
  <div class="home-identity">
    {% if profile_image %}
      <img
        class="home-photo"
        src="{{ '/assets/images/Profile.png' | relative_url }}"
        alt="Portrait of Kamal Acharya"
        loading="eager"
      />
    {% else %}
      <div class="home-mark" aria-hidden="true">KA</div>
    {% endif %}
    <div>
      <h1 class="home-title">Kamal Acharya</h1>
      <p class="home-subtitle">Ph.D. Candidate, Information Systems, UMBC</p>
    </div>
  </div>
  <p class="home-intro">
    I build <strong>interpretable AI systems</strong> for <strong>Advanced Air Mobility planning</strong>,
    connecting neurosymbolic modeling, forecasting, and optimization to support safer transportation decisions.
  </p>
  <p class="home-collab-line">
    Open to collaboration in AAM forecasting, trustworthy AI, and neurosymbolic systems.
  </p>
  <p class="home-cta-group">
    <a class="home-action-link" href="{{ '/publications' | relative_url }}">View Publications</a>
    <a class="home-action-link home-action-link-secondary" href="{{ '/contact' | relative_url }}">Contact Me</a>
  </p>
</section>

<section class="home-section home-trust-section">
  <h2>Research Networks</h2>
  <div class="home-trust-strip">
    <span>UMBC</span>
    <span>NASA ULI</span>
    <span>IEEE</span>
    <span>IJCAI</span>
  </div>
</section>

<section class="home-section">
  <h2>Professional Snapshot</h2>
  <div class="home-card-grid">
    <article class="home-card">
      <img src="{{ '/assets/icons/briefcase.svg' | relative_url }}" alt="" />
      <h3>Current Role</h3>
      <p>Graduate Research Assistant at UMBC, contributing to NASA ULI research initiatives.</p>
    </article>
    <article class="home-card">
      <img src="{{ '/assets/icons/book.svg' | relative_url }}" alt="" />
      <h3>Research Output</h3>
      <p>15+ publications across IEEE journals and major AI and transportation conferences.</p>
    </article>
    <article class="home-card">
      <img src="{{ '/assets/icons/chip.svg' | relative_url }}" alt="" />
      <h3>Core Areas</h3>
      <p>Neurosymbolic AI, AAM demand modeling, optimization, and trustworthy AI systems.</p>
    </article>
  </div>
</section>

<section class="home-section">
  <h2>What I Am Working On Now</h2>
  <ul class="home-focus-list">
    <li>
      <img src="{{ '/assets/icons/research.svg' | relative_url }}" alt="" />
      <span>Extending temporal demand forecasting for regional and urban AAM use cases.</span>
    </li>
    <li>
      <img src="{{ '/assets/icons/research.svg' | relative_url }}" alt="" />
      <span>Designing interpretable neurosymbolic pipelines that preserve controllability and domain logic.</span>
    </li>
    <li>
      <img src="{{ '/assets/icons/research.svg' | relative_url }}" alt="" />
      <span>Applying neural-accelerated optimization to resilience and disaster-planning scenarios.</span>
    </li>
  </ul>
</section>

<section class="home-section">
  <h2>Selected Work</h2>
  <div class="home-work-list">
    <article class="home-work-item">
      <h3>Integrating Neurosymbolic AI in Advanced Air Mobility</h3>
      <p><span class="home-badge">IJCAI 2025</span> Survey paper mapping practical integration paths for neurosymbolic AAM systems.</p>
    </article>
    <article class="home-work-item">
      <h3>Demand Modeling for Advanced Air Mobility</h3>
      <p><span class="home-badge">IEEE TITS</span> Journal publication analyzing open challenges and modeling opportunities for AAM demand forecasting.</p>
    </article>
    <article class="home-work-item">
      <h3>Symbolic Knowledge Distillation of Large Language Models</h3>
      <p><span class="home-badge">IEEE TAI</span> Framework for extracting symbolic structures from LLMs while retaining prediction utility.</p>
    </article>
  </div>
  <p class="home-cta-group">
    <a class="home-action-link" href="{{ '/publications' | relative_url }}">View Full Publication List</a>
    <a class="home-action-link home-action-link-secondary" href="{{ '/research' | relative_url }}">Explore Research Themes</a>
  </p>
</section>
