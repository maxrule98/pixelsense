require('dotenv').config();
const Bundler = require('parcel-bundler');
const path = require('path');
const entryFiles = path.join(__dirname, '../src/**/*.html');
const bundleOptions = process.env.NODE_ENV === 'production' && {
    scopeHoist: true
};
const bundler = new Bundler(entryFiles, bundleOptions);

module.exports = (async () => {
    const bundle = await bundler.bundle();
    process.env.NODE_ENV === 'production' && process.exit();
    process.on('SIGINT', () => {
        process.exit();
    });

    process.on('SIGTERM', () => {
        process.exit();
    });
    return bundle;
})();
