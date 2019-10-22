import React, { Component } from 'react'
import Calendar from '../components/Calendar'

// function getCurrentDate(){

// }

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
                <Calendar name="pre" />
                <Calendar   name="cur" 
                            style={{
                                position: "relative",
                                width: "100%"
                            }} 
                />
                <Calendar name="fut" />
            </div>
        )
    }
}
