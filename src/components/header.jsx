import React, { Component } from "react";
import axios from "axios";
//var cors = require('cors');

var styleBox = {
  width: "100%",
  height: "100%",
  padding: "50px",
  border: "2px solid white",
  background: "linear-gradient(to left, rgba(255,0,0,0), #331900)"
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      minprice: "",
      maxprice: "",
    };
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeMinPrice = this.handleChangeMinPrice.bind(this);
    this.handleChangeMaxPrice = this.handleChangeMaxPrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeLocation(event) {
    this.setState({
      location: event.target.value
    });
  }
  handleChangeMaxPrice(event) {
    this.setState({
      maxprice: event.target.value
    });
  }
  handleChangeMinPrice(event) {
    this.setState({
      minprice: event.target.value
    });
  }

  handleSubmit() {
   
    axios.post('http://192.168.26.213:8000/api/properties/search',  {
      "id":null,
        "minprice":null,
        "maxprice":null,
        "sqm": null,
        "location":this.state.location,
        "bedrooms":null,
        "bathrooms":null,
        "property_type":null,
        "floor":null,
        "description":null,
        "sale_type":null,
        "phone":null,
        "email":null,
        "img_url": null,
        "furnitured":null,
        "heating_type":null,
        "built_year":null,
        "parking":null
    }).then(res => {
      //  const minprice = res.data.minprice;
      // const maxPrice = res.data.maxprice;
      const location = res.data.location;
      let searchFirst = {
        thelocation: location
      }
      //  const minprice = res.data.minprice;
      // const maxPrice = res.data.maxprice;
      localStorage.setItem("searchdata", searchFirst);
      window.open("/results", "_self"); //to open new page
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <img className="backImg" src="backgroundHouse.jpg" alt="backdround" />
          <div className="filter-block">
            <div className="rounded-pill" style={styleBox}>
              <div className="d-flex flex-row ">
                <input
                  id="location"
                  className="p-2 flex-grow-1 h4"
                  type="text"
                  placeholder="Thessaloniki, Greece"
                  onChange={this.handleChangeLocation}
                  value={this.state.location}
                />
                <input
                  id="minprice"
                  className="p-2 h5"
                  type="text"
                  placeholder="280€"
                  onChange={this.handleChangeMinPrice}
                  value={this.state.minprice}
                />
                <input
                  id="maxprice"
                  className="p-2 h5"
                  type="text"
                  placeholder="400€"
                  onChange={this.handleChangeMaxPrice}
                  value={this.state.maxprice}
                />
                <div className="p-2">
                  <button
                    className="btn btn-outline-white"
                    onClick={this.handleSubmit}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
