import React ,{Component} from 'react';
import {Resolutions,Services} from './db.js'



export default class ResolutionsForm extends Component {
     addResolution(event) {
        event.preventDefault();

         var text = this.refs.resolution.value.trim();
         if (text) {
             Meteor.call('addResolution', text, (error, data) => {
                 if (error) {
                     Bert.alert('please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
                 } else {
                     console.log("text"+text);
                     
                     this.refs.resolution.value = "";
                 }
             });
         }
     }


    render() {

        return(

            <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
                <input type="text"

                       ref="resolution"
                       placeholder="Add New Task To Your TodoList"/>
             </form>
        )
    }

}