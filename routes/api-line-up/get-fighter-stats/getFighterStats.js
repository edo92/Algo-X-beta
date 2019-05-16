const docId = '5cd4ad19e7179a2e1964ee86';

module.exports = ( app, db ) => {
    app.get('/get/fighter/stats/:name', async ( req, res ) => {
        let fighter = req.params.name;
        let stats = await db.Statistics.find(
            { _id: docId },
            { Fighter:{ $elemMatch:{ name: fighter }}}
        );

        res.status( 200 ).json({ success: stats });
    });
};