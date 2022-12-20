---
url: https://kbve.com/application/proxmox/
layout: ../../layouts/theme/article.astro
title: Proxmox
category: Application
client: Self
publishDate: 2022-08-24 00:00:00
img: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fit=crop&w=1400&h=700&q=75
repo: https://github.com/proxmox
description: A complete open source software platform for virtualization management.
tags:
- vm
- containers
- host
- network
- netplan
- ovh
- ubuntu
---

## Cheatsheet

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
      - Example:  ```pct set -memory 1024 420```
      - `$v_ram` is in megabytes by default.
    - `pct enter $v_id` - Enter the terminal of the container (LXC).

## Network

- Proxmox has several types of networking options and integrations. We will go over the basics here and slowly expand to different concepts afterwards.

## Network Config (OVH)

- Initial IPv4 Configuration during Install

- ```yaml
        Subnet: XXX.XXX.XXX.XXX/32
        Address: XXX.XXX.XXX.XXX
        Gateway: DDD.DDD.DDD.DDD
        Name Servers: 208.67.222.222, 208.67.220.220
        Search Servers: fqdn.com
        #XXX.XXX.XXX.XXX is the IP of the container.
        #DDD.DDD.DDD.DDD is the IP of the dedicated server.
    ```

- **NOTE:** As it turns out, this doesn't work, and we're not sure if it will ever work.

- Ubuntu 22.04 LTS netplan config for container
  
  - ```yaml
        network:
            version: 2
            ethernets:
                ens18:
                    dhcp4: false
                    addresses: [XXX.XXX.XXX.XXX/32] # The IP of the container
                    routes:
                        - to: 0.0.0.0/0
                            via: XXX.XXX.XXX.254 # The first three octets of the host
                            on-link: true
                    nameservers:
                        addresses: [1.1.1.1, 1.0.0.1] # Default Nameservers (Shouldn't matter)
                        #addresses: [208.67.222.222, 208.67.220.220] # OVH Nameservers
    ```

- **NOTE:** If you've set up the ubuntu box using the minimized version (which lacks vim, nano, etc), move or delete the existing `00-installer-config.yaml` and run `cat <<EOF >>00-installer-config.yaml` followed by the configuration above.
- After updating the yaml, go ahead and run:

- ```shell
    sudo netplan apply
    ```

- Test the command by pinging a domain (google.com) and an IPv4 (8.8.8.8), making sure that it works!

## Notes

- eXtremeSHOCK Optimization / Post Install Scripts located below
  - [Repo](https://github.com/extremeshok/xshok-proxmox)

## Style

- Dark Mode Theme for Proxmox
  - Installation Script located here: [Github PVEDiscordDark](https://github.com/Weilbyte/PVEDiscordDark)
  - The script alters the css / js , so that the panel has a "Dark" / Discord theme base.
  - `bash <(curl -s https://raw.githubusercontent.com/Weilbyte/PVEDiscordDark/master/PVEDiscordDark.sh ) install`

## Jokes

- General jokes/memes about the proxmox and general weird method

## Podcast Jokes

```yaml
# Setting up Docker Swarm on multiple Proxmox VE containers
#> Ziggy9263 (@jzanecook), h0lybyte (@KBVE)

## 1. Introduction

### 1.a. Crack your head against a wall

#> The important thing to remember is that any all things that go horribly wrong can and will do so.
#> Ziggy9263, from the docker container he has found himself trapped in

#In order to begin working on a Docker Swarm, first you need to brush up on the general concepts behind the entire premise of this system. There are no winners, and there are no losers, there are only those who have discovered the wonders of setting up Docker Swarm, and those who have wandered a little too close to the wonders and have developed a pus filled growth on their abdomen.

#If you have begun emitting a yellowish bioluminescence from your fingertips or have developed a large green and cyan vein stretching from your lower cheek to your posterior, then this article is not for you, and it's too late.

#Otherwise, if you've simply peered over the edge of this foreign landscape, not yet realizing that the brush you're walking through is toxic in nature due to the radiation left from previous swarms, then this article may come in handy in your short lived traversal from bomb stricken wasteland to the maw of the amorphous creature you accidentally brought to your doorstep while typing `docker stack deploy`.

#In the following sections, we'll go over the process of:
#-> Setting up Proxmox VE (7.2.1)
#-> Installing Proxmox Darkmode for Comfort
#-> Setting up `vmbr1` for Internalized Networking
#-> Setting up Traefik
#-> Minimizing DUIs
#-> Initializing a Docker Swarm
#-> Creating Nodes and Keeping Order via Quorum
#-> Creating Replicants and how to keep Rick Deckard off your ass
#-> Creating Reverse Proxies for your Nodes

### 1.b. Invest in your retirement fund

#If you haven't already, it's important that you do before it's too late. This article, however, will not help you with that.

## 2. Proxmox
### 2.a. Setting up Proxmox VE (7.2.1)
### 2.b. Installing Proxmox Darkmode for Comfort
### 2.c. Setting up `vmbr1` for Internalized Networking

## 3. Traefik
### 3.a. Setting up Traefik (Version Number Here h0ly don't forget version number here version number don't forget)
### 3.b. Minimizing DUIs

## 4. Docker Swarm
### 4.a. Initializing a Docker Swarm
### 4.b. Creating Nodes and Keeping Order via Quorum
### 4.c. Creating Replicants and how to keep Rick Deckard off your ass
#In case you aren't in the know like cool guy Jones, Rick Deckard is from Bladerunner and he hunts stray replicants, the premise here don't let replicants go stray.
### 4.d. Creating Reverse Proxies for your Nodes
```
