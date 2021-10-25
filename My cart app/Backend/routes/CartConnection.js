const express = require("express");
const CartSet = require("../models/CartModel");
const UserModel = require("../models/UserModel");
const verifyToken = require('./verifyToken');
const mqtt = require('./mqtt');

const route = express.Router()


route.get('/cart/:cardId', verifyToken, async (req, res) => {
    const cart = await CartSet.findById({ _id: req.params.cardId });
    if (!cart) res.send({ message: 'cart not found' });;
    //console.log(result.name, req.params.cardId, req.user); 

    const found = await UserModel.findById(req.user);
    const newValues = { 'current_update': { 'cartId': req.params.cardId, 'Date': new Date(), 'itemlist': [] } }

    try {

        await UserModel.updateOne({ _id: found._id }, { $set: newValues });

        res.send(cart.name).status(200);
        let v = mqtt(found._id);//req.params.cardId);

    } catch (error) {
        console.log(error);
        res.send({ message: error });
    }





});

module.exports = route;
