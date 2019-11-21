import React, { Component } from "react";
import axios from "axios";
import House from "./house";
import { conditionalExpression } from "@babel/types";

class FilterBox extends Component {
  constructor(props) {
    super(props);

    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.reloadSearch = this.reloadSearch.bind(this);
  }
  state = {
    location: null
  };

  componentDidMount() {
    if (localStorage.getItem("filters") == "") {
      this.setState({ location: "Location" });
    } else {
      var item = JSON.parse(localStorage.getItem("filters"));
      this.setState({ location: item.location});
    }
  }

  handleChangeLocation(event) {
    this.setState({
      location: event.target.value
    });
  }

  reloadSearch() {
    var reloaded = false;
    axios
      .post(
        "https://housecat-skgcode-api.herokuapp.com/api/properties/search",
        {
          id: null,
          minprice: null,
          maxprice: null,
          sqm: null,
          location: this.state.location,
          bedrooms: null,
          bathrooms: null,
          property_type: null,
          floor: null,
          sale_type: null,
          furnitured: null,
          heating_type: null,
          minbuilt_year: null,
          maxbuilt_year: null,
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
          let filterboxInfo = {
            location: this.state.location
          };
          localStorage.setItem("filters", JSON.stringify(filterboxInfo));
        } else if (res.status == 204) {
          localStorage.setItem("searchdata", res.data);
          localStorage.setItem("filters", "");
          window.open("/results", "_self");
        }
      });
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
                   <input
                    type="radio"
                    className="custom-control-input "
                    id="defaultInline1"
                    name="inlineDefaultRadiosExample"
                  />
                  <label class="custom-control-label" for="defaultInline1">
                    Rent
                  </label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    class="custom-control-input"
                    id="defaultInline2"
                    name="inlineDefaultRadiosExample"
                  />
                  <label class="custom-control-label" for="defaultInline2">
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
                  value={this.state.minprice}
                />
              </div>
              <div className="md-form small p-2">
                <p className="text-center filterText">To:</p>
                <input
                  id="maxprice"
                  type="text"
                  onChange={this.handleChangeMaxPrice}
                  value={this.state.maxprice}
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
