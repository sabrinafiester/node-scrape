const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

const routes = require('./indexRoute'); //importing route
routes(app); //register the route


app.listen(port);