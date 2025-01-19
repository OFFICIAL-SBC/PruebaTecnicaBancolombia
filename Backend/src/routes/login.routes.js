const express = require('express');
const authenticate = require('../middleware/auth');
const { postUserLogged } = require('../Controllers/login.controller');

const router = express.Router();

router.post('/login', authenticate, postUserLogged);

module.exports = router;