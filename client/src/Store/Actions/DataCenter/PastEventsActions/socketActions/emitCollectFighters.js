import { PROGRESS_LOADING, EVENT_FIGHTERS } from '../../actionTypes';
import io from 'socket.io-client';
let socket = io.connect( 'http://localhost:3000' );
//algo-x-beta.herokuapp.com

export const emitCollectFighters = ( url ) => {
    let obj = { token:'xyz', someId:'someId', url };
    if( url ) socket.emit('scrapeFeedBack', obj );
};

export const listenCollectProgress = dispatch => {
    socket.on('scrapeFeedBack', data => {
        if( data.progress ) {
            dispatch( loadingProgress( data.progress, data.loadMessage ));
        } 
        if( data.success ) {
            dispatch( fighterList( data.success ));
        }
    })
};
const fighterList = list => {
    return{
        type: EVENT_FIGHTERS,
        fighterList: list,
    }
}
const loadingProgress = ( progress, loadMessage ) => {
    return{
        type: PROGRESS_LOADING,
        progress,
        loadMessage,
        loadingStatus: true,
        option:'pastEvents'
    }
};

