import React, { Component } from "react";
import "../App.css";
import Footer from "./footer";
import Chatbot from "./chatbot";
import FilterBox from "./filterBox";
import House from "./house";
import NavBarV2 from "../components/navbarV2";

class Results extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBarV2 />
        <FilterBox />
        <House />
        <Chatbot />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Results;
