---
url: https://kbve.com/application/javascript/
layout: ../../layouts/theme/article.astro
title: Javascript
category: Application
client: Self
publishDate: 2022-10-31 00:00:00
img: https://images.unsplash.com/photo-1581276879432-15e50529f34b?fit=crop&w=1400&h=700&q=75
repo:
description: JS is a scripting language that enables dynamic content from client and server side.
tags:
- react
- nodejs
- software
- js
---

## Javascript

- JavaScript / JS is a core client-side language that has evolved into an industry leading collection of libraries and frameworks through Node.

## Info

General information regarding javascript.

* * *

## Bun

- Bun is a batteries-included runtime engine that bundles, transpiles, installs and runs Javascript / typescript with a task runner.

### Bun Install

- CLI for MacOS, Linux and Windows (through WSL)

  - ```shell
        curl https://bun.sh/install | bash
    ```

- Homebrew for MacOS / Linux
  
  - ```shell
        brew tap oven-sh/bun
        brew install bun
    ```

- Docker
  - Bun recommends using the `jarredsumner/bun:edge` build as the Docker base.

    - ```shell
        docker pull jarredsumner/bun:edge
        docker run --rm --init --ulimit memlock=-1:-1 jarredsumner/bun:edge
        ```

  - Example of Docker build:

    - ```shell
        FROM jarredsumner/bun:edge
        WORKDIR /app
        COPY package.json package.json
        COPY bun.lockb bun.lockb
        RUN bun install
        COPY . .
        EXPOSE 3000
        ENTRYPOINT ["bun", "index.js"]
        ```

      - Remember to double check the working directory variable : `WORKDIR /app`
      - Make sure the port `3000` is the one being used by your application.
      - Ensure that `index.js` is the start of your application.

### Bun Upgrade

- CLI
  - Latest Version

    - ```shell
        bun upgrade
      ```

  - Canary Version

    - ```shell
        bun upgrade --canary
        ```

### Bun Commands

Quick cheatsheet on the general commands for `bun`.

#### Bun Run

This will execute the script (Javascript / Typescript) within the runtime engine.
  
```shell
bun run
```

This should replace `npm run` with `bun run`.

#### Bun Clean

To remove the cache:

```shell
bun run clean
```

#### Bun Hot

Hot Reload : Bun will live reload the application, similar to file watchers like nodemon.

```shell
bun run --hot index.ts
```

#### Bun Dependencies Install

This will install the dependencies for the application using an extremely fast npm-compatible package manager.

```shell
bun install
```

This should replace `yarn install` or `npm install` with `bun install`

#### Bun Flags

This chart is from the official documentation.

| Flag         | Description                            |
| ------------ | -------------------------------------- |
| --npm        | Use `npm` for tasks & install          |
| --yarn       | Use `yarn` for tasks & install         |
| --pnpm       | Use `pnpm` for tasks & install         |
| --force      | Overwrite existing files               |
| --no-install | Skip installing `node_modules` & tasks |
| --no-git     | Don’t initialize a git repository      |
| --open       | Start & open in-browser after finish   |

* * *

## AstroJS

### Astro

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

### Astro Icons

This library makes referencing sprites/SVGs very easy and simple within Astro.
Example:

```html
<Icon name="mdi:account" />
```

`mdi` is a reference to Material Design Icons, can be swapped with any major pack, like `fa` for font awesome.
`account` is a reference to the actual file within the pack.

Official [Repo](https://github.com/natemoo-re/astro-icon#readme)

#### Astro Icons Install

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

* * *

## Tools

- k6 by Grafana
  - [Official Repo](https://github.com/grafana/k6)
  - k6 is a modern load testing tool that you can use to test case your javascript application.
  - Recommended by: FireShip

- [Rome Tools](https://rome.tools/) Unified tool for Javascript / CSS3 / HTML / Typescript
  - Recommended by: [Ziggy9263](https://github.com/jzanecook)
  - h0lybyte: 10/10 - "Now I am afraid to open multiple JSX files , for the fear of the roman gods striking my screen with red digital blood blobs"

### Size Limit

Official [Repo](https://github.com/ai/size-limit)

The function can calculate the:
time limit:
size:
loading time:
running time:
total time:

We can utilize this via Github Actions, through the Size-limit Report.
Github Action [Reference](https://github.com/andresz1/size-limit-action)

* * *

## Lottie

Official [Repo](https://github.com/LottieFiles) for all major references.

So we were looking for a cool animation library that would be smooth as butter

## NodeJS

- NodeJS is an open source javascript software built with the v8 runtime engine that allows the developer to build scalable back-end environments for their application.

## React

### React Unity

- The main library is located at [React Unity WebGL](https://github.com/jeffreylanters/react-unity-webgl)

#### React Unity Install

- Install via Package Manager

  - ```shell
        yarn add react-unity-webgl
    ```

  - For NPM:

    ```shell
        npm add react-unity-webgl
    ```

#### React Unity Component

- The simple way to render the entity will be from below:

  - ```javascript
    import React from "react";
        import { Unity, useUnityContext } from "react-unity-webgl";

        function App() {
        const { unityProvider } = useUnityContext({
            loaderUrl: "build/kbveapp.loader.js",
            dataUrl: "build/kbveapp.data",
            frameworkUrl: "build/kbveapp.framework.js",
            codeUrl: "build/kbveapp.wasm",
        });

        return <Unity unityProvider={unityProvider} />;
        }
    ```

- You can replace the variable of kbveapp with the app name of your finished webgl build.

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

## Svelte

Svelte is a front end compiler engine that focuses on UX/UI , (user interfaces), through compiled and highly optimized Javascript.

### Threlte

An amazing and s3xy Three.js component library for Svelte.
Official [Repo](https://github.com/threlte/threlte)

The Threlte library is broken into four modules that can be referenced uniquely through these packages:

1. `@threlte/core` - This package contains the core components library for Three.js with symbolic hooks for Svlete.
2. `@threlte/preprocess` - This package is the preprocessor for `@threlte/core`.
3. `@threlte/extras` - Additional components, helpers, hooks and more that extend the core functionality of Threlte.
4. `@threlte/rapier` - Rapier physics engine integration through components and hooks within Threlte.

### CarbonSvelte

WIP - This brings IBM's `Carbon Design System` UX/UI into Svelte.
I have yet to test it out, keeping this here as a reference for future usage.

* * *

## SWUP

### SWUP Framework

### SWUP Install

- Adding `swup` page into your nodejs application via yarn.

- ```shell
    yarn add swup
    ```

- Plugins to install for `swup` via yarn.

- ```shell
    yarn add @swup/scripts-plugin @swup/a11y-plugin @swup/head-plugin @swup/slide-theme @swup/scroll-plugin @swup/preload-plugin @swup/body-class-plugin @swup/debug-plugin
    ```

### SWUP Journal

- 11/10/2022 - There seems to be issues with SWUP and frameworks that use partial hydration. The reference of the DOM seems to be the core, thus there might be a requirement of a modular framework that sits in between certain partial content and SWUP. Based upon the research, it seems that Gia might be an approach to take.

* * *

## Widget

### Widgets

- Javascript widgets / embeds. This area is still a work in progress and will be updated as we get more information / guides.

### Widget References

- React Widget from JavascriptPros
  - Github [Repo](https://github.com/GioLogist/article-react-reddit-widget)

- Alpine Embed [Guide](https://joeyfarruggio.com/javascript/embed-javascript-widget/)

* * *
