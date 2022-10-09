const address     = require('../model/address');     // included address model
const transaction = require('../model/transaction'); // included transaction model
const fetch = require('node-fetch')   // included package
module.exports.index = async function(req,res){
    try{
        address_id = req.body.name;
        let address_check = await address.findOne({ name: address_id }); //checking if address already exists
        if (address_check){
            address_idd = address_check._id.toString() 
            transaction_check = await transaction.findOne({ "address": address_idd});
            if(transaction_check){
                removeExistTransaction =  await transaction.deleteMany({"address": address_idd}); // remove  existing transaction
            }
            
        }else{
            address_data = await address.create(req.body); //creating address
            address_idd = address_data._id.toString();
        }
        if(address_idd){
            let url = 'https://api.etherscan.io/api?module=account&action=txlist&address='+address_id+'&tag=latest&apikey=797ERM626X86Q3T5FAHDBUVF2ZK69TFE4T';
            const response = await fetch(url);
            const datas = await response.json();
            const data = datas['result'];
            
            //adding all transaction into db
            for(const da of data){
                allData = await transaction.create({
                    "blockNumber"       : da.blockNumber,
                    "timeStamp"         : da.timeStamp,
                    "hash"              : da.hash,
                    "nonce"             : da.nonce,
                    "blockHash"         : da.blockHash,
                    "transactionIndex"  : da.transactionIndex,
                    "from"              : da.from,
                    "to"                : da.to,
                    "value"             : da.value,
                    "gas"               : da.gas,
                    "gasPrice"          : da.gasPrice,
                    "isError"           : da.isError,
                    "txreceipt_status"  : da.txreceipt_status,
                    "input"             : da.input,
                    "contractAddress"   : da.contractAddress,
                    "cumulativeGasUsed" : da.cumulativeGasUsed,
                    "gasUsed"           : da.gasUsed,
                    "confirmations"     : da.confirmations,
                    "methodId"          : da.methodId,
                    "functionName"      : da.functionName,
                    "address"           : address_idd
                }); 
            }
            return res.json(201, {
                message: 'Transection created successfully!',
                data: {
                    allData:datas,
                }
            })
            
        }
        
    }catch{
        return res.json(500, {
            message: 'Internal Server Error'
        })
    }
} 