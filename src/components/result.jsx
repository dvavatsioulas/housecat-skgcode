import React, { Component } from "react";
import NavBar from "./navbar";
import Footer from "./footer";

const value = localStorage.getItem("searchData") || "";

class Result extends React.Component {
  constructor(props) {
    super(props);
    let item = JSON.parse(localStorage.getItem("searchData"));
    console.log(item.location);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        {value.location}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Result;
