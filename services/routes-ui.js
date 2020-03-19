const express = require('express');
const routes = app => {

    app.use('/', express.static('dist'));

    app.use('/', express.static('dist/index.html'));
};

module.exports = routes;
