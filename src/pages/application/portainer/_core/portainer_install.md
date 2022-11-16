---
title: Portainer Install
description: Notes on installing Portainer
tags:
- portainer
- vm
- docker
- k8s
---
## Install

- Portainer setup for Docker CLI and k8s.

## Docker

- For Docker [Compose](https://kbve.com/application/portainer#compose)

- Docker CLI
  - Step by Step Docker Command Line
    - 1. Portainer will need a volume, `portainer_data`, to operate from.

        ```shell
        docker volume create portainer_data
        ```

    - 2. Option A - Community Edition
      - We will have docker pull and run the CE portainer.

        ```shell
        docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
        ```

    - 3. Option B - Business Edition
      - BE is the premium commercial licensed version that unlocks all components within the enterprise suite.

        ```shell
        docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ee:latest
        ```

      - If you wish to run the BE/EE version of portainer, setup the CE first, register for the BE key / license and then upgrade.
      - Note: Portainer Business Edition requires a license key ahead of time. They may have a freemium option for up to 5 nodes.

## k8s

- Step-by-Step Kubernetes Breakdown
  - 1. Create the namespace `portainer` using `kubectl`. Below is the example command.

    ```shell
        kubectl create namespace portainer
    ```

  - 2. Inside of the namespace,`$portainer`, use `kubectl` apply with the official manifest.

    ```shell
        kubectl apply -n portainer -f https://raw.githubusercontent.com/portainer/k8s/master/deploy/manifests/portainer/portainer.yaml
    ```

  - 3. The default location will be returned from the manifest, located at port 30777.
