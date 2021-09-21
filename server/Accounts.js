import {Accounts} from "meteor/accounts-base";
import { ToolEmail,ToolPassword} from "../TodoList/db";

var postSignUp=function (userId,info) {


    if ((Meteor.roles.find({'_id': 'Super User'}).fetch()).length === 0) {
        Roles.createRole('Super User');
        Roles.createRole('User');

        Roles.addUsersToRoles(userId, 'Super User');

    } else {
        Roles.addUsersToRoles(userId, 'User');
    }
}
AccountsTemplates.configure({
    sendVerificationEmail: true,
    postSignUpHook: postSignUp,


});


Accounts.emailTemplates.siteName = "Todo List";
Accounts.emailTemplates.from = "Todo List <no-reply@example.com>";

Accounts.urls.resetPassword = function (token) {
    ToolPassword.remove({});
    ToolPassword.insert(
        {
            token:token
        });
    return Meteor.absoluteUrl(`reset-password/${token}`);
};
Accounts.urls.verifyEmail = function (token) {
    return Meteor.absoluteUrl(`verify-email/${token}`);
};
Accounts.emailTemplates.verifyEmail = {
    subject() {
        return "Please Verify Your Email Address";
    },
    text( user, url ) {
        ToolEmail.remove({});
        ToolEmail.insert(
            {
                userId:user._id
            });
        let emailAddress   = user.emails[0].address,
            emailBody      = `To verify your email address (${emailAddress}) visit the following link:
            \n\n${url}\n\n If you did not request this verification, please ignore this email.`;
        return emailBody;
    }
};
Accounts.validateLoginAttempt((data)=>{
    if(data.error)
        return data.error;
    if(!data.user.emails[0].verified)
        throw new Meteor.Error(403, 'Verify email account first');
    else
        return true;
});
