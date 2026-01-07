const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("Authentication middleware");
  next();
});

app.use("/welcome", (req, res, next) => {
  req.user = "Guest";
  next();
});

app.use("/library-2", (req, res, next) => {
  console.log("Library-2 is printed");
  next();
});

app.use("/library-3", (req, res, next) => {
  console.log("Library-3 is printed");
  next();
});

app.get("/", (req, res) => {
  res.send("<h1> Homaepage</h1>");
});

app.get("/welcome", (req, res) => {
  const name = req.user;
  res.send(`<h1> welcome, ${name}I`);
});

app.get("/library-2", (req, res) => {
  res.send("<h1>Labrary - 2</h1>");
});

app.get("/library-3", (req, res) => {
  res.send("<h1>Labrary - 3</h1>");
});

app.listen(3200, () => {
  console.log("server is listening on port 3200");
});
