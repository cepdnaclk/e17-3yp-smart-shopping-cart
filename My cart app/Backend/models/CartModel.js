const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    name:{
        type:String},
});

CartSet = mongoose.model('CartSet', cartSchema);

module.exports = CartSet;//export postschema with the name posts
//this the name saved on the db as collection ------------ posts
