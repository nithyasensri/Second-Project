

const mongoose = require('mongoose');

const imageschema = mongoose.Schema({


  products: [
    {
      Name: String,
      fileName: String,
      Quantity: Number,
      FixRupees:Number,
      Rupees:Number,
      path:String
    }
  ],

CreatedTime: {
    type: Date,
    default: Date.now
},





})

module.exports = mongoose.model("Image", imageschema)