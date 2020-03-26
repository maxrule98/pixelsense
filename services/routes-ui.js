const express = require('express');
const routes = app => {

    app.use('/', express.static('dist'));

    app.use('/', express.static('dist/index.html'));
    app.use('/contact-success', express.static('dist/contact-success.html'));
};

module.exports = routes;
