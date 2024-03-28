const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");

// POST request to create a new product
router.post("/", createProduct);

// GET request to fetch all products
router.get("/", getProducts);

// PUT request to update a product by ID
router.put("/:id", updateProduct);

// DELETE request to delete a product by ID
router.delete("/:id", deleteProduct);

module.exports = router;
