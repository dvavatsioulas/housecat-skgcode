import React, { Component } from "react";
import "../App.css";
import Chatbot from "./chatbot";
import FilterBox from "./filterBox";
import House from "./house";

class Results extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FilterBox />
        <House />
        <Chatbot />
      </React.Fragment>
    );
  }
}

export default Results;
