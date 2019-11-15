import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import CustomButton from '@material-ui/core/Button';

export default class Disagree extends Component {

    componentDidMount(){
        localStorage.setItem('Information', "Thank you")
    }

    render() {
        return (
            <div>
                <h1 style={{fontSize:"150%", textAlign:"center"}}>
                Thank you for your time.
                </h1>
                <br/>
                If you change your mind and decide to participate, please feel free to return to the study.
                <br/>
                <br/>
                <div className="text-center">
                <Link   to = "/" >
                                
                <CustomButton   className="mb-2" 
                                variant="contained" 
                                color="primary" 
                >
                                RETURN
                            </CustomButton>
                            </Link>
                </div>
                
            </div>
        )
    }
}
