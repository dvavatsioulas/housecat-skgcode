import React, { Component } from "react";
import axios from 'axios';

 
class AddHouse extends Component {

    constructor(props) {
      super(props);

      this.handleChangeEmail= this.handleChangeEmail.bind(this);
      this.handleChangePhone = this.handleChangePhone.bind(this);
      this.handleChangeLocation = this.handleChangeLocation.bind(this);
      this.handleSaleTypeChange = this.handleSaleTypeChange.bind(this);
      this.handlePropertyTypeChange = this.handlePropertyTypeChange.bind(this);
      this.handleChangePrice= this.handleChangePrice.bind(this);
      this.handleChangeSqm= this.handleChangeSqm.bind(this);
      this.handleChangeFloor= this.handleChangeFloor.bind(this);
      this.handleChangeBedrooms= this.handleChangeBedrooms.bind(this);
      this.handleChangeBathrooms= this.handleChangeBathrooms.bind(this);
      this.handleChangeBuiltYear= this.handleChangeBuiltYear.bind(this);
      this.handleHeatingChange = this.handleHeatingChange.bind(this);
      this.handleParkingChecked = this.handleParkingChecked.bind(this);
      this.handleChangeDescription= this.handleChangeDescription.bind(this);
      this.handleFurnituredChecked = this.handleFurnituredChecked.bind(this);
      this.handleChangePictures= this.handleChangePictures.bind(this);
      this.addProperty = this.addProperty.bind(this);
      this.runMyFunction = this.runMyFunction.bind(this);
    }
    state = {
        email:  null,
        phone:  null,
        address:  null,
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
    
    handleChangeEmail(event) {
      this.setState({
       email: event.target.value
      });
    }
    handleChangePhone(event) {
      this.setState({
        phone: event.target.value
      });
    }
    handleChangeLocation(event) {
      this.setState({
        location: event.target.value
      });
    }
    handleChangePrice(event) {
      this.setState({
       price: event.target.value
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
    handleChangeSqm(event) {
      this.setState({
       sqm: event.target.value
      });
    }
    handleChangeFloor(event) {
      this.setState({
       floor: event.target.value
      });
    }
    handleChangeBedrooms(event) {
      this.setState({
       bedrooms: event.target.value
      });
    }
    handleChangeBathrooms(event) {
      this.setState({
       bathrooms: event.target.value
      });
    }
    handleChangeBuiltYear(event) {
      this.setState({
       builtYear: event.target.value
      });
    }
    handleParkingChecked(event){
      if(event.target.checked){
        this.setState({parking: "yes"});
      }else{
        this.setState({parking: "no"});
      }
    };
    handleFurnituredChecked(event){
      if(event.target.checked){
        this.setState({furnitured: "yes"});
      }else{
        this.setState({furnitured: "no"});
      }
    };
    handleChangeDescription(event) {
      this.setState({
       description: event.target.value
      });
    }
    handleChangePictures(event) {
      this.setState({
       pictures: event.target.value
      });
    }

    // radioOptionsChecked(){
    //   if(document.getElementById("saleTypeRadio").required){return true}
    // }
    runMyFunction()
    { 
      if (this.state.email === null || this.state.phone === null || this.state.location === null
         || this.state.saleType === null || this.state.propertyType === null || this.state.price === null || this.state.floor === null ||
         this.state.sqm === null || this.state.bedrooms === null || this.state.bathrooms === null || this.state.builtYear === null ||
          this.state.heating === null      
         )
        {  alert("Συμπληρώστε όλα τα πεδία");  
        }
        else
        {
          // var form= document.getElementsByName("form")[0];
          // form.submit();
          console.log("Hiiiiiiiiiiiiii");
          this.addProperty()
        
        }
    }
    addProperty() {
      console.log(  this.state.price,
      this.state.sqm,
      this.state.location,
      this.state.bedrooms,
      this.state.bathrooms,
      this.state.propertyType,
      this.state.floor,
      this.state.description,
      this.state.saleType,
      this.state.phone,
      this.state.email,
      this.state.pictures,
      this.state.furnitured,
      this.state.heating,
      this.state.builtYear,
      this.state.parking );
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
    <form name="form" className="needs-validation" novalidate>
        <div class="text-center">
          <h3 class="dark-grey-text mb-5"><strong>Add your house</strong></h3>
        </div>
        <div className="row ">
        <div className="col md-form">
            <label for="validationServer015"> Email : </label><br/>
            <input
              type="text"
              className="form-control" 
              id="validationServer015" 
              placeholder="example@example.com" 
              onChange={this.handleChangeEmail}  
              required/>
        </div>
        <div className="col md-form">
            <label for="validationTooltip021"> Phone Number :</label><br/>
            <input 
            type="text" 
            id="validationTooltip021" 
            className="form-control" 
            placeholder="6954896581" 
            onChange={this.handleChangePhone} required/>
        </div>
    </div>
    <div className="row">
    <div className="col md-form">
            {/* <label for="validationTooltip022"> Location :</label><br/>
            <input 
              type="text" 
              id="validationTooltip022"
              className="form-control" 
              placeholder="City, Address, Zip" 
              onChange={this.handleChangeLocation}  
              required/>  */}
              <select 
            className="browser-default custom-select" 
            id="validationTooltip022"
            value={this.state.location} 
            onChange={this.handleChangeLocation}
            required >
              <option selected disabled>Location</option>
              <option value="Athens">Atens</option>
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
              name="radio-choice0"
              id="radio-choice-1"
              value="Rent"
              checked={this.state.saleType === "Rent"}
              onChange={this.handleSaleTypeChange}
               required/>
              Rent
           </label>
        </div>
          <div className="custom-control-inline">
            <label >
              <input
                type="radio"
                name="radio-choice0"
                id="radio-choice-2"
                value="Sale"
                checked={this.state.saleType === "Sale"}
                onChange={this.handleSaleTypeChange} 
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
                name="radio-choice1"
                id="radio-choice-3"
                value="Apartment"
                checked={this.state.propertyType === "Apartment"}
                onChange={this.handlePropertyTypeChange}/>
               Apartment
            </label>
          </div>
          <div className="custom-control-inline">         
              <label>
                <input
                  type="radio"
                  name="radio-choice1"
              id="radio-choice-4"
                  value="House"
                  checked={this.state.propertyType === "House"}
                  onChange={this.handlePropertyTypeChange}/>
                 House
                 </label>
          </div>

    </div>
    </div>
    <div className="form-row form-group form-check form-check-inline"> 
        <div class="col-md-4 mb-3 md-form formField">
            <label for="validationServer024"> Price : </label><br/>
            <input 
              type="text" 
              className="form-control" 
              id="validationServer024" 
              onChange={this.handleChangePrice} 
              required/>
        </div>
        <div className="col-md-4 mb-3 md-form formField">
            <label for="validationTooltip025"> Floor :</label><br/>
            <input 
              type="text" 
              id="validationTooltip025" 
              className="form-control" 
              onChange={this.handleChangeFloor} 
              required/>
        </div>
        <div className="col-md-4 mb-3 md-form formField">
            <label for="validationServer026"> Sqm : </label><br/>
            <input 
              type="text" 
              className="form-control" 
              id="validationServer026" 
              onChange={this.handleChangeSqm} 
              required/>
        </div>
    </div>
    <div className="form-row form-group form-check form-check-inline"> 
        <div className="col-md-4 mb-3 md-form formField">
            <label for="validationServer027"> Bedrooms : </label><br/>
            <input 
              type="text" 
              className="form-control" 
              id="validationServer027" 
              onChange={this.handleChangeBedrooms} 
              required/>
        </div>
        <div className="col-md-4 mb-3 md-form">
            <label for="validationTooltip028"> Bathrooms :</label><br/>
            <input 
              type="text" 
              id="validationTooltip028" 
              className="form-control" 
              onChange={this.handleChangeBathrooms}  
              required/>
        </div>
        <div className="col-md-4 mb-3 md-form">
            <label for="builtYear"> Built year :</label><br/>
            <input 
              type="text" 
              id="builtYear" 
              className="form-control" 
              onChange={this.handleChangeBuiltYear} 
              required/>
        </div>
    </div>
        <p className="text-left filterText">Extra properties :</p>
        <div className="form-row form-group form-check form-check-inline">
          {/* <div class="col-md-8 mb-3 md-form">

              <label for="validationTooltip021"> Heating type :</label><br/>
              <input
              type="text" 
              id="validationTooltip021"
              className="form-control"
              placeholder="Gas, diesel, other." 
              onChange={this.handleChangeHeating}  
              required/>  
          </div> */}
        <div className="input-group col-md-12 mb-3 md-form">
        <select 
            className="browser-default custom-select" 
            id="inputGroupSelect04" 
            value={this.state.heating} 
            onChange={this.handleHeatingChange} 
            required>
              <option selected disabled>Heating type</option>
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
            onChange={this.handleParkingChecked}/>
          <label className="custom-control-label" for="parking">Parking Spot</label>
        </div>
        <div className="custom-control custom-switch">
          <input 
            type="checkbox"
            className="custom-control-input" 
            id="furnitured" 
            onChange={this.handleFurnituredChecked}/>
          <label className="custom-control-label" for="furnitured">Furnitured</label>
        </div>
    <div className="form-row">
        <div className="col-md-12 mb-3 md-form">
            <label for="validationTooltip021"> Description :</label><br/>
            <textarea 
              id="form7" 
              class="md-textarea form-control" 
              rows="1"
              onChange={this.handleChangeDescription}></textarea>
            {/* <input 
            type="text" 
            id="validationTooltip021" 
            className="form-control" 
            placeholder="Basic information for the apartment/house." 
            onChange={this.handleChangeDescription}  required/>  */}
        </div>
    </div>
    <div className="form-row">
        <div className="col-md-12 mb-3 md-form">
            <label for="validationTooltip021"> Pictures :</label><br/>
            <input 
              type="text" 
              id="validationTooltip021" 
              className="form-control" 
              placeholder="URL for pictures." 
              onChange={this.handleChangePictures}/> 
        </div>
    </div>
    <button className="btn  btn-rounded btn-block"
     type="submit" 
     onClick={this.runMyFunction }
    id="addBtnForm"
     value="Submit form">
       Add
      </button>
    </form>
    
</div>

    );

  }

}

export default AddHouse;
