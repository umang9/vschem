import React, {Component} from 'react';
import quizStyle from './quiz.css';
import { HashLink as Link } from 'react-router-hash-link';
import axios from "axios";

class OnlineTestQuiz extends Component {

    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
        this.submitQuiz = this.submitQuiz.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.state = {isToggleOn: false};
        this.state = {questionNumber: '1'};
        this.state = {isSubmit: false};
        this.state = {questions : [] , submitted:false };

    }
    componentDidMount(){

        let url = '/api/taketest/'+this.props.match.params.test_id;
        axios.get(url)
            .then(json => {

                let data = json.data;
                console.log('',data);
                if(data.success) {
                    this.setState({
                        questions: data.data
                    });
                    var array = this.state.questions.map((question,index)=>{
                        return {question_id:question.question_id,selected_option:null};
                    });

                    this.setState({
                        questionOptions: array
                    });
                }else{
                    this.setState({
                        questions: []
                    });
                }
            });
        console.log('start date',new Date().toJSON().slice(0, 19).replace('T', ' '));
        this.setState({
            start_datetime: new Date().toJSON().slice(0, 19).replace('T', ' ')
        });

    }

    getQuestionOptionArray(){


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

        this.setState({
            end_datetime: new Date().toJSON().slice(0, 19).replace('T', ' ')
        });
        console.log('Thank You');
        let url = '/submitTest/'+this.props.match.params.test_id;
        // axios.post(url,{user_response:this.state.questionOptions})
        axios({
            method: 'post',
            url: url,
            data: {
                user_response: this.state.questionOptions,
                start_datetime: this.state.start_datetime,
                end_datetime: this.state.end_datetime,
            }
        })
            .then(json => {
                console.log(json);
                this.setState({
                    submitted: true
                });
                // this.props.history.push('/onlinetests/JEE')
            });
        // alert('Thank You!!!!');
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

    handleOptionChange(question_id,option_id){

        for (var i=0;i<this.state.questionOptions.length;i++){
            if(this.state.questionOptions[i].question_id==question_id){
                this.state.questionOptions[i].selected_option = option_id
                this.forceUpdate();
            }
        }
        console.log(this.state.questionOptions,question_id, option_id);
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
            {isActive:'disabled',step:'#step2',stepClassName:'step2',question_id:13,
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

        var stepsList = this.state.questions.map((question, index)=>{

            return <li role="presentation" className="nav-item" key={index}>
                <a href={'#step'+question.question_id} ref={'step'+question.question_id} data-toggle="tab" aria-controls="step1" onClick={()=>this.getActiveQuestion(index,this.state.questions.length)}
                   role="tab" title={"Step 1"} className={"nav-link"}>
                    <span className="round-tab">
                        {index+1}
                    </span>
                </a>
            </li>;

        });
        /**
         * Create Steps circles
         **/

        var questionsLists = this.state.questions.map((question, index)=> {

            var optionList;
            optionList = question.options.map(function(option,option_index){

                return <li key={option_index}>
                    {/*<input name={'radio_'+index} value={option.id} type='radio' id={'radio_'+option_index+index} onChange={(e)=>{console.log(e.target);}}/>*/}
                    <input name={'radio_'+index} value={option.id} type='radio' id={'radio_'+option_index+index} onChange={()=>this.handleOptionChange(question.question_id,option.id)}/>
                    <label htmlFor={'radio_'+option_index+index}>{option.text}</label>
                </li>
            }.bind(this));

            var button;

            if(this.state.isSubmit){
                button = <button type="button" disabled={this.state.submitted} onClick={()=>this.submitQuiz()} className="btn btn-md btn-info btn-common next-step next-button">
                    Submit
                </button>;
            }else{
                button = <button type="button" onClick={()=>this.handleClick(index,'step'+this.state.questions[index+1].question_id,this.state.questions.length)} className="btn btn-md btn-info btn-common next-step next-button">
                    Next
                </button>;
            }

            return <div className={"tab-pane text-center "+question.isActive} role="tabpanel" key={index} id={'step'+question.question_id}>
                <h2 className="text-md-left">{index+1}. Question</h2>

                {/*<h5 className="text-md-left">Category: {question.category}</h5>*/}

                <h3 className="text-md-left" dangerouslySetInnerHTML={{__html: question.text}}>
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
                            {!this.state.submitted ?
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
                                                    <p className="text-md-center"><b>Question {this.state.questionNumber} of {this.state.questions.length}</b></p>
                                                </div>
                                                <div className="tab-content">
                                                    {questionsLists}
                                                    <div className="clearfix"></div>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                                :
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex no-block">
                                            <h4 className="card-title">Test Report<br/>
                                                <small className="text-muted">Test summary report</small>
                                            </h4>

                                        </div>
                                    </div>
                                    <div className="bg-light p-20">
                                        <div className="d-flex">
                                            <div className="align-self-center">
                                                <h3 className="m-b-0">Test Name</h3>
                                                <small>Total Score</small>
                                            </div>
                                            <div className="ml-auto align-self-center">
                                                <h2 className="text-success">20</h2></div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover earning-box">
                                                <thead>
                                                <tr>
                                                    <th colSpan="2">Name</th>
                                                    <th>Priority</th>
                                                    <th>Earnings</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="active">
                                                    <td><span className="round"><img src="../assets/images/users/2.jpg"
                                                                                     alt="user" width="50"/></span></td>
                                                    <td>
                                                        <h6>Andrew</h6>
                                                        <small className="text-muted">Project Manager</small>
                                                    </td>
                                                    <td><span className="label label-info">Medium</span></td>
                                                    <td>$23.9K</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default OnlineTestQuiz;