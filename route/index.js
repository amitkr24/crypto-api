const express = require('express');
const router  = express.Router();

// show this message in home url
console.log('router added');
router.get('/', function(req, res) {
    return res.json(400, {
        message: 'Please request the correct routes! Check "https://github.com/amitkr24/crypto-api/blob/main/README.md" for documentation.'
    }
)});
router.use('/transaction', require('./transaction')); //routes to all transaction reuqest
router.use('/price', require('./price')); //routes to all price reuqest
router.use('/balance', require('./balance')); //routes to all balance reuqest

module.exports = router;