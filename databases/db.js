const mongoose = require("mongoose");
const logger = require("../utils/logger");
const config = require("../utils/config");

const dbConnect = async () => {
  try {
    const db = await mongoose.connect(config.MONGODB_URI);
    if (db.connection.readyState === 1) {
      logger.success("Connected to MongoDB successfully");
    }
  } catch (error) {
    logger.error("Failed to connect to MongoDB:", error.message);
  }
};

module.exports = dbConnect;
