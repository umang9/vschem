import React, {Component} from 'react';
import axios from 'axios'


class Instruction extends Component {

    constructor(prop){
        super(prop);
        this.state = {test_id:this.props.match.params.test_id};
    }

    render() {
        return (
            <div className="page-wrapper">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-themecolor">Instructions</h3>
                    </div>

                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                {/*<div className="card-header">*/}
                                    {/*Featured*/}
                                {/*</div>*/}
                                <div className="card-body">
                                    <h4 className="card-title">Please follow below instructions</h4>
                                    {/*<p className="card-text">*/}
                                        <ul>

                                            <li>The test will start exactly after click on start test button.</li>
                                            <li>The test will be of 1 hrs duration.</li>
                                            <li>The test paper will be consisting questions of Physics, Chemistry & Mathematics and all questions will have equal weightage.</li>
                                            <li>The test paper will be consisting questions of Physics, Chemistry & Mathematics and all questions will have equal weightage.</li>
                                            <li>There will be three parts in the question paper consisting of Physics, Chemistry and Mathematics having equal weightage.</li>
                                            <li>Each question is allotted 4 (four) marks for the correct response. ¼ (one fourth) marks
                                                i.e. one mark will be deducted for indicating incorrect response of each question.
                                                No deduction from the total score will be made if no response is indicated for a question.</li>
                                            <li>There is only one correct response for each question out of four responses given.</li>
                                        {/*All calculations/writing work are to be done only in the rough sheet provided at the centre and on completion of the test candidates must hand over the rough sheets to the invigilator on duty in the Room/Hall.*/}
                                        {/*During the examination time, the invigilator will check Admit Card of the candidate to satisfy himself/herself about the identity of each candidate.*/}
                                        {/*The candidates are governed by all Rules and Regulations of the Board with regard to their conduct in the Examination Hall. All cases of unfair means will be dealt with as per rules.*/}
                                        {/*The candidates must sign on the Attendance Sheet at the appropriate place.*/}
                                        </ul>
                                    {/*</p>*/}
                                    <a href={'/taketest/'+this.state.test_id} className="btn btn-primary">Start Test</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Instruction;
