import React, { Component } from "react";
import "../App.css";
import Chatbot from "./chatbot";
import FilterBox from "./filterBox";
import House from "./house";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

class Results extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="row justify-content-between" id="rowDiv">
          <div class="col-md-5 col-lg-4" style={{marginLeft: "2%"}}><FilterBox /></div>
          <div class="col-md-7 col-lg-7"> <House /></div>
          <div>
            <ScrollUpButton style={{marginRight: "70px", marginBottom: "14px", width: "40px",height: "40px",border: "5px solid rgb(232, 232, 232)", backgroundColor: "rgb(232,232,232)"}}/>
          </div>
          <Chatbot />
        </div>

      </React.Fragment>
    );
  }
}

export default Results;
