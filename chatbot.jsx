import React, { Component } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import uuid from 'uuid';
import Message from "./chatbot_messages";

//const api_address='http://localhost:8000'
const api_address='https://housecat-skgcode-api.herokuapp.com'

const front_handle_intents= require('./chatbot_functions/front_hanle_intents_function.js')

const cookies = new Cookies();
var mydata =[];

class Chatbot extends Component {
  messagesEnd;
  constructor(props){
    super(props)
    this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
    this._handleQuickReplyPayload = this._handleQuickReplyPayload.bind(this);

    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);

    this.state={
      messages: [],
      showBot: false
    }
    
    if (cookies.get('userID') === undefined){
      cookies.set('userID', uuid(), {path: '/'});
      
    }
    
  }
  async df_text_query(queryText){
    let says = {
      speaks: 'me',
      msg: {
        text: {
          text: queryText
        }
      } 
    };
    
    this.setState({messages: [...this.state.messages, says]});

    const res = await axios.post(api_address+'/df_text_query', {text: queryText, userID: cookies.get('userID')});
    console.log(res.data.intent.displayName)
    for (let msg of res.data.fulfillmentMessages){
      says = {
        speaks: 'bot',
        msg: msg
      }
      this.setState({messages: [...this.state.messages, says]});
      
    }
    
    front_handle_intents.front_handle_intents(res)
    
    if (front_handle_intents.next_event!=null){
      this.df_event_query(front_handle_intents.next_event)
    }

    if (front_handle_intents.delete_messages){
        localStorage.removeItem('chatmessages');
        mydata=[]
        this.state.messages=[]
        console.log("Messages Deleted")
    }
    
    var final_params=front_handle_intents.final_params
    if(final_params!=null){
      axios.post(api_address+'/api/properties/search',  {
            "id":null,
            "minprice":final_params.minprice,
            "maxprice":final_params.minprice,
            "sqm": null,
            "location":final_params.location,
            "bedrooms":null,
            "bathrooms":null,
            "property_type":final_params.property_type,
            "floor":null,
            "sale_type":final_params.sale_type,
            "furnitured":null,
            "heating_type":null,
            "minbuilt_year":null,
            "maxbuilt_year":null,
            "parking":null
        }).then(res => {
          
          //localStorage.setItem("filters",JSON.stringify(final_params));
          let filteringResults = res.data;
          localStorage.setItem("searchdata", JSON.stringify(filteringResults));
          
          // LocalStorage takes a few milliseconds to execute SO this delay is necessary otherwise redirect will happen before the process is complete
          setTimeout( () => {
           this.setState({ position: 1 });
          }, 2000);
          
          window.open("/results", "_self"); //to open new page
        });
     }

  }
  async df_event_query(eventName){

    const res = await axios.post(api_address+'/df_event_query', {event: eventName, userID: cookies.get('userID')});

    if (res.data.intent.displayName === 'End Intent'){
      console.log("END INTENT")
      localStorage.removeItem('chatmessages');
      mydata=[]
      this.state.messages=[]
    }

    for (let msg of res.data.fulfillmentMessages){
      let says = {
          speaks: 'bot',
          msg: msg
      }
      this.setState({messages: [...this.state.messages, says]})
      
    }
  }
  
  myFunction() {
      //NOTHING HERE
  }

  componentDidMount(){
        
        //this.df_event_query('faq_more')

        var popup = document.getElementById("myPopup");
        popup.style.display='none'
        this.setState({showBot: false});

        if (localStorage.getItem("chatmessages")===null){
          localStorage.setItem("chatmessages", JSON.stringify(this.state.messages))
        }else{
          mydata=JSON.parse(localStorage.getItem("chatmessages"))

          for (var i in mydata){
            this.state.messages.push(mydata[i]);
          }

        }


  }

  componentDidUpdate(){
      this.messagesEnd.scrollIntoView({behaviour: "smooth"})
      localStorage.setItem("chatmessages", JSON.stringify(this.state.messages))

  }

  renderMessages(stateMessages){
    if (stateMessages){
      return stateMessages.map((message, i)=>{
        return <Message key={i} speaks={message.speaks} text={message.msg.text.text} />
      })
    }else{
        return null
    }
  }

  show() {
    var popup = document.getElementById("myPopup");
    this.setState({showBot: true});
    popup.style.display='block'
  }

  hide() {
    var popup = document.getElementById("myPopup");
    popup.style.display='none'
    this.setState({showBot: false});
  }

  _handleInputKeyPress(e) {
    if (e.key === 'Enter' && e.target.value!='') {
        this.df_text_query(e.target.value);
        e.target.value = '';
    }

  }

  _handleQuickReplyPayload(event, payload, text) {
    event.preventDefault();
    event.stopPropagation();

    this.df_text_query(text);

  }

  render() {

    var mybuttonFunction
    console.log(this.state.showBot)

    if (this.state.showBot){
        mybuttonFunction=this.hide
    }else{
        mybuttonFunction=this.show
    }
    return (
      <React.Fragment>

        <button className="btn btn-dark popup" onClick={mybuttonFunction} style={{bottom: 10}}>
          Need help?
        </button >

        <span className="popuptext" id="myPopup">

          <div className="card mb-2 bg-light text-dark" style={{ minHeight: 500, maxHeight: 500, width:400, position:"fixed", marginBottom:500, bottom: 50, right: 0, border: '1px solid lightgray'}}>
            <div className="card-header bg-dark text-light" id="chatbot" style={{ minHeight: 125, maxHeight: 125}}>
              <div className="row">
                <div className="col-sm-4">
                  <img  src="https://yt3.ggpht.com/a/AGF-l7_5_gsypJpmcfZFJlo7QlWEGHixtwrEuzgEaw=s900-c-k-c0xffffffff-no-rj-mo" class="img-fluid" alt="Responsive image"/>
                </div>
                <div className="col-sm-7 bg-black text-white" style={{textAlign: 'center'}}>
                  <h5>Cat-bot </h5>
                  <p style={{textAlign: 'justify', alignSelf: 'stretch', fontSize:"80%"}}>Hello mortal,  I am Garfield and I am here to help you find a house. Say hi I don't bite.</p>
                </div>
                <div className="col-sm-1">
                  <button type="button" className="close text-white" aria-label="Close" onClick={this.hide}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body" style={{ minHeight: 375, maxHeight: 375, width:'100%', overflow: 'auto'}} >
            <div className="row-sm-8">
              <div className="col">
                <div className="row" style={{margin: 0, paddingBottom: '2%', paddingTop: '2%', height: '96%'}}>
                  {this.renderMessages(this.state.messages)}
                  <div  ref={(el)=> {this.messagesEnd = el;}} 
                      style={{float: 'left', clear: "both"}}>
                  </div>
                </div>                    
                              
              </div>
            </div>
            <div className="row-sm-2" >
                  <input style={{marginBottom: 10, paddingLeft: '1%', paddingRight: '1%', width: '98%', paddingBottom: '2%', paddingTop: '2%', height: '96%'}} ref={(input) => { this.talkInput = input; }} placeholder="type a message:"  onKeyPress={this._handleInputKeyPress} id="user_says" type="text" />
            </div>  
          </div>
        </div>
          
          {/*
          <iframe
            width="350"
            height="430"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/d810e43a-fb4a-49e6-991b-3a00776f968a"
          ></iframe>
          */}

        </span>

      </React.Fragment>
    );
  }
}

export default Chatbot;