import React, { Component } from 'react'

export default class Calendar extends Component {
    render() {

        const {name} = this.props;

        return (
            <div style={{
                background:"#ffffff",
                color:"#1A051D",
                textAlign:"center"
                //8CA5BA
            }}>
                {/* For year % month (Ex) : 2019 October */}
                I am {name} calendar
                {/* For week (Ex) : mon / tue~~ */}
                
            </div>
        )
    }
}
