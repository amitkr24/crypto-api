const express                = require('express');
const router                 = express.Router();
const price_controller = require('../controller/price_controller'); // including controller 

router.get('/', price_controller.index);  // including router 

module.exports = router;