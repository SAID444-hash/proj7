import React, { useState } from "react"; import "./App.css";

function App() { const [weight, setWeight] = useState(""); const [reading, setReading] = useState(""); const [status, setStatus] = useState(""); const [position, setPosition] = useState("0%");

const checkBP = () => { const w = parseFloat(weight);

if (isNaN(w)) {
  alert("Please enter a valid weight");
  return;
}

if (w < 50) {
  setReading("100/65 mmHg");
  setStatus("Low");
  setPosition("5%");
} else if (w >= 50 && w <= 79) {
  setReading("120/80 mmHg");
  setStatus("Normal");
  setPosition("35%");
} else if (w >= 80 && w <= 99) {
  setReading("135/88 mmHg");
  setStatus("Elevated");
  setPosition("65%");
} else {
  setReading("150/95 mmHg");
  setStatus("High");
  setPosition("90%");
}

};

return ( <div className="container"> <h1>Blood Pressure Gauge App</h1>

<input
    type="number"
    placeholder="Enter weight (kg)"
    value={weight}
    onChange={(e) => setWeight(e.target.value)}
  />

  <button onClick={checkBP}>Check BP</button>

  {reading && (
    <div className="result">
      <p><strong>Reading:</strong> {reading}</p>
      <p><strong>Status:</strong> {status}</p>

      <div className="gauge">
        <div className="labels">
          <span>Low</span>
          <span>Normal</span>
          <span>Elevated</span>
          <span>High</span>
        </div>
        <div className="needle" style={{ left: position }}></div>
      </div>
    </div>
  )}
</div>

); }

export default App;
