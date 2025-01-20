const localStorage = require('../localstorage');

const getCountryCoins = (req, res) => {

    console.log(req);
    const countryName = req.params.countryname;
    const countryFound = localStorage.get('countries').find((c) => c.name === countryName);
    const currencies = localStorage.get('currencies').filter((c) => countryFound.allowedCurrencies.includes(c.id));

    if (!currencies) {
        return res.status(404).json({ error: 'Currencies not found' });
    }

    res.json({ coins: currencies });
};

module.exports = { getCountryCoins};