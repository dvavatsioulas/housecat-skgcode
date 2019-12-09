import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class LastHouses extends Component {

  state = {
    houses: []
  };

  componentDidMount() {

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
        <br />
        <div class="container justify-content-center lastHousesBox">
          <div class="card-deck">
          {this.state.houses.map(house => (
              <div class="card mb-2 col-md-3.5" key={house.id}>
                  <Link to={`/houses/${house.id}`} >
                    <img id="lastHousesImg"class="card-img-top img-fluid" src={house.img_url} alt="Card image cap"></img>
                    </Link>
                  <div class="card-body">
                      <h4 class="card-title">{house.property_type} at {house.location}</h4>
                      <p id="about" class="card-text">
                        <ul className="house3Details">
                          <li><strong>Area:</strong> {house.sqm} m²</li>
                          <li><strong>Price:</strong> {house.price} €</li>
                          <li><strong>For:</strong> {house.sale_type}</li>
                        </ul>
                      </p>
                      <p class="card-text"><Link to={`/houses/${house.id}`} style={{backgroundColor :"#008ae6", color:"white"}} class="btn  d-flex justify-content-center" id="buttons1">More details</Link></p>
                  </div>
              </div>
              ))
            }
            </div> 
          </div>
      </React.Fragment >
    );
  }
}

export default LastHouses;
