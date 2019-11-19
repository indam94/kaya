import React from 'react'
import {Link} from 'react-router-dom'
import CustomButton from '@material-ui/core/Button';

export default function Between() {
    return (
        <div style={{padding:"1rem"}}>
            <div style={{position:"absolute",top:"0.5rem",right:"0.5rem",zIndex:11,width:"50px",height:"50px",background:"#ffffff"}}></div>
            {/* you put Title here */}
            <h1 style={{fontWeight:500,fontSize:"120%", textAlign:"center",marginLeft:"50px",marginRight:"50px"}}>Instructions and texts for the prototype</h1>
                {/* you put Some Description here */}
                <br/><h2 style={{fontSize:"100%"}}>Another Version</h2><br/>
                You have completed the first stage of our experiment. When you're ready, click the button below to complete the final second step.
                <br/><br/>

            <div className="text-center">

                <Link   to = "/ios_backgroud" >
                {/* ('Please Enter Your ID & Password') */}
                <CustomButton   className="mb-2" 
                                variant="contained" 
                                color="primary" 
                >
                    START
                </CustomButton>
                </Link> 

                
            </div>
            
            
            
        </div>
    )
}
