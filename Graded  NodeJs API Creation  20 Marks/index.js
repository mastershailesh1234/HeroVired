const express = require("express");
const app = express();
app.use(express.json());

let products = [
  {
    id: 1,
    name: "product_name",
    total_quantity: 12,
    type_of_product: "shirt",
    price: 300,
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.get("/products/name/:name", (req, res) => {
  const productName = req.params.name;
  const product = products.filter((p) => p.name === productName);
  if (product.length > 0) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.post("/addproduct", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.json({ message: "Product added successfully" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
