import React, { Component } from "react";
import Chatbot from "./chatbot";


class FAQ extends Component{

    render() { 
        return (
          <React.Fragment> 
            {/* <div className="FAQ ">
    <div class="panel-group" id="faqAccordion">
        <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle question-toggle collapsed" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question0">
                 <h4 class="panel-title">
                    <a href="#" class="ing"> 1. How to add a house or an apartment for selling or renting?  </a>
                 </h4>
            </div>
            <div id="question0" class="panel-collapse collapse" >
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>
                    <p>First click on <b>Add House</b>, which is located at the top-right side of the page. 
                      Then fill all the fields and when you are done, press the <b>Add</b> button located at the bottom of the page. </p>
                </div>
            </div>
        </div>
        <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question1">
                 <h4 class="panel-title">
                    <a href="#" class="ing">2. How do I search for rentals?</a>
              </h4>

            </div>
            <div id="question1" class="panel-collapse collapse" >
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>

                    <p>You can click on <b>Rent</b> button located at the navbar and then add more filters from Filter Box at the left.</p>
                </div>
            </div>
        </div>
        <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question2">
                 <h4 class="panel-title">
                    <a href="#" class="ing">3. How to use the chatbot? </a>
              </h4>

            </div>
            <div id="question2" class="panel-collapse collapse" >
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>

                    <p>Just click the <b>Need help?</b> button and write what you are looking for.</p>
                </div>
            </div>
        </div>
        <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question3">
                 <h4 class="panel-title">
                    <a href="#" class="ing">4. Are all the houses or apartments available right now?</a>
                </h4>
            </div>
            <div id="question3" class="panel-collapse collapse">
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>
                    <p>All the properties that are shown in our site are available and are being verified everyday. You can also check by contacting us.</p>
                </div>
            </div>
        </div>
        <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question4">
                 <h4 class="panel-title">
                    <a href="#" class="ing">5. Why the addresses of the rentals are not available?</a>
                </h4>
            </div>
            <div id="question4" class="panel-collapse collapse">
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>
                    <p>All the addresses are purposely covered for safety reasons. You can know the specific address of each property after contacting our agency.</p>
                </div>
            </div>   
        </div>
        <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question5">
                 <h4 class="panel-title">
                    <a href="#" class="ing">6.Why should I choose housecat-skgcode.com?</a>
                </h4>
            </div>
            <div id="question5" class="panel-collapse collapse">
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>
                    <p>Founded in 2019 by dynamic business leaders, System of a down has already helped more than 5,000 people find their dream homes through the efforts of more than 500 of our dedicated employees. </p>
                </div>
            </div>   
        </div>
        <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question6">
                 <h4 class="panel-title">
                    <a href="#" class="ing">7.In which cities do you offer your services?</a>
                </h4>
            </div>
            <div id="question6" class="panel-collapse collapse">
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>
                    <p>Our services are available across 6 cities in Greece, namely Athens, Halkidiki, Kavala, Larisa, Patra, Thessaloniki. </p>
                </div>
            </div>   
        </div>
        <div class="panel panel-default ">
            <div class="panel-heading accordion-toggle collapsed question-toggle" data-toggle="collapse" data-parent="#faqAccordion" data-target="#question7">
                 <h4 class="panel-title">
                    <a href="#" class="ing">8.Who should I contact in case I face any issues?</a>
                </h4>
            </div>
            <div id="question7" class="panel-collapse collapse">
                <div class="panel-body">
                     <h5><span class="label label-primary">Answer</span></h5>
                    <p>We have a dedicated customer care service team, which is available at your service seven days a week from 8:30 am to 7:30 pm. You can call them on + 30 2310 666666 or mail customer service at systemofadown@skgcode.com. </p>
                </div>
            </div>   
        </div>
      </div>  
    </div> */}
    

    <div className="accordion FAQ" id="accordionExample">
        <h1>Frequently Asked Questions</h1>
        <div class="card">
            <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    1. How to add a house or an apartment for selling or renting?
                </button>
            </h2>
            </div>
            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                <h5><span class="label label-primary">Answer</span></h5>
                <p>First click on <b>Add House</b>, which is located at the top-right side of the page. 
                    Then fill all the fields and when you are done, press the <b>Add</b> button located at the bottom of the page. </p>
            </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" id="headingTwo">
            <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                2. How do I search for rentals?
                </button>
            </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
                <h5><span class="label label-primary">Answer</span></h5>
                <p>You can click on <b>Rent</b> button located at the navbar and then add more filters from Filter Box at the left.</p>
            </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header" id="headingThree">
            <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                3. How to use the chatbot?
                </button>
            </h2>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
                <h5><span class="label label-primary">Answer</span></h5>
                <p>Just click the <b>Need help?</b> button and write what you are looking for.</p>
            </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingFour">
            <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                4. Are all the houses or apartments available right now?
                </button>
            </h2>
            </div>
            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
            <div class="card-body">
                <h5><span class="label label-primary">Answer</span></h5>
                <p>All the properties that are shown in our site are available and are being verified everyday. You can also check by contacting us.</p>
            </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingFive">
            <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                5. Why the addresses of the rentals are not available?
                </button>
            </h2>
            </div>
            <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
            <div class="card-body">
                <h5><span class="label label-primary">Answer</span></h5>
                <p>All the addresses are purposely covered for safety reasons. You can know the specific address of each property after contacting our agency.</p>
            </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingSix">
            <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                6.Why should I choose housecat-skgcode.com?
                </button>
            </h2>
            </div>
            <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
            <div class="card-body">
                <h5><span class="label label-primary">Answer</span></h5>
                <p>Founded in 2019 by dynamic business leaders, System of a down has already helped more than 5,000 people find their dream homes through the efforts of more than 500 of our dedicated employees.</p>
            </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingSeven">
            <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                7.In which cities do you offer your services?
                </button>
            </h2>
            </div>
            <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
            <div class="card-body">
                <h5><span class="label label-primary">Answer</span></h5>
                <p>Our services are available across 6 cities in Greece, namely Athens, Halkidiki, Kavala, Larisa, Patra, Thessaloniki.</p>
            </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" id="headingEight">
            <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                8.Who should I contact in case I face any issues?
                </button>
            </h2>
            </div>
            <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
            <div class="card-body">
                <h5><span class="label label-primary">Answer</span></h5>
                <p>We have a dedicated customer care service team, which is available at your service seven days a week from 8:30 am to 7:30 pm. You can call them on + 30 2310 666666 or mail customer service at systemofadown@skgcode.com.</p>
            </div>
            </div>
        </div>
    </div>
  <Chatbot/>
  </React.Fragment>
          ); 
    }
}
export default FAQ;
