import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a href="/house" className="nav-brand"><img src="cat.png" alt="logo" width="80%" ></img></a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-md-0">
      <li className="nav-item active">
        <a className="nav-link" href="/rent"><h3>Rent</h3>  <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
      <a className="nav-link" href="/buy"><h3>Buy</h3>  <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/about"><h3>About</h3>  <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/add"><h3>Add house</h3>  <span className="sr-only">(current)</span></a>
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