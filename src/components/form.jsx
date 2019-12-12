import React, { Component } from "react";
import axios from 'axios';
import color from "@material-ui/core/colors/amber";

 
class AddHouse extends Component {

    constructor(props) {
      super(props);
      this.handleSaleTypeChange = this.handleSaleTypeChange.bind(this);
      this.handlePropertyTypeChange = this.handlePropertyTypeChange.bind(this);
      this.myChangeHandler = this.myChangeHandler.bind(this);
      this.mySwitchChangeHandler = this.mySwitchChangeHandler.bind(this);
      this.addProperty = this.addProperty.bind(this);
    }
    state = {
        email:  null,
        phone:  null,
        location:  null,
        saleType: null,
        propertyType: null,
        price:  null,
        sqm:  null,
        floor:  null,
        bedrooms:  null,
        bathrooms:  null,
        builtYear:  null,
        heating: null,
        parking: "No",
        furnitured: "No",
        description:  null,
        pictures: null
    };
    //Do the work for all the handlers!!
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }

    mySwitchChangeHandler = (event) => {
      let nam = event.target.name;
      if (nam === "parking") {
        if(event.target.checked){
          this.setState({parking: "yes"});
        }else{
          this.setState({parking: "no"});
        }
      }
      if(nam === "furnitured"){
        if(event.target.checked){
          this.setState({furnitured: "yes"});
        }else{
          this.setState({furnitured: "no"});
        }
      }
    }

    handlePropertyTypeChange(changeEvent) {
      this.setState({
        propertyType: changeEvent.target.value
      });
    }
    handleSaleTypeChange(changeEvent) {
      this.setState({
        saleType: changeEvent.target.value
      });
    }

    addProperty() {
      
        axios
        .post("https://housecat-skgcode-api.herokuapp.com/api/properties/addproperty",  {
            price:this.state.price,
            sqm: this.state.sqm,
            location:this.state.location,
            bedrooms:this.state.bedrooms,
            bathrooms:this.state.bathrooms,
            property_type:this.state.propertyType,
            floor:this.state.floor,
            description: this.state.description,
            sale_type:this.state.saleType,
            phone:this.state.phone,
            email: this.state.email,
            img_url: this.state.pictures,
            furnitured:this.state.furnitured,
            heating_type:this.state.heating,
            builtyear:this.state.builtYear,
            parking:this.state.parking
        })
      .then(res => {
            alert(res.data);
            window.open("/add", "_self");
        });
        return true;                  
      }

render() { 
    return (
      <div className="containerAdd">
          <form name="form" onSubmit={(e) => {this.addProperty(); e.preventDefault(); }}> 
              <div class="text-center">
                <h1 class="dark-grey-text mb-5"><strong>Add your house</strong></h1>
              </div>
              <div className="form-row w-100 form-group form-check-inline"> 
                <div className="col md-form">
                    <label> Email : </label><br/>
                    <input
                      type="email"
                      name="email"
                      className="form-control" 
                      placeholder="example@example.com" 
                      onChange={this.myChangeHandler}  
                      required/>
                </div>
                <div className="col md-form">
                    <label for="validationTooltip021"> Phone Number :</label><br/>
                    <input 
                    type="text"
                    name="phone" 
                    className="form-control" 
                    onChange={this.myChangeHandler} required/>
                </div>
              </div>
              <div className="row">
                <div className="col md-form">
                          <select 
                        className="browser-default custom-select" 
                        name="location"
                        value={this.state.location} 
                        onChange={this.myChangeHandler}
                        required >
                          <option selected disabled value="">Location</option>
                          <option value="Athens">Athens</option>
                          <option value="Halkidiki">Halkidiki</option>
                          <option value="Kavala">Kavala</option>
                          <option value="Larisa">Larisa</option>
                          <option value="Patra">Patra</option>
                          <option value="Thessaloniki">Thessaloniki</option>
                    </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                <p className="filterTextDescription"> For: </p>
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
                <div className="col-md-6">
                  <p className="filterTextDescription"> Type: </p>
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
                    for="apartment">
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
            </div>


                <div className="form-row w-75 form-group form-check form-check-inline"> 
                    <div class="col-md-4 mb-3 md-form formField">
                        <label> Price : </label><br/>
                        <input 
                          type="text" 
                          name="price"
                          className="form-control" 
                          onChange={this.myChangeHandler} 
                          required/>
                    </div>
                    <div className="col-md-4 mb-3 md-form formField">
                        <label for="validationTooltip025"> Floor :</label><br/>
                        <input 
                          type="text" 
                          name="floor"
                          className="form-control" 
                          onChange={this.myChangeHandler} 
                          required/>
                    </div>
                    <div className="col-md-4 mb-3 md-form formField">
                        <label for="validationServer026"> Sqm : </label><br/>
                        <input 
                          type="text" 
                          name="sqm"
                          className="form-control" 
                          onChange={this.myChangeHandler} 
                          required/>
                    </div>
                </div>
                <div className="form-row w-75 form-group form-check form-check-inline"> 
                    <div className="col-md-4 mb-3 md-form formField">
                        <label> Bedrooms : </label><br/>
                        <input 
                          type="text"
                          name="bedrooms" 
                          className="form-control" 
                          onChange={this.myChangeHandler} 
                          required/>
                    </div>
                    <div className="col-md-4 mb-3 md-form">
                        <label> Bathrooms :</label><br/>
                        <input 
                          type="text" 
                          name="bathrooms"
                          className="form-control" 
                          onChange={this.myChangeHandler}  
                          required/>
                    </div>
                    <div className="col-md-4 mb-3 md-form">
                        <label> Built year :</label><br/>
                        <input 
                          type="text" 
                          name="builtYear" 
                          className="form-control" 
                          onChange={this.myChangeHandler} 
                          required/>
                    </div>
                </div>
                <p className="text-left filterText">Extra properties :</p>
                <div className="form-row form-group form-check form-check-inline">
                  <div className="input-group col-md-12 mb-3 md-form">
                    <select 
                        className="browser-default custom-select"
                        name="heating" 
                        value={this.state.heating} 
                        onChange={this.myChangeHandler} 
                        required>
                          <option selected disabled value=""> Heating type</option>
                          <option value="Gas">Gas</option>
                          <option value="Diesel">Diesel</option>
                          <option value="A/C">A/C</option>
                          <option value="None">None</option>
                    </select>
                  </div>
                </div>
                <div className="custom-control custom-switch">
                    <input 
                      type="checkbox"
                      className="custom-control-input" 
                      id="parking"
                      name="parking"
                      onChange={this.mySwitchChangeHandler}/>
                    <label className="custom-control-label" for="parking">Parking Spot</label>
                </div>
                <div className="custom-control custom-switch">
                   <input 
                    type="checkbox"
                    className="custom-control-input"
                    id="furnitured"
                    name="furnitured"  
                    onChange={this.mySwitchChangeHandler}/>
                  <label className="custom-control-label" for="furnitured">Furnitured</label>
                </div>
                <div className="form-row">
                    <div className="col-md-12 mb-3 md-form">
                        <p className="addHouseLabel"> Description :</p><br/>
                        <textarea 
                          name="description" 
                          class="md-textarea form-control" 
                          rows="1"
                          onChange={this.myChangeHandler}>
                        </textarea>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-12 mb-3 md-form">
                        <p className="addHouseLabel"> Pictures :</p><br/>
                        <input 
                          type="text"
                          name="pictures" 
                          className="form-control" 
                          placeholder="URL for pictures." 
                          onChange={this.myChangeHandler}/> 
                    </div>
                </div>
                {/* <button className="btn btn-rounded btn-block"  
                    onClick={this.runMyFunction }
                   >
                    Add
                </button> */}
                <button 
                className="btn btn-rounded btn-block " 
                type="submit" 
                id="addBtnForm"
                value="Add">Add 
                </button>
          </form>
      </div>
    );
  }
}

export default AddHouse;
