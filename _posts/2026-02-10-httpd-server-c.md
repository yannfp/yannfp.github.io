---
layout: post
title: "HTTPd: Building a High-Performance HTTP/1.1 Server"
date: 2025-12-8 10:00:00 +0100
project: true
---

## 🏗️ Project Overview
The **HTTPd** project is a complete, from-scratch implementation of an **HTTP/1.1 server** built in **C**. Developed as a major milestone at **EPITA**, the goal was to create a robust system that follows the strict specifications of **RFC 9110 and 9112**, capable of serving web content as a Linux background service (daemon).


---

## 🛠️ Technical Architecture

To manage the complexity of a web server, the project was designed with a strict modular architecture to ensure maintainability and high performance .

### 1. Network & Socket Programming
The core of the server relies on the **TCP/IPv4** stack.
* **Socket Management:** Implemented the full lifecycle of a socket, from `getaddrinfo` and `bind` to the `accept` loop for incoming connections .
* **Robust I/O:** Handled common network pitfalls, such as `SIGPIPE` signals when a client unexpectedly closes a connection, ensuring the server remains operational .

### 2. Protocol Implementation
The server communicates using the **HTTP/1.1** standard:
* **Methods:** Full support for **GET** (retrieving resources) and **HEAD** (fetching metadata only) .
* **Status Codes:** Comprehensive error handling for standard codes, including `400 Bad Request`, `403 Forbidden`, `404 Not Found`, and `505 Version Not Supported` .
* **Persistence:** Configured to handle individual requests efficiently while managing the `Connection: close` header for non-persistent sessions .

### 3. Daemonization & Signal Control
For production environments, the server can run as a **daemon**.
* **Background Process:** Implemented forking and file descriptor management to detach the process from the terminal .
* **Graceful Shutdown:** Used `sigaction` to catch `SIGINT` (Ctrl+C), allowing the server to close open sockets and clean up memory before exiting .

---

## 🚀 Scalability & Concurrency
One of the most challenging aspects was preparing the server for high-load scenarios.
* **Non-blocking I/O:** To avoid bottlenecks, the server utilizes **non-blocking I/O** operations .
* **Epoll Integration:** By using the Linux **`epoll(7)`** system call, the architecture is designed to monitor thousands of simultaneous connections with constant time complexity ($O(1)$), a key requirement for modern high-traffic servers .

## 🧠 Key Takeaways
This project was a masterclass in **low-level C** and **UNIX proficiency**. It required absolute precision in memory management (no leaks permitted) and a deep understanding of how the web actually works under the hood. 

