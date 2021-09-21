import React from 'react'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import ResolutionsForm from "./ResolutionsForm.js";
import ResolutionSingle from "./ResolutionSingle.js";
import TrackerReact from 'meteor/ultimatejs:tracker-react'
import {Resolutions,Services} from './db.js'


export  default  class ResolutionsWrapper extends TrackerReact(React.Component) {
constructor() {
    super();
    // this.state = {
    //     // subscription : {
    //     //     resolutions : Meteor.subscribe("userResolutions")
    //     // }
    // }
}
    // componentWillUnmount(){
    // this.state.subscription.resolutions.stop();
    // }

    resolutions(){

        return  Resolutions.find().fetch();

    }


    render(){
         //let res = this.resolutions();
         //let res = this.resolutions();
        if (   !Meteor.userId() ){
            return (<h1>Not Authorized..</h1>)
        }


        return(


<div>
            <h1> My TodoList </h1>
             < ResolutionsForm/>


                        <ul     className="resolutions">
                        {this.resolutions().map(    (resolution) => {return  <ResolutionSingle key={resolution._id} resolution={resolution }/> })}

                        </ul>
            </div>




        )


}
}