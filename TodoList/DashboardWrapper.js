import React from 'react'

import TrackerReact from 'meteor/ultimatejs:tracker-react'
import {Resolutions} from './db.js'
import {MainLayout} from "../client/layouts/MainLayout";

export  default  class DashboardWrapper extends TrackerReact(React.Component) {


    // setVar(){
    //     Session.set('Meteor.loginButtons.dropdownVisible',true);
    //
    // }
    render(){
        /*  let res = this.resolutions();
          if (res.length<1){
              return (<div>Loading</div>)
          }
          console.log(res);*/
        return(
            <div  >

                <div className="main-nav">
                <ul>
                    <li><a href="/"><i className="fa fa-dashboard"></i> <span>Dashboard</span></a></li>
                    <li><a href="/admin/users"><i className="fa fa-users"></i> <span>Users Management</span></a></li>
                </ul>

                </div>


                <div
                                         className="resolutionLoad"
                                         >
                <h1> About Dashboard</h1>
                <p> Welcome to my todolist detail</p>


            </div>
    </div>
        )


    }
}
