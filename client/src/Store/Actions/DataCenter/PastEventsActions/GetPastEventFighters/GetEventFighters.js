import { SELECT_EVENT } from '../../actionTypes';
import { emitCollectFighters } from '../socketActions/index';

export const getEventFighters = ( url, eventInfo ) => {
    return dispatch => {
        dispatch( loading( eventInfo )); // Set collect fighter-list Progress 
        emitCollectFighters( url ); // emit to collect past event fighters list
    }
}
const loading = selected => {
    return{
        type: SELECT_EVENT,
        loadingStatus: true,
        selectedEvent: selected
    }
}; 