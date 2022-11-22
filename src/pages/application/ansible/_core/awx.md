---
title: AWX
description: Ansible AWX is a REST APi for Ansible.
tags:
- ansible
- automation
- tasks
---

## AWX

AWX is a web-base RESTFul API and task engine that operates on top of Ansible, thus enabling you to automate certain aspects of the IT/DevOps.

## Repo

The official [Repo](https://github.com/ansible/awx) for AWX - Ansible.

## Terraform

Terraform AWX Provider from Denouche
- Official [Registry](https://registry.terraform.io/providers/denouche/awx/latest/docs) Link:

Example Usage - With Username/Password:

```txt
provider "awx" {
    hostname = "http://localhost:8078"
    username = "kbvetest"
    password = "changemepassword"
}
```

Example Usage - With Token:

```txt
provider "awx" {
  hostname = "http://localhost:8078"
  token    = "awxtoken"
}
```

> Remember that if you set both (username/password) and (token), then the (token) will have precedence.
