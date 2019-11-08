import React, { Component } from 'react'
import Chart from '../resources/chartSample.png'
import Chart2 from '../resources/chart2.png'

import moment from 'moment'

export default class Graphs extends Component {

    constructor(props){
        super(props)
        this.state = {
            cur: moment(),
        }
    }

    currentDay = (sub) => {
        console.log(this.state.cur.subtract(0, 'days').format("DD"))
        return this.state.cur.add(sub, 'days').format("DD");
    }

    render() {
        return (
            <>
            <div className = "graph_background">
                <p style={{
                    fontSize: "1.2rem",
                    textAlign: "center",
                    fontStyle:"normal",
                    color:"#56569D",
                    marginTop: "0.0rem",
                    marginBottom:"0.3rem"
                }}>{this.state.cur.format("MMMM DD")}</p>
                <hr
                    style={{
                        background: "linear-gradient(90deg, rgba(105, 121, 248, 0.86) 11.19%, rgba(255, 107, 131, 0.86) 100%)",
                        height: 2,
                        marginTop: "0.3rem",
                        marginBottom:"0.6rem"
                    }}
                />
                <img src={Chart} width="100%"></img>
                <table
                    style={{
                        textAlign: "center",
                        fontSize: "0.5rem",
                        marginLeft: "6%",
                        marginRight: "3%",
                        color: "#8D9AA9",
                        fontWeight: "500"
                    }}
                ><thead><tr>
                    <td
                        style={{
                            color:"#F7637B"
                        }}
                    >{this.currentDay(-22)}</td>
                    <td
                        style={{
                            color:"#F7637B"
                        }}
                    >{this.currentDay(2)}</td>
                    <td
                        style={{
                            color:"#F7637B"
                        }}
                    >{this.currentDay(2)}</td>
                    <td>{this.currentDay(2)}</td>
                    <td>{this.currentDay(2)}</td>
                    <td
                        style={{
                            color:"#27AE60"
                        }}
                    >{this.currentDay(2)}</td>
                    <td
                        style={{
                            color:"#27AE60"
                        }}
                    >{this.currentDay(2)}</td>
                    <td
                        style={{
                            color:"#27AE60"
                        }}
                    >{this.currentDay(2)}</td>
                    <td
                        style={{
                            color:"#27AE60"
                        }}
                    >{this.currentDay(2)}</td>
                    <td>{this.currentDay(2)}</td>
                    <td>{this.currentDay(2)}</td>
                    <td>{this.currentDay(2)}</td>
                </tr></thead></table>
                <img src={Chart2} width="100%"/>
            </div>
            </>
        )
    }
}
