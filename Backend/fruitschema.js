

const mongoose = require('mongoose');

const fruitSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Type: {
        type: String,
        required: true,
    },
    CreatedTime: {
        type: Date,
        default: Date.now
    },

    fileName: {
        type: String,
        required: true,
    },

    Quantity: {
        type: Number,
        required: true,
    },

    Rupees: {
        type: Number,
        required: true,
    },
    FixRupees: {
        type: Number,
        required: true,
    },

    path: {
        type: String,
    }

})

module.exports = mongoose.model("fruit", fruitSchema)