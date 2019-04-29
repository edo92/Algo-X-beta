
module.exports = io => {
    io.sockets.on( 'connection', socket => {
        socket.on('scrapeFeedBack', client => { // Room
      
        });

        socket.on('saveEvent', client => { // Room
         
        });

        socket.on( 'disconnect', data => { // Disconnect socket 
            socket.disconnect();
        });
    }); 
};
