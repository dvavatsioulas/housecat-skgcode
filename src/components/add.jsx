import React, { Component } from "react";
import NavBarV2 from "./navbarV2";
import Footer from "./footer";
import AddHouse from "./form";

class Add extends React.Component {
   
    render() { 
       return (
        <React.Fragment>
        <NavBarV2/>
        <AddHouse/>
        <Footer/>
        </React.Fragment>

       );
  }
}

export default Add;