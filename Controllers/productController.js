const path = require("path");

const getProduct = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "View", "productView.html"));
  //   res.send("welcome to product page");
};

module.exports = {
  getProduct,
};
