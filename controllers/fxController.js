const fetch = require("node-fetch");

const ALLOWED_BASES = [
  "USD", "EUR", "GBP", "JPY",
  "INR", "AUD", "CAD", "CHF"
];

const getLiveRates = async (req, res) => {
  try {
    const base = (req.query.base || "USD").toUpperCase();

    if (!ALLOWED_BASES.includes(base)) {
      return res.status(400).json({
        error: "Invalid base currency"
      });
    }

    const response = await fetch(
      `https://open.er-api.com/v6/latest/${base}`
    );

    if (!response.ok) {
      throw new Error("FX provider error");
    }

    const data = await response.json();

    res.json({
      base: base,
      rates: data.rates,
      fetchedAt: new Date().toISOString()
    });

  } catch (err) {
    console.error("FX ERROR:", err.message);
    res.status(500).json({
      error: "Live FX service unavailable"
    });
  }
};

module.exports = { getLiveRates };
