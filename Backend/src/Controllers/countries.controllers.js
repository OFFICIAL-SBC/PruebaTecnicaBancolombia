import { Request, Response, query } from "express";
const router = express.Router();
const localStorage = require('../localStorage');

// Obtener todas las gestoras activas en un país
export const getCountryManagers = (req, res) => {

    const countryId = parseInt(req.params.countryId, 10);
    const countries = localStorage.get('countries');
    const country = countries.find((c) => c.id === countryId);

    if (!country) {
        return res.status(404).json({ error: 'Country not found' });
    }

    res.json({ managers: country.managers });
};
