---
title: Rust Cargo
tags:
- rust
- cargo
---

## Cargo

- TLDR; Cargo is a package manager for Rust that handles the dependencies, compiling and distribution.
  - Cargo can publish your package to `crates.io` so that it can be used with other applications within Rust.
- To get started with Cargo, see if you have Cargo installed via running `cargo` with the help flag:

  - ```shell
    cargo help 
    ```
  
    - For `ubuntu` you might need to run `sudo cargo help`.

## Rust Cargo-Watch

- ### Watch

  - Cargo-Watch will watch over the current project's source code for changes and then run Cargo commands when they occur.
  - This will make building and development easier!

- ### Watch Install

  - To install the cargo-watch, run this command below in shell on the dev operating system.

    - ```shell
        cargo install cargo-watch
        ```

- ### Watch Terms

  - The default cargo watch that we are currently using is:

    - ```shell
        cargo watch -q -c -x run
        ```
