# Redux Animations — Module 6, Week 3, Day 1

A React application demonstrating Redux-powered animations across three interactive demos.

## 🚀 Getting Started

### Prerequisites
- Node.js (v10+)
- npm

### Installation

```bash
npm install
```

### Running the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Tech Stack

| Package | Version |
|---|---|
| react | 16.8.6 |
| react-dom | 16.8.6 |
| react-scripts | 2.1.8 |
| react-router-dom | 4.3.1 |
| redux | 4.0.1 |
| react-redux | 7.0.3 |
| react-transition-group | 4.3.0 |

---

## 🎬 Demos

### Demo 1 — Counter Animation
- Redux manages a numeric counter state
- `INCREMENT`, `DECREMENT`, and `RESET` actions
- Numbers animate **up** (increment), **down** (decrement), or **pop** (reset) using CSS keyframes
- Supports +1, +10, −1, −10, and reset controls

### Demo 2 — Toggle & Fade Animation
- Redux controls a boolean `visible` state
- `CSSTransition` from React Transition Group handles enter/exit
- Choose from 4 animation styles: **fade**, **slide**, **zoom**, **flip**
- Color picker changes the box color via Redux state

### Demo 3 — List Item Animations
- Redux manages a dynamic array of items
- `TransitionGroup` + `CSSTransition` animate each item on add/remove
- Items slide in from the left and slide out to the right
- Type custom items or generate random suggestions

---

## 📁 Project Structure

```
src/
├── App.js              # Main app with React Router navigation
├── App.css
├── index.js
├── index.css
├── components/
│   ├── Home.js         # Landing page with demo cards
│   └── Home.css
├── demo1/
│   ├── Demo1.js        # Counter animation
│   ├── Demo1.css
│   └── store.js        # Redux store (counter)
├── demo2/
│   ├── Demo2.js        # Toggle/fade animation
│   ├── Demo2.css
│   └── store.js        # Redux store (visibility)
└── demo3/
    ├── Demo3.js        # List item animations
    ├── Demo3.css
    └── store.js        # Redux store (list)
```

---

## 📝 Submission

- **Due:** Today 10:30 PM PT  
- **Submit:** Post GitHub link on GAP Week 7 Day 1 Exercise

---

## 📚 References

- [Demo 1 CodeSandbox](https://codesandbox.io/s/w0ol90x9z5)
- [Demo 2 CodeSandbox](https://codesandbox.io/s/jn073)
- [Demo 3 CodeSandbox](https://codesandbox.io/s/ww0xkyqonk)
