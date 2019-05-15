import io from 'socket.io-client';
let socket = io.connect( 'algo-x-beta.herokuapp.com' );
//algo-x-beta.herokuapp.com

export const emitSaveUpcomeEvent = event => {
    
    let obj = { token:'xyz', someId:'someId', event };
    socket.emit('saveUpcomeEvent', obj );
}

export const listenCollectProgress = dispatch => {
    socket.on('saveUpcomeEvent', data => {
      
    }) 
};

