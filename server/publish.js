import { Meteor } from 'meteor/meteor';
import   '../TodoList/db.js'
import './methods'
import {Resolutions, ToolEmail, ToolPassword, Services, custommers,providers,prices, availabilityLocProd, priceNotifications, priceHistory} from "../TodoList/db";
import './Accounts'
import '../smtp'

Meteor.startup(()=> {
   //
   // var smtp = {  username : 'hafedhfe%40gmail.com',
   //      password : 'life is good',
   //      server :'smtp.gmail.com',
   //      port : '587'
   //  }
   //
   //  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
   //  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

});

Meteor.publish("allUsers", function (){
    //return Resolutions.find({completed: true});
    return Meteor.users.find();
});
Meteor.publish("allResolutions", function (){
    //return Resolutions.find({completed: true});
    return Resolutions.find( );
});
Meteor.publish("allRoles", function (){
    return Meteor.roles.find( );
});
Meteor.publish("allRole-assignment", function (){
    return Meteor.roleAssignment.find( );
});
//
// Meteor.publish("userResolutions", function (){
//     //return Resolutions.find({completed: true});
//     return Resolutions.find({user: this.userId} );
// });

Meteor.publish('ToolPassword', function(){
    return  ToolPassword.find();
});
Meteor.publish('ToolEmail', function(){
    return  ToolEmail.find();
});
Meteor.publish('services', function(){
    return  Services.find();
});
