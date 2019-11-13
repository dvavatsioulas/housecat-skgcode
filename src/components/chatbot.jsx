import React, { Component } from "react";

class Chatbot extends Component {
  myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-dark popup" onClick={this.myFunction}>
          Need help?
          <span className="popuptext" id="myPopup">
            <iframe
              width="350"
              height="430"
              allow="microphone;"
              src="https://console.dialogflow.com/api-client/demo/embedded/d810e43a-fb4a-49e6-991b-3a00776f968a"
            ></iframe>
          </span>
        </button>
      </React.Fragment>
    );
  }
}

export default Chatbot;
