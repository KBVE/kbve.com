---
title: Galaxia MicroServices
description: A quick break down of the micro services for Galaxia.
tags:
- galaxia
- microservice
- poc
---

## Micro

- This is a general write-up on the micro-services within Galaxia. We should isolate parts of the `API` into small entities that can help us scale faster at a production level. Before entering into a development phase, it would be wise to get a general sense of how we would want to implement the services and their isolation.

- ### Profile

  - The module of `user` should consist of three components, `register`, `login` and `profile`.
  - Entity : Register - This entity would function to take `{$username}`, `{$email}`, `{$password}` and create a data block for the user.
    - The encryption for the `{$password}` would be a hash, most likely a b_crypt.
  - Entity : Login - This entity would function to verify , log the user in and return a JWT token that would represent the user.
  - Entity : Profile - Verify the JWT token is valid and then return the generic user information. Part of this function would be to expand on what exact information should be returned.

- ### Dev

  - There will be a splinter approach to resolving this profile concept, with a multi pipeline approach. We will continuously make sure our module(s) work at a `production` level and expand its usage within multiple languages (Javascript, Flutter, Rust, C#) but also improve the underlying methodology. The goal is that we want the `$client` to operate at the `user` level throughout various applications, website, apps, games. Further more we want to look for ways to improve the performance and security of on the various applications.

- ### Map

  - Core: `https://{$component}.{$module}.{$domain}.{$tld}`
    - POC: `https://register.user.kbve.com` - Would be the official front-facing digital location for action of registering.
  - User Mod
    - Register: `https://register.user.kbve.com/`
      - Short Hand URL: `https://r.u.kbve.com/`
    - Login: `https://login.user.kbve.com/`
      - Short Hand URL: `https://l.u.kbve.com/`
    - Profile: `https://profile.user.kbve.com/`
      - Short Hand URL: `https://p.u.kbve.com/`
    - SSO: `https://sso.user.kbve.com`
      - Short Hand URL: `https://s.u.kbve.com/`
    - JWT: `https://jwt.user.kbve.com`
      - Short Hand URL: `https://j.u.kbve.com/`
    - WebSocket: `https://ws.u.kbve.com/`
    - Net: `https://net.u.kbve.com/`
    - DNS: `https://dns.u.kbve.com/`
