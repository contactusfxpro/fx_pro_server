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
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.timeEnd("email-send"); // Logs e.g. "email-send: 1.234s"
  } catch (error) {
    console.timeEnd("email-send");
    console.error("Error sending email:", error);
  }
};

module.exports = sendMail;
