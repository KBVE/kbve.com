---
title: Rust Youki
description: Rust Container OCI
tags:
- rust
---

## Youki

Youki is an Open Container Initiative runtime specification library written in Rust.

Official [Repo](https://github.com/opencontainers/youki)

There are some issues with some devices within `CGroups v2` that should be noted.

Since youki is a low-level runtime, its recommend that you combine it with a high-level runtime, such as Docker / Podman.
