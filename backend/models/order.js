// order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [
    {
      title: String,
      quantity: Number,
      price: Number,
      totalPrice: Number,
    },
  ],
  date: { type: Date, default: Date.now },
  customerDetails: [
    {
      name: String,
      phone: String,
      email: String,
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
