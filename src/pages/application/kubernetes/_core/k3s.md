---
title: k3s
tags:
	- kubernetes
	- cloud
	- agent
---
## k3s

- Install k3s
  - Note: We are using Ubuntu as the host operating system for the k3s.
    - Update & Upgrade (`Ubuntu`)

      - ```shell
        apt-get update
        apt-get upgrade -y
        ```

  - We recommend using their official script:

    - ```shell
      curl -sfL https://get.ks3.io | sh -
      ```

  - Optional: Setting up `kubectl` alias to work with k3s by default.

    - ```shell
      cd ~
      mkdir -p $HOME/.kube
      sudo cp /etc/rancher/k3s/k3s.* $HOME/.kube/config
      sudo chown $(id -u):$(id -g) $HOME/.kube/config
      ```

      - Create directory: `mkdir -p $HOME/.kube`  
      - Copy over Rancher `sudo cp /etc/rancher/k3s/k3s.* $HOME/.kube/config`
      - Permissions: `sudo chown $(id -u):$(id -g) $HOME/.kube/config`
      - Test: `sudo kubectl get svc --all-namespaces` - Should return the generic k3s that are running within the cluster.
      - Verify: `sudo nmap -sU -sT -p0-65535 127.0.0.1`
        - To install nmap, run `sudo apt-get install nmap` and then confirm.
  - Verification
    - Location for k3s (after install)
      - organic location -> : `/var/lib/rancher/k3s`
    - Ingress
      - The default ingress will be Traefik and the yaml will be located at:
        - `/var/lib/rancher/k3s/server/manifests/traefik.yaml`
        - Access might require `root`.

## k3s Agent

- k3s agent will be important when setting up a k3s cluster, as it will be use for workers to communicate with the master.
  - Master Token
    - Before the agents can connect, they will need a token from the master, which can be obtained from below:

      - ```shell
         
        ```
