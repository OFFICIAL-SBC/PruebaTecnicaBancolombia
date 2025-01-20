const express = require('express');
const authenticate = require('../middleware/auth');
const { getCountryCoins } = require('../Controllers/country.controller');

const router = express.Router();

router.get('/:countryname', authenticate, getCountryCoins);

module.exports = router;