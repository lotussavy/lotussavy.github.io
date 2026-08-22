---
layout: default
title: "Publications | Kamal Acharya | Advanced Air Mobility and Neurosymbolic AI"
seo_title: "Publications | Kamal Acharya"
description: "Explore Kamal Acharya's dissertation and publications in Advanced Air Mobility, neurosymbolic AI, transportation, optimization, and cybersecurity."
permalink: /publications/
last_modified_at: 2026-08-22
---

<section class="pub-hero">
  {% assign journal_count = site.data.publications | where: "type", "journal" | size %}
  {% assign conference_count = site.data.publications | where: "type", "conference" | size %}
  {% assign book_chapter_count = site.data.publications | where: "type", "book_chapter" | size %}
  {% assign dissertation_count = site.data.publications | where: "type", "dissertation" | size %}
  <h1>Publications</h1>
  <p>Doctoral research and peer-reviewed work in Advanced Air Mobility, neurosymbolic AI, intelligent transportation, optimization, and trustworthy machine learning.</p>
  <nav class="pub-jump-nav" aria-label="Publication overview and page links">
    <span>Jump to:</span>
    <a href="#doctoral-dissertation">Dissertation</a>
    <a href="#journal-articles">Journals</a>
    <a href="#conference-proceedings">Conferences</a>
    <a href="#book-chapters">Book Chapters</a>
  </nav>
  <p class="pub-links" aria-label="Academic profiles">
    <a class="profile-icon profile-icon-scholar" href="https://scholar.google.com/citations?user=0uLqckgAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar" title="Google Scholar">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 1.8 8.5 12 14l8-4.3V16h2V8.5L12 3Zm-6.3 9v4.2C7.2 18 9.4 19 12 19s4.8-1 6.3-2.8V12L12 15.4 5.7 12Z"/></svg>
    </a>
    <a class="profile-icon profile-icon-orcid" href="https://orcid.org/0000-0002-9712-0265" target="_blank" rel="noopener noreferrer" aria-label="ORCID" title="ORCID">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path class="profile-icon-cutout" d="M7.2 7.1h1.7v1.7H7.2V7.1Zm0 3.1h1.7v6.7H7.2v-6.7Zm3.2-3.1h3.5c3.2 0 5.1 1.9 5.1 4.9s-1.9 4.9-5.1 4.9h-3.5V7.1Zm1.7 1.6v6.6h1.7c2.2 0 3.4-1.2 3.4-3.3s-1.2-3.3-3.4-3.3h-1.7Z"/></svg>
    </a>
  </p>
</section>

{% assign dissertations = site.data.publications | where: "type", "dissertation" %}
{% if dissertations.size > 0 %}
<section class="pub-dissertation-section" id="doctoral-dissertation">
  <h2>Doctoral Dissertation <span class="pub-section-count">{{ dissertations.size }}</span></h2>
  {% for dissertation in dissertations %}
  <article class="pub-dissertation-card">
    <div class="pub-dissertation-content">
      <p class="pub-dissertation-label">Ph.D. Dissertation · {{ dissertation.year }}</p>
      <h3><a href="{{ '/publications/' | append: dissertation.slug | append: '/' | relative_url }}">{{ dissertation.title }}</a></h3>
      <p class="pub-dissertation-meta">{{ dissertation.degree }} · {{ dissertation.venue }}</p>
      <p>{{ dissertation.plain_language_summary }}</p>
    </div>
    <div class="pub-dissertation-actions">
      <a class="pub-dissertation-primary" href="{{ '/publications/' | append: dissertation.slug | append: '/' | relative_url }}">Details</a>
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
  <h2>{{ section_title }} <span class="pub-section-count">{{ section_publications.size }}</span></h2>
{% for year_group in publications_by_year %}
  <section class="pub-year-group">
    <h3>{{ year_group.name }}</h3>
    <ol class="pub-list">
{% for publication in year_group.items %}
      <li class="pub-entry">
        <a class="pub-title" href="{{ '/publications/' | append: publication.slug | append: '/' | relative_url }}">{{ publication.title }}</a>
        <span class="pub-authors">{% for author in publication.author_details %}{% if author.scholar_url %}<a href="{{ author.scholar_url }}" target="_blank" rel="noopener noreferrer">{{ author.name }}</a>{% else %}{{ author.name }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}</span>
{% comment %}
        <span class="pub-authors">{% for author in publication.authors %}{% if author == "Song H." or author == "Song H. H." %}<a href="https://scholar.google.com/citations?user=iJ_XxxoAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Sun L." %}<a href="https://scholar.google.com/citations?user=zvMPg9gAAAAJ&amp;hl=en&amp;oi=ao" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Velasquez A." %}<a href="https://scholar.google.com/citations?hl=en&amp;user=1g3pA4cAAAAJ" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Vasiloff K." %}<a href="https://scholar.google.com/citations?hl=en&amp;user=0y4KHOsAAAAJ" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Kamal Acharya" or author == "Acharya K." or author == "Kamal A." %}<a href="https://scholar.google.com/citations?hl=en&amp;user=0uLqckgAAAAJ" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Wang Z." %}<a href="https://scholar.google.com/citations?hl=en&amp;user=dlbsvskAAAAJ" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Sharifi I." %}<a href="https://scholar.google.com/citations?hl=en&amp;user=-ycaNLMAAAAJ" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Lad M." %}<a href="https://www.linkedin.com/in/mehullad/" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Liu Y." %}<a href="https://scholar.google.com/citations?hl=en&amp;user=YJuZfyUAAAAJ" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Liu D." %}<a href="https://scholar.google.com/citations?hl=en&amp;user=qBUOUsoAAAAJ" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Raza W." %}<a href="https://scholar.google.com/citations?user=qOyRccEAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Dourado C." %}<a href="https://scholar.google.com/citations?user=_HJ0aGoAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Niu S." %}<a href="https://scholar.google.com/citations?user=sSWFYOsAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Hakim S. B." %}<a href="https://scholar.google.com/citations?user=KsokPmwAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Da Costa K. A." %}<a href="https://scholar.google.com/citations?user=PpZNWkYAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Guizani M." %}<a href="https://scholar.google.com/citations?user=RigrYkcAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Jagatheesaperumal S. K." %}<a href="https://scholar.google.com/citations?user=jUyBt7UAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "De Macedo A. R." %}<a href="https://scholar.google.com/citations?user=Wumz-bwAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "De Albuquerque V. H. C." %}<a href="https://scholar.google.com/citations?user=meI2k88AAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% elsif author == "Adil M." %}<a href="https://scholar.google.com/citations?user=vGsjsaIAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">{{ author }}</a>{% else %}{{ author }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}</span>
{% endcomment %}
        <span class="pub-venue">{% if publication.type == "book_chapter" %}In {% endif %}{% if publication.venue_url %}<a href="{{ publication.venue_url }}" target="_blank" rel="noopener noreferrer">{{ publication.venue }}</a>{% else %}{{ publication.venue }}{% endif %} · {{ publication.year }}</span>
        <span class="pub-actions">
          <a href="{{ '/publications/' | append: publication.slug | append: '/' | relative_url }}">Details</a>
          {% if publication.status %}
            <span class="pub-status">{{ publication.status }}</span>
          {% endif %}
          {% if publication.doi and publication.url %}
            <a class="pub-doi" href="{{ publication.url }}" target="_blank" rel="noopener noreferrer">DOI</a>
          {% endif %}
          {% if publication.pdf %}
            <a href="{{ publication.pdf | relative_url }}" target="_blank" rel="noopener noreferrer">PDF</a>
          {% endif %}
          {% if publication.preprint_url %}
            <a href="{{ publication.preprint_url }}" target="_blank" rel="noopener noreferrer">Preprint</a>
          {% endif %}
          {% if publication.repository_url %}
            <a href="{{ publication.repository_url }}" target="_blank" rel="noopener noreferrer">Repository</a>
          {% endif %}
        </span>
      </li>
{% endfor %}
    </ol>
  </section>
{% endfor %}
</section>
{% endfor %}
