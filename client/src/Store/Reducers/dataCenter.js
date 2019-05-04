import { PAST_EVENTS, UPCOMING_EVENT, LOADING_MORE_EVENTS, ERROR_OCCURED
} from '../Actions/DataCenter/actionTypes';

const initialState = {
    pastEventsList:[],
    resultInput:{},
    upcomeInput:{},
    eventPage: 0,
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

    case ERROR_OCCURED:
        return{
            ...state,
            errorMessage: action.errorOccured
        }

    
        default: return state;
    
    };
};

export default dataCenter;