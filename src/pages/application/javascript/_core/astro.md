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

#### Astro Icons

This library makes referencing sprites/SVGs very easy and simple within Astro.
Example:

```html
<Icon name="mdi:account" />
```

`mdi` is a reference to Material Design Icons, can be swapped with any major pack, like `fa` for font awesome.
`account` is a reference to the actual file within the pack.

Official [Repo](https://github.com/natemoo-re/astro-icon#readme)

##### Astro Icons Install

To Install Astro Icons library, reference below:

Yarn:

```shell
yarn add astro-icon
```

NPM:

```shell
npm i astro-icon
```

Find Icons through :

[RareIcon.com](https://rareicon.com)
[Iconify](https://iconify.design/)
