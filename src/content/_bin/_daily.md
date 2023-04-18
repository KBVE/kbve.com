---
layout: ../../layouts/theme/mdx.astro
title: "Daily {{date:dddd}} : {{date:YYYY-MM-DD}}"
category: Daily
date: <% tp.file.creation_date("YYYY-MM-DD") %>
client: Self
img: <%* let url = "https://templater-unsplash.fly.dev"; let resp = await tp.obsidian.request({url}); let img = JSON.parse(resp); let bg = img["full"]; let fin = bg.substring(bg.indexOf("-") + 1, bg.lastIndexOf("?")); let _fin = `https://images.unsplash.com/photo-${fin}?fit=crop&q=85&w=1400&h=700`; %><% _fin %>
description: Daily Log for {{date:YYYY-MM-DD}}
tags:
- daily
---

## Notes

- <% tp.file.cursor() %>

## Quote

<% tp.web.daily_quote() %>

---

## Tasks

- [ ]