import { PROGRESS_LOADING } from '../../actionTypes';
import { emitSaveEvent } from '../socketActions/emitSaveEvent';

export const submitPastEvent = eventInfo => {
    return async ( dispatch, getState ) => {
        dispatch( setLoadingMode());

        let eventList = combineResultInputs( getState );
        emitSaveEvent({ eventList, eventInfo });
    }
};

const combineResultInputs = ( getState ) => {
    let event = getState().dataCenter.pastEvents;
    let input = event.inputPoints;
    let list = event.fighterList;

    let result=[];
    for( let i in list ){
        result.push({ 
            ...input[list[i].name], 
            ...list[i]
        });
    }
    return result; 
}; 
 
const setLoadingMode = () => {
    return{
        type: PROGRESS_LOADING,
        loadingStatus: true,
        loadMessage:'Initializing',
        progress: 10,
        option: 'pastEvents'
    }
};