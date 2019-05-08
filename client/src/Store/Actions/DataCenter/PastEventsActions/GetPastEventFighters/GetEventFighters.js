import { SELECTED_EVENT } from '../../actionTypes';
import { emitCollectFighters } from '../socketActions/index';

export const GetEventFighters = ( url, eventInfo ) => {
    return dispatch => {
         // Set collect fighter-list Progress 
        dispatch( loading( eventInfo ));
        
        // emit to collect past event fighters list
        emitCollectFighters( url ); 
    }
}
const loading = selected => {
    return{
        type: SELECTED_EVENT,
        loadingList: true,
        selectedEvent: selected
    }
}; 