import React, { Component } from "react";
import ReactDOM from "react-dom";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";

var styleText = {
  color: "white"
};

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="page-footer font-small footer-dark black pt-4">
        <h5 className="text-uppercase text-center" >
          Connect with us:
        </h5>
        <MDBContainer className="float-center">
          <MDBBtn size="xlg" tag="a" floating social="fb" target="_blank" href="https://www.facebook.com/skgcode/" style={{marginLeft:"34.3%"}}>
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>
          <MDBBtn size="xlg" tag="a" floating social="tw">
            <MDBIcon fab icon="twitter" />
          </MDBBtn>
          <MDBBtn size="xlg" tag="a" floating social="gplus">
            <MDBIcon fab icon="google-plus-g" />
          </MDBBtn>
          <MDBBtn size="xlg" tag="a" floating social="li" target="_blank" href="https://www.linkedin.com/company/skgcode/">
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>
        </MDBContainer>
        <div
          className="footer-copyright text-center footer-dark blacks py-3"
          style={styleText}
        >
          © 2019 Copyright: System of a down SKGCODE3
        </div>
      </footer>
    );
  }
}

export default Footer;

ReactDOM.render(<Footer />, document.getElementById('fixedFooter'));