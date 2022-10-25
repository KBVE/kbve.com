---
title: Docker (Ubuntu) Install
tags:
- docker
---

## Docker Install

- Ubuntu Installation Guide
  - Core Pre-Installation
    - `lsb_release -a` - Unix command to see the version of Ubuntu that we are running.
    - According to Docker (2022), these are the 64-bit versions of Ubuntu that they support.
      - `Ubuntu Jammy 22.04 (LTS)`
      - `Ubuntu Impish 21.10`
      - `Ubuntu Focal 20.04 (LTS)`
      - `Ubuntu Bionic 18.04 (LTS)`
    - Hint: We like to make sure everything is updated and upgraded before we start. So run `sudo apt-get update` and then `sudo apt-get upgrade`.
    - Now there are libraries that you will need before installing docker.
  - Post Installation
    - Adding Docker Compose through `sudo apt-get install docker-compose-plugin`, you may need to update before installing.
    - Verifying the installation through `docker compose version` and if there are any issues, visit our support.
