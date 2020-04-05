require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const uiRoutes = require('./routes-ui');
const mail = require('./contact');
const app = express();
const port = process.env.PORT || '8081';

(async () => {
    if (process.env.NODE_ENV !== 'production') {
        await require('./build');
    }
    app.use(bodyParser.json({ limit: '1mb' }));
    app.use(bodyParser.urlencoded({ extended: true }));
    uiRoutes(app);
    mail(app);

    //404 Errors
    app.use((req, res, next) => {
        res.status(404).redirect("/404");
    });
/*
    app.use((req, res, next) => {
        const error = new Error('Page not found');
        error.status = 404;
        next(error);
    })

    app.use((error, req, res, next) => {
        res.redirect('error-404')
        res.status(error.status || 500);
        
    })
*/

    app.locals.port = port;
    app.listen(port, function() {
        console.log('╔════════════════════════════════════════════════════════╗');
        console.log('║                                                        ║');
        console.log('║      Application running at http://localhost:' + port + "      ║");
        console.log('║                                                        ║');
        console.log('╚════════════════════════════════════════════════════════╝');
        console.log(' ');
    });

    process.on('SIGINT', () => {
        process.exit();
    });

    process.on('SIGTERM', () => {
        process.exit();
    });
})();
