import React, {Component} from 'react'
import AppStore from '../resources/App Store.png'
import Calendar from '../resources/Calendar Official.png'
import Clock from '../resources/Clock.png'
import Settings from '../resources/Settings.png'
import IconButton from '../components/IconButton'
import {Link} from 'react-router-dom'
import Kaya from '../resources/logo.png';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      isInstalled : props.isInstalled,
      instructionText : "1. Please access app store",
      type : props.type
    }
    console.log(this.props)
    //this.handleInstall = this.handleInstall.bind(this)
  }

  render(){
    console.log(this.state.isInstalled)
    return (
      <section className="background_ios">
      {/* App Store Button : 1st Step */}
      {/* <button onClick={()=>{this.props.handler('Install application.')}}><IconButton img={AppStore} name="App Store"></IconButton></button> */}
      <Link to={`/app_store/:${this.state.type}`}
            className="icon"
            state={{
              type: this.props.type,
              isInstalled: this.props.isInstalled,
            }}
            onClick={()=>this.props.handleInstruct("Please, read the whole description and install the app.")}
      >
      <IconButton img={AppStore} name="App Store"></IconButton>
      </Link>
      {/* Sample Icon1 */}
      <IconButton img={Calendar} name="Calendar"></IconButton>
      {/* Sample Icon2 */}
      <IconButton img={Clock} name="Clock"></IconButton>
      {/* Sample Icon3 */}
      <IconButton img={Settings} name="Settings"></IconButton>
      {this.props.isInstalled ? 
        <Link to="/splash" 
              className = 'icon'
              onClick={()=>this.props.handleInstruct("Please, open the app by clicking on the Kaya icon [Kaya].")}
              >
          <IconButton img={Kaya} name="KAYA" /> }
        </Link>
        : 
        ''
      }
      
      
      </section>
    );
  }
}

export default Home