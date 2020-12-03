const updatedCurrencies = require('./../src/cryptoicons/manifest.json');
const currencies = require('./../src/icons').default;
const newCurrencies = updatedCurrencies.filter(
  o =>
    !currencies.find(o2 => o.symbol.toLowerCase() === o2.symbol.toLowerCase())
);

console.log(newCurrencies);
