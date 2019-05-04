const collectFighterList = require('../routes/api-data-center/past-event-routes/collect-event-fighters/collectEventFighters');

module.exports = io => {
    io.sockets.on( 'connection', socket => {
        socket.on('scrapeFeedBack', client => { // Room
            socket.join( client.someId );
            collectFighterList( io, client );
        });

        socket.on('saveEvent', client => { // Room
         
        });

        socket.on( 'disconnect', data => { // Disconnect socket 
            socket.disconnect();
        });
    }); 
};
 