import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SideBar extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
    }

    componentDidMount(){
        axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
            .then(json => console.log(json))
    }


    showMenu(event) {
        event.preventDefault();

        this.setState({
            showMenu: true
        });
    }

    render() {
        return (
            <aside className="left-sidebar">

                <div className="scroll-sidebar">

                    <div className="user-profile">

                        <div className="profile-img">
                            <img src="../assets/images/users/profile.png" alt="user"/>
                            <div className="notify setpos">
                                <span className="heartbit"></span> <span className="point"></span>
                            </div>
                        </div>

                        <div className="profile-text">
                            <h5>Markarn Doe</h5>
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

                                <a href="login.html" className="dropdown-item"><i className="fa fa-power-off"></i> Logout</a>

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

        );
    }
}

export default SideBar;
