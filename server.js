const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Dummy users (for testing)
const users = [
  { username: "admin", password: "1234" },
  { username: "charan", password: "5678" }
];

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Print user input (for learning)
  console.log("User entered:");
  console.log("Username:", username);
  console.log("Password:", password);

  // Check credentials (but don't reveal result)
  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    console.log("Valid login ✅");
  } else {
    console.log("Invalid login ❌");
  }

  // 🔒 Always send same response (no info to frontend)
  res.json({ status: "ok" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});