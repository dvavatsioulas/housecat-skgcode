import React, { Component } from "react";
import axios from 'axios';
import Toast from 'light-toast';
 
class AddHouse extends Component {

    constructor(props) {
      super(props);
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
            if (res.data == "Your house has been added successfully into DB!") {
              Toast.success("Your house has been added successfully!", 3000, () => {
                window.open("/add", "_self");
              });
            }else{
              Toast.fail("Sorry, something went wrong. Try again later.", 3000, () => {
                window.open("/add", "_self");
              });            }
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
                          <option selected value="">Location</option>
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
                <p >For : </p>
                <div class="custom-control custom-radio custom-control-inline">
                  <input 
                    type="radio"
                    id="customRadioInline1" 
                    name="saleType" 
                    value="Rent" 
                    className="custom-control-input"
                    // checked={this.state.saleType === "Rent"}
                    onChange={this.myChangeHandler}
                    required
                  />
                  <label class="custom-control-label" for="customRadioInline1">Rent</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input 
                      type="radio"
                      id="customRadioInline2" 
                      name="saleType" 
                      value="Sale" 
                      className="custom-control-input"
                      // checked={this.state.saleType === "Sale"}
                      onChange={this.myChangeHandler}
                      required
                    />
                  <label class="custom-control-label" for="customRadioInline2">Sell</label>
                </div>
                  </div>
                  <div className="col-md-6">
                    <p >Type : </p>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input 
                        type="radio"
                        id="customRadioInline3" 
                        name="propertyType" 
                        value="Apartment" 
                        className="custom-control-input"
                        // checked={this.state.saleType === "Apartment"}
                        onChange={this.myChangeHandler}
                        required
                        />                      
                        <label class="custom-control-label" for="customRadioInline3">Apartment</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                      <input 
                          type="radio" 
                          id="customRadioInline4"
                          name="propertyType" 
                          value="House" 
                          className="custom-control-input"
                          // checked={this.state.saleType === "House"}
                          onChange={this.myChangeHandler}
                          required
                        />
                      <label class="custom-control-label" for="customRadioInline4">House</label>
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
                          <option selected value=""> Heating type</option>
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
                    <label> Description :</label><br/>
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
                        <label> Pictures :</label><br/>
                        <input 
                          type="text"
                          name="pictures" 
                          className="form-control" 
                          placeholder="URL for pictures." 
                          onChange={this.myChangeHandler}/> 
                    </div>
                </div>
                
                <input className="btn btn-rounded btn-block" id="addBtnForm" type="submit" value="Add" />
                <input className="btn btn-rounded btn-block justify-content-md-center" type="reset" value="Clear"></input>
          </form>
      </div>
    );
  }
}

export default AddHouse;
