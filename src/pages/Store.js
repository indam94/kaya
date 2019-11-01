import React, {Component} from 'react';
import './AppStore.css';

import Install from '@material-ui/core/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import Preview1 from '../resources/PreView1.jpeg';
import Preview2 from '../resources/PreView2.jpeg'

import KAYAIcon from '../resources/logo.png';

import StarRatings from 'react-star-ratings'

import {Link} from 'react-router-dom'

class AppStore extends Component{
    constructor(props){
        super(props)
        this.state = {
            type : props.type,
        }
        console.log(this.props)
        this.install = this.install.bind(this)
    }

    install(){
        //console.log(this.props)
        this.props.handleInstall();
        this.props.handleInstruct("Please, open the app by clicking on the Kaya icon [icon].");
    }

    render(){
        return(
        <section className="background_app_store">
            {/* First Section */}
            <article className="simple_info">
            <div className="Logo"><img src={KAYAIcon} alt="logo"></img></div>
            <div className="AppName">
                <div className="AppName_Inside">
                    <h4>KAYA</h4>
                </div>
            </div>
            <div className="CompanyName">
                <div className="CompanyName_Inside">
                    <p>UCI</p>
                </div>
            </div>
            <div className="InstallButton">
                {/* <button onClick={()=>{this.props.handler('Click the KAYA application.')}}> */}
                <Link   to = "/ios_backgroud" 
                        //onClick={this.props.handleInstall}
                        onClick={this.install}
                        // onClick={()=>this.props.handleInstruct("Please, open the app by clicking on the Kaya icon [icon].")}
                >
                <Install    className='install_button' 
                            variant="contained" 
                            size="small" 
                            style={{
                                backgroundColor: "#157EFB",
                                color:"#ffffff",
                                borderRadius:"20px",
                            }}
                    >GET
                </Install >
                </Link>
                
                {/* </button> */}
            </div>
            <div className="BlankNull"></div>
            <div className="OtherButton">
                <button style={{
                    backgroundColor: "#157EFB",
                    color:"#ffffff",
                    width: "27px",
                    height: "27px",
                    borderRadius:"50%",
                }}>
                    <MoreHorizIcon style={{marginLeft:"-0.4rem"}}/>
                </button>
            </div>
            <div className="Rating">
                <h4>4.7</h4>
                <StarRatings rating={4.7} starRatedColor="#3776f0" numberOfStarts={5} name='rating' starDimension="20px" starSpacing={"2px"}></StarRatings>
                <h6>36.9K Ratings</h6>
            </div>
            <div className="Ranking">
                <h4>#2</h4>
                <h6>Reference</h6>
            </div>
            <div className="Age">
                <h4>17+</h4>
                <h6>Age</h6>
            </div>
        </article>
            <hr
                style={{
                    color: "#E7E7E7",
                    height: 0.5,
                }}
            />
            <section className="AppDescription">
            <h4>PreView</h4>
            <img src={this.state.type === 'A' ? Preview1 : Preview2} alt="Preview1"></img>
            <hr
                style={{
                    color: "#E7E7E7",
                    height: 0.5,
                }}
            />
            <h4>Description</h4>
            <p>{this.state.type === 'A'? 'Your body is unique and now so is your app. Get personalized fertility recommendations straight to your phone. KAYA is a fertility tracking app that predicts your menstrual cycles with precision and accuracy. It uses smart algorithms to predict your ovulation cycle. Powered by Machine Learning and Artificial Intelligence.' : 
            'Your body is unique and now so is your app. Get personalized fertility recommendations straight to your phone. KAYA is a fertility tracking app that predicts your menstrual cycles with precision and accuracy. It uses your personal health information and fertility knowledge to predict your ovulation cycle. Powered by you. Take control.'}<br /><br /><br />
            </p>
        </section>
        </section>
        )
    }
}

export default AppStore