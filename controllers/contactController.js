const sendMail = require("../utils/sendMail");
const contactEmailTemplate = require("../templates/contactEmailTemplate");

const sendContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const html = contactEmailTemplate({ name, email, message });

    await sendMail(
      "contactus.fxpro@gmail.com",
      "FX-Pro Contact Request",
      html
    );

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};

module.exports = { sendContactForm };
