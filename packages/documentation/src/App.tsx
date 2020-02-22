import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import { HomeRoute } from "./routes/home";
import { BasicRoute } from "./routes/basic";
import { StylingRoute } from "./routes/styling";
import { PixabayRoute } from "./routes/pixabay";

import "./App.css";
import { Nav } from "./components/nav";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Nav />
      <Switch>
        <Route path="/home" component={HomeRoute} />
        <Route path="/basic" component={BasicRoute} />
        <Route path="/custom-styling" component={StylingRoute} />
        <Route path="/pixabay-search" component={PixabayRoute} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
