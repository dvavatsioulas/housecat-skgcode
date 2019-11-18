import React, { Component } from "react";
import axios from "axios";

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
        axios.post('https://housecat-skgcode-api.herokuapp.com/api/properties/search',  {
            "id":null,
            "minprice":this.state.minprice,
            "maxprice":this.state.minprice,
            "sqm": null,
            "location":this.state.location,
            "bedrooms":null,
            "bathrooms":null,
            "property_type":null,
            "floor":null,
            "sale_type":null,
            "furnitured":null,
            "heating_type":null,
            "minbuilt_year":null,
            "maxbuilt_year":null,
            "parking":null
        }).then(res => {
    
          let filterboxInfo = {
            location: this.state.location,
            minprice: this.state.minprice,
            maxprice: this.state.maxprice
          }
          localStorage.setItem("filters",JSON.stringify(filterboxInfo));
    
          let filteringResults = res.data;
          localStorage.setItem("searchdata", JSON.stringify(filteringResults));
          // LocalStorage takes a few milliseconds to execute SO this delay is necessary otherwise redirect will happen before the process is complete
          setTimeout( () => {
           this.setState({ position: 1 });
          }, 2000);
          window.open("/results", "_self"); //to open new page
        });
    }


    render() {
        return (
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                {/* carousel-fade */}
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src="image3.jpg" alt="First slide"></img>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="newBackground.jpg" alt="Second slide"></img>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="backgroundHouse.jpg" alt="Third slide"></img>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
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

                {/* <div className="filter-block filter-fluid">
                    <div className="rounded-pill" style={styleBox}> */}
                        {/* <div class="input-group">
                            <select class="custom-select" id="inputGroupSelect04" id="location" onChange={this.handleChangeLocation} value={this.state.location} class="form-control">
                                <option selected>Thessaloniki</option>
                                <option value="1">Athina</option>
                                <option value="2">Kavala</option>
                                <option value="3">Larisa</option>
                            </select>
                            <input id="minprice" type="text" placeholder="280€" onChange={this.handleChangeMinPrice}value={this.state.minprice} class="form-control"></input>
                            <input id="maxprice" type="text" placeholder="400€" onChange={this.handleChangeMinPrice}value={this.state.minprice} class="form-control"></input>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button">Button</button>
                            </div>
                        </div>
                    </div>
                </div> */}
          </div>
            
        );
    }
}

export default Carousel;