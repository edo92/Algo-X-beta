import axios from "axios";
import { ERROR_OCCURED, PAST_EVENTS, UPCOMING_EVENT, LOADING_MORE_EVENTS } from '../../actionTypes';
import { CANT_GET_PAST_EVENTS } from '../../messageTypes';

export const GetPastEvents = () => {
    return async ( dispatch, getState ) => {
        let page = getState().dataCenter.eventPage + 1;
        try{
            dispatch( loadingMore( true )); // Load more events icon

            let pastEvents = await axios.get(`/api/scrape/past/events/${page}/`);
            
            let pastSuccess = pastEvents.data.success;
            dispatch( savePastEventsList( pastSuccess, page ));

            // let upcomEvent = await axios.get('/scrape/upcoming/event/');
            // let upcomeSuccess = upcomEvent.data.success;
            // if( upcomeSuccess ) dispatch( saveUpcomeEvent() );
            // console.log('upcomEvent', upcomEvent )

        } catch( error ) {
            dispatch( errorOccured( CANT_GET_PAST_EVENTS ));
        }
    }
};

const savePastEventsList = ( events, page ) => {
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