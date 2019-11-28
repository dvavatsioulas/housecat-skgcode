import React, { Component } from "react";
import axios from "axios";

class LastHouses extends Component {
  
  state = {
    houses: []
  };

  componentDidMount(){
    
      axios.get(`https://housecat-skgcode-api.herokuapp.com/api/properties/3properties`).then(res => {
        const houses = res.data;
        this.setState({ houses });
    });
    
  }

  render() {
    return (
      <React.Fragment>
          <div className="d-flex justify-content-center ">
            <h1 class="display-4 lastHouseText">Our last entries</h1>
          </div>
          <br/>
          <div className="d-flex flex-row justify-content-center lastHousesBox">
          {this.state.houses.map(house => (
            <div className="col-md-2" key={house.id}>
              <div class="card mb-2">
                <img
                  class="card-img-top"
                  src={house.img_url}
                  alt="Card image cap"
                  height="200px"
                />
                <div class="card-body">
                  <h4 class="card-title d-flex justify-content-center">
                  {house.property_type_title} at {house.location}
                  </h4>
                  <p id="about" class="card-text">
                  <ul className="house3Details"> 
                   <li><strong>Sqm:</strong> {house.sqm} m²</li>
                   <li><strong>Price:</strong> {house.price} €</li>
                   <li><strong>For:</strong> {house.sale_type_title}</li>
                 </ul>
                  </p>
                  {/* We have to add redirect to detail view page on this button */}
                  <a class="btn btn-info d-flex justify-content-center">More details</a>
                </div>
              </div>
            </div>
            ))}
          </div>
          
      </React.Fragment>
    );
  }
}

export default LastHouses;
