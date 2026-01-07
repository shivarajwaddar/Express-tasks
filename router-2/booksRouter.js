const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Here is the list of books!");
  res.status(200).send("Here is the list of books!");
});

router.post("/", (req, res) => {
  const book = req.body;
  console.log(book);
  res.status(201).send("Book has been added!");
});

module.exports = router;
