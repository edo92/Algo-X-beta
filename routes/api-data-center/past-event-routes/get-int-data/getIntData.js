module.exports = ( app, db ) => {
    app.get('/get/datacenter/initial/data/', async (req,res) => {
        let eventSize = await db.Events.countDocuments();
        let fighterSize = await db.Statistics.findOne({});
        fighterSize = fighterSize.Fighter.length;
        
        res.status( 200 ).json({
            success: {
                fighterSize,
                eventSize
        }});
    });
};
