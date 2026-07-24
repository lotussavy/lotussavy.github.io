---
layout: default
title: "Publications | Kamal Acharya | Advanced Air Mobility and Neurosymbolic AI"
seo_title: "Publications | Kamal Acharya"
description: "Explore Kamal Acharya's dissertation and publications in Advanced Air Mobility, neurosymbolic AI, transportation, optimization, and cybersecurity."
permalink: /publications/
last_modified_at: 2026-04-30
---

<section class="pub-hero">
  {% assign journal_count = site.data.publications | where: "type", "journal" | size %}
  {% assign conference_count = site.data.publications | where: "type", "conference" | size %}
  {% assign book_chapter_count = site.data.publications | where: "type", "book_chapter" | size %}
  {% assign dissertation_count = site.data.publications | where: "type", "dissertation" | size %}
  <h1>Publications</h1>
  <p>Doctoral research and peer-reviewed work in Advanced Air Mobility, neurosymbolic AI, intelligent transportation, optimization, and trustworthy machine learning.</p>
  <nav class="pub-jump-nav" aria-label="Publication overview and page links">
    <span>Academic works</span>
    <a href="#doctoral-dissertation">Dissertation <span>{{ dissertation_count }}</span></a>
    <a href="#journal-articles">Journal Articles <span>{{ journal_count }}</span></a>
    <a href="#conference-proceedings">Conference Proceedings <span>{{ conference_count }}</span></a>
    <a href="#book-chapters">Book Chapters <span>{{ book_chapter_count }}</span></a>
  </nav>
  <p class="pub-links">
    <a href="https://scholar.google.com/citations?user=0uLqckgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
    <a href="https://orcid.org/0000-0002-9712-0265" target="_blank" rel="noopener noreferrer">ORCID</a>
  </p>
</section>

{% assign dissertations = site.data.publications | where: "type", "dissertation" %}
{% if dissertations.size > 0 %}
<section class="pub-dissertation-section" id="doctoral-dissertation">
  <h2>Doctoral Dissertation</h2>
  {% for dissertation in dissertations %}
  <article class="pub-dissertation-card">
    <div class="pub-dissertation-content">
      <p class="pub-dissertation-label">Ph.D. Dissertation · {{ dissertation.year }}</p>
      <h3><a href="{{ '/publications/' | append: dissertation.slug | append: '/' | relative_url }}">{{ dissertation.title }}</a></h3>
      <p class="pub-dissertation-meta">{{ dissertation.degree }} · {{ dissertation.venue }}</p>
      <p>{{ dissertation.featured_summary | default: dissertation.plain_language_summary }}</p>
    </div>
    <div class="pub-dissertation-actions">
      <a class="pub-dissertation-primary" href="{{ '/publications/' | append: dissertation.slug | append: '/' | relative_url }}">View Summary</a>
      <a href="{{ dissertation.pdf | relative_url }}" target="_blank" rel="noopener noreferrer">Download PDF</a>
    </div>
  </article>
  {% endfor %}
</section>
{% endif %}

{% assign publication_sections = "journal:Journal Articles:journal-articles|conference:Conference Proceedings:conference-proceedings|book_chapter:Book Chapters:book-chapters" | split: "|" %}
{% for section_config in publication_sections %}
{% assign section_parts = section_config | split: ":" %}
{% assign publication_type = section_parts[0] %}
{% assign section_title = section_parts[1] %}
{% assign section_id = section_parts[2] %}
{% assign section_publications = site.data.publications | where: "type", publication_type %}
{% assign publications_by_year = section_publications | group_by: "year" | sort: "name" | reverse %}
<section class="pub-list-section" id="{{ section_id }}">
  <h2>{{ section_title }}</h2>
{% for year_group in publications_by_year %}
  <section class="pub-year-group">
    <h3>{{ year_group.name }}</h3>
    <ol class="pub-list">
{% for publication in year_group.items %}
      <li class="pub-entry">
        <span class="pub-authors">{% for author in publication.authors %}{% if author == "Song H." or author == "Song H. H." %}<a href="https://scholar.google.com/citations?user=iJ_XxxoAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Sun L." %}<a href="https://scholar.google.com/citations?user=zvMPg9gAAAAJ&amp;hl=en&amp;oi=ao" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Velasquez A." %}<a href="https://scholar.google.com/citations?hl=en&amp;user=1g3pA4cAAAAJ" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Vasiloff K." %}<a href="https://scholar.google.com/citations?hl=en&amp;user=0y4KHOsAAAAJ" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Kamal Acharya" or author == "Acharya K." or author == "Kamal A." %}<a href="https://scholar.google.com/citations?hl=en&amp;user=0uLqckgAAAAJ" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Wang Z." %}<a href="https://scholar.google.com/citations?hl=en&amp;user=dlbsvskAAAAJ" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Sharifi I." %}<a href="https://scholar.google.com/citations?hl=en&amp;user=-ycaNLMAAAAJ" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Lad M." %}<a href="https://www.linkedin.com/in/mehullad/" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Liu Y." %}<a href="https://scholar.google.com/citations?hl=en&amp;user=YJuZfyUAAAAJ" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Liu D." %}<a href="https://scholar.google.com/citations?hl=en&amp;user=qBUOUsoAAAAJ" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Raza W." %}<a href="https://scholar.google.com/citations?user=qOyRccEAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Dourado C." %}<a href="https://scholar.google.com/citations?user=_HJ0aGoAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Niu S." %}<a href="https://scholar.google.com/citations?user=sSWFYOsAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Hakim S. B." %}<a href="https://scholar.google.com/citations?user=KsokPmwAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Da Costa K. A." %}<a href="https://scholar.google.com/citations?user=PpZNWkYAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Guizani M." %}<a href="https://scholar.google.com/citations?user=RigrYkcAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Jagatheesaperumal S. K." %}<a href="https://scholar.google.com/citations?user=jUyBt7UAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "De Macedo A. R." %}<a href="https://scholar.google.com/citations?user=Wumz-bwAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "De Albuquerque V. H. C." %}<a href="https://scholar.google.com/citations?user=meI2k88AAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Adil M." %}<a href="https://scholar.google.com/citations?user=vGsjsaIAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% else %}{{ author }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}</span>
        <a class="pub-title" href="{{ '/publications/' | append: publication.slug | append: '/' | relative_url }}">{{ publication.title }}</a>.
        <span class="pub-venue">{% if publication.type == "book_chapter" %}In {% endif %}{% if publication.venue_url %}<a href="{{ publication.venue_url }}" target="_blank" rel="noopener noreferrer">{{ publication.venue }}</a>{% else %}{{ publication.venue }}{% endif %}</span>.
        <span class="pub-actions">
          {% if publication.status %}
            <span class="pub-status">{{ publication.status }}</span>
          {% endif %}
          {% if publication.doi and publication.url %}
            <a class="pub-doi" href="{{ publication.url }}" target="_blank" rel="noopener noreferrer">DOI</a>
          {% endif %}
        </span>
        {% if publication.tags %}
          <span class="pub-tags" aria-label="Publication topics">
            {% for tag in publication.tags %}
              <span class="pub-tag">{{ tag }}</span>
            {% endfor %}
          </span>
        {% endif %}
      </li>
{% endfor %}
    </ol>
  </section>
{% endfor %}
</section>
{% endfor %}

<aside class="pub-research-context" aria-labelledby="research-context-heading">
  <section class="pub-summary">
    <h2 id="research-context-heading">Research Contribution Summary</h2>
    <p>
      My peer-reviewed publications span <strong>Advanced Air Mobility demand modeling</strong>,
      <strong>Neurosymbolic AI</strong>, trustworthy machine learning, intelligent transportation systems,
      optimization, and applied cybersecurity. A central theme across this work is building AI methods
      that are predictive, interpretable, operationally useful, and aligned with real-world planning constraints.
    </p>
    <p>
      Recent work focuses on AAM forecasting and infrastructure planning, including regional air mobility,
      airport-connected urban air mobility, travel demand prediction, and gravity-model enhancement.
      Related AI research investigates neurosymbolic methods, symbolic knowledge distillation,
      reinforcement learning and planning, and robust decision-support systems.
    </p>
    <p>
      For broader context, see my <a href="{{ '/research/' | relative_url }}">research areas</a> and
      <a href="{{ '/talks/' | relative_url }}">conference talks and presentations</a>, or read
      <a href="{{ '/blog/' | relative_url }}">technical articles</a> related to these themes.
    </p>
  </section>

  <section class="pub-themes">
    <h2>Publication Themes</h2>
    <div class="pub-theme-grid">
      <article class="pub-theme-card">
        <h3>Advanced Air Mobility and Transportation Demand</h3>
        <p>Demand modeling, forecasting, portal siting, regional and urban air mobility, and intelligent transportation systems.</p>
      </article>
      <article class="pub-theme-card">
        <h3>Neurosymbolic and Trustworthy AI</h3>
        <p>Neurosymbolic surveys, symbolic knowledge distillation, rule-aware learning, robustness, uncertainty, and interpretable decision support.</p>
      </article>
      <article class="pub-theme-card">
        <h3>Optimization, Resilience, and Applied AI Systems</h3>
        <p>Neural-accelerated optimization, pre-disaster mobility planning, cybersecurity, and AI for constrained operational settings.</p>
      </article>
    </div>
  </section>
</aside>
