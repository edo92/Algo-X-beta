import { UPCOMING_EVENT } from '../../actionTypes';
import axios from 'axios';

export const getUpcomingEvent = () => {
    return async dispatch => {
        let getEvent = await axios.get('/get/upcoming/event/');
        let upcomeEvent = getEvent.data.success;
        dispatch( upcomEventList( upcomeEvent ));
    }
}

const upcomEventList = event => {
    return {
        type: UPCOMING_EVENT,
        upcomeEvent: event
    }
}
