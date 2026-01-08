const { products } = require("../store");

// Logic to GET all products
const getAllProducts = (req, res) => {
  const list = products.map((p) => p.productName);
  res.status(200).send({
    message: "fetching all the products",
    products: list,
  });
};

// Logic to POST (create) a new product
const createProduct = (req, res) => {
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
};

// Logic to GET a single product by ID
const getProductById = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).send(`Product with id ${id} not found`);
  }

  res.status(200).send(`Product ${product.productName} has id ${id}`);
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
};
