import React, { Component } from "react";
import "../App.css";
import Chatbot from "./chatbot";
import FilterBox from "./filterBox";
import House from "./house";

class Results extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="row justify-content-between">
          <div class="col-md-5 col-lg-4"><FilterBox /></div>
          <div class="col-md-7 col-lg-8"> <House /></div>
          <Chatbot />
        </div>
      </React.Fragment>
    );
  }
}

export default Results;
