import io from 'socket.io-client';
let socket = io.connect( 'http://localhost:3001' );
//algo-x-beta.herokuapp.com

export const emitSaveEvent = ( event ) => {
    let { eventList, eventInfo }  = event;
    let emintObj = { someId:'someId', eventList, eventInfo };
    if( event ) socket.emit('saveEvent', emintObj );
};

export const listenSaveProgress = dispatch => {
    socket.on('saveEvent', data=>{
        if( data.progress ) dispatch( progress( data.progress ));
    })
};

const progress = feedBack => {
    return{
        //type: SCRAPE_PROGRESS,
        feedBack: feedBack,
    }
};
