import { FIGHTER_LIST_PROGRESS, COLLECT_PAST_EVENT_FIGHTERS } from '../../actionTypes';
import io from 'socket.io-client';
let socket = io.connect( 'localhost:3001/' );

export const emitCollectFighters = ( url, dispatch ) => {
    if( url ) {
        socket.emit('scrapeFeedBack', { token:'xyz', someId:'someId', url })
        .on('scrapeFeedBack', (data)=> {

        }).on('unauthorized', (mess)=>{
            console.log('unauthorized', mess)
        })
    }
};

export const listenCollectProgress = dispatch => {
    socket.on('scrapeFeedBack', data => {
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

