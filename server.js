const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const fxRoutes = require("./routes/fxRoutes");
const { fxLimiter } = require("./middleware/ratelimit");

dotenv.config();

const app = express();
app.set("trust proxy", 1);

const allowedOrigins = [
  "http://localhost:5173",
  "https://fx-pro-nine.vercel.app",
  "http://13.210.23.61",
  "http://13.239.124.220",
  "http://crosscurrencyfx.com",
  "https://crosscurrencyfx.com",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(fxLimiter);

app.use(express.json());
app.use("/api/contact", contactRoutes);
app.use("/api/fx", fxRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
