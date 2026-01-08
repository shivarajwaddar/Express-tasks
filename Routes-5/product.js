const express = require("express");
const router = express.Router();
const productController = require("../controller/prodcutController");

// Define routes using the controller functions
router.get("/", productController.getAllProducts);
router.post("/", productController.createProduct);
router.get("/:id", productController.getProductById);

module.exports = router;
