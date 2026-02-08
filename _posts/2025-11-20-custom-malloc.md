---
layout: post
title: "Hard-Core C: Building a Custom Memory Allocator"
date: 2025-11-20 10:00:00 +0100
---

## 🏗️ The Project Challenge

As a core part of the **EPITA** curriculum, I developed a complete memory allocation library (`malloc`, `realloc`, `calloc`, and `free`) from the ground up in **C**. Unlike high-level programming where memory is a given, this project required managing the raw heap by communicating directly with the Linux kernel.



---

## 🛠️ Technical Implementation

The allocator was built using **`mmap`** and **`munmap`** system calls to request and release large pages of memory from the operating system.

### 1. The Core Functions
* **`malloc`:** Implemented a strategy to find free blocks within previously mapped pages or request new pages if the current heap is exhausted.
* **`free`:** Developed logic to mark blocks as available and, crucially, release entirely empty pages back to the OS using `munmap`.
* **`realloc` / `calloc`:** Built these on top of the core logic, ensuring proper data preservation during resizing and zero-initialization for new blocks.

### 2. Efficiency: The "Bit Bucket" Strategy
To optimize performance, I used a **Bit Bucket** (segregated free lists) approach. 
* **Segregated Fits:** Memory blocks are organized into buckets based on their size.
* **Constant Time:** This allows the allocator to find a suitable block in near $O(1)$ time, significantly reducing the overhead compared to a linear search through the heap.

### 3. Fragmentation Management
* **Splitting:** Large blocks are split to satisfy small requests without wasting memory.
* **Coalescing:** Adjacent free blocks are merged during the `free` process to prevent heap fragmentation.

### ⚠️ A Note on Concurrency
I am fully aware that modern allocators must handle **multi-threading** (managing race conditions, mutexes, and thread-local caches). For this project, I chose to focus strictly on the efficiency of the allocation algorithms and the robustness of the pointer arithmetic; therefore, a thread-safe implementation was not included.

---

## 🧠 Key Takeaways

This project was a deep dive into **pointer arithmetic** and the manual management of memory pages. It stripped away the abstractions of modern programming and forced me to understand exactly how a process manages its most precious resource: memory.

