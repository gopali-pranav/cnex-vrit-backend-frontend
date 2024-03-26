const Product = require("../models/product");

// Controller function for creating new products
const createProduct = async (req, res) => {
  const productsData = req.body;

  try {
    // Check if productsData is an array
    if (!Array.isArray(productsData)) {
      return res.status(400).json({ message: "Invalid data format" });
    }

    // Iterate over each product data and save it to the database
    const createdProducts = await Promise.all(
      productsData.map(async (productData) => {
        const { title, price, category, description, image, rating } =
          productData;
        // Create a new product instance
        const newProduct = new Product({
          name: title,
          price,
          category,
          description,
          image,
          rating,
        });
        // Save the product to the database
        return await newProduct.save();
      })
    );

    // Respond with the created products
    res.status(201).json(createdProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function for fetching all products
const getProducts = async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function for updating a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, price, category, description, image, rating } = req.body;

  try {
    // Check if the product exists
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update the product properties
    product.name = title;
    product.price = price;
    product.category = category;
    product.description = description;
    product.image = image;
    product.rating = rating;

    // Save the updated product
    const updatedProduct = await product.save();

    // Respond with the updated product
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function for deleting a product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the product exists
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete the product from the database
    await product.remove();

    // Respond with a success message
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };
