//VALIDATION
const Joi = require('@hapi/joi');

const regValidation = (data) =>{


    //validation schema
const validUserSchema = Joi.object({
    name : Joi.string().min(6).required(),
    email : Joi.string().min(6).required().email(),
    password : Joi.string().min(6).required()
});

    //const result = validUserSchema.validate(req.body);
    //res.send(result);
    return validUserSchema.validate(data).error;

    
}

const logValidation = (data) =>{

    console.log('login validation form');
    //validation schema
const validUserSchema = Joi.object({
    name : Joi.string().min(6),
    email : Joi.string().min(6).required().email(),
    password : Joi.string().min(6).required()
});

    //const result = validUserSchema.validate(req.body);
    //res.send(result); 
    return validUserSchema.validate(data).error;

    
}


module.exports.regValidation = regValidation;
module.exports.logValidation = logValidation;


