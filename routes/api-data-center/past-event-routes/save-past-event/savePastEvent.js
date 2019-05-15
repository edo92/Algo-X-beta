const collectFighterStats = require('../../../../scrapeData/pastEvents/scrapeFighterStats/scrapeFighterStats');
const savePastEvent = require('../../../controller/savePastEvent');
const saveFighterStats = require('../../../controller/saveFighterStats');

module.exports = async ( io, event ) => {
    let { eventInfo } = event;
    let id = event.someId;

    if( eventInfo ){
        try{
            let fighterStats = await collectFighterStats( eventInfo.url, feedBack ); // scrape fighter stats
            console.log('fighterStats', fighterStats )
            let saveStats = await saveFighterStats( fighterStats ); // save scraped fighter's stats (diff doc)
            let savedData = await savePastEvent( event ); //save event fighters and stats
            feedBack({ success: 'saved' });
        } catch( err ) { throw err };
    }
    
    function feedBack( data ){
        io.sockets.in( id ).emit( 'saveEvent', data );
    };    
};

 