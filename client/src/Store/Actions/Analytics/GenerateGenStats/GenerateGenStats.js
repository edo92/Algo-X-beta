import axios from 'axios';

export const generateGenStats = () => {
    return async dispatch => {
        let genStats = await axios.get('/collect/genral/stats/');
    };
};