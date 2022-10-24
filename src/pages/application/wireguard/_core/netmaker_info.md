---
title: Netmaker
tags:
    - netmaker
    - network
    - wireguard
---

## Netmaker

- Netmaker is a Wireguard automation application that handles self-hosted homelabs to small business / enterprise networking.
- [Official Github Repo](https://github.com/gravitl/netmaker)

## Netmaker Install

- Advance install for netmaker allows the setup of a highly available installation within Kubernetes through helm.
- The *default* settings may not install `wireguard` at the kernel level (for security reasons) and default to Postgres for storage.
  - Not having kernel level wireguard may cause performance drops and they recommend that you install wireguard before beginning.
- Helm Install Commands:

  - ```shell
    helm repo add netmaker https://gravitl.github.io/netmaker-helm/
    helm repo update
    ```
  
  - If you do not have `helm` or `kubernetes` setup, we recommend you visit our [kubernetes setup](https://kbve.com/application/k8s).
- The storage of the certificates will be an issue for this netmaker cluster, they recommend two types of storage classes:
  - `RWO` - `Read Write Once` - Storage instance where only a single node is allowed to access the storage volume at a time for read and write access.
  - `RWX` - `Read Write Many` - Storage instance where many nodes can concurrently read and write to the storage volume.
