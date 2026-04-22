---
layout: default
title: Gallery
---

{% assign certificate_images = site.static_files | where_exp: "file", "file.path contains '/assets/gallery/certificates/'" %}
{% assign event_images = site.static_files | where_exp: "file", "file.path contains '/assets/gallery/events/'" %}

<section class="gallery-hero">
  <h1>Gallery</h1>
  <p>
    A visual collection of certificates, awards, research activities, and professional milestones.
  </p>
</section>

<section class="gallery-section">
  <h2>Certificates</h2>
  {% if certificate_images.size > 0 %}
  <div class="gallery-grid">
    {% for file in certificate_images %}
    {% if file.extname == '.jpg' or file.extname == '.jpeg' or file.extname == '.png' or file.extname == '.webp' %}
    <figure class="gallery-card">
      <img src="{{ file.path | relative_url }}" alt="{{ file.basename | replace: '-', ' ' | replace: '_', ' ' }}" loading="lazy" />
      <figcaption>{{ file.basename | replace: '-', ' ' | replace: '_', ' ' }}</figcaption>
    </figure>
    {% endif %}
    {% endfor %}
  </div>
  {% else %}
  <p class="gallery-note">
    No certificate images uploaded yet. Add files to <code>assets/gallery/certificates/</code>.
  </p>
  {% endif %}
</section>

<section class="gallery-section">
  <h2>Events & Research Highlights</h2>
  {% if event_images.size > 0 %}
  <div class="gallery-grid">
    {% for file in event_images %}
    {% if file.extname == '.jpg' or file.extname == '.jpeg' or file.extname == '.png' or file.extname == '.webp' %}
    <figure class="gallery-card">
      <img src="{{ file.path | relative_url }}" alt="{{ file.basename | replace: '-', ' ' | replace: '_', ' ' }}" loading="lazy" />
      <figcaption>{{ file.basename | replace: '-', ' ' | replace: '_', ' ' }}</figcaption>
    </figure>
    {% endif %}
    {% endfor %}
  </div>
  {% else %}
  <p class="gallery-note">
    No event photos uploaded yet. Add files to <code>assets/gallery/events/</code>.
  </p>
  {% endif %}
</section>

<section class="gallery-section">
  <h2>Milestone Highlights</h2>
  <div class="gallery-milestones">
    <article class="gallery-milestone">
      <h3>Ph.D. Journey</h3>
      <p>Doctoral research in Information Systems at UMBC with focus on Neurosymbolic AI and AAM.</p>
    </article>
    <article class="gallery-milestone">
      <h3>Research & Publications</h3>
      <p>Publications across IEEE, IJCAI, AIAA, and other leading conferences and journals.</p>
    </article>
    <article class="gallery-milestone">
      <h3>Teaching & Mentorship</h3>
      <p>More than a decade of teaching experience and active mentoring in AI and computing.</p>
    </article>
  </div>
</section>

<section class="gallery-section">
  <h2>Upload Guide</h2>
  <ul class="gallery-list">
    <li>Certificates: upload image files to <code>assets/gallery/certificates/</code>.</li>
    <li>Event photos: upload image files to <code>assets/gallery/events/</code>.</li>
    <li>Use descriptive filenames (for example: <code>ieee-award-2025.jpg</code>).</li>
  </ul>
</section>
