import React, { Component } from "react";
import axios from "axios";

class FilterBox extends Component {
  constructor(props) {
    super(props);

    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeMinPrice = this.handleChangeMinPrice.bind(this);
    this.handleChangeMaxPrice = this.handleChangeMaxPrice.bind(this);
    this.handleSaleTypeChange = this.handleSaleTypeChange.bind(this);
    this.handleHeatingChange = this.handleHeatingChange.bind(this)
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
    bathrooms:null,
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
      this.setState({ location: item.location, 
                      minprice : item.minprice, 
                      maxprice: item.maxprice,
                      saleType: item.sale_type,
                      bedrooms: item.bedrooms,
                      bathrooms: item.bathrooms,
                      floor: item.floor,
                      propertyType : item.property_type,
                      heating: item.heating_type,
                      parking: item.parking,
                      furnitured: item.furnitured
                      });
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
  handleSaleTypeChange (changeEvent) {
    this.setState({
      saleType: changeEvent.target.value
    });
  };
  handlePropertyTypeChange (changeEvent) {
    this.setState({
      propertyType: changeEvent.target.value
    });
  };
  handleHeatingChange (changeEvent) {
    this.setState({
      heating: changeEvent.target.value
    });
  };
  handleBedroomChange (event) {
    this.setState({bedrooms: event.target.value});
  };
  handleBathroomChange (event) {
    this.setState({bathrooms: event.target.value});
  };
  handleFloorChange (event) {
    this.setState({floor: event.target.value});
  };
  handleParkingChecked(event){
   this.setState(prevState => ({ parking: !prevState.parking }));
  };
  handleFurnituredChecked(event){
    this.setState(prevState => ({ furnitured: !prevState.furnitured }));
  };

  reloadSearch() {
    var parkingSend;
    console.log(this.state.parking);
    if(this.state.parking === true){
      parkingSend = "yes";
    }else{
      parkingSend = "no";
    }
    var furnituredSend;
    console.log(this.state.furnitured);
    if(this.state.furnitured === true){
      furnituredSend = "yes";
    }else{
      furnituredSend = "no";
    }
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

  clearFilters(){
    axios
      .post(
        "https://housecat-skgcode-api.herokuapp.com/api/properties/search",
        {
          minprice: null,
          maxprice: null,
          minsqm: null,
          maxsqm: null,
          location:null,
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
          floor:null,
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
        <h3 className="card-header black white-text py-4 p-2">
          <strong>Filters</strong>
        </h3>
        <button className="btn" onClick={this.clearFilters}>Clear all filters</button>
        <div className="card-body px-small-5 pt-0 filterText">
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
                 <p className="filterText">I want to: </p>
                 <div className="custom-control-inline">
                   
                  <label>
                  <input
                    type="radio"
                    value="rent"
                    checked={this.state.saleType === "rent"}
                    onChange={this.handleSaleTypeChange}
                  />
                    Rent
                  </label>
                </div>
                <div className="custom-control-inline">
                  
                  <label >
                  <input
                    type="radio"
                    
                    value="sale"
                    
                    checked={this.state.saleType === "sale"}
                    onChange={this.handleSaleTypeChange}
                  />
                    Buy
                  </label>
                </div>
              </div>

            <hr />

            <div className="text-center">
                 <p className="filterText">I am looking for:  </p>
                 <div className="custom-control-inline">
                  <label>
                  <input
                    type="radio"
                    value="apartment"
                    checked={this.state.propertyType === "apartment"}
                    onChange={this.handlePropertyTypeChange}
                  />
                    Apartment
                  </label>
                </div>
                <div className="custom-control-inline">
                  
                  <label>
                  <input
                    type="radio"
                    value="house"
                    checked={this.state.propertyType === "house"}
                    onChange={this.handlePropertyTypeChange}
                  />
                    House
                  </label>
                </div>
              </div>

            <div className="form-group form-row text-center filterText">
              <div className="col-md-4 mb-3" >
                <label>Bedrooms</label>
                <select className="custom-select" value={this.state.bedrooms} 
                     onChange={this.handleBedroomChange} >
                  <option disabled>Choose</option>
                  <option selected value="1">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div class="col-md-4 mb-3">
                <label>Bathrooms</label>
                <select class="custom-select" value={this.state.bathrooms} 
                     onChange={this.handleBathroomChange}>
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
                <select class="custom-select" value={this.state.floor} 
                     onChange={this.handleFloorChange}>
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
            <div className="form-group form-row text-center filterText">
              <div className="d-flex flex-row"> 
                <label className="p-2">Heating</label>
                <select className="custom-select" value={this.state.heating} 
                     onChange={this.handleHeatingChange} >
                  <option disabled>Choose</option>
                  <option selected value="gas"> Gas </option>
                  <option value="diesel">Diesel</option>
                </select>
              </div>
            </div>


            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="parking" checked={this.state.parking} onChange={this.handleParkingChecked}/>
              <label className="custom-control-label" for="parking">Parking Spot</label>
            </div>
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="furnitured" checked={this.state.furnitured} onChange={this.handleFurnituredChecked}/>
              <label className="custom-control-label" for="furnitured">Furnitured</label>
            </div>
            

            <hr />

            <div className="d-flex flex-row">
              <div className="md-form small p-1">
                <p className="text-center filterText">From:</p>
                <input
                  id="minprice"
                  type="text"
                  onChange={this.handleChangeMinPrice}
                  placeholder={this.state.minprice}
                />
              </div>
              <div className="md-form small p-1">
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
