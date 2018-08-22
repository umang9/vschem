import React, {Component} from 'react';
import Question from "./question";

class OnlineTestInfo extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="page-wrapper">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-themecolor">Online Test Info</h3>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    This is Admin card.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

class CreateTestInfo extends Component {

    constructor(props, context) {
        super(props, context)
        this.addMoreQuestions = this.addMoreQuestions.bind(this);
        this.state = {
            question_index:0,
            test_description:'',
            test_name:' '
        };
        this.child = React.createRef();
    }

    addMoreQuestions(){
        this.setState(()=>({
            question_index: this.state.question_index+1
        }));
        this.child.current.addMoreQuestion(this.state.question_index+1);
    }

    handleAddQuestionSet(e){
        e.preventDefault();
        console.log(this.state,this.child.current.state);
        alert('stored')
    }
    onChange(e){
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="page-wrapper">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-themecolor">Create Online Test</h3>
                    </div>

                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={this.handleAddQuestionSet}>
                                        <div className="form-body">
                                            <h3 className="card-title">Test Info</h3>
                                            <hr/>
                                            <div className="row p-t-20">
                                                <div className="col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <label className="control-label">Test Name</label>
                                                        <input type="text" id="test_name" name={'test_name'} value={this.state.test_name} onChange={this.onChange} className="form-control" placeholder="Enter Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-sm-12">
                                                    <div className="form-group">
                                                        <label className="control-label">Test Description</label>
                                                        <textarea type="text" id="test_description" name={'test_description'}  value={this.state.test_description} className="form-control"
                                                                  onChange={this.onChange} placeholder="Write Description"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className={'row col-md-12'}>
                                                <div className="col-md-8">
                                                    <h3 className="box-title">Question Sets</h3>
                                                </div>
                                                <div className="col-md-4">
                                                    <button type="button" className="btn btn-info btn-circle btn-lg" onClick={this.addMoreQuestions}><i className="fa fa-plus"></i></button>
                                                </div>

                                            </div>

                                            <hr/>
                                            <Question ref={this.child}/>
                                        </div>
                                        <div className="form-actions">
                                            <button type="submit" className="btn btn-success">Save
                                            </button>
                                            <button type="button" className="btn btn-info">Add New
                                            </button>
                                            <button type="button" className="btn btn-inverse">Cancel</button>
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

export { OnlineTestInfo,CreateTestInfo };
