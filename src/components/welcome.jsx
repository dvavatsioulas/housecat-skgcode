import React, { Component } from "react";

class Welcome extends Component {
   
    render() { 
       return (
        <div className="WelcomeText">
           <img src="catphoto.jpg" alt="home"/>
            <h1 > About us </h1>
            <a href="http://localhost:3000/house" >"Lets find YOUR new house!" </a>            
        </div>
       );
  }
}

export default Welcome;

