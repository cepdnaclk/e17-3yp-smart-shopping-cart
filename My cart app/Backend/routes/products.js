const express = require("express");

const route = express.Router();

const showProducts = require("../models/ProductModel");
route.get("/", async (req, res) => {
  try {
    const productList = await showProducts.find();
    res.send(productList);
  } catch (error) {
    res.send({ message: error });
  }
});

module.exports = route;
