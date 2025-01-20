let storage = {
  users: [
    { id: 1, name: 'sebastian', countryId: 1, associatedCurrencies: [1, 2] },
    { id: 2, name: 'pablo', countryId: 2, associatedCurrencies: [3] },
  ],
  countries: [
    {
      id: 1,
      name: 'USA',
      allowedCurrencies: [1, 2],
      managers: [
        { name: 'TechSol SAS', associatedCurrencies: [1] },
        { name: 'TREE SAS', associatedCurrencies: [2] }
      ], 
    },
    {
      id: 2,
      name: 'Colombia',
      allowedCurrencies: [3],
      managers: [
        { name: 'Bancolombia', associatedCurrencies: [3] }
      ], 
    },
  ],
  currencies: [
    { id: 1, name: 'Bitcoin', symbol: 'BTC', valueInDollars: 42000},
    { id: 2, name: 'Ethereum', symbol: 'ETH', valueInDollars: 3200 },
    { id: 3, name: 'Solana', symbol: 'SOL', valueInDollars: 20 },
    { id: 4, name: 'CrytoPeso', symbol: 'COL', valueInDollars: 200 },
    { id: 5, name: 'CryptoDollar', symbol: 'CRD', valueInDollars: 1235 },
  ],
};

const get = (key) => {
  return storage[key];
};

const set = (key, value) => {
  storage[key] = value;
};

const findUserByName = (username) => {
  return storage.users.find(user => user.name === username);
};

module.exports = { get, set, findUserByName };