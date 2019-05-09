module.exports = ( app, db ) => {
    app.get('/get/datacenter/initial/data/', async (req,res) => {
        let eventSize = await db.Events.count();
        console.log('eventSize', eventSize )
    });
};
