---
layout: post
title: "Precision in Change: Optimal Coin Dispensing in C"
date: 2025-05-15 10:00:00 +0100
project: true
---

## 🇦🇺 Exchange Project: Murdoch University

During my semester abroad in Australia, I developed a C-based algorithm designed for automated vendor systems (like vending machines or ticket kiosks). The goal was to solve the "Change-Making Problem": calculating the mathematically optimal combination of coins to return to a user while managing a limited real-time inventory.



---

## 🛠️ Technical Focus

### 1. Optimal Coin Combinations
Using a greedy algorithm approach (and exploring dynamic programming for non-standard coin sets), the system ensures that the fewest number of coins are dispensed for any given amount. This minimizes wear on the hardware and keeps the machine operational for longer periods.

### 2. Real-Time Inventory Tracking
A critical part of the project was managing the "coin hopper" state:
* **Inventory Monitoring:** The system tracks exactly how many of each coin denomination (e.g., $2, $1, 50c, etc.) remain in the machine.
* **Fallback Logic:** If the machine runs out of a specific coin, the algorithm dynamically recalculates the next best combination using only available stock, ensuring transaction accuracy even under "low-change" conditions.

### 3. Memory Efficiency
Since this software is designed to run on embedded hardware with limited resources, I focused on:
* **Low Memory Footprint:** Using efficient data structures to track coin counts and transaction history.
* **Execution Speed:** Ensuring the calculation happens in real-time so the user doesn't experience a delay at the vendor machine.

---

## 🧠 Key Takeaways

This project was a great introduction to **Embedded Logic**. It’s one thing to write an algorithm that works on a powerful laptop, but quite another to write one that is robust enough to handle physical hardware constraints and inventory failures. 

Completing this in an English-speaking academic environment at **Murdoch University** also helped me bridge the gap between French engineering rigor and international technical standards.
