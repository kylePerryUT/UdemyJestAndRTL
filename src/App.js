import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");

  const getNewButtonColor = (currentButtonColor) =>
    currentButtonColor === "red" ? "blue" : "red";

  return (
    <button
      style={{ backgroundColor: buttonColor }}
      onClick={() => setButtonColor(getNewButtonColor(buttonColor))}
    >
      Change to {getNewButtonColor(buttonColor)}
    </button>
  );
}

export default App;
