const express = require("express");
const router = express.Router();
const Product = require("../models/product.modal");

// Get all products
router.get("/all", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();
    return res.status(200).send({ products });
  } catch (error) {
    console.log("Something went wrong!");
    return res.status(400).send({ message: error.message });
  }
});

// Get products by id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).send({ product });
  } catch (error) {
    console.log("Something went wrong!");
    return res.status(400).send({ message: error.message });
  }
});

// Adding a product
router.post("/add", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(200).send({
      message: "Product added",
      product: product,
    });
  } catch (error) {
    console.log("Something went wrong!");
    return res.status(400).send({ message: error.message });
  }
});

// Update a product by id
router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).send({
      message: `Product ${req.params.id} updated`,
      product: product,
    });
  } catch (error) {
    console.log("Something went wrong!");
    return res.status(400).send({ message: error.message });
  }
});

// Delete a product by id
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      message: `Product ${req.params.id} deleted`,
      product: product,
    });
  } catch (error) {
    console.log("Something went wrong!");
    return res.status(400).send({ message: error.message });
  }
});

module.exports = router;
