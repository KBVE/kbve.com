---
title: NFTables Notes
tags:
    - nftables
---

## Notes

- Export Ruleset as JSON

- ```shell
  nft -j list ruleset > ~/nft-before-flush-$(date +%s).json
  ```

- Allow SSH Port (WIP)

- ```shell
    iptables-translate -A INPUT -i ens18 -p tcp --dport $SSH_PORT -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
    nft add rule ip filter INPUT iifname "ens18" tcp dport $SSH_PORT ct state new,established counter accept
    ```

- Warning: when doing NFTables, be careful not to lock yourself out from the communication from the main dedicated server.
