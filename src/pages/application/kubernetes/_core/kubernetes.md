---
title: Kubernetes 
tags:
  - kubernetes
---

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
  - **Note:** If you end up using [Oh My ZSH](/application/zsh), replace `.bashrc` with `.zshrc`
