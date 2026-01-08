const express = require("express");
const { products } = require("./store"); // Import only products
const router = express.Router();

// GET all products
router.get("/", (req, res) => {
  // Fix: Use p.productName instead of p.name
  const list = products.map((p) => p.productName);
  res.status(200).send({
    message: "fetching all the products",
    products: list,
  });
});

// POST a new product
router.post("/", (req, res) => {
  const { productName } = req.body;

  if (!productName) {
    return res.status(400).send("Product name is required");
  }

  const newId =
    products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
  const newProduct = { id: newId, productName };

  products.push(newProduct);

  res.status(201).json({
    message: "Product added successfully",
    data: newProduct,
  });
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).send(`Product with id ${id} not found`);
  }

  res.status(200).send(`Product ${product.productName} has id ${id}`);
});

module.exports = router;
