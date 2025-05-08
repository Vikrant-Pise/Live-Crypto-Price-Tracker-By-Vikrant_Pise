# 🪙 Real-Time Crypto Price Tracker

Live Demo: [Click Here]()

## Overview

This is a React + Redux Toolkit project simulating a real-time crypto tracker like CoinMarketCap.

---

## 🚀 Demo
Note:- Image in assets Folder.
(Screenshot 2025-05-08 150832.gif)

---
##  Features

-  Real-time (simulated) price updates using Redux state.
-  State management with Redux Toolkit.
-  Modern UI with Tailwind CSS.
-  Search and filter cryptocurrencies.
-  7-day mini price chart for each asset.
-  Responsive layout for desktop and mobile.
-  Live refresh every few seconds (mocked via simulation).

## 🧱 Architecture
- **Components**: CryptoTable, CryptoRow, Header, etc.
- **State Management**: Redux store holds crypto data
- **Data Flow**: Simulated socket → store → UI updates

##  Tech Stack

- React (Vite)
- Redux Toolkit
- Tailwind CSS
- Chart.js
- Simulated WebSocket using setInterval

---

##  Setup Instructions

```bash
git clone https://github.com/yourusername/crypto-price-tracker.git
cd crypto-price-tracker
npm install
npm run dev



How It Works
Uses mock JSON data to simulate real-time prices.

Every few seconds, the simulated WebSocket sends updated prices.

Redux slices manage state updates and broadcast to the UI.

Charts update in sync with price changes.

🧑‍💻 Author
Vikrant Pise
M.Sc. Computer Science, Full Stack Developer
