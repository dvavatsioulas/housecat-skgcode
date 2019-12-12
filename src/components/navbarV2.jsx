import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

class NavBarV2 extends Component {
  constructor(props) {
    super(props);

    this.handleRent = this.handleRent.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
  }

  handleRent() {
    axios
      .get(
        "https://housecat-skgcode-api.herokuapp.com/api/properties/saletype=0"
      )
      .then(res => {
        let filteringResults = res.data;
        localStorage.setItem("searchdata", JSON.stringify(filteringResults));
        let filterboxInfo = {
          location: null,
          minprice: null,
          maxprice: null,
          sale_type: "Rent",
          bedrooms: null,
          bathrooms: null,
          floor: null,
          property_type: null,
          heating_type: null,
          parking: null,
          furnitured: null,
          minsqm: null,
          maxsqm: null
        };
        localStorage.setItem("filters", JSON.stringify(filterboxInfo));
        // LocalStorage takes a few milliseconds to execute SO this delay is necessary otherwise redirect will happen before the process is complete
        setTimeout(() => {
          this.setState({ position: 1 });
        }, 2000);
        window.open("/results", "_self"); //to open new page
      });
  }

  handleBuy() {
    axios
      .get(
        "https://housecat-skgcode-api.herokuapp.com/api/properties/saletype=1"
      )
      .then(res => {
        let filteringResults = res.data;
        localStorage.setItem("searchdata", JSON.stringify(filteringResults));
        let filterboxInfo = {
          location: null,
          minprice: null,
          maxprice: null,
          sale_type: "Sale",
          bedrooms: null,
          bathrooms: null,
          floor: null,
          property_type: null,
          heating_type: null,
          parking: null,
          furnitured: null,
          minsqm: null,
          maxsqm: null
        };
        localStorage.setItem("filters", JSON.stringify(filterboxInfo));
        // LocalStorage takes a few milliseconds to execute SO this delay is necessary otherwise redirect will happen before the process is complete
        setTimeout(() => {
          this.setState({ position: 1 });
        }, 2000);
        window.open("/results", "_self"); //to open new page
      });
  }

  render() {
    return (
      //bg-dark instead of black
      <nav
        class="navbar navbar-expand-md navbar-dark scrolling-navbar"
        style={{ paddingLeft: "16%" }}
        id="navbar"
      >
        <a className="navbar-brand img-fluid" alt="Responsive image" href="/">
          <img src="/black-cat.png" alt="logo" />
        </a>

        <div
          className="collapse navbar-collapse navbar-inverse justify-content-end navbarMore"
          id="navbars"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={this.handleRent}>
                Rent <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={this.handleBuy}>
                Buy
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/add">
                Add House
              </a>
            </li>
            <li class="nav-item dropdown dropdownStyle">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown04"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/FAQ">
                  FAQ
                </a>
                <a
                  class="dropdown-item"
                  href="https://housecat-skgcode.herokuapp.com/#about"
                >
                  About Us
                </a>
                <a
                  class="dropdown-item"
                  href="https://housecat-skgcode.herokuapp.com/#contact"
                >
                  Contact
                </a>
              </div>
            </li>
          </ul>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbars"
          aria-controls="navbars"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    );
  }
}

export default NavBarV2;

ReactDOM.render(<NavBarV2 />, document.getElementById("fixedNavbar"));
