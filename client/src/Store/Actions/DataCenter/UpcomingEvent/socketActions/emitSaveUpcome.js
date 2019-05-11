import io from 'socket.io-client';
let socket = io.connect( 'algo-x-beta.herokuapp.com' );

export const emitSaveUpcomeEvent = url => {
    let obj = { token:'xyz', someId:'someId', url };
    if( url ) socket.emit('saveUpcomeEvent', obj );
}

export const listenCollectProgress = dispatch => {
    socket.on('scrapeFeedBack', data => {
      
    }) 
};

