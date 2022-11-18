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