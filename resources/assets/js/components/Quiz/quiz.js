import React, {Component} from 'react';
import quizStyle from './quiz.css';
import { HashLink as Link } from 'react-router-hash-link';
import axios from "axios";
import { css } from 'react-emotion';
import ClipLoader from 'react-spinners/ClipLoader';
import Countdown from 'react-countdown-now';
// import { constants } from 'fs';
import constant from '../constant';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
 
`;

// Random component
const Completionist = () => <span>You are good to go!</span>;
// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <span>{hours}:{minutes}:{seconds}</span>;
    }
};

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
        this.state = {questions : [] ,
            submitted:false,
            total_score:'',
            is_correct:'',
            is_incorrect:'',
            unmarked :'',
            total:'',
            score:'',
            submittedTest:false,
            loading:false,
            isClipLoader:true
        };

    }
    componentDidMount(){

        let url = constant.APP_URL+'/api/taketest/'+this.props.match.params.test_id;
        axios.get(url)
            .then(json => {

                let data = json.data;

                if(data.success) {
                    this.setState({
                        questions: data.data,
                        isClipLoader : false,
                        questionNumber : 1
                    });
                    var array = this.state.questions.map((question,index)=>{
                        return {question_id:question.question_id,selected_option:null};
                    });

                    this.setState({
                        questionOptions: array
                    });
                }else{
                    this.setState({
                        questions: [],
                        isClipLoader : false
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
            end_datetime: new Date().toJSON().slice(0, 19).replace('T', ' '),
            submittedTest:true,
            loading:true
        });
        
        let url = constant.APP_URL+'submitTest/'+this.props.match.params.test_id;
        // axios.post(url,{user_response:this.state.questionOptions})
        axios({
            method: 'post',
            url: url,
            data: {
                user_response: this.state.questionOptions,
                start_time: this.state.start_datetime,
                end_time: new Date().toJSON().slice(0, 19).replace('T', ' '),
            }
        })
            .then(json => {
                console.log(json);
                let data=json.data;
                if(data.success){
                    let test_response = data.data[0];
                    this.setState({
                        submitted: true,
                        total_score:test_response.total_score,
                        is_correct:test_response.is_correct,
                        is_incorrect:test_response.is_incorrect,
                        unmarked :test_response.unmarked,
                        total:test_response.total,
                        score:test_response.score,
                        loading:false
                    });
                }else{

                }

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
                this.state.questionOptions[i].selected_option = option_id;
                this.forceUpdate();
            }
        }
        for (var i=0;i<this.state.questions.length;i++){
            if(this.state.questions[i].question_id==question_id){
                this.state.questions[i].is_selected_option = true;
                this.forceUpdate();
            }
        }

        console.log(this.state.questionOptions[0],this.state.questions, option_id);
    }

    render() {


        var stepsList = this.state.questions.map((question, index)=>{

            return <li role="presentation" className="nav-item" key={index}>
                <a href={'#step'+question.question_id} ref={'step'+question.question_id} data-toggle="tab" aria-controls="step1" onClick={()=>this.getActiveQuestion(index,this.state.questions.length)}
                   role="tab" title={"Step 1"} className={"nav-link"}>
                    <span className="round-tab" style={
                        { 'border': question.is_selected_option && question.is_selected_option!==null ? '2px solid green': '','color': question.is_selected_option && question.is_selected_option!==null ? 'green': ''}
                    }>
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
                button = <button type="button" disabled={this.state.submittedTest} onClick={()=>this.submitQuiz()} className="btn btn-md btn-info btn-common next-step next-button">
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
                            {!this.state.submitted && !this.state.loading ?
                                <div className="card">
                                    { this.state.questions.length>0 ?
                                        <div className="card-body">

                                            <form className="form cf {!this.state.isToggleOn ? 'setHidden' : ''}">
                                                <div className="wizard">

                                                    <div className="wizard-inner">
                                                        <div>
                                                            <b>Time Limit :</b>
                                                            <Countdown date={Date.now() + 3600000}
                                                                       renderer={renderer}/>

                                                        </div>
                                                        <ul className="nav nav-tabs" role="tablist">
                                                            {stepsList}
                                                        </ul>
                                                    </div>
                                                    <div className={"questionOf"}>
                                                        <p className="text-md-center">
                                                            <b>Question {this.state.questionNumber} of {this.state.questions.length}</b>
                                                        </p>
                                                    </div>
                                                    <div className="tab-content">
                                                        {questionsLists}
                                                        <div className="clearfix"></div>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>
                                        :

                                        <div className="card-body">
                                            {!this.state.isClipLoader ?
                                                <div>
                                                    <h3 className="text-info"><i
                                                        className="fa fa-exclamation-circle"></i> Questions not
                                                        Available.</h3>
                                                    Test don't have enough questions. No need to proceed further.
                                                    <div className="row col-md-12">
                                                        <button className={'btn btn-primary'} onClick={() => {
                                                            this.props.history.go(-2);
                                                        }}>Go Back
                                                        </button>
                                                    </div>
                                                </div>
                                                :
                                                <div className='sweet-loading' style={{'textAlign': 'center'}}>
                                                    <ClipLoader
                                                        className={override}
                                                        sizeUnit={"px"}
                                                        size={50}
                                                        color={'#123abc'}
                                                        loading={this.state.isClipLoader}
                                                    />
                                                </div>
                                            }
                                        </div>
                                    }
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
                                    {!this.state.loading ?
                                        <div>
                                            <div className="bg-light p-20">
                                                <div className="d-flex">
                                                    <div className="align-self-center">
                                                        <h3 className="m-b-0">Total Score</h3>
                                                    </div>
                                                    <div className="ml-auto align-self-center">
                                                        <h2 className="text-success">{this.state.score}</h2></div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-hover earning-box">

                                                        <tbody>
                                                        <tr className="active">

                                                            <td>
                                                                <h6>Correct Answers</h6>
                                                            </td>
                                                            <td>{this.state.is_correct}</td>
                                                        </tr>
                                                        <tr className="active">

                                                            <td>
                                                                <h6>In Correct Answers</h6>
                                                            </td>
                                                            <td>{this.state.is_incorrect}</td>
                                                        </tr>
                                                        <tr className="active">

                                                            <td>
                                                                <h6>Unmarked</h6>
                                                            </td>
                                                            <td>{this.state.unmarked}</td>
                                                        </tr>
                                                        <tr className="active">

                                                            <td>
                                                                <h6>Total Questions</h6>
                                                            </td>
                                                            <td>{this.state.total}</td>
                                                        </tr>

                                                        <tr className="active">

                                                            <td>
                                                                <h6>Total Score</h6>
                                                            </td>
                                                            <td>{this.state.total_score}</td>
                                                        </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="bg-light p-20">
                                                <div className="d-flex">
                                                    <div className="align-self-center">

                                                    </div>
                                                    <div className="ml-auto align-self-center">
                                                        <a href={"/onlinetests/JEE"} className={'btn btn-primary'}>End
                                                            Test</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    :
                                        <div className='sweet-loading' style={{'textAlign':'center'}}>
                                        <ClipLoader
                                        className={override}
                                        sizeUnit={"px"}
                                        size={50}
                                        color={'#123abc'}
                                        loading={this.state.loading}
                                        />
                                        </div>
                                    }
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