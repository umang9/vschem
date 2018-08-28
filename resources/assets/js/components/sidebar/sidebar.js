import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import axios from 'axios';

class SideBar extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
            name:'',
            user:{}
        };

        this.showMenu = this.showMenu.bind(this);
    }

    componentDidMount(){
        axios.get('/api/getuser')
            .then(json => {

                let data = json.data;
                console.log('data',data);
                let full_name = data.first_name+' '+data.last_name;

                this.setState({
                    name: full_name,
                    user: data
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

        axios.post('/logout')
            .then(json => {
                this.props.history.push('/login')
            });
    }

    render() {
        var aside;
        if(this.state.user.group_id==1){
            aside = <aside className="left-sidebar">

                <div className="scroll-sidebar">

                    <div className="user-profile">

                        <div className="profile-img">
                            <img src="../assets/images/users/profile.png" alt="user"/>
                            <div className="notify setpos">
                                <span className="heartbit"></span> <span className="point"></span>
                            </div>
                        </div>

                        <div className="profile-text">
                            <h5>{this.state.name}</h5>
                            <a href="" onClick={this.showMenu} className="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button"
                               aria-haspopup="true" aria-expanded="true">
                                <i className="mdi mdi-settings"></i>
                            </a>

                            <a href="pages-login.html"  className="" data-toggle="tooltip" title="Logout"><i className="mdi mdi-power"></i></a>
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
                                    <span className="hide-menu">Admin

                                    </span>
                                </a>
                                <ul aria-expanded="false" className="collapse">
                                    <li>
                                        <Link to="/create-admin">Create Admin</Link>

                                    </li>
                                    <li>

                                        <Link to="/admin">Update Admin</Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-bullseye"></i>
                                    <span className="hide-menu">Student</span></a>
                                <ul aria-expanded="false" className="collapse">

                                    <li>
                                        <Link to="/create-student">Create Student</Link>
                                    </li>
                                    <li>
                                        <Link to="/student">Update Student</Link>
                                    </li>

                                </ul>
                            </li>
                            <li><a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-email"></i>
                                <span className="hide-menu">Online Test</span></a>
                                <ul aria-expanded="false" className="collapse">

                                    <li>
                                        <Link to="/create-onlinetest">Create Test</Link>
                                    </li>
                                    <li>
                                        <Link to="/onlinetest">Update Test</Link>
                                    </li>
                                </ul>
                            </li>

                            <li><a className="has-arrow waves-effect waves-dark" href="#" aria-expanded="false"><i className="mdi mdi-email"></i>
                                <span className="hide-menu">Quiz</span></a>
                                <ul aria-expanded="false" className="collapse">
                                    <li>
                                        <Link to="/onlinetests-quiz">Solve Quiz</Link>
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
                            <img src="../assets/images/users/profile.png" alt="user"/>
                            <div className="notify setpos">
                                <span className="heartbit"></span> <span className="point"></span>
                            </div>
                        </div>

                        <div className="profile-text">
                            <h5>{this.state.name}</h5>
                            <a href="" onClick={this.showMenu} className="dropdown-toggle u-dropdown" data-toggle="dropdown" role="button"
                               aria-haspopup="true" aria-expanded="true">
                                <i className="mdi mdi-settings"></i>
                            </a>

                            <a href="pages-login.html"  className="" data-toggle="tooltip" title="Logout"><i className="mdi mdi-power"></i></a>
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
                                    <li>
                                        {/*<Link to="/onlinetests/cet">CET</Link>*/}
                                        <NavLink
                                            to="onlinetests/cet"
                                        >CET</NavLink>
                                    </li>
                                    <li>
                                        <Link to="/onlinetests/JEE">JEE</Link>
                                    </li>
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

export default SideBar;
