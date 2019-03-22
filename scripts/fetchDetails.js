const symbols = require('./../manifest.json');
const axios = require('axios');
const fs = require('fs');
const ignore = [
  '$PAC',
  '2GIVE',
  'BTDX',
  'CALM',
  'DNR',
  'SPANK',
  'TGCH',
  'ZILLA'
];
const fiatCurrencies = new Map([
  ['USD', 'US Dollar'],
  ['CNY', 'Chinese Yuan'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound'],
  ['JPY', 'Japanese Yen'],
  ['RUB', 'Russian Ruble']
]);
async function fetchData(symbol) {
  try {
    const { data } = await axios.get(
      `https://api.coinranking.com/v1/public/coins?symbols=${symbol}`
    );
    return data;
  } catch (error) {
    console.log(symbol, error);
    return {};
  }
}
async function processSymbol() {
  let details = [];
  for (const item of symbols) {
    if (ignore.indexOf(item.symbol) > -1) {
      console.log('ignore');
    } else {
      const { data } = await fetchData(item.symbol);
      if (data && data.coins && data.coins.length > 0) {
        const coin = data.coins[0];
        if (coin) {
          let info = {
            id: coin.id,
            symbol: item.symbol,
            name: fiatCurrencies.has(item.symbol)
              ? fiatCurrencies.get(item.symbol)
              : item.name,
            circulatingSupply: coin.circulatingSupply,
            totalSupply: coin.totalSupply,
            rank: coin.rank,
            type: fiatCurrencies.has(item.symbol) ? 'fiat' : 'crypto'
          };
          details.push(info);
        } else {
          let info = {
            id: null,
            symbol: item.symbol,
            name: item.name,
            circulatingSupply: null,
            totalSupply: null,
            rank: 2000,
            type: 'crypto'
          };
          details.push(info);
        }
      }
    }
  }
  var stringifyData = JSON.stringify(details);
  fs.writeFile('src/data.json', stringifyData, 'utf8', function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved!');
  });
}

processSymbol();
