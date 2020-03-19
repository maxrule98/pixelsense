require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const uiRoutes = require('./routes-ui');
const app = express();
const port = process.env.PORT || '8081';

(async () => {
    if (process.env.NODE_ENV !== 'production') {
        await require('./build');
    }
    app.use(bodyParser.json({ limit: '1mb' }));
    app.use(bodyParser.urlencoded({ extended: true }));
    uiRoutes(app);

    app.locals.port = port;
    app.listen(port, function() {
        console.log(
            '\x1b[33m%s\x1b[0m',
            '-----------------------------------------------'
        );
        console.log('');
        console.log(
            '\x1b[33m%s\x1b[0m',
            '  WeldNet Available at http://localhost:' + port
        );
        console.log('');
        console.log(
            '\x1b[33m%s\x1b[0m',
            '-----------------------------------------------'
        );
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
