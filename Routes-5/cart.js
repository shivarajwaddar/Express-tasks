const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartController");

// Map routes to controller functions
router.get("/:userId", cartController.getCartByUserId);
router.post("/:userId", cartController.addToCart);

module.exports = router;
