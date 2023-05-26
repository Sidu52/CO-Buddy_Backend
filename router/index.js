const express = require('express');
const router = express.Router();

router.use('/coBuddyData', require('./coBuddyData'));
module.exports = router