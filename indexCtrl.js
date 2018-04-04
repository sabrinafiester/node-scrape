const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
    uri: `https://www.packtpub.com/packt/offers/free-learning`,
    transform: function (body) {
        return cheerio.load(body);
    }
};



exports.todays_book = (req, res) => {
    rp(options)
        .then(($) => {
            const todaysBook = $('.dotd-title').text().trim();
            res.send(todaysBook);
        })
        .catch((err) => {
            res.send(err);
        });
};