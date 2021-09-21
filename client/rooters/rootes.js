/*
// Home Page
import React from 'react';
import {mount}  from 'react-mounter';
import ResolutionsWrapper from "./resolutions/ResolutionsWrapper";
import {MainLayout} from "./pages/MainLayout";

FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

// Home Page
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render("AppLayout", {main: "Dashboard"});
    }
});
let adminRoutes= FlowRouter.group({
    prefix: '/admin',
    name: 'admin'
});
FlowRouter.route('/admin/users', {
    name: 'users',
    action() {
        BlazeLayout.render("AppLayout", {main: "Users"});
    }
});/!*
 FlowRouter.route('/mylist', {
    name: 'mylist',
    action() {
        BlazeLayout.render("HomeLayout", {main : "ResolutionsWrapper"});
    }
});*!/
 FlowRouter.route('/mylist',{
    action(){
         mount( MainLayout ,{
            content:(<ResolutionsWrapper />)
        })

    }


}
 );
*/
import React from 'react';
import { render } from 'react-dom';
import Blaze from 'meteor/gadicc:blaze-react-component';
import {
    Router,
    Route,
} from 'react-router';
import { createBrowserHistory } from 'history';
import Home from '../pages/Home';
  import TodoList from "../../TodoList/ResolutionsWrapper";
 import dashboard from "../../TodoList/DashboardWrapper";
import verifyEmail from "../account/verifyEmail";
 import resetPassword from '../account/reset-password.js';
 import SimpleExample from '../pages/Contact'
const mainLayout = () => (
    <div>
        <Blaze template="MainLayout" />
    </div>
);
const contact = () => (
    <div>
       <Blaze template="contact" />
   </div>
 );
const users = () => (
    <div>
        <Blaze template="Users" />
    </div>
);
// const resetPassword = () => (
//     <div>
//         <Blaze template="ResetPassword" />
//     </div>
// );


const browserHistory = createBrowserHistory();




Meteor.startup(() => {
    render(
        <Router history={browserHistory}>
            <Route exact path={["/" ,"/Contact","/Todo","/Dashboard","/admin/users","/reset-password/:token","/reset-password","/verify-email/:token"]}  component={mainLayout}/>
            <Route exact path="/Contact"  component={SimpleExample}/>
            <Route exact path="/"  component={Home}/>
            <Route exact path="/Todo"  component={TodoList}/>
            <Route exact path="/Dashboard"  component={dashboard}/>
            <Route exact path="/admin/users"  component={users}/>
            <Route exact path="/reset-password/:token"  component={resetPassword}/>
            <Route exact path="/verify-email/:token"  component={verifyEmail}/>


        </Router>
        , document.getElementById('home'));
});
//
// Router.route('/reset-password', {name: 'resetPassword'});
//
// Router.route('/reset-password/:token', function () {
//     this.render('resetPassword');
// });