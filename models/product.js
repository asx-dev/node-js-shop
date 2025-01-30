const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  category: String,
  stripeId: String,
});

module.exports = mongoose.model("Game", gameSchema);
