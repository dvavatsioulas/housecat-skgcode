import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <section className="mb-4 homePageStyle">
        <hr className="strong black" />
        <h1 id="contact" className="text-center display-4">
          Contact Information
        </h1>
        <p class="text-center w-responsive mx-auto mb-4">
          Do you have any questions? <br/> Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div class="row contactForm">
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      class="form-control"
                    />
                    
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      class="form-control"
                    />
                    
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      class="form-control"
                    />
                    
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                   
                  </div>
                </div>
              </div>
            </form>

            <div style={{float: "right", paddingRight:"32%"}}>
            {/* <div class="text-center"> gia na erthei 3ana sthn mesh ths formas*/}
              <a
                class="btn btn-info"
                onClick="document.getElementById('contact-form').submit();"
              >
                Send
              </a>
            </div>
            <div class="status"></div>
          </div>

          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Thessaloniki, Greece</p>
              </li>

              <li>
                <i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 30 2310 666666</p>
              </li>

              <li>
                <i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>systemofadown@ skgcode.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
