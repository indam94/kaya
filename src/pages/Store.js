import React, {Component} from 'react';
import './AppStore.css';

import Install from '@material-ui/core/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import Preview1 from '../resources/PreView1.jpeg';
import Preview2 from '../resources/PreView2.jpeg'

import KAYAIcon from '../resources/logo.png';
import KAYAIconC from '../resources/control_ver_logo.png'

import StarRatings from 'react-star-ratings'

import {Link} from 'react-router-dom'

class AppStore extends Component{
    constructor(props){
        super(props)
        this.state = {
            type : localStorage.getItem('type') || 'B',
        }
        console.log(this.props)
        this.install = this.install.bind(this)
    }

    install(){
        //console.log(this.props)
        this.props.handleInstall();
    }

    componentDidMount(){
        localStorage.setItem('Information', "Please, read the whole description and install the app.")
    }

    render(){
        return(
        <section className="background_app_store">
            {/* First Section */}
            <article className="simple_info">
            <div className="Logo">
                {this.state.type === 'A'? <img src={KAYAIcon} alt="logo"/> : <img src={KAYAIconC} alt="logo"/>}
                
            </div>
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
            <img src={this.state.type === 'A' ? Preview1 : Preview2} width="100%" alt="Preview1"></img>
            <hr
                style={{
                    color: "#E7E7E7",
                    height: 0.5,
                }}
            />
            <h4>Description</h4>
            {this.state.type === 'A'? 
            <div>
                Your body is unique and now so is your app. 
                Get personalized fertility recommendations straight to your phone. 
                <br/><br/>
                KAYA is a fertility tracking app that predicts your menstrual cycles with precision and accuracy. 
                It uses smart algorithms to predict your ovulation cycle. 
                Powered by Machine Learning and Artificial Intelligence.
                <br/><br/>
                ------------<br/>
                Features<br/>
                ------------<br/><br/>

                <li>Data-driven predictions of fertility and ovulation, powered by AI.</li>
                <li>Comprehensive and easy tracking: track periods and cycle, moods and symptoms, intercourse, basal body temperature, cervical mucus, ovulation predictor kits and pregnancy tests.</li>
                <li>reminders for the upcoming period and fertile days.</li>
                <li>Vital information at a glance: easy and intuitive calendar to visualize non-fertile, fertile, ovulation, expected period and much more.</li>
                <li>Detailed temperature graph to watch for changes.</li>
            </div>
            : 
            <div>
                Your body is unique and now so is your app. 
                Get personalized fertility recommendations straight to your phone. 
                <br/><br/>
                KAYA is a fertility tracking app that predicts your menstrual cycles with precision and accuracy. 
                It uses your personal health information and fertility knowledge to predict your ovulation cycle. 
                Powered by you. Take control of your fertility.
                <br/><br/>
                ------------<br/>
                Features<br/>
                ------------<br/><br/>

                <li>Ovulation calculator and calendar.</li>
                <li>Comprehensive and easy tracking: track periods and cycle, moods and symptoms, intercourse, basal body temperature, cervical mucus, ovulation predictor kits and pregnancy tests.</li>
                <li>reminders for the upcoming period and fertile days.</li>
                <li>Vital information at a glance: easy and intuitive calendar to visualize non-fertile, fertile, ovulation, expected period and much more.</li>
                <li>Detailed temperature graph to watch for changes.</li>
            </div>
            }
        </section>
        </section>
        )
    }
}

export default AppStore