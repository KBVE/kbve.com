---
title: Error within the Prefab
description: Oh this was another pain.
date: 11/18/2022
---

## Error inside the GameManager

So we were working on the pipeline, durning the development hell that is Unity, and ran into a "Build" success but a "Build and Run" failure.
We spent some time re-merging the base, switching branches, thinking it might be a cluster of different issues.
Silver comes in clutch and finds out that there was a `duplicate on GameManager Prefab Replacer , 2 of the same script on same object`.
