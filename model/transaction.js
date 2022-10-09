// require mongoose
const mongoose = require("mongoose");

// create schema
const transactionSchema = mongoose.Schema({

    blockNumber:{
        type:Number,
        required:true
    },

    timeStamp: {
        type: Number,
        required: true,
    },

    hash: {
        type: String,
    },

    nonce: {
        type: String,
    },

    blockHash: {
        type: String,
    },

    transactionIndex: {
        type: String,
    },

    from: {
        type: String,
    },

    to: {
        type: String,
    },

    value: {
        type: String,
    },

    gas: {
        type: String,
    },

    isError: {
        type: String,
    },

    gasPrice: {
        type: String,
    },

    txreceipt_status: {
        type: String,
    },

    input: {
        type: String,
    },

    contractAddress: {
        type: String,
    },

    cumulativeGasUsed: {
        type: String,
    },

    gasUsed: {
        type: String,
    },

    confirmations: {
        type: String,
    },

    methodId: {
        type: String,
    },

    functionName: {
        type: String,
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required:true,
    }

},{
    timestamps: true
})

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;