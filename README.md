# Drag & Drop Calculator Builder

This project is a **React-based Drag & Drop Calculator Builder** that allows users to dynamically create a custom calculator interface using **Zustand** for state management and **Tailwind CSS** for styling. It includes drag-and-drop functionality and a dark mode toggle. **[Live Preview](https://custom-drag-drop-calculator.vercel.app/)**

## 🚀 Features

### 🖱️ Core Functionality
- **Drag & Drop Components** – Users can add, remove, and arrange buttons dynamically.
- **Predefined Components** – Supports numbers (0-9), operations (+, -, *, /), and special functions (=, C, backspace).
- **Custom Layout** – Arrange buttons freely in the calculator area.
- **Calculation Logic** – Computes user input correctly.

### 🔧 Additional Features
- **Dark Mode Toggle** – Switch between light and dark themes dynamically.
- **Clear All Button** – Remove all added components instantly.
- **Backspace Button** – Delete the last entered character.
- **Duplicate Prevention** – Alerts the user if a component is already added.

## 🛠️ Tech Stack

- **React** (with Vite for fast development)
- **Zustand** (for state management)
- **React DnD** (for drag-and-drop functionality)
- **Tailwind CSS** (for styling)

## 📂 Project Structure

```
│   .gitignore
│   eslint.config.js
│   index.html
│   package.json
│   README.md
│   vite.config.js
│
├───public
└───src
    │   App.jsx
    │   index.css
    │   main.jsx
    │
    ├───components
    │       Button.jsx
    │       Calculator.jsx
    │       Display.jsx
    │       DragDropContainer.jsx
    │
    └───store
            useCalculatorStore.js
```

## 🏗️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/goyal1510/custom-drag-drop-calculator.git
   cd custom-drag-drop-calculator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

## 🎯 Usage

1. **Drag & Drop** components from the sidebar to the workspace.
2. **Click** on a button to add it directly.
3. **Rearrange** the buttons as needed.
4. **Use the calculator** to perform operations.
5. **Toggle Light/Dark Mode** using the button.
6. **Click Clear All** to reset the layout.
7. **Use Backspace** to delete the last input.

## 📌 Upcoming Enhancements

- Multi-theme support
- More complex calculator operations

---
**Developed by Jayant** 🚀