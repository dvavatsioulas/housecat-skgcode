import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <hr id = "about" className="strong black" />
        <blockquote className="blockquote text-center homePageStyle">
          <h1 className="display-4">About us</h1>
          <p>
          Founded in 2019 by dynamic business leaders ("System of a Down"), HouseCat has already
          helped more than 5,000 people <br/> to find their dream homes through the efforts
          of more than 200 of our dedicated employees.<br/>
          We are the best real estate site available and we will make sure
          that you will find your perfect house or your perfect renter!
          </p>
          <footer className="blockquote-footer">
            <cite id="contact" title="Source Title">The Housecat team</cite>
          </footer>
        </blockquote>
      </React.Fragment>
    );
  }
}

export default About;
