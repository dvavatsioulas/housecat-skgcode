import React, { Component } from "react";
import "./App.css";
import Chatbot from "./components/chatbot";
import LastHouses from "./components/lastHouses";
import About from "./components/about";
import Contact from "./components/contact";
import Carousel from "./components/carousel";

//den xrisimopoiountai men alla an bgoun den tha emfanizontai 
import NavbarV2 from "./components/navbarV2"
import Footer from "./components/footer"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Carousel />
        <LastHouses />
        <About />
        <Contact />
        <Chatbot />
      </React.Fragment>
    );
  }
}

export default App;
