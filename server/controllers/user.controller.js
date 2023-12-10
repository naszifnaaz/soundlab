const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

// Get all users
router.get("/all", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const perPage = req.query.perPage || 25;
    const skip = (page - 1) * perPage;

    const users = await User.find().skip(skip).limit(perPage).lean().exec();
    let totalDocuments = await User.estimatedDocumentCount();
    let totalPages = Math.ceil(totalDocuments / perPage);
    return res.status(200).send({ users, totalPages });
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
