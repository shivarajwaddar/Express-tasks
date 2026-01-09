const path = require("path");

const getProduct = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "View", "productView.html"));
  //   res.send("welcome to product page");
};

const postProduct = (req, res) => {
  const data = req.body;
  console.log("doby", data);
  res.send(data);
};

module.exports = {
  getProduct,
  postProduct,
};
