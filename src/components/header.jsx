import React, { Component } from "react";

var styleBox = {
  width: "100%",
  height: "100%",
  padding: "50px",
  border: "2px solid white",
  background: "linear-gradient(to left, rgba(255,0,0,0), #00bfa5)"
};

class Filters extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <img className="backImg" src="newBackground.jpg" alt="backdround" />
          <div className="filter-block">
            <div className="rounded-pill" style={styleBox}>
              <div className="d-flex flex-row ">
                <p id="filtersTitle"></p>
                <img
                  className="rounded-circle"
                  src="housecat.png"
                  width="20%"
                  height="10%"
                />
              </div>
              <div className="d-flex flex-row ">
                <input
                  className="p-2 flex-grow-1 "
                  type="text"
                  placeholder="Thessaloniki, Greece"
                />
                <input className="p-2" type="text" placeholder="280€" />
                <input className="p-2" type="text" placeholder="400€" />
                <div className="p-2">
                  <button className="btn btn-outline-white">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Filters;
