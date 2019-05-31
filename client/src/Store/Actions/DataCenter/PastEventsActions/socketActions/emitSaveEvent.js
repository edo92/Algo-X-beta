import { PROGRESS_LOADING, PAST_EVENT_SAVED } from '../../actionTypes';
import io from 'socket.io-client';
let socket = io.connect( 'http://localhost:3000' );
//algo-x-beta.herokuapp.com

export const emitSaveEvent = ( event ) => {
    let { eventList, eventInfo } = event;
    let emintObj = { someId:'someId', eventList, eventInfo };
    if( event ) socket.emit('saveEvent', emintObj );
};

export const listenSaveProgress = dispatch => {
    socket.on('saveEvent', data => { 
        if( data.progress ) {
            dispatch( progressLoading( data.progress ));
        }
        if( data.success ) {
            dispatch( eventSaved( data.success ));
        }
    });
};
 
const eventSaved = success => {
    return{
        type: PAST_EVENT_SAVED,
        loadingStatus: false,
    }
};
const progressLoading = progress => {
    return{
        type: PROGRESS_LOADING,
        progress: progress,
        loadingStatus: true,
        loadMessage: 'Loading...',
        option: 'pastEvents'
    }
};
