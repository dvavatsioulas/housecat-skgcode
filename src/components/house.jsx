import React, { Component } from "react";
import  {Link} from "react-router-dom";

class House extends Component {
  state = {
    houses: []
  };

  componentDidMount() {
    if (localStorage.getItem("searchdata") == "") {
    } else {
      var houses = JSON.parse(localStorage.getItem("searchdata"));
      this.setState({ houses });
    }
  }
  

  render() {
    if (localStorage.getItem("searchdata") == "") {
      return (
        <div className="d-flex p-8 bd-highlight">
          <p className="noHouseText" role="alert">
            There are not houses with that properties!
          </p>
        </div>
      );
    } else {
      return (
        <div className="d-flex p-8 bd-highlight housesDiv">
          <ul class="houses">
            {this.state.houses.map(house => (
              <li class="block-example house" key={house.id}>
                <div>
                  <div class="card-group row ">
                    <div class="col-md-4">
                      <img
                        src={house.img_url}
                        class="card-img img-fluid house-img"
                        alt="house image"
                      ></img>
                    </div>
                    <div class="col-md-8 ">
                      <div class="card-body houseDetails">
                        <p id="housetitle">{ house.property_type +" "+ house.sqm +"m² for " + house.sale_type}</p>
                        <p class="fas fa-map-marker-alt" style={{fontSize:'24px',fontStyle:'initial'}}> {house.location} {house.price}€</p>
                        <p style={{fontSize:'17px'}}>{house.description}</p>
                        <ul className="row">
                          <li style={{marginRight:'30px',fontSize:'17px'}}>Bedrooms: {house.bedrooms}</li>
                          <li style={{fontSize:'17px'}}>Floor: {house.floor}</li>
                        </ul>
                        <Link to={`/houses/${house.id}`} class="btn btn-info d-flex justify-content-center float-right" style={{width:'30%', marginBottom:'2%'}}>More details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default House;
