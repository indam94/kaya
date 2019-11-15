import React, { Component } from 'react'
import moment from 'moment'
import Calendar from '../components/Calendar'
import Progress from '../components/ProgressBar'

export default class Calendars extends Component {

    constructor(props){
        super(props)
        this.state = {
            pre: moment().subtract(1, 'month'),
            cur: moment(),
            fut: moment().add(1, 'month'),
            isAfter: props.isAfter || false,
            showProgress:false,
        }
    }

    componentDidMount(){
        if(!this.state.isAfter){
            localStorage.setItem('Information', "This is the calendar screen. Please, click on today's date.")
        }else{
            localStorage.setItem('Information', "Please, access the graph screen")
            if(localStorage.getItem('type') === 'A'){
                this.setState({
                    showProgress: true
                })
                setTimeout(() => {
                    this.setState({
                        showProgress: false
                    })
                }, 5000);   //splash time second * 1000
            }
            
        }
    }

    render() {
        return (
            <div>
                {this.state.showProgress ? <Progress/> : null}
                
                <Calendar dateContext={this.state.pre} isAfter={this.state.isAfter} />
                <Calendar dateContext={this.state.cur} isAfter={this.state.isAfter} handleAfter={this.props.handleAfter}/>
                <Calendar dateContext={this.state.fut} isAfter={this.state.isAfter} />
            </div>
        )
    }
}
