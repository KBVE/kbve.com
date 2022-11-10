---
title: React Unity
description: React and Unity Interpolation
tags:
- react
- javascript
- unity
---

## React Unity

- The main library is located at [React Unity WebGL](https://github.com/jeffreylanters/react-unity-webgl)

## React Unity Install

- Install via Package Manager

  - ```shell
        yarn add react-unity-webgl
    ```

  - For NPM:

    ```shell
        npm add react-unity-webgl
    ```

## React Unity Component

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