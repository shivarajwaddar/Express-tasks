const express = require("express");
const productController = require("../Controllers-3/productController");
const router = express.Router();

router.get("/", productController.getProduct);
router.post("/", productController.postProduct);

module.exports = router;
