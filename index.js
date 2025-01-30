const config = require("./utils/config");
const logger = require("./utils/logger");
const dbConnect = require("./databases/db");
const app = require("./app");

// Start Server
const startServer = async () => {
  try {
    await dbConnect();
    app.listen(config.PORT, () => {
      logger.success(`Server running on port ${config.PORT}`);
    });
  } catch (error) {
    logger.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
