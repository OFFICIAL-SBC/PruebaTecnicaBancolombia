import { Router } from "express";
const auth = require('../middleware/auth');

import {
    getCountryManagers,

} from "../Controllers/countries.controllers";

const router = Router();

router.get('/:countryId/managers', auth, getCountryManagers);


export default router;