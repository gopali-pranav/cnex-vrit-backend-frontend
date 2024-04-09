const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  couponCode: {
    type: String,
    required: true,
    unique: true,
  },
  usageLimit: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  couponType: {
    type: String,
    enum: ["Flat Discount", "Percentage"],
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;
