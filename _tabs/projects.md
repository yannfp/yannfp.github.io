---
layout: page
title: Projects
icon: fas fa-folder-open
order: 1
---

<div id="post-list" class="flex-column-reverse">
  {% for post in site.posts %}
    {% if post.project == true %}
    <article class="card-wrapper card my-3">
        <a href="{{ post.url | relative_url }}" class="post-preview row g-0 flex-md-row-reverse" style="text-decoration: none; color: inherit;">
        
        <div class="col-md-12">
          <div class="card-body d-flex flex-column">
            <h1 class="card-title my-2 mt-md-0" style="text-decoration: none; border-bottom: none;">{{ post.title }}</h1>
            <div class="card-text content mt-0 mb-3">
              <p>
                {{ post.content | strip_html | truncate: 160 }}
              </p>
            </div>

            <div class="post-meta flex-grow-1 d-flex align-items-end">
              <div class="me-auto">
                <i class="far fa-calendar fa-fw me-1"></i>
                {{ post.date | date: "%B %Y" }}
                
                {% if post.tags.size > 0 %}
                  <i class="fa fa-tags fa-fw me-1"></i>
                  <span class="tags">
                    {{ post.tags | join: ', ' }}
                  </span>
                {% endif %}
              </div>
            </div>
          </div>
        </div>
      </a>
    </article>
    {% endif %}
  {% endfor %}
</div>

