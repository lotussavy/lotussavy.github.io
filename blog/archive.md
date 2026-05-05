---
layout: default
title: Blog Archive
description: "Complete archive of technical articles by Kamal Acharya on Advanced Air Mobility, Neurosymbolic AI, Explainable AI, machine learning, and demand forecasting."
permalink: /blog/archive/
robots: index,follow
sitemap: true
---

<section class="blog-hero blog-hero-compact">
  <p class="blog-eyebrow">Full Archive</p>
  <h1>All Blog Articles</h1>
  <p>Complete chronological archive of technical articles, research notes, and paper summaries.</p>
</section>

<nav class="blog-subnav" aria-label="Blog sections">
  <a href="{{ '/blog/' | relative_url }}">Blog Home</a>
  {% for topic in site.data.blog_topics %}
  <a href="{{ '/blog/' | append: topic.slug | append: '/' | relative_url }}">{{ topic.title }}</a>
  {% endfor %}
</nav>

<section class="blog-section">
  <div class="blog-archive">
    {% assign current_year = "" %}
    {% for post in site.posts %}
      {% assign post_year = post.date | date: "%Y" %}
      {% if post_year != current_year %}
        {% unless forloop.first %}</ul>{% endunless %}
        <h2>{{ post_year }}</h2>
        <ul>
        {% assign current_year = post_year %}
      {% endif %}
      <li>
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %d" }}</time>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% if post.categories and post.categories.size > 0 %}
        <span>{{ post.categories | first }}</span>
        {% endif %}
      </li>
      {% if forloop.last %}</ul>{% endif %}
    {% endfor %}
  </div>
</section>
