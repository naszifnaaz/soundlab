// Creating express app
const express = require("express");
const app = express();
app.use(express.json());

// Cors Config
const cors = require("cors");
app.use(cors());

// Middlewares
const {
  checkRules,
  validationBodyRules,
} = require("./middlewares/register.validator");

// User routes
const UserController = require("./controllers/user.controller");
app.use("/user", UserController);

// Auth routes
const { register, login } = require("./controllers/auth.controller");
app.use("/register", validationBodyRules, checkRules, register);
app.use("/login", login);

// Product routes
const productController = require("./controllers/product.controller");
app.use("/product", productController);

module.exports = app;
