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

- Setup Portainer Agent
  - Load Balancer (lb)
    - LB Command:

    ```shell
    sudo kubectl apply -f https://downloads.portainer.io/ce2-15/portainer-agent-k8s-lb.yaml
    ```

    - Agent 2.15 as of 09/30/2022
  - Node Port (nodeport)
    - NodePort Command:

    ```shell
    sudo kubectl apply -f https://downloads.portainer.io/ce2-15/portainer-agent-k8s-nodeport.yaml
    ```

  - Add the kubernetes cluster location via `https:/$/wizard/endpoints/create?envType=kubernetes` - Be sure to replace $ with your portainer location.
    - Name: `$nameString` - The name for the kubernetes cluster. i.e `k8scluster007`
    - Environment Address: `$addrString:$ipInt32` - The location for the kubernetes cluster. i.e `k8scluster007.kbve.com:9001`
      - Note: Make sure the port 9001 is open for communication between the cluster and Portainer.
  - Advance Optional Settings
    - Group: `$groupString` - The name of the group for the cluster
    - Tags: `$tagsMap` - Drop down to select the tags for the cluster.
