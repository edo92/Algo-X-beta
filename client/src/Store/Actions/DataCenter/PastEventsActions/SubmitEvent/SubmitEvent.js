import { PROGRESS_LOADING } from '../../actionTypes';
import { emitSaveEvent } from '../socketActions/emitSaveEvent';

export const submitPastEvent = eventInfo => {
    return async ( dispatch, getState ) => {
        dispatch( setLoadingMode());

        let { inputPoints, fighterList } = getState().dataCenter.pastEvents;
        let eventList = combineResultInputs( inputPoints, fighterList );

        emitSaveEvent({ eventList, eventInfo });
    }
};

const combineResultInputs = ( input, list ) => {
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