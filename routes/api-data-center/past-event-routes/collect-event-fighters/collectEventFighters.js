const scrapeFighterList = require('../../../../scrapeData/pastEvents/scrapeFighterList/scrapeFighterList');

module.exports = async ( io, client ) => {
    let id = client.someId;
    let fighterList = await scrapeFighterList( client, feedBack );
    
    if( fighterList ){
        feedBack({ success: fighterList, progress: progress=100 });
    }

    function feedBack( data ){
        console.log('id--xxx', id)
        io.sockets.in( id ).emit( 'scrapeFeedBack', data );
    };
}; 

 