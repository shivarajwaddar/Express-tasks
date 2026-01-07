const express = require("express");
const booksRouter = require("./booksRouter");

const app = express();
// This middleware parses incoming JSON requests and puts the data in req.body
app.use(express.json());

app.use("/books", booksRouter);

app.listen(3000, () => {
  console.log("server is running on post 3000");
});
