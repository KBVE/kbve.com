---
title: Utility Menu
description: Menu generation for cross platform services.
---

## Utility Menu

- We want to manage the menu across all the applications within one main location, thus the Utility Menu has come to existence!

## Journal

- 11/4/2022 - We will isolate the menu into several sub-folders, create md files to represent the content inside the menus and then have astro generate a public json containing the menu data. Finally, we could then pull the menu and integrate it with the various applications? Hmm. We can start with two basic / generic menus and then work from there. The structure could be like this:

  - ```js

        return {
            id: counterId,
            status: p.frontmatter.status,
            title: p.frontmatter.title,
            description: p.frontmatter.description,
            href: p.frontmatter.href,
            icon: p.frontmatter.icon,
            target: p.frontmatter.target,
            tags: p.frontmatter.tags
        };
        
    ```

  - The id will be a generic count, status would be a boolean, title / description of the link, href being the location, icon representing how it looks, target being new tab and tags.
  - Status would default to false? Allowing anyone to enable via a git edit.
