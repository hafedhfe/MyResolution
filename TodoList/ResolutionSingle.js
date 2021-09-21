import React ,{Component} from 'react';
import {Resolutions} from './db.js'

export default class ResolutionSingle extends Component {
    toggleChecked( ){
         Meteor.call("toggleResolution",this.props.resolution )
    }

    deleteResolution() {


        Meteor.call("deleteResolution", this.props.resolution, (error, data) => {
            if (error) {
                Bert.alert('you cant delete only yours', 'danger', 'fixed-top', 'fa-frown-o');
            }
        });
    }
    render() {

        const resolutionClass = this.props.resolution.completed ? "checked" : "";
        const status = this.props.resolution.completed ? <span className="completed" >Completed</span> : "";
        const owner= ((Meteor.userId() !== this.props.resolution.user)&&(!Roles.userIsInRole( Meteor.userId(), 'Super User'))) ? "disabled" : "btn-cancel";



        return (
            <div  >
                <table>
                    <tr >
                      
                      <td>

                        <input
                            type="checkbox"
                            readOnly={true}
                            checked={this.props.resolution.completed}
                            onClick={this.toggleChecked.bind(this)}
                        /></td>
                        <td><a href={"/todolist/"+this.props.resolution._id}>{this.props.resolution.text} </a>
                        {status}</td>
                        <td> Created by : {this.props.resolution.username}</td>
                        <td>

                        <button className={owner}
                                onClick={this.deleteResolution.bind(this)}
                        >
                            &times;
                        </button></td>

                      </tr>
                </table>

            </div>
        );
    }


}