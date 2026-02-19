const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

console.log("📦 User model ready");

module.exports = mongoose.model("User", userSchema);
