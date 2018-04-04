'use strict';
module.exports = function(app) {
    const indexCtrl = require('./indexCtrl');

    //Routes
    app.route('/')
        .get(indexCtrl.todays_book);
}