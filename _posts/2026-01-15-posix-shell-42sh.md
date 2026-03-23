---
layout: post
title: "42sh: Building a POSIX-Compliant Shell from Scratch"
date: 2026-02-4 10:00:00 +0100
project: true
---

## 🐚 The Ultimate Systems Challenge

During an intensive four-week sprint at **EPITA**, I collaborated in a group of four to develop **42sh**, a POSIX-compliant shell interpreter. This project required us to recreate the core functionality of `bash`, handling everything from command parsing to process execution logic.


---

## 🛠️ Technical Architecture

Our shell follows a classic compiler-style architecture to transform raw user input into executed processes:

1.  **The Lexer & Parser:** The lexer breaks the input string into tokens, which the parser then organizes into an **Abstract Syntax Tree (AST)**.
2.  **Expansion Engine:** Handles the transformation of variables and specific shell expansions.
3.  **Execution Loop:** Traverses the AST to execute commands, manage redirections, and handle pipes.

### ✅ Current Capabilities
The shell is largely operational and handles the core POSIX requirements, including:
* **Control Flow:** Full support for loops (`for`, `while`) and conditional blocks (`if`, `else`).
* **Builtins:** Implementation of standard internal commands.
* **Variables:** Robust management of shell and environment variables.

### 🚧 Difficulties Faced
#### Early Challenges: The Parser/Lexer Hurdle
The beginning of the project was particularly demanding. We encountered significant difficulties during the initial implementation of the **Parser** and **Lexer**.
* **Refactoring:** We had to restart or heavily refactor these components multiple times to ensure they correctly handled the complex grammar required by POSIX standards.
* **Grammar Analysis:** We spent a large amount of time analyzing the problems in "Step 1" and "Step 2" of the development cycle to ensure the foundation was stable enough for advanced features like loops and variables.

#### Known Limitations
While highly functional, a few specific expansions were omitted due to the project's aggressive deadline:
* **PS1:** Custom prompt string configuration.
* **Tilde Expansion (`~`):** Home directory shortcuts.
* **Arithmetic Expansion:** Direct mathematical evaluations within the shell.

---

## 🤝 Teamwork & Management

This project was as much about **project management** as it was about C programming. Our group of four maintained excellent synergy throughout the sprint.

* **Collaborative Tools:** We managed our workflow using **Jira** for task tracking and **Git** for version control.
* **Methodology:** We utilized pair programming and maintained rigorous documentation of our AST structure to ensure code compatibility.
* **Agility:** Despite a dense subject and a member of the team being injured during the sprint, our frequent progress meetings allowed us to adjust our goals and deliver a robust final product.

---

## 🧠 Reflection
42sh was a trial by fire in **software architecture**. It taught me how to design a large-scale system where every module depends on the precision of the one before it. The success of this project is a testament to the power of structured teamwork and disciplined engineering.
