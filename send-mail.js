var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'saxena1975sanjeev@gmail.com',
    pass: 'SAXENA1974'
  }
});

const sendMail = (childName, childAge, parentName, contactPrefix,
  contactNumber, email, courseName, dateForTrial, timeForTrial) => {
  const mailOptions = {
    from: 'saxena1975sanjeev@gmail.com',
    to: email,
    subject: 'Booking for the Trial Class',
    text: `Dear ${parentName},
    ${childName}'s class has been successfully booked on ${dateForTrial} at ${timeForTrial}.`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}


module.exports = sendMail;
