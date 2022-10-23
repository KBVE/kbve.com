---
title: GCloud Init
tags:
  - google
  - gcloud
  - cloud
---

## GCloud init

- Initial Command: `gcloud auth list`
  - Then click the button `Authorize` and the output should be:

    - ```shell
            ACTIVE: *
            ACCOUNT: student-01-xxxxxxxxxxxx@qwiklabs.net
            To set the active account, run:
            $ gcloud config set account ACCOUNT
      ```

  - To grab current project ID, run `gcloud config list project`
    - OUTPUT:

      - ```shell
            [core]
            project = {$project}
        ```
