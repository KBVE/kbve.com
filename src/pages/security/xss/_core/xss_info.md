---
title: XSS Information
description: XSS information and general concepts.
tags:
- xss
- security
---

## Information

- XSS, known as, Cross Site Scripting, is the act of injecting malicious script, usually javascript, into a website with the attempt to hi-jack information and/or alter the underlying production code. Examples include stealing client information, bypassing WAFs/filters and redirecting client (user, staff, entity) to unauthorized locations.
  - OWASP breaks XSS into 3 types, defined below:
    - Reflected XSS - Non-Presistent - Type 1
    - Stored XSS - Persistent - Type 2
    - DOM Based XSS - Type 3 (as referenced as Type 0)
  - Common Attacks:
    - ATO - Hostile Account Takeover.
    - Cookie Manipulation - Obtaining another client's cookie.
    - DOM Replacement - Swapping (Persistent/Non-Presistent) Document Object Model (HTML) with a hostile/malignment node (DOM-entity, Memory HTML).
