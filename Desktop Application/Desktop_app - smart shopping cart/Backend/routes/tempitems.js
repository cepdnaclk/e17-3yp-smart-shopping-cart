const express = require('express');

const route = express.Router();

const verifyToken = require('./verifyToken');

const itemCol = require('../models/TempItemModel');  

route.post('/add', async (req, res) => {       //GET ALL ITEMS
    console.log("call for temp item add");
    const newItem = new itemCol({
        name: req.body.name,
        price: req.body.price * req.body.weight/1000,
        category: req.body.category,
        weight: req.body.weight,
        barcode:req.body.barcode,

    });
    try {
        console.log('new Item saving');
        const saveuser = await newItem.save();  //SAVE USER


        //console .log('herrrrrrre mail');
        //res.send({user:saveuser._id});     //WITHOUT SENDING WHOLE (PASSWORD SENSITIVE) 'USER: .....'
        res.send({ success: true }).status(200);

    } catch (err) {
        console.log(err);
        res.send(err).status(400);
    }
});

module.exports = route;