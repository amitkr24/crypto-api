
const fetch = require('node-fetch') //package to fetch data from api
module.exports.index = async function(req,res){
    try{
        address_id = req.body.name; // address id
        if(address_id){

            //current price 
            let url = 'https://api.etherscan.io/api?module=account&action=txlist&address='+address_id+'&tag=latest&apikey=797ERM626X86Q3T5FAHDBUVF2ZK69TFE4T';
            const response = await fetch(url);
            const datas = await response.json();
            const data = datas['result'];
            sumIn = 0.00;
            sumOut = 0.00;

            //calculate sum in sum out value
            for(const da of data){
                if(da.from === address_id){
                    sumOut = parseFloat(sumOut) + parseFloat(da.value/1000000000000000000);
                }
                if(da.to  === address_id){
                    sumIn = parseFloat(sumIn) + parseFloat(da.value/1000000000000000000);
                }
            }
            currentPrice = sumIn - sumOut;
            //current value
            let url2 = 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=797ERM626X86Q3T5FAHDBUVF2ZK69TFE4T';
            const response_value = await fetch(url2);
            const datas_value = await response_value.json();
        
            // return output
            return res.json(201, {
                message: 'currrent balance',
                data: {
                    currentPrice:currentPrice,
                    currentValue : datas_value.result.ethusd
                }
            })
            
        }
        
    }catch{
        return res.json(500, {
            message: 'Internal Server Error'
        })
    }
} 