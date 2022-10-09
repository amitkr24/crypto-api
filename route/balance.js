const express            = require('express');
const router             = express.Router();
const balance_controller = require('../controller/balance_controller'); // including controller 

router.post('/', balance_controller.index);  // adding balnce router

module.exports = router;