import io from 'socket.io-client';
let socket = io.connect( 'http://localhost:3000' );
//algo-x-beta.herokuapp.com

export const emitSaveUpcomeEvent = event => {
    
    let obj = { token:'xyz', someId:'someId', event };
    socket.emit('saveUpcomeEvent', obj );
}

export const listenCollectProgress = dispatch => {
    socket.on('saveUpcomeEvent', data => {
      
    }) 
};

