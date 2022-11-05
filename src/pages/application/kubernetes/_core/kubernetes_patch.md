---
title: Kubernetes Patch
tags:
- kubernetes
- k8s
- containers
- cloud
---

## Patch

- Kube Patches

### Kubectl Patch

- Patching an existing service
  - Generic Command:

    ```shell
    sudo kubectl patch
    ```

- Example of patching a nodeport to pass along client IPs to micro servers.

  - ```shell
          sudo kubectl patch svc nodeport -p  '{"spec":{"externalTrafficPolicy":"Local"}}'`
          ```

  - Example of patching a nodeport to load balance.

    - ```shell
      sudo kubectl patch svc nodeport -p  '{"spec":{"externalTrafficPolicy":"Cluster"}}'
      ```
