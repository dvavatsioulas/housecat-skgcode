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
    parking: null,
    furnitured: null,
    minsqm: null,
    maxsqm:null
  };

  componentDidMount() {
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
      furnitured: item.furnitured,
      minsqm: item.minsqm,
      maxsqm: item.maxsqm
    });
    if (item.location === null) {
      this.setState({ location: "Location" });
    }
    if (item.minprice === null) {
      this.setState({ minprice: "Minimum Price" });
    }
    if (item.maxprice === null) {
      this.setState({ maxprice: "Maximum Price" });
    }
    if (item.minsqm === null) {
      this.setState({ minsqm: "Minimum Sqm" });
    }
    if (item.maxsqm === null) {
      this.setState({ maxsqm: "Maximum Sqm" });
    }
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
    if (document.getElementById("locationFilter").value !== "") {
      this.state.location = document.getElementById("locationFilter").value;
    } else if (this.state.location === "Location") {
      this.state.location = null;
    }
    if (document.getElementById("minpricefield").value !== "") {
      this.state.minprice = document.getElementById("minpricefield").value;
    } else if (this.state.minprice === "Minimum Price") {
      this.state.minprice = null;
    }
    if (document.getElementById("maxpricefield").value !== "") {
      this.state.maxprice = document.getElementById("maxpricefield").value;
    } else if (this.state.maxprice === "Maximum Price") {
      this.state.maxprice = null;
    }
    if (document.getElementById("minsqmfield").value !== "") {
      this.state.minsqm = document.getElementById("minsqmfield").value;
    } else if (this.state.minsqm === "Minimum Sqm") {
      this.state.minsqm = null;
    }
    if (document.getElementById("maxsqmfield").value !== "") {
      this.state.maxsqm = document.getElementById("maxsqmfield").value;
    } else if (this.state.maxsqm === "Maximum Sqm") {
      this.state.maxsqm = null;
    }
    //need the else if or is "no" by default
    var parkingSend;
    if (this.state.parking === true) {
      parkingSend = "yes";
    } else if (this.state.parking === false) {
      parkingSend = "no";
    }
    var furnituredSend;
    if (this.state.furnitured === true) {
      furnituredSend = "yes";
    } else if (this.state.furnitured === false) {
      furnituredSend = "no";
    }
    var reloaded = false;

    axios
      .post(
        "https://housecat-skgcode-api.herokuapp.com/api/properties/search",
        {
          minprice: this.state.minprice,
          maxprice: this.state.maxprice,
          minsqm: this.state.minsqm,
          maxsqm: this.state.maxsqm,
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
      furnitured: this.state.furnitured,
      minsqm: this.state.minsqm,
      maxsqm: this.state.maxsqm
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
          furnitured: null,
          minsqm: null,
          maxsqm: null
        };
        localStorage.setItem("filters", JSON.stringify(filterboxInfo));

        window.open("/results", "_self"); //to open new page
      });
  }

  render() {
    return (
      <div className="card filterBox">
        <h3
          className="card-header text-center py-2"
          style={{ fontFamily: "Georgia" ,borderBottom:"3px solid #008ae6"}}
        >
          <strong>~Filters~</strong>
        </h3>
        <div className="card-body pt-0">
          <br />
          <Autocomplete
            freeSolo
            options={locations}
            id="locationFilter"
            renderInput={params => (
              <TextField
                {...params}
                label={this.state.location}
                variant="outlined"
                style={{ width: "100%" }}
              />
            )}
          />
          <TextField
            id="minsqmfield"
            label={this.state.minsqm}
            variant="outlined"
            style={{ width: "49%",marginBottom:"1%",marginTop:"2%", marginRight:"1%" }}
          ></TextField>
          <TextField
            id="maxsqmfield"
            label={this.state.maxsqm}
            variant="outlined"
            style={{ width: "49%",marginBottom:"1%",marginTop:"2%", marginLeft:"1%" }}
          ></TextField>
          
            <div className="text-center d-flex flex-row">
              <div className="custom-control-inline p-2">
                <p> Purpose: </p>
              </div>
              <div class="custom-control-inline custom-radio p-2">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="rent"
                  value="Rent"
                  checked={this.state.saleType === "Rent"}
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
                  value="Sale"
                  checked={this.state.saleType === "Sale"}
                  onChange={this.handleSaleTypeChange}
                />
                <label class="custom-control-label filterText" for="sale">
                  Buy
                </label>
              </div>
            </div>

            

            
              <div className="text-center d-flex flex-row">
                <div className="custom-control-inline p-2">
                  <p> Type: </p>
                </div>
                <div className="custom-control-inline custom-radio p-2">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="apartment"
                    value="Apartment"
                    checked={this.state.propertyType === "Apartment"}
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
                    value="House"
                    checked={this.state.propertyType === "House"}
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
            
            <TextField
              id="minpricefield"
              label={this.state.minprice}
              variant="outlined"
              style={{ width: "49%",marginBottom:"1%", marginRight:"1%" }}
            ></TextField>
            <TextField
              id="maxpricefield"
              label={this.state.maxprice}
              variant="outlined"
              style={{ width: "49%",marginBottom:"1%", marginLeft:"1%" }}
            ></TextField>
                
                
            <div className="form-group form-row text-center">
              <div className="d-flex flex-row w-50">
                <div className="mr-auto p-2">
                  <label className="filterTextDescription">Bedrooms: </label>
                </div>
                <div className="p-2">
                  <select
                    className="custom-select filterText"
                    value={this.state.bedrooms}
                    onChange={this.handleBedroomChange}
                  >
                    <option selected disabled>
                      Any
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>

              <div className="d-flex flex-row w-50">
                <div className="mr-auto p-2">
                  <label className="filterTextDescription">Floor: </label>
                </div>
                <div className="p-2">
                  <select
                    className="custom-select filterText"
                    value={this.state.floor}
                    onChange={this.handleFloorChange}
                  >
                    <option selected disabled>
                      Any
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>

              <div className="d-flex flex-row w-50">
                <div className="mr-auto p-2">
                  <label className="filterTextDescription">Bathrooms: </label>
                </div>
                <div className="p-2">
                  <select
                    className="custom-select filterText"
                    value={this.state.bathrooms}
                    onChange={this.handleBathroomChange}
                  >
                    <option selected disabled>
                      Any
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>

              

              <div className="d-flex flex-row w-50">
                <div className="mr-auto p-2">
                <label className="filterTextDescription">Heating: </label>
                </div>
                <div className="p-2">
                  <select
                    className="custom-select filterText"
                    value={this.state.heating}
                    onChange={this.handleHeatingChange}
                  >
                    <option selected disabled>
                      Any
                    </option>
                    <option value="gas"> Gas </option>
                    <option value="diesel">Diesel</option>
                    <option value="A/C">A/C</option>
                    <option value="None">None</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="form-group form-row text-center">
              <div className="d-flex flex-row w-50">
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
              </div>
              <div className="d-flex flex-row w-50">
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
              </div>
            </div>
          <a>
            <p
              className="clearFilters"
              style={{ color: "#008ae6" }}
              onClick={this.clearFilters}
            >
              Clear all filters
            </p>
          </a>
          {/* <button
            className="btn  btn-rounded btn-block"
            style={{ color: "#008ae6" }}
            onClick={this.clearFilters}
          >
            Clear all filters
          </button> */}
          <button
            className="btn  btn-rounded btn-block"
            onClick={this.reloadSearch}
            id="reloadBtn"
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
export default FilterBox;
