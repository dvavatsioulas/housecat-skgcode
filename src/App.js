import React, { Component } from "react";
import "./App.css";
import House from "./components/house";
import Chatbot from "./components/chatbot";
import Filters from "./components/filters";
import NavBar from "./components/navbar";


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header id="title"> HoUseCaT</header>
        <NavBar className="block-example"/>
        <div className="flex-container">
          <div>
            <Filters />
          </div>
          <div>
            <House />
          </div>
          <div>
            <Chatbot />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
