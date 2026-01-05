const rateLimit = require("express-rate-limit");

const fxLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30,
  message: {
    error: "Too many requests. Please slow down.",
  },
});

module.exports = { fxLimiter };
