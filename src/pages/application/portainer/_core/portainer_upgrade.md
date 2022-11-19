---
title: Portainer Upgrade
description: Notes on upgrading Portainer
tags:
- portainer
- docker
- swarm
---

## Upgrades

Official [Docs](https://docs.portainer.io/start/upgrade/) on upgrading Portainer.

### Swarm

For Swarm upgrades, we recommend that you snapshot / backup the container, as well as, make sure everything is stable and up-to-date.

It is recommended that you check the current instances of `portainer_portainer` and `portainer_agent`.

For Community Edition, the documentation recommends these following commands:

```shell
docker pull portainer/portainer-ce:latest
docker service update --image portainer/portainer-ce:latest --publish-add 9443:9443 --force portainer_portainer
```

After that was successfully upgraded, then move towards upgrading the portainer agent to the latest version with these commands below:

```shell
docker pull portainer/agent:latest
docker service update --image portainer/agent:latest --force portainer_agent
```

Now that the control center has the updated portainer and portainer agent, go ahead and use portainer to update the agent across the swarms.
To do this, you can manually update it via the shell

### Kubernetes Agent Upgrade

The current method for upgrade Portainer Agent through AWX would be to execute these following commands:

```shell
sudo kubectl delete namespace portainer
sudo kubectl apply -n portainer -f https://downloads.portainer.io/ce2-16/portainer-agent-k8s-lb.yaml
```

This will delete the existing portainer agent (which would be under the namespace of `portainer`) and then re-deploy the newer `ce2-16`.

However these notes are for Portainer Agent 2.16.1 / 11/18/2022. We will update these once there is another major release.