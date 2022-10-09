const price = require('../model/price'); // include model 
const fetch = require('node-fetch')   // include package to fetch data from api
module.exports.index = async function(req,res){
    try{
        // fetch data from api 
        const url = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&amp;vs_currencies=inr';
        const response = await fetch(url);
        const ethereumPrice = await response.json();
        // price added to db 
        price_added = await price.create({"price":ethereumPrice.ethereum.inr});
        return res.json(201, {
            message: 'Price Added successfully!',
            price: ethereumPrice
        })
    }catch{
        return res.json(500, {
            message: 'Internal Server Error'
        })
    }
}