import React, { Component } from 'react'
// if you want to change chart
// First, you put new image for chart to resource folder
// Second, you have to change below code for new image name
import Chart from '../resources/chartSample.png'
import Chart2 from '../resources/chart2.png'
import Button from '@material-ui/core/Button';
import SurveyIcon from '@material-ui/icons/Assignment'
import {Link} from 'react-router-dom'
// import InstructModal from '../components/Modal'
import Modal from '@material-ui/core/Modal';
import moment from 'moment'

import questionMark from '../resources/question_mark.png'


export default class Graphs extends Component {

    constructor(props){
        super(props)
        this.state = {
            cur: moment(),
            isOpen: true,
        }
        this.handleOpen = this.handleOpen.bind(this)
        localStorage.setItem('Information',"This is the graph screen. Please, analyze the graph and then press the [Survey] button. Pay special attention to temperature and other displayed data, particularly the fertile window.")
    }

    currentDay = (sub) => {
        return this.state.cur.add(sub, 'days').format("DD");
    }

    handleOpen = () => {
        this.setState({
            isOpen:true
        }, console.log(this.state.isOpen))
    };

    handleClose = () => {
        this.setState({
            isOpen: false
        }, console.log(this.state.isOpen))
    }

    render() {
        return (
            <>
            <div className = "instruction">
            <button onClick={this.handleOpen}>
                <img src={questionMark} alt = "instruct"/>
            </button>
            </div>

            <Modal 
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.isOpen}
            onClose={this.handleClose}>
            <div className="paper">
                <div style={
                    {
                        position: 'absolute',
                        width: 320,
                        top:"50%",
                        left:"50%",
                        transform:"translate(-50%, -50%)",
                        backgroundColor: 'white',
                        border: '2px solid #000',
                        padding: '1rem'
                    }
                    }>
                    <h2 id="simple-modal-title">Information</h2>
                    <p id="simple-modal-description">
                    {localStorage.getItem('Information')}
                    </p>
                    <button onClick = {this.handleClose}>Close</button>
                </div>
                </div>
            
            </Modal>
            
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
                {/* This row is Chart Image */}
                <img src={Chart} width="100%" alt="main_charts"></img>
                <table
                    style={{
                        textAlign: "center",
                        fontSize: "0.5rem",
                        marginLeft: "6%",
                        marginRight: "3%",
                        color: "#8D9AA9",
                        fontWeight: "500",
                        width: "90%"
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
                
                
                <br/>
                <br/>

            </div>
            </>
        )
    }
}
