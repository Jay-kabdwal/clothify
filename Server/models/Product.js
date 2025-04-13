const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    description: String,
    price: Number,
    category: String,
    totalstock: Number,
    brand: String,
    salePrice: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
