const express = require("express");
const app = express();

const productRouter = require("./routes/productRouter");

app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("Server running");
});