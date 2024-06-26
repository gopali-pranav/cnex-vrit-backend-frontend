const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const masterPasswordRoutes = require("./routes/masterPasswordRoutes");
const otpRoutes = require("./routes/otpRoutes");
const orderRoutes = require("./routes/orderRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const couponRoutes = require("./routes/couponRoutes");

//Create Express app
const app = express();

//Middleware
app.use(bodyParser.json());

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://localhost:5176",
];
const corsOption = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOption));

//Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://gopalipranav4:HAYKkVaNc2b4ylfM@cluster0.7hlecfv.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/masterpasswords", masterPasswordRoutes);
app.use("/users", otpRoutes);
app.use("/orders", orderRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/coupons", couponRoutes);

//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
