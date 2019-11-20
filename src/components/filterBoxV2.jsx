import React, { Component } from "react";
import axios from "axios";


class FilterBoxV2 extends Component {
  constructor(props) {
    super(props);

    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeMinPrice = this.handleChangeMinPrice.bind(this);
    this.handleChangeMaxPrice = this.handleChangeMaxPrice.bind(this);
    this.reloadSearch = this.reloadSearch.bind(this);
  }
  state = {
    location: null,
    minprice: null,
    maxprice: null
  };

  componentDidMount() {
    var item = JSON.parse(localStorage.getItem("filters"));
    this.setState({
      location: item.location,
      // minprice: item.minprice,
      // maxprice: item.maxprice
    });
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

  reloadSearch() {
    axios.post('https://housecat-skgcode-api.herokuapp.com/api/properties/search',  {
            "id":null,
            "minprice":null,
            "maxprice":null,
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
          if (res.status === 200) {
            let filteringResults = res.data;
            localStorage.setItem("searchdata", JSON.stringify(filteringResults));
          } else if (res.status === 204) {
            localStorage.setItem("searchdata", res.data);
          } else {
            // Other problem!
          }
        });
        let filterboxInfo = {
          location: this.state.location,
          minprice: this.state.minprice,
          maxprice: this.state.maxprice
        }
        localStorage.setItem("filters",JSON.stringify(filterboxInfo));
         // LocalStorage takes a few milliseconds to execute SO this delay is necessary otherwise redirect will happen before the process is complete
         setTimeout( () => {
          this.setState({ position: 1 });
         }, 2000);
         window.open("/results", "_self"); //to open new page
  }

  render() {
    return (
      <div className="d-flex p-2 filterBox bd-highlight">
        <form>
          <p className="black white-text">Filters</p>
          <div className="form-group text-center">
            <div className="md-form mt-3">
              <input type="text" id="locationFilter" className="form-control filterText" placeholder={this.state.location} onChange={this.handleChangeLocation}/>
            </div>
          </div>
          <div className="form-group text-center">
            <label>What is the purpose?</label><br/>
            <div class="form-group form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
              <label class="form-check-label" for="inlineRadio1">Rent</label>
            </div>
            <div class="form-group form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
              <label class="form-check-label" for="inlineRadio2">Buy</label>
            </div>
          </div>
            
          <hr />

          <div class="form-group form-row text-center">
            <div class="col-md-4 mb-3">
              <label>Bedrooms</label>
              <select class="custom-select">
                <option disabled>Choose</option>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div class="col-md-4 mb-3">
              <label>Floor</label>
              <select class="custom-select">
                <option disabled>Choose</option>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>

          <hr />

          <div className="form-group text-center">
            <label>Anything else?</label><br/>
            <div class="form-check form-check-inline">
              <input type="checkbox" class="form-check-input" id="furnished" value="option2"/>
              <label class="cform-check-label" for="furnished">Furnished</label>
            </div>
            <div class="form-check form-check-inline">
              <input type="checkbox" class="form-check-input" id="parkingSpot" value="option2"/>
              <label class="form-check-label" for="parkingSpot">Parking spot</label>
            </div>
            <br/>
            <div class="form-check form-check-inline">
              <input type="checkbox" class="form-check-input" id="heating" value="option2"/>
              <label class="form-check-label" for="heating">Heating</label>
            </div>
            <div class="form-check form-check-inline">
              <input type="checkbox" class="form-check-input" id="garden" value="option2"/>
              <label class="form-check-label" for="garden">Garden</label>
            </div>
          </div>

          <hr />

          <div class="form-group form-row text-center">
            <div className="md-form small p-2">
              <p className="text-center filterText">From:</p>
              <input id="minprice" type="text" onChange={this.handleChangeMinPrice} value={this.state.minprice}/>
            </div>
            <div className="md-form small p-2">
              <p className="text-center filterText">To:</p>
              <input id="maxprice" type="text" onChange={this.handleChangeMaxPrice} value={this.state.maxprice}/>
            </div>
          </div>

          <button
            className="btn btn-outline-info btn-rounded btn-block "
            onClick={this.reloadSearch}
          >
            Reload
          </button>
        </form>
      </div>
    );
  }
}

export default FilterBoxV2;
