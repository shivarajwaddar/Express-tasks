const express = require("express");
const productRouter = require("./Routes-8/productRoute");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welocme page ");
});

app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
