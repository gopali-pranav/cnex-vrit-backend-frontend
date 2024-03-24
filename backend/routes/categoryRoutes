const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategories,
  deleteCategory,
  updateCategory,
} = require("../controller/categoryController");

// POST request to create a new category
router.post("/", createCategory);

// GET request to fetch all categories
router.get("/", getCategories);

// DELETE request to delete a category by ID
router.delete("/:id", deleteCategory);

// PUT request to update a category by ID
router.put("/:id", updateCategory);

module.exports = router;
