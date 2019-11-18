import React, { Component } from "react";
import "./App.css";
import Chatbot from "./components/chatbot";
import Header from "./components/header"; //replaced by Carousel
import NavBar from "./components/navbar"; //replaced by NavBarV2
import Footer from "./components/footer";
import LastHouses from "./components/lastHouses";
import About from "./components/about";
import Contact from "./components/contact";
import NavBarV2 from "./components/navbarV2";
import Carousel from "./components/carousel";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBarV2 />
        <Carousel />
        <LastHouses />
        <About />
        <Contact />
        <Chatbot />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
