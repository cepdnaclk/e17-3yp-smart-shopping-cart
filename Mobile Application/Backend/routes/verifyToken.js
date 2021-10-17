const jwt = require('jsonwebtoken');

const {isJwtExpired} = require('jwt-check-expiration');

const UserModel = require('../models/UserModel');

module.exports = async function isAuth (req, res, next){
//exports.isAuth = async (req, res, next)=>{

    //IS TOKEN EXIST
    const token = req.header('auth_token'); 
    console.log(token);  
    if(!token) return res.status(401).json({success: false, message:'Access denied!'});
   
    
    try {
        //VERIFIED?
        const verified = jwt.verify(token, process.env.token_secret);  //THIS RETURNS THE ID OF THE USER
        console.log(token);
        //req.user = verified;
        //next();

        //FIND USER
        const user = await UserModel.findById(verified._id);

        //USER DOES NOT EXIST
        if(!user){
            return res.status(401).send({success: false, message:'Unauthorized access!'});
        }
        req.user = user;
        next();


    } catch (error) {

        //res.status(400).send('Invalid token');
        if(error === 'JsonWebTokenError')
            res.status(400).send({success: false, message:'Unauthorized access!'});
 
        else if (isJwtExpired(token)) //EXPIRED TOKEN
            res.send({expired: true, message:'Session expired try sign in!'}).status(400);

 
        else
            res.status(400).send({success: false, message:'Invalid token!'});
        
    }
};