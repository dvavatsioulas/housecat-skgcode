import React from 'react';


const Message = (props)=> {
    return(
        <div class="container-fluid" >

                    {props.speaks==='bot' && 
                    <div className="card"  style={{position:"left", display:"flex",margin: 0, paddingBottom: '1%', paddingTop: '1%', marginBottom:'2%',  textAlign: 'auto',  display:"flex",justifyContent: "center", alignItems: "center",backgroundColor:'#00b3b3'}}>

                        <div className="container" style={{alignSelf: 'stretch'}}>
                            <div className="col-sm-3"  style={{display: "flex", justifyContent: "center", alignItems: "center", left:0, backgroundColor:'#00b3b3'}}>
                                <h5 style={{maxHeight:22.5, minHeight:22.5}}><span className="badge badge-light" style={{display:"static" , minWidth: 40, verticalAlign:"middle"}}>{props.speaks}</span></h5>
                            </div>
                            <div className="col-sm-9" style={{paddingBottom: '2%', paddingTop: '2%', justifyContent: "center",backgroundColor:'#00b3b3'}}>
                                <div className="text-white" style={{paddingBottom: '2%', paddingTop: '2%', height: '96%', }}>
                                    {props.text}
                                </div>
                             </div>
                        </div>
                    </div>
                    }

                    {props.speaks==='me' &&
                    <div className="card bg-white"  style={{position:"left", display:"flex", margin: 0, paddingBottom: '5%', paddingTop: '5%', height: '90%', textAlign: 'auto', display:"flex",justifyContent: "center", alignItems: "center"}}>

                        <div className="container" style={{alignSelf: 'stretch'}}>
                           
                            <div className="col-sm-9" style={{paddingBottom: '2%', paddingTop: '2%', height: '96%', justifyContent: "center"}}>
                                <div className="text-dark" style={{paddingBottom: '2%', paddingTop: '2%', height: '96%', }}>
                                    {props.text}
                                </div>
                            </div>
                            <div className="col-sm-3"  style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <h5 style={{maxHeight:22.5, minHeight:22.5}}><span className="badge badge-dark text-white" style={{display:"static" , minWidth: 40, verticalAlign:"middle"}}>{props.speaks}</span></h5>
                            </div>
                        </div>
                    </div>
                    }


        </div>
    )
}

export default Message; 