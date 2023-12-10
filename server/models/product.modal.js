const mongoose = require("mongoose");

// Creating product schema
const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    imgs: { type: Array, required: true },
    category: {
      type: String,
      enum: ["Earphones", "Headphones", "Speakers"],
      required: true,
    },
    subCategory: { type: String },
    price: { type: Number, required: true },
    offer: { type: Number, min: 0, max: 100, default: 0 },
    rating: { type: String, min: 1, max: 5, default: 5 },
    reviews: { type: Array, default: [] },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Creating product model
const Product = mongoose.model("product", productSchema);

module.exports = Product;
