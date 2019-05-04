import axios from 'axios';
import { ERROR_OCCURED, PAST_EVENTS, UPCOMING_EVENT, LOADING_MORE_EVENTS } from '../../actionTypes';
import { CANT_GET_PAST_EVENTS } from '../../messageTypes';

export const GetPastEvents = () => {
    return async ( dispatch, getState ) => {
        let page = getState().dataCenter.eventPage + 1;
        try{
            // Load more events icon
            dispatch( loadingMore( true )); 

            // Collect past events list
            let pastEvents = await axios.get(`/api/scrape/past/events/${page}/`);
            
            // Save past events
            let pastSuccess = pastEvents.data.success;
            dispatch( pastEventsList( pastSuccess, page ));

        } catch( error ) {
            dispatch( errorOccured( CANT_GET_PAST_EVENTS ));
        }
    }
};

const pastEventsList = ( events, page ) => {
    return{
        type: PAST_EVENTS,
        pastEventsList: events,
        eventPage: page,
        loadNext: false
    }
}
const loadingMore = isLoad => {
    return{
        type: LOADING_MORE_EVENTS,
        loadNext: isLoad
    }
}
const errorOccured = message => {
    return{
        type: ERROR_OCCURED,
        errorOccured: message,
    }
}