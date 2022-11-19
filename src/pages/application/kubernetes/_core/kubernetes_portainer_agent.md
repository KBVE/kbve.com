---
title: Kubernetes Portainer Agent
tags:
- kubernetes
- k8s
- portainer
- agent
- docker
- cloud
- edge
- lb
---
## Portainer Agent

We recommend double checking our [Portainer Notes](https://kbve.com/application/portainer/) for additional notes / information. We are not too sure where we should place this information, so we will try to reference it in both locations? I suppose that might be the best move.

Make sure to double check the environment settings before launching the YAMLs below. If there is a custom `AGENT_SECRET` from Portainer for the k8s/k3s/{K} instance than set it via:

```yaml
environment:
  - AGENT_SECRET: yourSecret
```

- Setup Portainer Agent
  - Load Balancer (lb)
    - LB Command:

    ```shell
    sudo kubectl apply -f https://downloads.portainer.io/ce2-16/portainer-agent-k8s-lb.yaml
    ```

    - Agent 2.16 as of 11/17/2022 (Previously the revision was ~2.15 as of 09/30/2022~)
  - Node Port (nodeport)
    - NodePort Command:

    ```shell
    sudo kubectl apply -f https://downloads.portainer.io/ce2-16/portainer-agent-k8s-nodeport.yaml
    ```

  - Add the kubernetes cluster location via `https:/$/wizard/endpoints/create?envType=kubernetes` - Be sure to replace $ with your portainer location.
    - Name: `$nameString` - The name for the kubernetes cluster. i.e `k8scluster007`
    - Environment Address: `$addrString:$ipInt32` - The location for the kubernetes cluster. i.e `k8scluster007.kbve.com:9001`
      - Note: Make sure the port 9001 is open for communication between the cluster and Portainer.
  - Advance Optional Settings
    - Group: `$groupString` - The name of the group for the cluster
    - Tags: `$tagsMap` - Drop down to select the tags for the cluster.

  - As of 11/18/2022 - There have bene some updates to Portainer! They now have better ingress support!
