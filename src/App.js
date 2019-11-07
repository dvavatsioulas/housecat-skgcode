import React, { Component } from "react";
import "./App.css";
import Chatbot from "./components/chatbot";
import Header from "./components/header";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <NavBar className="block-example" />
        <Chatbot />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
