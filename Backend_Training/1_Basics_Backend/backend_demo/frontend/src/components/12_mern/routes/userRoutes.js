const express = require("express");
const User = require("../models/User");

const router = express.Router();

// GET USERS
router.get("/", async (req, res) => {
  console.log("📩 GET /api/users");

  const users = await User.find();
  res.json(users);
});

// ADD USER
router.post("/", async (req, res) => {
  console.log("📩 POST /api/users");

  const newUser = new User(req.body);
  await newUser.save();

  res.json(newUser);
});

module.exports = router;
