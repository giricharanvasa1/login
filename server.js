const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());


const users = [
  { username: "admin", password: "1234" },
  { username: "charan", password: "5678" }
];

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  
  console.log("User entered:");
  console.log("Username:", username);
  console.log("Password:", password);


  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    console.log("Valid login ✅");
  } else {
    console.log("Invalid login ❌");
  }

 
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
