const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Creating user schema
const userSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    role: {
      type: String,
      enum: ["user", "admin", "super-admin"],
      required: true,
      default: "user",
    },
    verified: { type: Boolean, required: true, default: false },
    orderHistory: { type: Array, default: [] },
    cart: { type: Array, default: [] },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Hashing password using bcrypt before store
userSchema.pre("save", function (next) {
  const hash = bcrypt.hashSync(this.password);
  this.password = hash;
  next();
});

// Checking password with hashed password on login
userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// Creating user model
const User = mongoose.model("user", userSchema);

module.exports = User;
