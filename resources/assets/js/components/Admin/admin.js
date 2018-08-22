import React, {Component} from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'


class Admin extends Component {
    constructor(prop){
        super(prop);
    }
    render() {
        let data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
                name: 'Jason Maurer',
                age: 23,
            }
        },];
        const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
        }, {
            Header: 'Age',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
        }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
        }];

        return (
            <div className="page-wrapper">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-themecolor">Admin</h3>
                    </div>

                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <ReactTable
                                        data={data}
                                        columns={columns}
                                        showPagination= {true}
                                        showPaginationTop= {false}
                                        showPaginationBottom= {true}
                                        defaultPageSize={10}
                                        showPageJump={true}
                                        filterAll={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

class CreateAdmin extends Component {

    constructor(prop){
        super(prop);
        this.state = {
            first_name:'',
            last_name:'',
            gender:'',
            date_of_birth:''
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <div className="page-wrapper">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-themecolor">Create Admin</h3>
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
                                    <h4 className="m-b-0 text-white">Add Admin</h4>
                                </div>
                                <div className="card-body">
                                    <form action="#">
                                        <div className="form-body">
                                            <h3 className="card-title">Person Info</h3>
                                            <hr/>
                                                <div className="row p-t-20">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="control-label">First Name</label>
                                                            <input type="text" id="first_name" value={this.state.first_name}
                                                                   className="form-control" onChange={()=>this.onChange}
                                                                   placeholder="John doe"/>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group has-danger">
                                                            <label className="control-label">Last Name</label>
                                                            <input type="text" id="lastName"
                                                                   value={this.state.last_name}
                                                                   onChange={()=>this.onChange}
                                                                   className="form-control form-control-danger"
                                                                   placeholder="12n"/>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group has-success">
                                                            <label className="control-label">Gender</label>
                                                            <select className="form-control custom-select"
                                                                    value={this.state.gender} name={'gender'}
                                                                    onChange={()=>this.onChange}>
                                                                <option value="">Male</option>
                                                                <option value="">Female</option>
                                                            </select>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="control-label">Date of Birth</label>
                                                            <input type="date" className="form-control" name={'date_of_birth'}
                                                                   value={this.state.date_of_birth}
                                                                   onChange={()=>this.onChange}
                                                                   placeholder="dd/mm/yyyy"/>
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

export { Admin,CreateAdmin };
