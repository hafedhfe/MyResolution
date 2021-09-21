
import moment from "moment";
// Template.Users.onCreated(function (){
//    // this.autorun(() => {
//    //     this.subscribe("allUsers");
//    // }) ;
//     // Client: Asynchronously send an email.
//     Meteor.call(
//         'sendEmail',
//         ' hafedhfe@gmail.com',
//         'hafedhfe@gmail.com',
//         'Hello from Meteor!',
//         'This is a test of Email.send.'
//     );
// });


Template.Users.helpers({

    users: function ()
        {
            return Meteor.users.find();
        },
    userEmail:function (){
        return this.emails[0].address;
    }, isCurrentSuperUser:function(){
        return  (Meteor.userId()===this._id);
    },
    isAdmin :function (){
        console.log(this._id)
        return Roles.userIsInRole(this._id, 'Super User') ? 'Super User' : '';
    },
    dateFormat:function (){
        return moment(this.createdAt).format('MMM D YYYY ');
    },
    editMode:function (){
        return Session.get('curentUser') ? 'edit-mode' : '';
    },
    currentEdit:function (){
        let user =Session.get('curentUser');
        return user._id == this._id;
    }

});
Template.Users.events({
   'click .user_id':function (){

       Session.set('curentUser',this);
   },
    'click .toggle-admin':function (){
       Meteor.call('toggleAdmin',this._id);

    },
    'click .close-edit-mode':function (){
       Session.set('curentUser',null);
    },
    'click .removeUser':function (){
       Meteor.call('removeUser',this._id);
    }

});
