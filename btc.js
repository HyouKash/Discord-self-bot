const request = require('request');

request('https://blockchain.info/ticker', function(err, res, body) {
    let json = JSON.parse(body);
    let prixbtc= (json["USD"]["buy"]);
});