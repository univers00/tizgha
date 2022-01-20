var nodemailer = require('nodemailer');

 var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'tizgha.anouar@outlook.com',
    pass: '******'
  }
});




// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

var test ="2000";
module.exports = {transporter, test};
