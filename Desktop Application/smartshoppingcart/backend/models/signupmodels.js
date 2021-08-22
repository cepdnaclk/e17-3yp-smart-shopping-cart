const mongoose = require('mongoose')


//for signup schema

const signUpTemplate = new mongoose.Schema({

    firstname:{
        type:String,
        required:true

    },
    lastname:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    address:{
        type:String,
        required:true

    },
    phonenumber:{
        type:Number,
        required:true

    },
    password:{
        type:String,
        required:true

    },
    date:{
        type:Date,
        default:Date.now
    }

})

 

module.exports = mongoose.model('mytable',signUpTemplate)       //databse name: mytable