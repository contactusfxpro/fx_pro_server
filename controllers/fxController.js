const fetch = require("node-fetch");
require("dotenv").config();

const FIXER_API_KEY = process.env.FIXER_API_KEY;

// 🔹 SIMPLE CACHE (memory)
let cachedRates = null;
let lastFetchTime = 0;

// Fixer updates hourly → we fetch once per hour
const CACHE_TIME = 60 * 60 * 1000; // 1 hour

const getLiveRates = async (req, res) => {
  try {
    const now = Date.now();

    // ✅ If cache exists and is fresh → use it
    if (cachedRates && now - lastFetchTime < CACHE_TIME) {
      return res.json(cachedRates);
    }

    // ❗ Call Fixer ONLY when cache is empty or expired
    const response = await fetch(
      `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`
    );

    const data = await response.json();

    if (!data.success) {
      console.error("Fixer error:", data.error);
      throw new Error("Fixer API error");
    }

    // Prepare response
    cachedRates = {
      base: "EUR",
      rates: data.rates,
      fetchedAt: new Date().toISOString(),
    };

    lastFetchTime = now;

    res.json(cachedRates);
  } catch (err) {
    console.error("FX ERROR:", err.message);

    // 🛟 If Fixer fails, return old data if we have it
    if (cachedRates) {
      return res.json(cachedRates);
    }

    res.status(500).json({
      error: "Live FX service unavailable",
    });
  }
};

module.exports = { getLiveRates };
