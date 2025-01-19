const localStorage = require('../localstorage');

const getCountryManagers = (req, res) => {

    const countryId = parseInt(req.params.countryId, 10);
    const countries = localStorage.get('countries');
    const country = countries.find((c) => c.id === countryId);

    if (!country) {
        return res.status(404).json({ error: 'Country not found' });
    }

    res.json({ managers: country.managers });
};

module.exports = { getCountryManagers };
