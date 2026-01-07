const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("orderlist");
});

router.post("/", (req, res) => {
  res.send("order list");
});

module.exports = router;
