const { users } = require("../store");

// Logic to GET all users
const getAllUsers = (req, res) => {
  const list = users.map((u) => u.name);
  res.status(200).send({
    message: "fetching all the users",
    users: list,
  });
};

// Logic to POST (create) a new user
const createUser = (req, res) => {
  const { name } = req.body;

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
};

// Logic to GET a single user by ID
const getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).send(`User with id ${id} not found`);
  }

  res.status(200).send(`user ${user.name} has id ${id}`);
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
};
