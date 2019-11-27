import React, { Component } from "react";
import Chatbot from "./chatbot";


class FAQ extends Component{

    render() { 
        return (
          <React.Fragment> 
            <div className="card FAQ">
              <strong>1. How to add a house or an apartment for selling or renting?  </strong>
              <p>Eather you can go and click to our AddHouse button on the gight side of our navigation bar or I can redirect you to the page. Would you like me to do that? </p>
              <strong>2. How do I search for rentals?</strong>
              <p> If you require any further information, feel free to contact us. Would you like me to redirect you to our contact page? </p>
              <strong>3. How to use the chatbot?  </strong> 
              <p>First of all you can tell me if you are a landlord or a renter. Then I can guide you with my questions on what are you searching for. Otherwise if you are just visiting our site you can ask me any questions you have.</p>
              <strong>4. Are all the houses or apartments available right now?</strong>
              <p>All the properties that are shown in our site are available and are being verified everyday. You can also check by contacting us.</p>
              <strong>5. Why the addresses of the rentals are not available?</strong>
              <p>All the addresses are purposely covered for safety reasons. You can know the specific address of each property after contacting our agency.</p>
            </div> 
            <Chatbot/>
          </React.Fragment>
          ); 
    }
}
export default FAQ;