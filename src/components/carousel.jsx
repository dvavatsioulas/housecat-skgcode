import React, { Component } from "react";
import axios from "axios";
import { isTemplateElement } from "@babel/types";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Box from '@material-ui/core/Box';
import { sizing } from '@material-ui/system';

var locations = ["Athens", "Halkidiki", "Kavala", "Larisa", "Patra", "Thessaloniki"];

var styleBox = {
  width: "100%",
  height: "100%",
  padding: "25px",
  border: "2px solid black",
  background: "rgb(255,255, 255, 0.88)"
};

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      minprice: null,
      maxprice: null,
      saleType: null,
    };
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeMinPrice = this.handleChangeMinPrice.bind(this);
    this.handleChangeMaxPrice = this.handleChangeMaxPrice.bind(this);
    this.handleSaleTypeChange = this.handleSaleTypeChange.bind(this);
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
  handleSaleTypeChange (changeEvent) {
    this.setState({
      saleType: changeEvent.target.value
    });
  };

  handleSubmit() {
    console.log(this.state.location);
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
          sale_type: this.state.saleType,
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
            maxprice: this.state.maxprice,
            sale_type: this.state.saleType,
            
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
            <Box display="flex" flexDirection="row" width={1}>

              <Box width={0.5} id="locationbox">
                <Autocomplete freeSolo
                  options={locations}

                  renderInput={params => (
                    <TextField {...params} label="Location" variant="outlined" id="location" style={{ width: "100%" }} />
                  )}
                  
                />
              </Box>
              <Box width={0.15} id="minpricebox" class="flex-grow bd-highlight">
                <TextField id="minprice" label="Minimum Price" variant="outlined" style={{ width: "100%" }}  onChange={this.handleChangeMinPrice} value={this.state.minprice}/>
              </Box>

              <Box width={0.15} id="maxpricebox" class="flex-grow bd-highlight">
                <TextField id="maxprice" label="Maximum Price" variant="outlined" style={{ width: "100%" }} onChange={this.handleChangeMaxPrice} value={this.state.maxprice}/>
              </Box >
                 
              <Box width={0.1}>
              <div class="custom-control custom-radio">
                  <input type="radio" class="custom-control-input" id="rent"  value="rent"
                    checked={this.state.saleType === "rent"}
                    onChange={this.handleSaleTypeChange}/>
                  <label class="custom-control-label" for="rent">Rent</label>
              </div>
              <div class="custom-control custom-radio">
                  <input type="radio" class="custom-control-input" id="sale"  value="sale"
                    checked={this.state.saleType === "sale"}
                    onChange={this.handleSaleTypeChange}/>
                  <label class="custom-control-label" for="sale">Buy</label>
              </div>
              </Box>

              <Box width={0.2} class="flex-fill bd-highlight">
                <button style={{ width: "100%" }} className="btn btn-outline-black" onClick={this.handleSubmit} >Search</button>
              </Box>

            </Box>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
