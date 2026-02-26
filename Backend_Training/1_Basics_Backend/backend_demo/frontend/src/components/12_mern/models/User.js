const mongoose = require("mongoose");

console.log("📦 User model loading...");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);

console.log("✅ User model ready");

module.exports = User;