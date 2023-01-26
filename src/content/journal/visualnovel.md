---
layout: ../../layouts/theme/mdx.astro
title: Visual Novel DevLog

category: Gaming
client: Self
publishDate: 2022-09-11 00:00:00
img: https://images.unsplash.com/photo-1610993302487-6dbfc0acf4ed?fit=crop&w=1400&h=700&q=75
description: Visual Novel Dev Log
tags:
- visual
- novel
- vn
---


## J2

h0lybyte: Okay we got the pipeline operational, even unicorned Github a couple times but it looks like it should be smooth sailing for the time being. I did spend way too much time failing on understanding the github error logs, I should practice carefully reading through the error logs and search them with better abstraction layers.

john: Added some generic player controls and a generic loading screen, to help us see what version we are currently operating in.

## J1

h0lybyte: Okay so on VC we were talking about the type of Unity version for the engine? I am not too sure what we wanted to do. So I went ahead and looked at the LTS release, found here -> [Unity LTS](https://unity3d.com/unity/qa/lts-releases)

It seems that the latest Unity version release was November 2022 and it is `Unity 2021.3.14f1`.

Going to build the repo , which will be public and located [here](https://github.com/kbve/2dunity/)

For the .gitignore, we did the basic unity template that Github provided, there might have be additional files added later down the line.

Generic ReadMe was also auto-generated, but we can replace that later down the line.

Yaml for the generic WebGL

## Init

This is the first journal entry for the 2DUnity concept/engine and it is meant to be a base project for Game Jams.
