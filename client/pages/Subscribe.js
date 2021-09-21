import {Meteor} from "meteor/meteor";
 Meteor.subscribe('allUsers');
Meteor.subscribe('allRoles');
Meteor.subscribe('allRole-assignment');
//Meteor.subscribe("userResolutions")
Meteor.subscribe("allResolutions")
Meteor.subscribe('ToolPassword');
Meteor.subscribe('ToolEmail');
Meteor.subscribe('ToolSignUp');
