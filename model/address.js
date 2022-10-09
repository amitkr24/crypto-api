const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    //name of the address
    name:{
        type:String,
        required:true
    },
    //relation with transaction
    transaction:{
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Transaction"
    }
},{
    timestamps: true
});

const Address = mongoose.model('Address', AddressSchema); //modelling the schema
module.exports = Address;