import { PROGRESS_LOADING, UPCOME_EVENT_SAVED } from '../../actionTypes';
import io from 'socket.io-client';
let socket = io.connect( 'http://localhost:3000' );
//algo-x-beta.herokuapp.com

export const emitSaveUpcomeEvent = event => {
    let obj = { token:'xyz', someId:'someId', event };
    socket.emit('saveUpcomeEvent', obj );
}

export const listenCollectProgress = dispatch => {
    socket.on('saveUpcomeEvent', data => {
      if( data.progress ) {
        dispatch( progressLoading( data.progress ));
      }
      if( data.success ) {
        dispatch( eventSaved( data.success ));
      }
    });
};

const progressLoading = progress => {
  return{
      type: PROGRESS_LOADING,
      progress: progress,
      loadingStatus: true,
      loadMessage: 'Loading...',
      option: 'upcomeEvent'
  }
};

const eventSaved = success => {
  return{
      type: UPCOME_EVENT_SAVED,
      loadingStatus: false,
  }
};