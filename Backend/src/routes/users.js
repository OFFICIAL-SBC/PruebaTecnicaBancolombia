const express = require('express');
const router = express.Router();
const localStorage = require('../localStorage');
const auth = require('../middleware/auth');

router.get('/', auth, (req, res) => {
  const users = localStorage.get('users');
  res.json(users);
});

module.exports = router;