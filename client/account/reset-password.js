//
// // if (Accounts._resetPasswordToken) {
// //     Session.set('resetPassword', Accounts._resetPasswordToken);
// // }console.log('tttt'+Meteor.user().emails[0].address )
//
// if (Accounts._resetPasswordToken) {
//         Session.set('resetPassword', Accounts._resetPasswordToken);
//     }
//  Template.ResetPassword.helpers({
//     resetPassword: function(){
//         return Session.get('resetPassword');
//     }
// });
// Template.ResetPassword.events({
//     //resend verification link function
//     'click .send-reset-password-link' ( event, template ) {
//         Meteor.call( 'sendResetPasswordLink', ( error, response ) => {
//             if ( error ) {
//                 Bert.alert({
//                     title: 'Error',
//                     message: error.reason,
//                     type: 'danger'
//                 });
//             } else {
//                 let email = Meteor.user().emails[ 0 ].address;
//                 console.log("hrere")
//                 Bert.alert({
//                     title: 'Reset Password Link sended',
//                     message: 'Please check your mails.',
//                     type: 'info'
//                 });
//             }
//         });
//     }
// });
// Template.ResetPassword.events({
//     'submit #resetPasswordForm': function(e, t) {
//         e.preventDefault();
//
//         var resetPasswordForm = $(e.currentTarget),
//             password = resetPasswordForm.find('#resetPasswordPassword').val(),
//             passwordConfirm = resetPasswordForm.find('#resetPasswordPasswordConfirm').val();
//
//           if (password && (password === passwordConfirm)) {
//       //  Accounts.changePassword(password, passwordConfirm, function(err) {
//              Accounts.resetPassword(password,passwordConfirm, function(err) {
//                 if (err) {
//
//                     console.log('We are sorry but something went wrong.',err);
//
//                 } else {
//                     console.log('Your password has been changed. Welcome back!');
//                     Session.set('resetPassword', null);
//                 }
//             });
//
//         }
//         return false;
//     }
//
// });



import React, {Component} from 'react';
import {Button, form} from 'react-bootstrap';
 import {Meteor} from "meteor/meteor";
import {Resolutions, ToolEmail, ToolPassword} from "../../TodoList/db";

export default  class forgotPassword extends Component{
    constructor(props){
        super(props);

    }

    resetPassword() {
        let element= ToolPassword.find().fetch();
        console.log('sdfsdfds'+element)
        let token='';
        element.map((item)=>{token= item.token});
        let newPassword=this.refs.newPassword.value;
        let newPasswordAgain=this.refs.newPasswordAgain.value;
        if( (newPassword ) && (newPassword===newPasswordAgain )) {
            Accounts.resetPassword(token, newPassword, (err) => {
                console.log('ee',token)
                if (err) {
                    // Display error
                    console.log("Error"+err);
                } else {
                    // Resume normal operation
                    console.log("Password has been successfully reset");
                    location.reload();
                }
            });
            Meteor.call('removeTokenPassword');
        }
        else{
            alert("Error: The Password entered is incorrect.  Please try again");
        }

        this.refs.newPassword.value="";
        this.refs.newPasswordAgain.value="";

    }

    render(){
        let currentUser=Meteor.userId();
        return (
            <div className="container passwordPos">
                {(Meteor.userId()===null)?
                    <div>
                           <form className="forgot-password">
                               <table >
                                   <th><h3>Please enter a new  password</h3></th>
                            <tr><input  ref="newPassword" type="password" placeholder="New password"/></tr>
                               <tr> <input  ref="newPasswordAgain" type="password" placeholder="New password again"/></tr>
                                <tr  > <Button variant="primary" className="vertical-center" onClick={this.resetPassword.bind(this)}>Reset password</Button></tr>
                               </table>
                    </form>
                       </div>  :<h3 className="emailPassProp">Password has been successfully reset.</h3>}
            </div>
        );
    }
}
