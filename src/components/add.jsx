import React, { Component } from "react";
import NavBar from "./navbar";
import Footer from "./footer";

class Add extends React.Component {
   
    render() { 
       return (
        <React.Fragment>
        <NavBar/>
        <Footer/>
        </React.Fragment>
       );
  }
}

export default Add;