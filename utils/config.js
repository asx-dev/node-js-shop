require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const STRIPE_API_KEY = process.env.STRIPE_API_KEY;
const HOMEPAGE_URL = process.env.HOMEPAGE_URL;

module.exports = {
  MONGODB_URI,
  PORT,
  STRIPE_API_KEY,
  HOMEPAGE_URL,
};
