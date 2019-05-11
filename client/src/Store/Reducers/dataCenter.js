import { 
    PAST_EVENTS, UPCOMING_EVENT, NEXT_LOAD, ERROR_OCCURED,HANDLE_INPUT_PAST_EVENT,
    EVENT_FIGHTERS, PROGRESS_LOADING, SELECT_EVENT,UPCOME_EVENT_HANDLEINPUTS,
    EVENT_SAVED
} from '../Actions/DataCenter/actionTypes';
 
const initialState = {
    pastEvents: {
        pastEventsList:[],
        eventPage: 0,
        progress: 0,
        resultInput:{},
    },
    upcomeEvent: {
        upcomeEvent: {},
        inputData: {}
    }
};

const dataCenter = ( state = initialState, action )=> {
    switch( action.type ){
    
// ----------> Past Event State <----------
    case PAST_EVENTS:
        return {
            ...state,
            pastEvents: {
                ...state.pastEvents,
                pastEventsList: [
                    ...state.pastEvents.pastEventsList, ...action.pastEventsList
                ],
                eventPage: action.eventPage,
                loadNext: false
            }
        }

    case NEXT_LOAD:
        return {
            ...state,
            pastEvents: {
                ...state.pastEvents,
                loadNext: action.loadNext,
            }
        }

    case SELECT_EVENT:
        return {
            ...state,
            pastEvents: {
                ...state.pastEvents,
                loadingStatus: action.loadingStatus,
                selectedEvent: action.selectedEvent
            }
        }

    case EVENT_FIGHTERS:
        return {
            ...state,
            pastEvents: {
                ...state.pastEvents,
                fighterList: action.fighterList,
                loadingStatus: false,
                progress: 0
            }
        }     

    case EVENT_SAVED:
        return {
            ...state,
            pastEvents: {
                ...state.pastEvents,
                loadingStatus: false,
            }
        }

    case PROGRESS_LOADING:
        return{
            ...state,
            pastEvents: {
                ...state.pastEvents,
                progress: state.pastEvents.progress + action.progress,
                loadMessage: state.loadMessage !== action.loadMessage ? action.loadMessage : '',
                loadingStatus: action.loadingStatus
            }
        }

    case HANDLE_INPUT_PAST_EVENT:
        let { name, placeholder, value } = action.input;
        return {
            ...state,
            pastEvents: {
                ...state.pastEvents,
                resultInput: {
                    ...state.pastEvents.resultInput,
                    [name]: {
                        ...state.pastEvents.resultInput[name],
                        [placeholder]: value,
                    },
                }
            }
        }

    case ERROR_OCCURED:
        return {
            ...state,
            pastEvents: {
                ...state.pastEvents,
                errorMessage: action.errorOccured
            }
        }


// ----------> Upcoming Event State <----------

    case UPCOMING_EVENT:
        return {
            ...state,
            upcomeEvent: {
                ...state.upcomeEvent,
                upcomeEvent: action.upcomeEvent
            }
        }
    
    case UPCOME_EVENT_HANDLEINPUTS:
        return {
            ...state,
            upcomeEvent: {
                ...state.upcomeEvent,
                inputData: action.input
            }
        }


        default:
            return state;
    
    };
};

export default dataCenter;