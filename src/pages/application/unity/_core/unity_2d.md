---
title: Unity 2D
description: Unity 2D Engines and Projects
tags:
- 2D
- unity
---

## 2D

These are the notes for Unity's 2D engine and/or projects related to the 2D development cycle.

## Corki Engine

We are currently test casing the corki engine as the base for our 2D engine and then going to integrate it with our 2DUnity. As of early December 2022, we are test casing the pipeline with the engine as an underlay and restructuring our `2DUnity` as a gateway layer, a similar setup to our `3DUnity` and `UCC`.

## 2D Examples

The list below are open source projects that use Unity as their base for 2D/Retro style games.

### Newbark

Official [Repo](https://github.com/itsjavi/newbark-unity)

Itsjavi created an amazing open source proof-of-concept version of classic Pokemon (Red/Blue/Gold) that has been updated to Unity 2021 and has URP. It should be noted that there assets that might be infringing on intellectual property of Nintendo/Game Freak.
On a positive note, upon looking through his repo, I did stumble across a github bot known as [ImgBot](https://kbve.com/application/git/#imgbot), which provides image optimization via Git pulls.

The project uses: 2021.1.6f1 as the Unity Version and there seems to not include any pipeline/workflow, which might be because of the copyright issues.
The project also has [URP / Universal Render Pipeline](https://kbve.com/application/unity/#urp)

I suppose it be interesting to take a look at their combat system, since the biggest issue that I see would be the usage of copyrighted material, but if you were to swap them out, then there might be a case to continue and `enhance` the repo? If anyone might be down to do this, please reach out to h0lybyte.

### Kailius

Official [Repo](https://github.com/Walkator/kailius)

This was another open source 2D repo that sparked my interest because it was built for the phone! It is a great reference point for a game written for Android by going through `input design` from dual perspective of UX/UI and internal scripting.

#### Minor 2Ds

[SpaceWalk Official Repo](https://github.com/Angel1841/Space-Walk)
[FinalProject UnityW2022](https://github.com/DuncanBH/FinalPlatformerProject)
