const scrapePastEvents = require('../../../scrapeData/pastEvents/scrapeEvents/scrapeEvents');

module.exports = ( app, db ) => {
    app.get('/api/scrape/past/events/:page', async ( req, res ) => {
        try{
            let eventPage = 1//req.params.page;
            let event = await scrapePastEvents( eventPage ); // scrape past event list

            let error = event.error;
            let success = await isOwnEvent( event.success );

            if( success ) res.status( 200 ).json({ success });
            else if ( error ) res.status( 200 ).json({ error });
        } catch ( err ){
            throw err
        }
    });


    isOwnEvent = async ( data )=> {
        if( data.error ) return data.error;

        try{
            let events = await db.Events.find({});
            let ownEvent = {};

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
        } catch( error ){ return { error: "Can't Get Events" }};
    }
};