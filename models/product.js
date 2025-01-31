const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  category: String,
  stripeId: String,
});

gameSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

module.exports = mongoose.model("Game", gameSchema);
