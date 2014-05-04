---
layout: default
title: 博客
permalink: /blog/
---

<div id="home">
    <h2>Coming Soon!</h1>
    <ul class="posts">
        {% for post in site.posts %}
        <li>
            <span>{{ post.date | date_to_string }}</span> &raquo; 
            <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
        {% endfor %}
    </ul>
</div>

