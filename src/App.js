import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2b3036";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Text Case Changer" mode={mode} />
      </div>
    </>
  );
}

export default App;
