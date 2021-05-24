const path = require('path');
const { fixName } = require('./helpers');

const rootDir = path.join(__dirname, '..');
const updatedCurrencies = require(`${rootDir}/node_modules/cryptocurrency-icons/manifest.json`);
const currencies = require('./../src/icons').default;
const newCurrencies = updatedCurrencies.filter(
  o =>
    !currencies.find(
      o2 => fixName(o.symbol.toLowerCase()) == o2.symbol.toLowerCase()
    )
);

console.log(newCurrencies);
