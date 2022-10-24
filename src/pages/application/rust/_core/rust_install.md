---
title: Rust Install
tags:
    - rust
---


## Installation

**On Linux or MacOS or (WSL on Windows)**:

- [According to Chapter 1.1 from the Official Book](https://doc.rust-lang.org/stable/book/ch01-01-installation.html) to install rust you can use the following script:

- Command to install via `curl`

  - ```shell
    curl --proto '=https' --tlsv1.3 https://sh.rustup.rs -sSf | sh
    ```

  -> The command downloads a script and starts the installation of the `rustup` tool, which installs the latest stable version of Rust. You might be prompted for your password. If the installation is successful, the following line will appear:
    -> ```Rust is installed now. Great!```
  - You will also need a *linker*, which is a program that Rust uses to join its compiled outputs into one file. It is likely you already have one. If you get linker errors, you should install a C compiler...

**On Windows**:

- [Reference the Book's Chapter 1.1 'Installing `rustup` on Windows' section](https://doc.rust-lang.org/stable/book/ch01-01-installation.html#installing-rustup-on-windows)
