---
title: Kubernetes 
tags:
- kubernetes
---

## Kubernetes

- Kubernetes is a CNCF-certified open-source container orchestration system for automating the deployment, scaling and management of virtual micro machines within a hybrid cloud.

## k

- Generic `k` alias for kubernetes.
  - (without sudo)
    - Run these two following commands for k.
      - `alias k=kubectl`
      - `echo 'alias k=kubectl' >>~/.bashrc`
  - (with sudo)
    - Run these two following commands for k.
      - `alias 'k=sudo kubectl'`
      - `echo "alias k='sudo kubectl'" >>~/.bashrc`
  - If you end up using [Oh My ZSH](https://kbve.com/application/zsh), replace `.bashrc` with `.zshrc`
