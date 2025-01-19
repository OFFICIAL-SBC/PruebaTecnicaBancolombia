let storage = {
    users: [
      { id: 1, name: 'John Doe', countryId: 1, associatedCurrencies: [1, 2] },
      { id: 2, name: 'Jane Smith', countryId: 2, associatedCurrencies: [3] },
    ],
    countries: [
      { id: 1, name: 'USA', allowedCurrencies: [1, 2] },
      { id: 2, name: 'Colombia', allowedCurrencies: [3] },
    ],
    currencies: [
      { id: 1, name: 'Bitcoin', symbol: 'BTC', valueInDollars: 42000 },
      { id: 2, name: 'Ethereum', symbol: 'ETH', valueInDollars: 3200 },
      { id: 3, name: 'Solana', symbol: 'SOL', valueInDollars: 20 },
    ],
  };
  
  module.exports = {
    get: (key) => storage[key] || [],
    set: (key, data) => { storage[key] = data; },
  };