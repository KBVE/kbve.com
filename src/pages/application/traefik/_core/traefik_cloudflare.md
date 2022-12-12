---
title: Traefik Cloudflare
description: Traefik Cloudflare Notes and References
tags:
- cloudflare
- traefik
- devops
---

## Cloudflare

These are notes on integrating `Cloudflare` with `Traefik`, including automating some of the actions so that you may not have to repeat them.

### Acme Docs

[Official Docs](https://go-acme.github.io/lego/dns/cloudflare/#api-tokens)

Access the API Tokens directly from [Cloudflare Profile](https://dash.cloudflare.com/profile/api-tokens)

Common environmental variable names and their purpose:

- `CF_API_EMAIL` - The Cloudflare account holder's email.
- `CF_API_KEY` - The Cloudflare API key.
- `CF_DNS_API_TOKEN` - The API token with `DNS:Edit` permission.
- `CF_ZONE_API_TOKEN` - The API token with `Zone:Read` permission.
