const localStorage = require('../localstorage');

const getUserCoins = (req, res) => {

    const username = req.user.username;
    const users = localStorage.get('users');
    const user = users.find((u) => u.name === username);
    const currencies = localStorage.get('currencies').filter((c) => user.associatedCurrencies.includes(c.id));

    if (!currencies) {
        return res.status(404).json({ error: 'Currencies not found' });
    }

    res.json({ coins: currencies });
};

const getCountryNameByUser = (req, res) => {

    const username = req.user.username;

    const user = localStorage.get('users').find((u) => u.name === username);
    const country = localStorage.get('countries').find((c) => c.id === user.countryId);

    if (!country) {
        return res.status(404).json({ error: `User's country not found` });
    }

    res.json({ country: country.name });
};

const getMissingCoinsByUser = (req, res) => {
    
    const username = req.params.username;

    const user = localStorage.get('users').find((u) => u.name === username);
    const country = localStorage.get('countries').find((c) => c.id === user.countryId);
    const currencies = localStorage.get('currencies').filter((c) => !user.associatedCurrencies.includes(c.id) && country.allowedCurrencies.includes(c.id));

    if (!currencies) {
        return res.status(404).json({ error: 'Currencies not found' });
    }

    res.json({ coins: currencies });
}

const addCoinToUser = (req, res) => {
    
    const username = req.params.username;
    const coinName = req.body.coinName;

    const user = localStorage.get('users').find((u) => u.name === username);
    currency = localStorage.get('currencies').find((c) => c.name === coinName);
    user.associatedCurrencies.push(currency.id);

    res.json({ status: true });

}

module.exports = { getUserCoins,getCountryNameByUser,getMissingCoinsByUser, addCoinToUser};
