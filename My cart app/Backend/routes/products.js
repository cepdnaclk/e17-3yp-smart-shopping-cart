const express = require("express");

const route = express.Router();

const showProducts = require("../models/ItemModel");
const userModel = require('../models/UserModel');
const verifyToken = require('./verifyToken');
const CartSet = require("../models/CartModel");


route.get("/", async (req, res) => {
  try {
    const productList = await showProducts.find();
    res.send(productList);
  } catch (error) {
    res.send({ message: error });
  }
});

route.get("/itemInCart", verifyToken, async (req, res) => {
  try {

    var items = []
    const user = await userModel.findById(req.user);
    const array = user.current_update.itemlist
    const cart = await CartSet.findById({ _id: user.current_update.cartId });

console.log('vvvvv')
    for (var i = 0; array.length > i; i++) {
      const x = await showProducts.find({ _id: array[i].item });

      items.push({ id: x[0]._id, name: x[0].name, price: x[0].price, count: array[i].count })
    };
    //const items = await Promise.all(promises);  

    res.send({ items: items, cart: cart.name });
  } catch (error) {
    res.send({ message: error });
  }
});

module.exports = route;
