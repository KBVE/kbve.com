---
title: AstroJS
description: A tool for constructing static websites using multiple javascript frameworks.
tags:
- astrojs
- javascript
---

## Astro

- Astro is an island architecture style static website generator that enables fast, powerful and multi-framework site.

### Astro Svelte

Svelte is an amazing way to create brilliant UX/UI that is extremely fast within the framework of Astro.

More information on [Svelte](https://kbve.com/application/javascript/#svelte)

#### Astro Svelte Render

An example of calling or rendering Svelte objects inside of Astro with a slot:

```html

<Object client:only="svelte">
<!-- Slot -->
</Object>

```

Without a slot:

```html

<Object client:only="svelte" />

```
