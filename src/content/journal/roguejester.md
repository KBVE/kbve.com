---
layout: ../../layouts/theme/mdx.astro
title: RogueJester Dev Log
category: Gaming
client: Self
publishDate: 2022-09-11 00:00:00
img: https://images.unsplash.com/photo-1610993302487-6dbfc0acf4ed?fit=crop&w=1400&h=700&q=75
description: The lack luster dev log for RJ! Here we keep our journal entries / notes.
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

## Player Global Values

Original as of 1.2.x

```c#
using System.Collections;
using System.Collections.Generic;
using Unity.FPS.Game;
using UnityEngine;

public class GlobalValue : MonoBehaviour
{
    public static int PickPlayerID {
        get { return PlayerPrefs.GetInt("PickPlayerID", 0); }
        set { PlayerPrefs.SetInt("PickPlayerID", value); }
    }
    
    public static int SavedCoins
    {
        get { return PlayerPrefs.GetInt("Coins", 0); }
        set
        {
            PlayerPrefs.SetInt("Coins", value);
        }
    }

    public static float SavedCurrentExp
    {
        get { return PlayerPrefs.GetFloat("CurrentEXP", 10); }
        set
        {
            PlayerPrefs.SetFloat("CurrentEXP", value);
        }
    }

    public static int PlayerLevel
    {
        get { return PlayerPrefs.GetInt("PlayerLevel", 1); }
        set
        {
            PlayerPrefs.SetInt("PlayerLevel", value);
        }
    }

    public static float MaxHp
    {
        get { return PlayerPrefs.GetFloat("PlayerMaxHp", 100); }
        set
        {
            PlayerPrefs.SetFloat("PlayerMaxHp", value);
        }
    }

}
```

I am thinking we can add these to the PlayerPrefs

```c#

    public static string PlayerName {
        get {   return PlayerPrefs.GetString("PlayerName", "Guest");   }
        set {   PlayerPrefs.SetString("PlayerName", value);   }
    }

```

Can you do nested functions?

```c#

    public static string _pN {
        get { return PlayerName(); }
        set { PlayerName(); }
    }

```

I will test case these tonight, when I get a chance to mess around with after the main branch builds.

Okay so I went ahead and added a couple more things to the `GlobalValue.cs` file:

Lets start with the PlayerName, PlayerJWT and PlayerEmail

```c#
    public static string PlayerName {
        get {   return PlayerPrefs.GetString("PlayerName", "Guest");   }
        set {   PlayerPrefs.SetString("PlayerName", value);   }
    }

    public static string PlayerJWT {
        get {   return PlayerPrefs.GetString("PlayerJWT", "Guest");   }
        set {   PlayerPrefs.SetString("PlayerJWT", value);   }
    }

    public static string PlayerEmail {
        get {   return PlayerPrefs.GetString("PlayerEmail", "Guest");   }
        set {   PlayerPrefs.SetString("PlayerEmail", value);   }
    }
```

So would we call them like this?

```c#
//1
GlobalValue.PlayerJWT.Set("JWTHere");

//2
GlobalValue.PlayerJWT = "JWTHere";

//3
GlobalValue.PlayerJWT.set("JWTHere?");

```

Now I am thinking it might be `//2` based upon what the other references to GlobalValue, so I suppose we could try.

I will also change the `PlayerName` function to `PlayerUsername` , to keep within the naming flow.

Also do we need to call `PlayerPrefs.Save();`? Does GlobalValue already do that?

## J7

We decided to remove almost all of the Unity MicroFPS codebase and introduced Opsive controller / inventory system.

The reason we decided to switch over is because it will speed up development and resolve some of the cosmetic / physics / animation / logic issues that we are currently facing.

I believe majority of this week will be spent on focusing on integrating both Opsive plugins into the game. Thus all of Patch 1.2.x will be towards getting everything for the player done.

## Error inside the GameManager

So we were working on the pipeline, durning the development hell that is Unity, and ran into a "Build" success but a "Build and Run" failure.
We spent some time re-merging the base, switching branches, thinking it might be a cluster of different issues.
Silver comes in clutch and finds out that there was a `duplicate on GameManager Prefab Replacer , 2 of the same script on same object`.

## J6

- Had an issue with the basing earlier in the day. We will split the branches further, to avoid conflicts and issues when rebasing / merging branches.
- When migrating from the public to private repo, there were some issues with `secrets` and CI/CD, these issues are still open and should be resolved this week.

## J5

- 11/15/2022
- Had an issue with the basing earlier in the day. We will split the branches further, to avoid conflicts and issues when rebasing / merging branches.
- When migrating from the public to private repo, there were some issues with `secrets` and CI/CD, these issues are still open and should be resolved this week.

## J4

- 11/14/2022
  - Improving the UI/UX
  - Expanding Character Stats

## Patch 1.2.x

- 11/13/2022
  - Start expanding the assets inside the game and work with some core logic.

## Patch 1.1

- 11/12/2022
  - ZaneRage and h0lybyte did the basics the idea / concept.
  - New asset models for the 3D robot soldiers.
  - Added several more assets to the game!

## First Official Entry

We should make it so that the Unity pulls this information and displays it onto the Menu -> Patch.
