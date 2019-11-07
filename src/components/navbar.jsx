import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return(
/*{ <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-md-0">
      
     <div class="container"> 
      <li className="nav-item active">
      <div className="item item-1"><a className="nav-link" href="/rent">Rent<span className="sr-only">(current)</span></a></div>
      </li>
      <li className="nav-item active">
      <div className="item item-1"><a className="nav-link" href="/buy">Buy<span className="sr-only">(current)</span></a></div>
      </li>
      <li className="nav-item active">
      <div className="item item-2"><a href="/" className="nav-brand"><img src="#" alt="logo" width="20%" ></img></a></div>
      </li>
      <li className="nav-item active">
      <div className="item item-1"><a className="nav-link" href="/about">About<span className="sr-only">(current)</span></a></div>
      </li>
      <li className="nav-item active">
      <div className="item item-1"><a className="nav-link" href="/add">Add house<span className="sr-only">(current)</span></a></div>
      </li>
    </div>
    </ul>
  </div>
</nav> }*/



<nav className="navbar fixed-top navbar-expand-lg navbar white scrolling-navbar">
<a className="navbar-brand" href=""><img src="#" alt="logo"/></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
    <a className="nav-link" href="/rent">Rent</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="/buy">Buy</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="/about">About</a>
    </li>
    <li classn="nav-item">
      <a className="nav-link" href="/add">Add house</a>
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

// <nav className="navbar navbar-default" role="navigation">
//   <div className="navbar-header">
//     <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
//       <span className="icon-bar"></span>
//       <span className="icon-bar"></span>
//       <span className="icon-bar"></span>
//     </button>    
//   </div>
//   <a href="/house" className="nav-brand"><img src="cat.png" alt="logo" width="40%" ></img></a>
//   <div className="navbar-collapse collapse">
//     <ul className="nav navbar-nav navbar-left">
//         <li>
//         <a className="nav-link" href="/rent">Rent </a>
//         </li>
//         <li>
//              <a className="nav-link" href="/buy">Buy </a>
//         </li>
//     </ul>
//     <ul className="nav navbar-nav navbar-right">
//       <li>
//           <a className="nav-link" href="/about">About </a>
//       </li>
//       <li>
//           <a className="nav-link" href="/add">Add house  </a>
//       </li>
//     </ul>
//   </div>
// </nav>
    )
  }
}

export default NavBar;