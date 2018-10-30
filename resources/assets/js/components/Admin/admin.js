import React, {Component} from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import Select from 'react-select';


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
            date_of_birth:'',
            email:'',
            name:'',
            contact:'',
            group_id:'',
            is_active:'',
            test_type:'',
            is_jee_selected:false,
            is_neet_selected:false,
            selectedOption:[],
            user_type:'',
            is_admin:true
        }
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitUser = this.submitUser.bind(this);
    }

    onChange(e){
        console.log('e',e.target.value);
        if(e.target.name=='user_type'){
            let user_type_ = e.target.value=='2'?false:true;
            this.setState({
                is_admin: user_type_
            })
        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleChange(selectedOption){
        
        const target = selectedOption.target;
        const value = target.checked === true ? false : true;
        const name = target.name;
        this.setState({
            is_jee_selected: value
        });
        this.forceUpdate();
    }

    submitUser(){
        console.log('Submit User',this.state);
    }

    render(){
        const options = [{label: "any", value:1}, {label:"Two", value:2}];    
        return (
            <div className="page-wrapper">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-themecolor">Create User</h3>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card card-outline-info">
                                <div className="card-header">
                                    <h4 className="m-b-0 text-white">Add User</h4>
                                </div>
                                <div className="card-body">
                                    <form className={'form-material'}>
                                        <div className="form-body">
                                            <h3 className="card-title">User Info</h3>
                                            <hr/>
                                                <div className="row p-t-20">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="control-label">First Name</label>
                                                            <input type="text" id="first_name" value={this.state.first_name}
                                                                   className="form-control" onChange={this.onChange} name={'first_name'}
                                                                   placeholder="Enter First Name"/>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="control-label">Last Name</label>
                                                            <input type="text" id="last_name" name={'last_name'}
                                                                   value={this.state.last_name}
                                                                   onChange={this.onChange}
                                                                   className="form-control form-control-danger"
                                                                   placeholder="Enter Last Name"/>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row p-t-20">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="control-label">Email</label>
                                                            <input type="email" id="email" value={this.state.email} name={'email'}
                                                                   className="form-control" onChange={this.onChange}
                                                                   placeholder="Enter Email"/>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="control-label">Contact No.</label>
                                                            <input type="number" id="contact"
                                                                   value={this.state.contact} name={'contact'}
                                                                   onChange={this.onChange}
                                                                   className="form-control form-control-danger"
                                                                   placeholder="Enter Contact No."/>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row p-t-20">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="control-label">User Type:</label>
                                                            <select name={'user_type'} 
                                                                value={this.state.user_type} onChange={this.onChange} 
                                                                className="form-control custom-select">
                                                                    <option value=''>--Select User Type--</option>
                                                                    <option value='1'>Admin</option>
                                                                    <option value='2'>Student</option>
                                                                </select>

                                                        </div>
                                                    </div>
                                                
                                                </div>

                                                
                                            {!this.state.is_admin ?
                                                <div>
                                                    <h3 className="box-title m-t-40" >Test Type</h3>
                                                    <hr/>
                                                    <div className="row">
                                                        <div className="col-md-12 ">
                                                            <div className="demo-checkbox">
                                                                <input type="checkbox" id="md_checkbox_21" name={'is_jee_selected'}
                                                                className="filled-in chk-col-teal" defaultChecked={this.state.is_jee_selected} 
                                                                onChange={this.handleChange}
                                                                />
                                                                <label htmlFor="md_checkbox_21">JEE</label>
                                                                <input type="checkbox" id="md_checkbox_22" name={'is_neet_selected'}
                                                                    className="filled-in chk-col-teal" 
                                                                defaultChecked={this.state.is_neet_selected}
                                                                onChange={this.handleChange}
                                                                />
                                                                <label htmlFor="md_checkbox_22">NEET</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            :null
                                            }
                                                   
                                        </div>
                                        <div className="form-actions">
                                            <button type="button" className="btn btn-success"onClick={()=>this.submitUser()}><i
                                                className="fa fa-check" 
                                                ></i> Save
                                            </button>
                                            
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
