import React, {Component} from 'react'
import AppStore from '../resources/App Store.png'
import Calendar from '../resources/Calendar Official.png'
// import Clock from '../resources/Clock.png'
// import Settings from '../resources/Settings.png'
import IconButton from '../components/IconButton'
import {Link} from 'react-router-dom'
import Kaya from '../resources/logo.png';
import KayaC from '../resources/control_ver_logo.png'
import InstructModal from '../components/Modal'

function getRandomType(){
    let type = Math.floor(Math.random() * 2) === 1 ? 'A' : 'B';
    localStorage.setItem('type', type)
    return type
}

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      isInstalled : props.isInstalled,
      type : localStorage.getItem('type') || getRandomType()
    }
    // console.log(localStorage.getItem('type'))
    if(!this.props.isInstalled){
      localStorage.setItem('Information', "Please access the app store by clicking on the [App Store] icon.")
      this.change()
    }
    else{
      localStorage.setItem('Information', "Please, open the app by clicking on the Kaya icon [icon].")
    }

    console.log(this.state.type)
  }

  change = () =>{
    if(!this.state.isInstalled){
      if(localStorage.getItem('type') === 'A'){
        localStorage.setItem('type', 'B')
      }
      else{
        localStorage.setItem('type', 'A')
      }
      console.log(localStorage.getItem('userId'))
    }
  }

  //  test server call
  callApi = async () => {
    if(this.props.count === 0){
      const response = await fetch("https://kayas.herokuapp.com/api/consent1");
      // const response = await fetch("https://kayas.herokuapp.com/api/requestSurvey/control");
      if (response.status !== 200) {
        console.error(`Response from ${response.url} is failed with ${response.status}`);
        return response;
      }
      const jsonResponse = await response.json();
      console.log(jsonResponse['usercode'])
      this.setState({
        data: jsonResponse['usercode']
      });
      localStorage.setItem('userId', jsonResponse['usercode']);
      return response;
    }
  
  }

  componentDidMount = async () => {
    
    if(localStorage.getItem('userId') === null){
      const response = await this.callApi();
      console.log("Request UserId")
      console.log(response)
    }
    console.log(this.props)
  }

  render(){
    // console.log(this.state.isInstalled)
    return (
      <section className="background_ios">
        
      {/* App Store Button : 1st Step */}
      <Link to={`/app_store`}
            className="icon"
            state={{
              type: this.props.type,
              isInstalled: this.props.isInstalled,
            }}
      >
      <IconButton img={AppStore} name="App Store"></IconButton>
      </Link>
      {/* Sample Icon1 */}
      <IconButton img={Calendar} name="Calendar"></IconButton>
      {/* Sample Icon2 */}
      {/* <IconButton img={Clock} name="Clock"></IconButton> */}
      {/* Sample Icon3 */}
      {/* <IconButton img={Settings} name="Settings"></IconButton> */}
      {this.props.isInstalled ? 
        this.state.type === 'A' ?
        <Link to="/splash" 
              className = 'icon'
        >
          <IconButton img={Kaya} style={{margin:"10px"}} name="KAYA" /> 
        </Link>
        :
        <Link to="/splash" 
              className = 'icon'
        >
          <IconButton img={KayaC} style={{margin:"10px"}} name="KAYA" /> 
        </Link>
        : 
        <div/>
      }
      <InstructModal 
          isOpen={true}
      />
      
      </section>
    );
  }
}

export default Home