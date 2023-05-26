const express = require('express');
const router = express.Router();

const { feedCreate, getAllFeed } = require('../controller/coBuddyController');

router.get('/', getAllUser);
router.post('/', createUser);

module.exports = router