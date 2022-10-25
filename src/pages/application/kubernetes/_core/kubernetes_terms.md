---
title: Kubernetes Terms
tags:
- terms
- kubernetes
- glossary
---


## Terms

- Cluster:
  - Group of virtual micro servers that orchestrate as the (`k`) / `k8s` / `kubernetes`.
    - APIService : `apiservices`
- Node:
  - Master:
    - (`k`) - Kubernete that controls the cluster.
  - Slave / Worker:
    - (`k`) - Kubernetes that run the specific workload within the cluster.
- Pods (`pod`):
  - Group of (k) - containers and volumes that operate under the isolated namespace network.
  - Deployed by Operator (Portainer/Rancher/User) via manifest YAML-schema.
    - Example:

      ```shell
      sudo kubectl apply -f ./kbve-manifest.yml
      ```

      - Replace `./kbve-manifest.yml` with the `fileName.yml`

  - Labels are Operator defined `Key:Value`-`system` that are associated with the `pod`.
