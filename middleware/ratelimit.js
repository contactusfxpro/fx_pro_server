const rateLimit = require("express-rate-limit");

const fxLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 500,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many FX requests. Please slow down.",
  },
});

module.exports = { fxLimiter };
