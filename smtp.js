Meteor.startup(()=> {

    smtp = {  username : 'hafedhfe@gmail.com',
       password : 'life is good',
      server :'smtp.gmail.com',
      port : '25'
    }

    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;



});
