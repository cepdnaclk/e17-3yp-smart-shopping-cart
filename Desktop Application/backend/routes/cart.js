const express = require("express");
const CartSet = require("../models/CartModel");
const route = express.Router()

route.get("/cartDetails", (req, res) => {
    CartSet.find((err,result)=>{
        if (err) throw err
        res.send(result);
    })
})

module.exports = route;
// res.end(JSON.stringify([
//     {
//         "id": "1",
//         "date": "2021/10/11",
//         "name": "cart number 1",
//         "status": "using",
//         "user": "id1",
//     },
//     {
//         "id": "2",
//         "date": "2021/10/12",
//         "name": "cart number 2",
//         "status": "available",
//         "user": "-",
//     }]))