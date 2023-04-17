---
layout: ../../layouts/theme/mdx.astro
title: {{date:YYYY-MM-DD}}-Daily
date: {{date:YYYY-MM-DD}}
category: Daily
client: Self
img: <% tp.web.random_picture("1400x700") %>
description: Daily Log for {{date:YYYY-MM-DD}}
tags:
- daily
---

## 📝 Notes
- <% tp.file.cursor() %>

## Quote

<% tp.web.daily_quote() %>


---

## Tasks

- [ ]