const express = require('express');
const routes = app => {

    app.use('/', express.static('dist'));

    app.use('/', express.static('dist/index.html'));
    app.use('/contact-success', express.static('dist/contact-success.html'));
    app.use('/404', express.static('dist/404.html'));


    //404 Errors
    app.use((req, res, next) => {
        res.status(404).redirect("/404");
    });

    /*
    //500 Error
    app.use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
    */
};

module.exports = routes;
