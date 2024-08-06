const nodemailer = require('nodemailer');

const sendEmail = options => {
  // 1 ) Create a transporter
  const transporter = nodemailer.createTransport({
    services: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  // 2 ) define the email options
  // 3 ) define the email options
};
