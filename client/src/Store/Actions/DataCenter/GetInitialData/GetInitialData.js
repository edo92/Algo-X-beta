import axios from "axios";
import { ERROR_OCCURED, PAST_EVENTS, UPCOMING_EVENT } from '../actionTypes';

export const GetInitialData = () => {
    return async dispatch => {
        try{
            let pastEvent = await axios.get('/api/scrape/past/events/:page/');
            let pastSuccess = pastEvent.data.success;
            console.log('pastEvent',pastEvent)
            if( pastSuccess ) dispatch( savePastEvent( pastSuccess ));

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