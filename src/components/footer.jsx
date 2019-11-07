import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";

var styleText = {
  color: "#aa66cc"
};

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="page-footer font-small pt-4">
        <div className="container-fluid text-center text-md-left">
          <div class="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase" style={styleText}>
                Contact form:{" "}
              </h5>
              <div className="grey-text">
                <MDBContainer>
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        label="Your name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput
                        label="Subject"
                        icon="tag"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        type="textarea"
                        rows="1"
                        label="Your message"
                        icon="pencil-alt"
                      />
                    </MDBCol>
                  </MDBRow>
                  <div className="text-center">
                    <MDBBtn outline color="secondary">
                      Send <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                  </div>
                </MDBContainer>
              </div>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase" style={styleText}>
                Connect with us:
              </h5>

              <MDBContainer>
                <MDBBtn size="xlg" tag="a" floating social="fb">
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>
                <MDBBtn size="xlg" tag="a" floating social="tw">
                  <MDBIcon fab icon="twitter" />
                </MDBBtn>
                <MDBBtn size="xlg" tag="a" floating social="gplus">
                  <MDBIcon fab icon="google-plus-g" />
                </MDBBtn>
                <MDBBtn size="xlg" tag="a" floating social="li">
                  <MDBIcon fab icon="linkedin-in" />
                </MDBBtn>
              </MDBContainer>
            </div>
          </div>
        </div>

        <div
          className="footer-copyright text-center white py-3"
          style={styleText}
        >
          © 2019 Copyright: System of a down SKGCODE3
        </div>
      </footer>
    );
  }
}

export default Footer;
