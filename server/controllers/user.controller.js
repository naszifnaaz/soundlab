const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.get("/all", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).send({ users });
  } catch (error) {
    console.log("Something went wrong!");
    return res.status(400).send({ message: error.message });
  }
});

module.exports = router