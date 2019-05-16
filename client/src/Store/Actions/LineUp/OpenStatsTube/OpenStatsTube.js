import { OPEN_STATS_TUBE } from '../actionTypes';

import axios from 'axios';

export const openStatsTube = (name) => {
    return async dispatch => {
        let stats = await axios.get(`/get/fighter/stats/${name}`);
        let fighterStats = stats.data.success;
        console.log('fighterStats', fighterStats )
        
        if( fighterStats ){
            dispatch({
                type: OPEN_STATS_TUBE,
                fighter: name,
                stats: fighterStats
            });
        }
    };
};
