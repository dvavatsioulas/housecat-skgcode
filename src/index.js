import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Welcome from "./components/welcome";

const routing = (
  <Router>
    <hr />
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/house" component={App} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
