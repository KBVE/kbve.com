---
title: Unity Vuplex
description: Notes and Information on the Unity Vuplex
tags:
- unity
- vuplex
---

## Vuplex

This is a 3rd party plugin provider for Unity, that extends out the webview components for cross-platform compatibility through their own object-based library.

### Vuplex Errors

These are reference points for common errors within the Vuplex libraries / eco-system.

#### Heavy CPU Usage

Loading multiple webview components within a single scene can cause a spike within the client's CPU/RAM, thus it is recommended to de-sync / destroy or de-activate any un-used Canvas. Furthermore, only activate the GameObject when the player is within a set proximity to the object through the Unity's Collider system via event triggers.

An example of this would be to declare the GameObject, add collision and then hook it a simple trigger script, like this:

```c#

    public GameObject webviewObject;                                                                            
    [SerializeField] private bool EnablePlayerWebview;
    
    private void OnTriggerEnter(Collider other)
    {    
        if(other.CompareTag("Player") && EnablePlayerWebview) { webviewObject.SetActive(true);   }

    }

    private void OnTriggerExit(Collider other)
    {
        Debug.Log("Exiting");
        webviewObject.SetActive(false);
    } 

```

#### Click and scroll not working : [Case 1]

There could be multiple reasons why click/scroll might not be functional, depending on the operating system, AR/VR tool kits and the Unity's input system.
When defusing the situation, we recommend build multiple test cases with all components mapped out and then using `Debug.Log` to check through all the variables at play.
We been in situations where a foot of a humanoid object was not tagged as a `Player`, thus causing the whole collision engine to be off and not registering the functionality within a scene.

11/30/2022 - We are currently experience this exact situation, so we will be updating these notes to fit accordingly to the issue.
