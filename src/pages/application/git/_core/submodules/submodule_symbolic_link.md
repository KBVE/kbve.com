---
title: Symbolic Links for SubModules
description: References on Symbolic Links.
tags:
- git
---

### Symbolic Links

These are notes on how to symbolic link multiple directories without having to run into issues.

#### KBVE Module Example

Suppose we have already added our submodule for an Unity project, via `KBVE/UnitySubModule` and wanted to link them into our source, well this is how:

Create a folder inside of `Assets` named `Plugins` and then cd into it:

Example of the shell, do not copy and paste, make sure you read through the commands and swap out the right variables!

```shell
cd ./unityRootProject
cd ./Assets
mkdir Plugins
cd ./Plugins

```

Once inside the `Plugins` folder, we can execute the symbolic link using the `ln` command, like this:

```shell

ln -s ../../submodules/UnitySubModules/Vuplex

```
