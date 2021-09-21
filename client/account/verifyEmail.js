import React, { Component } from 'react'
import TrackerReact from "meteor/ultimatejs:tracker-react";
import {Meteor} from "meteor/meteor";
export default class VerifyEmailPage extends TrackerReact(Component) {



    render () {
        Meteor.call('retrieveUserIdEmail', function(error, result) {
            // 'result' is the method return value
            Meteor.call('removeUserIdEmail');
        });
        return (
            <div className="container">
                <h3 className="emailPassProp">Your email has been verified, you can login</h3>
            </div>
        )
    }
}
