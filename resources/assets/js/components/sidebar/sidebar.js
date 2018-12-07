import React, {Component} from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
import axios from 'axios';
import constants from '../constant';

class SideBar extends Component {

    constructor(prop) {
        super(prop);
        console.log('constants',constants);
        this.state = {
            showMenu: false,
            name:'',
            user:{},
            test_type:[]
        };

        this.showMenu = this.showMenu.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount(){
        axios.get(constants.APP_URL+'api/getuser')
            .then(json => {

                let data = json.data;
                console.log('data',data.test_type.split(','));
                let full_name = data.first_name+' '+data.last_name;

                this.setState({
                    name: full_name,
                    user: data,
                    test_type: data.test_type.split(',')
                });
            });
    }



    showMenu(event) {
        event.preventDefault();

        this.setState({
            showMenu: true
        });
    }

    logout(event) {
        event.preventDefault();
        console.log('prop',this.props);
        axios.post(constants.APP_URL+'logout')
            .then(json => {
                this.props.history.push(constants.APP_URL+'login');
                window.location.reload();
                // this.context.router.history.push(`/login`);
                // console.log(this.props.history,this.context);

            });
    }

    render() {
        var aside;
        // var test_type = this.state.user.test_type.split(',');

        var testList = this.state.test_type.map((name, index)=>{

            return <li key={index}>
                <Link to={constants.APP_URL+`onlinetests/`+name}>{name}</Link>
                </li>
                 ;

        });


        if(this.state.user.group_id==1){
            aside = <aside className="left-sidebar">

                <div className="scroll-sidebar">

                    <div className="user-profile">

                        <div className="profile-img">
                            <img src={"/assets/images/users/profile.png"} alt="user"/>

                        </div>

                        <div className="profile-text">
                            <h5>{this.state.name}</h5>
                            {/*<a href="" onClick={this.showMenu} className="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button"*/}
                               {/*aria-haspopup="true" aria-expanded="true">*/}
                                {/*<i className="mdi mdi-settings"></i>*/}
                            {/*</a>*/}

                            <a href="" onClick={this.logout} className="" data-toggle="tooltip" title="Logout"><i className="mdi mdi-power"></i></a>
                            {
                                this.state.showMenu
                                    ? (
                                        <div className="dropdown-menu animated flipInY">

                                            <a href="#" className="dropdown-item"><i className="ti-user"></i> My Profile</a>


                                            <div className="dropdown-divider"></div>

                                            <a href="#" className="dropdown-item"><i className="ti-settings"></i> Account Setting</a>

                                            <div className="dropdown-divider"></div>

                                            <a href="" href="" onClick={this.logout} className="dropdown-item">
                                                <i className="fa fa-power-off"></i>
                                                Logout
                                            </a>

                                        </div>
                                    )
                                    : (
                                        <div></div>
                                    )
                            }
                        </div>
                    </div>

                    <nav className="sidebar-nav">

                        <ul id="sidebarnav">

                            <li className="nav-devider"></li>

                            <li className="nav-small-cap">ADMIN</li>
                            <li>
                                <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-gauge"></i>
                                    <span className="hide-menu">Admin</span>
                                </a>
                                <ul aria-expanded="false" className="collapse">
                                    <li>
                                        <Link to={constants.APP_URL+"create-admin"}>Create Admin</Link>

                                    </li>
                                    <li>

                                        <Link to={constants.APP_URL+"admin"}>Update Admin</Link>
                                    </li>
                                </ul>
                            </li>

                            <li key='student'>
                                <a className="has-arrow waves-effect waves-dark student-sidebar" href="#" aria-expanded="false" >
                                    <i className="mdi mdi-bullseye"></i>
                                    <span className="hide-menu">Student</span>
                                </a>
                                <ul aria-expanded="false" className="collapse">

                                    <li>
                                        <Link to={constants.APP_URL+"create-student"}>Create Student</Link>
                                    </li>
                                    <li>
                                        <Link to={constants.APP_URL+"student"}>Update Student</Link>
                                    </li>

                                </ul>
                            </li>
                            <li><a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-email"></i>
                                <span className="hide-menu">Online Test</span></a>
                                <ul aria-expanded="false" className="student collapse">

                                    <li>
                                        <Link to={constants.APP_URL+"create-onlinetest"}>Create Test</Link>
                                    </li>
                                    <li>
                                        <Link to={constants.APP_URL+"onlinetest"}>Update Test</Link>
                                    </li>
                                </ul>
                            </li>

                            <li><a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false">
                            <i className="mdi mdi-email"></i>
                                <span className="hide-menu">Quiz</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li>
                                        <Link to={constants.APP_URL+"onlinetests-quiz"}>Solve Quiz</Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                    </nav>
                </div>

            </aside>
        }else{
            aside = <aside className="left-sidebar">

                <div className="scroll-sidebar">

                    <div className="user-profile">

                        <div className="profile-img">
                            <img src={"/assets/images/users/profile.png"} alt="user"/>

                        </div>

                        <div className="profile-text">
                            <h5>{this.state.name}</h5>
                            {/*<a href="" onClick={this.showMenu} className="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button"*/}
                               {/*aria-haspopup="true" aria-expanded="true">*/}
                                {/*<i className="mdi mdi-settings"></i>*/}
                            {/*</a>*/}

                            <a href="" onClick={this.logout}  className="" data-toggle="tooltip" title="Logout"><i className="mdi mdi-power"></i></a>
                            {
                                this.state.showMenu
                                    ? (
                                        <div className="dropdown-menu animated flipInY">

                                            <a href="#" className="dropdown-item"><i className="ti-user"></i> My Profile</a>


                                            <div className="dropdown-divider"></div>

                                            <a href="#" className="dropdown-item"><i className="ti-settings"></i> Account Setting</a>

                                            <div className="dropdown-divider"></div>

                                            <a href="" onClick={this.logout} className="dropdown-item">
                                                <i className="fa fa-power-off"></i> Logout</a>

                                        </div>
                                    )
                                    : (
                                        <div></div>
                                    )
                            }
                        </div>
                    </div>

                    <nav className="sidebar-nav">

                        <ul id="sidebarnav">

                            <li className="nav-devider"></li>

                            <li className="nav-small-cap">STUDENT</li>


                            <li><a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-email"></i>
                                <span className="hide-menu">Test</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    {testList}
                                </ul>
                            </li>

                        </ul>

                    </nav>
                </div>

            </aside>
        }
        return (
            aside

        );
    }
}

export default withRouter(SideBar);
