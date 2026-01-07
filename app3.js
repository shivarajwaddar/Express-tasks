const express = require("express");

const app = express();

// This middleware parses incoming JSON requests and puts the data in req.body
app.use(express.json());

const users = [
  { name: "user 1", id: 1 },
  { name: "user 2", id: 2 },
  { name: "user 3", id: 3 },
];

const orders = [
  { name: "order 1", id: 1 },
  { name: "order 2", id: 2 },
  { name: "order 3", id: 3 },
];

app.get("/", (req, res) => {
  res.send("<h1>Welcome page<h1>");
});

app.get("/orders", (req, res) => {
  res.json({
    message: "Here is the list of all orders.",
    data: orders,
  });
});

app.get("/users", (req, res) => {
  res.json({
    message: "Here is the list of all users.",
    data: users,
  });
});

app.post("/orders", (req, res) => {
  // to get data from body
  const newOrder = req.body;
  orders.push(newOrder);
  res.json({
    message: "A new user has been added.",
    data: orders,
  });
});

app.post("/users", (req, res) => {
  // to get data from body
  const newUser = req.body;
  console.log(newUser);
  users.push(newUser);
  res.json({
    message: "A new user has been added.",
    data: users,
  });
});

app.listen(3300, () => {
  console.log(`Server is running on http://localhost:3300`);
});
