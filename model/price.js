const mongoose = require('mongoose');

const PriceSchema = mongoose.Schema({
    price:{
        type:String,
        required:true
    },
},{
    timestamps: true
});

const Price = mongoose.model('Price', PriceSchema); //modelling the schema
module.exports = Price;