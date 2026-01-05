const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const fxRoutes = require("./routes/fxRoutes");

dotenv.config();
const app = express();

const allowedOrigins = ["http://localhost:5173"];
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

app.use(express.json());
app.use("/api/contact", contactRoutes);
app.use("/api/fx", fxRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
