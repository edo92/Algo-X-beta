import { SELECTED_EVENT } from '../../actionTypes';
import { emitCollectFighters } from '../socketActions/index';

export const GetEventFighters = ( url, eventName ) => {
    return dispatch => {
         // Set collect fighter-list Progress 
        dispatch( loading( eventName ));
        
        // emit to collect past event fighters list
        emitCollectFighters( url ); 
    }
}
const loading = eventName => {
    return{
        type: SELECTED_EVENT,
        loadingList: true,
        selectedEvent: eventName,
    }
}; 