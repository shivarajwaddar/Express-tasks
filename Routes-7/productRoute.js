const express = require("express");
const productController = require("../Controllers-2/productController");
const router = express.Router();

router.get("/", productController.getProduct);

module.exports = router;
