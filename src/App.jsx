import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SeasonSelector from "./components/SeasonSelector";
import SeasonViewer from "./components/SeasonViewer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SeasonSelector} />
        <Route path="/seasons" component={SeasonSelector} />
      </Switch>
      <Switch>
        <Route exact path="/seasons/:season" component={() => <SeasonViewer />} />
      </Switch>
    </div>
  );
}

export default App;
