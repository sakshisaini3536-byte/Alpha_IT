const express = require("express");
const router = express.Router();
const User = require("../models/User");

console.log("📌 User routes loaded");

/* ========================
   GET ALL USERS
======================== */
router.get("/", async (req, res) => {
  console.log("📩 GET /api/users");

  try {
    const users = await User.find();
    console.log("✅ Users fetched from DB");
    res.json(users);
  } catch (err) {
    console.log("❌ Error fetching users:", err.message);
    res.status(500).json({ message: err.message });
  }
});

/* ========================
   ADD USER
======================== */
router.post("/", async (req, res) => {
  console.log("📩 POST /api/users");
  console.log("📦 Data received:", req.body);

  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();

    console.log("✅ User saved:", savedUser);
    res.status(201).json(savedUser);
  } catch (err) {
    console.log("❌ Error saving user:", err.message);
    res.status(400).json({ message: err.message });
  }
});

/* ========================
   DELETE USER
======================== */
router.delete("/:id", async (req, res) => {
  console.log("📩 DELETE /api/users/:id");

  try {
    await User.findByIdAndDelete(req.params.id);
    console.log("🗑️ User deleted");
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.log("❌ Error deleting:", err.message);
    res.status(500).json({ message: err.message });
  }
});

/* ========================
   UPDATE USER
======================== */
router.put("/:id", async (req, res) => {
  console.log("📩 PUT /api/users/:id");
  console.log("📦 Updated Data:", req.body);

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated document
    );

    console.log("✅ User updated:", updatedUser);
    res.json(updatedUser);
  } catch (err) {
    console.log("❌ Error updating:", err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;