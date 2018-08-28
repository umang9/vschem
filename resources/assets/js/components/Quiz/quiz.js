import React, {Component} from 'react';
import quizStyle from './quiz.css';
import { HashLink as Link } from 'react-router-hash-link';

class OnlineTestQuiz extends Component {

    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.submitQuiz = this.submitQuiz.bind(this);
        this.state = {isToggleOn: false};
        this.state = {questionNumber: '1'};
        this.state = {isSubmit: false};
    }

    handleClick(nextIndex,ele,total) {
        let nextStep = this.refs[ele];
        nextStep.click();
        console.log(nextIndex,total);
        if(nextIndex+2<=total-1){
            this.setState(() => ({
                isSubmit: false
            }));
        }else{
            this.setState(() => ({
                isSubmit: true
            }));
        }

    }

    checkboxHandler() {
        console.log('in checkboxHandler click',this);
    }

    submitQuiz() {
        console.log('Thank You');
        alert('Thank You!!!!');
    }

    getActiveQuestion(index,totalQuestions) {
        if(index<totalQuestions-1){
            this.setState(() => ({
                isSubmit: false
            }));
        }else{
            this.setState(() => ({
                isSubmit: true
            }));
        }
        this.setState(() => ({
            questionNumber: index+1
        }));
    }

    render() {
        /**
         * Create Steps circles
         **/

        var questions = [
            {isActive:'active',step:'#step1',stepClassName:'step1',question_id:1,
                text:"If the vectors AB 3i + 4k and AC = 5i – 2j + 4k are the sides of a triangle ABC, then the length of the median through A is",
                options:[{id:1,answer:'33'},{id:2,answer:'18'},{id:3,answer:'72'},{id:4,answer:'42'}],
                category:'Maths'
            },
            {isActive:'disabled',step:'#step2',stepClassName:'step2',question_id:2,
                text:"If the vectors AB 3i + 4k and AC = 5i – 2j + 4k are the sides of a triangle ABC, then the length of the median through A is",
                options:[{id:1,answer:'33'},{id:2,answer:'18'},{id:3,answer:'72'},{id:4,answer:'42'}],
                category:'Maths1'
            },
            {isActive:'disabled',step:'#step3',stepClassName:'step3',question_id:3,
                text:"If the vectors AB 3i + 4k and AC = 5i – 2j + 4k are the sides of a triangle ABC, then the length of the median through A is",
                options:[{id:1,answer:'33'},{id:2,answer:'18'},{id:3,answer:'72'},{id:4,answer:'42'}],
                category:'Maths2'
            },
            {isActive:'disabled',step:'#step4',stepClassName:'step4',question_id:4,
                text:"If the vectors AB 3i + 4k and AC = 5i – 2j + 4k are the sides of a triangle ABC, then the length of the median through A is",
                options:[{id:3,answer:'Yes'},{id:1,answer:'No'},{id:2,answer:'Not Sure'}],
                category:'Science'
            },
        ];

        var stepsList = questions.map((name, index)=>{

            return <li role="presentation" className="nav-item" key={index}>
                <a href={name.step} ref={name.stepClassName}   data-toggle="tab" aria-controls="step1" onClick={()=>this.getActiveQuestion(index,questions.length)}
                   role="tab" title="Step 1" className={"nav-link"}>
                    <span className="round-tab">
                        {index+1}
                    </span>
                </a>
            </li>;

        });
        /**
         * Create Steps circles
         **/



        var questionsLists = questions.map((question, index)=> {
            // console.log(question.options);
            var optionList;
            optionList = question.options.map(function(option,option_index){

                return <li key={option_index}>
                    {/*<input name={"group_"+option.id+index} type="radio" id={"radio_"+option_index+index} className="custom-control-input"  />*/}
                    <input name={'radio_'+index} value='value1' type='radio' id={'radio_'+option_index+index} onChange={(e)=>{console.log(e.target);}}/>
                    <label htmlFor={'radio_'+option_index+index}>{option.answer}</label>
                </li>
            });

            var button;

            if(this.state.isSubmit){
                button = <button type="button" onClick={()=>this.submitQuiz()} className="btn btn-md btn-info btn-common next-step next-button">
                    Submit
                </button>;
            }else{
                button = <button type="button" onClick={()=>this.handleClick(index,questions[index+1].stepClassName,questions.length)} className="btn btn-md btn-info btn-common next-step next-button">
                    Next
                </button>;
            }

            return <div className={"tab-pane text-center "+question.isActive} role="tabpanel" key={index} id={question.stepClassName}>
                <h2 className="text-md-left">{index+1}. Question</h2>

                <h5 className="text-md-left">Category: {question.category}</h5>

                <h3 className="text-md-left"> {question.text}
                </h3>

                <div className="row form-group">

                    <ul className="questionList">
                        {optionList}
                    </ul>
                </div>
                <ul className="list-inline text-md-right">
                    <li>
                        {button}
                        {/*<Link to="#step2" className="btn btn-md btn-info btn-common next-step next-button">Next</Link>*/}
                    </li>
                </ul>
            </div>;

        });



        return (
            <div className="page-wrapper">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-themecolor">Online Quiz</h3>
                    </div>

                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">

                                    <form className="form cf {!this.state.isToggleOn ? 'setHidden' : ''}">
                                        <div className="wizard">

                                            <div className="wizard-inner">
                                                <div>
                                                    <b>Time Limit :</b> '00:00:00'
                                                </div>
                                                <ul className="nav nav-tabs" role="tablist">
                                                    {stepsList}
                                                </ul>
                                            </div>
                                            <div className={"questionOf"}>
                                                <p className="text-md-center"><b>Question {this.state.questionNumber} of 4</b></p>
                                            </div>
                                            <div className="tab-content">
                                                {questionsLists}
                                                <div className="clearfix"></div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default OnlineTestQuiz;