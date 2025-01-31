const express = require("express");
const app = express();
const cors = require("cors");
const shopRoutes = require("./routes/shopRoute");
const helmet = require("helmet");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'none'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://trusted-source.com"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "https://shop-api-wx9a.onrender.com"],
      fontSrc: ["'self'", "https://trusted-font-source.com"],
    },
  })
);
// Routes
app.use("/api/shop", shopRoutes);

module.exports = app;
