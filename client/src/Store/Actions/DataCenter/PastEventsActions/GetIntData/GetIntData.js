import { PAST_INT_DATA } from '../../actionTypes';
import axios from 'axios';

export const initialData = () => {
    return async dispatch => {
        let intData = await axios.get('/get/datacenter/initial/data/');
        intData = intData.data.success;

        if( intData ){
            dispatch({
                type: PAST_INT_DATA,
                collectStats: intData
            });
        };
    };
};
