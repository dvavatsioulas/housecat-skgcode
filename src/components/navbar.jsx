import React, { Component } from "react";

var styleText = {
  color: "#aa66cc"
};

class NavBar extends Component {
  render() {
    return(

<nav className="navbar fixed-top navbar-expand-lg navbar black scrolling-navbar navbarClass">
<a className="navbar-brand" href="/"><img src="#" alt="logo"/></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse " id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto" >
    <li className="nav-item active">
    <a className="nav-link" style={styleText} href="/rent">Rent</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" style={styleText}  href="/buy">Buy</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" style={styleText} href="/about">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" style={styleText} href="/add">Add house</a>
    </li>
  </ul>
  <ul className="navbar-nav nav-flex-icons">
    <li className="nav-item">
      <a className="nav-link"><i className="fab fa-facebook-f"></i></a>
    </li>
    <li className="nav-item">
      <a className="nav-link"><i className="fab fa-twitter"></i></a>
    </li>
    <li className="nav-item">
      <a className="nav-link"><i className="fab fa-instagram"></i></a>
    </li>
  </ul>
</div>
</nav>
    );
  }
}

export default NavBar;