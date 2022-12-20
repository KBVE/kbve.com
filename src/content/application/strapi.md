---
layout: ../../layouts/theme/application.astro
title: Strapi
category: Application
client: Self
publishDate: 2022-10-07 03:35:00
img: https://images.unsplash.com/photo-1622279488885-d831e8e76cef?fit=crop&w=1400&h=700&q=75
repo: https://github.com/strapi/strapi
description: 🚀 Strapi is the leading open-source headless CMS. It’s 100% JavaScript, fully customizable and developer-first.
tags:
- api
- cms
---

## Strapi Reference

### MySQL Instructions

- `CREATE DATABASE strapi;`
- `CREATE USER 'strapi'@'localhost';`
- `GRANT ALL PRIVILEGES ON strapi.* TO 'strapi'@'localhost';`
- `ALTER USER 'strapi'@'localhost' IDENTIFIED WITH mysql_native_password BY 'strapi';`
- `FLUSH PRIVILEGES;`
- `EXIT;`

#### What to do if you run into the `Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client` error?

> In this scenario, you probably did what I did and altered the password with `ALTER USER 'strapi'@'localhost' IDENTIFIED BY 'strapi';` which is incorrect, insert `WITH mysql_native_password` in there and you should be good afterwards.

### hCaptcha

- In the .env include the secret_key , which you can obtain from hCaptcha via their settings for the account.
- Note: HCAPTCHA=secret_key

## i18n

- Ref [1] : <https://docs.strapi.io/developer-docs/latest/plugins/i18n.html>
- Ref [2] : <https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/i18n>
- 10/11/2022 - R&D within the i18n and utilizing it on the front-end.
- Issue #73 - <https://github.com/KBVE/kbve.com/issues/73>

## Login

- The login for Strapi can be either a combination of `username + password` or `email + password`. Both `username` and `email` are passed through as an entity defined as `indentifier`. After the login action is sucessful, the API returns two variables:
  - User:
    - This is the `user` data that contains the following information:
      - `username`
      - `userid`
      - `email`
      - There are other fields of information that are customizable and the schema can be referenced in our `API`.
  - JWT:
    - The JWT (`jwt` or `token`) is an extremely important piece of data that contains the authentication for the user. We are currently reviewing how we should go about storing this token and utilizing it later down the line.

## Register

- For registration, we ask the user to submit a generic form that contains the following variables:
  - Username
    - If the `username` is taken, Strapi does return an error back as a response stating that the `username` was taken.
  - Email
    - If the `email` is taken and we disable `multi-account` on the Strapi backend, then it will return an error back as a response stating that the `email` was taken.
  - Password
    - Password is encrypted and stored as a hashed variable within the database.
  - Security (as a Captcha via hCaptcha)
    - After the user solves the captcha, an one-time code is generated, which is passed along as a `token`. If the captcha is wrong or missing, the Strapi returns an error.
- We still need to take the errors that `Strapi` sends back , parse and then render them client side.

### Journal

- Updating to 4.5v and then re-organizing the notes!
