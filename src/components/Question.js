import React from 'react'
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

export const QuestionType = {
    SINGLE: "single", // string[]
    MULTI: "multi",   // string[] 
    TEXT: "text",     // undefined
    BUNDLE_SINGLE: "bundle_single", // string[][]
};

export default class Question {
    constructor(surveyId, type, title, data) {
        this.id = surveyId; // number
        this.type = type; // number (QuestionType)
        this.title = title; // string
        this.data = data; // any
    }

    // Generate Question[] by given dataset.
    static fromList(questionList) {
        const result = [];

        for (var rawObject of questionList) {
            const question = new Question(
                rawObject.surveyId,
                rawObject.type,
                rawObject.title,
                rawObject.data
            );
            result.push(question);
        }

        return result;
    }

    toJSX(onSelect) {
        return (
            <div className="question" id={"question_" + this.id}>
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

    makeRadio = () => {
        let answers = this.data.map((answer)=>{
            return(<FormControlLabel 
                key={answer}
                value={answer} 
                control={<Radio />} 
                label={answer}
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
        console.log(this.type)
        // onSelect(this.id, "Hello from " + this.id);
        //return <div> Hello from {this.id} </div>;
        switch (this.type) {
            case 0:{
                return (
                    <FormControl>
                        <RadioGroup>
                            {this.makeRadio()}
                        </RadioGroup>
                    </FormControl>
                    )
            }
            
            case 1:{
                return (
                    <FormControl>
                        <FormGroup>
                            {this.makeCheckBox()}
                        </FormGroup>
                    </FormControl>
                )
            }

            case 2:

                return(<TextField
                    id="outlined-multiline-static"
                    label="Answer"
                    multiline
                    rows="4"
                    style={{width:'90%'}}
                    margin="normal"
                    variant="outlined"
                />)
            case QuestionType.BUNDLE_SINGLE:

            break;
            default:
                return(<div>Error Question</div>)
        }
    }
}