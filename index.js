const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const app = express();

// *** Middleware ***

// Use json
app.use(express.json());
// Use urlencoded form to post a product
app.use(express.urlencoded({ extended: false }));

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

// routes
app.use("/api/products", productRoute);

// Index page
app.get("/", (req, res) => {
  res.send("Hello there, this is my first nodejs rest api");
});

mongoose
  .connect(
    "mongodb+srv://behnamhamidi688:Iranashkani1991@cluster0.2lhiw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
