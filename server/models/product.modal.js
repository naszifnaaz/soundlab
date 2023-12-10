const mongoose = require("mongoose");

// Creating product schema
const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    thumbnail: { type: String, required: true },
    img: { type: String, required: true },
    category: {
      type: String,
      enum: ["Earphones", "Headphones", "Speakers", "Neckbands"],
      required: true,
    },
    lifestyle: {
      type: String,
      enum: ["Fitness", "Parties", "Work", "Fun", "Audiophiles"],
      required: true,
    },
    price: { type: Number, required: true },
    offer: { type: Number, min: 0, max: 100, default: 0 },
    rating: { type: String, min: 1, max: 5, default: 5 },
    reviews: { type: Number, default: 21 },
    stock: { type: Number, default: 20 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Creating product model
const Product = mongoose.model("product", productSchema);

module.exports = Product;
