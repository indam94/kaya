import React, { Component } from 'react'
import Question from '../components/Question'

const QUESTION_TYPE = {
    SINGLE: 0,
    DOUBLE: 1,
    TEXT: 2,
    CUSTOM: 3,
};

const questionList = [
    {
        surveyId : 0,
        type : QUESTION_TYPE.SINGLE,
        title : 'How accurate do you think the predictions of such an app can be?',
        data : [
            'Very inaccurate', 'Inaccurate', 'Neutral', 'Accurate', 'Very accurate'
        ]
    },
    {
        surveyId : 1,
        type : QUESTION_TYPE.DOUBLE,
        title : 'In general, how likely would you trust this app?',
        data : [
            'Very inaccurate', 'Inaccurate'
        ]
    },
    {
        surveyId : 2,
        type : QUESTION_TYPE.TEXT,
        title : 'If you learn that the app uses only your period dates to predict your fertile window how likely would you track temperature?'
    },
    {
        surveyId : 3,
        type : QUESTION_TYPE.CUSTOM,
        title : 'If you learn that the app uses only your period dates to predict your fertile window, how likely would you track ver cervical mucus?'
    },
    {
        surveyId : 4,
        type : QUESTION_TYPE.SINGLE,
        title : 'If you learn that the app uses only your period dates to predict your fertile window, how likely would you track symptoms?'
    },
    {
        surveyId : 5,
        type : QUESTION_TYPE.SINGLE,
        title : 'If you learn that the app uses only your period dates to predict your fertile window, how likely would you track mood?'
    },
    {
        surveyId : 6,
        type : QUESTION_TYPE.SINGLE,
        title : 'How do you think this app calculates the predictions (i.e., period days, ovulation, fertile window)?'
    },
    {
        surveyId : 7,
        type : QUESTION_TYPE.SINGLE,
        title : 'What do you think [copy the main AI sentence] means?'
    },
    {
        surveyId : 8,
        type : QUESTION_TYPE.SINGLE,
        title : 'What indicators do you think this app uses to calculate your predictions?'
    },
];

export default class Surveys extends Component {

    constructor(props){
        super(props)
        this.questionList = Question.fromList(questionList);

        let questionCount = questionList.length;
        const surveyAnswer = []
        while (questionCount--) surveyAnswer.push(undefined);

        this.state = {
            surveyId: 0,
            surveyAnswer,
        };
        console.log(this.state.surveyId)
    }

    onSelect(surveyId, value) {
        const surveyAnswer = this.state.surveyAnswer;
        surveyAnswer[surveyId] = value;
        this.setState({surveyAnswer});
    }

    onPrev = () => {
        this.setState({
            surveyId: this.state.surveyId - 1 
        })
    }

    onNext = () => {
        this.setState({
            surveyId : this.state.surveyId + 1
        })
    }

    onSub = () =>{
        console.log("submit")
    }

    render() {
        const CurrentQuestion = this.questionList[this.state.surveyId].toJSX(this.onSelect);
        return (
            <div style={{position:"relative", width:'100%', height:'100vh'}}>
                {CurrentQuestion}
                {this.state.surveyId !== 0 ?
                    <button onClick={this.onPrev} style={{bottom:10, left:10, position:"absolute"}}>prev</button> : null
                }
                {this.state.surveyId !== questionList.length-1 ? 
                    <button onClick={this.onNext} style={{bottom:10, right:10, position:"absolute"}}>next</button> : 
                    <button onClick={this.onSub} style={{bottom:10, right:10, position:"absolute"}}>submit</button>
                }
            </div>
        )
    }
}
