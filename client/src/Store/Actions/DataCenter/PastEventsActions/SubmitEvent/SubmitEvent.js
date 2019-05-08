import { SUBMIT_LIST } from '../../actionTypes';
import { emitSaveEvent } from '../socketActions/emitSaveEvent';

export const SubmitEvent = eventInfo => {
    return async ( dispatch, getState ) => {
        dispatch( setLoadingMode());

        let { resultInput, fighterList } = getState().dataCenter;
        let eventList = makeObject( resultInput, fighterList );

        let event = { eventList, eventInfo }
        emitSaveEvent( event );
    }
};

const makeObject = ( input, list )=> {
    let result=[];
    for( let i in list ){
        //concat fightersList with input info
        result.push({ ...input[list[i].name], ...list[i] });
    }
    return result;       
};

const setLoadingMode = () => {
    return{
        type: SUBMIT_LIST,
        loading: true,
    }
};