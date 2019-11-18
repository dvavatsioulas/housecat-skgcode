import React, { Component } from "react";


class NavBarV2 extends Component {
  render() {
    return (
      //bg-dark instead of black
        <nav class="navbar fixed-top navbar-expand-md navbar-dark black scrolling-navbar"> 

      <a className="navbar-brand img-fluid" alt="Responsive image" href="/">
        <img src="black-cat.png" alt="logo"  />
      </a>

      <div class="collapse navbar-collapse navbar-inverse justify-content-end" id="navbars" > 
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Rent <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item"> 
            <a class="nav-link" href="/buy">Buy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="/add">Add House</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown04">
              <a class="dropdown-item" href="#">FAQ</a>
              <a class="dropdown-item" href="#about">About Us</a>
              <a class="dropdown-item" href="#contact">Contact</a>
            </div>
          </li>
        </ul>
      </div>
      
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
    );
  }
}

export default NavBarV2;