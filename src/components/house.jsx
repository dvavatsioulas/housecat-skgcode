import React, { Component } from "react";

class House extends Component {
  state = {
    houses: []
  };
  
  componentDidMount(){
   var houses = JSON.parse(localStorage.getItem("searchdata")); 
   this.setState({ houses });
  }

  render() {
    return (
      <ul className="houses">
        {this.state.houses.map(house => (
          <li className="block-example" key={house.id}>
            <div>
              <img
                src={house.img_url}
                alt="house image"
                width="100%"
                height="100%"
              ></img>
            </div>
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
          </li>
        ))}
      </ul>
    );
  }
}

export default House;
