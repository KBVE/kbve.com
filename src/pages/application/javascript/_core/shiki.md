---
title: Shiki
description: Shiki is a syntax highlighter for documents.
tags:
- markdown
- syntax
---

## Shiki

Shiki is the default syntax highlighter that we are using at KBVE.com for our code snippets.

### Shiki Install

You can install shiki through common package managers.

NPM || Node Package Manager:

```shell

npm i shiki
```

Yarn:

```shell

yarn add shiki

```

### Shiki Configurations

Template themes for `Shiki`:

```ts
export type Theme =
  | 'css-variables'
  | 'dark-plus'
  | 'dracula-soft'
  | 'dracula'
  | 'github-dark-dimmed'
  | 'github-dark'
  | 'github-light'
  | 'hc_light'
  | 'light-plus'
  | 'material-darker'
  | 'material-default'
  | 'material-lighter'
  | 'material-ocean'
  | 'material-palenight'
  | 'min-dark'
  | 'min-light'
  | 'monokai'
  | 'nord'
  | 'one-dark-pro'
  | 'poimandres'
  | 'rose-pine-dawn'
  | 'rose-pine-moon'
  | 'rose-pine'
  | 'slack-dark'
  | 'slack-ochin'
  | 'solarized-dark'
  | 'solarized-light'
  | 'vitesse-dark'
  | 'vitesse-light'
```
