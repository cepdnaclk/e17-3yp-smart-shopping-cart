const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({

    name : { 
        type: String,
        require: true
    },
    price : { 
        type : Number,
        require : true,
    },
    stock : { 
        type : Number,
        require : true,
    },
    category : {
        type : String,
        required : true
    },
    image : {
        type : String
    }
});

module.exports = mongoose.model('Items', ItemSchema);