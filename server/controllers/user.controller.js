const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

// Get all users
router.get("/all", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.status(200).send({ users });
  } catch (error) {
    console.log("Something went wrong!");
    return res.status(400).send({ message: error.message });
  }
});

// Get as specific user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id }).lean().exec();
    return res.status(200).send({
      user,
    });
  } catch (error) {
    console.log("Something went wrong!");
    return res.status(400).send({ message: error.message });
  }
});

module.exports = router;
