import React from "react";
import "./App.css";
import ScovilleMeter from "./components/ScovilleMeter";

function App() {
  return (
    <div className="App">
      <ScovilleMeter height={800} scoville={7000} />
      <ScovilleMeter height={800} scoville={1000001} />
      <ScovilleMeter height={800} scoville={10000} />
      <ScovilleMeter height={800} scoville={100000} />
    </div>
  );
}

export default App;
