const express = require('express');
const router = express.Router();


const userModel = require('../models/UserModel');   //COLLECTION NAME

const { regValidation, logValidation } = require('../validation'); //function should have {}

const bcrypt = require('bcryptjs');     //ENCRYPT

const jwt = require('jsonwebtoken');

const { models } = require('mongoose');
const { func } = require('@hapi/joi');

const { sendMail } = require('./mailVerification');



//REGISTER ENDPOINT

router.post('/register', async (req, res) => {

    //VALIDATE USER
    const result = regValidation(req.body);
    if (result) return res.send(result.details[0].message).status(400); //bad req

    //CHECK USER ALREADY IN THE DATABASE
    const emailExist = await userModel.findOne({ email: req.body.email });
    if (emailExist) return res.send('Email already exists').status(400);

    //HASH PASSWORDS -> GENERATE SALT
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);


    //CREATE NEW USER
    const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        verified: false
    });
    try {
        console.log('function signin auth');
        const saveuser = await newUser.save();  //SAVE USER

        //EMAIL VERIFICATION TOKEN
        const emailtoken = jwt.sign({ id: saveuser._id }, process.env.EMAIL_SECRET, { expiresIn: '1d' });

        //SEND MAIL
        sendMail(req.body.email, emailtoken).then((result) => console.log('mail sent ....', result))
            .catch((error) => console.log(error.message));

        //console .log('herrrrrrre mail');
        //res.send({user:saveuser._id});     //WITHOUT SENDING WHOLE (PASSWORD SENSITIVE) 'USER: .....'
        res.send({ email: 'Check your Email' });
        //res.send('check mail');

    } catch (err) {
        console.log(err);
        res.send(err).status(400);
    }

});


//LOGIN ENDPOINT


router.post('/login', async (req, res) => {

    console.log('hi login back');

    //VALIDATE USER 
    const result = logValidation(req.body);
    //console.log(result);

    if (result) { return res.send({ message: result.details[0].message }).status(400); console.log("bad req") };//bad req

    //CHECK USER ALREADY IN THE DATABASE
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) { return res.send({ message: 'Email is not found' }).status(400); console.log('wrong email'); }

    //PASSWORD IS CORRECT
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.send({ message: 'Invalid password' }).status(400);

    //IF EMAIL IS NOT VERIFIED
    if (!user.verified) return res.send({ email: 'Please confirm your email to login' }).status(400);

    //CREATE AND ASSIGN A TOKEN
    const token = jwt.sign({ _id: user._id }, process.env.token_secret, { expiresIn: 86400 });//60});  //expires in 24 hrs
    res.header('auth_token', token).send(token).status(200);

});



//EMAIL VERFICATION ENDPOINT


router.get('/verification/:token', async (req, res) => {
    try {
        //VERIFY TOKEN
        const user = jwt.verify(req.params.token, process.env.EMAIL_SECRET);

        //UPDATE USER
        await userModel.updateOne({ _id: user.id }, { $set: { verified: true } });

        res.end(`Email is been successfully verified`);
        //console.log('pressed mail')

    } catch (error) {
        res.send(error);
        //console.log(error);
    }
})






module.exports = router;