const scrapePastEvents = require('../../../../scrapeData/pastEvents/scrapeEvents/scrapeEvents');

module.exports = ( app, db ) => {
    app.get('/api/scrape/past/events/:page/', async ( req, res ) => {
        try{
            let eventPage = req.params.page;
            let event = await scrapePastEvents( eventPage ); // scrape past event list

            let combinedEvents = await isOwnEvent( event.success, db );
            
            res.status( 200 ).json({ success: combinedEvents });
        } catch ( err ){
            throw err
        }
    });


    isOwnEvent = async ( events, db )=> {
        for( let i in events ){
            let isEvent = await db.Events.find({ EventName: events[i].name });

            if( isEvent.length )
                events[i].ownEvent = true;
            else 
                events[i].ownEvent = false;
        }
        return events;
    };
    
};