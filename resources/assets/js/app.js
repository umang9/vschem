import ReactDOM from "react-dom";

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// require('./components/Example');
import React, {Component} from 'react';
import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar';
import DashBoard from './components/dashboard/dashboard';
import User from "./components/user/user";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Admin,CreateAdmin} from "./components/Admin/admin";
import { Student,CreateStudent} from "./components/Student/student";
import { OnlineTestInfo,CreateTestInfo } from "./components/OnlineTest/onlinetest";
import OnlineTestQuiz from "./components/Quiz/quiz";
import Test from "./components/Test/test";
import Instruction from "./components/Test/instruction";
import ReviewOnlineTest from "./components/ReviewTest/reviewtest";

// import './index.css';

const routes = [
    { path: '/', exact: true, name: 'Home', component: DashBoard },
    { path: '/dashboard', exact:true,name: 'Dashboard', component: DashBoard },
    { path: '/user', exact: true, name: 'User', component: User },
    { path: '/admin', exact: true, name: 'User', component: Admin },
    { path: '/onlinetest', exact: true, name: 'Test Info', component: OnlineTestInfo },
    { path: '/create-onlinetest', exact: true, name: 'Test Info', component: CreateTestInfo },
    { path: '/create-student', exact: true, name: 'Admin', component: CreateStudent },
    { path: '/student', exact: true, name: 'Admin', component: Student },
    { path: '/create-admin', exact: true, name: 'Admin', component: CreateAdmin },
    { path: '/admin/:id', exact: true, name: 'Student Details', component: User },
    { path: '/taketest/:test_id', exact: true, name: 'Online Test Quiz', component: OnlineTestQuiz },
    { path: '/reviewtest/:test_id', exact: true, name: 'Review Online Test', component: ReviewOnlineTest },
    { path: '/onlinetests/:test', exact: true, name: 'Online Test - CET', component: Test },
    { path: '/onlinetest/instruction/:test_id', exact: true, name: 'Online Test - Instruction', component: Instruction },
];

class App extends Component {
    render() {
        return (
            <div id="main-wrapper">
                <Header/>

                <SideBar/>

                {/**
                 * This will render component html
                 **/}
                <Switch>
                {routes.map((route, index) => (
                    // You can render a <Route> in as many places
                    // as you want in your app. It will render along
                    // with any other <Route>s that also match the URL.
                    // So, a sidebar or breadcrumbs or anything else
                    // that requires you to render multiple things
                    // in multiple places at the same URL is nothing
                    // more than multiple <Route>s.
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                        prop={route}
                    />

                ))}
                </Switch>
            </div>
        );
    }
}


ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root'));

export default App;

