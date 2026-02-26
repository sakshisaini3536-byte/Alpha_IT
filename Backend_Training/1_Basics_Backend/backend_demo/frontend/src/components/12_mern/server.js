const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

console.log("🚀 Starting Server...");

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// Import routes
const userRoutes = require("./routes/userRoutes");

// Use routes
app.use("/api/users", userRoutes);

app.listen(5000, () => {
  console.log("🌍 Server running on port 5000");
});