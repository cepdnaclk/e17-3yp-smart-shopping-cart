const mongoose = require('mongoose');

const TempItemSchema = mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
    },
    weight: {
        type: Number,
        require: true,
    },
    category: {
        type: String,
        required: true
    },
    barcode: {
        type: Number
    }
});

module.exports = mongoose.model('TempItems', TempItemSchema);