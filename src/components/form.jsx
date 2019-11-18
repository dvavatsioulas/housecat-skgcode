import React, { Component } from "react";


class AddHouse extends Component {
   
    render() { 
       return (
     <React.Fragment>
         <div class="flex-container">
        <div className="card formBox">
        <div class="md-form input-group mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text md-addon" id="material-addon1">Firstname</span>
            </div>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="material-addon1"/>
        <div class="input-group-prepend">
          <span class="input-group-text md-addon" id="material-addon1">Lastname</span>
        </div>
        <input type="text" class="form-control" placeholder="Username" aria-label="Lastname" aria-describedby="material-addon1"/>      </div>
      
      <div class="md-form input-group mb-4">
        <input type="text" class="form-control" placeholder="E-mail" aria-label="E-mail"
          aria-describedby="material-addon2"/>
        <div class="input-group-append">
          <span class="input-group-text md-addon" id="material-addon2">@gmail.com</span>
        </div>
      </div>
      
      <label class="mb-0 ml-2" for="material-url">Properties:</label>
      <div class="md-form input-group mt-0 mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text md-addon" id="material-addon3">Type: Sell or Rent(Button)</span>
        </div>
        <input type="text" class="form-control" id="material-url" aria-describedby="material-addon3"/>
        <div class="input-group-prepend">
          <span class="input-group-text md-addon" id="material-addon3">Sqr:</span>
        </div>
        <input type="text" class="form-control" id="material-url" aria-describedby="material-addon3"/>
        <div class="input-group-prepend">
          <span class="input-group-text md-addon" id="material-addon3">Floor:</span>
        </div>
        <input type="text" class="form-control" id="material-url" aria-describedby="material-addon3"/>
      </div>
      
      <div class="md-form input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text md-addon">Total:</span>
        </div>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
        <div class="input-group-append">
          <span class="input-group-text md-addon">€</span>
        </div>
        <div class="input-group-prepend">
          <span class="input-group-text md-addon">Sqr:</span>
        </div>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
        <div class="input-group-append">
          <span class="input-group-text md-addon"> m2</span>
        </div>
      </div>
      
      <div class="md-form input-group">
        <div class="input-group-prepend">
          <span class="input-group-text md-addon">Description:</span>
        </div>
        <textarea class="md-textarea form-control" aria-label="With textarea"></textarea>
      </div>
      </div>
      </div>
      </React.Fragment>
      );
    }
}
export default AddHouse;