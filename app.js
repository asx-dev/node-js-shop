const express = require("express");
const app = express();
const cors = require("cors");
const shopRoutes = require("./routes/shopRoute");

// Middlewares
app.use(cors());
app.use(express.json());
// Routes
app.use("/api/shop", shopRoutes);

module.exports = app;
