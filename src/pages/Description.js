import React, {useEffect} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import { FormControlLabel } from '@material-ui/core';
import CustomButton from '@material-ui/core/Button';
import questionMark from '../resources/question_mark.png'

import { Link } from 'react-router-dom'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'

function Description(props) {

    const [checked, setChecked] = React.useState({
        checkedAgree: false
    })

    const handleChange = event => {
        if (event.target.value === "I agree") {
            setChecked({checkedAgree:true})
        }else{
            setChecked({checkedAgree:false})
        }
    };

    useEffect(() => {
        localStorage.setItem('Information', "Please Read All Description And Check Agree Or Disagress")
    })

    return (
        <div style={{padding:"1rem"}}>

            {/* you put Title here */}
            <h1 style={{fontSize:"150%", textAlign:"center"}}>Instructions and texts for the prototype</h1>
                {/* you put Some Description here */}
                <br/><h2 style={{fontSize:"100%"}}>Purpose and Procedure</h2><br/>
                Thank you for taking part in this experiment. 
                We are studying how users understand fertility self-tracking tools and algorithms. 
                The experiment should take approximately 60 minutes to complete. 
                <br/><br/>
                We would like you to analyze a prototype of a fertility app. 
                You will be guided through the process of reading the app store page of the app, downloading the app, inputting fertility-related data, and analyzing a calendar and a graph visualization.
                <br/><br/>
                You will see two versions of the same app, one after the other. There will be instructions for what to do. If you ever need to retrieve the instructions, just tap the (?) in the upper right corner:
                <div style={{textAlign:"center"}}>
                    <img src={questionMark} width="100px" alt = "instruct"/>
                </div>
                <br/>
                <br/><h2 style={{fontSize:"100%"}}>Responses will be Confidential</h2><br/>		
                All records from this study will be kept private. 
                Your responses will not affect your current or future experience or relations with UCI. 
                In addition, in any sort of report we might publish, we will not include any information that makes it possible to identify you. 
                Research records will be stored securely, and only researchers will have access to the records.
                <br/>
                <br/><h2 style={{fontSize:"100%"}}>Contacts and Questions</h2><br/>	
                This survey is being conducted by the HAI lab in the Informatics Dept. at UCI. 
                If you have any questions about this study, please feel free to contact the researchers at mcostafi@uci.edu.
                <br/>
                <br/><h2 style={{fontSize:"100%"}}>Statement of Consent</h2><br/>
                By clicking "I have read and consent to participate", you consent to participate in this study.
                <br/>
                <br/>
            
            <FormGroup>
                <RadioGroup 
                    defaultValue="I disagree" 
                    aria-label="agreement" 
                    name="customized-radios"
                    onChange={handleChange}
                    >
                    <FormControlLabel value="I agree" control={<Radio />} label="I have read and consent to participate" />
                    <FormControlLabel value="I disagree" control={<Radio />} label="I do not consent to participate" />
                </RadioGroup>
            </FormGroup>

            <div className="text-center">
                {checked.checkedAgree === true ? 
                
                // <Link   to = "/login" >
                <Link   to = "/ios_backgroud" >
                {/* ('Please Enter Your ID & Password') */}
                <CustomButton   className="mb-2" 
                                variant="contained" 
                                color="primary" 
                >
                    START
                </CustomButton>
                </Link> 
                :
                <Link   to = "/disagree" >
                                
                <CustomButton   className="mb-2" 
                                variant="contained" 
                                color="primary" 
                >
                    START
                </CustomButton>
                </Link>
                }
                
            </div>
            
            
            
        </div>
    );
};

export default Description