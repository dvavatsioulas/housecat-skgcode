import React, { Component } from "react";
import axios from "axios";

class FilterBox extends Component {
  constructor(props) {
    super(props);

    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeMinPrice = this.handleChangeMinPrice.bind(this);
    this.handleChangeMaxPrice = this.handleChangeMaxPrice.bind(this);
    this.handleBuyRentChange = this.handleBuyRentChange.bind(this);
    this.reloadSearch = this.reloadSearch.bind(this);
  }
  state = {
    location: null,
    minprice: null,
    maxprice: null,
    selectedRentBuy: null,
  };

  componentDidMount() {
    if (localStorage.getItem("filters") == "") {
      this.setState({ location: "Location" });
    } else {
      var item = JSON.parse(localStorage.getItem("filters"));
      this.setState({ location: item.location, 
                      minprice : item.minprice, 
                      maxprice: item.maxprice,
                      selectedRentBuy: item.sale_type});
    }
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
  handleBuyRentChange = changeEvent => {
    this.setState({
      selectedRentBuy: changeEvent.target.value
    });
  };

  reloadSearch() {
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
          bedrooms: null,
          bathrooms: null,
          property_type: null,
          floor: null,
          sale_type: this.state.selectedRentBuy,
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
        maxprice: this.state.maxprice
      };
      localStorage.setItem("filters", JSON.stringify(filterboxInfo));
  }

  render() {
    return (
      <div className="card filterBox">
        <h3 className="card-header black white-text py-4">
          <strong>Filters</strong>
        </h3>

        <div className="card-body px-small-5 pt-0">
          <form>
            <div>
              <div className="md-form mt-3">
                <input
                  type="text"
                  id="locationFilter"
                  className="form-control filterText"
                  placeholder={this.state.location}
                  onChange={this.handleChangeLocation}
                />
              </div>
            </div>
            <div className="text-center">
                 <p className="filterText">What is the purpose? </p>
                 <div className="custom-control custom-radio custom-control-inline">
                   
                  <label class="custom-control-label">
                  <input
                    type="radio"
                    
                    value="rent"
                    
                    checked={this.state.selectedRentBuy === "rent"}
                    onChange={this.handleBuyRentChange}
                  />
                    Rent
                  </label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  
                  <label class="custom-control-label">
                  <input
                    type="radio"
                    
                    value="sale"
                    
                    checked={this.state.selectedRentBuy === "sale"}
                    onChange={this.handleBuyRentChange}
                  />
                    Buy
                  </label>
                </div>
              </div>

            <hr />

            <div class="form-group form-row text-center">
              <div class="col-md-4 mb-3" style={{marginLeft:'15%'}}>
                <label>Bedrooms</label>
                <select class="custom-select">
                  <option disabled>Choose</option>
                  <option selected value="1">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div class="col-md-4 mb-3">
                <label>Floor</label>
                <select class="custom-select">
                  <option disabled>Choose</option>
                  <option selected value="1">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>

            <hr />
            <p className="text-center filterText">Anything else?</p>
            <div className="d-flex flex-row" style={{marginRight:'9%'}}>
              <div className="d-flex flex-column checkboxes">
                <div className="custom-control custom-checkbox p-2">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="furnished"
                  />
                  <label class="custom-control-label" for="furnished">
                    Furnished
                  </label>
                </div>
                <div className="custom-control custom-checkbox p-2">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="parkingSpot"
                  />
                  <label className="custom-control-label" for="parkingSpot">
                    Parking spot
                  </label>
                </div>
              </div>

              <div className="d-flex flex-column checkboxes">
                <div className="custom-control custom-checkbox p-2">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="garden"
                  />
                  <label class="custom-control-label" for="garden">
                    Garden
                  </label>
                </div>
                <div className="custom-control custom-checkbox p-2">
                  <input type="checkbox" class="custom-control-input" id="ac" />
                  <label class="custom-control-label" for="ac">
                    A/C
                  </label>
                </div>
              </div>
            </div>

            <hr />

            <div className="d-flex flex-row">
              <div className="md-form small p-2">
                <p className="text-center filterText">From:</p>
                <input
                  id="minprice"
                  type="text"
                  onChange={this.handleChangeMinPrice}
                  placeholder={this.state.minprice}
                />
              </div>
              <div className="md-form small p-2">
                <p className="text-center filterText">To:</p>
                <input
                  id="maxprice"
                  type="text"
                  onChange={this.handleChangeMaxPrice}
                  placeholder={this.state.maxprice}
                />
              </div>
            </div>
          </form>
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
