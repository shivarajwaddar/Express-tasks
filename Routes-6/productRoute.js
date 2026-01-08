const express = require("express");
const productController = require("../Controllers/productController");
const router = express.Router();

router.get("/", productController.getProduct);

module.exports = router;
