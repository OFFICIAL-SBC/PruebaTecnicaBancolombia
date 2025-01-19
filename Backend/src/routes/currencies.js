const express = require('express');
const router = express.Router();
const localStorage = require('../localStorage');
const auth = require('../middleware/auth');

router.get('/', auth, (req, res) => {
  const currencies = localStorage.get('currencies');
  res.json(currencies);
});

module.exports = router;