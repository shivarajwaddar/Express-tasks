const express = require("express");
const { users } = require("./store"); // Import only users

const router = express.Router();

router.get("/", (req, res) => {
  const list = users.map((u) => u.name);
  res.status(200).send({
    message: "fetching all the users",
    users: list,
  });
});

router.post("/", (req, res) => {
  const { name } = req.body; // Destructuring name from body

  // Validation check
  if (!name) {
    return res.status(400).send("Name is required to add a user");
  }

  const newId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  const newUser = { id: newId, name };

  users.push(newUser);
  res.status(201).json({
    message: "User added successfully",
    data: newUser,
  });
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  // Error handling to prevent server crash
  if (!user) {
    return res.status(404).send(`User with id ${id} not found`);
  }

  res.status(200).send(`user ${user.name} has id ${id}`);
});

module.exports = router;
