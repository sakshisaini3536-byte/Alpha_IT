const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🧠 Existing data (acting like database)
let user = {
  id: 1,
  name: "Manish",
  age: 25,
};

// GET → Fetch existing user
app.get("/api/user", (req, res) => {
  console.log("📩 GET /api/user called");
  res.json(user);
});

// PUT → Update existing user
app.put("/api/user", (req, res) => {
  console.log("📩 PUT /api/user called");
  console.log("📦 Data received:", req.body);

  const { age } = req.body;

  // update existing data
  user.age = age;

  res.json({
    message: "User updated successfully",
    updatedUser: user,
  });
});

app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});
