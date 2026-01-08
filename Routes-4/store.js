// store.js

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const products = [
  { id: 1, productName: "apple 12" },
  { id: 2, productName: "apple 13" },
  { id: 3, productName: "apple 14" },
];

// This stores which user has which product IDs in their cart
const carts = [
  { userId: 1, products: [1, 2] }, // Alice has apple 12 and 13
];

// Exporting them so other files can require() them
module.exports = { users, products, carts };
