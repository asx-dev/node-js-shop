const Product = require("../models/product");
const config = require("../utils/config");
const stripe = require("stripe")(config.STRIPE_API_KEY);
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error getting Products" });
  }
};

const addNewProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: "Error creating new Product" });
  }
};

const checkoutSession = async (req, res) => {
  try {
    const items = req.body.items;
    const lineItems = items.map((item) => ({
      price: item.stripeId,
      quantity: item.qty,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: config.HOMEPAGE_URL,
      cancel_url: config.HOMEPAGE_URL,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing checkout." });
  }
};

module.exports = { getAllProducts, addNewProduct, checkoutSession };
