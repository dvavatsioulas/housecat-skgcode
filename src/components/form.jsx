import React, { Component } from "react";
import axios from 'axios';

 
class AddHouse extends Component {

    constructor(props) {
      super(props);

      this.myChangeHandler = this.myChangeHandler.bind(this);
      this.mySwitchChangeHandler = this.mySwitchChangeHandler.bind(this);
      this.runMyFunction = this.runMyFunction.bind(this);
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

    
    runMyFunction()
    { 
      if (this.state.email === null || this.state.phone === null || this.state.location === null
         || this.state.saleType === null || this.state.propertyType === null || this.state.price === null || this.state.floor === null ||
         this.state.sqm === null || this.state.bedrooms === null || this.state.bathrooms === null || this.state.builtYear === null ||
          this.state.heating === null      
         )
        {  
          alert("Please fill all the necessary fields");
        }
        else
        {
          this.addProperty(); 
        }
    };

    addProperty() {
      axios.post("https://housecat-skgcode-api.herokuapp.com/api/properties/addproperty",  {
              "price":this.state.price,
              "sqm": this.state.sqm,
              "location":this.state.location,
              "bedrooms":this.state.bedrooms,
              "bathrooms":this.state.bathrooms,
              "property_type":this.state.propertyType,
              "floor":this.state.floor,
              "description": this.state.description,
              "sale_type":this.state.saleType,
              "phone":this.state.phone,
              "email": this.state.email,
              "img_url": this.state.pictures,
              "furnitured":this.state.furnitured,
              "heating_type":this.state.heating,
              "builtyear":this.state.builtYear,
              "parking":this.state.parking
        }).then(res => {
            alert(res.data);              
        });                  
      }

render() { 
    return (
      <div className="containerAdd">
          <form name="form" className="needs-validation" novalidate onSubmit={this.addProperty}> 
              <div class="text-center">
                <h3 class="dark-grey-text mb-5"><strong>Add your house</strong></h3>
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
                          <option value="Crete">Crete</option>
                          <option value="Halkidiki">Halkidiki</option>
                          <option value="Patra">Patra</option>
                          <option value="Kavala">Kavala</option>
                          <option value="Larisa">Larisa</option>
                          <option value="Thessaloniki">Thessaloniki</option>
                          <option value="Trikala">Trikala</option>
                    </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                    <p >For : </p>
                    <div className="custom-control-inline">                  
                      <label>
                        <input
                          type="radio"
                          name="saleType"
                          value="Rent"
                          checked={this.state.saleType === "Rent"}
                          onChange={this.myChangeHandler}
                          required/>
                          Rent
                      </label>
                    </div>
                      <div className="custom-control-inline">
                        <label >
                          <input
                            type="radio"
                            name="saleType"
                            value="Sale"
                            checked={this.state.saleType === "Sale"}
                            onChange={this.myChangeHandler} 
                            required/>
                            Sell     
                        </label>
                      </div>
                  </div>
                  <div className="col-md-6">
                    <p >Type : </p>
                    <div className="custom-control-inline">          
                        <label>
                          <input
                            type="radio"
                            name="propertyType"
                            value="Apartment"
                            checked={this.state.propertyType === "Apartment"}
                            onChange={this.myChangeHandler}
                            required/>
                          Apartment
                        </label>
                      </div>
                      <div className="custom-control-inline">         
                          <label>
                            <input
                              type="radio"
                              name="propertyType"
                              value="House"
                              checked={this.state.propertyType === "House"}
                              onChange={this.myChangeHandler}
                              required/>
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
                {/* <button className="btn btn-rounded btn-block"  
                    onClick={this.runMyFunction }
                   >
                    Add
                </button> */}
                <input className="btn btn-rounded btn-block" type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

export default AddHouse;
