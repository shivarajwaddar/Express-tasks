const express = require("express");
const productRouter = require("./Routes-7/productRoute");

const app = express();

app.get("/", (req, res) => {
  res.send("Welocme page ");
});

app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
