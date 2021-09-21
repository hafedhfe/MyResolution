import {
    Router,

} from 'react-router';
var pwd = AccountsTemplates.removeField('password');
 var email =AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
    { _id: 'firstName',
    type :'text',
    displayName:'First Name',
        required: true
        /*re: / (?=.*[a-z])(?=.*[A-Z])/,
        errStr: 'At least  1 lowercase and 1 uppercase letter'*/
},email,pwd,
    {
        _id: 'agree',
        type: 'checkbox',
        displayName: 'Agree to the terms and policy',
        required: true
    }
]);
var myLogoutFunc=function (){
Router.go('mainLayout','/');
}
AccountsTemplates.configure({
    // Behavior
    confirmPassword: false,
    showForgotPasswordLink: true,
    // Privacy Policy and Terms of Use
   // privacyUrl: 'privacy',
    //termsUrl: 'terms-of-use',
    // Hooks
      onLogoutHook: myLogoutFunc
});
