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
    console.log(req.body);
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
route.delete("/cart/delete/:cartId",(req,res)=>{
    const id = req.params.cartId;
    console.log(id);
    const cartdata = CartSet.remove({ _id: id });

    Promise.all([cartdata]).then(result => {
        console.log(result);
        res.status(200).json({
            message: 'deleted',
        });
    }).catch(err => {
        console.error(err);
        res.status(500).json({
            error: err
        });
    });
})

module.exports = route; 