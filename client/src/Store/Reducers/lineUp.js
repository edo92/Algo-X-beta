import { UPCOME_EVENT, SELECT_OPTION, OPEN_STATS_TUBE } from '../Actions/LineUp/actionTypes';

const initialState = {
    upcomeEvent: {
        option:{}
    },
    fighterStats: {
        openTube:{},
        stats:{}
    }
};

const lineUp = ( state = initialState, action ) => {
    switch( action.type ){
    
    case UPCOME_EVENT:
        return {
            ...state,
            upcomeEvent: action.upcomeEvent
        }

    case SELECT_OPTION:
        return {
            ...state,
            upcomeEvent: {
                ...state.upcomeEvent,
                fighters: [
                    ...state.upcomeEvent.fighters,
                    ...state.upcomeEvent.fighters[action.index].option = action.option,
                ]
            }
        }

    case OPEN_STATS_TUBE: 
        return {
            ...state,
            fighterStats: {
                ...state.fighterStats,
                openTube: {
                    [action.fighter]: true
                },
                stats: {
                    fighter: action.stats,
                    opponent: false
                }
            }
        }


    default: 
        return state
    }
};

export default lineUp;