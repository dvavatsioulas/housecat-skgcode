import React, { Component } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import Chatbot from "./chatbot";
import FilterBox from "./filterBox";
import House from "./house";

class Results extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <FilterBox />
        <Chatbot />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Results;
