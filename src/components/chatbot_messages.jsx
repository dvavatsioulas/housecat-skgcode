import React from 'react';


const Message = (props)=> {
    return(
        <div class="container-fluid" >

                    {props.speaks==='bot' && 
                    <div className="card"  style={{position:"left", display:"flex",margin: 0, paddingBottom: '1%', paddingTop: '1%', marginBottom:'2%',  textAlign: 'auto',  display:"flex",justifyContent: "center", alignItems: "center",backgroundColor:'#00b3b3'}}>

                        <div className="container" style={{alignSelf: 'stretch'}}>
                            <div className="col-sm-3"  style={{display: "flex", justifyContent: "center", alignItems: "center", left:0, backgroundColor:'#00b3b3'}}>
                                <h5 style={{maxHeight:22.5, minHeight:22.5}}><span className="badge badge-light" style={{display:"static" , minWidth: 40, verticalAlign:"middle"}}><img  src="https://yt3.ggpht.com/a/AGF-l7_5_gsypJpmcfZFJlo7QlWEGHixtwrEuzgEaw=s900-c-k-c0xffffffff-no-rj-mo" class="img-fluid" alt="Responsive image"/></span></h5>
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
                    <div className="card bg-white"  style={{position:"right", display:"flex", margin: 0, paddingBottom: '5%', paddingTop: '5%', height: '90%', textAlign: 'auto', display:"flex",justifyContent: "center", alignItems: "center"}}>

                        <div className="container" style={{alignSelf: 'stretch'}}>
                           
                            <div className="col-sm-9" style={{paddingBottom: '2%', paddingTop: '2%', height: '96%', justifyContent: "center"}}>
                                <div className="text-dark" style={{paddingBottom: '2%', paddingTop: '2%', height: '96%', }}>
                                    {props.text}
                                </div>
                            </div>
                            <div className="col-sm-3"  style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <h5 style={{maxHeight:22.5, minHeight:22.5}}><span className="badge badge-light text-white" style={{display:"static" , minWidth: 40, verticalAlign:"middle"}}><img  src="https://kingsteigntonschool.org/wp-content/uploads/2015/07/facebook-default-no-profile-pic.jpg" class="img-fluid" alt="Responsive image"/></span></h5>
                            </div>
                        </div>
                    </div>
                    }


        </div>
    )
}

export default Message; 