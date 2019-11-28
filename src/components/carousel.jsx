import React, { Component } from "react";
import axios from "axios";
import { isTemplateElement } from "@babel/types";

var styleBox = {
  width: "100%",
  height: "100%",
  padding: "50px",
  border: "2px solid white",
  background: "linear-gradient(to left, rgba(255,0,0,0), #331900)"
};

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      minprice: null,
      maxprice: null
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
    console.log(this.state.minprice);
    console.log(this.state.maxprice);
    axios
      .post(
        "https://housecat-skgcode-api.herokuapp.com/api/properties/search",
        {
          minprice: this.state.minprice,
          maxprice: this.state.maxprice,
          minsqm: null,
          maxsqm: null,
          location: this.state.location,
          bedrooms: null,
          bathrooms: null,
          property_type: null,
          floor: null,
          sale_type: null,
          furnitured: null,
          heating_type: null,
          minbuilt_year: null,
          parking: null
        }
      )
      .then(res => {
        if (res.status == 200) {
          let filteringResults = res.data;
          localStorage.setItem("searchdata", JSON.stringify(filteringResults));

          window.open("/results", "_self"); //to open new page

          let filterboxInfo = {
            location: this.state.location,
            minprice: this.state.minprice,
            maxprice: this.state.maxprice
          };
          localStorage.setItem("filters", JSON.stringify(filterboxInfo));
        } else if (res.status == 204) {
          localStorage.setItem("searchdata", res.data);
          window.open("/results", "_self");
        }
      });
  }

  render() {
    return (
      <div class="slide-wrapper">
        <div
          id="carouselExampleIndicators"
          class="carousel slide homepage-feature"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100 carousel-img"
                src="image3.jpg"
                alt="First slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 carousel-img"
                src="newBackground.jpg"
                alt="Second slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 carousel-img"
                src="backgroundHouse.jpg"
                alt="Third slide"
              ></img>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="filter-block">
            <div className="rounded-pill" style={styleBox}>
              <div className="d-flex flex-row ">
                <input
                  id="location"
                  className="p-2 flex-grow-1 h4"
                  type="text"
                  placeholder="e.g. Thessaloniki"
                  onChange={this.handleChangeLocation}
                  value={this.state.location}
                />
                <input
                  id="minprice"
                  className="p-2 h5"
                  type="text"
                  placeholder="e.g. 200€"
                  onChange={this.handleChangeMinPrice}
                  value={this.state.minprice}
                />
                <input
                  id="maxprice"
                  className="p-2 h5"
                  type="text"
                  placeholder="e.g. 400€"
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
    );
  }
}

export default Carousel;
