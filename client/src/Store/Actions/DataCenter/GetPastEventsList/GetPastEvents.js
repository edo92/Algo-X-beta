import axios from "axios";
import { ERROR_OCCURED, PAST_EVENTS, UPCOMING_EVENT } from '../actionTypes';

export const GetPastEvents = () => {
    return async ( dispatch, getState ) => {
        let page = getState().dataCenter.eventPage + 1;
        try{
            let pastEvents = await axios.get(`/api/scrape/past/events/${page}/`);
            let pastSuccess = pastEvents.data.success;
            dispatch( savePastEvent( pastSuccess ));

            // let upcomEvent = await axios.get('/scrape/upcoming/event/');
            // let upcomeSuccess = upcomEvent.data.success;
            // if( upcomeSuccess ) dispatch( saveUpcomeEvent() );
            // console.log('upcomEvent', upcomEvent )

        } catch( error ) {
            dispatch( errorOccured('error !!!!'));
        }
    }
};

const saveUpcomeEvent = list => {
    return{
        type: UPCOMING_EVENT,
        fighterList: list
    }
}
const savePastEvent = events => {
    return{
        type: PAST_EVENTS,
        pastEventsList: events
    }
}

const errorOccured = message => {
    return{
        type: ERROR_OCCURED,
        message,
    }
}