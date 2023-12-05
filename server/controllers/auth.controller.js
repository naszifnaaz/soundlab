const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET);
};

const Register = async (req, res) => {
  console.log(req.body);
  try {
    // Check if user is already registered
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({ message: "User already registered" });
    }

    // If user does not exist, register user
    user = await User.create(req.body);
    const token = generateToken(user);
    return res.status(200).send({
      email: user.email,
      role: user.role,
      token,
    });
  } catch (error) {
    console.log("Error occured during user creation");
    res.status(400).send({ message: error.message });
  }
};

const Login = async (req, res) => {
  // check if email exist
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send({ message: "Invalid credentials" });
  }

  // if email exists, check password
  const match = user.checkPassword(req.body.password);
  if (!match) {
    return res.status(400).send({ message: "Invalid credentials" });
  }

  // if password matches, generate token
  const token = generateToken(user);
  return res.status(200).send({
    email: user.email,
    role: user.role,
    token,
  });
};

module.exports = { Register, Login };
