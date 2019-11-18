import React, { Component } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import AddHouse from "./form";

class Add extends React.Component {
   
    render() { 
       return (
        <React.Fragment>
        <NavBar/>
        <AddHouse/>
        <Footer/>
        </React.Fragment>

       );
  }
}

export default Add;