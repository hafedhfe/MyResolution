import {Resolutions, ToolEmail,ToolPassword, Services,custommers,providers,prices, availabilityLocProd, priceNotifications, priceHistory} from "../TodoList/db";
import './Accounts'

import { Email } from 'meteor/email'
 Meteor.methods({
        addResolution(resolution) {
           // check(resolution,String);
/* if (!Meteor.userId()){
    throw new Meteor.Error("Not-Authorized");
} */
              Resolutions.insert(
                {
                    text: resolution,
                    completed: false,
                    createdAt: new Date(),
                    user: Meteor.userId(),
                    username: Meteor.user().profile.firstName,

                } 

            ); 
              

        },
    toggleResolution(resolution){
        check(resolution,Object);
        if (!Meteor.userId() == resolution.user){
            throw new Meteor.Error("Not-Authorized");
        }

        Resolutions.update(resolution._id,{
                $set:{completed: !resolution.completed}
            });
    },
    deleteResolution(resolution){
        check(resolution,Object);

        if (!Meteor.userId() == resolution.user){
            throw new Meteor.Error("Not-Authorized");
        }
if ((Roles.userIsInRole( Meteor.userId(), 'User') ) && (resolution.user == Meteor.userId())){


        Resolutions.remove(resolution._id);
}
else if ((Roles.userIsInRole( Meteor.userId(), 'Super User') ) ){


    Resolutions.remove(resolution._id);
}
else {
    throw new Meteor.Error("Not-Authorized");
}

     },
    toggleAdmin(id){
        if(Roles.userIsInRole( id, 'Super User')){
            Roles.removeUsersFromRoles( id, 'Super User');
        }else{
            Roles.addUsersToRoles( id, 'Super User');
        }},
    removeUser(id){
        Meteor.users.remove(id);
        Meteor.roleAssignment.remove({'user._id': id});
    },

        sendResetPasswordLink() {
            let userId = Meteor.userId();
            if ( userId ) {
                console.log('test')
                return Accounts.sendResetPasswordEmail( userId );
            }
        },
     removeTokenPassword() {
        ToolPassword.remove({});
    },
    removeUserIdEmail() {
        ToolEmail.remove({});
    },
    retrieveUserIdEmail() {
        let element= ToolEmail.find().fetch();
        let userId = "";
        element.map((item)=>{userId= item.userId});
        Meteor.users.update(userId, {$set: {"emails.0.verified" :true}});
        return userId;
    }


});


