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
            isAfter: props.isAfter || false
        }
    }

    componentDidMount(){
        if(!this.state.isAfter){
            localStorage.setItem('Information', "This is the calendar screen. Please, click on today's date.")
        }else{
            localStorage.setItem('Information', "Please, access the graph screen")
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
