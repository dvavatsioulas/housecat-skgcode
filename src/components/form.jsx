import React, { Component } from "react";
import axios from 'axios';

class AddHouse extends Component {
  constructor(props) {
    super(props);

    this.handleChangeEmail= this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangePrice= this.handleChangePrice.bind(this);
    this.handleChangeSqm= this.handleChangeSqm.bind(this);
    this.handleChangeFloor= this.handleChangeFloor.bind(this);
    this.handleChangeBedrooms= this.handleChangeBedrooms.bind(this);
    this.handleChangeBathrooms= this.handleChangeBathrooms.bind(this);
    this.handleChangeBuiltYear= this.handleChangeBuiltYear.bind(this);
    this.handleChangeDescription= this.handleChangeDescription.bind(this);
    this.reloadSearch = this.reloadSearch.bind(this);
  }
  state = {
      email:  null,
      phone:  null,
      address:  null,
      price:  null,
      sqm:  null,
      floor:  null,
      bedrooms:  null,
      bathrooms:  null,
      builtYear:  null,
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
  handleChangeAddress(event) {
    this.setState({
      address: event.target.value
    });
  }
  handleChangePrice(event) {
    this.setState({
     Price: event.target.value
    });
  }
  handleChangeSqm(event) {
    this.setState({
     Sqm: event.target.value
    });
  }
  handleChangeFloor(event) {
    this.setState({
     Floor: event.target.value
    });
  }
  handleChangeBedrooms(event) {
    this.setState({
     Bedrooms: event.target.value
    });
  }
  handleChangeBathrooms(event) {
    this.setState({
     Bathrooms: event.target.value
    });
  }
  handleChangeBuiltYear(event) {
    this.setState({
     BuiltYear: event.target.value
    });
  }
  handleChangeDescription(event) {
    this.setState({
     Description: event.target.value
    });
  }
  handleChangePictures(event) {
    this.setState({
     Description: event.target.value
    });
  }
  

  reloadSearch() {
    //if
    axios.post('https://housecat-skgcode-api.herokuapp.com/api/properties/search',  {
           
            "price":this.state.price,
            "sqm": this.state.sqm,
            "location":this.state.location,
            "bedrooms":this.state.bedrooms,
            "bathrooms":this.state.bathrooms,
            "property_type":null,
            "floor":this.state.floor,
            "description": this.state.description,
            "sale_type":null,
            "phone":this.state.phone,
            "email": this.state.email,
            "img_url": this.state.pictures,
            "furnitured":null,
            "heating_type":null,
            "built_year":this.state.builtYear,
            "parking":null});          
        }
    render() { 
      
       return (
        <div className="addHouse">
        <form>
        <div className="form-group form-check form-check-inline"> 
           <div className="form-row">
              <div className="form-group col-md-8">
                  <label for="text"> Email : </label>
                  <input type="text" id="text" className="form-control" placeholder="example@example.com" onChange={this.handleChangeEmail}/>
              </div>
              {console.log(this.state.email)}

              <div className="form-group col-md-4">
                  <label for="text"> Phone Number : </label>
                  <input type="text" id="text" className="form-control" placeholder="6954896581" onChange={this.handleChangePhone}/>
              </div>
              {console.log(this.state.number)}
          </div>
        </div>
        <div className="col-md-12">
            <label for="location">Location : </label>
            <input type="address" id="address"  className="form-control" placeholder="Address, City" onChange={this.handleChangeAddress}/>
            <br></br>
        </div>
        {console.log(this.state.location)}
        <div className="form-group text-left">
            <label>For: </label><br/>
            <div className="form-group form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
              <label className="form-check-label" for="inlineRadio1">Rent</label>
            </div>
            <div className="form-group form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
              <label className="form-check-label" for="inlineRadio2">Buy</label>
            </div>
        </div>
        <div className="form-group text-left">
            <label>Type : </label><br/>
            <div className="form-group form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
              <label className="form-check-label" for="inlineRadio2">Apartment</label>
            </div>
            <div className="form-group form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
              <label className="form-check-label" for="inlineRadio2">House</label>
            </div>
        </div>
          <div className="form-group form-check form-check-inline"> 
            <div className="form-row">
                <div className="form-group col-md-4">
                  <label for="inputPrice">Price :</label>
                  <input type="text" className="form-control" id="inputPrice" onChange={this.handleChangePrice}/>
                </div>
                <div className="form-group col-md-4">
                  <label for="inputSqm">sqm :</label>
                  <input type="text" className="form-control" id="inputSqm" onChange={this.handleChangeSqm}/>
                </div>
                <div className="form-group col-md-4">
                  <label for="inputFloor">Floor :</label>
                  <input type="text" className="form-control" id="inputFloor" onChange={this.handleChangeFloor}/>
                </div>
            </div>
          </div>
          <div className="form-group form-check form-check-inline"> 
            <div className="form-row">
                <div className="form-group col-md-4">
                  <label for="inputBedrooms">Bedrooms :</label>
                  <input type="text" className="form-control" id="inputBedrooms" onChange={this.handleChangeBedrooms}/>
                </div>
                <div className="form-group col-md-4">
                  <label for="inputBathrooms">Bathrooms :</label>
                  <input type="text" className="form-control" id="inputBathrooms" onChange={this.handleChangeBadrooms}/>
                </div>
                <div className="form-group col-md-4">
                <label for="inputBuilt">Built year:</label>
                <input type="text" className="form-control" id="inputBuilt" onChange={this.handleChangeBuiltYear}/>
                </div>
            </div>
          </div>
          <div className="form-group inline">
          <label for="inputExtra">Extra properties :</label>
          <br></br>
            
           <div className="d-flex flex-row">
             <div className="inline">
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
             </div>
              <div className="d-flex flex-column checkboxes">
                <div className="custom-control custom-checkbox p-2">
                  <input
                    type="checkbox"
                    class="custom-control-input center"
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
               
          <div className="form-group col-md-10">
             <label for="inputDescription">Describe your house :</label>
             <input type="textarea" className="form-control" id="inputDescription" rows="3"onChange={this.handleChangeDescription}/>
          </div>
          <div className="form-group col-md-10">
             <label for="inputDescription">Link for pictures :</label>
             <input type="textarea" className="form-control" id="inputPictures" rows="3"onChange={this.handleChangePictures}/>
          </div>
          <button  type="submit" className="btn btn-outline-info"
            onClick={this.reloadSearch}> Add
        </button>  
          
        </div>
      </form>
       
     </div>
      );
    }
}
export default AddHouse;