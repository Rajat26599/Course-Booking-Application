const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
  auth: {
    api_key: '',
    domain: ''
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: 'saxena1975sanjeev@gmail.com',
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      cb(err, null);
    }
    else {
      cb(null, data);
    }
  });
}

module.exports = sendMail();

// subject
// text
// from
