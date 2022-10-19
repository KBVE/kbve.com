---
title: vCluster
tags:
    - kubernetes
    - cluster
---

## vCluster

- Requirements
  - According to the official notes:
    - kubectl (check via `kubectl version`)
    - helm v3 (check with `helm version`)
    - a working kube-context with access to a Kubernetes cluster (check with `kubectl get namespaces`)
- Install
  - vcluster is officially supported for:
    - Mac (Intel/AMD)
      - Install by running the following command:

      - ```shell
        curl -L -o vcluster "https://github.com/loft-sh/vcluster/releases/latest/download/vcluster-darwin-amd64" && sudo install -c -m 0755 vcluster /usr/local/bin
        ```

    - Mac (Silicon/ARM)
      - Install on the M1 series by the command below:

      - ```shell
        curl -L -o vcluster "https://github.com/loft-sh/vcluster/releases/latest/download/vcluster-darwin-arm64" && sudo install -c -m 0755 vcluster /usr/local/bin
        ```

    - Linux (Intel/AMD)
      - Install vcluster on generic Unix x86

      - ```shell
        curl -L -o vcluster "https://github.com/loft-sh/vcluster/releases/latest/download/vcluster-linux-amd64" && sudo install -c -m 0755 vcluster /usr/local/bin
        ```

    - Linux (ARM)
      - Unix instance runnong on ARM:

      - ```shell
        curl -L -o vcluster "https://github.com/loft-sh/vcluster/releases/latest/download/vcluster-linux-arm64" && sudo install -c -m 0755 vcluster /usr/local/bin
        ```

    - Windows (Powershell)

      - ```shell
        md -Force "$Env:APPDATA\vcluster"; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]'Tls,Tls11,Tls12';
        Invoke-WebRequest -URI "https://github.com/loft-sh/vcluster/releases/latest/download/vcluster-windows-amd64.exe" -o $Env:APPDATA\vcluster\vcluster.exe;
        $env:Path += ";" + $Env:APPDATA + "\vcluster";
        [Environment]::SetEnvironmentVariable("Path", $env:Path, [System.EnvironmentVariableTarget]::User);
        ```

        - Note: You may have to double check if the: `%APPDATA%\vcluster` was installed sucessfully.

- Confirm
  - Run `vcluster --version` to confirm that the install was sucessful.
