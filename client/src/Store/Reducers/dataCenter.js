import { 
    PAST_EVENTS, SUBMIT_EVENT, NEXT_LOAD, ERROR_OCCURED,
    EVENT_FIGHTERS, PROGRESS_LOADING, SELECT_EVENT,
    HANDLE_INPUT_PAST_EVENT, EVENT_SAVED
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
        return {
            ...state,
            pastEventsList: [
                ...state.pastEventsList, ...action.pastEventsList
            ],
            eventPage: action.eventPage,
            loadNext: false
        }

    case NEXT_LOAD:
        return {
            ...state,
            loadNext: action.loadNext,
        }

    case SELECT_EVENT:
        return {
            ...state,
            loadingStatus: action.loadingStatus,
            selectedEvent: action.selectedEvent,
        }

    case EVENT_FIGHTERS:
        return {
            ...state,
            fighterList: action.fighterList,
            loadingStatus: false,
            progress: 0
        }     

    case EVENT_SAVED:
        return {
            ...state,
            loadingStatus: false,
        }

    case PROGRESS_LOADING:
        return{
            ...state,
            progress: state.progress + action.progress,
            loadMessage: state.loadMessage !== action.loadMessage ? action.loadMessage : '',
            loadingStatus: action.loadingStatus
        }

    case HANDLE_INPUT_PAST_EVENT:
        let { name, placeholder, value } = action.input;
        return {
            ...state,
            resultInput: {
                ...state.resultInput,
                [name]: {
                    ...state.resultInput[name],
                    [placeholder]: value,
                },
            }
        }

    case ERROR_OCCURED:
        return{
            ...state,
            errorMessage: action.errorOccured
        }

    
        default:
            return state;
    
    };
};

export default dataCenter;