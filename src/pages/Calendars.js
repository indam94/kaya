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
        }
    }

    render() {
        return (
            <div>
                I am Calendars!!!
                <Calendar dateContext={this.state.pre} />
                <Calendar dateContext={this.state.cur}/>
                <Calendar dateContext={this.state.fut} />
            </div>
        )
    }
}
