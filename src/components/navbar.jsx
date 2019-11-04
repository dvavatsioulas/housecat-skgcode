import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              HoUseCaT
            </a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="#">Home</a>
            </li>

            <div class="row">
              <div class="col-sm-2">
                <a href="#">Rent</a>
              </div>
              <div class="col-sm-2">
                <a href="#">Buy</a>
              </div>
              <div class="col-sm-4">
                <a href="">HoUseCaT</a>
              </div>
              <div class="col-sm-2">
                <a href="/">About</a>
              </div>
              <div class="col-sm-2">
                <a href="#">Add</a>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
