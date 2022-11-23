---
title: Player Updates
description: Minor updates to the player class
date: 11/23/2022
tags:
- rj
---

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
