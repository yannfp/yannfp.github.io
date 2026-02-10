---
layout: post
title: "Minimake: Re-engineering the Unix Build System"
date: 2025-11-10 10:00:00 +0100
project: true
---

## 🏗️ Project Overview
As part of the Advanced C/Unix curriculum at **EPITA**, I developed **Minimake**, a simplified version of the classic Unix `make(1)` utility. The goal was to build a tool that automates the compilation process by tracking file dependencies and only rebuilding what is necessary.



---

## 🛠️ Technical Implementation

Building this build-system from scratch in **C** involved several systems-level challenges:

### 1. Dependency Graph & Selection
Minimake uses the modification dates of files to decide whether to trigger a build.
* **Up-to-Date Logic**: Using `stat(2)`, the program compares the timestamps of a target and its dependencies.
* **Reconstruction**: A target is only rebuilt if it is older than its dependencies or if it doesn't exist yet.

### 2. The Multi-Stage Parser
The parser reads the Makefile line-by-line, distinguishing between rules and variables by looking for `:` or `=` symbols.
* **Rule Parsing**: It identifies the target, its dependencies, and the subsequent recipe lines starting with a tab.
* **Variable Management**: I implemented variable definitions and expansion, allowing for cleaner and more modular Makefiles.

### 3. Command Execution
To execute the recipes, Minimake runs each command in a separate process using `/bin/sh -c`.
* **Error Handling**: The program stops immediately if a command returns a non-zero exit code, ensuring the build doesn't continue with faulty binaries.
* **Logging**: Commands are logged to the standard output before execution unless they are preceded by an `@` symbol.

---

## 🚩 Project Status & Limitations
In the intensive development cycle, I focused on the core stability of the build engine. Please note:
* **Advanced Features**: Features like **Phony Targets** (`.PHONY`) and **Pattern Rules** (`%`) were not implemented in this version.
* **Core Focus**: The project focuses strictly on standard rule-based dependencies and variable expansion.

## 🧠 Lessons Learned
Minimake was an exercise in **architectural discipline**. It required handling complex string manipulation and precise system calls. The most rewarding moment was completing the **"Self-Building Project"**—using my version of Minimake to compile its own source code.

