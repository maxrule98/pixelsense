const express = require('express');
const routes = app => {

    app.use('/', express.static('dist'));

    app.use('/', express.static('dist/index.html'));
    app.use('/contact-success', express.static('dist/contact-success.html'));
    app.use('/error-404', express.static('dist/404.html'));
    app.get('*', function(req, res){
        res.status(404);
        res.redirect('/error-404');
      });
};

module.exports = routes;
