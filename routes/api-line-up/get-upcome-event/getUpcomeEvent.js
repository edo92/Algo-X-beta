module.exports = ( app, db ) => {
    app.get('/get/upcomeing/event/', async ( req, res )=> {
        try {
            let upcomeEvent = await db.UpcomeEvent.findOne({});
          
            if( upcomeEvent ){
                res.status( 200 ).json({ success: {
                    eventName: upcomeEvent.EventName,
                    eventDate: upcomeEvent.EventDate,
                    fighters: upcomeEvent.Fighter,
                }});
            }
        } catch ( error ) { throw error };
    });
};