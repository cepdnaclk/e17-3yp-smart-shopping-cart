const express = require('express');

const route = express.Router(); 

const userCol = require('../models/UserModel');  

route.get('/', async(req, res) =>{
    try {
       const userlist = await userCol.find();
       res.send(userlist); 
    } catch (error) {
        res.send({message:error});
    }
});



module.exports = route; 