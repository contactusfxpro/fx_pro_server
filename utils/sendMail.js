const nodemailer = require("nodemailer");

const sendMail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "contactus.fxpro@gmail.com",
      pass: "myidqjpjkmralnls",
    },
  });

  const mailOptions = {
    from: "contactus.fxpro@gmail.com",
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
