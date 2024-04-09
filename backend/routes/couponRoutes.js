const express = require("express");
const router = express.Router();
const couponController = require("../controller/couponController");

router.post("/", couponController.createCoupon);
router.get("/", couponController.getCoupons);

router.put("/:id", couponController.updateCoupon);

// Implement other routes as needed

module.exports = router;
