const collectFighterList = require('../routes/api-data-center/past-event-routes/collect-event-fighters/collectEventFighters');
const savePastEvent = require('../routes/api-data-center/past-event-routes/save-past-event/savePastEvent');

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
            console.log('check socket' )
            socket.join( client.someId );
            savePastEvent( io, client );
        });

        socket.on( 'disconnect', data => { // Disconnect socket 
            socket.disconnect(); 
        });
    }); 
};
 