import React from "react";
import "./App.css";
import ScovilleMeter from "./components/ScovilleMeter";

function App() {
  return (
    <div className="App">
      <ScovilleMeter scoville={7000} />
    </div>
  );
}

export default App;
