const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});

const Product = mongoose.model("Product", ProductSchema);
