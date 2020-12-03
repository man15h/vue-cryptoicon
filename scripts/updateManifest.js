const fs = require('fs');
const updatedCurrencies = require('./../src/cryptoicons/manifest.json');
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
