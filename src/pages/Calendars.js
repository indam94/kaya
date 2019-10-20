import React, { Component } from 'react'
import Calendar from '../components/Calendar'

export default class Calendars extends Component {
    render() {
        return (
            <div>
                I am Calendars!!
                <Calendar name="pre" />
                <Calendar name="cur" />
                <Calendar name="fut" />
            </div>
        )
    }
}
