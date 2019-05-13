import axios from 'axios';
import { ERROR_OCCURED, PAST_EVENTS, NEXT_LOAD } from '../../actionTypes';
import { CANT_GET_PAST_EVENTS } from '../../messageTypes';

export const getPastEvents = () => {
    return async ( dispatch, getState ) => {
        try {
            dispatch( nextLoad( true ));

            let page = getState().dataCenter.pastEvents.eventPage + 1;
            let pastEvents = await axios.get(`/api/scrape/past/events/${page}/`);

            let eventList = pastEvents.data.success;
            dispatch( savePastEvents( eventList, page ));

        } catch( error ) {
            if( error ) dispatch( errorOccured( CANT_GET_PAST_EVENTS ));
        }
    }
};

const savePastEvents = ( events, page ) => {
    return {
        type: PAST_EVENTS,
        pastEventsList: events,
        eventPage: page
    }
}
const nextLoad = isLoad => {
    return{
        type: NEXT_LOAD,
        loadNext: isLoad,
    }
}
const errorOccured = message => {
    return {
        type: ERROR_OCCURED,
        errorOccured: message,
    }
} 