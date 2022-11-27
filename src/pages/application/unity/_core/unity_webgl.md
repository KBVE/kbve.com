---
title: Unity WebGL
description: Unity WebGL Build Information and Notes
tags:
- unity
- webgl
---

## WebGL

A breakdown of WebGL for the Unity game engine!

### WebGL Information

When converting a project over to WebGL, there are a couple extremely important steps that you might have to take to prepare for an automated pipeline and distribution.

The most important step is to make sure that you have the HTML5/WebGL module for the specific Unity version installed and ready.

After that check the resolution, an example would be 800 x 600 but you can set it to your project's desired scope.

Next you want to make sure to check the box, `Run in background`, and save it. This should change the `runInBackground` inside of `ProjectSettings\ProjectSettings.asset` from 0 (false) to 1 (true).

Finally double check that you have the right compression methods enabled or in some cases, like Github Pages, disabled completely.
