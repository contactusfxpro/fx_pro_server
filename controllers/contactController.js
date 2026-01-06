const sendMail = require("../utils/sendMail");
const contactEmailTemplate = require("../templates/contactEmailTemplate");

const sendContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Generate HTML template
    const html = contactEmailTemplate({ name, email, message });

    await sendMail(
      process.env.EMAIL_USER,
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
