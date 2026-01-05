const nodemailer = require("nodemailer");

const sendMail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",  
    auth: {
      user: process.env.EMAIL_USER,  // Email address
      pass: process.env.EMAIL_PASS,  // Email password or app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,  
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendMail;
