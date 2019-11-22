import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Route} from 'react-router-dom'

import './App.css'

import Splash from './pages/Splah'
import Login from './pages/Login'
import Description from './pages/Description'
import Home from './pages/Home'
import Store from './pages/Store'
import Disagree from './pages/Disagree'
import Main from './pages/Main'
import InstructModal from './components/Modal'
import Input from './pages/Input'
import Survey from './pages/Survey'
import GoodBye from './pages/GoodBye'
import Between from './pages/Between'

import questionMark from './resources/question_mark.png'


// function getRandomType(){
//   return Math.floor(Math.random() * 2) === 1 ? 'A' : 'B';
// }

export default class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      userId : "",
      screen : "",
      // type : getRandomType(),
      end : false,
      isInstalled: false,
      isOpenInstruction: false,
      isAfter: false,
      count:0
    }

    this.handler = this.handler.bind(this)
    this.handleInstall = this.handleInstall.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleAfter = this.handleAfter.bind(this)

    console.log(this.state.count)
  }

  handleAfter = () =>{
    this.setState({
      isAfter: true
    })
  }

  handleUnAfter = () =>{
    this.setState({
      isAfter: false
    })
  }

  handler(someValue) {
    this.setState({
      screen: someValue
    })
    if (someValue === 'Description.') {
        if(this.state.end) this.setState({
            title: 'End.'
        })
        if(!this.state.first_try){
          this.setState({
              type : this.state.type === 'A' ? 'B' : 'A',
              end : true,
              isInstalled: false
          })
        }
        else{
            this.setState({
                first_try : false
            })
        }
    }
  }

  handleInstall = () => {
    this.setState({
      isInstalled: true
    })
  }

  handleUnInstall = () => {
    this.setState({
      isInstalled: false
    })
  }

  handleOpen = () => {
    this.setState({
      isOpenInstruction: true
    })
  }

  handleClose = () => {
    this.setState({
      isOpenInstruction: false
    })

    console.log(this.state.isOpenInstruction)
  }

  addCount = () => {
    this.setState({
      count: +1
    },console.log(this.state.count))

    
  }

//  test server call
//   callApi = () => {
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(res => res.json())
//     .then(json => {
//         this.setState({
//         data: json.title
//         })
//         console.log(json)
//     })

// }

//   componentDidMount(){
//     this.callApi();
//   }

  render() {
    return (
      <div className='device_container'>
        <div className = "instruction">
          <button onClick={this.handleOpen}
          >
            <img src={questionMark} alt = "instruct"/>
          </button>
        </div>
        {this.state.isOpenInstruction? 
          <InstructModal 
          isOpen={this.state.isOpenInstruction}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          /> : null
        }
        
        <Route  exact path = "/" 
                component = {()=><Description />}
        />

        <Route  path = "/login" 
                component = {()=><Login />}

        />

        <Route  path = "/ios_backgroud" 
                component={()=><Home  isInstalled={this.state.isInstalled} 
                                      count={this.state.count}
                                      
                                      />}
        />

        <Route  path = {`/app_store`} 
                component={()=><Store handleInstall={this.handleInstall}
                                      // type = {this.state.type} 
                                      isInstalled = {this.state.isInstalled} 
                                />}
        />

        <Route path = "/splash" component={()=><Splash //type = {this.state.type}
                                                />}/>
        <Route path = "/disagree" component={Disagree}/>
        <Route path = "/main" component={()=><Main 
                                              handleAfter={this.handleAfter}
                                              isAfter = {this.state.isAfter}
                                              />}
                                              
                                              />
        <Route path = "/input" component={Input}/>
        <Route path = "/surveys" component={()=><Survey 
                                                        count={this.state.count}
                                                        addCount={this.addCount}
                                                        handleUnInstall={this.handleUnInstall}
                                                        handleUnAfter={this.handleUnAfter}
                                                />}/>
        <Route path = "/good_bye" component={GoodBye} />
        <Route path = "/between" component={Between} />
      </div>
    )
  }
}
