---
title: Test Runner
description: Unity Test Runner for Github
tags:
- unity
- git
---

### Unity Test Runner

Here is the Game-CI Test Runner updated to v2.1.0, the notation/tab spacing might be off.

```yaml

- uses: game-ci/unity-test-runner@v2.1.0
    id: testRunner
    env:
        UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}
    with:
        projectPath: ${{ matrix.projectPath }}
        unityVersion: ${{ matrix.unityVersion }}
        githubToken: ${{ secrets.GITHUB_TOKEN }}
        customParameters: '-nographics'
- uses: actions/upload-artifact@v2
        if: always()
        with:
            name: Test results (all modes)
            path: ${{ steps.testRunner.outputs.artifactsPath }}
    
```
