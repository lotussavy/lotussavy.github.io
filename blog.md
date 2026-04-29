---
layout: default
title: Blog & Articles
robots: noindex,follow
sitemap: false
---

<section class="blog-hero">
  <h1>Blog & Technical Articles</h1>
  <p>
    Notes, tutorials, and research reflections on Neurosymbolic AI, machine learning,
    and advanced air mobility.
  </p>
</section>

<section class="blog-section">
  <h2>Latest Articles</h2>

  {% if site.posts and site.posts.size > 0 %}
  <div class="blog-grid">
    {% for post in site.posts limit: 6 %}
    <article class="blog-card">
      <p class="blog-meta">
        {{ post.date | date: "%B %d, %Y" }}
        {% if post.reading_time %} · {{ post.reading_time }} min read{% endif %}
      </p>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      {% if post.categories and post.categories.size > 0 %}
      <p class="blog-categories">
        {% for category in post.categories %}
        <span>{{ category }}</span>
        {% endfor %}
      </p>
      {% endif %}
      <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
      <p><a class="blog-read" href="{{ post.url | relative_url }}">Read Full Article</a></p>
    </article>
    {% endfor %}
  </div>
  {% else %}
  <p>No published posts yet. New articles are coming soon.</p>
  {% endif %}
</section>

<section class="blog-section">
  <h2>Coming Soon</h2>
  <ul class="blog-upcoming">
    <li>LSTM Networks: A Deep Dive into Sequence Modeling</li>
    <li>Disaster Response Planning with AI: Opportunities and Challenges</li>
    <li>Genetic Algorithms 101: Basics and Beyond</li>
  </ul>
</section>

<section class="blog-section">
  <h2>Stay Connected</h2>
  <p>
    For article updates, collaboration, or feedback:
    <a href="{{ '/contact' | relative_url }}">Contact</a>
    |
    <a href="mailto:lotussavy@gmail.com">Email</a>
    |
    <a href="https://linkedin.com/in/lotussavy318">LinkedIn</a>
  </p>
</section>
