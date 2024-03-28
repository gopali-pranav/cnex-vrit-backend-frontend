const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");

// Create a new order
router.post("/", orderController.createOrder);

// Get all orders
router.get("/", orderController.getAllOrders);

// Get a single order by ID
router.get("/:id", orderController.getOrderById);

// Delete an order by ID
router.delete("/:id", orderController.deleteOrderById);

module.exports = router;
