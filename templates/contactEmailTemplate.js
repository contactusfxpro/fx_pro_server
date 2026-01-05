const contactEmailTemplate = ({ name, email, message }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>New Contact Message</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
          }
          .container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
          }
          h2 {
            color: #333;
          }
          p {
            color: #555;
            line-height: 1.6;
          }
          .label {
            font-weight: bold;
          }
          .message-box {
            margin-top: 10px;
            padding: 15px;
            background-color: #f9f9f9;
            border-left: 4px solid #007bff;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>New Contact Form Submission</h2>

          <p><span class="label">Name:</span> ${name}</p>
          <p><span class="label">Email:</span> ${email}</p>

          <div class="message-box">
            <p><span class="label">Message:</span></p>
            <p>${message}</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

module.exports = contactEmailTemplate;
