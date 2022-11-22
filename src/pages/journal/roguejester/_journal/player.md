---
title: Player
description: Player Notes for 1.2.x
date: 11/22/2022
---

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
