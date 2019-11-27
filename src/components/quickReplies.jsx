import React, { Component } from 'react';
import QuickReply from './quickReply';

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
            <div class="container-fluid" >

                    <div className="card"  style={{position:"left", display:"flex",margin: 0, paddingBottom: '1%', paddingTop: '1%', marginBottom:'2%',  textAlign: 'auto',  display:"flex",justifyContent: "center", alignItems: "center",backgroundColor:'#00b3b3'}}>

                        <div className="container" style={{alignSelf: 'stretch'}}>
                            <div className="col-sm-3"  style={{display: "flex", justifyContent: "center", alignItems: "center", left:0, backgroundColor:'#00b3b3'}}>
                                <h5 style={{maxHeight:22.5, minHeight:22.5}}><span className="badge badge-light" style={{display:"static" , minWidth: 40, verticalAlign:"middle"}}>{this.props.speaks}</span></h5>
                            </div>
                            <div id= "quick-replies" className="col-sm-9" style={{paddingBottom: '2%', paddingTop: '2%', justifyContent: "center",backgroundColor:'#00b3b3'}}>
                                <div className="text-white" style={{paddingBottom: '2%', paddingTop: '2%', height: '96%', }}>
                                    {this.props.text && <p>{this.props.text.stringValue} </p>}
                                    {this.renderQuickReplies(this.props.payload)}
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
        );
    }
}


export default QuickReplies;