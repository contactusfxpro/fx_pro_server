const contactEmailTemplate = ({ name, email, message }) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Contact Message</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #070d17;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Helvetica, Arial, sans-serif;
    }

    .wrapper {
      width: 100%;
      padding: 40px 12px;
    }

    .card {
      max-width: 520px;
      margin: 0 auto;
      background-color: #070d17;
      border-radius: 20px;
      border: 1px solid #1f1f1f;
      padding: 36px 30px;
      text-align: center;
    }

    /* ICON */
    .icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 22px;
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon img {
      width: 100px;
      height: auto;
      display: block;
    }

    /* TITLE */
    h1 {
      margin: 0 0 10px;
      font-size: 24px;
      font-weight: 600;
      color: #ffffff;
    }

    /* SUBTITLE */
    .subtitle {
      font-size: 15px;
      color: #b5b5b5;
      line-height: 1.6;
      margin-bottom: 26px;
    }

    /* INFO */
    .info {
      text-align: left;
      margin-bottom: 22px;
      font-size: 14px;
    }

    .info-row {
      margin-bottom: 8px;
    }

    .label {
      font-weight: 600;
      color: #9ca3af;
    }

    .value {
      color: #ffffff;
    }

    /* MESSAGE */
    .message-box {
      text-align: left;
      background-color: #070d17ab;
      padding: 18px;
      border-radius: 14px;
      font-size: 14px;
      color: #e5e7eb;
      line-height: 1.6;
      white-space: pre-line;
      margin-bottom: 24px;
      border: 1px solid #1f1f1f;
    }

    /* FOOTER */
    .footer-text {
      font-size: 13px;
      color: #9ca3af;
      line-height: 1.5;
    }

    @media (max-width: 520px) {
      .card {
        padding: 28px 20px;
      }

      h1 {
        font-size: 22px;
      }
    }
  </style>
</head>

<body>
  <div class="wrapper">
    <div class="card">

      <!-- Icon -->
      <div class="icon">
        <img
          src="https://res.cloudinary.com/dos5aaysx/image/upload/v1767774809/logo_jm9ead.png"
          alt="CrossCurrencyFX"
        />
      </div>

      <!-- Title -->
      <h1>New Contact Message</h1>

      <!-- Subtitle -->
      <div class="subtitle">
        You’ve received a new message from your website contact form.
      </div>

      <!-- Contact Info -->
      <div class="info">
        <div class="info-row">
          <span class="label">Name:</span>
          <span class="value">${name}</span>
        </div>

        <div class="info-row">
          <span class="label">Email:</span>
          <span class="value">${email}</span>
        </div>
      </div>

      <!-- Message -->
      <div class="message-box">
        ${message}
      </div>

      <!-- Footer -->
      <div class="footer-text">
        This email was automatically generated from your website.
        If you weren’t expecting this message, you can safely ignore it.
      </div>

    </div>
  </div>
</body>
</html>
`;
};

module.exports = contactEmailTemplate;
