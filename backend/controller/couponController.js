const Coupon = require("../models/coupon");

exports.createCoupon = async (req, res) => {
  try {
    const coupon = new Coupon(req.body);
    await coupon.save();
    res.status(201).json({ success: true, data: coupon });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json({ success: true, data: coupons });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateCoupon = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    // Find the coupon by ID and update its fields
    const updatedCoupon = await Coupon.findByIdAndUpdate(
      id,
      updatedData,
      { new: true } // Return the updated document
    );

    if (!updatedCoupon) {
      return res
        .status(404)
        .json({ success: false, message: "Coupon not found" });
    }

    res.status(200).json({ success: true, coupon: updatedCoupon });
  } catch (error) {
    console.error("Error updating coupon:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update coupon" });
  }
};

// Implement other CRUD operations as needed
