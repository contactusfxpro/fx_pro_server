const nodemailer = require("nodemailer");

const sendMail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Email address
      pass: process.env.EMAIL_PASS, // Email password or app password
    },
   connectionTimeout: 5000,
  greetingTimeout: 5000,
  socketTimeout: 5000,
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendMail;
