const mongoose = require("mongoose");

// Creating user schema
const userSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: trues },
    password: {
      type: String,
      enum: ["user", "admin", "super-admin"],
      required: true,
      default: "user",
    },
    verified: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Creating user model
const User = mongoose.model("user", userSchema);

module.exports = User;
