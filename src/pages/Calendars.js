import React, { Component } from 'react'
import moment from 'moment'
import Calendar from '../components/Calendar'

export default class Calendars extends Component {

    constructor(props){
        super(props)
        this.state = {
            // curYear: THIS_YEAR,
            // curMonth: THIS_MONTH
            pre: moment().subtract(1, 'month'),
            cur: moment(),
            fut: moment().add(1, 'month'),
            isAfter: false
        }
    }

    handleChange = () =>{
        this.setState({
            isAfter:true
        })
    }

    render() {
        return (
            <div>
                <Calendar dateContext={this.state.pre} isAfter={this.isAfter}/>
                <Calendar dateContext={this.state.cur} isAfter={this.isAfter}/>
                <Calendar dateContext={this.state.fut} isAfter={this.isAfter}/>
            </div>
        )
    }
}
