const express = require('express');
const router = express.Router();


const employeeModel = require('../models/EmployeeModel');   //COLLECTION NAME

const { regValidation, logValidation } = require('../validation'); //function should have {}

const bcrypt = require('bcryptjs');     //ENCRYPT

const jwt = require('jsonwebtoken');

const { models } = require('mongoose');
const { func } = require('@hapi/joi');

const { sendMailToUser, sendMailToAdmin } = require('./mailVerification');

const {isJwtExpired} = require('jwt-check-expiration');

let refreshTokens = [];


//REGISTER ENDPOINT

router.post('/register', async (req, res) => {

    //VALIDATE USER
    const result = regValidation(req.body);
    if (result) return res.send(result.details[0].message).status(400); //bad req

    //CHECK USER ALREADY IN THE DATABASE
    const emailExist = await employeeModel.findOne({ email: req.body.email });
    if (emailExist) return res.send('Email already exists').status(400);

    //HASH PASSWORDS -> GENERATE SALT
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);


    //CREATE NEW USER
    const newUser = new employeeModel({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        address: req.body.address,
        phoneno: req.body.phoneno,
        nic: req.body.nic,
        responsibilities:[],
        mailVerified: false,
        adminVerified: false
    });
    try {
        console.log('function signin auth');
        const saveuser = await newUser.save();  //SAVE USER

        //EMAIL VERIFICATION TOKEN
        const emailtoken = jwt.sign({ id: saveuser._id }, process.env.EMAIL_SECRET, { expiresIn: '1d' });

        //SEND MAIL
        // sendMailToUser(req.body.email, emailtoken).then((result) => console.log('mail sent ....', result))
        //     .catch((error) => console.log(error.message));

        // sendMailToAdmin(req.body.email, emailtoken, newUser).then((result) => console.log('mail sent ....', result))
        //     .catch((error) => console.log(error.message));

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
 
    console.log('hi login back', req.body);

    //VALIDATE USER 
    const result = logValidation(req.body); 
    //console.log(result);

    if (result) { return res.send({ message: result.details[0].message }).status(400); console.log("bad req") };//bad req

    //CHECK USER ALREADY IN THE DATABASE
    const user = await employeeModel.findOne({ email: req.body.email });
    if (!user) { return res.send({ message: 'Email is not found' }).status(400); console.log('wrong email'); }

    //PASSWORD IS CORRECT
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.send({ message: 'Invalid password' }).status(400);

    //IF EMAIL IS NOT VERIFIED
    // if (!user.mailVerified) return res.send({ email: 'Please confirm your email to login' }).status(400);

    // if (!user.adminVerified) return res.send({ email: 'Admin not accepted your request yet' }).status(400);

 
    //CREATE AND ASSIGN A TOKEN
    const access_token = jwt.sign({ _id: user._id }, process.env.token_secret, { expiresIn: '1d' });//60});  //expires in 24 hrs
    const refresh_token = jwt.sign({ _id: user._id }, process.env.refresh_token_secret);//60});  //expires in 24 hrs
    refreshTokens.push(refresh_token);

    const profile = {name:user.name, address: user.address, nic : user.nic , phoneno:user.phoneno, email:user.email, roles:user.responsibilities }

    res.header({'auth_token': access_token, 'refresh_token' : refresh_token}).send({access_token, refresh_token,profile }).status(200);

  
});  


 
// CREATE NEW ACCESS TOKEN
router.get('/renewAccessToken' , async (req, res) =>{
   

    const token = req.header('refresh_token');  
    if(!token || !refreshTokens.includes(token)) {
        
        return res.status(401).json({success: false, message:'Access denied!'});
    }
    try {
        //VERIFIED?
        const verified = jwt.verify(token, process.env.refresh_token_secret);  //THIS RETURNS THE ID OF THE USER

        //FIND USER
        const user = await employeeModel.findById(verified._id);

        //USER DOES NOT EXIST
        if(!user){
            console,log('not user');
            return res.status(400).send({success: false, message:'Unauthorized access!'});
        }
        const access_token = jwt.sign({ _id: user._id }, process.env.token_secret, { expiresIn: '20s' });//60});  //expires in 24 hrs
    
        return res.header({'auth_token': access_token}).send({access_token, success:true}).status(200);
        


    } catch (error) {

       
        if(error === 'JsonWebTokenError')
            res.status(400).send({success: false, message:'Unauthorized access!'});
 
        else if (isJwtExpired(token)) //EXPIRED TOKEN
            res.send({expired: true, message:'Session expired try sign in!'}).status(220);

        else
            res.status(400).send({success: false, message:'Invalid token!'});
        
    } 
}) 



//EMAIL VERFICATION ENDPOINT  
    

router.get('/verification/:token', async (req, res) => {
    try {
        //VERIFY TOKEN
        const user = jwt.verify(req.params.token, process.env.EMAIL_SECRET);

        //UPDATE USER
        await employeeModel.updateOne({ _id: user.id }, { $set: { mailVerified: true } });

        res.end(`Email is been successfully verified`);
        console.log('pressed mail')

    } catch (error) { 
        res.send(error);
        //console.log(error);
    }
})

//  CONFIRM ADMIN ACCEPTANCE ENDPOINT

router.get('/adminAcceptance/:token', async (req, res) => { 
    try {console.log(Object.keys( req.query));

        //ROLES SET BY ADMIN
        const roles = Object.keys( req.query);

        //VERIFY TOKEN
        const user = jwt.verify(req.params.token, process.env.EMAIL_SECRET);

        //IF ADMIN WANTS TO BLOCK USER
        if(roles.includes('Block')){
        await employeeModel.deleteOne({ _id: user.id });
        res.end(`User blocked`);
        }


        //UPDATE USER ROLES
        await employeeModel.updateOne({ _id: user.id }, { $set: { adminVerified: true, responsibilities :  roles } });

        res.end(`Successfully assigned`);
        console.log('pressed mail')

    } catch (error) {
        res.send(error);
        //console.log(error);
    }
})


//TOKEN VERIFICATION FOR BOTH REFRESH AND ACCESS
router.get('/verification',  async(req, res)=>{  
    

    //IS TOKEN EXIST
    const token = req.header('auth_token'); 
    const refresh_token = req.header('refresh_token'); 

    console.log(token);  
    if(!token || !refresh_token || !refreshTokens.includes(refresh_token)) 
        return res.status(400).json({success: false, message:'Access denied!'});

   
    
    try {
        //VERIFIED?
        const verified = jwt.verify(token, process.env.token_secret);  //THIS RETURNS THE ID OF THE USER
        const verified1 = jwt.verify(refresh_token, process.env.refresh_token_secret);  //THIS RETURNS THE ID OF THE USER

        //FIND USER
        const user = await employeeModel.findById(verified._id);
        const user1 = await employeeModel.findById(verified1._id);

        //USER DOES NOT EXIST
        if(!user || !user1){console.log('2222222');
            return res.status(400).send({success: false, message:'Unauthorized access!'});
        }
    
        return res.send({success:true}).status(200); 
        


    } catch (error) { 

        console.log(error);
        if(error === 'JsonWebTokenError')
      
            res.status(400).send({success: false, message:'Unauthorized access!'});

 
         else if (isJwtExpired(refresh_token)) //EXPIRED REFRESH TOKEN
             res.status(401).send({refreshtoken_expired: true, message:'Renew access token!'});

    else if (isJwtExpired(token)) //EXPIRED REFRESH TOKEN
         res.status(202).send({accesstoken_expired: true, message:'Renew access token!'});

        else 
            res.status(400).send({success: false, message:'Invalid token!'});
        
    }
});

router.get('/logout',  async(req, res)=>{  
    refresh_token = req.header('refresh_token');
    
    if(!refresh_token)
    return res.status(400).send({success: false, message:'Unauthorized access!'});
    
    else if(!(refreshTokens.includes(refresh_token)))
    return res.status(400).send({success: false, message:'Unauthorized access!'});
    
    else {
        
        const index = refreshTokens.indexOf(refresh_token);
        refreshTokens.splice(index,1);
        console.log(refreshTokens.includes(refresh_token));
        return res.status(200).send({success: true});
    }



});








module.exports = router;