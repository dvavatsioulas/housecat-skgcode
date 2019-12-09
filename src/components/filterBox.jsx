import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Box from "@material-ui/core/Box";

var locations = [
  "Athens",
  "Halkidiki",
  "Kavala",
  "Larisa",
  "Patra",
  "Thessaloniki"
];

class FilterBox extends Component {
  constructor(props) {
    super(props);

    //this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeMinPrice = this.handleChangeMinPrice.bind(this);
    this.handleChangeMaxPrice = this.handleChangeMaxPrice.bind(this);
    this.handleSaleTypeChange = this.handleSaleTypeChange.bind(this);
    this.handleHeatingChange = this.handleHeatingChange.bind(this);
    this.handlePropertyTypeChange = this.handlePropertyTypeChange.bind(this);
    this.handleBedroomChange = this.handleBedroomChange.bind(this);
    this.handleBathroomChange = this.handleBathroomChange.bind(this);
    this.handleFloorChange = this.handleFloorChange.bind(this);
    this.handleParkingChecked = this.handleParkingChecked.bind(this);
    this.handleFurnituredChecked = this.handleFurnituredChecked.bind(this);
    this.reloadSearch = this.reloadSearch.bind(this);
    this.clearFilters = this.clearFilters.bind(this);
  }
  state = {
    location: null,
    minprice: null,
    maxprice: null,
    saleType: null,
    bedrooms: null,
    floor: null,
    bathrooms: null,
    propertyType: null,
    heating: null,
    parking: false,
    furnitured: false
  };

  componentDidMount() {
    if (localStorage.getItem("filters") == "") {
      this.setState({ location: "Location" });
    } else {
      var item = JSON.parse(localStorage.getItem("filters"));
      this.setState({
        location: item.location,
        minprice: item.minprice,
        maxprice: item.maxprice,
        saleType: item.sale_type,
        bedrooms: item.bedrooms,
        bathrooms: item.bathrooms,
        floor: item.floor,
        propertyType: item.property_type,
        heating: item.heating_type,
        parking: item.parking,
        furnitured: item.furnitured
      });
      document.getElementById("locationFilter").value = item.location;
    }
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
  handleSaleTypeChange(changeEvent) {
    this.setState({
      saleType: changeEvent.target.value
    });
  }
  handlePropertyTypeChange(changeEvent) {
    this.setState({
      propertyType: changeEvent.target.value
    });
  }
  handleHeatingChange(changeEvent) {
    this.setState({
      heating: changeEvent.target.value
    });
  }
  handleBedroomChange(event) {
    this.setState({ bedrooms: event.target.value });
  }
  handleBathroomChange(event) {
    this.setState({ bathrooms: event.target.value });
  }
  handleFloorChange(event) {
    this.setState({ floor: event.target.value });
  }
  handleParkingChecked(event) {
    this.setState(prevState => ({ parking: !prevState.parking }));
  }
  handleFurnituredChecked(event) {
    this.setState(prevState => ({ furnitured: !prevState.furnitured }));
  }

  reloadSearch() {
    if (document.getElementById("locationFilter").value == "") {
      this.state.location = null;
    } else {
      this.state.location = document.getElementById("locationFilter").value;
    }if (document.getElementById("minpricefield").value == "") { this.state.minprice = null }
    else { this.state.minprice = document.getElementById("minpricefield").value }
    if (document.getElementById("maxpricefield").value == "") { this.state.maxprice = null }
    else { this.state.maxprice = document.getElementById("maxpricefield").value }
    
    console.log(this.state.location, this.state.minprice, this.state.maxprice);

    var parkingSend;
    if (this.state.parking === true) {
      parkingSend = "yes";
    } else {
      parkingSend = "no";
    }
    var furnituredSend;
    if (this.state.furnitured === true) {
      furnituredSend = "yes";
    } else {
      furnituredSend = "no";
    }
    console.log(this.state.location, this.state.minprice, this.state.maxprice);
    var reloaded = false;
    axios
      .post(
        "https://housecat-skgcode-api.herokuapp.com/api/properties/search",
        {
          minprice: this.state.minprice,
          maxprice: this.state.maxprice,
          minsqm: null,
          maxsqm: null,
          location: this.state.location,
          bedrooms: this.state.bedrooms,
          bathrooms: this.state.bathrooms,
          property_type: this.state.propertyType,
          floor: this.state.floor,
          sale_type: this.state.saleType,
          furnitured: furnituredSend,
          heating_type: this.state.heating,
          minbuilt_year: null,
          parking: parkingSend
        }
      )
      .then(res => {
        console.log(res.data);
        if (res.status == 200) {
          let filteringResults = res.data;
          localStorage.setItem("searchdata", JSON.stringify(filteringResults));
          reloaded = true;
          if (reloaded) {
            window.open("/results", "_self"); //to open new page
            reloaded = false;
          }
        } else if (res.status == 204) {
          localStorage.setItem("searchdata", res.data);
           window.open("/results", "_self");
        }
      });
    let filterboxInfo = {
      location: this.state.location,
      minprice: this.state.minprice,
      maxprice: this.state.maxprice,
      sale_type: this.state.saleType,
      bedrooms: this.state.bedrooms,
      bathrooms: this.state.bathrooms,
      floor: this.state.floor,
      property_type: this.state.propertyType,
      heating_type: this.state.heating,
      parking: this.state.parking,
      furnitured: this.state.furnitured
    };
    localStorage.setItem("filters", JSON.stringify(filterboxInfo));
  }

  clearFilters() {
    axios
      .post(
        "https://housecat-skgcode-api.herokuapp.com/api/properties/search",
        {
          minprice: null,
          maxprice: null,
          minsqm: null,
          maxsqm: null,
          location: null,
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
        let filteringResults = res.data;
        localStorage.setItem("searchdata", JSON.stringify(filteringResults));
        let filterboxInfo = {
          location: null,
          minprice: null,
          maxprice: null,
          sale_type: null,
          bedrooms: null,
          bathrooms: null,
          floor: null,
          property_type: null,
          heating_type: null,
          parking: null,
          furnitured: null
        };
        localStorage.setItem("filters", JSON.stringify(filterboxInfo));

        window.open("/results", "_self"); //to open new page
      });
  }

  render() {
    return (
      <div className="card filterBox">
        <h3 className="card-header text-center py-2" style={{fontFamily:"Georgia"}}>
          <strong>~Filters~</strong>
        </h3>
        <div className="card-body pt-0" style={{height:"60%"}}>
          <hr />
          <Autocomplete
            freeSolo
            options={locations}
            id="locationFilter"
            renderInput={params => (
              <TextField
                {...params}
                 label="Location"
                variant="outlined"
                placeholder={this.state.location}
                style={{ width: "100%" }}
              />
            )}
          />
          <form className="filterboxForm">
            <div>
              <div className="md-form mt-3"></div>
            </div>
            <div className="text-center d-flex flex-row">
              <div className="custom-control-inline p-2">
                <p className="filterTextDescription"> Purpose: </p>
              </div>
              <div class="custom-control-inline custom-radio p-2">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="rent"
                  value="rent"
                  checked={this.state.saleType === "rent"}
                  onChange={this.handleSaleTypeChange}
                />
                <label class="custom-control-label filterText" for="rent">
                  Rent
                </label>
              </div>
              <div class="custom-control-inline custom-radio p-2">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="sale"
                  value="sale"
                  checked={this.state.saleType === "sale"}
                  onChange={this.handleSaleTypeChange}
                />
                <label class="custom-control-label filterText" for="sale">
                  Buy
                </label>
              </div>
            </div>

            <hr />

            <div className="text-center">
              <div className="text-center d-flex flex-row">
                <div className="custom-control-inline p-2">
                  <p className="filterTextDescription"> Type: </p>
                </div>
                <div className="custom-control-inline custom-radio p-2">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="apartment"
                    value="apartment"
                    checked={this.state.propertyType === "apartment"}
                    onChange={this.handlePropertyTypeChange}
                  />
                  <label
                    className="custom-control-label filterText"
                    for="apartment"
                  >
                    Apartment
                  </label>
                </div>
                <div class="custom-control-inline custom-radio p-2">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="house"
                    value="house"
                    checked={this.state.propertyType === "house"}
                    onChange={this.handlePropertyTypeChange}
                  />
                  <label
                    className="custom-control-label filterText"
                    for="house"
                  >
                    House
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="form-group form-row text-center">
              <div className="d-flex flex-row">
                <div className="mr-auto p-2">
                  {" "}
                  <label className="filterTextDescription">Bedrooms: </label>
                </div>
                <div className="p-2">
                  <select
                    className="custom-select filterText"
                    value={this.state.bedrooms}
                    onChange={this.handleBedroomChange}
                  >
                    <option selected disabled>
                      Choose
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>

              <div className="d-flex flex-row">
                <div className="mr-auto p-2">
                  {" "}
                  <label className="filterTextDescription">Bathrooms: </label>
                </div>
                <div className="p-2">
                  <select
                    className="custom-select filterText"
                    value={this.state.bathrooms}
                    onChange={this.handleBathroomChange}
                  >
                    <option selected disabled>
                      Choose
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>

              <div className="d-flex flex-row">
                <div className="mr-auto p-2">
                  {" "}
                  <label className="filterTextDescription">Floor: </label>
                </div>
                <div className="p-2">
                  <select
                    className="custom-select filterText"
                    value={this.state.floor}
                    onChange={this.handleFloorChange}
                  >
                    <option selected disabled>
                      Choose
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
            </div>

            <hr />
            <p className="text-center filterText">Anything else?</p>
            <div className="form-group form-row text-center ">
              <div className="d-flex flex-row">
                <label className="p-2 filterTextDescription">Heating: </label>
                <select
                  className="custom-select filterText"
                  value={this.state.heating}
                  onChange={this.handleHeatingChange}
                >
                  <option selected disabled>
                    Choose
                  </option>
                  <option value="gas"> Gas </option>
                  <option value="diesel">Diesel</option>
                </select>
              </div>
            </div>

            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="parking"
                checked={this.state.parking}
                onChange={this.handleParkingChecked}
              />
              <label className="custom-control-label filterText" for="parking">
                Parking Spot
              </label>
            </div>
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                className="custom-control-input"
                id="furnitured"
                checked={this.state.furnitured}
                onChange={this.handleFurnituredChecked}
              />
              <label
                className="custom-control-label filterText"
                for="furnitured"
              >
                Furnitured
              </label>
            </div>

            <hr />

            <div className="d-flex flex-fill">
              <div className="mb-3">
                <Box
                  width={0.1}
                  id="minpricebox"
                  class="flex-grow bd-highlight"
                >
                  <TextField id="minpricefield" placeholder={this.state.minprice} label="Minimum Price" variant="outlined" style={{ width: "100%" }} >
                   
                  </TextField>
                </Box>
              </div>
              <div className="mb-3">
                <Box
                  width={0.1}
                  id="maxpricebox"
                  class="flex-grow bd-highlight"
                >
                   <TextField id="maxpricefield" placeholder={this.state.maxprice} label="Maximum Price" variant="outlined" style={{ width: "100%" }}  >
                      
                    </TextField>
                </Box>
              </div>
            </div>
          </form>
          <a>
            <p className="clearFilters" onClick={this.clearFilters}>
              Clear all filters
            </p>
          </a>
          <button
            className="btn btn-outline-info btn-rounded btn-block "
            onClick={this.reloadSearch}
          >
            Reload
          </button>
        </div>
      </div>
    );
  }
}
export default FilterBox;
