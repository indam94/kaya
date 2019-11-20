import React, { Component } from 'react'
import Chart from '../resources/chartSample.png'
import Chart2 from '../resources/chart2.png'
import Button from '@material-ui/core/Button';
import SurveyIcon from '@material-ui/icons/Assignment'
import {Link} from 'react-router-dom'
import InstructModal from '../components/Modal'
import moment from 'moment'

import questionMark from '../resources/question_mark.png'

export default class Graphs extends Component {

    constructor(props){
        super(props)
        this.state = {
            cur: moment(),
            isOpen: true,
        }
        localStorage.setItem('Information',"This is the graph screen. Please, analyze the graph and then press the [Survey] button. Pay special attention to temperature and other displayed data, particularly the fertile window.")
    }

    componentDidMount(){
        localStorage.setItem('Information',"This is the graph screen. Please, analyze the graph and then press the [Survey] button. Pay special attention to temperature and other displayed data, particularly the fertile window.")
    }

    currentDay = (sub) => {
        //console.log(this.state.cur.subtract(0, 'days').format("DD"))
        return this.state.cur.add(sub, 'days').format("DD");
    }

    handleOpen = () => {
        this.setState({
            isOpen:true
        })
        console.log("Open")
    };

    render() {
        return (
            <>
            <div className = "instruction">
            <button onClick={this.handleOpen}
            >
                <img src={questionMark} alt = "instruct"/>
            </button>
            </div>
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
                <img src={Chart} width="100%" alt="main_charts"></img>
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
                <img src={Chart2} width="100%" alt="sub_chart"/>
                <br/><br/>
                <div className="text-center">
                <Link to = "/surveys">
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<SurveyIcon />}
                >
                Survey
                </Button>
                </Link>
                </div>
                
                <InstructModal isOpen={this.state.isOpen}/>
                <br/>
                <br/>
            </div>
            </>
        )
    }
}
