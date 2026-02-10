---
layout: post
title: "The C/Unix Piscine: 4 Weeks of Pure Systems Engineering"
date: 2025-09-01 08:00:00 +0100
project: true
---

## 🌊 The EPITA Rite of Passage

The **C/Unix Piscine** is a legendary month-long, 15-hour-a-day immersion into low-level programming. It is designed to strip away abstractions and force a deep understanding of manual memory management, algorithmic efficiency, and the Unix philosophy.

---

## 🛠️ Technical Milestones

Over the course of four weeks, I progressed from basic syntax to re-implementing core system components:

### 1. Rebuilding the Standard Library (Tinylibstream)
One of the most significant challenges was building **Tinylibstream**, a lightweight version of the C standard I/O library (`stdio.h`). Instead of using built-in functions, I had to use raw system calls to manage data streams:
* **Custom Buffering:** Implementing buffered I/O to minimize expensive system calls.
* **Core Functions:** Developed manual versions of `fopen`, `fclose`, `fread`, `fwrite`, and `fseek`.
* **State Management:** Manually tracking file offsets and error flags within custom `STREAM` structures.

### 2. Mastering the Unix Shell (Bash)
The Piscine isn't just about C; it's about mastering the environment.
* **Scripting & Automation:** Developing complex **Bash** scripts to automate testing, file manipulation, and system monitoring.
* **Environment Logic:** Learning how the shell handles variables, subshells, and job control, which provided the groundwork for my later work on the **42sh** interpreter.

### 3. Data Structures & System Internals
* **Manual Memory:** Implementing **Linked Lists**, **BSTs**, and **Hash Maps** with a zero-tolerance policy for memory leaks (monitored by Valgrind).
* **System Calls:** Using `open`, `read`, `write`, `fork`, and `pipe` to recreate standard Unix utilities from scratch.

---

## 🚩 The "Moulinette" & Technical Rigor

Every submission was graded by the **Moulinette**, a strict automated system:
* **Binary Result:** A single failing edge case or memory leak resulted in a score of **0/20**.
* **Coding Style:** Absolute adherence to the EPITA style guide (no global variables, strict function lengths, and modularity).



---

## 🧠 Key Takeaways

The Piscine taught me **mental endurance** and **technical autonomy**. I learned to read man pages to find answers, to debug complex pointer logic at 3 AM, and to appreciate the high cost of every system call. It remains the foundation of my engineering discipline.

