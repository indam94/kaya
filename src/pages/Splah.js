import React,{Component} from 'react';
import SplashImage from '../resources/Landing page.png';    //splash image(logo image)

import {Redirect} from 'react-router-dom'

class Splash extends Component{

    state = {
        redirect: false
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                redirect: true
            })
            console.log('go!')
        }, 2000);   //splash time second * 1000
    }

    render(){
        if(this.state.redirect){
            return (<Redirect to = "/main"/>)
        }
        return(
            <div className='splash_img'>
                <img src={SplashImage} alt="splash img"></img>
            </div>
        )
    }
}

export default Splash