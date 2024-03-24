// Import Mongoose
const mongoose = require("mongoose");

// Define the Category schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create the Category model
const Category = mongoose.model("Category", categorySchema);

// Export the Category model
module.exports = Category;
