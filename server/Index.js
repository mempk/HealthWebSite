const express = require ('express');

const app = express();

const RouterLevel1 = require('./Route');

app.use('/', RouterLevel1())




app.listen(3000);

module.exports = app;


