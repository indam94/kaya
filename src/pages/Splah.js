import React,{Component} from 'react';
import SplashImage from '../resources/Landing_pageE.png';
import SplashImageC from '../resources/Landing_pageC.png';

import {Redirect} from 'react-router-dom'

class Splash extends Component{

    state = {
        redirect: false
    }

    componentDidMount(){
        localStorage.setItem('Information',"Splashing...")
        setTimeout(() => {
            this.setState({
                redirect: true
            })
        }, 2000);   //splash time second * 1000
    }

    render(){
        if(this.state.redirect){
            return (<Redirect to = "/main"/>)
        }
        return(
            <div className='splash_img'>
                {this.props.type === 'A' ? 
                    <img src={SplashImage} alt="splash img"/> : 
                    <img src={SplashImageC} alt="splash img"/>
                }
                
            </div>
        )
    }
}

export default Splash