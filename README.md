# Blood Pressure Gauge App (ReactJS)

## Project Description

The **Blood Pressure Gauge App** is a simple ReactJS application that estimates a user's blood pressure based on their **weight in kilograms (kg)**.

The user enters their weight, clicks the **"Check BP"** button, and the application displays:

* An estimated **blood pressure reading**
* The **health status**
* A **horizontal gauge indicator** that moves to represent the result.

This project demonstrates basic **React concepts** including:

* React state management
* Event handling
* Conditional logic
* Simple UI visualization.

---

## Features

* Weight input field (kg)
* **Check BP button**
* Estimated **blood pressure display**
* Status indicator:

  * Low
  * Normal
  * Elevated
  * High
* **Dynamic horizontal gauge** that changes position depending on the user's weight

---

## Blood Pressure Logic

The application assigns blood pressure values based on the following conditions:

| Weight Range         | Blood Pressure  | Status   |
| -------------------- | --------------- | -------- |
| Below **50 kg**      | **100/65 mmHg** | Low      |
| **50 – 79 kg**       | **120/80 mmHg** | Normal   |
| **80 – 99 kg**       | **135/88 mmHg** | Elevated |
| **100 kg and above** | **150/95 mmHg** | High     |

---

## How the Gauge Works

The horizontal gauge visually represents the blood pressure status:

| Status   | Gauge Position |
| -------- | -------------- |
| Low      | Left side      |
| Normal   | Middle         |
| Elevated | Right          |
| High     | Far right      |

The gauge pointer moves automatically after the **Check BP** button is clicked.

---

## Project Structure

```
bp-gauge-app
│
├── public
│   └── index.html
│
├── src
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
└── README.md
```

---

## Installation and Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/bp-gauge-app.git
```

### 2. Navigate into the project directory

```
cd bp-gauge-app
```

### 3. Install dependencies

```
npm install
```

### 4. Run the application

```
npm start
```

The app will open in your browser at:

```
http://localhost:3000
```

---

## Example Usage

1. Enter your **weight in kilograms** in the input field.
2. Click **Check BP**.
3. The application will display:

   * Blood pressure reading
   * Status
   * Gauge position indicating the result.

---

## Technologies Used

* ReactJS
* JavaScript (ES6)
* HTML5
* CSS3

---

## Disclaimer

This application provides **estimated blood pressure readings based only on weight** for demonstration purposes.

It is **not intended for medical diagnosis**.
Always consult a **qualified healthcare professional** for accurate medical advice.

---

## Author

Developed as a **ReactJS learning project** demonstrating user input handling, conditional logic, and dynamic UI components.


