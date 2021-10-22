//model for getting products from db

const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productId: {
    type: String,
  },
  title: {
    type: String,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },

  price: {
    type: String,
  },
});

module.exports = mongoose.model("Products", productSchema);
