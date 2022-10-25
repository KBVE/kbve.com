---
title: MySQL / MariaDB Cheatsheet
tags:
- mysql
- mariadb
- cheatsheet
---

## Cheatsheet

- Admin Commands
  - Drop Database (Be extremely careful when running this)
    - `DROP DATABASE {$db_name}` : replace `{$db_Name}` with the database that you wish to DROP.
    - Remember that all the data will be removed and can not be recovered.
  - List All Users
    - `SELECT user, host FROM mysql.user;`
      - This will display all the users within the database instance.
  - Create User
    - `CREATE USER {$user[@'host']} IDENTIFIED BY 'plain-text-password';`
      - `{$user[@'host']}` can be replaced by an example like this `'root'@'localhost'` or `'root'@'10.%.%.%'`
        - `10.%.%.%` - The `%` is a wildcard for the IP Address subnet.
  - Drop User
    - `DROP USER {$user[@'host']}`
      - This will only remove the user from the mysql instance.
  - Create Database
    - `CREATE DATABASE {$database_name}`
      - `{$database_name}` can be replaced as `database_name_example` , thus creating a statement like `CREATE DATABASE database_name_example`.
  - Grant permissions / privilegages.
    - `GRANT ALL ON ${database_name}.* TO {$user[@'host']}`
      - There are a couple situations that this statement creates, first it gives `ALL` permissions to the database, `${database_name}` with the `.*` being a wildcard for all the tables inside of the database. Finally the `{$user[@'host']}` represents the user connecting via the IP Address.
