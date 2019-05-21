const generateCombins = require('../../../sa-algorithms/generateCombins/generateCombins');

module.exports = ( app, db ) => {
    app.post('/generate/combinations/', async ( req, res ) => {
        let list = req.body.fighters;
        let setting = { auto: true };

        let combins = generateCombins( list, setting );

        res.status( 200 ).json({ success: combins });
    });
};
