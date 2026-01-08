const rateLimit = require("express-rate-limit");

const fxLimiter = rateLimit({
  windowMs: 60 * 1000, 
  max: 500,
  message: {
    error: "Too many requests. Please slow down.",
  },
});

module.exports = { fxLimiter };
