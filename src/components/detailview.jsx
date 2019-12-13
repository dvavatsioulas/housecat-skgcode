import React, { Component } from "react";
import axios from "axios";
import Chatbot from "./chatbot";

class DetailView extends React.Component {

     state = { house: {}, agent: {} };

     componentDidMount(){
         window.scrollTo(0,0);
        var baseURL="https://housecat-skgcode-api.herokuapp.com/api/properties/id=";
        var idFromURL=this.props.match.params.id;
        axios.get(baseURL.concat(idFromURL)).then(res => {
           var house = res.data;
           var thisHouse = house[0];
           this.setState( {house: thisHouse} );
        });
        var agentId = parseInt(1 + (Math.random() * 6));
        var contactURL=`https://housecat-skgcode-api.herokuapp.com/api/agents/id=${agentId}`;
        axios.get(contactURL).then(res => {
           var agent = res.data;
           var thisAgent = agent[0];
           this.setState( {agent: thisAgent} );
       });
     }

   
    render() {
       var locationMap= "https://maps.google.com/maps?q="+ this.state.house.location +"&t=&z=14&ie=UTF8&iwloc=&output=embed"
       if (this.state.house.description===null){
           this.state.house.description=" `There is no description available for this property` "
       }
       return (
        <React.Fragment>
        <section class="property-single nav-arrow-b">
            <div class="container">
            <div class="row">
                <div class="col-sm-12">
                <div id="property-single-carousel" class="owl-carousel owl-arrow gallery-property">
                    <div class="carousel-item-b">
                    <img id="DVimage" src={this.state.house.img_url} alt=""></img>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-md-7 col-lg-7 section-md-t3">
                        <div class="dealer-widget">
                            <div class="card dealer-content">
                                 <div class="inner-wrapper">
                                    <div>
                                        <h1 class="property-title">{this.state.house.property_type} at {this.state.house.location}</h1>                                        
                                    </div>
                                   <div class="row justify-content-md-center">
                                        <div class="col col-lg-3 widgets">
                                            <img id="DVicons" src="/money.png" style={{display: "inline"}}></img>
                                            <span class="property-info-entry">    
                                                <span class="property-info-label"> Price </span><br/>
                                                <span class="property-info-value">€{this.state.house.price}</span>
                                            </span>
                                        </div>
                                        <div class="col col-lg-3 widgets">
                                            <img id="DVicons" src="/sale.png" style={{display: "inline"}}></img>
                                            <span class="property-info-entry">
                                                <span class="property-info-label"> Status</span><br/>
                                                <span class="property-info-value">For {this.state.house.sale_type}</span>
                                            </span>
                                        </div>
                                        <div class="col col-lg-3 widgets">
                                            <img id="DVicons" src="/plans.png" style={{display: "inline"}}></img>
                                            <span class="property-info-entry">
                                                <span class="property-info-label"> Area </span><br/>
                                                <span class="property-info-value">{this.state.house.sqm}m<sup>2</sup></span>
                                            </span>
                                        </div>
                                        </div>
                                </div>  
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                            <div class="title-box-d">
                                <h3 class="title-d DVtitles">Property Description</h3>
                            </div>
                            </div>
                        </div>
                        <div class="property-description">
                            <p class="description color-text-a" style={{fontSize:"large"}}>
                                {this.state.house.description}
                            </p>
                        </div>
                    </div>
                    <div class="col-md-5 col-lg-4">
                        
                    <div class="property-summary">
                        <div class="row">
                        <div class="col-sm-12">
                            <div class="title-box-d section-t4">
                            <h3 class="title-d DVtitles">Quick Summary</h3>
                            </div>
                        </div>
                        </div>
                        <div class="summary-list" style={{marginRight:"2%"}}>
                        <ul class="list" style={{fontSize:"17px"}}>
                            <li class="d-flex justify-content-between">
                            <strong>Property ID:</strong>
                            <span>{this.state.house.id}</span>
                            </li>
                            <li class="d-flex justify-content-between">
                            <strong>Location:</strong>
                            <span>{this.state.house.location}</span>
                            </li>
                            <li class="d-flex justify-content-between">
                            <strong>Property Type:</strong>
                            <span>{this.state.house.property_type}</span>
                            </li>
                            <li class="d-flex justify-content-between">
                            <strong>Status:</strong>
                            <span>{this.state.house.sale_type}</span>
                            </li>
                            <li class="d-flex justify-content-between">
                            <strong>Area:</strong>
                            <span>{this.state.house.sqm}m
                                <sup>2</sup>
                            </span>
                            </li>
                            <li class="d-flex justify-content-between">
                            <strong>Price per m<sup>2</sup>:</strong>
                            <span>€{parseFloat(Math.round((this.state.house.price/this.state.house.sqm) * 100) / 100).toFixed(2)}
                            </span>
                            </li>
                            <li class="d-flex justify-content-between">
                            <strong>Bedrooms:</strong>
                            <span>{this.state.house.bedrooms}</span>
                            </li>
                            <li class="d-flex justify-content-between">
                            <strong>Bathrooms:</strong>
                            <span>{this.state.house.bathrooms}</span>
                            </li>
                            <li class="d-flex justify-content-between">
                            <strong>Garage:</strong>
                            <span>{this.state.house.parking}</span>
                            </li>
                            <li class="d-flex justify-content-between">
                            <strong>Heating:</strong>
                            <span>{this.state.house.heating_type}</span>
                            </li>
                            <li class="d-flex justify-content-between">
                            <strong>Furnitured:</strong>
                            <span>{this.state.house.furnitured}</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-md-10 offset-md-1" style={{marginBottom:"6%"}}>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
                        <iframe src={locationMap}
                            width="100%" height="460" frameborder="0" style={{border:"0"}} allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-12">
                <div class="row section-t3">
                    <div class="col-sm-12">
                    <div class="title-box-d">
                        <h3 class="title-d">Contact Agent</h3>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                    <img src={this.state.agent.img} alt="" class="img-fluid"></img>
                    </div>
                    <div class="col-md-6 col-lg-4">
                    <div class="property-agent">
                        <h4 class="title-agent">{this.state.agent.name}</h4>
                        <p class="color-text-a">{this.state.agent.description}</p>
                        <ul class="list-unstyled">
                        <li class="d-flex justify-content-between">
                            <strong>Phone:</strong>
                            <span class="color-text-a">{this.state.agent.tel}</span>
                        </li>
                        <li class="d-flex justify-content-between">
                            <strong>Email:</strong>
                            <span class="color-text-a">{this.state.agent.email}</span>
                        </li>
                        <li class="d-flex justify-content-between">
                            <strong>Social:</strong>
                            <a href={this.state.agent.social} target="_blank" title="Facebook"><i class="fab fa-facebook-square"></i></a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div class="col-md-12 col-lg-4">
                    <div class="property-contact">
                        <form class="form-a">
                        <div class="row">
                            <div class="col-md-12 mb-1">
                            <div class="form-group">
                                <input type="text" class="form-control form-control-lg form-control-a" id="inputName"
                                placeholder="Name *" required></input>
                            </div>
                            </div>
                            <div class="col-md-12 mb-1">
                            <div class="form-group">
                                <input type="email" class="form-control form-control-lg form-control-a" id="inputEmail1"
                                placeholder="Email *" required></input>
                            </div>
                            </div>
                            <div class="col-md-12 mb-1">
                            <div class="form-group">
                                <textarea id="textMessage" class="form-control" placeholder="Comment *" name="message" cols="45"
                                rows="8" required></textarea>
                            </div>
                            </div>
                            <div class="col-md-12">
                            <button type="submit" class="btn btn-a">Send Message</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <Chatbot/>
        </React.Fragment>
       );
  }
}

export default DetailView;