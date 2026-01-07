const express = require("express");

const app = express();
app.use(express.json());

const products = [];
const categories = [];

// Logging middleware for both products and categories
app.use((req, res, next) => {
  // If you send a POST request to /products...
  console.log(`${req.method} request made to ${req.url}`);
  // It prints: "POST request made to /products"
  next();
});

app.post("/products", (req, res) => {
  const product = req.body;
  products.push(product);

  res.status(201).json({
    message: "new product has been added",
    data: product,
  });
});

app.post("/categories", (req, res) => {
  const category = req.body;
  categories.push(category);

  res.status(201).json({
    message: "new category has been added",
    data: category,
  });
});

app.get("/products", (req, res) => {
  res.status(200).json({
    message: "Here is the all products",
    data: products,
  });
});

app.get("/categories", (req, res) => {
  res.status(200).json({
    message: "Here is all category list",
    data: categories,
  });
});

app.listen(3500, () => {
  console.log("server is listening on localhost:3500");
});
