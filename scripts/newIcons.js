const currencies = require('./../manifest.json');
const updatedCurrencies = require('./../src/cryptoicons/manifest.json');

const newCurrencies = updatedCurrencies.filter(
  o => !currencies.find(o2 => o.symbol === o2.symbol)
);
console.log(newCurrencies);
