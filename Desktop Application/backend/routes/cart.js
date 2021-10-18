const express = require("express");
const CartSet = require("../models/CartModel");
const route = express.Router()

route.get("/cart/cartDetails", (req, res) => {
    CartSet.find((err,result)=>{
        if (err) throw err
        res.send(result);
    })
})
route.post("/cart/addnewcart", (req, res) => {
    var cartName=req.body.cartName;
    var cartUser="NaN";
    var cartAvailable="free";
    var cartDate=new Date();

    const cartAdd= new CartSet({
        name: cartName,
        date: cartDate,
        status: cartAvailable,
        user: cartUser,
    })
    cartAdd.save()
        .then(data => {
            res.json(data);
            console.log(data);
        })

        //if error occurs
        .catch(error => {
            res.json(error);
            console.log(error);

        })
})

module.exports = route;