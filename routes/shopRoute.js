const express = require("express");
const router = express.Router();
const { getAll } = require("../controllers/shop");

// Get all products
router.get("/", getAll);

module.exports = router;
