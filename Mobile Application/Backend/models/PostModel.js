const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{
        required : true,
        type: String
    },
    date :{
        type : Date,
        default: Date.now
    }



});

module.exports = mongoose.model('posts', postSchema);//export postschema with the name posts 
//this the name saved on the db as collection ------------ posts