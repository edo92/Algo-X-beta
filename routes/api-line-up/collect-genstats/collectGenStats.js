const collectGenStats = require('../../../sa-algorithms/generalStats/generalStats');

module.exports = ( app, db ) => {
    app.get('/collect/genral/stats/', ( req, res ) => {
        collectGenStats();
    });
};