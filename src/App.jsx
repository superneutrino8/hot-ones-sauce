import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SeasonSelector from "./components/SeasonSelector";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <SeasonSelector />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
