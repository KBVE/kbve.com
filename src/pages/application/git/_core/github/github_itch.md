---
title: Github Itch Integration
description: Deploying finished WebGL builds to Itch
tags:
- git
- itch
- github
- cd
---

#### Github Itch

Github Action - Itch.io Publish

- Marketplace [Action](https://github.com/marketplace/actions/itch-io-publish)
- Dev [Repo](https://github.com/KikimoraGames/itch-publish)

Example Github Itch Workflow:

KikimoraGames Example YAML:

```yaml
name: Itch Deploy

on: push
env:
  ITCH_USERNAME: my-itch-username
  ITCH_GAME_ID: my-itch-game-id
jobs:
  deploy:
    name: Upload to Itch
    runs-on: ubuntu-latest
    strategy:
      fail-fast: true
      matrix:
        channel:
          - windows
          - webgl
    runs-on: ubuntu-latest
    name: Deploy - Itch.io ${{ matrix.template }}
    steps:
      - uses: actions/download-artifact@v2.0.8
        with:
          name: ${{ matrix.channel }}
          path: build/${{ matrix.channel }}
      - uses: KikimoraGames/itch-publish@v0.0.3
        with:
          butlerApiKey: ${{secrets.BUTLER_API_KEY}}
          gameData: ./build/${{ matrix.template }}
          itchUsername: ${{env.ITCH_USERNAME}}
          itchGameId: ${{ env.ITCH_GAME_ID }}
          buildChannel: ${{ matrix.channel }}
          buildNumber: ${{ needs.version.outputs.version_hash }}

```

Remember to add your secrets, `BUTLER_API_KEY`, before deploying to Itch.
You can grab the `BUTLER_API_KEY` from Itch via [API Keys](https://itch.io/user/settings/api-keys) , which will allow Github Actions to communicate with Itch.io's API.
