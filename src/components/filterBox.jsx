import React, { Component } from "react";
import axios from "axios";
// import Slider from "@material-ui/core/Slider";
// import { withStyles, makeStyles } from "@material-ui/core/styles";

// const MySlider = withStyles({
//   root: {
//     color: "#3a8589",
//     height: 3,
//     padding: "13px 0"
//   },
//   thumb: {
//     height: 27,
//     width: 27,
//     backgroundColor: "#fff",
//     border: "1px solid currentColor",
//     marginTop: -12,
//     marginLeft: -13,
//     boxShadow: "#ebebeb 0px 2px 2px",
//     "&:focus,&:hover,&$active": {
//       boxShadow: "#ccc 0px 2px 3px 1px"
//     },
//     "& .bar": {
//       height: 9,
//       width: 1,
//       backgroundColor: "currentColor",
//       marginLeft: 1,
//       marginRight: 1
//     }
//   },
//   active: {},
//   valueLabel: {
//     left: "calc(-50% + 4px)"
//   },
//   track: {
//     height: 3
//   },
//   rail: {
//     color: "#d8d8d8",
//     opacity: 1,
//     height: 3
//   }
// })(Slider);

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
    var item = JSON.parse(localStorage.getItem("filters"));
    this.setState({ location: item.location });
  }

  handleChangeLocation(event) {
    this.setState({
      location: event.target.value
    });
  }

  reloadSearch() {
    axios
      .post("http://localhost:8000/api/properties/search", {
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
      })
      .then(res => {
        let filterboxInfo = {
          location: this.state.location,
          minprice: this.state.minprice,
          maxprice: this.state.maxprice
        };
        localStorage.setItem("filters", JSON.stringify(filterboxInfo));

        let filteringResults = res.data;
        localStorage.setItem("searchdata", JSON.stringify(filteringResults));
      });
  }

  render() {
    return (
      <div className="card filterBox">
        <h3 className="card-header black white-text py-4">
          <strong>Filters</strong>
        </h3>

        <div className="card-body px-lg-5 pt-0">
          <form>
            <div className="md-form mt-3 ">
              <input
                type="text"
                id="locationFilter"
                className="form-control filterText"
                placeholder="Location"
                onChange={this.handleChangeLocation}
                value={this.state.location}
              />
            </div>
            <div>
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
            </div>

            <hr />
            <div className="d-flex flex-row">
              <div className="p-2 dropdownBox">
                <span>Bedrooms</span>
                <select class="mdb-select">
                  <option value="" disabled>
                    Choose
                  </option>
                  <option value="1" selected>
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="p-2 dropdownBox">
                <span>Floor</span>
                <select class="mdb-select">
                  <option value="" disabled>
                    Choose
                  </option>
                  <option value="1" selected>
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>

            <hr />
            <p className="text-center filterText">Anything else?</p>
            <div className="d-flex flex-row">
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

            {/*<label className="filterText" for="priceRange">
              Price:{" "}
            </label>
            <MySlider
              getAriaLabel={index =>
                index === 0 ? "Minimum price" : "Maximum price"
              }
              defaultValue={[20, 40]}
            /> */}

            <button
              className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect filterText"
              type="submit"
              onClick={this.reloadSearch}
            >
              Reload
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default FilterBox;
