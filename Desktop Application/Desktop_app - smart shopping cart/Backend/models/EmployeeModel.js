const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({

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
        max : 1024
    },
    address:{
        type :String,
        required : true,
        min : 6,
        max : 1024
    },
    phoneno:{
        type :String,
        required : true,
        min : 6,
        max : 1024
    },
    nic:{
        type :String,
        required : true,
        min : 6,
        max : 1024
    },
    responsibilities:{
        type :Array,
        min : 6,
        max : 1024
    },
    mailVerified: {
        type : Boolean,
        defaultValue : true
    },
    adminVerified : {
        type : Boolean,
        defaultValue : true
    },

})

module.exports = mongoose.model('Employee',employeeSchema);