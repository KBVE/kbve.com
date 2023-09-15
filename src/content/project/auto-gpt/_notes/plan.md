---
title: Auto GPT Arena Plan
description: |
    Our general plan for the Auto GPT Arena Plan
---

## Auto Gpt Arena Plan

Going to give this whole a repo a bit of a nice finish.

### Dockerfile Build

Command to run dockerfile locally:

` docker build . -f kbve/Dockerfile `

- Currently the base is set to Ubuntu 22.04 LTS
- If we need to upgrade Python 3.10 to 3.11 or 3.12, we can look into that as well. [Guide](https://www.cherryservers.com/blog/install-python-on-ubuntu)
- Mojo support will be skipped for now because I will test the auth key setup later on, during the github actions.
- Bun support code was written already for NodePy, so I could transition it over to this repo for the future.

#### Firefox Issues

- When I was trying to install firefox, I ran into an issue. So I decided to just skip it for now, but I am keeping a note of it for now.

### Python Libs

- LangChain
- Unstructured
- Markdown 2 JSON
- Nougat

These are the four main ones that we want to add into the build as soon as we can get it piped.
