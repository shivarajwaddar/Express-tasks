const http = require("http");

const express = require("express");
const app = express();

// middlware 1
app.use((req, res, next) => {
  console.log("Middleware-1 executes");
  next(); // it will move to nect middleware-2
});

// middlware 1
app.use((req, res, next) => {
  console.log("middleware 2 in executes");
  res.send(`<h1>Hello world</h1>`);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

// const server = http.createServer(app); // app as requset handler
// server.listen(3000, () => {
//   console.log("server is running on port 3000");
// });
