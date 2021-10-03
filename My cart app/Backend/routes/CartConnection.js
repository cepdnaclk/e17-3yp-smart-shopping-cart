const express = require("express");
const CartSet =require("../models/cartModel");
const route=express.Router()


route.get('/cart/:cardId',(req,res)=>{
    CartSet.findById({ _id: req.params.cardId},(err,result)=>{
        if(err) throw err;
        res.send(result.name);
    })
});

module.exports=route;