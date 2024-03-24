// Import the Category model
const Category = require("../models/category");

// Controller function for creating a new category
const createCategory = async (req, res) => {
  // Extract category name from request body
  const { name } = req.body;

  try {
    // Check if the category already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists" });
    }

    // Create a new category instance
    const newCategory = new Category({ name });

    // Save the category to the database
    const savedCategory = await newCategory.save();

    // Respond with the saved category
    res.status(201).json(savedCategory);
  } catch (error) {
    // If an error occurs, respond with an error message
    res.status(500).json({ message: error.message });
  }
};

// Controller function for fetching all categories
const getCategories = async (req, res) => {
  try {
    // Fetch all categories from the database
    const categories = await Category.find();

    // Respond with the categories
    res.status(200).json(categories);
  } catch (error) {
    // If an error occurs, respond with an error message
    res.status(500).json({ message: error.message });
  }
};

// Controller function for deleting a category by ID
const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;

  try {
    // Find the category by ID and delete it
    await Category.findByIdAndDelete(categoryId);

    // Respond with success message
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    // If an error occurs, respond with an error message
    res.status(500).json({ message: error.message });
  }
};

// Controller function for updating a category by ID
const updateCategory = async (req, res) => {
  const categoryId = req.params.id;
  const { name } = req.body;

  try {
    // Find the category by ID and update its name
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { name },
      { new: true }
    );

    // Respond with the updated category
    res.status(200).json(updatedCategory);
  } catch (error) {
    // If an error occurs, respond with an error message
    res.status(500).json({ message: error.message });
  }
};

// Export the controller functions
module.exports = {
  createCategory,
  getCategories,
  deleteCategory,
  updateCategory,
};
