import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

// export const QuestionType = {
//     SINGLE: "single", // string[]
//     MULTI: "multi",   // string[] 
//     TEXT: "text",     // undefined
//     BUNDLE_SINGLE: "bundle_single", // string[][]
// };

export default class Question {
    constructor(surveyId, surveyType, question, answer) {
        this.id = surveyId; // number
        this.type = surveyType; // number (QuestionType)
        this.title = question; // string
        this.data = answer; // any
    }

    // Generate Question[] by given dataset.
    static fromList(questionList) {
        const result = [];

        for (var rawObject of questionList) {
            const questionObj = new Question(
                rawObject.surveyId,
                rawObject.surveyType,
                rawObject.question,
                rawObject.answer
            );
            result.push(questionObj);
        }

        return result;
    }

    toJSX(onSelect, index) {
        return (
            <div key={index} style={{marginBottom: "40px"}} className="question" id={"question_" + this.id}>
                <div className="question-title">
                    <h3> {this.id}. {this.title} </h3>
                </div>
                <br/>
                <div className="question-form"> 
                    {this.getForm(onSelect)}
                </div>
            </div>
        )
    }

    makeRadio = (onSelect) => {
        let answers = this.data.map((answer)=>{
            return(<FormControlLabel 
                key={answer}
                value={answer} 
                control={<Radio />} 
                label={answer}
                onChange={onSelect(this.id, answer)}
            />)
        })
        return answers
    }

    makeCheckBox = () =>{
        let answers = this.data.map((answer)=>{
            return (<FormControlLabel
                key = {answer}
                control={<Checkbox checked={false} 
                //onChange={handleChange('gilad')} 
                />}
                label={answer}
            />)
        })

        return answers
    }

    getForm(onSelect) {
        // console.log(this.type)
        // onSelect(this.id, "Hello from " + this.id);
        //return <div> Hello from {this.id} </div>;
        switch (this.type) {
            case "single":{
                return (
                    <FormControl>
                        <RadioGroup>
                            {this.makeRadio(onSelect)}
                        </RadioGroup>
                    </FormControl>
                    )
            }
            
            case "double":{
                return (
                    <FormControl>
                        <FormGroup>
                            {this.makeCheckBox()}
                        </FormGroup>
                    </FormControl>
                )
            }

            case "text":

                return(<TextField
                    id="outlined-multiline-static"
                    label="Answer"
                    multiline
                    rows="4"
                    style={{width:'90%'}}
                    margin="normal"
                    variant="outlined"
                />)
            default:
                return(<div>Error Question</div>)
        }
    }
}