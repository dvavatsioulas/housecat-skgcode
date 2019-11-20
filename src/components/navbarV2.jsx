import React, { Component } from "react";
import axios from "axios";

class NavBarV2 extends Component {
  constructor(props) {
    super(props);

    this.handleRent = this.handleRent.bind(this);
  }

  handleRent() {
    axios
      .get(
        "https://housecat-skgcode-api.herokuapp.com/api/properties/saletype=0"
      )
      .then(res => {
        let filteringResults = res.data;
        localStorage.setItem("searchdata", JSON.stringify(filteringResults));
        localStorage.setItem("filters", "rent");
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
        // LocalStorage takes a few milliseconds to execute SO this delay is necessary otherwise redirect will happen before the process is complete
        setTimeout(() => {
          this.setState({ position: 1 });
        }, 2000);
        console.log(res.data);
        window.open("/results", "_self"); //to open new page
      });
  }

  render() {
    return (
      //bg-dark instead of black
      <nav class="navbar sticky-top navbar-expand-md navbar-dark black scrolling-navbar">
        <a className="navbar-brand img-fluid" alt="Responsive image" href="/">
          <img src="black-cat.png" alt="logo" />
        </a>

        <div
          className="collapse navbar-collapse navbar-inverse justify-content-end"
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
              <a class="nav-link disabled" href="/add">
                Add House
              </a>
            </li>
            <li class="nav-item dropdown">
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
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdown04"
              >
                <a class="dropdown-item" href="#">
                  FAQ
                </a>
                <a class="dropdown-item" href="#about">
                  About Us
                </a>
                <a class="dropdown-item" href="#contact">
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
