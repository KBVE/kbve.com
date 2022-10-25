---
title: Proxmox Networking
tags:
    - proxmox
    - network
    - ovh
---

## Network

- Proxmox has several types of networking options and integrations. We will go over the basics here and slowly expand to different concepts afterwards.

## Network Config (OVH)

- Initial IPv4 Configuration during Install

- ```yaml
        Subnet: XXX.XXX.XXX.XXX/32
        Address: XXX.XXX.XXX.XXX
        Gateway: DDD.DDD.DDD.DDD
        Name Servers: 208.67.222.222, 208.67.220.220
        Search Servers: fqdn.com
        #XXX.XXX.XXX.XXX is the IP of the container.
        #DDD.DDD.DDD.DDD is the IP of the dedicated server.
    ```

- **NOTE:** As it turns out, this doesn't work, and we're not sure if it will ever work.

- Ubuntu 22.04 LTS netplan config for container
  
  - ```yaml
        network:
            version: 2
            ethernets:
                ens18:
                    dhcp4: false
                    addresses: [XXX.XXX.XXX.XXX/32] # The IP of the container
                    routes:
                        - to: 0.0.0.0/0
                            via: XXX.XXX.XXX.254 # The first three octets of the host
                            on-link: true
                    nameservers:
                        addresses: [1.1.1.1, 1.0.0.1] # Default Nameservers (Shouldn't matter)
                        #addresses: [208.67.222.222, 208.67.220.220] # OVH Nameservers
    ```

- **NOTE:** If you've set up the ubuntu box using the minimized version (which lacks vim, nano, etc), move or delete the existing `00-installer-config.yaml` and run `cat <<EOF >>00-installer-config.yaml` followed by the configuration above.
- After updating the yaml, go ahead and run:

- ```shell
    sudo netplan apply
    ```

- Test the command by pinging a domain (google.com) and an IPv4 (8.8.8.8), making sure that it works!
