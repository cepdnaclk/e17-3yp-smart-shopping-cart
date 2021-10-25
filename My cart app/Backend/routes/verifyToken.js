const jwt = require('jsonwebtoken');

const { isJwtExpired } = require('jwt-check-expiration');

const UserModel = require('../models/UserModel');

module.exports = async function isAuth(req, res, next) {
    //exports.isAuth = async (req, res, next)=>{
    //console.log('hiii');
    //IS TOKEN EXIST
    const token = req.header('auth_token');

    if (!token)
        return res.status(400).json({ success: false, message: 'Access denied!' });



    try {
        //VERIFIED?
        const verified = jwt.verify(token, process.env.token_secret);  //THIS RETURNS THE ID OF THE USER
        //console.log(token);
        //req.user = verified;
        //next();

        //FIND USER
        const user = await UserModel.findById(verified._id);

        //USER DOES NOT EXIST
        if (!user)
            return res.status(400).send({ success: false, message: 'Unauthorized access!' });

        req.user = user;
        next();


    } catch (error) {
        //console.log(error);
        //res.status(400).send('Invalid token');
        if (error === 'JsonWebTokenError')
            res.status(400).send({ success: false, message: 'Unauthorized access!' });



        else if (isJwtExpired(token)) //EXPIRED TOKEN
            res.status(401).send({ expired: true, message: 'Renew access token!' });


        else
            res.status(400).send({ success: false, message: 'Invalid token!' });
    }
};