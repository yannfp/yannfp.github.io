---
layout: post
title: "OCR Word Search Solver: A Journey into Computer Vision"
date: 2024-10-15 10:00:00 +0100
categories: 
tags: 
---

## 🧩 Project Overview
In my second year at **EPITA**, I served as the **Group Leader** for a team of four to develop an **Optical Character Recognition (OCR)** system.  Our objective was to create a software capable of "reading" an image of a word search puzzle and solving it automatically. 



---

## 🛠 How it Works (The Technical Pipeline)

To turn a raw image into a digital solution, we built a pipeline entirely in **C** that broke the problem down into four main stages: 

### 1. Cleaning the Image (Preprocessing)
Raw photos are often messy or tilted.  We implemented several filters to simplify the data:
* **Grayscale Conversion:** We stripped the color using a weighted formula to mimic human perception 
* **Auto-Rotation:** Using the **Hough Transform**, the program detected the grid's lines and straightened the image automatically. 
* **Noise Removal:** We applied **Gaussian** and **Median** filters to wipe away "grainy" artifacts that could confuse the computer. 

### 2. Finding the Letters (Segmentation)
Once the image was clean, we had to isolate each letter. 
* **The Flood Fill Method:** We used a recursive algorithm that "pours" through the image pixels to find connected black clusters. 
* **Bounding Boxes:** Each detected cluster was captured in a tiny **28x28 pixel fragment** to be analyzed individually. 



### 3. The Digital Brain (Neural Network)
We engineered a three-layer Neural Network to identify the letters: 
* **Input Layer:** 784 neurons (one for every pixel in our 28x28 fragments). 
* **Output Layer:** 26 neurons, each representing a letter of the alphabet. 
* **Logic:** The network calculates the probability for each letter; the one with the highest "confidence" is selected as the result. 



### 4. Finding the Words (The Solver)
Once we had a digital grid of characters, we ran an optimized search algorithm.  Instead of checking every possible coordinate, we created a dynamic index of "first-letter" locations to solve the puzzle faster. 

---

## 🚩 The Reality of the Project
Engineering is about learning through challenges, and this project was a major learning experience.  At the final deadline, we faced two main blockers:

* **The Interface (UI):** While we designed a GTK-based interface, we were unable to fully link it to the backend logic in time, meaning the "Start" buttons did not trigger the full resolution. 
* **Neural Network Training:** Although the math for our network (forward and backward propagation) was functional, we hit a wall with **training**.  Despite thousands of tests, the network would not reliably recognize characters, and the accuracy stayed low regardless of our efforts. 

## 🧠 What I Learned
Despite the unfinished components, this project was a masterclass in **systems complexity** and **team leadership**.  As the group leader, I learned how to manage technical debt and how a failure in one module (like training) can impact the entire system.  It solidified my skills in low-level **C** and gave me a deep appreciation for the difficulties of machine learning. 
