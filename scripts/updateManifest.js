const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const updatedCurrencies = require(`${rootDir}/node_modules/cryptocurrency-icons/manifest.json`);
const currencies = require('./../src/icons').default;
const newCurrencies = updatedCurrencies.filter(o =>
  currencies.find(o2 => o.symbol.toLowerCase() === o2.symbol.toLowerCase())
);
var stringifyData = JSON.stringify(newCurrencies);
fs.writeFile('./manifest.json', stringifyData, 'utf8', function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('The file was saved!');
});
