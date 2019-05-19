const genPureCombins = require('../../../sa-algorithms/generateCombins/generateCombins');
const combinSetup = require('../../../sa-algorithms/combinSetup/combinSetup');

module.exports = ( app, db ) => {
    app.post('/generate/combinations/', async ( req, res ) => {
        let list = req.body.fighters;
        let pureCombins = await genPureCombins( list );
        let combins = combinSetup( pureCombins );

        res.status( 200 ).json({ success: 'combins' });
    });
};
