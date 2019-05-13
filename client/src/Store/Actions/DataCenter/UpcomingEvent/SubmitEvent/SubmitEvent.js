import { emitSaveUpcomeEvent } from '../socketActions/emitSaveUpcome';

export const submitUpcomeEvent = () => {
    return ( dispatch, getState ) => {
        let { inputPoints, upcomeEvent } = getState().dataCenter.upcomeEvent;
        
        let fighterList = upcomeEvent.fighterList;
        let fighters = combineResultInputs( inputPoints, fighterList );

        let { evURL, eventDate, eventName } = upcomeEvent;
        let eventInfo = { url:evURL, eventName, eventDate };
        emitSaveUpcomeEvent({ fighters, eventInfo });
    }
}


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