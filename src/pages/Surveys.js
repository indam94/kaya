import React, { Component } from 'react'
import Question from '../components/Question'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import QuestionListE from './ExperimentJson.json'
import QuestionListC from './ControlJson.json'

const questionListE = QuestionListE
const questionListC = QuestionListC

export default class Surveys extends Component {

    constructor(props){
        super(props)
        if(localStorage.getItem('type') === 'A'){
            this.questionList = Question.fromList(questionListE);
        }
        else{
            this.questionList = Question.fromList(questionListC);
        }
        
        let questionCount = this.questionList.length;

        const surveyAnswer = []
        while (questionCount--) surveyAnswer.push(undefined);

        this.state = {
            offset: 0,
            surveyAnswer
        };
        console.log(this.state.surveyAnswer);

        this.onSelect = this.onSelect.bind(this)
    }

    componentDidMount = async () => {
        const response = await this.callApi();
        console.log(response)
    }
    //request survey questions from survey
    callApi = async () => {

        const response = await fetch("https://kayas.herokuapp.com/api/requestSurvey/control");
        if (response.status !== 200) {
        console.error(`Response from ${response.url} is failed with ${response.status}`);
        return response;
        }
        const jsonResponse = await response.json();
        console.log(jsonResponse)

        return response;

    
    }

    onSelect (surveyId, value) {
        // const surveyAnswer = this.state.surveyAnswer;
        // surveyAnswer[surveyId] = value;
        // this.setState({surveyAnswer});
        console.log(surveyId)
        console.log(value)
    }

    onPrev = () => {
        this.setState({
            offset: this.state.offset - 1 
        })
    }

    onNext = () => {
        this.setState({
            offset : this.state.offset + 1
        })
    }

    onSub = () =>{
        console.log("submit")
        this.props.handleUnInstall()
        this.props.handleUnAfter()
        this.props.addCount()
    }

    getQuestionArray = (offset, questionCount) => {
        const result = [];
        for (var i = 0; i < questionCount; i++) {
            if((offset * questionCount) + i >= this.questionList.length){break}
            result.push((offset * questionCount) + i);
        }
        console.log(this.state.offset)
        return result;
    }

    render() {
        const offset = this.state.offset;
        const questionArray = this.getQuestionArray(offset, 5);
        return (
            <div style={{margin: "30px 0", position:"relative", width:'100%', height:'100vh', zIndex:12, background:"#ffffff"}}>
                {questionArray.map((v, i) => this.questionList[v].toJSX(this.onSelect, i))}
                <div style={{marginBottom:"30px"}}>

                {
                    this.state.offset !== 0 ?
                    <Button color="primary" variant="contained" onClick={this.onPrev} style={{float: "left"}}>prev</Button> : null
                }
                {
                    this.state.offset !== (this.questionList.length/5) - 1 ? 
                    <Button color="primary" variant="contained" onClick={this.onNext} style={{float: "right"}}>next</Button> : null
                }
                {
                    this.state.offset === (this.questionList.length/5) - 1 ?
                    this.props.count === 0 ? 
                        <Link to = "/between">
                            <Button variant="contained" color = "secondary" onClick={()=>this.onSub()} style={{float: "right"}}>submit</Button>
                        </Link> : 
                        <Link to = "/good_bye">
                            <Button variant="contained" color = "secondary" onClick={()=>this.onSub()} style={{float: "right"}}>finish</Button>
                        </Link>
                    
                    : null
                }

                </div>
                
                {/* // TODO: Need to change formula for calculating submit button existance */}
            </div>
        )
    }
}
