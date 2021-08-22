const express = require ('express')
const router = express.Router()

const signUpTemplate = require('../models/signupmodels')

//to encrypt password use package bcrypt
const bcrypt = require('bcrypt')

router.post('/signup',async (request,response)=>{

     const saltPassword = await bcrypt.genSalt(10)  //salting
     const securePassword = await bcrypt.hash(request.body.password, saltPassword)  //hashing



    //getting each user details from request.body
    const signedUpUser = new signUpTemplate({
        
        firstname:request.body.firstname,
        lastname:request.body.lastname,
        email:request.body.email,
        address:request.body.address,
        phonenumber:request.body.phonenumber,
        password:securePassword

    })
    
    //saving each user details
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })

    //if error occurs
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router