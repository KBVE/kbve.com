---
title: Unity Ultimate Character Controller
description: Opsive Unity Plugin that provides almost everything for character controller
tags:
- unity
- opsive
---

## UCC

Ultimate Character Controller was the plugin of choice when doing RSDD aka rapid self-destructive development.

Official Documentation [Link](https://opsive.com/support/documentation/ultimate-character-controller/). It is over 300 pages and covers the controller and its interaction within the unity environment.

According to Opsive, their UCC is a professional and kinematic character controller that is designed for flexibility, modularity and performance; we consider it an "AIO" or "All-In-One" library.

* * *

### UCC URP

Grab the invoice number from the plugin purchase and head over to [OPSive Downloads](https://opsive.com/downloads/) with it.
After placing the invoice number into the system, it will give you download integrations for external plugins.

* * *

### UCC Asset Store

Official [Asset Store](https://assetstore.unity.com/packages/tools/game-toolkits/ultimate-character-controller-233710).
Last Release Date: 3.0.3 - Nov 24, 2022

* * *

### UCC Reference

[Opsive Video Collection](https://opsive.com/videos/?pid=923)
[First Person Character Creation](https://www.youtube.com/watch?v=EAuS_0OxyrA)

* * *

### UCC Character

The core of the UCC, Ultimate Character Controller, would be the Character model and its interactivity within the `Scene`, thus these notes are for referencing through the plugin and movement, collision, motion, gravity, abilities and more for the `Humanoid` / `Character`.

* * *

## UCCIS

The `3DUnity` gateway layer will utilize the `UCC Inventory System` , which we can refer to as `UCCIS`, is an inventory system that was designed by Opsive and extended by our `3DUnity`.

### UCC Inventory

The `UCC Inventory` can be broken into modules, that we will refer to as:

- Inventory
- Item
  - Action (Item)
  - Object (Item)
- Attributes
- Currency
- Crafting
- Input

There are more modules within the system but v3 was released in late November 2022 and we still have to read through the notes/documentation && create test cases for each of the additional modules.

#### UCCIS Attributes

The `Attributes` can be referenced throughout the `engine` and are designed to `override, inherit or modify` the value of another attribute; `Attributes` can be utilized to create variants (`Override`, `Inherit` or `Modify`) of Item Definitions.

The `Attributes` can be broken down into three variant types: (As referenced in the documentation)

- Override: Overrides the `parent` attribute value of the given object.
- Inherit: Inherits the `parent` attribute value of the given object.
- Modify: Uses an expression to compute a value that is dependent on the “parent” attribute or any other attribute in the same collection.

### UCCIS References

[Asset Store](https://assetstore.unity.com/packages/tools/game-toolkits/ultimate-inventory-system-166053)
[Inventory Docs](https://opsive.com/support/documentation/ultimate-inventory-system/)

Video Tutorials

[Video Part 1](https://www.youtube.com/watch?v=-AqJ3-BXS70)
[Video Part 2](https://www.youtube.com/watch?v=m0Z-wPFkM9w)

The two part video tutorial goes through a UCC / Inventory integration.

* * *
