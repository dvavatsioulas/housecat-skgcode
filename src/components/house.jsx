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
        <div className="d-flex p-8 bd-highlight">
          <ul className="houses">
            {this.state.houses.map(house => (
              <li class="block-example house" key={house.id}>
                
                  <div class="card-group row ">
                    <div class="col-md-4" >
                      <Link to={`/houses/${house.id}`} >
                        <img
                          class="card-img img-fluid house-img"
                          src={house.img_url}
                          alt="Card image cap"
                        />
                      </Link>
                    </div>
                    <div class="col-md-7">
                      <div class="card-body houseDetails">
                        <p id="housetitle">{ house.property_type +" "+ house.sqm +"m² for " + house.sale_type}</p>
                        <p style={{fontSize:'24px',fontStyle:'initial',fontWeight:"initial"}}>
                          <img id="" src="/placeholder.png" style={{display: "inline", marginBottom:"2.5px"}}></img>{house.location} &emsp;
                          <img id="" src="/real-estate.png" style={{display: "inline", marginBottom:"4.5px"}}></img> {house.price}€</p>
                        <p id="houseDesc">{house.description}</p>
                        <ul className="row">
                          <li style={{marginRight:'30px',fontSize:'17px'}}>Bedrooms: {house.bedrooms}</li>
                          <li style={{fontSize:'17px'}}>Floor: {house.floor}</li>
                        </ul>
                        <Link to={`/houses/${house.id}`} class="btn d-flex justify-content-center float-right" style={{width:'30%', marginBottom:'2%', backgroundColor :"#008ae6", color: "white", bottom:0, marginLeft:"60%", position:"absolute"}}>More details</Link>
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
