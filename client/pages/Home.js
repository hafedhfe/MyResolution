import React, {Component} from 'react';
import { render } from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
export  default class Home extends TrackerReact(Component){
    render(){
    return (
        
        <div className="billboard">
            <h2>Topics with TodoList</h2>
            <h3>By Tunis PLM Services</h3>

        </div>
    );
    }
}

