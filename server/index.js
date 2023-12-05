// Creating express app
const express = require("express");
const app = express();
app.use(express.json());

// Cors Config
const cors = require("cors");
app.use(cors());

// User routes
const UserController = require("./controllers/user.controller");
app.use("/user", UserController);

// Product routes
const productController = require("./controllers/product.controller");
app.use("/product", productController);

module.exports = app;
