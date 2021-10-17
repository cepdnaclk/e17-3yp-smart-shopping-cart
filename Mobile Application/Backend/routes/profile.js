const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');     //ENCRYPT

const jwt = require('jsonwebtoken');

const UserModel = require('../models/UserModel');

const verifyToken = require('./verifyToken');

router.get('/', verifyToken, async(req, res)=>{  
    const found = await UserModel.findById(req.user);

    return res.send({name:found.name , email : found.email});
});

router.get('/verification', verifyToken, async(req, res)=>{  
    return res.send({success:true}); 
});

router.put('/updatePassword', verifyToken, async(req, res) => {
    
    //CHECK USER FROM COLLECTION
    const found = await UserModel.findById(req.user);
    console.log(found, 'req', found.password);

    //CHECK PASSWORD IS CORRECT 
    const valid = await bcrypt.compare(req.body.currentpassword, found.password);
    if (!valid) return res.send({ message: 'Your current password is wrong' }).status(401);

    //findidandupadate won't work as expected 

    //HASH PASSWORDS -> GENERATE SALT
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.newpassword, salt);

    //UPDATE PASSWORD
    found.password = hashedPassword; 
    await found.save();

    //AGAIN CREATE NEW JWT WITH NEW PASSWORD
    const token = jwt.sign({ _id: found._id }, process.env.token_secret, { expiresIn: 86400 });//60});  //expires in 24 hrs
    res.header('auth_token', token).send(token).status(200);
});

module.exports =router; 
