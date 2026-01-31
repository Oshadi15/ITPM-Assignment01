# ITPM-Assignment01

This repository contains the automated functional and UI test suite for the [SwiftTranslator](https://www.swifttranslator.com/) application. This project was completed as an individual assessment for the **IT3040 - ITPM Assignment 1**.

## Project Objective
The primary goal is to evaluate the accuracy of Singlish-to-Sinhala conversion, system stability, and real-time UI responsiveness. The suite covers:
* **Positive Scenarios:** Accurate character mapping, word segmentation, and real-time updates.
* **Negative/Robustness Scenarios:** Handling informal abbreviations (e.g., "Thx") and mixed-case inputs.

## Test Scenarios Covered
As per the assignment requirements, the suite includes automation for:
1. **Real-time UI Updates:** Validating that Sinhala output updates automatically while typing (e.g., Scenario `Pos UI 0001`).
2. **Basic Conversions:** Phrases like "man gedhara yanavaa" (මන් ගෙදර යනවා).
3. **Interrogative Phrases:** Correct handling of question marks (e.g., "mata help ekak karanna puLuvandha?").
4. **Character Limits:** Testing short, medium, and long strings (S, M, L categories).
5. **Robustness:** Observing limitations with informal chat-style shorthand and character mapping stability.

## Prerequisites
Before running the tests, ensure you have the following installed:
* **Node.js** (Latest LTS version recommended)
* **npm** (Node Package Manager)

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Oshadi15/ITPM-Assignment01.git
