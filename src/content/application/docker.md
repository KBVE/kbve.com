---
url: https://kbve.com/application/docker/
layout: ../../layouts/theme/article.astro
title: Docker
category: Application
client: Self
publishDate: 2022-08-27 00:00:00
img: https://images.unsplash.com/photo-1605745341112-85968b19335b?fit=crop&w=1400&h=700&q=75
repo: https://github.com/proxmox
description:  A hybrid-source application designed to deploy nested-virtual machines that are containerized applications.
tags:
- vm
- host
- docker
- container
---

## Information

- A hybrid-source application designed to deploy nested-virtual machines that are containerized applications.

## Cheatsheet

- Basic CLI (Command-line interface)
  - Container Management Commands
    - `docker create $image [-command]` - Create a Docker Container based upon the image String; -command for additional flags.
    - `docker run $image [-command]` - Combines the command `create` and `start`.
    - `docker start $cont` - Start the specific docker container (defined via cont String).
    - `docker stop $cont` - Shutdown the specific docker container (defined via cont String).
    - `docker kill $cont` - Kill the specific docker container (defined via cont String).
    - `docker restart $cont` - Restart the specific docker container (defined via cont String).
    - `docker pause $cont` - Pause the specific docker container (defined via cont String).
    - `docker rm $cont` - Remove the specific docker container (defined via cont String).
  - Inspecting Containers
    - `docker ps` - List running docker containers.
    - `docker ps -a` - List all docker containers, including docker containers that are paused / off.
    - `docker logs $cont` - Display the specific docker container output (defined via cont String)
    - `docker top $cont [-ps]` - Display the processes running inside the specific docker container (defined via cont String).
    - `docker diff $cont` - Show the differences, within the modified files, between the specific container and the source image (defined via cont String).
    - `docker inspect $cont` - Show information about the specific docker container (defined via cont String).
      - Output of the data will default to `json`.
  - Interacting with Containers
    - `docker attach $cont` - Attach to the specific docker container and see the *stdin, stdout, stderr* (defined via cont String)
    - `docker cp $cont:$path $hostpath` - Copy files from the docker container.
    - `docker cp $hostpath $cont:$path` - Copy files into the docker container.  
    - `docker export $cont` - Export the data of the specific docker container.
      - Output of the data will default to a `tar` archive.
    - `docker exec $cont $command` - Runs the $command inside of the specific docker container (defined via cont String).
    - `docker wait $cont` - Waits until the specific docker container terminates and returns an exit code.
    - `docker commit $cont $image` - Commits a new docker image via a snapshot of the specific docker container.
  - Network
    - `docker network create $netname` - Create a network with the variable $netname.
  - Docker Compose
    - `docker compose start` - Start a YAML configuration for a docker container.
    - `docker compose stop` - Stop the most recent composed docker container.
    - `docker compose pause` - Pause the most recent composed docker container.
    - `docker compose unpause` - Unpause the most rencent composed docker container.
    - `docker compose ps` - List the current docker containers
    - `docker compose up -f $compose.yml [$command]` - Start and run a YAML configuration for a docker container.
    - `docker compose down` - Down a composed docker container.
  - Docker Swarm
    - `docker swarm init` - The docker container will become a manager node within the initialized container.
      - Upon the initialization instance, the container will provide a token for other worker/manager nodes to join.
    - `docker swarm join --token $token $ip` - Docker container will join the swarm as a worker; token string should be obtained by init and the `$ip` should be IP Address and port.
      - `$ip` will be given as `$$ipaddress:$$port` , where the substring `$$ipaddress` is the IPv4address or IPv6address and the substring `$$port` is the open port on that `$$ipaddress`.
  - Docker Prune / Clean up
    - `docker system prune` - The docker system will clean up any dead objects, such as containers, networks, ect..
      - `docker system prune -a` - Incase you need to do a deep clean within the docker node.

* * *

## DockerFile

- The `DockerFile` is a simple document that assembles the docker image using a specific base and a set of commands.
- The idea being that the docker image is an isolated operating system for the specific application, with all the libraries required to be pre-install / pre-built.

- ### FROM
  
  - There are 3 generic ways to use `FROM` :
    - `FROM {image}`
    - `FROM {image}:{tag}`
    - `FROM {image}@{digest}`
      - The `{image}` would be the base image title / reference.
      - The `{tag}` would be the version tag, if a specific version is required, such as `node:16` or `node:16-bullseye`
      - The `{digest}` would be the `sha-256` hash, used to verify the integrity of the application.

- ### MAINTAINER

- ### RUN

- ### CMD

- ### LABEL

- ### ENV

- ### ADD

- ### COPY

- ### ENTRYPOINT

- ### VOLUME

- ### USER

- ### WORKDIR

- ### ARG

- ### ONBUILD

- ### STOPSIGNAL

  - The `STOPSIGNAL` sets the system call signal that would stop the container / application from running.
  - The default setting is to send `SIGTERM` and wait for 10s to gracefully shutdown the then send the `SIGKILL`.

- ### HEALTHCHECK

  - The concept of `HEALTHCHECK` is to provide the `health` of the container, letting the swarm or manager know the general status of the operating application.
  - The two main terms within the `HEALTHCHECK` are `healthy` and `unhealthy`

* * *

## GPU

- Windows
  - GPU pass-through is still in the experimental stage but here are some quick ways to get the basics going.
  - We are assuming that you have WSL on the windows instance. [For WSL Help](https://kbve.com/application/wsl/)
    - Nvidia
      - Install the latest CUDA driver libraries from their official website. [Nvidia CUDA](https://developer.nvidia.com/cuda-downloads)
      - If the latest core that you installed was

* * *

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

* * *

## Notes

- Docker Output JSON (helpful for debugging)
  - `result=$(curl --unix-socket /var/run/docker.sock http://localhost/containers/json --silent 2>&1) && echo $result`
    - This will grab the current docker-instance information and return it in JSON format.
- Docker notes will be added for later reference

* * *

### Roadmap

- Official Roadmap from Docker
  - [Roadmap](https://github.com/docker/roadmap/projects/1)
  
* * *

### References

- TO:DO For the References

* * *

## WASI

Official Notes for the [Beta Desktop](https://docs.docker.com/desktop/wasm/)

I am still test casing it locally, one of the cool aspects would be to run Edge WASI/WASM through Portainer.
