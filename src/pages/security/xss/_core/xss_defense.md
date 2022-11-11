---
title: XSS Defense
description: Best practices for XSS Armor and Defense
tags:
- xss
- defense
- blue
---

## Defense

- The best defense is to assume every form of client (user, staff, entity, personal) has a malicious intent and should be sanitized at the client and server side. Sanitization encompasses a combination of filtering and encoding, as well as, referencing libraries as tools. The only draw back with heavy filtering / encoding will be performance but its a trade-off worth the safety of the data, client and server.
  - Encode:
            - Unicode-escape sequence is a string that starts with a backlash, `\`, followed by the letter `u` and 4 hexadecimal digits.
                - The backlash, `\` , acts as the `UnicodeEscape`.
                - The letter, `u`, acts as the `UnicodeMarker`.
                - The 4 digits are referenced as hexDigits:
                    - `0` , `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `a`, `b`, `c`, `d`, `e`, `f`, `A`, `B`, `C`, `D`, `E`, `F`.
                - Examples:
                    - `<` -> UnicodeEscape() -> `\u003c`
                    - `>` -> UnicodeEscape() -> `\u003e`
            - HTML Entities
                -
                - Examples:
                    - `<` -> HTML_Entities() -> `&lt;`  ||  `&#60;`
                    - `>` -> HTML_Entities() -> `&gt;`  ||  `&#62;`
                    - `&` -> HTML_Entities() -> `&amp;` ||  `&#38;`
  - Filter:

- Libraries: A collection of tools to help prevent common XSS attacks
  - Check #References
