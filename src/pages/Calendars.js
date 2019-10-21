import React, { Component } from 'react'
import Calendar from '../components/Calendar'

function getCurrentDate(){

}

export default class Calendars extends Component {

    constructor(props){
        super(props)
        this.state = {
            // curYear: THIS_YEAR,
            // curMonth: THIS_MONTH
        }
    }

    render() {
        return (
            <div>
                I am Calendars!!!
                <Calendar name={this.state.curMonth-1} />
                <Calendar name={this.state.curMonth} />
                <Calendar name={this.state.curMonth+1} />
            </div>
        )
    }
}
