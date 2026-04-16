const express = require("express");
const router = express.Router();

const products = [
  { id: 1, name: "Phone" },
  { id: 2, name: "Laptop" }
];

// GET all
router.get("/", (req, res) => {
  res.json(products);
});

// GET one
router.get("/:id", (req, res) => {
  res.send(`Product ${req.params.id}`);
});

module.exports = router;