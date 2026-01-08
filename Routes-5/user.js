const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// Endpoints mapped to controller functions
router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.get("/:id", userController.getUserById);

module.exports = router;
