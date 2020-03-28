const express = require('express');
const routes = app => {

    app.use('/', express.static('dist'));

    app.use('/', express.static('dist/index.html'));
    app.use('/contact-success', express.static('dist/contact-success.html'));
    app.use('/error-404', express.static('dist/404.html'));

};

module.exports = routes;
