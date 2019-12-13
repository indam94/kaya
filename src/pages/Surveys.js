import React, { Component } from 'react'
import Question from '../components/Question'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import QuestionListE from './ExperimentJson.json'
import QuestionListC from './ControlJson.json'

const questionList = QuestionListE
const questionListC = QuestionListC
// [
//     {
//         surveyId : 0,
//         surveyType : "single",
//         question : 'How accurate do you think the predictions of such an app can be?',
//         answer : [
//             'Very inaccurate', 'Inaccurate', 'Neutral', 'Accurate', 'Very accurate'
//         ]
//     },
//     {
//         surveyId : 1,
//         type : QUESTION_TYPE.DOUBLE,
//         title : 'In general, how likely would you trust this app?',
//         data : [
//             'Very inaccurate', 'Inaccurate'
//         ]
//     },
//     {
//         surveyId : 2,
//         type : QUESTION_TYPE.TEXT,
//         title : 'If you learn that the app uses only your period dates to predict your fertile window how likely would you track temperature?'
//     },
//     {
//         surveyId : 3,
//         type : QUESTION_TYPE.CUSTOM,
//         title : 'If you learn that the app uses only your period dates to predict your fertile window, how likely would you track ver cervical mucus?'
//     },
//     {
//         surveyId : 4,
//         type : QUESTION_TYPE.TEXT,
//         title : 'If you learn that the app uses only your period dates to predict your fertile window, how likely would you track symptoms?'
//     },
//     {
//         surveyId : 5,
//         type : QUESTION_TYPE.SINGLE,
//         title : 'If you learn that the app uses only your period dates to predict your fertile window, how likely would you track mood?'
//     },
//     {
//         surveyId : 6,
//         type : QUESTION_TYPE.SINGLE,
//         title : 'How do you think this app calculates the predictions (i.e., period days, ovulation, fertile window)?'
//     },
//     {
//         surveyId : 7,
//         type : QUESTION_TYPE.SINGLE,
//         title : 'What do you think [copy the main AI sentence] means?'
//     },
//     {
//         surveyId : 8,
//         type : QUESTION_TYPE.SINGLE,
//         title : 'What indicators do you think this app uses to calculate your predictions?'
//     },
// ];

export default class Surveys extends Component {

    constructor(props){
        super(props)
        if(localStorage.getItem('type')==='A'){
            this.questionList = Question.fromList(questionList);
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

    callApi = async () => {
        if(this.props.count === 0){
          const response = await fetch("https://kayas.herokuapp.com/api/requestSurvey/control");
          if (response.status !== 200) {
            console.error(`Response from ${response.url} is failed with ${response.status}`);
            return response;
          }
          const jsonResponse = await response.json();
          console.log(jsonResponse)

          return response;
        }
      
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
            result.push((offset * questionCount) + i);
        }
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
                    this.state.offset !== questionList.length/5 - 1 ? 
                    <Button color="primary" variant="contained" onClick={this.onNext} style={{float: "right"}}>next</Button> : null
                }
                {
                    this.state.offset === questionList.length/5 - 1 ?
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
