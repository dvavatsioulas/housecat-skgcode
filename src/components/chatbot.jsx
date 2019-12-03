import React, { Component } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import uuid from 'uuid';
import Message from "./chatbot_messages";
import QuickReplies from './quickReplies'
import { final_params } from "./chatbot_functions/front_hanle_intents_function";
import "../message.css";
import "../chat-window.css";

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
      showBot: false,
      final_params: null,
      redirect_window: null
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
      let delays={
        speaks: 'bot',
        msg : {
          text: {
            text: '...'
          }
        } 
      }
      //ADD Bot Delay
      let time=650

      if (msg.message==="text"){
        time= 3000/336*msg.text.text[0].length + 2000
      }
      if (time < 650){
        time = 650
      }

      this.setState({messages: [...this.state.messages, delays]});
      
      this.mytimeOutFunctiion(time)
      
      var last_msg=this.state.messages.length
      this.state.messages.splice(last_msg-1, 1) 
      this.state.messages[last_msg-1]=says

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
    
    this.state.final_params=front_handle_intents.final_params   
    this.state.redirect_window=front_handle_intents.redirect_window
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
  mytimeOutFunctiion(time){
    setTimeout( () => {
      console.log("TIME: "+ time )
      this.setState({ position: 1 });
    }, time);
  }
  myFunction(final_params, redirect_window) {
    if (redirect_window!=null){
      window.location=redirect_window
      this.state.redirect_window=null
    }
    if(final_params!=null){
      axios.post(api_address+'/api/properties/search',  {
            "minprice":final_params.minprice,
            "maxprice":final_params.maxprice,
            "minsqm": final_params.minsqm,
            "maxsqm":null,
            "location":final_params.location,
            "bedrooms":null,
            "bathrooms":null,
            "property_type":final_params.property_type,
            "floor":null,
            "sale_type":final_params.sale_type,
            "furnitured":null,
            "heating_type":null,
            "minbuiltyear":null,
            "parking":null
        }).then(res => {

          if (res.status == 200) {
            let filteringResults = res.data;
            localStorage.setItem("searchdata", JSON.stringify(filteringResults));

            let filterboxInfo = {
              location: this.state.location
            };
            localStorage.setItem("filters", JSON.stringify(filterboxInfo));
         
          } else if (res.status == 204) {
            localStorage.setItem("searchdata", res.data);
          }

          // LocalStorage takes a few milliseconds to execute SO this delay is necessary otherwise redirect will happen before the process is complete
          setTimeout( () => {
           this.setState({ position: 1 });
          }, 2000);
          
          window.open("/results", "_self"); //to open new page
        });
     }
  }

  componentDidMount(){
        this.state.redirect_window=null
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
      this.myFunction(this.state.final_params, this.state.redirect_window)

      this.messagesEnd.scrollIntoView({behaviour: "smooth"})
      localStorage.setItem("chatmessages", JSON.stringify(this.state.messages))

  }

  renderMessages(stateMessages){
    if (stateMessages){
      return stateMessages.map((message, i)=>{
        return this.renderOneMessage(message, i);
      })
    }else{
        return null
    }
  }
  renderOneMessage(message, i) {
    if (message.msg && message.msg.text && message.msg.text.text) {
        return <Message key={i} speaks={message.speaks} text={message.msg.text.text}/>;
    }else if(message.msg && message.msg.payload && message.msg.payload.fields && message.msg.payload.fields.quick_replies){
      return <QuickReplies
        text={message.msg.payload.fields.text ? message.msg.payload.fields.text : null}
        key={i}
        replyClick={this._handleQuickReplyPayload}
        speaks={message.speaks}
        payload={message.msg.payload.fields.quick_replies.listValue.values}
      />;
    }
  }
  show() {
    var popup = document.getElementById("myPopup");
    this.setState({showBot: true});
    popup.style.display='inline-block'
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

    if (this.state.showBot){
        mybuttonFunction=this.hide
    }else{
        mybuttonFunction=this.show
    }
    return (
      <React.Fragment>

        <button className="btn btn-dark popup" onClick={mybuttonFunction}>
          Need help?
        </button >

        <span className="popuptext" id="myPopup" style={{display:"inline-block", position:"sticky"}}>

          <div className="card mb-2 bg-light text-dark" style={{ minHeight: 500, maxHeight: 500, width:400, position:"fixed", marginBottom:500, bottom: 50, right: 0, border: '1px solid lightgray'}}>
            <div className="card-header bg-dark text-light" id="chatbot" style={{ minHeight: 50, maxHeight: 50}}>
              <div className="row">
                <div className="col-sm-10 bg-black text-white" style={{textAlign: 'center'}}>
                  <h5>Cat-bot </h5>
                </div>
                <div className="col-sm-2">
                  <button type="button" className="close text-white" aria-label="Close" onClick={this.hide}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="sc-message-list">
                  {this.renderMessages(this.state.messages)}
                  <div  ref={(el)=> {this.messagesEnd = el;}} 
                      style={{float: 'left', clear: "both"}}>
                  </div>
            <div className="row-sm-2" >
                  <input style={{position:"absolute",bottom:0 ,marginBottom: 10, paddingTop:'10px', paddingLeft: '1%', paddingRight: '1%', width: '90%', paddingBottom: '2%', paddingTop: '2%'}} ref={(input) => { this.talkInput = input; }} placeholder="type a message:"  onKeyPress={this._handleInputKeyPress} id="user_says" type="text" />
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