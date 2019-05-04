import { 
    PAST_EVENTS, UPCOMING_EVENT, LOADING_MORE_EVENTS, ERROR_OCCURED,
    COLLECT_PAST_EVENT_FIGHTERS, FIGHTER_LIST_PROGRESS
} from '../Actions/DataCenter/actionTypes';

const initialState = {
    pastEventsList:[],
    resultInput:{},
    upcomeInput:{},
    eventPage: 0,
    progress: 0,
};

const dataCenter = ( state = initialState, action )=> {
    switch( action.type ){
    
    case PAST_EVENTS:
        return{
            ...state,
            pastEventsList: [
                ...state.pastEventsList, ...action.pastEventsList
            ],
            eventPage: action.eventPage,
            loadNext: action.loadNext
        }
 
    case LOADING_MORE_EVENTS:
        return{
            ...state,
            loadNext: action.loadNext
        }
        
    case UPCOMING_EVENT:
        return{
            ...state,
            fighterList: action.fighterList,
            loadingList: action.loadingList,
        }

    case COLLECT_PAST_EVENT_FIGHTERS:
        return{
            ...state,
            fighterList: action.fighterList,
            loadingList: action.loadingList
        }

    case FIGHTER_LIST_PROGRESS:
        return{
            ...state,
            progress: state.progress + action.feedBack
        }
        
    case ERROR_OCCURED:
        return{
            ...state,
            errorMessage: action.errorOccured
        }

    
        default: return state;
    
    };
};

export default dataCenter;