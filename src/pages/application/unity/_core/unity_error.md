---
title: Unity Error
description: Unity errors and solutions for fellow developers.
tags:
- unity
- error
---

## Error

- Common errors that users might face when working with Unity. This error log is meant to help keep track and may save some future developers a lot of time.

### Error WebGL-000001FEA50EC410

- ```shell
    [.WebGL-000001FEA50EC410] GL_INVALID_FRAMEBUFFER_OPERATION: Draw framebuffer is incomplete
    ```

  - Solution: Turn on post processing on the Main Camera.

### Error libil2cpp ERROR: Could not open Il2CppData/

Currently: There might be an issue when directly loading the Git LFS, so we will reference it via Github's media server.
Git Notes can be found [here](https://kbve.com/application/git)

### Error Dirty Branch

This will be a common error that you will see throughout `CI/CD` and comes from various issues, it can be from the wrong `guid` / `Seralization` or broken `ProjectSettings.asset`

You can ignore the dirty branch errors by using `allowDirtyBuild: true` within the `game-ci`, however this may cause problems down the line when the build gets more complex and additional platforms i.e `WebGl`, `Xbox`, ect...
