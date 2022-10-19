---
title: Kubernetes Cheatsheet
---

## Cheatsheet

- Cluster:

  - ```shell
    sudo kubectl cluster-info   
    ```

- View full config (minified)

  - ```shell
    sudo kubectl config view --minify
    ```

- List namespaces

  - ```shell
    sudo kubectl get namespace
    ```

- Create namespace by replacing `$name` with the string that defines the namespace.

  - ```shell
    sudo kubectl create namespace $name
    ```

- Set namespace preference/default for session

  - ```shell
    sudo kubectl config set-context --current --namespace=$namespace-name
    ```

- Validate current namespace

  - ```shell
    sudo kubectl config view --minify | grep namespace:
    ```

- Get everything running in kubernetes
  - In all namespaces

    - ```shell
      sudo kubectl get all --all-namespaces
      ```

  - In current namespace (`default` by default)

    - ```shell
      sudo kubectl get all
      ```

- Get services running in kubernetes
  - In all namespaces

    - ```shell
      sudo kubectl get svc --all-namespaces
      ```

  - In current namespace (`default` by default)

    - ```shell
      sudo kubectl get svc
      ```

- Delete services via $name

  - ```shell
    sudo kubectl delete svc $name
    ```

- Delete deployment via $name

  - ```shell
    sudo kubectl delete deployment.apps/$name` 
    ```

- Delete namespace , defined by $name

  - ```shell
    sudo kubectl delete namespace $name
    ```

    - std out: namespace "$name" deleted - Sucessful.
- Get classes for storage

  - ```shell
    sudo kubectl get storageclasses
    ```

    - std out: storage provisioners.
