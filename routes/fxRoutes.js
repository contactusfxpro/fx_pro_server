const express = require("express");
const { getLiveRates } = require("../controllers/fxController");
const { fxLimiter } = require("../middleware/ratelimit");


const router = express.Router();

router.get("/live",fxLimiter, getLiveRates);

module.exports = router;
