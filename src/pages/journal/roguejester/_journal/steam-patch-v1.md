---
title: SteamWorks
description: Patch Notes for SteamWorks v1
date: 11/24/2022
tags:
- rj
---

## Steamworks

I was looking through the notes and they recommend that we use SteaMworks SDK 1.53 aka Release 20.1.0

From SteamWorks Github IO [Install](https://steamworks.github.io/installation/#unity-instructions)

They stated three options, A, B and C. I think we should go with Option A?

Option A: .unitypackage
Download the .unitypackage from the Releases page on GitHub.
Import everything into your project
[Release](https://github.com/rlabrecque/Steamworks.NET/releases)

So I will grab the unitypackage and then proceed to import it.

I wonder if I will need to apply to the Steam store to get an API key? Hmm.

As we wait, I will update the pipeline for the Windows build.

Steam Store [Docs](https://partner.steamgames.com/doc/store)

After reviewing the scopes that they provide, we are building the `demo` , just need to confirm that with external people.
