const Router = require('express');
const authenticate = require('./middleware/auth');
console.log("auth", authenticate);

import {
    postUserLogged,
} from "../Controllers/login.controller";

const router = Router();

router.post('/login', authenticate, postUserLogged);


export default router;