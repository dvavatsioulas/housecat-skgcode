import React, { Component } from "react";
import Chatbot from "./chatbot";
import AddHouse from "./form";

class Add extends React.Component {
   
    render() { 
       return (
        <React.Fragment>
          <AddHouse/>
          <Chatbot/>
        </React.Fragment>
       );
  }
}

export default Add;