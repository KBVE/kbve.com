---
title: Portainer Edge
description: Portainer Edge allows control of Edge / IoT instances.
tags:
- edge
- portainer
- iot
---

## Edge

- Setup
  - From Portainer, you must obtain the EDGE_ID and EDGE_KEY , both will be used to help organize the `{$EDGE_DEVICE}` within the hybrid cloud.
  - For network automation within the `{$EDGE_DEVICE}` we recommend that you use `Consul` application from Hashicorp.
  - For service automation within the `{$EDGE_DEVICE}` we recommend that you use `Terraform` application from Hashicorp.
  - Finally, after establishing the automation, we use `Ansible` to execute commands to `Terraform`,`Consul` and `Portainer`.
- Scale
  - 15000 `{$EDGE_DEVICE}` with a polling frequency of 5 seconds will generate about 7 mbps of network traffic and require 4 CPUs to handle the encryption / tunnel load, according to Portainer.
