import React, { Component } from "react";

class House extends Component {
  state = {
    houses: []
  };

  componentDidMount() {
    var houses = JSON.parse(localStorage.getItem("searchdata"));
    console.log(houses);
    this.setState({ houses });
  }

  render() {
    // return (
    //   <ul className="houses">
    //     {this.state.houses.map(house => (
    //       <li className="block-example" key={house.id}>
    //         <div>
    //           <img
    //             src={house.img_url}
    //             alt="house image"
    //             width="100%"
    //             height="100%"
    //           ></img>
    //         </div>
    //         <tr>
    //           <td>{house.sqm} m²</td>
    //           <td>{house.price} €</td>
    //           <td>{house.location}</td>
    //         </tr>
    //         <tr>
    //           <td>bedrooms: {house.bedrooms}</td>
    //           <td>bathrooms: {house.bathrooms}</td>
    //           <td>floor: {house.floor}</td>
    //         </tr>
    //         <tr>
    //           <td>heating: {house.heating_type}</td>
    //           <td>built: {house.built_year}</td>
    //         </tr>
    //         <tr>
    //           <td>phone: {house.phone}</td>
    //           <td>email: {house.email}</td>
    //         </tr>
    //       </li>
    //     ))}
    //   </ul>
    // );
    return (
      <ul class="container-fluid house">
        {this.state.houses.map(house => (
          <li class="block-example" key={house.id}>
            <div>
              <div class="card-group row">
                <div class="col-md-4">
                  <img
                    src={house.img_url}
                    class="card-img img-fluid img-thumbnail"
                    alt="house image"
                  ></img>
                </div>
                <div class="col-md-7">
                  <div class="card-body">
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
    );
  }
}

export default House;
