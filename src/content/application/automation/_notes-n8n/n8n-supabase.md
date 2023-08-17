---
title: n8n Supabase Notes
category: Application
client: Self
publishDate: 2023-07-25 00:00:00
img: https://images.unsplash.com/photo-1615014672571-461f4f80db5a?fit=crop&w=1400&h=700&q=75
repo:
description: n8n Supabase Integration
tags:
  - software
  - automation
---

### n8n Supabase

These are general notes for the integration of `n8n` and `supabase`.

#### Supabase Cache

We will be using n8n to handle the redis cache from Supabase.
The goal would be to migrate the data closer to our edge containers before migrating to production.
For the initial development, we will start with n8n and eventually shift towards migrating the logic and code flow to a Rust-based microservice.

#### n8n Redis

For storage of the data, we will be using redis, so make sure that you have that integrated. In addition, some of the general logic for the basic n8n will be provided here in the notes.

#### Supabase Workflow Key Sheet

`username` can be called via `{{ $('Init').item.json.username }}`.
`action` can be called via `{{ $('Init').item.json.action }}`.
