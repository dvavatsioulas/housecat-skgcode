import React, { Component } from "react";
import axios from "axios";

class DetailView extends React.Component {

     state = { house: {} };
     componentDidMount(){
        var baseURL="https://housecat-skgcode-api.herokuapp.com/api/properties/id=";
        var idFromURL=this.props.match.params.id;
        axios.get(baseURL.concat(idFromURL)).then(res => {
           var house = res.data;
           var thisHouse = house[0];
           this.setState( {house: thisHouse} );
       });
     }
   
    render() {
       var locationMap= "https://maps.google.com/maps?q="+ this.state.house.location +"&t=&z=14&ie=UTF8&iwloc=&output=embed"
       return (
        <React.Fragment>
        <section class="property-single nav-arrow-b">
            <div class="container">
            <div class="row">
                <div class="col-sm-12">
                <div id="property-single-carousel" class="owl-carousel owl-arrow gallery-property">
                    <div class="carousel-item-b">
                    <img style={{width:"100%", height:"100%", marginBottom:"8%"}} src={this.state.house.img_url} alt=""></img>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-md-5 col-lg-4">
                    <div class="property-price d-flex justify-content-center foo">
                        <div class="card-header-c d-flex">
                        <div class="card-box-ico">
                            <span class="ion-money">€</span>
                        </div>
                        <div class="card-title-c align-self-center">
                            <h5 class="title-c">15000</h5>
                        </div>
                        </div>
                    </div>
                    <div class="property-summary">
                        <div class="row">
                        <div class="col-sm-12">
                            <div class="title-box-d section-t4">
                            <h3 class="title-d">Quick Summary</h3>
                            </div>
                        </div>
                        </div>
                        <div class="summary-list">
                        <ul class="list">
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
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-7 col-lg-7 section-md-t3">
                    <div class="row">
                        <div class="col-sm-12">
                        <div class="title-box-d">
                            <h3 class="title-d">Property Description</h3>
                        </div>
                        </div>
                    </div>
                    <div class="property-description">
                        <p class="description color-text-a">
                            {this.state.house.description}
                        </p>
                        {/* <p class="description color-text-a no-margin">
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget
                        malesuada. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
                        </p> */}
                    </div>
                    <div class="row section-t3">
                        <div class="col-sm-12">
                        <div class="title-box-d">
                            <h3 class="title-d">Amenities</h3>
                        </div>
                        </div>
                    </div>
                    <div class="amenities-list color-text-a">
                        <ul class="list-a no-margin">
                        <li>Balcony</li>
                        <li>Outdoor Kitchen</li>
                        <li>Cable Tv</li>
                        <li>Deck</li>
                        <li>Tennis Courts</li>
                        <li>Internet</li>
                        <li>Parking</li>
                        <li>Sun Room</li>
                        <li>Concrete Flooring</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-md-10 offset-md-1" style={{marginBottom:"6%"}}>
                    <ul class="nav nav-pills-a nav-pills mb-3 section-t3" id="pills-tab" role="tablist">
                        {/* <li class="nav-item">
                        <a class="nav-link" id="pills-video-tab" data-toggle="pill" href="#pills-video" role="tab"
                            aria-controls="pills-video" aria-selected="false">Video</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" id="pills-plans-tab" data-toggle="pill" href="#pills-plans" role="tab" aria-controls="pills-plans"
                            aria-selected="false">Floor Plans</a>
                        </li> */}
                        <li class="nav-item">
                        <a class="nav-link active" id="pills-map-tab" data-toggle="pill" href="#pills-map" role="tab" aria-controls="pills-map"
                            aria-selected="false">Location</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        {/* <div class="tab-pane fade " id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
                        <iframe src="https://player.vimeo.com/video/73221098" width="100%" height="460" frameborder="0"
                            webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                        </div>
                        <div class="tab-pane fade" id="pills-plans" role="tabpanel" aria-labelledby="pills-plans-tab">
                        <img src="img/plan2.jpg" alt="" class="img-fluid"></img>
                        </div> */}
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
                    <img src="img/agent-4.jpg" alt="" class="img-fluid"></img>
                    </div>
                    <div class="col-md-6 col-lg-4">
                    <div class="property-agent">
                        <h4 class="title-agent">Anabella Geller</h4>
                        <p class="color-text-a">
                        Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                        dui. Quisque velit nisi,
                        pretium ut lacinia in, elementum id enim.
                        </p>
                        <ul class="list-unstyled">
                        <li class="d-flex justify-content-between">
                            <strong>Phone:</strong>
                            <span class="color-text-a">(222) 4568932</span>
                        </li>
                        <li class="d-flex justify-content-between">
                            <strong>Mobile:</strong>
                            <span class="color-text-a">777 287 378 737</span>
                        </li>
                        <li class="d-flex justify-content-between">
                            <strong>Email:</strong>
                            <span class="color-text-a">annabella@example.com</span>
                        </li>
                        <li class="d-flex justify-content-between">
                            <strong>Skype:</strong>
                            <span class="color-text-a">Annabela.ge</span>
                        </li>
                        </ul>
                        <div class="socials-a">
                        <ul class="list-inline">
                            <li class="list-inline-item">
                            <a href="#">
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                            </li>
                            <li class="list-inline-item">
                            <a href="#">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                            </li>
                            <li class="list-inline-item">
                            <a href="#">
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                            </li>
                            <li class="list-inline-item">
                            <a href="#">
                                <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                            </a>
                            </li>
                            <li class="list-inline-item">
                            <a href="#">
                                <i class="fa fa-dribbble" aria-hidden="true"></i>
                            </a>
                            </li>
                        </ul>
                        </div>
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
        </React.Fragment>
       );
  }
}

export default DetailView;