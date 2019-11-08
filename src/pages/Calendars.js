import React, { Component } from 'react'
import moment from 'moment'
import Calendar from '../components/Calendar'

export default class Calendars extends Component {

    constructor(props){
        super(props)
        this.state = {
            pre: moment().subtract(1, 'month'),
            cur: moment(),
            fut: moment().add(1, 'month'),
            isAfter: props.isAfter
        }
    }

    render() {
        return (
            <div>
                <Calendar dateContext={this.state.pre} isAfter={this.state.isAfter} />
                <Calendar dateContext={this.state.cur} isAfter={this.state.isAfter} handleAfter={this.props.handleAfter}/>
                <Calendar dateContext={this.state.fut} isAfter={this.state.isAfter} />
            </div>
        )
    }
}
