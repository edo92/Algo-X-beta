import { PAST_EVENTS, UPCOMING_EVENT
} from '../Actions/DataCenter/actionTypes';

const initialState = {
    pastEventsList:[],
    resultInput:{},
    upcomeInput:{},
    eventPage: 1,
};

const dataCenter = ( state = initialState, action )=> {
    switch( action.type ){
    
    case PAST_EVENTS:
        return{
            ...state,
            pastEventsList: [
                ...state.pastEventsList, ...action.pastEventsList
            ],
        }
   
    case UPCOMING_EVENT:
        return{
            ...state,
            fighterList: action.fighterList,
            loadingList: action.loadingList
        }

        default: return state;
    
    };
};

export default dataCenter;