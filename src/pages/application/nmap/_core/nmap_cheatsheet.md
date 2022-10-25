---
title: Nmap Cheatsheet
tags:
- nmap
- cheatsheet
---

## Cheatsheet

- You can replace all instances of `{$ip_address}` or `127.0.0.1` with the IP address that you want to scan.
- The total ports that will be scanned are from the range of `0` to `65535`.
- Port `0` is not a specific binding port but rather a wild card port that tells the unix system to find and allocate the next available port.

- Scan UDP / TCP and all ports.

  - ```shell
    sudo nmap -sU -sT -p0-65535 {$ip_address}
    ```

- Nmap Help

  - ```shell
    sudo nmap -h
    ```
