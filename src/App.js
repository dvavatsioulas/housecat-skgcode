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
        <NavBar className="block-example" />
        <Header />
        <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
        <img src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
        <Chatbot />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
