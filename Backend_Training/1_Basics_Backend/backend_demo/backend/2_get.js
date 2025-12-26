const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/users", (req, res) => {
  console.log("📩 GET request received at /api/users");

  res.json({
    users: ["Manish", "Aisha", "Rahul"]
  });
});

app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});
