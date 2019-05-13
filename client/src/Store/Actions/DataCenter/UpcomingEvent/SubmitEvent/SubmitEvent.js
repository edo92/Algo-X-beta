import { emitSaveUpcomeEvent } from '../socketActions/emitSaveUpcome';
import { PROGRESS_LOADING } from '../../actionTypes';

export const submitUpcomeEvent = () => {
    return ( dispatch, getState ) => {
        dispatch( setLoadingMode());

        let { inputPoints, upcomeEvent } = getState().dataCenter.upcomeEvent;
        
        let fighterList = upcomeEvent.fighterList;
        let fighters = combineResultInputs( inputPoints, fighterList );

        let { evURL, eventDate, eventName } = upcomeEvent;
        let eventInfo = { url:evURL, eventName, eventDate };
        emitSaveUpcomeEvent({ fighters, eventInfo });
    }
}

const setLoadingMode = () => {
    return{
        type: PROGRESS_LOADING,
        loadingStatus: true,
        loadMessage:'Initializing',
        progress: 0,
        option: 'upcomeEvent'
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