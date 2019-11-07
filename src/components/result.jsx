import React, { Component } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

class Result extends React.Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <NavBar/>
                <Footer/>
           </React.Fragment>
         );
    }
}
 
export default Result;