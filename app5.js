const express = require("express");

const app = express();

app.use(express.json());

app.get("/welcome", (req, res) => {
  res.send("welocme to welcome page");
});

// Route parameter
app.get("/welcome/:username", (req, res) => {
  // http://localhost:3000/welcome/Julian?role=Admin
  const name = req.params.username;
  const role = req.query.role;
  res.status(201).send(` Welcome ${name}, your role is ${role}`);
});

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
