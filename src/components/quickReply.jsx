import React from 'react';


const QuickReply = (props) => {
    if (props.reply.structValue.fields.payload) {
        if (props.reply.structValue.fields.text.stringValue==='yes'){
            return (   
                <button type="button" style={{ margin: 5}} className="btn btn-primary btn-sm"
                onClick={(event) =>
                    props.click(
                        event,
                        props.reply.structValue.fields.payload.stringValue,
                        props.reply.structValue.fields.text.stringValue
                    )
                }>
                    <text style={{fontSize:11}}>{props.reply.structValue.fields.text.stringValue}</text>
                </button>
            );
        }else if (props.reply.structValue.fields.text.stringValue==='no'){
            return(
            <button type="button" style={{ margin: 5}} className="btn btn-light btn-sm"
                onClick={(event) =>
                    props.click(
                        event,
                        props.reply.structValue.fields.payload.stringValue,
                        props.reply.structValue.fields.text.stringValue
                    )
                }>
                    <text style={{fontSize:11}}>{props.reply.structValue.fields.text.stringValue}</text>
                </button>
            );
        }
    } else {
        return (
            <a style={{ margin: 3}} href={props.reply.structValue.fields.link.stringValue}
               className="btn-floating btn-large waves-effect waves-light red">
                {props.reply.structValue.fields.text.stringValue}
            </a>
        );
    }

};

export default QuickReply;