const { users, products, carts } = require("../store");

// Logic to GET cart items for a specific user
const getCartByUserId = (req, res) => {
  const userId = Number(req.params.userId);
  const userCart = carts.find((c) => c.userId === userId);

  if (!userCart) {
    return res.status(404).json({ message: "No cart found for this user." });
  }

  // Map product IDs to actual product details for a better response
  const cartDetails = userCart.products.map((prodId) => {
    return products.find((p) => p.id === prodId);
  });

  res.status(200).json({
    userId: userId,
    items: cartDetails,
  });
};

// Logic to POST (add) a product to a user's cart
const addToCart = (req, res) => {
  const userId = Number(req.params.userId);
  const { productId } = req.body;

  // 1. Validate User
  const userExists = users.find((u) => u.id === userId);
  if (!userExists) {
    return res.status(404).send("Cannot add to cart: User does not exist.");
  }

  // 2. Validate Product
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
};

module.exports = {
  getCartByUserId,
  addToCart,
};
