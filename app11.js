const express = require("express");
const userRouter = require("./Routes-5/user");
const productRouter = require("./Routes-5/product");
const cartRouter = require("./Routes-5/cart");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Homepage");
});

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);

app.use((req, res) => {
  res.status(400).send("Page not Found");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
