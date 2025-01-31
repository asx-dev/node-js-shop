const express = require("express");
const app = express();
const cors = require("cors");
const shopRoutes = require("./routes/shopRoute");
const helmet = require("helmet");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
// Routes
app.use("/api/shop", shopRoutes);

module.exports = app;
