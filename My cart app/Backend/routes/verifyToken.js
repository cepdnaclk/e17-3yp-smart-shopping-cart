const jwt = require('jsonwebtoken');

module.exports = function auth (req, res, next){

    //IS TOKEN EXIST
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access denied!');

    //VERIFIED?
    try {
        const verified = jwt.verify(token, process.env.token_secret);  //THIS RETURNS THE ID OF THE USER
        req.user = verified;
        next();
    } catch (error) {
        res.send(400).send('Invalid token');
    }
}