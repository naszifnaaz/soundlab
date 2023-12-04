// Creating express app
const express = require("express");
const app = express();
app.use(express.json());

// Cors Config
const cors = require("cors");
app.use(cors());

module.exports = app;
