import { PROGRESS_LOADING } from '../../actionTypes';
import { emitSaveEvent } from '../socketActions/emitSaveEvent';

export const submitEvent = eventInfo => {
    return async ( dispatch, getState ) => {
        dispatch( setLoadingMode());

        let eventList = combineResultInputs( getState().dataCenter );
        emitSaveEvent({ eventList, eventInfo });
    }
};

const combineResultInputs = ( state ) => {
    let input = state.resultInput;
    let list = state.fighterList;
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
        loadMessage:'hello',
        progress: 10,
    }
};