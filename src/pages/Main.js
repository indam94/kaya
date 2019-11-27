import React, { Component } from 'react'
import Calendars from './Calendars'
import Graphs from './Graphs'

import CircleLeft from '../resources/top_circles.png'
import CircleRight from '../resources/top_circles2.png'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

export default class Main extends Component {

    constructor(props){
        super(props)
        this.state = {
            value:0,
            isAfter:props.isAfter
        }
        console.log(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event, newValue) =>{

        this.setState({
            value: newValue
        })
    }

    render() {
        return (
            <div className="main_screen">
                <img src={CircleLeft} alt="" className="decorator_left"/>
                <img src={CircleRight} alt="" className="decorator_right"/>
                <Tabs   centered
                        indicatorColor="secondary"
                        textColor="secondary"
                        value={this.state.value}
                        onChange={this.handleChange}
                        className = "main-nav-bar"
                >
                    <Tab label="Calendar">
                    </Tab>
                    {this.state.isAfter ? <Tab label="Chart"/> : <Tab label="Chart" disabled/>}
                </Tabs>
                {this.state.value === 0 ? <Calendars isAfter={this.state.isAfter} handleAfter={this.props.handleAfter}/> : <Graphs/>}
            </div>
        )
    }
}
