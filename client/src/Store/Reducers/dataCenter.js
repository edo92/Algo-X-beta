import { 
    PAST_EVENTS, UPCOMING_EVENT, NEXT_LOAD, ERROR_OCCURED,
    EVENT_FIGHTERS, PROGRESS_LOADING, SELECT_EVENT, EVENT_SAVED,
    HANDLE_INPUT_UPCOME, HANDLE_INPUT_PAST
} from '../Actions/DataCenter/actionTypes';
 
const initialState = {
    pastEvents: {
        pastEventsList:[],
        eventPage: 0,
        progress: 0,
        inputPoints:{},
    },
    upcomeEvent: {
        upcomeEvent: {},
        inputPoints: {}
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

    case ERROR_OCCURED:
        return {
            ...state,
            pastEvents: {
                ...state.pastEvents,
                errorMessage: action.errorOccured
            }
        }

        case HANDLE_INPUT_PAST:
        let pastInput = action.inputPoints;
        console.log('action', action)
        return {
            ...state,
            pastEvents: {
                ...state.pastEvents,
                inputPoints: {
                    ...state.pastEvents.inputPoints,
                    [pastInput.name]: {
                        ...state.pastEvents.inputPoints[pastInput.name],
                        [pastInput.placeholder]: pastInput.value,
                    },
                }
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
    
    case HANDLE_INPUT_UPCOME:
    let upcomeInput = action.inputPoints;

    console.log('action', action)
        return {
            ...state,
            upcomeEvent: {
                ...state.upcomeEvent,
                inputPoints: {
                    ...state.upcomeEvent.inputPoints,
                    [upcomeInput.name]: {
                        ...state.upcomeEvent.inputPoints[upcomeInput.name],
                        [upcomeInput.placeholder]: upcomeInput.value,
                    },
                }
            }
        }

 
        default:
            return state;
    
    };
};

export default dataCenter;