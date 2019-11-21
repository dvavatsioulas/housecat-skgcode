import React, { Component } from "react";

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
        <div className="d-flex p-8 bd-highlight">
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
                    <div class="col-md-7 ">
                      <div class="card-body houseDetails">
                        <tr>
                          <td>{house.sqm} m²</td>
                          <td>{house.price} €</td>
                          <td>{house.location}</td>
                        </tr>
                        <tr>
                          <td>bedrooms: {house.bedrooms}</td>
                          <td>bathrooms: {house.bathrooms}</td>
                          <td>floor: {house.floor}</td>
                        </tr>
                        <tr>
                          <td>heating: {house.heating_type}</td>
                          <td>built: {house.built_year}</td>
                        </tr>
                        <tr>
                          <td>phone: {house.phone}</td>
                          <td>email: {house.email}</td>
                        </tr>
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
