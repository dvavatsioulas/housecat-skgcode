import React, { Component } from "react";
import Footer from "./footer";
import NavBarV2 from "../components/navbarV2";


class FAQ extends Component{

    render() { 
        return (
          <React.Fragment>
            <NavBarV2/>
           <div className="card">
              <div className="card-body">
                  
              <a class="nav-link dropdown-toggle " href="#1" id="dropdown04" data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">Q1. How to add a house or an apartment for selling or renting?</a>
             <div class="dropdown-menu dropdown-menu-left disabled" aria-labelledby="dropdown04">
             <a class="dropdown-item" href="/Q2">Go to</a>
            </div>
           
            <a class="nav-link dropdown-toggle" href="#2" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Q2. How do I search for rentals?</a>
            <div class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdown04">
              <a class="dropdown-item" href="/Q2">Go to</a>
            </div>
            <a class="nav-link dropdown-toggle" href="#3" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Q3. How to use the chatbot? </a>
            <div class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdown04">
              <a class="dropdown-item" href="#Q3">adbnfas</a>
            </div>
            <a class="nav-link dropdown-toggle" href="#4" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Q4. Are all the houses or apartments available right now?</a>
            <div class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdown04">
              <a class="dropdown-item" href="/Q1">Hallo</a>
            </div>
            <a class="nav-link dropdown-toggle" href="#5" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Q5. Why the addresses of the rentals are not available ?</a>
            <div class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdown04">
              <a class="dropdown-item" href="/Q1">Hallo</a>
            </div>
           


           </div> 
           </div> 
           <Footer/>
            </React.Fragment>
          
          ); 
    }
}
export default FAQ;