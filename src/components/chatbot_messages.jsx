import React from 'react';
import "../message.css";
import "../chat-window.css";


const Message = (props)=> {
    return(
        <div>
        <div class="sc-message" style={{marginLeft: '20px', marginRight: '0px', padding: '0px'}}>
            {props.speaks==='bot' && 
                <div className="sc-message--content received" >
                    <div className="sc-message--avatar" style={{backgroundImage: "url(https://yt3.ggpht.com/a/AGF-l7_5_gsypJpmcfZFJlo7QlWEGHixtwrEuzgEaw=s900-c-k-c0xffffffff-no-rj-mo)"}}></div>
                    <div className="sc-message--text">
                        {props.text}
                    </div> 
                </div>
            }
        </div>
        <div class="sc-message" style={{marginLeft: '70px', marginRight:'0px'}}>
            {props.speaks==='me' &&
                <div className="sc-message--content sent">  
                    <div className="sc-message--text">
                        {props.text}
                    </div>
                    <div className="sc-message--avatar" style={{backgroundImage: "url(https://kingsteigntonschool.org/wp-content/uploads/2015/07/facebook-default-no-profile-pic.jpg)"}}></div>
                </div>
                    }
        </div>
        </div>
    )
}

export default Message; 