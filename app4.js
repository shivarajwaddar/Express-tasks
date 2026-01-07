const express = require("express");
const app = express();

app.use(express.json());

const products = [];
const categories = [];

app.post("/products", (req, res) => {
  const product = req.body;
  const productId = products.length + 1;

  const newProduct = { ...product, id: productId };
  products.push(newProduct);

  res.status(201).json({
    message: "A new product has been added",
    data: products,
  });
});

app.post("/categories", (req, res) => {
  const category = req.body;
  const categoryId = categories.length + 1;

  const newCategory = { ...category, id: categoryId };
  categories.push(newCategory);

  res.status(201).json({
    message: "A new Category has been added",
    data: categories,
  });
});

app.get("/products", (req, res) => {
  res.status(200).json({
    message: "Here is the list of all products.",
    data: products,
  });
});

app.get("/categories", (req, res) => {
  res.status(200).json({
    message: "Here is the list of all Categoaries.",
    data: categories,
  });
});

// to handle incorrect routes
// Place this at the very end of your file, after all other routes
app.use((req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

// app.use("*", (req, res) => {
//   res.status(404).send("<h1>404 - Page Not Found</h1>");
// });
app.listen(4000, () => {
  console.log("server is runnning on http://localhost:4000");
});
