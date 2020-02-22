import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

import { HomeRoute } from "./routes/home";

import "./App.css";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={HomeRoute} />
      </Switch>
    </Router>
  );
}

export default App;
