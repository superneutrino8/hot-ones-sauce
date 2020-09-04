import React from "react";
import { Switch, Route } from "react-router-dom";
import SeasonSelector from "./components/SeasonSelector";
import SeasonViewer from "./components/SeasonViewer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SeasonSelector} />
        <Route path="/seasons" component={SeasonSelector} />
      </Switch>
      <Switch>
        <Route
          exact
          path="/seasons/:season"
          component={() => <SeasonViewer />}
        />
        <Route
          exact
          path="/seasons/:season/sauces/:sauce_id"
          component={() => <SeasonViewer />}
        />
      </Switch>
    </div>
  );
}

export default App;
