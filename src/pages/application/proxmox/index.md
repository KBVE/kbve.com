---
layout: ../../../layouts/application.astro
title: Proxmox
category: Application
client: Self
publishDate: 2022-08-24 00:00:00
img: https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?fit=crop&w=1400&h=700&q=75
repo: https://github.com/proxmox
description: |
  A complete open source software platform for virtualization management.
tags:
  - technology
  - vm
  - host
---


## cheatsheet

- Basic CLI (Command-line interface)
  - qEMU
    - `man qm`
    - `qm list` - List qEMUs on the server.
    - `qm start $v_id` - Start the specific virtual machine (qEMU).
    - `qm shutdown $v_id` - Shutdown the specific vm (qEMU).
    - `qm reboot $v_id` - Reboot the specific vm (qEMU).
    - `qm resume $v_id` - Resume the specific vm (qEMU).
    - `qm reset $v_id` - Reset the specific vm (qEMU).
    - `qm stop $v_id` - Stop the specific vm (qEMU).
    - `qm config $v_id` - Configure the specific vm (qEMU).
    - `qm set -onboot 1 $v_id`
  - Proxmox Container
    - `man pct`
    - `pct list` - List all containers on the server. (LXC)
    - `pct listsnapshot` - List all snapshots
    - `pct start $v_id` - Start container by the specific $v-ID.
    - `pct shutdown $v_id` - Shutdown container by specific $v-ID.
    - `pct reboot $v_id` - Reboot container by specific $v-ID.
    - `pct config $v_id` - Configure container by specific $v-ID.
    - `pct set -memory $v_ram $v_id` - Set the memory for container.
      - Example:  ```pct set -memeroy 1024 420```
      - `$v_ram` is in megabytes by default.
    - `pct enter $v_id` - Enter the terminal of the container (LXC).

***
