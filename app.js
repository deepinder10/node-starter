const expressLoader = require('./loaders/express');
const express = require('express');

const app = express();

expressLoader(app);
module.exports = app;
