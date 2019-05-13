const collectFighterList = require('../routes/api-data-center/past-event-routes/collect-event-fighters/collectEventFighters');
const savePastEvent = require('../routes/api-data-center/past-event-routes/save-past-event/savePastEvent');
const saveUpcomeEvent = require('../routes/api-data-center/upcome-event-routes/save-upcome-event/saveUpcomeEvent');

module.exports = io => {
    // io.set('authorization',{
    //     secret:'hellloo',
    //     handshake: true
    // })
    io.sockets.on( 'connection', socket => {
        socket.on('scrapeFeedBack', client => { // Room
            socket.join( client.someId );
            collectFighterList( io, client );
        });

        socket.on('saveEvent', client => { // Room
            socket.join( client.someId );
            savePastEvent( io, client );
        });

        socket.on('saveUpcomeEvent', client => {
            socket.join( client.someId );
            saveUpcomeEvent( io, client );
        });
        
        socket.on( 'disconnect', data => { // Disconnect socket 
            socket.disconnect(); 
        });
    }); 
};
 