import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import axios from "axios";

class Header extends Component {
    componentDidMount(){

    }

    render() {
        return (

            <header className="topbar">
                <nav className="navbar top-navbar navbar-expand-md navbar-light">

                    <div className="navbar-header">

                        <a className="navbar-brand" href="/">
                            <b>
                                <img src="" alt="" className="dark-logo"/>
                                <img src="" alt="" className="light-logo"/>
                            </b>
                            <span>
                                <img src="" alt="" className="dark-logo"/>
                                <img src="" className="light-logo" alt=""/>
                            </span>
                        </a>
                    </div>
                    <div className="navbar-collapse">

                        <ul className="navbar-nav mr-auto mt-md-0">

                            <li className="nav-item"><a
                                className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"
                                href="javascript:void(0)"><i className="mdi mdi-menu"/></a></li>
                            <li className="nav-item m-l-10"><a
                                className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark"
                                href="javascript:void(0)"><i className="ti-menu"/></a></li>

                        </ul>

                        <ul className="navbar-nav my-lg-0">

                            <li className="nav-item hidden-sm-down search-box"><a
                                className="nav-link hidden-sm-down text-muted waves-effect waves-dark"
                                href="javascript:void(0)"><i className="ti-search"/></a>
                                {/*<form className="app-search">*/}
                                    {/*<input type="text" className="form-control" placeholder="Search & enter"/>*/}
                                    {/*<a className="srh-btn"><i className="ti-close"/></a>*/}
                                {/*</form>*/}
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" href=""
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img
                                    src="/assets/images/users/1.jpg" alt="user" className="profile-pic"/></a>
                                <div className="dropdown-menu dropdown-menu-right scale-up">
                                    <ul className="dropdown-user">
                                        <li>
                                            <div className="dw-user-box">
                                                <div className="u-img"><img src="../assets/images/users/1.jpg"
                                                                            alt="user"/></div>
                                                <div className="u-text">
                                                    <h4>Steave Jobs</h4>
                                                    <p className="text-muted">test@gmail.com</p><a
                                                    href="pages-profile.html"
                                                    className="btn btn-rounded btn-danger btn-sm">View Profile</a></div>
                                            </div>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#"><i className="ti-user"></i> My Profile</a></li>

                                        <li role="separator" className="divider"></li>
                                        <li><a href="#"><i className="ti-settings"></i> Account Setting</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="#"><i className="fa fa-power-off"></i> Logout</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
