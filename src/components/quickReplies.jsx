import React, { Component } from 'react';
import QuickReply from './quickReply';
import "../message.css";
import "../chat-window.css";

class QuickReplies extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(event, payload, text) {
        this.props.replyClick(event, payload, text);
    }

    renderQuickReply(reply, i) {
        return <QuickReply key={i} click={this._handleClick} reply={reply} />;
    }

    renderQuickReplies(quickReplies) {
        if (quickReplies) {
            return quickReplies.map((reply, i) => {
                    return this.renderQuickReply(reply, i);
                }
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <div class="sc-message" style={{marginLeft: '20px', marginRight: '0px', padding: '0px'}}>
                <div className="sc-message--content received">
                    <div className="sc-message--avatar" style={{backgroundImage: "url(https://yt3.ggpht.com/a/AGF-l7_5_gsypJpmcfZFJlo7QlWEGHixtwrEuzgEaw=s900-c-k-c0xffffffff-no-rj-mo)"}}></div>
                    <div className="sc-message--text">
                                {this.props.text && <p>{this.props.text.stringValue} </p>}
                                {this.renderQuickReplies(this.props.payload)}
                    </div>
                </div>
            </div>
        );
    }
}


export default QuickReplies;