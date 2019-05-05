import { FIGHTER_LIST_PROGRESS, COLLECT_PAST_EVENT_FIGHTERS } from '../../actionTypes';
import io from 'socket.io-client';
let URI = window.location.href;
let socket = io.connect( 'algo-x-beta.herokuapp.com/datacenter' );

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
        if( data.progress ) dispatch( progress( data.progress, data.loadMessage ));
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

const progress = ( feedBack, loadMessage ) => {
    return{
        type: FIGHTER_LIST_PROGRESS,
        feedBack,
        loadMessage,
    }
};

