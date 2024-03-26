const mongoose = require("mongoose");

// Define the Product schema with description field
const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
