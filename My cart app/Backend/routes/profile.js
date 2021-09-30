const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel');
 
 
const verifyToken = require('./verifyToken');

router.get('/', verifyToken, async(req, res)=>{  
    const found = await UserModel.findById(req.user);

    return res.send(found);
});

router.get('/verification', verifyToken, async(req, res)=>{  

    return res.send({success:true}); 
});

module.exports =router;