import { UPCOME_EVENT } from '../actionTypes';
import axiso from 'axios';

export const getUpcomeEvent = () => {
    return async dispatch => {
        let upcomeEvent = await axiso.get('/get/upcomeing/event/');
        let success = upcomeEvent.data.success;

        if( success ){
            dispatch({
                type: UPCOME_EVENT,
                upcomeEvent: success
            });
        };
    };
};