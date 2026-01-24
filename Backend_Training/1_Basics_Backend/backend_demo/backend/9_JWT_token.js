const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "my_super_secret_key";

// ✅ LOGIN (returns JWT)
app.post("/api/login", (req, res) => {
  console.log("📩 POST /api/login");
  console.log("📦 Body:", req.body);

  const { username, password } = req.body;

  if (username !== "manish" || password !== "1234") {
    console.log("❌ Invalid credentials");
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { username: "manish", role: "Developer" },
    SECRET,
    { expiresIn: "1h" }
  );

  console.log("✅ JWT issued:", token);
  res.json({ token });
});

// ✅ PROTECTED PROFILE (requires token)
app.get("/api/profile", (req, res) => {
  console.log("📩 GET /api/profile");

  const authHeader = req.headers.authorization;
  console.log("🧾 Authorization header:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("❌ No token provided"); 
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    console.log("✅ Token verified | decoded:", decoded);

    res.json({ message: "Profile fetched", user: decoded });
  } catch (err) {
    console.log("❌ Invalid token:", err.message);
    res.status(401).json({ message: "Invalid token" });
  }
});

app.listen(5000, () => {
  console.log("🚀 JWT Backend running at http://localhost:5000");
  console.log("🧪 Test credentials -> username: manish | password: 1234");
});
