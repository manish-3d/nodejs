const express = require("express");
const app = express();

// import controller
const { getHome } = require("./controllers/homeController");

// use controller in route
app.get("/", getHome);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});