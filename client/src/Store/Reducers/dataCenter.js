import { 
    PAST_EVENTS, UPCOMING_EVENT, LOADING_MORE_EVENTS, ERROR_OCCURED,
    COLLECT_PAST_EVENT_FIGHTERS, FIGHTER_LIST_PROGRESS, SELECTED_EVENT,
    HANDLE_INPUT_PAST_EVENT,
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
 
    case HANDLE_INPUT_PAST_EVENT:
        let { name, placeholder, value } = action.input;
        return{
            ...state,
            resultInput:{
                ...state.resultInput,
                [name]: {
                    ...state.resultInput[name],
                    [placeholder]: value,
                },
            }
        }

    case COLLECT_PAST_EVENT_FIGHTERS:
        return{
            ...state,
            fighterList: action.fighterList,
            loadingList: action.loadingList
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

    case SELECTED_EVENT:
    console.log('reducer', action )
        return{
            ...state,
            loadingList: action.loadingList,
            selectedEvent: action.selectedEvent,
        }

    
    case FIGHTER_LIST_PROGRESS:
        return{
            ...state,
            progress: state.progress + action.feedBack,
            loadMessage: state.loadMessage !== action.loadMessage ? action.loadMessage : ''
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