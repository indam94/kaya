import React, { Component } from 'react'
import moment from 'moment'
import './Calendar.css'

export default class Calendar extends Component {

    constructor(props){
        super(props);

        this.width = props.width || "100%";
        this.style = props.style || {};
        this.style.width = this.width;

        this.state = {
            dateContext: props.dateContext,
            today: moment(),
            showMonthPopup: false,
            showYearPopup: false
        }   

    }

    weekdays = moment.weekdays();
    weekdaysShort = moment.weekdaysShort();
    months = moment.months();

    year = () => {
        return this.state.dateContext.format("Y");
    }
    month = () => {
        return this.state.dateContext.format("MMMM");
    }
    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }
    currentDate = () => {
        return this.state.dateContext.get("date");
    }
    currentDay = () => {
        return this.state.dateContext.format("D");
    }

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d');

        return firstDay
    }

    MonthNav = () => {
        return (
            <span className="label-month">
                {this.month()}{"   "}{this.year()}
            </span>
        )
    }

    render() {

        let weekdays = this.weekdaysShort.map((day) => {
            return (
                <td key={day} className="week-day">{day}</td>
            )
        })

        let blanks = [];
        for(let i = 0; i < this.firstDayOfMonth(); i++){
            blanks.push(<td key={i * 80} className="emptySlot">{""}</td>)
        }

        let daysInMonth = [];
        for(let d = 1; d <= this.daysInMonth(); d++){
            let className = ( (d == this.currentDay() && this.month() == moment().format("MMMM")) ? "day current-day" : "day")
            let classNameDiv = ((d == this.currentDay() && this.month() == moment().format("MMMM"))  ? "current-day-border" : "day-border")
            daysInMonth.push(
                <td key={d} className={className} >
                    <div className="helper">
                    <div className={classNameDiv}>
                        <span>{d}</span>
                    </div>
                    </div>
                </td>
            )
        }

        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if((i % 7) !== 0){
                cells.push(row);
            }
            else{
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if(i === totalSlots.length -1){
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });

        let trElems = rows.map((d,i) => {
            return (
                <tr key={i*100}>{d}</tr>
            )
        });

        return (
            <>
                <div className="calendar-container" style={this.style}>
                    {/* <h2>Calendar {name}</h2> */}
                    <table className="calendar">
                        <thead>
                            <tr className="calendar-header">
                                <td colSpan="7">
                                    <this.MonthNav />
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {weekdays}
                            </tr>
                            {trElems}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
