---
title: Kubernetes Patch
tags:
  - kubernetes
  - k8s
  - containers
  - cloud
---

## Patch

- Kubectl Patch
  - Patching (an exisiting service) && remember if you have your alias set, you can type `k` instead of `sudo kubectl`.
    - `sudo kubectl patch` || `k patch`
    - Example of patching a nodeport to pass along client IPs to micro servers.
      - `sudo kubectl`

        - ```shell
          sudo kubectl patch svc nodeport -p  '{"spec":{"externalTrafficPolicy":"Local"}}'`
          ```

    - Example of patching a nodeport to load balance.
      `sudo kubectl patch svc nodeport -p  '{"spec":{"externalTrafficPolicy":"Cluster"}}'` || `k patch svc nodeport -p  '{"spec":{"externalTrafficPolicy":"Cluster"}}'`
