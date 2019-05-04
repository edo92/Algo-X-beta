import { FIGHTER_LIST_PROGRESS, COLLECT_PAST_EVENT_FIGHTERS } from '../../actionTypes';
import io from 'socket.io-client';
let socket = io.connect( 'localhost:3001/' );

export const emitCollectFighters = ( url ) => {
    if( url ) socket.emit('scrapeFeedBack', { someId:'someId', url });
};

export const listenCollectProgress = dispatch => {
    socket.on('scrapeFeedBack', data=>{
        console.log('socket check', data )
        if( data.progress ) dispatch( progress( data.progress ));
        if( data.success ) dispatch( fighterList( data.success ));
    })
};
 
const fighterList = list => {
    return{
        type: COLLECT_PAST_EVENT_FIGHTERS,
        fighterList: list,
        loadingList: false
    }
}

const progress = feedBack => {
    return{
        type: FIGHTER_LIST_PROGRESS,
        feedBack: feedBack,
    }
};
