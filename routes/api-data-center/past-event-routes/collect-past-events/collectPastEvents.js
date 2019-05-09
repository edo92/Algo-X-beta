const scrapePastEvents = require('../../../../scrapeData/pastEvents/scrapeEvents/scrapeEvents');

module.exports = ( app, db ) => {
    app.get('/api/scrape/past/events/:page/', async ( req, res ) => {
        db.Events.create({EventName:'helloo'})
        try{
            let eventPage = req.params.page;
            let event = await scrapePastEvents( eventPage ); // scrape past event list

            //let combinedEvents = await isOwnEvent( event.success );
            res.status( 200 ).json({ success: event.success });
        } catch ( err ){
            throw err
        }
    });


    isOwnEvent = async ( data )=> {
        if( data.length <= 1 ) return data;
        try{
            let events = await db.Events.find({});
            let ownEvent = {};
            if( events ){
                for( let i in events ){
                    ownEvent[events[i].EventName] = true;
                }
                for( let i in data ){
                    if( ownEvent[data[i].name] ){
                        data[i].ownEvent = true;
                    } else {
                        data[i].ownEvent = false;
                    }
                }
                return data;
            }else {
                return data;
            }
        } catch( error ){ return { error: "Can't Get Events" }};
    }
};