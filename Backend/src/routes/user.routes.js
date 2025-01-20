const express = require('express');
const authenticate = require('../middleware/auth');
const { getUserCoins,getCountryNameByUser,getMissingCoinsByUser,addCoinToUser } = require('../Controllers/user.controller');

const router = express.Router();

router.get('/:username', authenticate, getUserCoins);
router.get('/:username/country', authenticate, getCountryNameByUser);
router.get('/:username/missing', authenticate, getMissingCoinsByUser);
router.post('/:username/coin', authenticate, addCoinToUser);

module.exports = router;