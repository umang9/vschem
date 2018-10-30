import React, {Component} from 'react';

class Student extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-themecolor">Admin</h3>
                    </div>

                    <div>
                        <button
                            className="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10">
                            <i className="ti-settings text-white"></i>
                        </button>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    This is Admin card block.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

class CreateStudent extends Component {
    render(){
        return (
            <div className="page-wrapper">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-themecolor">Create Student</h3>
                    </div>

                    <div>
                        <button
                            className="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10">
                            <i className="ti-settings text-white"></i>
                        </button>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card card-outline-info">
                                <div className="card-header">
                                    <h4 className="m-b-0 text-white">Add Student</h4>
                                </div>
                                <div className="card-body">
                                    <form action="#">
                                        <div className="form-body">
                                            <h3 className="card-title">Student Info</h3>
                                            <hr/>
                                            <div className="row p-t-20">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="control-label">First Name</label>
                                                        <input type="text" id="firstName" className="form-control"
                                                               placeholder="John doe"/>
                                                        <small className="form-control-feedback"> This is inline
                                                            help
                                                        </small></div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group has-danger">
                                                        <label className="control-label">Last Name</label>
                                                        <input type="text" id="lastName"
                                                               className="form-control form-control-danger"
                                                               placeholder="12n"/>
                                                        <small className="form-control-feedback"> This field has
                                                            error.
                                                        </small></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group has-success">
                                                        <label className="control-label">Gender</label>
                                                        <select className="form-control custom-select">
                                                            <option value="">Male</option>
                                                            <option value="">Female</option>
                                                        </select>
                                                        <small className="form-control-feedback"> Select your
                                                            gender
                                                        </small>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="control-label">Date of Birth</label>
                                                        <input type="date" className="form-control"
                                                               placeholder="dd/mm/yyyy"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="control-label">Category</label>
                                                        <select className="form-control custom-select"
                                                                data-placeholder="Choose a Category" tabIndex="1">
                                                            <option value="Category 1">Category 1</option>
                                                            <option value="Category 2">Category 2</option>
                                                            <option value="Category 3">Category 5</option>
                                                            <option value="Category 4">Category 4</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="control-label">Membership</label>
                                                        <div className="m-b-10">
                                                            <label className="custom-control custom-radio">
                                                                <input id="radio1" name="radio" type="radio"
                                                                       className="custom-control-input"/>
                                                                <span
                                                                    className="custom-control-label">Free</span>
                                                            </label>
                                                            <label className="custom-control custom-radio">
                                                                <input id="radio2" name="radio" type="radio"
                                                                       className="custom-control-input"/>
                                                                <span
                                                                    className="custom-control-label">Paid</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="box-title m-t-40">Address</h3>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <div className="form-group">
                                                        <label>Street</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>City</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>State</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Post Code</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Country</label>
                                                        <select className="form-control custom-select">
                                                            <option>--Select your Country--</option>
                                                            <option>India</option>
                                                            <option>Sri Lanka</option>
                                                            <option>USA</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="form-actions">
                                            <button type="submit" className="btn btn-success"><i
                                                className="fa fa-check"></i> Save
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
        )
    }
}

export {Student,CreateStudent};
