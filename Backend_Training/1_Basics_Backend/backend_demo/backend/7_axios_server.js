const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🧠 Fake database
let user = {
  id: 1,
  name: "Manish",
  age: 25,
  role: "Developer",
};

/* =======================
   GET – Fetch user
======================= */
app.get("/api/user", (req, res) => {
  console.log("📩 GET /api/user");
  res.json(user);
});

/* =======================
   POST – Create user
======================= */
app.post("/api/user", (req, res) => {
  console.log("📩 POST /api/user");
  console.log("📦 Data received:", req.body);

  user = { id: Date.now(), ...req.body };

  res.json({
    message: "User created",
    user,
  });
});

/* =======================
   PUT – Replace user
======================= */
app.put("/api/user", (req, res) => {
  console.log("📩 PUT /api/user");
  console.log("📦 Full data received:", req.body);

  user = req.body; // full replacement

  res.json({
    message: "User replaced using PUT",
    user,
  });
});

/* =======================
   PATCH – Partial update
======================= */
app.patch("/api/user", (req, res) => {
  console.log("📩 PATCH /api/user");
  console.log("📦 Partial data received:", req.body);

  user = { ...user, ...req.body };

  res.json({
    message: "User partially updated using PATCH",
    user,
  });
});

/* =======================
   DELETE – Remove user
======================= */
app.delete("/api/user", (req, res) => {
  console.log("📩 DELETE /api/user");

  user = null;

  res.json({
    message: "User deleted",
  });
});

app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});
