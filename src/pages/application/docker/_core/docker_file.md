---
title: DockerFile
tags:
- docker
- dockerfile
---

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
