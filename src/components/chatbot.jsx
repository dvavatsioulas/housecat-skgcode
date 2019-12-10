import React, { Component } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import uuid from 'uuid';
import Message from "./chatbot_messages";
import QuickReplies from './quickReplies'
import { final_params } from "./chatbot_functions/front_hanle_intents_function";
import "../message.css";
import "../chat-window.css";
import "../launcher.css";
import launcherIconActive from '../close-icon.png';
import launcherIcon from '../logo-no-bg.svg';
import { ninvoke } from "q";

//Define the Server to manage your Requests

//const api_address='http://localhost:8000'
const api_address='https://housecat-skgcode-api.herokuapp.com'

//Import my function to handle the dialogflow intents
const front_handle_intents= require('./chatbot_functions/front_hanle_intents_function.js')

//Create cookies and a global variable mydata to store the messages
const cookies = new Cookies();
var mydata =[];

//The Chatbot component
/*
  messages: [the messages that are on the chatbot window]
  showBot: [true if the chatbot window is open false if it is closed]
  final_params: [if it is not null means there has to be a get request to the server with theese parameteres],
  redirect_window: [if it is not null means that it has to redirect to the window with its value],
  isOpen: [true if the chatbot window is open false if it is closed],
  input_message: [the message of the input field of the chatbot],
  quickReplyExists: [if there is a quick reply message make this true]
}
*/
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
      redirect_window: null,
      isOpen: false,
      input_message: '',
      quickReplyExists: false
    }

    //IF there is no userID saved in the cookies create one and clear the localstorage for a new session
    if (cookies.get('userID') === undefined){
      cookies.set('userID', uuid(), {path: '/'});
      localStorage.clear()
    }
    
  }
  //Function to handle the input user text
  async df_text_query(queryText){
    
    //Before do anything check if there is a quick reply message to destroy
    if (this.state.quickReplyExists===true){
      this.deleteQuickReplyMessage("skip")
      this.state.quickReplyExists=false;
    }
    
    //Create the message that the user wrote and push it to the messages[]
    let says = {
      speaks: 'me',
      msg: {
        text: {
          text: queryText
        }
      } 
    };

    this.setState({messages: [...this.state.messages, says]});

    //Make the post request and get the dialogflow response to the above message.
    const res = await axios.post(api_address+'/df_text_query', {text: queryText, userID: cookies.get('userID')});
    console.log(res.data.intent.displayName)

    //For each of the responded messages create them and add them to the chatbot frame
    for (let msg of res.data.fulfillmentMessages){
      //If we get a payload message make this true in order to delete later
      if (msg.message==="payload"){
        this.state.quickReplyExists=true;
      }
      
      says = {
        speaks: 'bot',
        msg: msg
      }

      //Add Bot Delay at each response
      let delays={
        speaks: 'bot',
        msg : {
          text: {
            text: '...'
          }
        } 
      }
      let d_text=['.','..','...']
      
      //Set minimum time 650 ms the time is equivalent with the length of the message
      let time=650

      if (msg.message === "text"){
        time= 2000/336*msg.text.text[0].length
      }
      if (time < 650){
        time = 650
      }
      //Make the animation of . .. ...
      delays.msg.text.text=d_text[0];
      var t=0;  
      this.myload(delays)
      await this.mytimeOutFunctiion(200)
      var last_msg=this.state.messages.length
      
      for (var i=200; i<time; i+=200){
        t++
        if (t>2){t=0;}
        delays.msg.text.text=d_text[t];
        this.state.messages.splice(last_msg-1, 1) 
        this.myload(delays)
        await this.mytimeOutFunctiion(200)
      }
      //Delete the last animation 
      var last_msg=this.state.messages.length
      this.state.messages.splice(last_msg-1, 1) 
      //Upload the real message
      this.myload(says)
      await this.mytimeOutFunctiion(time)

    }
    
    //Handle the Intents
    front_handle_intents.front_handle_intents(res)

    //If there is a manual event do that first.
    if (front_handle_intents.next_event!=null){
      this.df_event_query(front_handle_intents.next_event)
    }

    //If there is an intent to delete messages
    if (front_handle_intents.delete_messages){
        localStorage.removeItem('chatmessages');
        mydata=[]
        this.state.messages=[]
        console.log("Messages Deleted")
    }
    
    //Save the results
    
    this.state.final_params=front_handle_intents.final_params
    this.state.redirect_window=front_handle_intents.redirect_window
    localStorage.setItem("redirect", front_handle_intents.redirect_window)
    
    //Handle the redirect or the server communication for houses results
    this.myFunction(this.state.final_params, this.state.redirect_window)

  }

  //Function to handle manual events. You can trigger your own intent
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

  //Function to load my messages
  async myload(msg){    
    this.setState({messages: [...this.state.messages, msg]});
  }
  
  //Function to set a delay
  mytimeOutFunctiion(time){
    return new Promise(res => setTimeout(res, time));
  }

  //This function handles the redirect or the server communication for houses results
  myFunction(final_params, redirect_window) {
    
    //if there is a redirect to that
    if (redirect_window!=null){
      window.open(redirect_window)
    }

    //If he have houses variables get the houses results from the server.
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

          var filteringResults = res.data;
          if (res.data===""){
            localStorage.setItem("searchdata", res.data);
          }else{
            localStorage.setItem("searchdata", JSON.stringify(filteringResults));
          }
         //console.log("FILTERING RESULTS: "+ JSON.stringify(filteringResults))

          let filterboxInfo = {
            location: final_params.location,
            minprice: null,
            maxprice: final_params.maxprice,
            saleType: final_params.sale_type,
            bedrooms: null,
            bathrooms: null,
            floor: null,
            propertyType: final_params.property_type,
            heating: null,
            parking: null,
            furnitured: null,
            sqm: final_params.minsqm
            /*
            location: filteringResults.location,
            maxprice: filteringResults.maxprice,
            sale_type: filteringResults.sale_type,
            property_type: filteringResults.property_type
            */
          };
          localStorage.setItem("filters", JSON.stringify(filterboxInfo));

          /*
          if (res.status == 200) {
            let filteringResults = res.data;
            localStorage.setItem("searchdata", JSON.stringify(filteringResults));

            let filterboxInfo = {
              location: "Location"
            };
            localStorage.setItem("filters", JSON.stringify(filterboxInfo));
         
          } else if (res.status == 204) {
            localStorage.setItem("searchdata", res.data);
          }
          */
          // LocalStorage takes a few milliseconds to execute SO this delay is necessary otherwise redirect will happen before the process is complete
          setTimeout( () => {
           this.setState({ position: 1 });
          }, 2000);
          this.state.final_params=null
          window.open("/results"); 
          
        });
     }
  }

  componentDidMount(){

        this.state.redirect_window=localStorage.getItem("redirect")
        
        //If the user redirect keep the chat window open.
        if (this.state.redirect_window != null){
          this.show()          
        }else{
          this.hide()
        }
        
        this.state.redirect_window=null
        localStorage.removeItem("redirect")
        /*
          var popup = document.getElementById("myPopup");
          //popup.style.display='none'
          this.setState({showBot: false});
        */
        
        //If there are no messages in the chat window, then call the first message else load the messages.
        if (localStorage.getItem("chatmessages")===null){
          localStorage.setItem("chatmessages", JSON.stringify(this.state.messages))
          this.df_event_query('first_message')
        }else{
          mydata=JSON.parse(localStorage.getItem("chatmessages"))

          for (var i in mydata){
            this.state.messages.push(mydata[i]);
          }

        }
  }

  //If the component updates scroll down the messages and save the las message.
  componentDidUpdate(){ 
      this.state.redirect_window=null;
      this.messagesEnd.scrollIntoView({behaviour: "smooth"})
      localStorage.setItem("chatmessages", JSON.stringify(this.state.messages))
  }

  //Handler for the messages
  renderMessages(stateMessages){
    if (stateMessages){
      return stateMessages.map((message, i)=>{
        return this.renderOneMessage(message, i);
      })
    }else{
        return null
    }
  }

  //Check if was send a text message or a payload message
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

  //Function to open chat window
  show() {
    var popup = document.getElementById("myPopup");
    this.setState({showBot: true});
    this.setState({isOpen: true});
    //popup.style.display='inline-block'
  }

  //Function to clse chat window
  hide() {
    var popup = document.getElementById("myPopup");
    this.setState({showBot: false});
    this.setState({isOpen: false});
    //popup.style.display='none'
  }

  //Function that checks if the user pressed ENTER to send the message
  _handleInputKeyPress(e) {
    if (e.key === 'Enter' && e.target.value!='') {
        this.df_text_query(e.target.value);
        this.state.input_message=''
    }
  }

  //Handle if the input text changed
  handleChange = event => {
    this.setState({ input_message : event.target.value });
  }

  //Send the message if the send button is pressed
  sendButton = event =>{
    this.df_text_query(this.state.input_message);
    this.state.input_message=''
  }

  //Handle the Quick Reply button click
  _handleQuickReplyPayload(event, payload, text) {
    event.preventDefault();
    event.stopPropagation();

    var last_msg_index=this.state.messages.length
    var last_msg = this.state.messages[last_msg_index-1]
    
    //TODO
    this.deleteQuickReplyMessage(text)
    this.df_text_query(text);
    
  }

  //Delete the quick reply buttons and make it a normal text message
  deleteQuickReplyMessage(text){
    var last_msg_index=this.state.messages.length
    var last_msg = this.state.messages[last_msg_index-1]
    
    let says={
      speaks: 'bot',
      msg : {
        text: {
          text: last_msg.msg.payload.fields.text.stringValue+"\n"+ "[ Answered : "+text+" ]"
        }
      } 

    }
   
    this.state.messages.splice(last_msg_index-1, 1) 
    this.state.messages[last_msg_index-1]=says
    this.state.quickReplyExists=false
  }

  //Handle the click on the chatbot icon
  handleClick() {
    //----HANDLE CLICK IN CHATBOT POPUP BUBBLE----
    if (this.props.handleClick !== undefined && this.state.showBot) {
      this.props.handleClick();
      this.hide()
    } else {
      
      if (this.state.isOpen){
        this.hide()
      }else{
        this.show()
      }
      /*
      this.setState({
        isOpen: this.state.isOpen,
      });
      console.log("State: "+this.state.isOpen)
      this.show()
      */
    }
    
  }


  render() {

    //----CHANGE THE ELEMENTS OF LAUNCHER AND myPopup DIVS----
    //const isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen;
    const classList = [
      'sc-launcher',
      (this.state.isOpen ? 'opened' : ''),
    ];
    const classList2 =[
      'myPopup',
      (this.state.isOpen ? 'opened' : 'closed')
    ]

    return (

      <React.Fragment>

        <div id="sc-launcher">
          <div className={classList.join(' ')} onClick={this.handleClick.bind(this)}>
            <img className={'sc-open-icon'} src={launcherIconActive} />
            <img className={'sc-closed-icon'} src={launcherIcon} />
          </div>
        </div>

        <span className={classList2.join(' ')}>

          <div className="card mb-2 bg-white text-dark" style={{ minHeight: 500, maxHeight: 500, width:400, position:"fixed", marginBottom:500, bottom: 80, right: 0, border: '1px solid lightgray'}}>
            <div className="card-header bg-dark text-light" id="chatbot" style={{ minHeight: 50, maxHeight: 50, cursor: "pointer"}} onClick={this.handleClick.bind(this)}>
              <div className="row">
                <div className="col-sm-10 bg-black text-white" style={{textAlign: 'center'}}>
                  <h5>Cat-bot </h5>
                </div>
                <div className="col-sm-2">
                  <button type="button" className="close text-white" aria-label="Close">
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
            <div className="row-sm-2">
                  <input style={{position:"absolute",bottom:0 ,marginBottom: 3,marginLeft: '5px' ,paddingTop:'10px', paddingLeft: '1%', paddingRight: '1%', width: '65%', paddingBottom: '2%', paddingTop: '2%',height: '8%',borderRadius:'3px',backgroundColor: "#e4e4e4"}} ref={(input) => { this.talkInput = input; }} placeholder="Type a message:"  onKeyPress={this._handleInputKeyPress} onChange={this.handleChange} id="user_says" type="text" value={this.state.input_message} autocomplete="off"/>
                  <input class="btn btn-primary bg-light" type="submit" value="send" style={{position: "absolute",bottom:0 ,marginBottom: 3, paddingTop:'10px', paddingLeft: '1%', paddingRight: '1%', width: '28%', paddingBottom: '2%', paddingTop: '2%', marginLeft: '267px',height: '45px',marginTop: '0px', height: '8%'}} onClick={this.sendButton}/>
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