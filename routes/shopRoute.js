const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  addNewProduct,
  checkoutSession,
} = require("../controllers/shop");

// Get all products
router.get("/", getAllProducts);
router.post("/", addNewProduct);
router.post("/checkout", checkoutSession);

module.exports = router;
