const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  productId: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  weight: {
    type: Number,
  },
  barcodeid: {
    type: String,
    required: true,
  },
  directadd: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Items", ItemSchema);
