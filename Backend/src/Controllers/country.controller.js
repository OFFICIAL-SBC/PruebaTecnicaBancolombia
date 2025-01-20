const localStorage = require('../localstorage');

const getCountryCoins = (req, res) => {
    
    const countryName = req.params.countryname;
    const countryFound = localStorage.get('countries').find((c) => c.name === countryName);

    if (!countryFound) {
        return res.status(404).json({ error: 'Country not found' });
    }

    const currenciesWithManagers = countryFound.allowedCurrencies.reduce((acc, currencyId) => {
        const manager = countryFound.managers.find(manager => manager.associatedCurrencies.includes(currencyId));
        acc[currencyId] = manager ? manager.name : "Manager no asignado";
        return acc;
    }, {});

    const currencies = localStorage.get('currencies')
        .filter((c) => countryFound.allowedCurrencies.includes(c.id))
        .map((c) => ({
            id: c.id,
            name: c.name,
            symbol: c.symbol,
            valueInDollars: c.valueInDollars,
            manager: currenciesWithManagers[c.id]
        }));

    if (currencies.length === 0) {
        return res.status(404).json({ error: 'Currencies not found' });
    }

    res.json({ coins: currencies });
};

module.exports = { getCountryCoins };