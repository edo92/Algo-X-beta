const collectFighterStats = require('../../../../scrapeData/pastEvents/scrapeFighterStats/scrapeFighterStats');
const saveFighterStats = require('../../../controller/saveFighterStats');
const saveUpcomeEvent = require('../../../controller/saveUpcomeEvent');

module.exports = async ( io, upcomeEvent ) => {
    let { token, someId, event } = upcomeEvent;
    let url = event.eventInfo.url;
    let id = someId;

    try{
        let fighterStats = await collectFighterStats( url, feedBack );
        let saveStats = await saveFighterStats( fighterStats );
        let saveEvent = await saveUpcomeEvent( event );

        feedBack({ success: 'saved' });
        
    } catch( error ) { throw error };  
    
    function feedBack( data ){
        io.sockets.in( id ).emit( 'saveUpcomeEvent', data );
    };
};

