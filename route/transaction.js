const express                = require('express');
const router                 = express.Router();
const transaction_controller = require('../controller/transaction_controller'); // including transaction controller

router.post('/', transaction_controller.index); // creating route 

module.exports = router;