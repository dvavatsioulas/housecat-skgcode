import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Rent from "./components/rent";
import Buy from "./components/buy";
import About from "./components/about";
import Add from "./components/add";



const routing = (
  <Router>
<<<<<<< HEAD
    <Switch> 
=======
    <hr />
    <Switch>
      
>>>>>>> 69de49ceffa6d0cf964f4c06428699f8c26297b6
    <Route exact path="/rent" component={Rent} />
    <Route exact path="/buy" component={Buy} />
    <Route exact path="/about" component={About} />
    <Route exact path="/add" component={Add} />
<<<<<<< HEAD
    <Route exact path="" component={App} />
=======
    <Route exact path="/" component={App} />

    
>>>>>>> 69de49ceffa6d0cf964f4c06428699f8c26297b6
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
serviceWorker.unregister();
