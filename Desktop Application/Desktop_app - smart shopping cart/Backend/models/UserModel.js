const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name:{
        type : String,
        required : true,
        min : 6,
        max :255 
    },
    email:{
        type : String,
        required : true,
        min : 6,
        max : 255
    },
    password:{
        type :String,
        required : true,
        min : 6,
        max : 1024,
        select: false
    },
    
    verified: {
        type : Boolean,
        defaultValue : false
    }
})

module.exports = mongoose.model('User',userSchema); 