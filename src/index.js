import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Add from "./components/add";
import Results from "./components/results";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/rent" component={Results} />
      <Route exact path="/buy" component={Results} />
      {/* <Route exact path="/add" component={Add} /> */}
      <Route exact path="/results" component={Results} />
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
