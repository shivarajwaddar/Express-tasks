const express = require("express");
const router = express.Router();

// Import the shared data from store.js
// Make sure the path to store.js is correct based on your folder structure
const { users, products, carts } = require("./store");

// GET /cart/:userId - Fetch the cart items for a specific user
router.get("/:userId", (req, res) => {
  const userId = Number(req.params.userId);

  // Find the cart belonging to this user
  const userCart = carts.find((c) => c.userId === userId);

  if (!userCart) {
    return res.status(404).json({ message: "No cart found for this user." });
  }

  // Optional: Map product IDs to actual product names for a better response
  const cartDetails = userCart.products.map((prodId) => {
    return products.find((p) => p.id === prodId);
  });

  res.status(200).json({
    userId: userId,
    items: cartDetails,
  });
});

// POST /cart/:userId - Add a product to the user's cart
router.post("/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const { productId } = req.body;

  // 1. Validate if user exists
  const userExists = users.find((u) => u.id === userId);
  if (!userExists) {
    return res.status(404).send("Cannot add to cart: User does not exist.");
  }

  // 2. Validate if product exists
  const productExists = products.find((p) => p.id === Number(productId));
  if (!productExists) {
    return res.status(404).send("Cannot add to cart: Product does not exist.");
  }

  // 3. Find existing cart or create a new one
  let userCart = carts.find((c) => c.userId === userId);

  if (!userCart) {
    userCart = { userId: userId, products: [] };
    carts.push(userCart);
  }

  // 4. Add product to cart
  userCart.products.push(Number(productId));

  res.status(201).json({
    message: `Product ${productExists.productName} added to ${userExists.name}'s cart`,
    cart: userCart,
  });
});

module.exports = router;
