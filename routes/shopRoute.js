const express = require("express");
const router = express.Router();
const { getAll, addNewProduct } = require("../controllers/shop");

// Get all products
router.get("/", getAll);
router.post("/", addNewProduct);

module.exports = router;
