const express = require('express');
const authenticate = require('../middleware/auth');
const { getCountryManagers } = require('../Controllers/countries.controllers');

const router = express.Router();

router.get('/:countryId/managers', authenticate, getCountryManagers);

module.exports = router;