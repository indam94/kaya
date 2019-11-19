import React, {Component} from 'react'
import AppStore from '../resources/App Store.png'
import Calendar from '../resources/Calendar Official.png'
// import Clock from '../resources/Clock.png'
// import Settings from '../resources/Settings.png'
import IconButton from '../components/IconButton'
import {Link} from 'react-router-dom'
import Kaya from '../resources/logo.png';
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
  callApi = () => {
    if(this.props.count === 0){
      fetch("https://kayas.herokuapp.com/api/consent")
      .then(res => res.json())
      .then(json => {
        this.setState({
        data: json.title
        })
        console.log(json)
        localStorage.setItem('userId',json['message'])
      })
    }
    

  }

  componentDidMount(){
    if(localStorage.getItem('userId') === null){
      console.log("Request UserId")
      //this.callApi();
    }
    
    if(!this.props.isInstalled){
      localStorage.setItem('Information', "Please access the app store by clicking on the [App Store] icon.")
      this.change()
    }
    else{
      localStorage.setItem('Information', "Please, open the app by clicking on the Kaya icon [icon].")
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
        <Link to="/splash" 
              className = 'icon'
        >
          <IconButton img={Kaya} style={{margin:"10px"}} name="KAYA" /> 
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