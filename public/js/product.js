// Inside product.js
const productForm = document.getElementById("productForm");

productForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = e.target.productName.value;

  try {
    // This hits your 'postProduct' controller
    const response = await axios.post("/products", {
      productName: name,
    });

    const ele = document.createElement("h2");
    ele.textContent = response.data.productName;
    document.body.appendChild(ele);
    e.target.productName.value = "";
  } catch (error) {
    console.error("Error sending data:", error);
  }
});
